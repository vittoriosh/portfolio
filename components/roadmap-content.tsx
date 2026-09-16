import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    ArrowUpRight,
    Stethoscope,
    Building2,
    Bot,
    Pickaxe,
    TrendingUp,
    Coffee,
    Home,
    Trophy,
    type LucideIcon,
} from "lucide-react";

type ColorKey = "cyan" | "blue" | "violet" | "amber" | "orange" | "neutral" | "emerald" | "rose";

const LOGOS = [
    { src: "/company_logos/aha+insurance+logo_blue.webp", alt: "Aha Insurance" },
    { src: "/company_logos/onlia.png", alt: "Onlia" },
    { src: "/company_logos/alterilogo.webp", alt: "Alteri" },
    { src: "/company_logos/southampton_financial_inc_logo.jpeg", alt: "Southampton Financial" },
    { src: "/company_logos/logo_prizmAI_clr_pos.svg", alt: "Prizm AI" },
    { src: "/company_logos/portOptixLogo.png", alt: "PortOptix" },
];

const COLOR: Record<
    ColorKey,
    { node: string; icon: string; pill: string; dot: string; ctaHover: string }
> = {
    cyan: {
        node: "bg-cyan-50 border-cyan-200",
        icon: "text-cyan-600",
        pill: "bg-cyan-50 text-cyan-700 border-cyan-200",
        dot: "bg-cyan-500",
        ctaHover: "hover:bg-cyan-600",
    },
    blue: {
        node: "bg-blue-50 border-blue-200",
        icon: "text-blue-600",
        pill: "bg-blue-50 text-blue-700 border-blue-200",
        dot: "bg-blue-500",
        ctaHover: "hover:bg-blue-600",
    },
    violet: {
        node: "bg-violet-50 border-violet-200",
        icon: "text-violet-600",
        pill: "bg-violet-50 text-violet-700 border-violet-200",
        dot: "bg-violet-500",
        ctaHover: "hover:bg-violet-600",
    },
    amber: {
        node: "bg-amber-50 border-amber-200",
        icon: "text-amber-600",
        pill: "bg-amber-50 text-amber-700 border-amber-200",
        dot: "bg-amber-500",
        ctaHover: "hover:bg-amber-600",
    },
    orange: {
        node: "bg-orange-50 border-orange-200",
        icon: "text-orange-600",
        pill: "bg-orange-50 text-orange-700 border-orange-200",
        dot: "bg-orange-500",
        ctaHover: "hover:bg-orange-600",
    },
    neutral: {
        node: "bg-neutral-100 border-neutral-200",
        icon: "text-neutral-500",
        pill: "bg-neutral-100 text-neutral-500 border-neutral-200",
        dot: "bg-neutral-400",
        ctaHover: "hover:bg-neutral-600",
    },
    emerald: {
        node: "bg-emerald-50 border-emerald-200",
        icon: "text-emerald-600",
        pill: "bg-emerald-50 text-emerald-700 border-emerald-200",
        dot: "bg-emerald-500",
        ctaHover: "hover:bg-emerald-600",
    },
    rose: {
        node: "bg-rose-50 border-rose-200",
        icon: "text-rose-600",
        pill: "bg-rose-50 text-rose-700 border-rose-200",
        dot: "bg-rose-500",
        ctaHover: "hover:bg-rose-600",
    },
};

