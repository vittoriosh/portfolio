"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface CaseStudyProps {
    onClose: (nextId?: string) => void;
}

const triggerClass =
    "py-5 text-[15px] font-medium text-black hover:no-underline [&[data-state=open]>svg]:rotate-180";
const bodyClass = "text-[15px] leading-relaxed text-black/55 pb-6";

export default function RuncostDetails({ onClose }: CaseStudyProps) {
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

                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">Vehicle research</p>
                <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                    runCost
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-black/55">
                    A lookup that compares vehicles on relative insurance claim cost, fuel use, and safety — so you can see if one car is likely more expensive to insure than another. Not a quote. Insurers do not publish premiums by model. IBC claim indexes are the closest public signal. I added NRCan fuel ratings and NHTSA safety data, then built a four-car compare, guides, and charts.
                </p>
                <a
                    href="https://runcost-pi.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white"
                >
                    Live
                    <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-black/10 py-6 text-sm">
                    <div>
                        <dt className="text-[11px] uppercase tracking-[0.16em] text-black/35">Dataset</dt>
                        <dd className="mt-1 text-[15px] text-black/80">10,000+ cars</dd>
                    </div>
                    <div>
                        <dt className="text-[11px] uppercase tracking-[0.16em] text-black/35">Traffic</dt>
                        <dd className="mt-1 text-[15px] text-black/80">500+ monthly</dd>
                    </div>
                    <div>
                        <dt className="text-[11px] uppercase tracking-[0.16em] text-black/35">Sources</dt>
                        <dd className="mt-1 text-[15px] text-black/80">IBC, NRCan, NHTSA</dd>
                    </div>
                    <div>
                        <dt className="text-[11px] uppercase tracking-[0.16em] text-black/35">Stack</dt>
                        <dd className="mt-1 text-[15px] text-black/80">Next.js, React, Vercel</dd>
                    </div>
                </dl>

                <Accordion type="multiple" className="mt-10 border-t border-black/10">
                    <AccordionItem value="context" className="border-black/10">
                        <AccordionTrigger className={triggerClass}>Context</AccordionTrigger>
                        <AccordionContent className={bodyClass}>
                            I wanted to know, before buying a car, whether that vehicle is more expensive to insure than another. Insurers do not publish that by model. The closest public source is IBC claim-cost indexes. The data is useful — a relative signal of whether a car runs expensive on claims — but the official UI is dated and the files are hard to use. I wanted more than claims alone. The U.S. publishes a public safety dataset (NHTSA). Canada publishes a public fuel-efficiency dataset (NRCan). runCost puts those three together so you can compare cars on claims, fuel, and safety in one place.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="responsibilities" className="border-black/10">
                        <AccordionTrigger className={triggerClass}>Responsibilities</AccordionTrigger>
                        <AccordionContent className={bodyClass}>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-medium text-black">Datasets</p>
                                    <p className="mt-2">
                                        Collected the three public sources: IBC How Cars Measure Up (claim-cost indexes), NRCan Fuel Consumption Guide (fuel and emissions), and NHTSA 5-Star safety ratings. IBC is not a premium, but it is the best open proxy for whether one vehicle’s claims run higher than another’s.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-black">Data model</p>
                                    <p className="mt-2">
                                        Used AI to scan the files and draft a data model, then I edited it. Stitched all three datasets into one vehicle record. Many rows have missing fields — no claims index, fuel rating, or safety score. Those fields stay empty. The product never invents a number to fill them in.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-black">Product</p>
                                    <p className="mt-2">
                                        Designed the UI so you can compare up to four cars side by side. Built a guides page that explains the sources and what the numbers are not. Built a top / charts page for ranks and trends. Also added AI Q&A on catalog facts (Claude, Gemini, ChatGPT).
                                    </p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ai" className="border-black/10">
                        <AccordionTrigger className={triggerClass}>How I used AI</AccordionTrigger>
                        <AccordionContent className={bodyClass}>
                            <p>
                                Used Cursor with Claude, Gemini, and ChatGPT. AI scanned the datasets and drafted the first data model; I reviewed and changed it, then owned matching, empty fields, and the UI.
                            </p>
                            <ul className="mt-4 space-y-3">
                                <li>
                                    <span className="font-medium text-black/80">Data model.</span> Pointed the models at the IBC, NRCan, and NHTSA files to propose a schema. I tightened it, then stitched the three sources into one record, leaving missing fields empty instead of filling them in.
                                </li>
                                <li>
                                    <span className="font-medium text-black/80">Rapid prototyping.</span> Used Figma AI and Cursor to try the four-car compare, guides, and charts before committing to the full build.
                                </li>
                                <li>
                                    <span className="font-medium text-black/80">Implementation.</span> Accelerated Next.js and React for lookup, compare, the guides page, and the top / charts page.
                                </li>
                                <li>
                                    <span className="font-medium text-black/80">Questions and risk.</span> Used AI to pressure-test joins and missing fields so the product would not look like an insurer quote.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="results" className="border-black/10">
                        <AccordionTrigger className={triggerClass}>Results</AccordionTrigger>
                        <AccordionContent className={bodyClass}>
                            <ul className="space-y-2 text-black/70">
                                <li>10,000+ vehicles joined from IBC, NRCan, and NHTSA</li>
                                <li>Four-car compare, guides, and charts in production</li>
                                <li>500+ monthly visits</li>
                            </ul>
                            <p className="mt-5">
                                <span className="font-medium text-black">Stack.</span> Next.js, React, Vercel. REST APIs to Claude, Gemini, and ChatGPT. Official IBC, NRCan, and NHTSA datasets. Cursor, Claude, Gemini, ChatGPT, Figma AI.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="mt-12 flex flex-wrap items-center gap-3">
                    <a
                        href="https://runcost-pi.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white"
                    >
                        Live
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                    <button
                        onClick={() => onClose()}
                        className="inline-flex items-center rounded-full border border-black/20 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em]"
                    >
                        Back
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
