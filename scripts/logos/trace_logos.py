"""Trace company logos into layered polygons for 3D extrusion.

Reads the flat logos in public/company_logos/, splits each into colour layers,
traces every layer into outer contours + holes, and writes
scripts/logos/traced/<name>.json for build-logo-models.mjs to extrude.

Coordinates are normalised so the logo is LOGO_WIDTH units wide, centred on the
origin, Y up. Run from the repo root:

    python3 scripts/logos/trace_logos.py

The Prizm logo is an SVG; it is rasterised first with macOS QuickLook
(`qlmanage`) since there is no SVG renderer in the Python stdlib.
"""

import json
import subprocess
import tempfile
from pathlib import Path

import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
LOGO_DIR = ROOT / "public" / "company_logos"
OUT_DIR = Path(__file__).resolve().parent / "traced"

LOGO_WIDTH = 2.0
# Work at a high resolution so traced curves stay smooth after simplification.
TARGET_WIDTH = 3000
SIMPLIFY_PX = 1.2
MIN_AREA_FRAC = 0.00004  # drop specks left over from anti-aliasing


def hex_to_rgb(h):
    h = h.lstrip("#")
    return tuple(int(h[i : i + 2], 16) for i in (0, 2, 4))


def load_rgba(path, scale_to=TARGET_WIDTH):
    im = Image.open(path).convert("RGBA")
    bbox = im.getbbox()
    if bbox:
        im = im.crop(bbox)
    scale = scale_to / im.width
    im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    return np.array(im)


def smooth_mask(mask):
    """Blur + re-threshold to round off pixel stair-steps from upscaling."""
    blurred = cv2.GaussianBlur(mask.astype(np.uint8) * 255, (0, 0), sigmaX=2.0)
    return blurred > 127


def trace(mask, min_area, simplify=SIMPLIFY_PX):
    """Return [{outer: [[x,y]...], holes: [[[x,y]...]...]}] in pixel space."""
    contours, hierarchy = cv2.findContours(
        mask.astype(np.uint8), cv2.RETR_CCOMP, cv2.CHAIN_APPROX_NONE
    )
    if hierarchy is None:
        return []
    hierarchy = hierarchy[0]
    shapes = []
    for i, cnt in enumerate(contours):
        parent = hierarchy[i][3]
        if parent != -1:
            continue  # holes are collected under their parent
        if cv2.contourArea(cnt) < min_area:
            continue
        outer = cv2.approxPolyDP(cnt, simplify, True).reshape(-1, 2)
        holes = []
        child = hierarchy[i][2]
        while child != -1:
            if cv2.contourArea(contours[child]) >= min_area * 0.25:
                hole = cv2.approxPolyDP(contours[child], simplify, True).reshape(-1, 2)
                if len(hole) >= 3:
                    holes.append(hole)
            child = hierarchy[child][0]
        if len(outer) >= 3:
            shapes.append({"outer": outer, "holes": holes})
    return shapes


def normalise(layers, width_px, height_px):
    s = LOGO_WIDTH / width_px

    def pt(p):
        return [round((p[0] - width_px / 2) * s, 5), round((height_px / 2 - p[1]) * s, 5)]

    out = []
    for layer in layers:
        out.append(
            {
                **{k: v for k, v in layer.items() if k != "shapes"},
                "shapes": [
                    {"outer": [pt(p) for p in sh["outer"]], "holes": [[pt(p) for p in h] for h in sh["holes"]]}
                    for sh in layer["shapes"]
                ],
            }
        )
    return {"width": LOGO_WIDTH, "height": round(height_px * s, 5), "layers": out}


def single_colour(path, color, depth=0.12, min_area_frac=MIN_AREA_FRAC):
    """One-colour logos on transparency (Aha, Onlia, Alteri)."""
    rgba = load_rgba(path)
    h, w = rgba.shape[:2]
    mask = smooth_mask(rgba[..., 3] > 128)
    layers = [{"color": color, "depth": depth, "shapes": trace(mask, min_area_frac * w * h)}]
    return normalise(layers, w, h)


