"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const STEPS = [
  {
    title: "VirtuMed",
    when: "Before corporate",
    team: 3,
    body: "I worked on a startup called VirtuMed with a neurosurgeon in the US and a master's student in computer science / AI. We built version 1 of an LLM platform for medical practitioners and presented it to a hospital in the US. It did not go anywhere after that.",
  },
  {
    title: "First corporate job",
    when: "Still here",
    team: 7,
    body: "I started as a software developer on a tiny team that runs insurance software for several portfolio companies — Aha, Onlia, Cheep, and Alteri. The company is based in Toronto. I work remote. It is basically one or two people per domain. You are expected to jump in anywhere.",
    more: "I began on the frontend of the old legacy platform, then took on more. I learned the stack, ran a white-label project, shipped new products, improved features, built automation, set up marketing tracking, and made dashboards for the business and marketing teams. I worked across teams, gathered insurance requirements, and learned to talk to a lot of different people. New tools along the way: AWS, Figma, Google Tag Manager. I got very good at debugging. I know the system inside out — data models, flows, the whole thing.",
  },
  {
    title: "Prizm AI",
    when: "Contract · USA",
    team: 5,
    body: "I picked up contract work at a small US startup building AI agents that generate KPIs. Most of my work was frontend. I also helped set up data models and asked the important questions about how data should move from frontend to backend. I designed and set up their public website.",
  },
  {
    title: "Mining data & news",
    when: "Contract · ~3 months",
    team: 2,
    body: "A mining analyst in Toronto wanted a platform to track mines: how much they produce, where they are, who owns them. The real hook was news scrapers — if a flood hit a mine, it would pull that from X and notify users right away. I put a lot of hours into this for about three months.",
  },
  {
    title: "PortOptix",
    when: "Contract",
    team: 3,
    body: "AI for private equity. It takes data from portfolio companies, analyzes it, and shows the PE firm where they could save money. I did a lot of code cleanup, set up authentication, and improved the database. I helped wire connectors like QuickBooks so data could come in easily. The two co-owners had sold a previous company. I asked a lot of questions and learned how a more experienced team operates.",
  },
  {
    title: "A pause on side work",
    when: "Break",
    body: "I kept the full-time job, but the extra contracts were burning me out. I stopped the side hustle for a while.",
  },
  {
    title: "Homedraft",
    when: "Personal project",
    team: 1,
    href: "https://app.homedraft.ca/",
    linkLabel: "Open live",
    body: "I started Homedraft to connect homeowners with certified contractors. The idea: pull grants and loans for home renovations, show people what they qualify for, then make it easy to work with a contractor. I built a polished first version, then dropped the company. The live app still works.",
  },
  {
    title: "Matchday Manager",
    when: "Personal project",
    team: 1,
    href: "https://sevens-labs.vercel.app/",
    linkLabel: "Open live",
    body: "I built my first game. Not my usual domain, but I like football and strategy games, so I used some free time on a web strategy game. I pulled soccer stats datasets and built a game around picking a team with a lot of strategy.",
  },
];

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-16">
        <Link
          href="/"
          className="group mb-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black/40 hover:text-black"
        >
          <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
          Home
        </Link>

        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">Career</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          Road map
        </h1>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-black/55">
          I still work that first corporate job. This starts before that — then contracts and personal projects around the full-time role.
        </p>

        <ol className="mt-12 border-t border-black/10">
          {STEPS.map((step, i) => (
            <li key={step.title} className="grid grid-cols-[2.75rem_1fr] gap-4 border-b border-black/10 py-8">
              <span className="font-mono text-[11px] text-black/30 pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h2 className="text-lg md:text-xl font-medium tracking-tight">{step.title}</h2>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-black/35">
                    {step.when}
                    {"team" in step && step.team ? ` · Team of ${step.team}` : ""}
                  </p>
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-black/70">{step.body}</p>
                {"more" in step && step.more && (
                  <p className="mt-3 text-[15px] leading-relaxed text-black/55">{step.more}</p>
                )}
                {step.href && (
                  <a
                    href={step.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-black hover:opacity-60"
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
    </main>
  );
}
