import type { NudaComponent } from "./types";

export const statsCounters: NudaComponent[] = [
  /* ─────────────── 1. Count Up ─────────────── */
  {
    id: "count-up",
    name: "Count Up",
    category: "Stats & Counters",
    preview: (
      <div className="nuda-count-up">
        <span className="nuda-count-up__value" data-target="2847">2847</span>
        <span className="nuda-count-up__label">Total users</span>
      </div>
    ),
    cssInline: `
      .nuda-count-up{display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:10px}
      .nuda-count-up__value{font:700 28px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1;background:linear-gradient(180deg,#fafafa,#a1a1aa);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:_cu-pop 1s cubic-bezier(.4,0,.2,1)}
      .nuda-count-up__label{font:500 10px ui-sans-serif,system-ui;color:#63636e;text-transform:uppercase;letter-spacing:.08em}
      @keyframes _cu-pop{from{transform:scale(.95);opacity:0}to{transform:scale(1);opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Count Up — initial value of 0 will animate up to data-target -->
<div class="nuda-count-up">
  <span class="nuda-count-up__value" data-target="2847">0</span>
  <span class="nuda-count-up__label">Total users</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Count Up
   Big stat number with a label. JS does the count-up.
   Customize: --count-text, --count-label */

.nuda-count-up {
  --count-text: #fafafa;
  --count-label: #63636e;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding: 12px;
}

.nuda-count-up__value {
  font: 700 2rem ui-sans-serif, system-ui, sans-serif;
  color: var(--count-text);
  font-variant-numeric: tabular-nums;
  line-height: 1;
  background: linear-gradient(180deg, #fafafa, #a1a1aa);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nuda-count-up__label {
  font: 500 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: var(--count-label);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Count Up — animates from 0 to data-target.
   Triggers when the element scrolls into view. */

(function () {
  var els = document.querySelectorAll('.nuda-count-up__value');
  if (!els.length) return;

  function animate(el) {
    var target = parseInt(el.dataset.target, 10) || 0;
    var duration = 1400;
    var start = performance.now();

    function tick(now) {
      var t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = Math.round(target * eased).toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(animate);
  }
})();`,
      },
    ],
  },

  /* ─────────────── 2. Trend Card ─────────────── */
  {
    id: "trend-card",
    name: "Trend Card",
    category: "Stats & Counters",
    preview: (
      <div className="nuda-trend">
        <div className="nuda-trend__head">
          <span className="nuda-trend__title">Revenue</span>
          <span className="nuda-trend__delta">
            <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 9 L10 3" />
              <path d="M5 3 L10 3 L10 8" />
            </svg>
            +18.4%
          </span>
        </div>
        <div className="nuda-trend__value">$24,580</div>
        <svg className="nuda-trend__spark" viewBox="0 0 100 24" fill="none" preserveAspectRatio="none">
          <path d="M0 18 L14 14 L28 16 L42 10 L56 12 L70 6 L84 8 L100 4" stroke="#e4ff54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-trend{width:160px;padding:12px 14px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:10px;display:flex;flex-direction:column;gap:6px;animation:_tc-in .8s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-trend__head{display:flex;justify-content:space-between;align-items:center}
      .nuda-trend__title{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-trend__delta{display:flex;align-items:center;gap:3px;font:700 10px ui-sans-serif,system-ui;color:#e4ff54;background:rgba(228,255,84,.1);padding:2px 6px;border-radius:6px}
      .nuda-trend__value{font:700 22px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1.1}
      .nuda-trend__spark{width:100%;height:24px}
      .nuda-trend__spark path{stroke-dasharray:200;stroke-dashoffset:200;animation:_tc-draw 1.4s cubic-bezier(.4,0,.2,1) .3s forwards;filter:drop-shadow(0 0 4px rgba(228,255,84,.4))}
      @keyframes _tc-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _tc-draw{to{stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Trend Card -->
<div class="nuda-trend">
  <div class="nuda-trend__head">
    <span class="nuda-trend__title">Revenue</span>
    <span class="nuda-trend__delta">
      <svg viewBox="0 0 12 12" width="10" height="10" fill="none"
           stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 9 L10 3" />
        <path d="M5 3 L10 3 L10 8" />
      </svg>
      +18.4%
    </span>
  </div>
  <div class="nuda-trend__value">$24,580</div>
  <svg class="nuda-trend__spark" viewBox="0 0 100 24" fill="none" preserveAspectRatio="none">
    <path d="M0 18 L14 14 L28 16 L42 10 L56 12 L70 6 L84 8 L100 4"
          stroke="#e4ff54" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Trend Card
   KPI tile: title, delta badge, value, drawing sparkline.
   Customize: --trend-color, --trend-bg */

.nuda-trend {
  --trend-color: #e4ff54;
  --trend-bg: rgba(255, 255, 255, 0.03);
  width: 100%;
  max-width: 220px;
  padding: 14px 16px;
  background: var(--trend-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  animation: nuda-trend-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nuda-trend__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nuda-trend__title {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nuda-trend__delta {
  display: flex;
  align-items: center;
  gap: 3px;
  font: 700 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: var(--trend-color);
  background: rgba(228, 255, 84, 0.1);
  padding: 3px 7px;
  border-radius: 6px;
}

.nuda-trend__value {
  font: 700 1.5rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  line-height: 1.1;
}

.nuda-trend__spark { width: 100%; height: 28px; }

.nuda-trend__spark path {
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: nuda-trend-draw 1.4s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.4));
}

@keyframes nuda-trend-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes nuda-trend-draw { to { stroke-dashoffset: 0; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-trend         { animation: none; }
  .nuda-trend__spark path { stroke-dashoffset: 0; animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Score Ring ─────────────── */
  {
    id: "score-ring",
    name: "Score Ring",
    category: "Stats & Counters",
    preview: (
      <div className="nuda-score" role="img" aria-label="Score 92 out of 100">
        <svg viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,.06)" strokeWidth="6" />
          <circle className="nuda-score__arc" cx="40" cy="40" r="34" fill="none" stroke="#e4ff54" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <span className="nuda-score__value">92</span>
        <span className="nuda-score__label">Score</span>
      </div>
    ),
    cssInline: `
      .nuda-score{position:relative;width:90px;height:90px;display:flex;align-items:center;justify-content:center}
      .nuda-score svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg);filter:drop-shadow(0 0 8px rgba(228,255,84,.25))}
      .nuda-score__arc{stroke-dasharray:213;stroke-dashoffset:213;animation:_sc-fill 1.6s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-score__value{position:relative;font:800 24px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1;animation:_sc-pop .8s cubic-bezier(.4,0,.2,1) .2s backwards}
      .nuda-score__label{position:absolute;bottom:14px;font:600 8px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.1em}
      @keyframes _sc-fill{to{stroke-dashoffset:17}}
      @keyframes _sc-pop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Score Ring -->
<div class="nuda-score" role="img" aria-label="Score 92 out of 100">
  <svg viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="34" fill="none"
            stroke="rgba(255,255,255,.06)" stroke-width="6" />
    <circle class="nuda-score__arc" cx="40" cy="40" r="34" fill="none"
            stroke="#e4ff54" stroke-width="6" stroke-linecap="round" />
  </svg>
  <span class="nuda-score__value">92</span>
  <span class="nuda-score__label">Score</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Score Ring
   Circular progress ring with score number popping in.
   For different score: 213 ≈ 2π × 34. Offset = 213 × (1 - score/100).
   Customize: --score-color, --score-track, --score-target. */

.nuda-score {
  --score-color: #e4ff54;
  --score-track: rgba(255, 255, 255, 0.06);
  --score-target: 17; /* 213 × (1 - 92/100) */
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-score svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  filter: drop-shadow(0 0 8px rgba(228, 255, 84, 0.25));
}

.nuda-score__arc {
  stroke-dasharray: 213;
  stroke-dashoffset: 213;
  animation: nuda-score-fill 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.nuda-score__value {
  position: relative;
  font: 800 1.6rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  animation: nuda-score-pop 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards;
}

.nuda-score__label {
  position: absolute;
  bottom: 14px;
  font: 600 0.55rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@keyframes nuda-score-fill { to { stroke-dashoffset: var(--score-target); } }

@keyframes nuda-score-pop {
  from { opacity: 0; transform: scale(0.6); }
  to   { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-score__arc   { stroke-dashoffset: var(--score-target); animation: none; }
  .nuda-score__value { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. Streak Flame ─────────────── */
  {
    id: "streak-flame",
    name: "Streak Flame",
    category: "Stats & Counters",
    preview: (
      <div className="nuda-streak">
        <div className="nuda-streak__flame">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 C 14 6, 18 8, 18 13 A 6 6 0 0 1 6 13 C 6 10, 8 9, 9 7 C 10 9, 11 9, 12 8 C 12 6, 12 4, 12 2 Z" />
          </svg>
        </div>
        <div className="nuda-streak__info">
          <span className="nuda-streak__value">47</span>
          <span className="nuda-streak__label">day streak</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-streak{display:flex;align-items:center;gap:10px;padding:8px 12px;background:rgba(228,255,84,.06);border:1px solid rgba(228,255,84,.15);border-radius:10px}
      .nuda-streak__flame{width:32px;height:32px;color:#e4ff54;animation:_st-flicker 1.4s ease-in-out infinite;filter:drop-shadow(0 0 6px rgba(228,255,84,.5))}
      .nuda-streak__flame svg{width:100%;height:100%}
      .nuda-streak__info{display:flex;flex-direction:column;line-height:1}
      .nuda-streak__value{font:800 22px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums}
      .nuda-streak__label{font:500 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.06em;margin-top:2px}
      @keyframes _st-flicker{0%,100%{transform:scale(1) rotate(-2deg)}50%{transform:scale(1.08) rotate(2deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Streak Flame -->
<div class="nuda-streak">
  <div class="nuda-streak__flame">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2 C 14 6, 18 8, 18 13 A 6 6 0 0 1 6 13 C 6 10, 8 9, 9 7 C 10 9, 11 9, 12 8 C 12 6, 12 4, 12 2 Z" />
    </svg>
  </div>
  <div class="nuda-streak__info">
    <span class="nuda-streak__value">47</span>
    <span class="nuda-streak__label">day streak</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Streak Flame
   Flickering flame icon paired with a day-streak counter.
   Customize: --streak-color, --streak-bg */

.nuda-streak {
  --streak-color: #e4ff54;
  --streak-bg: rgba(228, 255, 84, 0.06);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: var(--streak-bg);
  border: 1px solid rgba(228, 255, 84, 0.15);
  border-radius: 12px;
}

.nuda-streak__flame {
  width: 36px;
  height: 36px;
  color: var(--streak-color);
  animation: nuda-streak-flicker 1.4s ease-in-out infinite;
  filter: drop-shadow(0 0 6px rgba(228, 255, 84, 0.5));
}

.nuda-streak__flame svg { width: 100%; height: 100%; }

.nuda-streak__info {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.nuda-streak__value {
  font: 800 1.5rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
}

.nuda-streak__label {
  font: 500 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 3px;
}

@keyframes nuda-streak-flicker {
  0%, 100% { transform: scale(1) rotate(-2deg); }
  50%      { transform: scale(1.08) rotate(2deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-streak__flame { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Live Counter ─────────────── */
  {
    id: "live-counter",
    name: "Live Counter",
    category: "Stats & Counters",
    preview: (
      <div className="nuda-live">
        <span className="nuda-live__dot" />
        <span className="nuda-live__count">1,247</span>
        <span className="nuda-live__label">online</span>
      </div>
    ),
    cssInline: `
      .nuda-live{display:inline-flex;align-items:center;gap:8px;padding:6px 12px;background:rgba(228,255,84,.06);border:1px solid rgba(228,255,84,.15);border-radius:999px}
      .nuda-live__dot{position:relative;width:8px;height:8px;border-radius:50%;background:#e4ff54;box-shadow:0 0 8px #e4ff54}
      .nuda-live__dot::after{content:"";position:absolute;inset:0;border-radius:50%;background:#e4ff54;animation:_lv-pulse 1.6s ease-out infinite}
      .nuda-live__count{font:700 14px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums}
      .nuda-live__label{font:600 10px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      @keyframes _lv-pulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(2.6);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Live Counter -->
<div class="nuda-live">
  <span class="nuda-live__dot"></span>
  <span class="nuda-live__count">1,247</span>
  <span class="nuda-live__label">online</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Live Counter
   Pulsing live dot beside an online-users count.
   Customize: --live-color, --live-bg */

.nuda-live {
  --live-color: #e4ff54;
  --live-bg: rgba(228, 255, 84, 0.06);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 7px 14px;
  background: var(--live-bg);
  border: 1px solid rgba(228, 255, 84, 0.15);
  border-radius: 999px;
}

.nuda-live__dot {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--live-color);
  box-shadow: 0 0 8px var(--live-color);
}

.nuda-live__dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--live-color);
  animation: nuda-live-pulse 1.6s ease-out infinite;
}

.nuda-live__count {
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
}

.nuda-live__label {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

@keyframes nuda-live-pulse {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(2.8); opacity: 0;   }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-live__dot::after { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Comparison Bar ─────────────── */
  {
    id: "comparison-bar",
    name: "Comparison Bar",
    category: "Stats & Counters",
    preview: (
      <div className="nuda-compare">
        <div className="nuda-compare__row">
          <span className="nuda-compare__label">This week</span>
          <div className="nuda-compare__bar"><span style={{ ["--w" as string]: "78%" }} className="nuda-compare__fill nuda-compare__fill--primary" /></div>
          <span className="nuda-compare__value">2.4k</span>
        </div>
        <div className="nuda-compare__row">
          <span className="nuda-compare__label">Last week</span>
          <div className="nuda-compare__bar"><span style={{ ["--w" as string]: "52%" }} className="nuda-compare__fill" /></div>
          <span className="nuda-compare__value">1.6k</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-compare{display:flex;flex-direction:column;gap:8px;width:180px;padding:8px}
      .nuda-compare__row{display:grid;grid-template-columns:60px 1fr 32px;align-items:center;gap:8px}
      .nuda-compare__label{font:500 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.05em}
      .nuda-compare__bar{height:6px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden}
      .nuda-compare__fill{display:block;height:100%;width:var(--w);background:rgba(228,255,84,.4);border-radius:3px;transform:scaleX(0);transform-origin:left;animation:_cm-fill 1.4s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-compare__fill--primary{background:linear-gradient(90deg,#e4ff54,rgba(228,255,84,.7));box-shadow:0 0 6px rgba(228,255,84,.3);animation-delay:.2s}
      .nuda-compare__value{font:700 11px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;text-align:right}
      @keyframes _cm-fill{to{transform:scaleX(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Comparison Bar -->
<div class="nuda-compare">
  <div class="nuda-compare__row">
    <span class="nuda-compare__label">This week</span>
    <div class="nuda-compare__bar">
      <span class="nuda-compare__fill nuda-compare__fill--primary" style="--w:78%"></span>
    </div>
    <span class="nuda-compare__value">2.4k</span>
  </div>
  <div class="nuda-compare__row">
    <span class="nuda-compare__label">Last week</span>
    <div class="nuda-compare__bar">
      <span class="nuda-compare__fill" style="--w:52%"></span>
    </div>
    <span class="nuda-compare__value">1.6k</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Comparison Bar
   Two metrics side-by-side with growing fills, primary one highlighted.
   Customize: --cmp-primary, --cmp-secondary, --cmp-track. */

.nuda-compare {
  --cmp-primary: #e4ff54;
  --cmp-secondary: rgba(228, 255, 84, 0.4);
  --cmp-track: rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 280px;
  padding: 10px;
}

.nuda-compare__row {
  display: grid;
  grid-template-columns: 70px 1fr 40px;
  align-items: center;
  gap: 10px;
}

.nuda-compare__label {
  font: 500 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.nuda-compare__bar {
  height: 8px;
  background: var(--cmp-track);
  border-radius: 4px;
  overflow: hidden;
}

.nuda-compare__fill {
  display: block;
  height: 100%;
  width: var(--w, 0%);
  background: var(--cmp-secondary);
  border-radius: 4px;
  transform: scaleX(0);
  transform-origin: left;
  animation: nuda-compare-fill 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.nuda-compare__fill--primary {
  background: linear-gradient(90deg, var(--cmp-primary), rgba(228, 255, 84, 0.7));
  box-shadow: 0 0 6px rgba(228, 255, 84, 0.3);
  animation-delay: 0.2s;
}

.nuda-compare__value {
  font: 700 0.75rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  text-align: right;
}

@keyframes nuda-compare-fill { to { transform: scaleX(1); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-compare__fill { transform: scaleX(1); animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Battery Meter ─────────────── */
  {
    id: "battery-meter",
    name: "Battery Meter",
    category: "Stats & Counters",
    preview: (
      <div className="nuda-battery" role="img" aria-label="Battery 78 percent">
        <div className="nuda-battery__shell">
          <span className="nuda-battery__fill" />
        </div>
        <span className="nuda-battery__cap" />
        <span className="nuda-battery__pct">78%</span>
      </div>
    ),
    cssInline: `
      .nuda-battery{display:flex;align-items:center;gap:10px;padding:8px}
      .nuda-battery__shell{position:relative;width:64px;height:24px;border:2px solid #fafafa;border-radius:4px;padding:2px}
      .nuda-battery__fill{display:block;height:100%;width:0;background:linear-gradient(90deg,#e4ff54,rgba(228,255,84,.6));border-radius:1px;animation:_bt-fill 1.6s cubic-bezier(.4,0,.2,1) forwards;box-shadow:0 0 6px rgba(228,255,84,.4) inset}
      .nuda-battery__cap{display:inline-block;width:3px;height:10px;background:#fafafa;border-radius:0 2px 2px 0;margin-left:-9px}
      .nuda-battery__pct{font:700 12px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums}
      @keyframes _bt-fill{to{width:78%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Battery Meter -->
<div class="nuda-battery" role="img" aria-label="Battery 78 percent">
  <div class="nuda-battery__shell">
    <span class="nuda-battery__fill"></span>
  </div>
  <span class="nuda-battery__cap"></span>
  <span class="nuda-battery__pct">78%</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Battery Meter
   Battery icon filling to a target percentage.
   Customize: --bat-color, --bat-shell, --bat-target. */

.nuda-battery {
  --bat-color: #e4ff54;
  --bat-shell: #fafafa;
  --bat-target: 78%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px;
}

.nuda-battery__shell {
  position: relative;
  width: 72px;
  height: 28px;
  border: 2px solid var(--bat-shell);
  border-radius: 5px;
  padding: 2px;
}

.nuda-battery__fill {
  display: block;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--bat-color), rgba(228, 255, 84, 0.6));
  border-radius: 2px;
  box-shadow: inset 0 0 6px rgba(228, 255, 84, 0.4);
  animation: nuda-battery-fill 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.nuda-battery__cap {
  display: inline-block;
  width: 3px;
  height: 12px;
  background: var(--bat-shell);
  border-radius: 0 2px 2px 0;
  margin-left: -10px;
}

.nuda-battery__pct {
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
}

@keyframes nuda-battery-fill { to { width: var(--bat-target); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-battery__fill { width: var(--bat-target); animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Goal Progress ─────────────── */
  {
    id: "goal-progress",
    name: "Goal Progress",
    category: "Stats & Counters",
    preview: (
      <div className="nuda-goal">
        <div className="nuda-goal__head">
          <span className="nuda-goal__title">Daily goal</span>
          <span className="nuda-goal__amount">8.2k <i>/ 10k</i></span>
        </div>
        <div className="nuda-goal__track">
          <span className="nuda-goal__fill" />
          <span className="nuda-goal__shine" />
        </div>
        <div className="nuda-goal__steps">
          <span className="is-on" /><span className="is-on" /><span className="is-on" /><span className="is-on" /><span />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-goal{width:160px;display:flex;flex-direction:column;gap:6px;padding:10px}
      .nuda-goal__head{display:flex;justify-content:space-between;align-items:baseline}
      .nuda-goal__title{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-goal__amount{font:700 12px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums}
      .nuda-goal__amount i{font-size:9px;font-style:normal;color:#a1a1aa;font-weight:500}
      .nuda-goal__track{position:relative;height:8px;background:rgba(255,255,255,.06);border-radius:4px;overflow:hidden}
      .nuda-goal__fill{position:absolute;left:0;top:0;height:100%;width:0;background:linear-gradient(90deg,rgba(228,255,84,.7),#e4ff54);border-radius:4px;animation:_gl-fill 1.6s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-goal__shine{position:absolute;top:0;left:-30%;width:30%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:_gl-shine 2.4s linear 1.6s infinite}
      .nuda-goal__steps{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}
      .nuda-goal__steps span{height:2px;background:rgba(255,255,255,.06);border-radius:1px;transition:background .3s}
      .nuda-goal__steps span.is-on{background:#e4ff54;box-shadow:0 0 4px rgba(228,255,84,.5)}
      @keyframes _gl-fill{to{width:82%}}
      @keyframes _gl-shine{0%{left:-30%}100%{left:130%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Goal Progress -->
<div class="nuda-goal">
  <div class="nuda-goal__head">
    <span class="nuda-goal__title">Daily goal</span>
    <span class="nuda-goal__amount">8.2k <i>/ 10k</i></span>
  </div>
  <div class="nuda-goal__track">
    <span class="nuda-goal__fill"></span>
    <span class="nuda-goal__shine"></span>
  </div>
  <div class="nuda-goal__steps">
    <span class="is-on"></span>
    <span class="is-on"></span>
    <span class="is-on"></span>
    <span class="is-on"></span>
    <span></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Goal Progress
   Goal tracker: title + value, filling bar with shine, milestone segments.
   Customize: --goal-color, --goal-target. */

.nuda-goal {
  --goal-color: #e4ff54;
  --goal-target: 82%;
  width: 100%;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
}

.nuda-goal__head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.nuda-goal__title {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nuda-goal__amount {
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
}

.nuda-goal__amount i {
  font-size: 0.65rem;
  font-style: normal;
  color: #a1a1aa;
  font-weight: 500;
}

.nuda-goal__track {
  position: relative;
  height: 10px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 5px;
  overflow: hidden;
}

.nuda-goal__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, rgba(228, 255, 84, 0.7), var(--goal-color));
  border-radius: 5px;
  animation: nuda-goal-fill 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.nuda-goal__shine {
  position: absolute;
  top: 0;
  left: -30%;
  width: 30%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: nuda-goal-shine 2.4s linear 1.6s infinite;
}

.nuda-goal__steps {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
}

.nuda-goal__steps span {
  height: 2px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 1px;
  transition: background 0.3s;
}

.nuda-goal__steps span.is-on {
  background: var(--goal-color);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.5);
}

@keyframes nuda-goal-fill { to { width: var(--goal-target); } }

@keyframes nuda-goal-shine {
  0%   { left: -30%; }
  100% { left: 130%; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-goal__fill  { width: var(--goal-target); animation: none; }
  .nuda-goal__shine { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 9. Achievement Badge ─────────────── */
  {
    id: "achievement-badge",
    name: "Achievement Badge",
    category: "Stats & Counters",
    preview: (
      <div className="nuda-ach">
        <div className="nuda-ach__medal">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2 L16 2 L18 6 L12 14 L6 6 Z" />
            <circle cx="12" cy="17" r="5" />
            <path d="M12 14 L12 22" opacity="0.3" />
          </svg>
        </div>
        <div className="nuda-ach__info">
          <span className="nuda-ach__title">Top performer</span>
          <span className="nuda-ach__value">×3 unlocked</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ach{display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(255,255,255,.03);border:1px solid rgba(228,255,84,.2);border-radius:10px;animation:_ac-pop .8s cubic-bezier(.34,1.56,.64,1)}
      .nuda-ach__medal{position:relative;width:36px;height:36px;color:#e4ff54;filter:drop-shadow(0 0 8px rgba(228,255,84,.5));animation:_ac-shine 3s ease-in-out infinite}
      .nuda-ach__medal svg{width:100%;height:100%}
      .nuda-ach__info{display:flex;flex-direction:column;line-height:1}
      .nuda-ach__title{font:700 12px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-ach__value{font:600 9px ui-sans-serif,system-ui;color:#e4ff54;text-transform:uppercase;letter-spacing:.08em;margin-top:3px}
      @keyframes _ac-pop{from{opacity:0;transform:scale(.7)}to{opacity:1;transform:scale(1)}}
      @keyframes _ac-shine{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Achievement Badge -->
<div class="nuda-ach">
  <div class="nuda-ach__medal">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 2 L16 2 L18 6 L12 14 L6 6 Z" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 14 L12 22" opacity="0.3" />
    </svg>
  </div>
  <div class="nuda-ach__info">
    <span class="nuda-ach__title">Top performer</span>
    <span class="nuda-ach__value">×3 unlocked</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Achievement Badge
   Medal icon with gentle sway, paired with title + count.
   Customize: --ach-color, --ach-bg */

.nuda-ach {
  --ach-color: #e4ff54;
  --ach-bg: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--ach-bg);
  border: 1px solid rgba(228, 255, 84, 0.2);
  border-radius: 12px;
  animation: nuda-ach-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-ach__medal {
  position: relative;
  width: 40px;
  height: 40px;
  color: var(--ach-color);
  filter: drop-shadow(0 0 8px rgba(228, 255, 84, 0.5));
  animation: nuda-ach-shine 3s ease-in-out infinite;
}

.nuda-ach__medal svg { width: 100%; height: 100%; }

.nuda-ach__info {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.nuda-ach__title {
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}

.nuda-ach__value {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: var(--ach-color);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 4px;
}

@keyframes nuda-ach-pop {
  from { opacity: 0; transform: scale(0.7); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes nuda-ach-shine {
  0%, 100% { transform: rotate(-3deg); }
  50%      { transform: rotate(3deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-ach,
  .nuda-ach__medal { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Stat Reveal ─────────────── */
  {
    id: "stat-reveal",
    name: "Stat Reveal",
    category: "Stats & Counters",
    preview: (
      <div className="nuda-statrev">
        <div className="nuda-statrev__value">99.9<i>%</i></div>
        <div className="nuda-statrev__line" />
        <div className="nuda-statrev__label">Uptime SLA</div>
        <div className="nuda-statrev__sub">Last 90 days · zero incidents</div>
      </div>
    ),
    cssInline: `
      .nuda-statrev{display:flex;flex-direction:column;align-items:flex-start;gap:6px;padding:14px;width:160px}
      .nuda-statrev__value{font:800 32px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1;background:linear-gradient(180deg,#fafafa 30%,#e4ff54);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:_sr-up .8s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-statrev__value i{font-size:18px;font-style:normal;color:#e4ff54;-webkit-text-fill-color:#e4ff54;margin-left:2px}
      .nuda-statrev__line{width:0;height:2px;background:linear-gradient(90deg,#e4ff54,transparent);animation:_sr-line 1s cubic-bezier(.4,0,.2,1) .3s forwards;border-radius:2px}
      .nuda-statrev__label{font:600 11px ui-sans-serif,system-ui;color:#fafafa;animation:_sr-fade .6s ease .5s backwards;opacity:0;animation-fill-mode:forwards}
      .nuda-statrev__sub{font:500 9px ui-sans-serif,system-ui;color:#63636e;animation:_sr-fade .6s ease .65s backwards;opacity:0;animation-fill-mode:forwards}
      @keyframes _sr-up{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _sr-line{to{width:48px}}
      @keyframes _sr-fade{to{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Stat Reveal -->
<div class="nuda-statrev">
  <div class="nuda-statrev__value">99.9<i>%</i></div>
  <div class="nuda-statrev__line"></div>
  <div class="nuda-statrev__label">Uptime SLA</div>
  <div class="nuda-statrev__sub">Last 90 days · zero incidents</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Stat Reveal
   Hero stat that fades up, followed by a drawing accent line and label.
   Customize: --stat-accent, --stat-text */

.nuda-statrev {
  --stat-accent: #e4ff54;
  --stat-text: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 16px;
  width: 100%;
  max-width: 220px;
}

.nuda-statrev__value {
  font: 800 2.5rem ui-sans-serif, system-ui, sans-serif;
  color: var(--stat-text);
  font-variant-numeric: tabular-nums;
  line-height: 1;
  background: linear-gradient(180deg, var(--stat-text) 30%, var(--stat-accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: nuda-statrev-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nuda-statrev__value i {
  font-size: 1.4rem;
  font-style: normal;
  color: var(--stat-accent);
  -webkit-text-fill-color: var(--stat-accent);
  margin-left: 2px;
}

.nuda-statrev__line {
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--stat-accent), transparent);
  border-radius: 2px;
  animation: nuda-statrev-line 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
}

.nuda-statrev__label {
  font: 600 0.75rem ui-sans-serif, system-ui, sans-serif;
  color: var(--stat-text);
  opacity: 0;
  animation: nuda-statrev-fade 0.6s ease 0.5s forwards;
}

.nuda-statrev__sub {
  font: 500 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #63636e;
  opacity: 0;
  animation: nuda-statrev-fade 0.6s ease 0.65s forwards;
}

@keyframes nuda-statrev-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes nuda-statrev-line { to { width: 60px; } }
@keyframes nuda-statrev-fade { to { opacity: 1; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-statrev__value,
  .nuda-statrev__line,
  .nuda-statrev__label,
  .nuda-statrev__sub { animation: none; opacity: 1; width: 60px; transform: none; }
  .nuda-statrev__line { width: 60px; }
}`,
      },
    ],
  },
];
