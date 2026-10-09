"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { ArrowUpRight, Menu, Send, SquarePen, X } from "lucide-react";
import HelloHeading from "@/components/hello-heading";
import { PROFILE } from "@/lib/profile";

const HomeScene = dynamic(() => import("@/components/home-scene"), { ssr: false });
// Each page is its own chunk, so a visitor only downloads the page they're on; the others load
// when navigated to. They still render on the server for a fast first paint.
const HomeSections = dynamic(() => import("@/components/home-sections"));
const WorkPage = dynamic(() => import("@/components/work-page"));
const AboutContent = dynamic(() => import("@/components/about-content"));
const SkillsPage = dynamic(() => import("@/components/skills-page"));
const ContactContent = dynamic(() => import("@/components/contact-content"));

type ChatMessage = { role: "user" | "assistant"; content: string };
type View = "home" | "chat" | "work" | "about" | "skills" | "contact";

// Every view has its own URL. The whole site lives in one persistent layout, so moving between
// pages keeps the chat history and animates instead of doing a full page load.
const VIEW_PATHS: Record<View, string> = {
    home: "/",
    chat: "/chat",
    work: "/work",
    about: "/about",
    skills: "/skills",
    contact: "/contact",
};

// Under the name in the nav: the role on the home screen, otherwise what the visitor is doing.
const NAV_SUBTITLES: Record<View, string> = {
    home: "Product Engineer",
    chat: "Asking Vitto AI",
    work: "Exploring work",
    about: "About me",
    skills: "Exploring skills",
    contact: "Get in touch",
};

// Pages that open with a full-screen hero get the big water chat card until you scroll; the
// rest are plain content pages and use the slim floating chat bar from the start.
const HERO_VIEWS: View[] = ["home", "work", "skills"];

// Defers heavy content below the fold (the 3D bike: three.js plus its model) so it doesn't
// compete with the first paint. It mounts once the browser is idle after load, or as soon as
// the box comes within 300px of the viewport, whichever happens first.
function LazyMount({ className, children }: { className?: string; children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || visible) return;
        const show = () => setVisible(true);
        const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && show(), {
            rootMargin: "300px 0px",
        });
        observer.observe(el);

        let idle = 0;
        const afterLoad = () => {
            idle =
                typeof window.requestIdleCallback === "function"
                    ? window.requestIdleCallback(show, { timeout: 4000 })
                    : window.setTimeout(show, 2500);
        };
        if (document.readyState === "complete") afterLoad();
        else window.addEventListener("load", afterLoad, { once: true });

        return () => {
            observer.disconnect();
            window.removeEventListener("load", afterLoad);
            if (typeof window.cancelIdleCallback === "function") window.cancelIdleCallback(idle);
            window.clearTimeout(idle);
        };
    }, [visible]);

    return (
        <div ref={ref} className={className}>
            {visible && children}
        </div>
    );
}

function viewFromPath(path: string): View {
    const match = (Object.keys(VIEW_PATHS) as View[]).find((v) => VIEW_PATHS[v] === path);
    return match ?? "home";
}

const GREETING: ChatMessage = {
    role: "assistant",
    content: "Hi — I'm Vitto AI. Ask me about Vittorio's work, projects, and how to reach him.",
};

const LINK_PATTERN = /(https?:\/\/[^\s]+)|([\w.+-]+@[\w-]+\.[\w.-]+)/g;
const TRAILING_PUNCT = /[).,;:!?]+$/;

function linkifyMessage(text: string): React.ReactNode[] {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let key = 0;

    while ((match = LINK_PATTERN.exec(text)) !== null) {
        const raw = match[0];
        const start = match.index;
        const end = start + raw.length;

        if (start > lastIndex) parts.push(text.slice(lastIndex, start));

        const trailMatch = raw.match(TRAILING_PUNCT);
        const trail = trailMatch ? trailMatch[0] : "";
        const value = trail ? raw.slice(0, raw.length - trail.length) : raw;

        const isEmail = value.includes("@") && !value.startsWith("http");
        parts.push(
            <a
                key={key++}
                href={isEmail ? `mailto:${value}` : value}
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener noreferrer"}
                className="font-medium text-black underline decoration-black/25 underline-offset-2 hover:decoration-black"
            >
                {value}
            </a>
        );

        if (trail) parts.push(trail);
        lastIndex = end;
    }

    if (lastIndex < text.length) parts.push(text.slice(lastIndex));
    return parts;
}

