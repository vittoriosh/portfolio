'use client'

import { motion } from "motion/react"
import { useState } from "react"

const techLogos = [
  { name: "React", color: "from-cyan-400 to-blue-500", icon: "/logos/react.png" },
  { name: "Next.js", color: "from-gray-800 to-black", icon: "/logos/next-js.svg" },
  { name: "JavaScript", color: "from-yellow-300 to-yellow-500", icon: "/logos/javascript.png" },
  { name: "CSS", color: "from-cyan-400 to-teal-500", icon: "/logos/css.svg" },
  { name: "HTML", color: "from-orange-400 to-red-500", icon: "/logos/htmlgood.png" },
  { name: "Framer Motion", color: "from-purple-400 to-pink-500", icon: "/logos/framer-motion.svg" },
]

export default function AnimatedTechLogos() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
      {techLogos.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="relative"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{ 
            scale: 1.1, 
            rotateY: 15,
            z: 50
          }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          style={{ perspective: 1000 }}
        >
          <motion.div
            className={`
              relative w-24 h-24 rounded-2xl bg-gradient-to-br ${tech.color} 
              shadow-2xl cursor-pointer overflow-hidden
              flex items-center justify-center text-4xl
              border border-white/20
            `}
            animate={{
              rotateY: hoveredIndex === index ? 15 : 0,
              rotateX: hoveredIndex === index ? 5 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background pattern */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, white 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 80%, white 0%, transparent 50%)",
                  "radial-gradient(circle at 40% 60%, white 0%, transparent 50%)",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Logo image */}
            <motion.div
              className="relative z-10 flex items-center justify-center"
              animate={{
                scale: hoveredIndex === index ? 1.2 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src={tech.icon} 
                alt={tech.name}
                className="w-12 h-12 object-contain drop-shadow-lg"
                style={{ 
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: '8px',
                  padding: '4px'
                }}
              />
            </motion.div>

            {/* Hover effect overlay */}
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />

            {/* Floating particles on hover */}
            {hoveredIndex === index && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    initial={{ 
                      x: "50%", 
                      y: "50%", 
                      opacity: 0,
                      scale: 0
                    }}
                    animate={{
                      x: Math.cos(i * 60 * Math.PI / 180) * 60 + 50,
                      y: Math.sin(i * 60 * Math.PI / 180) * 60 + 50,
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                ))}
              </>
            )}
          </motion.div>

          {/* Tech name with animation */}
          <motion.p
            className="text-center mt-3 text-amber-100 font-medium text-sm"
            animate={{
              y: hoveredIndex === index ? -5 : 0,
              color: hoveredIndex === index ? "#fbbf24" : "#fef3c7"
            }}
            transition={{ duration: 0.2 }}
          >
            {tech.name}
          </motion.p>

          {/* Glow effect */}
          <motion.div
            className={`
              absolute inset-0 rounded-2xl bg-gradient-to-br ${tech.color} 
              opacity-0 blur-xl -z-10
            `}
            animate={{
              opacity: hoveredIndex === index ? 0.6 : 0,
              scale: hoveredIndex === index ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ))}
    </div>
  )
}
