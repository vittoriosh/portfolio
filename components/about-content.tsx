"use client";

import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail, MapPin, Route } from "lucide-react";

export default function AboutContent({ onRoadmap }: { onRoadmap?: () => void }) {
    return (
        <div className="px-6 md:px-10 pb-16 pt-10 md:pt-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">About</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Vittorio Shiffman
            </h1>
            <p className="mt-6 max-w-2xl text-xl md:text-2xl text-black/70 font-light leading-snug">
                I&apos;m a <span className="text-black font-medium">product engineer</span>. I care about product management and building.
            </p>

            <div className="mt-10 max-w-2xl rounded-[1.5rem] border border-black/10 bg-white p-6 shadow-sm md:p-7">
                <div className="space-y-4 text-[15px] leading-relaxed text-black/60">
                    <p>
                        Most of my work has been in insurance tech. I&apos;ve also worked in other industries through contract work and personal projects.
                    </p>
                    <p>
                        I like hard problems — figuring out how things work, improving products, and making them the best on the market. Give me an open problem or a task with little supervision and I&apos;m at my best.
                    </p>
                    <p>
                        Outside of work I&apos;m big on endurance sports. Every summer you&apos;ll find me in triathlons and marathons — I love the community. I&apos;m also a Chelsea fan.
                    </p>
                </div>
            </div>

            <div className="mt-4 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm md:p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50">
                        <MapPin className="h-5 w-5 text-orange-600" />
                    </span>
                    <span>
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                            Current location
                        </span>
                        <span className="mt-0.5 block text-[15px] font-medium text-black">Montreal, QC</span>
                        <span className="mt-0.5 block text-[12px] text-black/40">Remote · SHF is in Toronto</span>
                    </span>
                </div>

                {onRoadmap ? (
                    <button
                        type="button"
                        onClick={onRoadmap}
                        className="group flex items-center justify-between rounded-[1.5rem] border border-black/10 bg-white p-5 text-left shadow-sm transition-shadow hover:shadow-md md:p-6"
                    >
                        <span className="flex items-center gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50">
                                <Route className="h-5 w-5 text-orange-600" />
                            </span>
                            <span>
                                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                                    Career
                                </span>
                                <span className="mt-0.5 block text-[15px] font-medium text-black">Road map</span>
                            </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-black/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                    </button>
                ) : (
                    <Link
                        href="/roadmap"
                        className="group flex items-center justify-between rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6"
                    >
                        <span className="flex items-center gap-4">
                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50">
                                <Route className="h-5 w-5 text-orange-600" />
                            </span>
                            <span>
                                <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                                    Career
                                </span>
                                <span className="mt-0.5 block text-[15px] font-medium text-black">Road map</span>
                            </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-black/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                    </Link>
                )}

                <Link
                    href="https://www.linkedin.com/in/vittorio-shiffman-b711952b7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6"
                >
                    <span className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50">
                            <Linkedin className="h-5 w-5 text-orange-600" />
                        </span>
                        <span>
                            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                                LinkedIn
                            </span>
                            <span className="mt-0.5 block text-[15px] font-medium text-black">vittorio-shiffman</span>
                        </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-black/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                </Link>

                <Link
                    href="mailto:vittorio.shiffman@gmail.com"
                    className="group flex items-center justify-between rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6"
                >
                    <span className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-orange-50">
                            <Mail className="h-5 w-5 text-orange-600" />
                        </span>
                        <span>
                            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                                Email
                            </span>
                            <span className="mt-0.5 block break-all text-[15px] font-medium text-black">
                                vittorio.shiffman@gmail.com
                            </span>
                        </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-black/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                </Link>
            </div>
        </div>
    );
}
