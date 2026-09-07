import type { NudaComponent } from "./types";

/* Dropdowns & Menus (extra) — six additional menu patterns not covered by
   dropdowns-menus.tsx: destructive-action separation, keyboard-shortcut
   columns, a radio-group menu, an icon+description grid menu, a menu with a
   sticky footer action, and a toolbar overflow menu. Authored as preview +
   cssInline + HTML; the copyable CSS tab is derived from cssInline by the
   registry reconcile step. Previews render the open state. */

const CAT = "Dropdowns & Menus";

export const dropdownsMenusExtra: NudaComponent[] = [
  /* ─────────────── DESTRUCTIVE ACTION MENU ─────────────── */
  {
    id: "dm2-destructive",
    name: "Destructive Action Menu",
    category: CAT,
    preview: (
      <div className="nuda-dm2-destructive">
        <button
          className="nuda-dm2-destructive__trigger"
          type="button"
          aria-haspopup="menu"
          aria-expanded="true"
        >
          Options ▾
        </button>
        <div className="nuda-dm2-destructive__menu" role="menu" aria-label="Options">
          <button className="nuda-dm2-destructive__item" type="button" role="menuitem">
            Rename
          </button>
          <button className="nuda-dm2-destructive__item" type="button" role="menuitem">
            Duplicate
          </button>
          <div className="nuda-dm2-destructive__sep" role="separator"></div>
          <button
            className="nuda-dm2-destructive__item nuda-dm2-destructive__item--danger"
            type="button"
            role="menuitem"
          >
            <svg
              className="nuda-dm2-destructive__ic"
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" />
            </svg>
            Delete conversation
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dm2-destructive{position:relative;display:inline-block;font-family:inherit;transform-origin:top left}
      .nuda-dm2-destructive__trigger{background:#1a1a1a;color:#fafafa;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:.55rem .9rem;font-size:.8rem;cursor:pointer;min-height:44px}
      .nuda-dm2-destructive__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dm2-destructive__menu{margin:.4rem 0 0;padding:.35rem;width:220px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;transform-origin:top left;animation:_nuda-dm2destructiveIn .2s ease-out}
      .nuda-dm2-destructive__item{display:flex;align-items:center;gap:.55rem;width:100%;box-sizing:border-box;min-height:44px;padding:.5rem .65rem;border:0;background:transparent;border-radius:6px;font-size:.8rem;color:#cfcfcf;text-align:left;cursor:pointer;transition:background .15s ease,color .15s ease}
      .nuda-dm2-destructive__item:hover,.nuda-dm2-destructive__item:focus-visible{background:rgba(255,255,255,.06);color:#fafafa}
      .nuda-dm2-destructive__item:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      .nuda-dm2-destructive__sep{height:1px;margin:.3rem .2rem;background:rgba(255,255,255,.1)}
      .nuda-dm2-destructive__item--danger{color:#ff6b6b}
      .nuda-dm2-destructive__item--danger:hover,.nuda-dm2-destructive__item--danger:focus-visible{background:rgba(255,90,90,.12);color:#ff8080}
      .nuda-dm2-destructive__ic{flex:0 0 auto}
      @keyframes _nuda-dm2destructiveIn{from{opacity:0;transform:translateY(-6px) scale(.98)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-dm2-destructive__menu{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dm2-destructive">
  <button class="nuda-dm2-destructive__trigger" type="button" aria-haspopup="menu" aria-expanded="true">Options ▾</button>
  <div class="nuda-dm2-destructive__menu" role="menu" aria-label="Options">
    <button class="nuda-dm2-destructive__item" type="button" role="menuitem">Rename</button>
    <button class="nuda-dm2-destructive__item" type="button" role="menuitem">Duplicate</button>
    <div class="nuda-dm2-destructive__sep" role="separator"></div>
    <button class="nuda-dm2-destructive__item nuda-dm2-destructive__item--danger" type="button" role="menuitem">
      <svg class="nuda-dm2-destructive__ic" aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"></path>
      </svg>
      Delete conversation
    </button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── SHORTCUT MENU ─────────────── */
  {
    id: "dm2-shortcuts",
    name: "Shortcut Menu",
    category: CAT,
    preview: (
      <div className="nuda-dm2-shortcuts">
        <button
          className="nuda-dm2-shortcuts__trigger"
          type="button"
          aria-haspopup="menu"
          aria-expanded="true"
        >
          Edit ▾
        </button>
        <div className="nuda-dm2-shortcuts__menu" role="menu" aria-label="Edit">
          <button className="nuda-dm2-shortcuts__item" type="button" role="menuitem">
            <span>Cut</span>
            <kbd className="nuda-dm2-shortcuts__kbd">⌘X</kbd>
          </button>
          <button className="nuda-dm2-shortcuts__item" type="button" role="menuitem">
            <span>Copy</span>
            <kbd className="nuda-dm2-shortcuts__kbd">⌘C</kbd>
          </button>
          <button className="nuda-dm2-shortcuts__item" type="button" role="menuitem">
            <span>Paste</span>
            <kbd className="nuda-dm2-shortcuts__kbd">⌘V</kbd>
          </button>
          <button className="nuda-dm2-shortcuts__item" type="button" role="menuitem">
            <span>Select all</span>
            <kbd className="nuda-dm2-shortcuts__kbd">⌘A</kbd>
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dm2-shortcuts{position:relative;display:inline-block;font-family:inherit;transform-origin:top left}
      .nuda-dm2-shortcuts__trigger{background:#1a1a1a;color:#fafafa;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:.55rem .9rem;font-size:.8rem;cursor:pointer;min-height:44px}
      .nuda-dm2-shortcuts__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dm2-shortcuts__menu{margin:.4rem 0 0;padding:.35rem;width:200px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;transform-origin:top left;animation:_nuda-dm2shortcutsIn .2s ease-out}
      .nuda-dm2-shortcuts__item{display:flex;align-items:center;justify-content:space-between;gap:.75rem;width:100%;box-sizing:border-box;min-height:44px;padding:.5rem .65rem;border:0;background:transparent;border-radius:6px;font-size:.8rem;color:#cfcfcf;text-align:left;cursor:pointer;transition:background .15s ease,color .15s ease}
      .nuda-dm2-shortcuts__item:hover,.nuda-dm2-shortcuts__item:focus-visible{background:rgba(228,255,84,.1);color:#fafafa}
      .nuda-dm2-shortcuts__item:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      .nuda-dm2-shortcuts__kbd{font:inherit;font-size:.68rem;color:#777;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:.1rem .35rem}
      @keyframes _nuda-dm2shortcutsIn{from{opacity:0;transform:translateY(-6px) scale(.98)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-dm2-shortcuts__menu{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dm2-shortcuts">
  <button class="nuda-dm2-shortcuts__trigger" type="button" aria-haspopup="menu" aria-expanded="true">Edit ▾</button>
  <div class="nuda-dm2-shortcuts__menu" role="menu" aria-label="Edit">
    <button class="nuda-dm2-shortcuts__item" type="button" role="menuitem"><span>Cut</span><kbd class="nuda-dm2-shortcuts__kbd">⌘X</kbd></button>
    <button class="nuda-dm2-shortcuts__item" type="button" role="menuitem"><span>Copy</span><kbd class="nuda-dm2-shortcuts__kbd">⌘C</kbd></button>
    <button class="nuda-dm2-shortcuts__item" type="button" role="menuitem"><span>Paste</span><kbd class="nuda-dm2-shortcuts__kbd">⌘V</kbd></button>
    <button class="nuda-dm2-shortcuts__item" type="button" role="menuitem"><span>Select all</span><kbd class="nuda-dm2-shortcuts__kbd">⌘A</kbd></button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── RADIO GROUP MENU ─────────────── */
  {
    id: "dm2-radio",
    name: "Radio Group Menu",
    category: CAT,
    preview: (
      <div className="nuda-dm2-radio">
        <button
          className="nuda-dm2-radio__trigger"
          type="button"
          aria-haspopup="menu"
          aria-expanded="true"
        >
          View: Grid ▾
        </button>
        <div className="nuda-dm2-radio__menu" role="menu" aria-label="View">
          <div className="nuda-dm2-radio__group" role="group" aria-label="View mode">
            <button
              className="nuda-dm2-radio__item"
              type="button"
              role="menuitemradio"
              aria-checked="false"
            >
              <span className="nuda-dm2-radio__dot" aria-hidden="true"></span>
              List
            </button>
            <button
              className="nuda-dm2-radio__item nuda-dm2-radio__item--checked"
              type="button"
              role="menuitemradio"
              aria-checked="true"
            >
              <span className="nuda-dm2-radio__dot" aria-hidden="true"></span>
              Grid
            </button>
            <button
              className="nuda-dm2-radio__item"
              type="button"
              role="menuitemradio"
              aria-checked="false"
            >
              <span className="nuda-dm2-radio__dot" aria-hidden="true"></span>
              Board
            </button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dm2-radio{position:relative;display:inline-block;font-family:inherit;transform-origin:top left}
      .nuda-dm2-radio__trigger{background:#1a1a1a;color:#fafafa;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:.55rem .9rem;font-size:.8rem;cursor:pointer;min-height:44px}
      .nuda-dm2-radio__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dm2-radio__menu{margin:.4rem 0 0;padding:.35rem;width:180px;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;transform-origin:top left;animation:_nuda-dm2radioIn .2s ease-out}
      .nuda-dm2-radio__item{display:flex;align-items:center;gap:.6rem;width:100%;box-sizing:border-box;min-height:44px;padding:.5rem .65rem;border:0;background:transparent;border-radius:6px;font-size:.8rem;color:#cfcfcf;text-align:left;cursor:pointer;transition:background .15s ease,color .15s ease}
      .nuda-dm2-radio__item:hover,.nuda-dm2-radio__item:focus-visible{background:rgba(255,255,255,.06);color:#fafafa}
      .nuda-dm2-radio__item:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      .nuda-dm2-radio__dot{flex:0 0 auto;width:14px;height:14px;border-radius:50%;border:1.5px solid rgba(255,255,255,.25);box-sizing:border-box}
      .nuda-dm2-radio__item--checked{color:#e4ff54}
      .nuda-dm2-radio__item--checked .nuda-dm2-radio__dot{border-color:#e4ff54;background:radial-gradient(circle,#e4ff54 0 40%,transparent 42%)}
      @keyframes _nuda-dm2radioIn{from{opacity:0;transform:translateY(-6px) scale(.98)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-dm2-radio__menu{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dm2-radio">
  <button class="nuda-dm2-radio__trigger" type="button" aria-haspopup="menu" aria-expanded="true">View: Grid ▾</button>
  <div class="nuda-dm2-radio__menu" role="menu" aria-label="View">
    <div class="nuda-dm2-radio__group" role="group" aria-label="View mode">
      <button class="nuda-dm2-radio__item" type="button" role="menuitemradio" aria-checked="false">
        <span class="nuda-dm2-radio__dot" aria-hidden="true"></span>
        List
      </button>
      <button class="nuda-dm2-radio__item nuda-dm2-radio__item--checked" type="button" role="menuitemradio" aria-checked="true">
        <span class="nuda-dm2-radio__dot" aria-hidden="true"></span>
        Grid
      </button>
      <button class="nuda-dm2-radio__item" type="button" role="menuitemradio" aria-checked="false">
        <span class="nuda-dm2-radio__dot" aria-hidden="true"></span>
        Board
      </button>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── ICON GRID MENU ─────────────── */
  {
    id: "dm2-icongrid",
    name: "Icon Grid Menu",
    category: CAT,
    preview: (
      <div className="nuda-dm2-icongrid">
        <button
          className="nuda-dm2-icongrid__trigger"
          type="button"
          aria-haspopup="menu"
          aria-expanded="true"
        >
          Insert ▾
        </button>
        <div className="nuda-dm2-icongrid__menu" role="menu" aria-label="Insert">
          <button className="nuda-dm2-icongrid__item" type="button" role="menuitem">
            <span className="nuda-dm2-icongrid__ic" aria-hidden="true">▦</span>
            <span className="nuda-dm2-icongrid__body">
              <span className="nuda-dm2-icongrid__label">Table</span>
              <span className="nuda-dm2-icongrid__desc">Rows &amp; columns</span>
            </span>
          </button>
          <button className="nuda-dm2-icongrid__item" type="button" role="menuitem">
            <span className="nuda-dm2-icongrid__ic" aria-hidden="true">▤</span>
            <span className="nuda-dm2-icongrid__body">
              <span className="nuda-dm2-icongrid__label">List</span>
              <span className="nuda-dm2-icongrid__desc">Bulleted items</span>
            </span>
          </button>
          <button className="nuda-dm2-icongrid__item" type="button" role="menuitem">
            <span className="nuda-dm2-icongrid__ic" aria-hidden="true">▧</span>
            <span className="nuda-dm2-icongrid__body">
              <span className="nuda-dm2-icongrid__label">Image</span>
              <span className="nuda-dm2-icongrid__desc">Upload a file</span>
            </span>
          </button>
          <button className="nuda-dm2-icongrid__item" type="button" role="menuitem">
            <span className="nuda-dm2-icongrid__ic" aria-hidden="true">❝</span>
            <span className="nuda-dm2-icongrid__body">
              <span className="nuda-dm2-icongrid__label">Quote</span>
              <span className="nuda-dm2-icongrid__desc">Callout block</span>
            </span>
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dm2-icongrid{position:relative;display:inline-block;font-family:inherit;transform-origin:top left}
      .nuda-dm2-icongrid__trigger{background:#1a1a1a;color:#fafafa;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:.55rem .9rem;font-size:.8rem;cursor:pointer;min-height:44px}
      .nuda-dm2-icongrid__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dm2-icongrid__menu{display:grid;grid-template-columns:1fr 1fr;gap:.3rem;margin:.4rem 0 0;padding:.4rem;width:280px;box-sizing:border-box;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;transform-origin:top left;animation:_nuda-dm2icongridIn .2s ease-out}
      .nuda-dm2-icongrid__item{display:flex;align-items:flex-start;gap:.5rem;box-sizing:border-box;min-height:44px;padding:.5rem;border:0;background:transparent;border-radius:8px;text-align:left;cursor:pointer;transition:background .15s ease}
      .nuda-dm2-icongrid__item:hover,.nuda-dm2-icongrid__item:focus-visible{background:rgba(255,255,255,.06)}
      .nuda-dm2-icongrid__item:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      .nuda-dm2-icongrid__ic{flex:0 0 auto;width:22px;text-align:center;font-size:.9rem;color:#e4ff54;line-height:1.4}
      .nuda-dm2-icongrid__body{display:flex;flex-direction:column;gap:.1rem;min-width:0}
      .nuda-dm2-icongrid__label{font-size:.78rem;color:#fafafa}
      .nuda-dm2-icongrid__desc{font-size:.68rem;color:#777;white-space:normal}
      @keyframes _nuda-dm2icongridIn{from{opacity:0;transform:translateY(-6px) scale(.98)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-dm2-icongrid__menu{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dm2-icongrid">
  <button class="nuda-dm2-icongrid__trigger" type="button" aria-haspopup="menu" aria-expanded="true">Insert ▾</button>
  <div class="nuda-dm2-icongrid__menu" role="menu" aria-label="Insert">
    <button class="nuda-dm2-icongrid__item" type="button" role="menuitem">
      <span class="nuda-dm2-icongrid__ic" aria-hidden="true">▦</span>
      <span class="nuda-dm2-icongrid__body">
        <span class="nuda-dm2-icongrid__label">Table</span>
        <span class="nuda-dm2-icongrid__desc">Rows &amp; columns</span>
      </span>
    </button>
    <button class="nuda-dm2-icongrid__item" type="button" role="menuitem">
      <span class="nuda-dm2-icongrid__ic" aria-hidden="true">▤</span>
      <span class="nuda-dm2-icongrid__body">
        <span class="nuda-dm2-icongrid__label">List</span>
        <span class="nuda-dm2-icongrid__desc">Bulleted items</span>
      </span>
    </button>
    <button class="nuda-dm2-icongrid__item" type="button" role="menuitem">
      <span class="nuda-dm2-icongrid__ic" aria-hidden="true">▧</span>
      <span class="nuda-dm2-icongrid__body">
        <span class="nuda-dm2-icongrid__label">Image</span>
        <span class="nuda-dm2-icongrid__desc">Upload a file</span>
      </span>
    </button>
    <button class="nuda-dm2-icongrid__item" type="button" role="menuitem">
      <span class="nuda-dm2-icongrid__ic" aria-hidden="true">❝</span>
      <span class="nuda-dm2-icongrid__body">
        <span class="nuda-dm2-icongrid__label">Quote</span>
        <span class="nuda-dm2-icongrid__desc">Callout block</span>
      </span>
    </button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── STICKY FOOTER MENU ─────────────── */
  {
    id: "dm2-stickyfooter",
    name: "Sticky Footer Menu",
    category: CAT,
    preview: (
      <div className="nuda-dm2-stickyfooter">
        <button
          className="nuda-dm2-stickyfooter__trigger"
          type="button"
          aria-haspopup="menu"
          aria-expanded="true"
        >
          Notifications ▾
        </button>
        <div className="nuda-dm2-stickyfooter__menu" role="menu" aria-label="Notifications">
          <div className="nuda-dm2-stickyfooter__list">
            <button className="nuda-dm2-stickyfooter__item" type="button" role="menuitem">
              New comment on your post
            </button>
            <button className="nuda-dm2-stickyfooter__item" type="button" role="menuitem">
              Someone followed you
            </button>
            <button className="nuda-dm2-stickyfooter__item" type="button" role="menuitem">
              Your export is ready
            </button>
          </div>
          <button className="nuda-dm2-stickyfooter__foot" type="button" role="menuitem">
            See all notifications
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dm2-stickyfooter{position:relative;display:inline-block;font-family:inherit;transform-origin:top left}
      .nuda-dm2-stickyfooter__trigger{background:#1a1a1a;color:#fafafa;border:1px solid rgba(255,255,255,.12);border-radius:8px;padding:.55rem .9rem;font-size:.8rem;cursor:pointer;min-height:44px}
      .nuda-dm2-stickyfooter__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dm2-stickyfooter__menu{display:flex;flex-direction:column;margin:.4rem 0 0;width:240px;max-height:180px;box-sizing:border-box;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;transform-origin:top left;animation:_nuda-dm2stickyfooterIn .2s ease-out}
      .nuda-dm2-stickyfooter__list{overflow-y:auto;padding:.35rem}
      .nuda-dm2-stickyfooter__item{display:block;width:100%;box-sizing:border-box;min-height:44px;padding:.5rem .65rem;border:0;background:transparent;border-radius:6px;font-size:.78rem;line-height:1.35;color:#cfcfcf;text-align:left;cursor:pointer;transition:background .15s ease,color .15s ease}
      .nuda-dm2-stickyfooter__item:hover,.nuda-dm2-stickyfooter__item:focus-visible{background:rgba(255,255,255,.06);color:#fafafa}
      .nuda-dm2-stickyfooter__item:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      .nuda-dm2-stickyfooter__foot{position:sticky;bottom:0;width:100%;box-sizing:border-box;min-height:44px;padding:.6rem .8rem;border:0;border-top:1px solid rgba(255,255,255,.1);background:#141414;font-size:.75rem;font-weight:600;color:#e4ff54;text-align:center;cursor:pointer;transition:background .15s ease}
      .nuda-dm2-stickyfooter__foot:hover,.nuda-dm2-stickyfooter__foot:focus-visible{background:rgba(228,255,84,.08)}
      .nuda-dm2-stickyfooter__foot:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      @keyframes _nuda-dm2stickyfooterIn{from{opacity:0;transform:translateY(-6px) scale(.98)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-dm2-stickyfooter__menu{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dm2-stickyfooter">
  <button class="nuda-dm2-stickyfooter__trigger" type="button" aria-haspopup="menu" aria-expanded="true">Notifications ▾</button>
  <div class="nuda-dm2-stickyfooter__menu" role="menu" aria-label="Notifications">
    <div class="nuda-dm2-stickyfooter__list">
      <button class="nuda-dm2-stickyfooter__item" type="button" role="menuitem">New comment on your post</button>
      <button class="nuda-dm2-stickyfooter__item" type="button" role="menuitem">Someone followed you</button>
      <button class="nuda-dm2-stickyfooter__item" type="button" role="menuitem">Your export is ready</button>
    </div>
    <button class="nuda-dm2-stickyfooter__foot" type="button" role="menuitem">See all notifications</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── TOOLBAR OVERFLOW MENU ─────────────── */
  {
    id: "dm2-overflow",
    name: "Toolbar Overflow Menu",
    category: CAT,
    preview: (
      <div className="nuda-dm2-overflow">
        <button
          className="nuda-dm2-overflow__trigger"
          type="button"
          aria-haspopup="menu"
          aria-expanded="true"
          aria-label="More actions"
        >
          ⋯
        </button>
        <div className="nuda-dm2-overflow__menu" role="menu" aria-label="More actions">
          <button className="nuda-dm2-overflow__item" type="button" role="menuitem">
            Share
          </button>
          <button className="nuda-dm2-overflow__item" type="button" role="menuitem">
            Print
          </button>
          <button className="nuda-dm2-overflow__item" type="button" role="menuitem">
            Archive
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-dm2-overflow{position:relative;display:inline-block;font-family:inherit;transform-origin:top right}
      .nuda-dm2-overflow__trigger{display:flex;align-items:center;justify-content:center;width:44px;height:44px;box-sizing:border-box;background:#1a1a1a;color:#fafafa;border:1px solid rgba(255,255,255,.12);border-radius:50%;font-size:1.1rem;line-height:1;cursor:pointer}
      .nuda-dm2-overflow__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-dm2-overflow__menu{position:absolute;right:0;margin:.4rem 0 0;padding:.35rem;width:160px;box-sizing:border-box;background:#141414;border:1px solid rgba(255,255,255,.1);border-radius:10px;transform-origin:top right;animation:_nuda-dm2overflowIn .2s ease-out}
      .nuda-dm2-overflow__item{display:block;width:100%;box-sizing:border-box;min-height:44px;padding:.5rem .65rem;border:0;background:transparent;border-radius:6px;font-size:.8rem;color:#cfcfcf;text-align:left;cursor:pointer;transition:background .15s ease,color .15s ease}
      .nuda-dm2-overflow__item:hover,.nuda-dm2-overflow__item:focus-visible{background:rgba(255,255,255,.06);color:#fafafa}
      .nuda-dm2-overflow__item:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      @keyframes _nuda-dm2overflowIn{from{opacity:0;transform:translateY(-6px) scale(.96)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-dm2-overflow__menu{animation:none !important}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-dm2-overflow">
  <button class="nuda-dm2-overflow__trigger" type="button" aria-haspopup="menu" aria-expanded="true" aria-label="More actions">⋯</button>
  <div class="nuda-dm2-overflow__menu" role="menu" aria-label="More actions">
    <button class="nuda-dm2-overflow__item" type="button" role="menuitem">Share</button>
    <button class="nuda-dm2-overflow__item" type="button" role="menuitem">Print</button>
    <button class="nuda-dm2-overflow__item" type="button" role="menuitem">Archive</button>
  </div>
</div>`,
      },
    ],
  },
];
