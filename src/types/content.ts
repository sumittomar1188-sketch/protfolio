import type { IssuerLogo } from "@/config/issuerLogos";
/** Typed schemas for everything the page renders. Content lives in src/config. */

export type SocialKind = "github" | "linkedin" | "resume" | "x" | "website";

export interface Social {
  kind: SocialKind;
  label: string;
  handle: string;
  href: string;
}

/** One field of the contact form */
export interface FormField {
  label: string;
  placeholder: string;
  /** shown under the field when it fails validation */
  error: string;
}

/** The "Send a message" form on the contact board */
export interface ContactForm {
  title: string;
  /** Optional public Web3Forms access key; without it, the form reports that it is unavailable. */
  web3formsKey?: string;
  /** the Web3Forms submit URL */
  endpoint: string;
  fields: { name: FormField; email: FormField; message: FormField };
  send: string;
  sending: string;
  sent: string;
  /** shown when posting fails; the email address is appended */
  failed: string;
  /** fixed subject Web3Forms receives */
  subject: string;
}

export interface SiteConfig {
  name: { first: string; last: string; full: string };
  role: string;
  description: string;
  url?: string;
  locale: string;
  email: string;
  location: string;
  /** shown next to the location, with the current local time */
  timezone: { label: string; iana: string };
  availability: string;
  employer?: { name: string; url?: string };
  education: { school: string; degree: string; from: string; to?: string };
  hero: {
    tags: string[];
    /** `**bold**` segments are highlighted */
    subheading: string;
    scribble: string;
    ctas: { label: string; href: string; primary?: boolean }[];
  };
  contact: {
    pitch: string;
    /** heading sticker over the links */
    reachTitle: string;
    emailLabel: string;
    copyLabel: string;
    copiedLabel: string;
    openLabel: string;
    basedIn: string;
    /** sticker slapped across the bottom edge of the board */
    sticker: string;
    /** graffiti tag sprayed on the ramp in the background */
    tag: string;
    form: ContactForm;
  };
  socials: Social[];
  resume?: { title: string; href: string; label: string };
  footnote: string;
}

export interface Checkpoint {
  /** DOM id of the section; also the in-page anchor */
  id: string;
  /** the real word, rendered as the big title and on the rail */
  title: string;
  /** skate name, rendered as the sticker and on the checkpoint banner */
  alias: string;
  blurb?: string;
}

/** cover art drawn on a deck's front (DeckArt.tsx) */
export type DeckArt = "upload" | "stream" | "monitor" | "lyrics" | "site" | "safar" | "memory" | "neuro";

export interface Project {
  name: string;
  art: DeckArt;
  /** title lines on the front; defaults to the name on one line */
  lines?: string[];
  /** deck paint: background, title and its offset shadow, the bottom band and its text, and the bolts */
  colors: {
    bg: ThemeColor;
    title: ThemeColor;
    shadow: ThemeColor;
    band: ThemeColor;
    bandText: ThemeColor;
    bolt?: ThemeColor;
  };
  /** Neutral project label; no date is assumed. */
  meta: string;
  tag: string;
  /** small muted label under the title on the back, e.g. "File transfer" */
  category: string;
  problem: string;
  built: string;
  result: { value: string; unit: string };
  stack: string[];
  /** deployed app: shows the LIVE sticker and a "Live" link */
  live?: string;
  /** demo video, for projects without a deployed app */
  demo?: string;
  /** source code */
  repo?: string;
}

export interface WheelGroup {
  name: string;
  /** theme color token name used for the urethane */
  color: ThemeColor;
  /** theme color token name used for the printed text */
  text: ThemeColor;
  items: { name: string }[];
}

/** Rubber stamp on a run-log row: big value in the middle, text around the rim. */
export interface Stamp {
  value: string;
  caption?: string;
  ring: string;
  /** ink color token; defaults to pink */
  color?: ThemeColor;
}

export interface ExperienceEntry {
  from: string;
  /** omit while ongoing: the range then ends in the highlighted "now" badge */
  to?: string;
  title: string;
  org: string;
  /** the org's website: the name links to it */
  orgUrl?: string;
  badge?: string;
  stamp?: Stamp;
  /** `**bold**` segments are emphasised */
  points: string[];
}

export type CardType = "ai" | "ops" | "be" | "general";

export interface Certificate {
  name: string;
  /** the issuer's mark beside its name (config/issuerLogos.ts) */
  logo?: IssuerLogo;
  type: CardType;
  art: string;
  issuer: string;
  date?: string;
  hours?: string;
  move: string;
  desc: string;
  rare?: boolean;
}

export type ThemeColor = "paper" | "paper2" | "ink" | "muted" | "pink" | "acid" | "blue" | "cyan" | "grip" | "white";