def shf():
    """Southampton Financial: white serif 'SF' on a dark square -> raised letters on a tile."""
    rgba = load_rgba(LOGO_DIR / "southampton_financial_inc_logo.jpeg", scale_to=2400)
    h, w = rgba.shape[:2]
    lum = rgba[..., :3].mean(axis=2)
    letters = smooth_mask(lum > 140)
    tile = np.zeros_like(letters)
    m = int(w * 0.02)
    tile[m : h - m, m : w - m] = True
    layers = [
        {"color": "#1f1f24", "depth": 0.16, "z": 0.0, "shapes": trace(tile, 1000), "bevel": 0.03},
        {"color": "#f4f1ea", "depth": 0.06, "z": 0.16, "shapes": trace(letters, MIN_AREA_FRAC * w * h)},
    ]
    return normalise(layers, w, h)


PRIZM_PALETTE = [
    "#492535", "#505b70", "#66405e", "#888780", "#964a6a", "#9f5e43",
    "#a4a967", "#bb6348", "#e0a55d", "#f4c66a", "#f7d27b",
]
PRIZM_TEXT = "#111111"


def prizm():
    """Prizm AI: each coloured facet of the mark is its own layer; wordmark in near-black."""
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(
            ["qlmanage", "-t", "-s", "4000", "-o", tmp, str(LOGO_DIR / "logo_prizmAI_clr_pos.svg")],
            check=True,
            capture_output=True,
        )
        png = next(Path(tmp).glob("*.png"))
        im = Image.open(png).convert("RGB")
    rgb = np.array(im).astype(np.int32)
    # QuickLook renders on white: crop to the non-white area.
    ink = (rgb < 235).any(axis=2)
    ys, xs = np.where(ink)
    rgb = rgb[ys.min() : ys.max() + 1, xs.min() : xs.max() + 1]
    h, w = rgb.shape[:2]

    palette = [hex_to_rgb(c) for c in PRIZM_PALETTE] + [hex_to_rgb(PRIZM_TEXT), (255, 255, 255)]
    pal = np.array(palette)
    dist = ((rgb[:, :, None, :] - pal[None, None, :, :]) ** 2).sum(axis=3)
    label = dist.argmin(axis=2)

    layers = []
    for i, color in enumerate(PRIZM_PALETTE + [PRIZM_TEXT]):
        mask = label == i
        if mask.sum() < 50:
            continue
        mask = cv2.morphologyEx(mask.astype(np.uint8), cv2.MORPH_OPEN, np.ones((3, 3), np.uint8)) > 0
        shapes = trace(mask, MIN_AREA_FRAC * w * h, simplify=1.0)
        if shapes:
            is_text = color == PRIZM_TEXT
            layers.append({"color": color, "depth": 0.1 if is_text else 0.14, "shapes": shapes})
    return normalise(layers, w, h)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    logos = {
        "aha": single_colour(LOGO_DIR / "aha+insurance+logo_blue.webp", "#0073ce"),
        # Higher threshold drops the tiny "TM" mark, which reads as noise once extruded.
        "onlia": single_colour(LOGO_DIR / "onlia.png", "#111111", min_area_frac=0.0009),
        "alteri": single_colour(LOGO_DIR / "alterilogo.webp", "#032f35"),
        "shf": shf(),
        "prizm": prizm(),
    }
    for name, data in logos.items():
        path = OUT_DIR / f"{name}.json"
        path.write_text(json.dumps(data))
        n_shapes = sum(len(l["shapes"]) for l in data["layers"])
        n_pts = sum(len(s["outer"]) + sum(len(h) for h in s["holes"]) for l in data["layers"] for s in l["shapes"])
        print(f"{name}: {len(data['layers'])} layers, {n_shapes} shapes, {n_pts} points -> {path.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
