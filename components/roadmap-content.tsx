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
        when: "Before corporate",
        team: 3,
        body: "Before my corporate career, I co-built VirtuMed alongside a neurosurgeon and a master's student in AI. We shipped a first version of an LLM platform for medical practitioners and presented it to a hospital in the US. The venture didn't continue past that pitch, but it was my first real product build under pressure.",
    },
    {
        title: "First corporate job",
        when: "Still here",
        team: 7,
        body: "I joined a small team running insurance software for several portfolio companies — Aha, Onlia, Cheep, and Alteri — based in Toronto, fully remote. With one or two people per domain, the expectation is simple: jump in anywhere.",
        more: "I started on the frontend of the legacy platform and kept expanding scope — learning the stack, running a white-label launch, shipping new products, improving existing features, building automation, wiring up marketing tracking, and building dashboards for both business and marketing teams. Along the way I picked up AWS, Figma, and Google Tag Manager, got sharp at debugging, and now know the system end-to-end — data models, flows, all of it.",
    },
    {
        title: "Prizm AI",
        when: "Contract · USA",
        team: 5,
        body: "I took on contract work at a US startup building AI agents that generate KPIs — mostly frontend, plus helping define the data model and how information should move from frontend to backend. I also designed and built their public website.",
    },
    {
        title: "Mining data & news",
        when: "Contract · ~3 months",
        team: 2,
        body: "A Toronto-based mining analyst needed a platform to track mines — production volumes, locations, ownership. The real value was the news layer: scrapers that caught events like a flood hitting a mine and notified users in real time. I put significant hours into this over about three months.",
    },
    {
        title: "PortOptix",
        when: "Contract",
        team: 3,
        body: "An AI platform for private equity — ingesting portfolio company data, analyzing it, and surfacing savings opportunities for the firm. I led code cleanup, set up authentication, and hardened the database, and wired integrations like QuickBooks for easy data intake.",
        more: "Working alongside two co-owners who'd already sold a company once, I learned how a more experienced team operates — and asked a lot of questions along the way.",
    },
    {
        title: "A pause on side work",
        when: "Break",
        body: "I kept the full-time role but stepped back from outside contracts — the pace was unsustainable. A deliberate pause, not a stop.",
    },
    {
        title: "Homedraft",
        when: "Personal project",
        team: 1,
        href: "https://app.homedraft.ca/",
        linkLabel: "Open live",
        body: "I founded Homedraft to connect homeowners with certified contractors — surfacing the grants and loans they qualify for on home renovations, then making it easy to engage a contractor. I built a polished v1 before setting the company aside; the live app is still running.",
    },
    {
        title: "Matchday Manager",
        when: "Personal project",
        team: 1,
        href: "https://sevens-labs.vercel.app/",
        linkLabel: "Open live",
        body: "My first game. Outside my usual domain, but I like football and strategy, so I built a web strategy game on real soccer stats datasets — drafting a team with a real strategic layer.",
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
                Eight stops — a full-time role and the contracts and personal projects built
                alongside it. Still at the first corporate job; everything else happened around it.
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
                                    {step.team ? ` · Team of ${step.team}` : ""}
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
