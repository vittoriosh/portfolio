'use client'

import { motion } from "motion/react"

export default function VisualBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid Pattern - Very subtle */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fbbf24 1px, transparent 1px), linear-gradient(90deg, #fbbf24 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Montreal Style Technical Markings */}
      {/* Top Left Cross */}
      <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-amber-100/10" />
      {/* Top Right Cross */}
      <div className="absolute top-8 right-8 w-4 h-4 border-r border-t border-amber-100/10" />
      {/* Bottom Left Cross */}
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l border-b border-amber-100/10" />
      {/* Bottom Right Cross */}
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-amber-100/10" />

      {/* Abstract Shapes - Much more subtle to preserve background color */}
      <motion.div
        className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
