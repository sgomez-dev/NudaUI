import type { NudaComponent } from "./types";

export const formStates: NudaComponent[] = [
  /* ─────────────── 1. Float Label Input ─────────────── */
  {
    id: "float-label",
    name: "Float Label",
    category: "Form States",
    preview: (
      <label className="nuda-float">
        <input className="nuda-float__input" type="email" placeholder=" " defaultValue="hello@nuda.dev" />
        <span className="nuda-float__label">Email</span>
      </label>
    ),
    cssInline: `
      .nuda-float{position:relative;display:block;width:160px}
      .nuda-float__input{width:100%;padding:14px 12px 6px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:#fafafa;font:500 12px ui-sans-serif,system-ui;outline:none;transition:border-color .25s,box-shadow .25s}
      .nuda-float__input:focus{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-float__label{position:absolute;left:12px;top:50%;transform:translateY(-50%);font:500 12px ui-sans-serif,system-ui;color:#a1a1aa;pointer-events:none;transition:transform .25s cubic-bezier(.4,0,.2,1),font-size .25s,color .25s}
      .nuda-float__input:focus~.nuda-float__label,.nuda-float__input:not(:placeholder-shown)~.nuda-float__label{transform:translateY(-130%) scale(.8);color:#e4ff54;left:10px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Float Label — placeholder=" " is required for the :placeholder-shown trick -->
<label class="nuda-float">
  <input class="nuda-float__input" type="email" placeholder=" " />
  <span class="nuda-float__label">Email</span>
</label>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Float Label
   Label slides up and shrinks on focus or when filled.
   Customize: --float-accent, --float-bg, --float-radius */

.nuda-float {
  --float-accent: #e4ff54;
  --float-bg: rgba(255, 255, 255, 0.03);
  --float-radius: 8px;
  position: relative;
  display: block;
  width: 100%;
  max-width: 240px;
}

.nuda-float__input {
  width: 100%;
  padding: 16px 14px 6px;
  background: var(--float-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--float-radius);
  color: #fafafa;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.nuda-float__input:focus {
  border-color: var(--float-accent);
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.12);
}

.nuda-float__label {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  pointer-events: none;
  transition:
    transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    font-size 0.25s,
    color 0.25s;
}

.nuda-float__input:focus ~ .nuda-float__label,
.nuda-float__input:not(:placeholder-shown) ~ .nuda-float__label {
  transform: translateY(-140%) scale(0.8);
  color: var(--float-accent);
  left: 12px;
}`,
      },
    ],
  },

  /* ─────────────── 2. Search Expand ─────────────── */
  {
    id: "search-expand",
    name: "Search Expand",
    category: "Form States",
    preview: (
      <label className="nuda-search-x">
        <svg className="nuda-search-x__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21 L16 16" />
        </svg>
        <input className="nuda-search-x__input" type="search" placeholder="Search…" />
      </label>
    ),
    cssInline: `
      .nuda-search-x{position:relative;display:inline-flex;align-items:center;height:36px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:999px;overflow:hidden;transition:width .4s cubic-bezier(.4,0,.2,1),border-color .25s,background .25s;width:36px}
      .nuda-search-x:hover,.nuda-search-x:focus-within{width:180px;background:rgba(255,255,255,.05);border-color:#e4ff54}
      .nuda-search-x__icon{flex:0 0 36px;width:36px;height:36px;padding:9px;color:#a1a1aa;transition:color .25s}
      .nuda-search-x:focus-within .nuda-search-x__icon{color:#e4ff54}
      .nuda-search-x__input{width:0;border:none;background:transparent;color:#fafafa;font:500 12px ui-sans-serif,system-ui;outline:none;padding:0;transition:width .4s cubic-bezier(.4,0,.2,1),padding .25s}
      .nuda-search-x:hover .nuda-search-x__input,.nuda-search-x:focus-within .nuda-search-x__input{width:130px;padding:0 12px 0 0}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Search Expand -->
<label class="nuda-search-x">
  <svg class="nuda-search-x__icon" viewBox="0 0 24 24"
       fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21 L16 16" />
  </svg>
  <input class="nuda-search-x__input" type="search" placeholder="Search…" />
</label>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Search Expand
   Compact icon button that expands into a full search input on hover/focus.
   Customize: --searchx-accent, collapsed/expanded widths */

.nuda-search-x {
  --searchx-accent: #e4ff54;
  --searchx-collapsed: 40px;
  --searchx-expanded: 220px;
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 40px;
  width: var(--searchx-collapsed);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  overflow: hidden;
  transition:
    width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.25s,
    background 0.25s;
}

.nuda-search-x:hover,
.nuda-search-x:focus-within {
  width: var(--searchx-expanded);
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--searchx-accent);
}

.nuda-search-x__icon {
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  padding: 10px;
  color: #a1a1aa;
  transition: color 0.25s;
}

.nuda-search-x:focus-within .nuda-search-x__icon { color: var(--searchx-accent); }

.nuda-search-x__input {
  width: 0;
  border: none;
  background: transparent;
  color: #fafafa;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  outline: none;
  padding: 0;
  transition:
    width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    padding 0.25s;
}

.nuda-search-x:hover .nuda-search-x__input,
.nuda-search-x:focus-within .nuda-search-x__input {
  width: calc(var(--searchx-expanded) - 50px);
  padding: 0 14px 0 0;
}`,
      },
    ],
  },

  /* ─────────────── 3. Password Strength ─────────────── */
  {
    id: "password-strength",
    name: "Password Strength",
    category: "Form States",
    preview: (
      <div className="nuda-pw">
        <input className="nuda-pw__input" type="password" defaultValue="Tr0ub4dor!" placeholder="Password" />
        <div className="nuda-pw__meter" data-strength="3">
          <span /><span /><span /><span />
        </div>
        <span className="nuda-pw__label">Strong</span>
      </div>
    ),
    cssInline: `
      .nuda-pw{display:flex;flex-direction:column;gap:6px;width:160px}
      .nuda-pw__input{width:100%;padding:8px 10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#fafafa;font:500 12px ui-sans-serif,system-ui;outline:none}
      .nuda-pw__input:focus{border-color:rgba(228,255,84,.4)}
      .nuda-pw__meter{display:grid;grid-template-columns:repeat(4,1fr);gap:3px;height:4px}
      .nuda-pw__meter span{background:rgba(255,255,255,.06);border-radius:2px;transition:background .3s,transform .3s;transform-origin:left;transform:scaleX(.4)}
      .nuda-pw__meter[data-strength="1"] span:nth-child(-n+1),
      .nuda-pw__meter[data-strength="2"] span:nth-child(-n+2),
      .nuda-pw__meter[data-strength="3"] span:nth-child(-n+3),
      .nuda-pw__meter[data-strength="4"] span:nth-child(-n+4){transform:scaleX(1)}
      .nuda-pw__meter[data-strength="1"] span:nth-child(-n+1){background:#ff6363}
      .nuda-pw__meter[data-strength="2"] span:nth-child(-n+2){background:#ffae54}
      .nuda-pw__meter[data-strength="3"] span:nth-child(-n+3){background:#e4ff54;box-shadow:0 0 4px rgba(228,255,84,.3)}
      .nuda-pw__meter[data-strength="4"] span:nth-child(-n+4){background:#e4ff54;box-shadow:0 0 6px rgba(228,255,84,.5)}
      .nuda-pw__label{font:600 9px ui-sans-serif,system-ui;color:#e4ff54;text-transform:uppercase;letter-spacing:.08em}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Password Strength — set data-strength to 0–4 from JS as the user types -->
<div class="nuda-pw">
  <input class="nuda-pw__input" type="password" placeholder="Password" />
  <div class="nuda-pw__meter" data-strength="0">
    <span></span><span></span><span></span><span></span>
  </div>
  <span class="nuda-pw__label">Weak</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Password Strength
   Strength meter with colored segments per level (1–4).
   Customize: --pw-bg, --pw-strong, the per-level colors. */

.nuda-pw {
  --pw-strong: #e4ff54;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 240px;
}

.nuda-pw__input {
  width: 100%;
  padding: 10px 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #fafafa;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  outline: none;
  transition: border-color 0.25s;
}

.nuda-pw__input:focus { border-color: rgba(228, 255, 84, 0.4); }

.nuda-pw__meter {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  height: 4px;
}

.nuda-pw__meter span {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  transform: scaleX(0.4);
  transform-origin: left;
  transition: background 0.3s, transform 0.3s;
}

.nuda-pw__meter[data-strength="1"] span:nth-child(-n+1),
.nuda-pw__meter[data-strength="2"] span:nth-child(-n+2),
.nuda-pw__meter[data-strength="3"] span:nth-child(-n+3),
.nuda-pw__meter[data-strength="4"] span:nth-child(-n+4) { transform: scaleX(1); }

.nuda-pw__meter[data-strength="1"] span:nth-child(-n+1) { background: #ff6363; }
.nuda-pw__meter[data-strength="2"] span:nth-child(-n+2) { background: #ffae54; }
.nuda-pw__meter[data-strength="3"] span:nth-child(-n+3) {
  background: var(--pw-strong);
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.3);
}
.nuda-pw__meter[data-strength="4"] span:nth-child(-n+4) {
  background: var(--pw-strong);
  box-shadow: 0 0 6px rgba(228, 255, 84, 0.5);
}

.nuda-pw__label {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: var(--pw-strong);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Password Strength — minimal scoring you can swap for zxcvbn / your rules. */

(function () {
  var input = document.querySelector('.nuda-pw__input');
  var meter = document.querySelector('.nuda-pw__meter');
  var label = document.querySelector('.nuda-pw__label');
  if (!input || !meter || !label) return;

  var labels = ['', 'Weak', 'Fair', 'Strong', 'Excellent'];

  function score(v) {
    if (!v) return 0;
    var n = 0;
    if (v.length >= 8) n++;
    if (/[A-Z]/.test(v) && /[a-z]/.test(v)) n++;
    if (/\\d/.test(v)) n++;
    if (/[^A-Za-z0-9]/.test(v)) n++;
    return n;
  }

  input.addEventListener('input', function () {
    var s = score(input.value);
    meter.dataset.strength = String(s);
    label.textContent = labels[s] || '';
  });
})();`,
      },
    ],
  },

  /* ─────────────── 4. OTP Cells ─────────────── */
  {
    id: "otp-cells",
    name: "OTP Cells",
    category: "Form States",
    preview: (
      <div className="nuda-otp" role="group" aria-label="One time code">
        <div className="nuda-otp__cell is-filled">4</div>
        <div className="nuda-otp__cell is-filled">2</div>
        <div className="nuda-otp__cell is-filled">7</div>
        <div className="nuda-otp__cell is-active" />
        <div className="nuda-otp__cell" />
        <div className="nuda-otp__cell" />
      </div>
    ),
    cssInline: `
      .nuda-otp{display:flex;gap:6px}
      .nuda-otp__cell{width:30px;height:38px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.1);border-radius:6px;color:#fafafa;font:700 16px ui-sans-serif,system-ui;font-variant-numeric:tabular-nums;transition:border-color .25s,box-shadow .25s,transform .25s}
      .nuda-otp__cell.is-filled{border-color:rgba(228,255,84,.4);background:rgba(228,255,84,.04);animation:_ot-pop .3s cubic-bezier(.34,1.56,.64,1)}
      .nuda-otp__cell.is-active{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15);position:relative}
      .nuda-otp__cell.is-active::after{content:"";position:absolute;width:1.5px;height:18px;background:#e4ff54;animation:_ot-cursor 1s steps(2) infinite}
      @keyframes _ot-pop{0%{transform:scale(.6)}100%{transform:scale(1)}}
      @keyframes _ot-cursor{50%{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- OTP Cells (toggle .is-filled / .is-active from JS) -->
<div class="nuda-otp" role="group" aria-label="One time code">
  <div class="nuda-otp__cell is-filled">4</div>
  <div class="nuda-otp__cell is-filled">2</div>
  <div class="nuda-otp__cell is-filled">7</div>
  <div class="nuda-otp__cell is-active"></div>
  <div class="nuda-otp__cell"></div>
  <div class="nuda-otp__cell"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* OTP Cells
   Six-cell code input with filled/active states + blinking cursor.
   Customize: --otp-accent, --otp-bg, cell size. */

.nuda-otp {
  --otp-accent: #e4ff54;
  --otp-bg: rgba(255, 255, 255, 0.03);
  display: flex;
  gap: 8px;
}

.nuda-otp__cell {
  width: 36px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--otp-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #fafafa;
  font: 700 1.1rem ui-sans-serif, system-ui, sans-serif;
  font-variant-numeric: tabular-nums;
  transition:
    border-color 0.25s,
    box-shadow 0.25s,
    transform 0.25s;
}

.nuda-otp__cell.is-filled {
  border-color: rgba(228, 255, 84, 0.4);
  background: rgba(228, 255, 84, 0.04);
  animation: nuda-otp-pop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-otp__cell.is-active {
  border-color: var(--otp-accent);
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.15);
  position: relative;
}

.nuda-otp__cell.is-active::after {
  content: "";
  position: absolute;
  width: 1.5px;
  height: 20px;
  background: var(--otp-accent);
  animation: nuda-otp-cursor 1s steps(2) infinite;
}

@keyframes nuda-otp-pop {
  0%   { transform: scale(0.6); }
  100% { transform: scale(1); }
}

@keyframes nuda-otp-cursor { 50% { opacity: 0; } }

@media (prefers-reduced-motion: reduce) {
  .nuda-otp__cell { animation: none; }
  .nuda-otp__cell.is-active::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Validation Check ─────────────── */
  {
    id: "validation-check",
    name: "Validation Check",
    category: "Form States",
    preview: (
      <label className="nuda-valid is-valid">
        <input className="nuda-valid__input" type="email" defaultValue="hello@nuda.dev" />
        <svg className="nuda-valid__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12 L10 17 L20 7" />
        </svg>
      </label>
    ),
    cssInline: `
      .nuda-valid{position:relative;display:block;width:160px}
      .nuda-valid__input{width:100%;padding:8px 36px 8px 12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#fafafa;font:500 12px ui-sans-serif,system-ui;outline:none;transition:border-color .25s,box-shadow .25s}
      .nuda-valid.is-valid .nuda-valid__input{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-valid__icon{position:absolute;right:10px;top:50%;width:16px;height:16px;color:#e4ff54;transform:translateY(-50%) scale(0);opacity:0;stroke-dasharray:30;stroke-dashoffset:30}
      .nuda-valid.is-valid .nuda-valid__icon{transform:translateY(-50%) scale(1);opacity:1;stroke-dashoffset:0;transition:transform .35s cubic-bezier(.34,1.56,.64,1),opacity .25s,stroke-dashoffset .5s ease-out .15s;filter:drop-shadow(0 0 4px rgba(228,255,84,.4))}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Validation Check (toggle .is-valid on the parent) -->
<label class="nuda-valid is-valid">
  <input class="nuda-valid__input" type="email" />
  <svg class="nuda-valid__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2.5"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12 L10 17 L20 7" />
  </svg>
</label>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Validation Check
   Animated check that pops in and draws when the input becomes valid.
   Customize: --valid-color, --valid-bg */

.nuda-valid {
  --valid-color: #e4ff54;
  position: relative;
  display: block;
  width: 100%;
  max-width: 240px;
}

.nuda-valid__input {
  width: 100%;
  padding: 10px 40px 10px 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #fafafa;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.nuda-valid.is-valid .nuda-valid__input {
  border-color: var(--valid-color);
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.12);
}

.nuda-valid__icon {
  position: absolute;
  right: 12px;
  top: 50%;
  width: 18px;
  height: 18px;
  color: var(--valid-color);
  transform: translateY(-50%) scale(0);
  opacity: 0;
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
}

.nuda-valid.is-valid .nuda-valid__icon {
  transform: translateY(-50%) scale(1);
  opacity: 1;
  stroke-dashoffset: 0;
  transition:
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.25s,
    stroke-dashoffset 0.5s ease-out 0.15s;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.4));
}`,
      },
    ],
  },

  /* ─────────────── 6. Error Shake ─────────────── */
  {
    id: "error-shake",
    name: "Error Shake",
    category: "Form States",
    preview: (
      <label className="nuda-shake is-error">
        <input className="nuda-shake__input" type="text" defaultValue="wrong-input" />
        <span className="nuda-shake__msg">
          <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="6" cy="6" r="5" />
            <path d="M6 3 L6 7" />
            <path d="M6 9 L6 9" />
          </svg>
          Invalid value
        </span>
      </label>
    ),
    cssInline: `
      .nuda-shake{display:flex;flex-direction:column;gap:5px;width:160px}
      .nuda-shake__input{width:100%;padding:8px 12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#fafafa;font:500 12px ui-sans-serif,system-ui;outline:none;transition:border-color .25s,box-shadow .25s}
      .nuda-shake.is-error .nuda-shake__input{border-color:#ff6363;box-shadow:0 0 0 3px rgba(255,99,99,.12);animation:_es-shake .4s cubic-bezier(.36,.07,.19,.97)}
      .nuda-shake__msg{display:flex;align-items:center;gap:4px;font:600 10px ui-sans-serif,system-ui;color:#ff6363;opacity:0;transform:translateY(-4px)}
      .nuda-shake.is-error .nuda-shake__msg{opacity:1;transform:translateY(0);transition:opacity .25s .15s,transform .25s .15s}
      @keyframes _es-shake{10%,90%{transform:translateX(-1px)}20%,80%{transform:translateX(2px)}30%,50%,70%{transform:translateX(-4px)}40%,60%{transform:translateX(4px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Error Shake (toggle .is-error on the parent) -->
<label class="nuda-shake is-error">
  <input class="nuda-shake__input" type="text" />
  <span class="nuda-shake__msg">
    <svg viewBox="0 0 12 12" width="10" height="10"
         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="6" cy="6" r="5" />
      <path d="M6 3 L6 7" />
      <path d="M6 9 L6 9" />
    </svg>
    Invalid value
  </span>
</label>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Error Shake
   Horizontal shake on the input, message slides + fades in below.
   Customize: --err-color */

.nuda-shake {
  --err-color: #ff6363;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 240px;
}

.nuda-shake__input {
  width: 100%;
  padding: 10px 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #fafafa;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.nuda-shake.is-error .nuda-shake__input {
  border-color: var(--err-color);
  box-shadow: 0 0 0 3px rgba(255, 99, 99, 0.12);
  animation: nuda-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

.nuda-shake__msg {
  display: flex;
  align-items: center;
  gap: 5px;
  font: 600 0.75rem ui-sans-serif, system-ui, sans-serif;
  color: var(--err-color);
  opacity: 0;
  transform: translateY(-4px);
}

.nuda-shake.is-error .nuda-shake__msg {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.25s 0.15s,
    transform 0.25s 0.15s;
}

@keyframes nuda-shake {
  10%, 90%       { transform: translateX(-1px); }
  20%, 80%       { transform: translateX(2px); }
  30%, 50%, 70%  { transform: translateX(-4px); }
  40%, 60%       { transform: translateX(4px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-shake.is-error .nuda-shake__input { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Toggle Group ─────────────── */
  {
    id: "toggle-group",
    name: "Toggle Group",
    category: "Form States",
    preview: (
      <div className="nuda-toggleg" role="tablist">
        <button className="nuda-toggleg__opt" type="button">Day</button>
        <button className="nuda-toggleg__opt is-active" type="button">Week</button>
        <button className="nuda-toggleg__opt" type="button">Month</button>
        <span className="nuda-toggleg__pill" />
      </div>
    ),
    cssInline: `
      .nuda-toggleg{position:relative;display:inline-flex;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:3px}
      .nuda-toggleg__opt{position:relative;z-index:2;padding:5px 12px;background:transparent;border:none;color:#a1a1aa;font:600 11px ui-sans-serif,system-ui;cursor:pointer;border-radius:6px;transition:color .3s}
      .nuda-toggleg__opt.is-active{color:#09090b}
      .nuda-toggleg__pill{position:absolute;z-index:1;top:3px;left:3px;width:calc(33.33% - 2px);height:calc(100% - 6px);background:#e4ff54;border-radius:6px;box-shadow:0 0 8px rgba(228,255,84,.3);transition:transform .35s cubic-bezier(.4,0,.2,1);transform:translateX(100%)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Toggle Group — pill slides via translateX based on active index -->
<div class="nuda-toggleg" role="tablist">
  <button class="nuda-toggleg__opt"           type="button">Day</button>
  <button class="nuda-toggleg__opt is-active" type="button">Week</button>
  <button class="nuda-toggleg__opt"           type="button">Month</button>
  <span class="nuda-toggleg__pill"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Toggle Group
   Segmented control: pill slides under the active option.
   Customize: --toggle-accent, --toggle-text-active */

.nuda-toggleg {
  --toggle-accent: #e4ff54;
  --toggle-text-active: #09090b;
  position: relative;
  display: inline-flex;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  padding: 4px;
}

.nuda-toggleg__opt {
  position: relative;
  z-index: 2;
  padding: 7px 16px;
  background: transparent;
  border: none;
  color: #a1a1aa;
  font: 600 0.75rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  border-radius: 6px;
  transition: color 0.3s;
}

.nuda-toggleg__opt.is-active {
  color: var(--toggle-text-active);
}

.nuda-toggleg__pill {
  position: absolute;
  z-index: 1;
  top: 4px;
  left: 4px;
  width: calc(33.33% - 2.6px);
  height: calc(100% - 8px);
  background: var(--toggle-accent);
  border-radius: 6px;
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.3);
  transform: translateX(100%); /* second option active by default */
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Move from JS by setting transform: translateX(0 / 100% / 200%) */`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Toggle Group — slides the pill to the clicked option. */

(function () {
  var group = document.querySelector('.nuda-toggleg');
  if (!group) return;

  var opts = group.querySelectorAll('.nuda-toggleg__opt');
  var pill = group.querySelector('.nuda-toggleg__pill');

  opts.forEach(function (btn, i) {
    btn.addEventListener('click', function () {
      opts.forEach(function (o) { o.classList.remove('is-active'); });
      btn.classList.add('is-active');
      pill.style.transform = 'translateX(' + (i * 100) + '%)';
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 8. Range Bubble ─────────────── */
  {
    id: "range-bubble",
    name: "Range Bubble",
    category: "Form States",
    preview: (
      <div className="nuda-range" style={{ ["--v" as string]: "65%" }}>
        <div className="nuda-range__track">
          <span className="nuda-range__fill" />
        </div>
        <span className="nuda-range__thumb">
          <span className="nuda-range__bubble">65</span>
        </span>
      </div>
    ),
    cssInline: `
      .nuda-range{position:relative;width:160px;height:32px;padding:14px 8px}
      .nuda-range__track{position:absolute;left:8px;right:8px;top:50%;height:4px;background:rgba(255,255,255,.06);border-radius:2px;transform:translateY(-50%)}
      .nuda-range__fill{position:absolute;left:0;top:0;height:100%;width:var(--v);background:linear-gradient(90deg,rgba(228,255,84,.6),#e4ff54);border-radius:2px;animation:_rg-fill 1.6s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-range__thumb{position:absolute;left:var(--v);top:50%;width:14px;height:14px;border-radius:50%;background:#fafafa;border:2px solid #e4ff54;transform:translate(-50%,-50%);box-shadow:0 0 8px rgba(228,255,84,.4);animation:_rg-pop .8s cubic-bezier(.34,1.56,.64,1) backwards}
      .nuda-range__bubble{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);padding:2px 7px;background:#e4ff54;color:#09090b;font:700 9px ui-sans-serif,system-ui;border-radius:4px;font-variant-numeric:tabular-nums;animation:_rg-bub .6s cubic-bezier(.34,1.56,.64,1) backwards}
      .nuda-range__bubble::after{content:"";position:absolute;left:50%;bottom:-3px;transform:translateX(-50%) rotate(45deg);width:6px;height:6px;background:#e4ff54}
      @keyframes _rg-fill{from{width:0}}
      @keyframes _rg-pop{from{transform:translate(-50%,-50%) scale(0)}}
      @keyframes _rg-bub{from{opacity:0;transform:translateX(-50%) translateY(4px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Range Bubble — set --v as a percentage (or px) for thumb position -->
<div class="nuda-range" style="--v: 65%">
  <div class="nuda-range__track"><span class="nuda-range__fill"></span></div>
  <span class="nuda-range__thumb">
    <span class="nuda-range__bubble">65</span>
  </span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Range Bubble
   Custom slider visual: filled track, thumb, value bubble with pointer.
   Customize: --rng-color, --rng-thumb (set --v to drive the position). */

.nuda-range {
  --rng-color: #e4ff54;
  --rng-thumb: #fafafa;
  position: relative;
  width: 100%;
  max-width: 240px;
  height: 36px;
  padding: 16px 10px;
}

.nuda-range__track {
  position: absolute;
  left: 10px;
  right: 10px;
  top: 50%;
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  transform: translateY(-50%);
}

.nuda-range__fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: var(--v, 0%);
  background: linear-gradient(90deg, rgba(228, 255, 84, 0.6), var(--rng-color));
  border-radius: 2px;
  animation: nuda-rng-fill 1.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nuda-range__thumb {
  position: absolute;
  left: var(--v, 0%);
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--rng-thumb);
  border: 2px solid var(--rng-color);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.4);
  animation: nuda-rng-pop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
}

.nuda-range__bubble {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  padding: 3px 9px;
  background: var(--rng-color);
  color: #09090b;
  font: 700 0.625rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 4px;
  font-variant-numeric: tabular-nums;
  animation: nuda-rng-bub 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
}

.nuda-range__bubble::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -3px;
  transform: translateX(-50%) rotate(45deg);
  width: 6px;
  height: 6px;
  background: var(--rng-color);
}

@keyframes nuda-rng-fill { from { width: 0; } }
@keyframes nuda-rng-pop  { from { transform: translate(-50%, -50%) scale(0); } }
@keyframes nuda-rng-bub  { from { opacity: 0; transform: translateX(-50%) translateY(4px); } }`,
      },
    ],
  },

  /* ─────────────── 9. Step Indicator ─────────────── */
  {
    id: "step-indicator",
    name: "Step Indicator",
    category: "Form States",
    preview: (
      <ol className="nuda-steps" aria-label="Form progress">
        <li className="nuda-steps__item is-done">
          <span className="nuda-steps__dot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12 L10 17 L20 7" />
            </svg>
          </span>
          <span className="nuda-steps__label">Account</span>
        </li>
        <li className="nuda-steps__item is-done">
          <span className="nuda-steps__dot">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12 L10 17 L20 7" />
            </svg>
          </span>
          <span className="nuda-steps__label">Profile</span>
        </li>
        <li className="nuda-steps__item is-current">
          <span className="nuda-steps__dot">3</span>
          <span className="nuda-steps__label">Payment</span>
        </li>
        <li className="nuda-steps__item">
          <span className="nuda-steps__dot">4</span>
          <span className="nuda-steps__label">Done</span>
        </li>
      </ol>
    ),
    cssInline: `
      .nuda-steps{list-style:none;display:flex;align-items:flex-start;padding:0;margin:0;width:200px}
      .nuda-steps__item{flex:1;position:relative;display:flex;flex-direction:column;align-items:center;gap:4px}
      .nuda-steps__item:not(:last-child)::after{content:"";position:absolute;top:11px;left:calc(50% + 12px);right:calc(-50% + 12px);height:1.5px;background:rgba(255,255,255,.08);transition:background .3s}
      .nuda-steps__item.is-done::after,.nuda-steps__item.is-current::after{background:rgba(228,255,84,.5)}
      .nuda-steps__dot{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);font:700 10px ui-sans-serif,system-ui;color:#a1a1aa;transition:all .3s}
      .nuda-steps__dot svg{width:10px;height:10px}
      .nuda-steps__item.is-done .nuda-steps__dot{background:#e4ff54;border-color:#e4ff54;color:#09090b;box-shadow:0 0 8px rgba(228,255,84,.3);animation:_sp-pop .4s cubic-bezier(.34,1.56,.64,1)}
      .nuda-steps__item.is-current .nuda-steps__dot{background:rgba(228,255,84,.1);border-color:#e4ff54;color:#e4ff54;box-shadow:0 0 0 4px rgba(228,255,84,.08)}
      .nuda-steps__item.is-current .nuda-steps__dot::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:1px solid #e4ff54;animation:_sp-pulse 1.6s ease-out infinite;opacity:0}
      .nuda-steps__label{font:600 9px ui-sans-serif,system-ui;color:#a1a1aa;text-align:center}
      .nuda-steps__item.is-done .nuda-steps__label,.nuda-steps__item.is-current .nuda-steps__label{color:#fafafa}
      @keyframes _sp-pop{0%{transform:scale(.6)}100%{transform:scale(1)}}
      @keyframes _sp-pulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.6);opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Step Indicator (toggle .is-done / .is-current as the user progresses) -->
<ol class="nuda-steps" aria-label="Form progress">
  <li class="nuda-steps__item is-done">
    <span class="nuda-steps__dot">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12 L10 17 L20 7" />
      </svg>
    </span>
    <span class="nuda-steps__label">Account</span>
  </li>
  <li class="nuda-steps__item is-current">
    <span class="nuda-steps__dot">2</span>
    <span class="nuda-steps__label">Profile</span>
  </li>
  <li class="nuda-steps__item">
    <span class="nuda-steps__dot">3</span>
    <span class="nuda-steps__label">Payment</span>
  </li>
  <li class="nuda-steps__item">
    <span class="nuda-steps__dot">4</span>
    <span class="nuda-steps__label">Done</span>
  </li>
</ol>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Step Indicator
   Multi-step form progress: completed/current/upcoming with connector line.
   Customize: --step-accent, --step-track */

.nuda-steps {
  --step-accent: #e4ff54;
  --step-track: rgba(255, 255, 255, 0.08);
  list-style: none;
  display: flex;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 280px;
}

.nuda-steps__item {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.nuda-steps__item:not(:last-child)::after {
  content: "";
  position: absolute;
  top: 12px;
  left: calc(50% + 14px);
  right: calc(-50% + 14px);
  height: 1.5px;
  background: var(--step-track);
  transition: background 0.3s;
}

.nuda-steps__item.is-done::after,
.nuda-steps__item.is-current::after {
  background: rgba(228, 255, 84, 0.5);
}

.nuda-steps__dot {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--step-track);
  font: 700 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  transition: all 0.3s;
}

.nuda-steps__dot svg { width: 12px; height: 12px; }

.nuda-steps__item.is-done .nuda-steps__dot {
  background: var(--step-accent);
  border-color: var(--step-accent);
  color: #09090b;
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.3);
  animation: nuda-step-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-steps__item.is-current .nuda-steps__dot {
  background: rgba(228, 255, 84, 0.1);
  border-color: var(--step-accent);
  color: var(--step-accent);
  box-shadow: 0 0 0 4px rgba(228, 255, 84, 0.08);
}

.nuda-steps__item.is-current .nuda-steps__dot::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid var(--step-accent);
  opacity: 0;
  animation: nuda-step-pulse 1.6s ease-out infinite;
}

.nuda-steps__label {
  font: 600 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-align: center;
}

.nuda-steps__item.is-done .nuda-steps__label,
.nuda-steps__item.is-current .nuda-steps__label {
  color: #fafafa;
}

@keyframes nuda-step-pop {
  0%   { transform: scale(0.6); }
  100% { transform: scale(1); }
}

@keyframes nuda-step-pulse {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(1.6); opacity: 0;   }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-steps__item.is-current .nuda-steps__dot::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Async Submit ─────────────── */
  {
    id: "async-submit",
    name: "Async Submit",
    category: "Form States",
    preview: (
      <button className="nuda-async is-loading" type="button">
        <span className="nuda-async__label">Submit</span>
        <span className="nuda-async__spinner" />
        <svg className="nuda-async__check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12 L10 17 L20 7" />
        </svg>
      </button>
    ),
    cssInline: `
      .nuda-async{position:relative;display:inline-flex;align-items:center;justify-content:center;min-width:120px;height:38px;padding:0 18px;background:#e4ff54;color:#09090b;border:none;border-radius:8px;font:700 12px ui-sans-serif,system-ui;cursor:pointer;overflow:hidden;transition:width .35s,min-width .35s,background .25s,box-shadow .25s;box-shadow:0 0 0 0 rgba(228,255,84,0)}
      .nuda-async:hover{box-shadow:0 0 16px rgba(228,255,84,.35)}
      .nuda-async__label{transition:opacity .2s,transform .25s}
      .nuda-async__spinner,.nuda-async__check{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) scale(0);opacity:0;transition:transform .3s,opacity .25s}
      .nuda-async__spinner{width:16px;height:16px;border-radius:50%;border:2px solid rgba(9,9,11,.2);border-top-color:#09090b;animation:_as-spin 1s linear infinite}
      .nuda-async__check{width:18px;height:18px}
      .nuda-async.is-loading{min-width:38px;width:38px;padding:0}
      .nuda-async.is-loading .nuda-async__label{opacity:0;transform:scale(.8)}
      .nuda-async.is-loading .nuda-async__spinner{transform:translate(-50%,-50%) scale(1);opacity:1}
      .nuda-async.is-success{background:#e4ff54;min-width:38px;width:38px;padding:0;animation:_as-pop .4s cubic-bezier(.34,1.56,.64,1)}
      .nuda-async.is-success .nuda-async__label,.nuda-async.is-success .nuda-async__spinner{opacity:0}
      .nuda-async.is-success .nuda-async__check{transform:translate(-50%,-50%) scale(1);opacity:1}
      @keyframes _as-spin{to{transform:translate(-50%,-50%) rotate(360deg)}}
      @keyframes _as-pop{0%{transform:scale(.95)}50%{transform:scale(1.05)}100%{transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Async Submit (toggle .is-loading then .is-success from JS) -->
<button class="nuda-async" type="button">
  <span class="nuda-async__label">Submit</span>
  <span class="nuda-async__spinner"></span>
  <svg class="nuda-async__check" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="3"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12 L10 17 L20 7" />
  </svg>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Async Submit
   Button morphs label → spinner → check on submit.
   Customize: --async-bg, --async-text */

.nuda-async {
  --async-bg: #e4ff54;
  --async-text: #09090b;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 140px;
  height: 42px;
  padding: 0 22px;
  background: var(--async-bg);
  color: var(--async-text);
  border: none;
  border-radius: 8px;
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  overflow: hidden;
  transition:
    width 0.35s,
    min-width 0.35s,
    background 0.25s,
    box-shadow 0.25s;
}

.nuda-async:hover { box-shadow: 0 0 18px rgba(228, 255, 84, 0.35); }

.nuda-async__label { transition: opacity 0.2s, transform 0.25s; }

.nuda-async__spinner,
.nuda-async__check {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: transform 0.3s, opacity 0.25s;
}

.nuda-async__spinner {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(9, 9, 11, 0.2);
  border-top-color: var(--async-text);
  animation: nuda-async-spin 1s linear infinite;
}

.nuda-async__check { width: 20px; height: 20px; }

.nuda-async.is-loading {
  min-width: 42px;
  width: 42px;
  padding: 0;
}
.nuda-async.is-loading .nuda-async__label   { opacity: 0; transform: scale(0.8); }
.nuda-async.is-loading .nuda-async__spinner {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

.nuda-async.is-success {
  min-width: 42px;
  width: 42px;
  padding: 0;
  animation: nuda-async-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.nuda-async.is-success .nuda-async__label,
.nuda-async.is-success .nuda-async__spinner { opacity: 0; }
.nuda-async.is-success .nuda-async__check {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

@keyframes nuda-async-spin { to { transform: translate(-50%, -50%) rotate(360deg); } }

@keyframes nuda-async-pop {
  0%   { transform: scale(0.95); }
  50%  { transform: scale(1.05); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-async__spinner { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Async Submit — drive the loading → success state machine. */

(function () {
  var btn = document.querySelector('.nuda-async');
  if (!btn) return;

  btn.addEventListener('click', function () {
    if (btn.classList.contains('is-loading') || btn.classList.contains('is-success')) return;

    btn.classList.add('is-loading');

    // Simulate an async request — replace with your real submit/fetch.
    setTimeout(function () {
      btn.classList.remove('is-loading');
      btn.classList.add('is-success');
    }, 1400);

    // Optional: reset back to idle.
    setTimeout(function () {
      btn.classList.remove('is-success');
    }, 3400);
  });
})();`,
      },
    ],
  },
];
