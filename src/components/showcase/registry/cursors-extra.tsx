import type { NudaComponent } from "./types";

const CAT = "Cursors";

export const cursorsExtra: NudaComponent[] = [
  /* ─────────────── Crosshair Reticle ─────────────── */
  {
    id: "cur2-crosshair",
    name: "Crosshair Reticle",
    category: CAT,
    preview: (
      <div className="nuda-cur2-crosshair">
        <span className="nuda-cur2-crosshair__h" />
        <span className="nuda-cur2-crosshair__v" />
        <span className="nuda-cur2-crosshair__dot" />
        <span className="nuda-cur2-crosshair__label">Hover to aim</span>
      </div>
    ),
    cssInline: `
      .nuda-cur2-crosshair{position:relative;width:100%;max-width:220px;height:120px;margin:0 auto;border-radius:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);overflow:hidden;display:flex;align-items:center;justify-content:center;cursor:crosshair}
      .nuda-cur2-crosshair__h,.nuda-cur2-crosshair__v{position:absolute;background:rgba(228,255,84,.25);opacity:0;transition:opacity .25s ease}
      .nuda-cur2-crosshair__h{left:0;right:0;top:50%;height:1px;transform:translateY(-50%)}
      .nuda-cur2-crosshair__v{top:0;bottom:0;left:50%;width:1px;transform:translateX(-50%)}
      .nuda-cur2-crosshair__dot{width:10px;height:10px;border:2px solid #e4ff54;border-radius:50%;opacity:.5;transition:transform .25s cubic-bezier(.34,1.56,.64,1),opacity .25s ease}
      .nuda-cur2-crosshair__label{position:absolute;bottom:10px;color:#777;font-size:11px;transition:opacity .2s ease}
      .nuda-cur2-crosshair:hover .nuda-cur2-crosshair__h,.nuda-cur2-crosshair:hover .nuda-cur2-crosshair__v{opacity:1}
      .nuda-cur2-crosshair:hover .nuda-cur2-crosshair__dot{transform:scale(1.6);opacity:1;animation:_nuda-cur2crosshair 1.2s ease-in-out infinite}
      .nuda-cur2-crosshair:hover .nuda-cur2-crosshair__label{opacity:0}
      @keyframes _nuda-cur2crosshair{0%,100%{box-shadow:0 0 0 0 rgba(228,255,84,.35)}50%{box-shadow:0 0 0 8px rgba(228,255,84,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-crosshair__dot{animation:none !important;transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cur2-crosshair">
  <span class="nuda-cur2-crosshair__h"></span>
  <span class="nuda-cur2-crosshair__v"></span>
  <span class="nuda-cur2-crosshair__dot"></span>
  <span class="nuda-cur2-crosshair__label">Hover to aim</span>
</div>`,
      },
    ],
  },

  /* ─────────────── Read Cursor (Text Select) ─────────────── */
  {
    id: "cur2-text-select",
    name: "Read Cursor",
    category: CAT,
    preview: (
      <p className="nuda-cur2-text-select">
        Hover this paragraph to read
        <span className="nuda-cur2-text-select__caret" aria-hidden="true" />
      </p>
    ),
    cssInline: `
      .nuda-cur2-text-select{position:relative;max-width:210px;margin:0 auto;padding:14px 16px;color:#cfcfcf;font-size:13px;line-height:1.5;cursor:text;border-radius:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08)}
      .nuda-cur2-text-select::selection{background:rgba(228,255,84,.3);color:#0a0a0a}
      .nuda-cur2-text-select__caret{display:inline-block;width:2px;height:1em;margin-left:2px;background:#e4ff54;vertical-align:-2px;opacity:0}
      .nuda-cur2-text-select:hover .nuda-cur2-text-select__caret{opacity:1;animation:_nuda-cur2textselect 1s steps(2,jump-none) infinite}
      @keyframes _nuda-cur2textselect{50%{opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-text-select__caret{animation:none;opacity:.6}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<p class="nuda-cur2-text-select">
  Hover this paragraph to read
  <span class="nuda-cur2-text-select__caret" aria-hidden="true"></span>
</p>`,
      },
    ],
  },

  /* ─────────────── Grab Handle ─────────────── */
  {
    id: "cur2-grab-hand",
    name: "Grab Handle",
    category: CAT,
    preview: (
      <button type="button" className="nuda-cur2-grab-hand">
        <svg className="nuda-cur2-grab-hand__icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
          <circle cx="9" cy="6" r="1.5"></circle>
          <circle cx="15" cy="6" r="1.5"></circle>
          <circle cx="9" cy="12" r="1.5"></circle>
          <circle cx="15" cy="12" r="1.5"></circle>
          <circle cx="9" cy="18" r="1.5"></circle>
          <circle cx="15" cy="18" r="1.5"></circle>
        </svg>
        <span>Drag me</span>
      </button>
    ),
    cssInline: `
      .nuda-cur2-grab-hand{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 20px;border-radius:12px;background:#161616;border:1px solid rgba(255,255,255,.1);color:#fafafa;font-size:13px;font-weight:600;cursor:grab;transition:transform .18s cubic-bezier(.34,1.56,.64,1),box-shadow .18s ease,background-color .18s ease,border-color .18s ease}
      .nuda-cur2-grab-hand:hover{border-color:rgba(228,255,84,.35);box-shadow:0 10px 24px -14px rgba(228,255,84,.3)}
      .nuda-cur2-grab-hand:active{cursor:grabbing;transform:scale(.94) translateY(3px) rotate(-1.5deg);background:#1c1c10;box-shadow:0 2px 8px -4px rgba(0,0,0,.6)}
      .nuda-cur2-grab-hand__icon{color:#e4ff54;flex:none}
      .nuda-cur2-grab-hand:focus-visible{outline:2px solid #e4ff54;outline-offset:3px}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-grab-hand{transition:none}.nuda-cur2-grab-hand:active{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button type="button" class="nuda-cur2-grab-hand">
  <svg class="nuda-cur2-grab-hand__icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <circle cx="9" cy="6" r="1.5"/><circle cx="15" cy="6" r="1.5"/>
    <circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/>
    <circle cx="9" cy="18" r="1.5"/><circle cx="15" cy="18" r="1.5"/>
  </svg>
  <span>Drag me</span>
</button>`,
      },
    ],
  },

  /* ─────────────── Resize Handles ─────────────── */
  {
    id: "cur2-resize-handles",
    name: "Resize Handles",
    category: CAT,
    preview: (
      <div className="nuda-cur2-resize-handles" aria-hidden="true">
        <span className="nuda-cur2-resize-handles__box">Resizable</span>
        <span className="nuda-cur2-resize-handles__handle nuda-cur2-resize-handles__handle--nw" />
        <span className="nuda-cur2-resize-handles__handle nuda-cur2-resize-handles__handle--ne" />
        <span className="nuda-cur2-resize-handles__handle nuda-cur2-resize-handles__handle--sw" />
        <span className="nuda-cur2-resize-handles__handle nuda-cur2-resize-handles__handle--se" />
      </div>
    ),
    cssInline: `
      .nuda-cur2-resize-handles{position:relative;width:140px;height:90px;margin:15px auto}
      .nuda-cur2-resize-handles__box{display:flex;align-items:center;justify-content:center;width:100%;height:100%;border:1px dashed rgba(228,255,84,.4);border-radius:8px;background:rgba(228,255,84,.04);color:#a0a0a8;font-size:11px;transition:box-shadow .2s ease}
      .nuda-cur2-resize-handles:hover .nuda-cur2-resize-handles__box{box-shadow:0 0 0 3px rgba(228,255,84,.08)}
      .nuda-cur2-resize-handles__handle{position:absolute;width:10px;height:10px;background:#e4ff54;border-radius:2px;opacity:.85;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}
      .nuda-cur2-resize-handles__handle--nw{top:-5px;left:-5px;cursor:nwse-resize}
      .nuda-cur2-resize-handles__handle--ne{top:-5px;right:-5px;cursor:nesw-resize}
      .nuda-cur2-resize-handles__handle--sw{bottom:-5px;left:-5px;cursor:nesw-resize}
      .nuda-cur2-resize-handles__handle--se{bottom:-5px;right:-5px;cursor:nwse-resize}
      .nuda-cur2-resize-handles__handle:hover{transform:scale(1.35)}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-resize-handles__handle,.nuda-cur2-resize-handles__box{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cur2-resize-handles" aria-hidden="true">
  <span class="nuda-cur2-resize-handles__box">Resizable</span>
  <span class="nuda-cur2-resize-handles__handle nuda-cur2-resize-handles__handle--nw"></span>
  <span class="nuda-cur2-resize-handles__handle nuda-cur2-resize-handles__handle--ne"></span>
  <span class="nuda-cur2-resize-handles__handle nuda-cur2-resize-handles__handle--sw"></span>
  <span class="nuda-cur2-resize-handles__handle nuda-cur2-resize-handles__handle--se"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── Hover-Scale Indicator ─────────────── */
  {
    id: "cur2-hover-scale",
    name: "Hover-Scale Indicator",
    category: CAT,
    preview: (
      <div className="nuda-cur2-hover-scale">
        <span className="nuda-cur2-hover-scale__dot" aria-hidden="true" />
        <div className="nuda-cur2-hover-scale__row">
          <button type="button" className="nuda-cur2-hover-scale__chip">Link</button>
          <button type="button" className="nuda-cur2-hover-scale__chip">Link</button>
          <button type="button" className="nuda-cur2-hover-scale__chip">Link</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cur2-hover-scale{display:flex;flex-direction:column;align-items:center;gap:16px;padding:18px}
      .nuda-cur2-hover-scale__dot{width:14px;height:14px;border-radius:50%;background:#e4ff54;transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .25s ease}
      .nuda-cur2-hover-scale__row{display:flex;gap:8px}
      .nuda-cur2-hover-scale__chip{min-height:40px;padding:0 14px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:#161616;color:#cfcfcf;font-size:12px;cursor:pointer;transition:border-color .2s ease,color .2s ease}
      .nuda-cur2-hover-scale__chip:hover{border-color:#e4ff54;color:#fafafa}
      .nuda-cur2-hover-scale:has(.nuda-cur2-hover-scale__chip:hover) .nuda-cur2-hover-scale__dot{transform:scale(2.2);box-shadow:0 0 18px rgba(228,255,84,.5)}
      .nuda-cur2-hover-scale__chip:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-hover-scale__dot,.nuda-cur2-hover-scale__chip{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cur2-hover-scale">
  <span class="nuda-cur2-hover-scale__dot" aria-hidden="true"></span>
  <div class="nuda-cur2-hover-scale__row">
    <button type="button" class="nuda-cur2-hover-scale__chip">Link</button>
    <button type="button" class="nuda-cur2-hover-scale__chip">Link</button>
    <button type="button" class="nuda-cur2-hover-scale__chip">Link</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── Magnetic Grid Snap ─────────────── */
  {
    id: "cur2-grid-snap",
    name: "Magnetic Grid Snap",
    category: CAT,
    preview: (
      <div className="nuda-cur2-grid-snap" aria-hidden="true">
        <span className="nuda-cur2-grid-snap__cell" />
        <span className="nuda-cur2-grid-snap__cell" />
        <span className="nuda-cur2-grid-snap__cell" />
        <span className="nuda-cur2-grid-snap__cell" />
        <span className="nuda-cur2-grid-snap__cell" />
        <span className="nuda-cur2-grid-snap__cell" />
        <span className="nuda-cur2-grid-snap__cell" />
        <span className="nuda-cur2-grid-snap__cell" />
      </div>
    ),
    cssInline: `
      .nuda-cur2-grid-snap{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;width:100%;max-width:200px;margin:0 auto}
      .nuda-cur2-grid-snap__cell{aspect-ratio:1;border-radius:6px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.02);cursor:pointer;transition:transform .18s cubic-bezier(.34,1.56,.64,1),border-color .18s ease,box-shadow .18s ease}
      .nuda-cur2-grid-snap__cell:hover{transform:scale(1.15);border-color:#e4ff54;box-shadow:0 0 0 2px rgba(228,255,84,.25),0 6px 14px -8px rgba(228,255,84,.4)}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-grid-snap__cell{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cur2-grid-snap" aria-hidden="true">
  <span class="nuda-cur2-grid-snap__cell"></span>
  <span class="nuda-cur2-grid-snap__cell"></span>
  <span class="nuda-cur2-grid-snap__cell"></span>
  <span class="nuda-cur2-grid-snap__cell"></span>
  <span class="nuda-cur2-grid-snap__cell"></span>
  <span class="nuda-cur2-grid-snap__cell"></span>
  <span class="nuda-cur2-grid-snap__cell"></span>
  <span class="nuda-cur2-grid-snap__cell"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── Paint Trail ─────────────── */
  {
    id: "cur2-paint-trail",
    name: "Paint Trail",
    category: CAT,
    preview: (
      <div
        className="nuda-cur2-paint-trail"
        onMouseMove={(e) => {
          const area = e.currentTarget;
          const rect = area.getBoundingClientRect();
          area.style.setProperty("--x", `${e.clientX - rect.left}px`);
          area.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }}
      >
        <span className="nuda-cur2-paint-trail__seg" />
        <span className="nuda-cur2-paint-trail__seg" />
        <span className="nuda-cur2-paint-trail__seg" />
        <span className="nuda-cur2-paint-trail__seg" />
        <span className="nuda-cur2-paint-trail__seg" />
        <span className="nuda-cur2-paint-trail__label">Move your cursor</span>
      </div>
    ),
    cssInline: `
      .nuda-cur2-paint-trail{--x:110px;--y:60px;position:relative;width:100%;max-width:220px;height:120px;margin:0 auto;border-radius:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);overflow:hidden}
      .nuda-cur2-paint-trail__seg{position:absolute;top:0;left:0;width:14px;height:14px;border-radius:50%;background:#e4ff54;transform:translate(var(--x),var(--y)) translate(-50%,-50%);transition:transform linear;will-change:transform;pointer-events:none}
      .nuda-cur2-paint-trail__seg:nth-child(1){opacity:1;transition-duration:.05s}
      .nuda-cur2-paint-trail__seg:nth-child(2){opacity:.75;transition-duration:.12s;width:12px;height:12px}
      .nuda-cur2-paint-trail__seg:nth-child(3){opacity:.55;transition-duration:.19s;width:10px;height:10px}
      .nuda-cur2-paint-trail__seg:nth-child(4){opacity:.35;transition-duration:.26s;width:8px;height:8px}
      .nuda-cur2-paint-trail__seg:nth-child(5){opacity:.18;transition-duration:.33s;width:6px;height:6px}
      .nuda-cur2-paint-trail__label{position:absolute;bottom:8px;left:0;right:0;text-align:center;color:#777;font-size:11px;pointer-events:none}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-paint-trail__seg{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cur2-paint-trail">
  <span class="nuda-cur2-paint-trail__seg"></span>
  <span class="nuda-cur2-paint-trail__seg"></span>
  <span class="nuda-cur2-paint-trail__seg"></span>
  <span class="nuda-cur2-paint-trail__seg"></span>
  <span class="nuda-cur2-paint-trail__seg"></span>
  <span class="nuda-cur2-paint-trail__label">Move your cursor</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Paint Trail — a chain of segments lags behind the pointer at
   staggered transition speeds (set in CSS), creating a brush-like trail. */
(function () {
  document.querySelectorAll('.nuda-cur2-paint-trail').forEach(function (area) {
    area.addEventListener('mousemove', function (e) {
      var rect = area.getBoundingClientRect();
      area.style.setProperty('--x', (e.clientX - rect.left) + 'px');
      area.style.setProperty('--y', (e.clientY - rect.top) + 'px');
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Ripple Click Spark ─────────────── */
  {
    id: "cur2-ripple-spark",
    name: "Ripple Click Spark",
    category: CAT,
    preview: (
      <button
        type="button"
        className="nuda-cur2-ripple-spark"
        onClick={(e) => {
          const btn = e.currentTarget;
          const rect = btn.getBoundingClientRect();
          const ring = document.createElement("span");
          ring.className = "nuda-cur2-ripple-spark__ring";
          ring.style.left = `${e.clientX - rect.left}px`;
          ring.style.top = `${e.clientY - rect.top}px`;
          btn.appendChild(ring);
          ring.addEventListener("animationend", () => ring.remove());
        }}
      >
        <span className="nuda-cur2-ripple-spark__label">Click me</span>
      </button>
    ),
    cssInline: `
      .nuda-cur2-ripple-spark{position:relative;overflow:hidden;min-width:120px;min-height:44px;padding:0 20px;border-radius:10px;border:1px solid rgba(228,255,84,.3);background:#161616;color:#fafafa;font-size:13px;font-weight:600;cursor:pointer;isolation:isolate}
      .nuda-cur2-ripple-spark__label{position:relative;z-index:1}
      .nuda-cur2-ripple-spark__ring{position:absolute;width:8px;height:8px;border-radius:50%;background:radial-gradient(circle,rgba(228,255,84,.9),rgba(228,255,84,0) 70%);transform:translate(-50%,-50%) scale(1);pointer-events:none;animation:_nuda-cur2ripplespark .6s ease-out forwards}
      @keyframes _nuda-cur2ripplespark{to{transform:translate(-50%,-50%) scale(14);opacity:0}}
      .nuda-cur2-ripple-spark:focus-visible{outline:2px solid #e4ff54;outline-offset:3px}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-ripple-spark__ring{animation:none;display:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button type="button" class="nuda-cur2-ripple-spark">
  <span class="nuda-cur2-ripple-spark__label">Click me</span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Ripple Click Spark — spawns a fading ring at the click point. */
(function () {
  document.querySelectorAll('.nuda-cur2-ripple-spark').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var rect = btn.getBoundingClientRect();
      var ring = document.createElement('span');
      ring.className = 'nuda-cur2-ripple-spark__ring';
      ring.style.left = (e.clientX - rect.left) + 'px';
      ring.style.top = (e.clientY - rect.top) + 'px';
      btn.appendChild(ring);
      ring.addEventListener('animationend', function () {
        ring.remove();
      });
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Comet Tail ─────────────── */
  {
    id: "cur2-comet-tail",
    name: "Comet Tail",
    category: CAT,
    preview: (
      <div
        className="nuda-cur2-comet-tail"
        onMouseMove={(e) => {
          const area = e.currentTarget;
          const rect = area.getBoundingClientRect();
          area.style.setProperty("--x", `${e.clientX - rect.left}px`);
          area.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }}
      >
        <span className="nuda-cur2-comet-tail__glow" />
        <span className="nuda-cur2-comet-tail__head" />
        <span className="nuda-cur2-comet-tail__label">Move your cursor</span>
      </div>
    ),
    cssInline: `
      .nuda-cur2-comet-tail{--x:110px;--y:60px;position:relative;width:100%;max-width:220px;height:120px;margin:0 auto;border-radius:12px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);overflow:hidden}
      .nuda-cur2-comet-tail__glow{position:absolute;top:0;left:0;width:36px;height:36px;border-radius:50%;background:radial-gradient(circle,rgba(228,255,84,.35),transparent 70%);filter:blur(4px);transform:translate(var(--x),var(--y)) translate(-50%,-50%);transition:transform .9s cubic-bezier(.16,1,.3,1);pointer-events:none}
      .nuda-cur2-comet-tail__head{position:absolute;top:0;left:0;width:10px;height:10px;border-radius:50%;background:#e4ff54;box-shadow:0 0 10px 2px rgba(228,255,84,.7);transform:translate(var(--x),var(--y)) translate(-50%,-50%);transition:transform .35s cubic-bezier(.16,1,.3,1);pointer-events:none}
      .nuda-cur2-comet-tail__label{position:absolute;bottom:8px;left:0;right:0;text-align:center;color:#777;font-size:11px;pointer-events:none}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-comet-tail__glow,.nuda-cur2-comet-tail__head{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cur2-comet-tail">
  <span class="nuda-cur2-comet-tail__glow"></span>
  <span class="nuda-cur2-comet-tail__head"></span>
  <span class="nuda-cur2-comet-tail__label">Move your cursor</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Comet Tail — head and glow ease toward the pointer at different
   speeds, giving the head a soft trailing tail. */
(function () {
  document.querySelectorAll('.nuda-cur2-comet-tail').forEach(function (area) {
    area.addEventListener('mousemove', function (e) {
      var rect = area.getBoundingClientRect();
      area.style.setProperty('--x', (e.clientX - rect.left) + 'px');
      area.style.setProperty('--y', (e.clientY - rect.top) + 'px');
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── View Bubble ─────────────── */
  {
    id: "cur2-view-bubble",
    name: "View Bubble",
    category: CAT,
    preview: (
      <div
        className="nuda-cur2-view-bubble"
        onMouseMove={(e) => {
          const area = e.currentTarget;
          const rect = area.getBoundingClientRect();
          area.style.setProperty("--x", `${e.clientX - rect.left}px`);
          area.style.setProperty("--y", `${e.clientY - rect.top}px`);
        }}
      >
        <span className="nuda-cur2-view-bubble__caption">Hover to preview</span>
        <span className="nuda-cur2-view-bubble__bubble">
          <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          View
        </span>
      </div>
    ),
    cssInline: `
      .nuda-cur2-view-bubble{--x:50%;--y:50%;position:relative;width:100%;max-width:220px;height:120px;margin:0 auto;border-radius:12px;overflow:hidden;background:linear-gradient(135deg,#1a1a1a,#101010);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;cursor:none}
      .nuda-cur2-view-bubble__caption{color:#777;font-size:12px}
      .nuda-cur2-view-bubble__bubble{position:absolute;top:0;left:0;display:flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;background:#e4ff54;color:#0a0a0a;font-size:11px;font-weight:700;opacity:0;transform:translate(var(--x),var(--y)) translate(-50%,-50%);transition:opacity .2s ease,transform .12s linear;pointer-events:none;white-space:nowrap}
      .nuda-cur2-view-bubble:hover .nuda-cur2-view-bubble__bubble{opacity:1}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-view-bubble__bubble{transition:opacity .2s ease}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cur2-view-bubble">
  <span class="nuda-cur2-view-bubble__caption">Hover to preview</span>
  <span class="nuda-cur2-view-bubble__bubble">
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
    View
  </span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* View Bubble — a small pill label tracks the pointer inside the area. */
(function () {
  document.querySelectorAll('.nuda-cur2-view-bubble').forEach(function (area) {
    area.addEventListener('mousemove', function (e) {
      var rect = area.getBoundingClientRect();
      area.style.setProperty('--x', (e.clientX - rect.left) + 'px');
      area.style.setProperty('--y', (e.clientY - rect.top) + 'px');
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Elastic Band Follower ─────────────── */
  {
    id: "cur2-elastic-band",
    name: "Elastic Band Follower",
    category: CAT,
    preview: (
      <div
        className="nuda-cur2-elastic-band"
        onMouseMove={(e) => {
          const area = e.currentTarget;
          const rect = area.getBoundingClientRect();
          const dx = e.clientX - rect.left - rect.width / 2;
          const dy = e.clientY - rect.top - rect.height / 2;
          const dist = Math.hypot(dx, dy);
          const angle = (Math.atan2(dy, dx) * 180) / Math.PI;
          area.style.setProperty("--dx", `${dx}px`);
          area.style.setProperty("--dy", `${dy}px`);
          area.style.setProperty("--dist", `${dist.toFixed(1)}`);
          area.style.setProperty("--angle", `${angle.toFixed(1)}deg`);
        }}
        onMouseLeave={(e) => {
          const area = e.currentTarget;
          area.style.setProperty("--dx", "0px");
          area.style.setProperty("--dy", "0px");
          area.style.setProperty("--dist", "0");
        }}
      >
        <span className="nuda-cur2-elastic-band__anchor" aria-hidden="true" />
        <span className="nuda-cur2-elastic-band__band" aria-hidden="true" />
        <span className="nuda-cur2-elastic-band__dot" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-cur2-elastic-band{--dx:0px;--dy:0px;--dist:0;--angle:0deg;position:relative;width:100%;max-width:220px;height:120px;margin:0 auto;border-radius:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);overflow:hidden;cursor:none}
      .nuda-cur2-elastic-band__anchor{position:absolute;top:50%;left:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#63636e}
      .nuda-cur2-elastic-band__band{position:absolute;top:50%;left:50%;width:1px;height:2px;background:#e4ff54;transform-origin:left center;transform:rotate(var(--angle)) scaleX(var(--dist));opacity:.7;transition:transform .35s cubic-bezier(.34,1.56,.64,1),opacity .2s ease}
      .nuda-cur2-elastic-band__dot{position:absolute;top:50%;left:50%;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:#e4ff54;box-shadow:0 0 10px rgba(228,255,84,.6);transform:translate(var(--dx),var(--dy));transition:transform .35s cubic-bezier(.34,1.56,.64,1)}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-elastic-band__band,.nuda-cur2-elastic-band__dot{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cur2-elastic-band">
  <span class="nuda-cur2-elastic-band__anchor" aria-hidden="true"></span>
  <span class="nuda-cur2-elastic-band__band" aria-hidden="true"></span>
  <span class="nuda-cur2-elastic-band__dot" aria-hidden="true"></span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Elastic Band Follower — a dot tracks the pointer while a stretchy
   band connects it back to the fixed anchor at the center. */
(function () {
  document.querySelectorAll('.nuda-cur2-elastic-band').forEach(function (area) {
    area.addEventListener('mousemove', function (e) {
      var rect = area.getBoundingClientRect();
      var dx = e.clientX - rect.left - rect.width / 2;
      var dy = e.clientY - rect.top - rect.height / 2;
      var dist = Math.hypot(dx, dy);
      var angle = (Math.atan2(dy, dx) * 180) / Math.PI;
      area.style.setProperty('--dx', dx + 'px');
      area.style.setProperty('--dy', dy + 'px');
      area.style.setProperty('--dist', dist.toFixed(1));
      area.style.setProperty('--angle', angle.toFixed(1) + 'deg');
    });

    area.addEventListener('mouseleave', function () {
      area.style.setProperty('--dx', '0px');
      area.style.setProperty('--dy', '0px');
      area.style.setProperty('--dist', '0');
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── Pointer Parallax Layers ─────────────── */
  {
    id: "cur2-parallax-layers",
    name: "Pointer Parallax Layers",
    category: CAT,
    preview: (
      <div
        className="nuda-cur2-parallax-layers"
        onMouseMove={(e) => {
          const area = e.currentTarget;
          const rect = area.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          area.style.setProperty("--px", `${px.toFixed(3)}`);
          area.style.setProperty("--py", `${py.toFixed(3)}`);
        }}
        onMouseLeave={(e) => {
          const area = e.currentTarget;
          area.style.setProperty("--px", "0");
          area.style.setProperty("--py", "0");
        }}
      >
        <span className="nuda-cur2-parallax-layers__layer nuda-cur2-parallax-layers__layer--back" aria-hidden="true" />
        <span className="nuda-cur2-parallax-layers__layer nuda-cur2-parallax-layers__layer--mid" aria-hidden="true" />
        <span className="nuda-cur2-parallax-layers__layer nuda-cur2-parallax-layers__layer--front">Parallax</span>
      </div>
    ),
    cssInline: `
      .nuda-cur2-parallax-layers{--px:0;--py:0;position:relative;width:100%;max-width:220px;height:120px;margin:0 auto;border-radius:12px;overflow:hidden;background:radial-gradient(120% 100% at 50% 0%,#1a1a1a,#0a0a0a);border:1px solid rgba(255,255,255,.08)}
      .nuda-cur2-parallax-layers__layer{position:absolute;top:50%;left:50%;transition:transform .18s ease-out;will-change:transform;pointer-events:none}
      .nuda-cur2-parallax-layers__layer--back{--depth:10px;width:90px;height:90px;border-radius:50%;background:radial-gradient(circle,rgba(228,255,84,.18),transparent 70%);transform:translate(-50%,-50%) translate(calc(var(--px) * var(--depth)),calc(var(--py) * var(--depth)))}
      .nuda-cur2-parallax-layers__layer--mid{--depth:22px;width:46px;height:46px;border-radius:50%;border:1px solid rgba(228,255,84,.4);transform:translate(-50%,-50%) translate(calc(var(--px) * var(--depth)),calc(var(--py) * var(--depth)))}
      .nuda-cur2-parallax-layers__layer--front{--depth:40px;padding:5px 12px;border-radius:999px;background:#e4ff54;color:#0a0a0a;font-size:11px;font-weight:700;white-space:nowrap;transform:translate(-50%,-50%) translate(calc(var(--px) * var(--depth)),calc(var(--py) * var(--depth)))}
      @media(prefers-reduced-motion:reduce){.nuda-cur2-parallax-layers__layer{transition:none;transform:translate(-50%,-50%)!important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cur2-parallax-layers">
  <span class="nuda-cur2-parallax-layers__layer nuda-cur2-parallax-layers__layer--back" aria-hidden="true"></span>
  <span class="nuda-cur2-parallax-layers__layer nuda-cur2-parallax-layers__layer--mid" aria-hidden="true"></span>
  <span class="nuda-cur2-parallax-layers__layer nuda-cur2-parallax-layers__layer--front">Parallax</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Pointer Parallax Layers — each layer shifts by its own --depth,
   multiplied by the pointer's normalized position (-0.5..0.5). */
(function () {
  document.querySelectorAll('.nuda-cur2-parallax-layers').forEach(function (area) {
    area.addEventListener('mousemove', function (e) {
      var rect = area.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width - 0.5;
      var py = (e.clientY - rect.top) / rect.height - 0.5;
      area.style.setProperty('--px', px.toFixed(3));
      area.style.setProperty('--py', py.toFixed(3));
    });

    area.addEventListener('mouseleave', function () {
      area.style.setProperty('--px', '0');
      area.style.setProperty('--py', '0');
    });
  });
})();`,
      },
    ],
  },
];
