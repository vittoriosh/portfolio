"use client";

import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import { BackSide, CanvasTexture, CatmullRomCurve3, Group, PlaneGeometry, SRGBColorSpace, Vector3 } from "three";
import { ContextLossGuard, FrameloopKick, StudioEnvironment } from "@/components/scene-helpers";

// Vittorio's race bib from the Challenge Montréal Olympic triathlon, modelled as a sheet of
// gently curled paper. The print is drawn in code onto a high-res canvas (so it stays crisp),
// the four pin holes are cut out of the sheet, and a steel safety pin runs through each.

const TEX_W = 2048;
const TEX_H = 1164;
const WIDTH = 3.2;
const HEIGHT = WIDTH * (TEX_H / TEX_W);
const HOLE_R = 22;
const HOLES: [number, number][] = [
    [96, 92],
    [TEX_W - 96, 92],
    [96, TEX_H - 92],
    [TEX_W - 96, TEX_H - 92],
];
const MAX_CONTEXT_RESTORES = 3;

function curl(x: number, y: number) {
    // Bows along the width and ripples a touch, like paper pinned to a race top.
    return 0.08 * Math.cos((x / WIDTH) * Math.PI) + 0.018 * Math.sin(x * 2.2 + y * 1.4);
}

function toLocal(px: number, py: number): [number, number, number] {
    const x = (px / TEX_W - 0.5) * WIDTH;
    const y = (0.5 - py / TEX_H) * HEIGHT;
    return [x, y, curl(x, y)];
}

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
}

