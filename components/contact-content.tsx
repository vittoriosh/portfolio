"use client";

import Link from "next/link";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";

const CHANNELS = [
    {
        label: "Email",
        value: "vittorio.shiffman@gmail.com",
        href: "mailto:vittorio.shiffman@gmail.com",
        icon: Mail,
        external: false,
    },
    {
        label: "LinkedIn",
        value: "vittorio-shiffman",
        href: "https://www.linkedin.com/in/vittorio-shiffman-b711952b7",
        icon: Linkedin,
        external: true,
    },
];

export default function ContactContent() {
    return (
        <div className="px-6 md:px-10 pb-16 pt-10 md:pt-14">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">Contact</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                Let&apos;s connect
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-black/55">
                Ready to build something? My inbox is always open.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {CHANNELS.map((c) => {
                    const Icon = c.icon;
                    return (
                        <Link
                            key={c.label}
                            href={c.href}
                            target={c.external ? "_blank" : undefined}
                            rel={c.external ? "noopener noreferrer" : undefined}
                            className="group flex items-center justify-between rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6"
                        >
                            <span className="flex items-center gap-4">
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-navy/15 bg-navy/5">
                                    <Icon className="h-5 w-5 text-navy" />
                                </span>
                                <span>
                                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                                        {c.label}
                                    </span>
                                    <span className="mt-0.5 block break-all text-[15px] font-medium text-black">
                                        {c.value}
                                    </span>
                                </span>
                            </span>
                            <ArrowUpRight className="h-4 w-4 shrink-0 text-black/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
