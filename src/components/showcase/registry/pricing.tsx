import type { NudaComponent } from "./types";

export const pricing: NudaComponent[] = [
  /* ─────────────── 1. Pricing Card ─────────────── */
  {
    id: "pricing-card",
    name: "Pricing Card",
    category: "Pricing Tables",
    preview: (
      <div className="nuda-pcard">
        <span className="nuda-pcard__name">Starter</span>
        <div className="nuda-pcard__price"><b>$9</b><i>/mo</i></div>
        <p className="nuda-pcard__desc">For small teams</p>
        <button className="nuda-pcard__btn" type="button">Get started</button>
      </div>
    ),
    cssInline: `
      .nuda-pcard{display:flex;flex-direction:column;gap:6px;padding:14px;width:140px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:10px;transition:transform .3s,border-color .3s,box-shadow .3s}
      .nuda-pcard:hover{transform:translateY(-2px);border-color:rgba(228,255,84,.2);box-shadow:0 12px 32px -8px rgba(228,255,84,.15)}
      .nuda-pcard__name{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-pcard__price{display:flex;align-items:baseline;gap:2px}
      .nuda-pcard__price b{font:800 22px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-pcard__price i{font:500 10px ui-sans-serif,system-ui;font-style:normal;color:#63636e}
      .nuda-pcard__desc{font:500 10px ui-sans-serif,system-ui;color:#a1a1aa;margin:0}
      .nuda-pcard__btn{margin-top:4px;padding:5px 10px;background:transparent;border:1px solid rgba(255,255,255,.1);color:#fafafa;border-radius:6px;font:600 10px ui-sans-serif,system-ui;cursor:pointer;transition:background .25s,border-color .25s}
      .nuda-pcard__btn:hover{background:rgba(228,255,84,.1);border-color:#e4ff54;color:#e4ff54}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pricing Card — single tier -->
<div class="nuda-pcard">
  <span class="nuda-pcard__name">Starter</span>
  <div class="nuda-pcard__price"><b>$9</b><i>/mo</i></div>
  <p class="nuda-pcard__desc">For small teams</p>
  <button class="nuda-pcard__btn" type="button">Get started</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pricing Card
   Plan card that lifts + glows on hover. CTA is ghost → accent on hover.
   Customize: --pcard-accent, --pcard-bg */

.nuda-pcard {
  --pcard-accent: #e4ff54;
  --pcard-bg: rgba(255, 255, 255, 0.03);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  width: 100%;
  max-width: 280px;
  background: var(--pcard-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.nuda-pcard:hover {
  transform: translateY(-3px);
  border-color: rgba(228, 255, 84, 0.2);
  box-shadow: 0 16px 40px -8px rgba(228, 255, 84, 0.15);
}

.nuda-pcard__name {
  font: 600 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nuda-pcard__price {
  display: flex;
  align-items: baseline;
  gap: 3px;
}

.nuda-pcard__price b {
  font: 800 2.5rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.nuda-pcard__price i {
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  font-style: normal;
  color: #63636e;
}

.nuda-pcard__desc {
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  margin: 0;
}

.nuda-pcard__btn {
  margin-top: 8px;
  padding: 10px 16px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fafafa;
  border-radius: 8px;
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: background 0.25s, border-color 0.25s, color 0.25s;
}

.nuda-pcard__btn:hover {
  background: rgba(228, 255, 84, 0.1);
  border-color: var(--pcard-accent);
  color: var(--pcard-accent);
}`,
      },
    ],
  },

  /* ─────────────── 2. Popular Tier ─────────────── */
  {
    id: "popular-tier",
    name: "Popular Tier",
    category: "Pricing Tables",
    preview: (
      <div className="nuda-popt">
        <span className="nuda-popt__badge">Popular</span>
        <span className="nuda-popt__name">Pro</span>
        <div className="nuda-popt__price"><b>$29</b><i>/mo</i></div>
        <p className="nuda-popt__desc">Most teams pick this.</p>
        <button className="nuda-popt__btn" type="button">Upgrade</button>
      </div>
    ),
    cssInline: `
      .nuda-popt{position:relative;display:flex;flex-direction:column;gap:6px;padding:14px;width:140px;background:linear-gradient(180deg,rgba(228,255,84,.1),rgba(228,255,84,.02));border:1px solid rgba(228,255,84,.3);border-radius:10px;transform:scale(1.02);box-shadow:0 12px 32px -8px rgba(228,255,84,.25)}
      .nuda-popt::before{content:"";position:absolute;inset:-1px;border-radius:10px;background:linear-gradient(135deg,rgba(228,255,84,.5),transparent 50%);opacity:0;transition:opacity .3s;pointer-events:none;animation:_pp-glow 2.4s ease-in-out infinite}
      .nuda-popt__badge{position:absolute;top:-7px;left:50%;transform:translateX(-50%);padding:1px 8px;background:#e4ff54;color:#09090b;font:800 8px ui-sans-serif,system-ui;text-transform:uppercase;letter-spacing:.08em;border-radius:999px;box-shadow:0 0 8px rgba(228,255,84,.5)}
      .nuda-popt__name{font:600 9px ui-sans-serif,system-ui;color:#e4ff54;text-transform:uppercase;letter-spacing:.08em}
      .nuda-popt__price{display:flex;align-items:baseline;gap:2px}
      .nuda-popt__price b{font:800 22px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-popt__price i{font:500 10px ui-sans-serif,system-ui;font-style:normal;color:#a1a1aa}
      .nuda-popt__desc{font:500 10px ui-sans-serif,system-ui;color:#a1a1aa;margin:0}
      .nuda-popt__btn{margin-top:4px;padding:5px 10px;background:#e4ff54;border:none;color:#09090b;border-radius:6px;font:700 10px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s,box-shadow .25s}
      .nuda-popt__btn:hover{transform:translateY(-1px);box-shadow:0 0 16px rgba(228,255,84,.5)}
      @keyframes _pp-glow{0%,100%{opacity:.4}50%{opacity:.8}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Popular Tier — highlighted plan with badge + glow -->
<div class="nuda-popt">
  <span class="nuda-popt__badge">Popular</span>
  <span class="nuda-popt__name">Pro</span>
  <div class="nuda-popt__price"><b>$29</b><i>/mo</i></div>
  <p class="nuda-popt__desc">Most teams pick this.</p>
  <button class="nuda-popt__btn" type="button">Upgrade</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Popular Tier
   Highlighted plan: gradient bg, accent border, glow, "Popular" badge.
   Customize: --popt-accent */

.nuda-popt {
  --popt-accent: #e4ff54;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  width: 100%;
  max-width: 280px;
  background: linear-gradient(180deg, rgba(228, 255, 84, 0.1), rgba(228, 255, 84, 0.02));
  border: 1px solid rgba(228, 255, 84, 0.3);
  border-radius: 14px;
  transform: scale(1.04);
  box-shadow: 0 16px 40px -8px rgba(228, 255, 84, 0.25);
}

.nuda-popt__badge {
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 3px 12px;
  background: var(--popt-accent);
  color: #09090b;
  font: 800 0.625rem ui-sans-serif, system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 999px;
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.5);
}

.nuda-popt__name {
  font: 600 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: var(--popt-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nuda-popt__price {
  display: flex;
  align-items: baseline;
  gap: 3px;
}

.nuda-popt__price b {
  font: 800 2.5rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.nuda-popt__price i {
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  font-style: normal;
  color: #a1a1aa;
}

.nuda-popt__desc {
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  margin: 0;
}

.nuda-popt__btn {
  margin-top: 8px;
  padding: 10px 16px;
  background: var(--popt-accent);
  border: none;
  color: #09090b;
  border-radius: 8px;
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.25s;
}

.nuda-popt__btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 16px rgba(228, 255, 84, 0.5);
}`,
      },
    ],
  },

  /* ─────────────── 3. Billing Toggle ─────────────── */
  {
    id: "billing-toggle",
    name: "Billing Toggle",
    category: "Pricing Tables",
    preview: (
      <div className="nuda-billing">
        <button className="nuda-billing__opt" type="button">Monthly</button>
        <button className="nuda-billing__opt is-active" type="button">
          Yearly
          <span className="nuda-billing__save">−20%</span>
        </button>
        <span className="nuda-billing__pill" />
      </div>
    ),
    cssInline: `
      .nuda-billing{position:relative;display:inline-flex;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:999px;padding:3px}
      .nuda-billing__opt{position:relative;z-index:2;display:flex;align-items:center;gap:5px;padding:4px 10px;background:transparent;border:none;color:#a1a1aa;font:600 10px ui-sans-serif,system-ui;cursor:pointer;border-radius:999px;transition:color .3s}
      .nuda-billing__opt.is-active{color:#09090b}
      .nuda-billing__save{font:800 8px ui-sans-serif,system-ui;color:#09090b;background:rgba(9,9,11,.15);padding:1px 5px;border-radius:999px}
      .nuda-billing__opt:not(.is-active) .nuda-billing__save{color:#e4ff54;background:rgba(228,255,84,.15)}
      .nuda-billing__pill{position:absolute;z-index:1;top:3px;left:3px;width:calc(50% - 1.5px);height:calc(100% - 6px);background:#e4ff54;border-radius:999px;transform:translateX(100%);transition:transform .35s cubic-bezier(.4,0,.2,1);box-shadow:0 0 8px rgba(228,255,84,.4)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Billing Toggle — pill slides between Monthly / Yearly -->
<div class="nuda-billing">
  <button class="nuda-billing__opt" type="button" data-period="monthly">Monthly</button>
  <button class="nuda-billing__opt is-active" type="button" data-period="yearly">
    Yearly
    <span class="nuda-billing__save">−20%</span>
  </button>
  <span class="nuda-billing__pill"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Billing Toggle
   Two-state pill switch with savings badge inside the inactive option.
   Customize: --bill-accent */

.nuda-billing {
  --bill-accent: #e4ff54;
  position: relative;
  display: inline-flex;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  padding: 4px;
}

.nuda-billing__opt {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  background: transparent;
  border: none;
  color: #a1a1aa;
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  border-radius: 999px;
  transition: color 0.3s;
}

.nuda-billing__opt.is-active { color: #09090b; }

.nuda-billing__save {
  font: 800 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #09090b;
  background: rgba(9, 9, 11, 0.15);
  padding: 2px 6px;
  border-radius: 999px;
}

.nuda-billing__opt:not(.is-active) .nuda-billing__save {
  color: var(--bill-accent);
  background: rgba(228, 255, 84, 0.15);
}

.nuda-billing__pill {
  position: absolute;
  z-index: 1;
  top: 4px;
  left: 4px;
  width: calc(50% - 2px);
  height: calc(100% - 8px);
  background: var(--bill-accent);
  border-radius: 999px;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.4);
}

/* Set transform: translateX(0) for monthly, translateX(100%) for yearly */`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Billing Toggle — slides the pill and updates prices. */

(function () {
  var group = document.querySelector('.nuda-billing');
  if (!group) return;
  var opts = group.querySelectorAll('.nuda-billing__opt');
  var pill = group.querySelector('.nuda-billing__pill');

  opts.forEach(function (o, i) {
    o.addEventListener('click', function () {
      opts.forEach(function (x) { x.classList.remove('is-active'); });
      o.classList.add('is-active');
      pill.style.transform = 'translateX(' + (i * 100) + '%)';

      // Notify your prices to swap (replace with your own logic).
      document.dispatchEvent(new CustomEvent('billing:change', {
        detail: { period: o.dataset.period }
      }));
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 4. Price Morph ─────────────── */
  {
    id: "price-morph",
    name: "Price Morph",
    category: "Pricing Tables",
    preview: (
      <div className="nuda-pmorph" key="pmorph">
        <div className="nuda-pmorph__price">
          <b>$29</b><i>/mo</i>
        </div>
        <div className="nuda-pmorph__bill">Billed yearly</div>
      </div>
    ),
    cssInline: `
      .nuda-pmorph{padding:10px 12px;width:130px}
      .nuda-pmorph__price{display:flex;align-items:baseline;gap:2px;animation:_pm-pop .5s cubic-bezier(.34,1.56,.64,1)}
      .nuda-pmorph__price b{font:800 26px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1;background:linear-gradient(180deg,#fafafa,#e4ff54);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
      .nuda-pmorph__price i{font:500 11px ui-sans-serif,system-ui;font-style:normal;color:#a1a1aa}
      .nuda-pmorph__bill{font:600 9px ui-sans-serif,system-ui;color:#e4ff54;text-transform:uppercase;letter-spacing:.06em;margin-top:2px;animation:_pm-fade .4s ease .15s backwards}
      @keyframes _pm-pop{from{opacity:0;transform:translateY(8px) scale(.92)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes _pm-fade{from{opacity:0}to{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Price Morph — re-render the inner block on plan switch to retrigger animation -->
<div class="nuda-pmorph">
  <div class="nuda-pmorph__price">
    <b>$29</b><i>/mo</i>
  </div>
  <div class="nuda-pmorph__bill">Billed yearly</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Price Morph
   Pop-in animation tuned for swapping the visible price (e.g. monthly→yearly).
   Customize: --pm-accent */

.nuda-pmorph {
  --pm-accent: #e4ff54;
  padding: 16px 20px;
  width: 100%;
  max-width: 240px;
}

.nuda-pmorph__price {
  display: flex;
  align-items: baseline;
  gap: 3px;
  animation: nuda-pm-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-pmorph__price b {
  font: 800 3rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  background: linear-gradient(180deg, #fafafa, var(--pm-accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nuda-pmorph__price i {
  font: 500 1rem ui-sans-serif, system-ui, sans-serif;
  font-style: normal;
  color: #a1a1aa;
}

.nuda-pmorph__bill {
  font: 600 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: var(--pm-accent);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 4px;
  animation: nuda-pm-fade 0.4s ease 0.15s backwards;
}

@keyframes nuda-pm-pop {
  from { opacity: 0; transform: translateY(8px) scale(0.92); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes nuda-pm-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pmorph__price,
  .nuda-pmorph__bill { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Feature List ─────────────── */
  {
    id: "feature-list",
    name: "Feature List",
    category: "Pricing Tables",
    preview: (
      <ul className="nuda-flist">
        <li style={{ ["--d" as string]: "0s" }}><span className="nuda-flist__check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12 L10 17 L20 7" /></svg></span>Unlimited projects</li>
        <li style={{ ["--d" as string]: ".1s" }}><span className="nuda-flist__check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12 L10 17 L20 7" /></svg></span>Priority support</li>
        <li style={{ ["--d" as string]: ".2s" }}><span className="nuda-flist__check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12 L10 17 L20 7" /></svg></span>Custom domain</li>
        <li className="is-disabled" style={{ ["--d" as string]: ".3s" }}><span className="nuda-flist__check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6 L18 18" /><path d="M18 6 L6 18" /></svg></span>SSO / SAML</li>
      </ul>
    ),
    cssInline: `
      .nuda-flist{list-style:none;padding:8px;margin:0;display:flex;flex-direction:column;gap:5px;width:160px}
      .nuda-flist li{display:flex;align-items:center;gap:6px;font:500 10px ui-sans-serif,system-ui;color:#fafafa;animation:_fl-up .5s cubic-bezier(.4,0,.2,1) var(--d) backwards}
      .nuda-flist li.is-disabled{color:#63636e}
      .nuda-flist__check{display:flex;align-items:center;justify-content:center;width:14px;height:14px;background:rgba(228,255,84,.15);color:#e4ff54;border-radius:50%;flex-shrink:0}
      .nuda-flist li.is-disabled .nuda-flist__check{background:rgba(255,255,255,.06);color:#63636e}
      .nuda-flist__check svg{width:9px;height:9px;stroke-dasharray:30;stroke-dashoffset:30;animation:_fl-draw .4s ease-out var(--d) forwards;animation-delay:calc(var(--d) + .15s)}
      @keyframes _fl-up{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _fl-draw{to{stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Feature List — staggered fade-in + check draw -->
<ul class="nuda-flist">
  <li style="--d: 0s">
    <span class="nuda-flist__check">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12 L10 17 L20 7" />
      </svg>
    </span>
    Unlimited projects
  </li>
  <!-- ...more <li> with --d: .1s, .2s, etc. -->
  <li class="is-disabled" style="--d: .3s">
    <span class="nuda-flist__check">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 6 L18 18" /><path d="M18 6 L6 18" />
      </svg>
    </span>
    SSO / SAML
  </li>
</ul>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Feature List
   Each row fades up; check icon draws after.
   Customize: --fl-accent */

.nuda-flist {
  --fl-accent: #e4ff54;
  list-style: none;
  padding: 12px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 280px;
}

.nuda-flist li {
  display: flex;
  align-items: center;
  gap: 10px;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  animation: nuda-fl-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s) backwards;
}

.nuda-flist li.is-disabled { color: #63636e; }

.nuda-flist__check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  background: rgba(228, 255, 84, 0.15);
  color: var(--fl-accent);
  border-radius: 50%;
  flex-shrink: 0;
}

.nuda-flist li.is-disabled .nuda-flist__check {
  background: rgba(255, 255, 255, 0.06);
  color: #63636e;
}

.nuda-flist__check svg {
  width: 11px;
  height: 11px;
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: nuda-fl-draw 0.4s ease-out var(--d, 0s) forwards;
  animation-delay: calc(var(--d, 0s) + 0.15s);
}

@keyframes nuda-fl-up {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes nuda-fl-draw { to { stroke-dashoffset: 0; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-flist li,
  .nuda-flist__check svg { animation: none; stroke-dashoffset: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Savings Badge ─────────────── */
  {
    id: "savings-badge",
    name: "Savings Badge",
    category: "Pricing Tables",
    preview: (
      <span className="nuda-save">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 12 L4 12" />
          <path d="M10 6 L4 12 L10 18" />
        </svg>
        Save 20%
      </span>
    ),
    cssInline: `
      .nuda-save{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:linear-gradient(135deg,rgba(228,255,84,.2),rgba(228,255,84,.08));border:1px solid rgba(228,255,84,.35);border-radius:999px;color:#e4ff54;font:700 10px ui-sans-serif,system-ui;text-transform:uppercase;letter-spacing:.06em;position:relative;overflow:hidden;animation:_sv-pop .5s cubic-bezier(.34,1.56,.64,1)}
      .nuda-save::before{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(228,255,84,.4) 50%,transparent 70%);transform:translateX(-100%);animation:_sv-shine 3s ease-in-out infinite}
      .nuda-save svg{position:relative;z-index:1;width:11px;height:11px}
      @keyframes _sv-pop{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}}
      @keyframes _sv-shine{0%,30%{transform:translateX(-100%)}60%,100%{transform:translateX(100%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Savings Badge — small accent pill with periodic shine sweep -->
<span class="nuda-save">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 12 L4 12" /><path d="M10 6 L4 12 L10 18" />
  </svg>
  Save 20%
</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Savings Badge
   Pill with gradient bg + periodic light sweep. Use beside yearly prices.
   Customize: --save-accent */

.nuda-save {
  --save-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 12px;
  background: linear-gradient(135deg, rgba(228, 255, 84, 0.2), rgba(228, 255, 84, 0.08));
  border: 1px solid rgba(228, 255, 84, 0.35);
  border-radius: 999px;
  color: var(--save-accent);
  font: 700 0.7rem ui-sans-serif, system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  position: relative;
  overflow: hidden;
  animation: nuda-save-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-save::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 30%,
    rgba(228, 255, 84, 0.4) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  animation: nuda-save-shine 3s ease-in-out infinite;
}

.nuda-save svg {
  position: relative;
  z-index: 1;
  width: 12px;
  height: 12px;
}

@keyframes nuda-save-pop {
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes nuda-save-shine {
  0%, 30%   { transform: translateX(-100%); }
  60%, 100% { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-save,
  .nuda-save::before { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Compare Row ─────────────── */
  {
    id: "compare-row",
    name: "Compare Row",
    category: "Pricing Tables",
    preview: (
      <table className="nuda-cmprow">
        <tbody>
          <tr>
            <td>API access</td>
            <td className="is-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12 L10 17 L20 7" /></svg></td>
            <td className="is-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12 L10 17 L20 7" /></svg></td>
          </tr>
          <tr>
            <td>SSO</td>
            <td className="is-no">—</td>
            <td className="is-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12 L10 17 L20 7" /></svg></td>
          </tr>
          <tr>
            <td>Audit log</td>
            <td className="is-no">—</td>
            <td className="is-yes"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12 L10 17 L20 7" /></svg></td>
          </tr>
        </tbody>
      </table>
    ),
    cssInline: `
      .nuda-cmprow{width:170px;border-collapse:collapse;font:500 10px ui-sans-serif,system-ui}
      .nuda-cmprow tr{border-bottom:1px solid rgba(255,255,255,.06);transition:background .25s}
      .nuda-cmprow tr:hover{background:rgba(228,255,84,.04)}
      .nuda-cmprow td{padding:6px 8px;color:#fafafa}
      .nuda-cmprow td:first-child{color:#a1a1aa}
      .nuda-cmprow td:not(:first-child){text-align:center;width:30px}
      .nuda-cmprow .is-yes{color:#e4ff54}
      .nuda-cmprow .is-yes svg{width:11px;height:11px;display:inline-block;vertical-align:middle}
      .nuda-cmprow .is-no{color:#63636e;font-weight:700}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Compare Row — rows highlight on hover, ✓ in accent / – in muted -->
<table class="nuda-cmprow">
  <thead><tr><th></th><th>Free</th><th>Pro</th></tr></thead>
  <tbody>
    <tr>
      <td>API access</td>
      <td class="is-yes">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12 L10 17 L20 7" />
        </svg>
      </td>
      <td class="is-yes">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12 L10 17 L20 7" />
        </svg>
      </td>
    </tr>
    <tr>
      <td>SSO</td>
      <td class="is-no">—</td>
      <td class="is-yes"><!-- check svg --></td>
    </tr>
    <!-- ...more rows -->
  </tbody>
</table>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Compare Row
   Feature comparison rows that brighten on hover.
   Customize: --cmp-accent */

.nuda-cmprow {
  --cmp-accent: #e4ff54;
  width: 100%;
  max-width: 480px;
  border-collapse: collapse;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
}

.nuda-cmprow tr {
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: background 0.25s;
}

.nuda-cmprow tr:hover { background: rgba(228, 255, 84, 0.04); }

.nuda-cmprow td {
  padding: 10px 14px;
  color: #fafafa;
}

.nuda-cmprow td:first-child { color: #a1a1aa; }

.nuda-cmprow td:not(:first-child) {
  text-align: center;
  width: 80px;
}

.nuda-cmprow .is-yes { color: var(--cmp-accent); }

.nuda-cmprow .is-yes svg {
  width: 14px;
  height: 14px;
  display: inline-block;
  vertical-align: middle;
}

.nuda-cmprow .is-no {
  color: #63636e;
  font-weight: 700;
}`,
      },
    ],
  },

  /* ─────────────── 8. Currency Selector ─────────────── */
  {
    id: "currency-selector",
    name: "Currency Selector",
    category: "Pricing Tables",
    preview: (
      <button className="nuda-curr" type="button">
        <span className="nuda-curr__flag">$</span>
        <span className="nuda-curr__code">USD</span>
        <svg className="nuda-curr__chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4.5 L6 7.5 L9 4.5" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-curr{display:inline-flex;align-items:center;gap:6px;padding:5px 7px 5px 9px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#fafafa;font:600 10px ui-sans-serif,system-ui;cursor:pointer;transition:border-color .25s}
      .nuda-curr:hover{border-color:rgba(228,255,84,.3)}
      .nuda-curr__flag{display:flex;align-items:center;justify-content:center;width:16px;height:16px;background:linear-gradient(135deg,#e4ff54,#a8c93a);color:#09090b;font:800 9px ui-sans-serif,system-ui;border-radius:3px;flex-shrink:0}
      .nuda-curr__code{font-variant-numeric:tabular-nums}
      .nuda-curr__chev{width:10px;height:10px;color:#a1a1aa;transition:transform .25s}
      .nuda-curr:hover .nuda-curr__chev{transform:rotate(180deg)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Currency Selector — hook to a dropdown or modal of currencies -->
<button class="nuda-curr" type="button">
  <span class="nuda-curr__flag">$</span>
  <span class="nuda-curr__code">USD</span>
  <svg class="nuda-curr__chev" viewBox="0 0 12 12" fill="none"
       stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 4.5 L6 7.5 L9 4.5" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Currency Selector
   Pill button: gradient flag/symbol + code + chevron.
   Customize: --curr-accent, gradient on .nuda-curr__flag */

.nuda-curr {
  --curr-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px 7px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #fafafa;
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: border-color 0.25s;
}

.nuda-curr:hover { border-color: rgba(228, 255, 84, 0.3); }

.nuda-curr__flag {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: linear-gradient(135deg, var(--curr-accent), #a8c93a);
  color: #09090b;
  font: 800 0.75rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 4px;
  flex-shrink: 0;
}

.nuda-curr__code { font-variant-numeric: tabular-nums; }

.nuda-curr__chev {
  width: 12px;
  height: 12px;
  color: #a1a1aa;
  transition: transform 0.25s;
}

.nuda-curr:hover .nuda-curr__chev { transform: rotate(180deg); }`,
      },
    ],
  },

  /* ─────────────── 9. Discount Countdown ─────────────── */
  {
    id: "discount-countdown",
    name: "Discount Countdown",
    category: "Pricing Tables",
    preview: (
      <div className="nuda-disc">
        <span className="nuda-disc__label">Offer ends in</span>
        <div className="nuda-disc__time">
          <span><b>02</b><i>h</i></span>
          <span className="nuda-disc__sep">:</span>
          <span><b>14</b><i>m</i></span>
          <span className="nuda-disc__sep">:</span>
          <span className="is-tick"><b>37</b><i>s</i></span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-disc{display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 12px;background:linear-gradient(180deg,rgba(228,255,84,.08),rgba(228,255,84,.02));border:1px solid rgba(228,255,84,.25);border-radius:8px}
      .nuda-disc__label{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-disc__time{display:flex;align-items:center;gap:3px;color:#fafafa}
      .nuda-disc__time>span{display:inline-flex;align-items:baseline;gap:1px}
      .nuda-disc__time b{font:800 14px ui-sans-serif,system-ui;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-disc__time i{font:600 8px ui-sans-serif,system-ui;font-style:normal;color:#a1a1aa;margin-left:1px}
      .nuda-disc__sep{color:#63636e;font:800 14px ui-sans-serif,system-ui}
      .is-tick b{display:inline-block;animation:_dc-tick 1s ease-in-out infinite;color:#e4ff54}
      @keyframes _dc-tick{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Discount Countdown — wire the values from JS each second -->
<div class="nuda-disc">
  <span class="nuda-disc__label">Offer ends in</span>
  <div class="nuda-disc__time">
    <span><b data-unit="hours">02</b><i>h</i></span>
    <span class="nuda-disc__sep">:</span>
    <span><b data-unit="minutes">14</b><i>m</i></span>
    <span class="nuda-disc__sep">:</span>
    <span class="is-tick"><b data-unit="seconds">37</b><i>s</i></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Discount Countdown
   Compact countdown pill. Seconds tick scales subtly each beat.
   Customize: --disc-accent */

.nuda-disc {
  --disc-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: linear-gradient(180deg, rgba(228, 255, 84, 0.08), rgba(228, 255, 84, 0.02));
  border: 1px solid rgba(228, 255, 84, 0.25);
  border-radius: 10px;
}

.nuda-disc__label {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nuda-disc__time {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #fafafa;
}

.nuda-disc__time > span {
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
}

.nuda-disc__time b {
  font: 800 1.125rem ui-sans-serif, system-ui, sans-serif;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.nuda-disc__time i {
  font: 600 0.6rem ui-sans-serif, system-ui, sans-serif;
  font-style: normal;
  color: #a1a1aa;
  margin-left: 2px;
}

.nuda-disc__sep {
  color: #63636e;
  font: 800 1.125rem ui-sans-serif, system-ui, sans-serif;
}

.is-tick b {
  display: inline-block;
  animation: nuda-disc-tick 1s ease-in-out infinite;
  color: var(--disc-accent);
}

@keyframes nuda-disc-tick {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.1); }
}

@media (prefers-reduced-motion: reduce) {
  .is-tick b { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Discount Countdown — drives the [data-unit] elements until the deadline. */

(function () {
  var disc = document.querySelector('.nuda-disc');
  if (!disc) return;

  // Set your real deadline here (e.g. ISO from your server).
  var target = new Date(Date.now() + 2 * 3600e3 + 14 * 60e3 + 37e3);

  var h = disc.querySelector('[data-unit="hours"]');
  var m = disc.querySelector('[data-unit="minutes"]');
  var s = disc.querySelector('[data-unit="seconds"]');

  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function tick() {
    var diff = Math.max(0, target - Date.now());
    h.textContent = pad(Math.floor(diff / 3600e3));
    m.textContent = pad(Math.floor((diff % 3600e3) / 60e3));
    s.textContent = pad(Math.floor((diff % 60e3) / 1000));
    if (diff > 0) setTimeout(tick, 1000);
  }
  tick();
})();`,
      },
    ],
  },

  /* ─────────────── 10. Best Value Highlight ─────────────── */
  {
    id: "best-value",
    name: "Best Value",
    category: "Pricing Tables",
    preview: (
      <div className="nuda-bestv">
        <div className="nuda-bestv__bg" />
        <div className="nuda-bestv__inner">
          <span className="nuda-bestv__tag">Best value</span>
          <span className="nuda-bestv__name">Team</span>
          <div className="nuda-bestv__price">$49<i>/mo</i></div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-bestv{position:relative;width:130px;padding:2px;border-radius:10px;overflow:hidden}
      .nuda-bestv__bg{position:absolute;inset:0;background:conic-gradient(from 0deg,#e4ff54,#a78bfa,#fb7185,#38bdf8,#e4ff54);animation:_bv-rot 4s linear infinite}
      .nuda-bestv__inner{position:relative;background:rgba(15,15,17,.95);border-radius:8px;padding:10px 12px;display:flex;flex-direction:column;gap:4px;backdrop-filter:blur(8px)}
      .nuda-bestv__tag{font:800 8px ui-sans-serif,system-ui;color:#e4ff54;text-transform:uppercase;letter-spacing:.08em}
      .nuda-bestv__name{font:700 14px ui-sans-serif,system-ui;color:#fafafa;letter-spacing:-.02em}
      .nuda-bestv__price{font:800 16px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-bestv__price i{font-size:10px;font-style:normal;color:#a1a1aa;font-weight:500;margin-left:1px}
      @keyframes _bv-rot{to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Best Value Highlight — animated rainbow border around a content card -->
<div class="nuda-bestv">
  <div class="nuda-bestv__bg"></div>
  <div class="nuda-bestv__inner">
    <span class="nuda-bestv__tag">Best value</span>
    <span class="nuda-bestv__name">Team</span>
    <div class="nuda-bestv__price">$49<i>/mo</i></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Best Value Highlight
   Conic-gradient ring rotates around an opaque inner card.
   Customize: --bv-bg (inner), gradient stops on .nuda-bestv__bg */

.nuda-bestv {
  --bv-bg: rgba(15, 15, 17, 0.95);
  position: relative;
  width: 100%;
  max-width: 240px;
  padding: 2px;
  border-radius: 14px;
  overflow: hidden;
}

.nuda-bestv__bg {
  position: absolute;
  inset: 0;
  background: conic-gradient(
    from 0deg,
    #e4ff54,
    #a78bfa,
    #fb7185,
    #38bdf8,
    #e4ff54
  );
  animation: nuda-bv-rot 4s linear infinite;
}

.nuda-bestv__inner {
  position: relative;
  background: var(--bv-bg);
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  backdrop-filter: blur(8px);
}

.nuda-bestv__tag {
  font: 800 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #e4ff54;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nuda-bestv__name {
  font: 700 1.25rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  letter-spacing: -0.02em;
}

.nuda-bestv__price {
  font: 800 1.5rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.nuda-bestv__price i {
  font-size: 0.7rem;
  font-style: normal;
  color: #a1a1aa;
  font-weight: 500;
  margin-left: 2px;
}

@keyframes nuda-bv-rot { to { transform: rotate(360deg); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-bestv__bg { animation: none; }
}`,
      },
    ],
  },
];
