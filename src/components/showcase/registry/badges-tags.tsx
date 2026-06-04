import type { NudaComponent } from "./types";

export const badgesTags: NudaComponent[] = [
  /* ─────────────── Pill Badge ─────────────── */
  {
    id: "pill-badge",
    name: "Pill Badge",
    category: "Badges & Tags",
    preview: (
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <span className="nuda-pill-badge" data-variant="primary">New Feature</span>
        <span className="nuda-pill-badge" data-variant="success">Shipped</span>
        <span className="nuda-pill-badge" data-variant="warning">Beta</span>
      </div>
    ),
    cssInline: `
      .nuda-pill-badge{display:inline-flex;align-items:center;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:600;letter-spacing:.02em;animation:_pb .4s cubic-bezier(.34,1.56,.64,1) both}
      .nuda-pill-badge[data-variant="primary"]{background:rgba(99,102,241,.15);color:#818cf8;border:1px solid rgba(99,102,241,.25)}
      .nuda-pill-badge[data-variant="success"]{background:rgba(34,197,94,.15);color:#4ade80;border:1px solid rgba(34,197,94,.25)}
      .nuda-pill-badge[data-variant="warning"]{background:rgba(245,158,11,.15);color:#fbbf24;border:1px solid rgba(245,158,11,.25)}
      @keyframes _pb{0%{opacity:0;transform:scale(.7)}100%{opacity:1;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<span class="nuda-pill-badge" data-variant="primary">New Feature</span>
<span class="nuda-pill-badge" data-variant="success">Shipped</span>
<span class="nuda-pill-badge" data-variant="warning">Beta</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pill Badge
   Animated pill-style badge with variants.
   Variants: primary, success, warning */

.nuda-pill-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
  animation: nuda-pill-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.nuda-pill-badge[data-variant="primary"] {
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.25);
}

.nuda-pill-badge[data-variant="success"] {
  background: rgba(34, 197, 94, 0.15);
  color: #4ade80;
  border: 1px solid rgba(34, 197, 94, 0.25);
}

.nuda-pill-badge[data-variant="warning"] {
  background: rgba(245, 158, 11, 0.15);
  color: #fbbf24;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

@keyframes nuda-pill-pop {
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pill-badge { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Count Badge ─────────────── */
  {
    id: "count-badge",
    name: "Count Badge",
    category: "Badges & Tags",
    preview: (
      <div style={{ display: "flex", gap: 12 }}>
        <span className="nuda-count-badge">1</span>
        <span className="nuda-count-badge nuda-count-badge--accent">24</span>
        <span className="nuda-count-badge nuda-count-badge--large">99+</span>
      </div>
    ),
    cssInline: `
      .nuda-count-badge{--bg:#ef4444;--fg:#fff;display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:22px;padding:0 6px;background:var(--bg);color:var(--fg);font-size:11px;font-weight:700;border-radius:11px;animation:_cb .5s cubic-bezier(.36,1.4,.65,1) both}
      .nuda-count-badge--accent{--bg:#6366f1}
      .nuda-count-badge--large{min-width:30px;height:26px;padding:0 8px;font-size:12px;border-radius:13px}
      @keyframes _cb{0%{transform:scale(0) rotate(-12deg)}60%{transform:scale(1.2) rotate(4deg)}100%{transform:scale(1) rotate(0deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<span class="nuda-count-badge">1</span>
<span class="nuda-count-badge nuda-count-badge--accent">24</span>
<span class="nuda-count-badge nuda-count-badge--large">99+</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Count Badge
   Number badge with bounce-in animation.
   Customize: --badge-bg, --badge-fg */

.nuda-count-badge {
  --badge-bg: #ef4444;
  --badge-fg: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 6px;
  background: var(--badge-bg);
  color: var(--badge-fg);
  font-size: 11px;
  font-weight: 700;
  border-radius: 11px;
  animation: nuda-count-bounce 0.5s cubic-bezier(0.36, 1.4, 0.65, 1) both;
  will-change: transform;
}

.nuda-count-badge--accent {
  --badge-bg: #6366f1;
}

.nuda-count-badge--large {
  min-width: 30px;
  height: 26px;
  padding: 0 8px;
  font-size: 12px;
  border-radius: 13px;
}

@keyframes nuda-count-bounce {
  0% { transform: scale(0) rotate(-12deg); }
  60% { transform: scale(1.2) rotate(4deg); }
  100% { transform: scale(1) rotate(0deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-count-badge { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Tag Slide ─────────────── */
  {
    id: "tag-slide",
    name: "Tag Slide",
    category: "Badges & Tags",
    preview: (
      <div style={{ display: "flex", gap: 8, overflow: "hidden" }}>
        <span className="nuda-tag-slide">Design</span>
        <span className="nuda-tag-slide" style={{ animationDelay: "0.08s" }}>Frontend</span>
        <span className="nuda-tag-slide" style={{ animationDelay: "0.16s" }}>CSS</span>
      </div>
    ),
    cssInline: `
      .nuda-tag-slide{display:inline-flex;align-items:center;padding:4px 10px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:6px;font-size:12px;color:#ccc;animation:_ts .4s cubic-bezier(.22,1,.36,1) both}
      @keyframes _ts{0%{opacity:0;transform:translateX(-16px)}100%{opacity:1;transform:translateX(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<span class="nuda-tag-slide">Design</span>
<span class="nuda-tag-slide" style="animation-delay: 0.08s;">Frontend</span>
<span class="nuda-tag-slide" style="animation-delay: 0.16s;">CSS</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Tag Slide
   Tags that slide in from the left.
   Stagger with animation-delay on each tag. */

.nuda-tag-slide {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  font-size: 12px;
  color: #ccc;
  animation: nuda-tag-slide-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) both;
}

@keyframes nuda-tag-slide-in {
  0% {
    opacity: 0;
    transform: translateX(-16px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tag-slide { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Shimmer Badge ─────────────── */
  {
    id: "shimmer-badge",
    name: "Shimmer Badge",
    category: "Badges & Tags",
    preview: (
      <span className="nuda-shimmer-badge">PRO</span>
    ),
    cssInline: `
      .nuda-shimmer-badge{display:inline-flex;align-items:center;padding:4px 14px;background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:20px;font-size:12px;font-weight:700;letter-spacing:.06em;color:#fff;position:relative;overflow:hidden}
      .nuda-shimmer-badge::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);animation:_sb 2.5s ease-in-out infinite}
      @keyframes _sb{0%{left:-100%}50%,100%{left:150%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<span class="nuda-shimmer-badge">PRO</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Shimmer Badge
   Badge with shimmer sweep effect.
   Customize: gradient colors */

.nuda-shimmer-badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 14px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.nuda-shimmer-badge::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.25),
    transparent
  );
  animation: nuda-shimmer-sweep 2.5s ease-in-out infinite;
  will-change: left;
}

@keyframes nuda-shimmer-sweep {
  0% { left: -100%; }
  50%, 100% { left: 150%; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-shimmer-badge::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Dot Badge ─────────────── */
  {
    id: "dot-badge",
    name: "Dot Badge",
    category: "Badges & Tags",
    preview: (
      <div style={{ display: "flex", gap: 16 }}>
        <span className="nuda-dot-badge" data-color="red" aria-label="New updates">
          <span className="nuda-dot-badge__dot" />
          Updates
        </span>
        <span className="nuda-dot-badge" data-color="green" aria-label="Active">
          <span className="nuda-dot-badge__dot" />
          Active
        </span>
      </div>
    ),
    cssInline: `
      .nuda-dot-badge{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:#ccc}
      .nuda-dot-badge__dot{width:7px;height:7px;border-radius:50%;position:relative}
      .nuda-dot-badge[data-color="red"] .nuda-dot-badge__dot{background:#ef4444}
      .nuda-dot-badge[data-color="green"] .nuda-dot-badge__dot{background:#22c55e}
      .nuda-dot-badge__dot::after{content:'';position:absolute;inset:0;border-radius:50%;background:inherit;animation:_db2 1.8s ease-out infinite}
      @keyframes _db2{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.8);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<span class="nuda-dot-badge" data-color="red" aria-label="New updates">
  <span class="nuda-dot-badge__dot"></span>
  Updates
</span>

<span class="nuda-dot-badge" data-color="green" aria-label="Active">
  <span class="nuda-dot-badge__dot"></span>
  Active
</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Dot Badge
   Minimal dot badge with pulse.
   Customize: data-color attribute values */

.nuda-dot-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #ccc;
}

.nuda-dot-badge__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  position: relative;
}

.nuda-dot-badge[data-color="red"] .nuda-dot-badge__dot {
  background: #ef4444;
}

.nuda-dot-badge[data-color="green"] .nuda-dot-badge__dot {
  background: #22c55e;
}

.nuda-dot-badge__dot::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: inherit;
  animation: nuda-dot-ping 1.8s ease-out infinite;
  will-change: transform, opacity;
}

@keyframes nuda-dot-ping {
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  100% {
    transform: scale(2.8);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dot-badge__dot::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Count Badge ─────────────── */
  {
    id: "icon-count-badge",
    name: "Count Badge",
    category: "Badges & Tags",
    preview: (
      <div className="nuda-cntbadge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-6l-2 3h-4l-2-3H2" />
          <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
        </svg>
        <span className="nuda-cntbadge__count">12</span>
      </div>
    ),
    cssInline: `
      .nuda-cntbadge{position:relative;display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;color:#a0a0a8}
      .nuda-cntbadge svg{width:20px;height:20px}
      .nuda-cntbadge__count{position:absolute;top:-2px;right:-2px;min-width:18px;height:18px;padding:0 5px;background:#ff5e7a;color:#fafafa;border-radius:99px;border:2px solid #09090b;font-size:10px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums;animation:_cntPop .5s cubic-bezier(.34,1.56,.64,1)}
      @keyframes _cntPop{0%{transform:scale(0)}60%{transform:scale(1.2)}100%{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-cntbadge__count{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cntbadge">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M22 12h-6l-2 3h-4l-2-3H2" />
    <path d="M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" />
  </svg>
  <span class="nuda-cntbadge__count">12</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-cntbadge__count {
  position: absolute;
  top: -2px;
  right: -2px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: #ff5e7a;
  color: #fafafa;
  border-radius: 99px;
  border: 2px solid #09090b;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  animation: nuda-cnt-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes nuda-cnt-pop {
  0%   { transform: scale(0);    }
  60%  { transform: scale(1.2);  }
  100% { transform: scale(1);    }
}`,
      },
    ],
  },

  /* ─────────────── Ribbon Badge ─────────────── */
  {
    id: "ribbon-badge",
    name: "Ribbon Badge",
    category: "Badges & Tags",
    preview: (
      <div className="nuda-ribbon">
        <span className="nuda-ribbon__ribbon">PRO</span>
        <div className="nuda-ribbon__card">
          <div>Premium tier</div>
          <div>$24 / month</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ribbon{position:relative;padding:14px 16px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:180px;overflow:hidden}
      .nuda-ribbon__ribbon{position:absolute;top:8px;right:-26px;padding:3px 30px;background:#e4ff54;color:#09090b;font-size:9px;font-weight:800;letter-spacing:.12em;transform:rotate(45deg);box-shadow:0 4px 8px -2px rgba(0,0,0,.4)}
      .nuda-ribbon__card > div:first-child{color:#fafafa;font-size:13px;font-weight:600}
      .nuda-ribbon__card > div:last-child{color:#a0a0a8;font-size:11px;margin-top:2px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ribbon">
  <span class="nuda-ribbon__ribbon">PRO</span>
  <div class="nuda-ribbon__card">
    <div>Premium tier</div>
    <div>$24 / month</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-ribbon {
  position: relative;
  overflow: hidden;
}

.nuda-ribbon__ribbon {
  position: absolute;
  top: 8px;
  right: -26px;
  padding: 3px 30px;
  background: #e4ff54;
  color: #09090b;
  font-weight: 800;
  letter-spacing: 0.12em;
  transform: rotate(45deg);
  box-shadow: 0 4px 8px -2px rgba(0, 0, 0, 0.4);
}`,
      },
    ],
  },

  /* ─────────────── Glow Badge ─────────────── */
  {
    id: "glow-badge",
    name: "Glow Badge",
    category: "Badges & Tags",
    preview: (
      <span className="nuda-glowbadge">FEATURED</span>
    ),
    cssInline: `
      .nuda-glowbadge{display:inline-flex;align-items:center;padding:3px 10px;background:rgba(228,255,84,.08);border:1px solid #e4ff54;color:#e4ff54;border-radius:99px;font-size:10px;font-weight:700;letter-spacing:.1em;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;animation:_glowB 2.4s ease-in-out infinite}
      @keyframes _glowB{0%,100%{box-shadow:0 0 8px rgba(228,255,84,.3)}50%{box-shadow:0 0 18px rgba(228,255,84,.6)}}
      @media(prefers-reduced-motion:reduce){.nuda-glowbadge{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<span class="nuda-glowbadge">FEATURED</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-glowbadge {
  display: inline-flex;
  padding: 3px 10px;
  background: rgba(228, 255, 84, 0.08);
  border: 1px solid #e4ff54;
  color: #e4ff54;
  border-radius: 99px;
  font-weight: 700;
  letter-spacing: 0.1em;
  animation: nuda-glow-b 2.4s ease-in-out infinite;
}

@keyframes nuda-glow-b {
  0%, 100% { box-shadow: 0 0 8px  rgba(228, 255, 84, 0.3); }
  50%      { box-shadow: 0 0 18px rgba(228, 255, 84, 0.6); }
}`,
      },
    ],
  },

  /* ─────────────── Trending Tag ─────────────── */
  {
    id: "trending-tag",
    name: "Trending Tag",
    category: "Badges & Tags",
    preview: (
      <span className="nuda-trtag">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 6l-9.5 9.5-5-5L1 18" />
          <path d="M17 6h6v6" />
        </svg>
        Trending
      </span>
    ),
    cssInline: `
      .nuda-trtag{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:rgba(255,109,212,.1);border:1px solid rgba(255,109,212,.3);color:#ff6dd4;border-radius:99px;font-size:11px;font-weight:600}
      .nuda-trtag svg{width:11px;height:11px;animation:_trBounce 1.6s ease-in-out infinite}
      @keyframes _trBounce{0%,100%{transform:translate(0)}50%{transform:translate(2px,-1px)}}
      @media(prefers-reduced-motion:reduce){.nuda-trtag svg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<span class="nuda-trtag">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M23 6l-9.5 9.5-5-5L1 18" />
    <path d="M17 6h6v6" />
  </svg>
  Trending
</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-trtag {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  background: rgba(255, 109, 212, 0.1);
  border: 1px solid rgba(255, 109, 212, 0.3);
  color: #ff6dd4;
  border-radius: 99px;
}

.nuda-trtag svg {
  animation: nuda-tr-bounce 1.6s ease-in-out infinite;
}`,
      },
    ],
  },
];
