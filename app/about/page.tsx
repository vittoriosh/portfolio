'use client'

import { Github, Linkedin, Mail, Plus, Minus } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"

export default function About() {
  const [expandedExp, setExpandedExp] = useState<string | null>("southampton")

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
  ]

  const references = [
    { name: "Steve Lloyd", title: "IT Director, South Hampton Financials" },
    { name: "Christine Cousins", title: "Creative Director, South Hampton Financials" },
    { name: "Kevin Mastriano", title: "CEO, Prizm AI" },
    { name: "Jay Leib", title: "CEO, PortOptix" },
    { name: "Adam Stecklov", title: "AI Researcher, Mila" },
    { name: "Joe Collins", title: "Commodity Analyst, Minerva Project" },
    { name: "Dr. Thomas Anderson", title: "Neurosurgeon" }
  ]

  return (
    <div className="min-h-screen bg-green-950 text-amber-50 selection:bg-amber-500/30 font-sans">
      <Navigation />

      <main className="pt-32 px-4 sm:px-6 pb-20">
        <div className="max-w-[1800px] mx-auto">

          {/* Massive Header */}
          <div className="border-b border-amber-50/20 pb-12 mb-20">
            <motion.h1
              className="text-[12vw] leading-[0.8] font-bold tracking-tighter uppercase"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Vittorio<br />
              <span className="text-amber-50/20">Shiffman</span>
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <p className="text-xl text-amber-50/60 max-w-sm">
                  Product Engineer & Designer crafting digital experiences with precision and purpose.
                </p>
                <div className="flex gap-4">
                  <Link href="https://github.com/vittorio-sh" target="_blank" className="hover:text-amber-200 transition-colors">
                    <Github className="w-6 h-6" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/vittorio-s-b711952b7" target="_blank" className="hover:text-amber-200 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </Link>
                  <Link href="mailto:vittorio.shiffman@gmail.com" className="hover:text-amber-200 transition-colors">
                    <Mail className="w-6 h-6" />
                  </Link>
                </div>
              </div>
              <div className="md:col-span-2 flex justify-end items-end">
                <div className="text-right">
                  <p className="text-sm font-mono text-amber-50/40 uppercase tracking-widest mb-2">Location</p>
                  <p className="text-2xl">Montreal, Canada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Grid */}
          <div className="mb-32">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-4xl font-bold uppercase tracking-tight">Experience</h2>
              <span className="font-mono text-amber-50/40">(2024 — Present)</span>
            </div>

            <div className="border-t border-amber-50/20">
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  className="border-b border-amber-50/20 group"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div
                    className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-8 cursor-pointer hover:bg-amber-50/5 transition-colors px-2"
                    onClick={() => setExpandedExp(expandedExp === exp.id ? null : exp.id)}
                  >
                    <div className="lg:col-span-2 font-mono text-amber-50/40 text-sm pt-1">
                      {exp.period}
                    </div>
                    <div className="lg:col-span-4 text-2xl font-bold group-hover:text-amber-200 transition-colors">
                      {exp.company}
                    </div>
                    <div className="lg:col-span-3 text-xl text-amber-50/80">
                      {exp.role}
                    </div>
                    <div className="lg:col-span-2 text-sm font-mono text-amber-50/60 pt-1 text-right lg:text-left">
                      {exp.type}
                    </div>
                    <div className="lg:col-span-1 flex justify-end">
                      {expandedExp === exp.id ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedExp === exp.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 px-2">
                          <div className="lg:col-span-2"></div>
                          <div className="lg:col-span-10 bg-black/20 p-8 rounded-2xl">
                            <p className="text-xl mb-6 text-amber-50">{exp.description}</p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {exp.details.map((detail, i) => (
                                <li key={i} className="flex gap-3 text-amber-50/60 text-sm leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50 mt-2 shrink-0" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>

          {/* References */}
          <div>
            <h2 className="text-4xl font-bold uppercase tracking-tight mb-8">References</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-amber-50/20 border border-amber-50/20">
              {references.map((ref, i) => (
                <div key={i} className="bg-green-950 p-8 hover:bg-green-900/50 transition-colors group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-amber-200 transition-colors">{ref.name}</h3>
                  <p className="text-amber-50/60 text-sm">{ref.title}</p>
                </div>
              ))}
              {/* Fill remaining grid cells if needed */}
              <div className="bg-green-950 p-8 flex items-center justify-center">
                <p className="font-mono text-amber-50/40 text-sm uppercase">Available upon request</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}