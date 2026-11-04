import { useId, useMemo } from "react";
import type { DeckArt as Art } from "@/types/content";
import { full } from "@/features/ride/engine/poses";
import { riderMarkup } from "@/features/ride/engine/skaterRig";
import riderArt from "@/features/ride/riderArt.module.css";

/* Cover art for the deck fronts, one per project, drawn in the site palette with ink outlines. */

const ink = "var(--ink)";
const pink = "var(--pink)";
const acid = "var(--acid)";
const white = "var(--white)";
const paper = "var(--paper)";
const blue = "var(--blue)";
const paper2 = "var(--paper-2)";
/* greys mixed from the palette for screens, grooves and dimmed text */
const shade = (pct: number) => `color-mix(in srgb, ${ink} ${pct}%, ${paper})`;
const mono = { fontFamily: "var(--font-mono)", fontWeight: 600 };
const body = { fontFamily: "var(--font-body)", fontWeight: 600 };
const line = { stroke: ink, strokeWidth: 3, strokeLinejoin: "round", strokeLinecap: "round" } as const;

/** File chunks stacking up past an upload arrow, one marked as resuming. */
function Upload() {
  return (
    <>
      <g {...line}>
        <rect x="30" y="150" width="70" height="26" fill={acid} />
        <rect x="30" y="118" width="70" height="26" fill={acid} />
        <rect x="30" y="86" width="70" height="26" fill={acid} />
        <rect x="30" y="54" width="70" height="26" fill={white} strokeDasharray="6 5" />
        <rect x="44" y="18" width="70" height="26" fill={acid} transform="rotate(8 79 31)" />
        <path d="M132 176 V40 M118 58 L132 40 L146 58" fill="none" strokeWidth="5" />
      </g>
      <g style={mono} fontSize="10" fill={ink}>
        <text x="38" y="167">
          0–1 MB
        </text>
        <text x="38" y="135">
          1–2 MB
        </text>
        <text x="38" y="103">
          2–3 MB
        </text>
        <text x="40" y="71">
          resume…
        </text>
      </g>
      <circle cx="132" cy="112" r="11" fill={white} {...line} />
      <path d="M127 112 h10 M132 107 v10" stroke={ink} strokeWidth="3" transform="rotate(45 132 112)" />
    </>
  );
}

/** A record with its tone arm, and an equaliser streaming out below. */
function Stream() {
  // kept a few px below the "206 PARTIAL CONTENT" label
  const bars = [12, 22, 15, 29, 19, 32, 14, 24, 17, 10];
  return (
    <>
      <circle cx="84" cy="74" r="62" fill={ink} {...line} />
      <g fill="none" stroke={shade(80)} strokeWidth="2">
        <circle cx="84" cy="74" r="50" />
        <circle cx="84" cy="74" r="40" />
        <circle cx="84" cy="74" r="30" />
      </g>
      <circle cx="84" cy="74" r="18" fill={pink} {...line} />
      <circle cx="84" cy="74" r="4" fill={ink} />
      <path d="M150 14 L118 60" stroke={paper} strokeWidth="6" strokeLinecap="round" />
      <circle cx="150" cy="14" r="8" fill={paper} {...line} />
      <g {...line} fill={acid}>
        {bars.map((h, i) => (
          <rect key={i} x={16 + i * 14} y={190 - h} width="10" height={h} />
        ))}
      </g>
      <text x="84" y="150" textAnchor="middle" style={mono} fontSize="10" fill={white}>
        206 PARTIAL CONTENT
      </text>
    </>
  );
}

/** A log monitor with a heartbeat line and live rows. */
function Monitor() {
  return (
    <>
      <rect x="10" y="18" width="148" height="128" rx="8" fill={ink} {...line} />
      <path
        d="M18 70 H50 L60 48 L72 98 L84 36 L96 84 L104 70 H150"
        fill="none"
        stroke={pink}
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <g style={mono} fontSize="9">
        <text x="20" y="116" fill={acid}>
          GET /orders 200
        </text>
        <text x="20" y="130" fill={white}>
          POST /auth 201
        </text>
      </g>
      <circle cx="146" cy="32" r="5" fill={pink} />
      <text x="138" y="35" textAnchor="end" style={mono} fontSize="8" fill={white}>
        LIVE
      </text>
      <path d="M70 146 L62 172 H106 L98 146" fill={paper} {...line} />
      <rect x="46" y="172" width="76" height="12" rx="3" fill={paper} {...line} />
    </>
  );
}

