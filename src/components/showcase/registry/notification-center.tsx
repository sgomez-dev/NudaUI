import type { NudaComponent } from "./types";

export const notificationCenter: NudaComponent[] = [
  /* ─────────────── 1. Notification Item ─────────────── */
  {
    id: "notif-item",
    name: "Notification Item",
    category: "Notification Center",
    preview: (
      <div className="nuda-notifitem is-unread">
        <span className="nuda-notifitem__avatar" />
        <div className="nuda-notifitem__body">
          <div><strong>Sara Linde</strong> commented on your PR</div>
          <span>2 min ago</span>
        </div>
        <span className="nuda-notifitem__unread" />
      </div>
    ),
    cssInline: `
      .nuda-notifitem{position:relative;display:flex;align-items:center;gap:12px;padding:12px 14px 12px 16px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:280px;cursor:pointer;transition:background .2s}
      .nuda-notifitem:hover{background:rgba(255,255,255,.04)}
      .nuda-notifitem.is-unread{background:rgba(228,255,84,.04)}
      .nuda-notifitem__avatar{width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#9d6dff,#ff6dd4);flex-shrink:0}
      .nuda-notifitem__body{flex:1;font-size:12px;color:#a0a0a8}
      .nuda-notifitem__body strong{color:#fafafa}
      .nuda-notifitem__body span{display:block;color:#63636e;font-size:10px;margin-top:2px}
      .nuda-notifitem__unread{position:absolute;left:6px;top:50%;transform:translateY(-50%);width:6px;height:6px;border-radius:50%;background:#e4ff54;box-shadow:0 0 6px #e4ff54;animation:_unreadPulse 2s ease-in-out infinite}
      @keyframes _unreadPulse{0%,100%{opacity:1}50%{opacity:.5}}
      @media(prefers-reduced-motion:reduce){.nuda-notifitem__unread{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-notifitem is-unread">
  <span class="nuda-notifitem__avatar"></span>
  <div class="nuda-notifitem__body">
    <div><strong>Sara Linde</strong> commented on your PR</div>
    <span>2 min ago</span>
  </div>
  <span class="nuda-notifitem__unread"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-notifitem.is-unread {
  background: rgba(228, 255, 84, 0.04);
}

.nuda-notifitem__unread {
  position: absolute;
  left: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #e4ff54;
  box-shadow: 0 0 6px #e4ff54;
  animation: nuda-unread-pulse 2s ease-in-out infinite;
}

@keyframes nuda-unread-pulse {
  0%, 100% { opacity: 1;   }
  50%      { opacity: 0.5; }
}`,
      },
    ],
  },

  /* ─────────────── 2. Inbox Header ─────────────── */
  {
    id: "inbox-header",
    name: "Inbox Header",
    category: "Notification Center",
    preview: (
      <div className="nuda-inboxhd">
        <div className="nuda-inboxhd__title">
          Inbox
          <span className="nuda-inboxhd__count">12</span>
        </div>
        <button className="nuda-inboxhd__mark">Mark all read</button>
      </div>
    ),
    cssInline: `
      .nuda-inboxhd{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:280px}
      .nuda-inboxhd__title{display:inline-flex;align-items:center;gap:8px;color:#fafafa;font-size:14px;font-weight:700}
      .nuda-inboxhd__count{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;background:#ff5e7a;color:#fafafa;border-radius:99px;font-size:10px;font-weight:700;font-variant-numeric:tabular-nums;animation:_cntBob .5s cubic-bezier(.34,1.56,.64,1)}
      .nuda-inboxhd__mark{background:transparent;border:0;color:#a0a0a8;font-size:11px;cursor:pointer;padding:4px 8px;border-radius:6px;transition:background .2s,color .2s}
      .nuda-inboxhd__mark:hover{background:rgba(255,255,255,.04);color:#e4ff54}
      @keyframes _cntBob{0%{transform:scale(0)}60%{transform:scale(1.2)}100%{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-inboxhd__count{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-inboxhd">
  <div class="nuda-inboxhd__title">
    Inbox
    <span class="nuda-inboxhd__count">12</span>
  </div>
  <button class="nuda-inboxhd__mark">Mark all read</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-inboxhd__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  background: #ff5e7a;
  color: #fafafa;
  border-radius: 99px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  animation: nuda-cnt-bob 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}`,
      },
    ],
  },

  /* ─────────────── 3. Time Group ─────────────── */
  {
    id: "notif-time-group",
    name: "Time Group",
    category: "Notification Center",
    preview: (
      <div className="nuda-tgroup">
        <div className="nuda-tgroup__head">Today</div>
        <div className="nuda-tgroup__row">Build #284 succeeded</div>
        <div className="nuda-tgroup__row">Invitation accepted</div>
        <div className="nuda-tgroup__head">Yesterday</div>
        <div className="nuda-tgroup__row">3 new comments</div>
      </div>
    ),
    cssInline: `
      .nuda-tgroup{display:flex;flex-direction:column;gap:2px;width:100%;max-width:240px}
      .nuda-tgroup__head{padding:8px 0 4px;color:#63636e;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;border-bottom:1px solid rgba(255,255,255,.06)}
      .nuda-tgroup__row{padding:8px 10px;color:#a0a0a8;font-size:12px;border-radius:6px;cursor:pointer;animation:_tgrpIn .35s cubic-bezier(.16,1,.3,1) both;transition:background .2s,color .2s}
      .nuda-tgroup__row:hover{background:rgba(255,255,255,.04);color:#fafafa}
      @keyframes _tgrpIn{from{opacity:0;transform:translateX(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-tgroup__row{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tgroup">
  <div class="nuda-tgroup__head">Today</div>
  <div class="nuda-tgroup__row">Build #284 succeeded</div>
  <div class="nuda-tgroup__row">Invitation accepted</div>
  <div class="nuda-tgroup__head">Yesterday</div>
  <div class="nuda-tgroup__row">3 new comments</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-tgroup__head {
  padding: 8px 0 4px;
  color: #63636e;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-tgroup__row {
  padding: 8px 10px;
  color: #a0a0a8;
  border-radius: 6px;
  cursor: pointer;
  animation: nuda-tgrp-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) both;
  transition: background 0.2s, color 0.2s;
}`,
      },
    ],
  },

  /* ─────────────── 4. Notification Filter Tabs ─────────────── */
  {
    id: "notif-filter-tabs",
    name: "Filter Tabs",
    category: "Notification Center",
    preview: (
      <div className="nuda-ntabs">
        <span className="is-on">All</span>
        <span>Mentions</span>
        <span>Reviews</span>
      </div>
    ),
    cssInline: `
      .nuda-ntabs{display:inline-flex;gap:6px;padding:4px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.06);border-radius:8px}
      .nuda-ntabs span{padding:5px 12px;color:#63636e;font-size:11px;font-weight:500;border-radius:6px;cursor:pointer;transition:color .2s,background .2s}
      .nuda-ntabs span:hover{color:#fafafa}
      .nuda-ntabs span.is-on{background:#e4ff54;color:#09090b;font-weight:600;animation:_ntabPick .35s cubic-bezier(.16,1,.3,1)}
      @keyframes _ntabPick{from{transform:scale(.85)}to{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-ntabs span.is-on{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ntabs">
  <span class="is-on">All</span>
  <span>Mentions</span>
  <span>Reviews</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-ntabs span.is-on {
  background: #e4ff54;
  color: #09090b;
  font-weight: 600;
}`,
      },
    ],
  },

  /* ─────────────── 5. Swipe Dismiss ─────────────── */
  {
    id: "notif-swipe-dismiss",
    name: "Swipe to Dismiss",
    category: "Notification Center",
    preview: (
      <div className="nuda-swdis">
        <div className="nuda-swdis__bg">Dismiss</div>
        <div className="nuda-swdis__card" style={{ transform: "translateX(-40%)" }}>
          New review on Product A
        </div>
      </div>
    ),
    cssInline: `
      .nuda-swdis{position:relative;width:100%;max-width:260px;height:46px;border-radius:10px;overflow:hidden}
      .nuda-swdis__bg{position:absolute;inset:0;display:flex;align-items:center;justify-content:flex-end;padding-right:16px;background:#ff5e7a;color:#fafafa;font-size:11px;font-weight:600}
      .nuda-swdis__card{position:relative;display:flex;align-items:center;padding:0 14px;height:100%;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:10px;color:#fafafa;font-size:12px;cursor:grab;animation:_swdisDemo 4s ease-in-out infinite}
      @keyframes _swdisDemo{0%,100%{transform:translateX(0)}40%{transform:translateX(-40%)}60%{transform:translateX(-40%)}80%{transform:translateX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-swdis__card{animation:none;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-swdis">
  <div class="nuda-swdis__bg">Dismiss</div>
  <div class="nuda-swdis__card">New review on Product A</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-swdis__bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 16px;
  background: #ff5e7a;
  color: #fafafa;
  font-weight: 600;
}

.nuda-swdis__card {
  position: relative;
  background: #111114;
  cursor: grab;
}`,
      },
    ],
  },

  /* ─────────────── 6. Inbox Empty ─────────────── */
  {
    id: "inbox-empty",
    name: "Inbox Zero",
    category: "Notification Center",
    preview: (
      <div className="nuda-inboxz">
        <span className="nuda-inboxz__emoji">🎉</span>
        <div className="nuda-inboxz__title">Inbox zero</div>
        <div className="nuda-inboxz__sub">You&apos;re all caught up</div>
      </div>
    ),
    cssInline: `
      .nuda-inboxz{display:flex;flex-direction:column;align-items:center;padding:24px;text-align:center;background:rgba(110,231,183,.04);border:1px dashed rgba(110,231,183,.3);border-radius:12px;width:100%;max-width:240px}
      .nuda-inboxz__emoji{font-size:32px;margin-bottom:6px;animation:_inboxzBounce 2s ease-in-out infinite}
      .nuda-inboxz__title{color:#6ee7b7;font-size:14px;font-weight:700}
      .nuda-inboxz__sub{color:#a0a0a8;font-size:11px;margin-top:2px}
      @keyframes _inboxzBounce{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-4px) rotate(8deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-inboxz__emoji{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-inboxz">
  <span class="nuda-inboxz__emoji">🎉</span>
  <div class="nuda-inboxz__title">Inbox zero</div>
  <div class="nuda-inboxz__sub">You're all caught up</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-inboxz__emoji {
  font-size: 32px;
  animation: nuda-inboxz-bounce 2s ease-in-out infinite;
}

@keyframes nuda-inboxz-bounce {
  0%, 100% { transform: translateY(0)    rotate(0);    }
  50%      { transform: translateY(-4px) rotate(8deg); }
}`,
      },
    ],
  },

  /* ─────────────── 7. Bulk Action Bar ─────────────── */
  {
    id: "bulk-action-bar",
    name: "Bulk Action Bar",
    category: "Notification Center",
    preview: (
      <div className="nuda-bulk">
        <span className="nuda-bulk__count">3 selected</span>
        <div className="nuda-bulk__actions">
          <button>Read</button>
          <button>Archive</button>
          <button className="is-danger">Delete</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-bulk{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 12px;background:#0c0c10;border:1px solid #e4ff54;border-radius:10px;color:#fafafa;width:100%;max-width:280px;animation:_bulkIn .4s cubic-bezier(.16,1,.3,1) both;box-shadow:0 0 0 3px rgba(228,255,84,.1)}
      .nuda-bulk__count{font-size:11px;color:#e4ff54;font-weight:600}
      .nuda-bulk__actions{display:inline-flex;gap:4px}
      .nuda-bulk__actions button{padding:4px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fafafa;font-size:10px;font-weight:500;border-radius:6px;cursor:pointer;transition:background .2s}
      .nuda-bulk__actions button:hover{background:rgba(255,255,255,.07)}
      .nuda-bulk__actions button.is-danger:hover{background:rgba(255,94,122,.15);border-color:#ff5e7a;color:#ff5e7a}
      @keyframes _bulkIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-bulk{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-bulk">
  <span class="nuda-bulk__count">3 selected</span>
  <div class="nuda-bulk__actions">
    <button>Read</button>
    <button>Archive</button>
    <button class="is-danger">Delete</button>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-bulk {
  background: #0c0c10;
  border: 1px solid #e4ff54;
  border-radius: 10px;
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.1);
  animation: nuda-bulk-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}`,
      },
    ],
  },

  /* ─────────────── 8. Notification Settings ─────────────── */
  {
    id: "notif-settings-row",
    name: "Notification Setting Row",
    category: "Notification Center",
    preview: (
      <div className="nuda-nset">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.7 21a2 2 0 01-3.4 0" />
        </svg>
        <div className="nuda-nset__body">
          <div>Push notifications</div>
          <span>Get notified on this device</span>
        </div>
        <label className="nuda-nset__toggle is-on">
          <span />
        </label>
      </div>
    ),
    cssInline: `
      .nuda-nset{display:flex;align-items:center;gap:12px;padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:280px}
      .nuda-nset > svg{width:18px;height:18px;color:#e4ff54;flex-shrink:0}
      .nuda-nset__body{flex:1}
      .nuda-nset__body > div{color:#fafafa;font-size:12px;font-weight:500}
      .nuda-nset__body > span{display:block;color:#63636e;font-size:10px;margin-top:1px}
      .nuda-nset__toggle{width:30px;height:18px;background:rgba(255,255,255,.08);border-radius:99px;position:relative;cursor:pointer;flex-shrink:0;transition:background .3s}
      .nuda-nset__toggle span{position:absolute;left:2px;top:2px;width:14px;height:14px;background:#fafafa;border-radius:50%;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
      .nuda-nset__toggle.is-on{background:#e4ff54}
      .nuda-nset__toggle.is-on span{transform:translateX(12px);background:#09090b}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-nset">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 01-3.4 0" />
  </svg>
  <div class="nuda-nset__body">
    <div>Push notifications</div>
    <span>Get notified on this device</span>
  </div>
  <label class="nuda-nset__toggle is-on">
    <span></span>
  </label>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nset__toggle {
  width: 30px;
  height: 18px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 99px;
  cursor: pointer;
  transition: background 0.3s;
}

.nuda-nset__toggle.is-on { background: #e4ff54; }
.nuda-nset__toggle.is-on span { transform: translateX(12px); background: #09090b; }`,
      },
    ],
  },

  /* ─────────────── 9. Mention Notification ─────────────── */
  {
    id: "mention-notif",
    name: "Mention Notification",
    category: "Notification Center",
    preview: (
      <div className="nuda-mention">
        <span className="nuda-mention__at">@</span>
        <div className="nuda-mention__body">
          <div><strong>Sara</strong> mentioned you in <em>#design</em></div>
          <span>&quot;@you we should ship the lime accent&quot;</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mention{display:flex;align-items:flex-start;gap:10px;padding:12px;background:rgba(228,255,84,.04);border:1px solid rgba(228,255,84,.2);border-left:3px solid #e4ff54;border-radius:10px;width:100%;max-width:280px}
      .nuda-mention__at{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:#e4ff54;color:#09090b;font-size:13px;font-weight:900;flex-shrink:0;animation:_mentionPop .55s cubic-bezier(.34,1.56,.64,1)}
      .nuda-mention__body{flex:1;font-size:12px;color:#a0a0a8}
      .nuda-mention__body strong{color:#fafafa}
      .nuda-mention__body em{color:#62b6ff;font-style:normal}
      .nuda-mention__body span{display:block;color:#63636e;font-size:11px;margin-top:4px;padding-left:8px;border-left:2px solid rgba(255,255,255,.1);font-style:italic}
      @keyframes _mentionPop{from{transform:scale(0)}to{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-mention__at{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mention">
  <span class="nuda-mention__at">@</span>
  <div class="nuda-mention__body">
    <div><strong>Sara</strong> mentioned you in <em>#design</em></div>
    <span>"@you we should ship the lime accent"</span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-mention {
  background: rgba(228, 255, 84, 0.04);
  border: 1px solid rgba(228, 255, 84, 0.2);
  border-left: 3px solid #e4ff54;
}

.nuda-mention__at {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #e4ff54;
  color: #09090b;
  font-weight: 900;
  animation: nuda-mention-pop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1);
}`,
      },
    ],
  },

  /* ─────────────── 10. Notification Search ─────────────── */
  {
    id: "notif-search",
    name: "Inbox Search",
    category: "Notification Center",
    preview: (
      <div className="nuda-nsearch">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input placeholder="Filter notifications…" readOnly />
        <kbd>/</kbd>
      </div>
    ),
    cssInline: `
      .nuda-nsearch{display:inline-flex;align-items:center;gap:8px;padding:8px 8px 8px 12px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:10px;width:100%;max-width:260px;transition:border-color .25s,box-shadow .25s}
      .nuda-nsearch:focus-within{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-nsearch > svg{width:14px;height:14px;color:#63636e;flex-shrink:0}
      .nuda-nsearch input{flex:1;min-width:0;background:transparent;border:0;outline:none;color:#fafafa;font-size:12px}
      .nuda-nsearch input::placeholder{color:#63636e}
      .nuda-nsearch kbd{padding:1px 6px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:4px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:10px;color:#a0a0a8}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-nsearch">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
  <input placeholder="Filter notifications…" />
  <kbd>/</kbd>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nsearch:focus-within {
  border-color: #e4ff54;
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.12);
}`,
      },
    ],
  },

  /* ─────────────── 11. Build Status Notification ─────────────── */
  {
    id: "build-notif",
    name: "Build Status",
    category: "Notification Center",
    preview: (
      <div className="nuda-buildn">
        <div className="nuda-buildn__hash">#284</div>
        <div className="nuda-buildn__body">
          <div>main · deploy:production</div>
          <span><span className="nuda-buildn__dot" /> Build succeeded · 2m 14s</span>
        </div>
        <span className="nuda-buildn__time">just now</span>
      </div>
    ),
    cssInline: `
      .nuda-buildn{display:flex;align-items:center;gap:12px;padding:10px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-left:3px solid #6ee7b7;border-radius:10px;width:100%;max-width:300px}
      .nuda-buildn__hash{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:#6ee7b7;font-size:11px;font-weight:700;font-variant-numeric:tabular-nums}
      .nuda-buildn__body{flex:1;font-size:11px;color:#a0a0a8}
      .nuda-buildn__body > div{color:#fafafa;font-size:12px;font-weight:600;margin-bottom:1px}
      .nuda-buildn__body > span{display:inline-flex;align-items:center;gap:5px}
      .nuda-buildn__dot{width:5px;height:5px;border-radius:50%;background:#6ee7b7;animation:_bDot 1.4s ease-in-out infinite}
      .nuda-buildn__time{color:#63636e;font-size:10px;font-variant-numeric:tabular-nums}
      @keyframes _bDot{50%{opacity:.4}}
      @media(prefers-reduced-motion:reduce){.nuda-buildn__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-buildn">
  <div class="nuda-buildn__hash">#284</div>
  <div class="nuda-buildn__body">
    <div>main · deploy:production</div>
    <span><span class="nuda-buildn__dot"></span> Build succeeded · 2m 14s</span>
  </div>
  <span class="nuda-buildn__time">just now</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-buildn {
  border-left: 3px solid #6ee7b7;
}

.nuda-buildn__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #6ee7b7;
  animation: nuda-b-dot 1.4s ease-in-out infinite;
}`,
      },
    ],
  },

  /* ─────────────── 12. Notification Drawer Toggle ─────────────── */
  {
    id: "notif-bell",
    name: "Notification Bell",
    category: "Notification Center",
    preview: (
      <button className="nuda-nbell" aria-label="Notifications (3 unread)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.7 21a2 2 0 01-3.4 0" />
        </svg>
        <span className="nuda-nbell__badge">3</span>
      </button>
    ),
    cssInline: `
      .nuda-nbell{position:relative;display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fafafa;cursor:pointer;transition:background .25s}
      .nuda-nbell:hover{background:rgba(255,255,255,.07)}
      .nuda-nbell svg{width:16px;height:16px;animation:_bellRing 2.4s ease-in-out infinite}
      .nuda-nbell__badge{position:absolute;top:-2px;right:-2px;min-width:18px;height:18px;padding:0 5px;background:#ff5e7a;color:#fafafa;border-radius:99px;border:2px solid #09090b;font-size:10px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;font-variant-numeric:tabular-nums}
      @keyframes _bellRing{0%,40%,100%{transform:rotate(0)}50%{transform:rotate(-12deg)}55%{transform:rotate(10deg)}60%{transform:rotate(-6deg)}65%{transform:rotate(4deg)}70%{transform:rotate(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-nbell svg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-nbell" aria-label="Notifications (3 unread)">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 01-3.4 0" />
  </svg>
  <span class="nuda-nbell__badge">3</span>
</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nbell svg {
  animation: nuda-bell-ring 2.4s ease-in-out infinite;
}

@keyframes nuda-bell-ring {
  0%, 40%, 100% { transform: rotate(0);     }
  50%           { transform: rotate(-12deg); }
  55%           { transform: rotate(10deg);  }
  60%           { transform: rotate(-6deg);  }
  65%           { transform: rotate(4deg);   }
  70%           { transform: rotate(0);      }
}`,
      },
    ],
  },
];
