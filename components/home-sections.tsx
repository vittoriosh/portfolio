"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PROFILE } from "@/lib/profile";
import { SkillGrid } from "@/components/skills-content";
import { STEPS } from "@/components/roadmap-content";


type SectionView = "work" | "skills" | "roadmap";

// Same shape as the About section on the home page: half visual, half big-type copy.
function SplitSection({
    label,
    heading,
    cta,
    onCta,
    visual,
    visualFirst = false,
    card = false,
    children,
}: {
    label: string;
    heading: React.ReactNode;
    cta?: string;
    onCta?: () => void;
    visual: React.ReactNode;
    visualFirst?: boolean;
    /** Sit the whole section on a rounded tinted card instead of the page background. */
    card?: boolean;
    children?: React.ReactNode;
}) {
    return (
        <section
            className={`grid min-h-[calc(100dvh-5rem)] grid-rows-[auto_auto] md:grid-cols-2 md:grid-rows-1 ${
                card ? "mx-3 overflow-hidden rounded-[2.5rem] bg-neutral-100 md:mx-6 md:rounded-[3.5rem]" : ""
            }`}
        >
            <div className="relative flex items-center">{visual}</div>
            {/* Text always leads on phones; on wider screens it sits on the side `visualFirst` picks. */}
            <div
                className={`order-first flex flex-col justify-center px-6 py-12 md:px-12 ${
                    visualFirst ? "md:order-last" : "md:order-first"
                }`}
            >
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">{label}</p>
                <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-tight">
                    {heading}
                </h2>
                {children}
                {cta && onCta && (
                    <button
                        type="button"
                        onClick={onCta}
                        className="mt-8 self-start text-[11px] font-semibold uppercase tracking-[0.16em] text-black/50 underline decoration-black/20 underline-offset-4 hover:text-black hover:decoration-black"
                    >
                        {cta}
                    </button>
                )}
            </div>
        </section>
    );
}

const COMPANY_LOGOS = [
    { src: "/company_logos/aha+insurance+logo_blue.webp", alt: "Aha Insurance" },
    { src: "/company_logos/onlia.png", alt: "Onlia" },
    { src: "/company_logos/alterilogo.webp", alt: "Alteri" },
    { src: "/company_logos/southampton_financial_inc_logo.jpeg", alt: "Southampton Financial" },
    { src: "/company_logos/logo_prizmAI_clr_pos.svg", alt: "Prizm AI" },
    { src: "/company_logos/portOptixLogo.png", alt: "PortOptix" },
];
// Second column starts mid-list so the two columns never show the same logo side by side.
const MARQUEE_COLUMNS = [COMPANY_LOGOS, [...COMPANY_LOGOS.slice(3), ...COMPANY_LOGOS.slice(0, 3)]];

// Logo cards drifting upward in two columns. The list is rendered twice and each column carries
// one gap of bottom padding, so translating by -50% lands exactly on the start of the copy.
function LogoMarquee() {
    return (
        <div className="absolute inset-0 grid grid-cols-2 gap-4 overflow-hidden px-6 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)] md:px-10">
            {MARQUEE_COLUMNS.map((logos, col) => (
                <div
                    key={col}
                    className="flex animate-marquee-up flex-col gap-4 pb-4 motion-reduce:animate-none"
                    style={{ animationDuration: col ? "44s" : "36s" }}
                >
                    {[...logos, ...logos].map((logo, i) => (
                        <div
                            key={`${logo.alt}-${i}`}
                            aria-hidden={i >= logos.length}
                            className="flex h-36 shrink-0 items-center justify-center rounded-3xl bg-white p-8 shadow-sm md:h-44"
                        >
                            <div className="relative h-full w-full">
                                <Image src={logo.src} alt={i < logos.length ? logo.alt : ""} fill sizes="240px" className="object-contain" />
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

// Counts up from 0 the first time it scrolls into view.
function CountUp({ to, duration = 1600 }: { to: number; duration?: number }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setValue(to);
            return;
        }
        let frame = 0;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();
                const start = performance.now();
                const tick = (now: number) => {
                    const progress = Math.min((now - start) / duration, 1);
                    setValue(Math.round(to * (1 - Math.pow(1 - progress, 3))));
                    if (progress < 1) frame = requestAnimationFrame(tick);
                };
                frame = requestAnimationFrame(tick);
            },
            { threshold: 0.6 }
        );
        observer.observe(el);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [to, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {value}
        </span>
    );
}

function CompaniesSection({ onOpen }: { onOpen: (view: SectionView) => void }) {
    return (
        <SplitSection
            card
            label="Domain experience"
            heading="Insurance tech, AI, and fintech."
            cta="More about my work"
            onCta={() => onOpen("work")}
            visual={
                <div className="relative h-[55vh] w-full md:absolute md:inset-0 md:h-auto">
                    <LogoMarquee />
                </div>
            }
        >
            <p className="mt-8 flex items-baseline gap-3">
                <span className="text-[clamp(3rem,6vw,5.5rem)] font-semibold leading-none tracking-tight">
                    <CountUp to={3} />+
                </span>
                <span className="text-[15px] text-black/45">years of experience</span>
            </p>
        </SplitSection>
    );
}

function SkillsSection({ onOpen }: { onOpen: (view: SectionView) => void }) {
    return (
        <SplitSection
            label="Skills"
            heading="Product thinking, design sense, and the engineering to ship it."
            cta="See all skills"
            onCta={() => onOpen("skills")}
            visualFirst
            visual={
                <div className="px-6 py-12 md:px-12">
                    <SkillGrid skills={PROFILE.skills} />
                </div>
            }
        />
    );
}

function RoadmapSection({ onOpen }: { onOpen: (view: SectionView) => void }) {
    return (
        <SplitSection
            label="Road map"
            heading="Eight milestones, built alongside a full-time role."
            cta="See the full road map"
            onCta={() => onOpen("roadmap")}
            visual={
                <div className="w-full px-6 md:px-12">
                <ol className="max-w-lg border-t border-black/10">
                    {STEPS.map((step, i) => (
                        <li
                            key={step.title}
                            className="grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-3 border-b border-black/10 py-3"
                        >
                            <span className="font-mono text-[11px] text-black/30">{String(i + 1).padStart(2, "0")}</span>
                            <span className="text-[15px] font-medium tracking-tight">{step.title}</span>
                            <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-black/35">
                                {step.when}
                            </span>
                        </li>
                    ))}
                </ol>
                </div>
            }
        />
    );
}

export default function HomeSections({ onOpen }: { onOpen: (view: SectionView) => void }) {
    return (
        <>
            <CompaniesSection onOpen={onOpen} />
            <SkillsSection onOpen={onOpen} />
            <RoadmapSection onOpen={onOpen} />
        </>
    );
}
