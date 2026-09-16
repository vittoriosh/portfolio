"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Lock } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import HomedraftCaseStudy from "@/components/case-studies/homedraft";
import AhaCommercialDetails from "@/components/case-studies/aha-commercial";
import RuncostDetails from "@/components/case-studies/runcost";
import { WORKS } from "@/lib/works";

function openWork(
    work: (typeof WORKS)[number],
    setActiveCaseStudy: (id: string | null) => void,
    setIsDialogOpen: (open: boolean) => void
) {
    if ("caseStudy" in work && work.caseStudy) {
        setActiveCaseStudy(work.id);
    } else if ("url" in work && work.url) {
        window.open(work.url, "_blank", "noopener,noreferrer");
    } else if ("locked" in work && work.locked) {
        setIsDialogOpen(true);
    } else {
        setActiveCaseStudy(work.id);
    }
}

export default function WorkList({ compact = false }: { compact?: boolean }) {
    const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const items = compact ? WORKS : WORKS.slice(0, 4);

    return (
        <>
            <div className={compact ? "px-6 md:px-10 pb-16" : ""}>
                {compact && (
                    <div className="pt-10 pb-8 md:pt-14">
                        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">
                            Featured
                        </p>
                        <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
                            Selected work
                        </h1>
                    </div>
                )}
                {items.map((work) => (
                    <article
                        key={work.id}
                        className="border-t border-black/15 py-10 md:py-14 last:border-b"
                    >
                        <div
                            role="button"
                            tabIndex={0}
                            onClick={() => openWork(work, setActiveCaseStudy, setIsDialogOpen)}
                            onKeyDown={(e) => {
                                if (e.key !== "Enter" && e.key !== " ") return;
                                e.preventDefault();
                                openWork(work, setActiveCaseStudy, setIsDialogOpen);
                            }}
                            className={`grid w-full grid-cols-1 items-center gap-8 text-left md:grid-cols-12 md:gap-10 ${
                                !("locked" in work && work.locked) ||
                                ("url" in work && work.url) ||
                                ("caseStudy" in work && work.caseStudy)
                                    ? "cursor-pointer"
                                    : "cursor-help"
                            }`}
                        >
                            <div className="md:col-span-5">
                                <h3 className="max-w-lg text-3xl md:text-4xl font-black uppercase tracking-[-0.06em] leading-[0.9]">
                                    {work.title}
                                </h3>
                                <p className="mt-4 max-w-md text-[15px] leading-relaxed text-black/55">
                                    {work.description}
                                </p>
                                {"metrics" in work && work.metrics && (
                                    <div className="mt-6 grid max-w-md grid-cols-2 gap-6 border-y border-black/10 py-5">
                                        {work.metrics.map((metric) => (
                                            <div key={metric.label}>
                                                <p className="text-2xl font-black tracking-tighter">{metric.value}</p>
                                                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-black/40">
                                                    {metric.label}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="mt-6 flex flex-wrap items-center gap-3">
                                    <span
                                        className={`flex h-11 items-center gap-3 rounded-full px-5 text-[9px] font-bold uppercase tracking-[0.18em] ${
                                            "locked" in work && work.locked && !("url" in work && work.url) && !("caseStudy" in work && work.caseStudy)
                                                ? "bg-black/5 text-black/40"
                                                : "bg-black text-white"
                                        }`}
                                    >
                                        {"caseStudy" in work && work.caseStudy ? (
                                            <>
                                                {"cta" in work && work.cta ? work.cta : "View case study"}
                                                <ArrowUpRight className="h-3.5 w-3.5" />
                                            </>
                                        ) : "url" in work && work.url ? (
                                            <>
                                                View live project
                                                <ArrowUpRight className="h-3.5 w-3.5" />
                                            </>
                                        ) : (
                                            <>
                                                <Lock className="h-3 w-3" />
                                                Case study in progress
                                            </>
                                        )}
                                    </span>
                                    {"liveLabel" in work && work.liveLabel && "url" in work && work.url ? (
                                        <a
                                            href={work.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex h-11 items-center gap-3 rounded-full border border-black bg-white px-5 text-[9px] font-bold uppercase tracking-[0.18em] text-black"
                                        >
                                            {work.liveLabel}
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-[#f2f2f0] md:col-span-7">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-contain md:object-cover"
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <AnimatePresence mode="wait">
                {activeCaseStudy === "south-hampton" && (
                    <AhaCommercialDetails onClose={() => setActiveCaseStudy(null)} />
                )}
                {activeCaseStudy === "runcost" && (
                    <RuncostDetails onClose={() => setActiveCaseStudy(null)} />
                )}
                {activeCaseStudy === "homedraft" && (
                    <HomedraftCaseStudy onClose={() => setActiveCaseStudy(null)} />
                )}
            </AnimatePresence>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="w-[95vw] sm:max-w-md bg-white border-2 border-black rounded-[2rem] p-6 md:p-10">
                    <DialogHeader className="text-left">
                        <DialogTitle className="text-2xl font-black uppercase tracking-tighter flex items-center gap-3">
                            <Lock className="w-6 h-6 text-orange-500" />
                            Coming Soon
                        </DialogTitle>
                        <p className="text-base text-black/60 font-light leading-relaxed pt-4">
                            This case study is not finished or the work isn&apos;t live yet.
                        </p>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </>
    );
}