const STEPS: {
    title: string;
    when: string;
    team?: number;
    body: string;
    more?: string;
    href?: string;
    linkLabel?: string;
    icon: LucideIcon;
    color: ColorKey;
}[] = [
    {
        title: "VirtuMed",
        when: "Before corporate",
        team: 3,
        icon: Stethoscope,
        color: "cyan",
        body: "Before my corporate career, I co-built VirtuMed alongside a neurosurgeon and a master's student in AI. We shipped a first version of an LLM platform for medical practitioners and presented it to a hospital in the US. The venture didn't continue past that pitch, but it was my first real product build under pressure.",
    },
    {
        title: "First corporate job",
        when: "Still here",
        team: 7,
        icon: Building2,
        color: "blue",
        body: "I joined a small team running insurance software for several portfolio companies — Aha, Onlia, Cheep, and Alteri — based in Toronto, fully remote. With one or two people per domain, the expectation is simple: jump in anywhere.",
        more: "I started on the frontend of the legacy platform and kept expanding scope — learning the stack, running a white-label launch, shipping new products, improving existing features, building automation, wiring up marketing tracking, and building dashboards for both business and marketing teams. Along the way I picked up AWS, Figma, and Google Tag Manager, got sharp at debugging, and now know the system end-to-end — data models, flows, all of it.",
    },
    {
        title: "Prizm AI",
        when: "Contract · USA",
        team: 5,
        icon: Bot,
        color: "violet",
        body: "I took on contract work at a US startup building AI agents that generate KPIs — mostly frontend, plus helping define the data model and how information should move from frontend to backend. I also designed and built their public website.",
    },
    {
        title: "Mining data & news",
        when: "Contract · ~3 months",
        team: 2,
        icon: Pickaxe,
        color: "amber",
        body: "A Toronto-based mining analyst needed a platform to track mines — production volumes, locations, ownership. The real value was the news layer: scrapers that caught events like a flood hitting a mine and notified users in real time. I put significant hours into this over about three months.",
    },
    {
        title: "PortOptix",
        when: "Contract",
        team: 3,
        icon: TrendingUp,
        color: "orange",
        body: "An AI platform for private equity — ingesting portfolio company data, analyzing it, and surfacing savings opportunities for the firm. I led code cleanup, set up authentication, and hardened the database, and wired integrations like QuickBooks for easy data intake.",
        more: "Working alongside two co-owners who'd already sold a company once, I learned how a more experienced team operates — and asked a lot of questions along the way.",
    },
    {
        title: "A pause on side work",
        when: "Break",
        icon: Coffee,
        color: "neutral",
        body: "I kept the full-time role but stepped back from outside contracts — the pace was unsustainable. A deliberate pause, not a stop.",
    },
    {
        title: "Homedraft",
        when: "Personal project",
        team: 1,
        href: "https://app.homedraft.ca/",
        linkLabel: "Open live",
        icon: Home,
        color: "emerald",
        body: "I founded Homedraft to connect homeowners with certified contractors — surfacing the grants and loans they qualify for on home renovations, then making it easy to engage a contractor. I built a polished v1 before setting the company aside; the live app is still running.",
    },
    {
        title: "Matchday Manager",
        when: "Personal project",
        team: 1,
        href: "https://sevens-labs.vercel.app/",
        linkLabel: "Open live",
        icon: Trophy,
        color: "rose",
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
                        className="relative h-6 w-20 shrink-0 transition-transform duration-300 hover:scale-105 md:h-7 md:w-24"
                    >
                        <Image src={logo.src} alt={logo.alt} fill className="object-contain object-left" />
                    </div>
                ))}
            </div>

            <ol className="mt-14 relative">
                {STEPS.map((step, i) => {
                    const c = COLOR[step.color];
                    const Icon = step.icon;
                    const isLast = i === STEPS.length - 1;
                    return (
                        <li key={step.title} className="relative flex gap-5 md:gap-6 pb-10 md:pb-12 last:pb-0">
                            {!isLast && (
                                <span
                                    aria-hidden
                                    className="absolute left-[23px] md:left-[27px] top-[52px] md:top-[56px] bottom-0 w-px bg-gradient-to-b from-black/15 to-black/0"
                                />
                            )}

                            <div className="relative z-10 flex flex-col items-center shrink-0">
                                <div
                                    className={`flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border ${c.node} shadow-sm`}
                                >
                                    <Icon className={`h-5 w-5 md:h-6 md:w-6 ${c.icon}`} strokeWidth={2} />
                                </div>
                            </div>

                            <div className="flex-1 min-w-0 rounded-[1.5rem] border border-black/10 bg-white p-5 md:p-7 shadow-sm transition-shadow hover:shadow-md">
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                                        <div className="flex items-center gap-2.5">
                                            <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                                            <span className="font-mono text-[11px] text-black/30">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                                                {step.title}
                                            </h2>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${c.pill}`}
                                            >
                                                {step.when}
                                            </span>
                                            {step.team ? (
                                                <span className="inline-flex items-center rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-black/40">
                                                    Team of {step.team}
                                                </span>
                                            ) : null}
                                        </div>
                                    </div>
                                    <p className="mt-3.5 text-[15px] leading-relaxed text-black/70">{step.body}</p>
                                    {step.more && (
                                        <p className="mt-3 text-[15px] leading-relaxed text-black/55">{step.more}</p>
                                    )}
                                    {step.href && (
                                        <a
                                            href={step.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`mt-5 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white transition-colors ${c.ctaHover}`}
                                        >
                                            {step.linkLabel}
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
