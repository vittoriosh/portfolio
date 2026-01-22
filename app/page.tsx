"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Menu, Github, Linkedin, Mail, Plus, Minus, Lock, X } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Import Case Study Components
import SouthHamptonCaseStudy from "@/components/case-studies/south-hampton";
import OnliaCaseStudy from "@/components/case-studies/onlia";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedExp, setExpandedExp] = useState<string | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

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

  // Hero Transforms - fades and scales as we scroll
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 0, -50]);

  const logos = [
    { src: "/company_logos/alterilogo.webp", alt: "Alteri" },
    { src: "/company_logos/logo_prizmAI_clr_pos.svg", alt: "PrizmAI" },
    { src: "/company_logos/onlia.png", alt: "Onlia" },
    { src: "/company_logos/southampton_financial_inc_logo.jpeg", alt: "Southampton" },
    { src: "/company_logos/cibclogo.png", alt: "CIBC" },
    { src: "/company_logos/aha+insurance+logo_blue.webp", alt: "Aha Insurance" }
  ];

  const works = [
    {
      id: "south-hampton",
      title: "South Hampton Financials",
      category: "Private Equity",
      image: "/images/shfnew.png",
      color: "from-blue-600/20",
    },
    {
      id: "onlia",
      title: "Onlia Portal Experience",
      category: "Consumer Product",
      image: "/images/onliagood.png",
      color: "from-purple-600/20",
    },
    {
      id: "portoptix",
      title: "PortOptix Dashboard",
      category: "Fintech & Venture",
      image: "/images/portoptixphoto.jpeg",
      color: "from-orange-600/20",
      locked: true
    },
    {
      id: "national-sync",
      title: "National Insurance Sync",
      category: "Banking & Fintech",
      image: "/images/cib.png",
      color: "from-red-600/20",
      locked: true
    },
    {
      id: "prizm-ai",
      title: "Prizm AI Marketing",
      category: "Intelligence System",
      image: "/images/prizmai.jpeg",
      color: "from-amber-600/20",
      locked: true
    },
    {
      id: "virtumed",
      title: "VirtuMed",
      category: "Healthcare Infrastructure",
      image: "/virtumed2.png",
      color: "from-cyan-600/20",
      locked: true
    }
  ];

  const experiences = [
    {
      id: "southampton",
      company: "South Hampton Financials",
      role: "Product Engineer",
      period: "2024 — Present",
      type: "Full Time",
      description: "Leading frontend development for a high-scale customer portal serving 200k+ users.",
      details: [
        "Developed and maintained a high-performance customer portal serving over 200,000 users using React, JavaScript, HTML5, and CSS3.",
        "Designed modular, reusable React components, streamlining future development and improving UI consistency.",
        "Built and integrated RESTful APIs for core features including user login, policy lookup, and transaction history.",
        "Implemented Google Analytics and marketing tracking integrations for user engagement insights.",
        "Maintained and optimized CI/CD pipelines with Jenkins, pushing production builds to AWS Amplify."
      ]
    },
    {
      id: "prizm",
      company: "Prizm AI",
      role: "Design Engineer",
      period: "2024",
      type: "Contract",
      description: "Designed and built the user-facing marketing site and internal admin tools.",
      details: [
        "Built and designed the user-facing website, focusing on conversion optimization.",
        "Set up an internal application for the marketing team to handle blogs and SEO controls.",
        "Designed and built multiple user interfaces for the Prizm AI application.",
        "Led the design and implementation of the main KPI card component with interactive charts."
      ]
    },
    {
      id: "portoptix",
      company: "PortOptix",
      role: "Full-Stack Developer",
      period: "2024",
      type: "Contract",
      description: "Hardened the application for scalability and improved user onboarding.",
      details: [
        "Worked closely with the CEO to harden the application for 1000+ active users.",
        "Managed user growth and engagement metrics with data-driven strategies.",
        "Designed and implemented a comprehensive user management system.",
        "Set up Supabase database tables and implemented authentication workflows."
      ]
    },
    {
      id: "alteri",
      company: "Alteri Insurance",
      role: "Software Developer",
      period: "2024",
      type: "Contract",
      description: "Prototyped a business insurance portal and rating engine.",
      details: [
        "Designed and prototyped a comprehensive business insurance portal.",
        "Collaborated to design and implement a rating engine for insurance quoting.",
        "Led user research initiatives to understand broker workflows.",
        "Developed user personas and journey maps to guide product design."
      ]
    }
  ];

  const references = [
    { name: "Steve Lloyd", title: "IT Director, South Hampton Financials" },
    { name: "Christine Cousins", title: "Creative Director, South Hampton Financials" },
    { name: "Kevin Mastriano", title: "CEO, Prizm AI" },
    { name: "Jay Leib", title: "CEO, PortOptix" },
    { name: "Adam Stecklov", title: "AI Researcher, Mila" },
    { name: "Joe Collins", title: "Commodity Analyst, Minerva Project" },
    { name: "Dr. Anderson", title: "Neurosurgeon" }
  ];

  return (
    <main ref={containerRef} className="relative bg-white text-black font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      {/* Fixed Background Grid */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />

      {/* Header */}
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-[150] w-[95%] max-w-fit">
        <div className="bg-black text-white px-3 md:px-4 py-2 md:py-3 rounded-full flex items-center gap-6 md:gap-32 shadow-2xl backdrop-blur-md bg-opacity-95 border border-white/10">
          <div
            onClick={() => {
              if (activeCaseStudy) setActiveCaseStudy(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 md:gap-4 cursor-pointer"
          >
            <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border border-white/20">
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
                Design Engineer
              </span>
            </div>
          </div>

          <button
            onClick={() => activeCaseStudy ? setActiveCaseStudy(null) : null}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            {activeCaseStudy ? <X className="w-4 h-4 md:w-5 md:h-5" /> : <Menu className="w-4 h-4 md:w-5 md:h-5" />}
          </button>
        </div>
      </header>

      <button
        onClick={() => {
          if (activeCaseStudy) setActiveCaseStudy(null);
          setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 50);
        }}
        className="fixed top-6 right-8 z-[150] bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl hidden xl:block"
      >
        Get in touch
      </button>

      {/* Section 1: Hero & Logos (Sticky) */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.section
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="flex flex-col items-center justify-center px-6 pt-20 w-full"
        >
          <h1 className="text-[20vw] md:text-[14vw] font-black uppercase leading-[0.8] tracking-[-0.08em] text-center mb-10 md:mb-16 break-words">
            Design
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
              {logos.map((logo, i) => (
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
      <section id="work" className="relative z-10 bg-white pt-24 md:pt-48 pb-24 md:pb-48 border-b border-gray-100">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-16 w-full px-6 md:px-8">
            {works.slice(0, showAllProjects ? works.length : 4).map((work, i) => (
              <div key={i} className="group relative aspect-[4/3] md:aspect-[16/10] bg-gray-50 rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
                <div
                  onClick={() => {
                    if (work.locked) {
                      setIsDialogOpen(true);
                    } else {
                      setActiveCaseStudy(work.id);
                    }
                  }}
                  className={`relative w-full h-full border border-gray-100 transition-all duration-700 ${!work.locked ? 'hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] md:hover:scale-[1.01] cursor-pointer' : 'cursor-help'}`}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className={`object-cover transition-transform duration-[1.5s] ${!work.locked ? 'group-hover:scale-110' : ''}`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${work.color} to-transparent opacity-0 ${!work.locked ? 'group-hover:opacity-100' : ''} transition-opacity duration-700`} />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 translate-y-4 md:translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="backdrop-blur-xl bg-white/90 p-5 md:p-8 rounded-2xl md:rounded-3xl border border-white/50 max-w-fit shadow-2xl">
                      <span className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold text-black/50 mb-1 md:mb-2 block">
                        {work.category}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-bold text-black uppercase tracking-tight leading-tight">
                        {work.title}
                      </h3>
                      {work.locked && (
                        <div className="flex items-center gap-2 mt-3 text-[9px] font-bold uppercase tracking-widest text-black/30">
                          <Lock className="w-3 h-3" />
                          Case study in progress
                        </div>
                      )}
                    </div>
                  </div>

                  {!work.locked && (
                    <div className="absolute top-6 right-6 md:top-10 md:right-10 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/80 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 md:translate-x-6 group-hover:translate-x-0 transition-all duration-700">
                      <ArrowUpRight className="w-4 h-4 md:w-6 md:h-6 text-black" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 flex justify-center">
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
        {activeCaseStudy === "onlia" && (
          <OnliaCaseStudy
            onClose={(nextId) => {
              setActiveCaseStudy(null);
              if (nextId) setTimeout(() => setActiveCaseStudy(nextId), 100);
            }}
          />
        )}
      </AnimatePresence>

      {/* Locked Project Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white border-2 border-black rounded-[2rem] p-10">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black uppercase tracking-tighter flex items-center gap-4">
              <Lock className="w-8 h-8 text-orange-500" />
              Coming Soon
            </DialogTitle>
            <DialogDescription className="text-xl text-black/60 font-light leading-relaxed pt-6">
              Unfortunately, this case study is not finished or the work isn&apos;t live yet. I&apos;ll be updating this as soon as I get a chance.
              <br /><br />
              <span className="text-black font-medium">Feel free to contact me</span> if you have any questions about this specific project.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-10">
            <button
              onClick={() => setIsDialogOpen(false)}
              className="px-8 py-4 bg-black text-white rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Understood
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Section 3: About Me */}
      <section id="about" className="relative z-10 bg-white py-24 md:py-48 px-6 md:px-8">
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
                <p className="text-2xl md:text-4xl text-black/60 font-light leading-tight">
                  Product Engineer & Designer crafting digital experiences with <span className="text-black font-medium">precision and purpose</span>.
                </p>
                <div className="flex flex-wrap gap-6 md:gap-8 pt-2 md:pt-4">
                  <Link href="https://github.com/vittorio-sh" target="_blank" className="group flex items-center gap-3 hover:text-orange-500 transition-colors">
                    <Github className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Github</span>
                  </Link>
                  <Link href="https://www.linkedin.com/in/vittorio-s-b711952b7" target="_blank" className="group flex items-center gap-3 hover:text-orange-500 transition-colors">
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
                </div>
              </div>
            </div>
          </div>

          {/* Experience List */}
          <div className="mb-24 md:mb-48">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 md:mb-16 px-4 gap-4">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Experience</h3>
              <span className="text-[10px] md:text-xs font-bold text-black/30 uppercase tracking-widest">2024 — Present</span>
            </div>

            <div className="border-t border-gray-100">
              {experiences.map((exp) => (
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

          {/* References Grid */}
          <div className="px-4">
            <div className="mb-12 md:mb-16">
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">References</h3>
              <p className="text-[10px] md:text-xs font-bold text-black/30 uppercase tracking-[0.2em] md:tracking-[0.3em] mt-3 md:mt-4">Industry Partners & Leaders</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 rounded-2xl md:rounded-[2rem] overflow-hidden">
              {references.map((item, i) => (
                <div key={i} className="bg-white p-8 md:p-10 hover:bg-gray-50 transition-colors group">
                  <h4 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-2 md:mb-3 group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[9px] md:text-[10px] font-bold text-black/40 uppercase tracking-widest leading-relaxed">
                    {item.title}
                  </p>
                </div>
              ))}
              <div className="bg-white p-8 md:p-10 flex items-center justify-center bg-gray-50/50">
                <span className="text-[9px] md:text-[10px] font-bold text-black/20 uppercase tracking-[0.3em] md:tracking-[0.4em]">Full list on request</span>
              </div>
            </div>
          </div>
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
                Ready to engineer something <span className="text-white font-medium">extraordinary</span>? My inbox is always open for bold ideas.
              </p>
              <Link
                href="mailto:vittorio.shiffman@gmail.com"
                className="inline-flex items-center gap-4 text-2xl md:text-4xl font-bold uppercase tracking-tight hover:text-orange-500 transition-colors group"
              >
                vittorio.shiffman@gmail.com
                <ArrowUpRight className="w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/vittorio-s-b711952b7" },
                { label: "GitHub", href: "https://github.com/vittorio-sh" },
                { label: "Bento", href: "https://bento.me/vittorio" },
                { label: "Resume", href: "/Vittorio_Shiffman_Final.pdf" }
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  className="group flex items-center justify-between p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <span className="text-sm font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors">{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
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
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
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
    </main>
  );
}