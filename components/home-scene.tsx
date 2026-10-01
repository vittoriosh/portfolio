"use client";

import { Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, useGLTF } from "@react-three/drei";
import { Color, Group, Mesh, MeshPhysicalMaterial } from "three";
import { ContextLossGuard, FrameloopKick, StudioEnvironment } from "@/components/scene-helpers";

const MODEL_URL = "/models/road_bike.glb";
// Rear axle sits at the origin; the bike is ~1.67m long, so shift it to centre the turntable.
const BIKE_OFFSET_X = -0.5;

useGLTF.preload(MODEL_URL);

function Bike({ paint, spin }: { paint: string; spin: boolean }) {
    const { scene } = useGLTF(MODEL_URL);
    const ref = useRef<Group>(null);

    useLayoutEffect(() => {
        scene.traverse((obj) => {
            const mesh = obj as Mesh;
            if (!mesh.isMesh) return;
            const mat = mesh.material as MeshPhysicalMaterial;
            if (mat.name === "FramePaint") mat.color = new Color(paint);
        });
    }, [scene, paint]);

    useFrame((_, dt) => {
        if (spin && ref.current) ref.current.rotation.y += dt * 0.22;
    });

    return (
        <group ref={ref} rotation={[0, -0.6, 0]}>
            <primitive object={scene} position={[BIKE_OFFSET_X, 0, 0]} />
        </group>
    );
}

// Keeps the whole bike in frame at any aspect ratio: ~1.9m of width and ~1.3m of height.
function CameraRig() {
    const { camera, size } = useThree();

    useLayoutEffect(() => {
        const aspect = size.width / size.height;
        const halfFov = Math.tan((30 * Math.PI) / 360);
        const distance = Math.max(3.2, 1.3 / (2 * halfFov), 1.9 / (2 * halfFov * aspect));
        camera.position.set(0, 0.5 + distance * 0.18, distance);
        camera.lookAt(0, 0.5, 0);
        camera.updateProjectionMatrix();
    }, [camera, size.width, size.height]);

    return null;
}

const MAX_CONTEXT_RESTORES = 3;

export default function HomeScene({
    dimmed = false,
    paint = "#0b1f45",
}: {
    dimmed?: boolean;
    paint?: string;
}) {
    const [reduceMotion, setReduceMotion] = useState(false);
    const [ready, setReady] = useState(false);
    const [onScreen, setOnScreen] = useState(false);
    const [canvasKey, setCanvasKey] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Give the GPU a moment to reset before creating a new context; retrying immediately can fail.
    const handleContextLost = useCallback(() => {
        setReady(false);
        window.setTimeout(() => {
            setCanvasKey((key) => (key < MAX_CONTEXT_RESTORES ? key + 1 : key));
        }, 1000);
    }, []);

    // Only render frames while the section is visible.
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduceMotion(mq.matches);
        const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    return (
        <div
            ref={containerRef}
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-opacity duration-700"
            style={{ opacity: ready ? (dimmed ? 0.15 : 1) : 0 }}
        >
            <Canvas
                key={canvasKey}
                dpr={[1, 1.5]}
                frameloop={onScreen && !dimmed && !reduceMotion ? "always" : "demand"}
                camera={{ fov: 30, near: 0.05, far: 50 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
                onCreated={() => setReady(true)}
            >
                <ContextLossGuard onLost={handleContextLost} />
                <FrameloopKick active={onScreen && !dimmed && !reduceMotion} />
                <CameraRig />
                <StudioEnvironment />
                <directionalLight position={[1.5, 3, 1.2]} intensity={2.2} />
                <Suspense fallback={null}>
                    <Bike paint={paint} spin={!dimmed && !reduceMotion} />
                </Suspense>
                <ContactShadows position={[0, 0, 0]} opacity={0.35} scale={4} blur={2.4} far={1.2} resolution={256} />
            </Canvas>
        </div>
    );
}