/** A music tab behind an always-on-top lyrics window. */
function Lyrics() {
  return (
    <>
      <rect x="8" y="30" width="112" height="86" rx="6" fill={shade(90)} stroke={paper} strokeWidth="2" />
      <g fill={shade(70)}>
        <rect x="18" y="46" width="40" height="40" rx="3" />
        <rect x="66" y="50" width="44" height="6" rx="3" />
        <rect x="66" y="64" width="30" height="6" rx="3" />
      </g>
      <g transform="rotate(-6 100 120)">
        <rect x="46" y="74" width="114" height="104" rx="8" fill={paper} {...line} />
        <rect x="46" y="74" width="114" height="18" rx="8" fill={acid} {...line} />
        <circle cx="58" cy="83" r="3" fill={ink} />
        <circle cx="68" cy="83" r="3" fill={ink} />
        <g style={body} fontSize="11">
          <text x="56" y="112" fill={shade(40)}>
            and the night
          </text>
          <rect x="52" y="120" width="102" height="18" fill={pink} />
          <text x="56" y="133" fill={ink}>
            goes on and on
          </text>
          <text x="56" y="156" fill={shade(40)}>
            under city lights
          </text>
        </g>
      </g>
      <path d="M30 150 v-30 l18 -6 v30" fill="none" stroke={acid} strokeWidth="4" strokeLinejoin="round" />
      <circle cx="25" cy="152" r="7" fill={acid} />
      <circle cx="43" cy="146" r="7" fill={acid} />
    </>
  );
}

/** SafarSathi: a route map with a marked destination and safety shield. */
function Safar() {
  return (
    <>
      <path
        d="M22 20 L50 48 L38 76 L66 104 L54 132 L82 160 L126 180"
        fill="none"
        stroke={ink}
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 20 L50 48 L38 76 L66 104 L54 132 L82 160 L126 180"
        fill="none"
        stroke={acid}
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="2 12"
      />
      <path d="M20 22 C20 10 40 10 40 22 C40 31 30 41 30 41 C30 41 20 31 20 22Z" fill={pink} {...line} />
      <circle cx="30" cy="22" r="4" fill={paper} />
      <path d="M124 156 L146 164 V179 C146 194 134 201 124 205 C114 201 102 194 102 179 V164Z" fill={blue} {...line} />
      <path
        d="M114 180 L121 187 L135 171"
        fill="none"
        stroke={acid}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M82 16 L142 44 M86 8 L148 36" stroke={ink} strokeWidth="3" strokeLinecap="round" />
    </>
  );
}

/** MemoryOps: an incident file linked to a memory store and a reviewed recommendation. */
function Memory() {
  return (
    <>
      <g {...line}>
        <rect x="22" y="28" width="92" height="124" rx="7" fill={paper} />
        <path d="M42 56 H94 M42 76 H84 M42 96 H94 M42 116 H72" />
        <path d="M104 46 L142 46 L142 78" fill="none" />
        <path d="M134 70 L142 78 L150 70" fill="none" />
        <rect x="76" y="126" width="70" height="54" rx="7" fill={pink} />
        <path d="M92 144 H130 M92 160 H120" />
      </g>
      <circle cx="112" cy="38" r="10" fill={acid} {...line} />
      <path d="M112 32 V44 M106 38 H118" stroke={ink} strokeWidth="3" strokeLinecap="round" />
      <path d="M28 176 H66 M36 188 H58" stroke={blue} strokeWidth="5" strokeLinecap="round" />
    </>
  );
}

