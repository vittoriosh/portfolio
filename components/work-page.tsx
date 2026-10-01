"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Lock } from "lucide-react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { WORKS } from "@/lib/works";

const BriefcaseScene = dynamic(() => import("@/components/briefcase-scene"), { ssr: false });
// Case studies are large and only needed once opened.
const AhaCommercialDetails = dynamic(() => import("@/components/case-studies/aha-commercial"), { ssr: false });
const RuncostDetails = dynamic(() => import("@/components/case-studies/runcost"), { ssr: false });
const HomedraftCaseStudy = dynamic(() => import("@/components/case-studies/homedraft"), { ssr: false });

type Work = (typeof WORKS)[number];

const hasCaseStudy = (work: Work) => "caseStudy" in work && Boolean(work.caseStudy);
const liveUrl = (work: Work) => ("url" in work ? work.url : undefined);
const isLocked = (work: Work) => "locked" in work && Boolean(work.locked);

const EASE = [0.16, 1, 0.3, 1] as const;

// What the window's address pill shows: the live site's domain, or the project name.
function windowLabel(work: Work) {
    const url = liveUrl(work);
    if (!url) return work.title;
    try {
        return new URL(url).hostname.replace(/^www\./, "");
    } catch {
        return work.title;
    }
}

const INTRO =
    "I've worked with companies across insurance, AI, and fintech, and built products of my own along the way. Always building.";

const smoothstep = (t: number) => t * t * (3 - 2 * t);

// The briefcase lives in a fixed overlay so a single 3D canvas can travel. Scroll progress
// moves it from its slot in the hero up into the nav's dock (#nav-dock), shrinking as it goes.
function useDockOnScroll(
    slotRef: React.RefObject<HTMLDivElement | null>,
    overlayRef: React.RefObject<HTMLDivElement | null>,
    ready: boolean
) {
    useEffect(() => {
        const root = document.querySelector<HTMLElement>("[data-scroll-root]");
        const slot = slotRef.current;
        const overlay = overlayRef.current;
        if (!root || !slot || !overlay) return;
        let frame = 0;

        const update = () => {
            frame = 0;
            const from = slot.getBoundingClientRect();
            const dock = document.getElementById("nav-dock")?.getBoundingClientRect();
            // Fully docked after scrolling ~40% of the hero.
            const raw = Math.min(1, Math.max(0, root.scrollTop / (root.clientHeight * 0.4)));
            const p = smoothstep(raw);
            // Shrink ahead of the move so it's already small by the time it reaches the nav.
            const shrink = smoothstep(Math.min(1, raw * 1.7));
            let x = from.left;
            let y = from.top;
            let scale = 1;
            if (dock && dock.width > 0) {
                const s = Math.min(dock.width / from.width, dock.height / from.height) * 1.35;
                // Move the box's centre toward the dock's centre, accounting for the current scale.
                const cur = 1 + (s - 1) * shrink;
                const fromCx = from.left + from.width / 2;
                const fromCy = from.top + from.height / 2;
                const cx = fromCx + (dock.left + dock.width / 2 - fromCx) * p;
                const cy = fromCy + (dock.top + dock.height / 2 - fromCy) * p;
                x = cx - (from.width * cur) / 2;
                y = cy - (from.height * cur) / 2;
                scale = 1 + (s - 1) * shrink;
            }
            overlay.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
            overlay.style.opacity = "1";
        };
        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        root.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        // The nav dock animates its width open when the page loads; track it until it settles.
        const settle = window.setInterval(schedule, 50);
        const stopSettle = window.setTimeout(() => window.clearInterval(settle), 800);
        return () => {
            cancelAnimationFrame(frame);
            root.removeEventListener("scroll", schedule);
            window.removeEventListener("resize", schedule);
            window.clearInterval(settle);
            window.clearTimeout(stopSettle);
        };
    }, [slotRef, overlayRef, ready]);
}

function Hero() {
    const slotRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    // The overlay is portalled to <body> so page-transition transforms on ancestors can't
    // throw off its fixed positioning.
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    useDockOnScroll(slotRef, overlayRef, mounted);

    return (
        <section className="flex h-[calc(100dvh-5rem)] flex-col items-center justify-center px-6 pb-40 text-center md:pb-48">
            {/* Holds the briefcase's place in the layout; the model itself is in the overlay. */}
            <div ref={slotRef} aria-hidden className="h-[104px] w-[170px] md:h-[140px] md:w-[224px]" />
            {mounted &&
                createPortal(
                    <div
                        ref={overlayRef}
                        aria-hidden
                        className="pointer-events-none fixed left-0 top-0 z-[60] h-[104px] w-[170px] origin-top-left opacity-0 md:h-[140px] md:w-[224px] [html[data-menu-open]_&]:invisible"
                    >
                        <BriefcaseScene className="h-full w-full" />
                    </div>,
                    document.body
                )}
            <h1 className="mt-2 text-[clamp(4.5rem,13vw,9.5rem)] font-semibold leading-none tracking-[-0.045em]">Work.</h1>
            <p className="mt-5 max-w-xl text-balance text-[16px] leading-relaxed text-black/50">{INTRO}</p>
            <button
                type="button"
                aria-label="Scroll to the first project"
                onClick={() => document.getElementById(`work-${WORKS[0].id}`)?.scrollIntoView({ behavior: "smooth" })}
                className="mt-8 flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-black/35 hover:text-black"
            >
                Scroll
                <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowDown className="h-4 w-4" />
                </motion.span>
            </button>
        </section>
    );
}

