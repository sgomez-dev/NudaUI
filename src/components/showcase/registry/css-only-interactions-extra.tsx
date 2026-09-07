import type { NudaComponent } from "./types";

/* ============================================================
   CSS-ONLY INTERACTIONS — EXTRA — 8 more copy-paste components
   ZERO JavaScript. Pure CSS using :checked / :has() / :focus-within /
   CSS anchor positioning / the native Popover API / sibling combinators.
   The gallery preview renders the SAME HTML the copy tab ships,
   so the interactions work in the preview with no handlers.
   Brand: dark #09090b + lime #e4ff54.
   Prefix + keyframe stem: nuda-co2-* / _nuda-co2*
   ============================================================ */

const CAT = "CSS-Only Interactions";

export const cssOnlyInteractionsExtra: NudaComponent[] = [
  /* ─────────────── 1. LIVE VALIDATION SUMMARY ─────────────── */
  {
    id: "co2-validation-summary",
    name: "Live Validation Summary",
    category: CAT,
    cssInline: `
      .nuda-co2-validation-summary{--nuda-co2-vs-accent:#e4ff54;width:100%;max-width:280px;font-family:inherit}
      .nuda-co2-validation-summary__input{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-co2-validation-summary__row{display:flex;align-items:center;gap:10px;min-height:44px;cursor:pointer}
      .nuda-co2-validation-summary__box{position:relative;flex-shrink:0;width:18px;height:18px;border-radius:5px;border:2px solid rgba(255,255,255,.22);background:transparent;transition:background .2s ease,border-color .2s ease}
      .nuda-co2-validation-summary__box::after{content:"\\2713";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;color:#09090b;opacity:0;transform:scale(.5);transition:opacity .18s ease,transform .18s ease}
      .nuda-co2-validation-summary__label{font-size:.76rem;color:#bbb}
      .nuda-co2-validation-summary__input:checked+.nuda-co2-validation-summary__row .nuda-co2-validation-summary__box{background:var(--nuda-co2-vs-accent);border-color:var(--nuda-co2-vs-accent)}
      .nuda-co2-validation-summary__input:checked+.nuda-co2-validation-summary__row .nuda-co2-validation-summary__box::after{opacity:1;transform:scale(1)}
      .nuda-co2-validation-summary__input:checked+.nuda-co2-validation-summary__row .nuda-co2-validation-summary__label{color:#eee}
      .nuda-co2-validation-summary__input:focus-visible+.nuda-co2-validation-summary__row .nuda-co2-validation-summary__box{outline:2px solid var(--nuda-co2-vs-accent);outline-offset:2px}
      .nuda-co2-validation-summary__summary{display:flex;align-items:center;gap:8px;margin-top:.6rem;padding:.55rem .7rem;font-size:.72rem;font-weight:600;color:#e5b400;background:rgba(228,180,0,.08);border:1px solid rgba(228,180,0,.25);border-radius:9px;transition:background .2s ease,border-color .2s ease,color .2s ease}
      .nuda-co2-validation-summary__summary-icon{flex-shrink:0;width:16px;height:16px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:currentColor}
      .nuda-co2-validation-summary__summary-icon::after{content:"!";color:#09090b;font-size:11px;font-weight:800}
      .nuda-co2-validation-summary__txt-done{display:none}
      .nuda-co2-validation-summary:has(#co2-vs-terms:checked):has(#co2-vs-privacy:checked):has(#co2-vs-age:checked) .nuda-co2-validation-summary__summary{color:var(--nuda-co2-vs-accent);background:rgba(228,255,84,.1);border-color:rgba(228,255,84,.35);animation:_nuda-co2validationsummarypop .3s ease-out}
      .nuda-co2-validation-summary:has(#co2-vs-terms:checked):has(#co2-vs-privacy:checked):has(#co2-vs-age:checked) .nuda-co2-validation-summary__summary-icon::after{content:"\\2713"}
      .nuda-co2-validation-summary:has(#co2-vs-terms:checked):has(#co2-vs-privacy:checked):has(#co2-vs-age:checked) .nuda-co2-validation-summary__txt-pending{display:none}
      .nuda-co2-validation-summary:has(#co2-vs-terms:checked):has(#co2-vs-privacy:checked):has(#co2-vs-age:checked) .nuda-co2-validation-summary__txt-done{display:inline}
      @keyframes _nuda-co2validationsummarypop{from{transform:scale(.94);opacity:.4}to{transform:scale(1);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-co2-validation-summary__box,.nuda-co2-validation-summary__box::after,.nuda-co2-validation-summary__summary{transition:none}.nuda-co2-validation-summary__summary{animation:none}}
    `,
    preview: (
      <div className="nuda-co2-validation-summary" aria-hidden="true">
        <input className="nuda-co2-validation-summary__input" type="checkbox" id="co2-vs-terms" defaultChecked />
        <label className="nuda-co2-validation-summary__row" htmlFor="co2-vs-terms">
          <span className="nuda-co2-validation-summary__box" aria-hidden="true"></span>
          <span className="nuda-co2-validation-summary__label">Accept terms of service</span>
        </label>
        <input className="nuda-co2-validation-summary__input" type="checkbox" id="co2-vs-privacy" defaultChecked />
        <label className="nuda-co2-validation-summary__row" htmlFor="co2-vs-privacy">
          <span className="nuda-co2-validation-summary__box" aria-hidden="true"></span>
          <span className="nuda-co2-validation-summary__label">Accept privacy policy</span>
        </label>
        <input className="nuda-co2-validation-summary__input" type="checkbox" id="co2-vs-age" />
        <label className="nuda-co2-validation-summary__row" htmlFor="co2-vs-age">
          <span className="nuda-co2-validation-summary__box" aria-hidden="true"></span>
          <span className="nuda-co2-validation-summary__label">Confirm you are 18+</span>
        </label>
        <div className="nuda-co2-validation-summary__summary" role="status" aria-live="polite">
          <span className="nuda-co2-validation-summary__summary-icon" aria-hidden="true"></span>
          <span>
            <span className="nuda-co2-validation-summary__txt-pending">Complete all items to continue</span>
            <span className="nuda-co2-validation-summary__txt-done">All requirements met — ready to continue</span>
          </span>
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Live Validation Summary — :has() reads three checkboxes, zero JS -->
<div class="nuda-co2-validation-summary">
  <input class="nuda-co2-validation-summary__input" type="checkbox" id="co2-vs-terms" checked />
  <label class="nuda-co2-validation-summary__row" for="co2-vs-terms">
    <span class="nuda-co2-validation-summary__box" aria-hidden="true"></span>
    <span class="nuda-co2-validation-summary__label">Accept terms of service</span>
  </label>

  <input class="nuda-co2-validation-summary__input" type="checkbox" id="co2-vs-privacy" checked />
  <label class="nuda-co2-validation-summary__row" for="co2-vs-privacy">
    <span class="nuda-co2-validation-summary__box" aria-hidden="true"></span>
    <span class="nuda-co2-validation-summary__label">Accept privacy policy</span>
  </label>

  <input class="nuda-co2-validation-summary__input" type="checkbox" id="co2-vs-age" />
  <label class="nuda-co2-validation-summary__row" for="co2-vs-age">
    <span class="nuda-co2-validation-summary__box" aria-hidden="true"></span>
    <span class="nuda-co2-validation-summary__label">Confirm you are 18+</span>
  </label>

  <div class="nuda-co2-validation-summary__summary" role="status" aria-live="polite">
    <span class="nuda-co2-validation-summary__summary-icon" aria-hidden="true"></span>
    <span>
      <span class="nuda-co2-validation-summary__txt-pending">Complete all items to continue</span>
      <span class="nuda-co2-validation-summary__txt-done">All requirements met — ready to continue</span>
    </span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. IMAGE COMPARISON SLIDER ─────────────── */
  {
    id: "co2-compare-slider",
    name: "Image Comparison Slider",
    category: CAT,
    cssInline: `
      .nuda-co2-compare-slider{--nuda-co2-cs-accent:#e4ff54;position:relative;width:100%;max-width:280px;font-family:inherit}
      .nuda-co2-compare-slider__frame{position:relative;height:150px;border-radius:12px;overflow:hidden;background:linear-gradient(135deg,#3a3f22,#1c1f10)}
      .nuda-co2-compare-slider__label{position:absolute;top:8px;font-size:.6rem;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#f2f2f2;background:rgba(0,0,0,.5);padding:2px 8px;border-radius:999px;pointer-events:none;z-index:2}
      .nuda-co2-compare-slider__label--before{left:8px}
      .nuda-co2-compare-slider__label--after{right:8px}
      .nuda-co2-compare-slider__range{position:absolute;inset:0;width:100%;height:150px;margin:0;padding:0;appearance:none;-webkit-appearance:none;background:transparent;cursor:ew-resize;accent-color:var(--nuda-co2-cs-accent);z-index:3}
      .nuda-co2-compare-slider__range::-webkit-slider-runnable-track{-webkit-appearance:none;background:transparent;height:150px}
      .nuda-co2-compare-slider__range::-webkit-slider-thumb{-webkit-appearance:none;width:4px;height:150px;border-radius:0;background:var(--nuda-co2-cs-accent);box-shadow:-1000px 0 0 1000px #17171a,0 0 0 2px rgba(9,9,11,.5);cursor:ew-resize}
      .nuda-co2-compare-slider__range::-moz-range-track{background:transparent;height:150px;border:none}
      .nuda-co2-compare-slider__range::-moz-range-thumb{width:4px;height:150px;border:none;border-radius:0;background:var(--nuda-co2-cs-accent);box-shadow:-1000px 0 0 1000px #17171a}
      .nuda-co2-compare-slider__range:focus-visible{outline:2px solid var(--nuda-co2-cs-accent);outline-offset:-2px;border-radius:12px}
      @media(prefers-reduced-motion:reduce){.nuda-co2-compare-slider__frame{transition:none}}
    `,
    preview: (
      <div className="nuda-co2-compare-slider" aria-hidden="true">
        <div className="nuda-co2-compare-slider__frame">
          <span className="nuda-co2-compare-slider__label nuda-co2-compare-slider__label--before">Before</span>
          <span className="nuda-co2-compare-slider__label nuda-co2-compare-slider__label--after">After</span>
          <input className="nuda-co2-compare-slider__range" type="range" min={0} max={100} defaultValue={55} aria-label="Comparison position" />
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Image Comparison Slider — the range thumb's box-shadow paints
     the "before" curtain, so no JS is needed to sync a second layer.
     Swap the frame's background + thumb box-shadow color for real photos. -->
<div class="nuda-co2-compare-slider">
  <div class="nuda-co2-compare-slider__frame">
    <span class="nuda-co2-compare-slider__label nuda-co2-compare-slider__label--before">Before</span>
    <span class="nuda-co2-compare-slider__label nuda-co2-compare-slider__label--after">After</span>
    <input class="nuda-co2-compare-slider__range" type="range" min="0" max="100" value="55"
           aria-label="Comparison position" />
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. MULTI-TAG FILTER ─────────────── */
  {
    id: "co2-tag-filter",
    name: "Multi-Tag Filter",
    category: CAT,
    cssInline: `
      .nuda-co2-tag-filter{--nuda-co2-tf-accent:#e4ff54;width:100%;max-width:300px;font-family:inherit}
      .nuda-co2-tag-filter__input{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-co2-tag-filter__bar{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 .6rem;padding:0;list-style:none}
      .nuda-co2-tag-filter__chip{display:inline-flex;align-items:center;min-height:36px;padding:.35rem .8rem;font-size:.7rem;font-weight:600;color:#aaa;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);border-radius:999px;cursor:pointer;transition:color .2s ease,background .2s ease,border-color .2s ease}
      .nuda-co2-tag-filter__chip:hover{color:#eee}
      .nuda-co2-tag-filter__list{display:flex;flex-direction:column;gap:6px;margin:0;padding:0;list-style:none}
      .nuda-co2-tag-filter__card{display:flex;flex-direction:column;gap:2px;padding:.5rem .7rem;font-size:.74rem;color:#ddd;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:9px;transition:opacity .2s ease,transform .2s ease}
      .nuda-co2-tag-filter__tags{font-size:.62rem;color:#888}
      #co2-tf-remote:checked~.nuda-co2-tag-filter__bar label[for=co2-tf-remote],
      #co2-tf-senior:checked~.nuda-co2-tag-filter__bar label[for=co2-tf-senior]{color:#09090b;background:var(--nuda-co2-tf-accent);border-color:var(--nuda-co2-tf-accent)}
      .nuda-co2-tag-filter__input:focus-visible~.nuda-co2-tag-filter__bar label{outline:2px solid var(--nuda-co2-tf-accent);outline-offset:2px}
      .nuda-co2-tag-filter:has(#co2-tf-remote:checked) .nuda-co2-tag-filter__card:not([data-remote]){display:none}
      .nuda-co2-tag-filter:has(#co2-tf-senior:checked) .nuda-co2-tag-filter__card:not([data-senior]){display:none}
      @media(prefers-reduced-motion:reduce){.nuda-co2-tag-filter__chip,.nuda-co2-tag-filter__card{transition:none}}
    `,
    preview: (
      <div className="nuda-co2-tag-filter" aria-hidden="true">
        <input className="nuda-co2-tag-filter__input" type="checkbox" id="co2-tf-remote" />
        <input className="nuda-co2-tag-filter__input" type="checkbox" id="co2-tf-senior" />
        <div className="nuda-co2-tag-filter__bar">
          <label className="nuda-co2-tag-filter__chip" htmlFor="co2-tf-remote">Remote</label>
          <label className="nuda-co2-tag-filter__chip" htmlFor="co2-tf-senior">Senior</label>
        </div>
        <ul className="nuda-co2-tag-filter__list">
          <li className="nuda-co2-tag-filter__card" data-remote="" data-senior="">
            Staff Engineer<span className="nuda-co2-tag-filter__tags">Remote · Senior</span>
          </li>
          <li className="nuda-co2-tag-filter__card" data-remote="">
            Support Specialist<span className="nuda-co2-tag-filter__tags">Remote</span>
          </li>
          <li className="nuda-co2-tag-filter__card" data-senior="">
            Engineering Manager<span className="nuda-co2-tag-filter__tags">Senior</span>
          </li>
          <li className="nuda-co2-tag-filter__card">
            Junior Designer<span className="nuda-co2-tag-filter__tags">On-site</span>
          </li>
        </ul>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Multi-Tag Filter — checkboxes AND-filter the list via :has(), zero JS -->
<div class="nuda-co2-tag-filter">
  <input class="nuda-co2-tag-filter__input" type="checkbox" id="co2-tf-remote" />
  <input class="nuda-co2-tag-filter__input" type="checkbox" id="co2-tf-senior" />

  <div class="nuda-co2-tag-filter__bar">
    <label class="nuda-co2-tag-filter__chip" for="co2-tf-remote">Remote</label>
    <label class="nuda-co2-tag-filter__chip" for="co2-tf-senior">Senior</label>
  </div>

  <ul class="nuda-co2-tag-filter__list">
    <li class="nuda-co2-tag-filter__card" data-remote data-senior>
      Staff Engineer<span class="nuda-co2-tag-filter__tags">Remote · Senior</span>
    </li>
    <li class="nuda-co2-tag-filter__card" data-remote>
      Support Specialist<span class="nuda-co2-tag-filter__tags">Remote</span>
    </li>
    <li class="nuda-co2-tag-filter__card" data-senior>
      Engineering Manager<span class="nuda-co2-tag-filter__tags">Senior</span>
    </li>
    <li class="nuda-co2-tag-filter__card">
      Junior Designer<span class="nuda-co2-tag-filter__tags">On-site</span>
    </li>
  </ul>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. READ MORE CLAMP TOGGLE ─────────────── */
  {
    id: "co2-clamp-toggle",
    name: "Read More Clamp Toggle",
    category: CAT,
    cssInline: `
      .nuda-co2-clamp-toggle{--nuda-co2-ct-accent:#e4ff54;width:100%;max-width:300px;font-family:inherit}
      .nuda-co2-clamp-toggle__input{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-co2-clamp-toggle__text{position:relative;margin:0 0 .4rem;font-size:.76rem;line-height:1.55;color:#bbb;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3;overflow:hidden}
      .nuda-co2-clamp-toggle__text::after{content:"";position:absolute;left:0;right:0;bottom:0;height:1.6em;background:linear-gradient(to bottom,rgba(9,9,11,0),#09090b);opacity:1;transition:opacity .25s ease}
      .nuda-co2-clamp-toggle__toggle{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:.4rem .1rem;font-size:.72rem;font-weight:700;color:var(--nuda-co2-ct-accent);cursor:pointer}
      .nuda-co2-clamp-toggle__toggle:hover{text-decoration:underline}
      .nuda-co2-clamp-toggle__toggle .nuda-co2-clamp-toggle__txt-less{display:none}
      .nuda-co2-clamp-toggle__input:focus-visible~.nuda-co2-clamp-toggle__toggle{outline:2px solid var(--nuda-co2-ct-accent);outline-offset:2px;border-radius:5px}
      .nuda-co2-clamp-toggle:has(.nuda-co2-clamp-toggle__input:checked) .nuda-co2-clamp-toggle__text{-webkit-line-clamp:unset;line-clamp:unset;overflow:visible}
      .nuda-co2-clamp-toggle:has(.nuda-co2-clamp-toggle__input:checked) .nuda-co2-clamp-toggle__text::after{opacity:0}
      .nuda-co2-clamp-toggle:has(.nuda-co2-clamp-toggle__input:checked) .nuda-co2-clamp-toggle__txt-more{display:none}
      .nuda-co2-clamp-toggle:has(.nuda-co2-clamp-toggle__input:checked) .nuda-co2-clamp-toggle__txt-less{display:inline}
      @media(prefers-reduced-motion:reduce){.nuda-co2-clamp-toggle__text::after{transition:none}}
    `,
    preview: (
      <div className="nuda-co2-clamp-toggle" aria-hidden="true">
        <input className="nuda-co2-clamp-toggle__input" type="checkbox" id="co2-clamp-1" />
        <p className="nuda-co2-clamp-toggle__text">
          NudaUI ships copy-paste CSS components with zero runtime dependencies. Every interaction in this
          category — accordions, tabs, dropdowns, this very clamp — runs on native selectors alone, so the
          snippet you copy is the entire implementation, nothing hides behind a bundle.
        </p>
        <label className="nuda-co2-clamp-toggle__toggle" htmlFor="co2-clamp-1">
          <span className="nuda-co2-clamp-toggle__txt-more">Read more</span>
          <span className="nuda-co2-clamp-toggle__txt-less">Read less</span>
        </label>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Read More Clamp Toggle — checkbox + :has() flips -webkit-line-clamp, zero JS -->
<div class="nuda-co2-clamp-toggle">
  <input class="nuda-co2-clamp-toggle__input" type="checkbox" id="co2-clamp-1" />
  <p class="nuda-co2-clamp-toggle__text">
    NudaUI ships copy-paste CSS components with zero runtime dependencies. Every interaction in this
    category — accordions, tabs, dropdowns, this very clamp — runs on native selectors alone, so the
    snippet you copy is the entire implementation, nothing hides behind a bundle.
  </p>
  <label class="nuda-co2-clamp-toggle__toggle" for="co2-clamp-1">
    <span class="nuda-co2-clamp-toggle__txt-more">Read more</span>
    <span class="nuda-co2-clamp-toggle__txt-less">Read less</span>
  </label>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. SORTABLE LIST HEADER ─────────────── */
  {
    id: "co2-sort-headers",
    name: "Sortable List Header",
    category: CAT,
    cssInline: `
      .nuda-co2-sort-headers{--nuda-co2-sh-accent:#e4ff54;width:100%;max-width:280px;font-family:inherit}
      .nuda-co2-sort-headers__input{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-co2-sort-headers__head{display:flex;align-items:center;justify-content:space-between;gap:6px;min-height:44px;padding:.4rem .7rem;font-size:.7rem;font-weight:700;letter-spacing:.03em;text-transform:uppercase;color:#ccc;background:rgba(255,255,255,.05);border-radius:9px 9px 0 0;cursor:pointer}
      .nuda-co2-sort-headers__head:hover{color:#fff}
      .nuda-co2-sort-headers__arrow{display:inline-block;color:var(--nuda-co2-sh-accent);transition:transform .25s ease}
      .nuda-co2-sort-headers__input:focus-visible~.nuda-co2-sort-headers__head{outline:2px solid var(--nuda-co2-sh-accent);outline-offset:-2px}
      .nuda-co2-sort-headers__rows{display:flex;flex-direction:column;margin:0;padding:0;list-style:none;border:1px solid rgba(255,255,255,.08);border-top:none;border-radius:0 0 9px 9px;overflow:hidden}
      .nuda-co2-sort-headers__row{display:flex;align-items:center;justify-content:space-between;min-height:38px;padding:.4rem .7rem;font-size:.74rem;color:#bbb;border-top:1px solid rgba(255,255,255,.06)}
      .nuda-co2-sort-headers__row:first-child{border-top:none}
      .nuda-co2-sort-headers__row b{color:#fff;font-weight:700}
      .nuda-co2-sort-headers__row[data-rank="1"]{order:1}
      .nuda-co2-sort-headers__row[data-rank="2"]{order:2}
      .nuda-co2-sort-headers__row[data-rank="3"]{order:3}
      .nuda-co2-sort-headers__row[data-rank="4"]{order:4}
      #co2-sort-dir:checked~.nuda-co2-sort-headers__head .nuda-co2-sort-headers__arrow{transform:rotate(180deg)}
      #co2-sort-dir:checked~.nuda-co2-sort-headers__rows .nuda-co2-sort-headers__row[data-rank="1"]{order:4}
      #co2-sort-dir:checked~.nuda-co2-sort-headers__rows .nuda-co2-sort-headers__row[data-rank="2"]{order:3}
      #co2-sort-dir:checked~.nuda-co2-sort-headers__rows .nuda-co2-sort-headers__row[data-rank="3"]{order:2}
      #co2-sort-dir:checked~.nuda-co2-sort-headers__rows .nuda-co2-sort-headers__row[data-rank="4"]{order:1}
      @media(prefers-reduced-motion:reduce){.nuda-co2-sort-headers__arrow{transition:none}}
    `,
    preview: (
      <div className="nuda-co2-sort-headers" aria-hidden="true">
        <input className="nuda-co2-sort-headers__input" type="checkbox" id="co2-sort-dir" aria-label="Toggle sort direction for Score" />
        <label className="nuda-co2-sort-headers__head" htmlFor="co2-sort-dir">
          <span>Score</span>
          <span className="nuda-co2-sort-headers__arrow" aria-hidden="true">&#9650;</span>
        </label>
        <ul className="nuda-co2-sort-headers__rows">
          <li className="nuda-co2-sort-headers__row" data-rank="1">Nova <b>98</b></li>
          <li className="nuda-co2-sort-headers__row" data-rank="2">Atlas <b>87</b></li>
          <li className="nuda-co2-sort-headers__row" data-rank="3">Vega <b>76</b></li>
          <li className="nuda-co2-sort-headers__row" data-rank="4">Orion <b>65</b></li>
        </ul>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sortable List Header — a hidden checkbox flips the flex "order"
     of each fixed row via sibling selectors, zero JS. -->
<div class="nuda-co2-sort-headers">
  <input class="nuda-co2-sort-headers__input" type="checkbox" id="co2-sort-dir"
         aria-label="Toggle sort direction for Score" />
  <label class="nuda-co2-sort-headers__head" for="co2-sort-dir">
    <span>Score</span>
    <span class="nuda-co2-sort-headers__arrow" aria-hidden="true">&#9650;</span>
  </label>
  <ul class="nuda-co2-sort-headers__rows">
    <li class="nuda-co2-sort-headers__row" data-rank="1">Nova <b>98</b></li>
    <li class="nuda-co2-sort-headers__row" data-rank="2">Atlas <b>87</b></li>
    <li class="nuda-co2-sort-headers__row" data-rank="3">Vega <b>76</b></li>
    <li class="nuda-co2-sort-headers__row" data-rank="4">Orion <b>65</b></li>
  </ul>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. QUANTITY STEPPER ─────────────── */
  {
    id: "co2-qty-stepper",
    name: "Quantity Stepper",
    category: CAT,
    cssInline: `
      .nuda-co2-qty-stepper{--nuda-co2-qs-accent:#e4ff54;font-family:inherit}
      .nuda-co2-qty-stepper__input{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-co2-qty-stepper__control{display:none;align-items:center;gap:10px}
      #co2-qty-1:checked~.nuda-co2-qty-stepper__control[data-n="1"],
      #co2-qty-2:checked~.nuda-co2-qty-stepper__control[data-n="2"],
      #co2-qty-3:checked~.nuda-co2-qty-stepper__control[data-n="3"]{display:flex}
      .nuda-co2-qty-stepper__btn{display:flex;align-items:center;justify-content:center;width:44px;height:44px;font-size:1.05rem;font-weight:700;color:#09090b;background:var(--nuda-co2-qs-accent);border-radius:10px;cursor:pointer;user-select:none;transition:transform .15s ease,opacity .2s ease}
      .nuda-co2-qty-stepper__btn:hover{transform:translateY(-1px)}
      .nuda-co2-qty-stepper__btn--disabled{opacity:.3;pointer-events:none;background:rgba(255,255,255,.08);color:#666}
      .nuda-co2-qty-stepper__value{min-width:34px;text-align:center;font-size:1.05rem;font-weight:700;color:#fff;border-radius:6px}
      #co2-qty-1:focus-visible~.nuda-co2-qty-stepper__control[data-n="1"] .nuda-co2-qty-stepper__value,
      #co2-qty-2:focus-visible~.nuda-co2-qty-stepper__control[data-n="2"] .nuda-co2-qty-stepper__value,
      #co2-qty-3:focus-visible~.nuda-co2-qty-stepper__control[data-n="3"] .nuda-co2-qty-stepper__value{outline:2px solid var(--nuda-co2-qs-accent);outline-offset:3px}
      @media(prefers-reduced-motion:reduce){.nuda-co2-qty-stepper__btn{transition:none}}
    `,
    preview: (
      <div className="nuda-co2-qty-stepper" role="group" aria-label="Quantity" aria-hidden="true">
        <input className="nuda-co2-qty-stepper__input" type="radio" name="nuda-co2-qty" id="co2-qty-1" aria-label="Quantity 1" />
        <input className="nuda-co2-qty-stepper__input" type="radio" name="nuda-co2-qty" id="co2-qty-2" aria-label="Quantity 2" defaultChecked />
        <input className="nuda-co2-qty-stepper__input" type="radio" name="nuda-co2-qty" id="co2-qty-3" aria-label="Quantity 3" />

        <div className="nuda-co2-qty-stepper__control" data-n="1">
          <span className="nuda-co2-qty-stepper__btn nuda-co2-qty-stepper__btn--disabled" aria-hidden="true">&#8722;</span>
          <span className="nuda-co2-qty-stepper__value">1</span>
          <label className="nuda-co2-qty-stepper__btn" htmlFor="co2-qty-2">&#43;</label>
        </div>
        <div className="nuda-co2-qty-stepper__control" data-n="2">
          <label className="nuda-co2-qty-stepper__btn" htmlFor="co2-qty-1">&#8722;</label>
          <span className="nuda-co2-qty-stepper__value">2</span>
          <label className="nuda-co2-qty-stepper__btn" htmlFor="co2-qty-3">&#43;</label>
        </div>
        <div className="nuda-co2-qty-stepper__control" data-n="3">
          <label className="nuda-co2-qty-stepper__btn" htmlFor="co2-qty-2">&#8722;</label>
          <span className="nuda-co2-qty-stepper__value">3</span>
          <span className="nuda-co2-qty-stepper__btn nuda-co2-qty-stepper__btn--disabled" aria-hidden="true">&#43;</span>
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Quantity Stepper — a hidden radio group holds the current value;
     arrow keys move it natively, and each +/- label points at the
     adjacent radio id. Zero JS. -->
<div class="nuda-co2-qty-stepper" role="group" aria-label="Quantity">
  <input class="nuda-co2-qty-stepper__input" type="radio" name="nuda-co2-qty" id="co2-qty-1" aria-label="Quantity 1" />
  <input class="nuda-co2-qty-stepper__input" type="radio" name="nuda-co2-qty" id="co2-qty-2" aria-label="Quantity 2" checked />
  <input class="nuda-co2-qty-stepper__input" type="radio" name="nuda-co2-qty" id="co2-qty-3" aria-label="Quantity 3" />

  <div class="nuda-co2-qty-stepper__control" data-n="1">
    <span class="nuda-co2-qty-stepper__btn nuda-co2-qty-stepper__btn--disabled" aria-hidden="true">&#8722;</span>
    <span class="nuda-co2-qty-stepper__value">1</span>
    <label class="nuda-co2-qty-stepper__btn" for="co2-qty-2">&#43;</label>
  </div>
  <div class="nuda-co2-qty-stepper__control" data-n="2">
    <label class="nuda-co2-qty-stepper__btn" for="co2-qty-1">&#8722;</label>
    <span class="nuda-co2-qty-stepper__value">2</span>
    <label class="nuda-co2-qty-stepper__btn" for="co2-qty-3">&#43;</label>
  </div>
  <div class="nuda-co2-qty-stepper__control" data-n="3">
    <label class="nuda-co2-qty-stepper__btn" for="co2-qty-2">&#8722;</label>
    <span class="nuda-co2-qty-stepper__value">3</span>
    <span class="nuda-co2-qty-stepper__btn nuda-co2-qty-stepper__btn--disabled" aria-hidden="true">&#43;</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. COLOUR SCHEME PICKER ─────────────── */
  {
    id: "co2-scheme-picker",
    name: "Colour Scheme Picker",
    category: CAT,
    cssInline: `
      .nuda-co2-scheme-picker{--nuda-co2-sp-accent:#e4ff54;width:100%;max-width:260px;font-family:inherit}
      .nuda-co2-scheme-picker__input{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-co2-scheme-picker__sr{position:absolute;width:1px;height:1px;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}
      .nuda-co2-scheme-picker__swatches{display:flex;gap:6px;margin:0 0 .7rem}
      .nuda-co2-scheme-picker__swatch{position:relative;display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:50%;cursor:pointer}
      .nuda-co2-scheme-picker__swatch::before{content:"";width:24px;height:24px;border-radius:50%;background:var(--nuda-co2-sp-dot);border:2px solid rgba(255,255,255,.18);transition:transform .2s ease,box-shadow .2s ease}
      .nuda-co2-scheme-picker__swatch--lime{--nuda-co2-sp-dot:#e4ff54}
      .nuda-co2-scheme-picker__swatch--sky{--nuda-co2-sp-dot:#7dd3fc}
      .nuda-co2-scheme-picker__swatch--coral{--nuda-co2-sp-dot:#fca5a5}
      #co2-scheme-lime:checked~.nuda-co2-scheme-picker__swatches label[for=co2-scheme-lime]::before,
      #co2-scheme-sky:checked~.nuda-co2-scheme-picker__swatches label[for=co2-scheme-sky]::before,
      #co2-scheme-coral:checked~.nuda-co2-scheme-picker__swatches label[for=co2-scheme-coral]::before{box-shadow:0 0 0 3px #09090b,0 0 0 5px var(--nuda-co2-sp-dot);transform:scale(1.08)}
      .nuda-co2-scheme-picker__input:focus-visible~.nuda-co2-scheme-picker__swatches label{outline:2px solid #fff;outline-offset:2px}
      .nuda-co2-scheme-picker__preview{--nuda-co2-sp-accent:#e4ff54;display:flex;align-items:center;gap:8px;padding:.65rem .8rem;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:10px;transition:border-color .2s ease}
      .nuda-co2-scheme-picker:has(#co2-scheme-sky:checked) .nuda-co2-scheme-picker__preview{--nuda-co2-sp-accent:#7dd3fc}
      .nuda-co2-scheme-picker:has(#co2-scheme-coral:checked) .nuda-co2-scheme-picker__preview{--nuda-co2-sp-accent:#fca5a5}
      .nuda-co2-scheme-picker__dot{width:10px;height:10px;border-radius:50%;background:var(--nuda-co2-sp-accent);flex-shrink:0;transition:background .2s ease}
      .nuda-co2-scheme-picker__title{flex:1;font-size:.76rem;color:#ddd}
      .nuda-co2-scheme-picker__cta{min-height:34px;padding:.3rem .75rem;font-size:.7rem;font-weight:700;color:#09090b;background:var(--nuda-co2-sp-accent);border:none;border-radius:7px;cursor:pointer;transition:filter .2s ease,background .2s ease}
      .nuda-co2-scheme-picker__cta:hover{filter:brightness(1.1)}
      .nuda-co2-scheme-picker__cta:focus-visible{outline:2px solid #fff;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-co2-scheme-picker__swatch::before,.nuda-co2-scheme-picker__preview,.nuda-co2-scheme-picker__dot,.nuda-co2-scheme-picker__cta{transition:none}}
    `,
    preview: (
      <div className="nuda-co2-scheme-picker" aria-hidden="true">
        <input className="nuda-co2-scheme-picker__input" type="radio" name="nuda-co2-scheme" id="co2-scheme-lime" defaultChecked />
        <input className="nuda-co2-scheme-picker__input" type="radio" name="nuda-co2-scheme" id="co2-scheme-sky" />
        <input className="nuda-co2-scheme-picker__input" type="radio" name="nuda-co2-scheme" id="co2-scheme-coral" />
        <div className="nuda-co2-scheme-picker__swatches" role="radiogroup" aria-label="Colour scheme">
          <label className="nuda-co2-scheme-picker__swatch nuda-co2-scheme-picker__swatch--lime" htmlFor="co2-scheme-lime">
            <span className="nuda-co2-scheme-picker__sr">Lime</span>
          </label>
          <label className="nuda-co2-scheme-picker__swatch nuda-co2-scheme-picker__swatch--sky" htmlFor="co2-scheme-sky">
            <span className="nuda-co2-scheme-picker__sr">Sky</span>
          </label>
          <label className="nuda-co2-scheme-picker__swatch nuda-co2-scheme-picker__swatch--coral" htmlFor="co2-scheme-coral">
            <span className="nuda-co2-scheme-picker__sr">Coral</span>
          </label>
        </div>
        <div className="nuda-co2-scheme-picker__preview">
          <span className="nuda-co2-scheme-picker__dot" aria-hidden="true"></span>
          <span className="nuda-co2-scheme-picker__title">Preview card</span>
          <button className="nuda-co2-scheme-picker__cta" type="button">Continue</button>
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Colour Scheme Picker — radios drive a --custom-property through
     :has(), recolouring the live preview card. Zero JS. -->
<div class="nuda-co2-scheme-picker">
  <input class="nuda-co2-scheme-picker__input" type="radio" name="nuda-co2-scheme" id="co2-scheme-lime" checked />
  <input class="nuda-co2-scheme-picker__input" type="radio" name="nuda-co2-scheme" id="co2-scheme-sky" />
  <input class="nuda-co2-scheme-picker__input" type="radio" name="nuda-co2-scheme" id="co2-scheme-coral" />

  <div class="nuda-co2-scheme-picker__swatches" role="radiogroup" aria-label="Colour scheme">
    <label class="nuda-co2-scheme-picker__swatch nuda-co2-scheme-picker__swatch--lime" for="co2-scheme-lime">
      <span class="nuda-co2-scheme-picker__sr">Lime</span>
    </label>
    <label class="nuda-co2-scheme-picker__swatch nuda-co2-scheme-picker__swatch--sky" for="co2-scheme-sky">
      <span class="nuda-co2-scheme-picker__sr">Sky</span>
    </label>
    <label class="nuda-co2-scheme-picker__swatch nuda-co2-scheme-picker__swatch--coral" for="co2-scheme-coral">
      <span class="nuda-co2-scheme-picker__sr">Coral</span>
    </label>
  </div>

  <div class="nuda-co2-scheme-picker__preview">
    <span class="nuda-co2-scheme-picker__dot" aria-hidden="true"></span>
    <span class="nuda-co2-scheme-picker__title">Preview card</span>
    <button class="nuda-co2-scheme-picker__cta" type="button">Continue</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. ANCHOR-POSITIONED POPOVER ─────────────── */
  {
    id: "co2-anchor-popover",
    name: "Anchor-Positioned Popover",
    category: CAT,
    cssInline: `
      .nuda-co2-anchor-popover{--nuda-co2-ap-accent:#e4ff54;position:relative;display:inline-flex;font-family:inherit}
      .nuda-co2-anchor-popover__trigger{anchor-name:--nuda-co2-ap-anchor;display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:.5rem 1.1rem;font-size:.78rem;font-weight:600;color:#fff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:8px;cursor:pointer;transition:background .2s ease}
      .nuda-co2-anchor-popover__trigger:hover{background:rgba(255,255,255,.1)}
      .nuda-co2-anchor-popover__trigger:focus-visible{outline:2px solid var(--nuda-co2-ap-accent);outline-offset:2px}
      .nuda-co2-anchor-popover__tip{position:fixed;position-anchor:--nuda-co2-ap-anchor;position-area:top;inset-area:top;margin:0 0 10px;max-width:200px;padding:.6rem .75rem;font-size:.72rem;line-height:1.45;color:#09090b;background:var(--nuda-co2-ap-accent);border:none;border-radius:9px;box-shadow:0 16px 36px rgba(0,0,0,.45)}
      .nuda-co2-anchor-popover__tip:popover-open{animation:_nuda-co2anchorpopoverpop .18s ease-out}
      @keyframes _nuda-co2anchorpopoverpop{from{opacity:0;transform:translateY(4px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-co2-anchor-popover__trigger{transition:none}.nuda-co2-anchor-popover__tip:popover-open{animation:none}}
    `,
    preview: (
      <div className="nuda-co2-anchor-popover" aria-hidden="true" style={{ marginTop: 40 }}>
        <button className="nuda-co2-anchor-popover__trigger" type="button" popoverTarget="co2-ap-tip" popoverTargetAction="toggle">
          Show info
        </button>
        <div className="nuda-co2-anchor-popover__tip" id="co2-ap-tip" popover="auto">
          Positioned automatically next to its trigger using native CSS anchor positioning — zero JS.
        </div>
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Anchor-Positioned Popover — the native Popover API (popover /
     popovertarget) plus CSS anchor positioning (anchor-name /
     position-anchor) place and toggle the panel. Esc and outside-click
     close it automatically. Zero JS. -->
<div class="nuda-co2-anchor-popover">
  <button class="nuda-co2-anchor-popover__trigger" type="button"
          popovertarget="co2-ap-tip" popovertargetaction="toggle">
    Show info
  </button>
  <div class="nuda-co2-anchor-popover__tip" id="co2-ap-tip" popover="auto">
    Positioned automatically next to its trigger using native CSS anchor positioning — zero JS.
  </div>
</div>`,
      },
    ],
  },
];
