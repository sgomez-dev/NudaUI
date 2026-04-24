import type { NudaComponent } from "./types";

export const marquees: NudaComponent[] = [
  /* ─────────────── TEXT MARQUEE ─────────────── */
  {
    id: "text-marquee",
    name: "Text Marquee",
    category: "Marquees & Tickers",
    preview: (
      <div className="nuda-marquee-demo" aria-hidden="true">
        <div className="nuda-marquee-demo__track">
          <span className="nuda-marquee-demo__text">NudaUI &mdash; Pure CSS Animations &mdash; Zero Dependencies &mdash; Any Framework &mdash;&nbsp;</span>
          <span className="nuda-marquee-demo__text">NudaUI &mdash; Pure CSS Animations &mdash; Zero Dependencies &mdash; Any Framework &mdash;&nbsp;</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-marquee-demo{overflow:hidden;width:100%;border-radius:6px}
      .nuda-marquee-demo__track{display:flex;width:max-content;animation:_marquee 8s linear infinite}
      .nuda-marquee-demo__text{font-size:.7rem;font-weight:600;color:#e4ff54;white-space:nowrap;padding:.3rem 0}
      @keyframes _marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-marquee-demo__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-marquee" aria-hidden="true">
  <div class="nuda-marquee__track">
    <span class="nuda-marquee__text">Your text here &mdash; Repeating content &mdash;&nbsp;</span>
    <span class="nuda-marquee__text">Your text here &mdash; Repeating content &mdash;&nbsp;</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Text Marquee
   Infinite horizontal scrolling text ticker.
   Duplicate the text span for seamless loop.
   Customize: --marquee-speed, --marquee-color */

.nuda-marquee {
  --marquee-speed: 12s;
  --marquee-color: #e4ff54;
  overflow: hidden;
  width: 100%;
}

.nuda-marquee__track {
  display: flex;
  width: max-content;
  animation: nuda-marquee-scroll var(--marquee-speed) linear infinite;
}

.nuda-marquee__text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--marquee-color);
  white-space: nowrap;
  padding: 0.5rem 0;
}

/* Hover to pause */
.nuda-marquee:hover .nuda-marquee__track {
  animation-play-state: paused;
}

@keyframes nuda-marquee-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-marquee__track { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── LOGO TICKER ─────────────── */
  {
    id: "logo-ticker",
    name: "Logo Ticker",
    category: "Marquees & Tickers",
    preview: (
      <div className="nuda-ticker-demo" aria-hidden="true">
        <div className="nuda-ticker-demo__track">
          {["React", "Vue", "Svelte", "Angular", "Astro", "React", "Vue", "Svelte", "Angular", "Astro"].map((t, i) => (
            <div key={i} className="nuda-ticker-demo__item">{t}</div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ticker-demo{overflow:hidden;width:100%;mask-image:linear-gradient(to right,transparent,black 15%,black 85%,transparent)}
      .nuda-ticker-demo__track{display:flex;gap:12px;width:max-content;animation:_ticker 10s linear infinite}
      .nuda-ticker-demo__item{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:.25rem .5rem;font-size:.55rem;color:#888;white-space:nowrap}
      @keyframes _ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-ticker-demo__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Duplicate the items for seamless loop -->
<div class="nuda-ticker" aria-hidden="true">
  <div class="nuda-ticker__track">
    <div class="nuda-ticker__item">Brand A</div>
    <div class="nuda-ticker__item">Brand B</div>
    <div class="nuda-ticker__item">Brand C</div>
    <div class="nuda-ticker__item">Brand D</div>
    <div class="nuda-ticker__item">Brand E</div>
    <!-- Duplicate for seamless loop -->
    <div class="nuda-ticker__item">Brand A</div>
    <div class="nuda-ticker__item">Brand B</div>
    <div class="nuda-ticker__item">Brand C</div>
    <div class="nuda-ticker__item">Brand D</div>
    <div class="nuda-ticker__item">Brand E</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Logo Ticker
   Smooth scrolling brand/logo ticker with edge fade.
   Customize: --ticker-speed, --ticker-gap */

.nuda-ticker {
  --ticker-speed: 15s;
  --ticker-gap: 2rem;
  overflow: hidden;
  width: 100%;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.nuda-ticker__track {
  display: flex;
  gap: var(--ticker-gap);
  width: max-content;
  animation: nuda-ticker-scroll var(--ticker-speed) linear infinite;
}

.nuda-ticker__item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 0.5rem 1.25rem;
  font-size: 0.85rem;
  color: #888;
  white-space: nowrap;
}

.nuda-ticker:hover .nuda-ticker__track {
  animation-play-state: paused;
}

@keyframes nuda-ticker-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-ticker__track { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── REVERSE MARQUEE ─────────────── */
  {
    id: "reverse-marquee",
    name: "Reverse Marquee",
    category: "Marquees & Tickers",
    preview: (
      <div className="nuda-rmarquee-demo" aria-hidden="true">
        <div className="nuda-rmarquee-demo__track">
          <span className="nuda-rmarquee-demo__text">&#9733; Design &bull; Build &bull; Ship &bull; Repeat &bull;&nbsp;</span>
          <span className="nuda-rmarquee-demo__text">&#9733; Design &bull; Build &bull; Ship &bull; Repeat &bull;&nbsp;</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-rmarquee-demo{overflow:hidden;width:100%}
      .nuda-rmarquee-demo__track{display:flex;width:max-content;animation:_rmarquee 6s linear infinite}
      .nuda-rmarquee-demo__text{font-size:.65rem;color:#888;white-space:nowrap;padding:.25rem 0}
      @keyframes _rmarquee{from{transform:translateX(-50%)}to{transform:translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-rmarquee-demo__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-marquee nuda-marquee--reverse" aria-hidden="true">
  <div class="nuda-marquee__track">
    <span class="nuda-marquee__text">&#9733; Design &bull; Build &bull; Ship &bull; Repeat &bull;&nbsp;</span>
    <span class="nuda-marquee__text">&#9733; Design &bull; Build &bull; Ship &bull; Repeat &bull;&nbsp;</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Reverse Marquee
   Same as text marquee but scrolls right-to-left (reversed).
   Add .nuda-marquee--reverse modifier to the marquee. */

.nuda-marquee--reverse .nuda-marquee__track {
  animation-direction: reverse;
}`,
      },
    ],
  },

  /* ─────────────── VERTICAL TICKER ─────────────── */
  {
    id: "vertical-ticker",
    name: "Vertical Ticker",
    category: "Marquees & Tickers",
    preview: (
      <div className="nuda-vticker-demo" aria-hidden="true" style={{ height: 60, overflow: "hidden" }}>
        <div className="nuda-vticker-demo__track">
          <div className="nuda-vticker-demo__item">New feature launched</div>
          <div className="nuda-vticker-demo__item">v2.0 released today</div>
          <div className="nuda-vticker-demo__item">100k downloads</div>
          <div className="nuda-vticker-demo__item">New feature launched</div>
          <div className="nuda-vticker-demo__item">v2.0 released today</div>
          <div className="nuda-vticker-demo__item">100k downloads</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-vticker-demo{border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:.3rem .5rem}
      .nuda-vticker-demo__track{animation:_vtick 6s linear infinite}
      .nuda-vticker-demo__item{font-size:.6rem;color:#ccc;padding:.2rem 0;white-space:nowrap}
      @keyframes _vtick{from{transform:translateY(0)}to{transform:translateY(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-vticker-demo__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-vticker" aria-live="polite">
  <div class="nuda-vticker__track">
    <div class="nuda-vticker__item">New feature launched</div>
    <div class="nuda-vticker__item">v2.0 released today</div>
    <div class="nuda-vticker__item">100k downloads</div>
    <!-- Duplicate for seamless loop -->
    <div class="nuda-vticker__item">New feature launched</div>
    <div class="nuda-vticker__item">v2.0 released today</div>
    <div class="nuda-vticker__item">100k downloads</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Vertical Ticker
   Vertically scrolling news/notification ticker.
   Customize: --vticker-speed, --vticker-height */

.nuda-vticker {
  --vticker-speed: 8s;
  --vticker-height: 2rem;
  height: var(--vticker-height);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  padding: 0 0.75rem;
}

.nuda-vticker__track {
  animation: nuda-vticker-scroll var(--vticker-speed) linear infinite;
}

.nuda-vticker__item {
  font-size: 0.85rem;
  color: #ccc;
  line-height: var(--vticker-height);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.nuda-vticker:hover .nuda-vticker__track {
  animation-play-state: paused;
}

@keyframes nuda-vticker-scroll {
  from { transform: translateY(0); }
  to { transform: translateY(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-vticker__track { animation: none; }
}`,
      },
    ],
  },
];
