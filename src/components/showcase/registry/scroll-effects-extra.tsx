import type { NudaComponent } from "./types";

const CAT = "Scroll Effects";

export const scrollEffectsExtra: NudaComponent[] = [
  /* ─────────────── REVEAL-UP CARD ─────────────── */
  {
    id: "scx-reveal-up-card",
    name: "Reveal-Up Card",
    category: CAT,
    preview: (
      <div className="nuda-scx-reveal-up">
        <div className="nuda-scx-reveal-up__card">
          <div className="nuda-scx-reveal-up__icon">✦</div>
          <p className="nuda-scx-reveal-up__title">Scroll Reveal</p>
          <p className="nuda-scx-reveal-up__sub">Slides up as it enters the viewport</p>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scx-reveal-up{display:flex;align-items:center;justify-content:center;padding:1rem}
      .nuda-scx-reveal-up__card{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:1.25rem 1.5rem;width:100%;max-width:220px;animation:_nuda-scxRevealUp .7s cubic-bezier(.16,1,.3,1) both}
      .nuda-scx-reveal-up__icon{font-size:1.4rem;color:#e4ff54;margin-bottom:.5rem}
      .nuda-scx-reveal-up__title{color:#fafafa;font-size:.9rem;font-weight:600;margin:0 0 .25rem}
      .nuda-scx-reveal-up__sub{color:#777;font-size:.75rem;margin:0}
      @keyframes _nuda-scxRevealUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-scx-reveal-up__card{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scx-reveal-up__card">
  <div class="nuda-scx-reveal-up__icon">✦</div>
  <p class="nuda-scx-reveal-up__title">Scroll Reveal</p>
  <p class="nuda-scx-reveal-up__sub">Slides up as it enters the viewport</p>
</div>`,
      },
    ],
  },

  /* ─────────────── SCALE-IN ON SCROLL ─────────────── */
  {
    id: "scx-scale-in",
    name: "Scale-In on Scroll",
    category: CAT,
    preview: (
      <div className="nuda-scx-scale-in">
        <div className="nuda-scx-scale-in__badge">
          <span className="nuda-scx-scale-in__ring" />
          <span className="nuda-scx-scale-in__label">New</span>
        </div>
        <div className="nuda-scx-scale-in__card nuda-scx-scale-in__card--d1">
          <span className="nuda-scx-scale-in__dot nuda-scx-scale-in__dot--accent" />
          <span className="nuda-scx-scale-in__text">Feature Alpha</span>
        </div>
        <div className="nuda-scx-scale-in__card nuda-scx-scale-in__card--d2">
          <span className="nuda-scx-scale-in__dot nuda-scx-scale-in__dot--muted" />
          <span className="nuda-scx-scale-in__text">Feature Beta</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scx-scale-in{display:flex;flex-direction:column;align-items:center;gap:.6rem;padding:.75rem}
      .nuda-scx-scale-in__badge{display:flex;align-items:center;gap:.4rem;margin-bottom:.1rem}
      .nuda-scx-scale-in__ring{display:inline-block;width:8px;height:8px;border-radius:50%;border:2px solid #e4ff54;animation:_nuda-scxPing 1.6s ease-in-out infinite}
      .nuda-scx-scale-in__label{color:#e4ff54;font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
      .nuda-scx-scale-in__card{background:#1a1a1a;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.5rem .9rem;display:flex;align-items:center;gap:.5rem;width:180px}
      .nuda-scx-scale-in__card--d1{animation:_nuda-scxScaleIn .5s cubic-bezier(.34,1.56,.64,1) both}
      .nuda-scx-scale-in__card--d2{animation:_nuda-scxScaleIn .5s cubic-bezier(.34,1.56,.64,1) .15s both}
      .nuda-scx-scale-in__dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
      .nuda-scx-scale-in__dot--accent{background:#e4ff54}
      .nuda-scx-scale-in__dot--muted{background:#444}
      .nuda-scx-scale-in__text{color:#cfcfcf;font-size:.78rem}
      @keyframes _nuda-scxScaleIn{from{opacity:0;transform:scale(.72)}to{opacity:1;transform:scale(1)}}
      @keyframes _nuda-scxPing{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.5);opacity:.4}}
      @media(prefers-reduced-motion:reduce){.nuda-scx-scale-in__card--d1,.nuda-scx-scale-in__card--d2,.nuda-scx-scale-in__ring{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scx-scale-in__card">
  <span class="nuda-scx-scale-in__dot nuda-scx-scale-in__dot--accent"></span>
  <span class="nuda-scx-scale-in__text">Feature Alpha</span>
</div>
<div class="nuda-scx-scale-in__card">
  <span class="nuda-scx-scale-in__dot nuda-scx-scale-in__dot--muted"></span>
  <span class="nuda-scx-scale-in__text">Feature Beta</span>
</div>`,
      },
    ],
  },

  /* ─────────────── STICKY STACK HINT ─────────────── */
  {
    id: "scx-sticky-stack",
    name: "Sticky Stack Hint",
    category: CAT,
    preview: (
      <div className="nuda-scx-sticky-stack">
        <div className="nuda-scx-sticky-stack__card nuda-scx-sticky-stack__card--c">
          <span className="nuda-scx-sticky-stack__num">03</span>
          <span className="nuda-scx-sticky-stack__title">Third</span>
        </div>
        <div className="nuda-scx-sticky-stack__card nuda-scx-sticky-stack__card--b">
          <span className="nuda-scx-sticky-stack__num">02</span>
          <span className="nuda-scx-sticky-stack__title">Second</span>
        </div>
        <div className="nuda-scx-sticky-stack__card nuda-scx-sticky-stack__card--a">
          <span className="nuda-scx-sticky-stack__num">01</span>
          <span className="nuda-scx-sticky-stack__title">First — sticky</span>
          <span className="nuda-scx-sticky-stack__badge">pinned</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scx-sticky-stack{position:relative;width:100%;max-width:240px;margin:0 auto;height:130px}
      .nuda-scx-sticky-stack__card{position:absolute;left:0;right:0;border-radius:10px;padding:.6rem .9rem;display:flex;align-items:center;gap:.6rem;border:1px solid rgba(255,255,255,.08)}
      .nuda-scx-sticky-stack__card--a{bottom:0;background:#1e1e1e;z-index:3;box-shadow:0 0 0 1px rgba(228,255,84,.25)}
      .nuda-scx-sticky-stack__card--b{bottom:22px;background:#181818;z-index:2;transform:scale(.96);opacity:.7}
      .nuda-scx-sticky-stack__card--c{bottom:40px;background:#141414;z-index:1;transform:scale(.92);opacity:.4}
      .nuda-scx-sticky-stack__num{color:#e4ff54;font-size:.65rem;font-weight:700;font-variant-numeric:tabular-nums;min-width:18px}
      .nuda-scx-sticky-stack__title{color:#cfcfcf;font-size:.78rem;flex:1}
      .nuda-scx-sticky-stack__badge{background:rgba(228,255,84,.12);color:#e4ff54;font-size:.6rem;font-weight:600;padding:.1rem .4rem;border-radius:4px;letter-spacing:.05em}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scx-sticky-stack">
  <div class="nuda-scx-sticky-stack__card nuda-scx-sticky-stack__card--c">
    <span class="nuda-scx-sticky-stack__num">03</span>
    <span class="nuda-scx-sticky-stack__title">Third</span>
  </div>
  <div class="nuda-scx-sticky-stack__card nuda-scx-sticky-stack__card--b">
    <span class="nuda-scx-sticky-stack__num">02</span>
    <span class="nuda-scx-sticky-stack__title">Second</span>
  </div>
  <div class="nuda-scx-sticky-stack__card nuda-scx-sticky-stack__card--a">
    <span class="nuda-scx-sticky-stack__num">01</span>
    <span class="nuda-scx-sticky-stack__title">First — sticky</span>
    <span class="nuda-scx-sticky-stack__badge">pinned</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── HORIZONTAL SCROLL SNAP ROW ─────────────── */
  {
    id: "scx-hscroll-snap",
    name: "Horizontal Scroll Snap",
    category: CAT,
    preview: (
      <div className="nuda-scx-hscroll">
        <div className="nuda-scx-hscroll__track">
          <div className="nuda-scx-hscroll__slide nuda-scx-hscroll__slide--1">
            <span className="nuda-scx-hscroll__lbl">01</span>
          </div>
          <div className="nuda-scx-hscroll__slide nuda-scx-hscroll__slide--2">
            <span className="nuda-scx-hscroll__lbl">02</span>
          </div>
          <div className="nuda-scx-hscroll__slide nuda-scx-hscroll__slide--3">
            <span className="nuda-scx-hscroll__lbl">03</span>
          </div>
          <div className="nuda-scx-hscroll__slide nuda-scx-hscroll__slide--4">
            <span className="nuda-scx-hscroll__lbl">04</span>
          </div>
        </div>
        <div className="nuda-scx-hscroll__hint">← swipe →</div>
      </div>
    ),
    cssInline: `
      .nuda-scx-hscroll{width:100%;overflow:hidden}
      .nuda-scx-hscroll__track{display:flex;gap:.5rem;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:.25rem .5rem;animation:_nuda-scxHPeek 3s ease-in-out infinite}
      .nuda-scx-hscroll__track::-webkit-scrollbar{display:none}
      .nuda-scx-hscroll__slide{flex:0 0 80px;height:72px;border-radius:10px;scroll-snap-align:start;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.08)}
      .nuda-scx-hscroll__slide--1{background:linear-gradient(135deg,#1e1e1e,#2a2a2a)}
      .nuda-scx-hscroll__slide--2{background:linear-gradient(135deg,#1a1f14,#232e18)}
      .nuda-scx-hscroll__slide--3{background:linear-gradient(135deg,#1e1a1a,#2e2020)}
      .nuda-scx-hscroll__slide--4{background:linear-gradient(135deg,#141a1e,#182028)}
      .nuda-scx-hscroll__lbl{color:#555;font-size:.7rem;font-weight:700;font-variant-numeric:tabular-nums}
      .nuda-scx-hscroll__hint{text-align:center;color:#444;font-size:.65rem;margin-top:.35rem;letter-spacing:.05em}
      @keyframes _nuda-scxHPeek{0%,100%{transform:translateX(0)}50%{transform:translateX(-30px)}}
      @media(prefers-reduced-motion:reduce){.nuda-scx-hscroll__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scx-hscroll__track">
  <div class="nuda-scx-hscroll__slide">
    <span class="nuda-scx-hscroll__lbl">01</span>
  </div>
  <div class="nuda-scx-hscroll__slide">
    <span class="nuda-scx-hscroll__lbl">02</span>
  </div>
  <div class="nuda-scx-hscroll__slide">
    <span class="nuda-scx-hscroll__lbl">03</span>
  </div>
  <div class="nuda-scx-hscroll__slide">
    <span class="nuda-scx-hscroll__lbl">04</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── SCROLL PROGRESS DOTS ─────────────── */
  {
    id: "scx-progress-dots",
    name: "Scroll Progress Dots",
    category: CAT,
    preview: (
      <div className="nuda-scx-pdots">
        <div className="nuda-scx-pdots__track">
          <div className="nuda-scx-pdots__dot nuda-scx-pdots__dot--done" />
          <div className="nuda-scx-pdots__line nuda-scx-pdots__line--done" />
          <div className="nuda-scx-pdots__dot nuda-scx-pdots__dot--done" />
          <div className="nuda-scx-pdots__line nuda-scx-pdots__line--done" />
          <div className="nuda-scx-pdots__dot nuda-scx-pdots__dot--active" />
          <div className="nuda-scx-pdots__line" />
          <div className="nuda-scx-pdots__dot" />
          <div className="nuda-scx-pdots__line" />
          <div className="nuda-scx-pdots__dot" />
        </div>
        <div className="nuda-scx-pdots__labels">
          <span>Intro</span>
          <span>Features</span>
          <span className="nuda-scx-pdots__labels--cur">Pricing</span>
          <span>FAQ</span>
          <span>CTA</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scx-pdots{display:flex;flex-direction:column;align-items:center;gap:.6rem;padding:.75rem}
      .nuda-scx-pdots__track{display:flex;align-items:center;gap:0}
      .nuda-scx-pdots__dot{width:10px;height:10px;border-radius:50%;background:#2a2a2a;border:2px solid rgba(255,255,255,.12);transition:all .3s}
      .nuda-scx-pdots__dot--done{background:#e4ff54;border-color:#e4ff54}
      .nuda-scx-pdots__dot--active{background:#141414;border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.2);animation:_nuda-scxDotPulse 1.8s ease-in-out infinite}
      .nuda-scx-pdots__line{width:28px;height:2px;background:rgba(255,255,255,.1)}
      .nuda-scx-pdots__line--done{background:#e4ff54}
      .nuda-scx-pdots__labels{display:flex;gap:14px;align-items:center}
      .nuda-scx-pdots__labels span{color:#555;font-size:.6rem;white-space:nowrap}
      .nuda-scx-pdots__labels--cur{color:#e4ff54 !important;font-weight:600}
      @keyframes _nuda-scxDotPulse{0%,100%{box-shadow:0 0 0 3px rgba(228,255,84,.2)}50%{box-shadow:0 0 0 5px rgba(228,255,84,.05)}}
      @media(prefers-reduced-motion:reduce){.nuda-scx-pdots__dot--active{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scx-pdots__track">
  <div class="nuda-scx-pdots__dot nuda-scx-pdots__dot--done"></div>
  <div class="nuda-scx-pdots__line nuda-scx-pdots__line--done"></div>
  <div class="nuda-scx-pdots__dot nuda-scx-pdots__dot--done"></div>
  <div class="nuda-scx-pdots__line nuda-scx-pdots__line--done"></div>
  <div class="nuda-scx-pdots__dot nuda-scx-pdots__dot--active"></div>
  <div class="nuda-scx-pdots__line"></div>
  <div class="nuda-scx-pdots__dot"></div>
  <div class="nuda-scx-pdots__line"></div>
  <div class="nuda-scx-pdots__dot"></div>
</div>`,
      },
    ],
  },

  /* ─────────────── BLUR-TO-CLEAR REVEAL ─────────────── */
  {
    id: "scx-blur-reveal",
    name: "Blur-to-Clear Reveal",
    category: CAT,
    preview: (
      <div className="nuda-scx-blur-reveal">
        <div className="nuda-scx-blur-reveal__chip">Blurred</div>
        <div className="nuda-scx-blur-reveal__block">
          <p className="nuda-scx-blur-reveal__heading nuda-scx-blur-reveal__heading--anim">
            Clarity emerges
          </p>
          <p className="nuda-scx-blur-reveal__body nuda-scx-blur-reveal__body--anim">
            Content sharpens as the section scrolls into view — a polished entrance.
          </p>
        </div>
        <div className="nuda-scx-blur-reveal__chip nuda-scx-blur-reveal__chip--clear">Clear</div>
      </div>
    ),
    cssInline: `
      .nuda-scx-blur-reveal{display:flex;flex-direction:column;gap:.6rem;padding:.5rem}
      .nuda-scx-blur-reveal__chip{align-self:flex-start;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:.15rem .6rem;color:#555;font-size:.62rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase}
      .nuda-scx-blur-reveal__chip--clear{color:#e4ff54;border-color:rgba(228,255,84,.3);background:rgba(228,255,84,.06)}
      .nuda-scx-blur-reveal__block{background:#1a1a1a;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.8rem 1rem}
      .nuda-scx-blur-reveal__heading{color:#fafafa;font-size:.88rem;font-weight:600;margin:0 0 .3rem}
      .nuda-scx-blur-reveal__body{color:#777;font-size:.72rem;line-height:1.5;margin:0}
      .nuda-scx-blur-reveal__heading--anim{animation:_nuda-scxBlurIn .9s cubic-bezier(.16,1,.3,1) both}
      .nuda-scx-blur-reveal__body--anim{animation:_nuda-scxBlurIn .9s cubic-bezier(.16,1,.3,1) .2s both}
      @keyframes _nuda-scxBlurIn{from{opacity:0;filter:blur(12px);transform:translateY(10px)}to{opacity:1;filter:blur(0);transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-scx-blur-reveal__heading--anim,.nuda-scx-blur-reveal__body--anim{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scx-blur-reveal__block">
  <p class="nuda-scx-blur-reveal__heading">Clarity emerges</p>
  <p class="nuda-scx-blur-reveal__body">
    Content sharpens as the section scrolls into view — a polished entrance.
  </p>
</div>`,
      },
    ],
  },

  /* ─────────────── STAGGERED LIST REVEAL ─────────────── */
  {
    id: "scx-stagger-list",
    name: "Staggered List Reveal",
    category: CAT,
    preview: (
      <div className="nuda-scx-stagger">
        {[
          { icon: "◆", label: "Design system", sub: "Tokens & components" },
          { icon: "◈", label: "Accessibility", sub: "WCAG 2.2 compliant" },
          { icon: "◉", label: "Dark mode", sub: "Out of the box" },
        ].map((item, i) => (
          <div
            key={item.label}
            className="nuda-scx-stagger__item"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <span className="nuda-scx-stagger__icon">{item.icon}</span>
            <div className="nuda-scx-stagger__copy">
              <span className="nuda-scx-stagger__label">{item.label}</span>
              <span className="nuda-scx-stagger__sub">{item.sub}</span>
            </div>
            <span className="nuda-scx-stagger__arrow">›</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-scx-stagger{display:flex;flex-direction:column;gap:.4rem;padding:.5rem}
      .nuda-scx-stagger__item{display:flex;align-items:center;gap:.7rem;background:#1a1a1a;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.55rem .8rem;animation:_nuda-scxStagger .55s cubic-bezier(.16,1,.3,1) both}
      .nuda-scx-stagger__icon{font-size:.9rem;color:#e4ff54;flex-shrink:0;width:18px;text-align:center}
      .nuda-scx-stagger__copy{display:flex;flex-direction:column;flex:1;min-width:0}
      .nuda-scx-stagger__label{color:#fafafa;font-size:.78rem;font-weight:500}
      .nuda-scx-stagger__sub{color:#555;font-size:.66rem}
      .nuda-scx-stagger__arrow{color:#333;font-size:1rem;font-weight:300}
      @keyframes _nuda-scxStagger{from{opacity:0;transform:translateX(-16px)}to{opacity:1;transform:translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-scx-stagger__item{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scx-stagger">
  <div class="nuda-scx-stagger__item">
    <span class="nuda-scx-stagger__icon">◆</span>
    <div class="nuda-scx-stagger__copy">
      <span class="nuda-scx-stagger__label">Design system</span>
      <span class="nuda-scx-stagger__sub">Tokens &amp; components</span>
    </div>
    <span class="nuda-scx-stagger__arrow">›</span>
  </div>
  <div class="nuda-scx-stagger__item">
    <span class="nuda-scx-stagger__icon">◈</span>
    <div class="nuda-scx-stagger__copy">
      <span class="nuda-scx-stagger__label">Accessibility</span>
      <span class="nuda-scx-stagger__sub">WCAG 2.2 compliant</span>
    </div>
    <span class="nuda-scx-stagger__arrow">›</span>
  </div>
  <div class="nuda-scx-stagger__item">
    <span class="nuda-scx-stagger__icon">◉</span>
    <div class="nuda-scx-stagger__copy">
      <span class="nuda-scx-stagger__label">Dark mode</span>
      <span class="nuda-scx-stagger__sub">Out of the box</span>
    </div>
    <span class="nuda-scx-stagger__arrow">›</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── PINNED CAPTION ─────────────── */
  {
    id: "scx-pinned-caption",
    name: "Pinned Caption",
    category: CAT,
    preview: (
      <div className="nuda-scx-pinned">
        <div className="nuda-scx-pinned__scene">
          <div className="nuda-scx-pinned__media">
            <svg viewBox="0 0 80 50" className="nuda-scx-pinned__svg" aria-hidden="true">
              <rect x="0" y="0" width="80" height="50" fill="#141414" rx="6" />
              <rect x="8" y="8" width="28" height="18" fill="#252525" rx="3" />
              <rect x="44" y="8" width="28" height="18" fill="#252525" rx="3" />
              <rect x="8" y="32" width="64" height="4" fill="#2a2a2a" rx="2" />
              <rect x="8" y="40" width="40" height="3" fill="#222" rx="2" />
              <circle cx="22" cy="17" r="5" fill="#333" />
              <circle cx="58" cy="17" r="5" fill="#333" />
            </svg>
          </div>
          <div className="nuda-scx-pinned__caption">
            <span className="nuda-scx-pinned__step">02 / 04</span>
            <p className="nuda-scx-pinned__text">This caption stays pinned while content scrolls behind it</p>
            <span className="nuda-scx-pinned__cue nuda-scx-pinned__cue--anim">↓ scroll</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-scx-pinned{padding:.5rem;width:100%}
      .nuda-scx-pinned__scene{display:flex;flex-direction:column;gap:.5rem;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden}
      .nuda-scx-pinned__media{padding:.75rem .75rem 0}
      .nuda-scx-pinned__svg{width:100%;height:auto;display:block;border-radius:6px}
      .nuda-scx-pinned__caption{padding:.65rem .9rem .75rem;border-top:1px solid rgba(255,255,255,.06);display:flex;flex-direction:column;gap:.25rem}
      .nuda-scx-pinned__step{color:#e4ff54;font-size:.62rem;font-weight:700;letter-spacing:.1em}
      .nuda-scx-pinned__text{color:#cfcfcf;font-size:.75rem;line-height:1.45;margin:0}
      .nuda-scx-pinned__cue{color:#444;font-size:.65rem;margin-top:.1rem}
      .nuda-scx-pinned__cue--anim{animation:_nuda-scxCueBob 1.6s ease-in-out infinite}
      @keyframes _nuda-scxCueBob{0%,100%{transform:translateY(0);opacity:.4}50%{transform:translateY(4px);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-scx-pinned__cue--anim{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-scx-pinned__scene">
  <div class="nuda-scx-pinned__media">
    <!-- your image or video here -->
  </div>
  <div class="nuda-scx-pinned__caption">
    <span class="nuda-scx-pinned__step">02 / 04</span>
    <p class="nuda-scx-pinned__text">
      This caption stays pinned while content scrolls behind it
    </p>
    <span class="nuda-scx-pinned__cue">↓ scroll</span>
  </div>
</div>`,
      },
    ],
  },
];
