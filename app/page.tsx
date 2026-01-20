'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import VisualBackground from "@/components/VisualBackground"
import { motion, AnimatePresence } from "motion/react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"

export default function Home() {
  const [showNavigation, setShowNavigation] = useState(false)
  const pathname = usePathname()
  useRouter()

  // Reset to original state when pathname changes to home
  useEffect(() => {
    if (pathname === '/') {
      setShowNavigation(false)
    }
  }, [pathname])

  return (
    <div className="h-[100dvh] flex flex-col bg-green-950 overflow-hidden relative">
      <VisualBackground />
      <Navigation onHomeClick={() => setShowNavigation(false)} />

      {/* Hero Section */}
      <main className="flex-1 flex flex-col relative overflow-y-auto overflow-x-hidden w-full z-10">
        <AnimatePresence mode="wait">
          {!showNavigation ? (
            // Initial Hero Content
            <motion.div
              className="flex-1 flex flex-col justify-center items-center relative"
              onPanEnd={(e, info) => {
                if (info.offset.y < -50) {
                  setShowNavigation(true)
                }
              }}
            >
              {/* Central Content */}
              <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                  className="flex flex-col items-center text-center space-y-6 md:space-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Status Pill Removed */}

                  {/* Main Title */}
                  <div className="relative">
                    <motion.h1
                      className="text-6xl sm:text-8xl md:text-9xl font-bold text-amber-50 tracking-tighter leading-[0.85]"
                      initial={{ y: 50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    >
                      CRAFTING
                      <br />
                      <span className="text-amber-200/90 italic font-serif">DIGITAL</span>
                      <br />
                      FUTURE
                    </motion.h1>

                    {/* Decorative Elements */}
                    <motion.div
                      className="absolute -right-12 -top-12 md:-right-24 md:-top-24 hidden md:block"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-20">
                        <path id="curve" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                        <text className="text-[10px] uppercase font-mono fill-amber-100" letterSpacing="2">
                          <textPath href="#curve">
                            Portfolio • Vittorio Shiffman • 2024 •
                          </textPath>
                        </text>
                      </svg>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <motion.p
                    className="max-w-2xl text-lg md:text-xl text-amber-100/60 font-light leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Product Engineer specializing in high-scale applications for
                    <span className="text-amber-200 mx-1">Startups</span>,
                    <span className="text-amber-200 mx-1">Enterprise</span>, and
                    <span className="text-amber-200 mx-1">Private Equity</span>.
                  </motion.p>

                  {/* CTA Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Link href="/projects">
                      <Button
                        size="lg"
                        className="group relative bg-transparent border border-amber-100/30 text-amber-100 hover:bg-amber-100 hover:text-green-950 text-xs sm:text-sm px-12 py-8 rounded-full font-mono uppercase tracking-[0.3em] transition-all duration-700 shadow-[0_0_20px_rgba(251,191,36,0.05)] hover:shadow-[0_0_50px_rgba(251,191,36,0.2)]"
                      >
                        <span className="relative z-10 flex items-center">
                          View Selected Works
                          <ArrowRight className="ml-4 h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                        </span>
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Bottom Ticker */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 py-4 border-t border-amber-100/5 bg-green-950/50 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex whitespace-nowrap">
                  <motion.div
                    className="flex gap-12 px-6"
                    animate={{ x: "-50%" }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  >
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex gap-12 items-center">
                        {[
                          "Onlia",
                          "Alteri",
                          "South Hampton Financials",
                          "PortOptix",
                          "PrizmAI",
                          "Aha Insurance",
                          "Cheep Insurance",
                          "System Architecture",
                          "Montreal Based",
                          "Full Stack Development",
                          "UI/UX Design"
                        ].map((item, idx) => (
                          <div key={idx} className="flex gap-12 items-center">
                            <span className="text-sm font-mono text-amber-100/40 uppercase tracking-widest">{item}</span>
                            <span className="w-1 h-1 rounded-full bg-amber-100/20" />
                          </div>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ) : (
            // Navigation View - Mobile Only
            <div className="flex-1 flex flex-col relative overflow-y-auto overflow-x-hidden w-full bg-green-950">
              <motion.div
                key="navigation"
                className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center sm:justify-between md:hidden relative px-4 py-4 sm:py-6"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col space-y-3 sm:space-y-6 w-full flex-1 sm:justify-center min-h-0">
                  {/* Projects Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full sm:flex-1 flex"
                  >
                    <Link href="/projects" className="w-full sm:flex-1 flex min-h-0">
                      <div className="group relative overflow-hidden bg-amber-100/5 border border-amber-100/10 p-5 sm:p-10 md:p-14 transition-all duration-500 hover:bg-amber-100/10 w-full flex flex-col justify-center h-full">
                        <div className="flex justify-between items-start mb-3 sm:mb-6">
                          <span className="text-amber-200/60 font-mono text-xs sm:text-sm md:text-base tracking-widest">01</span>
                          <ArrowRight className="text-amber-200/40 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 group-hover:text-amber-200 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-100 mb-2 sm:mb-3 group-hover:text-white transition-colors">
                          Projects
                        </h2>
                        <p className="text-amber-100/40 text-sm sm:text-base md:text-lg font-light tracking-wide group-hover:text-amber-100/60 transition-colors">
                          Selected Works & Case Studies
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* Contact Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full sm:flex-1 flex"
                  >
                    <Link href="/contact" className="w-full sm:flex-1 flex min-h-0">
                      <div className="group relative overflow-hidden bg-amber-100/5 border border-amber-100/10 p-5 sm:p-10 md:p-14 transition-all duration-500 hover:bg-amber-100/10 w-full flex flex-col justify-center h-full">
                        <div className="flex justify-between items-start mb-3 sm:mb-6">
                          <span className="text-amber-200/60 font-mono text-xs sm:text-sm md:text-base tracking-widest">02</span>
                          <ArrowRight className="text-amber-200/40 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 group-hover:text-amber-200 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-100 mb-2 sm:mb-3 group-hover:text-white transition-colors">
                          Contact
                        </h2>
                        <p className="text-amber-100/40 text-sm sm:text-base md:text-lg font-light tracking-wide group-hover:text-amber-100/60 transition-colors">
                          Get in Touch & Connect
                        </p>
                      </div>
                    </Link>
                  </motion.div>

                  {/* About Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full sm:flex-1 flex"
                  >
                    <Link href="/about" className="w-full sm:flex-1 flex min-h-0">
                      <div className="group relative overflow-hidden bg-amber-100/5 border border-amber-100/10 p-5 sm:p-10 md:p-14 transition-all duration-500 hover:bg-amber-100/10 w-full flex flex-col justify-center h-full">
                        <div className="flex justify-between items-start mb-3 sm:mb-6">
                          <span className="text-amber-200/60 font-mono text-xs sm:text-sm md:text-base tracking-widest">03</span>
                          <ArrowRight className="text-amber-200/40 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 group-hover:text-amber-200 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-amber-100 mb-2 sm:mb-3 group-hover:text-white transition-colors">
                          About
                        </h2>
                        <p className="text-amber-100/40 text-sm sm:text-base md:text-lg font-light tracking-wide group-hover:text-amber-100/60 transition-colors">
                          My Journey & Experience
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}