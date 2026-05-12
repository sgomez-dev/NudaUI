import type { NudaComponent } from "./types";

export const multiChips: NudaComponent[] = [
  /* ─────────────── 1. CHIP INPUT ADD ─────────────── */
  {
    id: "chip-input-add",
    name: "Chip Input Add",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-input">
        <span className="nuda-chip-input__chip">react</span>
        <span className="nuda-chip-input__chip">typescript</span>
        <span className="nuda-chip-input__chip">css</span>
        <input className="nuda-chip-input__field" placeholder="Add tag…" defaultValue="tailwind" />
      </div>
    ),
    cssInline: `
      .nuda-chip-input{display:flex;flex-wrap:wrap;align-items:center;gap:6px;width:100%;padding:8px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:10px;transition:border-color .2s}
      .nuda-chip-input:focus-within{border-color:#e4ff54}
      .nuda-chip-input__chip{display:inline-flex;align-items:center;padding:4px 10px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.06);border-radius:99px}
      .nuda-chip-input__field{flex:1;min-width:80px;padding:4px 6px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa;background:transparent;border:0;outline:0}
      .nuda-chip-input__field::placeholder{color:#63636e}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-input">
  <span class="nuda-chip-input__chip">react</span>
  <span class="nuda-chip-input__chip">typescript</span>
  <span class="nuda-chip-input__chip">css</span>
  <input class="nuda-chip-input__field" placeholder="Add tag…" />
</div>

<script>
  // Press Enter to add the typed value as a new chip.
  document.querySelector(".nuda-chip-input__field")
    .addEventListener("keydown", (e) => {
      if (e.key !== "Enter" || !e.target.value.trim()) return;
      e.preventDefault();
      const chip = document.createElement("span");
      chip.className = "nuda-chip-input__chip";
      chip.textContent = e.target.value.trim();
      e.target.before(chip);
      e.target.value = "";
    });
</script>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip Input Add
   Typed text becomes a chip on Enter.
   Customize: --chip-bg, --chip-accent */

.nuda-chip-input {
  --chip-accent: #e4ff54;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 8px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  transition: border-color 0.2s ease;
}

.nuda-chip-input:focus-within {
  border-color: var(--chip-accent);
}

.nuda-chip-input__chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 99px;
}

.nuda-chip-input__field {
  flex: 1;
  min-width: 80px;
  padding: 4px 6px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: transparent;
  border: 0;
  outline: 0;
}

.nuda-chip-input__field::placeholder {
  color: #63636e;
}`,
      },
    ],
  },

  /* ─────────────── 2. CHIP REMOVE ANIMATION ─────────────── */
  {
    id: "chip-remove-animation",
    name: "Chip Remove Animation",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-remove">
        <span className="nuda-chip-remove__chip">design<button className="nuda-chip-remove__x" aria-label="Remove">×</button></span>
        <span className="nuda-chip-remove__chip nuda-chip-remove__chip--leaving">animation<button className="nuda-chip-remove__x" aria-label="Remove">×</button></span>
        <span className="nuda-chip-remove__chip">motion<button className="nuda-chip-remove__x" aria-label="Remove">×</button></span>
      </div>
    ),
    cssInline: `
      .nuda-chip-remove{display:flex;flex-wrap:wrap;gap:6px}
      .nuda-chip-remove__chip{display:inline-flex;align-items:center;gap:6px;padding:4px 4px 4px 10px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:99px;transform-origin:center;animation:_chipin .25s ease both}
      .nuda-chip-remove__chip--leaving{animation:_chipout 1.4s ease-in-out infinite}
      .nuda-chip-remove__x{display:inline-grid;place-items:center;width:18px;height:18px;font-size:14px;line-height:1;color:#a0a0a8;background:transparent;border:0;border-radius:99px;cursor:pointer;transition:background .15s,color .15s}
      .nuda-chip-remove__x:hover{background:rgba(255,255,255,.08);color:#fafafa}
      @keyframes _chipin{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}
      @keyframes _chipout{0%,60%{opacity:1;transform:scale(1)}80%,100%{opacity:0;transform:scale(.6)}}
      @media(prefers-reduced-motion:reduce){.nuda-chip-remove__chip,.nuda-chip-remove__chip--leaving{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-remove">
  <span class="nuda-chip-remove__chip">
    design
    <button class="nuda-chip-remove__x" aria-label="Remove design">×</button>
  </span>
  <span class="nuda-chip-remove__chip">
    motion
    <button class="nuda-chip-remove__x" aria-label="Remove motion">×</button>
  </span>
</div>

<script>
  document.querySelectorAll(".nuda-chip-remove__x").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chip = btn.closest(".nuda-chip-remove__chip");
      chip.classList.add("nuda-chip-remove__chip--leaving");
      chip.addEventListener("animationend", () => chip.remove(), { once: true });
    });
  });
</script>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip Remove Animation
   Chip shrinks and fades when removed.
   Customize: --chip-bg, --chip-radius */

.nuda-chip-remove {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nuda-chip-remove__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 4px 4px 10px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  transform-origin: center;
  animation: nuda-chip-in 0.25s ease both;
}

.nuda-chip-remove__chip--leaving {
  animation: nuda-chip-out 0.3s ease forwards;
}

.nuda-chip-remove__x {
  display: inline-grid;
  place-items: center;
  width: 18px;
  height: 18px;
  font-size: 14px;
  line-height: 1;
  color: #a0a0a8;
  background: transparent;
  border: 0;
  border-radius: 99px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.nuda-chip-remove__x:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fafafa;
}

@keyframes nuda-chip-in {
  from { opacity: 0; transform: scale(0.6); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes nuda-chip-out {
  to { opacity: 0; transform: scale(0.6); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-remove__chip,
  .nuda-chip-remove__chip--leaving { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. CHIP AUTOCOMPLETE DROPDOWN ─────────────── */
  {
    id: "chip-autocomplete-dropdown",
    name: "Chip Autocomplete Dropdown",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-auto">
        <div className="nuda-chip-auto__field">
          <span className="nuda-chip-auto__chip">react</span>
          <input className="nuda-chip-auto__input" defaultValue="ty" readOnly />
        </div>
        <ul className="nuda-chip-auto__list" role="listbox">
          <li className="nuda-chip-auto__opt nuda-chip-auto__opt--active"><b>ty</b>pescript</li>
          <li className="nuda-chip-auto__opt"><b>ty</b>pography</li>
          <li className="nuda-chip-auto__opt"><b>ty</b>ped-arrays</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-chip-auto{position:relative;width:100%;max-width:280px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa}
      .nuda-chip-auto__field{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:8px;background:#0c0c10;border:1px solid #e4ff54;border-radius:10px}
      .nuda-chip-auto__chip{padding:4px 10px;background:#111114;border:1px solid rgba(255,255,255,.06);border-radius:99px}
      .nuda-chip-auto__input{flex:1;min-width:60px;padding:4px;color:#fafafa;background:transparent;border:0;outline:0;caret-color:#e4ff54}
      .nuda-chip-auto__list{margin:4px 0 0;padding:4px;list-style:none;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:10px;box-shadow:0 12px 24px rgba(0,0,0,.4);animation:_dropin .18s ease both}
      .nuda-chip-auto__opt{padding:8px 10px;color:#a0a0a8;border-radius:6px;cursor:pointer}
      .nuda-chip-auto__opt b{color:#fafafa;font-weight:600}
      .nuda-chip-auto__opt:hover,.nuda-chip-auto__opt--active{color:#fafafa;background:#111114}
      .nuda-chip-auto__opt--active{background:rgba(228,255,84,.08)}
      @keyframes _dropin{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-chip-auto__list{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-auto">
  <div class="nuda-chip-auto__field">
    <span class="nuda-chip-auto__chip">react</span>
    <input class="nuda-chip-auto__input" value="ty" />
  </div>
  <ul class="nuda-chip-auto__list" role="listbox">
    <li class="nuda-chip-auto__opt nuda-chip-auto__opt--active"><b>ty</b>pescript</li>
    <li class="nuda-chip-auto__opt"><b>ty</b>pography</li>
    <li class="nuda-chip-auto__opt"><b>ty</b>ped-arrays</li>
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip Autocomplete Dropdown
   Suggests matching chips as you type.
   Customize: --auto-accent, --auto-surface */

.nuda-chip-auto {
  --auto-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 280px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}

.nuda-chip-auto__field {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 8px;
  background: #0c0c10;
  border: 1px solid var(--auto-accent);
  border-radius: 10px;
}

.nuda-chip-auto__chip {
  padding: 4px 10px;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 99px;
}

.nuda-chip-auto__input {
  flex: 1;
  min-width: 60px;
  padding: 4px;
  color: #fafafa;
  background: transparent;
  border: 0;
  outline: 0;
  caret-color: var(--auto-accent);
}

.nuda-chip-auto__list {
  margin: 4px 0 0;
  padding: 4px;
  list-style: none;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
  animation: nuda-dropin 0.18s ease both;
}

.nuda-chip-auto__opt {
  padding: 8px 10px;
  color: #a0a0a8;
  border-radius: 6px;
  cursor: pointer;
}

.nuda-chip-auto__opt b { color: #fafafa; font-weight: 600; }

.nuda-chip-auto__opt:hover,
.nuda-chip-auto__opt--active {
  color: #fafafa;
  background: rgba(228, 255, 84, 0.08);
}

@keyframes nuda-dropin {
  from { opacity: 0; transform: translateY(-4px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-auto__list { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. CHIP GROUP (selected) ─────────────── */
  {
    id: "chip-group",
    name: "Chip Group",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-group" role="group">
        <button className="nuda-chip-group__chip" type="button">React</button>
        <button className="nuda-chip-group__chip nuda-chip-group__chip--on" type="button" aria-pressed="true">
          <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M2 6l3 3 5-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Vue
        </button>
        <button className="nuda-chip-group__chip nuda-chip-group__chip--on" type="button" aria-pressed="true">
          <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true"><path d="M2 6l3 3 5-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Svelte
        </button>
        <button className="nuda-chip-group__chip" type="button">Solid</button>
      </div>
    ),
    cssInline: `
      .nuda-chip-group{display:flex;flex-wrap:wrap;gap:6px}
      .nuda-chip-group__chip{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;font:500 12px/1 ui-sans-serif,system-ui;color:#a0a0a8;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:99px;cursor:pointer;transition:transform .15s,color .2s,background .2s,border-color .2s}
      .nuda-chip-group__chip:hover{color:#fafafa;border-color:rgba(255,255,255,.2);transform:translateY(-1px)}
      .nuda-chip-group__chip--on{color:#09090b;background:#e4ff54;border-color:#e4ff54}
      .nuda-chip-group__chip--on:hover{color:#09090b;background:#e4ff54;border-color:#e4ff54}
      .nuda-chip-group__chip svg{flex-shrink:0}
      @media(prefers-reduced-motion:reduce){.nuda-chip-group__chip{transition:none}.nuda-chip-group__chip:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-group" role="group">
  <button class="nuda-chip-group__chip" type="button">React</button>
  <button class="nuda-chip-group__chip nuda-chip-group__chip--on"
          type="button" aria-pressed="true">
    <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
      <path d="M2 6l3 3 5-6" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    Vue
  </button>
  <button class="nuda-chip-group__chip" type="button">Svelte</button>
</div>

<script>
  document.querySelectorAll(".nuda-chip-group__chip").forEach((b) => {
    b.addEventListener("click", () => {
      b.classList.toggle("nuda-chip-group__chip--on");
      b.setAttribute("aria-pressed", b.classList.contains("nuda-chip-group__chip--on"));
    });
  });
</script>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip Group
   Multi-select chips with a checkmark when on.
   Customize: --chip-on-bg, --chip-on-fg */

.nuda-chip-group {
  --chip-on-bg: #e4ff54;
  --chip-on-fg: #09090b;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nuda-chip-group__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #a0a0a8;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  cursor: pointer;
  transition: transform 0.15s, color 0.2s, background 0.2s, border-color 0.2s;
}

.nuda-chip-group__chip:hover {
  color: #fafafa;
  border-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
}

.nuda-chip-group__chip--on,
.nuda-chip-group__chip--on:hover {
  color: var(--chip-on-fg);
  background: var(--chip-on-bg);
  border-color: var(--chip-on-bg);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-group__chip { transition: none; }
  .nuda-chip-group__chip:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. MAX COUNT INDICATOR ─────────────── */
  {
    id: "chip-max-count",
    name: "Max Count Indicator",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-max">
        <div className="nuda-chip-max__row">
          <span className="nuda-chip-max__chip">design</span>
          <span className="nuda-chip-max__chip">code</span>
          <span className="nuda-chip-max__chip">tools</span>
          <span className="nuda-chip-max__chip">ideas</span>
          <span className="nuda-chip-max__chip">notes</span>
        </div>
        <div className="nuda-chip-max__meta">
          <span className="nuda-chip-max__count">5 / 10</span>
          <span className="nuda-chip-max__bar"><span style={{ width: "50%" }} /></span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-chip-max{width:100%;max-width:280px;font:500 12px/1.4 ui-sans-serif,system-ui;color:#fafafa}
      .nuda-chip-max__row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:8px}
      .nuda-chip-max__chip{padding:4px 10px;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:99px}
      .nuda-chip-max__meta{display:flex;align-items:center;gap:8px}
      .nuda-chip-max__count{font-size:11px;color:#a0a0a8;font-variant-numeric:tabular-nums}
      .nuda-chip-max__bar{flex:1;height:3px;background:rgba(255,255,255,.06);border-radius:99px;overflow:hidden}
      .nuda-chip-max__bar>span{display:block;height:100%;background:#e4ff54;border-radius:99px;transition:width .3s ease}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-max">
  <div class="nuda-chip-max__row">
    <span class="nuda-chip-max__chip">design</span>
    <span class="nuda-chip-max__chip">code</span>
    <span class="nuda-chip-max__chip">tools</span>
    <span class="nuda-chip-max__chip">ideas</span>
    <span class="nuda-chip-max__chip">notes</span>
  </div>
  <div class="nuda-chip-max__meta">
    <span class="nuda-chip-max__count">5 / 10</span>
    <span class="nuda-chip-max__bar"><span style="width:50%"></span></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Max Count Indicator
   Shows "n / max" plus a progress bar.
   Customize: --max-accent */

.nuda-chip-max {
  --max-accent: #e4ff54;
  width: 100%;
  max-width: 280px;
  font: 500 12px/1.4 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}

.nuda-chip-max__row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 8px;
}

.nuda-chip-max__chip {
  padding: 4px 10px;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
}

.nuda-chip-max__meta {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nuda-chip-max__count {
  font-size: 11px;
  color: #a0a0a8;
  font-variant-numeric: tabular-nums;
}

.nuda-chip-max__bar {
  flex: 1;
  height: 3px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 99px;
  overflow: hidden;
}

.nuda-chip-max__bar > span {
  display: block;
  height: 100%;
  background: var(--max-accent);
  border-radius: 99px;
  transition: width 0.3s ease;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-max__bar > span { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. CHIP COLOR VARIANTS ─────────────── */
  {
    id: "chip-color-variants",
    name: "Chip Color Variants",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-colors">
        <span className="nuda-chip-colors__chip nuda-chip-colors__chip--neutral">neutral</span>
        <span className="nuda-chip-colors__chip nuda-chip-colors__chip--accent">accent</span>
        <span className="nuda-chip-colors__chip nuda-chip-colors__chip--success">success</span>
        <span className="nuda-chip-colors__chip nuda-chip-colors__chip--warn">warn</span>
        <span className="nuda-chip-colors__chip nuda-chip-colors__chip--danger">danger</span>
        <span className="nuda-chip-colors__chip nuda-chip-colors__chip--info">info</span>
        <span className="nuda-chip-colors__chip nuda-chip-colors__chip--violet">violet</span>
        <span className="nuda-chip-colors__chip nuda-chip-colors__chip--pink">pink</span>
      </div>
    ),
    cssInline: `
      .nuda-chip-colors{display:flex;flex-wrap:wrap;gap:6px}
      .nuda-chip-colors__chip{display:inline-flex;align-items:center;padding:4px 10px;font:500 11px/1 ui-sans-serif,system-ui;border-radius:99px;border:1px solid}
      .nuda-chip-colors__chip--neutral{color:#fafafa;background:#111114;border-color:rgba(255,255,255,.08)}
      .nuda-chip-colors__chip--accent{color:#09090b;background:#e4ff54;border-color:#e4ff54}
      .nuda-chip-colors__chip--success{color:#86efac;background:rgba(34,197,94,.12);border-color:rgba(34,197,94,.3)}
      .nuda-chip-colors__chip--warn{color:#fde68a;background:rgba(234,179,8,.12);border-color:rgba(234,179,8,.3)}
      .nuda-chip-colors__chip--danger{color:#fca5a5;background:rgba(239,68,68,.12);border-color:rgba(239,68,68,.3)}
      .nuda-chip-colors__chip--info{color:#93c5fd;background:rgba(59,130,246,.12);border-color:rgba(59,130,246,.3)}
      .nuda-chip-colors__chip--violet{color:#c4b5fd;background:rgba(139,92,246,.12);border-color:rgba(139,92,246,.3)}
      .nuda-chip-colors__chip--pink{color:#f9a8d4;background:rgba(236,72,153,.12);border-color:rgba(236,72,153,.3)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-colors">
  <span class="nuda-chip-colors__chip nuda-chip-colors__chip--neutral">neutral</span>
  <span class="nuda-chip-colors__chip nuda-chip-colors__chip--accent">accent</span>
  <span class="nuda-chip-colors__chip nuda-chip-colors__chip--success">success</span>
  <span class="nuda-chip-colors__chip nuda-chip-colors__chip--warn">warn</span>
  <span class="nuda-chip-colors__chip nuda-chip-colors__chip--danger">danger</span>
  <span class="nuda-chip-colors__chip nuda-chip-colors__chip--info">info</span>
  <span class="nuda-chip-colors__chip nuda-chip-colors__chip--violet">violet</span>
  <span class="nuda-chip-colors__chip nuda-chip-colors__chip--pink">pink</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip Color Variants
   Eight semantic presets — pick by modifier class.
   Customize: per-variant color/background/border */

.nuda-chip-colors {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nuda-chip-colors__chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font: 500 11px/1 ui-sans-serif, system-ui, sans-serif;
  border-radius: 99px;
  border: 1px solid;
}

.nuda-chip-colors__chip--neutral {
  color: #fafafa;
  background: #111114;
  border-color: rgba(255, 255, 255, 0.08);
}

.nuda-chip-colors__chip--accent {
  color: #09090b;
  background: #e4ff54;
  border-color: #e4ff54;
}

.nuda-chip-colors__chip--success {
  color: #86efac;
  background: rgba(34, 197, 94, 0.12);
  border-color: rgba(34, 197, 94, 0.3);
}

.nuda-chip-colors__chip--warn {
  color: #fde68a;
  background: rgba(234, 179, 8, 0.12);
  border-color: rgba(234, 179, 8, 0.3);
}

.nuda-chip-colors__chip--danger {
  color: #fca5a5;
  background: rgba(239, 68, 68, 0.12);
  border-color: rgba(239, 68, 68, 0.3);
}

.nuda-chip-colors__chip--info {
  color: #93c5fd;
  background: rgba(59, 130, 246, 0.12);
  border-color: rgba(59, 130, 246, 0.3);
}

.nuda-chip-colors__chip--violet {
  color: #c4b5fd;
  background: rgba(139, 92, 246, 0.12);
  border-color: rgba(139, 92, 246, 0.3);
}

.nuda-chip-colors__chip--pink {
  color: #f9a8d4;
  background: rgba(236, 72, 153, 0.12);
  border-color: rgba(236, 72, 153, 0.3);
}`,
      },
    ],
  },

  /* ─────────────── 7. CHIP WITH ICON ─────────────── */
  {
    id: "chip-with-icon",
    name: "Chip With Icon",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-icon">
        <span className="nuda-chip-icon__chip">
          <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true"><path d="M7 1l1.8 4 4.2.6-3 3 .7 4.2L7 11l-3.7 1.8L4 8.6 1 5.6l4.2-.6L7 1z" fill="currentColor"/></svg>
          Featured
        </span>
        <span className="nuda-chip-icon__chip">
          <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true"><circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M7 4v3l2 1.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          12 min
        </span>
        <span className="nuda-chip-icon__chip">
          <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true"><path d="M2 7l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Verified
        </span>
        <span className="nuda-chip-icon__chip">
          <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true"><path d="M7 1.5l1.7 3.5 3.8.5-2.8 2.7.7 3.8L7 10.2 3.6 12l.7-3.8L1.5 5.5l3.8-.5z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/></svg>
          Premium
        </span>
      </div>
    ),
    cssInline: `
      .nuda-chip-icon{display:flex;flex-wrap:wrap;gap:6px}
      .nuda-chip-icon__chip{display:inline-flex;align-items:center;gap:6px;padding:5px 10px 5px 8px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:99px;transition:transform .15s,border-color .2s}
      .nuda-chip-icon__chip:hover{transform:translateY(-1px);border-color:rgba(255,255,255,.16)}
      .nuda-chip-icon__chip svg{color:#e4ff54;flex-shrink:0}
      @media(prefers-reduced-motion:reduce){.nuda-chip-icon__chip{transition:none}.nuda-chip-icon__chip:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-icon">
  <span class="nuda-chip-icon__chip">
    <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
      <path d="M7 1l1.8 4 4.2.6-3 3 .7 4.2L7 11l-3.7 1.8L4 8.6 1 5.6l4.2-.6L7 1z"
            fill="currentColor"/>
    </svg>
    Featured
  </span>
  <span class="nuda-chip-icon__chip">
    <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
      <circle cx="7" cy="7" r="5" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M7 4v3l2 1.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>
    12 min
  </span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip With Icon
   Leading SVG icon + label.
   Customize: --chip-icon-color */

.nuda-chip-icon {
  --chip-icon-color: #e4ff54;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nuda-chip-icon__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px 5px 8px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  transition: transform 0.15s, border-color 0.2s;
}

.nuda-chip-icon__chip:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.16);
}

.nuda-chip-icon__chip svg {
  color: var(--chip-icon-color);
  flex-shrink: 0;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-icon__chip { transition: none; }
  .nuda-chip-icon__chip:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. CHIP DRAG REORDER ─────────────── */
  {
    id: "chip-drag-reorder",
    name: "Chip Drag Reorder",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-drag">
        <span className="nuda-chip-drag__chip">
          <span className="nuda-chip-drag__handle" aria-hidden="true">⋮⋮</span>
          alpha
        </span>
        <span className="nuda-chip-drag__chip nuda-chip-drag__chip--ghost">
          <span className="nuda-chip-drag__handle" aria-hidden="true">⋮⋮</span>
          beta
        </span>
        <span className="nuda-chip-drag__chip nuda-chip-drag__chip--dragging">
          <span className="nuda-chip-drag__handle" aria-hidden="true">⋮⋮</span>
          gamma
        </span>
        <span className="nuda-chip-drag__chip">
          <span className="nuda-chip-drag__handle" aria-hidden="true">⋮⋮</span>
          delta
        </span>
      </div>
    ),
    cssInline: `
      .nuda-chip-drag{display:flex;flex-wrap:wrap;gap:6px}
      .nuda-chip-drag__chip{display:inline-flex;align-items:center;gap:6px;padding:5px 12px 5px 6px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:99px;cursor:grab;transition:transform .15s,box-shadow .2s,border-color .2s}
      .nuda-chip-drag__chip:hover{border-color:rgba(255,255,255,.16)}
      .nuda-chip-drag__chip:active{cursor:grabbing}
      .nuda-chip-drag__chip--ghost{opacity:.35;border-style:dashed}
      .nuda-chip-drag__chip--dragging{transform:translateY(-2px) rotate(-2deg);box-shadow:0 8px 16px rgba(0,0,0,.4);border-color:#e4ff54}
      .nuda-chip-drag__handle{display:inline-grid;place-items:center;width:18px;height:18px;font-size:10px;letter-spacing:-2px;color:#63636e;border-radius:99px}
      .nuda-chip-drag__chip:hover .nuda-chip-drag__handle{color:#a0a0a8}
      @media(prefers-reduced-motion:reduce){.nuda-chip-drag__chip{transition:none}.nuda-chip-drag__chip--dragging{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-drag">
  <span class="nuda-chip-drag__chip" draggable="true">
    <span class="nuda-chip-drag__handle" aria-hidden="true">⋮⋮</span>
    alpha
  </span>
  <span class="nuda-chip-drag__chip" draggable="true">
    <span class="nuda-chip-drag__handle" aria-hidden="true">⋮⋮</span>
    beta
  </span>
  <span class="nuda-chip-drag__chip nuda-chip-drag__chip--dragging" draggable="true">
    <span class="nuda-chip-drag__handle" aria-hidden="true">⋮⋮</span>
    gamma
  </span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip Drag Reorder
   Visual states for grab/drag — wire up with HTML5 DnD or library.
   Customize: --drag-accent */

.nuda-chip-drag {
  --drag-accent: #e4ff54;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nuda-chip-drag__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px 5px 6px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  cursor: grab;
  transition: transform 0.15s, box-shadow 0.2s, border-color 0.2s;
}

.nuda-chip-drag__chip:hover {
  border-color: rgba(255, 255, 255, 0.16);
}

.nuda-chip-drag__chip:active {
  cursor: grabbing;
}

.nuda-chip-drag__chip--ghost {
  opacity: 0.35;
  border-style: dashed;
}

.nuda-chip-drag__chip--dragging {
  transform: translateY(-2px) rotate(-2deg);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  border-color: var(--drag-accent);
}

.nuda-chip-drag__handle {
  display: inline-grid;
  place-items: center;
  width: 18px;
  height: 18px;
  font-size: 10px;
  letter-spacing: -2px;
  color: #63636e;
}

.nuda-chip-drag__chip:hover .nuda-chip-drag__handle {
  color: #a0a0a8;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-drag__chip { transition: none; }
  .nuda-chip-drag__chip--dragging { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 9. SUGGESTED TAGS STRIP ─────────────── */
  {
    id: "suggested-tags-strip",
    name: "Suggested Tags Strip",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-suggest">
        <span className="nuda-chip-suggest__label">Suggested</span>
        <div className="nuda-chip-suggest__row">
          <button type="button" className="nuda-chip-suggest__chip">+ marketing</button>
          <button type="button" className="nuda-chip-suggest__chip">+ launch</button>
          <button type="button" className="nuda-chip-suggest__chip">+ q4</button>
          <button type="button" className="nuda-chip-suggest__chip">+ brand</button>
          <button type="button" className="nuda-chip-suggest__chip">+ growth</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-chip-suggest{width:100%;font:500 12px/1 ui-sans-serif,system-ui}
      .nuda-chip-suggest__label{display:block;margin-bottom:6px;font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#63636e}
      .nuda-chip-suggest__row{display:flex;flex-wrap:wrap;gap:6px}
      .nuda-chip-suggest__chip{padding:4px 10px;color:#a0a0a8;background:transparent;border:1px dashed rgba(255,255,255,.16);border-radius:99px;cursor:pointer;transition:color .2s,border-color .2s,background .2s,transform .15s}
      .nuda-chip-suggest__chip:hover{color:#e4ff54;border-color:#e4ff54;border-style:solid;background:rgba(228,255,84,.06);transform:translateY(-1px)}
      @media(prefers-reduced-motion:reduce){.nuda-chip-suggest__chip{transition:none}.nuda-chip-suggest__chip:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-suggest">
  <span class="nuda-chip-suggest__label">Suggested</span>
  <div class="nuda-chip-suggest__row">
    <button type="button" class="nuda-chip-suggest__chip">+ marketing</button>
    <button type="button" class="nuda-chip-suggest__chip">+ launch</button>
    <button type="button" class="nuda-chip-suggest__chip">+ q4</button>
    <button type="button" class="nuda-chip-suggest__chip">+ brand</button>
    <button type="button" class="nuda-chip-suggest__chip">+ growth</button>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Suggested Tags Strip
   Dashed-outline chips that solidify on hover.
   Customize: --suggest-accent */

.nuda-chip-suggest {
  --suggest-accent: #e4ff54;
  width: 100%;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
}

.nuda-chip-suggest__label {
  display: block;
  margin-bottom: 6px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #63636e;
}

.nuda-chip-suggest__row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nuda-chip-suggest__chip {
  padding: 4px 10px;
  color: #a0a0a8;
  background: transparent;
  border: 1px dashed rgba(255, 255, 255, 0.16);
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.15s;
}

.nuda-chip-suggest__chip:hover {
  color: var(--suggest-accent);
  border-color: var(--suggest-accent);
  border-style: solid;
  background: rgba(228, 255, 84, 0.06);
  transform: translateY(-1px);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-suggest__chip { transition: none; }
  .nuda-chip-suggest__chip:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. CHIP OVERFLOW MORE ─────────────── */
  {
    id: "chip-overflow-more",
    name: "Chip Overflow More",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-over">
        <span className="nuda-chip-over__chip">design</span>
        <span className="nuda-chip-over__chip">code</span>
        <span className="nuda-chip-over__chip">tools</span>
        <button type="button" className="nuda-chip-over__more">+3 more</button>
      </div>
    ),
    cssInline: `
      .nuda-chip-over{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
      .nuda-chip-over__chip{padding:4px 10px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:99px}
      .nuda-chip-over__more{padding:4px 10px;font:600 11px/1 ui-sans-serif,system-ui;color:#e4ff54;background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.25);border-radius:99px;cursor:pointer;transition:background .2s,transform .15s}
      .nuda-chip-over__more:hover{background:rgba(228,255,84,.16);transform:translateY(-1px)}
      @media(prefers-reduced-motion:reduce){.nuda-chip-over__more{transition:none}.nuda-chip-over__more:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-over">
  <span class="nuda-chip-over__chip">design</span>
  <span class="nuda-chip-over__chip">code</span>
  <span class="nuda-chip-over__chip">tools</span>
  <button type="button" class="nuda-chip-over__more">+3 more</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip Overflow More
   Collapses the tail of a long chip list behind "+N more".
   Customize: --over-accent */

.nuda-chip-over {
  --over-accent: #e4ff54;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.nuda-chip-over__chip {
  padding: 4px 10px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
}

.nuda-chip-over__more {
  padding: 4px 10px;
  font: 600 11px/1 ui-sans-serif, system-ui, sans-serif;
  color: var(--over-accent);
  background: rgba(228, 255, 84, 0.08);
  border: 1px solid rgba(228, 255, 84, 0.25);
  border-radius: 99px;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
}

.nuda-chip-over__more:hover {
  background: rgba(228, 255, 84, 0.16);
  transform: translateY(-1px);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-over__more { transition: none; }
  .nuda-chip-over__more:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 11. MULTI-SELECT COMBOBOX ─────────────── */
  {
    id: "multi-select-combobox",
    name: "Multi-select Combobox",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-combo">
        <div className="nuda-chip-combo__field">
          <span className="nuda-chip-combo__chip">UX<button aria-label="Remove" className="nuda-chip-combo__x">×</button></span>
          <span className="nuda-chip-combo__chip">UI<button aria-label="Remove" className="nuda-chip-combo__x">×</button></span>
          <input className="nuda-chip-combo__input" placeholder="Search…" defaultValue="" />
          <svg viewBox="0 0 12 12" width="10" height="10" className="nuda-chip-combo__caret" aria-hidden="true"><path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </div>
        <ul className="nuda-chip-combo__list" role="listbox">
          <li className="nuda-chip-combo__opt"><span className="nuda-chip-combo__check nuda-chip-combo__check--on" aria-hidden="true">✓</span>UX</li>
          <li className="nuda-chip-combo__opt"><span className="nuda-chip-combo__check nuda-chip-combo__check--on" aria-hidden="true">✓</span>UI</li>
          <li className="nuda-chip-combo__opt"><span className="nuda-chip-combo__check" aria-hidden="true" />Research</li>
          <li className="nuda-chip-combo__opt"><span className="nuda-chip-combo__check" aria-hidden="true" />Prototyping</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-chip-combo{position:relative;width:100%;max-width:280px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa}
      .nuda-chip-combo__field{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:8px;background:#0c0c10;border:1px solid rgba(255,255,255,.1);border-radius:10px}
      .nuda-chip-combo__chip{display:inline-flex;align-items:center;gap:4px;padding:3px 4px 3px 10px;color:#09090b;background:#e4ff54;border-radius:99px}
      .nuda-chip-combo__x{display:inline-grid;place-items:center;width:16px;height:16px;font-size:12px;line-height:1;color:#09090b;background:transparent;border:0;border-radius:99px;cursor:pointer}
      .nuda-chip-combo__x:hover{background:rgba(9,9,11,.15)}
      .nuda-chip-combo__input{flex:1;min-width:40px;padding:3px;color:#fafafa;background:transparent;border:0;outline:0}
      .nuda-chip-combo__caret{color:#63636e;margin-left:auto}
      .nuda-chip-combo__list{margin:4px 0 0;padding:4px;list-style:none;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:10px;box-shadow:0 12px 24px rgba(0,0,0,.4)}
      .nuda-chip-combo__opt{display:flex;align-items:center;gap:8px;padding:6px 8px;color:#a0a0a8;border-radius:6px;cursor:pointer}
      .nuda-chip-combo__opt:hover{color:#fafafa;background:#111114}
      .nuda-chip-combo__check{display:inline-grid;place-items:center;width:14px;height:14px;font-size:10px;color:#09090b;background:transparent;border:1px solid rgba(255,255,255,.16);border-radius:4px}
      .nuda-chip-combo__check--on{background:#e4ff54;border-color:#e4ff54}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-combo">
  <div class="nuda-chip-combo__field">
    <span class="nuda-chip-combo__chip">UX
      <button class="nuda-chip-combo__x" aria-label="Remove UX">×</button>
    </span>
    <input class="nuda-chip-combo__input" placeholder="Search…" />
  </div>
  <ul class="nuda-chip-combo__list" role="listbox">
    <li class="nuda-chip-combo__opt">
      <span class="nuda-chip-combo__check nuda-chip-combo__check--on">✓</span>
      UX
    </li>
    <li class="nuda-chip-combo__opt">
      <span class="nuda-chip-combo__check"></span>
      Research
    </li>
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Multi-select Combobox
   Input + dropdown with selected items shown as chips.
   Customize: --combo-accent */

.nuda-chip-combo {
  --combo-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 280px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}

.nuda-chip-combo__field {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 8px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}

.nuda-chip-combo__chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 4px 3px 10px;
  color: #09090b;
  background: var(--combo-accent);
  border-radius: 99px;
}

.nuda-chip-combo__x {
  display: inline-grid;
  place-items: center;
  width: 16px;
  height: 16px;
  font-size: 12px;
  color: #09090b;
  background: transparent;
  border: 0;
  border-radius: 99px;
  cursor: pointer;
}

.nuda-chip-combo__x:hover { background: rgba(9, 9, 11, 0.15); }

.nuda-chip-combo__input {
  flex: 1;
  min-width: 40px;
  padding: 3px;
  color: #fafafa;
  background: transparent;
  border: 0;
  outline: 0;
}

.nuda-chip-combo__list {
  margin: 4px 0 0;
  padding: 4px;
  list-style: none;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}

.nuda-chip-combo__opt {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  color: #a0a0a8;
  border-radius: 6px;
  cursor: pointer;
}

.nuda-chip-combo__opt:hover { color: #fafafa; background: #111114; }

.nuda-chip-combo__check {
  display: inline-grid;
  place-items: center;
  width: 14px;
  height: 14px;
  font-size: 10px;
  color: #09090b;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 4px;
}

.nuda-chip-combo__check--on {
  background: var(--combo-accent);
  border-color: var(--combo-accent);
}`,
      },
    ],
  },

  /* ─────────────── 12. REMOVABLE FILTER CHIPS BAR ─────────────── */
  {
    id: "removable-filter-chips-bar",
    name: "Removable Filter Chips Bar",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-filterbar">
        <span className="nuda-chip-filterbar__label">Filters:</span>
        <span className="nuda-chip-filterbar__chip">Status: Active<button aria-label="Remove" className="nuda-chip-filterbar__x">×</button></span>
        <span className="nuda-chip-filterbar__chip">Plan: Pro<button aria-label="Remove" className="nuda-chip-filterbar__x">×</button></span>
        <span className="nuda-chip-filterbar__chip">Region: EU<button aria-label="Remove" className="nuda-chip-filterbar__x">×</button></span>
        <button type="button" className="nuda-chip-filterbar__clear">Clear all</button>
      </div>
    ),
    cssInline: `
      .nuda-chip-filterbar{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:8px 10px;background:#0c0c10;border:1px solid rgba(255,255,255,.06);border-radius:10px;font:500 12px/1 ui-sans-serif,system-ui}
      .nuda-chip-filterbar__label{font-size:11px;color:#63636e;margin-right:2px}
      .nuda-chip-filterbar__chip{display:inline-flex;align-items:center;gap:4px;padding:4px 4px 4px 10px;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:99px}
      .nuda-chip-filterbar__x{display:inline-grid;place-items:center;width:16px;height:16px;font-size:13px;line-height:1;color:#a0a0a8;background:transparent;border:0;border-radius:99px;cursor:pointer;transition:background .15s,color .15s}
      .nuda-chip-filterbar__x:hover{color:#fca5a5;background:rgba(239,68,68,.12)}
      .nuda-chip-filterbar__clear{margin-left:auto;padding:4px 10px;font:600 11px/1 ui-sans-serif,system-ui;color:#a0a0a8;background:transparent;border:0;border-radius:99px;cursor:pointer;transition:color .2s,background .2s}
      .nuda-chip-filterbar__clear:hover{color:#fafafa;background:rgba(255,255,255,.06)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-filterbar">
  <span class="nuda-chip-filterbar__label">Filters:</span>
  <span class="nuda-chip-filterbar__chip">
    Status: Active
    <button class="nuda-chip-filterbar__x" aria-label="Remove status filter">×</button>
  </span>
  <span class="nuda-chip-filterbar__chip">
    Plan: Pro
    <button class="nuda-chip-filterbar__x" aria-label="Remove plan filter">×</button>
  </span>
  <span class="nuda-chip-filterbar__chip">
    Region: EU
    <button class="nuda-chip-filterbar__x" aria-label="Remove region filter">×</button>
  </span>
  <button type="button" class="nuda-chip-filterbar__clear">Clear all</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Removable Filter Chips Bar
   Shows applied filters with one-click removal + clear all.
   Customize: --bar-surface, --bar-danger */

.nuda-chip-filterbar {
  --bar-danger: #fca5a5;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 8px 10px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
}

.nuda-chip-filterbar__label {
  font-size: 11px;
  color: #63636e;
  margin-right: 2px;
}

.nuda-chip-filterbar__chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 4px 4px 10px;
  color: #fafafa;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
}

.nuda-chip-filterbar__x {
  display: inline-grid;
  place-items: center;
  width: 16px;
  height: 16px;
  font-size: 13px;
  color: #a0a0a8;
  background: transparent;
  border: 0;
  border-radius: 99px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.nuda-chip-filterbar__x:hover {
  color: var(--bar-danger);
  background: rgba(239, 68, 68, 0.12);
}

.nuda-chip-filterbar__clear {
  margin-left: auto;
  padding: 4px 10px;
  font: 600 11px/1 ui-sans-serif, system-ui, sans-serif;
  color: #a0a0a8;
  background: transparent;
  border: 0;
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s;
}

.nuda-chip-filterbar__clear:hover {
  color: #fafafa;
  background: rgba(255, 255, 255, 0.06);
}`,
      },
    ],
  },

  /* ─────────────── 13. CHIP WITH AVATAR ─────────────── */
  {
    id: "chip-with-avatar",
    name: "Chip With Avatar",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-avatar">
        <span className="nuda-chip-avatar__chip">
          <span className="nuda-chip-avatar__img" style={{ background: "linear-gradient(135deg,#e4ff54,#86efac)" }}>NU</span>
          @nuda
          <button aria-label="Remove" className="nuda-chip-avatar__x">×</button>
        </span>
        <span className="nuda-chip-avatar__chip">
          <span className="nuda-chip-avatar__img" style={{ background: "linear-gradient(135deg,#c4b5fd,#f9a8d4)" }}>AL</span>
          @ana.lee
          <button aria-label="Remove" className="nuda-chip-avatar__x">×</button>
        </span>
        <span className="nuda-chip-avatar__chip">
          <span className="nuda-chip-avatar__img" style={{ background: "linear-gradient(135deg,#93c5fd,#86efac)" }}>MK</span>
          @marco.k
          <button aria-label="Remove" className="nuda-chip-avatar__x">×</button>
        </span>
      </div>
    ),
    cssInline: `
      .nuda-chip-avatar{display:flex;flex-wrap:wrap;gap:6px}
      .nuda-chip-avatar__chip{display:inline-flex;align-items:center;gap:6px;padding:3px 6px 3px 3px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:99px;transition:border-color .2s}
      .nuda-chip-avatar__chip:hover{border-color:rgba(255,255,255,.16)}
      .nuda-chip-avatar__img{display:inline-grid;place-items:center;width:20px;height:20px;font:700 9px/1 ui-sans-serif,system-ui;color:#09090b;border-radius:99px;letter-spacing:.02em}
      .nuda-chip-avatar__x{display:inline-grid;place-items:center;width:16px;height:16px;font-size:12px;line-height:1;color:#a0a0a8;background:transparent;border:0;border-radius:99px;cursor:pointer;transition:background .15s,color .15s}
      .nuda-chip-avatar__x:hover{color:#fafafa;background:rgba(255,255,255,.08)}
      @media(prefers-reduced-motion:reduce){.nuda-chip-avatar__chip{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-avatar">
  <span class="nuda-chip-avatar__chip">
    <span class="nuda-chip-avatar__img"
          style="background:linear-gradient(135deg,#e4ff54,#86efac)">NU</span>
    @nuda
    <button class="nuda-chip-avatar__x" aria-label="Remove">×</button>
  </span>
  <span class="nuda-chip-avatar__chip">
    <span class="nuda-chip-avatar__img"
          style="background:linear-gradient(135deg,#c4b5fd,#f9a8d4)">AL</span>
    @ana.lee
    <button class="nuda-chip-avatar__x" aria-label="Remove">×</button>
  </span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip With Avatar
   Mention-style chip with a leading avatar circle.
   Customize: avatar gradient inline or per-variant */

.nuda-chip-avatar {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nuda-chip-avatar__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 6px 3px 3px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  transition: border-color 0.2s;
}

.nuda-chip-avatar__chip:hover {
  border-color: rgba(255, 255, 255, 0.16);
}

.nuda-chip-avatar__img {
  display: inline-grid;
  place-items: center;
  width: 20px;
  height: 20px;
  font: 700 9px/1 ui-sans-serif, system-ui, sans-serif;
  color: #09090b;
  border-radius: 99px;
  letter-spacing: 0.02em;
}

.nuda-chip-avatar__x {
  display: inline-grid;
  place-items: center;
  width: 16px;
  height: 16px;
  font-size: 12px;
  color: #a0a0a8;
  background: transparent;
  border: 0;
  border-radius: 99px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.nuda-chip-avatar__x:hover {
  color: #fafafa;
  background: rgba(255, 255, 255, 0.08);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-avatar__chip { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 14. ANIMATED CHIP POP-IN ─────────────── */
  {
    id: "animated-chip-pop-in",
    name: "Animated Chip Pop-in",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-pop">
        <span className="nuda-chip-pop__chip" style={{ animationDelay: "0s" }}>alpha</span>
        <span className="nuda-chip-pop__chip" style={{ animationDelay: ".15s" }}>beta</span>
        <span className="nuda-chip-pop__chip" style={{ animationDelay: ".3s" }}>gamma</span>
        <span className="nuda-chip-pop__chip" style={{ animationDelay: ".45s" }}>delta</span>
        <span className="nuda-chip-pop__chip" style={{ animationDelay: ".6s" }}>epsilon</span>
      </div>
    ),
    cssInline: `
      .nuda-chip-pop{display:flex;flex-wrap:wrap;gap:6px}
      .nuda-chip-pop__chip{display:inline-flex;align-items:center;padding:4px 10px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:99px;opacity:0;transform:scale(.4);animation:_chippop 2.4s cubic-bezier(.34,1.56,.64,1) infinite both}
      @keyframes _chippop{0%{opacity:0;transform:scale(.4) translateY(8px)}25%,75%{opacity:1;transform:scale(1) translateY(0)}100%{opacity:0;transform:scale(.4) translateY(8px)}}
      @media(prefers-reduced-motion:reduce){.nuda-chip-pop__chip{animation:none;opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-pop">
  <span class="nuda-chip-pop__chip" style="animation-delay:0s">alpha</span>
  <span class="nuda-chip-pop__chip" style="animation-delay:.15s">beta</span>
  <span class="nuda-chip-pop__chip" style="animation-delay:.3s">gamma</span>
  <span class="nuda-chip-pop__chip" style="animation-delay:.45s">delta</span>
  <span class="nuda-chip-pop__chip" style="animation-delay:.6s">epsilon</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Animated Chip Pop-in
   Springy scale/fade-in for newly added chips.
   Customize: --pop-duration, --pop-easing */

.nuda-chip-pop {
  --pop-duration: 0.35s;
  --pop-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nuda-chip-pop__chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  opacity: 0;
  transform: scale(0.4);
  animation: nuda-chip-pop var(--pop-duration) var(--pop-easing) forwards;
}

@keyframes nuda-chip-pop {
  0%   { opacity: 0; transform: scale(0.4) translateY(8px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-pop__chip {
    animation: none;
    opacity: 1;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 15. CHIP VALIDATION ERROR ─────────────── */
  {
    id: "chip-validation-error",
    name: "Chip Validation Error",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-error">
        <div className="nuda-chip-error__field">
          <span className="nuda-chip-error__chip">valid@email.com</span>
          <span className="nuda-chip-error__chip nuda-chip-error__chip--bad">not-an-email
            <button aria-label="Remove" className="nuda-chip-error__x">×</button>
          </span>
          <input className="nuda-chip-error__input" defaultValue="bad@@" readOnly />
        </div>
        <div className="nuda-chip-error__msg">
          <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true"><circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" strokeWidth="1.4"/><path d="M6 3.5v3M6 8.4v.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
          Invalid email format
        </div>
      </div>
    ),
    cssInline: `
      .nuda-chip-error{width:100%;max-width:300px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa}
      .nuda-chip-error__field{display:flex;flex-wrap:wrap;align-items:center;gap:6px;padding:8px;background:#0c0c10;border:1px solid #fca5a5;border-radius:10px;animation:_chipshake .4s ease}
      .nuda-chip-error__chip{padding:4px 10px;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:99px}
      .nuda-chip-error__chip--bad{display:inline-flex;align-items:center;gap:4px;padding-right:4px;color:#fca5a5;background:rgba(239,68,68,.1);border-color:rgba(239,68,68,.4)}
      .nuda-chip-error__x{display:inline-grid;place-items:center;width:16px;height:16px;font-size:12px;color:#fca5a5;background:transparent;border:0;border-radius:99px;cursor:pointer}
      .nuda-chip-error__x:hover{background:rgba(239,68,68,.15)}
      .nuda-chip-error__input{flex:1;min-width:60px;padding:4px;color:#fca5a5;background:transparent;border:0;outline:0}
      .nuda-chip-error__msg{display:flex;align-items:center;gap:6px;margin-top:6px;font-size:11px;color:#fca5a5}
      @keyframes _chipshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-3px)}50%{transform:translateX(3px)}75%{transform:translateX(-2px)}}
      @media(prefers-reduced-motion:reduce){.nuda-chip-error__field{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-error">
  <div class="nuda-chip-error__field">
    <span class="nuda-chip-error__chip">valid@email.com</span>
    <span class="nuda-chip-error__chip nuda-chip-error__chip--bad">
      not-an-email
      <button class="nuda-chip-error__x" aria-label="Remove">×</button>
    </span>
    <input class="nuda-chip-error__input" value="bad@@"
           aria-invalid="true" aria-describedby="chip-err" />
  </div>
  <div class="nuda-chip-error__msg" id="chip-err" role="alert">
    <svg viewBox="0 0 12 12" width="11" height="11" aria-hidden="true">
      <circle cx="6" cy="6" r="5" fill="none" stroke="currentColor" stroke-width="1.4"/>
      <path d="M6 3.5v3M6 8.4v.1" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>
    Invalid email format
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip Validation Error
   Red border + shake when input is invalid.
   Customize: --err-color */

.nuda-chip-error {
  --err-color: #fca5a5;
  width: 100%;
  max-width: 300px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}

.nuda-chip-error__field {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  padding: 8px;
  background: #0c0c10;
  border: 1px solid var(--err-color);
  border-radius: 10px;
  animation: nuda-chip-shake 0.4s ease;
}

.nuda-chip-error__chip {
  padding: 4px 10px;
  color: #fafafa;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
}

.nuda-chip-error__chip--bad {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding-right: 4px;
  color: var(--err-color);
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.4);
}

.nuda-chip-error__x {
  display: inline-grid;
  place-items: center;
  width: 16px;
  height: 16px;
  font-size: 12px;
  color: var(--err-color);
  background: transparent;
  border: 0;
  border-radius: 99px;
  cursor: pointer;
}

.nuda-chip-error__input {
  flex: 1;
  min-width: 60px;
  padding: 4px;
  color: var(--err-color);
  background: transparent;
  border: 0;
  outline: 0;
}

.nuda-chip-error__msg {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 6px;
  font-size: 11px;
  color: var(--err-color);
}

@keyframes nuda-chip-shake {
  0%, 100% { transform: translateX(0); }
  25%      { transform: translateX(-3px); }
  50%      { transform: translateX(3px); }
  75%      { transform: translateX(-2px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-error__field { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 16. CHIP GROUP TOGGLE ─────────────── */
  {
    id: "chip-group-toggle",
    name: "Chip Group Toggle",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-toggle">
        <div className="nuda-chip-toggle__head">
          <span className="nuda-chip-toggle__title">Categories</span>
          <button type="button" className="nuda-chip-toggle__action">Select all</button>
          <button type="button" className="nuda-chip-toggle__action">Clear</button>
        </div>
        <div className="nuda-chip-toggle__row">
          <button type="button" className="nuda-chip-toggle__chip nuda-chip-toggle__chip--on" aria-pressed="true">Design</button>
          <button type="button" className="nuda-chip-toggle__chip nuda-chip-toggle__chip--on" aria-pressed="true">Engineering</button>
          <button type="button" className="nuda-chip-toggle__chip" aria-pressed="false">Marketing</button>
          <button type="button" className="nuda-chip-toggle__chip nuda-chip-toggle__chip--on" aria-pressed="true">Sales</button>
          <button type="button" className="nuda-chip-toggle__chip" aria-pressed="false">Support</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-chip-toggle{width:100%;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa}
      .nuda-chip-toggle__head{display:flex;align-items:center;gap:8px;margin-bottom:8px}
      .nuda-chip-toggle__title{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#63636e;margin-right:auto}
      .nuda-chip-toggle__action{padding:3px 8px;font:600 10px/1 ui-sans-serif,system-ui;color:#a0a0a8;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:99px;cursor:pointer;transition:color .2s,border-color .2s}
      .nuda-chip-toggle__action:hover{color:#e4ff54;border-color:rgba(228,255,84,.4)}
      .nuda-chip-toggle__row{display:flex;flex-wrap:wrap;gap:6px}
      .nuda-chip-toggle__chip{padding:5px 12px;color:#a0a0a8;background:transparent;border:1px solid rgba(255,255,255,.1);border-radius:99px;cursor:pointer;transition:color .2s,background .2s,border-color .2s}
      .nuda-chip-toggle__chip:hover{color:#fafafa;border-color:rgba(255,255,255,.2)}
      .nuda-chip-toggle__chip--on{color:#09090b;background:#e4ff54;border-color:#e4ff54}
      .nuda-chip-toggle__chip--on:hover{color:#09090b}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-toggle">
  <div class="nuda-chip-toggle__head">
    <span class="nuda-chip-toggle__title">Categories</span>
    <button type="button" class="nuda-chip-toggle__action" data-action="all">Select all</button>
    <button type="button" class="nuda-chip-toggle__action" data-action="clear">Clear</button>
  </div>
  <div class="nuda-chip-toggle__row">
    <button type="button" class="nuda-chip-toggle__chip nuda-chip-toggle__chip--on" aria-pressed="true">Design</button>
    <button type="button" class="nuda-chip-toggle__chip" aria-pressed="false">Marketing</button>
    <button type="button" class="nuda-chip-toggle__chip" aria-pressed="false">Support</button>
  </div>
</div>

<script>
  const chips = document.querySelectorAll(".nuda-chip-toggle__chip");
  document.querySelector('[data-action="all"]').onclick = () =>
    chips.forEach((c) => { c.classList.add("nuda-chip-toggle__chip--on"); c.setAttribute("aria-pressed", "true"); });
  document.querySelector('[data-action="clear"]').onclick = () =>
    chips.forEach((c) => { c.classList.remove("nuda-chip-toggle__chip--on"); c.setAttribute("aria-pressed", "false"); });
</script>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip Group Toggle
   Multi-select chips with "select all" / "clear" controls.
   Customize: --toggle-on-bg, --toggle-on-fg */

.nuda-chip-toggle {
  --toggle-on-bg: #e4ff54;
  --toggle-on-fg: #09090b;
  width: 100%;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}

.nuda-chip-toggle__head {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.nuda-chip-toggle__title {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #63636e;
  margin-right: auto;
}

.nuda-chip-toggle__action {
  padding: 3px 8px;
  font: 600 10px/1 ui-sans-serif, system-ui, sans-serif;
  color: #a0a0a8;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s;
}

.nuda-chip-toggle__action:hover {
  color: var(--toggle-on-bg);
  border-color: rgba(228, 255, 84, 0.4);
}

.nuda-chip-toggle__row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nuda-chip-toggle__chip {
  padding: 5px 12px;
  color: #a0a0a8;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}

.nuda-chip-toggle__chip:hover {
  color: #fafafa;
  border-color: rgba(255, 255, 255, 0.2);
}

.nuda-chip-toggle__chip--on,
.nuda-chip-toggle__chip--on:hover {
  color: var(--toggle-on-fg);
  background: var(--toggle-on-bg);
  border-color: var(--toggle-on-bg);
}`,
      },
    ],
  },

  /* ─────────────── 17. SAVED FILTERS PILLS ─────────────── */
  {
    id: "saved-filters-pills",
    name: "Saved Filters Pills",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-saved">
        <span className="nuda-chip-saved__label">Saved</span>
        <button type="button" className="nuda-chip-saved__pill nuda-chip-saved__pill--active">
          <span className="nuda-chip-saved__dot" />
          High value · EU
        </button>
        <button type="button" className="nuda-chip-saved__pill">
          <span className="nuda-chip-saved__dot" />
          Churn risk
        </button>
        <button type="button" className="nuda-chip-saved__pill">
          <span className="nuda-chip-saved__dot" />
          New this week
        </button>
        <button type="button" className="nuda-chip-saved__pill nuda-chip-saved__pill--add">+ Save view</button>
      </div>
    ),
    cssInline: `
      .nuda-chip-saved{display:flex;flex-wrap:wrap;align-items:center;gap:6px;font:500 12px/1 ui-sans-serif,system-ui}
      .nuda-chip-saved__label{font-size:10px;text-transform:uppercase;letter-spacing:.08em;color:#63636e;margin-right:2px}
      .nuda-chip-saved__pill{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;color:#a0a0a8;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:99px;cursor:pointer;transition:color .2s,border-color .2s,background .2s,transform .15s}
      .nuda-chip-saved__pill:hover{color:#fafafa;border-color:rgba(255,255,255,.18);transform:translateY(-1px)}
      .nuda-chip-saved__pill--active{color:#fafafa;background:#111114;border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.08)}
      .nuda-chip-saved__pill--add{color:#63636e;border-style:dashed}
      .nuda-chip-saved__pill--add:hover{color:#e4ff54;border-color:rgba(228,255,84,.4)}
      .nuda-chip-saved__dot{width:6px;height:6px;border-radius:99px;background:#e4ff54;box-shadow:0 0 6px rgba(228,255,84,.6)}
      .nuda-chip-saved__pill:not(.nuda-chip-saved__pill--active) .nuda-chip-saved__dot{background:#63636e;box-shadow:none}
      @media(prefers-reduced-motion:reduce){.nuda-chip-saved__pill{transition:none}.nuda-chip-saved__pill:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-saved">
  <span class="nuda-chip-saved__label">Saved</span>
  <button type="button" class="nuda-chip-saved__pill nuda-chip-saved__pill--active">
    <span class="nuda-chip-saved__dot"></span>
    High value · EU
  </button>
  <button type="button" class="nuda-chip-saved__pill">
    <span class="nuda-chip-saved__dot"></span>
    Churn risk
  </button>
  <button type="button" class="nuda-chip-saved__pill">
    <span class="nuda-chip-saved__dot"></span>
    New this week
  </button>
  <button type="button" class="nuda-chip-saved__pill nuda-chip-saved__pill--add">
    + Save view
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Saved Filters Pills
   Clickable saved filter combos, plus a dashed "save view" pill.
   Customize: --saved-accent */

.nuda-chip-saved {
  --saved-accent: #e4ff54;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
}

.nuda-chip-saved__label {
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #63636e;
  margin-right: 2px;
}

.nuda-chip-saved__pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  color: #a0a0a8;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background 0.2s, transform 0.15s;
}

.nuda-chip-saved__pill:hover {
  color: #fafafa;
  border-color: rgba(255, 255, 255, 0.18);
  transform: translateY(-1px);
}

.nuda-chip-saved__pill--active {
  color: #fafafa;
  background: #111114;
  border-color: var(--saved-accent);
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.08);
}

.nuda-chip-saved__pill--add {
  color: #63636e;
  border-style: dashed;
}

.nuda-chip-saved__pill--add:hover {
  color: var(--saved-accent);
  border-color: rgba(228, 255, 84, 0.4);
}

.nuda-chip-saved__dot {
  width: 6px;
  height: 6px;
  border-radius: 99px;
  background: var(--saved-accent);
  box-shadow: 0 0 6px rgba(228, 255, 84, 0.6);
}

.nuda-chip-saved__pill:not(.nuda-chip-saved__pill--active) .nuda-chip-saved__dot {
  background: #63636e;
  box-shadow: none;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-saved__pill { transition: none; }
  .nuda-chip-saved__pill:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 18. CHIP COUNTER BADGE ─────────────── */
  {
    id: "chip-counter-badge",
    name: "Chip Counter Badge",
    category: "Tags & Chips Input",
    preview: (
      <div className="nuda-chip-count">
        <button type="button" className="nuda-chip-count__chip">
          Inbox
          <span className="nuda-chip-count__badge">12</span>
        </button>
        <button type="button" className="nuda-chip-count__chip">
          Mentions
          <span className="nuda-chip-count__badge nuda-chip-count__badge--accent">3</span>
        </button>
        <button type="button" className="nuda-chip-count__chip">
          Drafts
          <span className="nuda-chip-count__badge">0</span>
        </button>
        <button type="button" className="nuda-chip-count__chip">
          Archive
          <span className="nuda-chip-count__badge">99+</span>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-chip-count{display:flex;flex-wrap:wrap;gap:6px}
      .nuda-chip-count__chip{display:inline-flex;align-items:center;gap:6px;padding:4px 4px 4px 12px;font:500 12px/1 ui-sans-serif,system-ui;color:#fafafa;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:99px;cursor:pointer;transition:transform .15s,border-color .2s}
      .nuda-chip-count__chip:hover{transform:translateY(-1px);border-color:rgba(255,255,255,.18)}
      .nuda-chip-count__badge{display:inline-grid;place-items:center;min-width:20px;height:18px;padding:0 6px;font:700 10px/1 ui-sans-serif,system-ui;color:#fafafa;background:rgba(255,255,255,.08);border-radius:99px;font-variant-numeric:tabular-nums}
      .nuda-chip-count__badge--accent{color:#09090b;background:#e4ff54}
      @media(prefers-reduced-motion:reduce){.nuda-chip-count__chip{transition:none}.nuda-chip-count__chip:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-chip-count">
  <button type="button" class="nuda-chip-count__chip">
    Inbox
    <span class="nuda-chip-count__badge">12</span>
  </button>
  <button type="button" class="nuda-chip-count__chip">
    Mentions
    <span class="nuda-chip-count__badge nuda-chip-count__badge--accent">3</span>
  </button>
  <button type="button" class="nuda-chip-count__chip">
    Drafts
    <span class="nuda-chip-count__badge">0</span>
  </button>
  <button type="button" class="nuda-chip-count__chip">
    Archive
    <span class="nuda-chip-count__badge">99+</span>
  </button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Chip Counter Badge
   Trailing numeric badge inside a chip — use --accent for emphasis.
   Customize: --count-accent */

.nuda-chip-count {
  --count-accent: #e4ff54;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.nuda-chip-count__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 4px 4px 12px;
  font: 500 12px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  cursor: pointer;
  transition: transform 0.15s, border-color 0.2s;
}

.nuda-chip-count__chip:hover {
  transform: translateY(-1px);
  border-color: rgba(255, 255, 255, 0.18);
}

.nuda-chip-count__badge {
  display: inline-grid;
  place-items: center;
  min-width: 20px;
  height: 18px;
  padding: 0 6px;
  font: 700 10px/1 ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  font-variant-numeric: tabular-nums;
}

.nuda-chip-count__badge--accent {
  color: #09090b;
  background: var(--count-accent);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-chip-count__chip { transition: none; }
  .nuda-chip-count__chip:hover { transform: none; }
}`,
      },
    ],
  },
];
