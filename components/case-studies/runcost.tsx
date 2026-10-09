"use client";

import React from "react";
import Image from "next/image";
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

const LIVE_URL = "https://www.autospend.app/";

const triggerClass =
    "py-5 text-[15px] font-medium text-black hover:no-underline [&[data-state=open]>svg]:rotate-180";
const bodyClass = "text-[15px] leading-relaxed text-black/55 pb-6";
const kickerClass = "text-[11px] font-medium uppercase tracking-[0.22em] text-black/35";

const FACTS = [
    { label: "Dataset", value: "22,000+ vehicle records, 1995–2026" },
    { label: "Sources", value: "NRCan, IBC, NHTSA, IIHS, AJAC" },
    { label: "Awards matched", value: "2,200+ from official lists" },
    { label: "Traffic", value: "500+ monthly" },
    { label: "Role", value: "Design, data, front end, back end" },
    { label: "Stack", value: "Next.js, React, TypeScript, Python" },
];

/** A screenshot with a caption underneath. Images are pre-framed (browser or phone mockups). */
function Shot({
    src,
    alt,
    caption,
    priority = false,
    width = 2200,
    height = 1543,
}: {
    src: string;
    alt: string;
    caption?: string;
    priority?: boolean;
    width?: number;
    height?: number;
}) {
    return (
        <figure>
            <div className="overflow-hidden rounded-2xl md:rounded-3xl border border-black/5 bg-neutral-100">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    priority={priority}
                    sizes="(min-width: 1024px) 960px, 100vw"
                    className="h-auto w-full"
                />
            </div>
            {caption && <figcaption className="mt-3 text-[13px] leading-relaxed text-black/45">{caption}</figcaption>}
        </figure>
    );
}

/** One feature: short write-up next to (or above) its screenshot. */
function Feature({
    kicker,
    title,
    children,
    shot,
}: {
    kicker: string;
    title: string;
    children: React.ReactNode;
    shot: React.ReactNode;
}) {
    return (
        <section className="mt-20 md:mt-28">
            <div className="mx-auto max-w-3xl">
                <p className={kickerClass}>{kicker}</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight leading-tight">{title}</h2>
                <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-black/55">{children}</div>
            </div>
            <div className="mt-8">{shot}</div>
        </section>
    );
}

