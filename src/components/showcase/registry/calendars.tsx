import type { NudaComponent } from "./types";

export const calendars: NudaComponent[] = [
  /* ─────────────── 1. Mini Calendar ─────────────── */
  {
    id: "mini-calendar",
    name: "Mini Calendar",
    category: "Calendars & Date Pickers",
    preview: (
      <div className="nuda-mini-cal">
        <div className="nuda-mini-cal__head">
          <button aria-label="Previous month">‹</button>
          <span>June 2025</span>
          <button aria-label="Next month">›</button>
        </div>
        <div className="nuda-mini-cal__grid">
          {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
            <span key={`d${i}`} className="nuda-mini-cal__dow">{d}</span>
          ))}
          {Array.from({ length: 30 }, (_, i) => (
            <button
              key={i}
              className={`nuda-mini-cal__day${i === 14 ? " is-active" : ""}${i === 9 || i === 22 ? " has-event" : ""}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mini-cal{padding:14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:260px;animation:_calIn .55s cubic-bezier(.16,1,.3,1) both}
      .nuda-mini-cal__head{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;color:#fafafa;font-size:12px;font-weight:600}
      .nuda-mini-cal__head button{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fafafa;width:22px;height:22px;border-radius:6px;cursor:pointer;font-size:14px;line-height:1;transition:background .2s,transform .2s}
      .nuda-mini-cal__head button:hover{background:rgba(255,255,255,.08);transform:translateY(-1px)}
      .nuda-mini-cal__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:2px}
      .nuda-mini-cal__dow{text-align:center;color:#63636e;font-size:10px;padding:2px 0}
      .nuda-mini-cal__day{position:relative;background:transparent;border:0;color:#a0a0a8;width:30px;height:30px;border-radius:7px;cursor:pointer;font-size:11px;transition:background .2s,color .2s,transform .15s}
      .nuda-mini-cal__day:hover{background:rgba(255,255,255,.06);color:#fafafa;transform:scale(1.05)}
      .nuda-mini-cal__day.is-active{background:#e4ff54;color:#09090b;font-weight:600;animation:_dayPop .35s cubic-bezier(.16,1,.3,1)}
      .nuda-mini-cal__day.has-event::after{content:'';position:absolute;left:50%;bottom:3px;transform:translateX(-50%);width:3px;height:3px;background:#e4ff54;border-radius:50%}
      .nuda-mini-cal__day.is-active.has-event::after{background:#09090b}
      @keyframes _calIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
      @keyframes _dayPop{0%{transform:scale(.8)}60%{transform:scale(1.1)}100%{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-mini-cal,.nuda-mini-cal__day.is-active{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mini-cal">
  <div class="nuda-mini-cal__head">
    <button aria-label="Previous month">‹</button>
    <span>June 2025</span>
    <button aria-label="Next month">›</button>
  </div>
  <div class="nuda-mini-cal__grid">
    <span class="nuda-mini-cal__dow">S</span>
    <span class="nuda-mini-cal__dow">M</span>
    <!-- ...rest of dow + day buttons -->
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-mini-cal__day {
  position: relative;
  background: transparent;
  border: 0;
  color: #a0a0a8;
  width: 30px;
  height: 30px;
  border-radius: 7px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.15s;
}

.nuda-mini-cal__day:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #fafafa;
  transform: scale(1.05);
}

.nuda-mini-cal__day.is-active {
  background: #e4ff54;
  color: #09090b;
  font-weight: 600;
  animation: nuda-day-pop 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-mini-cal__day.has-event::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 3px;
  transform: translateX(-50%);
  width: 3px;
  height: 3px;
  background: #e4ff54;
  border-radius: 50%;
}

@keyframes nuda-day-pop {
  0%   { transform: scale(0.8); }
  60%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}`,
      },
    ],
  },

  /* ─────────────── 2. Date Range Selector ─────────────── */
  {
    id: "date-range",
    name: "Date Range Selector",
    category: "Calendars & Date Pickers",
    preview: (
      <div className="nuda-range">
        <div className="nuda-range__head">June 2025</div>
        <div className="nuda-range__grid">
          {Array.from({ length: 30 }, (_, i) => {
            const inRange = i >= 9 && i <= 18;
            const isStart = i === 9;
            const isEnd = i === 18;
            return (
              <span
                key={i}
                className={`nuda-range__day${inRange ? " in-range" : ""}${isStart ? " is-start" : ""}${isEnd ? " is-end" : ""}`}
              >
                {i + 1}
              </span>
            );
          })}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-range{padding:14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:260px}
      .nuda-range__head{color:#fafafa;font-size:12px;font-weight:600;text-align:center;margin-bottom:10px}
      .nuda-range__grid{display:grid;grid-template-columns:repeat(7,1fr);gap:0}
      .nuda-range__day{position:relative;display:flex;align-items:center;justify-content:center;height:30px;color:#a0a0a8;font-size:11px;cursor:pointer;transition:color .2s}
      .nuda-range__day:hover{color:#fafafa}
      .nuda-range__day.in-range{background:rgba(228,255,84,.08);color:#fafafa}
      .nuda-range__day.is-start,.nuda-range__day.is-end{background:#e4ff54;color:#09090b;font-weight:600;border-radius:7px;z-index:1;animation:_rangeBounce .4s cubic-bezier(.16,1,.3,1)}
      .nuda-range__day.is-start{box-shadow:8px 0 rgba(228,255,84,.08)}
      .nuda-range__day.is-end{box-shadow:-8px 0 rgba(228,255,84,.08)}
      @keyframes _rangeBounce{0%{transform:scale(.7)}60%{transform:scale(1.12)}100%{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-range__day{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-range">
  <div class="nuda-range__head">June 2025</div>
  <div class="nuda-range__grid">
    <!-- mark .is-start, .is-end, .in-range as needed -->
    <span class="nuda-range__day is-start">10</span>
    <span class="nuda-range__day in-range">11</span>
    <!-- ... -->
    <span class="nuda-range__day is-end">19</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-range__day {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  color: #a0a0a8;
  cursor: pointer;
  transition: color 0.2s;
}

.nuda-range__day.in-range {
  background: rgba(228, 255, 84, 0.08);
  color: #fafafa;
}

.nuda-range__day.is-start,
.nuda-range__day.is-end {
  background: #e4ff54;
  color: #09090b;
  font-weight: 600;
  border-radius: 7px;
  animation: nuda-range-bounce 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-range__day.is-start { box-shadow: 8px 0 rgba(228, 255, 84, 0.08); }
.nuda-range__day.is-end   { box-shadow: -8px 0 rgba(228, 255, 84, 0.08); }

@keyframes nuda-range-bounce {
  0%   { transform: scale(0.7); }
  60%  { transform: scale(1.12); }
  100% { transform: scale(1); }
}`,
      },
    ],
  },

  /* ─────────────── 3. Date Input Pop ─────────────── */
  {
    id: "date-input-pop",
    name: "Date Input Popover",
    category: "Calendars & Date Pickers",
    preview: (
      <div className="nuda-dateinput is-open">
        <button className="nuda-dateinput__trigger" type="button">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Jun 24, 2025
        </button>
        <div className="nuda-dateinput__pop">
          <div className="nuda-dateinput__chip">Today</div>
          <div className="nuda-dateinput__chip">Tomorrow</div>
          <div className="nuda-dateinput__chip">Next week</div>
          <div className="nuda-dateinput__chip">Next month</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dateinput{position:relative;display:inline-block}
      .nuda-dateinput__trigger{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:9px;color:#fafafa;font-size:12px;cursor:pointer;transition:background .2s,border-color .2s,transform .15s}
      .nuda-dateinput__trigger svg{width:14px;height:14px;color:#e4ff54}
      .nuda-dateinput__trigger:hover{background:rgba(255,255,255,.07);border-color:#e4ff54;transform:translateY(-1px)}
      .nuda-dateinput__pop{position:absolute;top:calc(100% + 6px);left:0;display:flex;flex-direction:column;gap:4px;padding:6px;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:10px;min-width:140px;z-index:10;opacity:0;transform:translateY(-6px) scale(.96);pointer-events:none;transition:opacity .25s,transform .3s cubic-bezier(.16,1,.3,1);box-shadow:0 12px 32px -10px rgba(0,0,0,.6)}
      .nuda-dateinput.is-open .nuda-dateinput__pop{opacity:1;transform:translateY(0) scale(1);pointer-events:auto}
      .nuda-dateinput__chip{padding:6px 10px;border-radius:6px;color:#a0a0a8;font-size:11px;cursor:pointer;transition:background .15s,color .2s,padding-left .25s}
      .nuda-dateinput__chip:hover{background:rgba(228,255,84,.08);color:#e4ff54;padding-left:14px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dateinput">
  <button class="nuda-dateinput__trigger" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
    Jun 24, 2025
  </button>
  <div class="nuda-dateinput__pop">
    <div class="nuda-dateinput__chip">Today</div>
    <div class="nuda-dateinput__chip">Tomorrow</div>
    <div class="nuda-dateinput__chip">Next week</div>
    <div class="nuda-dateinput__chip">Next month</div>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const wrap = document.querySelector('.nuda-dateinput');
const trigger = wrap.querySelector('.nuda-dateinput__trigger');

trigger.addEventListener('click', (e) => {
  e.stopPropagation();
  wrap.classList.toggle('is-open');
});

document.addEventListener('click', (e) => {
  if (!wrap.contains(e.target)) wrap.classList.remove('is-open');
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-dateinput { position: relative; display: inline-block; }

.nuda-dateinput__pop {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  min-width: 140px;
  opacity: 0;
  transform: translateY(-6px) scale(0.96);
  pointer-events: none;
  transition:
    opacity 0.25s,
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-dateinput.is-open .nuda-dateinput__pop {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: auto;
}

.nuda-dateinput__chip {
  padding: 6px 10px;
  border-radius: 6px;
  color: #a0a0a8;
  cursor: pointer;
  transition: background 0.15s, color 0.2s, padding-left 0.25s;
}

.nuda-dateinput__chip:hover {
  background: rgba(228, 255, 84, 0.08);
  color: #e4ff54;
  padding-left: 14px;
}`,
      },
    ],
  },

  /* ─────────────── 4. Time Picker Wheel ─────────────── */
  {
    id: "time-wheel",
    name: "Time Picker Wheel",
    category: "Calendars & Date Pickers",
    preview: (
      <div className="nuda-time-wheel">
        <div className="nuda-time-wheel__col">
          <span>09</span><span>10</span><span className="is-center">11</span><span>12</span><span>13</span>
        </div>
        <span className="nuda-time-wheel__sep">:</span>
        <div className="nuda-time-wheel__col">
          <span>28</span><span>29</span><span className="is-center">30</span><span>31</span><span>32</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-time-wheel{position:relative;display:inline-flex;align-items:center;gap:6px;padding:10px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;font-variant-numeric:tabular-nums}
      .nuda-time-wheel::before{content:'';position:absolute;left:8px;right:8px;top:50%;height:30px;transform:translateY(-50%);background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.2);border-radius:7px;pointer-events:none}
      .nuda-time-wheel__col{display:flex;flex-direction:column;align-items:center;height:130px;overflow:hidden;width:34px;font-size:14px;color:#63636e;mask-image:linear-gradient(180deg,transparent,#000 30%,#000 70%,transparent);-webkit-mask-image:linear-gradient(180deg,transparent,#000 30%,#000 70%,transparent)}
      .nuda-time-wheel__col span{flex-shrink:0;height:26px;display:flex;align-items:center;justify-content:center;transition:color .25s,transform .35s,font-size .25s,font-weight .25s}
      .nuda-time-wheel__col span.is-center{color:#e4ff54;font-weight:700;font-size:16px;transform:scale(1.05)}
      .nuda-time-wheel__sep{color:#fafafa;font-size:16px;font-weight:600;animation:_blink 1.2s ease-in-out infinite}
      @keyframes _blink{0%,100%{opacity:1}50%{opacity:.4}}
      @media(prefers-reduced-motion:reduce){.nuda-time-wheel__sep{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-time-wheel">
  <div class="nuda-time-wheel__col">
    <span>09</span>
    <span>10</span>
    <span class="is-center">11</span>
    <span>12</span>
    <span>13</span>
  </div>
  <span class="nuda-time-wheel__sep">:</span>
  <div class="nuda-time-wheel__col">
    <span>28</span>
    <span>29</span>
    <span class="is-center">30</span>
    <span>31</span>
    <span>32</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-time-wheel {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  font-variant-numeric: tabular-nums;
}

.nuda-time-wheel::before {
  content: "";
  position: absolute;
  left: 8px;
  right: 8px;
  top: 50%;
  height: 30px;
  transform: translateY(-50%);
  background: rgba(228, 255, 84, 0.08);
  border: 1px solid rgba(228, 255, 84, 0.2);
  border-radius: 7px;
  pointer-events: none;
}

.nuda-time-wheel__col {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 130px;
  overflow: hidden;
  width: 34px;
  color: #63636e;
  mask-image: linear-gradient(180deg, transparent, #000 30%, #000 70%, transparent);
}

.nuda-time-wheel__col span {
  flex-shrink: 0;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.25s, transform 0.35s, font-size 0.25s;
}

.nuda-time-wheel__col span.is-center {
  color: #e4ff54;
  font-weight: 700;
  transform: scale(1.05);
}`,
      },
    ],
  },

  /* ─────────────── 5. Heatmap Calendar ─────────────── */
  {
    id: "heatmap-calendar",
    name: "Activity Heatmap",
    category: "Calendars & Date Pickers",
    preview: (
      <div className="nuda-heatmap" role="img" aria-label="Activity over the last 12 weeks">
        {Array.from({ length: 12 * 7 }, (_, i) => {
          const intensity = Math.floor(((i * 11) % 5));
          return (
            <span
              key={i}
              className={`nuda-heatmap__cell nuda-heatmap__cell--${intensity}`}
              style={{ animationDelay: `${i * 14}ms` }}
            />
          );
        })}
      </div>
    ),
    cssInline: `
      .nuda-heatmap{display:grid;grid-template-columns:repeat(12,1fr);grid-auto-rows:12px;gap:3px;width:100%;max-width:280px;direction:ltr}
      .nuda-heatmap__cell{width:12px;height:12px;border-radius:3px;background:rgba(228,255,84,.07);animation:_hmIn .55s cubic-bezier(.16,1,.3,1) both;transition:transform .25s,filter .2s,background .25s}
      .nuda-heatmap__cell--1{background:rgba(228,255,84,.18)}
      .nuda-heatmap__cell--2{background:rgba(228,255,84,.36)}
      .nuda-heatmap__cell--3{background:rgba(228,255,84,.6)}
      .nuda-heatmap__cell--4{background:#e4ff54;box-shadow:0 0 6px rgba(228,255,84,.5)}
      .nuda-heatmap__cell:hover{transform:scale(1.4);filter:brightness(1.3)}
      @keyframes _hmIn{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-heatmap__cell{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-heatmap" role="img" aria-label="Activity over the last 12 weeks">
  <!-- Repeat <span class="nuda-heatmap__cell nuda-heatmap__cell--N"> -->
  <span class="nuda-heatmap__cell nuda-heatmap__cell--0"></span>
  <span class="nuda-heatmap__cell nuda-heatmap__cell--3"></span>
  <span class="nuda-heatmap__cell nuda-heatmap__cell--4"></span>
  <!-- ... -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-heatmap {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 12px;
  gap: 3px;
}

.nuda-heatmap__cell {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background: rgba(228, 255, 84, 0.07);
  animation: nuda-hm-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition: transform 0.25s, filter 0.2s, background 0.25s;
}

.nuda-heatmap__cell--1 { background: rgba(228, 255, 84, 0.18); }
.nuda-heatmap__cell--2 { background: rgba(228, 255, 84, 0.36); }
.nuda-heatmap__cell--3 { background: rgba(228, 255, 84, 0.60); }
.nuda-heatmap__cell--4 {
  background: #e4ff54;
  box-shadow: 0 0 6px rgba(228, 255, 84, 0.5);
}

.nuda-heatmap__cell:hover {
  transform: scale(1.4);
  filter: brightness(1.3);
}

@keyframes nuda-hm-in {
  from { opacity: 0; transform: scale(0.4); }
  to   { opacity: 1; transform: scale(1); }
}`,
      },
    ],
  },

  /* ─────────────── 6. Month Switcher Slide ─────────────── */
  {
    id: "month-slide",
    name: "Month Switcher Slide",
    category: "Calendars & Date Pickers",
    preview: (
      <div className="nuda-monthslide">
        <button aria-label="Previous">‹</button>
        <div className="nuda-monthslide__viewport">
          <div className="nuda-monthslide__track">
            <span>April</span>
            <span>May</span>
            <span className="is-active">June</span>
            <span>July</span>
            <span>August</span>
          </div>
        </div>
        <button aria-label="Next">›</button>
      </div>
    ),
    cssInline: `
      .nuda-monthslide{display:inline-flex;align-items:center;gap:6px;padding:6px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px}
      .nuda-monthslide button{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fafafa;width:24px;height:28px;border-radius:6px;cursor:pointer;transition:background .2s,transform .2s}
      .nuda-monthslide button:hover{background:#e4ff54;color:#09090b;transform:translateY(-1px)}
      .nuda-monthslide__viewport{overflow:hidden;width:90px}
      .nuda-monthslide__track{display:flex;transform:translateX(-180px);transition:transform .55s cubic-bezier(.16,1,.3,1)}
      .nuda-monthslide__track span{flex-shrink:0;width:90px;text-align:center;color:#63636e;font-size:12px;font-weight:500;transition:color .35s}
      .nuda-monthslide__track span.is-active{color:#e4ff54;font-weight:700}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-monthslide">
  <button aria-label="Previous">‹</button>
  <div class="nuda-monthslide__viewport">
    <div class="nuda-monthslide__track">
      <span>April</span>
      <span>May</span>
      <span class="is-active">June</span>
      <span>July</span>
      <span>August</span>
    </div>
  </div>
  <button aria-label="Next">›</button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const root  = document.querySelector('.nuda-monthslide');
const track = root.querySelector('.nuda-monthslide__track');
const items = root.querySelectorAll('.nuda-monthslide__track span');
const [prev, next] = root.querySelectorAll('button');

let index = [...items].findIndex(s => s.classList.contains('is-active'));
const SLOT = 90;

const update = () => {
  items.forEach(i => i.classList.remove('is-active'));
  items[index].classList.add('is-active');
  track.style.transform = \`translateX(\${-index * SLOT}px)\`;
};

prev.onclick = () => { index = Math.max(0, index - 1); update(); };
next.onclick = () => { index = Math.min(items.length - 1, index + 1); update(); };`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-monthslide__viewport {
  overflow: hidden;
  width: 90px;
}

.nuda-monthslide__track {
  display: flex;
  transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-monthslide__track span {
  flex-shrink: 0;
  width: 90px;
  text-align: center;
  color: #63636e;
  transition: color 0.35s;
}

.nuda-monthslide__track span.is-active {
  color: #e4ff54;
  font-weight: 700;
}`,
      },
    ],
  },

  /* ─────────────── 7. Event Pill ─────────────── */
  {
    id: "event-pill",
    name: "Calendar Event Pill",
    category: "Calendars & Date Pickers",
    preview: (
      <div className="nuda-event-pill">
        <span className="nuda-event-pill__time">10:30</span>
        <span className="nuda-event-pill__title">Design review</span>
        <span className="nuda-event-pill__bar" />
      </div>
    ),
    cssInline: `
      .nuda-event-pill{position:relative;display:inline-flex;align-items:center;gap:10px;padding:8px 12px 8px 18px;background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.18);border-radius:10px;color:#fafafa;font-size:12px;width:100%;max-width:240px;overflow:hidden;cursor:pointer;transition:transform .2s,box-shadow .25s,border-color .25s}
      .nuda-event-pill:hover{transform:translateX(2px);border-color:#e4ff54;box-shadow:0 6px 18px -10px rgba(228,255,84,.5)}
      .nuda-event-pill__time{color:#e4ff54;font-weight:700;font-variant-numeric:tabular-nums}
      .nuda-event-pill__title{color:#a0a0a8;font-weight:500}
      .nuda-event-pill__bar{position:absolute;left:0;top:0;bottom:0;width:4px;background:#e4ff54;animation:_eventBar 1.6s ease-in-out infinite alternate}
      @keyframes _eventBar{from{box-shadow:0 0 8px #e4ff54}to{box-shadow:0 0 14px #e4ff54}}
      @media(prefers-reduced-motion:reduce){.nuda-event-pill__bar{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-event-pill">
  <span class="nuda-event-pill__time">10:30</span>
  <span class="nuda-event-pill__title">Design review</span>
  <span class="nuda-event-pill__bar"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-event-pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px 8px 18px;
  background: rgba(228, 255, 84, 0.08);
  border: 1px solid rgba(228, 255, 84, 0.18);
  border-radius: 10px;
  color: #fafafa;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.25s, border-color 0.25s;
}

.nuda-event-pill:hover {
  transform: translateX(2px);
  border-color: #e4ff54;
  box-shadow: 0 6px 18px -10px rgba(228, 255, 84, 0.5);
}

.nuda-event-pill__bar {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #e4ff54;
  animation: nuda-event-bar 1.6s ease-in-out infinite alternate;
}

@keyframes nuda-event-bar {
  from { box-shadow: 0 0 8px #e4ff54; }
  to   { box-shadow: 0 0 14px #e4ff54; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Day View Timeline ─────────────── */
  {
    id: "day-timeline",
    name: "Day Timeline",
    category: "Calendars & Date Pickers",
    preview: (
      <div className="nuda-day-timeline">
        {[
          { hour: "9:00", title: "Standup", offset: 0 },
          { hour: "10:30", title: "Design review", offset: 1 },
          { hour: "13:00", title: "Lunch", offset: 2 },
          { hour: "15:30", title: "Sync", offset: 3 },
        ].map((e, i) => (
          <div key={i} className="nuda-day-timeline__slot" style={{ animationDelay: `${e.offset * 80}ms` }}>
            <span className="nuda-day-timeline__hour">{e.hour}</span>
            <span className="nuda-day-timeline__dot" />
            <span className="nuda-day-timeline__label">{e.title}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-day-timeline{position:relative;padding:6px 12px 6px 60px;width:100%;max-width:280px}
      .nuda-day-timeline::before{content:'';position:absolute;left:54px;top:8px;bottom:8px;width:1px;background:linear-gradient(180deg,rgba(228,255,84,.4),rgba(228,255,84,.05))}
      .nuda-day-timeline__slot{position:relative;display:flex;align-items:center;gap:10px;padding:6px 0;animation:_dtIn .55s cubic-bezier(.16,1,.3,1) both}
      .nuda-day-timeline__hour{position:absolute;left:-50px;width:42px;text-align:right;color:#63636e;font-size:10px;font-variant-numeric:tabular-nums}
      .nuda-day-timeline__dot{position:absolute;left:-9px;width:9px;height:9px;border-radius:50%;background:#e4ff54;box-shadow:0 0 0 3px #09090b,0 0 8px #e4ff54;transition:transform .25s}
      .nuda-day-timeline__slot:hover .nuda-day-timeline__dot{transform:scale(1.4)}
      .nuda-day-timeline__label{color:#fafafa;font-size:12px}
      @keyframes _dtIn{from{opacity:0;transform:translateX(-6px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-day-timeline__slot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-day-timeline">
  <div class="nuda-day-timeline__slot">
    <span class="nuda-day-timeline__hour">9:00</span>
    <span class="nuda-day-timeline__dot"></span>
    <span class="nuda-day-timeline__label">Standup</span>
  </div>
  <!-- Repeat per event -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-day-timeline {
  position: relative;
  padding: 6px 12px 6px 60px;
}

.nuda-day-timeline::before {
  content: "";
  position: absolute;
  left: 54px;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: linear-gradient(180deg, rgba(228, 255, 84, 0.4), rgba(228, 255, 84, 0.05));
}

.nuda-day-timeline__slot {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 0;
  animation: nuda-dt-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-day-timeline__dot {
  position: absolute;
  left: -9px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #e4ff54;
  box-shadow: 0 0 0 3px #09090b, 0 0 8px #e4ff54;
}

@keyframes nuda-dt-in {
  from { opacity: 0; transform: translateX(-6px); }
  to   { opacity: 1; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 9. Countdown Pill ─────────────── */
  {
    id: "countdown-pill",
    name: "Countdown Pill",
    category: "Calendars & Date Pickers",
    preview: (
      <div className="nuda-countpill">
        <span className="nuda-countpill__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="13" r="9" />
            <path d="M12 9v4l2 2" />
            <path d="M9 2h6" />
          </svg>
        </span>
        <span className="nuda-countpill__num"><b>3</b>d</span>
        <span className="nuda-countpill__num"><b>14</b>h</span>
        <span className="nuda-countpill__num"><b>22</b>m</span>
      </div>
    ),
    cssInline: `
      .nuda-countpill{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:99px;color:#a0a0a8;font-size:11px;font-variant-numeric:tabular-nums}
      .nuda-countpill__icon{display:inline-flex;color:#e4ff54;animation:_countTick 1s steps(60) infinite}
      .nuda-countpill__icon svg{width:14px;height:14px}
      .nuda-countpill__num b{color:#fafafa;font-weight:700;font-size:13px;margin-right:1px}
      @keyframes _countTick{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-countpill__icon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-countpill">
  <span class="nuda-countpill__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="13" r="9" />
      <path d="M12 9v4l2 2" />
      <path d="M9 2h6" />
    </svg>
  </span>
  <span class="nuda-countpill__num"><b>3</b>d</span>
  <span class="nuda-countpill__num"><b>14</b>h</span>
  <span class="nuda-countpill__num"><b>22</b>m</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-countpill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 99px;
  color: #a0a0a8;
  font-variant-numeric: tabular-nums;
}

.nuda-countpill__icon {
  display: inline-flex;
  color: #e4ff54;
  animation: nuda-count-tick 1s steps(60) infinite;
}

@keyframes nuda-count-tick { to { transform: rotate(360deg); } }`,
      },
    ],
  },

  /* ─────────────── 10. Mini Schedule Card ─────────────── */
  {
    id: "schedule-card",
    name: "Schedule Card",
    category: "Calendars & Date Pickers",
    preview: (
      <div className="nuda-schedcard">
        <div className="nuda-schedcard__date">
          <span className="nuda-schedcard__day">24</span>
          <span className="nuda-schedcard__mo">JUN</span>
        </div>
        <div className="nuda-schedcard__body">
          <div className="nuda-schedcard__title">Q3 Strategy Review</div>
          <div className="nuda-schedcard__meta">10:30 → 11:30 · Room A</div>
          <div className="nuda-schedcard__avatars">
            <span /><span /><span /><span>+3</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-schedcard{display:flex;gap:14px;padding:16px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:300px;cursor:pointer;transition:transform .25s,border-color .25s,box-shadow .25s}
      .nuda-schedcard:hover{transform:translateY(-3px);border-color:rgba(228,255,84,.3);box-shadow:0 12px 24px -10px rgba(0,0,0,.5)}
      .nuda-schedcard__date{display:flex;flex-direction:column;align-items:center;justify-content:center;width:50px;padding:8px 0;background:rgba(228,255,84,.08);border-radius:10px;flex-shrink:0;transition:background .25s}
      .nuda-schedcard:hover .nuda-schedcard__date{background:rgba(228,255,84,.18)}
      .nuda-schedcard__day{color:#e4ff54;font-size:20px;font-weight:700;line-height:1}
      .nuda-schedcard__mo{color:#a0a0a8;font-size:9px;font-weight:600;letter-spacing:.1em;margin-top:2px}
      .nuda-schedcard__title{color:#fafafa;font-size:13px;font-weight:600;margin-bottom:3px}
      .nuda-schedcard__meta{color:#a0a0a8;font-size:11px;margin-bottom:8px}
      .nuda-schedcard__avatars{display:flex;align-items:center}
      .nuda-schedcard__avatars span{width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#62b6ff,#9d6dff);border:2px solid #0c0c10;margin-left:-5px;font-size:9px;color:#fafafa;display:flex;align-items:center;justify-content:center}
      .nuda-schedcard__avatars span:first-child{margin-left:0}
      .nuda-schedcard__avatars span:last-child{background:rgba(255,255,255,.08);color:#a0a0a8;font-weight:600}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-schedcard">
  <div class="nuda-schedcard__date">
    <span class="nuda-schedcard__day">24</span>
    <span class="nuda-schedcard__mo">JUN</span>
  </div>
  <div class="nuda-schedcard__body">
    <div class="nuda-schedcard__title">Q3 Strategy Review</div>
    <div class="nuda-schedcard__meta">10:30 → 11:30 · Room A</div>
    <div class="nuda-schedcard__avatars">
      <span></span><span></span><span></span><span>+3</span>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-schedcard {
  display: flex;
  gap: 14px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  cursor: pointer;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}

.nuda-schedcard:hover {
  transform: translateY(-3px);
  border-color: rgba(228, 255, 84, 0.3);
  box-shadow: 0 12px 24px -10px rgba(0, 0, 0, 0.5);
}

.nuda-schedcard__date {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  padding: 8px 0;
  background: rgba(228, 255, 84, 0.08);
  border-radius: 10px;
  transition: background 0.25s;
}

.nuda-schedcard:hover .nuda-schedcard__date {
  background: rgba(228, 255, 84, 0.18);
}

.nuda-schedcard__avatars span {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #62b6ff, #9d6dff);
  border: 2px solid #0c0c10;
  margin-left: -5px;
}`,
      },
    ],
  },
];
