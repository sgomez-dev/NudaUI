import type { NudaComponent } from "./types";

export const bordersOutlines: NudaComponent[] = [
  /* ─────────────── Gradient Border ─────────────── */
  {
    id: "gradient-border",
    name: "Gradient Border",
    category: "Borders & Outlines",
    preview: (
      <div className="nuda-gradient-border" style={{ padding: "24px 32px", color: "#fff", fontSize: 14 }}>
        Gradient Border
      </div>
    ),
    cssInline: `
      .nuda-gradient-border{--angle:0deg;position:relative;background:#111;border-radius:12px;isolation:isolate}
      .nuda-gradient-border::before{content:'';position:absolute;inset:-2px;border-radius:inherit;background:conic-gradient(from var(--angle),#6366f1,#ec4899,#f59e0b,#22c55e,#06b6d4,#6366f1);z-index:-1;animation:_gb 3s linear infinite}
      @keyframes _gb{to{--angle:360deg}}
      @property --angle{syntax:"<angle>";initial-value:0deg;inherits:false}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gradient-border">
  Your content here
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Gradient Border
   Animated rotating gradient border using @property.
   Customize: gradient colors */

@property --nuda-gb-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

.nuda-gradient-border {
  position: relative;
  background: #111;
  border-radius: 12px;
  padding: 24px 32px;
  isolation: isolate;
}

.nuda-gradient-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: conic-gradient(
    from var(--nuda-gb-angle),
    #6366f1, #ec4899, #f59e0b,
    #22c55e, #06b6d4, #6366f1
  );
  z-index: -1;
  animation: nuda-gradient-rotate 3s linear infinite;
  will-change: --nuda-gb-angle;
}

@keyframes nuda-gradient-rotate {
  to { --nuda-gb-angle: 360deg; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-gradient-border::before { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Dashed March ─────────────── */
  {
    id: "dashed-march",
    name: "Dashed March",
    category: "Borders & Outlines",
    preview: (
      <div className="nuda-dashed-march" style={{ padding: "24px 32px", color: "#fff", fontSize: 14 }}>
        Marching Ants
      </div>
    ),
    cssInline: `
      .nuda-dashed-march{position:relative;border-radius:12px;background:#111}
      .nuda-dashed-march::before{content:'';position:absolute;inset:-1px;border-radius:inherit;background:repeating-linear-gradient(90deg,#6366f1 0,#6366f1 6px,transparent 6px,transparent 12px) top/100% 1.5px no-repeat,repeating-linear-gradient(0deg,#6366f1 0,#6366f1 6px,transparent 6px,transparent 12px) right/1.5px 100% no-repeat,repeating-linear-gradient(90deg,#6366f1 0,#6366f1 6px,transparent 6px,transparent 12px) bottom/100% 1.5px no-repeat,repeating-linear-gradient(0deg,#6366f1 0,#6366f1 6px,transparent 6px,transparent 12px) left/1.5px 100% no-repeat;animation:_dm 1s linear infinite}
      @keyframes _dm{to{background-position:12px top,right 12px,calc(100% - 12px) bottom,left calc(100% - 12px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dashed-march">
  Your content here
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Dashed March
   Marching ants dashed border.
   Customize: --march-color, dash size */

.nuda-dashed-march {
  --march-color: #6366f1;
  position: relative;
  border-radius: 12px;
  background: #111;
  padding: 24px 32px;
}

.nuda-dashed-march::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background:
    repeating-linear-gradient(90deg, var(--march-color) 0, var(--march-color) 6px, transparent 6px, transparent 12px) top / 100% 1.5px no-repeat,
    repeating-linear-gradient(0deg, var(--march-color) 0, var(--march-color) 6px, transparent 6px, transparent 12px) right / 1.5px 100% no-repeat,
    repeating-linear-gradient(90deg, var(--march-color) 0, var(--march-color) 6px, transparent 6px, transparent 12px) bottom / 100% 1.5px no-repeat,
    repeating-linear-gradient(0deg, var(--march-color) 0, var(--march-color) 6px, transparent 6px, transparent 12px) left / 1.5px 100% no-repeat;
  animation: nuda-march-move 1s linear infinite;
}

@keyframes nuda-march-move {
  to {
    background-position:
      12px top,
      right 12px,
      calc(100% - 12px) bottom,
      left calc(100% - 12px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dashed-march::before { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Glow Border ─────────────── */
  {
    id: "glow-border",
    name: "Glow Border",
    category: "Borders & Outlines",
    preview: (
      <div className="nuda-glow-border" style={{ padding: "24px 32px", color: "#fff", fontSize: 14 }}>
        Glow Border
      </div>
    ),
    cssInline: `
      .nuda-glow-border{--c:#6366f1;position:relative;border:1px solid color-mix(in srgb,var(--c) 40%,transparent);border-radius:12px;background:#111;animation:_glb 2s ease-in-out infinite alternate}
      @keyframes _glb{0%{box-shadow:0 0 8px color-mix(in srgb,var(--c) 20%,transparent),0 0 20px color-mix(in srgb,var(--c) 10%,transparent)}100%{box-shadow:0 0 15px color-mix(in srgb,var(--c) 40%,transparent),0 0 40px color-mix(in srgb,var(--c) 20%,transparent)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glow-border">
  Your content here
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glow Border
   Pulsing glow effect around an element.
   Customize: --glow-color */

.nuda-glow-border {
  --glow-color: #6366f1;
  position: relative;
  border: 1px solid rgba(99, 102, 241, 0.4);
  border-radius: 12px;
  background: #111;
  padding: 24px 32px;
  animation: nuda-glow-pulse 2s ease-in-out infinite alternate;
  will-change: box-shadow;
}

@keyframes nuda-glow-pulse {
  0% {
    box-shadow:
      0 0 8px rgba(99, 102, 241, 0.2),
      0 0 20px rgba(99, 102, 241, 0.1);
  }
  100% {
    box-shadow:
      0 0 15px rgba(99, 102, 241, 0.4),
      0 0 40px rgba(99, 102, 241, 0.2);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glow-border { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Drawing Border ─────────────── */
  {
    id: "drawing-border",
    name: "Drawing Border",
    category: "Borders & Outlines",
    preview: (
      <div style={{ position: "relative", display: "inline-block" }}>
        <svg className="nuda-drawing-border" viewBox="0 0 200 80" fill="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <rect className="nuda-drawing-border__rect" x="1" y="1" width="198" height="78" rx="12" stroke="#6366f1" strokeWidth="2" />
        </svg>
        <div style={{ padding: "24px 32px", color: "#fff", fontSize: 14, position: "relative" }}>
          Drawing Border
        </div>
      </div>
    ),
    cssInline: `
      .nuda-drawing-border{overflow:visible}
      .nuda-drawing-border__rect{stroke-dasharray:556;stroke-dashoffset:556;animation:_db 1.5s ease-out forwards}
      @keyframes _db{to{stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div style="position: relative; display: inline-block;">
  <svg class="nuda-drawing-border" viewBox="0 0 200 80" fill="none" style="position: absolute; inset: 0; width: 100%; height: 100%;">
    <rect class="nuda-drawing-border__rect" x="1" y="1" width="198" height="78" rx="12"
          stroke="#6366f1" stroke-width="2"/>
  </svg>
  <div style="padding: 24px 32px; position: relative;">
    Your content here
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Drawing Border
   Border draws itself using SVG stroke-dashoffset.
   Adjust dasharray to match your rect perimeter. */

.nuda-drawing-border {
  overflow: visible;
}

.nuda-drawing-border__rect {
  stroke-dasharray: 556;
  stroke-dashoffset: 556;
  animation: nuda-draw-border 1.5s ease-out forwards;
  will-change: stroke-dashoffset;
}

@keyframes nuda-draw-border {
  to { stroke-dashoffset: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-drawing-border__rect {
    animation: none;
    stroke-dashoffset: 0;
  }
}`,
      },
    ],
  },

  /* ─────────────── Rainbow Border ─────────────── */
  {
    id: "rainbow-border",
    name: "Rainbow Border",
    category: "Borders & Outlines",
    preview: (
      <div className="nuda-rainbow-border" style={{ padding: "24px 32px", color: "#fff", fontSize: 14 }}>
        Rainbow Border
      </div>
    ),
    cssInline: `
      .nuda-rainbow-border{position:relative;background:#111;border-radius:12px;isolation:isolate}
      .nuda-rainbow-border::before{content:'';position:absolute;inset:-2px;border-radius:inherit;background:linear-gradient(90deg,#ef4444,#f59e0b,#22c55e,#06b6d4,#6366f1,#ec4899,#ef4444);background-size:300% 100%;z-index:-1;animation:_rb 4s linear infinite}
      @keyframes _rb{to{background-position:300% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-rainbow-border">
  Your content here
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Rainbow Border
   Rainbow color cycling border.
   Customize: gradient colors */

.nuda-rainbow-border {
  position: relative;
  background: #111;
  border-radius: 12px;
  padding: 24px 32px;
  isolation: isolate;
}

.nuda-rainbow-border::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: inherit;
  background: linear-gradient(
    90deg,
    #ef4444, #f59e0b, #22c55e,
    #06b6d4, #6366f1, #ec4899,
    #ef4444
  );
  background-size: 300% 100%;
  z-index: -1;
  animation: nuda-rainbow-shift 4s linear infinite;
  will-change: background-position;
}

@keyframes nuda-rainbow-shift {
  to { background-position: 300% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-rainbow-border::before { animation: none; }
}`,
      },
    ],
  },
];
