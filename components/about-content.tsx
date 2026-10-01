"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowUpRight, Linkedin, Mail, Route } from "lucide-react";

const BibScene = dynamic(() => import("@/components/bib-scene"), { ssr: false });

export default function AboutContent({ onRoadmap }: { onRoadmap?: () => void }) {
    return (
        <div className="grid items-center gap-6 px-6 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:gap-4 md:px-10 md:pt-14">
            <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">About</p>
                <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                    Vittorio Shiffman
                </h1>
                <p className="mt-6 max-w-2xl text-xl md:text-2xl text-black/70 font-light leading-snug">
                    I&apos;m a <span className="text-black font-medium">product engineer</span>. I care about product management and building.
                </p>

                <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed text-black/60">
                    <p>
                        Most of my work has been in insurance tech, with additional experience across other industries through contract work and personal projects. I like hard problems — figuring out how things work, improving products, and making them the best on the market. Give me an open problem or a task with little supervision and I&apos;m at my best.
                    </p>
                    <p>
                        I&apos;m based in Montreal, QC, and work remote for Southampton Financial, which is based in Toronto. Outside of work I&apos;m big on endurance sports — every summer you&apos;ll find me in triathlons and marathons, and I love the community around it. I&apos;m also a Chelsea fan.
                    </p>
                </div>

                <div className="mt-8 flex max-w-2xl flex-wrap items-center gap-x-6 gap-y-3">
                    {onRoadmap ? (
                        <button
                            type="button"
                            onClick={onRoadmap}
                            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/60 hover:text-black"
                        >
                            <Route className="h-3.5 w-3.5" />
                            Career road map
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </button>
                    ) : (
                        <Link
                            href="/roadmap"
                            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/60 hover:text-black"
                        >
                            <Route className="h-3.5 w-3.5" />
                            Career road map
                            <ArrowUpRight className="h-3.5 w-3.5" />
                        </Link>
                    )}
                    <Link
                        href="https://www.linkedin.com/in/vittorio-shiffman-b711952b7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/60 hover:text-black"
                    >
                        <Linkedin className="h-3.5 w-3.5" />
                        LinkedIn
                    </Link>
                    <Link
                        href="mailto:vittorio.shiffman@gmail.com"
                        className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/60 hover:text-black"
                    >
                        <Mail className="h-3.5 w-3.5" />
                        vittorio.shiffman@gmail.com
                    </Link>
                </div>
            </div>

            {/* The bib from the Challenge Montréal Olympic triathlon. */}
            <figure className="m-0">
                <BibScene className="h-[240px] w-full md:h-[380px]" />
                <figcaption className="mt-1 text-center text-[12px] text-black/40">
                    Race bib, Challenge Montréal Olympic triathlon
                </figcaption>
            </figure>
        </div>
    );
}
