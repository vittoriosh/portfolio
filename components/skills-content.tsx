"use client";

import type { IconType } from "react-icons";
import {
    SiTypescript,
    SiJavascript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiSupabase,
    SiPostgresql,
    SiVercel,
    SiFigma,
    SiGoogletagmanager,
    SiGit,
    SiJira,
    SiCursor,
    SiClaude,
    SiGooglegemini,
} from "react-icons/si";
import {
    Cloud,
    Building2,
    Target,
    Map,
    RefreshCw,
    ClipboardList,
    Users,
    Sparkles,
    MessageCircleQuestion,
    FolderSearch,
    ArrowUpRight,
} from "lucide-react";
import { PROFILE, type ProfileSkill } from "@/lib/profile";

const ICONS: Record<string, { icon: IconType | typeof Cloud; color: string }> = {
    "product-strategy": { icon: Target, color: "#2563EB" },
    roadmapping: { icon: Map, color: "#7C3AED" },
    agile: { icon: RefreshCw, color: "#059669" },
    requirements: { icon: ClipboardList, color: "#D97706" },
    stakeholder: { icon: Users, color: "#DB2777" },
    jira: { icon: SiJira, color: "#0052CC" },
    cursor: { icon: SiCursor, color: "#111111" },
    claude: { icon: SiClaude, color: "#D97757" },
    gemini: { icon: SiGooglegemini, color: "#4285F4" },
    "ai-automation": { icon: Sparkles, color: "#8B5CF6" },
    typescript: { icon: SiTypescript, color: "#3178C6" },
    javascript: { icon: SiJavascript, color: "#F0DB4F" },
    react: { icon: SiReact, color: "#61DAFB" },
    nextjs: { icon: SiNextdotjs, color: "#000000" },
    tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
    nodejs: { icon: SiNodedotjs, color: "#339933" },
    supabase: { icon: SiSupabase, color: "#3ECF8E" },
    postgresql: { icon: SiPostgresql, color: "#4169E1" },
    aws: { icon: Cloud, color: "#FF9900" },
    vercel: { icon: SiVercel, color: "#000000" },
    figma: { icon: SiFigma, color: "#F24E1E" },
    salesforce: { icon: Building2, color: "#00A1E0" },
    gtm: { icon: SiGoogletagmanager, color: "#246FDB" },
    git: { icon: SiGit, color: "#F05032" },
};

function SkillGrid({ skills }: { skills: readonly ProfileSkill[] }) {
    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {skills.map((skill) => {
                const entry = ICONS[skill.id];
                const Icon = entry?.icon ?? Cloud;
                const color = entry?.color ?? "#111111";
                return (
                    <div
                        key={skill.id}
                        className="flex flex-col items-center gap-3 rounded-[1.5rem] border border-black/10 bg-white p-5 text-center shadow-sm transition-shadow hover:shadow-md"
                    >
                        <span
                            className="flex h-12 w-12 items-center justify-center rounded-2xl"
                            style={{ backgroundColor: `${color}1A` }}
                        >
                            <Icon className="h-6 w-6" style={{ color }} />
                        </span>
                        <span>
                            <span className="block text-[13px] font-semibold tracking-tight text-black">
                                {skill.name}
                            </span>
                            <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.14em] text-black/35">
                                {skill.category}
                            </span>
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

export default function SkillsContent({ onAskAi }: { onAskAi?: () => void }) {
    const productSkills = PROFILE.skills.filter((s) => s.category === "Product");
    const aiSkills = PROFILE.skills.filter((s) => s.category === "AI");
    const technicalSkills = PROFILE.skills.filter((s) => s.category !== "Product" && s.category !== "AI");

    return (
        <div className="px-6 md:px-10 pb-16 pt-10 md:pt-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">Skills</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Tools & technologies
            </h1>
            <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
                Product management
            </p>
            <div className="mt-4">
                <SkillGrid skills={productSkills} />
            </div>

            <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
                AI
            </p>
            <div className="mt-4">
                <SkillGrid skills={aiSkills} />
            </div>

            <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/35">
                Technical
            </p>
            <div className="mt-4">
                <SkillGrid skills={technicalSkills} />
            </div>

            <div className="mt-10 flex max-w-2xl flex-col gap-4 rounded-[1.5rem] border border-black/10 bg-black/[0.02] p-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50">
                        <MessageCircleQuestion className="h-5 w-5 text-orange-600" />
                    </span>
                    <p className="text-[14px] leading-relaxed text-black/60">
                        Want to know his experience with any of these? Ask the AI, or look at{" "}
                        <span className="inline-flex items-center gap-1 font-medium text-black">
                            <FolderSearch className="h-3.5 w-3.5" />
                            project details
                        </span>{" "}
                        on the Work page.
                    </p>
                </div>
                {onAskAi && (
                    <button
                        type="button"
                        onClick={onAskAi}
                        className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-black px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-orange-600 sm:self-auto"
                    >
                        Ask Vitto AI
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>
                )}
            </div>
        </div>
    );
}
