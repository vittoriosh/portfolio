"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Search, Layers, Database, Workflow } from "lucide-react";

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
                <div className="fixed inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />

                {/* Hero */}
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
                                Commercial Insurance
                                <br />
                                <span className="text-black italic font-serif font-black">Quote &amp; Bind Platform</span>
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 border-t border-black/5 pt-12">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Role</p>
                                    <p className="text-lg font-medium leading-tight">Technical Product Manager Canada</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Project</p>
                                    <p className="text-lg font-medium leading-tight">Aha Commercial Online Platform</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Impact</p>
                                    <p className="text-lg font-medium leading-tight text-blue-900 italic font-serif text-nowrap">0 → 1 in 3 Months</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Focus</p>
                                    <p className="text-lg font-medium leading-tight">Product, Architecture &amp; Frontend</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Executive Summary */}
                <section className="py-24 md:py-48 bg-gray-50 px-6 md:px-8">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
                            <div className="md:col-span-4">
                                <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">Executive Summary</h2>
                                <p className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none italic font-serif text-blue-900">
                                    The Build
                                </p>
                            </div>
                            <div className="md:col-span-8 space-y-12">
                                <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight text-black/80">
                                    I built a new <span className="text-black font-semibold italic">commercial insurance online platform</span> that lets businesses quote and bind coverage end-to-end — from broker discovery through system design, data modeling, frontend delivery, and tracking.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-black/5">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold uppercase tracking-widest">The Outcome</h3>
                                        <p className="text-lg text-black/60 font-medium italic">A live acquisition experience at commercial.ahainsurance.ca, engineered for conversion and wired into Salesforce through MuleSoft.</p>
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold uppercase tracking-widest text-blue-900">My Scope</h3>
                                        <p className="text-lg text-black/60 font-medium italic">Requirements, data model, system design, API selection, tickets &amp; delivery, full frontend build, and analytics instrumentation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Context */}
                <section className="py-24 md:py-48 bg-black text-white px-6 md:px-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                        <Layers className="w-full h-full" />
                    </div>
                    <div className="w-full max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                            <div className="space-y-8 md:space-y-12">
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                                    Context &amp;
                                    <br />
                                    <span className="text-white/20">Business Need</span>
                                </h2>
                                <p className="text-xl md:text-3xl font-light text-white/70 leading-relaxed italic border-l-4 border-blue-500 pl-8">
                                    Brokers needed a modern digital path to quote and bind commercial policies online — not another legacy form bolted onto an old stack.
                                </p>
                                <p className="text-xl md:text-3xl font-light text-white/70 leading-relaxed">
                                    I worked cross-functionally with insurance and marketing to turn broker requirements into a shippable system: data objects that satisfied underwriting needs, and a frontend journey optimized for conversion.
                                </p>
                            </div>

                            <div className="flex flex-col justify-center">
                                <div className="p-10 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-xl">
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8 md:mb-12">What Had to Be True</h3>
                                    <div className="space-y-8">
                                        {[
                                            { title: "Insurance-Ready Data Model", desc: "Objects and fields had to satisfy underwriting, binding, and marketing use cases." },
                                            { title: "Reliable System Flow", desc: "Frontend → MuleSoft → backend → Salesforce with a clear contract at every hop." },
                                            { title: "Conversion-First UX", desc: "Competitor research informed a journey designed for completion, not just compliance." }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-6 items-start">
                                                <div className="w-6 h-6 rounded-full border border-blue-500/50 flex items-center justify-center text-blue-400 mt-1">
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

                {/* Discovery */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-white">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="mb-24 text-center md:text-left">
                            <h2 className="text-6xl md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter mb-8 italic text-black/5">The &quot;Why&quot;</h2>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none -mt-12 md:-mt-20 relative z-10">Discovery &amp; Research</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-start mb-24">
                            <div className="space-y-12">
                                <p className="text-2xl md:text-4xl font-light text-black/80 leading-tight">
                                    Requirements came from the people who sell the product — <span className="font-bold underline decoration-blue-900 decoration-4 underline-offset-8">broker interviews</span>, not assumptions.
                                </p>
                                <div className="p-12 bg-gray-50 rounded-[2rem] md:rounded-[3rem] border border-black/5 space-y-6">
                                    <h4 className="text-xl font-bold uppercase tracking-tight flex items-center gap-4">
                                        <Search className="w-6 h-6 text-blue-900" />
                                        Competitor UX Audit
                                    </h4>
                                    <p className="text-xl font-medium italic text-black/50 leading-relaxed">
                                        I researched competing commercial insurance sites and documented UX/UI patterns that drive conversion — then used that playbook to shape our application flow.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-16">
                                <div className="space-y-4">
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/30">Broker Input</h4>
                                    <p className="text-2xl md:text-3xl font-medium tracking-tight">Captured business requirements through interviews and translated them into a system the insurance and marketing teams could both stand behind.</p>
                                </div>
                                <div className="space-y-4 pt-12 border-t border-black/5">
                                    <h4 className="text-[10px] uppercase tracking-widest font-bold text-black/30">Delivery Rhythm</h4>
                                    <p className="text-2xl md:text-3xl font-medium tracking-tight">Created tickets, helped manage the project, and kept cross-functional work moving from requirements → design → build.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Architecture */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-gray-50">
                    <div className="w-full max-w-7xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-24 md:mb-32 text-center">System Design &amp; Delivery</h2>

                        <div className="space-y-4 max-w-5xl mx-auto">
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-xl flex flex-col md:flex-row gap-8 items-start hover:bg-gray-50 transition-colors group">
                                <div className="w-16 h-16 rounded-2xl bg-blue-900 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <Database className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4 text-blue-900">Data Objects &amp; Model</h3>
                                    <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed italic">
                                        Built the data object/model so it satisfied insurance underwriting needs and marketing requirements — the foundation everything else depended on.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-xl flex flex-col md:flex-row gap-8 items-start hover:bg-gray-50 transition-colors group">
                                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <Workflow className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">End-to-End Data Flow</h3>
                                    <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed italic">
                                        Completed system design and mapped how data moves from the frontend through MuleSoft into the backend and Salesforce — so quoting and binding stayed synchronized with the system of record.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-xl flex flex-col md:flex-row gap-8 items-start hover:bg-gray-50 transition-colors group">
                                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform font-black text-2xl tracking-tighter">
                                    API
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">API Structure &amp; Selection</h3>
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-blue-100 text-blue-900 px-4 py-1.5 rounded-full">Cost × Fit</span>
                                    </div>
                                    <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed italic">
                                        Outlined the API structure and researched providers to find options that met requirements at the lowest viable cost — without cutting corners on reliability.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-black/5 shadow-xl flex flex-col md:flex-row gap-8 items-start hover:bg-gray-50 transition-colors group">
                                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform font-black text-2xl tracking-tighter">
                                    FE
                                </div>
                                <div>
                                    <div className="flex flex-wrap items-center gap-4 mb-4">
                                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">Frontend + Tracking</h3>
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-black/5 text-black px-4 py-1.5 rounded-full">Full Build</span>
                                    </div>
                                    <p className="text-lg md:text-xl text-black/60 font-medium leading-relaxed italic">
                                        Built the entire frontend experience and incorporated tracking/data mechanics so product and marketing could see how users moved through quote and bind.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Showcase */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-white overflow-hidden">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="mb-24 text-center md:text-left">
                            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">Product Showcase</h2>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Live on<br /><span className="text-blue-900 italic font-serif">commercial.ahainsurance.ca</span></h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                            <div className="md:col-span-12 group">
                                <div className="relative aspect-[16/9] bg-white rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-black/5 shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-700">
                                    <Image
                                        src="/images/aha-commercial-hero.png"
                                        alt="Aha Commercial landing — Let's get started"
                                        fill
                                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-1000"
                                    />
                                </div>
                                <p className="mt-8 text-[10px] font-mono text-black/40 uppercase tracking-[0.4em] font-bold text-center italic">Acquisition Landing — Quote Entry Point</p>
                            </div>

                            <div className="md:col-span-7 group">
                                <div className="relative aspect-[16/10] bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl group-hover:shadow-blue-900/10 transition-all duration-700">
                                    <Image
                                        src="/images/aha-commercial-industry.png"
                                        alt="Industry search with profession suggestions"
                                        fill
                                        className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-1000"
                                    />
                                </div>
                                <p className="mt-6 text-[10px] font-mono text-black/40 uppercase tracking-[0.4em] font-bold text-center italic">Industry Search — Profession Matching Engine</p>
                            </div>

                            <div className="md:col-span-5 group">
                                <div className="relative min-h-[480px] bg-[#0073CE] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-black/5 shadow-2xl flex flex-col items-center justify-center gap-8 p-8">
                                    <div className="relative w-[220px] aspect-[9/19] rounded-[1.75rem] overflow-hidden border-[3px] border-white/20 shadow-2xl bg-white">
                                        <Image
                                            src="/images/aha-commercial-mobile.png"
                                            alt="Mobile commercial quote experience"
                                            fill
                                            className="object-cover object-top group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <div className="space-y-2 text-white text-center">
                                        <h4 className="text-xl font-black uppercase tracking-tight">Mobile First Path</h4>
                                        <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest leading-relaxed max-w-[200px] mx-auto">
                                            Same conversion-focused journey on small screens.
                                        </p>
                                    </div>
                                </div>
                                <p className="mt-6 text-[10px] font-mono text-black/40 uppercase tracking-[0.4em] font-bold text-center italic">Responsive Quote Experience</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-white border-t border-black/5 text-center">
                    <div className="w-full max-w-7xl mx-auto">
                        <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-12">What Shipped</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-24 max-w-5xl mx-auto">
                            <div className="space-y-4">
                                <span className="text-4xl md:text-6xl font-black block tracking-tighter leading-none">0→1</span>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Platform Launch</p>
                            </div>
                            <div className="space-y-4">
                                <span className="text-4xl md:text-6xl font-black block tracking-tighter leading-none">FE</span>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Full Frontend</p>
                            </div>
                            <div className="space-y-4">
                                <span className="text-4xl md:text-6xl font-black block tracking-tighter leading-none">SF</span>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Salesforce Sync</p>
                            </div>
                            <div className="space-y-4">
                                <span className="text-4xl md:text-6xl font-black block tracking-tighter leading-none">Live</span>
                                <p className="text-[10px] uppercase tracking-widest font-bold opacity-30">Quote &amp; Bind</p>
                            </div>
                        </div>
                        <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] max-w-4xl mx-auto italic font-serif text-black/20">
                            Requirements to <span className="text-black">Production</span>.
                        </p>
                    </div>
                </section>

                <section className="py-24 md:py-48 px-6 md:px-8 bg-gray-50 border-t border-black/5">
                    <div className="w-full max-w-7xl mx-auto flex justify-center">
                        <button
                            onClick={() => onClose()}
                            className="px-12 py-6 border-2 border-black rounded-full text-xs font-bold uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-all active:scale-95"
                        >
                            Back to Home
                        </button>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}
