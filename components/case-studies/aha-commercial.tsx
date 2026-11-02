"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart3, Code2, CreditCard, Layers, Network, ScrollText } from "lucide-react";
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
const kickerClass = "text-[11px] font-medium uppercase tracking-[0.22em] text-black/35";

const FACTS = [
    { label: "Timeline", value: "Discovery to production in under 6 months" },
    { label: "Outcomes", value: "100+ policies bound · 1,500+ leads" },
    { label: "Completion", value: "80%+ of users finish the flow" },
    { label: "Role", value: "Product, data model, front end, integrations" },
    { label: "Stack", value: "Next.js, React, Java, PostgreSQL, AWS" },
    { label: "Integrations", value: "MuleSoft, Salesforce, payments, address lookup" },
];

/** The headline contributions, shown first so the scope is clear before the detail. */
const BUILT = [
    {
        icon: Code2,
        title: "Production codebase, 0 to 1",
        body: "Built the production codebase from an empty repo to a live product that quotes, rates and binds commercial policies online.",
    },
    {
        icon: ScrollText,
        title: "Underwriting turned into a data model",
        body: "Sat down with insurance and underwriting people to learn how risks are actually assessed, then turned that process into a working data model that rates online.",
    },
    {
        icon: CreditCard,
        title: "Payment API",
        body: "Integrated the payment processor's API so a customer can pay and bind in the same flow, with the extra policy-holder fields it requires.",
    },
    {
        icon: Network,
        title: "Process flow and architecture",
        body: "Designed how a quote moves through the system, from the frontend to the backend to Salesforce, with one policy ID from first save to bind.",
        flow: ["Frontend", "Backend", "Salesforce"],
    },
    {
        icon: BarChart3,
        title: "Built-in analytics dashboard",
        body: "Built an analytics dashboard on quote-level tracking, so the team could see completion and drop-off without relying on site analytics alone.",
    },
    {
        icon: Layers,
        title: "Architecture for carrier onboarding",
        body: "Structured the platform so new carriers can be onboarded easily, instead of rebuilding the flow for each one.",
    },
] as const;

/** How the work moved from a PDF of rules to a live product, and who I brought along at each stage. */
const PHASES = [
    {
        phase: "Discover",
        who: "Broker manager, underwriting",
        did: "Interviewed the broker manager on what it actually takes to quote and bind, and worked through the underwriting PDF line by line until every rule had an owner and a meaning.",
        output: "A list of what must be asked, what can be inferred, and what can never bind online",
    },
    {
        phase: "Define",
        who: "Business, backend (Java), MuleSoft",
        did: "Turned the questionnaire into a data model (applicant, risk, quote status, underwriting outcome) and wrote one set of tickets for frontend, backend APIs and MuleSoft so every team built against the same spec.",
        output: "Shared data model and tickets with acceptance criteria",
    },
    {
        phase: "Prototype",
        who: "Business, marketing",
        did: "Mocked screens in Figma and turned them into clickable Next.js prototypes, so stakeholders reacted to a working flow instead of a document before we committed to the build.",
        output: "Agreed question order and flow before engineering started",
    },
    {
        phase: "Build",
        who: "Engineering, Salesforce, payments vendor",
        did: "Defined the data path from frontend to MuleSoft to backend to Salesforce, and when the payment vendor added required fields, extended the model and questionnaire rather than bolting on a second form.",
        output: "One policy ID from first save through payment and bind",
    },
    {
        phase: "Launch and iterate",
        who: "Marketing, business",
        did: "Shipped, then watched quote-level tracking and analytics. A sharp drop-off on the first page led to a wider occupation list with keyword matching.",
        output: "Completion above 80%, 100+ policies bound, 1,500+ leads",
    },
];

/** Calls made without a clear answer, and how each was resolved. */
const DECISIONS = [
    {
        title: "Questions that couldn't be rated",
        unclear: "The underwriting PDF was full of open-ended questions. Free text can't be stored cleanly or priced, but the business relied on those answers.",
        did: "Sat with the business to reframe each one as something structured: yes/no, a dollar figure, or sliders that add up to 100%. Where a question couldn't be made structured, it became a referral instead of a dead end.",
        result: "Every question in the flow maps to a field the rating engine and Salesforce can use.",
    },
    {
        title: "What \"fast\" should mean",
        unclear: "Nobody had a benchmark for how long a self-serve commercial quote should take or how many questions was too many.",
        did: "Studied competing online insurers in DevTools: question count, depth and order. Used those averages to set our sequence, so the decision rested on evidence rather than opinion.",
        result: "A short, ordered flow that kept underwriting quality without feeling like a long form.",
    },
    {
        title: "When to save a quote",
        unclear: "Save too early and the database fills with half-finished quotes; save too late and a lead is lost if someone leaves.",
        did: "Agreed a save point with the business that captures the lead without storing incomplete quotes, and required the backend to issue a policy ID on that first save.",
        result: "Referrals, retries and payment all point at one record, with no duplicates.",
    },
    {
        title: "Bot protection without friction",
        unclear: "A reCAPTCHA check at the start of the flow slowed everyone down to stop the few who were bots.",
        did: "Moved the check to run in the background on its score, only interrupting mid-flow when it looked like a bot.",
        result: "Real customers never see a challenge.",
    },
    {
        title: "Why people were leaving on page one",
        unclear: "After launch, analytics showed a sharp drop-off on the first page, but not why.",
        did: "Traced it to the occupation list being too narrow for people to find their trade, then expanded the list and added keyword matching.",
        result: "Drop-off fell and completion rose above 80%.",
    },
];

