"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import SiteHeader from "@/components/site-header";
import RoadmapContent from "@/components/roadmap-content";
import WorkList from "@/components/work-list";
import AboutContent from "@/components/about-content";
import SkillsContent from "@/components/skills-content";
import ContactContent from "@/components/contact-content";

type ChatMessage = { role: "user" | "assistant"; content: string };
type View = "chat" | "roadmap" | "work" | "about" | "skills" | "contact";

const GREETING: ChatMessage = {
    role: "assistant",
    content: "Hi — I'm Vitto AI. Ask me about Vittorio's work, projects, and how to reach him.",
};

const SUGGESTIONS = [
    { label: "How does this work?", prompt: "How does this page work?" },
    { label: "What's on Work?", prompt: "What is on the Work page?" },
    { label: "What's on About?", prompt: "What is on the About page?" },
    { label: "What skills does he have?", prompt: "What skills and technologies does Vittorio work with?" },
    { label: "What's the road map?", prompt: "What is the career road map?" },
    { label: "How do I contact him?", prompt: "How do I contact Vittorio?" },
];

export default function HomePage() {
    const [view, setView] = useState<View>("chat");
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    function newChat() {
        setView("chat");
        setMessages([GREETING]);
        setTimeout(() => inputRef.current?.focus(), 50);
    }

    async function send(preset?: string) {
        const text = (preset ?? input).trim();
        if (!text || loading) return;
        const next = [...messages, { role: "user" as const, content: text }];
        setMessages(next);
        setInput("");
        setLoading(true);
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: next }),
            });
            const data = await res.json();
            if (!res.ok) {
                setMessages([
                    ...next,
                    { role: "assistant", content: data.error || "Something went wrong." },
                ]);
            } else {
                setMessages([...next, { role: "assistant", content: data.text }]);
            }
        } catch {
            setMessages([...next, { role: "assistant", content: "Could not reach the assistant." }]);
        } finally {
            setLoading(false);
        }
    }

    const empty = messages.length <= 1;

    return (
        <div className="flex h-dvh overflow-hidden bg-[#f7f7f5] text-black font-sans">
            <SiteHeader
                variant="rail"
                onNewChat={newChat}
                onRoadmap={() => setView("roadmap")}
                onWork={() => setView("work")}
                onAbout={() => setView("about")}
                onSkills={() => setView("skills")}
                onContact={() => setView("contact")}
            />

            <div className="flex min-w-0 flex-1 flex-col">
                {view === "roadmap" ? (
                    <div className="flex-1 overflow-y-auto pt-24 md:pt-0">
                        <RoadmapContent showHomeLink={false} />
                    </div>
                ) : view === "work" ? (
                    <div className="flex-1 overflow-y-auto pt-24 md:pt-0">
                        <WorkList compact />
                    </div>
                ) : view === "about" ? (
                    <div className="flex-1 overflow-y-auto pt-24 md:pt-0">
                        <AboutContent onRoadmap={() => setView("roadmap")} />
                    </div>
                ) : view === "skills" ? (
                    <div className="flex-1 overflow-y-auto pt-24 md:pt-0">
                        <SkillsContent onAskAi={() => setView("chat")} />
                    </div>
                ) : view === "contact" ? (
                    <div className="flex-1 overflow-y-auto pt-24 md:pt-0">
                        <ContactContent />
                    </div>
                ) : (
                    <>
                <div className="flex-1 overflow-y-auto">
                    {empty ? (
                        <div className="flex h-full flex-col items-center justify-center px-6 pb-8 pt-14 md:pt-0">
                            <h1 className="text-center text-2xl font-semibold tracking-tight md:text-3xl">
                                Welcome to Vitto Portfolio
                            </h1>
                            <p className="mt-2 max-w-md text-center text-[14px] text-black/45">
                                Ask about Vittorio&apos;s work, or tap a suggestion.
                            </p>
                            <div className="mt-8 flex max-w-xl flex-wrap justify-center gap-2">
                                {SUGGESTIONS.map((s) => (
                                    <button
                                        key={s.label}
                                        type="button"
                                        disabled={loading}
                                        onClick={() => void send(s.prompt)}
                                        className="rounded-full border border-black/10 bg-white px-4 py-2 text-[13px] text-black/70 shadow-sm hover:border-black/25 hover:text-black disabled:opacity-40"
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="mx-auto w-full max-w-2xl space-y-6 px-4 py-8 pt-16 md:px-6 md:pt-8">
                            {messages.map((m, i) => (
                                <div
                                    key={i}
                                    className={
                                        m.role === "user"
                                            ? "ml-auto max-w-[85%] rounded-3xl bg-black px-4 py-3 text-[15px] leading-relaxed text-white"
                                            : "max-w-[90%] text-[15px] leading-relaxed text-black/75"
                                    }
                                >
                                    {m.content}
                                </div>
                            ))}
                            {loading && (
                                <div className="flex items-center gap-2.5">
                                    <span className="relative h-5 w-5 animate-[pulse_1.1s_ease-in-out_infinite]">
                                        <Image src="/icon.svg" alt="" fill sizes="20px" className="object-contain" />
                                    </span>
                                    <span className="text-[12px] uppercase tracking-[0.16em] text-black/30">
                                        Thinking
                                    </span>
                                </div>
                            )}
                            <div ref={bottomRef} />
                        </div>
                    )}
                </div>

                <div className="mx-auto w-full max-w-2xl px-4 pb-6 md:px-6">
                    <form
                        className="flex items-end gap-2 rounded-[1.6rem] border border-black/10 bg-white px-3 py-2 shadow-sm"
                        onSubmit={(e) => {
                            e.preventDefault();
                            void send();
                        }}
                    >
                        <textarea
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" && !e.shiftKey) {
                                    e.preventDefault();
                                    void send();
                                }
                            }}
                            placeholder="Ask anything"
                            rows={1}
                            maxLength={500}
                            className="max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-2 py-2.5 text-[15px] outline-none"
                        />
                        <button
                            type="submit"
                            disabled={loading || !input.trim()}
                            className="mb-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white disabled:opacity-25"
                            aria-label="Send"
                        >
                            <Send className="h-3.5 w-3.5" />
                        </button>
                    </form>
                    <p className="mt-2 text-center text-[11px] text-black/30">
                        Vitto AI can be wrong. Check the work on the site.
                    </p>
                </div>
                    </>
                )}
            </div>
        </div>
    );
}