// Draws the bib print. Uses the site's own font (Geist) once it has loaded.
function drawBib(fontFamily: string) {
    const canvas = document.createElement("canvas");
    canvas.width = TEX_W;
    canvas.height = TEX_H;
    const ctx = canvas.getContext("2d")!;
    const font = (weight: number, size: number, italic = false) =>
        `${italic ? "italic " : ""}${weight} ${size}px ${fontFamily}`;

    // Paper.
    ctx.fillStyle = "#f7f5f0";
    ctx.fillRect(0, 0, TEX_W, TEX_H);

    // Printed colour panel with a soft diagonal sheen.
    const px = 150;
    const py = 150;
    const pw = TEX_W - px * 2;
    const ph = 660;
    const panel = ctx.createLinearGradient(px, py, px + pw, py + ph);
    panel.addColorStop(0, "#ec1c55");
    panel.addColorStop(0.55, "#d9154a");
    panel.addColorStop(1, "#b80f3d");
    roundRect(ctx, px, py, pw, ph, 28);
    ctx.fillStyle = panel;
    ctx.fill();
    ctx.save();
    ctx.clip();
    const sheen = ctx.createLinearGradient(px, py, px + pw * 0.6, py + ph);
    sheen.addColorStop(0, "rgba(255,255,255,0.14)");
    sheen.addColorStop(0.5, "rgba(255,255,255,0)");
    ctx.fillStyle = sheen;
    ctx.fillRect(px, py, pw, ph);
    ctx.restore();

    // Event header.
    ctx.fillStyle = "#ffffff";
    ctx.textBaseline = "alphabetic";
    ctx.textAlign = "center";
    ctx.font = font(800, 64, true);
    ctx.fillText("CHALLENGE", TEX_W / 2, py + 108);
    ctx.font = font(300, 50);
    ctx.fillText("MONTRÉAL", TEX_W / 2, py + 166);
    ctx.textAlign = "left";
    ctx.font = font(800, 44, true);
    ctx.fillText("TRIATHLON", px + 70, py + 120);
    ctx.textAlign = "right";
    ctx.fillText("OLYMPIQUE", px + pw - 70, py + 120);
    ctx.fillRect(px + pw - 70 - 255, py + 136, 255, 6);

    // Race number: white with a dark outline, like the real print.
    ctx.textAlign = "center";
    ctx.font = font(800, 470);
    ctx.lineJoin = "round";
    ctx.lineWidth = 14;
    ctx.strokeStyle = "#2b0a16";
    ctx.strokeText("4765", TEX_W / 2, py + ph - 70);
    ctx.fillStyle = "#ffffff";
    ctx.fillText("4765", TEX_W / 2, py + ph - 70);

    // Partner line.
    ctx.fillStyle = "#8a8780";
    ctx.font = font(500, 36);
    ctx.fillText("QUÉBEC   ·   MONTRÉAL   ·   PARC JEAN-DRAPEAU   ·   TRIATHLON QUÉBEC   ·   PTO", TEX_W / 2, py + ph + 92);

    // Athlete name.
    ctx.fillStyle = "#121212";
    ctx.font = font(800, 150);
    ctx.fillText("VITTO", TEX_W / 2, TEX_H - 120);

    // Punch the pin holes clean through.
    ctx.globalCompositeOperation = "destination-out";
    for (const [hx, hy] of HOLES) {
        ctx.beginPath();
        ctx.arc(hx, hy, HOLE_R, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";

    const texture = new CanvasTexture(canvas);
    texture.colorSpace = SRGBColorSpace;
    return texture;
}

// A safety pin as one bent steel wire: through the hole, along the paper, round the coil and
// back into the clasp.
function SafetyPin({ at, angle }: { at: [number, number, number]; angle: number }) {
    const wire = useMemo(() => {
        const L = 0.36;
        const path = new CatmullRomCurve3(
            [
                new Vector3(0, 0, -0.02), // under the paper, through the hole
                new Vector3(-L * 0.5, 0.012, 0.012),
                new Vector3(-L, 0.02, 0.02),
                new Vector3(-L - 0.035, 0.045, 0.024), // coil
                new Vector3(-L, 0.07, 0.03),
                new Vector3(-L * 0.4, 0.06, 0.03),
                new Vector3(0.05, 0.05, 0.028), // into the clasp
            ],
            false,
            "centripetal"
        );
        return path;
    }, []);
    const steel = { color: "#d4d7dd", metalness: 1, roughness: 0.18 };

    return (
        <group position={at} rotation={[0, 0, angle]}>
            <mesh>
                <tubeGeometry args={[wire, 48, 0.0075, 8, false]} />
                <meshStandardMaterial {...steel} />
            </mesh>
            {/* Clasp head */}
            <mesh position={[0.055, 0.045, 0.028]} rotation={[0, Math.PI / 2, 0]}>
                <capsuleGeometry args={[0.018, 0.05, 4, 10]} />
                <meshStandardMaterial {...steel} />
            </mesh>
        </group>
    );
}

function Bib({ animate }: { animate: boolean }) {
    const ref = useRef<Group>(null);
    const intro = useRef(0);
    const [texture, setTexture] = useState<CanvasTexture | null>(null);
    const { gl } = useThree();

    // Draw once the web font is ready so the print uses Geist, not a fallback.
    useEffect(() => {
        let cancelled = false;
        const family = getComputedStyle(document.body).fontFamily || "sans-serif";
        document.fonts.ready.then(() => {
            if (cancelled) return;
            const t = drawBib(family);
            t.anisotropy = gl.capabilities.getMaxAnisotropy();
            setTexture(t);
        });
        return () => {
            cancelled = true;
        };
    }, [gl]);

    const geometry = useMemo(() => {
        const g = new PlaneGeometry(WIDTH, HEIGHT, 64, 36);
        const pos = g.attributes.position;
        for (let i = 0; i < pos.count; i++) pos.setZ(i, curl(pos.getX(i), pos.getY(i)));
        g.computeVertexNormals();
        return g;
    }, []);

    useFrame(({ clock }, dt) => {
        if (!ref.current || !texture) return;
        intro.current = Math.min(1, intro.current + dt / 1.1);
        const e = 1 - Math.pow(1 - intro.current, 3);
        const t = clock.elapsedTime;
        ref.current.scale.setScalar(0.85 + 0.15 * e);
        ref.current.rotation.y = (1 - e) * 0.9 + (animate ? Math.sin(t * 0.5) * 0.2 - 0.14 : -0.14);
        ref.current.rotation.x = animate ? -0.08 + Math.sin(t * 0.7) * 0.035 : -0.08;
        ref.current.rotation.z = 0.035;
        ref.current.position.y = animate ? Math.sin(t * 0.9) * 0.05 : 0;
    });

    if (!texture) return null;

    return (
        <group ref={ref}>
            {/* Printed front */}
            <mesh geometry={geometry}>
                <meshStandardMaterial map={texture} alphaTest={0.5} roughness={0.78} />
            </mesh>
            {/* Plain paper back: the same sheet, drawn from behind only */}
            <mesh geometry={geometry}>
                <meshStandardMaterial color="#efece6" alphaMap={texture} alphaTest={0.5} roughness={0.9} side={BackSide} />
            </mesh>
            {HOLES.map(([hx, hy], i) => (
                <SafetyPin
                    key={i}
                    at={toLocal(hx, hy)}
                    // Pins lie inward along the edge: left ones point right, right ones point left.
                    angle={i % 2 === 0 ? Math.PI - 0.12 : 0.12}
                />
            ))}
        </group>
    );
}

export default function BibScene({ className }: { className?: string }) {
    const [canvasKey, setCanvasKey] = useState(0);
    const [onScreen, setOnScreen] = useState(true);
    const [reduceMotion, setReduceMotion] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const handleContextLost = useCallback(() => {
        window.setTimeout(() => setCanvasKey((key) => (key < MAX_CONTEXT_RESTORES ? key + 1 : key)), 1000);
    }, []);

    return (
        <div ref={containerRef} aria-label="Race bib 4765 from Challenge Montréal" role="img" className={className}>
            <Canvas
                key={canvasKey}
                dpr={[1, 1.75]}
                frameloop={onScreen ? "always" : "demand"}
                camera={{ position: [0, 0, 6.2], fov: 30 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <ContextLossGuard onLost={handleContextLost} />
                <FrameloopKick active={onScreen} />
                <StudioEnvironment intensity={0.75} />
                <directionalLight position={[2, 3, 5]} intensity={1.2} />
                <Suspense fallback={null}>
                    <Bib animate={!reduceMotion} />
                </Suspense>
                <ContactShadows position={[0, -1.2, 0]} opacity={0.2} scale={6} blur={2.8} far={2.5} resolution={256} />
            </Canvas>
        </div>
    );
}
