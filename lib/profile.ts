// Single source of truth for facts about Vittorio Shiffman.
// Consumed by the /api/chat system prompt and the Skills page, so the AI
// assistant and the UI never drift apart on the same facts.

export const PROFILE = {
    name: "Vittorio Shiffman",
    pronouns: "he/him",
    title: "Product Engineer",

    location: {
        city: "Montreal, QC",
        detail: "Remote — Southampton Financial (SHF) is based in Toronto. There is no SHF office story in Montreal.",
    },

    bio: "Product engineer. Cares about product management and building. Mostly insurance tech; also contracts and personal projects. Likes hard problems — figuring systems out, improving products. Good with open problems and little supervision.",

    personal: "Big on endurance sports — triathlons and marathons every summer, loves the community. Chelsea fan.",

    contact: {
        email: "vittorio.shiffman@gmail.com",
        linkedin: "https://www.linkedin.com/in/vittorio-shiffman-b711952b7",
        linkedinTitle: "Software Developer, Southampton Financial Inc, permanent full-time, Jan 2024 – present.",
    },

    career: [
        {
            id: "virtumed",
            title: "VirtuMed",
            when: "Before corporate",
            team: 3,
            summary:
                "Team of 3 (Vittorio, a US neurosurgeon, a master's student in CS/AI). Built an LLM v1 for medical practitioners and presented it to a US hospital. Didn't continue past that pitch. No public case study.",
        },
        {
            id: "shf",
            title: "Southampton Financial (SHF)",
            when: "Still here",
            team: 7,
            summary:
                "Still here, remote from Montreal — the company is based in Toronto. IT team of 7. Insurance software for Aha, Onlia, Cheep, and Alteri, one or two people per domain. Started on the legacy frontend, then a white-label launch, new products, feature work, automation, marketing tracking, dashboards, requirements gathering, and cross-functional work. Picked up AWS, Figma, and Google Tag Manager along the way. Strong debugger; knows the data models and flows inside out.",
        },
        {
            id: "prizm",
            title: "Prizm AI",
            when: "Contract · USA",
            team: 5,
            summary:
                "US contract, team of 5. AI agents that generate KPIs. Mostly frontend, plus helping define the data model and how information should move from frontend to backend. Designed and built their public website.",
        },
        {
            id: "mining",
            title: "Mining data & news",
            when: "Contract · ~3 months",
            team: 2,
            summary:
                "About three months, team of 2. A Toronto-based mining analyst needed a platform to track mines — production, location, ownership. News scrapers caught events like a flood hitting a mine and notified users in real time.",
        },
        {
            id: "portoptix",
            title: "PortOptix",
            when: "Contract",
            team: 3,
            summary:
                "Contract, team of 3. AI for private equity cost savings. Code cleanup, authentication setup, database hardening, and a QuickBooks integration. Case study not public.",
        },
        {
            id: "pause",
            title: "A pause on side work",
            when: "Break",
            summary: "Kept the full-time job; the extra side work was burning him out, so he paused it. A deliberate pause, not a stop.",
        },
        {
            id: "homedraft",
            title: "Homedraft",
            when: "Personal project",
            team: 1,
            url: "https://app.homedraft.ca/",
            summary:
                "Solo project connecting homeowners with certified contractors — surfaces the grants and loans they qualify for on renovations, then makes it easy to engage a contractor. Built a polished v1, then set the company aside; the live app still works. Data model: Household (income, size, city, own/rent, home type, year built, renovation cost) / Program (name, grant or loan, income range, home types, occupancy, regions, stacking) / Match (yes or no, why, dollar estimate, missing info).",
        },
        {
            id: "matchday",
            title: "Matchday Manager",
            when: "Personal project",
            team: 1,
            url: "https://sevens-labs.vercel.app/",
            summary:
                "Solo project — a soccer strategy draft game built on real player stat datasets. ~100+ unique users, ~1,000+ plays, ~180k player cards.",
        },
    ],

    projects: [
        {
            id: "south-hampton",
            title: "Commercial Insurance Application",
            url: "https://commercial.ahainsurance.ca/",
            summary:
                "Built at SHF. A 0-to-1 commercial insurance platform — quote and bind coverage online. Frontend → MuleSoft → backend → Salesforce. 200+ policies bound, 1,500+ leads generated.",
        },
        {
            id: "runcost",
            title: "runCost",
            url: "https://runcost-pi.vercel.app/",
            summary:
                "A Canadian vehicle research platform on 10,000+ cars — IBC claim indexes, NRCan fuel ratings, and NHTSA safety data, with AI Q&A wired through Claude, Gemini, and ChatGPT. ~500+ monthly traffic.",
        },
    ],

    skills: [
        { id: "product-strategy", name: "Product Strategy", category: "Product" },
        { id: "roadmapping", name: "Roadmapping", category: "Product" },
        { id: "agile", name: "Agile / Scrum", category: "Product" },
        { id: "requirements", name: "Requirements Gathering", category: "Product" },
        { id: "stakeholder", name: "Stakeholder Management", category: "Product" },
        { id: "jira", name: "Jira", category: "Product" },
        { id: "cursor", name: "Cursor", category: "AI" },
        { id: "claude", name: "Claude", category: "AI" },
        { id: "gemini", name: "Gemini", category: "AI" },
        { id: "ai-automation", name: "AI Automation", category: "AI" },
        { id: "typescript", name: "TypeScript", category: "Language" },
        { id: "javascript", name: "JavaScript", category: "Language" },
        { id: "react", name: "React", category: "Frontend" },
        { id: "nextjs", name: "Next.js", category: "Frontend" },
        { id: "tailwind", name: "Tailwind CSS", category: "Frontend" },
        { id: "nodejs", name: "Node.js", category: "Backend" },
        { id: "supabase", name: "Supabase", category: "Backend" },
        { id: "postgresql", name: "PostgreSQL", category: "Backend" },
        { id: "aws", name: "AWS", category: "Infrastructure" },
        { id: "vercel", name: "Vercel", category: "Infrastructure" },
        { id: "figma", name: "Figma", category: "Design" },
        { id: "salesforce", name: "Salesforce", category: "Integrations" },
        { id: "gtm", name: "Google Tag Manager", category: "Analytics" },
        { id: "git", name: "Git", category: "Tooling" },
    ],

    siteNav: {
        work: "Selected projects and details (Aha commercial, runCost, Matchday, Homedraft). VirtuMed and PortOptix aren't public yet.",
        about: "Bio, Montreal remote, SHF in Toronto, LinkedIn and email.",
        skills: "Icons for his product management skills (strategy, roadmapping, agile, requirements, stakeholder management, Jira) and his technical tools. No per-skill ratings on this page on purpose — ask the assistant or check a project's details for how a skill was actually used.",
        contact: "Email and LinkedIn.",
        roadmap: "Career steps from VirtuMed through SHF, contracts, Homedraft, Matchday.",
    },
} as const;

export type ProfileCareerStep = (typeof PROFILE.career)[number];
export type ProfileProject = (typeof PROFILE.projects)[number];
export type ProfileSkill = (typeof PROFILE.skills)[number];
