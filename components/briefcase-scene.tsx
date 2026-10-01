"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, RoundedBox } from "@react-three/drei";
import { Group } from "three";
import { ContextLossGuard, FrameloopKick, StudioEnvironment } from "@/components/scene-helpers";

// A navy leather briefcase in the spirit of the 💼 emoji, built from primitives: rounded body,
// darker flap seam and corner caps, a curved handle, and gold clasps.

const LEATHER = "#132548"; // navy, matching the site accent
const LEATHER_DARK = "#08142d";
const GOLD = "#d9b25c";
const MAX_CONTEXT_RESTORES = 3;

function Briefcase({ animate }: { animate: boolean }) {
    const ref = useRef<Group>(null);
    const intro = useRef(0);

    useFrame(({ clock }, dt) => {
        if (!ref.current) return;
        // Ease in from a small, turned-away pose, then float and sway gently.
        intro.current = Math.min(1, intro.current + dt / 1.2);
        const e = 1 - Math.pow(1 - intro.current, 3);
        const t = clock.elapsedTime;
        ref.current.scale.setScalar(0.6 + 0.4 * e);
        ref.current.rotation.y = (1 - e) * -1.4 + (animate ? Math.sin(t * 0.6) * 0.35 : 0);
        ref.current.rotation.x = animate ? 0.12 + Math.sin(t * 0.8) * 0.04 : 0.12;
        ref.current.position.y = animate ? Math.sin(t * 1.1) * 0.06 : 0;
    });

    const leather = { color: LEATHER, roughness: 0.55, clearcoat: 0.35, clearcoatRoughness: 0.4 };
    const trim = { color: LEATHER_DARK, roughness: 0.6 };
    const gold = { color: GOLD, metalness: 1, roughness: 0.25 };

    return (
        <group ref={ref}>
            {/* Body */}
            <RoundedBox args={[2.3, 1.5, 0.62]} radius={0.12} smoothness={6}>
                <meshPhysicalMaterial {...leather} />
            </RoundedBox>
            {/* Flap seam across the upper third */}
            <RoundedBox args={[2.32, 0.05, 0.64]} radius={0.02} smoothness={2} position={[0, 0.3, 0]}>
                <meshStandardMaterial {...trim} />
            </RoundedBox>
            {/* Corner caps */}
            {[-1, 1].flatMap((sx) =>
                [-1, 1].map((sy) => (
                    <RoundedBox
                        key={`${sx}${sy}`}
                        args={[0.26, 0.26, 0.66]}
                        radius={0.08}
                        smoothness={4}
                        position={[sx * 1.04, sy * 0.63, 0]}
                    >
                        <meshStandardMaterial {...trim} />
                    </RoundedBox>
                ))
            )}
            {/* Clasps */}
            {[-0.62, 0.62].map((x) => (
                <RoundedBox key={x} args={[0.24, 0.2, 0.06]} radius={0.03} smoothness={3} position={[x, 0.3, 0.33]}>
                    <meshStandardMaterial {...gold} />
                </RoundedBox>
            ))}
            {/* Handle: an arc on two mounts */}
            <mesh position={[0, 0.86, 0]}>
                <torusGeometry args={[0.36, 0.075, 20, 48, Math.PI]} />
                <meshStandardMaterial {...trim} />
            </mesh>
            {[-0.36, 0.36].map((x) => (
                <RoundedBox key={x} args={[0.16, 0.14, 0.2]} radius={0.04} smoothness={3} position={[x, 0.8, 0]}>
                    <meshStandardMaterial {...gold} />
                </RoundedBox>
            ))}
        </group>
    );
}

export default function BriefcaseScene({ className }: { className?: string }) {
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
        <div ref={containerRef} aria-hidden className={className}>
            <Canvas
                key={canvasKey}
                dpr={[1, 1.5]}
                frameloop={onScreen ? "always" : "demand"}
                // Measure layout size, not on-screen size: the Work page shrinks this canvas with a
                // CSS transform as it docks into the nav, and must not render at that tiny size.
                resize={{ offsetSize: true }}
                camera={{ position: [0, 0.35, 6.2], fov: 30 }}
                gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
            >
                <ContextLossGuard onLost={handleContextLost} />
                <FrameloopKick active={onScreen} />
                <StudioEnvironment intensity={0.9} />
                <directionalLight position={[2.5, 4, 3]} intensity={1.6} />
                <Suspense fallback={null}>
                    <Briefcase animate={!reduceMotion} />
                </Suspense>
                <ContactShadows position={[0, -1.15, 0]} opacity={0.28} scale={5} blur={2.6} far={2} resolution={256} />
            </Canvas>
        </div>
    );
}