/** A screenshot with a caption underneath. Images are pre-framed in a browser window. */
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

/** One step of the flow: short write-up above its screenshot. */
function Feature({ kicker, title, children, shot }: { kicker: string; title: string; children: React.ReactNode; shot: React.ReactNode }) {
    return (
        <section className="mt-14 md:mt-20">
            <div className="mx-auto max-w-3xl">
                <p className={kickerClass}>{kicker}</p>
                <h2 className="mt-2 text-xl md:text-2xl font-semibold tracking-tight leading-tight">{title}</h2>
                <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-black/55">{children}</div>
            </div>
            <div className="mt-6">{shot}</div>
        </section>
    );
}

export default function AhaCommercialDetails({ onClose }: CaseStudyProps) {
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

                    <p className={kickerClass}>Commercial insurance · Aha Insurance</p>
                    <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Commercial quote &amp; bind</h1>
                    <p className="mt-4 text-[15px] leading-relaxed text-black/55">
                        A self-serve commercial insurance product: a small business answers a few short steps, gets a price, pays and binds a policy online, with no broker call. I owned product and frontend through launch (requirements, data model, UX and integrations), working with backend (Java), MuleSoft, Salesforce, marketing and the business.
                    </p>
                </div>

                <div className="mt-12">
                    <Shot
                        src="/images/aha/aha-coverages.jpg"
                        alt="Coverages page showing $87.58 a month, $5M commercial general liability included, and adjustable business interruption and property limits"
                        caption="The quote lands on one page: monthly and yearly price up top, what's included, and limits the customer can change with the price updating live."
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
                    kicker="Step 1 · Your work"
                    title="Start with what the business actually does"
                    shot={
                        <Shot
                            src="/images/aha/aha-work.jpg"
                            alt="Your Work and Revenue step with HVAC Contractors selected, annual revenue and employee count filled in"
                            caption="The trade picked on the first page carries through, so an HVAC contractor lands here with their service already chosen."
                        />
                    }
                >
                    <p>
                        Services, revenue and headcount come first because they drive the rate. Revenue formats as you type, multiple services can be added, and every underwriting question is a simple yes or no instead of an open text box that couldn&apos;t be stored or rated.
                    </p>
                </Feature>

                <Feature
                    kicker="Step 2 · Project mix"
                    title="Turn &ldquo;what kind of jobs?&rdquo; into a number we can price"
                    shot={
                        <Shot
                            src="/images/aha/aha-projects.jpg"
                            alt="Project mix step with sliders for residential, commercial, industrial and other work adding up to 100%"
                            caption="Sliders replace a free-text answer. The running total stays green once it reaches 100%."
                        />
                    }
                >
                    <p>
                        Brokers used to ask this in conversation. Here it&apos;s a set of sliders that must add up to 100%, which gives underwriting a clean split of residential, commercial and industrial work to rate against.
                    </p>
                </Feature>

                <Feature
                    kicker="Step 3 · Safety"
                    title="Screen out risk without slowing anyone down"
                    shot={
                        <Shot
                            src="/images/aha/aha-safety-questions.jpg"
                            alt="A few quick safety questions: airport property, railways, open flames, explosives, hazardous materials"
                            caption="Eleven one-tap questions decide whether a risk binds online, gets referred, or is routed out."
                        />
                    }
                >
                    <p>
                        Each question maps to a kick-out or referral rule. A &ldquo;yes&rdquo; to something like explosives or hazardous materials stops the online bind and sends the lead to the right team in Salesforce instead of producing a policy the business can&apos;t write.
                    </p>
                </Feature>

                <Feature
                    kicker="Step 4 · Review and bind"
                    title="One clear summary before paying"
                    shot={
                        <Shot
                            src="/images/aha/aha-review.jpg"
                            alt="Review page with annual payable $1,050.90, premium and taxes, applicant, effective date, industry, mailing address and coverage limits"
                            caption="Premium and taxes broken out, the details that go on the policy, and the limits being bought, all checked before payment."
                        />
                    }
                >
                    <p>
                        Before paying, the customer sees exactly what goes on the policy. The quote, payment and bind all reference one policy ID created on the first save, so referrals, retries and payment never create duplicate records.
                    </p>
                </Feature>

                <Feature
                    kicker="Mobile"
                    title="Built to finish on a phone"
                    shot={
                        <Shot
                            src="/images/aha/aha-phones-v3.jpg"
                            width={2200}
                            height={1030}
                            alt="Claims question, coverages with price, and the review summary on phones"
                            caption="One question per screen on mobile, with the price and coverage details reflowed to a single column."
                        />
                    }
                >
                    <p>
                        Small business owners often quote between jobs, so every step stacks to one column with large tap targets.
                    </p>
                </Feature>

                <section className="mx-auto mt-16 max-w-3xl md:mt-24" aria-labelledby="led-heading">
                    <p className={kickerClass}>How I led it</p>
                    <h2 id="led-heading" className="mt-2 text-xl md:text-2xl font-semibold tracking-tight leading-tight">
                        From a PDF of rules to a live product, with everyone on the same spec
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-black/55">
                        There was no design team or product spec to start from: underwriting rules lived in a PDF and quotes went through brokers. My job was as much getting the broker manager, underwriting, engineering, MuleSoft, Salesforce and marketing to agree on one flow as it was designing it.
                    </p>
                    <ol className="mt-7 border-l border-black/10">
                        {PHASES.map((p, i) => (
                            <li key={p.phase} className="relative pb-6 pl-6 last:pb-0">
                                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-navy" />
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                    <h3 className="text-[15px] font-semibold tracking-tight">
                                        <span className="mr-2 font-mono text-[11px] text-black/30">{String(i + 1).padStart(2, "0")}</span>
                                        {p.phase}
                                    </h3>
                                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/40">{p.who}</p>
                                </div>
                                <p className="mt-1 text-[14px] leading-relaxed text-black/55">{p.did}</p>
                                <p className="mt-1 text-[12px] text-black/60">
                                    <span className="font-medium text-black">Output: </span>
                                    {p.output}
                                </p>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="mx-auto mt-16 max-w-3xl md:mt-20" aria-labelledby="decisions-heading">
                    <p className={kickerClass}>Decisions under ambiguity</p>
                    <h2 id="decisions-heading" className="mt-2 text-xl md:text-2xl font-semibold tracking-tight leading-tight">
                        The calls that didn&apos;t have an obvious answer
                    </h2>
                    <div className="mt-7 divide-y divide-black/10 border-y border-black/10">
                        {DECISIONS.map((d) => (
                            <article key={d.title} className="py-5">
                                <h3 className="text-[15px] font-semibold tracking-tight">{d.title}</h3>
                                <dl className="mt-2.5 grid gap-3 text-[13px] leading-relaxed md:grid-cols-3 md:gap-6">
                                    <div>
                                        <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/35">What was unclear</dt>
                                        <dd className="mt-1.5 text-black/55">{d.unclear}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-black/35">What I did</dt>
                                        <dd className="mt-1.5 text-black/70">{d.did}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-navy/70">Result</dt>
                                        <dd className="mt-1.5 text-black/80">{d.result}</dd>
                                    </div>
                                </dl>
                            </article>
                        ))}
                    </div>
                </section>

                <div className="mx-auto max-w-3xl">
                    <section className="mt-16" aria-labelledby="built-heading">
                        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">What I built</p>
                        <h2 id="built-heading" className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
                            From first interview to policies bound online.
                        </h2>
                        <ol className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-2">
                            {BUILT.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <motion.li
                                        key={item.title}
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.25 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex flex-col bg-white p-6"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                                                <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                                            </span>
                                            <span className="font-mono text-[11px] text-black/25">{String(i + 1).padStart(2, "0")}</span>
                                        </div>
                                        <h3 className="mt-5 text-[17px] font-semibold tracking-tight">{item.title}</h3>
                                        <p className="mt-2 text-[14px] leading-relaxed text-black/55">{item.body}</p>
                                        {"flow" in item && (
                                            <div className="mt-4 flex flex-wrap items-center gap-1">
                                                {item.flow.map((step, j) => (
                                                    <React.Fragment key={step}>
                                                        {j > 0 && <ArrowRight className="h-3 w-3 text-black/30" />}
                                                        <span className="rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.06em] text-black/70">
                                                            {step}
                                                        </span>
                                                    </React.Fragment>
                                                ))}
                                            </div>
                                        )}
                                    </motion.li>
                                );
                            })}
                        </ol>
                    </section>

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
                                    <li>100+ policies bound online</li>
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
