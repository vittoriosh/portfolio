'use client'

import { motion } from "motion/react"
import { ArrowLeft, CheckCircle2, BarChart3, MessageSquare, Users, Target, Settings, Code2 } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { Badge } from "@/components/ui/badge"

export default function OnliaCaseStudy() {
    return (
        <div className="min-h-screen bg-[#7A007A] text-white selection:bg-white/20">
            <Navigation />

            <main className="pt-32 pb-24 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Back Link */}
                    <Link href="/projects" className="group inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12">
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
                            <Badge variant="outline" className="border-white/20 text-white/60 rounded-full px-4 mb-6">
                                Case Study: Onlia Insurance
                            </Badge>
                            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1]">
                                Optimizing Retention via <span className="text-white/80 italic font-serif">Strategic UX Refactoring</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="space-y-2">
                                <p className="font-mono text-xs uppercase tracking-widest text-white/40">Role</p>
                                <p className="text-sm sm:text-base font-medium">Product Designer & UX Lead</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-mono text-xs uppercase tracking-widest text-white/40">Timeline</p>
                                <p className="text-sm sm:text-base font-medium">3 Months (Q3 2024)</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-mono text-xs uppercase tracking-widest text-white/40">Tools</p>
                                <p className="text-sm sm:text-base font-medium">Figma, GA4, React</p>
                            </div>
                            <div className="space-y-2">
                                <p className="font-mono text-xs uppercase tracking-widest text-white/40">Result</p>
                                <p className="text-sm sm:text-base font-medium">5% Drop-off Reduction</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Context & The Challenge */}
                    <section className="mb-32 space-y-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <h2 className="text-3xl font-bold tracking-tight uppercase">The Challenge</h2>
                                <p className="text-lg text-white/80 leading-relaxed font-light">
                                    Onlia faced a significant business hurdle: a **16% user drop-off rate**. Initial data from Google Analytics revealed that the &apos;outdated&apos; UI was causing friction both at the start of the journey and throughout the quote flow.
                                </p>
                                <p className="text-lg text-white/80 leading-relaxed font-light">
                                    The complexity was doubled by the application&apos;s dual-nature; it was a &apos;two-in-one&apos; frontend used by both direct customers and insurance brokers. Drastic changes risked confusing brokers or creating massive technical debt from field re-ordering.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center shadow-xl">
                                <h3 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6 font-bold">Strategic Constraints</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Zero-Confusion Broker Workflow",
                                        "No Disruptive Field Re-ordering",
                                        "Legacy Frontend Tech Stacks",
                                        "Multi-Tenant Syncing Issues"
                                    ].map((feat) => (
                                        <li key={feat} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-white/40 mt-0.5" />
                                            <span className="text-white/90">{feat}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* User Archetypes Section */}
                    <section className="mb-32 space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight uppercase mb-4">Understanding the Dual Audience</h2>
                            <p className="text-white/60 font-light max-w-2xl mx-auto">
                                Designing for two polar opposite mindsets within a single interface requirement.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-10 bg-white/5 border border-white/10 rounded-[32px] space-y-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">The Direct Customer</h3>
                                <p className="text-white/70 font-light italic leading-relaxed">
                                    &quot;Is this trustworthy? I just want a quick quote without the insurance jargon getting in my way. I&apos;m one confusing question away from leaving.&quot;
                                </p>
                                <div className="space-y-2">
                                    <p className="text-xs font-mono uppercase tracking-widest text-white/40">Priority</p>
                                    <p className="text-sm">Trust, Clarity, Momentum</p>
                                </div>
                            </div>
                            <div className="p-10 bg-white/5 border border-white/10 rounded-[32px] space-y-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                                    <Settings className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold">The High-Velocity Broker</h3>
                                <p className="text-white/70 font-light italic leading-relaxed">
                                    &quot;I do this 50 times a day. I know exactly where every field is. Don&apos;t move anything; I need speed and muscle memory to stay profitable.&quot;
                                </p>
                                <div className="space-y-2">
                                    <p className="text-xs font-mono uppercase tracking-widest text-white/40">Priority</p>
                                    <p className="text-sm">Efficiency, Predictability, Data Integrity</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* The Design Thinking Process: Two-Column Step Layout */}
                    <section className="mb-32">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight uppercase mb-4">The Design Thinking Process</h2>
                            <p className="text-white/60 font-light max-w-xl mx-auto italic text-sm">
                                A methodical approach to solving high drop-off rates within a rigid multi-user ecosystem.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-12">
                            {[
                                {
                                    step: "01",
                                    title: "Diagnostic Audit",
                                    content: "I started by diving deep into Google Analytics to move beyond anecdotes. The data confirmed a friction point: a 16% abandonment rate that spiked at the initial landing and during specific technical inputs."
                                },
                                {
                                    step: "02",
                                    title: "Competitive Landscape",
                                    content: "I performed an exhaustive analysis of competing insurance portals. The audit revealed that Onlia's UI was visually 'outdated,' missing modern micro-interactions and trust signals."
                                },
                                {
                                    step: "03",
                                    title: "Technical Sovereignty",
                                    content: "Faced with a 'Two-in-One' architecture for customers and brokers, I architected a UI that felt fresh without altering the field order or data structure brokers relied on."
                                },
                                {
                                    step: "04",
                                    title: "The Refactor",
                                    content: "Implemented a 'Dialog-First' design by simplifying visual weight, introducing clearer tooltips, and trust-building micro-copy to make the tool feel like an assistant."
                                },
                                {
                                    step: "05",
                                    title: "Validation",
                                    content: "Measured over three months post-launch, we confirmed a drop-off reduction from 16% to 11%—a massive win for user retention and business conversion."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-8 md:gap-16 items-start border-b border-white/10 pb-12 last:border-0"
                                >
                                    <div className="text-7xl sm:text-8xl font-black text-white/10 leading-none select-none tracking-tighter">
                                        {item.step}
                                    </div>

                                    <div className="space-y-4 pt-2">
                                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase">
                                            {item.title}
                                        </h3>
                                        <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light italic">
                                            &quot;{item.content}&quot;
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Solution Highlights */}
                    <section className="mb-32 space-y-12">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold tracking-tight uppercase mb-4">Core Solution Pillars</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <div className="aspect-square bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center">
                                    <MessageSquare className="w-12 h-12 text-white/40" />
                                </div>
                                <h4 className="text-xl font-bold">Conversational Dialogue</h4>
                                <p className="text-white/60 font-light text-sm">Reduced cognitive load by rewriting questions into natural, conversational language using adaptive tooltips.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-square bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center">
                                    <Target className="w-12 h-12 text-white/40" />
                                </div>
                                <h4 className="text-xl font-bold">Trust-Metric UI</h4>
                                <p className="text-white/60 font-light text-sm">Strategically placed validation markers and trust signals to reassure users during high-friction financial steps.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="aspect-square bg-white/5 border border-white/10 rounded-[32px] flex items-center justify-center">
                                    <Code2 className="w-12 h-12 text-white/40" />
                                </div>
                                <h4 className="text-xl font-bold">Hybrid Logic</h4>
                                <p className="text-white/60 font-light text-sm">Engineered a single-mount React frontend that adapted its density based on user-type detection without altering data schemas.</p>
                            </div>
                        </div>
                    </section>

                    {/* Measurable Impact Section */}
                    <section className="mb-32 bg-white text-[#7A007A] rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
                        <div className="relative z-10 max-w-2xl">
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6 uppercase leading-none">The Business Outcome</h2>
                            <p className="text-lg leading-relaxed mb-8 opacity-90 font-medium italic">
                                &quot;The redesign proved that meaningful UI optimization doesn&apos;t require destructive architectural changes.&quot;
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                                <div className="p-8 bg-[#7A007A]/5 rounded-3xl border border-[#7A007A]/10">
                                    <span className="block text-5xl font-bold mb-2 tracking-tighter">16% → 11%</span>
                                    <p className="text-sm font-mono uppercase tracking-widest opacity-60">User Drop-off Rate</p>
                                </div>
                                <div className="p-8 bg-[#7A007A]/5 rounded-3xl border border-[#7A007A]/10">
                                    <span className="block text-5xl font-bold mb-2 tracking-tighter">~30%</span>
                                    <p className="text-sm font-mono uppercase tracking-widest opacity-60">Fewer UX-related tickets</p>
                                </div>
                            </div>
                            <p className="text-xs opacity-50 font-mono">Verified via GA4 & Internal Reporting Tools</p>
                        </div>
                        <div className="absolute right-0 top-0 w-1/3 h-full bg-[#7A007A]/5 hidden lg:flex items-center justify-center">
                            <BarChart3 className="w-48 h-48 opacity-10" />
                        </div>
                    </section>

                    {/* Key Learnings Section */}
                    <section className="mb-32 space-y-8">
                        <h2 className="text-3xl font-bold tracking-tight uppercase">Key Takeaways</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold">Data Over Anecdote</h4>
                                <p className="text-white/70 font-light leading-relaxed">
                                    Relying on Google Analytics allowed me to prove to stakeholders that the problem wasn&apos;t &apos;subjective design taste&apos; but objective friction points in the user funnel.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold">Respecting Legacy Space</h4>
                                <p className="text-white/70 font-light leading-relaxed">
                                    Working on multi-tenant apps taught me that &apos;better UX&apos; for a consumer might be &apos;broken workflow&apos; for a power user. Designing for the intersection of both is where true value lies.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Final Reflection */}
                    <section className="text-center pt-24 border-t border-white/10">
                        <h2 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-8">Author&apos;s Note</h2>
                        <p className="text-2xl sm:text-4xl font-light italic text-white/90 max-w-4xl mx-auto leading-relaxed tracking-tight">
                            &quot;True product design is a balancing act between business KPIs, technical constraints, and user empathy. Onlia was a masterclass in making precision adjustments to a legacy engine.&quot;
                        </p>
                    </section>
                </div>
            </main>
        </div>
    )
}
