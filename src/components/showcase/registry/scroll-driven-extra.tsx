import type { NudaComponent } from "./types";

/* More native CSS scroll-driven animations (animation-timeline: scroll() /
   view()), extending scroll-driven.tsx with named timelines
   (scroll-timeline-name / view-timeline-name + timeline-scope) and
   animation-range patterns not covered there. Each preview is a
   self-contained inner scroller so the effect plays inside the gallery card
   without page scroll, and every component degrades to a legible static
   end-state when scroll timelines or motion are unavailable. */

const CAT = "Scroll-Driven";

export const scrollDrivenExtra: NudaComponent[] = [
  /* ─────────────── 1. TOC Active Highlight ─────────────── */
  {
    id: "sd2-toc-highlight",
    name: "TOC Active Highlight",
    category: CAT,
    preview: (
      <div className="nuda-sd2-toc" role="region" aria-label="Table of contents highlight demo">
        <div className="nuda-sd2-toc__scroller">
          <nav className="nuda-sd2-toc__nav" aria-hidden="true">
            <span className="nuda-sd2-toc__item">
              Intro
              <span className="nuda-sd2-toc__dot nuda-sd2-toc__dot--1" />
            </span>
            <span className="nuda-sd2-toc__item">
              Specs
              <span className="nuda-sd2-toc__dot nuda-sd2-toc__dot--2" />
            </span>
            <span className="nuda-sd2-toc__item">
              Notes
              <span className="nuda-sd2-toc__dot nuda-sd2-toc__dot--3" />
            </span>
          </nav>
          <section className="nuda-sd2-toc__section nuda-sd2-toc__section--1">
            <p>Intro section content fills this space as you scroll.</p>
          </section>
          <section className="nuda-sd2-toc__section nuda-sd2-toc__section--2">
            <p>Specs section sits further down the scroller.</p>
          </section>
          <section className="nuda-sd2-toc__section nuda-sd2-toc__section--3">
            <p>Notes section is near the bottom of the panel.</p>
          </section>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sd2-toc{height:160px;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;overflow:hidden}
      .nuda-sd2-toc__scroller{height:100%;overflow:auto;timeline-scope:--sd2sec1,--sd2sec2,--sd2sec3}
      .nuda-sd2-toc__nav{position:sticky;top:0;z-index:2;display:flex;gap:.3rem;padding:.5rem .4rem;background:#09090b;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-sd2-toc__item{flex:1;display:flex;flex-direction:column;align-items:center;gap:.3rem;color:#a1a1aa;font-size:.62rem;text-transform:uppercase;letter-spacing:.04em}
      .nuda-sd2-toc__dot{width:16px;height:3px;border-radius:2px;background:#e4ff54;opacity:0;transform:scaleX(.3);animation-timing-function:linear;animation-fill-mode:both}
      .nuda-sd2-toc__dot--1{animation-name:nuda-sd2-toc-dot;animation-timeline:--sd2sec1}
      .nuda-sd2-toc__dot--2{animation-name:nuda-sd2-toc-dot;animation-timeline:--sd2sec2}
      .nuda-sd2-toc__dot--3{animation-name:nuda-sd2-toc-dot;animation-timeline:--sd2sec3}
      .nuda-sd2-toc__section{padding:1.6rem 1rem;color:#a1a1aa;font-size:.75rem;line-height:1.6}
      .nuda-sd2-toc__section p{margin:0}
      .nuda-sd2-toc__section--1{view-timeline-name:--sd2sec1}
      .nuda-sd2-toc__section--2{view-timeline-name:--sd2sec2}
      .nuda-sd2-toc__section--3{view-timeline-name:--sd2sec3}
      @keyframes nuda-sd2-toc-dot{0%,100%{opacity:0;transform:scaleX(.3)}40%,60%{opacity:1;transform:scaleX(1)}}
      @supports not (animation-timeline:view()){.nuda-sd2-toc__dot--1{opacity:1;transform:scaleX(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-sd2-toc__dot{animation:none;animation-timeline:none;opacity:0;transform:scaleX(.3)}.nuda-sd2-toc__dot--1{opacity:1;transform:scaleX(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Nav dots light up as their matching section scrolls into view -->
<!-- Uses view-timeline-name on each section + timeline-scope on the
     shared ancestor so a nav dot outside the section can reference it -->
<nav class="nuda-sd2-toc__nav">
  <span class="nuda-sd2-toc__item">Intro<span class="nuda-sd2-toc__dot nuda-sd2-toc__dot--1"></span></span>
  <span class="nuda-sd2-toc__item">Specs<span class="nuda-sd2-toc__dot nuda-sd2-toc__dot--2"></span></span>
  <span class="nuda-sd2-toc__item">Notes<span class="nuda-sd2-toc__dot nuda-sd2-toc__dot--3"></span></span>
</nav>
<section class="nuda-sd2-toc__section nuda-sd2-toc__section--1">…</section>
<section class="nuda-sd2-toc__section nuda-sd2-toc__section--2">…</section>
<section class="nuda-sd2-toc__section nuda-sd2-toc__section--3">…</section>`,
      },
    ],
  },

  /* ─────────────── 2. View Zoom Image ─────────────── */
  {
    id: "sd2-zoom-view",
    name: "View Zoom Image",
    category: CAT,
    preview: (
      <div className="nuda-sd2-zoom" role="region" aria-label="View-driven image zoom demo">
        <div className="nuda-sd2-zoom__scroller">
          <p className="nuda-sd2-zoom__hint">Scroll ↓</p>
          <div className="nuda-sd2-zoom__frame">
            <div className="nuda-sd2-zoom__img">NUDA</div>
          </div>
          <div className="nuda-sd2-zoom__frame">
            <div className="nuda-sd2-zoom__img nuda-sd2-zoom__img--b">VIEW</div>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sd2-zoom{height:160px;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;background:#09090b}
      .nuda-sd2-zoom__scroller{height:100%;overflow:auto;padding:.8rem;display:flex;flex-direction:column;gap:.8rem}
      .nuda-sd2-zoom__hint{margin:0;color:#52525b;font-size:.68rem;text-align:center;text-transform:uppercase;letter-spacing:.08em}
      .nuda-sd2-zoom__frame{flex:0 0 auto;height:96px;border-radius:10px;overflow:hidden}
      .nuda-sd2-zoom__img{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1f2937,#e4ff54);color:#09090b;font-weight:800;letter-spacing:.15em;transform:scale(1);animation:nuda-sd2-zoom-in linear both;animation-timeline:view();animation-range:cover 0% cover 100%}
      .nuda-sd2-zoom__img--b{background:linear-gradient(135deg,#3b0764,#e4ff54)}
      @keyframes nuda-sd2-zoom-in{50%{transform:scale(1.2)}}
      @supports not (animation-timeline:view()){.nuda-sd2-zoom__img{transform:scale(1.08)}}
      @media(prefers-reduced-motion:reduce){.nuda-sd2-zoom__img{animation:none;animation-timeline:none;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Image zooms in then back out across its own visible duration -->
<div class="nuda-sd2-zoom__frame">
  <img class="nuda-sd2-zoom__img" src="photo.jpg" alt="Zoom" />
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Shrinking Sticky Header ─────────────── */
  {
    id: "sd2-sticky-shrink",
    name: "Shrinking Sticky Header",
    category: CAT,
    preview: (
      <div className="nuda-sd2-shrink" role="region" aria-label="Shrinking sticky header demo">
        <div className="nuda-sd2-shrink__scroller">
          <header className="nuda-sd2-shrink__header">
            <span className="nuda-sd2-shrink__title">Dashboard</span>
          </header>
          <div className="nuda-sd2-shrink__body">
            <p>Row one</p>
            <p>Row two</p>
            <p>Row three</p>
            <p>Row four</p>
            <p>Row five</p>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sd2-shrink{height:160px;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;background:#09090b}
      .nuda-sd2-shrink__scroller{height:100%;overflow:auto}
      .nuda-sd2-shrink__header{position:sticky;top:0;z-index:2;padding:.7rem 1rem;background:#09090b;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-sd2-shrink__title{display:inline-block;color:#fafafa;font-weight:800;font-size:1.05rem;transform-origin:0 50%;animation:nuda-sd2-shrink-title linear;animation-timeline:scroll(nearest)}
      .nuda-sd2-shrink__body{padding:.4rem 1rem 1.4rem;color:#a1a1aa;font-size:.78rem;line-height:1.8}
      .nuda-sd2-shrink__body p{margin:0 0 .9rem}
      @keyframes nuda-sd2-shrink-title{to{transform:scale(.7)}}
      @supports not (animation-timeline:scroll()){.nuda-sd2-shrink__title{transform:scale(.85)}}
      @media(prefers-reduced-motion:reduce){.nuda-sd2-shrink__title{animation:none;animation-timeline:none;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sticky header title shrinks as the body scrolls beneath it -->
<div class="nuda-sd2-shrink__scroller">
  <header class="nuda-sd2-shrink__header">
    <span class="nuda-sd2-shrink__title">Dashboard</span>
  </header>
  <div class="nuda-sd2-shrink__body">
    <p>Row one</p>
    <p>Row two</p>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Vertical-to-Horizontal Drive ─────────────── */
  {
    id: "sd2-hscroll-drive",
    name: "Vertical-to-Horizontal Drive",
    category: CAT,
    preview: (
      <div className="nuda-sd2-hdrive" role="region" aria-label="Vertical scroll drives horizontal gallery demo">
        <div className="nuda-sd2-hdrive__scroller">
          <div className="nuda-sd2-hdrive__spacer" aria-hidden="true" />
          <p className="nuda-sd2-hdrive__hint">Scroll ↓ to pan →</p>
          <div className="nuda-sd2-hdrive__spacer" aria-hidden="true" />
        </div>
        <div className="nuda-sd2-hdrive__track" aria-hidden="true">
          <div className="nuda-sd2-hdrive__row">
            <span className="nuda-sd2-hdrive__chip">01</span>
            <span className="nuda-sd2-hdrive__chip">02</span>
            <span className="nuda-sd2-hdrive__chip">03</span>
            <span className="nuda-sd2-hdrive__chip">04</span>
            <span className="nuda-sd2-hdrive__chip">05</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sd2-hdrive{height:160px;display:flex;flex-direction:column;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;background:#09090b;timeline-scope:--sd2hdrive}
      .nuda-sd2-hdrive__scroller{flex:1;overflow-y:auto;scroll-timeline-name:--sd2hdrive;scroll-timeline-axis:block;padding:.6rem}
      .nuda-sd2-hdrive__spacer{height:70px}
      .nuda-sd2-hdrive__hint{margin:0;text-align:center;color:#52525b;font-size:.68rem;text-transform:uppercase;letter-spacing:.08em}
      .nuda-sd2-hdrive__track{height:52px;flex:0 0 auto;overflow:hidden;border-top:1px solid rgba(255,255,255,.08);display:flex;align-items:center}
      .nuda-sd2-hdrive__row{display:flex;gap:.5rem;padding:0 .6rem;animation:nuda-sd2-hdrive-pan linear;animation-timeline:--sd2hdrive}
      .nuda-sd2-hdrive__chip{flex:0 0 auto;width:40px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:8px;background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.2);color:#e4ff54;font-size:.7rem;font-weight:700}
      @keyframes nuda-sd2-hdrive-pan{from{transform:translateX(0)}to{transform:translateX(-160px)}}
      @supports not (animation-timeline:scroll()){.nuda-sd2-hdrive__row{transform:translateX(-80px)}}
      @media(prefers-reduced-motion:reduce){.nuda-sd2-hdrive__row{animation:none;animation-timeline:none;transform:translateX(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Vertical scroll of the top pane drives horizontal pan below,
     via a named scroll-timeline-name + timeline-scope pairing -->
<div class="nuda-sd2-hdrive__scroller">…</div>
<div class="nuda-sd2-hdrive__track">
  <div class="nuda-sd2-hdrive__row">
    <span class="nuda-sd2-hdrive__chip">01</span>
    <span class="nuda-sd2-hdrive__chip">02</span>
    <span class="nuda-sd2-hdrive__chip">03</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Staggered Entry List ─────────────── */
  {
    id: "sd2-stagger-entry",
    name: "Staggered Entry List",
    category: CAT,
    preview: (
      <div className="nuda-sd2-stagger" role="region" aria-label="Staggered list entry demo">
        <div className="nuda-sd2-stagger__item nuda-sd2-stagger__item--odd">Alpha release notes</div>
        <div className="nuda-sd2-stagger__item nuda-sd2-stagger__item--even">Beta feedback</div>
        <div className="nuda-sd2-stagger__item nuda-sd2-stagger__item--odd">Changelog entry</div>
        <div className="nuda-sd2-stagger__item nuda-sd2-stagger__item--even">Roadmap item</div>
      </div>
    ),
    cssInline: `
      .nuda-sd2-stagger{height:160px;overflow:auto;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;padding:.8rem;display:flex;flex-direction:column;gap:.6rem}
      .nuda-sd2-stagger__item{flex:0 0 auto;padding:.55rem .8rem;border-radius:8px;background:rgba(228,255,84,.05);border:1px solid rgba(228,255,84,.16);color:#e4ff54;font-size:.75rem;font-weight:600;opacity:0;animation:nuda-sd2-stagger-in linear both;animation-timeline:view();animation-range:entry 0% cover 40%}
      .nuda-sd2-stagger__item--odd{transform:translateX(-26px) rotate(-3deg)}
      .nuda-sd2-stagger__item--even{transform:translateX(26px) rotate(3deg)}
      @keyframes nuda-sd2-stagger-in{to{opacity:1;transform:translateX(0) rotate(0deg)}}
      @supports not (animation-timeline:view()){.nuda-sd2-stagger__item{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-sd2-stagger__item{animation:none;animation-timeline:none;opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Items slide in from alternating sides as they enter the scrollport -->
<div class="nuda-sd2-stagger__item nuda-sd2-stagger__item--odd">Alpha release notes</div>
<div class="nuda-sd2-stagger__item nuda-sd2-stagger__item--even">Beta feedback</div>
<div class="nuda-sd2-stagger__item nuda-sd2-stagger__item--odd">Changelog entry</div>`,
      },
    ],
  },

  /* ─────────────── 6. Scroll Odometer Counter ─────────────── */
  {
    id: "sd2-odometer",
    name: "Scroll Odometer Counter",
    category: CAT,
    preview: (
      <div className="nuda-sd2-odo" role="region" aria-label="Scroll odometer counter demo">
        <div className="nuda-sd2-odo__scroller">
          <div className="nuda-sd2-odo__sticky">
            <div className="nuda-sd2-odo__display" aria-hidden="true">
              <div className="nuda-sd2-odo__col">
                <div className="nuda-sd2-odo__strip nuda-sd2-odo__strip--tens">
                  <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                  <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                </div>
              </div>
              <div className="nuda-sd2-odo__col">
                <div className="nuda-sd2-odo__strip nuda-sd2-odo__strip--units">
                  <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                  <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                  <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
                  <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
                </div>
              </div>
              <span className="nuda-sd2-odo__pct">%</span>
            </div>
            <p className="nuda-sd2-odo__label">scroll progress</p>
          </div>
          <div className="nuda-sd2-odo__filler" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sd2-odo{height:160px;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;background:#09090b}
      .nuda-sd2-odo__scroller{height:100%;overflow:auto}
      .nuda-sd2-odo__sticky{position:sticky;top:0;display:flex;flex-direction:column;align-items:center;gap:.3rem;padding:1.1rem 0 .6rem;background:#09090b}
      .nuda-sd2-odo__display{display:flex;align-items:center;gap:2px}
      .nuda-sd2-odo__col{height:22px;overflow:hidden;width:16px}
      .nuda-sd2-odo__strip{display:flex;flex-direction:column;will-change:transform}
      .nuda-sd2-odo__strip span{height:22px;display:flex;align-items:center;justify-content:center;font-size:1.05rem;font-weight:800;color:#e4ff54}
      .nuda-sd2-odo__strip--tens{animation:nuda-sd2-odo-tens linear;animation-timeline:scroll(nearest)}
      .nuda-sd2-odo__strip--units{animation:nuda-sd2-odo-units linear;animation-timeline:scroll(nearest)}
      .nuda-sd2-odo__pct{color:#777;font-size:.85rem;font-weight:700}
      .nuda-sd2-odo__label{margin:0;color:#52525b;font-size:.65rem;text-transform:uppercase;letter-spacing:.1em}
      .nuda-sd2-odo__filler{height:260px}
      @keyframes nuda-sd2-odo-tens{to{transform:translateY(-198px)}}
      @keyframes nuda-sd2-odo-units{to{transform:translateY(-418px)}}
      @supports not (animation-timeline:scroll()){.nuda-sd2-odo__strip--tens{transform:translateY(-198px)}.nuda-sd2-odo__strip--units{transform:translateY(-198px)}}
      @media(prefers-reduced-motion:reduce){.nuda-sd2-odo__strip--tens{animation:none;animation-timeline:none;transform:translateY(-198px)}.nuda-sd2-odo__strip--units{animation:none;animation-timeline:none;transform:translateY(-198px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Digit strips translate upward as you scroll, like an odometer -->
<div class="nuda-sd2-odo__sticky">
  <div class="nuda-sd2-odo__display">
    <div class="nuda-sd2-odo__col">
      <div class="nuda-sd2-odo__strip nuda-sd2-odo__strip--tens">
        <span>0</span><span>1</span><span>2</span>
      </div>
    </div>
    <div class="nuda-sd2-odo__col">
      <div class="nuda-sd2-odo__strip nuda-sd2-odo__strip--units">
        <span>0</span><span>1</span><span>2</span>
      </div>
    </div>
    <span class="nuda-sd2-odo__pct">%</span>
  </div>
  <p class="nuda-sd2-odo__label">scroll progress</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Sticky Progress Ring ─────────────── */
  {
    id: "sd2-progress-ring",
    name: "Sticky Progress Ring",
    category: CAT,
    preview: (
      <div className="nuda-sd2-ring" role="region" aria-label="Sticky progress ring demo">
        <div className="nuda-sd2-ring__scroller">
          <div className="nuda-sd2-ring__badge" aria-hidden="true">
            <svg className="nuda-sd2-ring__svg" viewBox="0 0 44 44">
              <circle className="nuda-sd2-ring__track" cx="22" cy="22" r="18" />
              <circle className="nuda-sd2-ring__bar" cx="22" cy="22" r="18" />
            </svg>
          </div>
          <div className="nuda-sd2-ring__content">
            <p>Article paragraph one.</p>
            <p>Article paragraph two.</p>
            <p>Article paragraph three.</p>
            <p>Article paragraph four.</p>
            <p>Article paragraph five.</p>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sd2-ring{height:160px;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden;background:#09090b}
      .nuda-sd2-ring__scroller{position:relative;height:100%;overflow:auto;padding:.8rem}
      .nuda-sd2-ring__badge{position:sticky;top:.4rem;float:right;width:34px;height:34px;margin:0 0 .5rem .5rem}
      .nuda-sd2-ring__svg{width:100%;height:100%;transform:rotate(-90deg)}
      .nuda-sd2-ring__track{fill:none;stroke:rgba(255,255,255,.08);stroke-width:4}
      .nuda-sd2-ring__bar{fill:none;stroke:#e4ff54;stroke-width:4;stroke-linecap:round;stroke-dasharray:113;stroke-dashoffset:113;animation:nuda-sd2-ring-fill linear;animation-timeline:scroll(nearest)}
      .nuda-sd2-ring__content{color:#a1a1aa;font-size:.75rem;line-height:1.6}
      .nuda-sd2-ring__content p{margin:0 0 1.2rem}
      @keyframes nuda-sd2-ring-fill{to{stroke-dashoffset:0}}
      @supports not (animation-timeline:scroll()){.nuda-sd2-ring__bar{stroke-dashoffset:40}}
      @media(prefers-reduced-motion:reduce){.nuda-sd2-ring__bar{animation:none;animation-timeline:none;stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Ring stroke-dashoffset unwinds with scroll progress, pinned in a
     sticky corner over flowing article text -->
<div class="nuda-sd2-ring__badge">
  <svg class="nuda-sd2-ring__svg" viewBox="0 0 44 44">
    <circle class="nuda-sd2-ring__track" cx="22" cy="22" r="18" />
    <circle class="nuda-sd2-ring__bar" cx="22" cy="22" r="18" />
  </svg>
</div>
<div class="nuda-sd2-ring__content">
  <p>Article paragraph one.</p>
  <p>Article paragraph two.</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Card De-Stack ─────────────── */
  {
    id: "sd2-destack",
    name: "Card De-Stack",
    category: CAT,
    preview: (
      <div className="nuda-sd2-destack" role="region" aria-label="Card de-stack demo">
        <div className="nuda-sd2-destack__scroller">
          <p className="nuda-sd2-destack__hint">Scroll ↓</p>
          <div className="nuda-sd2-destack__deck">
            <div className="nuda-sd2-destack__card nuda-sd2-destack__card--1">Alpha</div>
            <div className="nuda-sd2-destack__card nuda-sd2-destack__card--2">Beta</div>
            <div className="nuda-sd2-destack__card nuda-sd2-destack__card--3">Gamma</div>
          </div>
          <div className="nuda-sd2-destack__filler" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-sd2-destack{height:160px;overflow:auto;border:1px solid rgba(255,255,255,.08);border-radius:10px;background:#09090b;padding:.9rem}
      .nuda-sd2-destack__hint{margin:0 0 .6rem;color:#52525b;font-size:.68rem;text-align:center;text-transform:uppercase;letter-spacing:.08em}
      .nuda-sd2-destack__deck{display:flex;flex-direction:column;padding:0 1.4rem}
      .nuda-sd2-destack__card{height:46px;display:flex;align-items:center;justify-content:center;border-radius:10px;font-weight:700;font-size:.8rem;color:#0a0a0a;background:#e4ff54;box-shadow:0 6px 16px rgba(0,0,0,.4)}
      .nuda-sd2-destack__card--2{background:#c7e34a;margin-top:-38px;transform:translateY(0) rotate(-6deg);animation:nuda-sd2-destack-b linear both;animation-timeline:view(block);animation-range:entry 0% cover 45%}
      .nuda-sd2-destack__card--3{background:#a9c23e;margin-top:-38px;transform:translateY(0) rotate(6deg);animation:nuda-sd2-destack-c linear both;animation-timeline:view(block);animation-range:entry 0% cover 45%}
      .nuda-sd2-destack__filler{height:70px}
      @keyframes nuda-sd2-destack-b{to{transform:translateY(50px) rotate(0deg)}}
      @keyframes nuda-sd2-destack-c{to{transform:translateY(100px) rotate(0deg)}}
      @supports not (animation-timeline:view()){.nuda-sd2-destack__card--2{transform:translateY(50px) rotate(0deg)}.nuda-sd2-destack__card--3{transform:translateY(100px) rotate(0deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-sd2-destack__card--2{animation:none;animation-timeline:none;transform:translateY(50px) rotate(0deg)}.nuda-sd2-destack__card--3{animation:none;animation-timeline:none;transform:translateY(100px) rotate(0deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Overlapping deck fans apart as it scrolls into view -->
<div class="nuda-sd2-destack__deck">
  <div class="nuda-sd2-destack__card nuda-sd2-destack__card--1">Alpha</div>
  <div class="nuda-sd2-destack__card nuda-sd2-destack__card--2">Beta</div>
  <div class="nuda-sd2-destack__card nuda-sd2-destack__card--3">Gamma</div>
</div>`,
      },
    ],
  },
];