export default function RuncostDetails({ onClose }: CaseStudyProps) {
    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
        >
            <div className="mx-auto max-w-5xl px-6 py-10 md:py-16 text-black">
                <div className="mx-auto max-w-3xl">
                    <button
                        onClick={() => onClose()}
                        className="group mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black/40 hover:text-black"
                    >
                        <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
                        Close
                    </button>

                    <p className={kickerClass}>Vehicle research · Personal project</p>
                    <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">AutoSpend</h1>
                    <p className="mt-4 text-[15px] leading-relaxed text-black/55">
                        A Canadian car research tool that answers the questions you have before you buy: what it costs to fuel, whether it&apos;s likely expensive to insure, how often it gets stolen, how it did in crash tests, and whether it has recalls or awards. It stitches five public datasets into one record per car and explains every number in plain words. Originally launched as runCost.
                    </p>
                    <a
                        href={LIVE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white"
                    >
                        Live
                        <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                </div>

                <div className="mt-12">
                    <Shot
                        src="/images/autospend/autospend-compare.jpg"
                        alt="AutoSpend compare view with a Toyota RAV4 Hybrid, Honda Civic and Mazda CX-5 side by side"
                        priority
                    />
                </div>

                <dl className="mx-auto mt-12 max-w-3xl grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 border-y border-black/10 py-6 text-sm">
                    {FACTS.map((f) => (
                        <div key={f.label}>
                            <dt className="text-[11px] uppercase tracking-[0.16em] text-black/35">{f.label}</dt>
                            <dd className="mt-1 text-[15px] text-black/80">{f.value}</dd>
                        </div>
                    ))}
                </dl>

                <Feature
                    kicker="Compare"
                    title="Up to four cars, one row per question"
                    shot={
                        <Shot
                            src="/images/autospend/autospend-compare-cards.jpg"
                            width={2000}
                            height={1327}
                            alt="Compare cards with fuel cost, efficiency grade, crash stars, driver assist, theft, claims, recalls and awards"
                            caption="Each card answers the same eight questions in the same order, so rows line up across cars. Green is good, orange is a warning."
                        />
                    }
                >
                    <p>
                        Pick a make from a searchable list with logos, then model and year. Each car becomes a compact card: yearly fuel cost, an efficiency grade against its own year and against today&apos;s models, NHTSA crash stars, which driver-assist features are standard, theft risk, insurance claims, U.S. recalls and awards.
                    </p>
                    <p>
                        The detailed explanations live in hover text and on the car&apos;s page, so the card stays scannable.
                    </p>
                </Feature>

                <Feature
                    kicker="Search"
                    title="Ask about any car, get an answer in plain words"
                    shot={
                        <Shot
                            src="/images/autospend/autospend-search.jpg"
                            alt="Search answer for the 2024 Toyota RAV4 Hybrid with a written summary and six stat tiles"
                            caption="Free-text search understands years, nicknames and loose spelling. The summary is written only from the data the app holds."
                        />
                    }
                >
                    <p>
                        An AI-style prompt that searches by car: type &ldquo;2021 RAV4 hybrid&rdquo;, &ldquo;chevy bolt&rdquo; or &ldquo;crv&rdquo; and get recommended models as you type. Picking one writes a short summary of the car and shows its key numbers, awards and year-by-year history, with one tap to add it to a comparison.
                    </p>
                </Feature>

                <Feature
                    kicker="Rankings"
                    title="Top cars of every year since 1995"
                    shot={
                        <div className="grid gap-6 md:grid-cols-2">
                            <Shot
                                src="/images/autospend/autospend-top-cars.jpg"
                                alt="Top cars of 2026 with winner cards for most efficient, best EV, best hybrid, best gasoline, highest energy use and lowest CO2"
                                caption="Winner cards with their own icons, plus the best car in every size class."
                            />
                            <Shot
                                src="/images/autospend/autospend-top-20.jpg"
                                alt="Top 20 most efficient EVs of 2026 with a podium for the top three"
                                caption="Each list opens as a Top 20 with a podium, and the year strip keeps you on the same list."
                            />
                        </div>
                    }
                >
                    <p>
                        The most efficient models each year, overall and by powertrain and class, from NRCan&apos;s Fuel Consumption Guide. Every model appears once rather than every trim, and ties share a rank.
                    </p>
                </Feature>

                <Feature
                    kicker="Charts"
                    title="Charts built around questions people actually ask"
                    shot={
                        <Shot
                            src="/images/autospend/autospend-charts.jpg"
                            alt="Charts page with headline numbers: fuel saved with an EV, EV share, typical EV range and the most stolen car"
                            caption="Every sentence on the page is calculated from the data, so it stays true when the data updates."
                        />
                    }
                >
                    <p>
                        What will I spend on fuel with gas, hybrid, plug-in or electric? Which cars get stolen most? Which are cheapest and priciest to insure? How far do EVs go now, and are they taking over? Each chart leads with a one-line answer.
                    </p>
                </Feature>

                <Feature
                    kicker="Mobile"
                    title="Designed for phones first"
                    shot={
                        <Shot
                            src="/images/autospend/autospend-mobile.jpg"
                            width={2200}
                            height={1532}
                            alt="Search, compare and Top 20 screens on phones"
                            caption="Every page was checked at phone width: cards stack, lists simplify, nothing scrolls sideways."
                        />
                    }
                >
                    <p>
                        Most car research happens on a phone at a dealership, so every screen collapses cleanly to one column with large tap targets.
                    </p>
                </Feature>

                <div className="mx-auto max-w-3xl">
                    <Accordion type="multiple" className="mt-24 border-t border-black/10">
                        <AccordionItem value="context" className="border-black/10">
                            <AccordionTrigger className={triggerClass}>Context</AccordionTrigger>
                            <AccordionContent className={bodyClass}>
                                I wanted to know, before buying a car, whether it would be more expensive to insure than another. Insurers don&apos;t publish that by model. The closest public signal is IBC&apos;s How Cars Measure Up claim indexes, but the official tool is dated and the files are hard to use. Canada publishes fuel ratings (NRCan) and the U.S. publishes crash ratings and recalls (NHTSA). AutoSpend puts them together, adds safety and car-of-the-year awards, and explains what each number means for you.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="responsibilities" className="border-black/10">
                            <AccordionTrigger className={triggerClass}>Responsibilities</AccordionTrigger>
                            <AccordionContent className={bodyClass}>
                                <div className="space-y-6">
                                    <div>
                                        <p className="font-medium text-black">Data pipeline</p>
                                        <p className="mt-2">
                                            Joined IBC claim and theft indexes, NRCan fuel ratings and NHTSA crash ratings and driver-assist equipment into one record per car. Recalls and owner complaints come live from NHTSA&apos;s public API. A Python build script pulls award winners straight from IIHS, AJAC and NRCan&apos;s own pages and checks every name against the source.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-black">Accuracy</p>
                                        <p className="mt-2">
                                            Matching model names across five sources is the hard part. Awards only attach on an exact model match, and when a body style is ambiguous the badge is left off rather than guessed. Missing data stays empty and says so. An audit of every match caught and fixed cases like a hybrid-only award landing on the gas version.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-black">Design</p>
                                        <p className="mt-2">
                                            Built on Meadow, a small design system: one bright green for actions, flat surfaces, heavy headlines and plain copy. Custom icons for every vehicle type and ranking, make logos throughout, and a matching favicon.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-black">Product</p>
                                        <p className="mt-2">
                                            Compare, search, top cars, Top 20 lists, charts, car detail pages and a plain-language &ldquo;How this works&rdquo; page. Every page is responsive and indexed for search with structured data and a sitemap.
                                        </p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="ai" className="border-black/10">
                            <AccordionTrigger className={triggerClass}>How I used AI</AccordionTrigger>
                            <AccordionContent className={bodyClass}>
                                <p>
                                    Used Cursor and Claude Code with Claude, Gemini and ChatGPT. AI drafted the first data model and much of the implementation; I directed the product, reviewed the output and owned the data decisions.
                                </p>
                                <ul className="mt-4 space-y-3">
                                    <li>
                                        <span className="font-medium text-black/80">Data model.</span> Pointed the models at the IBC, NRCan and NHTSA files to propose a schema, then tightened it and kept missing fields empty instead of filled in.
                                    </li>
                                    <li>
                                        <span className="font-medium text-black/80">Research.</span> Used AI to collect award winners from the official sources, and caught where a secondary source was wrong: Wikipedia&apos;s Canadian Car of the Year list didn&apos;t match AJAC&apos;s own site.
                                    </li>
                                    <li>
                                        <span className="font-medium text-black/80">Design and build.</span> Prototyped in Figma AI and Cursor, then redesigned the whole app on the Meadow system with Claude Code, testing every page in the browser at desktop and phone sizes.
                                    </li>
                                    <li>
                                        <span className="font-medium text-black/80">Risk.</span> Pressure-tested joins and wording so the product never reads like an insurance quote.
                                    </li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="results" className="border-black/10">
                            <AccordionTrigger className={triggerClass}>Results</AccordionTrigger>
                            <AccordionContent className={bodyClass}>
                                <ul className="space-y-2 text-black/70">
                                    <li>22,000+ vehicle records from 1995 to 2026, joined across five sources</li>
                                    <li>2,200+ IIHS, AJAC and NRCan awards matched to exact models and years</li>
                                    <li>Compare, search, rankings and charts live in production</li>
                                    <li>500+ monthly visits</li>
                                </ul>
                                <p className="mt-5">
                                    <span className="font-medium text-black">Stack.</span> Next.js, React, TypeScript, Recharts, Python, Vercel. Official NRCan, IBC, NHTSA, IIHS and AJAC data. Cursor, Claude Code, Claude, Gemini, ChatGPT, Figma AI.
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="mt-12 flex flex-wrap items-center gap-3">
                        <a
                            href={LIVE_URL}
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
            </div>
        </motion.div>
    );
}
