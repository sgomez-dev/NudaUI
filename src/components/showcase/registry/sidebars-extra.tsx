import type { NudaComponent } from "./types";

const CAT = "Sidebars & Docks";

export const sidebarsExtra: NudaComponent[] = [
  /* ─────────────── 1. Hover-Expand Rail ─────────────── */
  {
    id: "sb2-hover-rail",
    name: "Hover-Expand Rail",
    category: CAT,
    preview: (
      <nav aria-label="Main" className="nuda-sb2-hover-rail">
        <ul className="nuda-sb2-hover-rail__list">
          {[
            { l: "Home", a: true, d: "M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V11z" },
            { l: "Projects", d: "M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l3-4h12l3 4" },
            { l: "Team", d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8z M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75" },
            { l: "Settings", d: "M12 15a3 3 0 100-6 3 3 0 000 6z" },
          ].map((it, i) => (
            <li key={i}>
              <a href="#" className="nuda-sb2-hover-rail__item" aria-current={it.a ? "page" : undefined}>
                <span className="nuda-sb2-hover-rail__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={it.d} />
                  </svg>
                </span>
                <span className="nuda-sb2-hover-rail__label">{it.l}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    ),
    cssInline: `
      .nuda-sb2-hover-rail{width:fit-content;padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:16px}
      .nuda-sb2-hover-rail__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px}
      .nuda-sb2-hover-rail__item{display:grid;grid-template-columns:32px 0fr;align-items:center;column-gap:0;min-height:44px;padding:0 12px;border-radius:10px;color:#a0a0a8;text-decoration:none;transition:grid-template-columns .4s cubic-bezier(.16,1,.3,1),column-gap .4s cubic-bezier(.16,1,.3,1),background .2s,color .2s}
      .nuda-sb2-hover-rail__item:hover{background:rgba(255,255,255,.05);color:#fafafa}
      .nuda-sb2-hover-rail__item[aria-current="page"]{color:#e4ff54;background:rgba(228,255,84,.08)}
      .nuda-sb2-hover-rail__item:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-sb2-hover-rail__icon{display:flex;align-items:center;justify-content:center;width:20px;height:20px}
      .nuda-sb2-hover-rail__icon svg{width:18px;height:18px}
      .nuda-sb2-hover-rail__label{overflow:hidden;white-space:nowrap;font-size:12px;font-weight:500;opacity:0;transform:translateX(-6px);transition:opacity .3s ease,transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-sb2-hover-rail:hover .nuda-sb2-hover-rail__item,.nuda-sb2-hover-rail:focus-within .nuda-sb2-hover-rail__item{grid-template-columns:32px 1fr;column-gap:10px}
      .nuda-sb2-hover-rail:hover .nuda-sb2-hover-rail__label,.nuda-sb2-hover-rail:focus-within .nuda-sb2-hover-rail__label{opacity:1;transform:translateX(0)}
      @media (prefers-reduced-motion:reduce){.nuda-sb2-hover-rail__item,.nuda-sb2-hover-rail__label{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Main" class="nuda-sb2-hover-rail">
  <ul class="nuda-sb2-hover-rail__list">
    <li>
      <a href="#" class="nuda-sb2-hover-rail__item" aria-current="page">
        <span class="nuda-sb2-hover-rail__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V11z" />
          </svg>
        </span>
        <span class="nuda-sb2-hover-rail__label">Home</span>
      </a>
    </li>
    <!-- More items -->
  </ul>
</nav>`,
      },
    ],
  },

  /* ─────────────── 2. Active Indicator Glide ─────────────── */
  {
    id: "sb2-active-glide",
    name: "Active Indicator Glide",
    category: CAT,
    preview: (
      <nav aria-label="Main" className="nuda-sb2-active-glide" style={{ ["--active" as string]: "1" }}>
        <span className="nuda-sb2-active-glide__indicator" aria-hidden="true"></span>
        <ul className="nuda-sb2-active-glide__list">
          {[
            { l: "Home", d: "M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V11z" },
            { l: "Search", d: "M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" },
            { l: "Inbox", d: "M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11L2 12v6a2 2 0 002 2h16a2 2 0 002-2v-6l-3.45-6.89A2 2 0 0016.76 4H7.24a2 2 0 00-1.79 1.11z" },
            { l: "Settings", d: "M12 15a3 3 0 100-6 3 3 0 000 6z" },
          ].map((it, i) => (
            <li key={i}>
              <button type="button" className="nuda-sb2-active-glide__btn" aria-label={it.l} aria-current={i === 1 ? "page" : undefined} data-index={i}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={it.d} />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    ),
    cssInline: `
      .nuda-sb2-active-glide{position:relative;width:56px;padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:16px}
      .nuda-sb2-active-glide__list{position:relative;list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:4px;z-index:1}
      .nuda-sb2-active-glide__btn{width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:transparent;border:0;border-radius:10px;color:#a0a0a8;cursor:pointer;transition:color .25s}
      .nuda-sb2-active-glide__btn svg{width:18px;height:18px}
      .nuda-sb2-active-glide__btn:hover{color:#fafafa}
      .nuda-sb2-active-glide__btn[aria-current="page"]{color:#0a0a0a}
      .nuda-sb2-active-glide__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-sb2-active-glide__indicator{position:absolute;left:8px;top:8px;width:40px;height:40px;border-radius:10px;background:#e4ff54;transform:translateY(calc(var(--active, 0) * 44px));transition:transform .45s cubic-bezier(.34,1.56,.64,1);box-shadow:0 6px 16px -6px rgba(228,255,84,.5)}
      @media (prefers-reduced-motion:reduce){.nuda-sb2-active-glide__indicator{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Main" class="nuda-sb2-active-glide" style="--active: 1">
  <span class="nuda-sb2-active-glide__indicator" aria-hidden="true"></span>
  <ul class="nuda-sb2-active-glide__list">
    <li>
      <button type="button" class="nuda-sb2-active-glide__btn" aria-label="Home" data-index="0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V11z" />
        </svg>
      </button>
    </li>
    <!-- More items with data-index="1", "2" … -->
  </ul>
</nav>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const rail = document.querySelector('.nuda-sb2-active-glide');

rail.querySelectorAll('.nuda-sb2-active-glide__btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    rail.style.setProperty('--active', btn.dataset.index);
    rail.querySelectorAll('.nuda-sb2-active-glide__btn').forEach((b) => {
      b.removeAttribute('aria-current');
    });
    btn.setAttribute('aria-current', 'page');
  });
});`,
      },
    ],
  },

  /* ─────────────── 3. Nested Collapsible Tree ─────────────── */
  {
    id: "sb2-nested-tree",
    name: "Nested Collapsible Tree",
    category: CAT,
    preview: (
      <div className="nuda-sb2-nested-tree">
        <ul className="nuda-sb2-nested-tree__list">
          <li>
            <a href="#" className="nuda-sb2-nested-tree__leaf">Overview</a>
          </li>
          <li className="nuda-sb2-nested-tree__group is-open">
            <button type="button" className="nuda-sb2-nested-tree__trigger" aria-expanded="true" aria-controls="sb2nt-project">
              <svg className="nuda-sb2-nested-tree__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
              Project
            </button>
            <div className="nuda-sb2-nested-tree__panel" id="sb2nt-project">
              <div className="nuda-sb2-nested-tree__inner">
                <ul className="nuda-sb2-nested-tree__list nuda-sb2-nested-tree__list--nested">
                  <li>
                    <a href="#" className="nuda-sb2-nested-tree__leaf">Tasks</a>
                  </li>
                  <li className="nuda-sb2-nested-tree__group is-open">
                    <button type="button" className="nuda-sb2-nested-tree__trigger" aria-expanded="true" aria-controls="sb2nt-design">
                      <svg className="nuda-sb2-nested-tree__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                      Design
                    </button>
                    <div className="nuda-sb2-nested-tree__panel" id="sb2nt-design">
                      <div className="nuda-sb2-nested-tree__inner">
                        <ul className="nuda-sb2-nested-tree__list nuda-sb2-nested-tree__list--nested">
                          <li>
                            <a href="#" className="nuda-sb2-nested-tree__leaf" aria-current="page">Wireframes</a>
                          </li>
                          <li>
                            <a href="#" className="nuda-sb2-nested-tree__leaf">Mockups</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-sb2-nested-tree{width:220px;padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:14px;font-size:12px}
      .nuda-sb2-nested-tree__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px}
      .nuda-sb2-nested-tree__list--nested{padding-left:18px}
      .nuda-sb2-nested-tree__leaf{display:block;padding:8px 10px;min-height:20px;border-radius:8px;color:#a0a0a8;text-decoration:none;transition:background .2s,color .2s}
      .nuda-sb2-nested-tree__leaf:hover{background:rgba(255,255,255,.05);color:#fafafa}
      .nuda-sb2-nested-tree__leaf[aria-current="page"]{color:#e4ff54;background:rgba(228,255,84,.08)}
      .nuda-sb2-nested-tree__leaf:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-sb2-nested-tree__trigger{display:flex;align-items:center;gap:6px;width:100%;padding:8px 10px;background:transparent;border:0;color:#fafafa;font-size:12px;font-weight:600;border-radius:8px;cursor:pointer;transition:background .2s}
      .nuda-sb2-nested-tree__trigger:hover{background:rgba(255,255,255,.05)}
      .nuda-sb2-nested-tree__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-sb2-nested-tree__chev{width:12px;height:12px;color:#777;flex-shrink:0;transition:transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-sb2-nested-tree__group.is-open > .nuda-sb2-nested-tree__trigger .nuda-sb2-nested-tree__chev{transform:rotate(90deg)}
      .nuda-sb2-nested-tree__panel{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s cubic-bezier(.16,1,.3,1)}
      .nuda-sb2-nested-tree__group.is-open > .nuda-sb2-nested-tree__panel{grid-template-rows:1fr}
      .nuda-sb2-nested-tree__inner{overflow:hidden;min-height:0}
      @media (prefers-reduced-motion:reduce){.nuda-sb2-nested-tree__chev,.nuda-sb2-nested-tree__panel{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sb2-nested-tree">
  <ul class="nuda-sb2-nested-tree__list">
    <li><a href="#" class="nuda-sb2-nested-tree__leaf">Overview</a></li>
    <li class="nuda-sb2-nested-tree__group is-open">
      <button type="button" class="nuda-sb2-nested-tree__trigger"
              aria-expanded="true" aria-controls="sb2nt-project">
        <svg class="nuda-sb2-nested-tree__chev" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
        Project
      </button>
      <div class="nuda-sb2-nested-tree__panel" id="sb2nt-project">
        <div class="nuda-sb2-nested-tree__inner">
          <ul class="nuda-sb2-nested-tree__list nuda-sb2-nested-tree__list--nested">
            <li><a href="#" class="nuda-sb2-nested-tree__leaf">Tasks</a></li>
            <!-- Nested group follows the same trigger/panel pattern -->
          </ul>
        </div>
      </div>
    </li>
  </ul>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `document.querySelectorAll('.nuda-sb2-nested-tree__trigger').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const group = trigger.closest('.nuda-sb2-nested-tree__group');
    const open = group.classList.toggle('is-open');
    trigger.setAttribute('aria-expanded', String(open));
  });
});`,
      },
    ],
  },

  /* ─────────────── 4. Cursor Magnify Dock ─────────────── */
  {
    id: "sb2-cursor-dock",
    name: "Cursor Magnify Dock",
    category: CAT,
    preview: (
      <nav aria-label="Dock" className="nuda-sb2-cursor-dock">
        <ul className="nuda-sb2-cursor-dock__list">
          {[
            { l: "Files", c: "#ff5e7a" },
            { l: "Mail", c: "#ffb45e" },
            { l: "Music", c: "#e4ff54" },
            { l: "Photos", c: "#62b6ff" },
            { l: "Terminal", c: "#9d6dff" },
          ].map((it, i) => (
            <li key={i}>
              <button type="button" className="nuda-sb2-cursor-dock__icon" style={{ background: it.c, ["--scale" as string]: "1" }} aria-label={it.l} />
            </li>
          ))}
        </ul>
      </nav>
    ),
    cssInline: `
      .nuda-sb2-cursor-dock{display:inline-block;padding:10px 14px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:20px;backdrop-filter:blur(14px)}
      .nuda-sb2-cursor-dock__list{list-style:none;margin:0;padding:0;display:flex;align-items:flex-end;gap:10px}
      .nuda-sb2-cursor-dock__icon{width:44px;height:44px;border-radius:12px;border:0;cursor:pointer;transform:scale(var(--scale, 1)) translateY(calc((var(--scale, 1) - 1) * -14px));transition:transform .18s cubic-bezier(.16,1,.3,1);will-change:transform;box-shadow:0 6px 16px -8px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.35)}
      .nuda-sb2-cursor-dock__icon:focus-visible{outline:2px solid #e4ff54;outline-offset:3px}
      @media (prefers-reduced-motion:reduce){.nuda-sb2-cursor-dock__icon{transition:none;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Dock" class="nuda-sb2-cursor-dock">
  <ul class="nuda-sb2-cursor-dock__list">
    <li><button type="button" class="nuda-sb2-cursor-dock__icon" style="background:#ff5e7a;--scale:1" aria-label="Files"></button></li>
    <li><button type="button" class="nuda-sb2-cursor-dock__icon" style="background:#ffb45e;--scale:1" aria-label="Mail"></button></li>
    <li><button type="button" class="nuda-sb2-cursor-dock__icon" style="background:#e4ff54;--scale:1" aria-label="Music"></button></li>
    <li><button type="button" class="nuda-sb2-cursor-dock__icon" style="background:#62b6ff;--scale:1" aria-label="Photos"></button></li>
    <li><button type="button" class="nuda-sb2-cursor-dock__icon" style="background:#9d6dff;--scale:1" aria-label="Terminal"></button></li>
  </ul>
</nav>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// True pointer-proximity magnification (not just :hover on neighbors)
const dock = document.querySelector('.nuda-sb2-cursor-dock');
const icons = [...dock.querySelectorAll('.nuda-sb2-cursor-dock__icon')];
const MAX_SCALE = 1.6;
const RADIUS = 90;

dock.addEventListener('mousemove', (e) => {
  icons.forEach((icon) => {
    const rect = icon.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const dist = Math.abs(e.clientX - center);
    const scale = 1 + Math.max(0, 1 - dist / RADIUS) * (MAX_SCALE - 1);
    icon.style.setProperty('--scale', scale.toFixed(2));
  });
});

dock.addEventListener('mouseleave', () => {
  icons.forEach((icon) => icon.style.setProperty('--scale', '1'));
});`,
      },
    ],
  },

  /* ─────────────── 5. Tooltip Toolbar ─────────────── */
  {
    id: "sb2-tooltip-toolbar",
    name: "Tooltip Toolbar",
    category: CAT,
    preview: (
      <div className="nuda-sb2-tooltip-toolbar" role="toolbar" aria-label="Formatting" aria-orientation="vertical">
        {[
          { l: "Bold", d: "M6 4h8a4 4 0 010 8H6zM6 12h9a4 4 0 010 8H6z" },
          { l: "Italic", d: "M19 4h-9M14 20H5M15 4L9 20" },
          { l: "Link", d: "M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1.5 1.5M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1.5-1.5" },
        ].map((it, i) => (
          <div className="nuda-sb2-tooltip-toolbar__item" key={i}>
            <button type="button" className="nuda-sb2-tooltip-toolbar__btn" aria-label={it.l}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d={it.d} />
              </svg>
            </button>
            <span className="nuda-sb2-tooltip-toolbar__tip" role="tooltip" aria-hidden="true">{it.l}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-sb2-tooltip-toolbar{display:inline-flex;flex-direction:column;gap:6px;padding:8px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:14px}
      .nuda-sb2-tooltip-toolbar__item{position:relative}
      .nuda-sb2-tooltip-toolbar__btn{width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:transparent;border:0;border-radius:10px;color:#a0a0a8;cursor:pointer;transition:background .2s,color .2s}
      .nuda-sb2-tooltip-toolbar__btn svg{width:18px;height:18px}
      .nuda-sb2-tooltip-toolbar__btn:hover,.nuda-sb2-tooltip-toolbar__btn:focus-visible{background:rgba(255,255,255,.06);color:#fafafa}
      .nuda-sb2-tooltip-toolbar__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-sb2-tooltip-toolbar__tip{position:absolute;left:calc(100% + 10px);top:50%;transform:translate(-6px,-50%);padding:6px 10px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#fafafa;font-size:11px;font-weight:500;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .25s,transform .3s cubic-bezier(.16,1,.3,1);z-index:2}
      .nuda-sb2-tooltip-toolbar__btn:hover + .nuda-sb2-tooltip-toolbar__tip,.nuda-sb2-tooltip-toolbar__btn:focus-visible + .nuda-sb2-tooltip-toolbar__tip{opacity:1;transform:translate(0,-50%)}
      @media (prefers-reduced-motion:reduce){.nuda-sb2-tooltip-toolbar__tip{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sb2-tooltip-toolbar" role="toolbar" aria-label="Formatting" aria-orientation="vertical">
  <div class="nuda-sb2-tooltip-toolbar__item">
    <button type="button" class="nuda-sb2-tooltip-toolbar__btn" aria-label="Bold">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 4h8a4 4 0 010 8H6zM6 12h9a4 4 0 010 8H6z" />
      </svg>
    </button>
    <span class="nuda-sb2-tooltip-toolbar__tip" role="tooltip" aria-hidden="true">Bold</span>
  </div>
  <!-- More items -->
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Notification Badge Nav ─────────────── */
  {
    id: "sb2-badge-nav",
    name: "Notification Badge Nav",
    category: CAT,
    preview: (
      <nav aria-label="Main" className="nuda-sb2-badge-nav">
        <ul className="nuda-sb2-badge-nav__list">
          {[
            { l: "Home", a: true, d: "M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V11z" },
            { l: "Messages", b: "3", d: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" },
            { l: "Alerts", b: "12", d: "M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" },
            { l: "Settings", d: "M12 15a3 3 0 100-6 3 3 0 000 6z" },
          ].map((it, i) => (
            <li key={i}>
              <a href="#" className="nuda-sb2-badge-nav__item" aria-current={it.a ? "page" : undefined}>
                <span className="nuda-sb2-badge-nav__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={it.d} />
                  </svg>
                </span>
                <span className="nuda-sb2-badge-nav__text">{it.l}</span>
                {it.b ? (
                  <span className="nuda-sb2-badge-nav__badge">
                    {it.b}
                    <span className="nuda-sb2-badge-nav__sr"> unread</span>
                  </span>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    ),
    cssInline: `
      .nuda-sb2-badge-nav{width:180px;padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:14px}
      .nuda-sb2-badge-nav__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:3px}
      .nuda-sb2-badge-nav__item{display:flex;align-items:center;gap:10px;padding:8px 10px;min-height:36px;border-radius:9px;color:#a0a0a8;text-decoration:none;font-size:12px;font-weight:500;transition:background .2s,color .2s}
      .nuda-sb2-badge-nav__item:hover{background:rgba(255,255,255,.05);color:#fafafa}
      .nuda-sb2-badge-nav__item[aria-current="page"]{color:#e4ff54;background:rgba(228,255,84,.08)}
      .nuda-sb2-badge-nav__item:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-sb2-badge-nav__icon svg{width:16px;height:16px}
      .nuda-sb2-badge-nav__text{flex:1}
      .nuda-sb2-badge-nav__badge{min-width:18px;height:18px;padding:0 5px;display:inline-flex;align-items:center;justify-content:center;background:#e4ff54;color:#0a0a0a;font-size:10px;font-weight:700;border-radius:99px;animation:_nuda-sb2badgeNavPop .5s cubic-bezier(.34,1.56,.64,1) both}
      .nuda-sb2-badge-nav__sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      @keyframes _nuda-sb2badgeNavPop{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
      @media (prefers-reduced-motion:reduce){.nuda-sb2-badge-nav__badge{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<nav aria-label="Main" class="nuda-sb2-badge-nav">
  <ul class="nuda-sb2-badge-nav__list">
    <li>
      <a href="#" class="nuda-sb2-badge-nav__item" aria-current="page">
        <span class="nuda-sb2-badge-nav__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 11l9-8 9 8v10a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V11z" />
          </svg>
        </span>
        <span class="nuda-sb2-badge-nav__text">Home</span>
      </a>
    </li>
    <li>
      <a href="#" class="nuda-sb2-badge-nav__item">
        <span class="nuda-sb2-badge-nav__icon" aria-hidden="true">…</span>
        <span class="nuda-sb2-badge-nav__text">Messages</span>
        <span class="nuda-sb2-badge-nav__badge">3<span class="nuda-sb2-badge-nav__sr"> unread</span></span>
      </a>
    </li>
  </ul>
</nav>`,
      },
    ],
  },

  /* ─────────────── 7. User Card Upward Menu ─────────────── */
  {
    id: "sb2-user-menu",
    name: "User Card Upward Menu",
    category: CAT,
    preview: (
      <div className="nuda-sb2-user-menu is-open">
        <div className="nuda-sb2-user-menu__panel" role="menu">
          <button type="button" className="nuda-sb2-user-menu__menuitem" role="menuitem">Profile</button>
          <button type="button" className="nuda-sb2-user-menu__menuitem" role="menuitem">Billing</button>
          <button type="button" className="nuda-sb2-user-menu__menuitem" role="menuitem">Sign out</button>
        </div>
        <button type="button" className="nuda-sb2-user-menu__trigger" aria-haspopup="menu" aria-expanded="true">
          <span className="nuda-sb2-user-menu__avatar" aria-hidden="true">SG</span>
          <span className="nuda-sb2-user-menu__name">Santiago</span>
          <svg className="nuda-sb2-user-menu__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-sb2-user-menu{position:relative;width:200px}
      .nuda-sb2-user-menu__trigger{position:relative;z-index:1;display:flex;align-items:center;gap:8px;width:100%;padding:8px 10px;min-height:44px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:12px;color:#fafafa;cursor:pointer;transition:background .2s}
      .nuda-sb2-user-menu__trigger:hover{background:rgba(255,255,255,.06)}
      .nuda-sb2-user-menu__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-sb2-user-menu__avatar{width:26px;height:26px;border-radius:50%;background:linear-gradient(135deg,#e4ff54,#6ee7b7);color:#0a0a0a;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0}
      .nuda-sb2-user-menu__name{flex:1;text-align:left;font-size:12px;font-weight:600}
      .nuda-sb2-user-menu__chev{width:14px;height:14px;color:#777;transition:transform .3s cubic-bezier(.16,1,.3,1)}
      .nuda-sb2-user-menu.is-open .nuda-sb2-user-menu__chev{transform:rotate(180deg)}
      .nuda-sb2-user-menu__panel{position:absolute;left:0;right:0;bottom:calc(100% + 8px);padding:6px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:12px;box-shadow:0 12px 28px -10px rgba(0,0,0,.6);transform-origin:bottom center;transform:translateY(6px) scale(.94);opacity:0;pointer-events:none;transition:transform .3s cubic-bezier(.16,1,.3,1),opacity .25s}
      .nuda-sb2-user-menu.is-open .nuda-sb2-user-menu__panel{transform:translateY(0) scale(1);opacity:1;pointer-events:auto}
      .nuda-sb2-user-menu__menuitem{display:block;width:100%;padding:8px 10px;min-height:36px;background:transparent;border:0;color:#a0a0a8;font-size:12px;text-align:left;border-radius:8px;cursor:pointer;transition:background .2s,color .2s}
      .nuda-sb2-user-menu__menuitem:hover{background:rgba(228,255,84,.08);color:#e4ff54}
      .nuda-sb2-user-menu__menuitem:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media (prefers-reduced-motion:reduce){.nuda-sb2-user-menu__panel,.nuda-sb2-user-menu__chev{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sb2-user-menu is-open">
  <div class="nuda-sb2-user-menu__panel" role="menu">
    <button type="button" class="nuda-sb2-user-menu__menuitem" role="menuitem">Profile</button>
    <button type="button" class="nuda-sb2-user-menu__menuitem" role="menuitem">Billing</button>
    <button type="button" class="nuda-sb2-user-menu__menuitem" role="menuitem">Sign out</button>
  </div>
  <button type="button" class="nuda-sb2-user-menu__trigger" aria-haspopup="menu" aria-expanded="true">
    <span class="nuda-sb2-user-menu__avatar" aria-hidden="true">SG</span>
    <span class="nuda-sb2-user-menu__name">Santiago</span>
    <svg class="nuda-sb2-user-menu__chev" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </button>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const wrap = document.querySelector('.nuda-sb2-user-menu');
const trigger = wrap.querySelector('.nuda-sb2-user-menu__trigger');

trigger.addEventListener('click', () => {
  const open = wrap.classList.toggle('is-open');
  trigger.setAttribute('aria-expanded', String(open));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && wrap.classList.contains('is-open')) {
    wrap.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.focus();
  }
});`,
      },
    ],
  },

  /* ─────────────── 8. Search Filtered Nav ─────────────── */
  {
    id: "sb2-search-nav",
    name: "Search Filtered Nav",
    category: CAT,
    preview: (
      <div className="nuda-sb2-search-nav">
        <div className="nuda-sb2-search-nav__field">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
          </svg>
          <input type="search" className="nuda-sb2-search-nav__input" placeholder="Filter…" aria-label="Filter navigation" defaultValue="set" />
        </div>
        <nav aria-label="Main">
          <ul className="nuda-sb2-search-nav__list">
            <li><a href="#" className="nuda-sb2-search-nav__item is-match" aria-current="page">Settings</a></li>
            <li><a href="#" className="nuda-sb2-search-nav__item is-match">Set Password</a></li>
            <li><a href="#" className="nuda-sb2-search-nav__item">Dashboard</a></li>
            <li><a href="#" className="nuda-sb2-search-nav__item">Billing</a></li>
          </ul>
        </nav>
      </div>
    ),
    cssInline: `
      .nuda-sb2-search-nav{width:200px;padding:8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:14px;display:flex;flex-direction:column;gap:8px}
      .nuda-sb2-search-nav__field{display:flex;align-items:center;gap:6px;padding:0 10px;height:36px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:9px;transition:border-color .2s,box-shadow .2s}
      .nuda-sb2-search-nav__field:focus-within{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15)}
      .nuda-sb2-search-nav__field svg{width:14px;height:14px;color:#777;flex-shrink:0}
      .nuda-sb2-search-nav__input{flex:1;min-width:0;background:transparent;border:0;color:#fafafa;font-size:12px;outline:0}
      .nuda-sb2-search-nav__input::placeholder{color:#63636e}
      .nuda-sb2-search-nav__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px}
      .nuda-sb2-search-nav__item{display:block;padding:7px 10px;min-height:32px;border-radius:8px;color:#66666e;text-decoration:none;font-size:12px;font-weight:500;opacity:.35;transform:scale(.98);transition:opacity .25s,transform .25s,background .2s,color .2s}
      .nuda-sb2-search-nav__item.is-match{opacity:1;transform:scale(1);color:#a0a0a8}
      .nuda-sb2-search-nav__item.is-match:hover{background:rgba(255,255,255,.05);color:#fafafa}
      .nuda-sb2-search-nav__item[aria-current="page"]{color:#e4ff54;background:rgba(228,255,84,.08)}
      .nuda-sb2-search-nav__item:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @media (prefers-reduced-motion:reduce){.nuda-sb2-search-nav__item{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-sb2-search-nav">
  <div class="nuda-sb2-search-nav__field">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.35-4.35" />
    </svg>
    <input type="search" class="nuda-sb2-search-nav__input" placeholder="Filter…" aria-label="Filter navigation">
  </div>
  <nav aria-label="Main">
    <ul class="nuda-sb2-search-nav__list">
      <li><a href="#" class="nuda-sb2-search-nav__item is-match" aria-current="page">Settings</a></li>
      <li><a href="#" class="nuda-sb2-search-nav__item">Dashboard</a></li>
    </ul>
  </nav>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const wrap = document.querySelector('.nuda-sb2-search-nav');
const input = wrap.querySelector('.nuda-sb2-search-nav__input');
const items = [...wrap.querySelectorAll('.nuda-sb2-search-nav__item')];

input.addEventListener('input', () => {
  const q = input.value.trim().toLowerCase();
  items.forEach((item) => {
    const match = !q || item.textContent.toLowerCase().includes(q);
    item.classList.toggle('is-match', match);
  });
});`,
      },
    ],
  },
];
