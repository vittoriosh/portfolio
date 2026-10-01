// Builds 3D company logo models (.glb) for the portfolio.
//
// Traced logos (scripts/logos/traced/*.json, from trace_logos.py) are extruded
// layer by layer with a small bevel and glossy PBR materials. PortOptix's logo is
// already a set of spheres and a ring, so it is modelled directly instead.
//
// Output: public/models/logos/<name>.glb — metres-ish units, logo ~2 wide,
// centred on the origin, front face toward +Z, Y up.
//
//   python3 scripts/logos/trace_logos.py
//   node scripts/logos/build-logo-models.mjs

import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as THREE from "three";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const tracedDir = path.join(here, "traced");
const outDir = path.join(root, "public/models/logos");

// GLTFExporter reads its binary output through FileReader, which Node lacks.
globalThis.FileReader ??= class {
    readAsArrayBuffer(blob) {
        blob.arrayBuffer().then((buf) => {
            this.result = buf;
            this.onloadend?.();
        });
    }
    readAsDataURL(blob) {
        blob.arrayBuffer().then((buf) => {
            this.result = `data:${blob.type || "application/octet-stream"};base64,${Buffer.from(buf).toString("base64")}`;
            this.onloadend?.();
        });
    }
};

const BEVEL = { aha: 0.004, onlia: 0.003, alteri: 0.004, shf: 0.006, prizm: 0.004 };
// Small lettering smears together when deeply extruded and viewed at an angle.
const DEPTH_SCALE = { aha: 0.35, onlia: 0.45, alteri: 0.6, shf: 1, prizm: 0.5 };

const materialCache = new Map();
function brandMaterial(hex, { metalness = 0, roughness = 0.42 } = {}) {
    const key = `${hex}-${metalness}-${roughness}`;
    if (!materialCache.has(key)) {
        const mat = new THREE.MeshPhysicalMaterial({
            color: new THREE.Color(hex),
            metalness,
            roughness,
            clearcoat: 0.5,
            clearcoatRoughness: 0.2,
        });
        mat.name = `Brand_${hex.replace("#", "")}`;
        materialCache.set(key, mat);
    }
    return materialCache.get(key);
}

function toShape({ outer, holes }) {
    const shape = new THREE.Shape(outer.map(([x, y]) => new THREE.Vector2(x, y)));
    for (const hole of holes) shape.holes.push(new THREE.Path(hole.map(([x, y]) => new THREE.Vector2(x, y))));
    return shape;
}

function buildTraced(name, data) {
    const group = new THREE.Group();
    group.name = name;
    const bevelSize = BEVEL[name] ?? 0.005;
    const depthScale = DEPTH_SCALE[name] ?? 1;

    data.layers.forEach((layer, li) => {
        const bevel = layer.bevel ?? bevelSize;
        const geometry = new THREE.ExtrudeGeometry(layer.shapes.map(toShape), {
            depth: Math.max(layer.depth * depthScale - bevel * 2, 0.005),
            bevelEnabled: true,
            bevelThickness: bevel,
            bevelSize: bevel,
            bevelSegments: 3,
        });
        geometry.computeVertexNormals();
        const mesh = new THREE.Mesh(geometry, brandMaterial(layer.color));
        mesh.name = `${name}_layer${li}`;
        mesh.position.z = (layer.z ?? 0) * depthScale + bevel;
        group.add(mesh);
    });

    centreDepth(group);
    return group;
}

function buildPortOptix() {
    const group = new THREE.Group();
    group.name = "portoptix";
    const orange = brandMaterial("#e2592b");
    const ringOrange = brandMaterial("#d9542a", { roughness: 0.38 });

    const core = new THREE.Mesh(new THREE.SphereGeometry(0.4, 64, 48), orange);
    core.name = "portoptix_core";
    group.add(core);

    // The small light "lens" on the upper right of the core.
    const lens = new THREE.Mesh(new THREE.SphereGeometry(0.07, 32, 24), brandMaterial("#e9e4df", { roughness: 0.2 }));
    lens.name = "portoptix_lens";
    lens.position.set(0.17, 0.17, 0.33);
    group.add(lens);

    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.74, 0.04, 24, 160), ringOrange);
    ring.name = "portoptix_ring";
    group.add(ring);

    [
        [0, 0.74],
        [0.74, 0],
        [0, -0.74],
        [-0.74, 0],
    ].forEach(([x, y], i) => {
        const node = new THREE.Mesh(new THREE.SphereGeometry(0.2, 48, 32), orange);
        node.name = `portoptix_node${i}`;
        node.position.set(x, y, 0);
        group.add(node);
    });

    return group;
}

// Centre the model on Z so it spins around its middle.
function centreDepth(group) {
    const box = new THREE.Box3().setFromObject(group);
    const midZ = (box.min.z + box.max.z) / 2;
    group.children.forEach((child) => (child.position.z -= midZ));
}

async function exportGlb(object, file) {
    const scene = new THREE.Scene();
    scene.add(object);
    const exporter = new GLTFExporter();
    const glb = await exporter.parseAsync(scene, { binary: true });
    await writeFile(file, Buffer.from(glb));
    let tris = 0;
    object.traverse((o) => {
        if (o.isMesh) tris += (o.geometry.index ? o.geometry.index.count : o.geometry.attributes.position.count) / 3;
    });
    console.log(`${path.relative(root, file)}  ${(glb.byteLength / 1024).toFixed(0)} KB  ${Math.round(tris).toLocaleString()} tris`);
}

await mkdir(outDir, { recursive: true });
for (const name of ["aha", "onlia", "alteri", "shf", "prizm"]) {
    const data = JSON.parse(await readFile(path.join(tracedDir, `${name}.json`), "utf8"));
    await exportGlb(buildTraced(name, data), path.join(outDir, `${name}.glb`));
}
await exportGlb(buildPortOptix(), path.join(outDir, "portoptix.glb"));
