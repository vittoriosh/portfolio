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

export default function AhaCommercialDetails({ onClose }: CaseStudyProps) {
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

                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">Aha Insurance</p>
                <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                    Commercial quote &amp; bind
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-black/55">
                    A self-serve commercial insurance product: quote, rate, collect payment, and bind online. I owned product and frontend through launch — requirements, data model, UX, and integrations — working with backend (Java), MuleSoft, Salesforce, marketing, and the business. Live at{" "}
                    <a href="https://commercial.ahainsurance.ca/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 text-black/80">
                        commercial.ahainsurance.ca
                    </a>
                    .
                </p>

                <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-black/10 py-6 text-sm">
                    <div>
                        <dt className="text-[11px] uppercase tracking-[0.16em] text-black/35">Timeline</dt>
                        <dd className="mt-1 text-[15px] text-black/80">Discovery to production in under 6 months</dd>
                    </div>
                    <div>
                        <dt className="text-[11px] uppercase tracking-[0.16em] text-black/35">Outcomes</dt>
                        <dd className="mt-1 text-[15px] text-black/80">200+ policies bound · 1,500+ leads</dd>
                    </div>
                    <div>
                        <dt className="text-[11px] uppercase tracking-[0.16em] text-black/35">Completion</dt>
                        <dd className="mt-1 text-[15px] text-black/80">80%+ of users finish the flow</dd>
                    </div>
                    <div>
                        <dt className="text-[11px] uppercase tracking-[0.16em] text-black/35">Stack</dt>
                        <dd className="mt-1 text-[15px] text-black/80">Next.js, React, Java, PostgreSQL, AWS</dd>
                    </div>
                </dl>

                <Accordion type="multiple" className="mt-10 border-t border-black/10">
                    <AccordionItem value="context" className="border-black/10">
                        <AccordionTrigger className={triggerClass}>Context</AccordionTrigger>
                        <AccordionContent className={bodyClass}>
                            Quotes and binds were handled by brokers, using long questionnaires and rating rules stored in PDFs, with Salesforce as the system of record. The goal was a self-serve flow that could still produce a bindable policy, route ineligible risk and referrals correctly, and follow how the business actually quotes.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="responsibilities" className="border-black/10">
                        <AccordionTrigger className={triggerClass}>Responsibilities</AccordionTrigger>
                        <AccordionContent className={bodyClass}>
                            <div className="space-y-6">
                                <div>
                                    <p className="font-medium text-black">Discovery and requirements</p>
                                    <p className="mt-2">
                                        Interviewed the broker manager to define what is required to quote and bind online. Translated a PDF of questions and rating rules into software requirements. Worked with the business to rewrite open-ended questions that could not be stored or rated, to frame fields so they fit a data model, and to cover edge cases that would break an online bind. Wrote tickets for the frontend, backend APIs, and MuleSoft so engineering shared one spec.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-black">Data model</p>
                                    <p className="mt-2">
                                        Designed the first data model from those requirements: applicant, risk, quote status, and underwriting outcome (rate, refer, or kick out). Iterated with engineers and marketing as new product needs appeared. When the payment integration was added, I extended the model with the extra policy-holder fields the payment API required. I also added quote-level tracking fields in our database so we could measure progress internally, separate from Google Analytics on the site.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-black">UX research and flow architecture</p>
                                    <p className="mt-2">
                                        Reviewed competing online commercial insurers. In Chrome DevTools, the fastest products were a single page: questions shown or hidden in place, with no multi-step navigation. I recorded question order, questions per section, depth, and total count, then used those averages to set our own sequence so the experience stayed fast without dropping underwriting quality.
                                    </p>
                                    <p className="mt-2">
                                        Added address lookup through an API so users select a verified address instead of filling street, city, and postal code by hand. That cut time on the form and reduced misspellings that would fail rating or bind.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-black">Platform and integrations</p>
                                    <p className="mt-2">
                                        Defined the data path: Next.js frontend to MuleSoft, then to the Java backend and PostgreSQL, then to Salesforce. Required the backend to generate a policy ID on first save so later saves, referrals, and payment all referenced the same record. Agreed with the business when in the flow to persist, so we captured leads without storing incomplete quotes. Implemented kick-out and referral rules in code: when a risk cannot bind online, where that payload is sent, and how Salesforce is updated.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-black">Payments</p>
                                    <p className="mt-2">
                                        The business selected the third-party payment processor. That vendor also guarantees funds, so its API requires additional policy-holder fields. I read the API documentation, mapped endpoints and required fields into the quote flow, and updated the questionnaire and data model to collect them. Planned the rollout, tested the path from quote through bind including payment, and documented the integration so other engineers could maintain it.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-black">Tracking and bot protection</p>
                                    <p className="mt-2">
                                        Implemented Google Analytics and Contentsquare on the product. Added Google reCAPTCHA on the client, not as part of the data model. A check at the start of the flow was too slow, so recaptcha ran in the background and only stopped the user mid-flow if the score indicated a bot.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-medium text-black">Launch and iteration</p>
                                    <p className="mt-2">
                                        Launched and began binding policies and generating Salesforce leads. Analytics showed a sharp drop-off on the first page because the occupation list was too narrow for users to find themselves. I expanded the list and added keyword matching. Drop-off fell, and more than 80% of users now complete the flow.
                                    </p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="ai" className="border-black/10">
                        <AccordionTrigger className={triggerClass}>How I used AI</AccordionTrigger>
                        <AccordionContent className={bodyClass}>
                            <p>
                                Used Cursor with Claude and Gemini, and Figma AI for rapid prototyping. AI accelerated research, prototypes, and implementation; I still owned requirements, reviews, and what shipped.
                            </p>
                            <ul className="mt-4 space-y-3">
                                <li>
                                    <span className="font-medium text-black/80">Research.</span> Worked through competitor products, payment API documentation, and underwriting edge cases more quickly, and flagged gaps before meetings with business and engineering.
                                </li>
                                <li>
                                    <span className="font-medium text-black/80">Rapid prototyping.</span> Used Figma AI to mock screens in hours instead of days, then Cursor to turn those into working Next.js prototypes. Business and marketing could react to a clickable flow before we committed to the full build.
                                </li>
                                <li>
                                    <span className="font-medium text-black/80">Tickets.</span> Turned interview notes and data-model decisions into frontend, backend, and MuleSoft tickets with acceptance criteria.
                                </li>
                                <li>
                                    <span className="font-medium text-black/80">SQL.</span> Generated PostgreSQL insert statements from Excel occupation lists instead of copying rows by hand. Also used it to write queries faster in general.
                                </li>
                                <li>
                                    <span className="font-medium text-black/80">Implementation.</span> Accelerated Next.js and React work, kick-out and referral rules, background recaptcha, and occupation matching. Reviewed every change before it shipped.
                                </li>
                                <li>
                                    <span className="font-medium text-black/80">Questions and risk.</span> Used the models to challenge the design: page refresh, duplicate saves, open-ended questions, payment-API holder fields, and Salesforce mapping. Those questions went back to business and engineering before we locked the approach.
                                </li>
                            </ul>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="results" className="border-black/10">
                        <AccordionTrigger className={triggerClass}>Results</AccordionTrigger>
                        <AccordionContent className={bodyClass}>
                            <ul className="space-y-2 text-black/70">
                                <li>Shipped quote and bind in under six months from first interviews</li>
                                <li>200+ policies bound online</li>
                                <li>1,500+ leads into Salesforce</li>
                                <li>Completion above 80% after the occupation matching change</li>
                            </ul>
                            <p className="mt-5">
                                <span className="font-medium text-black">Stack.</span> Next.js, React, Java, PostgreSQL, AWS. REST APIs. MuleSoft to Salesforce. Google Analytics, Contentsquare, Google reCAPTCHA. Cursor, Claude, Gemini.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className="mt-12 flex flex-wrap items-center gap-3">
                    <a
                        href="https://commercial.ahainsurance.ca/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-white"
                    >
                        Open live
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
