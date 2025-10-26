import React from "react"
import {useState} from "react";
import { motion, AnimatePresence } from "motion/react";
import "../app/styles/btnClicker.css"

export default function ButtonClicker() {
const [clicks, setClicks] = useState(0);

const handleIncrement = () => {
    setClicks(clicks + 1);
};

const handleDecrement = () => {
    setClicks(clicks - 1);
};

    return (
        <div className="container">
            <motion.div 
                className="btnContainer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
                <motion.button 
                    className="item" 
                    onClick={handleDecrement}
                    whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#dc2626",
                        boxShadow: "0 0 20px rgba(220, 38, 38, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <motion.span
                        animate={{ rotate: clicks < 0 ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        -
                    </motion.span>
                </motion.button>

                <motion.div className="items-container">
                    <AnimatePresence mode="wait">
                        <motion.p 
                            key={clicks}
                            className="items"
                            initial={{ scale: 1.2, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            Total amount of clicks: 
                            <motion.span
                                className="font-bold text-amber-200 ml-2"
                                animate={{ 
                                    color: clicks > 0 ? "#10b981" : clicks < 0 ? "#ef4444" : "#fbbf24",
                                    scale: clicks !== 0 ? 1.1 : 1
                                }}
                                transition={{ duration: 0.2 }}
                            >
                                {clicks}
                            </motion.span>
                        </motion.p>
                    </AnimatePresence>

                    {/* Celebration particles */}
                    <AnimatePresence>
                        {clicks > 0 && clicks % 5 === 0 && (
                            <motion.div
                                className="absolute inset-0 pointer-events-none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                {[...Array(8)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-2 h-2 bg-amber-400 rounded-full"
                                        initial={{ 
                                            x: "50%", 
                                            y: "50%", 
                                            scale: 0,
                                            opacity: 1
                                        }}
                                        animate={{
                                            x: Math.cos(i * 45 * Math.PI / 180) * 100 + 50,
                                            y: Math.sin(i * 45 * Math.PI / 180) * 100 + 50,
                                            scale: [0, 1, 0],
                                            opacity: [1, 1, 0]
                                        }}
                                        transition={{
                                            duration: 1,
                                            delay: 0.1,
                                            ease: "easeOut"
                                        }}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                <motion.button 
                    className="item" 
                    onClick={handleIncrement}
                    whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "#16a34a",
                        boxShadow: "0 0 20px rgba(22, 163, 74, 0.5)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                    <motion.span
                        animate={{ rotate: clicks > 0 ? 0 : 180 }}
                        transition={{ duration: 0.3 }}
                    >
                        +
                    </motion.span>
                </motion.button>
            </motion.div>
        </div>
    )
}