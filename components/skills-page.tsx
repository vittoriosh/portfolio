"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SkillsContent from "@/components/skills-content";

// Skills: a hero like Home and Work (a big heading with the water chat card below), then the
// full categorised list.
export default function SkillsPage({ onAskAi }: { onAskAi: () => void }) {
    return (
        <>
            <section className="flex h-[calc(100dvh-5rem)] flex-col items-center justify-center px-6 pb-40 text-center md:pb-48">
                <h1 className="animate-fade-up text-[clamp(4.5rem,13vw,9.5rem)] font-semibold leading-none tracking-[-0.045em] motion-reduce:animate-none">
                    Skills.
                </h1>
                <p className="mt-4 max-w-xl text-balance text-[16px] leading-relaxed text-black/50">
                    Product thinking, design sense, and the engineering to ship it.
                </p>
                <button
                    type="button"
                    aria-label="Scroll to the full list of skills"
                    onClick={() => document.getElementById("skills-list")?.scrollIntoView({ behavior: "smooth" })}
                    className="mt-7 flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/35 hover:text-black"
                >
                    Scroll
                    <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                        <ArrowDown className="h-4 w-4" />
                    </motion.span>
                </button>
            </section>

            <div id="skills-list" className="mx-auto max-w-5xl scroll-mt-20">
                <SkillsContent onAskAi={onAskAi} />
            </div>
        </>
    );
}
