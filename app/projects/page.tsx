'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { motion } from "motion/react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useState } from "react"

export default function Projects() {
  const [selectedCompany, setSelectedCompany] = useState<{name: string, url: string} | null>(null)

  const handleCompanyClick = (company: {name: string, url: string}) => {
    setSelectedCompany(company)
  }

  const handleConfirmVisit = () => {
    if (selectedCompany) {
      window.open(selectedCompany.url, '_blank', 'noopener,noreferrer')
      setSelectedCompany(null)
    }
  }

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
                  Portfolio
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-50 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                My
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
                  {" "}Projects
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-amber-100/80 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                A collection of my recent work showcasing full-stack development, 
                modern web technologies, and creative problem-solving.
              </motion.p>
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
            className="hidden md:flex absolute right-0 top-0 flex-col items-end justify-start space-y-4 sm:space-y-5 lg:space-y-6 pr-3 sm:pr-4 lg:pr-6 pt-20 sm:pt-24 lg:pt-28 z-10"
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
                onClick={() => document.getElementById('insura-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Insura
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
                onClick={() => document.getElementById('prizm-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Prizm AI
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
                onClick={() => document.getElementById('virtumed-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Virtumed
              </motion.h2>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Company Carousel Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100 mb-2 sm:mb-3">
              Companies I&apos;ve Worked With
            </h2>
            <p className="text-amber-200/70 text-sm sm:text-base lg:text-lg">
              Trusted by leading organizations across various industries
            </p>
          </motion.div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-8 sm:space-x-12 lg:space-x-16"
              animate={{
                x: [0, -100 * 6] // Move by 6 logo widths
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate logos for seamless loop */}
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-8 sm:space-x-12 lg:space-x-16">
                  {[
                    { name: "Southampton Financial", logo: "/company_logos/southampton_financial_inc_logo.jpeg", url: "https://www.southamptonfinancial.ca/" },
                    { name: "Prizm AI", logo: "/company_logos/logo_prizmAI_clr_pos.svg", url: "#" },
                    { name: "Onlia", logo: "/company_logos/onlia.png", url: "https://www.onlia.ca/" },
                    { name: "PortOptix", logo: "/company_logos/PortOptix_Logo.avif", url: "https://www.portoptix.com/" },
                    { name: "Alteri", logo: "/company_logos/alterilogo.webp", url: "https://www.alteri.ca/" },
                    { name: "UBC", logo: "/company_logos/ubc-logo.jpg", url: "https://www.ubc.ca/" }
                  ].map((company, index) => (
                    <motion.div
                      key={`${setIndex}-${index}`}
                      className="flex-shrink-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div 
                        className="bg-white/20 backdrop-blur-sm border border-amber-200/10 rounded-2xl p-4 sm:p-6 lg:p-8 w-36 sm:w-44 lg:w-52 h-24 sm:h-28 lg:h-32 flex items-center justify-center cursor-pointer"
                        onClick={() => handleCompanyClick(company)}
                      >
                        <img
                          src={company.logo}
                          alt={company.name}
                          className={`max-w-full max-h-full object-contain opacity-80 ${
                            company.name === "Alteri" ? "brightness-50" : ""
                          }`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="px-4 sm:px-6 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {/* Project 1 - Insura */}
            <div id="insura-section" className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-700/30 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Project Image */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-600/10 flex items-center justify-center">
                  <img 
                    src="/insuraapp.jpeg" 
                    alt="Insura Insurance Platform"
                    className="w-full h-48 sm:h-56 lg:h-80 object-contain"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100 mb-2 sm:mb-3">
                      Insura
                    </h3>
                    <p className="text-amber-200/70 text-sm sm:text-base font-medium">
                      Next-Gen Insurance Platform
                    </p>
                  </div>

                  <p className="text-amber-100/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                    A revolutionary insurance platform featuring instant quote generation, 
                    seamless payment processing, and unified policy management with live demo capabilities.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["Next.js", "React", "TypeScript", "Stripe", "AWS"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 sm:px-4 py-2 bg-amber-200/10 border border-amber-200/20 text-amber-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                    <div className="flex-1">
                      <Button 
                        className="w-full bg-amber-700 text-white font-medium rounded-xl py-3 sm:py-4 text-sm sm:text-base"
                        asChild
                      >
                        <Link href="https://insura-five.vercel.app/" target="_blank" rel="noopener noreferrer">
                          View Live Demo
                        </Link>
                      </Button>
                    </div>
                    <div className="flex-1">
                      <Button 
                        className="w-full bg-amber-700 text-white font-medium rounded-xl py-3 sm:py-4 text-sm sm:text-base"
                        asChild
                      >
                        <Link href="/projects/insura-case-study">
                          View Case Study
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - Prizm AI */}
            <div id="prizm-section" className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-700/30 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Project Image */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-purple-600/10 flex items-center justify-center">
                  <img
                    src="/prizm.jpeg"
                    alt="Prizm AI Platform"
                    className="w-full h-48 sm:h-56 lg:h-80 object-cover rounded-2xl"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100 mb-2 sm:mb-3">
                      Prizm AI
                    </h3>
                    <p className="text-amber-200/70 text-sm sm:text-base font-medium">
                      AI-Powered Platform
                    </p>
                  </div>

                  <p className="text-amber-100/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                    An innovative AI platform designed to revolutionize how users interact with artificial intelligence. 
                    Features advanced machine learning capabilities, intuitive interfaces, and seamless integration.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["React", "Python", "TensorFlow", "OpenAI", "Next.js"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 sm:px-4 py-2 bg-amber-200/10 border border-amber-200/20 text-amber-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons - Disabled */}
                  <div className="pt-2">
                    <Button 
                      className="w-full bg-gray-600 text-gray-300 font-medium rounded-xl py-3 sm:py-4 text-sm sm:text-base cursor-not-allowed"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 - Virtumed */}
            <div id="virtumed-section" className="bg-gradient-to-br from-green-900/20 to-green-800/10 border border-green-700/30 rounded-3xl p-4 sm:p-6 lg:p-8 backdrop-blur-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
                {/* Project Image */}
                <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center">
                  <img 
                    src="/virtumedcover.jpeg" 
                    alt="Virtumed Medical Platform"
                    className="w-full h-48 sm:h-56 lg:h-80 object-contain"
                  />
                </div>

                {/* Project Info */}
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-100 mb-2 sm:mb-3">
                      Virtumed
                    </h3>
                    <p className="text-amber-200/70 text-sm sm:text-base font-medium">
                      Virtual Medical Platform
                    </p>
                  </div>

                  <p className="text-amber-100/80 text-sm sm:text-base lg:text-lg leading-relaxed">
                    A comprehensive virtual medical platform connecting patients with healthcare 
                    providers through secure video consultations and digital health management.
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {["React", "Next.js", "TypeScript", "Node.js", "MongoDB"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 sm:px-4 py-2 bg-amber-200/10 border border-amber-200/20 text-amber-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="pt-2">
                    <Button 
                      className="w-full bg-amber-700 text-white font-medium rounded-xl py-3 sm:py-4 text-sm sm:text-base"
                      asChild
                    >
                      <Link href="https://virtumed2.vercel.app/" target="_blank" rel="noopener noreferrer">
                        View Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Dialog */}
      <AlertDialog open={!!selectedCompany} onOpenChange={() => setSelectedCompany(null)}>
        <AlertDialogContent className="bg-green-900 border-green-700">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-amber-100">Visit Company Website?</AlertDialogTitle>
            <AlertDialogDescription className="text-amber-200/80">
              Are you sure you want to visit {selectedCompany?.name}&apos;s website? This will open in a new tab.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-green-800 border-green-600 text-amber-100 hover:bg-green-700">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirmVisit}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              Visit Website
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  )
}
