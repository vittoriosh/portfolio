'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { motion } from "motion/react"
import { useState } from "react"

export default function About() {
  const [selectedExperience, setSelectedExperience] = useState("southampton")
  return (
    <div className="min-h-screen bg-green-950">
      <Navigation />

      {/* Hero Section */}
      <main className="h-screen flex items-center px-4 sm:px-6 py-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div 
            className="space-y-3 sm:space-y-4 lg:space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="space-y-1 sm:space-y-2 lg:space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="bg-amber-100/10 text-amber-200 border-amber-200/20 hover:bg-amber-100/20 transition-colors"
                >
                  About Me
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-amber-50 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Vittorio
                <motion.span 
                  className="text-amber-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  whileHover={{ 
                    scale: 1.05, 
                    textShadow: "0 0 20px rgba(251, 191, 36, 0.5)" 
                  }}
                >
                  {" "}Shiffman
                </motion.span>
              </motion.h1>
              
              <motion.div 
                className="space-y-2 text-amber-100/80"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-amber-200" />
                  <span className="text-sm sm:text-base">Canada</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-amber-200" />
                  <span className="text-sm sm:text-base">vittorio.shiffman@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="h-4 w-4 text-amber-200" />
                  <Link href="https://www.linkedin.com/in/vittorio-s-b711952b7" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base hover:text-amber-200 transition-colors">
                    LinkedIn Profile
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center space-x-3 sm:space-x-4 lg:space-x-6 pt-2 sm:pt-3 lg:pt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-amber-100 hover:text-amber-200 hover:bg-green-800/50"
                  asChild
                >
                  <Link href="https://github.com/vittorio-sh" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    >
                      <Github className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-amber-100 hover:text-amber-200 hover:bg-green-800/50"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/vittorio-s-b711952b7" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <Linkedin className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-amber-100 hover:text-amber-200 hover:bg-green-800/50"
                  asChild
                >
                  <Link href="mailto:vittorio.shiffman@gmail.com">
                    <motion.div
                      animate={{ y: [0, -3, 0] }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 1.5 }}
                    >
                      <Mail className="h-5 w-5" />
                    </motion.div>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Top Right Stacked Navigation - Hidden on Mobile */}
          <motion.div 
            className="hidden md:flex absolute right-0 top-0 flex-col items-end justify-start space-y-2 sm:space-y-3 lg:space-y-4 pr-3 sm:pr-4 lg:pr-6 pt-12 sm:pt-14 lg:pt-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="flex items-center"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-100/60 hover:text-amber-200 cursor-pointer transition-colors duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  color: "#fbbf24",
                  textShadow: "0 0 30px rgba(251, 191, 36, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => document.getElementById('skills-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Skills
              </motion.h2>
            </motion.div>

            <motion.div
              className="flex items-center"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-100/60 hover:text-amber-200 cursor-pointer transition-colors duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  color: "#fbbf24",
                  textShadow: "0 0 30px rgba(251, 191, 36, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => document.getElementById('experience-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Experience
              </motion.h2>
            </motion.div>

            <motion.div
              className="flex items-center"
            >
              <motion.h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-100/60 hover:text-amber-200 cursor-pointer transition-colors duration-300"
                whileHover={{ 
                  scale: 1.1, 
                  color: "#fbbf24",
                  textShadow: "0 0 30px rgba(251, 191, 36, 0.5)" 
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => document.getElementById('references-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                References
              </motion.h2>
            </motion.div>
          </motion.div>
        </div>
      </main>


      {/* Work Experience Section */}
      <section 
        id="experience-section"
        className="px-4 sm:px-6 py-20 bg-green-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-50 mb-6">
              Work Experience
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Experience Details */}
            <motion.div
              className="bg-green-900/30 border border-amber-200/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {selectedExperience === "southampton" && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-amber-100">Software Developer</h3>
                    <Badge className="bg-amber-100/10 text-amber-200 border-amber-200/20 mt-2 sm:mt-0">
                      September 2024 - Current
                    </Badge>
                  </div>
                  <h4 className="text-lg text-amber-200 mb-6">South Hampton Financials</h4>
                  
                  <ul className="space-y-3">
                    {[
                      "Developed and maintained a high-performance customer portal serving over 200,000 users using React, JavaScript, HTML5, and CSS3, delivering responsive, user-centric interfaces aligned with modern UX and accessibility standards.",
                      "Designed modular, reusable React components, streamlining future development and improving UI consistency across user journeys.",
                      "Built and integrated RESTful APIs for core features including user login, policy lookup, and transaction history, using Postman to test and debug workflows.",
                      "Implemented Google Analytics and marketing tracking integrations, enabling insights into user engagement and ad campaign performance.",
                      "Conducted regular product demos and technical presentations for internal stakeholders and non-technical teams",
                      "Participated in Agile delivery lifecycle, including daily standups, retrospectives, sprint planning, and user story refinement via Jira.",
                      "Maintained and optimized CI/CD pipelines with Jenkins, pushing production builds to AWS Amplify.",
                      "Handled support escalations for frontend issues, browser bugs, and tracking-related problems with a customer-first mindset."
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.5 + (index * 0.05) }}
                      >
                        <div className="w-2 h-2 bg-amber-200 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-amber-100/90 text-sm sm:text-base leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedExperience === "prizm" && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-amber-100">Frontend Developer & Co-Creator</h3>
                    <Badge className="bg-amber-100/10 text-amber-200 border-amber-200/20 mt-2 sm:mt-0">
                      2024
                    </Badge>
                  </div>
                  <h4 className="text-lg text-amber-200 mb-6">Prizm AI</h4>
                  
                  <ul className="space-y-3">
                    {[
                      "Designed and built the main customer-facing website, focusing on user experience and conversion optimization to drive product adoption.",
                      "Built website functionality to allow workers to sign in and control SEO, add blogs, and manage content through an admin dashboard.",
                      "Led frontend development of the core application, translating complex AI capabilities into intuitive user interfaces that healthcare professionals could easily adopt.",
                      "Facilitated cross-functional collaboration between development and business teams, ensuring product features aligned with market needs and user requirements.",
                      "Created user journey maps and wireframes to guide product development and ensure seamless user experiences across the platform."
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.5 + (index * 0.05) }}
                      >
                        <div className="w-2 h-2 bg-amber-200 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-amber-100/90 text-sm sm:text-base leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedExperience === "portoptix" && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-amber-100">Full-Stack Developer</h3>
                    <Badge className="bg-amber-100/10 text-amber-200 border-amber-200/20 mt-2 sm:mt-0">
                      2024
                    </Badge>
                  </div>
                  <h4 className="text-lg text-amber-200 mb-6">PortOptix</h4>
                  
                  <ul className="space-y-3">
                    {[
                      "Worked closely with the CEO to harden the application and build a new version, focusing on scalability and user experience improvements for 1000+ active users.",
                      "Managed user growth and engagement metrics, implementing data-driven strategies to optimize user retention and platform adoption.",
                      "Designed and implemented a comprehensive user management system, streamlining onboarding processes and improving user satisfaction scores.",
                      "Set up Supabase database tables and implemented email functionality including password reset and authentication workflows.",
                      "Brainstormed new strategies and features to add, contributing to product roadmap and innovation initiatives."
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.5 + (index * 0.05) }}
                      >
                        <div className="w-2 h-2 bg-amber-200 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-amber-100/90 text-sm sm:text-base leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedExperience === "alteri" && (
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-amber-100">Software Developer</h3>
                    <Badge className="bg-amber-100/10 text-amber-200 border-amber-200/20 mt-2 sm:mt-0">
                      2024
                    </Badge>
                  </div>
                  <h4 className="text-lg text-amber-200 mb-6">Alteri Insurance</h4>
                  
                  <ul className="space-y-3">
                    {[
                      "Designed and prototyped a comprehensive business insurance portal, focusing on user experience optimization and conversion rate improvement.",
                      "Collaborated with the development team to design and implement a rating engine that streamlined the insurance quoting process.",
                      "Led user research initiatives to understand broker workflows and customer needs, translating insights into actionable product features.",
                      "Developed user personas and journey maps to guide product design decisions and improve broker productivity."
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.5 + (index * 0.05) }}
                      >
                        <div className="w-2 h-2 bg-amber-200 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-amber-100/90 text-sm sm:text-base leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Right Column - Company Selection */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-amber-100 mb-6">Select Experience</h3>
              {[
                { id: "southampton", name: "South Hampton Financials", role: "Software Developer", period: "Sep 2024 - Current", type: "Full Time" },
                { id: "prizm", name: "Prizm AI", role: "Frontend Developer & Co-Creator", period: "2024", type: "Contractor" },
                { id: "portoptix", name: "PortOptix", role: "Full-Stack Developer", period: "2024", type: "Contractor" },
                { id: "alteri", name: "Alteri Insurance", role: "Software Developer", period: "2024", type: "Contractor" }
              ].map((company, index) => (
                <motion.div
                  key={company.id}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    selectedExperience === company.id
                      ? "bg-amber-200/10 border-amber-200/30"
                      : "bg-green-900/20 border-green-700/30 hover:bg-green-800/30"
                  }`}
                  onClick={() => setSelectedExperience(company.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.2, delay: 0.4 + (index * 0.05) }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-amber-100 font-semibold">{company.name}</h4>
                    <Badge className={`text-xs ${
                      company.type === "Full Time" 
                        ? "bg-green-600/20 text-green-300 border-green-500/30" 
                        : "bg-blue-600/20 text-blue-300 border-blue-500/30"
                    }`}>
                      {company.type}
                    </Badge>
                  </div>
                  <p className="text-amber-200/80 text-sm mb-1">{company.role}</p>
                  <p className="text-amber-200/60 text-xs">{company.period}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


      {/* References Section */}
      <motion.section 
        id="references-section"
        className="px-4 sm:px-6 py-20 bg-green-900/20"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-50 mb-6">
              References
            </h2>
          </motion.div>

          <motion.div
            className="bg-green-900/30 border border-amber-200/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Steve Lloyd", title: "IT Director, South Hampton Financials" },
                { name: "Christine Cousins", title: "Creative Director, South Hampton Financials" },
                { name: "Kevin Mastriano", title: "CEO, Prizm AI" },
                { name: "Jay Leib", title: "CEO, PortOptix" },
                { name: "Adam Stecklov", title: "AI Researcher, Mila (Virtumed Project)" },
                { name: "Joe Collins", title: "Commodity Analyst, Minerva Project" },
                { name: "Dr. Thomas Anderson", title: "Neurosurgeon (Virtumed Project)" }
              ].map((ref, index) => (
                <motion.div
                  key={index}
                  className="bg-green-800/20 border border-amber-200/10 rounded-xl p-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                >
                  <h4 className="text-amber-100 font-semibold mb-1">{ref.name}</h4>
                  <p className="text-amber-200/80 text-sm mb-2">{ref.title}</p>
                  <p className="text-amber-100/60 text-xs">Available upon request</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}