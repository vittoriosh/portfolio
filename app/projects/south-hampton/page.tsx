'use client'

import { motion } from "motion/react"
import { ArrowLeft, CheckCircle2, Layout, Search, BarChart3, Zap, Brain } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { Badge } from "@/components/ui/badge"

export default function SouthHamptonCaseStudy() {
    const steps = [
        {
            title: "Discovery & Strategy",
            icon: <Search className="w-5 h-5" />,
            content: "Conducted exhaustive competitor and user research to architect the optimal information hierarchy. Analyzed cognitive load to determine precise question ordering and density per page, ensuring sustained user attention throughout the process."
        },
        {
            title: "Data Orchestration",
            icon: <BarChart3 className="w-5 h-5" />,
            content: "Engineered a robust object schema, transforming legacy insurance forms into structured data objects. Devised a comprehensive reference data system to eliminate open-ended responses, allowing the backend rating engine to process quotes with zero friction."
        },
        {
            title: "Psychological UX",
            icon: <Brain className="w-5 h-5" />,
            content: "Strategically implemented the 'Sunk Cost Fallacy' by front-loading the journey with high-velocity, effortless questions. This momentum carries users through the more complex sections in the middle and end of the flow, significantly reducing drop-off rates."
        },
        {
            title: "Performance Engineering",
            icon: <Zap className="w-5 h-5" />,
            content: "Developed a rapid '2-page' paradigm. The initial landing captures intent quickly; the subsequent 'journey' page uses React-driven conditional rendering. This creates an app-like, seamless transition without the latency of multi-page loads."
        }
    ]

    return (
        <div className="min-h-screen bg-[#283655] text-[#EAF1F6] selection:bg-[#EAF1F6]/20">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Back Link */}
                    <Link href="/projects" className="group inline-flex items-center gap-2 text-[#EAF1F6]/60 hover:text-white transition-colors mb-12">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-sm uppercase tracking-widest">Back to Projects</span>
                    </Link>

                    {/* Hero Header */}
                    <div className="space-y-8 mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Badge variant="outline" className="border-[#EAF1F6]/20 text-[#EAF1F6]/60 rounded-full px-4 mb-6">
                                Case Study: South Hampton Financials
                            </Badge>
                            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                                Revolutionizing Commercial <span className="text-[#EAF1F6]/80 italic font-serif">Insurance Quoting</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-[#EAF1F6]/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="space-y-2">
                                <p className="font-mono text-xs uppercase tracking-widest text-[#EAF1F6]/40">Role</p>
                                <p className="text-lg">Lead Product Designer & Frontend Architect</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-mono text-xs uppercase tracking-widest text-[#EAF1F6]/40">Context</p>
                                <p className="text-lg">Portfolio Company Optimization for Private Equity</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-mono text-xs uppercase tracking-widest text-[#EAF1F6]/40">Core Metric</p>
                                <p className="text-lg">High Conversion & Performance Speed</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* The Challenge Section */}
                    <section className="mb-32 space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight text-white">The Vision</h2>
                                <p className="text-lg text-[#EAF1F6]/70 leading-relaxed font-light">
                                    South Hampton Financials required a unified commercial insurance quoting system that wasn&apos;t just a single-tenant app. The mission was to build a multi-functional platform capable of being deployed across several different companies within a private equity portfolio.
                                </p>
                                <p className="text-lg text-[#EAF1F6]/70 leading-relaxed font-light">
                                    The goal from shareholders was uncompromising: extreme performance speed, high user conversion, and a world-class user experience that removed all &apos;insurance friction&apos;.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center shadow-xl">
                                <h3 className="font-mono text-xs uppercase tracking-widest text-[#EAF1F6]/40 mb-6">Key Engineering Feats</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Data Object Serialization for Rating Engines",
                                        "React-Driven Single-Page Transition State",
                                        "Multi-Tenant Architectural Logic",
                                        "Responsive Precision (Desktop/Mobile First)"
                                    ].map((feat) => (
                                        <li key={feat} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
                                            <span className="text-white/90">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Deep Dive Grid */}
                    <section className="mb-32">
                        <h2 className="text-3xl font-bold tracking-tight mb-12 text-white">The Implementation Architecture</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-4 hover:bg-white/10 transition-colors"
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="w-10 h-10 rounded-lg bg-[#EAF1F6]/10 flex items-center justify-center text-[#EAF1F6]">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold tracking-tight text-white">{step.title}</h3>
                                    <p className="text-[#EAF1F6]/60 leading-relaxed font-light text-sm italic">&quot;{step.content}&quot;</p>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Product Spotlight: The 2-Page Paradigm */}
                    <section className="mb-32 bg-[#EAF1F6] text-[#283655] rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6 uppercase">The 2-Page Seamless Journey</h2>
                            <p className="text-lg leading-relaxed mb-8 opacity-80 font-medium">
                                To enhance speed, I discarded the traditional multi-page linear form. Instead, I developed a dual-phase experience:
                                <span className="block mt-4 font-bold border-l-4 border-[#283655] pl-4 py-2">
                                    Page 1: Discovery. Minimalist intent capture.
                                    <br />
                                    Page 2: The Journey. A React-powered engine using conditional rendering to glide the user through the quote flow on a single technical mount.
                                </span>
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="h-2 flex-1 bg-[#283655]/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-[#283655] w-2/3 shadow-[0_0_10px_rgba(40,54,85,0.3)]" />
                                    </div>
                                    <span className="font-mono text-sm font-bold uppercase tracking-widest">Progress Bar UX</span>
                                </div>
                                <p className="text-sm opacity-60">
                                    Implemented a minimalist progress bar to maintain user momentum and eliminate uncertainty regarding time-to-completion.
                                </p>
                            </div>
                        </div>
                        {/* Visual Abstract Decoration */}
                        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#283655]/5 hidden lg:flex items-center justify-center">
                            <Layout className="w-40 h-40 opacity-10" />
                        </div>
                    </section>

                    {/* Closing Summary */}
                    <section className="text-center pt-20 border-t border-[#EAF1F6]/10">
                        <h2 className="font-mono text-xs uppercase tracking-widest text-[#EAF1F6]/40 mb-8">Final Reflection</h2>
                        <p className="text-2xl sm:text-3xl font-light italic text-[#EAF1F6]/80 max-w-3xl mx-auto leading-relaxed">
                            &quot;Building for insurance is building for clarity. By leveraging psychological principles like sunk-cost fallacies and high-performance React architecture, we turned a tedious regulatory requirement into a frictionless, multi-company platform.&quot;
                        </p>
                    </section>
                </div>
            </main>
        </div>
    )
}
