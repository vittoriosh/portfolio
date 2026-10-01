"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="fixed inset-0 z-[1000] bg-white flex items-center justify-center p-6 selection:bg-navy selection:text-white">
            {/* Background radial gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_0%,transparent_100%)] pointer-events-none" />

            {/* Background mesh grid effect */}
            <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.03] pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-2xl text-center relative z-10"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="text-[15vw] md:text-[12vw] font-black leading-none tracking-tighter text-black/5 select-none block">
                        404
                    </span>
                </motion.div>

                <div className="-mt-12 md:-mt-20">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black mb-6">
                        Page Not <span className="text-navy italic font-serif">Found</span>
                    </h1>

                    <p className="text-lg md:text-xl text-black/50 font-light leading-relaxed max-w-sm mx-auto mb-12">
                        The page you are looking for doesn&apos;t exist or has been moved.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-4 bg-black text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-[0_20px_40px_-10px_rgba(0,0,0,0.2)] transition-all"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                Return Home
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
