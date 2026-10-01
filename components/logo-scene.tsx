"use client";

import { Suspense, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows, useGLTF } from "@react-three/drei";
import { Box3, Group, Vector3 } from "three";
import { ContextLossGuard, FrameloopKick, StudioEnvironment } from "@/components/scene-helpers";

// Two stacks, listed bottom to top; the sturdier, squarer logos make the bases.
const COLUMNS = [
    ["shf", "alteri", "prizm"],
    ["portoptix", "aha", "onlia"],
] as const;
// Drop order alternates between the stacks: left base, right base, left middle, ...
const LOGOS = [0, 1, 2].flatMap((level) => COLUMNS.map((column, col) => ({ id: column[level], col, level })));
const MODEL_URLS = LOGOS.map((logo) => `/models/logos/${logo.id}.glb`);

const MAX_W = 2.1;
const MAX_H = 0.9;
const GAP = 0.06;
const COL_SPACING = 2.45;
// Small per-logo tilt and sideways offset so the piles look dropped, not aligned.
const TILT = [0.02, -0.03, 0.04, -0.05, -0.03, 0.04];
const SHIFT = [0, 0.04, -0.08, 0.1, 0.07, -0.06];

const DROP_INTERVAL = 0.3; // seconds between logos
const DROP_HEIGHT = 5;
const GRAVITY = 30;
const BOUNCE = 0.32;
const MAX_CONTEXT_RESTORES = 3;

MODEL_URLS.forEach((url) => useGLTF.preload(url));

type Body = { y: number; v: number; settled: boolean };

function LogoStacks({ play }: { play: boolean }) {
    const gltfs = useGLTF(MODEL_URLS);
    const { camera, size } = useThree();
    const group = useRef<Group>(null);
    const logoRefs = useRef<(Group | null)[]>([]);
    // Accumulated from frame deltas rather than the R3F clock, which resets whenever the
    // frameloop changes (e.g. scrolling the scene off screen and back).
    const playTime = useRef(0);

    // Scale every logo to a common footprint and work out where each one comes to rest.
    const { items, stackHeight } = useMemo(() => {
        const tops = COLUMNS.map(() => 0);
        const measured = gltfs.map(({ scene }, i) => {
            const box = new Box3().setFromObject(scene);
            const dims = box.getSize(new Vector3());
            const centre = box.getCenter(new Vector3());
            const scale = Math.min(MAX_W / dims.x, MAX_H / dims.y);
            return { scene, scale, offset: centre.multiplyScalar(-1), height: dims.y * scale, ...LOGOS[i] };
        });
        // Stack level by level so each logo rests on the one below it in its column.
        const placed = [...measured]
            .sort((a, b) => a.level - b.level)
            .map((item) => {
                const restY = tops[item.col] + item.height / 2;
                tops[item.col] += item.height + GAP;
                return { ...item, restY, x: (item.col - (COLUMNS.length - 1) / 2) * COL_SPACING };
            });
        const byDropOrder = LOGOS.map((logo) => placed.find((item) => item.id === logo.id)!);
        return { items: byDropOrder, stackHeight: Math.max(...tops) - GAP };
    }, [gltfs]);

    const bodies = useRef<Body[]>([]);
    if (bodies.current.length !== items.length) {
        bodies.current = items.map((item) => ({ y: item.restY + DROP_HEIGHT, v: 0, settled: false }));
    }

    useLayoutEffect(() => {
        const halfFov = Math.tan((30 * Math.PI) / 360);
        const aspect = size.width / size.height;
        const width = COL_SPACING * (COLUMNS.length - 1) + MAX_W;
        const distance = Math.max((stackHeight * 1.6) / (2 * halfFov), (width * 1.25) / (2 * halfFov * aspect));
        camera.position.set(0, 0.3, distance);
        camera.lookAt(0, 0, 0);
        camera.updateProjectionMatrix();
    }, [camera, size.width, size.height, stackHeight]);

    useFrame(({ clock }, dt) => {
        if (group.current) group.current.rotation.y = Math.sin(clock.elapsedTime * 0.45) * 0.18;
        if (!play) return;
        // Cap the step so returning from a long pause doesn't teleport anything.
        const frameTime = Math.min(dt, 0.25);
        playTime.current += frameTime;

        items.forEach((item, i) => {
            const ref = logoRefs.current[i];
            const body = bodies.current[i];
            if (!ref) return;
            if (playTime.current < i * DROP_INTERVAL) return;
            ref.visible = true;
            // Fixed sub-steps keep the fall and bounce the same at any frame rate.
            for (let t = frameTime; t > 0 && !body.settled; t -= 1 / 120) {
                const step = Math.min(t, 1 / 120);
                body.v -= GRAVITY * step;
                body.y += body.v * step;
                if (body.y <= item.restY) {
                    body.y = item.restY;
                    body.v = -body.v * BOUNCE;
                    if (body.v < 0.6) {
                        body.v = 0;
                        body.settled = true;
                    }
                }
            }
            ref.position.y = body.y;
        });
    });

    return (
        <group ref={group} position={[0, -stackHeight / 2, 0]}>
            {items.map((item, i) => (
                <group
                    key={item.id}
                    ref={(el) => {
                        logoRefs.current[i] = el;
                    }}
                    position={[item.x + SHIFT[i], item.restY + DROP_HEIGHT, 0]}
                    rotation={[0, 0, TILT[i]]}
                    visible={false}
                >
                    <group scale={item.scale}>
                        <primitive object={item.scene} position={item.offset} />
                    </group>
                </group>
            ))}
            <ContactShadows position={[0, -0.01, 0]} opacity={0.3} scale={7} blur={2.2} far={1.5} resolution={256} />
        </group>
    );
}

export default function LogoScene() {
    const [canvasKey, setCanvasKey] = useState(0);
    const [onScreen, setOnScreen] = useState(false);
    const [play, setPlay] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Only render while visible, and start the drop the first time the scene scrolls into view.
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setOnScreen(entry.isIntersecting);
                if (entry.intersectionRatio > 0.35) setPlay(true);
            },
            { threshold: [0, 0.35] }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const handleContextLost = useCallback(() => {
        window.setTimeout(() => setCanvasKey((key) => (key < MAX_CONTEXT_RESTORES ? key + 1 : key)), 1000);
    }, []);

    return (
        <div ref={containerRef} className="h-full w-full">
            <Canvas
                key={canvasKey}
                dpr={[1, 1.5]}
                frameloop={onScreen ? "always" : "demand"}
                camera={{ fov: 30, near: 0.1, far: 100 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <ContextLossGuard onLost={handleContextLost} />
                <FrameloopKick active={onScreen} />
                <StudioEnvironment intensity={0.65} />
                <directionalLight position={[2, 3, 4]} intensity={1.4} />
                <Suspense fallback={null}>
                    <LogoStacks play={play} />
                </Suspense>
            </Canvas>
        </div>
    );
}