const MENU: { label: string; view: View }[] = [
    { label: "Work", view: "work" },
    { label: "About", view: "about" },
    { label: "Skills", view: "skills" },
];

export default function SiteApp() {
    const pathname = usePathname();
    const router = useRouter();
    const view = viewFromPath(pathname);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([GREETING]);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggled = useRef(false);
    // Once the visitor scrolls past the opening view, the chat input becomes a slim floating bar
    // (on the home page it detaches from the hero; on other pages it replaces the water card).
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [menuOpen]);

    // Every page change (links, menu, back/forward) starts at the top with the full chat card.
    useEffect(() => {
        setScrolled(false);
        scrollRef.current?.scrollTo({ top: 0 });
    }, [view]);

    function openView(next: View) {
        if (next !== view) router.push(VIEW_PATHS[next], { scroll: false });
        setMenuOpen(false);
        setScrolled(false);
        scrollRef.current?.scrollTo({ top: 0 });
    }

    function goHome() {
        openView("home");
    }

    function newChat() {
        setMessages([GREETING]);
        setInput("");
        inputRef.current?.focus();
    }

    // On /chat, keep the newest message in view.
    useEffect(() => {
        if (view !== "chat") return;
        const frame = requestAnimationFrame(() => {
            const el = scrollRef.current;
            el?.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
        });
        return () => cancelAnimationFrame(frame);
    }, [view, messages, loading]);

    // Arriving on /chat with a pointer device: put the cursor in the input (not on touch screens,
    // where it would pop the keyboard over the conversation).
    useEffect(() => {
        if (view === "chat" && window.matchMedia("(pointer: fine)").matches) inputRef.current?.focus();
    }, [view]);

    async function send(preset?: string) {
        const text = (preset ?? input).trim();
        if (!text || loading) return;
        // Conversations live on /chat: asking from any other page takes you there.
        if (view !== "chat") openView("chat");
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

    function renderChatForm(className: string, withRef = false) {
        return (
            <form
                className={`flex items-end gap-2 rounded-[2rem] border border-black bg-white px-3 py-2 ${className}`}
                onSubmit={(e) => {
                    e.preventDefault();
                    void send();
                }}
            >
                <textarea
                    ref={withRef ? inputRef : undefined}
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
        );
    }

    const conversation = messages.filter((m) => m !== GREETING);

    return (
        <div
            ref={scrollRef}
            data-scroll-root
            onScroll={(e) => setScrolled(e.currentTarget.scrollTop > 80)}
            className="h-dvh overflow-y-auto overflow-x-hidden bg-white text-black font-sans"
        >
            <header className="sticky top-0 z-50 flex h-20 items-center justify-center bg-gradient-to-b from-white from-40% to-white/0 px-4">
                <div className="flex items-center gap-1 rounded-full border border-white/10 bg-black py-2 pl-2 pr-2 text-white shadow-xl">
                    <button type="button" onClick={goHome} className="flex items-center gap-3 pr-2">
                        <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/20">
                            <Image src="/profilephoto.jpeg" alt="Vittorio Shiffman" fill sizes="40px" className="object-cover" />
                        </span>
                        <span className="flex flex-col items-start leading-none">
                            <span className="text-[13px] font-bold uppercase tracking-tight">Vittorio Shiffman</span>
                            <span className="relative mt-1 h-[10px] overflow-hidden text-[10px] uppercase leading-[10px] tracking-widest text-white/50">
                                <AnimatePresence mode="popLayout" initial={false}>
                                    <motion.span
                                        key={view}
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                        className="block whitespace-nowrap"
                                    >
                                        {NAV_SUBTITLES[view]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            menuToggled.current = true;
                            setMenuOpen((open) => !open);
                        }}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10"
                    >
                        <motion.span
                            key={menuOpen ? "close" : "open"}
                            // Only animate after the first toggle, so the icon paints with the HTML.
                            initial={menuToggled.current ? { rotate: -90, opacity: 0 } : false}
                            animate={{ rotate: 0, opacity: 1 }}
                            transition={{ duration: 0.25 }}
                        >
                            {menuOpen ? <X className="h-4 w-4 text-navy" /> : <Menu className="h-4 w-4" />}
                        </motion.span>
                    </button>
                </div>
            </header>


            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="menu"
                        className="fixed inset-0 z-40 flex items-center justify-center bg-white"
                        initial={{ clipPath: "circle(0% at 50% 2.5rem)" }}
                        animate={{ clipPath: "circle(150% at 50% 2.5rem)" }}
                        exit={{ clipPath: "circle(0% at 50% 2.5rem)" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <nav className="flex flex-col items-center gap-2 md:gap-4">
                            {MENU.map((item, i) => (
                                <motion.button
                                    key={item.view}
                                    type="button"
                                    onClick={() => openView(item.view)}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20, transition: { duration: 0.15 } }}
                                    transition={{ delay: 0.15 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="text-5xl font-semibold tracking-tight text-black/85 transition-colors hover:text-navy md:text-7xl"
                                >
                                    {item.label}
                                </motion.button>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                transition={{ delay: 0.15 + MENU.length * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-10 flex items-center gap-6 border-t border-black/10 pt-8 md:mt-14"
                            >
                                {[
                                    { href: `mailto:${PROFILE.contact.email}`, label: "Email" },
                                    { href: PROFILE.contact.linkedin, label: "LinkedIn" },
                                ].map((link, i) => (
                                    <React.Fragment key={link.label}>
                                        {i > 0 && <span aria-hidden className="h-3 w-px bg-black/15" />}
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith("http") ? "_blank" : undefined}
                                            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-black/55 underline decoration-black/20 underline-offset-[6px] transition-colors hover:text-black hover:decoration-black"
                                        >
                                            {link.label}
                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                        </a>
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
            <motion.main
                key={view}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                // Room at the bottom so the last content clears the floating chat bar.
                className={view === "home" ? "pb-28 md:pb-32" : view === "chat" ? undefined : "pb-56"}
            >
            {view === "home" ? (
                <>
                    <section className="flex h-[calc(100dvh-5rem)] flex-col">
                        <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-6 pb-6">
                            <HelloHeading />
                            <p className="mt-4 animate-fade-in text-center text-[15px] text-black/45 [animation-delay:0.5s] motion-reduce:animate-none">
                                Ask me anything about Vittorio&apos;s work.
                            </p>
                        </div>

                <div
                    inert={scrolled}
                    className={`shrink-0 px-4 pb-6 transition-all duration-500 md:px-6 ${
                        scrolled ? "translate-y-6 opacity-0" : ""
                    }`}
                >
                    <div className="relative mx-auto w-full max-w-2xl">
                    <div className="h-[88px] overflow-hidden rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:h-[min(20dvh,190px)] md:min-h-[140px] md:rounded-[4.25rem]">
                        <video
                            src="/videos/water-strip.mp4"
                            poster="/videos/water-strip-poster.jpg"
                            autoPlay
                            muted
                            loop
                            playsInline
                            aria-hidden
                            className="h-full w-full object-cover"
                        />
                    </div>
                    {renderChatForm("absolute inset-x-3 top-1/2 z-10 -translate-y-1/2 shadow-sm md:inset-x-4", true)}
                    </div>
                    <p className="mx-auto mt-2 max-w-2xl text-center text-[11px] text-black/30">
                        Vitto AI can be wrong. Check the work on the site.
                    </p>
                </div>
                    </section>

                    <section className="grid h-[calc(100dvh-5rem)] grid-rows-2 md:grid-cols-2 md:grid-rows-1">
                        <LazyMount className="relative">
                            <HomeScene />
                        </LazyMount>
                        <div className="flex flex-col justify-center px-6 md:px-12">
                            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">About</p>
                            <h2 className="mt-4 max-w-xl text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.05] tracking-tight">
                                I work where product, design, and engineering meet.{" "}
                                <span className="text-black/35">Off the clock, I race triathlons and marathons.</span>
                            </h2>
                            <button
                                type="button"
                                onClick={() => openView("about")}
                                className="mt-8 self-start text-[11px] font-semibold uppercase tracking-[0.16em] text-black/50 underline decoration-black/20 underline-offset-4 hover:text-black hover:decoration-black"
                            >
                                More about me
                            </button>
                        </div>
                    </section>

                    <HomeSections onOpen={openView} />
                </>
            ) : view === "chat" ? (
                <section className="mx-auto flex min-h-[calc(100dvh-5rem)] w-full max-w-2xl flex-col px-4 pb-48 pt-4 md:px-6">
                    <div className="flex h-8 items-center justify-between">
                        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-black/35">Vitto AI</p>
                        {conversation.length > 0 && (
                            <button
                                type="button"
                                onClick={newChat}
                                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] text-black/50 hover:bg-black/5 hover:text-black"
                            >
                                <SquarePen className="h-3.5 w-3.5" />
                                New chat
                            </button>
                        )}
                    </div>

                    {conversation.length === 0 ? (
                        <div className="flex flex-1 flex-col items-center justify-center pb-16 text-center">
                            <h1 className="text-[clamp(2.75rem,8vw,5rem)] font-semibold leading-none tracking-[-0.04em]">
                                Ask me anything.
                            </h1>
                            <p className="mt-4 max-w-sm text-[15px] text-black/45">
                                About Vittorio&apos;s work, projects, skills, or how to reach him.
                            </p>
                        </div>
                    ) : (
                        <div className="mt-6 flex flex-col gap-6">
                            {conversation.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 14, scale: m.role === "user" ? 0.97 : 1 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className={
                                        m.role === "user"
                                            ? "ml-auto w-fit max-w-[85%] origin-bottom-right whitespace-pre-wrap break-words rounded-3xl bg-neutral-100 px-4 py-3 text-[15px] leading-relaxed text-black"
                                            : "max-w-[90%] whitespace-pre-wrap break-words text-[15px] leading-relaxed text-black/75"
                                    }
                                >
                                    {m.role === "assistant" ? linkifyMessage(m.content) : m.content}
                                </motion.div>
                            ))}
                            <AnimatePresence>
                                {loading && (
                                    <motion.div
                                        key="thinking"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                                        transition={{ duration: 0.3, delay: 0.15 }}
                                        className="flex items-center gap-2.5"
                                    >
                                        <span className="relative h-5 w-5 animate-[pulse_1.1s_ease-in-out_infinite]">
                                            <Image src="/icon.svg" alt="" fill sizes="20px" className="object-contain" />
                                        </span>
                                        <span className="text-[12px] uppercase tracking-[0.16em] text-black/30">Thinking</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </section>
            ) : view === "work" ? (
                <WorkPage />
            ) : view === "about" ? (
                <div className="mx-auto max-w-5xl">
                    <AboutContent />
                </div>
            ) : view === "skills" ? (
                <SkillsPage onAskAi={() => openView("chat")} />
            ) : (
                <div className="mx-auto max-w-5xl">
                    <ContactContent />
                </div>
            )}
            </motion.main>
            </AnimatePresence>

            <AnimatePresence>
                {view === "chat" ? (
                    <motion.div
                        key="chat-input"
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 40, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 320, damping: 32 }}
                        className="fixed inset-x-0 bottom-0 z-30 bg-gradient-to-t from-white from-60% to-white/0 px-4 pb-4 pt-10 md:pb-6"
                    >
                        <div className="mx-auto w-full max-w-2xl">
                            {renderChatForm("shadow-lg", true)}
                            <p className="mt-2 text-center text-[11px] text-black/30">
                                Vitto AI can be wrong. Check the work on the site.
                            </p>
                        </div>
                    </motion.div>
                ) : view !== "home" && HERO_VIEWS.includes(view) && !scrolled ? (
                    <motion.div
                        key="page-chat"
                        initial={{ y: 80, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 80, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 320, damping: 32 }}
                        className="fixed inset-x-0 bottom-4 z-30 flex justify-center px-4 md:bottom-5 md:px-6"
                    >
                        <div className="relative h-[88px] w-full max-w-2xl overflow-hidden rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:h-[min(20dvh,190px)] md:min-h-[140px] md:rounded-[4.25rem]">
                            <video
                                src="/videos/water-strip.mp4"
                                poster="/videos/water-strip-poster.jpg"
                                autoPlay
                                muted
                                loop
                                playsInline
                                aria-hidden
                                className="h-full w-full object-cover"
                            />
                            {renderChatForm("absolute inset-x-3 top-1/2 z-10 -translate-y-1/2 shadow-sm md:inset-x-4")}
                        </div>
                    </motion.div>
                ) : (scrolled || !HERO_VIEWS.includes(view)) && (
                    <motion.div
                        key="floating-chat"
                        initial={{ y: 80, opacity: 0, scale: 0.96 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 80, opacity: 0, scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 320, damping: 30 }}
                        className="fixed inset-x-0 bottom-5 z-30 flex justify-center px-4"
                    >
                        <div className="w-full max-w-2xl">{renderChatForm("shadow-xl")}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
