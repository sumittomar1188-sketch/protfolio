import type { SiteConfig } from "@/types/content";

const url = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "") || undefined;
const email = "sumittomar1188@gmail.com";

export const site: SiteConfig = {
  name: { first: "Sumit", last: "Tomar", full: "Sumit Tomar" },
  role: "AI/ML Engineer | Agentic AI Developer | AI Application Developer",
  description:
    "Sumit Tomar is a computer science engineering student focused on AI/ML, agentic AI, and deployed AI applications.",
  url,
  locale: "en_IN",
  email,
  location: "India",
  timezone: { label: "IST · UTC +5:30", iana: "Asia/Kolkata" },
  availability: "AI/ML · Agentic AI · AI applications",
  education: {
    school: "Sushila Devi Bansal College of Engineering, Indore",
    degree: "B.Tech in Computer Science Engineering (Artificial Intelligence & Machine Learning)",
    from: "2024",
    to: "2028",
  },
  hero: {
    tags: ["AI/ML Engineer", "Agentic AI Developer", "AI applications"],
    subheading:
      "I build and deploy AI applications and agents. My work spans **machine learning**, **agentic AI**, and backend systems, using tools including LangChain, LangGraph, and Google ADK.",
    scribble: "scroll to explore ↓",
    ctas: [
      { label: "See my projects", href: "#projects", primary: true },
      { label: "Contact", href: "#contact" },
    ],
  },
  contact: {
    pitch: "For questions about my AI/ML and agentic AI projects, reach me by email.",
    reachTitle: "Reach me",
    emailLabel: "Email",
    copyLabel: "Copy",
    copiedLabel: "Copied!",
    openLabel: "Open",
    basedIn: "Based in",
    sticker: "Let's build with AI!",
    tag: "ST",
    form: {
      title: "Send a message",
      web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() || undefined,
      endpoint: "https://api.web3forms.com/submit",
      fields: {
        name: { label: "Name", placeholder: "Your name", error: "Name is required" },
        email: { label: "Email", placeholder: "you@company.com", error: "Enter an email I can reply to" },
        message: { label: "Message", placeholder: "What would you like to discuss?", error: "Add a message" },
      },
      send: "Send message",
      sending: "Sending…",
      sent: "Sent. I'll get back to you soon.",
      failed: "That didn't go through. Email me directly:",
      subject: "New Portfolio Contact Message",
    },
  },
  socials: [
    {
      kind: "github",
      label: "GitHub",
      handle: "sumittomar1188-sketch",
      href: "https://github.com/sumittomar1188-sketch",
    },
  ],
  footnote: "AI/ML, agentic AI, and applications built to solve practical problems.",
};
