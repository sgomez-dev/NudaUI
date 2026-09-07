import type { NudaComponent } from "./types";

const CAT = "Pricing Tables";

export const pricingExtra: NudaComponent[] = [
  /* ─────────────── 1. Usage Slider Pricing ─────────────── */
  {
    id: "pr2-usage-slider",
    name: "Usage Slider Pricing",
    category: CAT,
    preview: (
      <div className="nuda-pr2-usage-slider">
        <div className="nuda-pr2-usage-slider__head">
          <span className="nuda-pr2-usage-slider__label">Seats</span>
          <span className="nuda-pr2-usage-slider__count">10</span>
        </div>
        <input
          className="nuda-pr2-usage-slider__range"
          type="range"
          min={1}
          max={50}
          defaultValue={10}
          aria-label="Number of seats"
        />
        <div className="nuda-pr2-usage-slider__price">
          <b>$100</b>
          <i>/mo</i>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-pr2-usage-slider{display:flex;flex-direction:column;gap:8px;padding:14px;width:180px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px}
      .nuda-pr2-usage-slider__head{display:flex;align-items:baseline;justify-content:space-between}
      .nuda-pr2-usage-slider__label{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-pr2-usage-slider__count{font:800 13px ui-sans-serif,system-ui;color:#e4ff54;font-variant-numeric:tabular-nums}
      .nuda-pr2-usage-slider__range{-webkit-appearance:none;appearance:none;width:100%;height:24px;background:transparent;cursor:pointer;outline-offset:4px}
      .nuda-pr2-usage-slider__range::-webkit-slider-runnable-track{height:4px;border-radius:999px;background:rgba(255,255,255,.1)}
      .nuda-pr2-usage-slider__range::-moz-range-track{height:4px;border-radius:999px;background:rgba(255,255,255,.1)}
      .nuda-pr2-usage-slider__range::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;margin-top:-6px;border-radius:50%;background:#e4ff54;border:2px solid #09090b;box-shadow:0 0 0 1px rgba(228,255,84,.4);cursor:pointer;transition:transform .2s}
      .nuda-pr2-usage-slider__range::-webkit-slider-thumb:hover{transform:scale(1.15)}
      .nuda-pr2-usage-slider__range::-moz-range-thumb{width:16px;height:16px;border-radius:50%;background:#e4ff54;border:2px solid #09090b;cursor:pointer}
      .nuda-pr2-usage-slider__range:focus-visible{outline:2px solid #e4ff54}
      .nuda-pr2-usage-slider__price{display:flex;align-items:baseline;gap:2px}
      .nuda-pr2-usage-slider__price b{font:800 22px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-pr2-usage-slider__price i{font:500 10px ui-sans-serif,system-ui;font-style:normal;color:#63636e}
      .nuda-pr2-usage-slider__price.is-updated b{animation:nuda-pr2-usage-slider-pop .35s ease}
      @keyframes nuda-pr2-usage-slider-pop{0%{transform:scale(1.15);filter:drop-shadow(0 0 8px rgba(228,255,84,.6))}100%{transform:scale(1);filter:drop-shadow(0 0 0 rgba(228,255,84,0))}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pr2-usage-slider__price.is-updated b{animation: none !important}
        .nuda-pr2-usage-slider__range::-webkit-slider-thumb{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Usage Slider Pricing — drag seats, price recalculates -->
<div class="nuda-pr2-usage-slider">
  <div class="nuda-pr2-usage-slider__head">
    <span class="nuda-pr2-usage-slider__label">Seats</span>
    <span class="nuda-pr2-usage-slider__count">10</span>
  </div>
  <input class="nuda-pr2-usage-slider__range" type="range" min="1" max="50" value="10" aria-label="Number of seats" />
  <div class="nuda-pr2-usage-slider__price">
    <b>$100</b><i>/mo</i>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Usage Slider Pricing — recomputes price on drag. */

(function () {
  var root = document.querySelector('.nuda-pr2-usage-slider');
  if (!root) return;
  var range = root.querySelector('.nuda-pr2-usage-slider__range');
  var count = root.querySelector('.nuda-pr2-usage-slider__count');
  var priceEl = root.querySelector('.nuda-pr2-usage-slider__price');
  var priceB = priceEl.querySelector('b');
  var perSeat = 10;

  range.addEventListener('input', function () {
    var seats = Number(range.value);
    count.textContent = seats;
    priceB.textContent = '$' + (seats * perSeat);
    priceEl.classList.remove('is-updated');
    void priceEl.offsetWidth; // restart animation
    priceEl.classList.add('is-updated');
  });
})();`,
      },
    ],
  },

  /* ─────────────── 2. Metered Usage Calculator ─────────────── */
  {
    id: "pr2-metered-calc",
    name: "Metered Usage Calculator",
    category: CAT,
    preview: (
      <div className="nuda-pr2-metered-calc">
        <span className="nuda-pr2-metered-calc__name">Pay as you go</span>
        <span className="nuda-pr2-metered-calc__rate">
          $0.002 <i>/request</i>
        </span>
        <div className="nuda-pr2-metered-calc__bars" aria-hidden="true">
          <span className="nuda-pr2-metered-calc__bar" style={{ ["--h" as string]: 0.3 }}></span>
          <span className="nuda-pr2-metered-calc__bar" style={{ ["--h" as string]: 0.55 }}></span>
          <span className="nuda-pr2-metered-calc__bar" style={{ ["--h" as string]: 0.8 }}></span>
          <span className="nuda-pr2-metered-calc__bar" style={{ ["--h" as string]: 0.45 }}></span>
          <span className="nuda-pr2-metered-calc__bar" style={{ ["--h" as string]: 1 }}></span>
        </div>
        <div className="nuda-pr2-metered-calc__total">
          Est. <b>$48.20</b>
          <i>/mo</i>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-pr2-metered-calc{display:flex;flex-direction:column;gap:8px;padding:14px;width:170px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px}
      .nuda-pr2-metered-calc__name{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-pr2-metered-calc__rate{font:700 12px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-pr2-metered-calc__rate i{font-style:normal;font-weight:500;color:#63636e;font-size:10px}
      .nuda-pr2-metered-calc__bars{display:flex;align-items:flex-end;gap:4px;height:34px}
      .nuda-pr2-metered-calc__bar{flex:1;height:100%;border-radius:2px;background:linear-gradient(180deg,#e4ff54,rgba(228,255,84,.25));transform:scaleY(0);transform-origin:bottom;animation:nuda-pr2-metered-calc-grow .5s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-pr2-metered-calc__bar:nth-child(1){animation-delay:0s}
      .nuda-pr2-metered-calc__bar:nth-child(2){animation-delay:.06s}
      .nuda-pr2-metered-calc__bar:nth-child(3){animation-delay:.12s}
      .nuda-pr2-metered-calc__bar:nth-child(4){animation-delay:.18s}
      .nuda-pr2-metered-calc__bar:nth-child(5){animation-delay:.24s}
      .nuda-pr2-metered-calc__total{margin-top:2px;padding-top:8px;border-top:1px solid rgba(255,255,255,.08);font:600 10px ui-sans-serif,system-ui;color:#a1a1aa}
      .nuda-pr2-metered-calc__total b{color:#fafafa;font-size:15px;font-variant-numeric:tabular-nums;margin:0 2px}
      .nuda-pr2-metered-calc__total i{font-style:normal;color:#63636e}
      @keyframes nuda-pr2-metered-calc-grow{to{transform:scaleY(var(--h))}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pr2-metered-calc__bar{animation: none !important;transform:scaleY(var(--h))}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Metered Usage Calculator — bars grow in, then the estimate settles -->
<div class="nuda-pr2-metered-calc">
  <span class="nuda-pr2-metered-calc__name">Pay as you go</span>
  <span class="nuda-pr2-metered-calc__rate">$0.002 <i>/request</i></span>
  <div class="nuda-pr2-metered-calc__bars" aria-hidden="true">
    <span class="nuda-pr2-metered-calc__bar" style="--h:.3"></span>
    <span class="nuda-pr2-metered-calc__bar" style="--h:.55"></span>
    <span class="nuda-pr2-metered-calc__bar" style="--h:.8"></span>
    <span class="nuda-pr2-metered-calc__bar" style="--h:.45"></span>
    <span class="nuda-pr2-metered-calc__bar" style="--h:1"></span>
  </div>
  <div class="nuda-pr2-metered-calc__total">Est. <b>$48.20</b><i>/mo</i></div>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Gradient Beam Tier ─────────────── */
  {
    id: "pr2-beam-tier",
    name: "Gradient Beam Tier",
    category: CAT,
    preview: (
      <div className="nuda-pr2-beam-tier">
        <span className="nuda-pr2-beam-tier__beam" aria-hidden="true"></span>
        <div className="nuda-pr2-beam-tier__inner">
          <span className="nuda-pr2-beam-tier__name">Growth</span>
          <div className="nuda-pr2-beam-tier__price">
            <b>$39</b>
            <i>/mo</i>
          </div>
          <button className="nuda-pr2-beam-tier__btn" type="button">
            Choose Growth
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-pr2-beam-tier{position:relative;width:160px;padding:1px;border-radius:12px;transition:transform .3s}
      .nuda-pr2-beam-tier:hover{transform:translateY(-4px)}
      .nuda-pr2-beam-tier__beam{position:absolute;inset:0;border-radius:12px;background:conic-gradient(from 0deg,#e4ff54,transparent 30%,transparent 70%,#e4ff54);opacity:0;transition:opacity .3s}
      .nuda-pr2-beam-tier:hover .nuda-pr2-beam-tier__beam{opacity:1;animation:nuda-pr2-beam-tier-spin 2.5s linear infinite}
      .nuda-pr2-beam-tier__inner{position:relative;background:#111113;border:1px solid rgba(255,255,255,.08);border-radius:11px;padding:14px;display:flex;flex-direction:column;gap:6px}
      .nuda-pr2-beam-tier__name{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-pr2-beam-tier__price{display:flex;align-items:baseline;gap:2px}
      .nuda-pr2-beam-tier__price b{font:800 22px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-pr2-beam-tier__price i{font:500 10px ui-sans-serif,system-ui;font-style:normal;color:#63636e}
      .nuda-pr2-beam-tier__btn{margin-top:4px;min-height:44px;padding:0 14px;display:inline-flex;align-items:center;justify-content:center;background:transparent;border:1px solid rgba(255,255,255,.1);color:#fafafa;border-radius:8px;font:600 11px ui-sans-serif,system-ui;cursor:pointer;transition:background .25s,border-color .25s,color .25s}
      .nuda-pr2-beam-tier__btn:hover{background:rgba(228,255,84,.1);border-color:#e4ff54;color:#e4ff54}
      .nuda-pr2-beam-tier__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-pr2-beam-tier-spin{to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pr2-beam-tier,.nuda-pr2-beam-tier__beam,.nuda-pr2-beam-tier__btn{transition:none}
        .nuda-pr2-beam-tier:hover{transform:none}
        .nuda-pr2-beam-tier:hover .nuda-pr2-beam-tier__beam{animation: none !important;opacity:.6}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Gradient Beam Tier — spinning conic beam appears + card lifts on hover -->
<div class="nuda-pr2-beam-tier">
  <span class="nuda-pr2-beam-tier__beam" aria-hidden="true"></span>
  <div class="nuda-pr2-beam-tier__inner">
    <span class="nuda-pr2-beam-tier__name">Growth</span>
    <div class="nuda-pr2-beam-tier__price"><b>$39</b><i>/mo</i></div>
    <button class="nuda-pr2-beam-tier__btn" type="button">Choose Growth</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Enterprise Contact Card ─────────────── */
  {
    id: "pr2-enterprise",
    name: "Enterprise Contact Card",
    category: CAT,
    preview: (
      <div className="nuda-pr2-enterprise">
        <span className="nuda-pr2-enterprise__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 21 V9 L12 4 L20 9 V21" />
            <path d="M9 21 V14 H15 V21" />
          </svg>
        </span>
        <span className="nuda-pr2-enterprise__name">Enterprise</span>
        <p className="nuda-pr2-enterprise__desc">Custom limits, SLAs &amp; onboarding.</p>
        <ul className="nuda-pr2-enterprise__list">
          <li>Dedicated support</li>
          <li>Custom contract</li>
        </ul>
        <button className="nuda-pr2-enterprise__btn" type="button">
          Contact sales
        </button>
      </div>
    ),
    cssInline: `
      .nuda-pr2-enterprise{display:flex;flex-direction:column;gap:6px;padding:14px;width:170px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px;transition:border-color .3s}
      .nuda-pr2-enterprise:hover{border-color:rgba(228,255,84,.25)}
      .nuda-pr2-enterprise__icon{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:8px;background:rgba(228,255,84,.1);color:#e4ff54;transition:transform .3s,box-shadow .3s}
      .nuda-pr2-enterprise:hover .nuda-pr2-enterprise__icon{transform:scale(1.08);box-shadow:0 0 16px rgba(228,255,84,.35)}
      .nuda-pr2-enterprise__icon svg{width:16px;height:16px}
      .nuda-pr2-enterprise__name{font:700 13px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-pr2-enterprise__desc{font:500 10px ui-sans-serif,system-ui;color:#a1a1aa;margin:0}
      .nuda-pr2-enterprise__list{list-style:none;margin:2px 0 0;padding:0;display:flex;flex-direction:column;gap:3px}
      .nuda-pr2-enterprise__list li{font:500 10px ui-sans-serif,system-ui;color:#cfcfcf;padding-left:12px;position:relative}
      .nuda-pr2-enterprise__list li::before{content:"";position:absolute;left:0;top:6px;width:4px;height:4px;border-radius:50%;background:#e4ff54}
      .nuda-pr2-enterprise__btn{margin-top:6px;min-height:44px;padding:0 14px;display:inline-flex;align-items:center;justify-content:center;background:transparent;border:1px solid rgba(255,255,255,.12);color:#fafafa;border-radius:8px;font:700 11px ui-sans-serif,system-ui;cursor:pointer;transition:background .25s,border-color .25s,color .25s}
      .nuda-pr2-enterprise__btn:hover{background:#e4ff54;border-color:#e4ff54;color:#09090b}
      .nuda-pr2-enterprise__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media (prefers-reduced-motion:reduce){
        .nuda-pr2-enterprise,.nuda-pr2-enterprise__icon,.nuda-pr2-enterprise__btn{transition:none}
        .nuda-pr2-enterprise:hover .nuda-pr2-enterprise__icon{transform:none;box-shadow:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Enterprise Contact Card — icon glows on hover, CTA inverts to accent -->
<div class="nuda-pr2-enterprise">
  <span class="nuda-pr2-enterprise__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 21 V9 L12 4 L20 9 V21" />
      <path d="M9 21 V14 H15 V21" />
    </svg>
  </span>
  <span class="nuda-pr2-enterprise__name">Enterprise</span>
  <p class="nuda-pr2-enterprise__desc">Custom limits, SLAs &amp; onboarding.</p>
  <ul class="nuda-pr2-enterprise__list">
    <li>Dedicated support</li>
    <li>Custom contract</li>
  </ul>
  <button class="nuda-pr2-enterprise__btn" type="button">Contact sales</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Trial Progress Card ─────────────── */
  {
    id: "pr2-trial-progress",
    name: "Trial Progress Card",
    category: CAT,
    preview: (
      <div className="nuda-pr2-trial-progress">
        <div className="nuda-pr2-trial-progress__head">
          <span className="nuda-pr2-trial-progress__name">Pro Trial</span>
          <span className="nuda-pr2-trial-progress__badge">Day 5 of 14</span>
        </div>
        <div
          className="nuda-pr2-trial-progress__bar"
          role="progressbar"
          aria-valuenow={36}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Trial progress"
        >
          <span className="nuda-pr2-trial-progress__fill" style={{ ["--p" as string]: 0.36 }}></span>
        </div>
        <p className="nuda-pr2-trial-progress__meta">9 days left · then $29/mo</p>
        <button className="nuda-pr2-trial-progress__btn" type="button">
          Add payment method
        </button>
      </div>
    ),
    cssInline: `
      .nuda-pr2-trial-progress{display:flex;flex-direction:column;gap:8px;padding:14px;width:180px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px}
      .nuda-pr2-trial-progress__head{display:flex;align-items:center;justify-content:space-between}
      .nuda-pr2-trial-progress__name{font:700 11px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-pr2-trial-progress__badge{font:700 8px ui-sans-serif,system-ui;color:#e4ff54;background:rgba(228,255,84,.12);padding:2px 6px;border-radius:999px;text-transform:uppercase;letter-spacing:.04em}
      .nuda-pr2-trial-progress__bar{position:relative;height:6px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}
      .nuda-pr2-trial-progress__fill{position:absolute;inset:0;transform:scaleX(0);transform-origin:left;border-radius:999px;background:linear-gradient(90deg,#e4ff54,#a8c93a,#e4ff54);background-size:200% 100%;animation:nuda-pr2-trial-progress-grow .6s cubic-bezier(.4,0,.2,1) .1s forwards,nuda-pr2-trial-progress-shimmer 2.4s linear 1s infinite}
      .nuda-pr2-trial-progress__meta{font:500 10px ui-sans-serif,system-ui;color:#a1a1aa;margin:0}
      .nuda-pr2-trial-progress__btn{min-height:44px;padding:0 14px;display:inline-flex;align-items:center;justify-content:center;background:#e4ff54;border:none;color:#09090b;border-radius:8px;font:700 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s,box-shadow .25s}
      .nuda-pr2-trial-progress__btn:hover{transform:translateY(-1px);box-shadow:0 0 16px rgba(228,255,84,.4)}
      .nuda-pr2-trial-progress__btn:focus-visible{outline:2px solid #fafafa;outline-offset:2px}
      @keyframes nuda-pr2-trial-progress-grow{to{transform:scaleX(var(--p))}}
      @keyframes nuda-pr2-trial-progress-shimmer{to{background-position:-200% 0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pr2-trial-progress__fill{animation: none !important;transform:scaleX(var(--p))}
        .nuda-pr2-trial-progress__btn{transition:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Trial Progress Card — fill grows in then shimmers gently -->
<div class="nuda-pr2-trial-progress">
  <div class="nuda-pr2-trial-progress__head">
    <span class="nuda-pr2-trial-progress__name">Pro Trial</span>
    <span class="nuda-pr2-trial-progress__badge">Day 5 of 14</span>
  </div>
  <div class="nuda-pr2-trial-progress__bar" role="progressbar" aria-valuenow="36" aria-valuemin="0" aria-valuemax="100" aria-label="Trial progress">
    <span class="nuda-pr2-trial-progress__fill" style="--p:.36"></span>
  </div>
  <p class="nuda-pr2-trial-progress__meta">9 days left · then $29/mo</p>
  <button class="nuda-pr2-trial-progress__btn" type="button">Add payment method</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Add-on Checklist Total ─────────────── */
  {
    id: "pr2-addon-total",
    name: "Add-on Checklist Total",
    category: CAT,
    preview: (
      <div className="nuda-pr2-addon-total">
        <div className="nuda-pr2-addon-total__row">
          <label className="nuda-pr2-addon-total__label">
            <input className="nuda-pr2-addon-total__checkbox" type="checkbox" defaultChecked data-price="10" />
            Extra seats
          </label>
          <span className="nuda-pr2-addon-total__price">+$10</span>
        </div>
        <div className="nuda-pr2-addon-total__row">
          <label className="nuda-pr2-addon-total__label">
            <input className="nuda-pr2-addon-total__checkbox" type="checkbox" data-price="15" />
            Priority support
          </label>
          <span className="nuda-pr2-addon-total__price">+$15</span>
        </div>
        <div className="nuda-pr2-addon-total__row">
          <label className="nuda-pr2-addon-total__label">
            <input className="nuda-pr2-addon-total__checkbox" type="checkbox" defaultChecked data-price="8" />
            Extra storage
          </label>
          <span className="nuda-pr2-addon-total__price">+$8</span>
        </div>
        <div className="nuda-pr2-addon-total__divider"></div>
        <div className="nuda-pr2-addon-total__total">
          Total <b>$38</b>
          <i>/mo</i>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-pr2-addon-total{display:flex;flex-direction:column;gap:8px;padding:14px;width:190px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px}
      .nuda-pr2-addon-total__row{display:flex;align-items:center;justify-content:space-between;gap:8px}
      .nuda-pr2-addon-total__label{display:flex;align-items:center;gap:8px;font:500 10px ui-sans-serif,system-ui;color:#cfcfcf;cursor:pointer;min-height:28px}
      .nuda-pr2-addon-total__checkbox{appearance:none;-webkit-appearance:none;width:16px;height:16px;flex-shrink:0;border-radius:4px;border:1px solid rgba(255,255,255,.2);background:transparent;cursor:pointer;position:relative;transition:background .2s,border-color .2s,transform .2s}
      .nuda-pr2-addon-total__checkbox:checked{background:#e4ff54;border-color:#e4ff54;transform:scale(1.05)}
      .nuda-pr2-addon-total__checkbox:checked::after{content:"";position:absolute;left:3px;top:0;width:4px;height:8px;border:solid #09090b;border-width:0 2px 2px 0;transform:rotate(45deg)}
      .nuda-pr2-addon-total__checkbox:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-pr2-addon-total__price{font:600 10px ui-sans-serif,system-ui;color:#a1a1aa;font-variant-numeric:tabular-nums}
      .nuda-pr2-addon-total__divider{height:1px;background:rgba(255,255,255,.08);margin:2px 0}
      .nuda-pr2-addon-total__total{font:600 10px ui-sans-serif,system-ui;color:#a1a1aa;display:flex;align-items:baseline;gap:2px}
      .nuda-pr2-addon-total__total b{font:800 16px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums}
      .nuda-pr2-addon-total__total.is-updated b{animation:nuda-pr2-addon-total-pop .35s ease}
      @keyframes nuda-pr2-addon-total-pop{0%{transform:scale(1.15);filter:drop-shadow(0 0 6px rgba(228,255,84,.6))}100%{transform:scale(1);filter:drop-shadow(0 0 0 rgba(228,255,84,0))}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pr2-addon-total__checkbox{transition:none}
        .nuda-pr2-addon-total__total.is-updated b{animation: none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Add-on Checklist Total — checking items updates the running total -->
<div class="nuda-pr2-addon-total">
  <div class="nuda-pr2-addon-total__row">
    <label class="nuda-pr2-addon-total__label">
      <input class="nuda-pr2-addon-total__checkbox" type="checkbox" checked data-price="10" />
      Extra seats
    </label>
    <span class="nuda-pr2-addon-total__price">+$10</span>
  </div>
  <div class="nuda-pr2-addon-total__row">
    <label class="nuda-pr2-addon-total__label">
      <input class="nuda-pr2-addon-total__checkbox" type="checkbox" data-price="15" />
      Priority support
    </label>
    <span class="nuda-pr2-addon-total__price">+$15</span>
  </div>
  <div class="nuda-pr2-addon-total__row">
    <label class="nuda-pr2-addon-total__label">
      <input class="nuda-pr2-addon-total__checkbox" type="checkbox" checked data-price="8" />
      Extra storage
    </label>
    <span class="nuda-pr2-addon-total__price">+$8</span>
  </div>
  <div class="nuda-pr2-addon-total__divider"></div>
  <div class="nuda-pr2-addon-total__total">Total <b>$38</b><i>/mo</i></div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Add-on Checklist Total — sums the base plan + checked add-ons. */

(function () {
  var card = document.querySelector('.nuda-pr2-addon-total');
  if (!card) return;
  var base = 20;
  var boxes = card.querySelectorAll('.nuda-pr2-addon-total__checkbox');
  var totalEl = card.querySelector('.nuda-pr2-addon-total__total');
  var totalB = totalEl.querySelector('b');

  function recalc() {
    var sum = base;
    boxes.forEach(function (b) {
      if (b.checked) sum += Number(b.dataset.price || 0);
    });
    totalB.textContent = '$' + sum;
    totalEl.classList.remove('is-updated');
    void totalEl.offsetWidth; // restart animation
    totalEl.classList.add('is-updated');
  }

  boxes.forEach(function (b) { b.addEventListener('change', recalc); });
})();`,
      },
    ],
  },

  /* ─────────────── 7. Credit Pack Grid ─────────────── */
  {
    id: "pr2-credit-packs",
    name: "Credit Pack Grid",
    category: CAT,
    preview: (
      <div className="nuda-pr2-credit-packs" role="radiogroup" aria-label="Credit pack">
        <button className="nuda-pr2-credit-packs__pack" type="button" role="radio" aria-checked="false">
          <span className="nuda-pr2-credit-packs__amount">500</span>
          <span className="nuda-pr2-credit-packs__price">$5</span>
        </button>
        <button className="nuda-pr2-credit-packs__pack is-selected" type="button" role="radio" aria-checked="true">
          <span className="nuda-pr2-credit-packs__flag">Best value</span>
          <span className="nuda-pr2-credit-packs__amount">2,000</span>
          <span className="nuda-pr2-credit-packs__price">$15</span>
        </button>
        <button className="nuda-pr2-credit-packs__pack" type="button" role="radio" aria-checked="false">
          <span className="nuda-pr2-credit-packs__amount">5,000</span>
          <span className="nuda-pr2-credit-packs__price">$32</span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-pr2-credit-packs{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;width:220px}
      .nuda-pr2-credit-packs__pack{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;min-height:52px;padding:8px 4px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:#fafafa;cursor:pointer;transition:transform .2s,border-color .25s,box-shadow .25s}
      .nuda-pr2-credit-packs__pack:hover{transform:translateY(-2px);border-color:rgba(228,255,84,.3)}
      .nuda-pr2-credit-packs__pack:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-pr2-credit-packs__pack.is-selected{border-color:#e4ff54;box-shadow:0 0 0 1px rgba(228,255,84,.4),0 8px 20px -6px rgba(228,255,84,.3)}
      .nuda-pr2-credit-packs__pack.is-selected.is-picked{animation:nuda-pr2-credit-packs-pop .35s cubic-bezier(.34,1.56,.64,1)}
      .nuda-pr2-credit-packs__flag{position:absolute;top:-8px;left:50%;transform:translateX(-50%);padding:1px 6px;background:#e4ff54;color:#09090b;font:800 7px ui-sans-serif,system-ui;text-transform:uppercase;letter-spacing:.04em;border-radius:999px;white-space:nowrap}
      .nuda-pr2-credit-packs__amount{font:800 13px ui-sans-serif,system-ui;font-variant-numeric:tabular-nums}
      .nuda-pr2-credit-packs__price{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa}
      @keyframes nuda-pr2-credit-packs-pop{0%{transform:scale(.92)}50%{transform:scale(1.05)}100%{transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pr2-credit-packs__pack{transition:none}
        .nuda-pr2-credit-packs__pack.is-selected.is-picked{animation: none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Credit Pack Grid — selecting a pack pops the card and flags best value -->
<div class="nuda-pr2-credit-packs" role="radiogroup" aria-label="Credit pack">
  <button class="nuda-pr2-credit-packs__pack" type="button" role="radio" aria-checked="false">
    <span class="nuda-pr2-credit-packs__amount">500</span>
    <span class="nuda-pr2-credit-packs__price">$5</span>
  </button>
  <button class="nuda-pr2-credit-packs__pack is-selected" type="button" role="radio" aria-checked="true">
    <span class="nuda-pr2-credit-packs__flag">Best value</span>
    <span class="nuda-pr2-credit-packs__amount">2,000</span>
    <span class="nuda-pr2-credit-packs__price">$15</span>
  </button>
  <button class="nuda-pr2-credit-packs__pack" type="button" role="radio" aria-checked="false">
    <span class="nuda-pr2-credit-packs__amount">5,000</span>
    <span class="nuda-pr2-credit-packs__price">$32</span>
  </button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Credit Pack Grid — click a pack to select it (radio behavior). */

(function () {
  var group = document.querySelector('.nuda-pr2-credit-packs');
  if (!group) return;
  var packs = group.querySelectorAll('.nuda-pr2-credit-packs__pack');

  packs.forEach(function (p) {
    p.addEventListener('click', function () {
      packs.forEach(function (x) {
        x.classList.remove('is-selected', 'is-picked');
        x.setAttribute('aria-checked', 'false');
      });
      p.classList.add('is-selected', 'is-picked');
      p.setAttribute('aria-checked', 'true');
      setTimeout(function () { p.classList.remove('is-picked'); }, 400);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 8. Count-Up Price Reveal ─────────────── */
  {
    id: "pr2-count-up",
    name: "Count-Up Price Reveal",
    category: CAT,
    preview: (
      <div className="nuda-pr2-count-up is-visible is-done">
        <span className="nuda-pr2-count-up__label">Starting at</span>
        <div className="nuda-pr2-count-up__price">
          <b className="nuda-pr2-count-up__num" data-target="49">49</b>
          <i>/mo</i>
        </div>
        <span className="nuda-pr2-count-up__sub">Billed annually</span>
      </div>
    ),
    cssInline: `
      .nuda-pr2-count-up{display:flex;flex-direction:column;gap:4px;padding:14px;width:150px;opacity:0;transform:translateY(10px);transition:opacity .5s ease,transform .5s ease}
      .nuda-pr2-count-up.is-visible{opacity:1;transform:translateY(0)}
      .nuda-pr2-count-up__label{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-pr2-count-up__price{display:flex;align-items:baseline;gap:2px}
      .nuda-pr2-count-up__price i{font:500 11px ui-sans-serif,system-ui;font-style:normal;color:#63636e}
      .nuda-pr2-count-up__num{font:800 28px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-pr2-count-up__num::before{content:"$"}
      .nuda-pr2-count-up__sub{font:500 10px ui-sans-serif,system-ui;color:#63636e}
      .nuda-pr2-count-up.is-done .nuda-pr2-count-up__num{animation:nuda-pr2-count-up-flash .5s ease}
      @keyframes nuda-pr2-count-up-flash{0%{filter:drop-shadow(0 0 0 rgba(228,255,84,0))}40%{filter:drop-shadow(0 0 10px rgba(228,255,84,.8))}100%{filter:drop-shadow(0 0 0 rgba(228,255,84,0))}}
      @media (prefers-reduced-motion:reduce){
        .nuda-pr2-count-up{transition:none;opacity:1;transform:none}
        .nuda-pr2-count-up.is-done .nuda-pr2-count-up__num{animation: none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Count-Up Price Reveal — fades in on scroll, number counts up to target -->
<div class="nuda-pr2-count-up">
  <span class="nuda-pr2-count-up__label">Starting at</span>
  <div class="nuda-pr2-count-up__price">
    <b class="nuda-pr2-count-up__num" data-target="49">0</b><i>/mo</i>
  </div>
  <span class="nuda-pr2-count-up__sub">Billed annually</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Count-Up Price Reveal — reveals + counts up once scrolled into view. */

(function () {
  var card = document.querySelector('.nuda-pr2-count-up');
  if (!card) return;
  var numEl = card.querySelector('.nuda-pr2-count-up__num');
  var target = Number(numEl.dataset.target || numEl.textContent);
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function run() {
    card.classList.add('is-visible');
    if (reduce) {
      numEl.textContent = target;
      card.classList.add('is-done');
      return;
    }
    var start = null;
    var duration = 900;
    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min(1, (ts - start) / duration);
      numEl.textContent = Math.round(progress * target);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        card.classList.add('is-done');
      }
    }
    requestAnimationFrame(step);
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        run();
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(card);
})();`,
      },
    ],
  },
];
