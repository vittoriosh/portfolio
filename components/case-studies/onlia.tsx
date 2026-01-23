"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, BarChart3, CheckCircle2 } from "lucide-react";

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
                                <span className="text-black/10 italic font-serif">Redesign</span>
                            </h1>

                            <div className="mb-12">
                                <p className="text-2xl md:text-4xl font-light text-black/60 leading-tight italic max-w-4xl">
                                    Optimizing Customer Conversion via <span className="text-black font-medium">Persona-Adaptive UI</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-black/5">
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Role</p>
                                    <p className="text-lg font-medium leading-tight">Product Engineer (Design & Lead Dev)</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Tools</p>
                                    <p className="text-lg font-medium leading-tight">Figma, Google Analytics, React</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-black/30">Result</p>
                                    <p className="text-lg font-medium leading-tight italic font-serif text-purple-600">5% Drop-off Reduction (16% → 11%)</p>
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
                                <p className="text-xl md:text-3xl font-light text-white/70 leading-relaxed">
                                    Onlia faced a critical <span className="text-white font-medium">16% user drop-off rate</span> on the initial portal entry page. The complexity was rooted in the application’s dual nature: it served both Direct Customers and CSRs/Brokers.
                                </p>
                                <p className="text-xl md:text-3xl font-light text-white/70 leading-relaxed italic border-l-2 border-purple-500 pl-8">
                                    Drastic changes risked confusing internal staff or creating massive technical debt, yet the existing UI was actively driving users away.
                                </p>
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="p-10 bg-white/5 border border-white/10 rounded-[2rem] md:rounded-[3rem] backdrop-blur-xl">
                                    <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-12">Strategic Constraints</h3>
                                    <div className="space-y-8">
                                        {[
                                            { title: "Zero-Confusion CSR Workflow", desc: "Internal staff required the exact legacy layout to maintain speed." },
                                            { title: "Structural Integrity", desc: "No re-ordering of fields to prevent disrupting backend data syncing." },
                                            { title: "Technical Sovereignty", desc: "Modernize the experience without architectural destruction." }
                                        ].map((constraint, i) => (
                                            <div key={i} className="space-y-2">
                                                <div className="flex items-center gap-3">
                                                    <CheckCircle2 className="w-5 h-5 text-purple-500" />
                                                    <span className="text-lg font-bold uppercase tracking-tight">{constraint.title}</span>
                                                </div>
                                                <p className="text-white/40 text-sm pl-8">{constraint.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Thinking Process */}
                <section className="py-24 md:py-48 bg-gray-50 px-6 md:px-8">
                    <div className="w-full max-w-5xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-24 md:mb-32 text-center text-purple-900">The Design Thinking Process</h2>

                        <div className="space-y-12 md:space-y-32">
                            {[
                                {
                                    step: "01",
                                    title: "Diagnostic Audit",
                                    content: "I utilized Google Analytics and UI audits to pinpoint why users were abandoning the flow. The diagnostics revealed obsolete UI patterns, low interactivity (small hit-zones), and massive responsiveness gaps on mobile devices."
                                },
                                {
                                    step: "02",
                                    title: "Component-Level Mode Switching",
                                    content: "To solve the dual-persona conflict, I transitioned from a 'universal' layout to a Conditional Component Mode. I encapsulated the legacy layout for CSRs while designing an entirely new, high-conversion 'Customer Mode' from scratch."
                                },
                                {
                                    step: "03",
                                    title: "Dialogue-First Design",
                                    content: "Within the Customer component, I simplified the visual weight. I implemented Progressive Disclosure to group fields into conversational steps, adding contextual guidance and larger, accessible input fields."
                                },
                                {
                                    step: "04",
                                    title: "Mobile & Thumb-Zone Optimization",
                                    content: "By shifting primary inputs into the natural reach area and increasing touch-target sizes specifically for the Customer Mode, I addressed the physical friction identified in the initial audit."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-8 md:gap-16 items-start"
                                >
                                    <span className="text-6xl md:text-8xl font-black text-purple-200 leading-none tracking-tighter">{item.step}</span>
                                    <div className="space-y-6">
                                        <h4 className="text-2xl md:text-4xl font-black uppercase tracking-tight">{item.title}</h4>
                                        <p className="text-xl md:text-2xl text-black/60 leading-relaxed font-light">{item.content}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Visual Transformation */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-white overflow-hidden">
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="mb-24 text-center md:text-left">
                            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-black/30 mb-8">The Transformation</h2>
                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Visual Evolution</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-32">
                            {[
                                { feature: "Interactivity", legacy: "Small hit-zones; hard to click.", newEx: "High-Affordance; Large, accessible inputs." },
                                { feature: "Mobile UX", legacy: "Poor responsiveness; high friction.", newEx: "Optimized; Re-engineered for one-handed use." },
                                { feature: "CSR Experience", legacy: "Mixed with customer UI.", newEx: "Protected; Exact legacy layout preserved." }
                            ].map((row, i) => (
                                <div key={i} className="border-b border-black/5 pb-8 group">
                                    <h4 className="text-[10px] uppercase tracking-widest font-black text-purple-600 mb-4">{row.feature}</h4>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[8px] uppercase tracking-widest font-bold text-black/20 mb-1">Old Design</p>
                                            <p className="text-lg text-black/40 line-through decoration-1">{row.legacy}</p>
                                        </div>
                                        <div>
                                            <p className="text-[8px] uppercase tracking-widest font-bold text-purple-600/40 mb-1">New Experience</p>
                                            <p className="text-lg font-bold text-black group-hover:text-purple-600 transition-colors uppercase tracking-tight">{row.newEx}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Old Design View */}
                        <div className="mb-32">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="px-4 py-2 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">Old Design</div>
                                <div className="h-px flex-1 bg-black/10" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                                <div className="md:col-span-8 group">
                                    <div className="relative aspect-[16/10] bg-gray-100 rounded-[2rem] overflow-hidden border border-black/5 shadow-xl">
                                        {/* Browser-like top bar */}
                                        <div className="absolute top-0 inset-x-0 h-6 bg-gray-200/50 flex items-center px-4 gap-1.5 z-10">
                                            <div className="w-2 h-2 rounded-full bg-black/10" />
                                            <div className="w-2 h-2 rounded-full bg-black/10" />
                                            <div className="w-2 h-2 rounded-full bg-black/10" />
                                        </div>
                                        <Image
                                            src="/images/onliaold2.png"
                                            alt="Old Onlia Desktop UI"
                                            fill
                                            className="object-contain pt-6 p-2 group-hover:scale-[1.02] transition-transform duration-1000"
                                        />
                                    </div>
                                    <p className="mt-6 text-sm font-mono text-black/40 uppercase tracking-widest italic">Desktop: Fragmented hierarchy and high visual noise.</p>
                                </div>
                                <div className="md:col-span-4 group">
                                    <div className="relative aspect-[9/17] bg-[#0F0F0F] rounded-[2.5rem] p-1.5 shadow-2xl border-[4px] border-[#1A1A1A] w-full max-w-[260px] mx-auto overflow-hidden">
                                        {/* Dynamic Island */}
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                                            <div className="w-1 h-1 rounded-full bg-blue-500/20 mr-2" />
                                        </div>

                                        <div className="relative w-full h-full bg-gray-100 rounded-[1.8rem] overflow-hidden">
                                            <Image
                                                src="/images/onliaold.png"
                                                alt="Old Onlia Mobile UI"
                                                fill
                                                className="object-contain p-1 group-hover:scale-105 transition-transform duration-1000"
                                            />
                                        </div>
                                    </div>
                                    <p className="mt-8 text-sm font-mono text-black/40 uppercase tracking-widest italic text-center">Mobile: High friction and poor thumb-zone optimization.</p>
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
                                        {/* Browser-like top bar */}
                                        <div className="absolute top-0 inset-x-0 h-6 bg-purple-100/30 flex items-center px-4 gap-1.5 z-10">
                                            <div className="w-2 h-2 rounded-full bg-purple-600/20" />
                                            <div className="w-2 h-2 rounded-full bg-purple-600/20" />
                                            <div className="w-2 h-2 rounded-full bg-purple-600/20" />
                                        </div>
                                        <Image
                                            src="/images/onlianew11.png"
                                            alt="New Onlia Desktop UI"
                                            fill
                                            className="object-contain pt-6 p-2 group-hover/img:scale-[1.02] transition-transform duration-1000"
                                        />
                                    </div>
                                    <p className="mt-6 text-sm font-mono text-purple-900/40 uppercase tracking-widest italic font-bold">New Desktop: Streamlined hierarchy and reduced cognitive load.</p>
                                </div>
                                <div className="md:col-span-4 group/img">
                                    <div className="relative aspect-[9/17] bg-[#0F0F0F] rounded-[2.5rem] p-1.5 shadow-[0_40px_80px_-20px_rgba(147,51,234,0.3)] border-[4px] border-[#1A1A1A] w-full max-w-[260px] mx-auto overflow-hidden">
                                        {/* Dynamic Island */}
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 flex items-center justify-center">
                                            <div className="w-1 h-1 rounded-full bg-purple-500/20 mr-2" />
                                        </div>

                                        <div className="relative w-full h-full bg-gray-50 rounded-[1.8rem] overflow-hidden">
                                            <Image
                                                src="/images/onlianewmobilee.png"
                                                alt="New Onlia Mobile UI"
                                                fill
                                                className="object-contain p-1 group-hover/img:scale-105 transition-transform duration-1000"
                                            />
                                        </div>
                                    </div>
                                    <p className="mt-8 text-sm font-mono text-purple-900/40 uppercase tracking-widest italic font-bold text-center">New Mobile: Re-engineered thumb-zone and dialogue-first UI.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Business Outcomes */}
                <section className="py-24 md:py-48 px-6 md:px-8 bg-purple-900 text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                        <BarChart3 className="w-full h-full" />
                    </div>
                    <div className="w-full max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                            <div>
                                <h2 className="text-4xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-12">Business Outcomes</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-8 bg-white/10 rounded-[2rem] border border-white/20 backdrop-blur-md">
                                    <span className="text-4xl md:text-5xl font-black block mb-4 tracking-tighter leading-none text-purple-300">16% → 11%</span>
                                    <p className="text-[10px] uppercase tracking-[.4em] font-bold opacity-60 mb-2">Reduction in Drop-off</p>
                                    <p className="text-sm text-white/80 leading-relaxed font-light">A 5-point improvement in customer retention.</p>
                                </div>

                                <div className="p-8 bg-white/10 rounded-[2rem] border border-white/20 backdrop-blur-md">
                                    <span className="text-4xl md:text-5xl font-black block mb-4 tracking-tighter text-purple-300">0</span>
                                    <p className="text-[10px] uppercase tracking-[.4em] font-bold opacity-60 mb-2">Training Overhead</p>
                                    <p className="text-sm text-white/80 leading-relaxed font-light">Internal staff maintained 100% productivity.</p>
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
