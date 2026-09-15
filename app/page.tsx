"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Menu, Linkedin, Mail, Lock, X } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import Case Study Components
import SouthHamptonCaseStudy from "@/components/case-studies/south-hampton";
import HomedraftCaseStudy from "@/components/case-studies/homedraft";
import PortfolioChat from "@/components/portfolio-chat";

const LOGOS = [
  { src: "/company_logos/logo_prizmAI_clr_pos.svg", alt: "PrizmAI" },
  { src: "/company_logos/onlia.png", alt: "Onlia" },
  { src: "/company_logos/southampton_financial_inc_logo.jpeg", alt: "Southampton" },
  { src: "/company_logos/aha+insurance+logo_blue.webp", alt: "Aha Insurance" }
];

const WORKS = [
  {
    id: "south-hampton",
    title: "Commercial Insurance Application",
    category: "Quote & Bind Platform",
    image: "/images/aha-commercial-hero.png",
    color: "from-blue-600/20",
    description: "Designed and built a 0-to-1 commercial insurance platform that enables businesses to quote and bind coverage online.",
    metrics: [
      { value: "300+", label: "Active policies" },
      { value: "1,500+", label: "Leads generated" }
    ],
    url: "https://commercial.ahainsurance.ca/",
    type: "professional"
  },
  {
    id: "runcost",
    title: "runCost",
    category: "Personal Project",
    image: "/images/runcost-charts.jpg",
    color: "from-neutral-800/20",
    description: "Built a Canadian vehicle research platform on 10,000+ cars, stitching IBC claim indexes, NRCan fuel ratings, and NHTSA safety data — with AI Q&A wired through Claude, Gemini, and ChatGPT.",
    metrics: [
      { value: "10k+", label: "Cars in dataset" },
      { value: "500+", label: "Monthly traffic" }
    ],
    logos: [
      { src: "/images/ai/claude.svg", alt: "Claude" },
      { src: "/images/ai/gemini.svg", alt: "Gemini" },
      { src: "/images/ai/chatgpt.svg", alt: "ChatGPT" }
    ],
    url: "https://runcost-pi.vercel.app/",
    type: "personal"
  },
  {
    id: "matchday-manager",
    title: "Matchday Manager",
    category: "Personal Project",
    image: "/images/matchday-hero.jpg",
    color: "from-emerald-900/30",
    description: "Designed and architected a soccer draft career-mode game — snake drafts, 180k+ player database, packs, and Classic 11s / 7s modes.",
    metrics: [
      { value: "100+", label: "Unique users" },
      { value: "1,000+", label: "Plays" }
    ],
    url: "https://sevens-labs.vercel.app/",
    type: "personal"
  },
  {
    id: "homedraft",
    title: "Homedraft",
    category: "Personal Project",
    image: "/images/homedraft_hero.png",
    color: "from-blue-900/20",
    description: "Researched Ontario home grants and loans, designed a data model for every eligibility field, and built a matching algorithm — an attempted startup; the live version still works.",
    url: "https://app.homedraft.ca/",
    caseStudy: true,
    type: "personal"
  },
  {
    id: "virtumed",
    title: "VirtuMed",
    category: "Personal Project",
    image: "/virtumed2.png",
    color: "from-cyan-600/20",
    description: "Developed an LLM-powered platform for medical practitioners in partnership with another AI developer and a neurosurgeon.",
    locked: true,
    type: "personal"
  },
  {
    id: "portoptix",
    title: "PortOptix Dashboard",
    category: "Fintech & Venture",
    image: "/images/portoptixphoto.jpeg",
    color: "from-orange-600/20",
    description: "Built and hardened a fintech platform for scale, including its marketing experience, user management, authentication, and data infrastructure.",
    locked: true,
    type: "professional"
  }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- kept for restore
const EXPERIENCES = [
  {
    id: "southampton",
    company: "South Hampton Financials",
    role: "Technical Product Manager Canada",
    period: "February 2024 — Present",
    type: "Full Time",
    description: "Engineering a high-velocity 0-to-1 commercial insurance platform, bridging technical architecture with strategic product growth and AI-native workflows.",
    details: [
      "Executed a 0-to-1 product launch by engineering a new commercial insurance platform from the ground up, designing the architecture across the frontend, middleware, backend, and database with Salesforce integration.",
      "Built a scalable data schema and architecture that enabled seamless onboarding for new carriers while ensuring data flow integrity and meeting strict project timelines.",
      "Leveraged agentic coding and LLM-native workflows to complete the project start-to-finish in 3 months, representing a 4x increase in velocity compared to legacy product launches.",
      "Scaled the new platform to a current user base of over 1,000 active clients who successfully bind insurance policies end-to-end online.",
      "Acted as a technical liaison and solution engineer for a strategic partnership with a Big 5 Canadian Bank, architecting a white-labeled, embedded insurance solution to be integrated into their ecosystem.",
      "Engineered an internal KPI dashboard to monitor system health and data integrity, identifying critical synchronization anomalies that recovered $100,000 in untracked revenue.",
      "Engineered a secondary internal analytics dashboard using Cursor to provide deep visibility into multiple KPIs; implemented advanced filtering for massive datasets which accelerated marketing campaign cycles and product feature decision-making.",
      "Analyzed user behavior using Google Analytics and Hotjar to identify friction points and drop-off areas, resulting in a 16% reduction in user drop-off.",
      "Increased online binding completion rates from 4% to 6% through iterative frontend refinements and the launch of new carrier onboarding features.",
      "Launched 20+ core features and over 70+ minor enhancements while maintaining a constant focus on increasing user traffic and platform engagement.",
      "Managed the advancement of a suite of products by translating user needs into concise technical specifications and clearing 500+ tickets in the process.",
      "Facilitated daily sprints, roadmaps, and technical requirement documentation using a strict agile methodology while managing all development tasks and user stories within Jira to maintain organizational transparency."
    ]
  },

  {
    id: "portoptix",
    company: "PortOptix",
    role: "Software Developer",
    period: "2024 — 2026",
    type: "Contract",
    description: "Hardened the application for scalability and improved user onboarding.",
    details: [
      "Designed and developed the user-facing marketing website, focusing on rapid user acquisition and brand clarity.",
      "Worked closely with the CEO to harden the application for 1000+ active users.",
      "Managed user growth and engagement metrics with data-driven strategies.",
      "Designed and implemented a comprehensive user management system.",
      "Set up Supabase database tables and implemented authentication workflows."
    ]
  },

  {
    id: "prizm",
    company: "Prizm AI",
    role: "Software Developer",
    period: "2024 — Present",
    type: "Contract",
    description: "Architected and engineered high-conversion marketing surfaces and internal data management systems.",
    details: [
      "Built and designed the high-fidelity user-facing website, focusing on conversion optimization and technical brand storytelling.",
      "Engineered an internal administrative platform for the marketing team to manage blogs, SEO controls, and dynamic content delivery.",
      "Designed and implemented complex UI components for the Prizm AI core application, ensuring a seamless and high-performance user experience.",
      "Led the technical implementation of core data visualization tools, including the main KPI dashboard with interactive chart integrations."
    ]
  }
];





function AuthGate({ onAuth }: { onAuth: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "495496") {
      onAuth();
    } else {
      setError(true);
      setPassword("");
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-black flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black uppercase tracking-tighter text-white mb-4">Vittorio Shiffman</h1>
          <p className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-bold italic font-serif">Product & Architecture Portfolio</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Access Key"
              className={`w-full bg-white/5 border-2 ${error ? 'border-red-500' : 'border-white/10 group-focus-within:border-white/30'} rounded-2xl px-6 py-5 text-white placeholder:text-white/20 outline-none transition-all font-mono text-center tracking-[0.5em]`}
              autoFocus
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute -bottom-8 left-0 right-0 text-center text-red-500 text-[10px] font-bold uppercase tracking-widest"
              >
                Incorrect Key
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black font-black uppercase tracking-[0.2em] text-xs py-5 rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_20px_40px_-10px_rgba(255,255,255,0.1)]"
          >
            Unlock Experience
          </button>
        </form>

        <p className="mt-12 text-center text-white/20 text-[8px] uppercase tracking-widest leading-loose">
          Proprietary Internal Documentation & Design Artifacts<br />
          Authorized Access Only
        </p>
      </motion.div>
    </div>
  );
}

