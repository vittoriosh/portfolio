"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { PMREMGenerator } from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export function StudioEnvironment({ intensity = 1 }: { intensity?: number }) {
    const { gl, scene } = useThree();

    useEffect(() => {
        const pmrem = new PMREMGenerator(gl);
        const env = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
        scene.environment = env;
        scene.environmentIntensity = intensity;
        return () => {
            scene.environment = null;
            env.dispose();
            pmrem.dispose();
        };
    }, [gl, scene, intensity]);

    return null;
}

// If the browser drops the WebGL context (GPU pressure, too many contexts), the canvas goes
// blank and R3F doesn't recover on its own — report it so the parent can remount the Canvas.
export function ContextLossGuard({ onLost }: { onLost: () => void }) {
    const gl = useThree((state) => state.gl);

    useEffect(() => {
        const canvas = gl.domElement;
        const handleLost = (e: Event) => {
            e.preventDefault();
            onLost();
        };
        canvas.addEventListener("webglcontextlost", handleLost);
        return () => canvas.removeEventListener("webglcontextlost", handleLost);
    }, [gl, onLost]);

    return null;
}

// Switching a Canvas from frameloop="demand" to "always" doesn't restart R3F's render loop on its
// own; request one frame so the continuous loop picks up again.
export function FrameloopKick({ active }: { active: boolean }) {
    const invalidate = useThree((state) => state.invalidate);

    useEffect(() => {
        if (active) invalidate();
    }, [active, invalidate]);

    return null;
}
