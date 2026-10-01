"use client";

import dynamic from "next/dynamic";

const LogoScene = dynamic(() => import("@/components/logo-scene"), { ssr: false });

// Review page for the 3D company logos before they're placed on the home page.
export default function LogosPage() {
    return (
        <main className="flex h-dvh flex-col bg-white text-black">
            <p className="px-6 pt-6 text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">
                Company logos · 3D
            </p>
            <div className="min-h-0 flex-1">
                <LogoScene />
            </div>
        </main>
    );
}
