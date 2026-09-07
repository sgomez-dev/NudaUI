import type { NudaComponent } from "./types";

const CAT = "Drag & Drop";

export const dragDropExtra: NudaComponent[] = [
  /* ─────────────── 1. Kanban Column Lift ─────────────── */
  {
    id: "dd2-kanban-lift",
    name: "Kanban Column Lift",
    category: CAT,
    preview: (
      <div className="nuda-dd2-kanban-lift" role="listbox" aria-label="To Do column" aria-describedby="dd2-kanban-lift-desc">
        <p id="dd2-kanban-lift-desc" className="nuda-dd2-kanban-lift__sr">Reorder with Alt plus Arrow Up or Arrow Down.</p>
        <span className="nuda-dd2-kanban-lift__title">To Do</span>
        <div className="nuda-dd2-kanban-lift__list">
          <div className="nuda-dd2-kanban-lift__card" role="option" aria-selected="false">Design review</div>
          <div className="nuda-dd2-kanban-lift__card nuda-dd2-kanban-lift__card--gap" role="option" aria-selected="false">Write copy</div>
          <div className="nuda-dd2-kanban-lift__card nuda-dd2-kanban-lift__card--drag" role="option" aria-selected="true" tabIndex={0}>Ship v2</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dd2-kanban-lift{width:150px;padding:10px;display:flex;flex-direction:column;gap:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:12px}
      .nuda-dd2-kanban-lift__sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .nuda-dd2-kanban-lift__title{font:700 10px ui-sans-serif,system-ui;color:#777;text-transform:uppercase;letter-spacing:.07em}
      .nuda-dd2-kanban-lift__list{display:flex;flex-direction:column;gap:6px}
      .nuda-dd2-kanban-lift__card{padding:9px 10px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:8px;font:500 11px ui-sans-serif,system-ui;color:#cfcfcf;cursor:grab}
      .nuda-dd2-kanban-lift__card:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dd2-kanban-lift__card--gap{animation:nuda-dd2-kanban-lift-gap 2.8s ease-in-out infinite}
      .nuda-dd2-kanban-lift__card--drag{position:relative;z-index:2;color:#fafafa;border-color:rgba(228,255,84,.5);animation:nuda-dd2-kanban-lift-drag 2.8s ease-in-out infinite}
      @keyframes nuda-dd2-kanban-lift-drag{0%,14%,100%{transform:translateY(0) scale(1);box-shadow:0 0 0 rgba(0,0,0,0)}40%,74%{transform:translateY(-16px) scale(1.04);box-shadow:0 14px 28px -10px rgba(0,0,0,.55),0 0 0 1.5px #e4ff54}}
      @keyframes nuda-dd2-kanban-lift-gap{0%,14%,100%{transform:translateY(0)}40%,74%{transform:translateY(16px)}}
      @media (prefers-reduced-motion:reduce){.nuda-dd2-kanban-lift__card--gap,.nuda-dd2-kanban-lift__card--drag{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Kanban Column Lift — set .nuda-dd2-kanban-lift__card--drag on the
     grabbed card and .nuda-dd2-kanban-lift__card--gap on the sibling the
     gap opens under. Keyboard: focus a card, Alt+ArrowUp/ArrowDown reorders. -->
<div class="nuda-dd2-kanban-lift" role="listbox" aria-label="To Do column" aria-describedby="dd2-kanban-lift-desc">
  <p id="dd2-kanban-lift-desc" class="nuda-dd2-kanban-lift__sr">Reorder with Alt plus Arrow Up or Arrow Down.</p>
  <span class="nuda-dd2-kanban-lift__title">To Do</span>
  <div class="nuda-dd2-kanban-lift__list">
    <div class="nuda-dd2-kanban-lift__card" role="option" aria-selected="false">Design review</div>
    <div class="nuda-dd2-kanban-lift__card nuda-dd2-kanban-lift__card--gap" role="option" aria-selected="false">Write copy</div>
    <div class="nuda-dd2-kanban-lift__card nuda-dd2-kanban-lift__card--drag" role="option" aria-selected="true" tabindex="0">Ship v2</div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Swap-on-Drop Tiles ─────────────── */
  {
    id: "dd2-swap-tiles",
    name: "Swap-on-Drop Tiles",
    category: CAT,
    preview: (
      <div className="nuda-dd2-swap-tiles" role="group" aria-label="Swap tiles by dragging" aria-describedby="dd2-swap-tiles-desc">
        <p id="dd2-swap-tiles-desc" className="nuda-dd2-swap-tiles__sr">Drag a tile onto another to swap places. With focus, press Alt plus Arrow Left or Arrow Right.</p>
        <div className="nuda-dd2-swap-tiles__tile nuda-dd2-swap-tiles__tile--a" role="option" aria-selected="true" tabIndex={0}>A</div>
        <div className="nuda-dd2-swap-tiles__tile nuda-dd2-swap-tiles__tile--b" role="option" aria-selected="false" tabIndex={0}>B</div>
      </div>
    ),
    cssInline: `
      .nuda-dd2-swap-tiles{position:relative;width:160px;height:70px}
      .nuda-dd2-swap-tiles__sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .nuda-dd2-swap-tiles__tile{position:absolute;top:9px;width:52px;height:52px;display:flex;align-items:center;justify-content:center;border-radius:12px;font:800 16px ui-sans-serif,system-ui;cursor:grab}
      .nuda-dd2-swap-tiles__tile:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dd2-swap-tiles__tile--a{left:24px;background:rgba(228,255,84,.12);border:1.5px solid #e4ff54;color:#e4ff54;animation:nuda-dd2-swap-tiles-a 3s cubic-bezier(.4,0,.2,1) infinite}
      .nuda-dd2-swap-tiles__tile--b{right:24px;background:#161616;border:1.5px solid rgba(255,255,255,.12);color:#cfcfcf;animation:nuda-dd2-swap-tiles-b 3s cubic-bezier(.4,0,.2,1) infinite}
      @keyframes nuda-dd2-swap-tiles-a{0%,10%,90%,100%{transform:translateX(0) scale(1);box-shadow:none}50%{transform:translateX(64px) scale(1.08);box-shadow:0 10px 22px -8px rgba(228,255,84,.5)}}
      @keyframes nuda-dd2-swap-tiles-b{0%,10%,90%,100%{transform:translateX(0) scale(1)}50%{transform:translateX(-64px) scale(.96)}}
      @media (prefers-reduced-motion:reduce){.nuda-dd2-swap-tiles__tile--a,.nuda-dd2-swap-tiles__tile--b{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Swap-on-Drop Tiles — dropping tile A onto tile B swaps their DOM order.
     Keyboard: focus a tile, Alt+ArrowLeft/ArrowRight swaps with the neighbor. -->
<div class="nuda-dd2-swap-tiles" role="group" aria-label="Swap tiles by dragging" aria-describedby="dd2-swap-tiles-desc">
  <p id="dd2-swap-tiles-desc" class="nuda-dd2-swap-tiles__sr">Drag a tile onto another to swap places. With focus, press Alt plus Arrow Left or Arrow Right.</p>
  <div class="nuda-dd2-swap-tiles__tile nuda-dd2-swap-tiles__tile--a" role="option" aria-selected="true" tabindex="0">A</div>
  <div class="nuda-dd2-swap-tiles__tile nuda-dd2-swap-tiles__tile--b" role="option" aria-selected="false" tabindex="0">B</div>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Grip Handle Lift ─────────────── */
  {
    id: "dd2-grip-handle",
    name: "Grip Handle Lift",
    category: CAT,
    preview: (
      <div className="nuda-dd2-grip-handle" role="listbox" aria-label="Task list" aria-describedby="dd2-grip-handle-desc">
        <p id="dd2-grip-handle-desc" className="nuda-dd2-grip-handle__sr">Grab the handle and press Alt plus Arrow Up or Arrow Down to reorder.</p>
        <div className="nuda-dd2-grip-handle__row" role="option" aria-selected="false">
          <span className="nuda-dd2-grip-handle__grip" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
          <span className="nuda-dd2-grip-handle__label">Write brief</span>
        </div>
        <div className="nuda-dd2-grip-handle__row nuda-dd2-grip-handle__row--gap" role="option" aria-selected="false">
          <span className="nuda-dd2-grip-handle__grip" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
          <span className="nuda-dd2-grip-handle__label">Review deck</span>
        </div>
        <div className="nuda-dd2-grip-handle__row nuda-dd2-grip-handle__row--drag" role="option" aria-selected="true" tabIndex={0}>
          <span className="nuda-dd2-grip-handle__grip" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
          <span className="nuda-dd2-grip-handle__label">Ship release</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dd2-grip-handle{width:170px;display:flex;flex-direction:column;gap:6px}
      .nuda-dd2-grip-handle__sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .nuda-dd2-grip-handle__row{display:flex;align-items:center;gap:8px;padding:7px 10px;background:#161616;border:1px solid rgba(255,255,255,.08);border-radius:8px}
      .nuda-dd2-grip-handle__row:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dd2-grip-handle__grip{display:grid;grid-template-columns:repeat(2,3px);grid-auto-rows:3px;gap:2px}
      .nuda-dd2-grip-handle__grip i{width:3px;height:3px;border-radius:50%;background:#63636e;display:block}
      .nuda-dd2-grip-handle__label{font:500 11px ui-sans-serif,system-ui;color:#cfcfcf}
      .nuda-dd2-grip-handle__row--gap{animation:nuda-dd2-grip-handle-gap 2.6s ease-in-out infinite}
      .nuda-dd2-grip-handle__row--drag{position:relative;z-index:2;border-color:#e4ff54;animation:nuda-dd2-grip-handle-drag 2.6s ease-in-out infinite}
      .nuda-dd2-grip-handle__row--drag .nuda-dd2-grip-handle__grip i{background:#e4ff54;animation:nuda-dd2-grip-handle-dot 2.6s ease-in-out infinite}
      .nuda-dd2-grip-handle__row--drag .nuda-dd2-grip-handle__label{color:#fafafa}
      @keyframes nuda-dd2-grip-handle-drag{0%,14%,100%{transform:translateY(0);box-shadow:none}40%,74%{transform:translateY(-10px);box-shadow:0 10px 22px -8px rgba(0,0,0,.5),0 0 0 1.5px rgba(228,255,84,.5)}}
      @keyframes nuda-dd2-grip-handle-gap{0%,14%,100%{transform:translateY(0)}40%,74%{transform:translateY(10px)}}
      @keyframes nuda-dd2-grip-handle-dot{0%,14%,100%{opacity:1}40%,74%{opacity:.6}}
      @media (prefers-reduced-motion:reduce){.nuda-dd2-grip-handle__row--gap,.nuda-dd2-grip-handle__row--drag,.nuda-dd2-grip-handle__row--drag .nuda-dd2-grip-handle__grip i{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Grip Handle Lift — set .nuda-dd2-grip-handle__row--drag on the row
     being dragged, .nuda-dd2-grip-handle__row--gap on the row that yields
     space. Keyboard: focus a row, Alt+ArrowUp/ArrowDown reorders. -->
<div class="nuda-dd2-grip-handle" role="listbox" aria-label="Task list" aria-describedby="dd2-grip-handle-desc">
  <p id="dd2-grip-handle-desc" class="nuda-dd2-grip-handle__sr">Grab the handle and press Alt plus Arrow Up or Arrow Down to reorder.</p>
  <div class="nuda-dd2-grip-handle__row" role="option" aria-selected="false">
    <span class="nuda-dd2-grip-handle__grip" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
    <span class="nuda-dd2-grip-handle__label">Write brief</span>
  </div>
  <div class="nuda-dd2-grip-handle__row nuda-dd2-grip-handle__row--gap" role="option" aria-selected="false">
    <span class="nuda-dd2-grip-handle__grip" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
    <span class="nuda-dd2-grip-handle__label">Review deck</span>
  </div>
  <div class="nuda-dd2-grip-handle__row nuda-dd2-grip-handle__row--drag" role="option" aria-selected="true" tabindex="0">
    <span class="nuda-dd2-grip-handle__grip" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i></span>
    <span class="nuda-dd2-grip-handle__label">Ship release</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Nested Indent Guide ─────────────── */
  {
    id: "dd2-indent-guide",
    name: "Nested Indent Guide",
    category: CAT,
    preview: (
      <div className="nuda-dd2-indent-guide">
        <p id="dd2-indent-guide-desc" className="nuda-dd2-indent-guide__sr">Press Alt plus Arrow Right to nest this item under the one above it, or Alt plus Arrow Left to un-nest.</p>
        <ul className="nuda-dd2-indent-guide__list" role="listbox" aria-label="Outline" aria-describedby="dd2-indent-guide-desc">
          <li className="nuda-dd2-indent-guide__item" role="option" aria-selected="false">Project brief</li>
          <li className="nuda-dd2-indent-guide__item nuda-dd2-indent-guide__item--nest" role="option" aria-selected="true" tabIndex={0}>
            <span className="nuda-dd2-indent-guide__rail" aria-hidden="true"></span>
            Research notes
          </li>
          <li className="nuda-dd2-indent-guide__item" role="option" aria-selected="false">Wireframes</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-dd2-indent-guide{width:170px}
      .nuda-dd2-indent-guide__sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .nuda-dd2-indent-guide__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:5px}
      .nuda-dd2-indent-guide__item{position:relative;padding:7px 10px;background:#161616;border:1px solid rgba(255,255,255,.08);border-radius:7px;font:500 11px ui-sans-serif,system-ui;color:#cfcfcf}
      .nuda-dd2-indent-guide__item:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dd2-indent-guide__item--nest{color:#fafafa;border-color:rgba(228,255,84,.4);animation:nuda-dd2-indent-guide-nest 3s ease-in-out infinite}
      .nuda-dd2-indent-guide__rail{position:absolute;left:-1px;top:-7px;bottom:-1px;width:2px;background:#e4ff54;border-radius:2px;opacity:0;animation:nuda-dd2-indent-guide-rail 3s ease-in-out infinite}
      @keyframes nuda-dd2-indent-guide-nest{0%,16%,100%{transform:translateX(0)}45%,75%{transform:translateX(16px)}}
      @keyframes nuda-dd2-indent-guide-rail{0%,16%,100%{opacity:0}45%,75%{opacity:1}}
      @media (prefers-reduced-motion:reduce){.nuda-dd2-indent-guide__item--nest,.nuda-dd2-indent-guide__rail{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Nested Indent Guide — add .nuda-dd2-indent-guide__item--nest while an
     item is dragged rightward to become a child; the rail marks its new
     parent. Keyboard: focus an item, Alt+ArrowRight nests, Alt+ArrowLeft un-nests. -->
<div class="nuda-dd2-indent-guide">
  <p id="dd2-indent-guide-desc" class="nuda-dd2-indent-guide__sr">Press Alt plus Arrow Right to nest this item under the one above it, or Alt plus Arrow Left to un-nest.</p>
  <ul class="nuda-dd2-indent-guide__list" role="listbox" aria-label="Outline" aria-describedby="dd2-indent-guide-desc">
    <li class="nuda-dd2-indent-guide__item" role="option" aria-selected="false">Project brief</li>
    <li class="nuda-dd2-indent-guide__item nuda-dd2-indent-guide__item--nest" role="option" aria-selected="true" tabindex="0">
      <span class="nuda-dd2-indent-guide__rail" aria-hidden="true"></span>
      Research notes
    </li>
    <li class="nuda-dd2-indent-guide__item" role="option" aria-selected="false">Wireframes</li>
  </ul>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Cross-Container Transfer ─────────────── */
  {
    id: "dd2-cross-transfer",
    name: "Cross-Container Transfer",
    category: CAT,
    preview: (
      <div className="nuda-dd2-cross-transfer">
        <p id="dd2-cross-transfer-desc" className="nuda-dd2-cross-transfer__sr">Drag a card to another column, or focus it and press Alt plus Arrow Right to move it forward a column.</p>
        <div className="nuda-dd2-cross-transfer__board" role="group" aria-label="Task board" aria-describedby="dd2-cross-transfer-desc">
          <div className="nuda-dd2-cross-transfer__col">
            <span className="nuda-dd2-cross-transfer__colname">Backlog</span>
            <div className="nuda-dd2-cross-transfer__slot"></div>
          </div>
          <div className="nuda-dd2-cross-transfer__col">
            <span className="nuda-dd2-cross-transfer__colname">In Progress</span>
            <div className="nuda-dd2-cross-transfer__slot nuda-dd2-cross-transfer__slot--ghost" aria-hidden="true"></div>
          </div>
          <div className="nuda-dd2-cross-transfer__card" role="option" aria-selected="true" tabIndex={0}>Bug fix</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dd2-cross-transfer{width:220px}
      .nuda-dd2-cross-transfer__sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .nuda-dd2-cross-transfer__board{position:relative;display:flex;gap:8px}
      .nuda-dd2-cross-transfer__col{flex:1;display:flex;flex-direction:column;gap:6px;padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:9px;min-height:70px}
      .nuda-dd2-cross-transfer__colname{font:700 9px ui-sans-serif,system-ui;color:#777;text-transform:uppercase;letter-spacing:.06em}
      .nuda-dd2-cross-transfer__slot{height:30px;border-radius:6px}
      .nuda-dd2-cross-transfer__slot--ghost{border:1.5px dashed rgba(228,255,84,.35);background:rgba(228,255,84,.05);animation:nuda-dd2-cross-transfer-ghost 3.2s ease-in-out infinite}
      .nuda-dd2-cross-transfer__card{position:absolute;top:26px;left:8px;width:88px;padding:7px 10px;background:#161616;border:1.5px solid #e4ff54;border-radius:8px;font:600 11px ui-sans-serif,system-ui;color:#fafafa;box-shadow:0 10px 24px -8px rgba(228,255,84,.35);animation:nuda-dd2-cross-transfer-fly 3.2s cubic-bezier(.4,0,.2,1) infinite}
      .nuda-dd2-cross-transfer__card:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-dd2-cross-transfer-fly{0%,12%,100%{transform:translate(0,0) rotate(0deg)}50%{transform:translate(108px,-10px) rotate(-3deg)}80%,92%{transform:translate(108px,0) rotate(0deg)}}
      @keyframes nuda-dd2-cross-transfer-ghost{0%,45%,100%{opacity:.3}70%,92%{opacity:.9}}
      @media (prefers-reduced-motion:reduce){.nuda-dd2-cross-transfer__card,.nuda-dd2-cross-transfer__slot--ghost{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Cross-Container Transfer — the ghost slot marks the drop target in
     the destination column while the card visually flies over. Keyboard:
     focus the card, Alt+ArrowRight/ArrowLeft moves it between columns. -->
<div class="nuda-dd2-cross-transfer">
  <p id="dd2-cross-transfer-desc" class="nuda-dd2-cross-transfer__sr">Drag a card to another column, or focus it and press Alt plus Arrow Right to move it forward a column.</p>
  <div class="nuda-dd2-cross-transfer__board" role="group" aria-label="Task board" aria-describedby="dd2-cross-transfer-desc">
    <div class="nuda-dd2-cross-transfer__col">
      <span class="nuda-dd2-cross-transfer__colname">Backlog</span>
      <div class="nuda-dd2-cross-transfer__slot"></div>
    </div>
    <div class="nuda-dd2-cross-transfer__col">
      <span class="nuda-dd2-cross-transfer__colname">In Progress</span>
      <div class="nuda-dd2-cross-transfer__slot nuda-dd2-cross-transfer__slot--ghost" aria-hidden="true"></div>
    </div>
    <div class="nuda-dd2-cross-transfer__card" role="option" aria-selected="true" tabindex="0">Bug fix</div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Drag-to-Resize Split Pane ─────────────── */
  {
    id: "dd2-split-resize",
    name: "Drag-to-Resize Split Pane",
    category: CAT,
    preview: (
      <div className="nuda-dd2-split-resize" role="group" aria-label="Resizable panes" aria-describedby="dd2-split-resize-desc">
        <p id="dd2-split-resize-desc" className="nuda-dd2-split-resize__sr">Drag the divider to resize the panes, or focus it and press Alt plus Arrow Left or Arrow Right.</p>
        <div className="nuda-dd2-split-resize__pane nuda-dd2-split-resize__pane--a">
          <span>Files</span>
        </div>
        <div className="nuda-dd2-split-resize__divider" role="separator" aria-orientation="vertical" aria-valuenow={40} aria-valuemin={20} aria-valuemax={80} tabIndex={0}>
          <span className="nuda-dd2-split-resize__grip" aria-hidden="true"></span>
        </div>
        <div className="nuda-dd2-split-resize__pane nuda-dd2-split-resize__pane--b">
          <span>Preview</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dd2-split-resize{width:220px;height:100px;display:flex;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden}
      .nuda-dd2-split-resize__sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .nuda-dd2-split-resize__pane{flex:1;display:flex;align-items:center;justify-content:center;background:#141414;font:600 10px ui-sans-serif,system-ui;color:#777;position:relative}
      .nuda-dd2-split-resize__pane--a{flex:0 0 42%;background:#161616}
      .nuda-dd2-split-resize__pane--a::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(228,255,84,.08));transform:scaleX(1);transform-origin:right;animation:nuda-dd2-split-resize-sweep 3s ease-in-out infinite}
      .nuda-dd2-split-resize__pane--b{color:#63636e}
      .nuda-dd2-split-resize__divider{width:10px;flex-shrink:0;background:rgba(255,255,255,.04);border-left:1px solid rgba(255,255,255,.08);border-right:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;cursor:col-resize}
      .nuda-dd2-split-resize__divider:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dd2-split-resize__grip{width:3px;height:20px;border-radius:2px;background:#e4ff54;animation:nuda-dd2-split-resize-grip 3s ease-in-out infinite}
      @keyframes nuda-dd2-split-resize-grip{0%,100%{transform:translateX(0);box-shadow:0 0 0 rgba(228,255,84,0)}50%{transform:translateX(3px);box-shadow:0 0 10px 2px rgba(228,255,84,.5)}}
      @keyframes nuda-dd2-split-resize-sweep{0%,100%{transform:scaleX(.85)}50%{transform:scaleX(1.1)}}
      @media (prefers-reduced-motion:reduce){.nuda-dd2-split-resize__grip,.nuda-dd2-split-resize__pane--a::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Drag-to-Resize Split Pane — update aria-valuenow on the separator as
     the divider moves. Keyboard: focus the divider, Alt+ArrowLeft/ArrowRight
     resizes the panes. -->
<div class="nuda-dd2-split-resize" role="group" aria-label="Resizable panes" aria-describedby="dd2-split-resize-desc">
  <p id="dd2-split-resize-desc" class="nuda-dd2-split-resize__sr">Drag the divider to resize the panes, or focus it and press Alt plus Arrow Left or Arrow Right.</p>
  <div class="nuda-dd2-split-resize__pane nuda-dd2-split-resize__pane--a">
    <span>Files</span>
  </div>
  <div class="nuda-dd2-split-resize__divider" role="separator" aria-orientation="vertical" aria-valuenow="40" aria-valuemin="20" aria-valuemax="80" tabindex="0">
    <span class="nuda-dd2-split-resize__grip" aria-hidden="true"></span>
  </div>
  <div class="nuda-dd2-split-resize__pane nuda-dd2-split-resize__pane--b">
    <span>Preview</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Drag-to-Reorder Rows ─────────────── */
  {
    id: "dd2-table-rows",
    name: "Drag-to-Reorder Rows",
    category: CAT,
    preview: (
      <div className="nuda-dd2-table-rows" role="table" aria-label="Reorderable invoices" aria-describedby="dd2-table-rows-desc">
        <p id="dd2-table-rows-desc" className="nuda-dd2-table-rows__sr">Grab a row's handle and press Alt plus Arrow Up or Arrow Down to reorder.</p>
        <div className="nuda-dd2-table-rows__row" role="row">
          <span className="nuda-dd2-table-rows__handle" aria-hidden="true">⋮⋮</span>
          <span className="nuda-dd2-table-rows__cell" role="cell">Invoice #221</span>
        </div>
        <div className="nuda-dd2-table-rows__row nuda-dd2-table-rows__row--gap" role="row">
          <span className="nuda-dd2-table-rows__handle" aria-hidden="true">⋮⋮</span>
          <span className="nuda-dd2-table-rows__cell" role="cell">Invoice #222</span>
        </div>
        <div className="nuda-dd2-table-rows__row nuda-dd2-table-rows__row--drag" role="row" tabIndex={0}>
          <span className="nuda-dd2-table-rows__handle" aria-hidden="true">⋮⋮</span>
          <span className="nuda-dd2-table-rows__cell" role="cell">Invoice #223</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dd2-table-rows{width:180px;display:flex;flex-direction:column;gap:5px}
      .nuda-dd2-table-rows__sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .nuda-dd2-table-rows__row{display:flex;align-items:center;gap:8px;padding:7px 10px;background:#141414;border-bottom:1px solid rgba(255,255,255,.06)}
      .nuda-dd2-table-rows__row:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dd2-table-rows__handle{color:#63636e;font:700 9px ui-sans-serif,system-ui;letter-spacing:-1px}
      .nuda-dd2-table-rows__cell{font:500 11px ui-sans-serif,system-ui;color:#cfcfcf}
      .nuda-dd2-table-rows__row--gap{animation:nuda-dd2-table-rows-gap 2.7s ease-in-out infinite}
      .nuda-dd2-table-rows__row--drag{position:relative;z-index:2;background:#1c1c1c;border-bottom-color:transparent;animation:nuda-dd2-table-rows-drag 2.7s ease-in-out infinite}
      .nuda-dd2-table-rows__row--drag .nuda-dd2-table-rows__handle{color:#e4ff54}
      @keyframes nuda-dd2-table-rows-drag{0%,14%,100%{transform:translateY(0);box-shadow:none}40%,74%{transform:translateY(-12px);box-shadow:0 10px 20px -8px rgba(0,0,0,.5),0 0 0 1px rgba(228,255,84,.4)}}
      @keyframes nuda-dd2-table-rows-gap{0%,14%,100%{transform:translateY(0)}40%,74%{transform:translateY(12px)}}
      @media (prefers-reduced-motion:reduce){.nuda-dd2-table-rows__row--gap,.nuda-dd2-table-rows__row--drag{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Drag-to-Reorder Rows — a div-based grid (role="table"/"row"/"cell")
     so the drag lift can animate transform freely. Toggle --drag on the
     grabbed row and --gap on the row that yields space.
     Keyboard: focus a row, Alt+ArrowUp/ArrowDown reorders. -->
<div class="nuda-dd2-table-rows" role="table" aria-label="Reorderable invoices" aria-describedby="dd2-table-rows-desc">
  <p id="dd2-table-rows-desc" class="nuda-dd2-table-rows__sr">Grab a row's handle and press Alt plus Arrow Up or Arrow Down to reorder.</p>
  <div class="nuda-dd2-table-rows__row" role="row">
    <span class="nuda-dd2-table-rows__handle" aria-hidden="true">⋮⋮</span>
    <span class="nuda-dd2-table-rows__cell" role="cell">Invoice #221</span>
  </div>
  <div class="nuda-dd2-table-rows__row nuda-dd2-table-rows__row--gap" role="row">
    <span class="nuda-dd2-table-rows__handle" aria-hidden="true">⋮⋮</span>
    <span class="nuda-dd2-table-rows__cell" role="cell">Invoice #222</span>
  </div>
  <div class="nuda-dd2-table-rows__row nuda-dd2-table-rows__row--drag" role="row" tabindex="0">
    <span class="nuda-dd2-table-rows__handle" aria-hidden="true">⋮⋮</span>
    <span class="nuda-dd2-table-rows__cell" role="cell">Invoice #223</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Snap-to-Grid Placement ─────────────── */
  {
    id: "dd2-snap-grid",
    name: "Snap-to-Grid Placement",
    category: CAT,
    preview: (
      <div className="nuda-dd2-snap-grid">
        <p id="dd2-snap-grid-desc" className="nuda-dd2-snap-grid__sr">Drag the block onto the grid to snap it into place, or focus it and press Alt plus Arrow keys to move it one cell at a time.</p>
        <div className="nuda-dd2-snap-grid__canvas" role="application" aria-label="Snap to grid canvas" aria-describedby="dd2-snap-grid-desc">
          <div className="nuda-dd2-snap-grid__target" aria-hidden="true"></div>
          <div className="nuda-dd2-snap-grid__block" role="button" tabIndex={0} aria-label="Block, draggable">▮</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dd2-snap-grid{width:160px}
      .nuda-dd2-snap-grid__sr{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .nuda-dd2-snap-grid__canvas{position:relative;width:160px;height:100px;border-radius:10px;border:1px solid rgba(255,255,255,.08);background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:20px 20px;background-color:#101010}
      .nuda-dd2-snap-grid__target{position:absolute;left:100px;top:60px;width:36px;height:36px;border:1.5px dashed rgba(228,255,84,.5);border-radius:6px;animation:nuda-dd2-snap-grid-target 3s ease-in-out infinite}
      .nuda-dd2-snap-grid__block{position:absolute;left:20px;top:20px;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:#e4ff54;color:#0a0a0a;border-radius:6px;font:700 14px ui-sans-serif,system-ui;cursor:grab;animation:nuda-dd2-snap-grid-move 3s cubic-bezier(.4,0,.2,1) infinite}
      .nuda-dd2-snap-grid__block:focus-visible{outline:2px solid #fafafa;outline-offset:2px}
      @keyframes nuda-dd2-snap-grid-move{0%,10%{transform:translate(0,0) scale(1)}40%{transform:translate(80px,40px) scale(1.12)}55%{transform:translate(80px,40px) scale(.95)}65%,90%{transform:translate(80px,40px) scale(1)}100%{transform:translate(0,0) scale(1)}}
      @keyframes nuda-dd2-snap-grid-target{0%,10%,100%{opacity:.35}40%,90%{opacity:1}}
      @media (prefers-reduced-motion:reduce){.nuda-dd2-snap-grid__block{animation:none;transform:translate(80px,40px)}.nuda-dd2-snap-grid__target{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Snap-to-Grid Placement — the target marks the nearest cell while the
     block is dragged; drop snaps the block to that cell's coordinates.
     Keyboard: focus the block, Alt+Arrow keys move it one cell at a time. -->
<div class="nuda-dd2-snap-grid">
  <p id="dd2-snap-grid-desc" class="nuda-dd2-snap-grid__sr">Drag the block onto the grid to snap it into place, or focus it and press Alt plus Arrow keys to move it one cell at a time.</p>
  <div class="nuda-dd2-snap-grid__canvas" role="application" aria-label="Snap to grid canvas" aria-describedby="dd2-snap-grid-desc">
    <div class="nuda-dd2-snap-grid__target" aria-hidden="true"></div>
    <div class="nuda-dd2-snap-grid__block" role="button" tabindex="0" aria-label="Block, draggable">▮</div>
  </div>
</div>`,
      },
    ],
  },
];
