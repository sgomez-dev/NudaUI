import type { NudaComponent } from "./types";

export const charts: NudaComponent[] = [
  /* ─────────────── 1. Bar Chart Grow ─────────────── */
  {
    id: "bar-chart-grow",
    name: "Bar Chart Grow",
    category: "Charts",
    preview: (
      <div className="nuda-bar-chart" role="img" aria-label="Bar chart">
        <div className="nuda-bar-chart__bar" style={{ ["--h" as string]: "60%", ["--d" as string]: "0s" }} />
        <div className="nuda-bar-chart__bar" style={{ ["--h" as string]: "85%", ["--d" as string]: ".1s" }} />
        <div className="nuda-bar-chart__bar" style={{ ["--h" as string]: "45%", ["--d" as string]: ".2s" }} />
        <div className="nuda-bar-chart__bar" style={{ ["--h" as string]: "95%", ["--d" as string]: ".3s" }} />
        <div className="nuda-bar-chart__bar" style={{ ["--h" as string]: "70%", ["--d" as string]: ".4s" }} />
        <div className="nuda-bar-chart__bar" style={{ ["--h" as string]: "55%", ["--d" as string]: ".5s" }} />
      </div>
    ),
    cssInline: `
      .nuda-bar-chart{display:flex;align-items:flex-end;gap:6px;width:100px;height:80px;padding:4px}
      .nuda-bar-chart__bar{flex:1;height:var(--h);background:linear-gradient(180deg,#e4ff54,rgba(228,255,84,.3));border-radius:3px 3px 1px 1px;transform-origin:bottom;animation:_bc-grow 2.4s ease-in-out var(--d) infinite;box-shadow:0 0 8px rgba(228,255,84,.15)}
      @keyframes _bc-grow{0%,100%{transform:scaleY(.15);opacity:.5}40%,70%{transform:scaleY(1);opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Bar Chart Grow -->
<div class="nuda-bar-chart" role="img" aria-label="Bar chart">
  <div class="nuda-bar-chart__bar" style="--h: 60%; --d: 0s"></div>
  <div class="nuda-bar-chart__bar" style="--h: 85%; --d: .1s"></div>
  <div class="nuda-bar-chart__bar" style="--h: 45%; --d: .2s"></div>
  <div class="nuda-bar-chart__bar" style="--h: 95%; --d: .3s"></div>
  <div class="nuda-bar-chart__bar" style="--h: 70%; --d: .4s"></div>
  <div class="nuda-bar-chart__bar" style="--h: 55%; --d: .5s"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bar Chart Grow
   Vertical bars rising from baseline with stagger.
   Customize: --bar-color-from, --bar-color-to, --bar-gap */

.nuda-bar-chart {
  --bar-color-from: #e4ff54;
  --bar-color-to: rgba(228, 255, 84, 0.3);
  --bar-gap: 6px;
  display: flex;
  align-items: flex-end;
  gap: var(--bar-gap);
  width: 100%;
  max-width: 200px;
  height: 100px;
  padding: 4px;
}

.nuda-bar-chart__bar {
  flex: 1;
  height: var(--h, 50%);
  background: linear-gradient(180deg, var(--bar-color-from), var(--bar-color-to));
  border-radius: 3px 3px 1px 1px;
  transform-origin: bottom;
  animation: nuda-bar-grow 2.4s ease-in-out var(--d, 0s) infinite;
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.15);
}

@keyframes nuda-bar-grow {
  0%, 100%   { transform: scaleY(0.15); opacity: 0.5; }
  40%, 70%   { transform: scaleY(1);    opacity: 1;   }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bar-chart__bar { animation: none; transform: scaleY(1); opacity: 1; }
}`,
      },
    ],
  },

  /* ─────────────── 2. Line Chart Draw ─────────────── */
  {
    id: "line-chart-draw",
    name: "Line Chart Draw",
    category: "Charts",
    preview: (
      <div className="nuda-line-chart" role="img" aria-label="Line chart">
        <svg viewBox="0 0 120 60" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="nlc-grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#e4ff54" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#e4ff54" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="nuda-line-chart__area" d="M2 50 L20 35 L40 42 L60 22 L80 30 L100 12 L118 18 L118 58 L2 58 Z" fill="url(#nlc-grad)" />
          <path className="nuda-line-chart__line" d="M2 50 L20 35 L40 42 L60 22 L80 30 L100 12 L118 18" stroke="#e4ff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle className="nuda-line-chart__dot" cx="118" cy="18" r="3" fill="#e4ff54" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-line-chart{width:120px;height:70px;padding:4px}
      .nuda-line-chart svg{width:100%;height:100%;filter:drop-shadow(0 0 6px rgba(228,255,84,.2))}
      .nuda-line-chart__line{stroke-dasharray:300;stroke-dashoffset:300;animation:_lc-draw 3.2s ease-in-out infinite}
      .nuda-line-chart__area{opacity:0;animation:_lc-fade 3.2s ease-in-out infinite}
      .nuda-line-chart__dot{opacity:0;animation:_lc-pop 3.2s ease-in-out infinite}
      @keyframes _lc-draw{0%{stroke-dashoffset:300}40%,80%{stroke-dashoffset:0}100%{stroke-dashoffset:300}}
      @keyframes _lc-fade{0%,30%{opacity:0}50%,80%{opacity:1}100%{opacity:0}}
      @keyframes _lc-pop{0%,38%{opacity:0;r:0}45%,80%{opacity:1;r:3}100%{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Line Chart Draw -->
<div class="nuda-line-chart" role="img" aria-label="Line chart">
  <svg viewBox="0 0 120 60" fill="none" preserveAspectRatio="none">
    <defs>
      <linearGradient id="nlc-grad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%"   stop-color="#e4ff54" stop-opacity="0.4" />
        <stop offset="100%" stop-color="#e4ff54" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path class="nuda-line-chart__area"
          d="M2 50 L20 35 L40 42 L60 22 L80 30 L100 12 L118 18 L118 58 L2 58 Z"
          fill="url(#nlc-grad)" />
    <path class="nuda-line-chart__line"
          d="M2 50 L20 35 L40 42 L60 22 L80 30 L100 12 L118 18"
          stroke="#e4ff54" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <circle class="nuda-line-chart__dot" cx="118" cy="18" r="3" fill="#e4ff54" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Line Chart Draw
   SVG path that draws itself, area fades in, end-dot pops.
   Customize: --line-color, --line-width, --line-duration */

.nuda-line-chart {
  --line-color: #e4ff54;
  --line-width: 2px;
  --line-duration: 3.2s;
  width: 100%;
  max-width: 240px;
  height: 80px;
  padding: 4px;
}

.nuda-line-chart svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 6px rgba(228, 255, 84, 0.2));
}

.nuda-line-chart__line {
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: nuda-line-draw var(--line-duration) ease-in-out infinite;
}

.nuda-line-chart__area {
  opacity: 0;
  animation: nuda-line-fade var(--line-duration) ease-in-out infinite;
}

.nuda-line-chart__dot {
  opacity: 0;
  animation: nuda-line-pop var(--line-duration) ease-in-out infinite;
}

@keyframes nuda-line-draw {
  0%        { stroke-dashoffset: 300; }
  40%, 80%  { stroke-dashoffset: 0; }
  100%      { stroke-dashoffset: 300; }
}

@keyframes nuda-line-fade {
  0%, 30%   { opacity: 0; }
  50%, 80%  { opacity: 1; }
  100%      { opacity: 0; }
}

@keyframes nuda-line-pop {
  0%, 38%   { opacity: 0; r: 0; }
  45%, 80%  { opacity: 1; r: 3; }
  100%      { opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-line-chart__line  { stroke-dashoffset: 0; animation: none; }
  .nuda-line-chart__area,
  .nuda-line-chart__dot   { opacity: 1; animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Donut Sweep ─────────────── */
  {
    id: "donut-sweep",
    name: "Donut Sweep",
    category: "Charts",
    preview: (
      <div className="nuda-donut" role="img" aria-label="Donut chart, 72 percent">
        <svg viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="32" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="8" />
          <circle className="nuda-donut__arc" cx="40" cy="40" r="32" fill="none" stroke="#e4ff54" strokeWidth="8" strokeLinecap="round" />
        </svg>
        <span className="nuda-donut__value">72<i>%</i></span>
      </div>
    ),
    cssInline: `
      .nuda-donut{position:relative;width:90px;height:90px}
      .nuda-donut svg{width:100%;height:100%;transform:rotate(-90deg);filter:drop-shadow(0 0 8px rgba(228,255,84,.18))}
      .nuda-donut__arc{stroke-dasharray:201;stroke-dashoffset:201;animation:_dn-sweep 2.6s cubic-bezier(.4,0,.2,1) infinite}
      .nuda-donut__value{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font:700 18px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums}
      .nuda-donut__value i{font-size:11px;font-style:normal;color:#a1a1aa;margin-left:1px}
      @keyframes _dn-sweep{0%{stroke-dashoffset:201}40%,75%{stroke-dashoffset:56}100%{stroke-dashoffset:201}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Donut Sweep -->
<div class="nuda-donut" role="img" aria-label="Donut chart, 72 percent">
  <svg viewBox="0 0 80 80">
    <circle cx="40" cy="40" r="32" fill="none"
            stroke="rgba(255,255,255,.08)" stroke-width="8" />
    <circle class="nuda-donut__arc" cx="40" cy="40" r="32" fill="none"
            stroke="#e4ff54" stroke-width="8" stroke-linecap="round" />
  </svg>
  <span class="nuda-donut__value">72<i>%</i></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Donut Sweep
   Circular gauge filling to a target percentage.
   Customize: --donut-color, --donut-track, --donut-size, --donut-thickness */

.nuda-donut {
  --donut-color: #e4ff54;
  --donut-track: rgba(255, 255, 255, 0.08);
  --donut-size: 96px;
  --donut-thickness: 8px;
  position: relative;
  width: var(--donut-size);
  height: var(--donut-size);
}

.nuda-donut svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  filter: drop-shadow(0 0 8px rgba(228, 255, 84, 0.18));
}

.nuda-donut__arc {
  stroke-dasharray: 201;
  stroke-dashoffset: 201;
  animation: nuda-donut-sweep 2.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.nuda-donut__value {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700 1.25rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
}

.nuda-donut__value i {
  font-size: 0.7rem;
  font-style: normal;
  color: #a1a1aa;
  margin-left: 1px;
}

/* 201 ≈ 2π × 32. For 72%: 201 × 0.28 ≈ 56 (visible portion = 100 - 72) */
@keyframes nuda-donut-sweep {
  0%        { stroke-dashoffset: 201; }
  40%, 75%  { stroke-dashoffset: 56; }
  100%      { stroke-dashoffset: 201; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-donut__arc { stroke-dashoffset: 56; animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. Sparkline ─────────────── */
  {
    id: "sparkline",
    name: "Sparkline",
    category: "Charts",
    preview: (
      <div className="nuda-sparkline" role="img" aria-label="Sparkline trend">
        <svg viewBox="0 0 100 30" fill="none" preserveAspectRatio="none">
          <path d="M2 22 L14 18 L24 24 L36 14 L48 19 L60 11 L72 16 L84 8 L96 12" stroke="#e4ff54" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle className="nuda-sparkline__dot" cx="96" cy="12" r="2.5" fill="#e4ff54" />
          <circle className="nuda-sparkline__pulse" cx="96" cy="12" r="2.5" fill="none" stroke="#e4ff54" strokeWidth="1" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-sparkline{width:120px;height:36px;padding:2px}
      .nuda-sparkline svg{width:100%;height:100%}
      .nuda-sparkline__pulse{transform-origin:96px 12px;animation:_sl-pulse 1.6s ease-out infinite}
      .nuda-sparkline__dot{filter:drop-shadow(0 0 4px #e4ff54)}
      @keyframes _sl-pulse{0%{r:2.5;opacity:.8}100%{r:10;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sparkline -->
<div class="nuda-sparkline" role="img" aria-label="Sparkline trend">
  <svg viewBox="0 0 100 30" fill="none" preserveAspectRatio="none">
    <path d="M2 22 L14 18 L24 24 L36 14 L48 19 L60 11 L72 16 L84 8 L96 12"
          stroke="#e4ff54" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round" />
    <circle class="nuda-sparkline__dot"   cx="96" cy="12" r="2.5" fill="#e4ff54" />
    <circle class="nuda-sparkline__pulse" cx="96" cy="12" r="2.5"
            fill="none" stroke="#e4ff54" stroke-width="1" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sparkline
   Compact trend line with a glowing end-dot pulse.
   Customize: --spark-color, --spark-width, --spark-height */

.nuda-sparkline {
  --spark-color: #e4ff54;
  --spark-width: 140px;
  --spark-height: 40px;
  width: var(--spark-width);
  height: var(--spark-height);
  padding: 2px;
}

.nuda-sparkline svg {
  width: 100%;
  height: 100%;
}

.nuda-sparkline__dot {
  filter: drop-shadow(0 0 4px var(--spark-color));
}

.nuda-sparkline__pulse {
  transform-origin: 96px 12px;
  animation: nuda-spark-pulse 1.6s ease-out infinite;
}

@keyframes nuda-spark-pulse {
  0%   { r: 2.5; opacity: 0.8; }
  100% { r: 10;  opacity: 0;   }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-sparkline__pulse { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Radial Gauge ─────────────── */
  {
    id: "radial-gauge",
    name: "Radial Gauge",
    category: "Charts",
    preview: (
      <div className="nuda-gauge" role="img" aria-label="Gauge, 65 of 100">
        <svg viewBox="0 0 100 60">
          <path d="M10 55 A 40 40 0 0 1 90 55" stroke="rgba(255,255,255,.08)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="nuda-gauge__arc" d="M10 55 A 40 40 0 0 1 90 55" stroke="#e4ff54" strokeWidth="6" fill="none" strokeLinecap="round" />
        </svg>
        <span className="nuda-gauge__value">65</span>
        <span className="nuda-gauge__label">/ 100</span>
      </div>
    ),
    cssInline: `
      .nuda-gauge{position:relative;width:110px;height:80px}
      .nuda-gauge svg{width:100%;height:75%;filter:drop-shadow(0 0 6px rgba(228,255,84,.2))}
      .nuda-gauge__arc{stroke-dasharray:126;stroke-dashoffset:126;animation:_gg-fill 2.4s cubic-bezier(.4,0,.2,1) infinite}
      .nuda-gauge__value{position:absolute;left:0;right:0;top:38%;text-align:center;font:700 22px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-gauge__label{position:absolute;left:0;right:0;bottom:0;text-align:center;font:500 9px ui-sans-serif,system-ui;color:#a1a1aa;letter-spacing:.05em}
      @keyframes _gg-fill{0%{stroke-dashoffset:126}40%,75%{stroke-dashoffset:44}100%{stroke-dashoffset:126}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Radial Gauge -->
<div class="nuda-gauge" role="img" aria-label="Gauge, 65 of 100">
  <svg viewBox="0 0 100 60">
    <path d="M10 55 A 40 40 0 0 1 90 55"
          stroke="rgba(255,255,255,.08)" stroke-width="6"
          fill="none" stroke-linecap="round" />
    <path class="nuda-gauge__arc" d="M10 55 A 40 40 0 0 1 90 55"
          stroke="#e4ff54" stroke-width="6"
          fill="none" stroke-linecap="round" />
  </svg>
  <span class="nuda-gauge__value">65</span>
  <span class="nuda-gauge__label">/ 100</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Radial Gauge
   Half-circle gauge filling to a percentage.
   Customize: --gauge-color, --gauge-track, --gauge-size */

.nuda-gauge {
  --gauge-color: #e4ff54;
  --gauge-track: rgba(255, 255, 255, 0.08);
  --gauge-size: 120px;
  position: relative;
  width: var(--gauge-size);
  height: calc(var(--gauge-size) * 0.7);
}

.nuda-gauge svg {
  width: 100%;
  height: 75%;
  filter: drop-shadow(0 0 6px rgba(228, 255, 84, 0.2));
}

.nuda-gauge__arc {
  stroke-dasharray: 126;
  stroke-dashoffset: 126;
  animation: nuda-gauge-fill 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.nuda-gauge__value {
  position: absolute;
  left: 0;
  right: 0;
  top: 38%;
  text-align: center;
  font: 700 1.5rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.nuda-gauge__label {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  font: 500 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  letter-spacing: 0.05em;
}

/* 126 ≈ π × 40. For 65%: 126 × 0.35 ≈ 44 */
@keyframes nuda-gauge-fill {
  0%        { stroke-dashoffset: 126; }
  40%, 75%  { stroke-dashoffset: 44; }
  100%      { stroke-dashoffset: 126; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-gauge__arc { stroke-dashoffset: 44; animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Heatmap ─────────────── */
  {
    id: "heatmap",
    name: "Heatmap",
    category: "Charts",
    preview: (
      <div className="nuda-heatmap" role="img" aria-label="Activity heatmap">
        {Array.from({ length: 35 }).map((_, i) => {
          const v = (i * 137) % 100;
          const cls = v > 75 ? "is-high" : v > 50 ? "is-mid" : v > 25 ? "is-low" : "is-empty";
          return <span key={i} className={`nuda-heatmap__cell ${cls}`} style={{ ["--d" as string]: `${(i * 0.04).toFixed(2)}s` }} />;
        })}
      </div>
    ),
    cssInline: `
      .nuda-heatmap{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;width:100px;height:80px;padding:4px}
      .nuda-heatmap__cell{aspect-ratio:1;border-radius:2px;background:rgba(255,255,255,.04);transform:scale(.6);opacity:0;animation:_hm-pop .5s cubic-bezier(.4,0,.2,1) var(--d) forwards,_hm-loop 4s ease-in-out var(--d) infinite}
      .nuda-heatmap__cell.is-low{background:rgba(228,255,84,.25)}
      .nuda-heatmap__cell.is-mid{background:rgba(228,255,84,.55)}
      .nuda-heatmap__cell.is-high{background:#e4ff54;box-shadow:0 0 4px rgba(228,255,84,.4)}
      @keyframes _hm-pop{to{transform:scale(1);opacity:1}}
      @keyframes _hm-loop{0%,100%{filter:brightness(1)}50%{filter:brightness(1.3)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Heatmap (5×7 grid — fill cell classes from your data) -->
<div class="nuda-heatmap" role="img" aria-label="Activity heatmap">
  <span class="nuda-heatmap__cell is-low"  style="--d: 0s"></span>
  <span class="nuda-heatmap__cell is-mid"  style="--d: .04s"></span>
  <span class="nuda-heatmap__cell is-high" style="--d: .08s"></span>
  <span class="nuda-heatmap__cell is-empty" style="--d: .12s"></span>
  <!-- ...repeat for 35 cells, vary class by intensity (is-empty / is-low / is-mid / is-high) -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Heatmap
   Activity grid (e.g. GitHub-style) with cells popping in then breathing.
   Customize: --hm-color, --hm-empty, --hm-cols */

.nuda-heatmap {
  --hm-color: #e4ff54;
  --hm-empty: rgba(255, 255, 255, 0.04);
  --hm-cols: 7;
  display: grid;
  grid-template-columns: repeat(var(--hm-cols), 1fr);
  gap: 3px;
  width: 100%;
  max-width: 220px;
  padding: 4px;
}

.nuda-heatmap__cell {
  aspect-ratio: 1;
  border-radius: 2px;
  background: var(--hm-empty);
  transform: scale(0.6);
  opacity: 0;
  animation:
    nuda-heatmap-pop 0.5s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s) forwards,
    nuda-heatmap-loop 4s ease-in-out var(--d, 0s) infinite;
}

.nuda-heatmap__cell.is-low  { background: rgba(228, 255, 84, 0.25); }
.nuda-heatmap__cell.is-mid  { background: rgba(228, 255, 84, 0.55); }
.nuda-heatmap__cell.is-high {
  background: var(--hm-color);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.4);
}

@keyframes nuda-heatmap-pop {
  to { transform: scale(1); opacity: 1; }
}

@keyframes nuda-heatmap-loop {
  0%, 100% { filter: brightness(1); }
  50%      { filter: brightness(1.3); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-heatmap__cell { animation: none; transform: scale(1); opacity: 1; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Area Chart ─────────────── */
  {
    id: "area-chart",
    name: "Area Chart",
    category: "Charts",
    preview: (
      <div className="nuda-area-chart" role="img" aria-label="Area chart">
        <svg viewBox="0 0 120 60" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="nac-grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#e4ff54" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#e4ff54" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path className="nuda-area-chart__area" d="M0 60 L0 40 C 15 28, 30 50, 45 35 S 75 22, 90 25 S 110 14, 120 18 L120 60 Z" fill="url(#nac-grad)" />
          <path className="nuda-area-chart__line" d="M0 40 C 15 28, 30 50, 45 35 S 75 22, 90 25 S 110 14, 120 18" stroke="#e4ff54" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-area-chart{width:130px;height:70px;padding:4px;overflow:hidden}
      .nuda-area-chart svg{width:100%;height:100%;filter:drop-shadow(0 1px 4px rgba(228,255,84,.18))}
      .nuda-area-chart__area{transform-origin:bottom;transform:scaleY(0);animation:_ac-rise 2.6s cubic-bezier(.4,0,.2,1) infinite}
      .nuda-area-chart__line{stroke-dasharray:280;stroke-dashoffset:280;animation:_ac-draw 2.6s cubic-bezier(.4,0,.2,1) infinite}
      @keyframes _ac-rise{0%{transform:scaleY(0);opacity:.4}40%,75%{transform:scaleY(1);opacity:1}100%{transform:scaleY(0);opacity:.4}}
      @keyframes _ac-draw{0%{stroke-dashoffset:280}40%,75%{stroke-dashoffset:0}100%{stroke-dashoffset:280}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Area Chart -->
<div class="nuda-area-chart" role="img" aria-label="Area chart">
  <svg viewBox="0 0 120 60" fill="none" preserveAspectRatio="none">
    <defs>
      <linearGradient id="nac-grad" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%"   stop-color="#e4ff54" stop-opacity="0.55" />
        <stop offset="100%" stop-color="#e4ff54" stop-opacity="0" />
      </linearGradient>
    </defs>
    <path class="nuda-area-chart__area"
          d="M0 60 L0 40 C 15 28, 30 50, 45 35 S 75 22, 90 25 S 110 14, 120 18 L120 60 Z"
          fill="url(#nac-grad)" />
    <path class="nuda-area-chart__line"
          d="M0 40 C 15 28, 30 50, 45 35 S 75 22, 90 25 S 110 14, 120 18"
          stroke="#e4ff54" stroke-width="1.8" stroke-linecap="round" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Area Chart
   Smooth filled area with a drawn outline above.
   Customize: --area-color, --area-duration */

.nuda-area-chart {
  --area-color: #e4ff54;
  --area-duration: 2.6s;
  width: 100%;
  max-width: 240px;
  height: 80px;
  padding: 4px;
  overflow: hidden;
}

.nuda-area-chart svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 1px 4px rgba(228, 255, 84, 0.18));
}

.nuda-area-chart__area {
  transform-origin: bottom;
  transform: scaleY(0);
  animation: nuda-area-rise var(--area-duration) cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.nuda-area-chart__line {
  stroke-dasharray: 280;
  stroke-dashoffset: 280;
  animation: nuda-area-draw var(--area-duration) cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes nuda-area-rise {
  0%        { transform: scaleY(0); opacity: 0.4; }
  40%, 75%  { transform: scaleY(1); opacity: 1;   }
  100%      { transform: scaleY(0); opacity: 0.4; }
}

@keyframes nuda-area-draw {
  0%        { stroke-dashoffset: 280; }
  40%, 75%  { stroke-dashoffset: 0;   }
  100%      { stroke-dashoffset: 280; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-area-chart__area { transform: scaleY(1); opacity: 1; animation: none; }
  .nuda-area-chart__line { stroke-dashoffset: 0; animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Stacked Bars ─────────────── */
  {
    id: "stacked-bars",
    name: "Stacked Bars",
    category: "Charts",
    preview: (
      <div className="nuda-stacked" role="img" aria-label="Stacked horizontal bars">
        <div className="nuda-stacked__row">
          <span className="nuda-stacked__label">A</span>
          <div className="nuda-stacked__track">
            <span className="nuda-stacked__seg nuda-stacked__seg--1" style={{ ["--w" as string]: "55%" }} />
            <span className="nuda-stacked__seg nuda-stacked__seg--2" style={{ ["--w" as string]: "25%" }} />
            <span className="nuda-stacked__seg nuda-stacked__seg--3" style={{ ["--w" as string]: "20%" }} />
          </div>
        </div>
        <div className="nuda-stacked__row">
          <span className="nuda-stacked__label">B</span>
          <div className="nuda-stacked__track">
            <span className="nuda-stacked__seg nuda-stacked__seg--1" style={{ ["--w" as string]: "35%" }} />
            <span className="nuda-stacked__seg nuda-stacked__seg--2" style={{ ["--w" as string]: "40%" }} />
            <span className="nuda-stacked__seg nuda-stacked__seg--3" style={{ ["--w" as string]: "25%" }} />
          </div>
        </div>
        <div className="nuda-stacked__row">
          <span className="nuda-stacked__label">C</span>
          <div className="nuda-stacked__track">
            <span className="nuda-stacked__seg nuda-stacked__seg--1" style={{ ["--w" as string]: "20%" }} />
            <span className="nuda-stacked__seg nuda-stacked__seg--2" style={{ ["--w" as string]: "55%" }} />
            <span className="nuda-stacked__seg nuda-stacked__seg--3" style={{ ["--w" as string]: "25%" }} />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-stacked{display:flex;flex-direction:column;gap:6px;width:140px;padding:4px}
      .nuda-stacked__row{display:flex;align-items:center;gap:8px}
      .nuda-stacked__label{font:700 9px ui-sans-serif,system-ui;color:#a1a1aa;width:10px}
      .nuda-stacked__track{flex:1;display:flex;height:10px;background:rgba(255,255,255,.04);border-radius:4px;overflow:hidden}
      .nuda-stacked__seg{height:100%;width:var(--w);transform:scaleX(0);transform-origin:left;animation:_sb-grow 1.4s cubic-bezier(.4,0,.2,1) forwards}
      .nuda-stacked__seg--1{background:#e4ff54;animation-delay:.05s}
      .nuda-stacked__seg--2{background:rgba(228,255,84,.55);animation-delay:.2s}
      .nuda-stacked__seg--3{background:rgba(228,255,84,.25);animation-delay:.35s}
      @keyframes _sb-grow{to{transform:scaleX(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Stacked Bars -->
<div class="nuda-stacked" role="img" aria-label="Stacked horizontal bars">
  <div class="nuda-stacked__row">
    <span class="nuda-stacked__label">A</span>
    <div class="nuda-stacked__track">
      <span class="nuda-stacked__seg nuda-stacked__seg--1" style="--w: 55%"></span>
      <span class="nuda-stacked__seg nuda-stacked__seg--2" style="--w: 25%"></span>
      <span class="nuda-stacked__seg nuda-stacked__seg--3" style="--w: 20%"></span>
    </div>
  </div>
  <!-- ...more rows -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Stacked Bars
   Horizontal bars with three segments growing left-to-right.
   Customize: --sb-c1, --sb-c2, --sb-c3, --sb-track, --sb-height */

.nuda-stacked {
  --sb-c1: #e4ff54;
  --sb-c2: rgba(228, 255, 84, 0.55);
  --sb-c3: rgba(228, 255, 84, 0.25);
  --sb-track: rgba(255, 255, 255, 0.04);
  --sb-height: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 240px;
  padding: 4px;
}

.nuda-stacked__row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nuda-stacked__label {
  font: 700 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  width: 14px;
}

.nuda-stacked__track {
  flex: 1;
  display: flex;
  height: var(--sb-height);
  background: var(--sb-track);
  border-radius: 4px;
  overflow: hidden;
}

.nuda-stacked__seg {
  height: 100%;
  width: var(--w, 0%);
  transform: scaleX(0);
  transform-origin: left;
  animation: nuda-stacked-grow 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.nuda-stacked__seg--1 { background: var(--sb-c1); animation-delay: 0.05s; }
.nuda-stacked__seg--2 { background: var(--sb-c2); animation-delay: 0.2s; }
.nuda-stacked__seg--3 { background: var(--sb-c3); animation-delay: 0.35s; }

@keyframes nuda-stacked-grow {
  to { transform: scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-stacked__seg { transform: scaleX(1); animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 9. Pie Slices ─────────────── */
  {
    id: "pie-slices",
    name: "Pie Slices",
    category: "Charts",
    preview: (
      <div className="nuda-pie" role="img" aria-label="Pie chart">
        <div className="nuda-pie__disc" />
        <div className="nuda-pie__hole" />
      </div>
    ),
    cssInline: `
      .nuda-pie{position:relative;width:80px;height:80px}
      .nuda-pie__disc{position:absolute;inset:0;border-radius:50%;background:conic-gradient(#e4ff54 0 35%,rgba(228,255,84,.55) 35% 60%,rgba(228,255,84,.25) 60% 85%,rgba(255,255,255,.08) 85% 100%);animation:_pp-spin 6s linear infinite;filter:drop-shadow(0 0 8px rgba(228,255,84,.18))}
      .nuda-pie__hole{position:absolute;inset:18px;border-radius:50%;background:radial-gradient(circle at center,#0e0e10 60%,#1a1a1f)}
      .nuda-pie__hole::before{content:"";position:absolute;inset:0;border-radius:50%;border:1px solid rgba(255,255,255,.04)}
      @keyframes _pp-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pie Slices -->
<div class="nuda-pie" role="img" aria-label="Pie chart">
  <div class="nuda-pie__disc"></div>
  <div class="nuda-pie__hole"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pie Slices
   Conic-gradient pie with a slow rotate. Edit the gradient stops for your data.
   Customize: --pie-size, --pie-hole, --pie-bg, the conic-gradient stops */

.nuda-pie {
  --pie-size: 96px;
  --pie-hole: 22px;
  --pie-bg: #0e0e10;
  position: relative;
  width: var(--pie-size);
  height: var(--pie-size);
}

.nuda-pie__disc {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  /* Edit stops to match your data: color1 0 X%, color2 X% Y%, ... */
  background: conic-gradient(
    #e4ff54 0 35%,
    rgba(228, 255, 84, 0.55) 35% 60%,
    rgba(228, 255, 84, 0.25) 60% 85%,
    rgba(255, 255, 255, 0.08) 85% 100%
  );
  animation: nuda-pie-spin 6s linear infinite;
  filter: drop-shadow(0 0 8px rgba(228, 255, 84, 0.18));
}

.nuda-pie__hole {
  position: absolute;
  inset: var(--pie-hole);
  border-radius: 50%;
  background: radial-gradient(circle at center, var(--pie-bg) 60%, #1a1a1f);
  border: 1px solid rgba(255, 255, 255, 0.04);
}

@keyframes nuda-pie-spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pie__disc { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. KPI Card ─────────────── */
  {
    id: "kpi-card",
    name: "KPI Card",
    category: "Charts",
    preview: (
      <div className="nuda-kpi" role="img" aria-label="Conversions metric, 87 percent">
        <div className="nuda-kpi__head">
          <span className="nuda-kpi__title">Conversions</span>
          <span className="nuda-kpi__delta">↑ 12%</span>
        </div>
        <div className="nuda-kpi__value">87<i>%</i></div>
        <div className="nuda-kpi__bar"><span /></div>
      </div>
    ),
    cssInline: `
      .nuda-kpi{width:140px;padding:10px 12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:10px;display:flex;flex-direction:column;gap:6px}
      .nuda-kpi__head{display:flex;justify-content:space-between;align-items:center}
      .nuda-kpi__title{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-kpi__delta{font:700 9px ui-sans-serif,system-ui;color:#e4ff54;background:rgba(228,255,84,.1);padding:2px 6px;border-radius:6px}
      .nuda-kpi__value{font:700 22px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-kpi__value i{font-size:12px;font-style:normal;color:#a1a1aa;margin-left:1px}
      .nuda-kpi__bar{position:relative;width:100%;height:4px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden}
      .nuda-kpi__bar span{position:absolute;left:0;top:0;height:100%;background:linear-gradient(90deg,#e4ff54,rgba(228,255,84,.6));border-radius:2px;width:0;animation:_kp-fill 2s cubic-bezier(.4,0,.2,1) forwards}
      @keyframes _kp-fill{to{width:87%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- KPI Card -->
<div class="nuda-kpi" role="img" aria-label="Conversions metric, 87 percent">
  <div class="nuda-kpi__head">
    <span class="nuda-kpi__title">Conversions</span>
    <span class="nuda-kpi__delta">↑ 12%</span>
  </div>
  <div class="nuda-kpi__value">87<i>%</i></div>
  <div class="nuda-kpi__bar"><span></span></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* KPI Card
   Compact metric card with title, delta, value, and growing bar.
   Customize: --kpi-target (the bar fill %), --kpi-color, --kpi-bg */

.nuda-kpi {
  --kpi-color: #e4ff54;
  --kpi-bg: rgba(255, 255, 255, 0.03);
  --kpi-target: 87%;
  width: 100%;
  max-width: 200px;
  padding: 12px 14px;
  background: var(--kpi-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nuda-kpi__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nuda-kpi__title {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nuda-kpi__delta {
  font: 700 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: var(--kpi-color);
  background: rgba(228, 255, 84, 0.1);
  padding: 2px 6px;
  border-radius: 6px;
}

.nuda-kpi__value {
  font: 700 1.6rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.nuda-kpi__value i {
  font-size: 0.8rem;
  font-style: normal;
  color: #a1a1aa;
  margin-left: 1px;
}

.nuda-kpi__bar {
  position: relative;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  overflow: hidden;
}

.nuda-kpi__bar span {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--kpi-color), rgba(228, 255, 84, 0.6));
  border-radius: 2px;
  animation: nuda-kpi-fill 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

@keyframes nuda-kpi-fill {
  to { width: var(--kpi-target); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-kpi__bar span { width: var(--kpi-target); animation: none; }
}`,
      },
    ],
  },
];
