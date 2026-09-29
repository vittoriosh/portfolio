import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const LOGOS = [
    { src: "/company_logos/aha+insurance+logo_blue.webp", alt: "Aha Insurance" },
    { src: "/company_logos/onlia.png", alt: "Onlia" },
    { src: "/company_logos/alterilogo.webp", alt: "Alteri" },
    { src: "/company_logos/southampton_financial_inc_logo.jpeg", alt: "Southampton Financial" },
    { src: "/company_logos/logo_prizmAI_clr_pos.svg", alt: "Prizm AI" },
    { src: "/company_logos/portOptixLogo.png", alt: "PortOptix" },
];

const STEPS: {
    title: string;
    when: string;
    team?: number;
    body: string;
    more?: string;
    href?: string;
    linkLabel?: string;
}[] = [
    {
        title: "VirtuMed",
        when: "Pre-corporate",
        team: 3,
        body: "Co-developed VirtuMed with a neurosurgeon and a master's student in AI: an LLM platform built for medical practitioners. We delivered a working first version and presented it to a hospital in the United States. The venture did not proceed beyond that presentation, but it was my first experience taking a product from concept to stakeholder demo under real time pressure.",
    },
    {
        title: "Software Developer, Insurance Technology",
        when: "Current",
        team: 7,
        body: "I joined a seven-person technology team supporting insurance platforms for several portfolio companies, including Aha, Onlia, Cheep, and Alteri. The company is based in Toronto, and I work fully remotely. With one or two people covering each domain, the role requires ownership across the entire stack.",
        more: "I began on the frontend of the legacy platform and steadily broadened my scope: delivering a white-label launch, shipping new products, improving existing features, building automation, implementing marketing tracking, and creating dashboards for the business and marketing teams. In the process I gained hands-on experience with AWS, Figma, and Google Tag Manager, became a strong debugger, and developed end-to-end knowledge of the system's data models and flows.",
    },
    {
        title: "Prizm AI",
        when: "Contract · United States",
        team: 5,
        body: "Contract engagement with a U.S. startup building AI agents that generate business KPIs. My work centred on the frontend, and I contributed to the data model design and to how information flows between the frontend and backend. I also designed and built the company's public website.",
    },
    {
        title: "Mining Intelligence Platform",
        when: "Contract · 3 months",
        team: 2,
        body: "Built a platform for a Toronto-based mining analyst to track mine production volumes, locations, and ownership. The core value was a real-time news layer: scrapers that detected material events, such as flooding at a mine site, and notified users immediately. This was a substantial engagement over roughly three months.",
    },
    {
        title: "PortOptix",
        when: "Contract",
        team: 3,
        body: "An AI platform for private equity firms that ingests portfolio company data, analyzes it, and surfaces cost-saving opportunities. I led the codebase cleanup, implemented authentication, hardened the database, and built integrations such as QuickBooks to streamline data intake.",
        more: "Working alongside two owners who had previously built and sold a company gave me direct exposure to how an experienced team operates, and I made a point of learning from them throughout the engagement.",
    },
    {
        title: "Refocus on core role",
        when: "Pause",
        body: "I stepped back from outside contract work to concentrate on my full-time role and maintain a sustainable pace. This was a deliberate pause rather than a stop.",
    },
    {
        title: "Homedraft",
        when: "Personal project",
        team: 1,
        href: "https://app.homedraft.ca/",
        linkLabel: "View live",
        body: "I founded Homedraft to connect homeowners with certified contractors. The platform identifies the renovation grants and loans a household qualifies for, then simplifies the process of engaging a contractor. I built and launched a polished v1 before setting the company aside; the application remains live.",
    },
    {
        title: "Matchday Manager",
        when: "Personal project",
        team: 1,
        href: "https://sevens-labs.vercel.app/",
        linkLabel: "View live",
        body: "My first game, and a deliberate step outside my usual domain. Drawing on an interest in football and strategy, I built a web-based strategy game on real soccer statistics datasets, in which players draft a squad with a meaningful strategic layer. It has since reached 100+ unique users and 1,000+ plays.",
    },
];

export default function RoadmapContent({ showHomeLink = true }: { showHomeLink?: boolean }) {
    return (
        <div className="px-6 md:px-10 pb-16 pt-10 md:pt-14">
            {showHomeLink && (
                <Link
                    href="/"
                    className="group mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black/40 hover:text-black"
                >
                    <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
                    Home
                </Link>
            )}

            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">Career</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Road map
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-black/55">
                Eight milestones across a full-time role, contract engagements, and independent
                products. I remain in my first corporate role; the contract and personal work was
                delivered alongside it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                {LOGOS.map((logo) => (
                    <div
                        key={logo.alt}
                        title={logo.alt}
                        className="relative h-6 w-20 shrink-0 grayscale transition-opacity duration-300 hover:opacity-70 md:h-7 md:w-24"
                    >
                        <Image src={logo.src} alt={logo.alt} fill className="object-contain object-left" />
                    </div>
                ))}
            </div>

            <ol className="mt-12 border-t border-black/10">
                {STEPS.map((step, i) => (
                    <li key={step.title} className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-black/10 py-8 md:grid-cols-[3.5rem_1fr]">
                        <span className="pt-1 font-mono text-[11px] text-black/30">
                            {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                <h2 className="text-lg md:text-xl font-semibold tracking-tight">{step.title}</h2>
                                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-black/40">
                                    {step.when}
                                    {step.team === 1 ? " · Solo" : step.team ? ` · Team of ${step.team}` : ""}
                                </p>
                            </div>
                            <p className="mt-3 text-[15px] leading-relaxed text-black/70">{step.body}</p>
                            {step.more && (
                                <p className="mt-3 text-[15px] leading-relaxed text-black/55">{step.more}</p>
                            )}
                            {step.href && (
                                <a
                                    href={step.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-black hover:opacity-60"
                                >
                                    {step.linkLabel}
                                    <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            )}
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
