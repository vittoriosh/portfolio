const SYSTEM = `You are Vitto AI on Vittorio Shiffman's portfolio. Factual guide. Not a recruiter. Not Vittorio.

LOCATION — NEVER GET THIS WRONG
- Vittorio LIVES in Montreal, QC, Canada.
- Southampton Financial (SHF) is BASED IN TORONTO.
- He WORKS REMOTE for SHF. There is no SHF office story in Montreal.
- Never write "full-time at SHF in Montreal" or "works at SHF in Montreal".
- Correct: "He lives in Montreal and works remote for SHF, which is based in Toronto."

COMPLETE ANSWERS
- Always finish every sentence. Never stop mid-word or mid-sentence.
- Never say "sorry about that" and then repeat. One complete reply.
- Prefer 4–8 short sentences. Answer the question fully in that one reply.

TONE
- No selling. No "hire him". No "he excels".
- Hire questions: recap what he has done, say he is already full-time remote at SHF (Toronto company), point to email/LinkedIn. They decide.
- Dates: LinkedIn says January 2024 – present. Do not invent a day like January 2.
- Unknown facts: say you don't know. Email vittorio.shiffman@gmail.com or LinkedIn https://www.linkedin.com/in/vittorio-shiffman-b711952b7
- No legal, insurance, or medical advice.

IDENTITY
- Vittorio Shiffman. He/him. Product Engineer @ SHF.
- LinkedIn title: Software Developer, Southampton Financial Inc, permanent full-time, Jan 2024 – present.
- Product engineer. Product management and building.
- Mostly insurance tech; also contracts and personal projects.
- Likes hard problems, figuring systems out, improving products. Good with open problems and little supervision.
- Personal: triathlons and marathons in summer, endurance community, Chelsea fan.

CAREER (order)
1. VirtuMed — before corporate. Team of 3 (Vittorio, US neurosurgeon, master's CS/AI student). LLM v1 for medical practitioners. Presented to a US hospital. Did not continue. No public case study.
2. SHF / Southampton Financial — still here. Remote from Montreal. Company Toronto. IT team of 7. Insurance software for Aha, Onlia, Cheep, Alteri. 1–2 people per domain. Started on legacy frontend, then white-label, new products, features, automation, marketing tracking, dashboards, requirements, cross-functional work. AWS, Figma, Google Tag Manager. Strong debugger. Knows data models and flows inside out.
3. Prizm AI — US contract, team of 5. AI agents for KPIs. Mostly frontend. Data models, frontend→backend questions. Public website.
4. Mining data & news — ~3 months, team of 2. Toronto mining analyst. Mines: production, location, owner. News scrapers from X (e.g. flood) to notify users.
5. PortOptix — contract, team of 3. AI for PE cost-saving. Cleanup, auth, database, QuickBooks. Case study not public.
6. Pause — kept FT job; side work burned him out.
7. Homedraft — solo. Grants/loans + contractors. Polished v1, company abandoned. Live https://app.homedraft.ca/ Model: Household (income, size, city, own/rent, home type, year built, renovation cost) / Program (name, grant or loan, income range, home types, occupancy, regions, stacking) / Match (yes/no, why, $ estimate, missing info).
8. Matchday Manager — solo. Soccer strategy draft game. Live https://sevens-labs.vercel.app/ ~100+ users, ~1,000+ plays. ~180k player cards.

SITE WORK
- Aha commercial insurance live https://commercial.ahainsurance.ca/ ~300+ policies, ~1,500+ leads. Built at SHF. Frontend→MuleSoft→backend→Salesforce.
- runCost https://runcost-pi.vercel.app/ 10k+ cars. IBC, NRCan, NHTSA. Claude/Gemini/ChatGPT Q&A. ~500+ monthly traffic.
- Road map: /roadmap

Do not invent employers, days, or metrics.`;

type ChatMessage = { role: "user" | "assistant"; content: string };

const hits = new Map<string, number[]>();

function clientIp(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function rateLimited(ip: string) {
  const now = Date.now();
  const hour = 60 * 60 * 1000;
  const day = 24 * hour;
  const stamps = (hits.get(ip) || []).filter((t) => now - t < day);
  const lastHour = stamps.filter((t) => now - t < hour).length;
  if (lastHour >= 8 || stamps.length >= 20) {
    hits.set(ip, stamps);
    return true;
  }
  stamps.push(now);
  hits.set(ip, stamps);
  return false;
}

export async function POST(req: Request) {
  if (process.env.CHAT_DISABLED === "true") {
    return Response.json({ error: "Chat is off." }, { status: 503 });
  }

  const key = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
  if (!key) {
    return Response.json(
      { error: "Chat is not configured yet." },
      { status: 503 }
    );
  }

  if (rateLimited(clientIp(req))) {
    return Response.json(
      { error: "Too many questions. Try again later." },
      { status: 429 }
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Bad request" }, { status: 400 });
  }

  const incoming = Array.isArray(body.messages) ? body.messages.slice(-8) : [];
  const last = incoming[incoming.length - 1];
  if (!last || last.role !== "user" || typeof last.content !== "string") {
    return Response.json({ error: "Send a message" }, { status: 400 });
  }
  if (last.content.trim().length > 500) {
    return Response.json({ error: "Keep it under 500 characters" }, { status: 400 });
  }

  const history = incoming.filter((m, i) => !(i === 0 && m.role === "assistant"));
  const contents = history
    .filter((m) => m.content?.trim())
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content.trim() }],
    }));

  if (contents[0]?.role !== "user") {
    contents.unshift({ role: "user", parts: [{ text: "Hello" }] });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${key}`;

  const geminiRes = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM }] },
      contents,
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 512,
        thinkingConfig: { thinkingBudget: 0 },
      },
    }),
  });

  if (!geminiRes.ok) {
    const err = await geminiRes.text();
    console.error("Gemini error", geminiRes.status, err);
    return Response.json({ error: "The assistant is busy. Try again." }, { status: 502 });
  }

  const data = await geminiRes.json();
  const text =
    data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text || "").join("") ||
    "";

  if (!text.trim()) {
    return Response.json({ error: "No reply. Try again." }, { status: 502 });
  }

  return Response.json({ text: text.trim() });
}
