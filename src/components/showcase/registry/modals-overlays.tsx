import type { NudaComponent } from "./types";

export const modalsOverlays: NudaComponent[] = [
  /* ─────────────── FADE MODAL ─────────────── */
  {
    id: "fade-modal",
    name: "Fade Modal",
    category: "Modals & Overlays",
    preview: (
      <div className="nuda-fade-modal-demo" aria-hidden="true">
        <div className="nuda-fade-modal__box">
          <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>Modal Title</div>
          <div style={{ fontSize: "0.6rem", color: "#888" }}>Content goes here</div>
          <div className="nuda-fade-modal__close">&times;</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-fade-modal-demo{display:flex;align-items:center;justify-content:center;padding:.5rem}
      .nuda-fade-modal__box{position:relative;background:rgba(20,20,20,.95);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:.8rem;min-width:100px;max-width:90%;animation:_fmodal 2s ease-in-out infinite}
      .nuda-fade-modal__close{position:absolute;top:6px;right:8px;font-size:.8rem;color:#666;cursor:pointer}
      @keyframes _fmodal{0%{opacity:0;transform:scale(.95)}15%{opacity:1;transform:scale(1)}85%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.95)}}
      @media(prefers-reduced-motion:reduce){.nuda-fade-modal__box{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Backdrop -->
<div class="nuda-modal-backdrop" id="modal-backdrop">
  <!-- Modal -->
  <div class="nuda-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <button class="nuda-modal__close" aria-label="Close">&times;</button>
    <h2 id="modal-title" class="nuda-modal__title">Modal Title</h2>
    <p class="nuda-modal__body">Your content goes here.</p>
    <div class="nuda-modal__actions">
      <button class="nuda-modal__btn nuda-modal__btn--secondary">Cancel</button>
      <button class="nuda-modal__btn nuda-modal__btn--primary">Confirm</button>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Fade Modal
   Modal with fade + scale animation.
   Customize: --modal-bg, --modal-accent */

.nuda-modal-backdrop {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.nuda-modal-backdrop.is-open {
  opacity: 1;
  visibility: visible;
}

.nuda-modal {
  --modal-bg: #141414;
  --modal-accent: #e4ff54;
  position: relative;
  background: var(--modal-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  max-width: 420px;
  width: 90%;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.nuda-modal-backdrop.is-open .nuda-modal {
  transform: scale(1);
}

.nuda-modal__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #666;
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s;
}

.nuda-modal__close:hover { color: #fff; }

.nuda-modal__title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem;
}

.nuda-modal__body {
  font-size: 0.85rem;
  color: #999;
  margin: 0 0 1.5rem;
}

.nuda-modal__actions {
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
}

.nuda-modal__btn {
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.nuda-modal__btn:active { transform: scale(0.97); }

.nuda-modal__btn--secondary {
  background: rgba(255, 255, 255, 0.06);
  color: #ccc;
}

.nuda-modal__btn--primary {
  background: var(--modal-accent);
  color: #0a0a0a;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-modal-backdrop,
  .nuda-modal {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Fade Modal — Toggle with .is-open class */

(function () {
  var backdrop = document.getElementById('modal-backdrop');
  if (!backdrop) return;

  var closeBtn = backdrop.querySelector('.nuda-modal__close');
  var cancelBtn = backdrop.querySelector('.nuda-modal__btn--secondary');

  function close() {
    backdrop.classList.remove('is-open');
  }

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (cancelBtn) cancelBtn.addEventListener('click', close);

  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  // To open: backdrop.classList.add('is-open');
})();`,
      },
    ],
  },

  /* ─────────────── SLIDE DRAWER ─────────────── */
  {
    id: "slide-drawer",
    name: "Slide Drawer",
    category: "Modals & Overlays",
    preview: (
      <div className="nuda-drawer-demo" aria-hidden="true">
        <div className="nuda-drawer-demo__panel">
          <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#fff", marginBottom: 4 }}>Drawer</div>
          <div style={{ width: "100%", height: 4, borderRadius: 2, background: "rgba(255,255,255,.06)", marginBottom: 4 }} />
          <div style={{ width: "70%", height: 4, borderRadius: 2, background: "rgba(255,255,255,.06)" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-drawer-demo{position:relative;width:100%;height:100px;overflow:hidden;border-radius:8px;background:rgba(0,0,0,.2)}
      .nuda-drawer-demo__panel{position:absolute;top:0;bottom:0;right:0;width:55%;background:rgba(20,20,20,.95);border-left:1px solid rgba(255,255,255,.08);padding:.75rem;animation:_dslide 3s ease-in-out infinite}
      @keyframes _dslide{0%{transform:translateX(100%)}15%{transform:translateX(0)}85%{transform:translateX(0)}100%{transform:translateX(100%)}}
      @media(prefers-reduced-motion:reduce){.nuda-drawer-demo__panel{animation:none;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Backdrop -->
<div class="nuda-drawer-backdrop" id="drawer-backdrop">
  <!-- Drawer panel -->
  <aside class="nuda-drawer" role="dialog" aria-label="Navigation drawer">
    <button class="nuda-drawer__close" aria-label="Close">&times;</button>
    <nav class="nuda-drawer__nav">
      <a href="#" class="nuda-drawer__link">Home</a>
      <a href="#" class="nuda-drawer__link">About</a>
      <a href="#" class="nuda-drawer__link">Projects</a>
      <a href="#" class="nuda-drawer__link">Contact</a>
    </nav>
  </aside>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Slide Drawer
   Off-canvas drawer that slides in from the right.
   Customize: --drawer-width, --drawer-bg */

.nuda-drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.nuda-drawer-backdrop.is-open {
  opacity: 1;
  visibility: visible;
}

.nuda-drawer {
  --drawer-width: 320px;
  --drawer-bg: #111;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: var(--drawer-width);
  max-width: 85%;
  background: var(--drawer-bg);
  border-left: 1px solid rgba(255, 255, 255, 0.08);
  padding: 2rem 1.5rem;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-drawer-backdrop.is-open .nuda-drawer {
  transform: translateX(0);
}

.nuda-drawer__close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #666;
  font-size: 1.25rem;
  cursor: pointer;
}

.nuda-drawer__nav {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 2rem;
}

.nuda-drawer__link {
  color: #ccc;
  text-decoration: none;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.9rem;
  transition: background 0.2s, color 0.2s;
}

.nuda-drawer__link:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-drawer-backdrop,
  .nuda-drawer {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Slide Drawer — Toggle with .is-open class */

(function () {
  var backdrop = document.getElementById('drawer-backdrop');
  if (!backdrop) return;

  var closeBtn = backdrop.querySelector('.nuda-drawer__close');

  function close() {
    backdrop.classList.remove('is-open');
  }

  if (closeBtn) closeBtn.addEventListener('click', close);

  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();`,
      },
    ],
  },

  /* ─────────────── DROPDOWN MENU ─────────────── */
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    category: "Modals & Overlays",
    preview: (
      <div className="nuda-dropdown-demo" aria-hidden="true">
        <div className="nuda-dropdown-demo__trigger">
          <span style={{ fontSize: "0.7rem", color: "#ccc" }}>Menu &#9662;</span>
        </div>
        <div className="nuda-dropdown-demo__menu">
          <div className="nuda-dropdown-demo__item">Profile</div>
          <div className="nuda-dropdown-demo__item">Settings</div>
          <div className="nuda-dropdown-demo__item" style={{ color: "#f87171" }}>Logout</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dropdown-demo{display:flex;flex-direction:column;align-items:center;gap:.3rem}
      .nuda-dropdown-demo__trigger{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:.4rem .8rem;cursor:pointer}
      .nuda-dropdown-demo__menu{background:rgba(20,20,20,.95);border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:.25rem;min-width:100px;animation:_ddrop .4s ease-out both}
      .nuda-dropdown-demo__item{padding:.35rem .6rem;border-radius:6px;font-size:.65rem;color:#ccc;cursor:pointer}
      .nuda-dropdown-demo__item:hover{background:rgba(255,255,255,.06)}
      @keyframes _ddrop{from{opacity:0;transform:translateY(-6px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-dropdown-demo__menu{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dropdown">
  <button class="nuda-dropdown__trigger" aria-haspopup="true" aria-expanded="false">
    Menu &#9662;
  </button>
  <div class="nuda-dropdown__menu" role="menu">
    <a href="#" class="nuda-dropdown__item" role="menuitem">Profile</a>
    <a href="#" class="nuda-dropdown__item" role="menuitem">Settings</a>
    <hr class="nuda-dropdown__divider" />
    <a href="#" class="nuda-dropdown__item nuda-dropdown__item--danger" role="menuitem">Logout</a>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Dropdown Menu
   Animated dropdown with scale + fade entrance.
   Customize: --dropdown-bg, --dropdown-accent */

.nuda-dropdown {
  position: relative;
  display: inline-block;
}

.nuda-dropdown__trigger {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #ccc;
  font-size: 0.85rem;
  cursor: pointer;
  transition: background 0.2s;
}

.nuda-dropdown__trigger:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nuda-dropdown__menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 160px;
  background: #141414;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 0.25rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-6px) scale(0.97);
  transform-origin: top left;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  z-index: 100;
}

.nuda-dropdown.is-open .nuda-dropdown__menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0) scale(1);
}

.nuda-dropdown__item {
  display: block;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  color: #ccc;
  font-size: 0.8rem;
  text-decoration: none;
  transition: background 0.15s;
}

.nuda-dropdown__item:hover {
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
}

.nuda-dropdown__item--danger { color: #f87171; }
.nuda-dropdown__item--danger:hover { background: rgba(248, 113, 113, 0.08); }

.nuda-dropdown__divider {
  border: none;
  height: 1px;
  background: rgba(255, 255, 255, 0.06);
  margin: 0.25rem 0;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-dropdown__menu { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Dropdown Menu — Toggle with .is-open class */

(function () {
  var dropdowns = document.querySelectorAll('.nuda-dropdown');
  dropdowns.forEach(function (dropdown) {
    var trigger = dropdown.querySelector('.nuda-dropdown__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', function () {
      var isOpen = dropdown.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });

    document.addEventListener('click', function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── BOTTOM SHEET ─────────────── */
  {
    id: "bottom-sheet",
    name: "Bottom Sheet",
    category: "Modals & Overlays",
    preview: (
      <div className="nuda-bsheet-demo" aria-hidden="true">
        <div className="nuda-bsheet-demo__sheet">
          <div className="nuda-bsheet-demo__handle" />
          <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#fff", marginBottom: 3 }}>Bottom Sheet</div>
          <div style={{ width: "100%", height: 3, borderRadius: 2, background: "rgba(255,255,255,.06)", marginBottom: 3 }} />
          <div style={{ width: "60%", height: 3, borderRadius: 2, background: "rgba(255,255,255,.06)" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-bsheet-demo{position:relative;width:100%;height:110px;overflow:hidden;border-radius:8px;background:rgba(0,0,0,.2)}
      .nuda-bsheet-demo__sheet{position:absolute;bottom:0;left:0;right:0;background:rgba(20,20,20,.95);border-top:1px solid rgba(255,255,255,.08);border-radius:12px 12px 0 0;padding:.75rem;animation:_bsheet 3s ease-in-out infinite}
      .nuda-bsheet-demo__handle{width:30px;height:3px;background:rgba(255,255,255,.2);border-radius:2px;margin:0 auto .5rem}
      @keyframes _bsheet{0%{transform:translateY(100%)}15%{transform:translateY(0)}85%{transform:translateY(0)}100%{transform:translateY(100%)}}
      @media(prefers-reduced-motion:reduce){.nuda-bsheet-demo__sheet{animation:none;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bsheet-backdrop" id="bottom-sheet">
  <div class="nuda-bsheet" role="dialog" aria-label="Bottom sheet">
    <div class="nuda-bsheet__handle"></div>
    <h3 class="nuda-bsheet__title">Title</h3>
    <p class="nuda-bsheet__body">Sheet content goes here.</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Bottom Sheet
   Mobile-style bottom sheet that slides up.
   Customize: --sheet-bg, --sheet-handle */

.nuda-bsheet-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

.nuda-bsheet-backdrop.is-open {
  opacity: 1;
  visibility: visible;
}

.nuda-bsheet {
  --sheet-bg: #141414;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--sheet-bg);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px 16px 0 0;
  padding: 1rem 1.5rem 2rem;
  max-height: 80vh;
  overflow-y: auto;
  transform: translateY(100%);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-bsheet-backdrop.is-open .nuda-bsheet {
  transform: translateY(0);
}

.nuda-bsheet__handle {
  width: 36px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  margin: 0 auto 1rem;
}

.nuda-bsheet__title {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.5rem;
}

.nuda-bsheet__body {
  font-size: 0.85rem;
  color: #999;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-bsheet-backdrop,
  .nuda-bsheet {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Bottom Sheet — Toggle with .is-open class */

(function () {
  var backdrop = document.getElementById('bottom-sheet');
  if (!backdrop) return;

  function close() {
    backdrop.classList.remove('is-open');
  }

  backdrop.addEventListener('click', function (e) {
    if (e.target === backdrop) close();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });

  // To open: backdrop.classList.add('is-open');
})();`,
      },
    ],
  },

  /* ─────────────── POPOVER ─────────────── */
  {
    id: "popover",
    name: "Popover",
    category: "Modals & Overlays",
    preview: (
      <div className="nuda-popover-demo" aria-hidden="true">
        <div className="nuda-popover-demo__trigger">
          <span style={{ fontSize: "0.7rem", color: "#ccc" }}>Click</span>
        </div>
        <div className="nuda-popover-demo__content">
          <div style={{ fontSize: "0.6rem", fontWeight: 600, color: "#fff", marginBottom: 2 }}>Popover</div>
          <div style={{ fontSize: "0.55rem", color: "#888" }}>Extra info here</div>
          <div className="nuda-popover-demo__arrow" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-popover-demo{display:flex;flex-direction:column;align-items:center;gap:.3rem}
      .nuda-popover-demo__trigger{background:rgba(228,255,84,.1);border:1px solid rgba(228,255,84,.2);border-radius:8px;padding:.35rem .8rem;cursor:pointer}
      .nuda-popover-demo__content{position:relative;background:#1a1a1a;border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.6rem .8rem;animation:_popfade .3s ease-out}
      .nuda-popover-demo__arrow{position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #1a1a1a}
      @keyframes _popfade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-popover-demo__content{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-popover">
  <button class="nuda-popover__trigger">Click me</button>
  <div class="nuda-popover__content">
    <div class="nuda-popover__arrow"></div>
    <h4 class="nuda-popover__title">Popover Title</h4>
    <p class="nuda-popover__body">Additional information goes here.</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Popover
   Click-triggered popover with arrow.
   Customize: --pop-bg, --pop-border */

.nuda-popover {
  position: relative;
  display: inline-block;
}

.nuda-popover__trigger {
  background: rgba(228, 255, 84, 0.1);
  border: 1px solid rgba(228, 255, 84, 0.2);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #e4ff54;
  font-size: 0.85rem;
  cursor: pointer;
}

.nuda-popover__content {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: #1a1a1a;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 0.75rem 1rem;
  min-width: 180px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  z-index: 100;
}

.nuda-popover.is-open .nuda-popover__content {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.nuda-popover__arrow {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #1a1a1a;
}

.nuda-popover__title {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.25rem;
}

.nuda-popover__body {
  font-size: 0.78rem;
  color: #999;
  margin: 0;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-popover__content { transition: none; }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Popover — Toggle with .is-open class */

(function () {
  var popovers = document.querySelectorAll('.nuda-popover');
  popovers.forEach(function (pop) {
    var trigger = pop.querySelector('.nuda-popover__trigger');
    if (!trigger) return;

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      pop.classList.toggle('is-open');
    });

    document.addEventListener('click', function (e) {
      if (!pop.contains(e.target)) {
        pop.classList.remove('is-open');
      }
    });
  });
})();`,
      },
    ],
  },
];
