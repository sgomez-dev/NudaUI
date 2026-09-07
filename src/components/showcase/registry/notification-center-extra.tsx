import type { NudaComponent } from "./types";

const CAT = "Notification Center";

export const notificationCenterExtra: NudaComponent[] = [
  /* ─────────────── 1. Unread/All Inbox Tabs ─────────────── */
  {
    id: "nc2-inbox-tabs",
    name: "Unread/All Inbox",
    category: CAT,
    preview: (
      <div className="nuda-nc2-inbox-tabs" role="region" aria-label="Notifications inbox">
        <div className="nuda-nc2-inbox-tabs__tabs" role="tablist" aria-label="Filter notifications">
          <button type="button" className="nuda-nc2-inbox-tabs__tab is-on" role="tab" aria-selected="true">
            Unread<span className="nuda-nc2-inbox-tabs__count">3</span>
          </button>
          <button type="button" className="nuda-nc2-inbox-tabs__tab" role="tab" aria-selected="false">
            All<span className="nuda-nc2-inbox-tabs__count">12</span>
          </button>
        </div>
        <ul className="nuda-nc2-inbox-tabs__list">
          <li className="nuda-nc2-inbox-tabs__item is-unread">
            <span className="nuda-nc2-inbox-tabs__dot" aria-hidden="true" />
            <span className="nuda-nc2-inbox-tabs__text">
              <strong>Priya</strong> approved your request
              <span className="nuda-nc2-inbox-tabs__sr"> — Unread</span>
            </span>
          </li>
          <li className="nuda-nc2-inbox-tabs__item is-unread">
            <span className="nuda-nc2-inbox-tabs__dot" aria-hidden="true" />
            <span className="nuda-nc2-inbox-tabs__text">
              <strong>Marco</strong> shared a file with you
              <span className="nuda-nc2-inbox-tabs__sr"> — Unread</span>
            </span>
          </li>
          <li className="nuda-nc2-inbox-tabs__item">
            <span className="nuda-nc2-inbox-tabs__dot" aria-hidden="true" />
            <span className="nuda-nc2-inbox-tabs__text">
              <strong>Team standup</strong> notes posted
            </span>
          </li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-nc2-inbox-tabs{display:flex;flex-direction:column;gap:8px;width:100%;max-width:300px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px}
      .nuda-nc2-inbox-tabs__tabs{display:inline-flex;gap:4px;padding:3px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.06);border-radius:8px}
      .nuda-nc2-inbox-tabs__tab{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;min-height:28px;background:transparent;border:0;border-radius:6px;color:#a0a0a8;font-size:11px;font-weight:600;cursor:pointer;transition:background .2s,color .2s}
      .nuda-nc2-inbox-tabs__tab:hover{color:#fafafa}
      .nuda-nc2-inbox-tabs__tab:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-nc2-inbox-tabs__tab.is-on{background:#e4ff54;color:#09090b}
      .nuda-nc2-inbox-tabs__count{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;border-radius:99px;background:rgba(255,255,255,.12);color:#fafafa;font-size:9px;font-weight:700;font-variant-numeric:tabular-nums}
      .nuda-nc2-inbox-tabs__tab.is-on .nuda-nc2-inbox-tabs__count{background:rgba(9,9,11,.18);color:#09090b;animation:_nuda-nc2inbox-tabs-pop .35s cubic-bezier(.34,1.56,.64,1)}
      .nuda-nc2-inbox-tabs__list{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:2px;max-height:150px;overflow-y:auto}
      .nuda-nc2-inbox-tabs__item{position:relative;display:flex;align-items:flex-start;gap:8px;padding:7px 8px 7px 6px;border-radius:8px;cursor:pointer;animation:_nuda-nc2inbox-tabs-in .3s cubic-bezier(.16,1,.3,1) both;transition:background .2s}
      .nuda-nc2-inbox-tabs__item:hover{background:rgba(255,255,255,.04)}
      .nuda-nc2-inbox-tabs__item.is-unread{background:rgba(228,255,84,.04)}
      .nuda-nc2-inbox-tabs__dot{flex-shrink:0;margin-top:5px;width:6px;height:6px;border-radius:50%;background:transparent}
      .nuda-nc2-inbox-tabs__item.is-unread .nuda-nc2-inbox-tabs__dot{background:#e4ff54;box-shadow:0 0 6px rgba(228,255,84,.6)}
      .nuda-nc2-inbox-tabs__text{flex:1;font-size:11px;line-height:1.4;color:#a0a0a8}
      .nuda-nc2-inbox-tabs__text strong{color:#fafafa}
      .nuda-nc2-inbox-tabs__sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      @keyframes _nuda-nc2inbox-tabs-pop{from{transform:scale(0)}to{transform:scale(1)}}
      @keyframes _nuda-nc2inbox-tabs-in{from{opacity:0;transform:translateY(-3px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-nc2-inbox-tabs__item{animation:none}.nuda-nc2-inbox-tabs__tab.is-on .nuda-nc2-inbox-tabs__count{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-nc2-inbox-tabs" role="region" aria-label="Notifications inbox">
  <div class="nuda-nc2-inbox-tabs__tabs" role="tablist" aria-label="Filter notifications">
    <button type="button" class="nuda-nc2-inbox-tabs__tab is-on" role="tab" aria-selected="true">
      Unread<span class="nuda-nc2-inbox-tabs__count">3</span>
    </button>
    <button type="button" class="nuda-nc2-inbox-tabs__tab" role="tab" aria-selected="false">
      All<span class="nuda-nc2-inbox-tabs__count">12</span>
    </button>
  </div>
  <ul class="nuda-nc2-inbox-tabs__list">
    <li class="nuda-nc2-inbox-tabs__item is-unread">
      <span class="nuda-nc2-inbox-tabs__dot" aria-hidden="true"></span>
      <span class="nuda-nc2-inbox-tabs__text">
        <strong>Priya</strong> approved your request
        <span class="nuda-nc2-inbox-tabs__sr"> — Unread</span>
      </span>
    </li>
    <li class="nuda-nc2-inbox-tabs__item is-unread">
      <span class="nuda-nc2-inbox-tabs__dot" aria-hidden="true"></span>
      <span class="nuda-nc2-inbox-tabs__text">
        <strong>Marco</strong> shared a file with you
        <span class="nuda-nc2-inbox-tabs__sr"> — Unread</span>
      </span>
    </li>
    <li class="nuda-nc2-inbox-tabs__item">
      <span class="nuda-nc2-inbox-tabs__dot" aria-hidden="true"></span>
      <span class="nuda-nc2-inbox-tabs__text"><strong>Team standup</strong> notes posted</span>
    </li>
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nc2-inbox-tabs__tab.is-on {
  background: #e4ff54;
  color: #09090b;
}

.nuda-nc2-inbox-tabs__item.is-unread .nuda-nc2-inbox-tabs__dot {
  background: #e4ff54;
  box-shadow: 0 0 6px rgba(228, 255, 84, 0.6);
}`,
      },
    ],
  },

  /* ─────────────── 2. Sticky Day Groups ─────────────── */
  {
    id: "nc2-day-sticky",
    name: "Sticky Day Groups",
    category: CAT,
    preview: (
      <div className="nuda-nc2-day-sticky" role="region" aria-label="Notifications grouped by day">
        <ul className="nuda-nc2-day-sticky__list">
          <li className="nuda-nc2-day-sticky__head">Today</li>
          <li className="nuda-nc2-day-sticky__row is-unread">
            Build #291 succeeded
            <span className="nuda-nc2-day-sticky__sr"> — Unread</span>
          </li>
          <li className="nuda-nc2-day-sticky__row">Invitation accepted</li>
          <li className="nuda-nc2-day-sticky__row">Weekly digest ready</li>
          <li className="nuda-nc2-day-sticky__head">Yesterday</li>
          <li className="nuda-nc2-day-sticky__row">3 new comments on #design</li>
          <li className="nuda-nc2-day-sticky__row">Storage 80% full</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-nc2-day-sticky{width:100%;max-width:260px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:4px 6px}
      .nuda-nc2-day-sticky__list{list-style:none;margin:0;padding:0;max-height:190px;overflow-y:auto}
      .nuda-nc2-day-sticky__head{position:sticky;top:0;z-index:1;padding:8px 8px 5px;background:#131316;color:#63636e;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;border-bottom:1px solid rgba(255,255,255,.06)}
      .nuda-nc2-day-sticky__row{position:relative;padding:8px 10px 8px 20px;color:#a0a0a8;font-size:12px;border-radius:6px;cursor:pointer;animation:_nuda-nc2day-sticky-in .35s cubic-bezier(.16,1,.3,1) both;transition:background .2s,color .2s}
      .nuda-nc2-day-sticky__row:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-nc2-day-sticky__row.is-unread{color:#fafafa}
      .nuda-nc2-day-sticky__row.is-unread::before{content:"";position:absolute;left:8px;top:50%;transform:translateY(-50%);width:5px;height:5px;border-radius:50%;background:#e4ff54}
      .nuda-nc2-day-sticky__sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      @keyframes _nuda-nc2day-sticky-in{from{opacity:0;transform:translateX(-4px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-nc2-day-sticky__row{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-nc2-day-sticky" role="region" aria-label="Notifications grouped by day">
  <ul class="nuda-nc2-day-sticky__list">
    <li class="nuda-nc2-day-sticky__head">Today</li>
    <li class="nuda-nc2-day-sticky__row is-unread">
      Build #291 succeeded
      <span class="nuda-nc2-day-sticky__sr"> — Unread</span>
    </li>
    <li class="nuda-nc2-day-sticky__row">Invitation accepted</li>
    <li class="nuda-nc2-day-sticky__row">Weekly digest ready</li>
    <li class="nuda-nc2-day-sticky__head">Yesterday</li>
    <li class="nuda-nc2-day-sticky__row">3 new comments on #design</li>
    <li class="nuda-nc2-day-sticky__row">Storage 80% full</li>
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nc2-day-sticky__head {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #131316;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-nc2-day-sticky__row.is-unread::before {
  content: "";
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #e4ff54;
}`,
      },
    ],
  },

  /* ─────────────── 3. Approve/Decline Notification ─────────────── */
  {
    id: "nc2-approve-decline",
    name: "Approve/Decline Request",
    category: CAT,
    preview: (
      <div className="nuda-nc2-approve-decline" role="group" aria-label="Access request notification">
        <div className="nuda-nc2-approve-decline__body">
          <strong>Alex Chen</strong> requested access to <em>#billing</em>
        </div>
        <div className="nuda-nc2-approve-decline__actions">
          <button type="button" className="nuda-nc2-approve-decline__btn is-approve" aria-label="Approve request">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </button>
          <button type="button" className="nuda-nc2-approve-decline__btn is-decline" aria-label="Decline request">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-nc2-approve-decline{display:flex;flex-direction:column;gap:10px;padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:290px;animation:_nuda-nc2approve-decline-in .35s cubic-bezier(.16,1,.3,1) both}
      .nuda-nc2-approve-decline__body{font-size:12px;line-height:1.4;color:#a0a0a8}
      .nuda-nc2-approve-decline__body strong{color:#fafafa}
      .nuda-nc2-approve-decline__body em{color:#62b6ff;font-style:normal}
      .nuda-nc2-approve-decline__actions{display:flex;gap:8px}
      .nuda-nc2-approve-decline__btn{flex:1;display:inline-flex;align-items:center;justify-content:center;min-height:44px;border-radius:9px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#fafafa;cursor:pointer;transition:background .2s,border-color .2s,transform .2s}
      .nuda-nc2-approve-decline__btn svg{width:16px;height:16px}
      .nuda-nc2-approve-decline__btn:hover{transform:translateY(-1px)}
      .nuda-nc2-approve-decline__btn:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-nc2-approve-decline__btn.is-approve:hover{background:rgba(110,231,183,.15);border-color:#6ee7b7;color:#6ee7b7}
      .nuda-nc2-approve-decline__btn.is-decline:hover{background:rgba(255,94,122,.15);border-color:#ff5e7a;color:#ff5e7a}
      @keyframes _nuda-nc2approve-decline-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-nc2-approve-decline{animation:none}.nuda-nc2-approve-decline__btn:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-nc2-approve-decline" role="group" aria-label="Access request notification">
  <div class="nuda-nc2-approve-decline__body">
    <strong>Alex Chen</strong> requested access to <em>#billing</em>
  </div>
  <div class="nuda-nc2-approve-decline__actions">
    <button type="button" class="nuda-nc2-approve-decline__btn is-approve" aria-label="Approve request">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </button>
    <button type="button" class="nuda-nc2-approve-decline__btn is-decline" aria-label="Decline request">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nc2-approve-decline__btn.is-approve:hover {
  background: rgba(110, 231, 183, 0.15);
  border-color: #6ee7b7;
  color: #6ee7b7;
}

.nuda-nc2-approve-decline__btn.is-decline:hover {
  background: rgba(255, 94, 122, 0.15);
  border-color: #ff5e7a;
  color: #ff5e7a;
}`,
      },
    ],
  },

  /* ─────────────── 4. Reply Notification with Quick Reply ─────────────── */
  {
    id: "nc2-quick-reply",
    name: "Reply with Quick Reply",
    category: CAT,
    preview: (
      <div className="nuda-nc2-quick-reply">
        <div className="nuda-nc2-quick-reply__msg">
          <strong>Jordan</strong> replied: <span>&quot;Can we push this to Friday?&quot;</span>
        </div>
        <form className="nuda-nc2-quick-reply__form">
          <input
            className="nuda-nc2-quick-reply__input"
            type="text"
            aria-label="Quick reply"
            placeholder="Quick reply…"
            readOnly
          />
          <button type="submit" className="nuda-nc2-quick-reply__send" aria-label="Send reply">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m5 12 14-7-7 14-2-5-5-2Z" />
            </svg>
          </button>
        </form>
      </div>
    ),
    cssInline: `
      .nuda-nc2-quick-reply{display:flex;flex-direction:column;gap:8px;padding:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-left:3px solid #62b6ff;border-radius:10px;width:100%;max-width:290px;animation:_nuda-nc2quick-reply-in .35s cubic-bezier(.16,1,.3,1) both}
      .nuda-nc2-quick-reply__msg{font-size:12px;line-height:1.4;color:#a0a0a8}
      .nuda-nc2-quick-reply__msg strong{color:#fafafa}
      .nuda-nc2-quick-reply__msg span{color:#cfcfcf;font-style:italic}
      .nuda-nc2-quick-reply__form{display:flex;align-items:center;gap:6px;padding:4px 4px 4px 10px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:9px;transition:border-color .2s,box-shadow .2s}
      .nuda-nc2-quick-reply__form:focus-within{border-color:#62b6ff;box-shadow:0 0 0 3px rgba(98,182,255,.15)}
      .nuda-nc2-quick-reply__input{flex:1;min-width:0;background:transparent;border:0;outline:none;color:#fafafa;font-size:12px}
      .nuda-nc2-quick-reply__input::placeholder{color:#63636e}
      .nuda-nc2-quick-reply__send{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;border-radius:7px;border:0;background:#62b6ff;color:#09090b;cursor:pointer;transition:transform .2s,background .2s}
      .nuda-nc2-quick-reply__send svg{width:14px;height:14px}
      .nuda-nc2-quick-reply__send:hover{transform:scale(1.06)}
      .nuda-nc2-quick-reply__send:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-nc2quick-reply-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
      @media(prefers-reduced-motion:reduce){.nuda-nc2-quick-reply{animation:none}.nuda-nc2-quick-reply__send:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-nc2-quick-reply">
  <div class="nuda-nc2-quick-reply__msg">
    <strong>Jordan</strong> replied: <span>"Can we push this to Friday?"</span>
  </div>
  <form class="nuda-nc2-quick-reply__form">
    <input class="nuda-nc2-quick-reply__input" type="text" aria-label="Quick reply" placeholder="Quick reply…" />
    <button type="submit" class="nuda-nc2-quick-reply__send" aria-label="Send reply">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
           stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="m5 12 14-7-7 14-2-5-5-2Z" />
      </svg>
    </button>
  </form>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nc2-quick-reply__form:focus-within {
  border-color: #62b6ff;
  box-shadow: 0 0 0 3px rgba(98, 182, 255, 0.15);
}

.nuda-nc2-quick-reply__send {
  background: #62b6ff;
  color: #09090b;
  transition: transform 0.2s, background 0.2s;
}
.nuda-nc2-quick-reply__send:hover { transform: scale(1.06); }`,
      },
    ],
  },

  /* ─────────────── 5. Digest Summary Card ─────────────── */
  {
    id: "nc2-digest",
    name: "Digest Summary Card",
    category: CAT,
    preview: (
      <div className="nuda-nc2-digest" role="status" aria-live="polite">
        <span className="nuda-nc2-digest__count">12</span>
        <div className="nuda-nc2-digest__body">
          <div className="nuda-nc2-digest__title">New notifications</div>
          <div className="nuda-nc2-digest__sub">since Monday</div>
          <div className="nuda-nc2-digest__bar" aria-hidden="true">
            <span />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-nc2-digest{display:flex;align-items:center;gap:12px;padding:14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:290px}
      .nuda-nc2-digest__count{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:10px;background:rgba(228,255,84,.1);color:#e4ff54;font-size:16px;font-weight:800;font-variant-numeric:tabular-nums;animation:_nuda-nc2digest-pop .5s cubic-bezier(.34,1.56,.64,1)}
      .nuda-nc2-digest__body{flex:1;min-width:0}
      .nuda-nc2-digest__title{color:#fafafa;font-size:13px;font-weight:700}
      .nuda-nc2-digest__sub{color:#777;font-size:11px;margin-top:1px}
      .nuda-nc2-digest__bar{margin-top:7px;height:4px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}
      .nuda-nc2-digest__bar span{display:block;height:100%;width:100%;background:#e4ff54;border-radius:99px;transform-origin:left;transform:scaleX(0);animation:_nuda-nc2digest-fill 1s .1s cubic-bezier(.16,1,.3,1) forwards}
      @keyframes _nuda-nc2digest-pop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
      @keyframes _nuda-nc2digest-fill{to{transform:scaleX(.7)}}
      @media(prefers-reduced-motion:reduce){.nuda-nc2-digest__count{animation:none}.nuda-nc2-digest__bar span{animation:none;transform:scaleX(.7)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-nc2-digest" role="status" aria-live="polite">
  <span class="nuda-nc2-digest__count">12</span>
  <div class="nuda-nc2-digest__body">
    <div class="nuda-nc2-digest__title">New notifications</div>
    <div class="nuda-nc2-digest__sub">since Monday</div>
    <div class="nuda-nc2-digest__bar" aria-hidden="true"><span></span></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nc2-digest__bar span {
  transform-origin: left;
  transform: scaleX(0);
  animation: nuda-nc2-digest-fill 1s 0.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes nuda-nc2-digest-fill {
  to { transform: scaleX(0.7); }
}`,
      },
    ],
  },

  /* ─────────────── 6. Mark All Read with Undo ─────────────── */
  {
    id: "nc2-mark-read-undo",
    name: "Mark All Read with Undo",
    category: CAT,
    preview: (
      <div className="nuda-nc2-mark-read-undo" role="status" aria-live="polite">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        <span className="nuda-nc2-mark-read-undo__text">12 marked as read</span>
        <button type="button" className="nuda-nc2-mark-read-undo__undo">Undo</button>
        <span className="nuda-nc2-mark-read-undo__timer" aria-hidden="true" />
      </div>
    ),
    cssInline: `
      .nuda-nc2-mark-read-undo{position:relative;display:flex;align-items:center;gap:8px;padding:10px 12px;background:#131316;border:1px solid rgba(255,255,255,.1);border-radius:10px;color:#fafafa;width:100%;max-width:290px;overflow:hidden;animation:_nuda-nc2mark-read-undo-in .35s cubic-bezier(.16,1,.3,1) both}
      .nuda-nc2-mark-read-undo > svg{width:15px;height:15px;color:#6ee7b7;flex-shrink:0}
      .nuda-nc2-mark-read-undo__text{flex:1;font-size:12px;color:#cfcfcf}
      .nuda-nc2-mark-read-undo__undo{background:transparent;border:0;color:#e4ff54;font-size:11px;font-weight:700;cursor:pointer;padding:6px 8px;min-height:32px;border-radius:6px;transition:background .2s}
      .nuda-nc2-mark-read-undo__undo:hover{background:rgba(228,255,84,.1)}
      .nuda-nc2-mark-read-undo__undo:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-nc2-mark-read-undo__timer{position:absolute;left:0;bottom:0;height:2px;width:100%;background:#e4ff54;transform-origin:right;animation:_nuda-nc2mark-read-undo-shrink 5s linear forwards}
      @keyframes _nuda-nc2mark-read-undo-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
      @keyframes _nuda-nc2mark-read-undo-shrink{to{transform:scaleX(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-nc2-mark-read-undo{animation:none}.nuda-nc2-mark-read-undo__timer{animation:none;transform:none;opacity:.4}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-nc2-mark-read-undo" role="status" aria-live="polite">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
  <span class="nuda-nc2-mark-read-undo__text">12 marked as read</span>
  <button type="button" class="nuda-nc2-mark-read-undo__undo">Undo</button>
  <span class="nuda-nc2-mark-read-undo__timer" aria-hidden="true"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-nc2-mark-read-undo__timer {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background: #e4ff54;
  transform-origin: right;
  animation: nuda-nc2-mark-read-undo-shrink 5s linear forwards;
}

@keyframes nuda-nc2-mark-read-undo-shrink {
  to { transform: scaleX(0); }
}`,
      },
    ],
  },
];
