import type { NudaComponent } from "./types";

const CAT = "Empty States";

export const emptyStatesExtra: NudaComponent[] = [
  /* ─────────────── 1. No Team Members ─────────────── */
  {
    id: "es2-team",
    name: "No Team Members",
    category: CAT,
    preview: (
      <div className="nuda-es2-team" role="status" aria-label="No team members yet">
        <div className="nuda-es2-team__scene" aria-hidden="true">
          <span className="nuda-es2-team__avatar nuda-es2-team__avatar--a" />
          <span className="nuda-es2-team__avatar nuda-es2-team__avatar--b" />
          <span className="nuda-es2-team__avatar nuda-es2-team__avatar--c" />
          <span className="nuda-es2-team__invite">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 5 L12 19" />
              <path d="M5 12 L19 12" />
            </svg>
          </span>
        </div>
        <h3 className="nuda-es2-team__title">No team members yet</h3>
        <p className="nuda-es2-team__sub">Invite people to start collaborating</p>
        <button className="nuda-es2-team__cta" type="button">Invite teammates</button>
      </div>
    ),
    cssInline: `
      .nuda-es2-team{display:flex;flex-direction:column;align-items:center;gap:8px;padding:20px;text-align:center;width:100%;max-width:260px}
      .nuda-es2-team__scene{position:relative;width:140px;height:60px;margin-bottom:4px}
      .nuda-es2-team__avatar{position:absolute;top:14px;width:40px;height:40px;border-radius:50%;background:#1a1a1a;border:1px solid rgba(255,255,255,.12);box-shadow:0 4px 10px rgba(0,0,0,.4);animation:nuda-es2-team-bob 3.2s ease-in-out infinite}
      .nuda-es2-team__avatar--a{left:6px;animation-delay:0s}
      .nuda-es2-team__avatar--b{left:38px;top:4px;z-index:1;animation-delay:.25s}
      .nuda-es2-team__avatar--c{left:70px;animation-delay:.5s}
      .nuda-es2-team__invite{position:absolute;left:102px;top:6px;width:44px;height:44px;border-radius:50%;border:1.5px dashed rgba(228,255,84,.6);color:#e4ff54;display:flex;align-items:center;justify-content:center;animation:nuda-es2-team-glow 2.4s ease-in-out infinite}
      .nuda-es2-team__invite svg{width:18px;height:18px}
      .nuda-es2-team__title{font:600 13px ui-sans-serif,system-ui;color:#fafafa;margin:0}
      .nuda-es2-team__sub{font:400 11px ui-sans-serif,system-ui;color:#a0a0a8;margin:0}
      .nuda-es2-team__cta{margin-top:6px;padding:8px 16px;background:#e4ff54;color:#0a0a0a;border:0;border-radius:8px;font:600 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .15s ease,filter .2s ease;min-height:32px}
      .nuda-es2-team__cta:hover{transform:translateY(-1px);filter:brightness(1.08)}
      .nuda-es2-team__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-es2-team-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      @keyframes nuda-es2-team-glow{0%,100%{opacity:.6;box-shadow:0 0 0 rgba(228,255,84,0)}50%{opacity:1;box-shadow:0 0 12px rgba(228,255,84,.35)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-es2-team__avatar,.nuda-es2-team__invite{animation:none !important}
        .nuda-es2-team__invite{opacity:1;box-shadow:0 0 8px rgba(228,255,84,.25)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- No Team Members -->
<div class="nuda-es2-team" role="status" aria-label="No team members yet">
  <div class="nuda-es2-team__scene" aria-hidden="true">
    <span class="nuda-es2-team__avatar nuda-es2-team__avatar--a"></span>
    <span class="nuda-es2-team__avatar nuda-es2-team__avatar--b"></span>
    <span class="nuda-es2-team__avatar nuda-es2-team__avatar--c"></span>
    <span class="nuda-es2-team__invite">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <path d="M12 5 L12 19" />
        <path d="M5 12 L19 12" />
      </svg>
    </span>
  </div>
  <h3 class="nuda-es2-team__title">No team members yet</h3>
  <p class="nuda-es2-team__sub">Invite people to start collaborating</p>
  <button class="nuda-es2-team__cta" type="button">Invite teammates</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. No Matching Results ─────────────── */
  {
    id: "es2-filtered",
    name: "No Matching Results",
    category: CAT,
    preview: (
      <div className="nuda-es2-filtered" role="status" aria-label="No matching results">
        <div className="nuda-es2-filtered__scene" aria-hidden="true">
          <svg className="nuda-es2-filtered__funnel" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 10 L42 10 L28 26 L28 38 L20 42 L20 26 Z" />
          </svg>
          <span className="nuda-es2-filtered__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6 L18 18" />
              <path d="M18 6 L6 18" />
            </svg>
          </span>
        </div>
        <h3 className="nuda-es2-filtered__title">No matching results</h3>
        <p className="nuda-es2-filtered__sub">Try adjusting or clearing your filters</p>
        <button className="nuda-es2-filtered__cta" type="button">Clear filters</button>
      </div>
    ),
    cssInline: `
      .nuda-es2-filtered{display:flex;flex-direction:column;align-items:center;gap:8px;padding:20px;text-align:center;width:100%;max-width:240px;color:#8f8f98}
      .nuda-es2-filtered__scene{position:relative;width:64px;height:56px;animation:nuda-es2-filtered-shake 3.6s ease-in-out infinite}
      .nuda-es2-filtered__funnel{width:100%;height:100%;color:currentColor}
      .nuda-es2-filtered__badge{position:absolute;right:-4px;top:-4px;width:20px;height:20px;border-radius:50%;background:#1a1a1a;border:1px solid rgba(255,255,255,.14);color:#ff6b6b;display:flex;align-items:center;justify-content:center;animation:nuda-es2-filtered-pop 3.6s ease-in-out infinite}
      .nuda-es2-filtered__badge svg{width:11px;height:11px}
      .nuda-es2-filtered__title{font:600 13px ui-sans-serif,system-ui;color:#fafafa;margin:0}
      .nuda-es2-filtered__sub{font:400 11px ui-sans-serif,system-ui;color:#a0a0a8;margin:0}
      .nuda-es2-filtered__cta{margin-top:6px;padding:8px 16px;background:transparent;color:#e4ff54;border:1px solid rgba(228,255,84,.4);border-radius:8px;font:600 11px ui-sans-serif,system-ui;cursor:pointer;transition:background-color .2s ease,transform .15s ease;min-height:32px}
      .nuda-es2-filtered__cta:hover{background:rgba(228,255,84,.1);transform:translateY(-1px)}
      .nuda-es2-filtered__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-es2-filtered-shake{0%,100%{transform:rotate(0deg)}20%{transform:rotate(-6deg)}40%{transform:rotate(5deg)}60%{transform:rotate(-3deg)}80%{transform:rotate(2deg)}}
      @keyframes nuda-es2-filtered-pop{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-es2-filtered__scene,.nuda-es2-filtered__badge{animation:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- No Matching Results -->
<div class="nuda-es2-filtered" role="status" aria-label="No matching results">
  <div class="nuda-es2-filtered__scene" aria-hidden="true">
    <svg class="nuda-es2-filtered__funnel" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 10 L42 10 L28 26 L28 38 L20 42 L20 26 Z" />
    </svg>
    <span class="nuda-es2-filtered__badge">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <path d="M6 6 L18 18" />
        <path d="M18 6 L6 18" />
      </svg>
    </span>
  </div>
  <h3 class="nuda-es2-filtered__title">No matching results</h3>
  <p class="nuda-es2-filtered__sub">Try adjusting or clearing your filters</p>
  <button class="nuda-es2-filtered__cta" type="button">Clear filters</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Create Your First Project ─────────────── */
  {
    id: "es2-first-project",
    name: "Create Your First Project",
    category: CAT,
    preview: (
      <div className="nuda-es2-first-project" role="status" aria-label="Create your first project">
        <div className="nuda-es2-first-project__scene" aria-hidden="true">
          <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
            <rect className="nuda-es2-first-project__box" x="2" y="2" width="76" height="76" rx="14" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
          <span className="nuda-es2-first-project__plus">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5 L12 19" />
              <path d="M5 12 L19 12" />
            </svg>
          </span>
        </div>
        <h3 className="nuda-es2-first-project__title">Create your first project</h3>
        <p className="nuda-es2-first-project__sub">Projects keep your work organized</p>
        <button className="nuda-es2-first-project__cta" type="button">New project</button>
      </div>
    ),
    cssInline: `
      .nuda-es2-first-project{display:flex;flex-direction:column;align-items:center;gap:8px;padding:20px;text-align:center;width:100%;max-width:240px;color:rgba(255,255,255,.35)}
      .nuda-es2-first-project__scene{position:relative;width:80px;height:80px;display:flex;align-items:center;justify-content:center}
      .nuda-es2-first-project__box{stroke-dashoffset:0;animation:nuda-es2-first-project-dash 18s linear infinite}
      .nuda-es2-first-project__plus{position:absolute;color:#e4ff54;display:flex;align-items:center;justify-content:center;animation:nuda-es2-first-project-pulse 2.4s ease-in-out infinite}
      .nuda-es2-first-project__plus svg{width:26px;height:26px}
      .nuda-es2-first-project__title{font:600 13px ui-sans-serif,system-ui;color:#fafafa;margin:0}
      .nuda-es2-first-project__sub{font:400 11px ui-sans-serif,system-ui;color:#a0a0a8;margin:0}
      .nuda-es2-first-project__cta{margin-top:6px;padding:8px 16px;background:#e4ff54;color:#0a0a0a;border:0;border-radius:8px;font:600 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .15s ease,filter .2s ease;min-height:32px}
      .nuda-es2-first-project__cta:hover{transform:translateY(-1px);filter:brightness(1.08)}
      .nuda-es2-first-project__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-es2-first-project-dash{to{stroke-dashoffset:-120}}
      @keyframes nuda-es2-first-project-pulse{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.12);opacity:1}}
      @media (prefers-reduced-motion:reduce){
        .nuda-es2-first-project__box,.nuda-es2-first-project__plus{animation:none !important}
        .nuda-es2-first-project__plus{opacity:1;transform:scale(1)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Create Your First Project -->
<div class="nuda-es2-first-project" role="status" aria-label="Create your first project">
  <div class="nuda-es2-first-project__scene" aria-hidden="true">
    <svg viewBox="0 0 80 80" fill="none" width="80" height="80">
      <rect class="nuda-es2-first-project__box" x="2" y="2" width="76" height="76" rx="14" stroke="currentColor" stroke-width="2" stroke-dasharray="6 6" />
    </svg>
    <span class="nuda-es2-first-project__plus">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <path d="M12 5 L12 19" />
        <path d="M5 12 L19 12" />
      </svg>
    </span>
  </div>
  <h3 class="nuda-es2-first-project__title">Create your first project</h3>
  <p class="nuda-es2-first-project__sub">Projects keep your work organized</p>
  <button class="nuda-es2-first-project__cta" type="button">New project</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. No Payment Method ─────────────── */
  {
    id: "es2-payment",
    name: "No Payment Method",
    category: CAT,
    preview: (
      <div className="nuda-es2-payment" role="status" aria-label="No payment method">
        <div className="nuda-es2-payment__scene" aria-hidden="true">
          <svg className="nuda-es2-payment__card" viewBox="0 0 64 44" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="60" height="40" rx="6" />
            <path d="M2 16 L62 16" />
            <path d="M10 30 L26 30" opacity="0.5" />
          </svg>
          <span className="nuda-es2-payment__badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5 L12 19" />
              <path d="M5 12 L19 12" />
            </svg>
          </span>
        </div>
        <h3 className="nuda-es2-payment__title">No payment method</h3>
        <p className="nuda-es2-payment__sub">Add a card to enable billing</p>
        <button className="nuda-es2-payment__cta" type="button">Add payment method</button>
      </div>
    ),
    cssInline: `
      .nuda-es2-payment{display:flex;flex-direction:column;align-items:center;gap:8px;padding:20px;text-align:center;width:100%;max-width:240px;color:#8f8f98}
      .nuda-es2-payment__scene{position:relative;width:72px;height:50px}
      .nuda-es2-payment__card{width:100%;height:100%;color:currentColor;filter:drop-shadow(0 6px 10px rgba(0,0,0,.35));animation:nuda-es2-payment-sway 4.2s ease-in-out infinite;transform-origin:50% 100%}
      .nuda-es2-payment__badge{position:absolute;right:-6px;top:-6px;width:22px;height:22px;border-radius:50%;background:#e4ff54;color:#0a0a0a;display:flex;align-items:center;justify-content:center;box-shadow:0 0 10px rgba(228,255,84,.5);animation:nuda-es2-payment-pulse 2.2s ease-in-out infinite}
      .nuda-es2-payment__badge svg{width:12px;height:12px}
      .nuda-es2-payment__title{font:600 13px ui-sans-serif,system-ui;color:#fafafa;margin:0}
      .nuda-es2-payment__sub{font:400 11px ui-sans-serif,system-ui;color:#a0a0a8;margin:0}
      .nuda-es2-payment__cta{margin-top:6px;padding:8px 16px;background:#e4ff54;color:#0a0a0a;border:0;border-radius:8px;font:600 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .15s ease,filter .2s ease;min-height:32px}
      .nuda-es2-payment__cta:hover{transform:translateY(-1px);filter:brightness(1.08)}
      .nuda-es2-payment__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-es2-payment-sway{0%,100%{transform:rotateY(0deg) rotateZ(0deg)}50%{transform:rotateY(10deg) rotateZ(-2deg)}}
      @keyframes nuda-es2-payment-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-es2-payment__card,.nuda-es2-payment__badge{animation:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- No Payment Method -->
<div class="nuda-es2-payment" role="status" aria-label="No payment method">
  <div class="nuda-es2-payment__scene" aria-hidden="true">
    <svg class="nuda-es2-payment__card" viewBox="0 0 64 44" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="2" width="60" height="40" rx="6" />
      <path d="M2 16 L62 16" />
      <path d="M10 30 L26 30" opacity="0.5" />
    </svg>
    <span class="nuda-es2-payment__badge">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
        <path d="M12 5 L12 19" />
        <path d="M5 12 L19 12" />
      </svg>
    </span>
  </div>
  <h3 class="nuda-es2-payment__title">No payment method</h3>
  <p class="nuda-es2-payment__sub">Add a card to enable billing</p>
  <button class="nuda-es2-payment__cta" type="button">Add payment method</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Awaiting First Event ─────────────── */
  {
    id: "es2-antenna",
    name: "Awaiting First Event",
    category: CAT,
    preview: (
      <div className="nuda-es2-antenna" role="status" aria-label="Awaiting first event">
        <div className="nuda-es2-antenna__scene" aria-hidden="true">
          <span className="nuda-es2-antenna__wave nuda-es2-antenna__wave--a" />
          <span className="nuda-es2-antenna__wave nuda-es2-antenna__wave--b" />
          <span className="nuda-es2-antenna__wave nuda-es2-antenna__wave--c" />
          <svg className="nuda-es2-antenna__mast" viewBox="0 0 24 40" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 40 L12 14" />
            <circle cx="12" cy="8" r="5" />
          </svg>
        </div>
        <h3 className="nuda-es2-antenna__title">Awaiting first event</h3>
        <p className="nuda-es2-antenna__sub">Data will appear as soon as it arrives</p>
      </div>
    ),
    cssInline: `
      .nuda-es2-antenna{display:flex;flex-direction:column;align-items:center;gap:8px;padding:20px;text-align:center;width:100%;max-width:240px;color:#e4ff54}
      .nuda-es2-antenna__scene{position:relative;width:80px;height:60px;display:flex;align-items:flex-end;justify-content:center}
      .nuda-es2-antenna__mast{position:relative;width:32px;height:48px;color:currentColor;z-index:1}
      .nuda-es2-antenna__wave{position:absolute;top:2px;left:50%;width:14px;height:14px;border:1.5px solid currentColor;border-radius:50%;transform:translate(-50%,0) scale(.4);opacity:0;animation:nuda-es2-antenna-wave 2.4s ease-out infinite}
      .nuda-es2-antenna__wave--a{animation-delay:0s}
      .nuda-es2-antenna__wave--b{animation-delay:.8s}
      .nuda-es2-antenna__wave--c{animation-delay:1.6s}
      .nuda-es2-antenna__title{font:600 13px ui-sans-serif,system-ui;color:#fafafa;margin:0}
      .nuda-es2-antenna__sub{font:400 11px ui-sans-serif,system-ui;color:#a0a0a8;margin:0}
      @keyframes nuda-es2-antenna-wave{0%{transform:translate(-50%,0) scale(.4);opacity:.8}100%{transform:translate(-50%,0) scale(3.2);opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-es2-antenna__wave{animation:none !important;opacity:0}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Awaiting First Event -->
<div class="nuda-es2-antenna" role="status" aria-label="Awaiting first event">
  <div class="nuda-es2-antenna__scene" aria-hidden="true">
    <span class="nuda-es2-antenna__wave nuda-es2-antenna__wave--a"></span>
    <span class="nuda-es2-antenna__wave nuda-es2-antenna__wave--b"></span>
    <span class="nuda-es2-antenna__wave nuda-es2-antenna__wave--c"></span>
    <svg class="nuda-es2-antenna__mast" viewBox="0 0 24 40" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 40 L12 14" />
      <circle cx="12" cy="8" r="5" />
    </svg>
  </div>
  <h3 class="nuda-es2-antenna__title">Awaiting first event</h3>
  <p class="nuda-es2-antenna__sub">Data will appear as soon as it arrives</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Empty Kanban Column ─────────────── */
  {
    id: "es2-kanban",
    name: "Empty Kanban Column",
    category: CAT,
    preview: (
      <div className="nuda-es2-kanban" role="status" aria-label="Empty kanban column">
        <div className="nuda-es2-kanban__column" aria-hidden="true">
          <span className="nuda-es2-kanban__ghost" />
        </div>
        <h3 className="nuda-es2-kanban__title">Nothing here yet</h3>
        <p className="nuda-es2-kanban__sub">Drag a card into this column</p>
      </div>
    ),
    cssInline: `
      .nuda-es2-kanban{display:flex;flex-direction:column;align-items:center;gap:10px;padding:20px;text-align:center;width:100%;max-width:220px}
      .nuda-es2-kanban__column{position:relative;width:120px;height:96px;border:1.5px dashed rgba(255,255,255,.18);border-radius:10px;display:flex;align-items:center;justify-content:center;overflow:hidden}
      .nuda-es2-kanban__ghost{width:80px;height:28px;border-radius:6px;background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.3);animation:nuda-es2-kanban-drop 2.8s ease-in-out infinite}
      .nuda-es2-kanban__title{font:600 13px ui-sans-serif,system-ui;color:#fafafa;margin:0}
      .nuda-es2-kanban__sub{font:400 11px ui-sans-serif,system-ui;color:#a0a0a8;margin:0}
      @keyframes nuda-es2-kanban-drop{0%{transform:translateY(-30px);opacity:0}30%{opacity:1}60%{transform:translateY(0);opacity:1}100%{transform:translateY(0);opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-es2-kanban__ghost{animation:none !important;opacity:.6;transform:translateY(0)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Empty Kanban Column -->
<div class="nuda-es2-kanban" role="status" aria-label="Empty kanban column">
  <div class="nuda-es2-kanban__column" aria-hidden="true">
    <span class="nuda-es2-kanban__ghost"></span>
  </div>
  <h3 class="nuda-es2-kanban__title">Nothing here yet</h3>
  <p class="nuda-es2-kanban__sub">Drag a card into this column</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. You're Offline ─────────────── */
  {
    id: "es2-offline",
    name: "You're Offline",
    category: CAT,
    preview: (
      <div className="nuda-es2-offline" role="status" aria-label="You are offline">
        <div className="nuda-es2-offline__scene" aria-hidden="true">
          <svg viewBox="0 0 48 36" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path className="nuda-es2-offline__arc nuda-es2-offline__arc--a" d="M4 14 A28 28 0 0 1 44 14" />
            <path className="nuda-es2-offline__arc nuda-es2-offline__arc--b" d="M11 21 A18 18 0 0 1 37 21" />
            <path className="nuda-es2-offline__arc nuda-es2-offline__arc--c" d="M18 28 A8 8 0 0 1 30 28" />
            <circle className="nuda-es2-offline__dot" cx="24" cy="33" r="2" fill="currentColor" stroke="none" />
            <path className="nuda-es2-offline__slash" d="M2 2 L46 34" />
          </svg>
        </div>
        <h3 className="nuda-es2-offline__title">You're offline</h3>
        <p className="nuda-es2-offline__sub">Check your connection and try again</p>
        <button className="nuda-es2-offline__cta" type="button">Retry</button>
      </div>
    ),
    cssInline: `
      .nuda-es2-offline{display:flex;flex-direction:column;align-items:center;gap:8px;padding:20px;text-align:center;width:100%;max-width:240px;color:#8f8f98}
      .nuda-es2-offline__scene{width:80px;height:60px;display:flex;align-items:center;justify-content:center}
      .nuda-es2-offline__scene svg{width:100%;height:100%}
      .nuda-es2-offline__arc{opacity:.2}
      .nuda-es2-offline__arc--a{animation:nuda-es2-offline-blink 2.4s ease-in-out infinite}
      .nuda-es2-offline__arc--b{animation:nuda-es2-offline-blink 2.4s ease-in-out .2s infinite}
      .nuda-es2-offline__arc--c{animation:nuda-es2-offline-blink 2.4s ease-in-out .4s infinite}
      .nuda-es2-offline__dot{animation:nuda-es2-offline-dot 2.4s ease-in-out infinite}
      .nuda-es2-offline__slash{color:#ff6b6b}
      .nuda-es2-offline__title{font:600 13px ui-sans-serif,system-ui;color:#fafafa;margin:0}
      .nuda-es2-offline__sub{font:400 11px ui-sans-serif,system-ui;color:#a0a0a8;margin:0}
      .nuda-es2-offline__cta{margin-top:6px;padding:8px 16px;background:#e4ff54;color:#0a0a0a;border:0;border-radius:8px;font:600 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .15s ease,filter .2s ease;min-height:32px}
      .nuda-es2-offline__cta:hover{transform:translateY(-1px);filter:brightness(1.08)}
      .nuda-es2-offline__cta:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-es2-offline-blink{0%,100%{opacity:.15}50%{opacity:.6}}
      @keyframes nuda-es2-offline-dot{0%,100%{opacity:.3;transform:scale(1)}50%{opacity:1;transform:scale(1.3)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-es2-offline__arc--a,.nuda-es2-offline__arc--b,.nuda-es2-offline__arc--c,.nuda-es2-offline__dot{animation:none !important;opacity:.3}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- You're Offline -->
<div class="nuda-es2-offline" role="status" aria-label="You are offline">
  <div class="nuda-es2-offline__scene" aria-hidden="true">
    <svg viewBox="0 0 48 36" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
      <path class="nuda-es2-offline__arc nuda-es2-offline__arc--a" d="M4 14 A28 28 0 0 1 44 14" />
      <path class="nuda-es2-offline__arc nuda-es2-offline__arc--b" d="M11 21 A18 18 0 0 1 37 21" />
      <path class="nuda-es2-offline__arc nuda-es2-offline__arc--c" d="M18 28 A8 8 0 0 1 30 28" />
      <circle class="nuda-es2-offline__dot" cx="24" cy="33" r="2" fill="currentColor" stroke="none" />
      <path class="nuda-es2-offline__slash" d="M2 2 L46 34" />
    </svg>
  </div>
  <h3 class="nuda-es2-offline__title">You're offline</h3>
  <p class="nuda-es2-offline__sub">Check your connection and try again</p>
  <button class="nuda-es2-offline__cta" type="button">Retry</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. No Analytics Yet ─────────────── */
  {
    id: "es2-chart",
    name: "No Analytics Yet",
    category: CAT,
    preview: (
      <div className="nuda-es2-chart" role="status" aria-label="No analytics yet">
        <div className="nuda-es2-chart__scene" aria-hidden="true">
          <span className="nuda-es2-chart__bar nuda-es2-chart__bar--1" />
          <span className="nuda-es2-chart__bar nuda-es2-chart__bar--2" />
          <span className="nuda-es2-chart__bar nuda-es2-chart__bar--3" />
          <span className="nuda-es2-chart__bar nuda-es2-chart__bar--4" />
          <span className="nuda-es2-chart__bar nuda-es2-chart__bar--5" />
          <span className="nuda-es2-chart__axis" />
        </div>
        <h3 className="nuda-es2-chart__title">No analytics yet</h3>
        <p className="nuda-es2-chart__sub">Data appears once tracking starts</p>
      </div>
    ),
    cssInline: `
      .nuda-es2-chart{display:flex;flex-direction:column;align-items:center;gap:10px;padding:20px;text-align:center;width:100%;max-width:220px}
      .nuda-es2-chart__scene{position:relative;width:120px;height:64px;display:flex;align-items:flex-end;justify-content:center;gap:8px;padding-bottom:2px}
      .nuda-es2-chart__axis{position:absolute;left:0;right:0;bottom:0;height:1px;background:rgba(255,255,255,.14)}
      .nuda-es2-chart__bar{width:12px;height:44px;border-radius:3px 3px 0 0;background:rgba(228,255,84,.16);transform-origin:bottom;animation:nuda-es2-chart-grow 2.6s ease-in-out infinite}
      .nuda-es2-chart__bar--1{animation-delay:0s}
      .nuda-es2-chart__bar--2{animation-delay:.15s}
      .nuda-es2-chart__bar--3{animation-delay:.3s}
      .nuda-es2-chart__bar--4{animation-delay:.45s}
      .nuda-es2-chart__bar--5{animation-delay:.6s}
      .nuda-es2-chart__title{font:600 13px ui-sans-serif,system-ui;color:#fafafa;margin:0}
      .nuda-es2-chart__sub{font:400 11px ui-sans-serif,system-ui;color:#a0a0a8;margin:0}
      @keyframes nuda-es2-chart-grow{0%,100%{transform:scaleY(.35);opacity:.5}50%{transform:scaleY(1);opacity:.9}}
      @media (prefers-reduced-motion:reduce){
        .nuda-es2-chart__bar{animation:none !important;transform:scaleY(.6);opacity:.7}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- No Analytics Yet -->
<div class="nuda-es2-chart" role="status" aria-label="No analytics yet">
  <div class="nuda-es2-chart__scene" aria-hidden="true">
    <span class="nuda-es2-chart__bar nuda-es2-chart__bar--1"></span>
    <span class="nuda-es2-chart__bar nuda-es2-chart__bar--2"></span>
    <span class="nuda-es2-chart__bar nuda-es2-chart__bar--3"></span>
    <span class="nuda-es2-chart__bar nuda-es2-chart__bar--4"></span>
    <span class="nuda-es2-chart__bar nuda-es2-chart__bar--5"></span>
    <span class="nuda-es2-chart__axis"></span>
  </div>
  <h3 class="nuda-es2-chart__title">No analytics yet</h3>
  <p class="nuda-es2-chart__sub">Data appears once tracking starts</p>
</div>`,
      },
    ],
  },
];
