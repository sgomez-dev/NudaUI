import type { NudaComponent } from "./types";

export const sidebars: NudaComponent[] = [
  /* ─────────────── 1. Sidebar Collapse ─────────────── */
  {
    id: "sidebar-collapse",
    name: "Sidebar Collapse",
    category: "Sidebars & Docks",
    preview: (
      <aside className="nuda-sidebar is-expanded">
        {[
          { l: "Home", i: "M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V11z" },
          { l: "Inbox", i: "M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l3-4h12l3 4" },
          { l: "Tasks", i: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" },
          { l: "Settings", i: "M12 15a3 3 0 100-6 3 3 0 000 6z M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 01-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3h.1a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8v.1a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" },
        ].map((it, i) => (
          <button key={i} className={`nuda-sidebar__item${i === 0 ? " is-active" : ""}`} type="button">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={it.i} />
            </svg>
            <span>{it.l}</span>
          </button>
        ))}
      </aside>
    ),
    cssInline: `
      .nuda-sidebar{display:flex;flex-direction:column;gap:4px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:180px;transition:width .45s cubic-bezier(.16,1,.3,1)}
      .nuda-sidebar:not(.is-expanded){width:54px}
      .nuda-sidebar__item{display:flex;align-items:center;gap:10px;padding:8px 10px;background:transparent;border:0;color:#a0a0a8;font-size:12px;font-weight:500;border-radius:8px;cursor:pointer;text-align:left;width:100%;overflow:hidden;transition:background .2s,color .2s,padding .35s}
      .nuda-sidebar__item svg{width:16px;height:16px;flex-shrink:0;transition:transform .25s,color .2s}
      .nuda-sidebar__item span{white-space:nowrap;opacity:1;transform:translateX(0);transition:opacity .25s,transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-sidebar:not(.is-expanded) .nuda-sidebar__item span{opacity:0;transform:translateX(-8px);width:0}
      .nuda-sidebar__item:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-sidebar__item:hover svg{transform:scale(1.12)}
      .nuda-sidebar__item.is-active{background:rgba(228,255,84,.08);color:#e4ff54}
      .nuda-sidebar__item.is-active svg{color:#e4ff54}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<aside class="nuda-sidebar is-expanded">
  <button class="nuda-sidebar__item is-active" type="button">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V11z" />
    </svg>
    <span>Home</span>
  </button>
  <!-- More items -->
</aside>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// Toggle .is-expanded on the sidebar to collapse the labels
const sidebar = document.querySelector('.nuda-sidebar');
const toggle  = document.querySelector('[data-sidebar-toggle]');

toggle?.addEventListener('click', () => {
  sidebar.classList.toggle('is-expanded');
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-sidebar {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  width: 200px;
  transition: width 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-sidebar:not(.is-expanded) {
  width: 54px;
}

.nuda-sidebar__item span {
  white-space: nowrap;
  transition:
    opacity 0.25s,
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-sidebar:not(.is-expanded) .nuda-sidebar__item span {
  opacity: 0;
  transform: translateX(-8px);
  width: 0;
}

.nuda-sidebar__item.is-active {
  background: rgba(228, 255, 84, 0.08);
  color: #e4ff54;
}`,
      },
    ],
  },

  /* ─────────────── 2. macOS Dock ─────────────── */
  {
    id: "mac-dock",
    name: "macOS Dock",
    category: "Sidebars & Docks",
    preview: (
      <div className="nuda-dock">
        {[
          { c: "#ff5e7a" },
          { c: "#ffb45e" },
          { c: "#e4ff54" },
          { c: "#62b6ff" },
          { c: "#9d6dff" },
          { c: "#6ee7b7" },
        ].map((it, i) => (
          <button key={i} className="nuda-dock__icon" style={{ background: it.c }} aria-label={`App ${i + 1}`} />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-dock{display:inline-flex;align-items:flex-end;gap:8px;padding:8px 12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;backdrop-filter:blur(12px)}
      .nuda-dock__icon{width:34px;height:34px;border-radius:9px;border:0;cursor:pointer;transition:transform .35s cubic-bezier(.34,1.56,.64,1),margin .25s;box-shadow:0 6px 16px -8px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.4),inset 0 -2px 6px rgba(0,0,0,.2)}
      .nuda-dock__icon:hover{transform:translateY(-10px) scale(1.35);margin:0 6px}
      .nuda-dock__icon:hover + .nuda-dock__icon,.nuda-dock__icon:has(+ :hover){transform:translateY(-4px) scale(1.15);margin:0 3px}
      @media(prefers-reduced-motion:reduce){.nuda-dock__icon:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dock">
  <button class="nuda-dock__icon" style="background:#ff5e7a"></button>
  <button class="nuda-dock__icon" style="background:#ffb45e"></button>
  <button class="nuda-dock__icon" style="background:#e4ff54"></button>
  <button class="nuda-dock__icon" style="background:#62b6ff"></button>
  <button class="nuda-dock__icon" style="background:#9d6dff"></button>
  <button class="nuda-dock__icon" style="background:#6ee7b7"></button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-dock {
  display: inline-flex;
  align-items: flex-end;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  backdrop-filter: blur(12px);
}

.nuda-dock__icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  transition:
    transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1),
    margin 0.25s;
  box-shadow:
    0 6px 16px -8px rgba(0, 0, 0, 0.6),
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    inset 0 -2px 6px rgba(0, 0, 0, 0.2);
}

.nuda-dock__icon:hover {
  transform: translateY(-12px) scale(1.4);
  margin: 0 8px;
}

/* Magnify neighbors with :has() */
.nuda-dock__icon:has(+ :hover),
.nuda-dock__icon:hover + .nuda-dock__icon {
  transform: translateY(-5px) scale(1.18);
  margin: 0 4px;
}`,
      },
    ],
  },

  /* ─────────────── 3. Drawer Slide ─────────────── */
  {
    id: "drawer-slide",
    name: "Drawer Slide",
    category: "Sidebars & Docks",
    preview: (
      <div className="nuda-drawer-wrap is-open">
        <div className="nuda-drawer-wrap__main">Click me to toggle</div>
        <aside className="nuda-drawer-wrap__panel">
          <div className="nuda-drawer-wrap__title">Notifications</div>
          <div className="nuda-drawer-wrap__row">New comment on Pull #12</div>
          <div className="nuda-drawer-wrap__row">Build #284 succeeded</div>
          <div className="nuda-drawer-wrap__row">Sara invited you to a project</div>
        </aside>
      </div>
    ),
    cssInline: `
      .nuda-drawer-wrap{position:relative;display:flex;width:100%;max-width:340px;height:200px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;overflow:hidden}
      .nuda-drawer-wrap__main{flex:1;display:flex;align-items:center;justify-content:center;color:#63636e;font-size:12px;cursor:pointer}
      .nuda-drawer-wrap__panel{position:absolute;right:0;top:0;bottom:0;width:60%;padding:14px;background:#0c0c10;border-left:1px solid rgba(255,255,255,.08);transform:translateX(100%);transition:transform .45s cubic-bezier(.16,1,.3,1),box-shadow .35s}
      .nuda-drawer-wrap.is-open .nuda-drawer-wrap__panel{transform:translateX(0);box-shadow:-30px 0 60px -20px rgba(0,0,0,.6)}
      .nuda-drawer-wrap__title{color:#fafafa;font-size:12px;font-weight:600;margin-bottom:10px}
      .nuda-drawer-wrap__row{padding:8px 10px;color:#a0a0a8;font-size:11px;border-radius:7px;margin-bottom:4px;background:rgba(255,255,255,.04);transform:translateX(20px);opacity:0;transition:transform .4s,opacity .35s}
      .nuda-drawer-wrap.is-open .nuda-drawer-wrap__row{transform:translateX(0);opacity:1}
      .nuda-drawer-wrap.is-open .nuda-drawer-wrap__row:nth-child(2){transition-delay:.15s}
      .nuda-drawer-wrap.is-open .nuda-drawer-wrap__row:nth-child(3){transition-delay:.25s}
      .nuda-drawer-wrap.is-open .nuda-drawer-wrap__row:nth-child(4){transition-delay:.35s}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-drawer-wrap is-open">
  <div class="nuda-drawer-wrap__main">Main content</div>
  <aside class="nuda-drawer-wrap__panel">
    <div class="nuda-drawer-wrap__title">Notifications</div>
    <div class="nuda-drawer-wrap__row">New comment on Pull #12</div>
    <div class="nuda-drawer-wrap__row">Build #284 succeeded</div>
    <div class="nuda-drawer-wrap__row">Sara invited you to a project</div>
  </aside>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const drawer = document.querySelector('.nuda-drawer-wrap');
drawer.querySelector('.nuda-drawer-wrap__main').addEventListener('click', () => {
  drawer.classList.toggle('is-open');
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-drawer-wrap__panel {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 60%;
  padding: 14px;
  background: #0c0c10;
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  transform: translateX(100%);
  transition:
    transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.35s;
}

.nuda-drawer-wrap.is-open .nuda-drawer-wrap__panel {
  transform: translateX(0);
  box-shadow: -30px 0 60px -20px rgba(0, 0, 0, 0.6);
}

.nuda-drawer-wrap__row {
  transform: translateX(20px);
  opacity: 0;
  transition: transform 0.4s, opacity 0.35s;
}

.nuda-drawer-wrap.is-open .nuda-drawer-wrap__row {
  transform: translateX(0);
  opacity: 1;
}

.nuda-drawer-wrap.is-open .nuda-drawer-wrap__row:nth-child(2) {
  transition-delay: 0.15s;
}`,
      },
    ],
  },

  /* ─────────────── 4. Floating Action Dock ─────────────── */
  {
    id: "fab-dock",
    name: "Floating Action Dock",
    category: "Sidebars & Docks",
    preview: (
      <div className="nuda-fab is-open">
        <button className="nuda-fab__main" aria-label="Open actions">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
        <div className="nuda-fab__items">
          <button className="nuda-fab__item" style={{ ["--d" as string]: "0ms" }} aria-label="Document">📄</button>
          <button className="nuda-fab__item" style={{ ["--d" as string]: "60ms" }} aria-label="Image">🖼️</button>
          <button className="nuda-fab__item" style={{ ["--d" as string]: "120ms" }} aria-label="Music">🎵</button>
          <button className="nuda-fab__item" style={{ ["--d" as string]: "180ms" }} aria-label="Code">💻</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-fab{position:relative;width:46px;height:46px}
      .nuda-fab__main{position:relative;width:46px;height:46px;border-radius:50%;border:0;background:#e4ff54;color:#09090b;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 22px -8px rgba(228,255,84,.6);transition:transform .35s cubic-bezier(.34,1.56,.64,1)}
      .nuda-fab__main svg{width:18px;height:18px;transition:transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-fab.is-open .nuda-fab__main{transform:rotate(45deg)}
      .nuda-fab__items{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;align-items:center}
      .nuda-fab__item{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.08);background:#111114;color:#fafafa;font-size:14px;cursor:pointer;opacity:0;transform:scale(.4) translateY(8px);transition:opacity .35s,transform .45s cubic-bezier(.34,1.56,.64,1);transition-delay:var(--d, 0ms);box-shadow:0 4px 12px -4px rgba(0,0,0,.6)}
      .nuda-fab.is-open .nuda-fab__item{opacity:1;transform:scale(1) translateY(0)}
      .nuda-fab__item:hover{transform:scale(1.1)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-fab is-open">
  <button class="nuda-fab__main" aria-label="Open actions">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  </button>
  <div class="nuda-fab__items">
    <button class="nuda-fab__item" style="--d: 0ms">📄</button>
    <button class="nuda-fab__item" style="--d: 60ms">🖼️</button>
    <button class="nuda-fab__item" style="--d: 120ms">🎵</button>
    <button class="nuda-fab__item" style="--d: 180ms">💻</button>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const fab = document.querySelector('.nuda-fab');
fab.querySelector('.nuda-fab__main').addEventListener('click', () => {
  fab.classList.toggle('is-open');
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-fab__main {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #e4ff54;
  color: #09090b;
  border: 0;
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-fab.is-open .nuda-fab__main {
  transform: rotate(45deg);
}

.nuda-fab__item {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  opacity: 0;
  transform: scale(0.4) translateY(8px);
  transition:
    opacity 0.35s,
    transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--d, 0ms);
}

.nuda-fab.is-open .nuda-fab__item {
  opacity: 1;
  transform: scale(1) translateY(0);
}`,
      },
    ],
  },

  /* ─────────────── 5. Vertical Rail ─────────────── */
  {
    id: "vertical-rail",
    name: "Vertical Rail",
    category: "Sidebars & Docks",
    preview: (
      <div className="nuda-rail">
        {[
          { l: "Dashboard", a: true },
          { l: "Analytics" },
          { l: "Customers" },
          { l: "Invoices" },
          { l: "Settings" },
        ].map((it, i) => (
          <button key={i} className={`nuda-rail__item${it.a ? " is-active" : ""}`} type="button">
            {it.l}
            <span className="nuda-rail__indicator" aria-hidden="true" />
          </button>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-rail{display:flex;flex-direction:column;padding:6px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:160px}
      .nuda-rail__item{position:relative;background:transparent;border:0;color:#a0a0a8;font-size:12px;font-weight:500;text-align:left;padding:9px 12px;border-radius:8px;cursor:pointer;transition:background .2s,color .2s,padding-left .25s ease}
      .nuda-rail__item:hover{background:rgba(255,255,255,.04);color:#fafafa;padding-left:18px}
      .nuda-rail__indicator{position:absolute;left:8px;top:50%;transform:translateY(-50%);width:3px;height:0;background:#e4ff54;border-radius:99px;transition:height .35s cubic-bezier(.16,1,.3,1)}
      .nuda-rail__item.is-active{color:#e4ff54;background:rgba(228,255,84,.06)}
      .nuda-rail__item.is-active .nuda-rail__indicator{height:60%}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-rail">
  <button class="nuda-rail__item is-active" type="button">
    Dashboard
    <span class="nuda-rail__indicator"></span>
  </button>
  <button class="nuda-rail__item" type="button">Analytics</button>
  <button class="nuda-rail__item" type="button">Customers</button>
  <button class="nuda-rail__item" type="button">Invoices</button>
  <button class="nuda-rail__item" type="button">Settings</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-rail__item {
  position: relative;
  background: transparent;
  border: 0;
  color: #a0a0a8;
  text-align: left;
  padding: 9px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, padding-left 0.25s ease;
}

.nuda-rail__item:hover {
  background: rgba(255, 255, 255, 0.04);
  color: #fafafa;
  padding-left: 18px;
}

.nuda-rail__indicator {
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 0;
  background: #e4ff54;
  border-radius: 99px;
  transition: height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-rail__item.is-active .nuda-rail__indicator { height: 60%; }`,
      },
    ],
  },

  /* ─────────────── 6. Workspace Switcher ─────────────── */
  {
    id: "workspace-switcher",
    name: "Workspace Switcher",
    category: "Sidebars & Docks",
    preview: (
      <div className="nuda-wsswitch">
        {["A", "B", "C", "D"].map((l, i) => (
          <button key={i} className={`nuda-wsswitch__chip${i === 1 ? " is-active" : ""}`} aria-label={`Workspace ${l}`}>
            {l}
          </button>
        ))}
        <button className="nuda-wsswitch__chip nuda-wsswitch__chip--add" aria-label="Add workspace">+</button>
      </div>
    ),
    cssInline: `
      .nuda-wsswitch{display:inline-flex;flex-direction:column;gap:6px;padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px}
      .nuda-wsswitch__chip{position:relative;width:36px;height:36px;border-radius:10px;border:1px solid rgba(255,255,255,.08);background:linear-gradient(135deg,#62b6ff,#9d6dff);color:#fafafa;font-weight:700;font-size:13px;cursor:pointer;transition:transform .25s,border-radius .35s cubic-bezier(.16,1,.3,1)}
      .nuda-wsswitch__chip:nth-child(2){background:linear-gradient(135deg,#ff6dd4,#ffb45e)}
      .nuda-wsswitch__chip:nth-child(3){background:linear-gradient(135deg,#e4ff54,#6ee7b7);color:#09090b}
      .nuda-wsswitch__chip:nth-child(4){background:linear-gradient(135deg,#9d6dff,#62b6ff)}
      .nuda-wsswitch__chip:hover{transform:scale(1.08);border-radius:50%}
      .nuda-wsswitch__chip.is-active{border-color:#e4ff54;box-shadow:0 0 0 2px #e4ff54}
      .nuda-wsswitch__chip.is-active::before{content:'';position:absolute;left:-12px;top:50%;transform:translateY(-50%);width:3px;height:60%;background:#e4ff54;border-radius:99px}
      .nuda-wsswitch__chip--add{background:transparent;color:#a0a0a8;font-weight:400;border-style:dashed}
      .nuda-wsswitch__chip--add:hover{color:#e4ff54;border-color:#e4ff54}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-wsswitch">
  <button class="nuda-wsswitch__chip" aria-label="Workspace A">A</button>
  <button class="nuda-wsswitch__chip is-active" aria-label="Workspace B">B</button>
  <button class="nuda-wsswitch__chip" aria-label="Workspace C">C</button>
  <button class="nuda-wsswitch__chip" aria-label="Workspace D">D</button>
  <button class="nuda-wsswitch__chip nuda-wsswitch__chip--add"
          aria-label="Add workspace">+</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-wsswitch__chip {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition:
    transform 0.25s,
    border-radius 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-wsswitch__chip:hover {
  transform: scale(1.08);
  border-radius: 50%;
}

.nuda-wsswitch__chip.is-active {
  border-color: #e4ff54;
  box-shadow: 0 0 0 2px #e4ff54;
}

.nuda-wsswitch__chip.is-active::before {
  content: "";
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 60%;
  background: #e4ff54;
  border-radius: 99px;
}`,
      },
    ],
  },

  /* ─────────────── 7. Section Tree ─────────────── */
  {
    id: "section-tree",
    name: "Sidebar Tree",
    category: "Sidebars & Docks",
    preview: (
      <div className="nuda-tree">
        <div className="nuda-tree__group is-open">
          <button className="nuda-tree__head">
            <svg className="nuda-tree__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
            Documents
          </button>
          <div className="nuda-tree__items">
            <button>Spec.md</button>
            <button>Roadmap.md</button>
            <button>Notes.md</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tree{padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:200px}
      .nuda-tree__head{display:flex;align-items:center;gap:6px;width:100%;padding:6px 8px;background:transparent;border:0;color:#fafafa;font-size:12px;font-weight:600;border-radius:7px;cursor:pointer;transition:background .2s}
      .nuda-tree__head:hover{background:rgba(255,255,255,.04)}
      .nuda-tree__chev{width:12px;height:12px;color:#a0a0a8;transition:transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-tree__group.is-open .nuda-tree__chev{transform:rotate(90deg)}
      .nuda-tree__items{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s cubic-bezier(.16,1,.3,1)}
      .nuda-tree__group.is-open .nuda-tree__items{grid-template-rows:1fr}
      .nuda-tree__items > *{overflow:hidden;min-height:0}
      .nuda-tree__items button{display:block;width:100%;padding:5px 10px 5px 28px;background:transparent;border:0;color:#a0a0a8;font-size:11px;text-align:left;cursor:pointer;border-radius:6px;transition:background .15s,color .2s,padding-left .25s}
      .nuda-tree__items button:hover{background:rgba(228,255,84,.08);color:#e4ff54;padding-left:32px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tree">
  <div class="nuda-tree__group is-open">
    <button class="nuda-tree__head">
      <svg class="nuda-tree__chev" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 6l6 6-6 6" />
      </svg>
      Documents
    </button>
    <div class="nuda-tree__items">
      <div>
        <button>Spec.md</button>
        <button>Roadmap.md</button>
        <button>Notes.md</button>
      </div>
    </div>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `document.querySelectorAll('.nuda-tree__head').forEach(head => {
  head.addEventListener('click', () => {
    head.parentElement.classList.toggle('is-open');
  });
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-tree__chev {
  width: 12px;
  height: 12px;
  color: #a0a0a8;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-tree__group.is-open .nuda-tree__chev {
  transform: rotate(90deg);
}

/* CSS-grid trick for animating to auto height */
.nuda-tree__items {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-tree__group.is-open .nuda-tree__items {
  grid-template-rows: 1fr;
}

.nuda-tree__items > * {
  overflow: hidden;
  min-height: 0;
}`,
      },
    ],
  },

  /* ─────────────── 8. Mobile Bottom Nav ─────────────── */
  {
    id: "bottom-nav",
    name: "Mobile Bottom Nav",
    category: "Sidebars & Docks",
    preview: (
      <nav className="nuda-bnav">
        {[
          { l: "Home", d: "M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V11z", a: true },
          { l: "Search", d: "M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" },
          { l: "Inbox", d: "M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" },
          { l: "Profile", d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2 M12 11a4 4 0 100-8 4 4 0 000 8z" },
        ].map((it, i) => (
          <button key={i} className={`nuda-bnav__btn${it.a ? " is-active" : ""}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={it.d} />
            </svg>
            <span>{it.l}</span>
          </button>
        ))}
      </nav>
    ),
    cssInline: `
      .nuda-bnav{display:flex;justify-content:space-around;align-items:center;padding:8px 6px;background:rgba(17,17,20,.85);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.06);border-radius:18px;width:100%;max-width:280px}
      .nuda-bnav__btn{position:relative;display:flex;flex-direction:column;align-items:center;gap:2px;padding:6px 12px;background:transparent;border:0;color:#63636e;font-size:9px;cursor:pointer;border-radius:10px;transition:color .25s}
      .nuda-bnav__btn svg{width:18px;height:18px;transition:transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-bnav__btn:hover{color:#a0a0a8}
      .nuda-bnav__btn.is-active{color:#e4ff54}
      .nuda-bnav__btn.is-active svg{transform:translateY(-3px) scale(1.12)}
      .nuda-bnav__btn.is-active::after{content:'';position:absolute;bottom:2px;left:50%;transform:translateX(-50%);width:18px;height:3px;border-radius:99px;background:#e4ff54;animation:_bnavSlide .35s cubic-bezier(.16,1,.3,1)}
      @keyframes _bnavSlide{from{width:0}to{width:18px}}
      @media(prefers-reduced-motion:reduce){.nuda-bnav__btn.is-active svg{transform:none}.nuda-bnav__btn.is-active::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav class="nuda-bnav">
  <button class="nuda-bnav__btn is-active">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V11z" />
    </svg>
    <span>Home</span>
  </button>
  <!-- More nav items -->
</nav>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-bnav__btn {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 6px 12px;
  background: transparent;
  border: 0;
  color: #63636e;
  font-size: 9px;
  cursor: pointer;
  transition: color 0.25s;
}

.nuda-bnav__btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-bnav__btn.is-active {
  color: #e4ff54;
}

.nuda-bnav__btn.is-active svg {
  transform: translateY(-3px) scale(1.12);
}

.nuda-bnav__btn.is-active::after {
  content: "";
  position: absolute;
  bottom: 2px;
  left: 50%;
  transform: translateX(-50%);
  width: 18px;
  height: 3px;
  border-radius: 99px;
  background: #e4ff54;
}`,
      },
    ],
  },

  /* ─────────────── 9. Hover-reveal Sidebar ─────────────── */
  {
    id: "hover-sidebar",
    name: "Hover-reveal Sidebar",
    category: "Sidebars & Docks",
    preview: (
      <div className="nuda-hoverbar">
        {["📊", "📁", "🔍", "⚙"].map((ic, i) => (
          <button key={i} className="nuda-hoverbar__btn">
            <span className="nuda-hoverbar__ic">{ic}</span>
            <span className="nuda-hoverbar__label">{["Stats", "Files", "Search", "Settings"][i]}</span>
          </button>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-hoverbar{display:flex;flex-direction:column;gap:4px;padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:fit-content}
      .nuda-hoverbar__btn{position:relative;display:flex;align-items:center;gap:0;padding:8px 10px;width:36px;background:transparent;border:0;color:#a0a0a8;border-radius:8px;cursor:pointer;overflow:hidden;transition:width .35s cubic-bezier(.16,1,.3,1),background .2s,gap .35s,color .2s}
      .nuda-hoverbar__btn:hover{width:120px;gap:10px;background:rgba(228,255,84,.08);color:#e4ff54}
      .nuda-hoverbar__ic{font-size:14px;flex-shrink:0}
      .nuda-hoverbar__label{font-size:11px;font-weight:500;white-space:nowrap;opacity:0;transform:translateX(-8px);transition:opacity .35s ease .1s,transform .35s ease .1s}
      .nuda-hoverbar__btn:hover .nuda-hoverbar__label{opacity:1;transform:translateX(0)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-hoverbar">
  <button class="nuda-hoverbar__btn">
    <span class="nuda-hoverbar__ic">📊</span>
    <span class="nuda-hoverbar__label">Stats</span>
  </button>
  <!-- More items -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-hoverbar__btn {
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 10px;
  width: 36px;
  background: transparent;
  border: 0;
  color: #a0a0a8;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition:
    width 0.35s cubic-bezier(0.16, 1, 0.3, 1),
    background 0.2s,
    gap 0.35s,
    color 0.2s;
}

.nuda-hoverbar__btn:hover {
  width: 120px;
  gap: 10px;
  background: rgba(228, 255, 84, 0.08);
  color: #e4ff54;
}

.nuda-hoverbar__label {
  font-size: 11px;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(-8px);
  transition:
    opacity 0.35s ease 0.1s,
    transform 0.35s ease 0.1s;
}

.nuda-hoverbar__btn:hover .nuda-hoverbar__label {
  opacity: 1;
  transform: translateX(0);
}`,
      },
    ],
  },

  /* ─────────────── 10. Glass Floating Sidebar ─────────────── */
  {
    id: "glass-sidebar",
    name: "Glass Floating Sidebar",
    category: "Sidebars & Docks",
    preview: (
      <div className="nuda-glassbar-wrap">
        <div className="nuda-glassbar-wrap__bg" aria-hidden="true" />
        <aside className="nuda-glassbar">
          {["✦", "◇", "◯", "▣"].map((ic, i) => (
            <button key={i} className={`nuda-glassbar__btn${i === 0 ? " is-active" : ""}`}>{ic}</button>
          ))}
        </aside>
      </div>
    ),
    cssInline: `
      .nuda-glassbar-wrap{position:relative;width:100%;max-width:280px;height:160px;border-radius:14px;overflow:hidden;background:#0c0c10;display:flex;align-items:center;justify-content:center}
      .nuda-glassbar-wrap__bg{position:absolute;inset:-30%;background:conic-gradient(from 90deg,#62b6ff,#9d6dff,#ff6dd4,#e4ff54,#62b6ff);filter:blur(40px);opacity:.4;animation:_glassSpin 18s linear infinite}
      .nuda-glassbar{position:relative;display:flex;flex-direction:column;gap:6px;padding:8px;background:rgba(20,20,24,.55);border:1px solid rgba(255,255,255,.12);border-radius:14px;backdrop-filter:blur(18px) saturate(160%);-webkit-backdrop-filter:blur(18px) saturate(160%);box-shadow:0 8px 32px rgba(0,0,0,.4),inset 0 1px 0 rgba(255,255,255,.08)}
      .nuda-glassbar__btn{width:34px;height:34px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:9px;color:#fafafa;font-size:14px;cursor:pointer;transition:transform .25s,background .2s,border-color .25s}
      .nuda-glassbar__btn:hover{transform:scale(1.08);background:rgba(255,255,255,.1)}
      .nuda-glassbar__btn.is-active{background:rgba(228,255,84,.18);border-color:#e4ff54;color:#e4ff54}
      @keyframes _glassSpin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-glassbar-wrap__bg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-glassbar-wrap">
  <div class="nuda-glassbar-wrap__bg" aria-hidden="true"></div>
  <aside class="nuda-glassbar">
    <button class="nuda-glassbar__btn is-active">✦</button>
    <button class="nuda-glassbar__btn">◇</button>
    <button class="nuda-glassbar__btn">◯</button>
    <button class="nuda-glassbar__btn">▣</button>
  </aside>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-glassbar {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
  background: rgba(20, 20, 24, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 14px;
  backdrop-filter: blur(18px) saturate(160%);
  -webkit-backdrop-filter: blur(18px) saturate(160%);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.nuda-glassbar__btn {
  width: 34px;
  height: 34px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9px;
  color: #fafafa;
  cursor: pointer;
  transition:
    transform 0.25s,
    background 0.2s,
    border-color 0.25s;
}

.nuda-glassbar__btn.is-active {
  background: rgba(228, 255, 84, 0.18);
  border-color: #e4ff54;
  color: #e4ff54;
}`,
      },
    ],
  },
];
