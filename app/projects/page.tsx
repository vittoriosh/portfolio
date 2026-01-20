'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Users, Building2, TrendingUp, LayoutDashboard, LineChart } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { motion } from "motion/react"
import Image from "next/image"

export default function Projects() {
  return (
    <div className="min-h-screen bg-green-950 text-amber-50 selection:bg-amber-500/30">

      {/* Header Section */}
      <section className="relative z-50 bg-green-950 rounded-b-[60px] sm:rounded-b-[100px] pb-24 shadow-2xl border-b border-white/5">
        <Navigation />
        <div className="pt-20 px-4 sm:px-6 max-w-7xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight">
                Selected<br />Works
              </h1>

              {/* Quick Nav */}
              <nav className="hidden lg:block mb-4">
                <ul className="space-y-3 border-l border-amber-50/10 pl-8">
                  {[
                    { id: "project-01", num: "01", name: "South Hampton" },
                    { id: "project-02", num: "02", name: "Onlia Portal" },
                    { id: "project-03", num: "03", name: "PortOptix" },
                    { id: "project-04", num: "04", name: "CIBC Insurance" },
                    { id: "project-05", num: "05", name: "Prizm AI" },
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                        className="group flex items-center gap-4 text-amber-50/40 hover:text-amber-200 transition-all duration-300 transform hover:translate-x-1"
                      >
                        <span className="font-mono text-sm tracking-tighter opacity-60">
                          {item.num}
                        </span>
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em]">
                          {item.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="h-px w-full bg-amber-50/20 mt-8 mb-8" />
            <div className="flex justify-between items-end">
              <p className="text-xl sm:text-2xl max-w-3xl leading-relaxed text-amber-50/80">
                Product Designer & Engineer crafting high-scale digital experiences. Specializing in complex multi-tenant ecosystems for startups and private equity.
              </p>
              <span className="hidden sm:block font-mono text-amber-50/60">(2023 — 2025)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project 01 - Commercial Insurance Portal */}
      <section id="project-01" className="relative z-40 bg-[#283655] -mt-20 pt-40 pb-32 rounded-b-[60px] sm:rounded-b-[100px] px-4 sm:px-6 shadow-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
              <div className="w-full lg:w-2/5 space-y-8 top-32 lg:sticky">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[#EAF1F6]/60">01 / Enterprise</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#EAF1F6]/40 border border-[#EAF1F6]/20 px-2 py-0.5 rounded">South Hampton Financials</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold leading-tight group-hover:text-white transition-colors">
                    Commercial Insurance Portal
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-6 py-6 border-y border-[#EAF1F6]/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#EAF1F6]">
                      <Users className="h-5 w-5" />
                      <span className="text-2xl font-bold">100k+</span>
                    </div>
                    <p className="text-sm text-[#EAF1F6]/60 font-mono">Active Users</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#EAF1F6]">
                      <Building2 className="h-5 w-5" />
                      <span className="text-2xl font-bold">3</span>
                    </div>
                    <p className="text-sm text-[#EAF1F6]/60 font-mono">Major Companies</p>
                  </div>
                </div>

                <p className="text-lg text-[#EAF1F6]/80 leading-relaxed font-light">
                  A high-scale enterprise solution revolutionizing commercial insurance processing.
                  Designed and engineered a sophisticated multi-tenant architecture for South Hampton Financials,
                  optimizing complex data workflows for over 100,000 active users across multiple major organizations.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Enterprise", "Scale", "Multi-functional"].map((tag) => (
                    <Badge key={tag} variant="outline" className="border-[#EAF1F6]/20 text-[#EAF1F6]/80 rounded-full px-4 py-1 hover:bg-white/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-3/5 space-y-8 flex flex-col items-center">
                <div className="w-full aspect-[16/9] bg-black/40 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl transition-transform duration-500">
                  {/* Clean Image Frame */}
                </div>

                <div className="w-full">
                  <Link href="/projects/south-hampton" className="block w-full">
                    <Button
                      className="group w-full bg-[#EAF1F6] text-[#283655] hover:bg-white rounded-full py-8 font-mono text-sm uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_0_30px_rgba(234,241,246,0.15)] hover:shadow-[0_0_50px_rgba(234,241,246,0.3)]"
                    >
                      Explore Case Study
                      <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project 02 - Onlia */}
      <section id="project-02" className="relative z-30 bg-[#7A007A] -mt-20 pt-40 pb-32 rounded-b-[60px] sm:rounded-b-[100px] px-4 sm:px-6 shadow-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
              <div className="w-full lg:w-2/5 space-y-8 top-32 lg:sticky lg:order-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-white/70">02 / Consumer Platform</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white border border-white/30 px-2 py-0.5 rounded bg-white/10">Onlia</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white transition-colors">
                    Insurance Customer Portal
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/20">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-white">
                      <Users className="h-5 w-5" />
                      <span className="text-2xl font-bold">300k+</span>
                    </div>
                    <p className="text-sm text-white/70 font-mono">Total Users</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-white">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-2xl font-bold">Retention</span>
                    </div>
                    <p className="text-sm text-white/70 font-mono">UI Optimization</p>
                  </div>
                </div>

                <p className="text-lg text-white leading-relaxed font-light">
                  Led the full-scale UI redesign and UX optimization for Onlia&apos;s core consumer insurance portal.
                  Focused on resolving complex multi-step user flows to significantly reduce drop-off rates,
                  achieving a 5% increase in conversion through methodical UI refactoring and user research.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Next.js", "UI/UX", "Retention", "Insurtech"].map((tag) => (
                    <Badge key={tag} variant="outline" className="border-white/20 text-white rounded-full px-4 py-1 hover:bg-white/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-3/5 space-y-8 flex flex-col items-center lg:order-1">
                <div className="w-full aspect-[16/9] bg-black/20 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl transition-transform duration-500">
                  {/* Clean Image Frame */}
                </div>

                <div className="w-full">
                  <Link href="/projects/onlia" className="block w-full">
                    <Button
                      className="group w-full bg-white text-[#7A007A] hover:bg-white/90 rounded-full py-8 font-mono text-sm uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                    >
                      Explore Case Study
                      <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project 03 - PortOptix */}
      <section id="project-03" className="relative z-20 bg-[#FF4D00] -mt-20 pt-40 pb-32 rounded-b-[60px] sm:rounded-b-[100px] px-4 sm:px-6 shadow-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
              <div className="w-full lg:w-2/5 space-y-8 top-32 lg:sticky">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-white/70">03 / Private Equity</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white border border-white/30 px-2 py-0.5 rounded">Uploading to Portfolio</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white transition-colors">
                    PortOptix Dashboard
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/20">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-white">
                      <LayoutDashboard className="h-5 w-5" />
                      <span className="text-2xl font-bold">SaaS</span>
                    </div>
                    <p className="text-sm text-white/70 font-mono">B2B Platform</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-white">
                      <LineChart className="h-5 w-5" />
                      <span className="text-2xl font-bold">VC</span>
                    </div>
                    <p className="text-sm text-white/70 font-mono">Backed</p>
                  </div>
                </div>

                <p className="text-lg text-white leading-relaxed font-light">
                  A comprehensive dashboard solution built for high-growth startups and private equity firms.
                  Streamlining complex portfolio management, performance tracking, and vendor optimization
                  through an intuitive, data-dense interface designed for elite decision-makers.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["React", "Dashboard", "Private Equity", "Startups"].map((tag) => (
                    <Badge key={tag} variant="outline" className="border-white/20 text-white rounded-full px-4 py-1 hover:bg-white/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-3/5 flex flex-col items-center space-y-8">
                <div className="w-full aspect-[16/9] bg-white rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl transition-transform duration-500">
                  <Image
                    src="/images/portoptixphoto.jpeg"
                    alt="PortOptix Dashboard"
                    fill
                    className="object-contain transition-opacity duration-500"
                  />
                </div>

                <div className="w-full">
                  <Link href="#" className="block w-full">
                    <Button
                      className="group w-full bg-white text-[#FF4D00] hover:bg-white/90 rounded-full py-8 font-mono text-sm uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                    >
                      Explore Case Study
                      <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project 04 - CIBC */}
      <section id="project-04" className="relative z-15 bg-[#A3000B] -mt-20 pt-40 pb-32 rounded-b-[60px] sm:rounded-b-[100px] px-4 sm:px-6 shadow-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
              <div className="w-full lg:w-2/5 space-y-8 top-32 lg:sticky lg:order-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-white/70">04 / Banking & FinTech</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white border border-white/30 px-2 py-0.5 rounded bg-white/10">CIBC</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white transition-colors">
                    Insurance Portal Modernization
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-6 py-6 border-y border-white/20">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-white">
                      <Users className="h-5 w-5" />
                      <span className="text-2xl font-bold">1M+</span>
                    </div>
                    <p className="text-sm text-white/70 font-mono">End Users</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-white">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-2xl font-bold">40%</span>
                    </div>
                    <p className="text-sm text-white/70 font-mono">Efficiency Gain</p>
                  </div>
                </div>

                <p className="text-lg text-white leading-relaxed font-light">
                  Orchestrating a massive UI/UX transformation for CIBC&apos;s national insurance platform.
                  Focused on streamlining agent workflows and simplifying multi-product enrollment for millions
                  of Canadians through a modern, high-performance responsive interface.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Banking", "FinTech", "Enterprise", "High-Performance"].map((tag) => (
                    <Badge key={tag} variant="outline" className="border-white/20 text-white rounded-full px-4 py-1 hover:bg-white/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-3/5 flex flex-col items-center space-y-8 lg:order-1">
                <div className="w-full aspect-[16/9] bg-black/20 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl transition-transform duration-500">
                  {/* Clean Image Frame */}
                </div>

                <div className="w-full">
                  <Link href="#" className="block w-full">
                    <Button
                      className="group w-full bg-white text-[#A3000B] hover:bg-white/90 rounded-full py-8 font-mono text-sm uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.3)]"
                    >
                      Explore Case Study
                      <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project 05 - Prizm AI */}
      <section id="project-05" className="relative z-10 bg-[#F8F4E9] -mt-20 pt-40 pb-32 rounded-b-[60px] sm:rounded-b-[100px] px-4 sm:px-6 shadow-2xl border-b border-[#1A1A1A]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
              <div className="w-full lg:w-2/5 space-y-8 top-32 lg:sticky">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[#1A1A1A]/70 uppercase tracking-widest text-xs">05 / Artificial Intelligence</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#1A1A1A] border border-[#1A1A1A]/20 px-2 py-0.5 rounded bg-[#1A1A1A]/5">Prizm AI</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-[#BC6448] transition-colors">
                    Prizm AI Website
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-6 py-6 border-y border-[#1A1A1A]/10">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#1A1A1A]">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-2xl font-bold">High</span>
                    </div>
                    <p className="text-sm text-[#1A1A1A]/60 font-mono">Conversion Rate</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-[#1A1A1A]">
                      <Users className="h-5 w-5" />
                      <span className="text-2xl font-bold">Demo</span>
                    </div>
                    <p className="text-sm text-[#1A1A1A]/60 font-mono">Signup Focus</p>
                  </div>
                </div>

                <p className="text-lg text-[#1A1A1A]/80 leading-relaxed font-light">
                  A high-performance marketing site designed for conversion and brand authority.
                  Featuring advanced motion design, sophisticated typography, and a tailored user journey
                  designed specifically for the next generation of global investment managers.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["AI", "Marketing", "Conversion", "Design"].map((tag) => (
                    <Badge key={tag} variant="outline" className="border-[#1A1A1A]/20 text-[#1A1A1A]/80 rounded-full px-4 py-1 hover:bg-[#1A1A1A]/5 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-3/5 flex flex-col items-center space-y-8">
                <div className="w-full aspect-[16/9] bg-[#F8F4E9] rounded-3xl overflow-hidden border border-[#1A1A1A]/10 relative shadow-2xl transition-transform duration-500">
                  <Image
                    src="/images/prizmai.jpeg"
                    alt="Prizm AI Website"
                    fill
                    className="object-cover transition-opacity duration-500"
                  />
                </div>

                <div className="w-full">
                  <Link href="#" className="block w-full">
                    <Button
                      className="group w-full bg-[#1A1A1A] text-white hover:bg-[#1A1A1A]/90 rounded-full py-8 font-mono text-sm uppercase tracking-[0.2em] transition-all duration-500 shadow-[0_0_30px_rgba(26,26,26,0.15)] hover:shadow-[0_0_50px_rgba(26,26,26,0.3)]"
                    >
                      Explore Case Study
                      <ArrowUpRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
