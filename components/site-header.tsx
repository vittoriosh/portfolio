"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, SquarePen, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ITEMS = [
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
] as const;

function NavLink({
    href,
    children,
    onClick,
}: {
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
}) {
    const className =
        "w-full text-left py-2.5 px-3 rounded-xl hover:bg-white/5 transition-colors group flex items-center justify-between";
    const inner = (
        <>
            <span className="text-white/45 text-[12px] font-bold uppercase tracking-[0.18em] group-hover:text-white group-hover:translate-x-0.5 transition-all">
                {children}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-orange-500" />
        </>
    );
    if (href) {
        return (
            <Link href={href} onClick={onClick} className={className}>
                {inner}
            </Link>
        );
    }
    return (
        <button type="button" onClick={onClick} className={className}>
            {inner}
        </button>
    );
}

export default function SiteHeader({
    hidden = false,
    linksToHome = false,
    variant = "pill",
    onNewChat,
    onRoadmap,
    onWork,
    onAbout,
    onSkills,
    onContact,
}: {
    hidden?: boolean;
    linksToHome?: boolean;
    variant?: "pill" | "rail";
    onNewChat?: () => void;
    onRoadmap?: () => void;
    onWork?: () => void;
    onAbout?: () => void;
    onSkills?: () => void;
    onContact?: () => void;
}) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    function goTo(id: string) {
        if (linksToHome) return;
        const el = document.getElementById(id);
        if (el) {
            setIsNavOpen(false);
            setTimeout(() => {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        }
    }

    function navLinks(hideContact: boolean) {
        return (
        <>
            {onNewChat && (
                <button
                    type="button"
                    onClick={() => {
                        onNewChat();
                        setIsNavOpen(false);
                    }}
                    className="mb-2 flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-[13px] text-white/80 hover:bg-white/5"
                >
                    <SquarePen className="h-4 w-4" />
                    New chat
                </button>
            )}
            {ITEMS.filter((item) => !(hideContact && item.id === "contact")).map((item) => {
                const panel =
                    item.id === "work"
                        ? onWork
                        : item.id === "about"
                          ? onAbout
                          : item.id === "skills"
                            ? onSkills
                            : item.id === "contact"
                              ? onContact
                              : undefined;
                if (panel) {
                    return (
                        <NavLink
                            key={item.id}
                            onClick={() => {
                                panel();
                                setIsNavOpen(false);
                            }}
                        >
                            {item.label}
                        </NavLink>
                    );
                }
                return linksToHome ? (
                    <NavLink
                        key={item.id}
                        href={`/#${item.id}`}
                        onClick={() => setIsNavOpen(false)}
                    >
                        {item.label}
                    </NavLink>
                ) : (
                    <NavLink key={item.id} onClick={() => goTo(item.id)}>
                        {item.label}
                    </NavLink>
                );
            })}
            {onRoadmap ? (
                <NavLink
                    onClick={() => {
                        onRoadmap();
                        setIsNavOpen(false);
                    }}
                >
                    Road map
                </NavLink>
            ) : (
                <NavLink href="/roadmap" onClick={() => setIsNavOpen(false)}>
                    Road map
                </NavLink>
            )}
        </>
        );
    }

    const rail = (
        <div className="flex h-full w-[16.5rem] flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-black text-white shadow-2xl">
            <Link href="/" className="flex items-center gap-3 px-4 pt-6 pb-5">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/20">
                    <Image src="/profilephoto.jpeg" alt="Profile" fill className="object-cover" />
                </div>
                <div className="flex min-w-0 flex-col leading-none">
                    <span className="truncate text-[13px] font-bold uppercase tracking-tight">
                        Vittorio Shiffman
                    </span>
                    <span className="mt-1 text-[10px] uppercase tracking-widest text-white/50">
                        Product Engineer
                    </span>
                </div>
            </Link>
            <div className="flex flex-1 flex-col gap-0.5 overflow-y-auto border-t border-white/10 px-2 py-4">
                {navLinks(true)}
            </div>
            <div className="border-t border-white/10 p-4">
                {onContact ? (
                    <button
                        type="button"
                        onClick={onContact}
                        className="block w-full rounded-full bg-white px-4 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-black"
                    >
                        Get in touch
                    </button>
                ) : (
                    <Link
                        href="/#contact"
                        className="block rounded-full bg-white px-4 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.16em] text-black"
                    >
                        Get in touch
                    </Link>
                )}
            </div>
        </div>
    );

    return (
        <>
            {variant === "rail" && (
                <aside className="hidden h-dvh shrink-0 p-4 md:block">
                    <div className="h-full">{rail}</div>
                </aside>
            )}

            <div className={variant === "rail" ? "md:hidden" : undefined}>
            <AnimatePresence>
                {!hidden && (
                    <motion.header
                        initial={{ y: -100, x: "-50%", opacity: 0 }}
                        animate={{ y: 0, x: "-50%", opacity: 1 }}
                        exit={{ y: -100, x: "-50%", opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed top-4 md:top-6 left-1/2 z-[150] w-[95%] max-w-fit"
                    >
                        <motion.div
                            layout
                            className="bg-black text-white rounded-[2rem] shadow-2xl backdrop-blur-md bg-opacity-95 border border-white/10 overflow-hidden flex flex-col items-center"
                            animate={{ minWidth: isNavOpen ? "300px" : "auto" }}
                        >
                            <div
                                onClick={() => setIsNavOpen(!isNavOpen)}
                                className="px-3 md:px-4 py-2 md:py-3 flex items-center gap-6 md:gap-32 w-full cursor-pointer hover:bg-white/5 transition-colors"
                            >
                                <Link
                                    href="/"
                                    onClick={(e) => e.stopPropagation()}
                                    className="flex items-center gap-3 md:gap-4"
                                >
                                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border border-white/20">
                                        <Image
                                            src="/profilephoto.jpeg"
                                            alt="Profile"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col leading-none">
                                        <span className="font-bold text-sm md:text-base tracking-tight uppercase whitespace-nowrap">
                                            Vittorio Shiffman
                                        </span>
                                        <span className="text-[9px] md:text-[11px] text-white/60 tracking-widest uppercase mt-0.5 md:mt-1">
                                            Product Engineer
                                        </span>
                                    </div>
                                </Link>

                                <div className="p-2 ml-auto">
                                    <motion.div
                                        animate={{ rotate: isNavOpen ? 90 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {isNavOpen ? (
                                            <X className="h-4 w-4 md:h-5 md:w-5 text-orange-500" />
                                        ) : (
                                            <Menu className="h-4 w-4 md:h-5 md:w-5" />
                                        )}
                                    </motion.div>
                                </div>
                            </div>

                            <AnimatePresence>
                                {isNavOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="w-full border-t border-white/10 overflow-hidden"
                                    >
                                        <div className="p-6 flex flex-col gap-2">{navLinks(false)}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </motion.header>
                )}
            </AnimatePresence>
            </div>

            <AnimatePresence>
                {!hidden && variant !== "rail" && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="fixed top-6 right-8 z-[150] hidden xl:block"
                    >
                        {linksToHome ? (
                            <Link
                                href="/#contact"
                                className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl"
                            >
                                Get in touch
                            </Link>
                        ) : (
                            <button
                                type="button"
                                onClick={() => {
                                    document.getElementById("contact")?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                    });
                                }}
                                className="bg-black text-white px-6 py-3 rounded-full font-medium text-sm hover:scale-105 transition-transform active:scale-95 shadow-xl"
                            >
                                Get in touch
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
