import type { NudaComponent } from "./types";

export const countdowns: NudaComponent[] = [
  /* ─────────────── FLIP CLOCK ─────────────── */
  {
    id: "flip-clock",
    name: "Flip Clock",
    category: "Countdowns",
    preview: (
      <div className="nuda-flip-clock" role="timer" aria-label="Countdown timer">
        <div className="nuda-flip-clock__unit">
          <div className="nuda-flip-clock__card">
            <span className="nuda-flip-clock__top">0</span>
            <span className="nuda-flip-clock__bottom">0</span>
          </div>
          <span className="nuda-flip-clock__label">HRS</span>
        </div>
        <span className="nuda-flip-clock__sep">:</span>
        <div className="nuda-flip-clock__unit">
          <div className="nuda-flip-clock__card">
            <span className="nuda-flip-clock__top">1</span>
            <span className="nuda-flip-clock__bottom">2</span>
          </div>
          <span className="nuda-flip-clock__label">MIN</span>
        </div>
        <span className="nuda-flip-clock__sep">:</span>
        <div className="nuda-flip-clock__unit">
          <div className="nuda-flip-clock__card nuda-flip-clock__card--flipping">
            <span className="nuda-flip-clock__top">4</span>
            <span className="nuda-flip-clock__bottom">5</span>
          </div>
          <span className="nuda-flip-clock__label">SEC</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-flip-clock{--c:#e4ff54;display:flex;align-items:flex-start;gap:.5rem}
      .nuda-flip-clock__unit{display:flex;flex-direction:column;align-items:center;gap:4px}
      .nuda-flip-clock__card{position:relative;width:40px;height:50px;perspective:200px}
      .nuda-flip-clock__top,.nuda-flip-clock__bottom{display:flex;align-items:center;justify-content:center;width:100%;height:50%;background:#1a1a1a;color:#fff;font-size:1.2rem;font-weight:700;font-variant-numeric:tabular-nums;overflow:hidden}
      .nuda-flip-clock__top{border-radius:6px 6px 0 0;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-flip-clock__bottom{border-radius:0 0 6px 6px}
      .nuda-flip-clock__card--flipping .nuda-flip-clock__top{animation:_flipdown .6s ease-in-out}
      @keyframes _flipdown{0%{transform:rotateX(0)}50%{transform:rotateX(-90deg)}100%{transform:rotateX(0)}}
      .nuda-flip-clock__sep{color:#555;font-size:1.2rem;font-weight:700;line-height:50px}
      .nuda-flip-clock__label{color:#666;font-size:.55rem;text-transform:uppercase;letter-spacing:.1em}
      @media(prefers-reduced-motion:reduce){.nuda-flip-clock__card--flipping .nuda-flip-clock__top{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-flip-clock" role="timer" aria-label="Countdown timer">
  <div class="nuda-flip-clock__unit">
    <div class="nuda-flip-clock__card" data-unit="hours">
      <span class="nuda-flip-clock__top">0</span>
      <span class="nuda-flip-clock__bottom">0</span>
    </div>
    <span class="nuda-flip-clock__label">HRS</span>
  </div>
  <span class="nuda-flip-clock__sep">:</span>
  <div class="nuda-flip-clock__unit">
    <div class="nuda-flip-clock__card" data-unit="minutes">
      <span class="nuda-flip-clock__top">0</span>
      <span class="nuda-flip-clock__bottom">0</span>
    </div>
    <span class="nuda-flip-clock__label">MIN</span>
  </div>
  <span class="nuda-flip-clock__sep">:</span>
  <div class="nuda-flip-clock__unit">
    <div class="nuda-flip-clock__card" data-unit="seconds">
      <span class="nuda-flip-clock__top">0</span>
      <span class="nuda-flip-clock__bottom">0</span>
    </div>
    <span class="nuda-flip-clock__label">SEC</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Flip Clock
   Flip-style countdown with card flip animation.
   Customize: --flip-bg, --flip-text, --flip-radius */

.nuda-flip-clock {
  --flip-bg: #1a1a1a;
  --flip-text: #fff;
  --flip-radius: 6px;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.nuda-flip-clock__unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.nuda-flip-clock__card {
  position: relative;
  width: 48px;
  height: 60px;
  perspective: 200px;
}

.nuda-flip-clock__top,
.nuda-flip-clock__bottom {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  background: var(--flip-bg);
  color: var(--flip-text);
  font-size: 1.4rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  overflow: hidden;
}

.nuda-flip-clock__top {
  border-radius: var(--flip-radius) var(--flip-radius) 0 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.nuda-flip-clock__bottom {
  border-radius: 0 0 var(--flip-radius) var(--flip-radius);
}

.nuda-flip-clock__card--flipping .nuda-flip-clock__top {
  animation: nuda-flip-down 0.6s ease-in-out;
}

@keyframes nuda-flip-down {
  0%   { transform: rotateX(0); }
  50%  { transform: rotateX(-90deg); }
  100% { transform: rotateX(0); }
}

.nuda-flip-clock__sep {
  color: #555;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 60px;
}

.nuda-flip-clock__label {
  color: #666;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-flip-clock__card--flipping .nuda-flip-clock__top {
    animation: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Flip Clock — Countdown with flip animation.
   Set your target date below. */

(function () {
  var clock = document.querySelector('.nuda-flip-clock');
  if (!clock) return;

  // Set target to 1 hour from now (customize as needed)
  var target = new Date(Date.now() + 3600000);

  var cards = {
    hours:   clock.querySelector('[data-unit="hours"]'),
    minutes: clock.querySelector('[data-unit="minutes"]'),
    seconds: clock.querySelector('[data-unit="seconds"]')
  };

  function pad(n) {
    return n < 10 ? '0' + n : String(n);
  }

  function update() {
    var diff = Math.max(0, target - Date.now());
    var h = Math.floor(diff / 3600000);
    var m = Math.floor((diff % 3600000) / 60000);
    var s = Math.floor((diff % 60000) / 1000);

    setCard(cards.hours, pad(h));
    setCard(cards.minutes, pad(m));
    setCard(cards.seconds, pad(s));

    if (diff > 0) requestAnimationFrame(tick);
  }

  function setCard(card, value) {
    if (!card) return;
    var top = card.querySelector('.nuda-flip-clock__top');
    var bottom = card.querySelector('.nuda-flip-clock__bottom');
    if (top.textContent !== value) {
      card.classList.add('nuda-flip-clock__card--flipping');
      top.textContent = value;
      bottom.textContent = value;
      setTimeout(function () {
        card.classList.remove('nuda-flip-clock__card--flipping');
      }, 600);
    }
  }

  var last = 0;
  function tick(ts) {
    if (ts - last >= 1000) {
      last = ts;
      update();
    }
    if (target - Date.now() > 0) requestAnimationFrame(tick);
  }

  update();
  requestAnimationFrame(tick);
})();`,
      },
    ],
  },

  /* ─────────────── CIRCLE TIMER ─────────────── */
  {
    id: "circle-timer",
    name: "Circle Timer",
    category: "Countdowns",
    preview: (
      <div className="nuda-circle-timer" role="timer" aria-label="Timer">
        <svg className="nuda-circle-timer__svg" viewBox="0 0 100 100" width="80" height="80">
          <circle className="nuda-circle-timer__track" cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="4" />
          <circle className="nuda-circle-timer__progress" cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <span className="nuda-circle-timer__value">42</span>
      </div>
    ),
    cssInline: `
      .nuda-circle-timer{--c:#e4ff54;--track:rgba(255,255,255,.08);position:relative;display:inline-flex;align-items:center;justify-content:center}
      .nuda-circle-timer__svg{transform:rotate(-90deg)}
      .nuda-circle-timer__track{color:var(--track)}
      .nuda-circle-timer__progress{color:var(--c);stroke-dasharray:276.46;stroke-dashoffset:69;animation:_ctprog 60s linear forwards}
      .nuda-circle-timer__value{position:absolute;color:#fff;font-size:1.1rem;font-weight:700;font-variant-numeric:tabular-nums}
      @keyframes _ctprog{from{stroke-dashoffset:0}to{stroke-dashoffset:276.46}}
      @media(prefers-reduced-motion:reduce){.nuda-circle-timer__progress{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-circle-timer" role="timer" aria-label="Timer">
  <svg class="nuda-circle-timer__svg" viewBox="0 0 100 100" width="80" height="80">
    <circle class="nuda-circle-timer__track" cx="50" cy="50" r="44"
      fill="none" stroke="currentColor" stroke-width="4" />
    <circle class="nuda-circle-timer__progress" cx="50" cy="50" r="44"
      fill="none" stroke="currentColor" stroke-width="4"
      stroke-linecap="round" />
  </svg>
  <span class="nuda-circle-timer__value">60</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Circle Timer
   Circular countdown with animated SVG stroke.
   Customize: --timer-color, --timer-track, --timer-duration */

.nuda-circle-timer {
  --timer-color: #e4ff54;
  --timer-track: rgba(255, 255, 255, 0.08);
  --timer-duration: 60s;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.nuda-circle-timer__svg {
  transform: rotate(-90deg);
}

.nuda-circle-timer__track {
  color: var(--timer-track);
}

.nuda-circle-timer__progress {
  color: var(--timer-color);
  /* circumference = 2 * PI * 44 = 276.46 */
  stroke-dasharray: 276.46;
  stroke-dashoffset: 0;
  animation: nuda-circle-countdown var(--timer-duration) linear forwards;
}

.nuda-circle-timer__value {
  position: absolute;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

@keyframes nuda-circle-countdown {
  from { stroke-dashoffset: 0; }
  to   { stroke-dashoffset: 276.46; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-circle-timer__progress {
    animation: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Circle Timer — Updates the number as the circle depletes. */

(function () {
  var timer = document.querySelector('.nuda-circle-timer');
  if (!timer) return;

  var valueEl = timer.querySelector('.nuda-circle-timer__value');
  if (!valueEl) return;

  var duration = 60; // seconds
  var remaining = duration;
  valueEl.textContent = remaining;

  var interval = setInterval(function () {
    remaining--;
    valueEl.textContent = Math.max(0, remaining);
    if (remaining <= 0) clearInterval(interval);
  }, 1000);
})();`,
      },
    ],
  },

  /* ─────────────── BAR TIMER ─────────────── */
  {
    id: "bar-timer",
    name: "Bar Timer",
    category: "Countdowns",
    preview: (
      <div className="nuda-bar-timer" role="timer" aria-label="Timer">
        <div className="nuda-bar-timer__header">
          <span className="nuda-bar-timer__label">Time remaining</span>
          <span className="nuda-bar-timer__value">0:42</span>
        </div>
        <div className="nuda-bar-timer__track">
          <div className="nuda-bar-timer__fill" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-bar-timer{--c:#e4ff54;width:100%;max-width:260px}
      .nuda-bar-timer__header{display:flex;justify-content:space-between;margin-bottom:6px}
      .nuda-bar-timer__label{color:#999;font-size:.75rem}
      .nuda-bar-timer__value{color:#fff;font-size:.75rem;font-weight:600;font-variant-numeric:tabular-nums}
      .nuda-bar-timer__track{width:100%;height:4px;background:rgba(255,255,255,.08);border-radius:4px;overflow:hidden}
      .nuda-bar-timer__fill{height:100%;background:var(--c);border-radius:4px;animation:_barcount 60s linear forwards;width:100%}
      @keyframes _barcount{from{width:100%}to{width:0%}}
      @media(prefers-reduced-motion:reduce){.nuda-bar-timer__fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bar-timer" role="timer" aria-label="Timer">
  <div class="nuda-bar-timer__header">
    <span class="nuda-bar-timer__label">Time remaining</span>
    <span class="nuda-bar-timer__value">1:00</span>
  </div>
  <div class="nuda-bar-timer__track">
    <div class="nuda-bar-timer__fill"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bar Timer
   Horizontal bar countdown that depletes over time.
   Customize: --bar-color, --bar-track, --bar-duration */

.nuda-bar-timer {
  --bar-color: #e4ff54;
  --bar-track: rgba(255, 255, 255, 0.08);
  --bar-duration: 60s;
  width: 100%;
}

.nuda-bar-timer__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}

.nuda-bar-timer__label {
  color: #999;
  font-size: 0.75rem;
}

.nuda-bar-timer__value {
  color: #fff;
  font-size: 0.75rem;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.nuda-bar-timer__track {
  width: 100%;
  height: 4px;
  background: var(--bar-track);
  border-radius: 4px;
  overflow: hidden;
}

.nuda-bar-timer__fill {
  height: 100%;
  background: var(--bar-color);
  border-radius: 4px;
  width: 100%;
  animation: nuda-bar-countdown var(--bar-duration) linear forwards;
}

@keyframes nuda-bar-countdown {
  from { width: 100%; }
  to   { width: 0%; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bar-timer__fill {
    animation: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Bar Timer — Updates the time label as the bar depletes. */

(function () {
  var timer = document.querySelector('.nuda-bar-timer');
  if (!timer) return;

  var valueEl = timer.querySelector('.nuda-bar-timer__value');
  if (!valueEl) return;

  var duration = 60; // seconds
  var remaining = duration;

  function formatTime(s) {
    var m = Math.floor(s / 60);
    var sec = s % 60;
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }

  valueEl.textContent = formatTime(remaining);

  var interval = setInterval(function () {
    remaining--;
    valueEl.textContent = formatTime(Math.max(0, remaining));
    if (remaining <= 0) clearInterval(interval);
  }, 1000);
})();`,
      },
    ],
  },

  /* ─────────────── NUMBER ROLL ─────────────── */
  {
    id: "number-roll",
    name: "Number Roll",
    category: "Countdowns",
    preview: (
      <div className="nuda-number-roll" role="timer" aria-label="Counter">
        <div className="nuda-number-roll__digit">
          <div className="nuda-number-roll__strip">
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
            <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
          </div>
        </div>
        <div className="nuda-number-roll__digit">
          <div className="nuda-number-roll__strip" style={{ animationDelay: "0.2s" }}>
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
            <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
          </div>
        </div>
        <div className="nuda-number-roll__digit">
          <div className="nuda-number-roll__strip" style={{ animationDelay: "0.4s" }}>
            <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
            <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-number-roll{--c:#e4ff54;display:flex;gap:2px}
      .nuda-number-roll__digit{width:28px;height:36px;background:#1a1a1a;border-radius:6px;overflow:hidden;position:relative}
      .nuda-number-roll__strip{display:flex;flex-direction:column;animation:_nroll 2s ease-out forwards}
      .nuda-number-roll__strip span{width:28px;height:36px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:1.1rem;font-weight:700;font-variant-numeric:tabular-nums;flex-shrink:0}
      @keyframes _nroll{from{transform:translateY(-324px)}to{transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-number-roll__strip{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-number-roll" role="timer" aria-label="Counter">
  <div class="nuda-number-roll__digit">
    <div class="nuda-number-roll__strip" data-target="3">
      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
      <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
    </div>
  </div>
  <div class="nuda-number-roll__digit">
    <div class="nuda-number-roll__strip" data-target="7">
      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
      <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
    </div>
  </div>
  <div class="nuda-number-roll__digit">
    <div class="nuda-number-roll__strip" data-target="2">
      <span>0</span><span>1</span><span>2</span><span>3</span><span>4</span>
      <span>5</span><span>6</span><span>7</span><span>8</span><span>9</span>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Number Roll
   Slot-machine style digit roll animation.
   Customize: --roll-bg, --roll-text, --roll-digit-size */

.nuda-number-roll {
  --roll-bg: #1a1a1a;
  --roll-text: #fff;
  --roll-digit-height: 40px;
  --roll-digit-width: 32px;
  display: flex;
  gap: 2px;
}

.nuda-number-roll__digit {
  width: var(--roll-digit-width);
  height: var(--roll-digit-height);
  background: var(--roll-bg);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}

.nuda-number-roll__strip {
  display: flex;
  flex-direction: column;
  transition: transform 1.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.nuda-number-roll__strip span {
  width: var(--roll-digit-width);
  height: var(--roll-digit-height);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--roll-text);
  font-size: 1.2rem;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-number-roll__strip {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Number Roll — Rolls digits to a target value.
   Set data-target on each .nuda-number-roll__strip element. */

(function () {
  var strips = document.querySelectorAll('.nuda-number-roll__strip');
  if (!strips.length) return;

  strips.forEach(function (strip, i) {
    var target = parseInt(strip.getAttribute('data-target') || '0', 10);
    var digitH = strip.querySelector('span').offsetHeight;

    // Slight stagger per digit
    setTimeout(function () {
      strip.style.transform = 'translateY(-' + (target * digitH) + 'px)';
    }, i * 150);
  });
})();`,
      },
    ],
  },
];
