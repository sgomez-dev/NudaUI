import type { NudaComponent } from "./types";

const CAT = "Onboarding & Coachmarks";

export const onboardingExtra: NudaComponent[] = [
  /* ─────────────── 1. Repositioning Arrow Tooltip ─────────────── */
  {
    id: "ob2-arrow-tooltip",
    name: "Repositioning Arrow Tooltip",
    category: CAT,
    preview: (
      <div className="nuda-ob2-arrow-tooltip" role="dialog" aria-modal="true" aria-label="Feature tip, step 1 of 4">
        <span className="nuda-ob2-arrow-tooltip__arrow" aria-hidden="true" />
        <span className="nuda-ob2-arrow-tooltip__step">Step 1 of 4</span>
        <h4 className="nuda-ob2-arrow-tooltip__title">Drag files here</h4>
        <p className="nuda-ob2-arrow-tooltip__body">Drop any file onto the panel to start an upload.</p>
        <div className="nuda-ob2-arrow-tooltip__actions">
          <button className="nuda-ob2-arrow-tooltip__dismiss" type="button" aria-label="Dismiss tip">
            Got it
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ob2-arrow-tooltip{position:relative;width:100%;max-width:280px;padding:16px;background:rgba(20,20,24,.96);border:1px solid rgba(255,255,255,.1);border-radius:12px;box-shadow:0 20px 44px -12px rgba(0,0,0,.6);animation:nuda-ob2-arrow-tooltip-in .45s cubic-bezier(.34,1.56,.64,1)}
      .nuda-ob2-arrow-tooltip__arrow{position:absolute;left:50%;bottom:-7px;width:12px;height:12px;background:rgba(20,20,24,.96);border-right:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1);transform:translateX(-50%) rotate(45deg);animation:nuda-ob2-arrow-tooltip-move 3.2s steps(1,end) infinite}
      .nuda-ob2-arrow-tooltip__step{display:inline-block;font:800 10px ui-sans-serif,system-ui;color:#e4ff54;text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px}
      .nuda-ob2-arrow-tooltip__title{margin:0 0 4px;font:700 14px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-ob2-arrow-tooltip__body{margin:0 0 12px;font:500 12px/1.5 ui-sans-serif,system-ui;color:#a1a1aa}
      .nuda-ob2-arrow-tooltip__actions{display:flex;justify-content:flex-end}
      .nuda-ob2-arrow-tooltip__dismiss{min-width:44px;min-height:44px;display:inline-flex;align-items:center;justify-content:center;padding:0 18px;background:#e4ff54;color:#0a0a0a;border:none;border-radius:8px;font:700 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s,box-shadow .25s}
      .nuda-ob2-arrow-tooltip__dismiss:hover{transform:translateY(-1px);box-shadow:0 0 16px rgba(228,255,84,.4)}
      .nuda-ob2-arrow-tooltip__dismiss:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-ob2-arrow-tooltip-in{from{opacity:0;transform:scale(.92) translateY(-6px)}to{opacity:1;transform:scale(1) translateY(0)}}
      @keyframes nuda-ob2-arrow-tooltip-move{0%,40%{transform:translateX(-140%) rotate(45deg)}50%,90%{transform:translateX(40%) rotate(45deg)}100%{transform:translateX(-140%) rotate(45deg)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ob2-arrow-tooltip{animation:none}
        .nuda-ob2-arrow-tooltip__arrow{animation:none;transform:translateX(-50%) rotate(45deg)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Repositioning Arrow Tooltip — coachmark whose arrow snaps to a new anchor to show it can auto-reposition around a target -->
<div class="nuda-ob2-arrow-tooltip" role="dialog" aria-modal="true" aria-label="Feature tip, step 1 of 4">
  <span class="nuda-ob2-arrow-tooltip__arrow" aria-hidden="true"></span>
  <span class="nuda-ob2-arrow-tooltip__step">Step 1 of 4</span>
  <h4 class="nuda-ob2-arrow-tooltip__title">Drag files here</h4>
  <p class="nuda-ob2-arrow-tooltip__body">Drop any file onto the panel to start an upload.</p>
  <div class="nuda-ob2-arrow-tooltip__actions">
    <button class="nuda-ob2-arrow-tooltip__dismiss" type="button" aria-label="Dismiss tip">Got it</button>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Ring Checklist ─────────────── */
  {
    id: "ob2-ring-checklist",
    name: "Ring Checklist",
    category: CAT,
    preview: (
      <div className="nuda-ob2-ring-checklist">
        <div className="nuda-ob2-ring-checklist__head">
          <svg className="nuda-ob2-ring-checklist__ring" viewBox="0 0 36 36" aria-hidden="true">
            <circle className="nuda-ob2-ring-checklist__track" cx="18" cy="18" r="15" />
            <circle className="nuda-ob2-ring-checklist__fill" cx="18" cy="18" r="15" />
          </svg>
          <div className="nuda-ob2-ring-checklist__pct" aria-live="polite">
            2 / 4
            <span>Getting started</span>
          </div>
          <button className="nuda-ob2-ring-checklist__toggle" type="button" aria-expanded="true" aria-label="Collapse checklist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 15 L12 9 L18 15" />
            </svg>
          </button>
        </div>
        <ul className="nuda-ob2-ring-checklist__list">
          <li className="is-done">Create workspace</li>
          <li className="is-done">Verify email</li>
          <li className="is-current">Add a teammate</li>
          <li>Connect calendar</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-ob2-ring-checklist{width:100%;max-width:280px;padding:14px 16px;background:rgba(20,20,24,.96);border:1px solid rgba(255,255,255,.08);border-radius:12px;display:flex;flex-direction:column;gap:10px}
      .nuda-ob2-ring-checklist__head{display:flex;align-items:center;gap:10px}
      .nuda-ob2-ring-checklist__ring{width:34px;height:34px;flex-shrink:0;transform:rotate(-90deg)}
      .nuda-ob2-ring-checklist__track{fill:none;stroke:rgba(255,255,255,.08);stroke-width:3}
      .nuda-ob2-ring-checklist__fill{fill:none;stroke:#e4ff54;stroke-width:3;stroke-linecap:round;stroke-dasharray:94.2;stroke-dashoffset:94.2;animation:nuda-ob2-ring-checklist-fill 1.1s cubic-bezier(.4,0,.2,1) .2s forwards;filter:drop-shadow(0 0 4px rgba(228,255,84,.5))}
      .nuda-ob2-ring-checklist__pct{flex:1;display:flex;flex-direction:column;font:800 13px ui-sans-serif,system-ui;color:#fafafa;font-variant-numeric:tabular-nums}
      .nuda-ob2-ring-checklist__pct span{font:600 10px ui-sans-serif,system-ui;color:#a1a1aa;margin-top:1px}
      .nuda-ob2-ring-checklist__toggle{position:relative;width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:#a1a1aa;cursor:pointer;border-radius:6px;transition:color .2s,background .2s}
      .nuda-ob2-ring-checklist__toggle::before{content:"";position:absolute;inset:-11px}
      .nuda-ob2-ring-checklist__toggle:hover{color:#fafafa;background:rgba(255,255,255,.06)}
      .nuda-ob2-ring-checklist__toggle:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ob2-ring-checklist__toggle svg{width:14px;height:14px}
      .nuda-ob2-ring-checklist__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
      .nuda-ob2-ring-checklist__list li{position:relative;padding-left:22px;font:500 12px ui-sans-serif,system-ui;color:#a1a1aa}
      .nuda-ob2-ring-checklist__list li::before{content:"";position:absolute;left:0;top:3px;width:14px;height:14px;border:1.5px solid rgba(255,255,255,.15);border-radius:50%}
      .nuda-ob2-ring-checklist__list li.is-done{color:#63636e;text-decoration:line-through;text-decoration-color:rgba(255,255,255,.2)}
      .nuda-ob2-ring-checklist__list li.is-done::before{background:#e4ff54;border-color:#e4ff54;box-shadow:0 0 4px rgba(228,255,84,.4)}
      .nuda-ob2-ring-checklist__list li.is-current{color:#fafafa}
      .nuda-ob2-ring-checklist__list li.is-current::before{border-color:#e4ff54;animation:nuda-ob2-ring-checklist-pulse 1.6s ease-in-out infinite}
      @keyframes nuda-ob2-ring-checklist-fill{to{stroke-dashoffset:47}}
      @keyframes nuda-ob2-ring-checklist-pulse{0%,100%{box-shadow:0 0 0 0 rgba(228,255,84,0)}50%{box-shadow:0 0 0 4px rgba(228,255,84,.18)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ob2-ring-checklist__fill{animation:none;stroke-dashoffset:47}
        .nuda-ob2-ring-checklist__list li.is-current::before{animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Ring Checklist — onboarding checklist with an SVG completion ring and a collapse toggle -->
<div class="nuda-ob2-ring-checklist">
  <div class="nuda-ob2-ring-checklist__head">
    <svg class="nuda-ob2-ring-checklist__ring" viewBox="0 0 36 36" aria-hidden="true">
      <circle class="nuda-ob2-ring-checklist__track" cx="18" cy="18" r="15" />
      <circle class="nuda-ob2-ring-checklist__fill" cx="18" cy="18" r="15" />
    </svg>
    <div class="nuda-ob2-ring-checklist__pct" aria-live="polite">2 / 4<span>Getting started</span></div>
    <button class="nuda-ob2-ring-checklist__toggle" type="button" aria-expanded="true" aria-label="Collapse checklist">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M6 15 L12 9 L18 15" />
      </svg>
    </button>
  </div>
  <ul class="nuda-ob2-ring-checklist__list">
    <li class="is-done">Create workspace</li>
    <li class="is-done">Verify email</li>
    <li class="is-current">Add a teammate</li>
    <li>Connect calendar</li>
  </ul>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Changelog Popover ─────────────── */
  {
    id: "ob2-changelog-popover",
    name: "Changelog Popover",
    category: CAT,
    preview: (
      <div className="nuda-ob2-changelog-popover">
        <button className="nuda-ob2-changelog-popover__trigger" type="button" aria-haspopup="dialog" aria-expanded="true" aria-label="What's new, 2 unread updates">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 2 C8 2 6 5 6 9 L6 13 L4 17 L20 17 L18 13 L18 9 C18 5 16 2 12 2 Z" />
            <path d="M9.5 20 a2.5 2.5 0 0 0 5 0" />
          </svg>
          <span className="nuda-ob2-changelog-popover__dot" aria-hidden="true" />
        </button>
        <div className="nuda-ob2-changelog-popover__panel" role="dialog" aria-label="What's new">
          <h4>What&apos;s new</h4>
          <ul>
            <li>
              <span className="nuda-ob2-changelog-popover__tag">New</span>Dark mode scheduling
            </li>
            <li>
              <span className="nuda-ob2-changelog-popover__tag nuda-ob2-changelog-popover__tag--fix">Fixed</span>Faster search results
            </li>
          </ul>
          <a className="nuda-ob2-changelog-popover__link" href="#">
            View all updates →
          </a>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ob2-changelog-popover{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:10px;width:100%;max-width:280px}
      .nuda-ob2-changelog-popover__trigger{position:relative;width:36px;height:36px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:9px;color:#cfcfcf;cursor:pointer}
      .nuda-ob2-changelog-popover__trigger::before{content:"";position:absolute;inset:-4px}
      .nuda-ob2-changelog-popover__trigger:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ob2-changelog-popover__trigger svg{width:17px;height:17px}
      .nuda-ob2-changelog-popover__dot{position:absolute;top:5px;right:6px;width:8px;height:8px;background:#e4ff54;border:2px solid #0a0a0a;border-radius:50%;box-shadow:0 0 6px rgba(228,255,84,.6)}
      .nuda-ob2-changelog-popover__dot::after{content:"";position:absolute;inset:-2px;border-radius:50%;border:1.5px solid #e4ff54;animation:nuda-ob2-changelog-popover-ping 1.8s ease-out infinite}
      .nuda-ob2-changelog-popover__panel{width:100%;padding:14px 16px;background:rgba(20,20,24,.97);border:1px solid rgba(255,255,255,.1);border-radius:12px;box-shadow:0 20px 44px -12px rgba(0,0,0,.6);animation:nuda-ob2-changelog-popover-in .35s cubic-bezier(.34,1.56,.64,1)}
      .nuda-ob2-changelog-popover__panel h4{margin:0 0 8px;font:700 13px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-ob2-changelog-popover__panel ul{list-style:none;margin:0 0 10px;padding:0;display:flex;flex-direction:column;gap:7px}
      .nuda-ob2-changelog-popover__panel li{display:flex;align-items:center;gap:7px;font:500 12px ui-sans-serif,system-ui;color:#cfcfcf}
      .nuda-ob2-changelog-popover__tag{padding:1px 6px;background:rgba(228,255,84,.15);color:#e4ff54;border:1px solid rgba(228,255,84,.3);border-radius:4px;font:800 9px ui-sans-serif,system-ui;text-transform:uppercase;letter-spacing:.05em}
      .nuda-ob2-changelog-popover__tag--fix{background:rgba(255,255,255,.06);color:#a1a1aa;border-color:rgba(255,255,255,.12)}
      .nuda-ob2-changelog-popover__link{font:700 11px ui-sans-serif,system-ui;color:#e4ff54;text-decoration:none}
      .nuda-ob2-changelog-popover__link:hover{text-decoration:underline}
      @keyframes nuda-ob2-changelog-popover-ping{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.9);opacity:0}}
      @keyframes nuda-ob2-changelog-popover-in{from{opacity:0;transform:scale(.94) translateY(-6px)}to{opacity:1;transform:scale(1) translateY(0)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ob2-changelog-popover__dot::after{animation:none;opacity:0}
        .nuda-ob2-changelog-popover__panel{animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Changelog Popover — "what's new" trigger with an unread dot and an update list -->
<div class="nuda-ob2-changelog-popover">
  <button class="nuda-ob2-changelog-popover__trigger" type="button" aria-haspopup="dialog" aria-expanded="true" aria-label="What's new, 2 unread updates">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 2 C8 2 6 5 6 9 L6 13 L4 17 L20 17 L18 13 L18 9 C18 5 16 2 12 2 Z" />
      <path d="M9.5 20 a2.5 2.5 0 0 0 5 0" />
    </svg>
    <span class="nuda-ob2-changelog-popover__dot" aria-hidden="true"></span>
  </button>
  <div class="nuda-ob2-changelog-popover__panel" role="dialog" aria-label="What's new">
    <h4>What's new</h4>
    <ul>
      <li><span class="nuda-ob2-changelog-popover__tag">New</span>Dark mode scheduling</li>
      <li><span class="nuda-ob2-changelog-popover__tag nuda-ob2-changelog-popover__tag--fix">Fixed</span>Faster search results</li>
    </ul>
    <a class="nuda-ob2-changelog-popover__link" href="#">View all updates →</a>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Guided Setup Card ─────────────── */
  {
    id: "ob2-guided-setup",
    name: "Guided Setup Card",
    category: CAT,
    preview: (
      <div className="nuda-ob2-guided-setup">
        <div className="nuda-ob2-guided-setup__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <path d="M12 8 L12 16 M8 12 L16 12" />
          </svg>
        </div>
        <h4>Set up your first project</h4>
        <p>Projects keep your tasks, files and team in one place.</p>
        <button className="nuda-ob2-guided-setup__cta" type="button">
          Create a project
        </button>
        <a className="nuda-ob2-guided-setup__sample" href="#">
          or explore sample data
        </a>
      </div>
    ),
    cssInline: `
      .nuda-ob2-guided-setup{width:100%;max-width:280px;padding:22px 18px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:6px;background:rgba(255,255,255,.02);border:1.5px dashed rgba(255,255,255,.16);border-radius:14px;animation:nuda-ob2-guided-setup-in .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-ob2-guided-setup__icon{width:40px;height:40px;display:flex;align-items:center;justify-content:center;margin-bottom:4px;background:linear-gradient(135deg,rgba(228,255,84,.18),rgba(228,255,84,.04));border:1px solid rgba(228,255,84,.28);border-radius:50%;color:#e4ff54;animation:nuda-ob2-guided-setup-float 3.4s ease-in-out infinite}
      .nuda-ob2-guided-setup__icon svg{width:20px;height:20px}
      .nuda-ob2-guided-setup h4{margin:0;font:700 14px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-ob2-guided-setup p{margin:0 0 6px;font:500 12px/1.5 ui-sans-serif,system-ui;color:#a1a1aa}
      .nuda-ob2-guided-setup__cta{min-height:40px;display:inline-flex;align-items:center;justify-content:center;padding:0 20px;background:#e4ff54;color:#0a0a0a;border:none;border-radius:8px;font:700 12px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s,box-shadow .25s}
      .nuda-ob2-guided-setup__cta:hover{transform:translateY(-1px);box-shadow:0 0 18px rgba(228,255,84,.4)}
      .nuda-ob2-guided-setup__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ob2-guided-setup__sample{font:600 11px ui-sans-serif,system-ui;color:#777;text-decoration:none}
      .nuda-ob2-guided-setup__sample:hover{color:#a1a1aa;text-decoration:underline}
      @keyframes nuda-ob2-guided-setup-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @keyframes nuda-ob2-guided-setup-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ob2-guided-setup{animation:none}
        .nuda-ob2-guided-setup__icon{animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Guided Setup Card — empty-dashboard state that prompts the first meaningful action -->
<div class="nuda-ob2-guided-setup">
  <div class="nuda-ob2-guided-setup__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M12 8 L12 16 M8 12 L16 12" />
    </svg>
  </div>
  <h4>Set up your first project</h4>
  <p>Projects keep your tasks, files and team in one place.</p>
  <button class="nuda-ob2-guided-setup__cta" type="button">Create a project</button>
  <a class="nuda-ob2-guided-setup__sample" href="#">or explore sample data</a>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Self-Dismissing Hint Chip ─────────────── */
  {
    id: "ob2-hint-chip",
    name: "Self-Dismissing Hint Chip",
    category: CAT,
    preview: (
      <div className="nuda-ob2-hint-chip" role="status" aria-live="polite">
        <svg className="nuda-ob2-hint-chip__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8 L12 13 M12 16 L12 16.01" />
        </svg>
        <span className="nuda-ob2-hint-chip__text">
          Press <kbd>⌘</kbd>
          <kbd>K</kbd> to search anywhere
        </span>
        <button className="nuda-ob2-hint-chip__close" type="button" aria-label="Dismiss tip">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6 6 L18 18 M18 6 L6 18" />
          </svg>
        </button>
        <span className="nuda-ob2-hint-chip__bar" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-ob2-hint-chip{position:relative;display:flex;align-items:center;gap:8px;width:100%;max-width:290px;padding:10px 12px;background:rgba(20,20,24,.96);border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;animation:nuda-ob2-hint-chip-in .4s cubic-bezier(.34,1.56,.64,1)}
      .nuda-ob2-hint-chip__icon{width:16px;height:16px;flex-shrink:0;color:#e4ff54}
      .nuda-ob2-hint-chip__text{flex:1;font:500 11px/1.4 ui-sans-serif,system-ui;color:#cfcfcf}
      .nuda-ob2-hint-chip__text kbd{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;margin:0 1px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);border-radius:4px;font:700 10px ui-monospace,monospace;color:#fafafa}
      .nuda-ob2-hint-chip__close{position:relative;width:18px;height:18px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:#777;cursor:pointer;border-radius:5px}
      .nuda-ob2-hint-chip__close::before{content:"";position:absolute;inset:-13px}
      .nuda-ob2-hint-chip__close:hover{color:#fafafa}
      .nuda-ob2-hint-chip__close:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ob2-hint-chip__close svg{width:11px;height:11px}
      .nuda-ob2-hint-chip__bar{position:absolute;left:0;bottom:0;height:2px;width:100%;background:#e4ff54;transform:scaleX(1);transform-origin:right;animation:nuda-ob2-hint-chip-countdown 6s linear forwards}
      @keyframes nuda-ob2-hint-chip-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      @keyframes nuda-ob2-hint-chip-countdown{to{transform:scaleX(0)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ob2-hint-chip{animation:none}
        .nuda-ob2-hint-chip__bar{animation:none;transform:scaleX(1)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Self-Dismissing Hint Chip — inline tip with a countdown bar that auto-fades -->
<div class="nuda-ob2-hint-chip" role="status" aria-live="polite">
  <svg class="nuda-ob2-hint-chip__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8 L12 13 M12 16 L12 16.01" />
  </svg>
  <span class="nuda-ob2-hint-chip__text">Press <kbd>⌘</kbd><kbd>K</kbd> to search anywhere</span>
  <button class="nuda-ob2-hint-chip__close" type="button" aria-label="Dismiss tip">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
  </button>
  <span class="nuda-ob2-hint-chip__bar" aria-hidden="true"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Progressive Disclosure Steps ─────────────── */
  {
    id: "ob2-progressive-steps",
    name: "Progressive Disclosure Steps",
    category: CAT,
    preview: (
      <div className="nuda-ob2-progressive-steps">
        <div className="nuda-ob2-progressive-steps__item is-done">
          <span className="nuda-ob2-progressive-steps__num" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12 L10 17 L20 7" />
            </svg>
          </span>
          <span className="nuda-ob2-progressive-steps__label">Create account</span>
        </div>
        <div className="nuda-ob2-progressive-steps__item is-current">
          <span className="nuda-ob2-progressive-steps__num" aria-hidden="true">2</span>
          <div className="nuda-ob2-progressive-steps__body">
            <span className="nuda-ob2-progressive-steps__label">Name your workspace</span>
            <p>This appears in your team&apos;s URL and settings.</p>
            <button className="nuda-ob2-progressive-steps__cta" type="button">
              Continue
            </button>
          </div>
        </div>
        <div className="nuda-ob2-progressive-steps__item is-locked">
          <span className="nuda-ob2-progressive-steps__num" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="10" width="14" height="10" rx="2" />
              <path d="M8 10 L8 7 a4 4 0 0 1 8 0 L16 10" />
            </svg>
          </span>
          <span className="nuda-ob2-progressive-steps__label">Invite your team</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ob2-progressive-steps{width:100%;max-width:290px;padding:14px 16px;background:rgba(20,20,24,.96);border:1px solid rgba(255,255,255,.08);border-radius:12px;display:flex;flex-direction:column}
      .nuda-ob2-progressive-steps__item{position:relative;display:flex;gap:10px;padding:9px 0}
      .nuda-ob2-progressive-steps__item:not(:last-child)::after{content:"";position:absolute;left:11px;top:32px;bottom:-9px;width:1px;background:rgba(255,255,255,.1)}
      .nuda-ob2-progressive-steps__num{width:22px;height:22px;flex-shrink:0;display:flex;align-items:center;justify-content:center;border-radius:50%;font:800 11px ui-sans-serif,system-ui;background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.12);color:#777;z-index:1}
      .nuda-ob2-progressive-steps__num svg{width:12px;height:12px}
      .nuda-ob2-progressive-steps__item.is-done .nuda-ob2-progressive-steps__num{background:#e4ff54;border-color:#e4ff54;color:#0a0a0a}
      .nuda-ob2-progressive-steps__item.is-done .nuda-ob2-progressive-steps__label{color:#63636e;text-decoration:line-through;text-decoration-color:rgba(255,255,255,.2)}
      .nuda-ob2-progressive-steps__item.is-current .nuda-ob2-progressive-steps__num{border-color:#e4ff54;color:#e4ff54;animation:nuda-ob2-progressive-steps-pulse 1.6s ease-in-out infinite}
      .nuda-ob2-progressive-steps__item.is-current .nuda-ob2-progressive-steps__label{color:#fafafa;font-weight:700}
      .nuda-ob2-progressive-steps__item.is-locked{opacity:.5}
      .nuda-ob2-progressive-steps__label{font:600 12px ui-sans-serif,system-ui;color:#a1a1aa;line-height:22px}
      .nuda-ob2-progressive-steps__body{display:flex;flex-direction:column;gap:5px;animation:nuda-ob2-progressive-steps-in .35s ease both}
      .nuda-ob2-progressive-steps__body p{margin:0;font:500 11px/1.4 ui-sans-serif,system-ui;color:#a1a1aa}
      .nuda-ob2-progressive-steps__cta{align-self:flex-start;min-height:32px;display:inline-flex;align-items:center;padding:0 14px;margin-top:2px;background:#e4ff54;color:#0a0a0a;border:none;border-radius:6px;font:700 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s}
      .nuda-ob2-progressive-steps__cta:hover{transform:translateX(2px)}
      .nuda-ob2-progressive-steps__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-ob2-progressive-steps-pulse{0%,100%{box-shadow:0 0 0 0 rgba(228,255,84,0)}50%{box-shadow:0 0 0 4px rgba(228,255,84,.18)}}
      @keyframes nuda-ob2-progressive-steps-in{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ob2-progressive-steps__item.is-current .nuda-ob2-progressive-steps__num{animation:none}
        .nuda-ob2-progressive-steps__body{animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Progressive Disclosure Steps — later steps stay locked/dimmed until earlier ones are done -->
<div class="nuda-ob2-progressive-steps">
  <div class="nuda-ob2-progressive-steps__item is-done">
    <span class="nuda-ob2-progressive-steps__num" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12 L10 17 L20 7" />
      </svg>
    </span>
    <span class="nuda-ob2-progressive-steps__label">Create account</span>
  </div>
  <div class="nuda-ob2-progressive-steps__item is-current">
    <span class="nuda-ob2-progressive-steps__num" aria-hidden="true">2</span>
    <div class="nuda-ob2-progressive-steps__body">
      <span class="nuda-ob2-progressive-steps__label">Name your workspace</span>
      <p>This appears in your team's URL and settings.</p>
      <button class="nuda-ob2-progressive-steps__cta" type="button">Continue</button>
    </div>
  </div>
  <div class="nuda-ob2-progressive-steps__item is-locked">
    <span class="nuda-ob2-progressive-steps__num" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10 L8 7 a4 4 0 0 1 8 0 L16 10" />
      </svg>
    </span>
    <span class="nuda-ob2-progressive-steps__label">Invite your team</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Shortcut Teaching Toast ─────────────── */
  {
    id: "ob2-shortcut-toast",
    name: "Shortcut Teaching Toast",
    category: CAT,
    preview: (
      <div className="nuda-ob2-shortcut-toast" role="status" aria-live="polite">
        <div className="nuda-ob2-shortcut-toast__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <path d="M7 10 L7 10.01 M11 10 L11 10.01 M15 10 L15 10.01 M8 14 L16 14" />
          </svg>
        </div>
        <div className="nuda-ob2-shortcut-toast__body">
          <span className="nuda-ob2-shortcut-toast__label">Pro tip</span>
          <p>
            Press <kbd className="nuda-ob2-shortcut-toast__key">⇧</kbd>
            <kbd className="nuda-ob2-shortcut-toast__key">D</kbd> for dark mode, any time.
          </p>
        </div>
        <button className="nuda-ob2-shortcut-toast__close" type="button" aria-label="Dismiss">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 6 L18 18 M18 6 L6 18" />
          </svg>
        </button>
      </div>
    ),
    cssInline: `
      .nuda-ob2-shortcut-toast{position:relative;display:flex;align-items:flex-start;gap:10px;width:100%;max-width:300px;padding:12px 14px;background:rgba(20,20,24,.97);border:1px solid rgba(255,255,255,.1);border-radius:12px;box-shadow:0 20px 44px -12px rgba(0,0,0,.6);animation:nuda-ob2-shortcut-toast-in .45s cubic-bezier(.34,1.56,.64,1)}
      .nuda-ob2-shortcut-toast__icon{width:28px;height:28px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:rgba(228,255,84,.12);border:1px solid rgba(228,255,84,.3);border-radius:8px;color:#e4ff54}
      .nuda-ob2-shortcut-toast__icon svg{width:15px;height:15px}
      .nuda-ob2-shortcut-toast__body{flex:1;display:flex;flex-direction:column;gap:2px}
      .nuda-ob2-shortcut-toast__label{font:800 10px ui-sans-serif,system-ui;color:#e4ff54;text-transform:uppercase;letter-spacing:.08em}
      .nuda-ob2-shortcut-toast__body p{margin:0;font:500 12px/1.5 ui-sans-serif,system-ui;color:#cfcfcf}
      .nuda-ob2-shortcut-toast__key{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;margin:0 1px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:4px;font:700 10px ui-monospace,monospace;color:#fafafa;animation:nuda-ob2-shortcut-toast-key 2.4s ease-in-out infinite}
      .nuda-ob2-shortcut-toast__key:nth-of-type(2){animation-delay:.15s}
      .nuda-ob2-shortcut-toast__close{position:relative;width:18px;height:18px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:transparent;border:none;color:#777;cursor:pointer;border-radius:5px}
      .nuda-ob2-shortcut-toast__close::before{content:"";position:absolute;inset:-13px}
      .nuda-ob2-shortcut-toast__close:hover{color:#fafafa}
      .nuda-ob2-shortcut-toast__close:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ob2-shortcut-toast__close svg{width:11px;height:11px}
      @keyframes nuda-ob2-shortcut-toast-in{from{opacity:0;transform:translateY(14px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes nuda-ob2-shortcut-toast-key{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ob2-shortcut-toast{animation:none}
        .nuda-ob2-shortcut-toast__key{animation:none}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Shortcut Teaching Toast — teaches a keyboard shortcut with animated key chips -->
<div class="nuda-ob2-shortcut-toast" role="status" aria-live="polite">
  <div class="nuda-ob2-shortcut-toast__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 10 L7 10.01 M11 10 L11 10.01 M15 10 L15 10.01 M8 14 L16 14" />
    </svg>
  </div>
  <div class="nuda-ob2-shortcut-toast__body">
    <span class="nuda-ob2-shortcut-toast__label">Pro tip</span>
    <p>Press <kbd class="nuda-ob2-shortcut-toast__key">⇧</kbd><kbd class="nuda-ob2-shortcut-toast__key">D</kbd> for dark mode, any time.</p>
  </div>
  <button class="nuda-ob2-shortcut-toast__close" type="button" aria-label="Dismiss">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 6 L18 18 M18 6 L6 18" />
    </svg>
  </button>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Invite Team Step ─────────────── */
  {
    id: "ob2-invite-team",
    name: "Invite Team Step",
    category: CAT,
    preview: (
      <div className="nuda-ob2-invite-team">
        <h4>Invite your team</h4>
        <p>Work is better together. Add teammates to get the most out of your workspace.</p>
        <div className="nuda-ob2-invite-team__avatars" aria-hidden="true">
          <span className="nuda-ob2-invite-team__avatar" style={{ ["--i" as string]: 0 }}>JD</span>
          <span className="nuda-ob2-invite-team__avatar" style={{ ["--i" as string]: 1 }}>AK</span>
          <span className="nuda-ob2-invite-team__avatar" style={{ ["--i" as string]: 2 }}>MR</span>
          <span className="nuda-ob2-invite-team__avatar nuda-ob2-invite-team__avatar--more" style={{ ["--i" as string]: 3 }}>
            +3
          </span>
        </div>
        <div className="nuda-ob2-invite-team__field">
          <label htmlFor="ob2-invite-email">Email address</label>
          <div className="nuda-ob2-invite-team__row">
            <input id="ob2-invite-email" type="email" placeholder="teammate@company.com" readOnly />
            <button className="nuda-ob2-invite-team__send" type="button">
              Send
            </button>
          </div>
        </div>
        <a className="nuda-ob2-invite-team__skip" href="#">
          I&apos;ll do this later
        </a>
      </div>
    ),
    cssInline: `
      .nuda-ob2-invite-team{width:100%;max-width:290px;padding:16px 18px;background:rgba(20,20,24,.96);border:1px solid rgba(255,255,255,.08);border-radius:14px;display:flex;flex-direction:column;gap:8px;animation:nuda-ob2-invite-team-in .5s cubic-bezier(.16,1,.3,1) both}
      .nuda-ob2-invite-team h4{margin:0;font:700 14px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-ob2-invite-team p{margin:0;font:500 11px/1.5 ui-sans-serif,system-ui;color:#a1a1aa}
      .nuda-ob2-invite-team__avatars{display:flex;margin:4px 0 2px}
      .nuda-ob2-invite-team__avatar{width:26px;height:26px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:linear-gradient(135deg,#3a3a42,#232328);border:2px solid rgba(20,20,24,1);color:#fafafa;font:700 9px ui-sans-serif,system-ui;margin-left:-8px;opacity:0;animation:nuda-ob2-invite-team-pop .4s cubic-bezier(.34,1.56,.64,1) forwards;animation-delay:calc(var(--i) * .08s)}
      .nuda-ob2-invite-team__avatar:first-child{margin-left:0}
      .nuda-ob2-invite-team__avatar--more{background:rgba(228,255,84,.15);color:#e4ff54;border-color:rgba(20,20,24,1)}
      .nuda-ob2-invite-team__field label{display:block;margin-bottom:4px;font:700 9px ui-sans-serif,system-ui;color:#777;text-transform:uppercase;letter-spacing:.06em}
      .nuda-ob2-invite-team__row{display:flex;gap:6px}
      .nuda-ob2-invite-team__row input{flex:1;min-width:0;min-height:36px;padding:0 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:7px;color:#cfcfcf;font:500 11px ui-sans-serif,system-ui}
      .nuda-ob2-invite-team__row input::placeholder{color:#63636e}
      .nuda-ob2-invite-team__row input:focus-visible{outline:2px solid #e4ff54;outline-offset:1px}
      .nuda-ob2-invite-team__send{min-height:36px;padding:0 14px;background:#e4ff54;color:#0a0a0a;border:none;border-radius:7px;font:700 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s,box-shadow .25s;display:inline-flex;align-items:center;justify-content:center}
      .nuda-ob2-invite-team__send:hover{transform:translateY(-1px);box-shadow:0 0 14px rgba(228,255,84,.35)}
      .nuda-ob2-invite-team__send:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ob2-invite-team__skip{align-self:center;margin-top:2px;font:600 10px ui-sans-serif,system-ui;color:#777;text-decoration:none}
      .nuda-ob2-invite-team__skip:hover{color:#a1a1aa;text-decoration:underline}
      @keyframes nuda-ob2-invite-team-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @keyframes nuda-ob2-invite-team-pop{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ob2-invite-team{animation:none}
        .nuda-ob2-invite-team__avatar{animation:none;opacity:1}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Invite Team Step — first-run step to bring teammates into a fresh workspace -->
<div class="nuda-ob2-invite-team">
  <h4>Invite your team</h4>
  <p>Work is better together. Add teammates to get the most out of your workspace.</p>
  <div class="nuda-ob2-invite-team__avatars" aria-hidden="true">
    <span class="nuda-ob2-invite-team__avatar" style="--i:0">JD</span>
    <span class="nuda-ob2-invite-team__avatar" style="--i:1">AK</span>
    <span class="nuda-ob2-invite-team__avatar" style="--i:2">MR</span>
    <span class="nuda-ob2-invite-team__avatar nuda-ob2-invite-team__avatar--more" style="--i:3">+3</span>
  </div>
  <div class="nuda-ob2-invite-team__field">
    <label for="ob2-invite-email">Email address</label>
    <div class="nuda-ob2-invite-team__row">
      <input id="ob2-invite-email" type="email" placeholder="teammate@company.com" />
      <button class="nuda-ob2-invite-team__send" type="button">Send</button>
    </div>
  </div>
  <a class="nuda-ob2-invite-team__skip" href="#">I'll do this later</a>
</div>`,
      },
    ],
  },
];
