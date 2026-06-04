import type { NudaComponent } from "./types";

const CAT = "Countdowns";

export const countdownsExtra: NudaComponent[] = [
  /* ─────────────── CIRCULAR RING COUNTDOWN ─────────────── */
  {
    id: "cd2-circular-ring",
    name: "Circular Ring Countdown",
    category: CAT,
    preview: (
      <div className="nuda-cd2-ring" role="timer" aria-label="Circular ring countdown">
        <svg className="nuda-cd2-ring__svg" viewBox="0 0 120 120" width="110" height="110">
          <circle className="nuda-cd2-ring__bg" cx="60" cy="60" r="52" />
          <circle className="nuda-cd2-ring__track" cx="60" cy="60" r="52" />
          <circle className="nuda-cd2-ring__progress" cx="60" cy="60" r="52" />
        </svg>
        <div className="nuda-cd2-ring__center">
          <span className="nuda-cd2-ring__num">47</span>
          <span className="nuda-cd2-ring__unit">sec</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cd2-ring{position:relative;display:inline-flex;align-items:center;justify-content:center;width:110px;height:110px}
      .nuda-cd2-ring__svg{transform:rotate(-90deg);position:absolute;top:0;left:0}
      .nuda-cd2-ring__bg{fill:#1a1a1a;stroke:none}
      .nuda-cd2-ring__track{fill:none;stroke:rgba(255,255,255,.07);stroke-width:7}
      .nuda-cd2-ring__progress{fill:none;stroke:#e4ff54;stroke-width:7;stroke-linecap:round;stroke-dasharray:326.7;stroke-dashoffset:80;animation:_nuda-cd2ring 60s linear forwards}
      .nuda-cd2-ring__center{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1}
      .nuda-cd2-ring__num{color:#fafafa;font-size:1.6rem;font-weight:800;line-height:1;font-variant-numeric:tabular-nums}
      .nuda-cd2-ring__unit{color:#777;font-size:.6rem;text-transform:uppercase;letter-spacing:.12em;margin-top:2px}
      @keyframes _nuda-cd2ring{from{stroke-dashoffset:0}to{stroke-dashoffset:326.7}}
      @media(prefers-reduced-motion:reduce){.nuda-cd2-ring__progress{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cd2-ring" role="timer" aria-label="Circular ring countdown">
  <svg class="nuda-cd2-ring__svg" viewBox="0 0 120 120" width="110" height="110">
    <circle class="nuda-cd2-ring__bg" cx="60" cy="60" r="52"></circle>
    <circle class="nuda-cd2-ring__track" cx="60" cy="60" r="52"></circle>
    <circle class="nuda-cd2-ring__progress" cx="60" cy="60" r="52"></circle>
  </svg>
  <div class="nuda-cd2-ring__center">
    <span class="nuda-cd2-ring__num">60</span>
    <span class="nuda-cd2-ring__unit">sec</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── DIGIT FLIP MINI ─────────────── */
  {
    id: "cd2-digit-flip-mini",
    name: "Digit Flip Mini",
    category: CAT,
    preview: (
      <div className="nuda-cd2-flipmini" role="timer" aria-label="Digit flip countdown">
        {(["09", "23", "41"] as string[]).map((val, i) => (
          <div key={i} className="nuda-cd2-flipmini__col">
            <div className="nuda-cd2-flipmini__card">
              <div className="nuda-cd2-flipmini__face nuda-cd2-flipmini__face--top">{val[0]}</div>
              <div className="nuda-cd2-flipmini__face nuda-cd2-flipmini__face--bot">{val[1]}</div>
            </div>
            <span className="nuda-cd2-flipmini__lbl">{["HRS", "MIN", "SEC"][i]}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-cd2-flipmini{display:flex;gap:.4rem;align-items:flex-start}
      .nuda-cd2-flipmini__col{display:flex;flex-direction:column;align-items:center;gap:4px}
      .nuda-cd2-flipmini__card{display:flex;flex-direction:column;width:44px;height:54px;border-radius:7px;overflow:hidden;background:#141414;box-shadow:0 2px 8px rgba(0,0,0,.5)}
      .nuda-cd2-flipmini__face{display:flex;align-items:center;justify-content:center;width:100%;height:50%;color:#fafafa;font-size:1.3rem;font-weight:800;font-variant-numeric:tabular-nums}
      .nuda-cd2-flipmini__face--top{background:#1e1e1e;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-cd2-flipmini__face--bot{background:#161616}
      .nuda-cd2-flipmini__lbl{color:#555;font-size:.5rem;text-transform:uppercase;letter-spacing:.1em}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cd2-flipmini" role="timer" aria-label="Digit flip countdown">
  <div class="nuda-cd2-flipmini__col">
    <div class="nuda-cd2-flipmini__card">
      <div class="nuda-cd2-flipmini__face nuda-cd2-flipmini__face--top">0</div>
      <div class="nuda-cd2-flipmini__face nuda-cd2-flipmini__face--bot">9</div>
    </div>
    <span class="nuda-cd2-flipmini__lbl">HRS</span>
  </div>
  <div class="nuda-cd2-flipmini__col">
    <div class="nuda-cd2-flipmini__card">
      <div class="nuda-cd2-flipmini__face nuda-cd2-flipmini__face--top">2</div>
      <div class="nuda-cd2-flipmini__face nuda-cd2-flipmini__face--bot">3</div>
    </div>
    <span class="nuda-cd2-flipmini__lbl">MIN</span>
  </div>
  <div class="nuda-cd2-flipmini__col">
    <div class="nuda-cd2-flipmini__card">
      <div class="nuda-cd2-flipmini__face nuda-cd2-flipmini__face--top">4</div>
      <div class="nuda-cd2-flipmini__face nuda-cd2-flipmini__face--bot">1</div>
    </div>
    <span class="nuda-cd2-flipmini__lbl">SEC</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── DOT PROGRESS COUNTDOWN ─────────────── */
  {
    id: "cd2-dot-progress",
    name: "Dot Progress Countdown",
    category: CAT,
    preview: (
      <div className="nuda-cd2-dots" role="timer" aria-label="Dot progress countdown">
        <div className="nuda-cd2-dots__header">
          <span className="nuda-cd2-dots__title">Offer ends in</span>
          <span className="nuda-cd2-dots__count">38s</span>
        </div>
        <div className="nuda-cd2-dots__grid">
          {Array.from({ length: 60 }, (_, i) => (
            <span key={i} className={`nuda-cd2-dots__dot${i < 38 ? " nuda-cd2-dots__dot--on" : ""}`} />
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cd2-dots{background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:.9rem 1rem;width:100%;max-width:260px;box-sizing:border-box}
      .nuda-cd2-dots__header{display:flex;justify-content:space-between;align-items:baseline;margin-bottom:.6rem}
      .nuda-cd2-dots__title{color:#777;font-size:.72rem;letter-spacing:.04em}
      .nuda-cd2-dots__count{color:#e4ff54;font-size:.85rem;font-weight:700;font-variant-numeric:tabular-nums}
      .nuda-cd2-dots__grid{display:flex;flex-wrap:wrap;gap:4px}
      .nuda-cd2-dots__dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,.1);transition:background .15s}
      .nuda-cd2-dots__dot--on{background:#e4ff54}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cd2-dots" role="timer" aria-label="Dot progress countdown">
  <div class="nuda-cd2-dots__header">
    <span class="nuda-cd2-dots__title">Offer ends in</span>
    <span class="nuda-cd2-dots__count">60s</span>
  </div>
  <div class="nuda-cd2-dots__grid">
    <!-- Repeat 60 spans; add nuda-cd2-dots__dot--on for remaining seconds -->
    <span class="nuda-cd2-dots__dot nuda-cd2-dots__dot--on"></span>
    <span class="nuda-cd2-dots__dot nuda-cd2-dots__dot--on"></span>
    <span class="nuda-cd2-dots__dot"></span>
    <!-- ... -->
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── SEGMENTED BAR COUNTDOWN ─────────────── */
  {
    id: "cd2-segmented-bar",
    name: "Segmented Bar Countdown",
    category: CAT,
    preview: (
      <div className="nuda-cd2-segbar" role="timer" aria-label="Segmented bar countdown">
        <div className="nuda-cd2-segbar__row">
          <span className="nuda-cd2-segbar__lbl">Days</span>
          <div className="nuda-cd2-segbar__track">
            {Array.from({ length: 30 }, (_, i) => (
              <span key={i} className={`nuda-cd2-segbar__seg${i < 12 ? " nuda-cd2-segbar__seg--on" : ""}`} />
            ))}
          </div>
          <span className="nuda-cd2-segbar__val">12</span>
        </div>
        <div className="nuda-cd2-segbar__row">
          <span className="nuda-cd2-segbar__lbl">Hrs</span>
          <div className="nuda-cd2-segbar__track">
            {Array.from({ length: 24 }, (_, i) => (
              <span key={i} className={`nuda-cd2-segbar__seg${i < 7 ? " nuda-cd2-segbar__seg--on nuda-cd2-segbar__seg--hrs" : ""}`} />
            ))}
          </div>
          <span className="nuda-cd2-segbar__val">07</span>
        </div>
        <div className="nuda-cd2-segbar__row">
          <span className="nuda-cd2-segbar__lbl">Min</span>
          <div className="nuda-cd2-segbar__track">
            {Array.from({ length: 60 }, (_, i) => (
              <span key={i} className={`nuda-cd2-segbar__seg${i < 34 ? " nuda-cd2-segbar__seg--on nuda-cd2-segbar__seg--min" : ""}`} />
            ))}
          </div>
          <span className="nuda-cd2-segbar__val">34</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cd2-segbar{background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:.8rem 1rem;width:100%;max-width:260px;box-sizing:border-box;display:flex;flex-direction:column;gap:.5rem}
      .nuda-cd2-segbar__row{display:flex;align-items:center;gap:.4rem}
      .nuda-cd2-segbar__lbl{color:#555;font-size:.6rem;text-transform:uppercase;letter-spacing:.08em;width:22px;flex-shrink:0}
      .nuda-cd2-segbar__track{display:flex;gap:2px;flex:1;flex-wrap:nowrap;overflow:hidden}
      .nuda-cd2-segbar__seg{height:8px;flex:1;border-radius:2px;background:rgba(255,255,255,.08)}
      .nuda-cd2-segbar__seg--on{background:#e4ff54}
      .nuda-cd2-segbar__seg--hrs{background:#a8d8ff}
      .nuda-cd2-segbar__seg--min{background:#ff9f7a}
      .nuda-cd2-segbar__val{color:#cfcfcf;font-size:.7rem;font-weight:600;font-variant-numeric:tabular-nums;width:18px;text-align:right;flex-shrink:0}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cd2-segbar" role="timer" aria-label="Segmented bar countdown">
  <div class="nuda-cd2-segbar__row">
    <span class="nuda-cd2-segbar__lbl">Days</span>
    <div class="nuda-cd2-segbar__track">
      <!-- 30 segments; add --on for remaining days -->
      <span class="nuda-cd2-segbar__seg nuda-cd2-segbar__seg--on"></span>
      <span class="nuda-cd2-segbar__seg"></span>
    </div>
    <span class="nuda-cd2-segbar__val">12</span>
  </div>
  <div class="nuda-cd2-segbar__row">
    <span class="nuda-cd2-segbar__lbl">Hrs</span>
    <div class="nuda-cd2-segbar__track">
      <!-- 24 segments; add --on --hrs for remaining hours -->
      <span class="nuda-cd2-segbar__seg nuda-cd2-segbar__seg--on nuda-cd2-segbar__seg--hrs"></span>
      <span class="nuda-cd2-segbar__seg"></span>
    </div>
    <span class="nuda-cd2-segbar__val">07</span>
  </div>
  <div class="nuda-cd2-segbar__row">
    <span class="nuda-cd2-segbar__lbl">Min</span>
    <div class="nuda-cd2-segbar__track">
      <!-- 60 segments; add --on --min for remaining minutes -->
      <span class="nuda-cd2-segbar__seg nuda-cd2-segbar__seg--on nuda-cd2-segbar__seg--min"></span>
      <span class="nuda-cd2-segbar__seg"></span>
    </div>
    <span class="nuda-cd2-segbar__val">34</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── NEON GLOW TIMER ─────────────── */
  {
    id: "cd2-neon-glow",
    name: "Neon Glow Timer",
    category: CAT,
    preview: (
      <div className="nuda-cd2-neon" role="timer" aria-label="Neon glow timer">
        <span className="nuda-cd2-neon__digit">0</span>
        <span className="nuda-cd2-neon__digit">3</span>
        <span className="nuda-cd2-neon__sep">:</span>
        <span className="nuda-cd2-neon__digit">2</span>
        <span className="nuda-cd2-neon__digit">9</span>
        <span className="nuda-cd2-neon__sep">:</span>
        <span className="nuda-cd2-neon__digit nuda-cd2-neon__digit--hot">5</span>
        <span className="nuda-cd2-neon__digit nuda-cd2-neon__digit--hot">8</span>
      </div>
    ),
    cssInline: `
      .nuda-cd2-neon{display:flex;align-items:center;gap:3px;background:#0d0d0d;border:1px solid rgba(228,255,84,.15);border-radius:10px;padding:.6rem .85rem;width:fit-content}
      .nuda-cd2-neon__digit{color:#e4ff54;font-size:1.5rem;font-weight:900;font-variant-numeric:tabular-nums;font-family:monospace;text-shadow:0 0 8px #e4ff54,0 0 18px rgba(228,255,84,.5);animation:_nuda-cd2neonpulse 2s ease-in-out infinite}
      .nuda-cd2-neon__digit--hot{color:#ff6b6b;text-shadow:0 0 8px #ff6b6b,0 0 20px rgba(255,107,107,.6);animation:_nuda-cd2neonhot 1s ease-in-out infinite}
      .nuda-cd2-neon__sep{color:rgba(255,255,255,.25);font-size:1.5rem;font-weight:900;font-family:monospace;line-height:1;align-self:flex-start;padding-top:2px}
      @keyframes _nuda-cd2neonpulse{0%,100%{text-shadow:0 0 8px #e4ff54,0 0 18px rgba(228,255,84,.5)}50%{text-shadow:0 0 14px #e4ff54,0 0 30px rgba(228,255,84,.8)}}
      @keyframes _nuda-cd2neonhot{0%,100%{text-shadow:0 0 8px #ff6b6b,0 0 20px rgba(255,107,107,.6)}50%{text-shadow:0 0 16px #ff6b6b,0 0 36px rgba(255,107,107,.9)}}
      @media(prefers-reduced-motion:reduce){.nuda-cd2-neon__digit,.nuda-cd2-neon__digit--hot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cd2-neon" role="timer" aria-label="Neon glow timer">
  <span class="nuda-cd2-neon__digit">0</span>
  <span class="nuda-cd2-neon__digit">3</span>
  <span class="nuda-cd2-neon__sep">:</span>
  <span class="nuda-cd2-neon__digit">2</span>
  <span class="nuda-cd2-neon__digit">9</span>
  <span class="nuda-cd2-neon__sep">:</span>
  <!-- Add --hot modifier when seconds < 10 for urgency -->
  <span class="nuda-cd2-neon__digit nuda-cd2-neon__digit--hot">5</span>
  <span class="nuda-cd2-neon__digit nuda-cd2-neon__digit--hot">8</span>
</div>`,
      },
    ],
  },

  /* ─────────────── DAYS-HOURS-MINS-SECS BOXES ─────────────── */
  {
    id: "cd2-dhms-boxes",
    name: "DHMS Boxes",
    category: CAT,
    preview: (
      <div className="nuda-cd2-dhms" role="timer" aria-label="Days hours minutes seconds countdown">
        {(
          [
            { val: "03", lbl: "Days" },
            { val: "14", lbl: "Hours" },
            { val: "52", lbl: "Mins" },
            { val: "07", lbl: "Secs" },
          ] as { val: string; lbl: string }[]
        ).map(({ val, lbl }) => (
          <div key={lbl} className="nuda-cd2-dhms__box">
            <span className="nuda-cd2-dhms__num">{val}</span>
            <span className="nuda-cd2-dhms__lbl">{lbl}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-cd2-dhms{display:flex;gap:.35rem;align-items:stretch}
      .nuda-cd2-dhms__box{display:flex;flex-direction:column;align-items:center;justify-content:center;background:#1a1a1a;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.55rem .6rem;min-width:52px;gap:3px;position:relative;overflow:hidden}
      .nuda-cd2-dhms__box::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(228,255,84,.3),transparent)}
      .nuda-cd2-dhms__num{color:#fafafa;font-size:1.4rem;font-weight:800;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-cd2-dhms__lbl{color:#555;font-size:.52rem;text-transform:uppercase;letter-spacing:.1em}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cd2-dhms" role="timer" aria-label="Days hours minutes seconds countdown">
  <div class="nuda-cd2-dhms__box">
    <span class="nuda-cd2-dhms__num">03</span>
    <span class="nuda-cd2-dhms__lbl">Days</span>
  </div>
  <div class="nuda-cd2-dhms__box">
    <span class="nuda-cd2-dhms__num">14</span>
    <span class="nuda-cd2-dhms__lbl">Hours</span>
  </div>
  <div class="nuda-cd2-dhms__box">
    <span class="nuda-cd2-dhms__num">52</span>
    <span class="nuda-cd2-dhms__lbl">Mins</span>
  </div>
  <div class="nuda-cd2-dhms__box">
    <span class="nuda-cd2-dhms__num">07</span>
    <span class="nuda-cd2-dhms__lbl">Secs</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── URGENCY PULSE TIMER ─────────────── */
  {
    id: "cd2-urgency-pulse",
    name: "Urgency Pulse Timer",
    category: CAT,
    preview: (
      <div className="nuda-cd2-urgency" role="timer" aria-label="Urgency pulse timer">
        <div className="nuda-cd2-urgency__ring">
          <span className="nuda-cd2-urgency__pulse" />
        </div>
        <div className="nuda-cd2-urgency__body">
          <span className="nuda-cd2-urgency__headline">Flash sale ending!</span>
          <span className="nuda-cd2-urgency__time">00:09</span>
        </div>
        <div className="nuda-cd2-urgency__bar">
          <div className="nuda-cd2-urgency__fill" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cd2-urgency{background:#1a1a1a;border:1px solid rgba(255,107,107,.25);border-radius:12px;padding:.75rem 1rem;width:100%;max-width:260px;box-sizing:border-box;display:flex;flex-direction:column;gap:.45rem}
      .nuda-cd2-urgency__ring{display:flex;align-items:center;gap:.5rem}
      .nuda-cd2-urgency__pulse{display:inline-block;width:10px;height:10px;border-radius:50%;background:#ff6b6b;box-shadow:0 0 0 0 rgba(255,107,107,.6);animation:_nuda-cd2urgpulse 1s ease-out infinite}
      .nuda-cd2-urgency__body{display:flex;justify-content:space-between;align-items:baseline}
      .nuda-cd2-urgency__headline{color:#cfcfcf;font-size:.75rem;font-weight:500}
      .nuda-cd2-urgency__time{color:#ff6b6b;font-size:1.3rem;font-weight:800;font-variant-numeric:tabular-nums;font-family:monospace}
      .nuda-cd2-urgency__bar{width:100%;height:3px;background:rgba(255,255,255,.07);border-radius:3px;overflow:hidden}
      .nuda-cd2-urgency__fill{height:100%;width:15%;background:linear-gradient(90deg,#ff6b6b,#ff9a5c);border-radius:3px;animation:_nuda-cd2urgbar 9s linear forwards}
      @keyframes _nuda-cd2urgpulse{0%{box-shadow:0 0 0 0 rgba(255,107,107,.7)}70%{box-shadow:0 0 0 10px rgba(255,107,107,0)}100%{box-shadow:0 0 0 0 rgba(255,107,107,0)}}
      @keyframes _nuda-cd2urgbar{from{width:100%}to{width:0%}}
      @media(prefers-reduced-motion:reduce){.nuda-cd2-urgency__pulse,.nuda-cd2-urgency__fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cd2-urgency" role="timer" aria-label="Urgency pulse timer">
  <div class="nuda-cd2-urgency__ring">
    <span class="nuda-cd2-urgency__pulse"></span>
  </div>
  <div class="nuda-cd2-urgency__body">
    <span class="nuda-cd2-urgency__headline">Flash sale ending!</span>
    <span class="nuda-cd2-urgency__time">00:09</span>
  </div>
  <div class="nuda-cd2-urgency__bar">
    <div class="nuda-cd2-urgency__fill"></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── GRADIENT SWEEP RING ─────────────── */
  {
    id: "cd2-gradient-sweep",
    name: "Gradient Sweep Ring",
    category: CAT,
    preview: (
      <div className="nuda-cd2-sweep" role="timer" aria-label="Gradient sweep ring countdown">
        <div className="nuda-cd2-sweep__outer">
          <div className="nuda-cd2-sweep__spinner" />
          <div className="nuda-cd2-sweep__inner">
            <span className="nuda-cd2-sweep__num">24</span>
            <span className="nuda-cd2-sweep__unit">min</span>
          </div>
        </div>
        <p className="nuda-cd2-sweep__caption">Est. delivery</p>
      </div>
    ),
    cssInline: `
      .nuda-cd2-sweep{display:flex;flex-direction:column;align-items:center;gap:.5rem}
      .nuda-cd2-sweep__outer{position:relative;width:96px;height:96px;border-radius:50%;background:conic-gradient(from 0deg,#e4ff54 0%,#a8ff78 40%,rgba(255,255,255,.06) 60%);animation:_nuda-cd2sweep 3s linear infinite;flex-shrink:0}
      .nuda-cd2-sweep__spinner{position:absolute;inset:0;border-radius:50%;background:conic-gradient(from 0deg,#e4ff54 0%,#a8ff78 40%,rgba(255,255,255,.06) 60%)}
      .nuda-cd2-sweep__inner{position:absolute;inset:6px;border-radius:50%;background:#141414;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px}
      .nuda-cd2-sweep__num{color:#fafafa;font-size:1.5rem;font-weight:800;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-cd2-sweep__unit{color:#777;font-size:.58rem;text-transform:uppercase;letter-spacing:.1em}
      .nuda-cd2-sweep__caption{color:#555;font-size:.68rem;letter-spacing:.06em;margin:0}
      @keyframes _nuda-cd2sweep{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-cd2-sweep__outer{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cd2-sweep" role="timer" aria-label="Gradient sweep ring countdown">
  <div class="nuda-cd2-sweep__outer">
    <div class="nuda-cd2-sweep__spinner"></div>
    <div class="nuda-cd2-sweep__inner">
      <span class="nuda-cd2-sweep__num">24</span>
      <span class="nuda-cd2-sweep__unit">min</span>
    </div>
  </div>
  <p class="nuda-cd2-sweep__caption">Est. delivery</p>
</div>`,
      },
    ],
  },
];