function ProjectSection({ work, index, onOpen }: { work: Work; index: number; onOpen: (work: Work) => void }) {
    const imageFirst = index % 2 === 1;
    const url = liveUrl(work);
    const locked = isLocked(work) && !url && !hasCaseStudy(work);

    return (
        <section
            id={`work-${work.id}`}
            className="mx-auto grid min-h-[calc(100dvh-5rem)] max-w-5xl scroll-mt-20 grid-rows-[auto_auto] items-center gap-10 px-6 py-16 md:grid-cols-2 md:grid-rows-1 md:gap-14 md:px-10"
        >
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: EASE }}
                className={imageFirst ? "md:order-last" : undefined}
            >
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">
                    {String(index + 1).padStart(2, "0")} / {String(WORKS.length).padStart(2, "0")} · {work.category}
                </p>
                <h2 className="mt-4 max-w-xl text-[clamp(2rem,3.4vw,3.25rem)] font-semibold leading-[1.05] tracking-tight">
                    {work.title}
                </h2>
                <p className="mt-5 max-w-md text-[16px] leading-relaxed text-black/55">{work.description}</p>

                {"metrics" in work && work.metrics && (
                    <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                        {work.metrics.map((metric) => (
                            <div key={metric.label}>
                                <p className="text-[clamp(2rem,3.5vw,3rem)] font-semibold leading-none tracking-tight">
                                    {metric.value}
                                </p>
                                <p className="mt-2 text-[13px] text-black/45">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-6">
                    {locked ? (
                        <button
                            type="button"
                            onClick={() => onOpen(work)}
                            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/35 hover:text-black/60"
                        >
                            <Lock className="h-3 w-3" />
                            Case study coming soon
                        </button>
                    ) : (
                        <>
                            {hasCaseStudy(work) && (
                                <button
                                    type="button"
                                    onClick={() => onOpen(work)}
                                    className="text-[11px] font-semibold uppercase tracking-[0.16em] text-black underline decoration-black/20 underline-offset-4 hover:decoration-black"
                                >
                                    View details
                                </button>
                            )}
                            {url && (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-black/50 underline decoration-black/20 underline-offset-4 hover:text-black hover:decoration-black"
                                >
                                    Visit live site
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            )}
                        </>
                    )}
                </div>
            </motion.div>

            <motion.button
                type="button"
                onClick={() => (locked || hasCaseStudy(work) ? onOpen(work) : url && window.open(url, "_blank", "noopener,noreferrer"))}
                aria-label={`Open ${work.title}`}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
                className="group w-full overflow-hidden rounded-xl border border-black/10 bg-white text-left shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            >
                {/* Mac-style window chrome: traffic lights and an address pill. */}
                <div className="flex h-8 items-center gap-1.5 border-b border-black/[0.06] bg-neutral-100 px-3">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    <span className="mx-auto flex min-w-0 max-w-[60%] items-center gap-1.5 rounded-md bg-white px-3 py-0.5 text-[11px] text-black/45">
                        {locked && <Lock className="h-2.5 w-2.5 shrink-0" />}
                        <span className="truncate">{windowLabel(work)}</span>
                    </span>
                    {/* Balances the traffic lights so the address pill stays centred. */}
                    <span className="w-[42px] shrink-0" />
                </div>
                <div className="relative aspect-[16/10] bg-neutral-50">
                    <Image
                        src={work.image}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 470px, (min-width: 768px) 45vw, 100vw"
                        className={`object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                            locked ? "opacity-80 grayscale-[30%]" : ""
                        }`}
                    />
                </div>
            </motion.button>
        </section>
    );
}

export default function WorkPage() {
    const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
    const [comingSoonOpen, setComingSoonOpen] = useState(false);

    function open(work: Work) {
        if (hasCaseStudy(work)) setActiveCaseStudy(work.id);
        else if (isLocked(work) && !liveUrl(work)) setComingSoonOpen(true);
        else if (liveUrl(work)) window.open(liveUrl(work), "_blank", "noopener,noreferrer");
    }

    return (
        <>
            <Hero />
            {WORKS.map((work, i) => (
                <ProjectSection key={work.id} work={work} index={i} onOpen={open} />
            ))}

            <AnimatePresence mode="wait">
                {activeCaseStudy === "south-hampton" && <AhaCommercialDetails onClose={() => setActiveCaseStudy(null)} />}
                {activeCaseStudy === "runcost" && <RuncostDetails onClose={() => setActiveCaseStudy(null)} />}
                {activeCaseStudy === "homedraft" && <HomedraftCaseStudy onClose={() => setActiveCaseStudy(null)} />}
            </AnimatePresence>

            <Dialog open={comingSoonOpen} onOpenChange={setComingSoonOpen}>
                <DialogContent className="w-[95vw] rounded-[2rem] border border-black/10 bg-white p-6 sm:max-w-md md:p-10">
                    <DialogHeader className="text-left">
                        <DialogTitle className="flex items-center gap-3 text-2xl font-semibold tracking-tight">
                            <Lock className="h-5 w-5 text-navy" />
                            Coming soon
                        </DialogTitle>
                        <p className="pt-3 text-[15px] leading-relaxed text-black/55">
                            This case study isn&apos;t public yet. Ask the chat below if you&apos;d like to know more.
                        </p>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
