"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Search, Layers } from "lucide-react";

interface CaseStudyProps {
    onClose: (nextId?: string) => void;
}

export default function SouthHamptonCaseStudy({ onClose }: CaseStudyProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
        >
            <div ref={containerRef} className="relative text-black font-sans selection:bg-blue-900 selection:text-white overflow-x-hidden min-h-screen">
                {/* Fixed Background Grid */}
                <div className="fixed inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />

                {/* Content begins here */}

                {/* Hero Section */}
                <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 md:px-8">
                    <div className="w-full max-w-7xl mx-auto">
                        <button onClick={() => onClose()} className="group inline-flex items-center gap-2 mb-12 md:mb-20">
                            <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            </div>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] opacity-50 group-hover:opacity-100 transition-opacity">Close Case Study</span>
                        </button>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        >
                            <h1 className="text-5xl md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter mb-12 md:mb-20">
                                Scaling Commercial
                                <br />
                                <span className="text-black italic font-serif font-black">Multi-Tenant Architecture</span>
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 border-t border-black/5 pt-12">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Role</p>
                                    <p className="text-lg font-medium leading-tight">Lead Product Designer & Frontend Developer</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Project</p>
                                    <p className="text-lg font-medium leading-tight">South Hampton Financials</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Impact</p>
                                    <p className="text-lg font-medium leading-tight text-blue-900 italic font-serif text-nowrap">19% Faster Journey Speed</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Focus</p>
                                    <p className="text-lg font-medium leading-tight">B2B SaaS Strategy</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Executive Summary (The Hook) */}
                <section className="py-24 md:py-48 bg-gray-50 px-6 md:px-8">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
                            <div className="md:col-span-4">
                                <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">Executive Summary</h2>
                                <p className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none italic font-serif text-blue-900">
                                    The Hook
                                </p>
                            </div>
                            <div className="md:col-span-8 space-y-12">
                                <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-black/80">
                                    To capture the untapped online commercial insurance market, I led the design of a <span className="text-black font-semibold italic">multi-tenant, white-label</span> acquisition platform.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-black/5">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold uppercase tracking-widest">The Outcome</h3>
                                        <p className="text-lg text-black/60 font-medium italic">A high-velocity journey outperforming the company&apos;s current auto and home portal benchmarks by 19%.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold uppercase tracking-widest text-blue-900">Key Achievement</h3>
                                        <p className="text-lg text-black/60 font-medium italic">Engineered a &quot;Demo Mode&quot; for B2B partners that swaps brand identity in real-time without code changes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 1: Context & Business Strategy */}
                <section className="py-24 md:py-48 bg-black text-white px-6 md:px-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                        <Layers className="w-full h-full" />
                    </div>
                    <div className="w-full max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                            <div className="space-y-8 md:space-y-12">
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                                    Context &
                                    <br />
                                    <span className="text-white/20">Business Strategy</span>
                                </h2>
                                <p className="text-xl md:text-3xl font-light text-white/70 leading-relaxed italic border-l-4 border-blue-900 pl-8">
                                    South Hampton Financials aimed to enter the commercial insurance space with a dual-purpose goal: a top-tier consumer experience and a &quot;demo-ready&quot; product for B2B partners.
                                </p>
                                <p className="text-xl md:text-3xl font-light text-white/70 leading-relaxed">
                                    The Business Goal: Rapid market entry into a high-margin sector using a &quot;Software as a Service&quot; (SaaS) model.
                                </p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="p-10 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-xl">
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8 md:mb-12">The Constraints</h3>
                                    <div className="space-y-8">
                                        {[
                                            { title: "White-Label Requirements", desc: "UI had to allow CSS-theming for various partners." },
                                            { title: "Fixed Logic", desc: "Legal requirements meant I couldn’t reduce the number of questions." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-6 items-start">
                                                <div className="w-6 h-6 rounded-full border border-blue-900/50 flex items-center justify-center text-blue-900 mt-1">
                                                    <CheckCircle2 className="w-4 h-4" />
                                                </div>
                                                <div className="space-y-1">
                                                    <h4 className="text-xl font-bold uppercase tracking-tight">{item.title}</h4>
                                                    <p className="text-sm text-white/40 font-medium italic">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Discovery & Research */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-white">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="mb-24 text-center md:text-left">
                            <h2 className="text-6xl md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter mb-8 italic text-black/5">The &quot;Why&quot;</h2>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none -mt-12 md:-mt-20 relative z-10">Discovery & Research</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start mb-24">
                            <div className="space-y-12">
                                <p className="text-2xl md:text-4xl font-light text-black/80 leading-tight">
                                    High-level design isn&apos;t about intuition; it’s about <span className="font-bold underline decoration-blue-900 decoration-4 underline-offset-8">data-driven pivots</span>.
                                </p>
                                <div className="p-12 bg-gray-50 rounded-[2rem] md:rounded-[3rem] border border-black/5 space-y-6">
                                    <h4 className="text-xl font-bold uppercase tracking-tight flex items-center gap-4">
                                        <Search className="w-6 h-6 text-blue-900" />
                                        The &quot;Wall of Questions&quot; Problem
                                    </h4>
                                    <p className="text-xl font-medium italic text-black/50 leading-relaxed">
                                        Google Analytics and reports from current company portals owned by the private equity firm showed significant drop-offs at sections with more than 5 fields.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-16">
                                <div className="space-y-4">
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/30">Research Insight</h4>
                                    <p className="text-2xl md:text-3xl font-medium tracking-tight">Finance forms often see abandonment rates exceeding <span className="text-blue-900 font-bold">75%</span> due to &quot;form fatigue&quot;.</p>
                                    <p className="text-xs font-mono text-black/40 italic">Source: Numen Technology</p>
                                </div>
                                <div className="space-y-4 pt-12 border-t border-black/5">
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/30">Strategic Pivot</h4>
                                    <p className="text-2xl md:text-3xl font-medium tracking-tight">I chose a Single Page Application (SPA) approach using React and Next.js to eliminate page-load latency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Ideation & Logic (The Strategic Architecture) */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-gray-50">
                    <div className="w-full max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-24 md:mb-32 text-center">The Strategic Architecture</h2>

                        <div className="space-y-4 max-w-5xl mx-auto">
                            {/* Row 1: Psychology */}
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-xl flex flex-col md:flex-row gap-8 items-start hover:bg-gray-50 transition-colors group">
                                <div className="w-16 h-16 rounded-2xl bg-blue-900 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform font-black text-2xl tracking-tighter">
                                    01
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-blue-900">Psychology Design Strategy</h3>
                                    <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed italic">
                                        Leveraging the <span className="text-black font-bold">Sunk Cost Fallacy</span>: By starting with low-friction inputs (like Business Name), we build user momentum. By the time they reach complex financial disclosures at the 75% mark, the psychological investment ensures they are far more likely to finish the journey.
                                    </p>
                                </div>
                            </div>

                            {/* Row 2: Simple UI */}
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-xl flex flex-col md:flex-row gap-8 items-start hover:bg-gray-50 transition-colors group">
                                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform font-black text-2xl tracking-tighter">
                                    02
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">Simple UI Execution</h3>
                                    <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed italic">
                                        Minimalist interfaces aren&apos;t just an aesthetic choice—they&apos;re a performance requirement. Reducing visual noise and distilling the UI to its core components increases cognitive processing speed and significantly reduces error rates during high-stakes data entry.
                                    </p>
                                </div>
                            </div>

                            {/* Row 3: Conditional Rendering */}
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-xl flex flex-col md:flex-row gap-8 items-start hover:bg-gray-50 transition-colors group">
                                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform font-black text-2xl tracking-tighter">
                                    03
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Conditional Rendering</h3>
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-blue-100 text-blue-900 px-4 py-1.5 rounded-full">15% Higher Conversion</span>
                                    </div>
                                    <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed italic">
                                        Questions render dynamically based on previous input, keeping the user in a &quot;flow state&quot; without the jarring &quot;white flash&quot; of page transitions common in legacy insurance portals.
                                    </p>
                                </div>
                            </div>

                            {/* Row 4: API Pre-rendering */}
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-xl flex flex-col md:flex-row gap-8 items-start hover:bg-gray-50 transition-colors group">
                                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform font-black text-2xl tracking-tighter">
                                    04
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">API Pre-rendering</h3>
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-black/5 text-black px-4 py-1.5 rounded-full">Instant Initial Load</span>
                                    </div>
                                    <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed italic">
                                        Pre-rendering for the Canada Post API. By the time the user reached the address field, the script was already hot and ready to provide instant search results, eliminating the #1 friction point in the journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: Product Showcase */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-white overflow-hidden">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="mb-24 text-center md:text-left">
                            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">Product Showcase</h2>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">The Engineered<br /><span className="text-blue-900 italic font-serif">Product</span></h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                            {/* Primary Focus: Risk Engine */}
                            <div className="md:col-span-12 group">
                                <div className="relative aspect-[16/8] bg-white rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-black/5 shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-700">
                                    <Image
                                        src="/images/shfhomegood.jpeg"
                                        alt="Acquisition Landing"
                                        fill
                                        className="object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-1000"
                                    />
                                </div>
                                <p className="mt-8 text-[10px] font-mono text-black/40 uppercase tracking-[0.4em] font-bold text-center italic">Primary Acquisition & Marketing Interface</p>
                            </div>

                            {/* Column 1: Landing & Dashboard */}
                            <div className="md:col-span-6 space-y-8 md:space-y-12">
                                <div className="group">
                                    <div className="relative aspect-[16/10] bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-700">
                                        <Image
                                            src="/images/shfrisk.png"
                                            alt="Risk Analysis Engine"
                                            fill
                                            className="object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <p className="mt-6 text-[10px] font-mono text-black/40 uppercase tracking-[0.4em] font-bold text-center italic">Risk Analysis Engine & Decision Logic</p>
                                </div>
                                <div className="group">
                                    <div className="relative aspect-[16/10] bg-white rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-700">
                                        <Image
                                            src="/images/shf1.png"
                                            alt="Internal Dashboard"
                                            fill
                                            className="object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <p className="mt-6 text-[10px] font-mono text-black/40 uppercase tracking-[0.4em] font-bold text-center italic">Institutional Client Core</p>
                                </div>
                            </div>

                            {/* Column 2: Lead Gen & Mobile */}
                            <div className="md:col-span-6 space-y-8 md:space-y-12">
                                <div className="group">
                                    <div className="relative aspect-[16/10] bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-700">
                                        <Image
                                            src="/images/shfcontact.png"
                                            alt="Lead Generation"
                                            fill
                                            className="object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <p className="mt-6 text-[10px] font-mono text-black/40 uppercase tracking-[0.4em] font-bold text-center italic">Contact & Lead Generation Pipeline</p>
                                </div>
                                <div className="group">
                                    <div className="relative aspect-[16/10] bg-blue-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-700 flex items-center justify-center p-8">
                                        <div className="relative w-1/2 h-full">
                                            {/* Mock Phone Notch */}
                                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-full z-10" />
                                            <Image
                                                src="/images/shfmobile2.png"
                                                alt="Mobile Experience"
                                                fill
                                                className="object-contain rounded-[2rem] group-hover:scale-105 transition-transform duration-1000"
                                            />
                                        </div>
                                        <div className="w-1/2 pl-8 space-y-4 text-white">
                                            <h4 className="text-xl font-black uppercase tracking-tight">Mobile<br />Velocity</h4>
                                            <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest leading-relaxed">
                                                Re-engineered thumb-zone interactions for mobile users.
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-[10px] font-mono text-black/40 uppercase tracking-[0.4em] font-bold text-center italic">Cross-Platform Optimization</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Results Section */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-white border-t border-black/5 text-center">
                    <div className="w-full max-w-7xl mx-auto">
                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-12">Final Impact</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24 max-w-5xl mx-auto">
                            <div className="space-y-4">
                                <span className="text-4xl md:text-6xl font-black block tracking-tighter leading-none">&lt;3m</span>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Quote Time</p>
                            </div>
                            <div className="space-y-4">
                                <span className="text-4xl md:text-6xl font-black block tracking-tighter leading-none">Multi</span>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Architecture</p>
                            </div>
                            <div className="space-y-4">
                                <span className="text-4xl md:text-6xl font-black block tracking-tighter leading-none">Zero</span>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Lag Exp.</p>
                            </div>
                            <div className="space-y-4">
                                <span className="text-4xl md:text-6xl font-black block tracking-tighter leading-none">Ready</span>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">B2B Sales</p>
                            </div>
                        </div>
                        <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] max-w-4xl mx-auto italic font-serif text-black/20">
                            Design Engineered for <span className="text-black">Velocity</span>.
                        </p>
                    </div>
                </section>

                {/* Next Project / Navigation Footer */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-gray-50 border-t border-black/5">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="space-y-4 text-center md:text-left">
                                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30">Next Project</p>
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Onlia Portal <span className="text-purple-900 italic font-serif">Experience</span></h3>
                                <p className="text-lg text-black/40 font-medium italic max-w-md">Reducing user drop-off through precision UX adjustments on a legacy insurance engine.</p>
                                <button
                                    onClick={() => onClose("onlia")}
                                    className="group inline-flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-purple-900 transition-colors mt-8"
                                >
                                    Explore Case Study
                                    <ArrowLeft className="w-6 h-6 rotate-180 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>

                            <button
                                onClick={() => onClose()}
                                className="px-12 py-6 border-2 border-black rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all active:scale-95"
                            >
                                Back to Home
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}
