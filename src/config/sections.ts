import type { Checkpoint } from "@/types/content";

/**
 * The course, in order. The rail, checkpoint numbers (#01…), banners and
 * in-page anchors are all derived from this list. The first entry is the
 * hero start line and the last entry is the finish line.
 */
export const checkpoints: Checkpoint[] = [
  { id: "start", title: "Start", alias: "start" },
  {
    id: "experience",
    title: "Education & Achievements",
    alias: "the run log",
    blurb: "My degree program and competitive problem-solving milestones.",
  },
  {
    id: "projects",
    title: "Projects",
    alias: "the decks",
    blurb: "Open a deck for the problem, what I built, the result, and the technologies used.",
  },
  {
    id: "stack",
    title: "Skills",
    alias: "wheels",
    blurb: "A grouped snapshot of my programming, AI/ML, agentic AI, backend, deployment, and computer science skills.",
  },
  {
    id: "certificates",
    title: "Certificates",
    alias: "card binder",
    blurb: "Certificates in programming, machine learning, linear algebra, and communication.",
  },
  { id: "contact", title: "Contact", alias: "finish line" },
];

export const checkpointNumber = (id: string) => {
  const i = checkpoints.findIndex((c) => c.id === id);
  return "#" + String(i).padStart(2, "0");
};

export const getCheckpoint = (id: string) => {
  const c = checkpoints.find((x) => x.id === id);
  if (!c) throw new Error(`Unknown checkpoint "${id}"`);
  return c;
};

export const labels = {
  checkpoint: "Checkpoint",
  finishBanner: "Course clear!",
  finishTrophy: "🏆",
  backToStart: { icon: "↑", text: "Back to start" },
  railHint: ["grab me", "& ride ↓"],
  runReadout: "Run",
  experienceColumns: ["When", "Where", "What landed"],
  now: "Now",
  rangeSeparator: " — ",
  flipHint: "Open the build notes",
  deckClose: "Close",
  /** deck back-side links */
  deckLinks: { live: "Live", demo: "Demo", repo: "Code" },
  deckResult: ["Problem", "Built", "Result"],
  binderPrev: "Previous page",
  binderNext: "Next page",
  binderPage: "Page",
  /** run-log rows on phones: show the first few bullets, the rest behind a toggle */
  pointsShown: 3,
  morePoints: (n: number) => `+${n} more`,
  fewerPoints: "Show less",
  /** the binder hint (once per page load), by turn axis: x = calendar (phones, drag up), y = book (tablets, drag left) */
  binderHint: { x: "drag to flip ↑", y: "drag to flip ←" },
};