function PortfolioMain() {
  const containerRef = useRef<HTMLDivElement>(null);
  // const [expandedExp, setExpandedExp] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero Transforms - fades and scales as we scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0, -50]);

  // Lock scroll when case study is open
  useEffect(() => {
    if (activeCaseStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCaseStudy]);

  return (
    <main ref={containerRef} className="relative bg-white text-black font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Fixed Background Grid */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />

      {/* Header */}
      <AnimatePresence>
        {!activeCaseStudy && !isDialogOpen && (
          <motion.header
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -100, x: "-50%", opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 md:top-6 left-1/2 z-[150] w-[95%] max-w-fit"
          >
            <motion.div
              layout
              className="bg-black text-white rounded-[2rem] shadow-2xl backdrop-blur-md bg-opacity-95 border border-white/10 overflow-hidden flex flex-col items-center"
              animate={{ minWidth: isNavOpen ? "300px" : "auto" }}
            >
              {/* Top Bar */}
              <div
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="px-3 md:px-4 py-2 md:py-3 flex items-center gap-6 md:gap-32 w-full cursor-pointer hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src="/profilephoto.jpeg"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-bold text-sm md:text-base tracking-tight uppercase whitespace-nowrap">Vittorio Shiffman</span>
                    <span className="text-[9px] md:text-[11px] text-white/60 tracking-widest uppercase mt-0.5 md:mt-1">
                      Product Engineer
                    </span>
                  </div>
                </div>

                <div className="p-2 ml-auto">
                  <motion.div
                    animate={{ rotate: isNavOpen ? 90 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isNavOpen ? <X className="w-4 h-4 md:w-5 md:h-5 text-orange-500" /> : <Menu className="w-4 h-4 md:w-5 md:h-5" />}
                  </motion.div>
                </div>
              </div>

              {/* Downward Navigation Links */}
              <AnimatePresence>
                {isNavOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="w-full border-t border-white/10 overflow-hidden"
                  >
                    <div className="p-6 flex flex-col gap-4">
                      {[
                        { label: "Work", id: "work" },
                        { label: "About", id: "about" },
                        { label: "Contact", id: "contact" }
                      ].map((item: { label: string; id: string }) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            const el = document.getElementById(item.id);
                            if (el) {
                              setIsNavOpen(false);
                              setTimeout(() => {
                                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                              }, 100);
                            }
                          }}
                          className="w-full text-left py-2 px-4 rounded-xl hover:bg-white/5 transition-colors group flex items-center justify-between"
                        >
                          <span className="text-white/40 text-sm font-bold uppercase tracking-widest group-hover:text-white group-hover:translate-x-1 transition-all">
                            {item.label}
                          </span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-orange-500" />
                        </button>
                      ))}
                      <Link
                        href="/roadmap"
                        onClick={() => setIsNavOpen(false)}
                        className="w-full text-left py-2 px-4 rounded-xl hover:bg-white/5 transition-colors group flex items-center justify-between"
                      >
                        <span className="text-white/40 text-sm font-bold uppercase tracking-widest group-hover:text-white group-hover:translate-x-1 transition-all">
                          Road map
                        </span>
                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all text-orange-500" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.header>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!activeCaseStudy && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="fixed top-6 right-8 z-[150] bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl hidden xl:block"
          >
            Get in touch
          </motion.button>
        )}
      </AnimatePresence>

      {/* Section 1: Hero & Logos (Sticky) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="flex flex-col items-center justify-center px-6 pt-20 w-full"
        >
          <h1 className="text-[20vw] md:text-[14vw] font-black uppercase leading-[0.8] tracking-[-0.08em] text-center mb-10 md:mb-16 break-words">
            Product
            <br />
            Engineer
          </h1>

          <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-5xl">
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 text-[8px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-black/40 text-center">
              <span>Private Equity</span>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-black/20" />
              <span>Startups</span>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-black/20" />
              <span>Enterprise Company</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 md:gap-x-10 md:gap-y-8 px-4">
              {LOGOS.map((logo, i) => (
                <div key={i} className="relative w-16 h-8 md:w-28 md:h-14 flex-shrink-0 opacity-15 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      {/* Section 2: Work (Relative / Normal Scroll) */}
      <section id="work" className="relative z-10 bg-white pt-24 md:pt-48 pb-10 md:pb-16 border-b border-gray-100">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-24 px-6 md:px-8 gap-6">
            <h2 className="text-6xl md:text-[9vw] font-black uppercase leading-[0.8] md:leading-[0.7] tracking-tighter">
              Selected
              <br />
              Work
            </h2>
            <div className="flex flex-col items-start md:items-end gap-2 md:gap-3 text-left md:text-right">
              <span className="text-[9px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold opacity-30">Featured Cases</span>
              <div className="w-20 md:w-32 h-px bg-black/10" />
            </div>
          </div>

          <div className="w-full px-6 md:px-8">
            {WORKS.slice(0, showAllProjects ? WORKS.length : 4).map((work) => (
              <article
                key={work.id}
                className="group border-t border-black/15 py-10 md:py-16 last:border-b"
              >
                <button
                  type="button"
                  onClick={() => {
                    if ("caseStudy" in work && work.caseStudy) {
                      setActiveCaseStudy(work.id);
                    } else if (work.url) {
                      window.open(work.url, "_blank", "noopener,noreferrer");
                    } else if (work.locked) {
                      setIsDialogOpen(true);
                    } else {
                      setActiveCaseStudy(work.id);
                    }
                  }}
                  className={`grid w-full grid-cols-1 items-center gap-8 text-left md:grid-cols-12 md:gap-12 lg:gap-20 ${!work.locked || work.url || ("caseStudy" in work && work.caseStudy) ? "cursor-pointer" : "cursor-help"}`}
                  aria-label={`${work.title}${"caseStudy" in work && work.caseStudy ? " — open case study" : work.url ? " — open live demo" : work.locked ? " — case study in progress" : " — open case study"}`}
                >
                  <div className="md:col-span-5 lg:pr-8">
                    <h3 className="max-w-lg text-4xl md:text-5xl lg:text-6xl font-black text-black uppercase tracking-[-0.06em] leading-[0.86]">
                      {work.title}
                    </h3>

                    <p className="mt-6 max-w-md text-base leading-relaxed text-black/55 md:text-lg">
                      {work.description}
                    </p>

                    {"metrics" in work && work.metrics && (
                      <div className="mt-8 grid max-w-md grid-cols-2 gap-6 border-y border-black/10 py-6">
                        {work.metrics.map((metric) => (
                          <div key={metric.label} className="space-y-1">
                            <p className="text-3xl md:text-4xl font-black tracking-tighter leading-none">
                              {metric.value}
                            </p>
                            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {"logos" in work && work.logos && (
                      <div className="mt-6">
                        <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.22em] text-black/35">
                          AI stack
                        </p>
                        <div className="flex items-center gap-3">
                          {work.logos.map((logo) => (
                            <div
                              key={logo.alt}
                              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm"
                              title={logo.alt}
                            >
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                width={22}
                                height={22}
                                className="h-[22px] w-[22px] object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-8 hidden md:flex items-center gap-3">
                      <span className={`flex h-11 items-center gap-3 rounded-full px-5 text-[9px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                        "caseStudy" in work && work.caseStudy
                          ? "bg-black text-white hover:bg-white hover:text-black border border-black"
                          : work.url
                          ? "bg-black text-white hover:bg-white hover:text-black border border-black"
                          : work.locked
                            ? "bg-black/5 text-black/40"
                            : "bg-black text-white hover:bg-white hover:text-black border border-black"
                      }`}>
                        {"caseStudy" in work && work.caseStudy ? (
                          <>
                            View case study
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </>
                        ) : work.url ? (
                          <>
                            View live project
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </>
                        ) : work.locked ? (
                          <>
                            <Lock className="h-3 w-3" />
                            Case study in progress
                          </>
                        ) : (
                          <>
                            View case study
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </>
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#f2f2f0] md:col-span-7 md:aspect-[16/10] md:rounded-[2rem]">
                    <Image
                      src={work.image}
                      alt={work.title}
                      fill
                      className={`object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] ${!work.locked || work.url ? "group-hover:scale-[1.035]" : ""}`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-tr ${work.color} to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100`} />
                  </div>

                  <div className="flex md:hidden items-center gap-3">
                    <span className={`flex h-11 items-center gap-3 rounded-full px-5 text-[9px] font-bold uppercase tracking-[0.18em] ${
                      work.locked && !work.url && !("caseStudy" in work && work.caseStudy)
                        ? "bg-black/5 text-black/40"
                        : "bg-black text-white border border-black"
                    }`}>
                      {"caseStudy" in work && work.caseStudy ? (
                        <>
                          View case study
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </>
                      ) : work.url ? (
                        <>
                          View live project
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </>
                      ) : work.locked ? (
                        <>
                          <Lock className="h-3 w-3" />
                          Case study in progress
                        </>
                      ) : (
                        <>
                          View case study
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </>
                      )}
                    </span>
                  </div>
                </button>
              </article>
            ))}
          </div>

          <div className="mt-12 md:mt-16 flex justify-center">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group relative px-12 py-5 bg-black text-white rounded-full font-bold uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-all active:scale-95 shadow-2xl flex items-center gap-4"
            >
              {showAllProjects ? "Show Less" : "See More"}
              {showAllProjects ? (
                <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              ) : (
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </section>
      {/* Case Study Overlays */}
      <AnimatePresence mode="wait">
        {activeCaseStudy === "south-hampton" && (
          <SouthHamptonCaseStudy
            onClose={(nextId) => {
              setActiveCaseStudy(null);
              if (nextId) setTimeout(() => setActiveCaseStudy(nextId), 100);
            }}
          />
        )}
        {activeCaseStudy === "homedraft" && (
          <HomedraftCaseStudy
            onClose={() => setActiveCaseStudy(null)}
          />
        )}
      </AnimatePresence>

      {/* Locked Project Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-[95vw] sm:max-w-md bg-white border-2 border-black rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 overflow-hidden">
          <DialogHeader className="text-left">
            <DialogTitle className="text-2xl md:text-3xl font-black uppercase tracking-tighter flex items-center gap-3 md:gap-4 leading-none">
              <Lock className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
              Coming Soon
            </DialogTitle>
            <div className="text-base md:text-lg text-black/60 font-light leading-relaxed pt-4 md:pt-6">
              Unfortunately, this case study is not finished or the work isn&apos;t live yet. I&apos;ll be updating this as soon as I get a chance.

              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-black/5 space-y-4">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-black/30">Explore live cases instead:</p>
                <div className="flex flex-col gap-2 md:gap-3">
                  <button
                    onClick={() => {
                      setIsDialogOpen(false);
                      setTimeout(() => setActiveCaseStudy("homedraft"), 300);
                    }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl md:rounded-2xl hover:bg-black hover:text-white transition-all group active:scale-[0.98]"
                  >
                    <span className="font-bold uppercase tracking-tight text-sm md:text-base">Homedraft</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="mt-6 md:mt-8 text-sm md:text-base">
                <span className="text-black font-medium">Feel free to contact me</span> if you have any questions about this project.
              </div>
            </div>
          </DialogHeader>
          <div className="flex justify-end mt-8 md:mt-10">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Understood
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Section 3: About Me */}
      <section id="about" className="relative z-10 bg-white pt-12 md:pt-20 pb-24 md:pb-48 px-6 md:px-8">
        <div className="w-full max-w-7xl mx-auto">
          {/* Massive Header */}
          <div className="border-b border-gray-200 pb-12 md:pb-20 mb-16 md:mb-32">
            <motion.h2
              className="text-[16vw] md:text-[12vw] leading-[0.8] font-black tracking-tighter uppercase mb-12 md:mb-20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Vittorio<br />
              <span className="text-black/10">Shiffman</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              <div className="space-y-6 md:space-y-8">
                <p className="text-2xl md:text-3xl text-black/70 font-light leading-snug">
                  I&apos;m a <span className="text-black font-medium">product engineer</span>. I care about product management and building.
                </p>
                <div className="space-y-4 text-base md:text-lg text-black/55 font-light leading-relaxed max-w-xl">
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
                <Link
                  href="/roadmap"
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-black hover:opacity-60"
                >
                  Career road map
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <div className="flex flex-wrap gap-6 md:gap-8 pt-2 md:pt-4">
                  <Link href="https://www.linkedin.com/in/vittorio-shiffman-b711952b7" target="_blank" className="group flex items-center gap-3 hover:text-orange-500 transition-colors">
                    <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                  </Link>
                  <Link href="mailto:vittorio.shiffman@gmail.com" className="group flex items-center gap-3 hover:text-orange-500 transition-colors">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Contact</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col justify-end md:items-end pt-8 md:pt-0">
                <div className="md:text-right border-l-2 md:border-l-0 md:border-r-2 border-orange-500/20 pl-6 md:pl-0 md:pr-12 py-2">
                  <p className="text-[9px] md:text-[10px] font-bold text-black/30 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2 md:mb-4">Current Location</p>
                  <p className="text-3xl md:text-4xl font-black uppercase tracking-tighter">Montreal, QC</p>
                  <p className="mt-3 text-sm font-medium text-black/40">Remote · SHF is in Toronto</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience List — hidden for now
          <div className="mb-24 md:mb-48">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 md:mb-16 px-4 gap-4">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Experience</h3>
              <span className="text-[10px] md:text-xs font-bold text-black/30 uppercase tracking-widest">2024 — Present</span>
            </div>

            <div className="border-t border-gray-100">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-b border-gray-100">
                  <button
                    onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                    className="w-full text-left flex flex-col lg:grid lg:grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 px-4 hover:bg-gray-50 transition-colors group relative"
                  >
                    <div className="lg:col-span-2 text-[10px] md:text-[11px] font-bold text-black/30 uppercase tracking-widest pt-1 md:pt-2">
                      {exp.period}
                    </div>
                    <div className="lg:col-span-4 text-2xl md:text-3xl font-bold uppercase tracking-tight group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform pr-12">
                      {exp.company}
                    </div>
                    <div className="lg:col-span-3 text-lg md:text-xl text-black/50 font-medium">
                      {exp.role}
                    </div>
                    <div className="lg:col-span-2 text-[10px] md:text-xs font-bold text-black/40 pt-1 md:pt-2 uppercase tracking-wide">
                      {exp.type}
                    </div>
                    <div className="absolute right-6 top-8 md:relative lg:col-span-1 md:top-0 flex justify-end items-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                        {expandedExp === exp.id ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedExp === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden bg-gray-50/50"
                      >
                        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-12 pb-12 md:pb-16 px-6 md:px-4 pt-4">
                          <div className="hidden lg:block lg:col-span-2"></div>
                          <div className="lg:col-span-10">
                            <p className="text-xl md:text-2xl mb-8 md:mb-12 text-black/80 font-light leading-relaxed max-w-4xl">{exp.description}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 md:gap-x-16">
                              {exp.details.map((detail, i) => (
                                <div key={i} className="flex gap-4 items-start text-black/60 text-[13px] md:text-sm leading-relaxed">
                                  <div className="w-1 h-1 rounded-full bg-orange-500 mt-2 shrink-0" />
                                  {detail}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
      </section>
      {/* Section 4: Contact */}
      <section id="contact" className="relative z-10 bg-black text-white py-24 md:py-48 px-6 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]" />
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
            <div>
              <h2 className="text-6xl md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter mb-12">
                Let&apos;s
                <br />
                <span className="text-orange-500 italic font-serif">Connect</span>
              </h2>
              <p className="text-xl md:text-3xl font-light text-white/60 leading-tight mb-16">
                Ready to engineer something <span className="text-white font-medium">extraordinary</span>? My inbox is always open.
              </p>
              <Link
                href="mailto:vittorio.shiffman@gmail.com"
                className="flex items-center gap-3 md:gap-4 text-3xl sm:text-2xl md:text-4xl font-bold uppercase tracking-tight hover:text-orange-500 transition-colors group"
              >
                <span className="sm:hidden">Email Me</span>
                <span className="hidden sm:inline">vittorio.shiffman@gmail.com</span>
                <ArrowUpRight className="w-8 h-8 md:w-8 md:h-8 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/vittorio-shiffman-b711952b7", icon: <Linkedin className="w-5 h-5" /> }
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="group flex items-center justify-between p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white group-hover:text-orange-500 transition-colors">
                      {item.icon}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-[0.4em] text-white group-hover:text-orange-500 transition-colors">{item.label}</span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all text-orange-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation - Only show when no case study is active */}
      <AnimatePresence>
        {!activeCaseStudy && (
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 flex justify-between items-end pointer-events-none z-[150]"
          >
            <div
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center gap-2 pointer-events-auto group cursor-pointer bg-white/10 backdrop-blur-sm p-2 rounded-full md:bg-transparent md:backdrop-blur-none md:p-0"
            >
              <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 translate-y-0.5 -translate-x-0.5" />
              </div>
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                Connect
              </span>
            </div>

            <div
              onClick={() => {
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="flex items-center gap-2 pointer-events-auto group cursor-pointer text-right bg-white/10 backdrop-blur-sm p-2 rounded-full md:bg-transparent md:backdrop-blur-none md:p-0"
            >
              <span className="text-[8px] md:text-[10px] uppercase tracking-widest font-bold opacity-50 group-hover:opacity-100 transition-opacity">
                Projects
              </span>
              <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <ArrowDownRight className="w-4 h-4 -translate-y-0.5 translate-x-0.5" />
              </div>
            </div>
          </motion.footer>
        )}
      </AnimatePresence>
      {!activeCaseStudy && <PortfolioChat />}
    </main>
  );
}

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("portfolio-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoaded(true);
  }, []);

  const handleAuth = () => {
    setIsAuthenticated(true);
    localStorage.setItem("portfolio-auth", "true");
  };

  if (!isLoaded) return <div className="fixed inset-0 bg-black" />;

  return (
    <>
      {!isAuthenticated ? (
        <AuthGate onAuth={handleAuth} />
      ) : (
        <PortfolioMain />
      )}
    </>
  );
}