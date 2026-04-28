import type { NudaComponent } from "./types";

export const commandPalette: NudaComponent[] = [
  /* ─────────────── 1. Cmd-K Trigger ─────────────── */
  {
    id: "cmdk-trigger",
    name: "Cmd-K Trigger",
    category: "Command Palette",
    preview: (
      <button className="nuda-cmdkbtn" type="button">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21 L16 16" />
        </svg>
        <span className="nuda-cmdkbtn__text">Search…</span>
        <span className="nuda-cmdkbtn__kbd"><kbd>⌘</kbd><kbd>K</kbd></span>
      </button>
    ),
    cssInline: `
      .nuda-cmdkbtn{display:inline-flex;align-items:center;gap:8px;padding:6px 6px 6px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:#a1a1aa;font:500 11px ui-sans-serif,system-ui;cursor:pointer;transition:border-color .25s,background .25s,color .25s;min-width:160px}
      .nuda-cmdkbtn:hover{border-color:rgba(228,255,84,.3);background:rgba(255,255,255,.06);color:#fafafa}
      .nuda-cmdkbtn svg{width:13px;height:13px;flex-shrink:0}
      .nuda-cmdkbtn__text{flex:1;text-align:left}
      .nuda-cmdkbtn__kbd{display:inline-flex;gap:2px}
      .nuda-cmdkbtn__kbd kbd{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:4px;font:700 9px ui-monospace,monospace;color:#a1a1aa;line-height:1}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Cmd-K Trigger — opens the command palette -->
<button class="nuda-cmdkbtn" type="button">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21 L16 16" />
  </svg>
  <span class="nuda-cmdkbtn__text">Search…</span>
  <span class="nuda-cmdkbtn__kbd"><kbd>⌘</kbd><kbd>K</kbd></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Cmd-K Trigger
   Subtle search-like button with a keyboard shortcut hint.
   Customize: --cmdk-accent */

.nuda-cmdkbtn {
  --cmdk-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 8px 8px 8px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  color: #a1a1aa;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: border-color 0.25s, background 0.25s, color 0.25s;
  min-width: 240px;
}

.nuda-cmdkbtn:hover {
  border-color: rgba(228, 255, 84, 0.3);
  background: rgba(255, 255, 255, 0.06);
  color: #fafafa;
}

.nuda-cmdkbtn svg {
  width: 15px;
  height: 15px;
  flex-shrink: 0;
}

.nuda-cmdkbtn__text {
  flex: 1;
  text-align: left;
}

.nuda-cmdkbtn__kbd {
  display: inline-flex;
  gap: 3px;
}

.nuda-cmdkbtn__kbd kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 5px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  font: 700 0.65rem ui-monospace, monospace;
  color: #a1a1aa;
  line-height: 1;
}`,
      },
    ],
  },

  /* ─────────────── 2. Spotlight Overlay ─────────────── */
  {
    id: "spotlight-overlay",
    name: "Spotlight Overlay",
    category: "Command Palette",
    preview: (
      <div className="nuda-spotlight">
        <div className="nuda-spotlight__panel">
          <div className="nuda-spotlight__search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21 L16 16" />
            </svg>
            <span className="nuda-spotlight__query">Open settings</span>
            <span className="nuda-spotlight__caret" />
          </div>
          <div className="nuda-spotlight__divider" />
          <ul className="nuda-spotlight__list">
            <li className="nuda-spotlight__item is-active">Open Settings</li>
            <li className="nuda-spotlight__item">Open Profile</li>
            <li className="nuda-spotlight__item">Open API Keys</li>
          </ul>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-spotlight{position:relative;width:200px;padding:6px;background:rgba(0,0,0,.4);border-radius:10px;backdrop-filter:blur(8px)}
      .nuda-spotlight__panel{background:rgba(20,20,24,.95);border:1px solid rgba(255,255,255,.08);border-radius:8px;overflow:hidden;animation:_sl-in .3s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 40px -8px rgba(0,0,0,.6),0 0 0 1px rgba(228,255,84,.1)}
      .nuda-spotlight__search{display:flex;align-items:center;gap:6px;padding:7px 10px;color:#fafafa}
      .nuda-spotlight__search svg{width:13px;height:13px;color:#a1a1aa;flex-shrink:0}
      .nuda-spotlight__query{font:500 11px ui-sans-serif,system-ui;flex:1}
      .nuda-spotlight__caret{display:inline-block;width:1.5px;height:11px;background:#e4ff54;animation:_sl-caret 1s steps(2) infinite}
      .nuda-spotlight__divider{height:1px;background:rgba(255,255,255,.06)}
      .nuda-spotlight__list{list-style:none;padding:4px;margin:0;display:flex;flex-direction:column;gap:1px}
      .nuda-spotlight__item{padding:5px 8px;font:500 11px ui-sans-serif,system-ui;color:#a1a1aa;border-radius:5px;cursor:pointer;transition:background .15s,color .15s}
      .nuda-spotlight__item:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-spotlight__item.is-active{background:rgba(228,255,84,.1);color:#e4ff54;border:1px solid rgba(228,255,84,.2)}
      @keyframes _sl-in{from{opacity:0;transform:translateY(-8px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes _sl-caret{50%{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Spotlight Overlay — wrap in a fixed/centered backdrop in production -->
<div class="nuda-spotlight">
  <div class="nuda-spotlight__panel">
    <div class="nuda-spotlight__search">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21 L16 16" />
      </svg>
      <input class="nuda-spotlight__query" placeholder="Type a command…" />
    </div>
    <div class="nuda-spotlight__divider"></div>
    <ul class="nuda-spotlight__list">
      <li class="nuda-spotlight__item is-active">Open Settings</li>
      <li class="nuda-spotlight__item">Open Profile</li>
      <li class="nuda-spotlight__item">Open API Keys</li>
    </ul>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Spotlight Overlay
   Cmd-K style panel: query + divider + result list. Includes entry animation.
   Customize: --sl-bg, --sl-accent */

.nuda-spotlight {
  --sl-bg: rgba(20, 20, 24, 0.95);
  --sl-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 480px;
  padding: 8px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 14px;
  backdrop-filter: blur(8px);
}

.nuda-spotlight__panel {
  background: var(--sl-bg);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  overflow: hidden;
  animation: nuda-sl-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow:
    0 16px 40px -8px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(228, 255, 84, 0.1);
}

.nuda-spotlight__search {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  color: #fafafa;
}

.nuda-spotlight__search svg {
  width: 16px;
  height: 16px;
  color: #a1a1aa;
  flex-shrink: 0;
}

.nuda-spotlight__query {
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  flex: 1;
  background: transparent;
  border: none;
  color: #fafafa;
  outline: none;
}

.nuda-spotlight__query::placeholder { color: #63636e; }

.nuda-spotlight__divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
}

.nuda-spotlight__list {
  list-style: none;
  padding: 6px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nuda-spotlight__item {
  padding: 8px 12px;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.nuda-spotlight__item:hover {
  background: rgba(255, 255, 255, 0.04);
  color: #fafafa;
}

.nuda-spotlight__item.is-active {
  background: rgba(228, 255, 84, 0.1);
  color: var(--sl-accent);
  border: 1px solid rgba(228, 255, 84, 0.2);
}

@keyframes nuda-sl-in {
  from { opacity: 0; transform: translateY(-8px) scale(0.96); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-spotlight__panel { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Result Item ─────────────── */
  {
    id: "result-item",
    name: "Result Item",
    category: "Command Palette",
    preview: (
      <div className="nuda-resitem is-active">
        <span className="nuda-resitem__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
          </svg>
        </span>
        <div className="nuda-resitem__text">
          <span className="nuda-resitem__title">Generate code</span>
          <span className="nuda-resitem__hint">From prompt</span>
        </div>
        <span className="nuda-resitem__kbd"><kbd>↵</kbd></span>
      </div>
    ),
    cssInline: `
      .nuda-resitem{display:flex;align-items:center;gap:8px;padding:6px 8px;border-radius:6px;background:transparent;color:#a1a1aa;cursor:pointer;transition:background .15s,color .15s;width:170px}
      .nuda-resitem:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-resitem.is-active{background:rgba(228,255,84,.1);color:#e4ff54}
      .nuda-resitem__icon{flex-shrink:0;width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:rgba(228,255,84,.1);border-radius:5px;color:#e4ff54}
      .nuda-resitem__icon svg{width:12px;height:12px}
      .nuda-resitem__text{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px;line-height:1.2}
      .nuda-resitem__title{font:600 11px ui-sans-serif,system-ui;color:inherit}
      .nuda-resitem.is-active .nuda-resitem__title,.nuda-resitem:hover .nuda-resitem__title{color:#fafafa}
      .nuda-resitem__hint{font:500 9px ui-sans-serif,system-ui;color:#63636e}
      .nuda-resitem__kbd kbd{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:4px;font:700 10px ui-monospace,monospace;color:#a1a1aa;line-height:1}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Result Item — toggle .is-active for keyboard navigation -->
<div class="nuda-resitem is-active">
  <span class="nuda-resitem__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" />
    </svg>
  </span>
  <div class="nuda-resitem__text">
    <span class="nuda-resitem__title">Generate code</span>
    <span class="nuda-resitem__hint">From prompt</span>
  </div>
  <span class="nuda-resitem__kbd"><kbd>↵</kbd></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Result Item
   Single command-palette row: icon, title + hint, enter shortcut.
   Customize: --res-accent */

.nuda-resitem {
  --res-accent: #e4ff54;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 7px;
  background: transparent;
  color: #a1a1aa;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  width: 100%;
  max-width: 320px;
}

.nuda-resitem:hover {
  background: rgba(255, 255, 255, 0.04);
  color: #fafafa;
}

.nuda-resitem.is-active {
  background: rgba(228, 255, 84, 0.1);
  color: var(--res-accent);
}

.nuda-resitem__icon {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(228, 255, 84, 0.1);
  border-radius: 6px;
  color: var(--res-accent);
}

.nuda-resitem__icon svg { width: 14px; height: 14px; }

.nuda-resitem__text {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  line-height: 1.3;
}

.nuda-resitem__title {
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: inherit;
}

.nuda-resitem.is-active .nuda-resitem__title,
.nuda-resitem:hover .nuda-resitem__title { color: #fafafa; }

.nuda-resitem__hint {
  font: 500 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #63636e;
}

.nuda-resitem__kbd kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 22px;
  height: 22px;
  padding: 0 5px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 5px;
  font: 700 0.75rem ui-monospace, monospace;
  color: #a1a1aa;
  line-height: 1;
}`,
      },
    ],
  },

  /* ─────────────── 4. Group Header ─────────────── */
  {
    id: "group-header",
    name: "Group Header",
    category: "Command Palette",
    preview: (
      <div className="nuda-grouphd">
        <div className="nuda-grouphd__head">
          <span className="nuda-grouphd__title">Suggestions</span>
          <span className="nuda-grouphd__count">3</span>
        </div>
        <div className="nuda-grouphd__row"><span className="nuda-grouphd__dot" />New file</div>
        <div className="nuda-grouphd__row"><span className="nuda-grouphd__dot" />New folder</div>
        <div className="nuda-grouphd__row"><span className="nuda-grouphd__dot" />Open recent</div>
      </div>
    ),
    cssInline: `
      .nuda-grouphd{display:flex;flex-direction:column;gap:1px;width:160px;padding:4px}
      .nuda-grouphd__head{display:flex;align-items:center;justify-content:space-between;padding:4px 8px 4px 8px}
      .nuda-grouphd__title{font:700 9px ui-sans-serif,system-ui;color:#a1a1aa;text-transform:uppercase;letter-spacing:.08em}
      .nuda-grouphd__count{font:700 9px ui-monospace,monospace;color:#63636e;background:rgba(255,255,255,.04);padding:1px 5px;border-radius:3px;font-variant-numeric:tabular-nums}
      .nuda-grouphd__row{display:flex;align-items:center;gap:6px;padding:5px 8px;font:500 11px ui-sans-serif,system-ui;color:#a1a1aa;border-radius:5px;cursor:pointer;transition:background .15s,color .15s}
      .nuda-grouphd__row:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-grouphd__dot{width:4px;height:4px;border-radius:50%;background:#63636e;flex-shrink:0;transition:background .2s}
      .nuda-grouphd__row:hover .nuda-grouphd__dot{background:#e4ff54;box-shadow:0 0 4px #e4ff54}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Group Header — section in a command palette -->
<div class="nuda-grouphd">
  <div class="nuda-grouphd__head">
    <span class="nuda-grouphd__title">Suggestions</span>
    <span class="nuda-grouphd__count">3</span>
  </div>
  <div class="nuda-grouphd__row"><span class="nuda-grouphd__dot"></span>New file</div>
  <div class="nuda-grouphd__row"><span class="nuda-grouphd__dot"></span>New folder</div>
  <div class="nuda-grouphd__row"><span class="nuda-grouphd__dot"></span>Open recent</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Group Header
   Section header above a small list inside a command palette.
   Customize: --grp-accent */

.nuda-grouphd {
  --grp-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  gap: 1px;
  width: 100%;
  max-width: 280px;
  padding: 6px;
}

.nuda-grouphd__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
}

.nuda-grouphd__title {
  font: 700 0.65rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.nuda-grouphd__count {
  font: 700 0.65rem ui-monospace, monospace;
  color: #63636e;
  background: rgba(255, 255, 255, 0.04);
  padding: 1px 6px;
  border-radius: 4px;
  font-variant-numeric: tabular-nums;
}

.nuda-grouphd__row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.nuda-grouphd__row:hover {
  background: rgba(255, 255, 255, 0.04);
  color: #fafafa;
}

.nuda-grouphd__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #63636e;
  flex-shrink: 0;
  transition: background 0.2s, box-shadow 0.2s;
}

.nuda-grouphd__row:hover .nuda-grouphd__dot {
  background: var(--grp-accent);
  box-shadow: 0 0 4px var(--grp-accent);
}`,
      },
    ],
  },

  /* ─────────────── 5. No Results ─────────────── */
  {
    id: "cmdk-no-results",
    name: "No Results",
    category: "Command Palette",
    preview: (
      <div className="nuda-cmdkno">
        <div className="nuda-cmdkno__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21 L16 16" />
            <path d="M9 11 L13 11" opacity="0.4" />
          </svg>
        </div>
        <p className="nuda-cmdkno__title">No commands found</p>
        <p className="nuda-cmdkno__hint">Try <kbd>?</kbd> for help</p>
      </div>
    ),
    cssInline: `
      .nuda-cmdkno{display:flex;flex-direction:column;align-items:center;gap:4px;padding:18px 12px;width:170px}
      .nuda-cmdkno__icon{width:30px;height:30px;color:#63636e;animation:_no-tilt 3s ease-in-out infinite}
      .nuda-cmdkno__icon svg{width:100%;height:100%}
      .nuda-cmdkno__title{font:600 11px ui-sans-serif,system-ui;color:#fafafa;margin:4px 0 0}
      .nuda-cmdkno__hint{font:500 9px ui-sans-serif,system-ui;color:#63636e;margin:0}
      .nuda-cmdkno__hint kbd{display:inline-flex;align-items:center;justify-content:center;min-width:14px;height:14px;padding:0 3px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:3px;font:700 9px ui-monospace,monospace;color:#a1a1aa}
      @keyframes _no-tilt{0%,100%{transform:rotate(-6deg)}50%{transform:rotate(6deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Empty state when no commands match the query -->
<div class="nuda-cmdkno">
  <div class="nuda-cmdkno__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21 L16 16" />
      <path d="M9 11 L13 11" opacity="0.4" />
    </svg>
  </div>
  <p class="nuda-cmdkno__title">No commands found</p>
  <p class="nuda-cmdkno__hint">Try <kbd>?</kbd> for help</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* No Results
   Tilting magnifying glass + helper hint for empty palette state.
   Customize: container width, --no-color */

.nuda-cmdkno {
  --no-color: #63636e;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 24px 16px;
  width: 100%;
  max-width: 320px;
}

.nuda-cmdkno__icon {
  width: 36px;
  height: 36px;
  color: var(--no-color);
  animation: nuda-cmdkno-tilt 3s ease-in-out infinite;
}

.nuda-cmdkno__icon svg { width: 100%; height: 100%; }

.nuda-cmdkno__title {
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 6px 0 0;
}

.nuda-cmdkno__hint {
  font: 500 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: var(--no-color);
  margin: 0;
}

.nuda-cmdkno__hint kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font: 700 0.65rem ui-monospace, monospace;
  color: #a1a1aa;
}

@keyframes nuda-cmdkno-tilt {
  0%, 100% { transform: rotate(-6deg); }
  50%      { transform: rotate(6deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-cmdkno__icon { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Searching State ─────────────── */
  {
    id: "cmdk-searching",
    name: "Searching State",
    category: "Command Palette",
    preview: (
      <div className="nuda-cmdksrch">
        <span className="nuda-cmdksrch__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21 L16 16" />
          </svg>
        </span>
        <div className="nuda-cmdksrch__lines">
          <span className="nuda-cmdksrch__line" style={{ width: "70%" }} />
          <span className="nuda-cmdksrch__line" style={{ width: "55%" }} />
          <span className="nuda-cmdksrch__line" style={{ width: "82%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cmdksrch{display:flex;align-items:flex-start;gap:8px;padding:10px;width:170px}
      .nuda-cmdksrch__icon{flex-shrink:0;width:18px;height:18px;color:#e4ff54;animation:_sr-spin 1.4s linear infinite;filter:drop-shadow(0 0 4px rgba(228,255,84,.4))}
      .nuda-cmdksrch__icon svg{width:100%;height:100%}
      .nuda-cmdksrch__lines{flex:1;display:flex;flex-direction:column;gap:5px;padding-top:3px}
      .nuda-cmdksrch__line{height:7px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.04) 25%,rgba(228,255,84,.15) 50%,rgba(255,255,255,.04) 75%);background-size:200% 100%;animation:_sr-shim 1.5s ease-in-out infinite}
      @keyframes _sr-spin{to{transform:rotate(360deg)}}
      @keyframes _sr-shim{0%{background-position:200% 0}100%{background-position:-200% 0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Searching State — spinning lens + shimmering result placeholders -->
<div class="nuda-cmdksrch">
  <span class="nuda-cmdksrch__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21 L16 16" />
    </svg>
  </span>
  <div class="nuda-cmdksrch__lines">
    <span class="nuda-cmdksrch__line" style="width: 70%"></span>
    <span class="nuda-cmdksrch__line" style="width: 55%"></span>
    <span class="nuda-cmdksrch__line" style="width: 82%"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Searching State
   Loading state inside a command palette while results stream in.
   Customize: --sr-accent */

.nuda-cmdksrch {
  --sr-accent: #e4ff54;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  width: 100%;
  max-width: 320px;
}

.nuda-cmdksrch__icon {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  color: var(--sr-accent);
  animation: nuda-sr-spin 1.4s linear infinite;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.4));
}

.nuda-cmdksrch__icon svg { width: 100%; height: 100%; }

.nuda-cmdksrch__lines {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 3px;
}

.nuda-cmdksrch__line {
  height: 8px;
  border-radius: 4px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.04) 25%,
    rgba(228, 255, 84, 0.15) 50%,
    rgba(255, 255, 255, 0.04) 75%
  );
  background-size: 200% 100%;
  animation: nuda-sr-shim 1.5s ease-in-out infinite;
}

@keyframes nuda-sr-spin { to { transform: rotate(360deg); } }

@keyframes nuda-sr-shim {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-cmdksrch__icon,
  .nuda-cmdksrch__line { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Recent Items ─────────────── */
  {
    id: "recent-items",
    name: "Recent Items",
    category: "Command Palette",
    preview: (
      <ul className="nuda-recent">
        <li className="nuda-recent__row">
          <svg className="nuda-recent__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8 L12 12 L15 14" />
          </svg>
          <span className="nuda-recent__name">Open project</span>
          <span className="nuda-recent__time">2m ago</span>
        </li>
        <li className="nuda-recent__row">
          <svg className="nuda-recent__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8 L12 12 L15 14" />
          </svg>
          <span className="nuda-recent__name">Create branch</span>
          <span className="nuda-recent__time">12m ago</span>
        </li>
        <li className="nuda-recent__row">
          <svg className="nuda-recent__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8 L12 12 L15 14" />
          </svg>
          <span className="nuda-recent__name">Run tests</span>
          <span className="nuda-recent__time">1h ago</span>
        </li>
      </ul>
    ),
    cssInline: `
      .nuda-recent{list-style:none;padding:4px;margin:0;display:flex;flex-direction:column;gap:1px;width:170px}
      .nuda-recent__row{display:flex;align-items:center;gap:8px;padding:5px 8px;border-radius:5px;cursor:pointer;transition:background .15s}
      .nuda-recent__row:hover{background:rgba(255,255,255,.04)}
      .nuda-recent__icon{width:13px;height:13px;color:#63636e;flex-shrink:0}
      .nuda-recent__row:hover .nuda-recent__icon{color:#e4ff54}
      .nuda-recent__name{flex:1;font:500 11px ui-sans-serif,system-ui;color:#a1a1aa}
      .nuda-recent__row:hover .nuda-recent__name{color:#fafafa}
      .nuda-recent__time{font:600 9px ui-monospace,monospace;color:#63636e;flex-shrink:0}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Recent Items — clock icon + relative time per row -->
<ul class="nuda-recent">
  <li class="nuda-recent__row">
    <svg class="nuda-recent__icon" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9" /><path d="M12 8 L12 12 L15 14" />
    </svg>
    <span class="nuda-recent__name">Open project</span>
    <span class="nuda-recent__time">2m ago</span>
  </li>
  <!-- ...more rows -->
</ul>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Recent Items
   Recently-used commands list inside a palette.
   Customize: --recent-accent */

.nuda-recent {
  --recent-accent: #e4ff54;
  list-style: none;
  padding: 6px;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  max-width: 320px;
}

.nuda-recent__row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s;
}

.nuda-recent__row:hover { background: rgba(255, 255, 255, 0.04); }

.nuda-recent__icon {
  width: 15px;
  height: 15px;
  color: #63636e;
  flex-shrink: 0;
}

.nuda-recent__row:hover .nuda-recent__icon { color: var(--recent-accent); }

.nuda-recent__name {
  flex: 1;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
}

.nuda-recent__row:hover .nuda-recent__name { color: #fafafa; }

.nuda-recent__time {
  font: 600 0.7rem ui-monospace, monospace;
  color: #63636e;
  flex-shrink: 0;
}`,
      },
    ],
  },

  /* ─────────────── 8. Footer Hints ─────────────── */
  {
    id: "footer-hints",
    name: "Footer Hints",
    category: "Command Palette",
    preview: (
      <div className="nuda-cmdkftr">
        <span className="nuda-cmdkftr__hint"><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
        <span className="nuda-cmdkftr__hint"><kbd>↵</kbd> to select</span>
        <span className="nuda-cmdkftr__hint"><kbd>esc</kbd> to close</span>
      </div>
    ),
    cssInline: `
      .nuda-cmdkftr{display:flex;align-items:center;gap:10px;padding:6px 10px;background:rgba(255,255,255,.02);border-top:1px solid rgba(255,255,255,.06);font:500 9px ui-sans-serif,system-ui;color:#63636e;border-radius:0 0 8px 8px}
      .nuda-cmdkftr__hint{display:inline-flex;align-items:center;gap:3px}
      .nuda-cmdkftr__hint kbd{display:inline-flex;align-items:center;justify-content:center;min-width:13px;height:13px;padding:0 3px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:3px;font:700 8px ui-monospace,monospace;color:#a1a1aa;line-height:1}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Footer Hints — keyboard shortcuts shown at the bottom of a palette -->
<div class="nuda-cmdkftr">
  <span class="nuda-cmdkftr__hint"><kbd>↑</kbd><kbd>↓</kbd> to navigate</span>
  <span class="nuda-cmdkftr__hint"><kbd>↵</kbd> to select</span>
  <span class="nuda-cmdkftr__hint"><kbd>esc</kbd> to close</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Footer Hints
   Subtle keyboard cheatsheet pinned to the bottom of a command palette.
   Customize: container colors, font size. */

.nuda-cmdkftr {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 8px 14px;
  background: rgba(255, 255, 255, 0.02);
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  font: 500 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #63636e;
  border-radius: 0 0 10px 10px;
}

.nuda-cmdkftr__hint {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.nuda-cmdkftr__hint kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  font: 700 0.625rem ui-monospace, monospace;
  color: #a1a1aa;
  line-height: 1;
}`,
      },
    ],
  },

  /* ─────────────── 9. Match Highlight ─────────────── */
  {
    id: "match-highlight",
    name: "Match Highlight",
    category: "Command Palette",
    preview: (
      <div className="nuda-match">
        <p className="nuda-match__row"><b>O</b>p<b>e</b>n <b>S</b>ettings</p>
        <p className="nuda-match__row"><b>O</b>nlin<b>e</b> <b>S</b>tatus</p>
        <p className="nuda-match__row">G<b>e</b>t Started</p>
      </div>
    ),
    cssInline: `
      .nuda-match{display:flex;flex-direction:column;gap:1px;padding:6px;width:160px}
      .nuda-match__row{padding:5px 8px;font:500 11px ui-sans-serif,system-ui;color:#a1a1aa;border-radius:5px;cursor:pointer;transition:background .15s,color .15s;margin:0}
      .nuda-match__row:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-match__row b{color:#e4ff54;font-weight:700;text-shadow:0 0 4px rgba(228,255,84,.3)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Match Highlight — wrap matching characters in <b> tags -->
<div class="nuda-match">
  <p class="nuda-match__row"><b>O</b>p<b>e</b>n <b>S</b>ettings</p>
  <p class="nuda-match__row"><b>O</b>nlin<b>e</b> <b>S</b>tatus</p>
  <p class="nuda-match__row">G<b>e</b>t Started</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Match Highlight
   Bolded + glowing matching letters per row.
   Customize: --match-accent */

.nuda-match {
  --match-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 8px;
  width: 100%;
  max-width: 320px;
}

.nuda-match__row {
  padding: 7px 10px;
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
  margin: 0;
}

.nuda-match__row:hover {
  background: rgba(255, 255, 255, 0.04);
  color: #fafafa;
}

.nuda-match__row b {
  color: var(--match-accent);
  font-weight: 700;
  text-shadow: 0 0 4px rgba(228, 255, 84, 0.3);
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Match Highlight — wrap matching letters in <b> as the user types. */

(function () {
  // Simple subsequence match: highlights chars in 'text' that appear in 'query'
  // (in order). Replace with fzf/fuse for fuzzy ranking in production.
  function highlight(text, query) {
    if (!query) return text;
    var q = query.toLowerCase();
    var i = 0;
    var out = '';
    for (var c = 0; c < text.length; c++) {
      var ch = text[c];
      if (i < q.length && ch.toLowerCase() === q[i]) {
        out += '<b>' + ch + '</b>';
        i++;
      } else {
        out += ch;
      }
    }
    return out;
  }

  // Example: re-render rows when the query changes.
  var input = document.querySelector('.nuda-spotlight__query');
  var rows = document.querySelectorAll('.nuda-match__row');
  if (!input || !rows.length) return;

  var originals = Array.from(rows).map(function (r) { return r.textContent; });

  input.addEventListener('input', function () {
    rows.forEach(function (row, idx) {
      row.innerHTML = highlight(originals[idx], input.value);
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 10. Quick Action ─────────────── */
  {
    id: "quick-action",
    name: "Quick Action",
    category: "Command Palette",
    preview: (
      <button className="nuda-quick" type="button">
        <span className="nuda-quick__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 L4 14 L12 14 L11 22 L20 10 L12 10 Z" />
          </svg>
        </span>
        <span className="nuda-quick__label">Run command</span>
        <span className="nuda-quick__kbd"><kbd>⌘</kbd><kbd>↵</kbd></span>
      </button>
    ),
    cssInline: `
      .nuda-quick{display:inline-flex;align-items:center;gap:8px;padding:7px 8px 7px 10px;background:linear-gradient(180deg,rgba(228,255,84,.12),rgba(228,255,84,.06));border:1px solid rgba(228,255,84,.25);border-radius:8px;color:#fafafa;font:600 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s,box-shadow .25s,border-color .25s;position:relative;overflow:hidden}
      .nuda-quick:hover{transform:translateY(-1px);box-shadow:0 0 16px rgba(228,255,84,.25);border-color:#e4ff54}
      .nuda-quick:active{transform:translateY(0) scale(.98)}
      .nuda-quick::before{content:"";position:absolute;inset:0;background:linear-gradient(110deg,transparent 30%,rgba(255,255,255,.1) 50%,transparent 70%);transform:translateX(-100%);transition:transform .6s ease}
      .nuda-quick:hover::before{transform:translateX(100%)}
      .nuda-quick__icon{position:relative;z-index:1;width:14px;height:14px;color:#e4ff54;display:flex;align-items:center;justify-content:center;flex-shrink:0;filter:drop-shadow(0 0 3px rgba(228,255,84,.5))}
      .nuda-quick__icon svg{width:100%;height:100%}
      .nuda-quick__label{position:relative;z-index:1}
      .nuda-quick__kbd{position:relative;z-index:1;display:inline-flex;gap:2px;margin-left:4px}
      .nuda-quick__kbd kbd{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 3px;background:rgba(228,255,84,.15);border:1px solid rgba(228,255,84,.3);border-radius:3px;font:700 9px ui-monospace,monospace;color:#e4ff54;line-height:1}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Quick Action — primary action button with kbd shortcut -->
<button class="nuda-quick" type="button">
  <span class="nuda-quick__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 2 L4 14 L12 14 L11 22 L20 10 L12 10 Z" />
    </svg>
  </span>
  <span class="nuda-quick__label">Run command</span>
  <span class="nuda-quick__kbd"><kbd>⌘</kbd><kbd>↵</kbd></span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Quick Action
   Primary palette CTA: gradient bg, lift on hover, shimmer sweep + kbd.
   Customize: --qa-accent */

.nuda-quick {
  --qa-accent: #e4ff54;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px 9px 12px;
  background: linear-gradient(
    180deg,
    rgba(228, 255, 84, 0.12),
    rgba(228, 255, 84, 0.06)
  );
  border: 1px solid rgba(228, 255, 84, 0.25);
  border-radius: 9px;
  color: #fafafa;
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.25s, border-color 0.25s;
  position: relative;
  overflow: hidden;
}

.nuda-quick:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 16px rgba(228, 255, 84, 0.25);
  border-color: var(--qa-accent);
}

.nuda-quick:active { transform: translateY(0) scale(0.98); }

.nuda-quick::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.nuda-quick:hover::before { transform: translateX(100%); }

.nuda-quick__icon {
  position: relative;
  z-index: 1;
  width: 16px;
  height: 16px;
  color: var(--qa-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  filter: drop-shadow(0 0 3px rgba(228, 255, 84, 0.5));
}

.nuda-quick__icon svg { width: 100%; height: 100%; }

.nuda-quick__label,
.nuda-quick__kbd { position: relative; z-index: 1; }

.nuda-quick__kbd {
  display: inline-flex;
  gap: 3px;
  margin-left: 4px;
}

.nuda-quick__kbd kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  background: rgba(228, 255, 84, 0.15);
  border: 1px solid rgba(228, 255, 84, 0.3);
  border-radius: 4px;
  font: 700 0.7rem ui-monospace, monospace;
  color: var(--qa-accent);
  line-height: 1;
}`,
      },
    ],
  },
];
