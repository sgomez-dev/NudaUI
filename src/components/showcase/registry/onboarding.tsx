import type { NudaComponent } from "./types";

export const onboarding: NudaComponent[] = [
  /* ─────────────── 1. Spotlight Cutout ─────────────── */
  {
    id: "spotlight-cutout",
    name: "Spotlight Cutout",
    category: "Onboarding & Coachmarks",
    preview: (
      <div className="nuda-spot">
        <div className="nuda-spot__bg" />
        <div className="nuda-spot__hole" />
        <div className="nuda-spot__btn">Save</div>
      </div>
    ),
    cssInline: `
      .nuda-spot{position:relative;width:130px;height:90px;background:linear-gradient(135deg,#1a1a1f,#0e0e10);border-radius:8px;overflow:hidden}
      .nuda-spot__bg{position:absolute;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(2px);-webkit-mask:radial-gradient(circle 22px at 65% 50%,transparent 18px,black 22px);mask:radial-gradient(circle 22px at 65% 50%,transparent 18px,black 22px)}
      .nuda-spot__hole{position:absolute;left:65%;top:50%;width:44px;height:44px;border:2px solid #e4ff54;border-radius:8px;transform:translate(-50%,-50%);box-shadow:0 0 20px rgba(228,255,84,.4);animation:_sp-pulse 2s ease-in-out infinite}
      .nuda-spot__btn{position:absolute;left:65%;top:50%;transform:translate(-50%,-50%);padding:4px 10px;background:#e4ff54;color:#09090b;font:700 9px ui-sans-serif,system-ui;border-radius:5px;pointer-events:none}
      @keyframes _sp-pulse{0%,100%{box-shadow:0 0 12px rgba(228,255,84,.3)}50%{box-shadow:0 0 24px rgba(228,255,84,.6)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Spotlight Cutout — dim everything except a target element -->
<div class="nuda-spot">
  <!-- Your page content here -->
  <button class="nuda-spot__btn">Save</button>

  <!-- Overlay with a hole punched at the target -->
  <div class="nuda-spot__bg"></div>
  <div class="nuda-spot__hole"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Spotlight Cutout
   Dimmed overlay with a circular/rect hole around a target.
   The mask uses a radial-gradient so the hole stays sharp.
   Customize: --spot-x, --spot-y, --spot-radius, --spot-accent */

.nuda-spot {
  --spot-x: 65%;
  --spot-y: 50%;
  --spot-radius: 32px;
  --spot-accent: #e4ff54;
  position: relative;
}

.nuda-spot__bg {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  z-index: 50;
  -webkit-mask: radial-gradient(
    circle var(--spot-radius) at var(--spot-x) var(--spot-y),
    transparent calc(var(--spot-radius) - 4px),
    black var(--spot-radius)
  );
  mask: radial-gradient(
    circle var(--spot-radius) at var(--spot-x) var(--spot-y),
    transparent calc(var(--spot-radius) - 4px),
    black var(--spot-radius)
  );
}

.nuda-spot__hole {
  position: fixed;
  left: var(--spot-x);
  top: var(--spot-y);
  width: calc(var(--spot-radius) * 2);
  height: calc(var(--spot-radius) * 2);
  border: 2px solid var(--spot-accent);
  border-radius: 12px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 24px rgba(228, 255, 84, 0.4);
  z-index: 51;
  animation: nuda-spot-pulse 2s ease-in-out infinite;
  pointer-events: none;
}

@keyframes nuda-spot-pulse {
  0%, 100% { box-shadow: 0 0 16px rgba(228, 255, 84, 0.3); }
  50%      { box-shadow: 0 0 32px rgba(228, 255, 84, 0.6); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-spot__hole { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 2. Tooltip Card ─────────────── */
  {
    id: "tour-tooltip",
    name: "Tour Tooltip",
    category: "Onboarding & Coachmarks",
    preview: (
      <div className="nuda-tour">
        <span className="nuda-tour__step">2 / 5</span>
        <h4>Set your workspace</h4>
        <p>Choose a name and slug for your team.</p>
        <div className="nuda-tour__actions">
          <button className="nuda-tour__skip">Skip</button>
          <button className="nuda-tour__next">Next →</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tour{position:relative;width:160px;padding:10px;background:rgba(20,20,24,.95);border:1px solid rgba(228,255,84,.25);border-radius:8px;backdrop-filter:blur(8px);box-shadow:0 12px 32px -8px rgba(0,0,0,.6),0 0 16px rgba(228,255,84,.1);animation:_tr-in .4s cubic-bezier(.34,1.56,.64,1)}
      .nuda-tour::after{content:"";position:absolute;left:20px;bottom:-5px;width:8px;height:8px;background:rgba(20,20,24,.95);border-right:1px solid rgba(228,255,84,.25);border-bottom:1px solid rgba(228,255,84,.25);transform:rotate(45deg)}
      .nuda-tour__step{font:800 8px ui-sans-serif,system-ui;color:#e4ff54;text-transform:uppercase;letter-spacing:.08em}
      .nuda-tour h4{font:700 11px ui-sans-serif,system-ui;color:#fafafa;margin:3px 0 2px}
      .nuda-tour p{font:500 10px ui-sans-serif,system-ui;color:#a1a1aa;margin:0 0 6px;line-height:1.4}
      .nuda-tour__actions{display:flex;justify-content:space-between;align-items:center;gap:6px}
      .nuda-tour__skip{background:transparent;border:none;color:#a1a1aa;font:500 9px ui-sans-serif,system-ui;cursor:pointer}
      .nuda-tour__skip:hover{color:#fafafa}
      .nuda-tour__next{padding:3px 8px;background:#e4ff54;color:#09090b;border:none;border-radius:4px;font:700 9px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s}
      .nuda-tour__next:hover{transform:translateX(2px)}
      @keyframes _tr-in{from{opacity:0;transform:scale(.92) translateY(-4px)}to{opacity:1;transform:scale(1) translateY(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Tour Tooltip — tooltip with progress, copy, skip + next CTA -->
<div class="nuda-tour" role="dialog" aria-label="Onboarding step">
  <span class="nuda-tour__step">2 / 5</span>
  <h4>Set your workspace</h4>
  <p>Choose a name and slug for your team.</p>
  <div class="nuda-tour__actions">
    <button class="nuda-tour__skip" type="button">Skip</button>
    <button class="nuda-tour__next" type="button">Next →</button>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Tour Tooltip
   Onboarding tooltip with arrow, step counter, copy + actions.
   Position absolutely near a target element in your layout.
   Customize: --tour-accent, arrow side via the ::after rule. */

.nuda-tour {
  --tour-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 280px;
  padding: 14px;
  background: rgba(20, 20, 24, 0.95);
  border: 1px solid rgba(228, 255, 84, 0.25);
  border-radius: 10px;
  backdrop-filter: blur(8px);
  box-shadow:
    0 12px 32px -8px rgba(0, 0, 0, 0.6),
    0 0 16px rgba(228, 255, 84, 0.1);
  animation: nuda-tour-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Arrow — pointing down by default; flip via reordering or a modifier class */
.nuda-tour::after {
  content: "";
  position: absolute;
  left: 24px;
  bottom: -6px;
  width: 10px;
  height: 10px;
  background: rgba(20, 20, 24, 0.95);
  border-right: 1px solid rgba(228, 255, 84, 0.25);
  border-bottom: 1px solid rgba(228, 255, 84, 0.25);
  transform: rotate(45deg);
}

.nuda-tour__step {
  font: 800 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: var(--tour-accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nuda-tour h4 {
  font: 700 0.95rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 4px 0 4px;
}

.nuda-tour p {
  font: 500 0.85rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  margin: 0 0 12px;
  line-height: 1.4;
}

.nuda-tour__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
}

.nuda-tour__skip {
  background: transparent;
  border: none;
  color: #a1a1aa;
  font: 500 0.8rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
}

.nuda-tour__skip:hover { color: #fafafa; }

.nuda-tour__next {
  padding: 6px 12px;
  background: var(--tour-accent);
  color: #09090b;
  border: none;
  border-radius: 6px;
  font: 700 0.8rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: transform 0.2s;
}

.nuda-tour__next:hover { transform: translateX(2px); }

@keyframes nuda-tour-in {
  from { opacity: 0; transform: scale(0.92) translateY(-4px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tour { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Step Counter ─────────────── */
  {
    id: "tour-counter",
    name: "Step Counter",
    category: "Onboarding & Coachmarks",
    preview: (
      <div className="nuda-tcount">
        <div className="nuda-tcount__dots">
          <span className="is-done" />
          <span className="is-done" />
          <span className="is-current" />
          <span />
          <span />
        </div>
        <span className="nuda-tcount__text">Step 3 of 5</span>
      </div>
    ),
    cssInline: `
      .nuda-tcount{display:inline-flex;flex-direction:column;align-items:center;gap:4px;padding:6px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:999px}
      .nuda-tcount__dots{display:flex;gap:3px}
      .nuda-tcount__dots span{width:5px;height:5px;border-radius:50%;background:rgba(255,255,255,.15);transition:all .3s}
      .nuda-tcount__dots .is-done{background:#e4ff54;box-shadow:0 0 4px rgba(228,255,84,.4)}
      .nuda-tcount__dots .is-current{background:#e4ff54;width:14px;border-radius:3px;box-shadow:0 0 6px rgba(228,255,84,.5);animation:_tc-pulse 1.6s ease-in-out infinite}
      .nuda-tcount__text{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;font-variant-numeric:tabular-nums}
      @keyframes _tc-pulse{0%,100%{opacity:.8}50%{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Step Counter — dots fill as you progress; current is wider + pulses -->
<div class="nuda-tcount">
  <div class="nuda-tcount__dots">
    <span class="is-done"></span>
    <span class="is-done"></span>
    <span class="is-current"></span>
    <span></span>
    <span></span>
  </div>
  <span class="nuda-tcount__text">Step 3 of 5</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Step Counter
   Compact tour progress: dots + label.
   Customize: --tcount-accent */

.nuda-tcount {
  --tcount-accent: #e4ff54;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 999px;
}

.nuda-tcount__dots {
  display: flex;
  gap: 4px;
}

.nuda-tcount__dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  transition: all 0.3s;
}

.nuda-tcount__dots .is-done {
  background: var(--tcount-accent);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.4);
}

.nuda-tcount__dots .is-current {
  background: var(--tcount-accent);
  width: 18px;
  border-radius: 3px;
  box-shadow: 0 0 6px rgba(228, 255, 84, 0.5);
  animation: nuda-tcount-pulse 1.6s ease-in-out infinite;
}

.nuda-tcount__text {
  font: 600 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  font-variant-numeric: tabular-nums;
}

@keyframes nuda-tcount-pulse {
  0%, 100% { opacity: 0.8; }
  50%      { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tcount__dots .is-current { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. Welcome Modal ─────────────── */
  {
    id: "welcome-modal",
    name: "Welcome Modal",
    category: "Onboarding & Coachmarks",
    preview: (
      <div className="nuda-wel">
        <div className="nuda-wel__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
          </svg>
        </div>
        <h3>Welcome aboard</h3>
        <p>Let&apos;s set up your workspace in 60 seconds.</p>
        <button className="nuda-wel__cta">Get started</button>
      </div>
    ),
    cssInline: `
      .nuda-wel{display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 12px;width:170px;background:rgba(20,20,24,.95);border:1px solid rgba(255,255,255,.08);border-radius:10px;text-align:center;animation:_wm-in .5s cubic-bezier(.34,1.56,.64,1);box-shadow:0 16px 40px -8px rgba(0,0,0,.5)}
      .nuda-wel__icon{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(228,255,84,.2),rgba(228,255,84,.05));border:1px solid rgba(228,255,84,.3);border-radius:50%;color:#e4ff54;animation:_wm-spin 4s ease-in-out infinite;filter:drop-shadow(0 0 6px rgba(228,255,84,.4))}
      .nuda-wel__icon svg{width:18px;height:18px}
      .nuda-wel h3{font:800 14px ui-sans-serif,system-ui;color:#fafafa;margin:2px 0 0;letter-spacing:-.02em}
      .nuda-wel p{font:500 10px ui-sans-serif,system-ui;color:#a1a1aa;margin:0;line-height:1.4}
      .nuda-wel__cta{margin-top:4px;padding:5px 14px;background:#e4ff54;color:#09090b;border:none;border-radius:6px;font:700 10px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s,box-shadow .25s}
      .nuda-wel__cta:hover{transform:translateY(-1px);box-shadow:0 0 16px rgba(228,255,84,.4)}
      @keyframes _wm-in{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
      @keyframes _wm-spin{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Welcome Modal — first-run greeting + CTA -->
<div class="nuda-wel" role="dialog" aria-labelledby="welcome-title">
  <div class="nuda-wel__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
    </svg>
  </div>
  <h3 id="welcome-title">Welcome aboard</h3>
  <p>Let's set up your workspace in 60 seconds.</p>
  <button class="nuda-wel__cta" type="button">Get started</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Welcome Modal
   First-run modal with sparkly icon, headline, copy, primary CTA.
   Customize: --wel-accent */

.nuda-wel {
  --wel-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 28px 24px;
  width: 100%;
  max-width: 360px;
  background: rgba(20, 20, 24, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  text-align: center;
  animation: nuda-wel-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 16px 40px -8px rgba(0, 0, 0, 0.5);
}

.nuda-wel__icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(228, 255, 84, 0.2), rgba(228, 255, 84, 0.05));
  border: 1px solid rgba(228, 255, 84, 0.3);
  border-radius: 50%;
  color: var(--wel-accent);
  filter: drop-shadow(0 0 6px rgba(228, 255, 84, 0.4));
  animation: nuda-wel-spin 4s ease-in-out infinite;
}

.nuda-wel__icon svg { width: 24px; height: 24px; }

.nuda-wel h3 {
  font: 800 1.25rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 4px 0 0;
  letter-spacing: -0.02em;
}

.nuda-wel p {
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  margin: 0;
  line-height: 1.5;
}

.nuda-wel__cta {
  margin-top: 8px;
  padding: 10px 24px;
  background: var(--wel-accent);
  color: #09090b;
  border: none;
  border-radius: 8px;
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.25s;
}

.nuda-wel__cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 16px rgba(228, 255, 84, 0.4);
}

@keyframes nuda-wel-in {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes nuda-wel-spin {
  0%, 100% { transform: rotate(-8deg); }
  50%      { transform: rotate(8deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-wel,
  .nuda-wel__icon { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Feature Pulse ─────────────── */
  {
    id: "feature-pulse",
    name: "Feature Pulse",
    category: "Onboarding & Coachmarks",
    preview: (
      <div className="nuda-fpulse">
        <button className="nuda-fpulse__target">
          Settings
        </button>
        <span className="nuda-fpulse__ring" />
        <span className="nuda-fpulse__ring nuda-fpulse__ring--b" />
        <span className="nuda-fpulse__dot" />
      </div>
    ),
    cssInline: `
      .nuda-fpulse{position:relative;display:inline-block;padding:6px 4px}
      .nuda-fpulse__target{padding:5px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fafafa;border-radius:6px;font:600 10px ui-sans-serif,system-ui;cursor:pointer}
      .nuda-fpulse__ring{position:absolute;top:0;right:0;width:14px;height:14px;border:2px solid #e4ff54;border-radius:50%;transform:translate(50%,-50%);animation:_fp-pulse 1.6s ease-out infinite;opacity:0}
      .nuda-fpulse__ring--b{animation-delay:.6s}
      .nuda-fpulse__dot{position:absolute;top:0;right:0;width:8px;height:8px;background:#e4ff54;border:2px solid #09090b;border-radius:50%;transform:translate(50%,-50%);box-shadow:0 0 8px rgba(228,255,84,.6);z-index:1}
      @keyframes _fp-pulse{0%{transform:translate(50%,-50%) scale(.6);opacity:1}100%{transform:translate(50%,-50%) scale(2.4);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Feature Pulse — pulsing dot on a button/link drawing attention to "new" feature -->
<div class="nuda-fpulse">
  <button class="nuda-fpulse__target" type="button">Settings</button>
  <span class="nuda-fpulse__ring"></span>
  <span class="nuda-fpulse__ring nuda-fpulse__ring--b"></span>
  <span class="nuda-fpulse__dot"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Feature Pulse
   Notification dot with two concentric expanding rings on the target's corner.
   Customize: --fpulse-accent, dot offset. */

.nuda-fpulse {
  --fpulse-accent: #e4ff54;
  position: relative;
  display: inline-block;
  padding: 8px 6px;
}

.nuda-fpulse__target {
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fafafa;
  border-radius: 8px;
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
}

.nuda-fpulse__ring {
  position: absolute;
  top: 0;
  right: 0;
  width: 16px;
  height: 16px;
  border: 2px solid var(--fpulse-accent);
  border-radius: 50%;
  transform: translate(50%, -50%);
  animation: nuda-fpulse-ring 1.6s ease-out infinite;
  opacity: 0;
}

.nuda-fpulse__ring--b { animation-delay: 0.6s; }

.nuda-fpulse__dot {
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  background: var(--fpulse-accent);
  border: 2px solid #09090b;
  border-radius: 50%;
  transform: translate(50%, -50%);
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.6);
  z-index: 1;
}

@keyframes nuda-fpulse-ring {
  0%   { transform: translate(50%, -50%) scale(0.6); opacity: 1; }
  100% { transform: translate(50%, -50%) scale(2.4); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-fpulse__ring { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Coach Arrow ─────────────── */
  {
    id: "coach-arrow",
    name: "Coach Arrow",
    category: "Onboarding & Coachmarks",
    preview: (
      <div className="nuda-arrow">
        <span className="nuda-arrow__label">Click here</span>
        <svg className="nuda-arrow__svg" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="nuda-arrow__path" d="M10 10 Q 30 10, 40 25 T 70 40" />
          <path className="nuda-arrow__head" d="M62 38 L70 40 L66 32" />
        </svg>
        <span className="nuda-arrow__target">→</span>
      </div>
    ),
    cssInline: `
      .nuda-arrow{position:relative;width:140px;height:80px;display:flex;align-items:flex-start;justify-content:flex-start;color:#e4ff54;padding:6px}
      .nuda-arrow__label{font:700 11px ui-sans-serif,system-ui;color:#e4ff54;letter-spacing:-.02em;animation:_ar-bob 2s ease-in-out infinite}
      .nuda-arrow__svg{position:absolute;left:8px;top:14px;width:80px;height:50px;filter:drop-shadow(0 0 4px rgba(228,255,84,.4))}
      .nuda-arrow__path,.nuda-arrow__head{stroke-dasharray:200;stroke-dashoffset:200;animation:_ar-draw 1.4s cubic-bezier(.4,0,.2,1) .3s forwards}
      .nuda-arrow__head{animation-delay:1.5s}
      .nuda-arrow__target{position:absolute;right:6px;bottom:6px;font:800 16px ui-sans-serif,system-ui;color:#fafafa;background:rgba(228,255,84,.15);border:1px solid #e4ff54;padding:2px 8px;border-radius:5px;animation:_ar-bob 2s ease-in-out infinite}
      @keyframes _ar-draw{to{stroke-dashoffset:0}}
      @keyframes _ar-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Coach Arrow — handwritten-style arrow drawing toward the target -->
<div class="nuda-arrow">
  <span class="nuda-arrow__label">Click here</span>
  <svg class="nuda-arrow__svg" viewBox="0 0 80 50"
       fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <path class="nuda-arrow__path" d="M10 10 Q 30 10, 40 25 T 70 40" />
    <path class="nuda-arrow__head" d="M62 38 L70 40 L66 32" />
  </svg>
  <span class="nuda-arrow__target">→</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Coach Arrow
   Drawn arrow + label that bobs to call out a target element.
   Customize: --arrow-accent, the SVG path geometry. */

.nuda-arrow {
  --arrow-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 240px;
  height: 110px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  color: var(--arrow-accent);
  padding: 8px;
}

.nuda-arrow__label {
  font: 700 1rem ui-sans-serif, system-ui, sans-serif;
  color: var(--arrow-accent);
  letter-spacing: -0.02em;
  animation: nuda-arrow-bob 2s ease-in-out infinite;
}

.nuda-arrow__svg {
  position: absolute;
  left: 12px;
  top: 22px;
  width: 120px;
  height: 70px;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.4));
}

.nuda-arrow__path,
.nuda-arrow__head {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: nuda-arrow-draw 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
}

.nuda-arrow__head { animation-delay: 1.5s; }

.nuda-arrow__target {
  position: absolute;
  right: 8px;
  bottom: 8px;
  font: 800 1.4rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: rgba(228, 255, 84, 0.15);
  border: 1px solid var(--arrow-accent);
  padding: 4px 12px;
  border-radius: 6px;
  animation: nuda-arrow-bob 2s ease-in-out infinite;
}

@keyframes nuda-arrow-draw { to { stroke-dashoffset: 0; } }

@keyframes nuda-arrow-bob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-3px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-arrow__path, .nuda-arrow__head { stroke-dashoffset: 0; animation: none; }
  .nuda-arrow__label, .nuda-arrow__target { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Skip Link ─────────────── */
  {
    id: "tour-skip",
    name: "Tour Skip",
    category: "Onboarding & Coachmarks",
    preview: (
      <button className="nuda-tskip" type="button">
        <span>Skip tour</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12 L19 12" />
          <path d="M13 6 L19 12 L13 18" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-tskip{display:inline-flex;align-items:center;gap:5px;padding:5px 10px;background:transparent;border:1px solid rgba(255,255,255,.1);color:#a1a1aa;font:500 10px ui-sans-serif,system-ui;border-radius:5px;cursor:pointer;transition:border-color .2s,color .2s,background .2s}
      .nuda-tskip:hover{border-color:rgba(228,255,84,.3);color:#e4ff54;background:rgba(228,255,84,.04)}
      .nuda-tskip svg{width:11px;height:11px;transition:transform .25s}
      .nuda-tskip:hover svg{transform:translateX(2px)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Tour Skip — subtle "skip" with arrow that nudges on hover -->
<button class="nuda-tskip" type="button">
  <span>Skip tour</span>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12 L19 12" />
    <path d="M13 6 L19 12 L13 18" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Tour Skip
   Quiet ghost button: arrow nudges on hover.
   Customize: --tskip-accent */

.nuda-tskip {
  --tskip-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #a1a1aa;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 7px;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s, background 0.2s;
}

.nuda-tskip:hover {
  border-color: rgba(228, 255, 84, 0.3);
  color: var(--tskip-accent);
  background: rgba(228, 255, 84, 0.04);
}

.nuda-tskip svg {
  width: 13px;
  height: 13px;
  transition: transform 0.25s;
}

.nuda-tskip:hover svg { transform: translateX(2px); }`,
      },
    ],
  },

  /* ─────────────── 8. Confetti Finale ─────────────── */
  {
    id: "confetti-finale",
    name: "Confetti Finale",
    category: "Onboarding & Coachmarks",
    preview: (
      <div className="nuda-finale">
        <div className="nuda-finale__check">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12 L10 17 L20 7" />
          </svg>
        </div>
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="nuda-finale__bit" style={{ ["--a" as string]: `${(i / 8) * 360}deg`, ["--c" as string]: i % 3 === 0 ? "#e4ff54" : i % 3 === 1 ? "#a78bfa" : "#fb7185", ["--d" as string]: `${(i % 4) * 0.05}s` }} />
        ))}
        <p>You&apos;re all set!</p>
      </div>
    ),
    cssInline: `
      .nuda-finale{position:relative;width:130px;height:90px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px}
      .nuda-finale__check{position:relative;width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:#e4ff54;color:#09090b;border-radius:50%;animation:_fn-pop .5s cubic-bezier(.34,1.56,.64,1);box-shadow:0 0 16px rgba(228,255,84,.5);z-index:1}
      .nuda-finale__check svg{width:60%;height:60%;stroke-dasharray:30;stroke-dashoffset:30;animation:_fn-draw .4s ease-out .25s forwards}
      .nuda-finale__bit{position:absolute;left:50%;top:38%;width:5px;height:5px;background:var(--c);border-radius:1px;transform:translate(-50%,-50%) rotate(var(--a));animation:_fn-blast 1.4s cubic-bezier(.2,.6,.4,1) var(--d) forwards;opacity:0}
      .nuda-finale__bit:nth-child(2n){border-radius:50%}
      .nuda-finale p{font:700 11px ui-sans-serif,system-ui;color:#fafafa;margin:0;animation:_fn-fade .4s ease .6s backwards}
      @keyframes _fn-pop{0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}}
      @keyframes _fn-draw{to{stroke-dashoffset:0}}
      @keyframes _fn-blast{0%{opacity:0;transform:translate(-50%,-50%) rotate(var(--a)) translateY(0)}15%{opacity:1}100%{opacity:0;transform:translate(-50%,-50%) rotate(var(--a)) translateY(-36px)}}
      @keyframes _fn-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Confetti Finale — celebratory completion of an onboarding flow -->
<div class="nuda-finale">
  <div class="nuda-finale__check">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12 L10 17 L20 7" />
    </svg>
  </div>
  <span class="nuda-finale__bit" style="--a:0deg;   --c:#e4ff54; --d:0s"></span>
  <span class="nuda-finale__bit" style="--a:45deg;  --c:#a78bfa; --d:.05s"></span>
  <span class="nuda-finale__bit" style="--a:90deg;  --c:#fb7185; --d:.1s"></span>
  <span class="nuda-finale__bit" style="--a:135deg; --c:#e4ff54; --d:.15s"></span>
  <span class="nuda-finale__bit" style="--a:180deg; --c:#a78bfa; --d:0s"></span>
  <span class="nuda-finale__bit" style="--a:225deg; --c:#fb7185; --d:.05s"></span>
  <span class="nuda-finale__bit" style="--a:270deg; --c:#e4ff54; --d:.1s"></span>
  <span class="nuda-finale__bit" style="--a:315deg; --c:#a78bfa; --d:.15s"></span>
  <p>You're all set!</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Confetti Finale
   Pop-in check, radial confetti, then "all set" line.
   Customize: --finale-accent, piece colors via --c. */

.nuda-finale {
  --finale-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 220px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.nuda-finale__check {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--finale-accent);
  color: #09090b;
  border-radius: 50%;
  box-shadow: 0 0 16px rgba(228, 255, 84, 0.5);
  z-index: 1;
  animation: nuda-finale-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-finale__check svg {
  width: 60%;
  height: 60%;
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: nuda-finale-draw 0.4s ease-out 0.25s forwards;
}

.nuda-finale__bit {
  position: absolute;
  left: 50%;
  top: 38%;
  width: 6px;
  height: 6px;
  background: var(--c, var(--finale-accent));
  border-radius: 1px;
  transform: translate(-50%, -50%) rotate(var(--a, 0deg));
  opacity: 0;
  animation: nuda-finale-blast 1.4s cubic-bezier(0.2, 0.6, 0.4, 1) var(--d, 0s) forwards;
}

.nuda-finale__bit:nth-child(2n) { border-radius: 50%; }

.nuda-finale p {
  font: 700 0.95rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  animation: nuda-finale-fade 0.4s ease 0.6s backwards;
}

@keyframes nuda-finale-pop {
  0%   { transform: scale(0); }
  60%  { transform: scale(1.15); }
  100% { transform: scale(1); }
}

@keyframes nuda-finale-draw { to { stroke-dashoffset: 0; } }

@keyframes nuda-finale-blast {
  0%   { opacity: 0; transform: translate(-50%, -50%) rotate(var(--a)) translateY(0); }
  15%  { opacity: 1; }
  100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--a)) translateY(-48px); }
}

@keyframes nuda-finale-fade {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-finale__check,
  .nuda-finale__check svg,
  .nuda-finale__bit,
  .nuda-finale p { animation: none; }
  .nuda-finale__check svg { stroke-dashoffset: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 9. New Badge ─────────────── */
  {
    id: "new-badge",
    name: "New Badge",
    category: "Onboarding & Coachmarks",
    preview: (
      <div className="nuda-newb">
        <span className="nuda-newb__label">Inbox</span>
        <span className="nuda-newb__badge">New</span>
      </div>
    ),
    cssInline: `
      .nuda-newb{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:6px}
      .nuda-newb__label{font:600 11px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-newb__badge{position:relative;padding:1px 5px;background:#e4ff54;color:#09090b;font:800 8px ui-sans-serif,system-ui;text-transform:uppercase;letter-spacing:.06em;border-radius:3px;overflow:hidden}
      .nuda-newb__badge::after{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.4) 50%,transparent 70%);transform:translateX(-100%);animation:_nb-shine 2.4s ease-in-out infinite}
      @keyframes _nb-shine{0%,30%{transform:translateX(-100%)}60%,100%{transform:translateX(100%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- New Badge — small "NEW" chip with periodic shine -->
<div class="nuda-newb">
  <span class="nuda-newb__label">Inbox</span>
  <span class="nuda-newb__badge">New</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* New Badge
   Small chip drawing attention to a recently shipped feature.
   Customize: --newb-accent */

.nuda-newb {
  --newb-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
}

.nuda-newb__label {
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}

.nuda-newb__badge {
  position: relative;
  padding: 2px 6px;
  background: var(--newb-accent);
  color: #09090b;
  font: 800 0.625rem ui-sans-serif, system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-radius: 4px;
  overflow: hidden;
}

.nuda-newb__badge::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 30%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  animation: nuda-newb-shine 2.4s ease-in-out infinite;
}

@keyframes nuda-newb-shine {
  0%, 30%   { transform: translateX(-100%); }
  60%, 100% { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-newb__badge::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Checklist Card ─────────────── */
  {
    id: "checklist-card",
    name: "Checklist Card",
    category: "Onboarding & Coachmarks",
    preview: (
      <div className="nuda-clist">
        <div className="nuda-clist__head">
          <span>Get started</span>
          <span className="nuda-clist__pct">2/4</span>
        </div>
        <div className="nuda-clist__bar"><span /></div>
        <ul>
          <li className="is-done"><span className="nuda-clist__chk" /><s>Create account</s></li>
          <li className="is-done"><span className="nuda-clist__chk" /><s>Verify email</s></li>
          <li className="is-current"><span className="nuda-clist__chk" />Invite team</li>
          <li><span className="nuda-clist__chk" />Connect repo</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-clist{width:160px;padding:8px 10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px;display:flex;flex-direction:column;gap:5px}
      .nuda-clist__head{display:flex;justify-content:space-between;align-items:center;font:700 10px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-clist__pct{font:700 9px ui-monospace,monospace;color:#e4ff54;background:rgba(228,255,84,.1);padding:1px 5px;border-radius:3px;font-variant-numeric:tabular-nums}
      .nuda-clist__bar{height:3px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden}
      .nuda-clist__bar span{display:block;height:100%;width:50%;background:linear-gradient(90deg,#e4ff54,rgba(228,255,84,.6));border-radius:2px;animation:_cl-fill 1.4s cubic-bezier(.4,0,.2,1) forwards;transform:scaleX(0);transform-origin:left}
      .nuda-clist ul{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:2px}
      .nuda-clist li{display:flex;align-items:center;gap:5px;font:500 10px ui-sans-serif,system-ui;color:#a1a1aa;padding:1px 0}
      .nuda-clist li.is-done{color:#63636e}
      .nuda-clist li.is-done s{text-decoration:line-through;text-decoration-color:rgba(255,255,255,.2)}
      .nuda-clist li.is-current{color:#fafafa}
      .nuda-clist__chk{width:11px;height:11px;border:1.2px solid rgba(255,255,255,.15);border-radius:50%;flex-shrink:0;transition:all .25s}
      .nuda-clist .is-done .nuda-clist__chk{background:#e4ff54;border-color:#e4ff54;box-shadow:0 0 4px rgba(228,255,84,.4)}
      .nuda-clist .is-current .nuda-clist__chk{border-color:#e4ff54;animation:_cl-pulse 1.6s ease-in-out infinite}
      @keyframes _cl-fill{to{transform:scaleX(1)}}
      @keyframes _cl-pulse{0%,100%{box-shadow:0 0 0 rgba(228,255,84,0)}50%{box-shadow:0 0 0 3px rgba(228,255,84,.15)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Checklist Card — onboarding tasks with progress bar and per-row state -->
<div class="nuda-clist">
  <div class="nuda-clist__head">
    <span>Get started</span>
    <span class="nuda-clist__pct">2/4</span>
  </div>
  <div class="nuda-clist__bar"><span></span></div>
  <ul>
    <li class="is-done"><span class="nuda-clist__chk"></span><s>Create account</s></li>
    <li class="is-done"><span class="nuda-clist__chk"></span><s>Verify email</s></li>
    <li class="is-current"><span class="nuda-clist__chk"></span>Invite team</li>
    <li><span class="nuda-clist__chk"></span>Connect repo</li>
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Checklist Card
   Persistent onboarding checklist: progress bar, items with is-done / is-current.
   Customize: --clist-accent, --clist-target (bar fill %). */

.nuda-clist {
  --clist-accent: #e4ff54;
  --clist-target: 50%;
  width: 100%;
  max-width: 280px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nuda-clist__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}

.nuda-clist__pct {
  font: 700 0.7rem ui-monospace, monospace;
  color: var(--clist-accent);
  background: rgba(228, 255, 84, 0.1);
  padding: 2px 6px;
  border-radius: 4px;
  font-variant-numeric: tabular-nums;
}

.nuda-clist__bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  overflow: hidden;
}

.nuda-clist__bar span {
  display: block;
  height: 100%;
  width: var(--clist-target);
  background: linear-gradient(90deg, var(--clist-accent), rgba(228, 255, 84, 0.6));
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  animation: nuda-clist-fill 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.nuda-clist ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nuda-clist li {
  display: flex;
  align-items: center;
  gap: 8px;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  padding: 2px 0;
}

.nuda-clist li.is-done    { color: #63636e; }
.nuda-clist li.is-done s  { text-decoration: line-through; text-decoration-color: rgba(255, 255, 255, 0.2); }
.nuda-clist li.is-current { color: #fafafa; }

.nuda-clist__chk {
  width: 14px;
  height: 14px;
  border: 1.5px solid rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  flex-shrink: 0;
  transition: all 0.25s;
}

.nuda-clist .is-done .nuda-clist__chk {
  background: var(--clist-accent);
  border-color: var(--clist-accent);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.4);
}

.nuda-clist .is-current .nuda-clist__chk {
  border-color: var(--clist-accent);
  animation: nuda-clist-pulse 1.6s ease-in-out infinite;
}

@keyframes nuda-clist-fill { to { transform: scaleX(1); } }

@keyframes nuda-clist-pulse {
  0%, 100% { box-shadow: 0 0 0 rgba(228, 255, 84, 0); }
  50%      { box-shadow: 0 0 0 4px rgba(228, 255, 84, 0.15); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-clist__bar span,
  .nuda-clist .is-current .nuda-clist__chk { animation: none; transform: scaleX(1); }
}`,
      },
    ],
  },
];
