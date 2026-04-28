import type { NudaComponent } from "./types";

export const dragDrop: NudaComponent[] = [
  /* ─────────────── 1. Drop Zone ─────────────── */
  {
    id: "drop-zone",
    name: "Drop Zone",
    category: "Drag & Drop",
    preview: (
      <div className="nuda-drop">
        <svg className="nuda-drop__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3 L14 8 L19 8" />
          <path d="M14 3 L7 3 A 2 2 0 0 0 5 5 L5 19 A 2 2 0 0 0 7 21 L17 21 A 2 2 0 0 0 19 19 L19 8 Z" />
          <path d="M9 14 L12 11 L15 14" />
          <path d="M12 11 L12 17" />
        </svg>
        <p className="nuda-drop__text">Drop files here</p>
        <span className="nuda-drop__hint">or click to browse</span>
      </div>
    ),
    cssInline: `
      .nuda-drop{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:140px;height:100px;padding:12px;border:1.5px dashed rgba(255,255,255,.15);border-radius:10px;background:rgba(255,255,255,.02);cursor:pointer;transition:border-color .25s,background .25s}
      .nuda-drop:hover,.nuda-drop.is-over{border-color:#e4ff54;background:rgba(228,255,84,.04)}
      .nuda-drop__icon{width:24px;height:24px;color:#a1a1aa;animation:_dr-bob 2.4s ease-in-out infinite;transition:color .25s}
      .nuda-drop:hover .nuda-drop__icon,.nuda-drop.is-over .nuda-drop__icon{color:#e4ff54}
      .nuda-drop__text{font:600 11px ui-sans-serif,system-ui;color:#fafafa;margin:0}
      .nuda-drop__hint{font:500 9px ui-sans-serif,system-ui;color:#63636e}
      @keyframes _dr-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Drop Zone — toggle .is-over on dragenter / off on dragleave/drop -->
<div class="nuda-drop">
  <svg class="nuda-drop__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.6"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M14 3 L14 8 L19 8" />
    <path d="M14 3 L7 3 A 2 2 0 0 0 5 5 L5 19 A 2 2 0 0 0 7 21 L17 21 A 2 2 0 0 0 19 19 L19 8 Z" />
    <path d="M9 14 L12 11 L15 14" />
    <path d="M12 11 L12 17" />
  </svg>
  <p class="nuda-drop__text">Drop files here</p>
  <span class="nuda-drop__hint">or click to browse</span>
  <input type="file" multiple hidden />
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Drop Zone
   Dashed area with bobbing icon; turns accent on hover or .is-over (drag-enter).
   Customize: --drop-accent, --drop-bg */

.nuda-drop {
  --drop-accent: #e4ff54;
  --drop-bg: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 360px;
  padding: 24px;
  border: 1.5px dashed rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  background: var(--drop-bg);
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s;
}

.nuda-drop:hover,
.nuda-drop.is-over {
  border-color: var(--drop-accent);
  background: rgba(228, 255, 84, 0.04);
}

.nuda-drop__icon {
  width: 32px;
  height: 32px;
  color: #a1a1aa;
  animation: nuda-drop-bob 2.4s ease-in-out infinite;
  transition: color 0.25s;
}

.nuda-drop:hover .nuda-drop__icon,
.nuda-drop.is-over .nuda-drop__icon { color: var(--drop-accent); }

.nuda-drop__text {
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
}

.nuda-drop__hint {
  font: 500 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #63636e;
}

@keyframes nuda-drop-bob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-drop__icon { animation: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Drop Zone — wires up native drag events + click-to-browse. */

(function () {
  var zone = document.querySelector('.nuda-drop');
  if (!zone) return;
  var input = zone.querySelector('input[type="file"]');

  ['dragenter', 'dragover'].forEach(function (ev) {
    zone.addEventListener(ev, function (e) {
      e.preventDefault();
      zone.classList.add('is-over');
    });
  });
  ['dragleave', 'drop'].forEach(function (ev) {
    zone.addEventListener(ev, function (e) {
      e.preventDefault();
      zone.classList.remove('is-over');
    });
  });

  zone.addEventListener('drop', function (e) {
    handle(e.dataTransfer.files);
  });
  zone.addEventListener('click', function () { input && input.click(); });
  input && input.addEventListener('change', function () { handle(input.files); });

  function handle(files) {
    // Replace with your upload logic.
    console.log('files:', files);
  }
})();`,
      },
    ],
  },

  /* ─────────────── 2. File Card ─────────────── */
  {
    id: "file-card",
    name: "File Card",
    category: "Drag & Drop",
    preview: (
      <div className="nuda-file">
        <div className="nuda-file__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 3 L14 8 L19 8" />
            <path d="M14 3 L7 3 A 2 2 0 0 0 5 5 L5 19 A 2 2 0 0 0 7 21 L17 21 A 2 2 0 0 0 19 19 L19 8 Z" />
          </svg>
        </div>
        <div className="nuda-file__info">
          <span className="nuda-file__name">design.fig</span>
          <div className="nuda-file__bar"><span /></div>
        </div>
        <span className="nuda-file__pct">68%</span>
      </div>
    ),
    cssInline: `
      .nuda-file{display:flex;align-items:center;gap:8px;padding:8px 10px;width:180px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:8px;animation:_fc-in .5s cubic-bezier(.4,0,.2,1)}
      .nuda-file__icon{flex-shrink:0;width:24px;height:24px;display:flex;align-items:center;justify-content:center;background:rgba(228,255,84,.1);color:#e4ff54;border-radius:5px}
      .nuda-file__icon svg{width:14px;height:14px}
      .nuda-file__info{flex:1;min-width:0;display:flex;flex-direction:column;gap:3px}
      .nuda-file__name{font:600 10px ui-sans-serif,system-ui;color:#fafafa;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .nuda-file__bar{height:3px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden}
      .nuda-file__bar span{display:block;height:100%;width:0;background:linear-gradient(90deg,#e4ff54,rgba(228,255,84,.6));border-radius:2px;animation:_fc-prog 2s cubic-bezier(.4,0,.2,1) forwards;box-shadow:0 0 4px rgba(228,255,84,.4)}
      .nuda-file__pct{font:700 9px ui-sans-serif,system-ui;color:#a1a1aa;font-variant-numeric:tabular-nums;flex-shrink:0}
      @keyframes _fc-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _fc-prog{to{width:68%}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- File Card — show as items upload (set --p target via JS) -->
<div class="nuda-file" style="--p: 68%">
  <div class="nuda-file__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 3 L14 8 L19 8" />
      <path d="M14 3 L7 3 A 2 2 0 0 0 5 5 L5 19 A 2 2 0 0 0 7 21 L17 21 A 2 2 0 0 0 19 19 L19 8 Z" />
    </svg>
  </div>
  <div class="nuda-file__info">
    <span class="nuda-file__name">design.fig</span>
    <div class="nuda-file__bar"><span></span></div>
  </div>
  <span class="nuda-file__pct">68%</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* File Card
   Compact upload row: icon, file name, progress bar, percentage.
   Customize: --p (current %), --fc-accent, --fc-bg */

.nuda-file {
  --p: 0%;
  --fc-accent: #e4ff54;
  --fc-bg: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  width: 100%;
  max-width: 320px;
  background: var(--fc-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  animation: nuda-fc-in 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.nuda-file__icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(228, 255, 84, 0.1);
  color: var(--fc-accent);
  border-radius: 6px;
}

.nuda-file__icon svg { width: 16px; height: 16px; }

.nuda-file__info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nuda-file__name {
  font: 600 0.75rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.nuda-file__bar {
  height: 4px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 2px;
  overflow: hidden;
}

.nuda-file__bar span {
  display: block;
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--fc-accent), rgba(228, 255, 84, 0.6));
  border-radius: 2px;
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.4);
  animation: nuda-fc-prog 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.nuda-file__pct {
  font: 700 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}

@keyframes nuda-fc-in {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes nuda-fc-prog { to { width: var(--p); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-file,
  .nuda-file__bar span { animation: none; }
  .nuda-file__bar span { width: var(--p); }
}`,
      },
    ],
  },

  /* ─────────────── 3. Sortable List ─────────────── */
  {
    id: "sortable-list",
    name: "Sortable List",
    category: "Drag & Drop",
    preview: (
      <ul className="nuda-sort">
        <li className="nuda-sort__item">
          <span className="nuda-sort__handle" aria-hidden="true">⋮⋮</span>
          <span className="nuda-sort__label">Plan launch</span>
        </li>
        <li className="nuda-sort__item is-dragging">
          <span className="nuda-sort__handle" aria-hidden="true">⋮⋮</span>
          <span className="nuda-sort__label">Write changelog</span>
        </li>
        <li className="nuda-sort__item">
          <span className="nuda-sort__handle" aria-hidden="true">⋮⋮</span>
          <span className="nuda-sort__label">Review PR #42</span>
        </li>
      </ul>
    ),
    cssInline: `
      .nuda-sort{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:4px;width:170px}
      .nuda-sort__item{display:flex;align-items:center;gap:8px;padding:6px 10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:6px;cursor:grab;transition:border-color .2s,background .2s,transform .2s,box-shadow .2s}
      .nuda-sort__item:hover{border-color:rgba(228,255,84,.2);background:rgba(255,255,255,.05)}
      .nuda-sort__item:active{cursor:grabbing}
      .nuda-sort__item.is-dragging{border-color:#e4ff54;background:rgba(228,255,84,.06);transform:scale(1.02) rotate(-.5deg);box-shadow:0 8px 24px -8px rgba(228,255,84,.4),0 4px 8px rgba(0,0,0,.3);z-index:10}
      .nuda-sort__handle{color:#63636e;font:700 10px ui-sans-serif,system-ui;letter-spacing:-1px;cursor:grab;user-select:none;transition:color .2s}
      .nuda-sort__item:hover .nuda-sort__handle{color:#e4ff54}
      .nuda-sort__label{font:500 11px ui-sans-serif,system-ui;color:#fafafa}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sortable List — toggle .is-dragging on the active item from JS / your dnd lib -->
<ul class="nuda-sort">
  <li class="nuda-sort__item">
    <span class="nuda-sort__handle" aria-hidden="true">⋮⋮</span>
    <span class="nuda-sort__label">Plan launch</span>
  </li>
  <li class="nuda-sort__item is-dragging">
    <span class="nuda-sort__handle" aria-hidden="true">⋮⋮</span>
    <span class="nuda-sort__label">Write changelog</span>
  </li>
  <li class="nuda-sort__item">
    <span class="nuda-sort__handle" aria-hidden="true">⋮⋮</span>
    <span class="nuda-sort__label">Review PR #42</span>
  </li>
</ul>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Sortable List
   Drag-handle rows; .is-dragging tilts and lifts the active row.
   Customize: --sort-accent, --sort-bg */

.nuda-sort {
  --sort-accent: #e4ff54;
  --sort-bg: rgba(255, 255, 255, 0.03);
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 280px;
}

.nuda-sort__item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: var(--sort-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  cursor: grab;
  transition:
    border-color 0.2s,
    background 0.2s,
    transform 0.2s,
    box-shadow 0.2s;
}

.nuda-sort__item:hover {
  border-color: rgba(228, 255, 84, 0.2);
  background: rgba(255, 255, 255, 0.05);
}

.nuda-sort__item:active { cursor: grabbing; }

.nuda-sort__item.is-dragging {
  border-color: var(--sort-accent);
  background: rgba(228, 255, 84, 0.06);
  transform: scale(1.02) rotate(-0.5deg);
  box-shadow:
    0 8px 24px -8px rgba(228, 255, 84, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.nuda-sort__handle {
  color: #63636e;
  font: 700 0.75rem ui-sans-serif, system-ui, sans-serif;
  letter-spacing: -1px;
  cursor: grab;
  user-select: none;
  transition: color 0.2s;
}

.nuda-sort__item:hover .nuda-sort__handle { color: var(--sort-accent); }

.nuda-sort__label {
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}`,
      },
    ],
  },

  /* ─────────────── 4. Drop Indicator ─────────────── */
  {
    id: "drop-indicator",
    name: "Drop Indicator",
    category: "Drag & Drop",
    preview: (
      <ul className="nuda-dropind">
        <li className="nuda-dropind__item">Item one</li>
        <li className="nuda-dropind__item">Item two</li>
        <li className="nuda-dropind__line" />
        <li className="nuda-dropind__item">Item three</li>
      </ul>
    ),
    cssInline: `
      .nuda-dropind{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:3px;width:160px}
      .nuda-dropind__item{padding:6px 10px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:6px;font:500 11px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-dropind__line{height:2px;background:#e4ff54;border-radius:2px;box-shadow:0 0 8px rgba(228,255,84,.6);position:relative;animation:_di-pulse 1.4s ease-in-out infinite}
      .nuda-dropind__line::before,.nuda-dropind__line::after{content:"";position:absolute;top:50%;width:6px;height:6px;background:#e4ff54;border-radius:50%;transform:translateY(-50%);box-shadow:0 0 6px #e4ff54}
      .nuda-dropind__line::before{left:-3px}
      .nuda-dropind__line::after{right:-3px}
      @keyframes _di-pulse{0%,100%{opacity:.7}50%{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Drop Indicator — insert this line where the dragged item will drop -->
<ul class="nuda-dropind">
  <li class="nuda-dropind__item">Item one</li>
  <li class="nuda-dropind__item">Item two</li>
  <li class="nuda-dropind__line" aria-hidden="true"></li>
  <li class="nuda-dropind__item">Item three</li>
</ul>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Drop Indicator
   A glowing line with end-dots showing where a drag will land.
   Customize: --di-color, list spacing. */

.nuda-dropind {
  --di-color: #e4ff54;
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-width: 280px;
}

.nuda-dropind__item {
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}

.nuda-dropind__line {
  height: 2px;
  background: var(--di-color);
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(228, 255, 84, 0.6);
  position: relative;
  animation: nuda-di-pulse 1.4s ease-in-out infinite;
}

.nuda-dropind__line::before,
.nuda-dropind__line::after {
  content: "";
  position: absolute;
  top: 50%;
  width: 8px;
  height: 8px;
  background: var(--di-color);
  border-radius: 50%;
  transform: translateY(-50%);
  box-shadow: 0 0 6px var(--di-color);
}

.nuda-dropind__line::before { left: -4px; }
.nuda-dropind__line::after  { right: -4px; }

@keyframes nuda-di-pulse {
  0%, 100% { opacity: 0.7; }
  50%      { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dropind__line { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Trash Zone ─────────────── */
  {
    id: "trash-zone",
    name: "Trash Zone",
    category: "Drag & Drop",
    preview: (
      <div className="nuda-trash is-over">
        <svg className="nuda-trash__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path className="nuda-trash__lid" d="M3 6 L21 6" />
          <path d="M19 6 L18 20 A 2 2 0 0 1 16 22 L8 22 A 2 2 0 0 1 6 20 L5 6" />
          <path d="M9 6 L9 4 A 1 1 0 0 1 10 3 L14 3 A 1 1 0 0 1 15 4 L15 6" />
          <path d="M10 11 L10 17" opacity="0.5" />
          <path d="M14 11 L14 17" opacity="0.5" />
        </svg>
        <span className="nuda-trash__label">Drop to delete</span>
      </div>
    ),
    cssInline: `
      .nuda-trash{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:130px;height:90px;border:1.5px dashed rgba(255,255,255,.12);border-radius:10px;background:rgba(255,255,255,.02);transition:all .25s}
      .nuda-trash.is-over{border-color:#ff6363;border-style:solid;background:rgba(255,99,99,.08);animation:_tz-shake .4s cubic-bezier(.36,.07,.19,.97)}
      .nuda-trash__icon{width:26px;height:26px;color:#a1a1aa;transition:color .25s}
      .nuda-trash.is-over .nuda-trash__icon{color:#ff6363}
      .nuda-trash.is-over .nuda-trash__lid{transform-origin:left center;animation:_tz-lid .5s ease-in-out infinite alternate}
      .nuda-trash__label{font:600 10px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.06em;transition:color .25s}
      .nuda-trash.is-over .nuda-trash__label{color:#ff6363}
      @keyframes _tz-shake{10%,90%{transform:translateX(-1px)}30%,50%,70%{transform:translateX(-3px)}40%,60%{transform:translateX(3px)}}
      @keyframes _tz-lid{from{transform:rotate(-8deg)}to{transform:rotate(8deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Trash Zone — toggle .is-over while a draggable hovers it -->
<div class="nuda-trash">
  <svg class="nuda-trash__icon" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <path class="nuda-trash__lid" d="M3 6 L21 6" />
    <path d="M19 6 L18 20 A 2 2 0 0 1 16 22 L8 22 A 2 2 0 0 1 6 20 L5 6" />
    <path d="M9 6 L9 4 A 1 1 0 0 1 10 3 L14 3 A 1 1 0 0 1 15 4 L15 6" />
    <path d="M10 11 L10 17" opacity="0.5" />
    <path d="M14 11 L14 17" opacity="0.5" />
  </svg>
  <span class="nuda-trash__label">Drop to delete</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Trash Zone
   Dashed area that turns red and shakes once when an item is dragged over.
   Customize: --trash-danger */

.nuda-trash {
  --trash-danger: #ff6363;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 240px;
  height: 120px;
  border: 1.5px dashed rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.25s;
}

.nuda-trash.is-over {
  border-color: var(--trash-danger);
  border-style: solid;
  background: rgba(255, 99, 99, 0.08);
  animation: nuda-trash-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

.nuda-trash__icon {
  width: 32px;
  height: 32px;
  color: #a1a1aa;
  transition: color 0.25s;
}

.nuda-trash.is-over .nuda-trash__icon { color: var(--trash-danger); }

.nuda-trash.is-over .nuda-trash__lid {
  transform-origin: left center;
  animation: nuda-trash-lid 0.5s ease-in-out infinite alternate;
}

.nuda-trash__label {
  font: 600 0.75rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: color 0.25s;
}

.nuda-trash.is-over .nuda-trash__label { color: var(--trash-danger); }

@keyframes nuda-trash-shake {
  10%, 90%      { transform: translateX(-1px); }
  30%, 50%, 70% { transform: translateX(-3px); }
  40%, 60%      { transform: translateX(3px); }
}

@keyframes nuda-trash-lid {
  from { transform: rotate(-8deg); }
  to   { transform: rotate(8deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-trash.is-over,
  .nuda-trash.is-over .nuda-trash__lid { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Drag Preview ─────────────── */
  {
    id: "drag-preview",
    name: "Drag Preview",
    category: "Drag & Drop",
    preview: (
      <div className="nuda-dragprev">
        <div className="nuda-dragprev__placeholder" />
        <div className="nuda-dragprev__ghost">
          <span className="nuda-dragprev__handle">⋮⋮</span>
          <span>Moving item</span>
          <span className="nuda-dragprev__count">3</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dragprev{position:relative;width:170px;height:80px;display:flex;align-items:center;justify-content:center}
      .nuda-dragprev__placeholder{position:absolute;left:0;top:50%;transform:translateY(-50%);width:100%;height:32px;background:rgba(228,255,84,.08);border:1.5px dashed rgba(228,255,84,.3);border-radius:6px}
      .nuda-dragprev__ghost{position:relative;display:flex;align-items:center;gap:8px;padding:6px 10px 6px 8px;background:rgba(20,20,24,.95);border:1px solid #e4ff54;border-radius:6px;font:500 11px ui-sans-serif,system-ui;color:#fafafa;backdrop-filter:blur(8px);box-shadow:0 12px 32px -8px rgba(228,255,84,.3),0 8px 16px rgba(0,0,0,.4);transform:rotate(-2deg) scale(1.04);animation:_dp-float 2s ease-in-out infinite}
      .nuda-dragprev__handle{color:#63636e;font:700 10px ui-sans-serif,system-ui;letter-spacing:-1px}
      .nuda-dragprev__count{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;background:#e4ff54;color:#09090b;font:800 8px ui-sans-serif,system-ui;border-radius:4px;animation:_dp-bump .6s cubic-bezier(.34,1.56,.64,1)}
      @keyframes _dp-float{0%,100%{transform:rotate(-2deg) scale(1.04) translateY(0)}50%{transform:rotate(-2deg) scale(1.04) translateY(-3px)}}
      @keyframes _dp-bump{0%{transform:scale(.4)}100%{transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Drag Preview — floating ghost shown while dragging multiple items -->
<div class="nuda-dragprev">
  <div class="nuda-dragprev__placeholder"></div>
  <div class="nuda-dragprev__ghost">
    <span class="nuda-dragprev__handle">⋮⋮</span>
    <span>Moving item</span>
    <span class="nuda-dragprev__count">3</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Drag Preview
   Source spot shows a dashed placeholder; floating ghost tilts and floats.
   Use as the visual feedback when starting a drag.
   Customize: --dp-accent, --dp-bg */

.nuda-dragprev {
  --dp-accent: #e4ff54;
  --dp-bg: rgba(20, 20, 24, 0.95);
  position: relative;
  width: 100%;
  max-width: 280px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-dragprev__placeholder {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 36px;
  background: rgba(228, 255, 84, 0.08);
  border: 1.5px dashed rgba(228, 255, 84, 0.3);
  border-radius: 8px;
}

.nuda-dragprev__ghost {
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px 8px 10px;
  background: var(--dp-bg);
  border: 1px solid var(--dp-accent);
  border-radius: 8px;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  backdrop-filter: blur(8px);
  box-shadow:
    0 12px 32px -8px rgba(228, 255, 84, 0.3),
    0 8px 16px rgba(0, 0, 0, 0.4);
  transform: rotate(-2deg) scale(1.04);
  animation: nuda-dp-float 2s ease-in-out infinite;
}

.nuda-dragprev__handle {
  color: #63636e;
  font: 700 0.75rem ui-sans-serif, system-ui, sans-serif;
  letter-spacing: -1px;
}

.nuda-dragprev__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  background: var(--dp-accent);
  color: #09090b;
  font: 800 0.6rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 5px;
  animation: nuda-dp-bump 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes nuda-dp-float {
  0%, 100% { transform: rotate(-2deg) scale(1.04) translateY(0); }
  50%      { transform: rotate(-2deg) scale(1.04) translateY(-4px); }
}

@keyframes nuda-dp-bump {
  0%   { transform: scale(0.4); }
  100% { transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dragprev__ghost { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Drop Validation ─────────────── */
  {
    id: "drop-validation",
    name: "Drop Validation",
    category: "Drag & Drop",
    preview: (
      <div className="nuda-dropval">
        <div className="nuda-dropval__zone is-valid">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12 L10 17 L20 7" />
          </svg>
          <span>Allowed</span>
        </div>
        <div className="nuda-dropval__zone is-invalid">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6 L18 18" />
            <path d="M18 6 L6 18" />
          </svg>
          <span>Not allowed</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dropval{display:flex;flex-direction:column;gap:6px;width:140px}
      .nuda-dropval__zone{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;font:600 11px ui-sans-serif,system-ui;border:1.5px solid;animation:_dv-pop .4s cubic-bezier(.34,1.56,.64,1)}
      .nuda-dropval__zone svg{width:14px;height:14px;flex-shrink:0;animation:_dv-icon .4s cubic-bezier(.34,1.56,.64,1) .1s backwards}
      .nuda-dropval__zone.is-valid{background:rgba(228,255,84,.08);border-color:#e4ff54;color:#e4ff54;box-shadow:0 0 12px rgba(228,255,84,.2)}
      .nuda-dropval__zone.is-invalid{background:rgba(255,99,99,.08);border-color:#ff6363;color:#ff6363;animation:_dv-pop .4s cubic-bezier(.34,1.56,.64,1),_dv-shake .3s ease-in-out .4s}
      @keyframes _dv-pop{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
      @keyframes _dv-icon{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}
      @keyframes _dv-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-3px)}75%{transform:translateX(3px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Drop Validation — show .is-valid or .is-invalid based on dragged type -->
<div class="nuda-dropval">
  <div class="nuda-dropval__zone is-valid">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12 L10 17 L20 7" />
    </svg>
    <span>Allowed</span>
  </div>
  <div class="nuda-dropval__zone is-invalid">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 6 L18 18" /><path d="M18 6 L6 18" />
    </svg>
    <span>Not allowed</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Drop Validation
   Two states for drop targets: valid (accent + glow) / invalid (red + shake).
   Customize: --dv-ok, --dv-bad */

.nuda-dropval {
  --dv-ok: #e4ff54;
  --dv-bad: #ff6363;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 220px;
}

.nuda-dropval__zone {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 10px;
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  border: 1.5px solid;
  animation: nuda-dv-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-dropval__zone svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  animation: nuda-dv-icon 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s backwards;
}

.nuda-dropval__zone.is-valid {
  background: rgba(228, 255, 84, 0.08);
  border-color: var(--dv-ok);
  color: var(--dv-ok);
  box-shadow: 0 0 12px rgba(228, 255, 84, 0.2);
}

.nuda-dropval__zone.is-invalid {
  background: rgba(255, 99, 99, 0.08);
  border-color: var(--dv-bad);
  color: var(--dv-bad);
  animation:
    nuda-dv-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    nuda-dv-shake 0.3s ease-in-out 0.4s;
}

@keyframes nuda-dv-pop {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes nuda-dv-icon {
  from { opacity: 0; transform: scale(0); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes nuda-dv-shake {
  0%, 100% { transform: translateX(0); }
  25%      { transform: translateX(-3px); }
  75%      { transform: translateX(3px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dropval__zone,
  .nuda-dropval__zone svg { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Multi-File Selector ─────────────── */
  {
    id: "multi-file-selector",
    name: "Multi-File Selector",
    category: "Drag & Drop",
    preview: (
      <div className="nuda-multi">
        <span className="nuda-multi__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15 L21 19 A 2 2 0 0 1 19 21 L5 21 A 2 2 0 0 1 3 19 L3 15" />
            <path d="M7 10 L12 15 L17 10" />
            <path d="M12 15 L12 3" />
          </svg>
        </span>
        <div className="nuda-multi__info">
          <span className="nuda-multi__count">3 files</span>
          <span className="nuda-multi__size">2.4 MB total</span>
        </div>
        <button className="nuda-multi__clear" type="button" aria-label="Clear">×</button>
      </div>
    ),
    cssInline: `
      .nuda-multi{display:inline-flex;align-items:center;gap:10px;padding:6px 8px 6px 10px;background:rgba(228,255,84,.06);border:1px solid rgba(228,255,84,.2);border-radius:8px;animation:_mf-in .4s cubic-bezier(.34,1.56,.64,1)}
      .nuda-multi__icon{width:22px;height:22px;display:flex;align-items:center;justify-content:center;color:#e4ff54;flex-shrink:0;filter:drop-shadow(0 0 4px rgba(228,255,84,.4))}
      .nuda-multi__icon svg{width:100%;height:100%}
      .nuda-multi__info{display:flex;flex-direction:column;line-height:1}
      .nuda-multi__count{font:700 11px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums}
      .nuda-multi__size{font:500 9px ui-sans-serif,system-ui;color:#a1a1aa;margin-top:2px}
      .nuda-multi__clear{display:flex;align-items:center;justify-content:center;width:18px;height:18px;background:rgba(255,255,255,.06);border:none;color:#a1a1aa;font:700 14px ui-sans-serif,system-ui;border-radius:4px;cursor:pointer;line-height:1;transition:background .2s,color .2s}
      .nuda-multi__clear:hover{background:rgba(255,99,99,.15);color:#ff6363}
      @keyframes _mf-in{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Multi-File Selector — pill summary of selected files -->
<div class="nuda-multi">
  <span class="nuda-multi__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15 L21 19 A 2 2 0 0 1 19 21 L5 21 A 2 2 0 0 1 3 19 L3 15" />
      <path d="M7 10 L12 15 L17 10" />
      <path d="M12 15 L12 3" />
    </svg>
  </span>
  <div class="nuda-multi__info">
    <span class="nuda-multi__count">3 files</span>
    <span class="nuda-multi__size">2.4 MB total</span>
  </div>
  <button class="nuda-multi__clear" type="button" aria-label="Clear">×</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Multi-File Selector
   Compact accent pill summarizing pending files.
   Customize: --mf-accent */

.nuda-multi {
  --mf-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 10px 8px 12px;
  background: rgba(228, 255, 84, 0.06);
  border: 1px solid rgba(228, 255, 84, 0.2);
  border-radius: 10px;
  animation: nuda-mf-in 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-multi__icon {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mf-accent);
  flex-shrink: 0;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.4));
}

.nuda-multi__icon svg { width: 100%; height: 100%; }

.nuda-multi__info {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.nuda-multi__count {
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  font-variant-numeric: tabular-nums;
}

.nuda-multi__size {
  font: 500 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  margin-top: 3px;
}

.nuda-multi__clear {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  background: rgba(255, 255, 255, 0.06);
  border: none;
  color: #a1a1aa;
  font: 700 1rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 5px;
  cursor: pointer;
  line-height: 1;
  transition: background 0.2s, color 0.2s;
}

.nuda-multi__clear:hover {
  background: rgba(255, 99, 99, 0.15);
  color: #ff6363;
}

@keyframes nuda-mf-in {
  from { opacity: 0; transform: scale(0.92); }
  to   { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-multi { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 9. Upload Success ─────────────── */
  {
    id: "upload-success",
    name: "Upload Success",
    category: "Drag & Drop",
    preview: (
      <div className="nuda-upok">
        <div className="nuda-upok__circle">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12 L10 17 L20 7" />
          </svg>
          <span className="nuda-upok__ring" />
          <span className="nuda-upok__ring nuda-upok__ring--b" />
        </div>
        <span className="nuda-upok__label">Upload complete</span>
        <span className="nuda-upok__sub">3 files · 2.4 MB</span>
      </div>
    ),
    cssInline: `
      .nuda-upok{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px;width:140px}
      .nuda-upok__circle{position:relative;width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:#e4ff54;color:#09090b;border-radius:50%;box-shadow:0 0 16px rgba(228,255,84,.5);animation:_uk-pop .5s cubic-bezier(.34,1.56,.64,1)}
      .nuda-upok__circle svg{width:60%;height:60%;stroke-dasharray:30;stroke-dashoffset:30;animation:_uk-draw .5s cubic-bezier(.4,0,.2,1) .25s forwards}
      .nuda-upok__ring{position:absolute;inset:0;border:2px solid #e4ff54;border-radius:50%;animation:_uk-pulse 1.6s ease-out infinite;opacity:0}
      .nuda-upok__ring--b{animation-delay:.6s}
      .nuda-upok__label{font:700 11px ui-sans-serif,system-ui;color:#fafafa;animation:_uk-fade .4s ease .4s backwards}
      .nuda-upok__sub{font:500 9px ui-sans-serif,system-ui;color:#a1a1aa;animation:_uk-fade .4s ease .55s backwards}
      @keyframes _uk-pop{0%{transform:scale(0)}60%{transform:scale(1.15)}100%{transform:scale(1)}}
      @keyframes _uk-draw{to{stroke-dashoffset:0}}
      @keyframes _uk-pulse{0%{transform:scale(1);opacity:.6}100%{transform:scale(1.8);opacity:0}}
      @keyframes _uk-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Upload Success -->
<div class="nuda-upok">
  <div class="nuda-upok__circle">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12 L10 17 L20 7" />
    </svg>
    <span class="nuda-upok__ring"></span>
    <span class="nuda-upok__ring nuda-upok__ring--b"></span>
  </div>
  <span class="nuda-upok__label">Upload complete</span>
  <span class="nuda-upok__sub">3 files · 2.4 MB</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Upload Success
   Pop-in check with two expanding rings; label + sub fade up after.
   Customize: --uk-color */

.nuda-upok {
  --uk-color: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  width: 100%;
  max-width: 200px;
}

.nuda-upok__circle {
  position: relative;
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--uk-color);
  color: #09090b;
  border-radius: 50%;
  box-shadow: 0 0 16px rgba(228, 255, 84, 0.5);
  animation: nuda-uk-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-upok__circle svg {
  width: 60%;
  height: 60%;
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: nuda-uk-draw 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.25s forwards;
}

.nuda-upok__ring {
  position: absolute;
  inset: 0;
  border: 2px solid var(--uk-color);
  border-radius: 50%;
  opacity: 0;
  animation: nuda-uk-pulse 1.6s ease-out infinite;
}

.nuda-upok__ring--b { animation-delay: 0.6s; }

.nuda-upok__label {
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  animation: nuda-uk-fade 0.4s ease 0.4s backwards;
}

.nuda-upok__sub {
  font: 500 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  animation: nuda-uk-fade 0.4s ease 0.55s backwards;
}

@keyframes nuda-uk-pop {
  0%   { transform: scale(0); }
  60%  { transform: scale(1.15); }
  100% { transform: scale(1); }
}

@keyframes nuda-uk-draw { to { stroke-dashoffset: 0; } }

@keyframes nuda-uk-pulse {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(1.8); opacity: 0; }
}

@keyframes nuda-uk-fade {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-upok__circle,
  .nuda-upok__circle svg,
  .nuda-upok__ring,
  .nuda-upok__label,
  .nuda-upok__sub { animation: none; }
  .nuda-upok__circle svg { stroke-dashoffset: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Reorder Grid ─────────────── */
  {
    id: "reorder-grid",
    name: "Reorder Grid",
    category: "Drag & Drop",
    preview: (
      <div className="nuda-reorder">
        <div className="nuda-reorder__cell"><span>1</span></div>
        <div className="nuda-reorder__cell"><span>2</span></div>
        <div className="nuda-reorder__cell is-dragging"><span>3</span></div>
        <div className="nuda-reorder__cell"><span>4</span></div>
        <div className="nuda-reorder__cell is-shifted"><span>5</span></div>
        <div className="nuda-reorder__cell"><span>6</span></div>
      </div>
    ),
    cssInline: `
      .nuda-reorder{display:grid;grid-template-columns:repeat(3,1fr);gap:4px;width:140px;padding:6px}
      .nuda-reorder__cell{aspect-ratio:1;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:6px;cursor:grab;transition:transform .3s cubic-bezier(.4,0,.2,1),background .25s,border-color .25s,box-shadow .25s}
      .nuda-reorder__cell:hover{background:rgba(255,255,255,.06);border-color:rgba(228,255,84,.2)}
      .nuda-reorder__cell span{font:700 12px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-reorder__cell.is-shifted{transform:translateX(-12%);opacity:.6}
      .nuda-reorder__cell.is-dragging{background:rgba(228,255,84,.08);border-color:#e4ff54;transform:scale(1.06) rotate(-2deg);box-shadow:0 8px 20px -4px rgba(228,255,84,.4),0 4px 8px rgba(0,0,0,.3);z-index:10;cursor:grabbing}
      .nuda-reorder__cell.is-dragging span{color:#e4ff54}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Reorder Grid — set .is-dragging on the active item, .is-shifted on
     items that move out of the way -->
<div class="nuda-reorder">
  <div class="nuda-reorder__cell"><span>1</span></div>
  <div class="nuda-reorder__cell"><span>2</span></div>
  <div class="nuda-reorder__cell is-dragging"><span>3</span></div>
  <div class="nuda-reorder__cell"><span>4</span></div>
  <div class="nuda-reorder__cell is-shifted"><span>5</span></div>
  <div class="nuda-reorder__cell"><span>6</span></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Reorder Grid
   Image-grid style reorder: dragging cell lifts + tilts, neighbors slide.
   Customize: --rg-accent */

.nuda-reorder {
  --rg-accent: #e4ff54;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  width: 100%;
  max-width: 240px;
  padding: 8px;
}

.nuda-reorder__cell {
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  cursor: grab;
  transition:
    transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    background 0.25s,
    border-color 0.25s,
    box-shadow 0.25s;
}

.nuda-reorder__cell:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(228, 255, 84, 0.2);
}

.nuda-reorder__cell span {
  font: 700 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
}

.nuda-reorder__cell.is-shifted {
  transform: translateX(-12%);
  opacity: 0.6;
}

.nuda-reorder__cell.is-dragging {
  background: rgba(228, 255, 84, 0.08);
  border-color: var(--rg-accent);
  transform: scale(1.06) rotate(-2deg);
  box-shadow:
    0 8px 20px -4px rgba(228, 255, 84, 0.4),
    0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 10;
  cursor: grabbing;
}

.nuda-reorder__cell.is-dragging span { color: var(--rg-accent); }`,
      },
    ],
  },
];
