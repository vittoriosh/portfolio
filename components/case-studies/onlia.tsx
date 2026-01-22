"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, MessageSquare, Users, Target, Code2 } from "lucide-react";

interface CaseStudyProps {
    onClose: (nextId?: string) => void;
}

export default function OnliaCaseStudy({ onClose }: CaseStudyProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-white overflow-y-auto"
        >
            <div ref={containerRef} className="relative text-black font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden min-h-screen">
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
                            <h1 className="text-6xl md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter mb-12 md:mb-20">
                                Onlia Portal
                                <br />
                                <span className="text-black/10 italic font-serif">Experience</span>
                            </h1>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-black/5">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Role</p>
                                    <p className="text-lg font-medium leading-tight">Product Designer & UX Lead</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Timeline</p>
                                    <p className="text-lg font-medium leading-tight">3 Months (Q3 2024)</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Tools</p>
                                    <p className="text-lg font-medium leading-tight">Figma, GA4, React</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Result</p>
                                    <p className="text-lg font-medium leading-tight italic font-serif text-purple-600">5% Drop-off Reduction</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Challenge Section */}
                <section className="py-24 md:py-48 bg-black text-white px-6 md:px-8">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                            <div className="space-y-8 md:space-y-12">
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">The Challenge</h2>
                                <p className="text-xl md:text-3xl font-light text-white/70 leading-relaxed italic">
                                    Onlia faced a significant business hurdle: a <span className="text-white font-medium">16% user drop-off rate</span>.
                                </p>
                                <p className="text-xl md:text-3xl font-light text-white/70 leading-relaxed">
                                    The complexity was doubled by the application&apos;s dual-nature; it was a &apos;two-in-one&apos; frontend used by both direct customers and insurance brokers. Drastic changes risked confusing brokers or creating massive technical debt.
                                </p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="p-10 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-xl">
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-12">Strategic Constraints</h3>
                                    <div className="space-y-8">
                                        {[
                                            "Zero-Confusion Broker Workflow",
                                            "No Disruptive Field Re-ordering",
                                            "Legacy Frontend Tech Stacks",
                                            "Multi-Tenant Syncing Issues"
                                        ].map((constraint) => (
                                            <div key={constraint} className="flex items-center gap-4">
                                                <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                                                    <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
                                                </div>
                                                <span className="text-xl md:text-2xl font-medium tracking-tight uppercase">{constraint}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Audience Section */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-white">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="mb-24 md:mb-32 text-center md:text-left">
                            <h2 className="text-6xl md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter mb-8 italic text-black/5">Dual Identity</h2>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none -mt-12 md:-mt-20 relative z-10">Audience Segmentation</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-[2rem] md:rounded-[3rem] overflow-hidden">
                            <div className="bg-white p-10 md:p-20 group hover:bg-gray-50 transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-10">
                                    <Users className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">The Direct Customer</h4>
                                <p className="text-xl md:text-2xl font-light leading-relaxed text-black/50 italic mb-10">
                                    &quot;I&apos;m one confusing question away from leaving. Just give me clarity and speed.&quot;
                                </p>
                                <div className="flex gap-4">
                                    <span className="px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest">Trust</span>
                                    <span className="px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest">Momentum</span>
                                </div>
                            </div>
                            <div className="bg-white p-10 md:p-20 group hover:bg-gray-50 transition-colors">
                                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-10">
                                    <Target className="w-8 h-8" />
                                </div>
                                <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">The Expert Broker</h4>
                                <p className="text-xl md:text-2xl font-light leading-relaxed text-black/50 italic mb-10">
                                    &quot;I do this 50 times a day. Don&apos;t move my fields or I&apos;ll lose profit.&quot;
                                </p>
                                <div className="flex gap-4">
                                    <span className="px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest">Muscle Memory</span>
                                    <span className="px-4 py-2 bg-black/5 rounded-full text-[10px] font-bold uppercase tracking-widest">Efficiency</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Process */}
                <section className="py-24 md:py-48 bg-gray-50 px-6 md:px-8">
                    <div className="w-full max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-24 md:mb-32 text-center">The Design Thinking Process</h2>

                        <div className="space-y-12 md:space-y-24">
                            {[
                                { step: "01", title: "Diagnostic Audit", content: "Diving deep into GA4 to prove the spike in abandonment at technical input stages." },
                                { step: "02", title: "Competitive Landscape", content: "Analysis revealed Onlia missing modern micro-interactions and trust signals compared to top fintech apps." },
                                { step: "03", title: "Technical Sovereignty", content: "Architected a UI that feel fresh without altering the broker-critical data structure." },
                                { step: "04", title: "The Refactor", content: "Implemented 'Dialogue-First' design—simplifying visual weight and adding contextual guidance." },
                                { step: "05", title: "Validation", content: "Post-launch metrics confirmed a massive reduction in drop-off rates from 16% to 11%." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 md:gap-16 items-start"
                                >
                                    <span className="text-6xl md:text-8xl font-black text-black/10 leading-none tracking-tighter">{item.step}</span>
                                    <div className="space-y-4">
                                        <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-xl md:text-2xl text-black/50 leading-relaxed font-light italic">&quot;{item.content}&quot;</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section: Visual Transformation (The Transformation) */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-white">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="mb-24 text-center md:text-left">
                            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">The Transformation</h2>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Visual Evolution</h3>
                        </div>

                        {/* Legacy View */}
                        <div className="mb-32">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">The Legacy</div>
                                <div className="h-px flex-1 bg-black/10" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                                <div className="md:col-span-8 group">
                                    <div className="relative aspect-[16/10] bg-gray-100 rounded-[2rem] overflow-hidden border border-black/5 shadow-xl">
                                        <Image
                                            src="/images/onliaold2.png"
                                            alt="Old Onlia Desktop UI"
                                            fill
                                            className="object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <p className="mt-6 text-sm font-mono text-black/40 uppercase tracking-widest italic">Desktop: Fragmented hierarchy and high visual noise.</p>
                                </div>
                                <div className="md:col-span-4 group">
                                    <div className="relative aspect-[9/16] bg-gray-100 rounded-[2rem] overflow-hidden border border-black/5 shadow-xl w-2/3 mx-auto md:w-full">
                                        <Image
                                            src="/images/onliaold.png"
                                            alt="Old Onlia Mobile UI"
                                            fill
                                            className="object-contain p-4 md:p-8 group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <p className="mt-6 text-sm font-mono text-black/40 uppercase tracking-widest italic text-center md:text-left">Mobile: High friction and poor thumb-zone optimization.</p>
                                </div>
                            </div>
                        </div>

                        {/* New Experience */}
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="px-4 py-2 bg-purple-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">The New Experience</div>
                                <div className="h-px flex-1 bg-purple-600/20" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start group">
                                <div className="md:col-span-8 group/img">
                                    <div className="relative aspect-[16/10] bg-gray-50 rounded-[2rem] overflow-hidden border border-purple-600/20 shadow-[0_40px_80px_-20px_rgba(147,51,234,0.2)]">
                                        <Image
                                            src="/images/onlianew11.png"
                                            alt="New Onlia Desktop UI"
                                            fill
                                            className="object-contain p-4 md:p-8 group-hover/img:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <p className="mt-6 text-sm font-mono text-purple-900/40 uppercase tracking-widest italic font-bold">New Desktop: Streamlined hierarchy and reduced cognitive load.</p>
                                </div>
                                <div className="md:col-span-4 group/img">
                                    <div className="relative aspect-[9/16] bg-gray-50 rounded-[2rem] overflow-hidden border border-purple-600/20 shadow-[0_40px_80px_-20px_rgba(147,51,234,0.2)] w-2/3 mx-auto md:w-full">
                                        <Image
                                            src="/images/onlianew.png"
                                            alt="New Onlia Mobile UI"
                                            fill
                                            className="object-contain p-4 md:p-8 group-hover/img:scale-105 transition-transform duration-1000"
                                        />
                                    </div>
                                    <p className="mt-6 text-sm font-mono text-purple-900/40 uppercase tracking-widest italic font-bold text-center md:text-left">New Mobile: Re-engineered thumb-zone and dialogue-first UI.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Solution Pillars */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-white">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
                            <div className="space-y-8">
                                <div className="aspect-square bg-black text-white rounded-[2rem] md:rounded-[3rem] flex items-center justify-center p-12">
                                    <MessageSquare className="w-full h-full opacity-20" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black uppercase leading-tight">Conversational dialogue</h4>
                                <p className="text-lg text-black/50 leading-relaxed italic">Rewriting static labels into natural, human guidance that builds confidence.</p>
                            </div>
                            <div className="space-y-8">
                                <div className="aspect-square bg-purple-600 text-white rounded-[2rem] md:rounded-[3rem] flex items-center justify-center p-12">
                                    <Code2 className="w-full h-full opacity-20" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black uppercase leading-tight">Technical sovereignty</h4>
                                <p className="text-lg text-black/50 leading-relaxed italic">Engineered a single React mount that adapts its density based on user detection.</p>
                            </div>
                            <div className="space-y-8">
                                <div className="aspect-square bg-gray-100 text-black rounded-[2rem] md:rounded-[3rem] flex items-center justify-center p-12">
                                    <Target className="w-full h-full opacity-20" />
                                </div>
                                <h4 className="text-2xl md:text-3xl font-black uppercase leading-tight">Trust-metric UI</h4>
                                <p className="text-lg text-black/50 leading-relaxed italic">Strategic placement of trust signals during high-friction financial steps.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcome Section */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-purple-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                        <BarChart3 className="w-full h-full" />
                    </div>
                    <div className="w-full max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                            <div>
                                <h2 className="text-4xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-12">Business Outcomes</h2>
                                <p className="text-2xl md:text-4xl font-light italic opacity-90 leading-tight">&quot;A redesign that proved optimization doesn&apos;t require architectural destruction.&quot;</p>
                            </div>
                            <div className="grid grid-cols-1 gap-8">
                                <div className="p-10 bg-white/10 rounded-[2rem] border border-white/20 backdrop-blur-md">
                                    <span className="text-6xl md:text-8xl font-black block mb-4 tracking-tighter leading-none">16% → 11%</span>
                                    <p className="text-xs uppercase tracking-[.4em] font-bold opacity-60">Reduction in Drop-off</p>
                                </div>
                                <div className="p-10 bg-white/10 rounded-[2rem] border border-white/20 backdrop-blur-md">
                                    <span className="text-6xl md:text-7xl font-black block mb-4 tracking-tighter">~30%</span>
                                    <p className="text-xs uppercase tracking-[.4em] font-bold opacity-60">UX Support Efficiency</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Next Project / Navigation Footer */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-gray-50 border-t border-black/5">
                    <div className="w-full max-w-7xl mx-auto text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="space-y-4">
                                <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30">Next Project</p>
                                <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">South Hampton <span className="text-blue-900 italic font-serif">Financials</span></h3>
                                <p className="text-lg text-black/40 font-medium italic max-w-md">Scaling a multi-tenant, white-label acquisition platform for the commercial insurance market.</p>
                                <button
                                    onClick={() => onClose("south-hampton")}
                                    className="group inline-flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-blue-900 transition-colors mt-8"
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
