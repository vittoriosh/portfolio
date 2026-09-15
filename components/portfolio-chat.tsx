"use client";

import React, { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

type ChatMessage = { role: "user" | "assistant"; content: string };

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Hi — I'm Vitto AI. Ask me about Vittorio's work, projects, and how to reach him.",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    const text = input.trim();
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

  return (
    <div className="pointer-events-none fixed bottom-20 right-4 z-[160] md:bottom-8 md:right-8">
      {open && (
        <div className="pointer-events-auto mb-3 flex h-[28rem] w-[min(calc(100vw-2rem),22rem)] flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em]">Ask Vitto AI</p>
              <p className="mt-0.5 text-[10px] text-black/40">Work, projects, contact</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-black/40 hover:bg-black/5 hover:text-black"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-[13px] leading-relaxed">
            {messages.map((m, i) => (
              <div
                key={i}
                className={m.role === "user" ? "ml-8 rounded-2xl bg-black px-3 py-2 text-white" : "mr-6 text-black/70"}
              >
                {m.content}
              </div>
            ))}
            {loading && <p className="text-[11px] uppercase tracking-widest text-black/30">Thinking…</p>}
            <div ref={bottomRef} />
          </div>
          <form
            className="flex gap-2 border-t border-black/10 p-3"
            onSubmit={(e) => {
              e.preventDefault();
              void send();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question"
              maxLength={500}
              className="min-w-0 flex-1 rounded-full border border-black/15 px-4 py-2 text-sm outline-none focus:border-black"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black text-white disabled:opacity-30"
              aria-label="Send"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="pointer-events-auto flex h-12 items-center gap-2 rounded-full bg-black px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-xl"
      >
        {open ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
        {open ? "Close" : "Ask Vitto AI"}
      </button>
    </div>
  );
}
