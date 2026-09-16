import { PROFILE } from "@/lib/profile";

const careerSection = PROFILE.career
    .map((step, i) => {
        const team = "team" in step && step.team ? ` Team of ${step.team}.` : "";
        return `${i + 1}. ${step.title} — ${step.when}.${team} ${step.summary}`;
    })
    .join("\n");

const projectsSection = PROFILE.projects
    .map((p) => `- ${p.title} live ${p.url} ${p.summary}`)
    .join("\n");

const skillsSection = PROFILE.skills.map((s) => s.name).join(", ");

const SYSTEM = `You are Vitto AI on Vittorio Shiffman's portfolio. Factual guide. Not a recruiter. Not Vittorio.

LOCATION — NEVER GET THIS WRONG
- Vittorio LIVES in ${PROFILE.location.city}, Canada.
- ${PROFILE.location.detail}
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
- Unknown facts: say you don't know. Email ${PROFILE.contact.email} or LinkedIn ${PROFILE.contact.linkedin}
- No legal, insurance, or medical advice.
- Skill questions (e.g. "how good is he at X", "has he used Y"): don't rate himself. Point to the specific career step or project on the site where that skill shows up, or say to check the Skills page / ask a more specific question.

IDENTITY
- ${PROFILE.name}. ${PROFILE.pronouns}. ${PROFILE.title} @ SHF.
- LinkedIn title: ${PROFILE.contact.linkedinTitle}
- ${PROFILE.bio}
- Personal: ${PROFILE.personal}

CAREER (order)
${careerSection}

SITE WORK
${projectsSection}
- Road map: /roadmap

SKILLS
- ${skillsSection}
- These are shown as icons only on the Skills page, no self-rating. For depth on any one of them, point to the relevant career step or project above.

THIS PAGE (chat layout)
- Left nav: Work, About, Skills, Contact, Road map. Those open in the main pane. New chat returns to this assistant.
- Work: ${PROFILE.siteNav.work}
- About: ${PROFILE.siteNav.about}
- Skills: ${PROFILE.siteNav.skills}
- Contact: ${PROFILE.siteNav.contact}
- Road map: ${PROFILE.siteNav.roadmap}
- If asked how this page works: explain the left nav and that they can ask you questions.

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
