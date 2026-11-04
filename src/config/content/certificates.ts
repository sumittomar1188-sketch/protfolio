import type { Certificate } from "@/types/content";

export const certificates: Certificate[] = [
  {
    type: "be",
    name: "Python for Beginners",
    logo: "microsoft",
    art: "PY",
    issuer: "Microsoft",
    move: "Python basics",
    desc: "Beginner-level Python certificate from Microsoft.",
  },
  {
    type: "ai",
    art: "ML",
    name: "ML for Beginners",
    issuer: "NPTEL",
    move: "Machine learning basics",
    desc: "Beginner-level machine learning certificate from NPTEL.",
  },
  {
    type: "ai",
    art: "LA",
    name: "Linear Algebra",
    issuer: "MSF Brands",
    move: "Linear algebra",
    desc: "Linear algebra certificate from MSF Brands.",
  },
  {
    type: "general",
    art: "GC",
    name: "Group Communication",
    issuer: "Saylor Academy",
    move: "Group communication",
    desc: "Group communication certificate from Saylor Academy.",
  },
];