/** NeuroAI: an MRI-style image tile with a highlighted classification region. */
function Neuro() {
  return (
    <>
      <rect x="10" y="18" width="148" height="154" rx="10" fill={ink} {...line} />
      <circle cx="84" cy="86" r="54" fill={paper2} stroke={paper} strokeWidth="4" />
      <path
        d="M84 36 C67 42 52 55 48 73 C44 93 55 114 72 126 C79 131 83 124 84 116Z"
        fill={white}
        stroke={ink}
        strokeWidth="3"
      />
      <path
        d="M84 36 C101 42 116 55 120 73 C124 93 113 114 96 126 C89 131 85 124 84 116Z"
        fill={paper}
        stroke={ink}
        strokeWidth="3"
      />
      <path
        d="M84 43 V118 M65 56 Q76 60 78 71 M56 78 Q67 82 72 91 M103 56 Q92 60 90 71 M112 78 Q101 82 96 91"
        fill="none"
        stroke={ink}
        strokeWidth="2.5"
      />
      <circle cx="103" cy="94" r="11" fill={pink} stroke={ink} strokeWidth="3" />
      <path d="M35 150 H133" stroke={acid} strokeWidth="4" strokeLinecap="round" />
      <circle cx="28" cy="150" r="3" fill={pink} />
      <circle cx="140" cy="150" r="3" fill={pink} />
      <text x="84" y="194" textAnchor="middle" style={mono} fontSize="10" fill={ink}>
        MRI / CLASSIFY
      </text>
    </>
  );
}

/** the cover's jump: front knee tucked, back leg trailing, arms spread (angles as in poses.ts) */
const JUMP = full({
  tL: 1.35,
  kL: -2.0,
  tR: 0.35,
  kR: -1.35,
  sL: 1.85,
  eL: 0.35,
  sR: -1.5,
  eR: 0.5,
  lean: 0.35,
  yaw: -0.1,
});
/** where the rider sits on the cover: the lowest wheel at (x, y), at `scale` cover units per rider unit */
const RIDER_AT = { x: 80, y: 140, scale: 0.42 };

/** The portfolio cover: the original rider (shared art and rig), jumping the course rail under a warm paper sky. */
function Site() {
  const tag = useId().replace(/\W/g, "");
  const rider = useMemo(() => riderMarkup(JUMP, tag, 2.4 / RIDER_AT.scale, true), [tag]);
  return (
    <>
      <g fill={white}>
        <circle cx="18" cy="30" r="9" />
        <circle cx="30" cy="25" r="12" />
        <circle cx="42" cy="31" r="8" />
        <circle cx="140" cy="118" r="8" />
        <circle cx="151" cy="113" r="10" />
        <circle cx="161" cy="119" r="7" />
      </g>
      <g stroke={ink} strokeWidth="3" strokeLinecap="round">
        <path d="M22 80 H42 M14 92 H38 M24 104 H44" />
      </g>
      <g
        className={riderArt.art}
        transform={`translate(${RIDER_AT.x} ${RIDER_AT.y}) scale(${RIDER_AT.scale})`}
        dangerouslySetInnerHTML={{ __html: rider }}
      />
      {/* the rail: the same ink line and pink checkpoints as the page's scrollbar */}
      <g {...line}>
        <rect x="30" y="168" width="6" height="32" fill={shade(30)} />
        <rect x="128" y="168" width="6" height="32" fill={shade(30)} />
        <rect x="8" y="162" width="152" height="8" rx="4" fill={ink} />
      </g>
      <g fill={pink} stroke={paper} strokeWidth="1.5">
        <circle cx="26" cy="166" r="3.5" />
        <circle cx="66" cy="166" r="3.5" />
        <circle cx="104" cy="166" r="3.5" />
        <circle cx="142" cy="166" r="3.5" />
      </g>
    </>
  );
}

const arts: Record<Art, () => React.JSX.Element> = {
  upload: Upload,
  stream: Stream,
  monitor: Monitor,
  lyrics: Lyrics,
  site: Site,
  safar: Safar,
  memory: Memory,
  neuro: Neuro,
};

export default function DeckArt({ art, className }: { art: Art; className?: string }) {
  const Art = arts[art];
  return (
    <svg className={className} viewBox="0 0 168 204" aria-hidden="true" focusable="false">
      <Art />
    </svg>
  );
}
