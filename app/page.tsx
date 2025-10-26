'use client'

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/Navigation"
import { motion } from "motion/react"

export default function Home() {
  return (
    <div className="h-screen bg-green-950 overflow-hidden">
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
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-amber-50 leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Crafting Digital
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
                  {" "}Experiences
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-amber-100/80 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I build elegant, user-centric web applications with modern technologies. 
                Passionate about product strategy and exceptional user experiences.
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
            className="hidden md:flex absolute right-0 top-0 flex-col items-end justify-start space-y-2 sm:space-y-3 lg:space-y-4 pr-3 sm:pr-4 lg:pr-6 pt-12 sm:pt-14 lg:pt-16"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="flex items-center"
            >
              <Link href="/projects">
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-amber-100/60 hover:text-amber-200 cursor-pointer transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#fbbf24",
                    textShadow: "0 0 30px rgba(251, 191, 36, 0.5)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Projects
                </motion.h2>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center"
            >
              <Link href="/contact">
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-amber-100/60 hover:text-amber-200 cursor-pointer transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#fbbf24",
                    textShadow: "0 0 30px rgba(251, 191, 36, 0.5)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Contact
                </motion.h2>
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center"
            >
              <Link href="/about">
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-amber-100/60 hover:text-amber-200 cursor-pointer transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    color: "#fbbf24",
                    textShadow: "0 0 30px rgba(251, 191, 36, 0.5)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  About
                </motion.h2>
              </Link>
            </motion.div>
          </motion.div>
        </div>


      </main>
    </div>
  )
}