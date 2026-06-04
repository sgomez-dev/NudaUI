import type { NudaComponent } from "./types";

const CAT = "KPI & Dashboard Widgets";

export const kpiWidgets: NudaComponent[] = [
  {
    id: "kpi-stat-card-trend",
    name: "Stat Card with Trend Arrow",
    category: CAT,
    preview: (
      <div className="nuda-kpi-stat-card">
        <div className="nuda-kpi-stat-card__header">
          <span className="nuda-kpi-stat-card__label">Monthly Revenue</span>
          <span className="nuda-kpi-stat-card__badge nuda-kpi-stat-card__badge--up">▲ 12.4%</span>
        </div>
        <div className="nuda-kpi-stat-card__value">$48,210</div>
        <div className="nuda-kpi-stat-card__sub">vs $42,890 last month</div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-stat-card{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.2rem 1.4rem;display:flex;flex-direction:column;gap:.5rem;min-width:220px;animation:_nuda-kpiFadeUp .35s ease-out}
      .nuda-kpi-stat-card__header{display:flex;align-items:center;justify-content:space-between}
      .nuda-kpi-stat-card__label{color:#777;font-size:.75rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em}
      .nuda-kpi-stat-card__badge{font-size:.72rem;font-weight:700;padding:.2rem .5rem;border-radius:6px}
      .nuda-kpi-stat-card__badge--up{background:rgba(228,255,84,.12);color:#e4ff54}
      .nuda-kpi-stat-card__badge--down{background:rgba(255,107,107,.12);color:#ff6b6b}
      .nuda-kpi-stat-card__value{color:#fafafa;font-size:2rem;font-weight:700;letter-spacing:-.03em;line-height:1}
      .nuda-kpi-stat-card__sub{color:#555;font-size:.72rem}
      @keyframes _nuda-kpiFadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-kpi-stat-card{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-stat-card">
  <div class="nuda-kpi-stat-card__header">
    <span class="nuda-kpi-stat-card__label">Monthly Revenue</span>
    <span class="nuda-kpi-stat-card__badge nuda-kpi-stat-card__badge--up">▲ 12.4%</span>
  </div>
  <div class="nuda-kpi-stat-card__value">$48,210</div>
  <div class="nuda-kpi-stat-card__sub">vs $42,890 last month</div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-sparkline-card",
    name: "Sparkline Card",
    category: CAT,
    preview: (
      <div className="nuda-kpi-sparkline">
        <div className="nuda-kpi-sparkline__info">
          <span className="nuda-kpi-sparkline__label">Active Users</span>
          <span className="nuda-kpi-sparkline__value">3,824</span>
          <span className="nuda-kpi-sparkline__delta nuda-kpi-sparkline__delta--up">+8.2%</span>
        </div>
        <svg className="nuda-kpi-sparkline__svg" viewBox="0 0 100 40" preserveAspectRatio="none">
          <polyline className="nuda-kpi-sparkline__area" points="0,35 15,28 30,32 45,18 60,22 75,10 90,14 100,8" />
          <polyline className="nuda-kpi-sparkline__line" points="0,35 15,28 30,32 45,18 60,22 75,10 90,14 100,8" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-kpi-sparkline{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.1rem 1.3rem;display:flex;flex-direction:column;gap:.6rem;min-width:220px}
      .nuda-kpi-sparkline__info{display:flex;align-items:baseline;gap:.6rem;flex-wrap:wrap}
      .nuda-kpi-sparkline__label{color:#777;font-size:.75rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em;margin-right:auto;width:100%}
      .nuda-kpi-sparkline__value{color:#fafafa;font-size:1.7rem;font-weight:700;letter-spacing:-.03em}
      .nuda-kpi-sparkline__delta{font-size:.75rem;font-weight:600;padding:.15rem .4rem;border-radius:5px}
      .nuda-kpi-sparkline__delta--up{background:rgba(228,255,84,.12);color:#e4ff54}
      .nuda-kpi-sparkline__delta--down{background:rgba(255,107,107,.12);color:#ff6b6b}
      .nuda-kpi-sparkline__svg{width:100%;height:52px}
      .nuda-kpi-sparkline__line{fill:none;stroke:#e4ff54;stroke-width:2;stroke-linejoin:round;stroke-linecap:round}
      .nuda-kpi-sparkline__area{fill:none;stroke:rgba(228,255,84,.15);stroke-width:14;stroke-linejoin:round;stroke-linecap:round}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-sparkline">
  <div class="nuda-kpi-sparkline__info">
    <span class="nuda-kpi-sparkline__label">Active Users</span>
    <span class="nuda-kpi-sparkline__value">3,824</span>
    <span class="nuda-kpi-sparkline__delta nuda-kpi-sparkline__delta--up">+8.2%</span>
  </div>
  <svg class="nuda-kpi-sparkline__svg" viewBox="0 0 100 40" preserveAspectRatio="none">
    <polyline class="nuda-kpi-sparkline__area" points="0,35 15,28 30,32 45,18 60,22 75,10 90,14 100,8"></polyline>
    <polyline class="nuda-kpi-sparkline__line" points="0,35 15,28 30,32 45,18 60,22 75,10 90,14 100,8"></polyline>
  </svg>
</div>`,
      },
    ],
  },
  {
    id: "kpi-progress-ring",
    name: "Progress Ring Metric",
    category: CAT,
    preview: (
      <div className="nuda-kpi-ring">
        <svg className="nuda-kpi-ring__svg" viewBox="0 0 80 80">
          <circle className="nuda-kpi-ring__track" cx="40" cy="40" r="34" />
          <circle className="nuda-kpi-ring__fill" cx="40" cy="40" r="34" />
        </svg>
        <div className="nuda-kpi-ring__center">
          <span className="nuda-kpi-ring__pct">73%</span>
          <span className="nuda-kpi-ring__sub">of goal</span>
        </div>
        <div className="nuda-kpi-ring__label">Q4 Target</div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-ring{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.2rem;display:flex;flex-direction:column;align-items:center;gap:.5rem;min-width:160px;position:relative}
      .nuda-kpi-ring__svg{width:90px;height:90px;transform:rotate(-90deg)}
      .nuda-kpi-ring__track{fill:none;stroke:rgba(255,255,255,.08);stroke-width:7}
      .nuda-kpi-ring__fill{fill:none;stroke:#e4ff54;stroke-width:7;stroke-linecap:round;stroke-dasharray:213.6;stroke-dashoffset:57.7;animation:_nuda-kpiRingDraw .9s ease-out}
      .nuda-kpi-ring__center{position:absolute;top:1.2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;height:90px;width:90px}
      .nuda-kpi-ring__pct{color:#fafafa;font-size:1.25rem;font-weight:700;letter-spacing:-.02em;line-height:1}
      .nuda-kpi-ring__sub{color:#555;font-size:.65rem}
      .nuda-kpi-ring__label{color:#777;font-size:.75rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em}
      @keyframes _nuda-kpiRingDraw{from{stroke-dashoffset:213.6}to{stroke-dashoffset:57.7}}
      @media(prefers-reduced-motion:reduce){.nuda-kpi-ring__fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-ring">
  <svg class="nuda-kpi-ring__svg" viewBox="0 0 80 80">
    <circle class="nuda-kpi-ring__track" cx="40" cy="40" r="34"></circle>
    <circle class="nuda-kpi-ring__fill" cx="40" cy="40" r="34"></circle>
  </svg>
  <div class="nuda-kpi-ring__center">
    <span class="nuda-kpi-ring__pct">73%</span>
    <span class="nuda-kpi-ring__sub">of goal</span>
  </div>
  <div class="nuda-kpi-ring__label">Q4 Target</div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-big-number-tile",
    name: "Big Number Tile",
    category: CAT,
    preview: (
      <div className="nuda-kpi-bignumber">
        <div className="nuda-kpi-bignumber__icon">📦</div>
        <div className="nuda-kpi-bignumber__val">1,204,839</div>
        <div className="nuda-kpi-bignumber__label">Total Orders Processed</div>
        <div className="nuda-kpi-bignumber__bar">
          <div className="nuda-kpi-bignumber__bar-fill" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-bignumber{background:linear-gradient(135deg,#1a1a1a 60%,#1f2200);border:1px solid rgba(228,255,84,.15);border-radius:16px;padding:1.3rem 1.5rem;display:flex;flex-direction:column;gap:.45rem;min-width:220px}
      .nuda-kpi-bignumber__icon{font-size:1.4rem;line-height:1}
      .nuda-kpi-bignumber__val{color:#e4ff54;font-size:2.2rem;font-weight:800;letter-spacing:-.04em;line-height:1.1}
      .nuda-kpi-bignumber__label{color:#777;font-size:.72rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em}
      .nuda-kpi-bignumber__bar{height:3px;background:rgba(255,255,255,.07);border-radius:2px;margin-top:.4rem;overflow:hidden}
      .nuda-kpi-bignumber__bar-fill{height:100%;width:82%;background:#e4ff54;border-radius:2px;animation:_nuda-kpiBarGrow .8s ease-out}
      @keyframes _nuda-kpiBarGrow{from{width:0}to{width:82%}}
      @media(prefers-reduced-motion:reduce){.nuda-kpi-bignumber__bar-fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-bignumber">
  <div class="nuda-kpi-bignumber__icon">📦</div>
  <div class="nuda-kpi-bignumber__val">1,204,839</div>
  <div class="nuda-kpi-bignumber__label">Total Orders Processed</div>
  <div class="nuda-kpi-bignumber__bar">
    <div class="nuda-kpi-bignumber__bar-fill"></div>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-delta-week",
    name: "Delta vs Last Week",
    category: CAT,
    preview: (
      <div className="nuda-kpi-delta">
        <div className="nuda-kpi-delta__row">
          <div className="nuda-kpi-delta__col">
            <span className="nuda-kpi-delta__period">This week</span>
            <span className="nuda-kpi-delta__num">9,410</span>
          </div>
          <div className="nuda-kpi-delta__divider" />
          <div className="nuda-kpi-delta__col">
            <span className="nuda-kpi-delta__period">Last week</span>
            <span className="nuda-kpi-delta__num nuda-kpi-delta__num--muted">8,235</span>
          </div>
        </div>
        <div className="nuda-kpi-delta__footer">
          <span className="nuda-kpi-delta__arrow">↑</span>
          <span className="nuda-kpi-delta__pct">+14.3%</span>
          <span className="nuda-kpi-delta__label">Signups</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-delta{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.1rem 1.3rem;display:flex;flex-direction:column;gap:.8rem;min-width:220px}
      .nuda-kpi-delta__row{display:flex;align-items:center;gap:1rem}
      .nuda-kpi-delta__col{display:flex;flex-direction:column;gap:.2rem;flex:1}
      .nuda-kpi-delta__divider{width:1px;height:2.5rem;background:rgba(255,255,255,.1);flex-shrink:0}
      .nuda-kpi-delta__period{color:#555;font-size:.7rem;font-weight:500;text-transform:uppercase;letter-spacing:.05em}
      .nuda-kpi-delta__num{color:#fafafa;font-size:1.5rem;font-weight:700;letter-spacing:-.02em}
      .nuda-kpi-delta__num--muted{color:#444}
      .nuda-kpi-delta__footer{display:flex;align-items:center;gap:.4rem;padding-top:.5rem;border-top:1px solid rgba(255,255,255,.06)}
      .nuda-kpi-delta__arrow{color:#e4ff54;font-size:1rem;font-weight:700}
      .nuda-kpi-delta__pct{color:#e4ff54;font-size:.85rem;font-weight:700}
      .nuda-kpi-delta__label{color:#555;font-size:.75rem;margin-left:auto}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-delta">
  <div class="nuda-kpi-delta__row">
    <div class="nuda-kpi-delta__col">
      <span class="nuda-kpi-delta__period">This week</span>
      <span class="nuda-kpi-delta__num">9,410</span>
    </div>
    <div class="nuda-kpi-delta__divider"></div>
    <div class="nuda-kpi-delta__col">
      <span class="nuda-kpi-delta__period">Last week</span>
      <span class="nuda-kpi-delta__num nuda-kpi-delta__num--muted">8,235</span>
    </div>
  </div>
  <div class="nuda-kpi-delta__footer">
    <span class="nuda-kpi-delta__arrow">↑</span>
    <span class="nuda-kpi-delta__pct">+14.3%</span>
    <span class="nuda-kpi-delta__label">Signups</span>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-goal-progress-bar",
    name: "Goal Progress Bar",
    category: CAT,
    preview: (
      <div className="nuda-kpi-goal">
        <div className="nuda-kpi-goal__header">
          <span className="nuda-kpi-goal__title">Annual ARR Goal</span>
          <span className="nuda-kpi-goal__pct">61%</span>
        </div>
        <div className="nuda-kpi-goal__track">
          <div className="nuda-kpi-goal__fill" />
          <div className="nuda-kpi-goal__milestone" style={{ left: "75%" }} />
        </div>
        <div className="nuda-kpi-goal__nums">
          <span className="nuda-kpi-goal__current">$610K</span>
          <span className="nuda-kpi-goal__target">Target: $1M</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-goal{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.2rem 1.4rem;display:flex;flex-direction:column;gap:.65rem;min-width:220px}
      .nuda-kpi-goal__header{display:flex;justify-content:space-between;align-items:center}
      .nuda-kpi-goal__title{color:#cfcfcf;font-size:.82rem;font-weight:600}
      .nuda-kpi-goal__pct{color:#e4ff54;font-size:.9rem;font-weight:700}
      .nuda-kpi-goal__track{height:8px;background:rgba(255,255,255,.08);border-radius:4px;position:relative;overflow:visible}
      .nuda-kpi-goal__fill{height:100%;width:61%;background:linear-gradient(90deg,#e4ff54,#b8d400);border-radius:4px;animation:_nuda-kpiGoalFill .8s ease-out}
      .nuda-kpi-goal__milestone{position:absolute;top:-3px;width:2px;height:14px;background:rgba(255,255,255,.35);border-radius:1px;transform:translateX(-50%)}
      .nuda-kpi-goal__nums{display:flex;justify-content:space-between}
      .nuda-kpi-goal__current{color:#fafafa;font-size:.82rem;font-weight:700}
      .nuda-kpi-goal__target{color:#555;font-size:.75rem}
      @keyframes _nuda-kpiGoalFill{from{width:0}to{width:61%}}
      @media(prefers-reduced-motion:reduce){.nuda-kpi-goal__fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-goal">
  <div class="nuda-kpi-goal__header">
    <span class="nuda-kpi-goal__title">Annual ARR Goal</span>
    <span class="nuda-kpi-goal__pct">61%</span>
  </div>
  <div class="nuda-kpi-goal__track">
    <div class="nuda-kpi-goal__fill"></div>
    <div class="nuda-kpi-goal__milestone" style="left:75%"></div>
  </div>
  <div class="nuda-kpi-goal__nums">
    <span class="nuda-kpi-goal__current">$610K</span>
    <span class="nuda-kpi-goal__target">Target: $1M</span>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-mini-bar-chart",
    name: "Mini Bar Chart Card",
    category: CAT,
    preview: (
      <div className="nuda-kpi-barchart">
        <div className="nuda-kpi-barchart__header">
          <span className="nuda-kpi-barchart__title">Weekly Sessions</span>
          <span className="nuda-kpi-barchart__total">24.6K</span>
        </div>
        <div className="nuda-kpi-barchart__bars">
          {[55, 72, 48, 90, 65, 83, 70].map((h, i) => (
            <div key={i} className="nuda-kpi-barchart__bar-wrap">
              <div className="nuda-kpi-barchart__bar" style={{ height: `${h}%` }} />
              <span className="nuda-kpi-barchart__day">{["M","T","W","T","F","S","S"][i]}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-barchart{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.1rem 1.3rem;display:flex;flex-direction:column;gap:.8rem;min-width:220px}
      .nuda-kpi-barchart__header{display:flex;justify-content:space-between;align-items:center}
      .nuda-kpi-barchart__title{color:#777;font-size:.75rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em}
      .nuda-kpi-barchart__total{color:#fafafa;font-size:1.1rem;font-weight:700}
      .nuda-kpi-barchart__bars{display:flex;align-items:flex-end;gap:5px;height:64px}
      .nuda-kpi-barchart__bar-wrap{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1}
      .nuda-kpi-barchart__bar{width:100%;background:#e4ff54;border-radius:3px 3px 0 0;min-height:4px;animation:_nuda-kpiBarUp .5s ease-out}
      .nuda-kpi-barchart__bar-wrap:last-child .nuda-kpi-barchart__bar{background:rgba(228,255,84,.4)}
      .nuda-kpi-barchart__day{color:#444;font-size:.6rem}
      @keyframes _nuda-kpiBarUp{from{transform:scaleY(0);transform-origin:bottom}to{transform:scaleY(1);transform-origin:bottom}}
      @media(prefers-reduced-motion:reduce){.nuda-kpi-barchart__bar{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-barchart">
  <div class="nuda-kpi-barchart__header">
    <span class="nuda-kpi-barchart__title">Weekly Sessions</span>
    <span class="nuda-kpi-barchart__total">24.6K</span>
  </div>
  <div class="nuda-kpi-barchart__bars">
    <div class="nuda-kpi-barchart__bar-wrap">
      <div class="nuda-kpi-barchart__bar" style="height:55%"></div>
      <span class="nuda-kpi-barchart__day">M</span>
    </div>
    <div class="nuda-kpi-barchart__bar-wrap">
      <div class="nuda-kpi-barchart__bar" style="height:72%"></div>
      <span class="nuda-kpi-barchart__day">T</span>
    </div>
    <div class="nuda-kpi-barchart__bar-wrap">
      <div class="nuda-kpi-barchart__bar" style="height:48%"></div>
      <span class="nuda-kpi-barchart__day">W</span>
    </div>
    <div class="nuda-kpi-barchart__bar-wrap">
      <div class="nuda-kpi-barchart__bar" style="height:90%"></div>
      <span class="nuda-kpi-barchart__day">T</span>
    </div>
    <div class="nuda-kpi-barchart__bar-wrap">
      <div class="nuda-kpi-barchart__bar" style="height:65%"></div>
      <span class="nuda-kpi-barchart__day">F</span>
    </div>
    <div class="nuda-kpi-barchart__bar-wrap">
      <div class="nuda-kpi-barchart__bar" style="height:83%"></div>
      <span class="nuda-kpi-barchart__day">S</span>
    </div>
    <div class="nuda-kpi-barchart__bar-wrap">
      <div class="nuda-kpi-barchart__bar" style="height:70%"></div>
      <span class="nuda-kpi-barchart__day">S</span>
    </div>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-donut-metric",
    name: "Donut Metric",
    category: CAT,
    preview: (
      <div className="nuda-kpi-donut">
        <div className="nuda-kpi-donut__chart-wrap">
          <svg className="nuda-kpi-donut__svg" viewBox="0 0 80 80">
            <circle className="nuda-kpi-donut__bg" cx="40" cy="40" r="30" />
            <circle className="nuda-kpi-donut__seg nuda-kpi-donut__seg--a" cx="40" cy="40" r="30" />
            <circle className="nuda-kpi-donut__seg nuda-kpi-donut__seg--b" cx="40" cy="40" r="30" />
            <circle className="nuda-kpi-donut__seg nuda-kpi-donut__seg--c" cx="40" cy="40" r="30" />
          </svg>
          <div className="nuda-kpi-donut__total">
            <span className="nuda-kpi-donut__total-num">2.4K</span>
            <span className="nuda-kpi-donut__total-lbl">tickets</span>
          </div>
        </div>
        <div className="nuda-kpi-donut__legend">
          <div className="nuda-kpi-donut__legend-item"><span className="nuda-kpi-donut__dot nuda-kpi-donut__dot--a" />Open <strong>58%</strong></div>
          <div className="nuda-kpi-donut__legend-item"><span className="nuda-kpi-donut__dot nuda-kpi-donut__dot--b" />Closed <strong>30%</strong></div>
          <div className="nuda-kpi-donut__legend-item"><span className="nuda-kpi-donut__dot nuda-kpi-donut__dot--c" />Pending <strong>12%</strong></div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-donut{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.1rem 1.3rem;display:flex;align-items:center;gap:1.1rem;min-width:240px}
      .nuda-kpi-donut__chart-wrap{position:relative;flex-shrink:0;width:82px;height:82px;display:flex;align-items:center;justify-content:center}
      .nuda-kpi-donut__svg{width:82px;height:82px;transform:rotate(-90deg)}
      .nuda-kpi-donut__bg{fill:none;stroke:rgba(255,255,255,.07);stroke-width:12}
      .nuda-kpi-donut__seg{fill:none;stroke-width:12;stroke-linecap:butt}
      .nuda-kpi-donut__seg--a{stroke:#e4ff54;stroke-dasharray:109.3 188.5;stroke-dashoffset:0}
      .nuda-kpi-donut__seg--b{stroke:#4a9eff;stroke-dasharray:56.6 188.5;stroke-dashoffset:-109.3}
      .nuda-kpi-donut__seg--c{stroke:#ff6b6b;stroke-dasharray:22.6 188.5;stroke-dashoffset:-165.9}
      .nuda-kpi-donut__total{position:absolute;display:flex;flex-direction:column;align-items:center;line-height:1.1}
      .nuda-kpi-donut__total-num{color:#fafafa;font-size:1rem;font-weight:700}
      .nuda-kpi-donut__total-lbl{color:#555;font-size:.58rem}
      .nuda-kpi-donut__legend{display:flex;flex-direction:column;gap:.4rem}
      .nuda-kpi-donut__legend-item{display:flex;align-items:center;gap:.4rem;color:#cfcfcf;font-size:.72rem}
      .nuda-kpi-donut__legend-item strong{color:#fafafa;margin-left:auto;padding-left:.6rem}
      .nuda-kpi-donut__dot{width:8px;height:8px;border-radius:50%;flex-shrink:0;display:inline-block}
      .nuda-kpi-donut__dot--a{background:#e4ff54}
      .nuda-kpi-donut__dot--b{background:#4a9eff}
      .nuda-kpi-donut__dot--c{background:#ff6b6b}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-donut">
  <div class="nuda-kpi-donut__chart-wrap">
    <svg class="nuda-kpi-donut__svg" viewBox="0 0 80 80">
      <circle class="nuda-kpi-donut__bg" cx="40" cy="40" r="30"></circle>
      <circle class="nuda-kpi-donut__seg nuda-kpi-donut__seg--a" cx="40" cy="40" r="30"></circle>
      <circle class="nuda-kpi-donut__seg nuda-kpi-donut__seg--b" cx="40" cy="40" r="30"></circle>
      <circle class="nuda-kpi-donut__seg nuda-kpi-donut__seg--c" cx="40" cy="40" r="30"></circle>
    </svg>
    <div class="nuda-kpi-donut__total">
      <span class="nuda-kpi-donut__total-num">2.4K</span>
      <span class="nuda-kpi-donut__total-lbl">tickets</span>
    </div>
  </div>
  <div class="nuda-kpi-donut__legend">
    <div class="nuda-kpi-donut__legend-item"><span class="nuda-kpi-donut__dot nuda-kpi-donut__dot--a"></span>Open <strong>58%</strong></div>
    <div class="nuda-kpi-donut__legend-item"><span class="nuda-kpi-donut__dot nuda-kpi-donut__dot--b"></span>Closed <strong>30%</strong></div>
    <div class="nuda-kpi-donut__legend-item"><span class="nuda-kpi-donut__dot nuda-kpi-donut__dot--c"></span>Pending <strong>12%</strong></div>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-dual-stat",
    name: "Comparison Dual Stat",
    category: CAT,
    preview: (
      <div className="nuda-kpi-dual">
        <div className="nuda-kpi-dual__label">Bounce Rate</div>
        <div className="nuda-kpi-dual__cols">
          <div className="nuda-kpi-dual__col">
            <span className="nuda-kpi-dual__tag">Mobile</span>
            <span className="nuda-kpi-dual__val nuda-kpi-dual__val--bad">62.1%</span>
            <div className="nuda-kpi-dual__bar"><div className="nuda-kpi-dual__bar-fill nuda-kpi-dual__bar-fill--bad" style={{ width: "62%" }} /></div>
          </div>
          <div className="nuda-kpi-dual__col">
            <span className="nuda-kpi-dual__tag">Desktop</span>
            <span className="nuda-kpi-dual__val nuda-kpi-dual__val--good">34.7%</span>
            <div className="nuda-kpi-dual__bar"><div className="nuda-kpi-dual__bar-fill nuda-kpi-dual__bar-fill--good" style={{ width: "35%" }} /></div>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-dual{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.1rem 1.3rem;display:flex;flex-direction:column;gap:.8rem;min-width:220px}
      .nuda-kpi-dual__label{color:#777;font-size:.75rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em}
      .nuda-kpi-dual__cols{display:flex;gap:1rem}
      .nuda-kpi-dual__col{flex:1;display:flex;flex-direction:column;gap:.35rem}
      .nuda-kpi-dual__tag{color:#555;font-size:.7rem}
      .nuda-kpi-dual__val{font-size:1.4rem;font-weight:700;letter-spacing:-.02em}
      .nuda-kpi-dual__val--bad{color:#ff6b6b}
      .nuda-kpi-dual__val--good{color:#e4ff54}
      .nuda-kpi-dual__bar{height:4px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden}
      .nuda-kpi-dual__bar-fill{height:100%;border-radius:2px;animation:_nuda-kpiDualFill .7s ease-out}
      .nuda-kpi-dual__bar-fill--bad{background:#ff6b6b}
      .nuda-kpi-dual__bar-fill--good{background:#e4ff54}
      @keyframes _nuda-kpiDualFill{from{width:0}to{}}
      @media(prefers-reduced-motion:reduce){.nuda-kpi-dual__bar-fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-dual">
  <div class="nuda-kpi-dual__label">Bounce Rate</div>
  <div class="nuda-kpi-dual__cols">
    <div class="nuda-kpi-dual__col">
      <span class="nuda-kpi-dual__tag">Mobile</span>
      <span class="nuda-kpi-dual__val nuda-kpi-dual__val--bad">62.1%</span>
      <div class="nuda-kpi-dual__bar"><div class="nuda-kpi-dual__bar-fill nuda-kpi-dual__bar-fill--bad" style="width:62%"></div></div>
    </div>
    <div class="nuda-kpi-dual__col">
      <span class="nuda-kpi-dual__tag">Desktop</span>
      <span class="nuda-kpi-dual__val nuda-kpi-dual__val--good">34.7%</span>
      <div class="nuda-kpi-dual__bar"><div class="nuda-kpi-dual__bar-fill nuda-kpi-dual__bar-fill--good" style="width:35%"></div></div>
    </div>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-live-counter",
    name: "Live Counter Tile",
    category: CAT,
    preview: (
      <div className="nuda-kpi-live">
        <div className="nuda-kpi-live__pulse-wrap">
          <span className="nuda-kpi-live__pulse" />
          <span className="nuda-kpi-live__status">LIVE</span>
        </div>
        <div className="nuda-kpi-live__num">12,047</div>
        <div className="nuda-kpi-live__label">Concurrent Visitors</div>
        <div className="nuda-kpi-live__ticks">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="nuda-kpi-live__tick" style={{ animationDelay: `${i * 0.08}s` }} />
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-live{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.1rem 1.3rem;display:flex;flex-direction:column;gap:.45rem;min-width:200px}
      .nuda-kpi-live__pulse-wrap{display:flex;align-items:center;gap:.45rem}
      .nuda-kpi-live__pulse{width:8px;height:8px;border-radius:50%;background:#ff6b6b;animation:_nuda-kpiPulse 1.2s infinite}
      .nuda-kpi-live__status{color:#ff6b6b;font-size:.65rem;font-weight:700;letter-spacing:.1em}
      .nuda-kpi-live__num{color:#fafafa;font-size:2rem;font-weight:800;letter-spacing:-.04em;line-height:1.1}
      .nuda-kpi-live__label{color:#555;font-size:.72rem}
      .nuda-kpi-live__ticks{display:flex;align-items:flex-end;gap:2px;height:28px;margin-top:.4rem}
      .nuda-kpi-live__tick{display:block;width:5px;background:rgba(255,107,107,.5);border-radius:1px;animation:_nuda-kpiTick .8s ease-in-out infinite alternate}
      .nuda-kpi-live__tick:nth-child(odd){height:60%}
      .nuda-kpi-live__tick:nth-child(even){height:85%}
      @keyframes _nuda-kpiPulse{0%,100%{box-shadow:0 0 0 0 rgba(255,107,107,.5)}50%{box-shadow:0 0 0 6px rgba(255,107,107,0)}}
      @keyframes _nuda-kpiTick{from{transform:scaleY(.5)}to{transform:scaleY(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-kpi-live__pulse,.nuda-kpi-live__tick{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-live">
  <div class="nuda-kpi-live__pulse-wrap">
    <span class="nuda-kpi-live__pulse"></span>
    <span class="nuda-kpi-live__status">LIVE</span>
  </div>
  <div class="nuda-kpi-live__num">12,047</div>
  <div class="nuda-kpi-live__label">Concurrent Visitors</div>
  <div class="nuda-kpi-live__ticks">
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
    <span class="nuda-kpi-live__tick"></span>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-gauge-widget",
    name: "Gauge Widget",
    category: CAT,
    preview: (
      <div className="nuda-kpi-gauge">
        <svg className="nuda-kpi-gauge__svg" viewBox="0 0 100 60">
          <path className="nuda-kpi-gauge__arc-bg" d="M10,55 A40,40 0 0,1 90,55" />
          <path className="nuda-kpi-gauge__arc-fill" d="M10,55 A40,40 0 0,1 90,55" />
          <line className="nuda-kpi-gauge__needle" x1="50" y1="55" x2="50" y2="18" />
          <circle className="nuda-kpi-gauge__needle-hub" cx="50" cy="55" r="4" />
        </svg>
        <div className="nuda-kpi-gauge__labels">
          <span className="nuda-kpi-gauge__min">0</span>
          <span className="nuda-kpi-gauge__val">67</span>
          <span className="nuda-kpi-gauge__max">100</span>
        </div>
        <div className="nuda-kpi-gauge__title">CPU Load %</div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-gauge{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1rem 1.3rem .8rem;display:flex;flex-direction:column;align-items:center;gap:.1rem;min-width:190px}
      .nuda-kpi-gauge__svg{width:130px;height:80px;overflow:visible}
      .nuda-kpi-gauge__arc-bg{fill:none;stroke:rgba(255,255,255,.08);stroke-width:8;stroke-linecap:round}
      .nuda-kpi-gauge__arc-fill{fill:none;stroke:#e4ff54;stroke-width:8;stroke-linecap:round;stroke-dasharray:125.7;stroke-dashoffset:41.5;animation:_nuda-kpiGaugeDraw .8s ease-out}
      .nuda-kpi-gauge__needle{stroke:#fafafa;stroke-width:2;stroke-linecap:round;transform-origin:50px 55px;transform:rotate(14deg);animation:_nuda-kpiNeedle .8s ease-out}
      .nuda-kpi-gauge__needle-hub{fill:#fafafa}
      .nuda-kpi-gauge__labels{display:flex;justify-content:space-between;width:130px;margin-top:-4px}
      .nuda-kpi-gauge__min,.nuda-kpi-gauge__max{color:#444;font-size:.65rem}
      .nuda-kpi-gauge__val{color:#e4ff54;font-size:1.1rem;font-weight:700}
      .nuda-kpi-gauge__title{color:#777;font-size:.72rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em;margin-top:.2rem}
      @keyframes _nuda-kpiGaugeDraw{from{stroke-dashoffset:125.7}to{stroke-dashoffset:41.5}}
      @keyframes _nuda-kpiNeedle{from{transform:rotate(-90deg)}to{transform:rotate(14deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-kpi-gauge__arc-fill,.nuda-kpi-gauge__needle{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-gauge">
  <svg class="nuda-kpi-gauge__svg" viewBox="0 0 100 60">
    <path class="nuda-kpi-gauge__arc-bg" d="M10,55 A40,40 0 0,1 90,55"></path>
    <path class="nuda-kpi-gauge__arc-fill" d="M10,55 A40,40 0 0,1 90,55"></path>
    <line class="nuda-kpi-gauge__needle" x1="50" y1="55" x2="50" y2="18"></line>
    <circle class="nuda-kpi-gauge__needle-hub" cx="50" cy="55" r="4"></circle>
  </svg>
  <div class="nuda-kpi-gauge__labels">
    <span class="nuda-kpi-gauge__min">0</span>
    <span class="nuda-kpi-gauge__val">67</span>
    <span class="nuda-kpi-gauge__max">100</span>
  </div>
  <div class="nuda-kpi-gauge__title">CPU Load %</div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-uptime-status",
    name: "Status Uptime Tile",
    category: CAT,
    preview: (
      <div className="nuda-kpi-uptime">
        <div className="nuda-kpi-uptime__header">
          <span className="nuda-kpi-uptime__title">System Status</span>
          <span className="nuda-kpi-uptime__badge nuda-kpi-uptime__badge--ok">Operational</span>
        </div>
        <div className="nuda-kpi-uptime__pct">99.97%</div>
        <div className="nuda-kpi-uptime__label">Uptime last 90 days</div>
        <div className="nuda-kpi-uptime__bars">
          {[...Array(30)].map((_, i) => (
            <div key={i} className={`nuda-kpi-uptime__bar ${i === 11 || i === 23 ? "nuda-kpi-uptime__bar--down" : "nuda-kpi-uptime__bar--ok"}`} />
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-uptime{background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.1rem 1.3rem;display:flex;flex-direction:column;gap:.5rem;min-width:230px}
      .nuda-kpi-uptime__header{display:flex;justify-content:space-between;align-items:center}
      .nuda-kpi-uptime__title{color:#cfcfcf;font-size:.82rem;font-weight:600}
      .nuda-kpi-uptime__badge{font-size:.68rem;font-weight:700;padding:.2rem .55rem;border-radius:20px}
      .nuda-kpi-uptime__badge--ok{background:rgba(228,255,84,.12);color:#e4ff54}
      .nuda-kpi-uptime__badge--warn{background:rgba(255,170,0,.12);color:#ffaa00}
      .nuda-kpi-uptime__badge--err{background:rgba(255,107,107,.12);color:#ff6b6b}
      .nuda-kpi-uptime__pct{color:#fafafa;font-size:1.8rem;font-weight:800;letter-spacing:-.03em;line-height:1}
      .nuda-kpi-uptime__label{color:#555;font-size:.72rem}
      .nuda-kpi-uptime__bars{display:flex;gap:2px;align-items:flex-end;height:24px;margin-top:.3rem}
      .nuda-kpi-uptime__bar{flex:1;height:100%;border-radius:2px}
      .nuda-kpi-uptime__bar--ok{background:rgba(228,255,84,.55)}
      .nuda-kpi-uptime__bar--down{background:#ff6b6b;height:60%}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-uptime">
  <div class="nuda-kpi-uptime__header">
    <span class="nuda-kpi-uptime__title">System Status</span>
    <span class="nuda-kpi-uptime__badge nuda-kpi-uptime__badge--ok">Operational</span>
  </div>
  <div class="nuda-kpi-uptime__pct">99.97%</div>
  <div class="nuda-kpi-uptime__label">Uptime last 90 days</div>
  <div class="nuda-kpi-uptime__bars">
    <!-- Repeat nuda-kpi-uptime__bar--ok / nuda-kpi-uptime__bar--down as needed -->
    <div class="nuda-kpi-uptime__bar nuda-kpi-uptime__bar--ok"></div>
    <div class="nuda-kpi-uptime__bar nuda-kpi-uptime__bar--ok"></div>
    <div class="nuda-kpi-uptime__bar nuda-kpi-uptime__bar--down"></div>
    <div class="nuda-kpi-uptime__bar nuda-kpi-uptime__bar--ok"></div>
    <div class="nuda-kpi-uptime__bar nuda-kpi-uptime__bar--ok"></div>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-revenue-currency",
    name: "Revenue Card with Currency",
    category: CAT,
    preview: (
      <div className="nuda-kpi-revenue">
        <div className="nuda-kpi-revenue__top">
          <div>
            <div className="nuda-kpi-revenue__label">Total Revenue</div>
            <div className="nuda-kpi-revenue__val">
              <span className="nuda-kpi-revenue__currency">USD</span>
              2,847,500
            </div>
          </div>
          <svg className="nuda-kpi-revenue__icon" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="8" fill="rgba(228,255,84,.1)" />
            <path d="M12 6v12M9 9h4.5a1.5 1.5 0 0 1 0 3H9m0 0h5.25a1.5 1.5 0 0 1 0 3H9" stroke="#e4ff54" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="nuda-kpi-revenue__row">
          <div className="nuda-kpi-revenue__seg">
            <span className="nuda-kpi-revenue__seg-label">MRR</span>
            <span className="nuda-kpi-revenue__seg-val">$237.3K</span>
          </div>
          <div className="nuda-kpi-revenue__seg">
            <span className="nuda-kpi-revenue__seg-label">ARR</span>
            <span className="nuda-kpi-revenue__seg-val">$2.85M</span>
          </div>
          <div className="nuda-kpi-revenue__seg">
            <span className="nuda-kpi-revenue__seg-label">Growth</span>
            <span className="nuda-kpi-revenue__seg-val nuda-kpi-revenue__seg-val--up">+23%</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-kpi-revenue{background:linear-gradient(135deg,#1a1a1a,#161a00);border:1px solid rgba(228,255,84,.12);border-radius:16px;padding:1.2rem 1.4rem;display:flex;flex-direction:column;gap:.9rem;min-width:240px}
      .nuda-kpi-revenue__top{display:flex;justify-content:space-between;align-items:flex-start}
      .nuda-kpi-revenue__label{color:#777;font-size:.73rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.25rem}
      .nuda-kpi-revenue__val{color:#fafafa;font-size:1.7rem;font-weight:800;letter-spacing:-.03em;display:flex;align-items:baseline;gap:.35rem}
      .nuda-kpi-revenue__currency{color:#777;font-size:.75rem;font-weight:600}
      .nuda-kpi-revenue__icon{width:36px;height:36px;flex-shrink:0}
      .nuda-kpi-revenue__row{display:flex;gap:.5rem;padding-top:.7rem;border-top:1px solid rgba(255,255,255,.07)}
      .nuda-kpi-revenue__seg{flex:1;display:flex;flex-direction:column;gap:.2rem}
      .nuda-kpi-revenue__seg-label{color:#555;font-size:.65rem;text-transform:uppercase;letter-spacing:.05em}
      .nuda-kpi-revenue__seg-val{color:#cfcfcf;font-size:.85rem;font-weight:600}
      .nuda-kpi-revenue__seg-val--up{color:#e4ff54}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-revenue">
  <div class="nuda-kpi-revenue__top">
    <div>
      <div class="nuda-kpi-revenue__label">Total Revenue</div>
      <div class="nuda-kpi-revenue__val">
        <span class="nuda-kpi-revenue__currency">USD</span>
        2,847,500
      </div>
    </div>
    <svg class="nuda-kpi-revenue__icon" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="8" fill="rgba(228,255,84,.1)"></rect>
      <path d="M12 6v12M9 9h4.5a1.5 1.5 0 0 1 0 3H9m0 0h5.25a1.5 1.5 0 0 1 0 3H9" stroke="#e4ff54" stroke-width="1.5" stroke-linecap="round"></path>
    </svg>
  </div>
  <div class="nuda-kpi-revenue__row">
    <div class="nuda-kpi-revenue__seg">
      <span class="nuda-kpi-revenue__seg-label">MRR</span>
      <span class="nuda-kpi-revenue__seg-val">$237.3K</span>
    </div>
    <div class="nuda-kpi-revenue__seg">
      <span class="nuda-kpi-revenue__seg-label">ARR</span>
      <span class="nuda-kpi-revenue__seg-val">$2.85M</span>
    </div>
    <div class="nuda-kpi-revenue__seg">
      <span class="nuda-kpi-revenue__seg-label">Growth</span>
      <span class="nuda-kpi-revenue__seg-val nuda-kpi-revenue__seg-val--up">+23%</span>
    </div>
  </div>
</div>`,
      },
    ],
  },
  {
    id: "kpi-conversion-funnel",
    name: "Conversion Funnel Mini",
    category: CAT,
    preview: (
      <div className="nuda-kpi-funnel">
        <div className="nuda-kpi-funnel__title">Conversion Funnel</div>
        {[
          { stage: "Visits", count: "18,400", pct: 100, color: "#e4ff54" },
          { stage: "Sign-ups", count: "4,320", pct: 64, color: "#b8d400" },
          { stage: "Activated", count: "1,870", pct: 38, color: "#88a800" },
          { stage: "Paid", count: "540", pct: 18, color: "#ff6b6b" },
        ].map((row) => (
          <div key={row.stage} className="nuda-kpi-funnel__row">
            <span className="nuda-kpi-funnel__stage">{row.stage}</span>
            <div className="nuda-kpi-funnel__bar-wrap">
              <div className="nuda-kpi-funnel__bar" style={{ width: `${row.pct}%`, background: row.color }} />
            </div>
            <span className="nuda-kpi-funnel__count">{row.count}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-kpi-funnel{background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:1.1rem 1.3rem;display:flex;flex-direction:column;gap:.55rem;min-width:240px}
      .nuda-kpi-funnel__title{color:#777;font-size:.73rem;font-weight:500;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.2rem}
      .nuda-kpi-funnel__row{display:flex;align-items:center;gap:.6rem}
      .nuda-kpi-funnel__stage{color:#cfcfcf;font-size:.72rem;width:62px;flex-shrink:0}
      .nuda-kpi-funnel__bar-wrap{flex:1;height:7px;background:rgba(255,255,255,.07);border-radius:3px;overflow:hidden}
      .nuda-kpi-funnel__bar{height:100%;border-radius:3px;animation:_nuda-kpiFunnelFill .7s ease-out}
      .nuda-kpi-funnel__count{color:#555;font-size:.7rem;width:44px;text-align:right;flex-shrink:0}
      @keyframes _nuda-kpiFunnelFill{from{width:0}to{}}
      @media(prefers-reduced-motion:reduce){.nuda-kpi-funnel__bar{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-kpi-funnel">
  <div class="nuda-kpi-funnel__title">Conversion Funnel</div>
  <div class="nuda-kpi-funnel__row">
    <span class="nuda-kpi-funnel__stage">Visits</span>
    <div class="nuda-kpi-funnel__bar-wrap">
      <div class="nuda-kpi-funnel__bar" style="width:100%;background:#e4ff54"></div>
    </div>
    <span class="nuda-kpi-funnel__count">18,400</span>
  </div>
  <div class="nuda-kpi-funnel__row">
    <span class="nuda-kpi-funnel__stage">Sign-ups</span>
    <div class="nuda-kpi-funnel__bar-wrap">
      <div class="nuda-kpi-funnel__bar" style="width:64%;background:#b8d400"></div>
    </div>
    <span class="nuda-kpi-funnel__count">4,320</span>
  </div>
  <div class="nuda-kpi-funnel__row">
    <span class="nuda-kpi-funnel__stage">Activated</span>
    <div class="nuda-kpi-funnel__bar-wrap">
      <div class="nuda-kpi-funnel__bar" style="width:38%;background:#88a800"></div>
    </div>
    <span class="nuda-kpi-funnel__count">1,870</span>
  </div>
  <div class="nuda-kpi-funnel__row">
    <span class="nuda-kpi-funnel__stage">Paid</span>
    <div class="nuda-kpi-funnel__bar-wrap">
      <div class="nuda-kpi-funnel__bar" style="width:18%;background:#ff6b6b"></div>
    </div>
    <span class="nuda-kpi-funnel__count">540</span>
  </div>
</div>`,
      },
    ],
  },
];
