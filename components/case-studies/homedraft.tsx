"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface CaseStudyProps {
    onClose: (nextId?: string) => void;
}

const META = [
    { label: "Role", value: "Founder / Product & Engineering" },
    { label: "Project", value: "Ontario home grants & loans matcher" },
    { label: "Status", value: "Tried as a startup. Live site still works." },
    { label: "Focus", value: "Research, data model, matching" },
];

const HOUSEHOLD = [
    "Income",
    "Household size",
    "City / region",
    "Own or rent",
    "Home type",
    "Year built",
    "Renovation cost",
];

const PROGRAM = [
    "Program name",
    "Grant or loan",
    "Min / max income",
    "Allowed home types",
    "Must live there?",
    "Regions included",
    "Can stack with others?",
];

const MATCH = [
    "Eligible: yes / no",
    "Why it matched",
    "Est. dollar amount",
    "Missing info",
];

export default function HomedraftCaseStudy({ onClose }: CaseStudyProps) {
    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
        >
            <div className="mx-auto max-w-3xl px-6 py-10 md:py-16 text-black">
                <button
                    onClick={() => onClose()}
                    className="group mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black/40 hover:text-black"
                >
                    <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Close
                </button>

                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">Homedraft</p>
                <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                    Grants &amp; Loans Engine
                </h1>

                <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-black/10 py-6 text-sm">
                    {META.map((item) => (
                        <div key={item.label}>
                            <dt className="text-[11px] uppercase tracking-[0.16em] text-black/35">{item.label}</dt>
                            <dd className="mt-1 text-[15px] leading-snug text-black/80">{item.value}</dd>
                        </div>
                    ))}
                </dl>

                <p className="mt-10 text-lg leading-relaxed text-black/75">
                    Homedraft helps people in Ontario see which home grants and loans they can actually get. You answer a few questions about your home and income. The tool only shows programs you qualify for.
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-black/55">
                    This started as a startup and later stopped. The live site still works at{" "}
                    <a href="https://app.homedraft.ca/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-black/80 hover:text-black">
                        app.homedraft.ca
                    </a>
                    .
                </p>

                <h2 className="mt-14 text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">Problem</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-black/70">
                    Every program has different rules: income limits, home type, where you live, and whether you must live in the house. That info is spread across government PDFs. I wanted one place that asks once and gives a clear yes or no.
                </p>
                <ul className="mt-5 space-y-2 text-[15px] leading-relaxed text-black/60">
                    <li>Rules change. The database had to take new fields without starting over.</li>
                    <li>This is about money and housing, so the site had to feel simple and trustworthy.</li>
                </ul>

                <h2 className="mt-14 text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">What I did</h2>
                <ol className="mt-4 divide-y divide-black/10 border-y border-black/10">
                    <li className="py-5">
                        <p className="text-[15px] font-medium">1. Research</p>
                        <p className="mt-1 text-[15px] leading-relaxed text-black/55">Read each grant and loan. Wrote down the rules: income, home type, who lives there, location, and whether you can combine programs.</p>
                    </li>
                    <li className="py-5">
                        <p className="text-[15px] font-medium">2. Data model</p>
                        <p className="mt-1 text-[15px] leading-relaxed text-black/55">Built one structure that can store any program. New grant = fill in the fields. No new database for each one.</p>
                    </li>
                    <li className="py-5">
                        <p className="text-[15px] font-medium">3. Matching</p>
                        <p className="mt-1 text-[15px] leading-relaxed text-black/55">Compare the person to each program. Return only matches. If a program needs a dollar amount, calculate it from income and project cost.</p>
                    </li>
                    <li className="py-5">
                        <p className="text-[15px] font-medium">4. UX research</p>
                        <p className="mt-1 text-[15px] leading-relaxed text-black/55">Looked at how people apply today. Designed a short form, then a results list — not another long PDF.</p>
                    </li>
                </ol>

                <h2 className="mt-14 text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">Data model</h2>
                <p className="mt-3 mb-6 text-[15px] leading-relaxed text-black/55">
                    Three tables. The matcher reads the household, checks each program, and writes a result.
                </p>

                <div className="rounded-xl border border-black/10 overflow-hidden text-[13px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10">
                        <div className="p-5">
                            <p className="font-mono text-[10px] uppercase tracking-widest text-black/35">Household</p>
                            <p className="mt-1 text-[15px] font-medium">You</p>
                            <ul className="mt-4 space-y-1.5 text-black/60">
                                {HOUSEHOLD.map((f) => (
                                    <li key={f} className="flex items-center gap-2">
                                        <span className="h-1 w-1 rounded-full bg-black/30" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-5 bg-black/[0.02]">
                            <p className="font-mono text-[10px] uppercase tracking-widest text-black/35">Program</p>
                            <p className="mt-1 text-[15px] font-medium">Each grant / loan</p>
                            <ul className="mt-4 space-y-1.5 text-black/60">
                                {PROGRAM.map((f) => (
                                    <li key={f} className="flex items-center gap-2">
                                        <span className="h-1 w-1 rounded-full bg-black/30" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-5">
                            <p className="font-mono text-[10px] uppercase tracking-widest text-black/35">Match</p>
                            <p className="mt-1 text-[15px] font-medium">The answer</p>
                            <ul className="mt-4 space-y-1.5 text-black/60">
                                {MATCH.map((f) => (
                                    <li key={f} className="flex items-center gap-2">
                                        <span className="h-1 w-1 rounded-full bg-black/30" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-black/10 px-5 py-3 font-mono text-[11px] text-black/40">
                        household → check rules on program → save match
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap items-center gap-3">
                    <a
                        href="https://app.homedraft.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white hover:bg-black/80"
                    >
                        Open live
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <button
                        onClick={() => onClose()}
                        className="inline-flex items-center rounded-full border border-black/20 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] hover:border-black"
                    >
                        Back
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
