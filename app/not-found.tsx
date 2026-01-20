'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="h-[100dvh] w-full bg-green-950 flex flex-col items-center justify-center text-amber-50 relative overflow-hidden selection:bg-amber-500/30">

            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

            <motion.div
                className="relative z-10 flex flex-col items-center text-center px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.p
                    className="font-mono text-sm sm:text-base text-amber-200/60 uppercase tracking-[0.3em] mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Error
                </motion.p>

                <h1 className="text-[120px] sm:text-[180px] md:text-[240px] font-black leading-none tracking-tighter text-amber-50/10 select-none">
                    404
                </h1>

                <div className="-mt-8 sm:-mt-12 md:-mt-16 space-y-6 sm:space-y-8">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                        Page Not Found
                    </h2>

                    <p className="text-amber-100/60 max-w-sm mx-auto text-sm sm:text-base leading-relaxed">
                        The page you are looking for doesn&apos;t exist or has been moved.
                    </p>

                    <Link href="/" className="inline-block">
                        <motion.div
                            className="group flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-amber-100/5 hover:bg-amber-100/10 border border-amber-100/10 rounded-full transition-all duration-300"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <ArrowLeft className="w-4 h-4 text-amber-200 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-mono text-xs sm:text-sm text-amber-100 uppercase tracking-widest">Return Home</span>
                        </motion.div>
                    </Link>
                </div>
            </motion.div>

            {/* Footer / Corner Info */}
            <div className="absolute bottom-8 left-8 hidden md:block">
                <span className="font-mono text-xs text-amber-100/20">404_ERROR_HANDLE</span>
            </div>
            <div className="absolute bottom-8 right-8 hidden md:block">
                <span className="font-mono text-xs text-amber-100/20">SYSTEM_STATUS: ACTIVE</span>
            </div>
        </div>
    )
}
