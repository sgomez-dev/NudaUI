import type { NudaComponent } from "./types";

const CAT = "Borders & Outlines";

export const bordersOutlinesExtra: NudaComponent[] = [
  /* ─────────────── Rotating Gradient Border ─────────────── */
  {
    id: "bdx-rotating-gradient",
    name: "Rotating Gradient Border",
    category: CAT,
    preview: (
      <div className="nuda-bdx-rot-grad">
        <span className="nuda-bdx-rot-grad__inner">Rotating Gradient</span>
      </div>
    ),
    cssInline: `
      .nuda-bdx-rot-grad{position:relative;display:inline-flex;border-radius:14px;padding:2px;background:conic-gradient(from var(--nuda-bdx-rg-angle,0deg),#e4ff54,#00d4ff,#ff6b6b,#a855f7,#e4ff54);animation:_nuda-bdxRotGrad 3s linear infinite}
      .nuda-bdx-rot-grad__inner{display:block;background:#141414;border-radius:12px;padding:18px 32px;color:#fafafa;font-size:.85rem;font-weight:500;letter-spacing:.02em;white-space:nowrap}
      @property --nuda-bdx-rg-angle{syntax:"<angle>";initial-value:0deg;inherits:false}
      @keyframes _nuda-bdxRotGrad{to{--nuda-bdx-rg-angle:360deg}}
      @media(prefers-reduced-motion:reduce){.nuda-bdx-rot-grad{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bdx-rot-grad">
  <span class="nuda-bdx-rot-grad__inner">Rotating Gradient</span>
</div>`,
      },
    ],
  },

  /* ─────────────── Marching Ants (Dashed) ─────────────── */
  {
    id: "bdx-marching-ants",
    name: "Marching Ants",
    category: CAT,
    preview: (
      <div className="nuda-bdx-march">
        <p className="nuda-bdx-march__label">Marching Ants</p>
      </div>
    ),
    cssInline: `
      .nuda-bdx-march{position:relative;background:#1a1a1a;border-radius:10px;padding:20px 28px;overflow:hidden}
      .nuda-bdx-march::before,.nuda-bdx-march::after{content:'';position:absolute;background:#e4ff54}
      .nuda-bdx-march::before{top:0;left:0;right:0;height:2px;background:repeating-linear-gradient(90deg,#e4ff54 0,#e4ff54 8px,transparent 8px,transparent 16px);animation:_nuda-bdxMarchH 1.2s linear infinite}
      .nuda-bdx-march::after{bottom:0;left:0;right:0;height:2px;background:repeating-linear-gradient(90deg,#e4ff54 0,#e4ff54 8px,transparent 8px,transparent 16px);animation:_nuda-bdxMarchH 1.2s linear infinite reverse}
      .nuda-bdx-march__label{color:#cfcfcf;font-size:.85rem;margin:0;position:relative}
      .nuda-bdx-march__label::before,.nuda-bdx-march__label::after{content:'';position:absolute;top:-20px;bottom:-20px;width:2px;background:repeating-linear-gradient(180deg,#e4ff54 0,#e4ff54 8px,transparent 8px,transparent 16px);animation:_nuda-bdxMarchV 1.2s linear infinite}
      .nuda-bdx-march__label::before{left:-28px}
      .nuda-bdx-march__label::after{right:-28px;animation-direction:reverse}
      @keyframes _nuda-bdxMarchH{from{background-position:0 0}to{background-position:16px 0}}
      @keyframes _nuda-bdxMarchV{from{background-position:0 0}to{background-position:0 16px}}
      @media(prefers-reduced-motion:reduce){.nuda-bdx-march::before,.nuda-bdx-march::after,.nuda-bdx-march__label::before,.nuda-bdx-march__label::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bdx-march">
  <p class="nuda-bdx-march__label">Marching Ants</p>
</div>`,
      },
    ],
  },

  /* ─────────────── Glow Pulse Outline ─────────────── */
  {
    id: "bdx-glow-pulse",
    name: "Glow Pulse Outline",
    category: CAT,
    preview: (
      <div className="nuda-bdx-glow-pulse">
        <span className="nuda-bdx-glow-pulse__dot" />
        <span className="nuda-bdx-glow-pulse__text">Live Status</span>
      </div>
    ),
    cssInline: `
      .nuda-bdx-glow-pulse{display:inline-flex;align-items:center;gap:.55rem;background:#141414;border:1px solid rgba(228,255,84,.35);border-radius:999px;padding:.55rem 1.1rem;animation:_nuda-bdxGlowPulse 2.2s ease-in-out infinite alternate}
      .nuda-bdx-glow-pulse__dot{width:8px;height:8px;border-radius:50%;background:#e4ff54;flex-shrink:0;box-shadow:0 0 0 0 rgba(228,255,84,.7);animation:_nuda-bdxDotPing 1.4s ease-in-out infinite}
      .nuda-bdx-glow-pulse__text{color:#fafafa;font-size:.8rem;font-weight:500;white-space:nowrap}
      @keyframes _nuda-bdxGlowPulse{from{box-shadow:0 0 6px rgba(228,255,84,.15),0 0 14px rgba(228,255,84,.08)}to{box-shadow:0 0 18px rgba(228,255,84,.45),0 0 36px rgba(228,255,84,.2)}}
      @keyframes _nuda-bdxDotPing{0%,100%{box-shadow:0 0 0 0 rgba(228,255,84,.7)}70%{box-shadow:0 0 0 6px rgba(228,255,84,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-bdx-glow-pulse,.nuda-bdx-glow-pulse__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bdx-glow-pulse">
  <span class="nuda-bdx-glow-pulse__dot"></span>
  <span class="nuda-bdx-glow-pulse__text">Live Status</span>
</div>`,
      },
    ],
  },

  /* ─────────────── Corner Brackets ─────────────── */
  {
    id: "bdx-corner-brackets",
    name: "Corner Brackets",
    category: CAT,
    preview: (
      <div className="nuda-bdx-brackets">
        <span className="nuda-bdx-brackets__tl" />
        <span className="nuda-bdx-brackets__tr" />
        <span className="nuda-bdx-brackets__bl" />
        <span className="nuda-bdx-brackets__br" />
        <p className="nuda-bdx-brackets__content">Corner Brackets</p>
      </div>
    ),
    cssInline: `
      .nuda-bdx-brackets{position:relative;display:inline-flex;align-items:center;justify-content:center;background:#1a1a1a;padding:22px 36px;min-width:160px}
      .nuda-bdx-brackets__tl,.nuda-bdx-brackets__tr,.nuda-bdx-brackets__bl,.nuda-bdx-brackets__br{position:absolute;width:14px;height:14px;border-color:#e4ff54;border-style:solid}
      .nuda-bdx-brackets__tl{top:0;left:0;border-width:2px 0 0 2px}
      .nuda-bdx-brackets__tr{top:0;right:0;border-width:2px 2px 0 0}
      .nuda-bdx-brackets__bl{bottom:0;left:0;border-width:0 0 2px 2px}
      .nuda-bdx-brackets__br{bottom:0;right:0;border-width:0 2px 2px 0}
      .nuda-bdx-brackets__content{color:#cfcfcf;font-size:.85rem;margin:0;font-family:monospace;letter-spacing:.04em}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bdx-brackets">
  <span class="nuda-bdx-brackets__tl"></span>
  <span class="nuda-bdx-brackets__tr"></span>
  <span class="nuda-bdx-brackets__bl"></span>
  <span class="nuda-bdx-brackets__br"></span>
  <p class="nuda-bdx-brackets__content">Corner Brackets</p>
</div>`,
      },
    ],
  },

  /* ─────────────── Double Border ─────────────── */
  {
    id: "bdx-double-border",
    name: "Double Border",
    category: CAT,
    preview: (
      <div className="nuda-bdx-double">
        <div className="nuda-bdx-double__inner">
          <span className="nuda-bdx-double__label">Double Border</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-bdx-double{background:#141414;border:2px solid rgba(255,255,255,.18);border-radius:14px;padding:5px;display:inline-block}
      .nuda-bdx-double__inner{border:1px solid rgba(228,255,84,.4);border-radius:10px;padding:16px 28px;background:linear-gradient(135deg,rgba(228,255,84,.04) 0%,transparent 60%)}
      .nuda-bdx-double__label{color:#fafafa;font-size:.85rem;font-weight:500;display:block;text-align:center}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bdx-double">
  <div class="nuda-bdx-double__inner">
    <span class="nuda-bdx-double__label">Double Border</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── Animated Underline Grow ─────────────── */
  {
    id: "bdx-underline-grow",
    name: "Animated Underline Grow",
    category: CAT,
    preview: (
      <div className="nuda-bdx-uline-wrap">
        <span className="nuda-bdx-uline">Hover to Animate</span>
        <span className="nuda-bdx-uline nuda-bdx-uline--active">Always Active</span>
        <span className="nuda-bdx-uline nuda-bdx-uline--accent">Accent Variant</span>
      </div>
    ),
    cssInline: `
      .nuda-bdx-uline-wrap{display:flex;flex-direction:column;gap:.8rem;padding:12px 16px;background:#141414;border-radius:10px}
      .nuda-bdx-uline{position:relative;display:inline-block;color:#cfcfcf;font-size:.9rem;font-weight:500;cursor:pointer;padding-bottom:3px}
      .nuda-bdx-uline::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:#777;border-radius:2px;transition:width .35s cubic-bezier(.4,0,.2,1)}
      .nuda-bdx-uline:hover::after{width:100%}
      .nuda-bdx-uline--active::after{width:100%;background:rgba(255,255,255,.3)}
      .nuda-bdx-uline--accent{color:#e4ff54}
      .nuda-bdx-uline--accent::after{background:#e4ff54}
      .nuda-bdx-uline--accent:hover::after{width:100%}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bdx-uline-wrap">
  <span class="nuda-bdx-uline">Hover to Animate</span>
  <span class="nuda-bdx-uline nuda-bdx-uline--active">Always Active</span>
  <span class="nuda-bdx-uline nuda-bdx-uline--accent">Accent Variant</span>
</div>`,
      },
    ],
  },

  /* ─────────────── Conic Spinning Border ─────────────── */
  {
    id: "bdx-conic-spin",
    name: "Conic Spinning Border",
    category: CAT,
    preview: (
      <div className="nuda-bdx-conic">
        <div className="nuda-bdx-conic__track" />
        <div className="nuda-bdx-conic__face">
          <svg className="nuda-bdx-conic__icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="3" fill="#e4ff54" />
            <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.05 5.05l1.41 1.41M13.54 13.54l1.41 1.41M5.05 14.95l1.41-1.41M13.54 6.46l1.41-1.41" stroke="#e4ff54" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="nuda-bdx-conic__label">Processing</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-bdx-conic{position:relative;display:inline-flex;align-items:center;justify-content:center;width:160px;height:80px}
      .nuda-bdx-conic__track{position:absolute;inset:0;border-radius:12px;background:conic-gradient(from var(--nuda-bdx-cs-angle,0deg),#e4ff54 0deg,#e4ff54 60deg,transparent 60deg,transparent 360deg);animation:_nuda-bdxConicSpin 1.6s linear infinite;mask:radial-gradient(farthest-side,transparent calc(100% - 3px),#fff calc(100% - 3px))}
      .nuda-bdx-conic__face{position:relative;display:flex;flex-direction:column;align-items:center;gap:4px;background:#1a1a1a;border-radius:10px;inset:3px;position:absolute;top:3px;left:3px;right:3px;bottom:3px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px}
      .nuda-bdx-conic__icon{width:20px;height:20px}
      .nuda-bdx-conic__label{color:#cfcfcf;font-size:.7rem;font-weight:500;letter-spacing:.06em;text-transform:uppercase}
      @property --nuda-bdx-cs-angle{syntax:"<angle>";initial-value:0deg;inherits:false}
      @keyframes _nuda-bdxConicSpin{to{--nuda-bdx-cs-angle:360deg}}
      @media(prefers-reduced-motion:reduce){.nuda-bdx-conic__track{animation:none;background:conic-gradient(from 0deg,#e4ff54 0deg,#e4ff54 60deg,transparent 60deg,transparent 360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bdx-conic">
  <div class="nuda-bdx-conic__track"></div>
  <div class="nuda-bdx-conic__face">
    <svg class="nuda-bdx-conic__icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="3" fill="#e4ff54"/>
      <path d="M10 3v2M10 15v2M3 10h2M15 10h2M5.05 5.05l1.41 1.41M13.54 13.54l1.41 1.41M5.05 14.95l1.41-1.41M13.54 6.46l1.41-1.41"
            stroke="#e4ff54" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
    <span class="nuda-bdx-conic__label">Processing</span>
  </div>
</div>`,
      },
    ],
  },
];
