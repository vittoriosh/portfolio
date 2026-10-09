"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { WORKS } from "@/lib/works";

// Case studies are large and only needed once opened.
const AhaCommercialDetails = dynamic(() => import("@/components/case-studies/aha-commercial"), { ssr: false });
const RuncostDetails = dynamic(() => import("@/components/case-studies/runcost"), { ssr: false });
const HomedraftCaseStudy = dynamic(() => import("@/components/case-studies/homedraft"), { ssr: false });

type Work = (typeof WORKS)[number];

const hasCaseStudy = (work: Work) => "caseStudy" in work && Boolean(work.caseStudy);
const liveUrl = (work: Work) => ("url" in work ? work.url : undefined);
const isLocked = (work: Work) => "locked" in work && Boolean(work.locked);
const workImage = (work: Work) => ("image" in work ? work.image : undefined);

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

function ProjectSection({ work, index, onOpen }: { work: Work; index: number; onOpen: (work: Work) => void }) {
    const imageFirst = index % 2 === 1;
    const url = liveUrl(work);
    const image = workImage(work);
    const locked = isLocked(work) && !url && !hasCaseStudy(work);

    return (
        <section
            id={`work-${work.id}`}
            className={`mx-auto grid min-h-[calc(100dvh-5rem)] max-w-6xl scroll-mt-20 grid-rows-[auto_auto] items-center gap-10 px-6 py-16 md:px-10 lg:grid-rows-1 lg:gap-14 ${
                imageFirst ? "lg:grid-cols-[6fr_5fr]" : "lg:grid-cols-[5fr_6fr]"
            }`}
        >
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: EASE }}
                className={imageFirst ? "lg:order-last" : undefined}
            >
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">
                    {String(index + 1).padStart(2, "0")} · {work.type === "professional" ? "Enterprise" : "Personal"}
                </p>
                <h2 className="mt-4 max-w-xl text-[clamp(2.25rem,3.8vw,3.75rem)] font-semibold leading-[1.04] tracking-tight">
                    {work.title}
                </h2>
                <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-black/55">{work.description}</p>

                {"metrics" in work && work.metrics && (
                    <div className="mt-8 flex flex-wrap gap-x-12 gap-y-5">
                        {work.metrics.map((metric) => (
                            <div key={metric.label}>
                                <p className="text-[clamp(2.25rem,3.8vw,3.5rem)] font-semibold leading-none tracking-tight">
                                    {metric.value}
                                </p>
                                <p className="mt-2 text-[14px] text-black/45">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-8 flex flex-wrap items-center gap-6">
                    {locked ? (
                        <button
                            type="button"
                            onClick={() => onOpen(work)}
                            className="inline-flex items-center gap-2.5 border border-black bg-black px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-black/85"
                        >
                            <Lock className="h-3.5 w-3.5" />
                            Locked · Coming soon
                        </button>
                    ) : (
                        <>
                            {hasCaseStudy(work) && (
                                <button
                                    type="button"
                                    onClick={() => onOpen(work)}
                                    className="text-[12px] font-semibold uppercase tracking-[0.16em] text-black underline decoration-black/20 underline-offset-[6px] hover:decoration-black"
                                >
                                    View details
                                </button>
                            )}
                            {url && (
                                <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-black/50 underline decoration-black/20 underline-offset-[6px] hover:text-black hover:decoration-black"
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
                aria-label={locked ? `${work.title} — locked, coming soon` : `Open ${work.title}`}
                initial={{ opacity: 0, y: 28, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.08, ease: EASE }}
                className={`group w-full overflow-hidden rounded-2xl border bg-white text-left shadow-[0_24px_60px_rgba(0,0,0,0.13)] ${
                    locked ? "border-black/25" : "border-black/10"
                }`}
            >
                {/* Mac-style window chrome: traffic lights and an address pill. */}
                <div className="flex h-9 items-center gap-1.5 border-b border-black/[0.06] bg-neutral-100 px-3.5">
                    <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                    <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                    <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                    <span
                        className={`mx-auto flex min-w-0 max-w-[60%] items-center gap-1.5 rounded-md px-3 py-0.5 text-[12px] ${
                            locked ? "bg-black text-white" : "bg-white text-black/45"
                        }`}
                    >
                        {locked && <Lock className="h-2.5 w-2.5 shrink-0" />}
                        <span className="truncate">{locked ? "Locked" : windowLabel(work)}</span>
                    </span>
                    {/* Balances the traffic lights so the address pill stays centred. */}
                    <span className="w-[48px] shrink-0" />
                </div>
                <div className="relative aspect-[16/10] bg-neutral-100">
                    {image ? (
                        <Image
                            src={image}
                            alt=""
                            fill
                            sizes="(min-width: 1152px) 600px, (min-width: 1024px) 54vw, 100vw"
                            className={`object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
                                locked ? "opacity-50 grayscale" : ""
                            }`}
                        />
                    ) : (
                        <div className="absolute inset-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:16px_16px]" />
                    )}
                    {locked && (
                        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 ${image ? "bg-black/25" : "bg-neutral-200/80"}`}>
                            <span
                                className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg ${
                                    image ? "border border-white/40 bg-black/70 backdrop-blur-sm" : "border border-black/15 bg-black"
                                }`}
                            >
                                <Lock className="h-6 w-6" strokeWidth={2.25} />
                            </span>
                            <span
                                className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${
                                    image ? "text-white drop-shadow-sm" : "text-black/55"
                                }`}
                            >
                                {image ? "Coming soon" : "Screenshot coming soon"}
                            </span>
                        </div>
                    )}
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
