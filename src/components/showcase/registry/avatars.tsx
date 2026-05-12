import type { NudaComponent } from "./types";

export const avatars: NudaComponent[] = [
  /* ─────────────── Status Avatar ─────────────── */
  {
    id: "status-avatar",
    name: "Status Avatar",
    category: "Avatars",
    preview: (
      <div className="nuda-status-avatar">
        <div className="nuda-status-avatar__img" style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 700 }}>
          S
        </div>
        <span className="nuda-status-avatar__ring" data-status="online" />
      </div>
    ),
    cssInline: `
      .nuda-status-avatar{--s:48px;position:relative;width:var(--s);height:var(--s);display:inline-flex}
      .nuda-status-avatar__img{width:100%;height:100%;border-radius:50%;overflow:hidden;object-fit:cover}
      .nuda-status-avatar__ring{position:absolute;bottom:1px;right:1px;width:14px;height:14px;border-radius:50%;border:2.5px solid #111}
      .nuda-status-avatar__ring[data-status="online"]{background:#22c55e;box-shadow:0 0 0 0 #22c55e80;animation:_sar 2s ease-out infinite}
      .nuda-status-avatar__ring[data-status="away"]{background:#f59e0b}
      .nuda-status-avatar__ring[data-status="offline"]{background:#6b7280}
      @keyframes _sar{0%{box-shadow:0 0 0 0 #22c55e60}70%{box-shadow:0 0 0 6px #22c55e00}100%{box-shadow:0 0 0 0 #22c55e00}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-status-avatar">
  <img class="nuda-status-avatar__img" src="avatar.jpg" alt="User name" />
  <span class="nuda-status-avatar__ring" data-status="online"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Status Avatar
   Avatar with animated status ring.
   Customize: --avatar-size */

.nuda-status-avatar {
  --avatar-size: 48px;
  position: relative;
  width: var(--avatar-size);
  height: var(--avatar-size);
  display: inline-flex;
}

.nuda-status-avatar__img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
}

.nuda-status-avatar__ring {
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2.5px solid #111;
}

.nuda-status-avatar__ring[data-status="online"] {
  background: #22c55e;
  animation: nuda-status-ring-pulse 2s ease-out infinite;
}

.nuda-status-avatar__ring[data-status="away"] {
  background: #f59e0b;
}

.nuda-status-avatar__ring[data-status="offline"] {
  background: #6b7280;
}

@keyframes nuda-status-ring-pulse {
  0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
  70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
  100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-status-avatar__ring[data-status="online"] { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Stack Avatars ─────────────── */
  {
    id: "stack-avatars",
    name: "Stack Avatars",
    category: "Avatars",
    preview: (
      <div className="nuda-stack-avatars">
        {["#6366f1", "#ec4899", "#06b6d4", "#f59e0b"].map((c, i) => (
          <div key={i} className="nuda-stack-avatars__item" style={{ background: c, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>
            {String.fromCharCode(65 + i)}
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-stack-avatars{display:flex}
      .nuda-stack-avatars__item{--s:40px;width:var(--s);height:var(--s);border-radius:50%;border:2.5px solid #111;margin-left:-10px;transition:transform .25s cubic-bezier(.4,.2,.2,1.3),margin .25s ease;position:relative;z-index:1;overflow:hidden;object-fit:cover}
      .nuda-stack-avatars__item:first-child{margin-left:0}
      .nuda-stack-avatars:hover .nuda-stack-avatars__item{margin-left:4px}
      .nuda-stack-avatars:hover .nuda-stack-avatars__item:first-child{margin-left:0}
      .nuda-stack-avatars__item:hover{transform:scale(1.15);z-index:2}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-stack-avatars">
  <img class="nuda-stack-avatars__item" src="avatar1.jpg" alt="User 1" />
  <img class="nuda-stack-avatars__item" src="avatar2.jpg" alt="User 2" />
  <img class="nuda-stack-avatars__item" src="avatar3.jpg" alt="User 3" />
  <img class="nuda-stack-avatars__item" src="avatar4.jpg" alt="User 4" />
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Stack Avatars
   Overlapping avatars that expand on hover.
   Customize: --stack-size */

.nuda-stack-avatars {
  display: flex;
}

.nuda-stack-avatars__item {
  --stack-size: 40px;
  width: var(--stack-size);
  height: var(--stack-size);
  border-radius: 50%;
  border: 2.5px solid #111;
  margin-left: -10px;
  transition:
    transform 0.25s cubic-bezier(0.4, 0.2, 0.2, 1.3),
    margin 0.25s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  object-fit: cover;
  will-change: transform;
}

.nuda-stack-avatars__item:first-child {
  margin-left: 0;
}

.nuda-stack-avatars:hover .nuda-stack-avatars__item {
  margin-left: 4px;
}

.nuda-stack-avatars:hover .nuda-stack-avatars__item:first-child {
  margin-left: 0;
}

.nuda-stack-avatars__item:hover {
  transform: scale(1.15);
  z-index: 2;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-stack-avatars__item { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── Pulse Avatar ─────────────── */
  {
    id: "pulse-avatar",
    name: "Pulse Avatar",
    category: "Avatars",
    preview: (
      <div className="nuda-pulse-avatar">
        <div className="nuda-pulse-avatar__ring" />
        <div className="nuda-pulse-avatar__img" style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 16, fontWeight: 700 }}>
          P
        </div>
      </div>
    ),
    cssInline: `
      .nuda-pulse-avatar{--s:48px;--c:#8b5cf6;position:relative;width:var(--s);height:var(--s);display:inline-flex;align-items:center;justify-content:center}
      .nuda-pulse-avatar__ring{position:absolute;inset:-4px;border-radius:50%;border:2px solid var(--c);animation:_pa 2s ease-in-out infinite}
      .nuda-pulse-avatar__img{width:100%;height:100%;border-radius:50%;overflow:hidden;object-fit:cover;position:relative;z-index:1}
      @keyframes _pa{0%,100%{transform:scale(1);opacity:.6}50%{transform:scale(1.12);opacity:.2}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pulse-avatar">
  <div class="nuda-pulse-avatar__ring"></div>
  <img class="nuda-pulse-avatar__img" src="avatar.jpg" alt="User name" />
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pulse Avatar
   Avatar with breathing pulse ring.
   Customize: --pulse-size, --pulse-color */

.nuda-pulse-avatar {
  --pulse-size: 48px;
  --pulse-color: #8b5cf6;
  position: relative;
  width: var(--pulse-size);
  height: var(--pulse-size);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.nuda-pulse-avatar__ring {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid var(--pulse-color);
  animation: nuda-avatar-breathe 2s ease-in-out infinite;
  will-change: transform, opacity;
}

.nuda-pulse-avatar__img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

@keyframes nuda-avatar-breathe {
  0%, 100% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.12);
    opacity: 0.2;
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pulse-avatar__ring { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── Initials Avatar ─────────────── */
  {
    id: "initials-avatar",
    name: "Initials Avatar",
    category: "Avatars",
    preview: (
      <div style={{ display: "flex", gap: 12 }}>
        <div className="nuda-initials-avatar" data-hue="250" aria-label="John Doe">JD</div>
        <div className="nuda-initials-avatar" data-hue="340" aria-label="Alice Smith">AS</div>
        <div className="nuda-initials-avatar" data-hue="160" aria-label="Bob Wilson">BW</div>
      </div>
    ),
    cssInline: `
      .nuda-initials-avatar{--s:44px;--hue:250;width:var(--s);height:var(--s);border-radius:50%;background:linear-gradient(135deg,hsl(var(--hue) 70% 55%),hsl(calc(var(--hue)+40) 70% 45%));display:flex;align-items:center;justify-content:center;color:#fff;font-size:14px;font-weight:700;letter-spacing:.02em;user-select:none}
      .nuda-initials-avatar[data-hue="250"]{--hue:250}
      .nuda-initials-avatar[data-hue="340"]{--hue:340}
      .nuda-initials-avatar[data-hue="160"]{--hue:160}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Set data-hue to generate unique gradient per user -->
<div class="nuda-initials-avatar" data-hue="250" aria-label="John Doe">JD</div>
<div class="nuda-initials-avatar" data-hue="340" aria-label="Alice Smith">AS</div>
<div class="nuda-initials-avatar" data-hue="160" aria-label="Bob Wilson">BW</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Initials Avatar
   Letter avatar with gradient background.
   Set --hue via data attribute or inline style.
   Customize: --avatar-size */

.nuda-initials-avatar {
  --avatar-size: 44px;
  --hue: 250;
  width: var(--avatar-size);
  height: var(--avatar-size);
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    hsl(var(--hue) 70% 55%),
    hsl(calc(var(--hue) + 40) 70% 45%)
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  user-select: none;
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Initials Avatar — vanilla JS
   Auto-generates hue from data-hue attribute. */

(function () {
  document.querySelectorAll(".nuda-initials-avatar").forEach(function (el) {
    var hue = el.getAttribute("data-hue");
    if (hue) {
      el.style.setProperty("--hue", hue);
    }
  });
})();`,
      },
    ],
  },

  /* ─────────────── Avatar Group ─────────────── */
  {
    id: "avatar-group",
    name: "Avatar Group",
    category: "Avatars",
    preview: (
      <div className="nuda-avatar-group">
        {["#6366f1", "#ec4899", "#06b6d4"].map((c, i) => (
          <div key={i} className="nuda-avatar-group__item" style={{ background: c, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700 }}>
            {String.fromCharCode(65 + i)}
          </div>
        ))}
        <div className="nuda-avatar-group__more">+5</div>
      </div>
    ),
    cssInline: `
      .nuda-avatar-group{display:flex;align-items:center}
      .nuda-avatar-group__item{--s:38px;width:var(--s);height:var(--s);border-radius:50%;border:2px solid #111;margin-left:-8px;overflow:hidden;object-fit:cover;animation:_ag .4s cubic-bezier(.34,1.56,.64,1) both}
      .nuda-avatar-group__item:first-child{margin-left:0}
      .nuda-avatar-group__item:nth-child(2){animation-delay:.06s}
      .nuda-avatar-group__item:nth-child(3){animation-delay:.12s}
      .nuda-avatar-group__more{--s:38px;width:var(--s);height:var(--s);border-radius:50%;border:2px solid #111;margin-left:-8px;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:#ccc;font-size:12px;font-weight:600;animation:_ag .4s cubic-bezier(.34,1.56,.64,1) both;animation-delay:.18s}
      @keyframes _ag{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-avatar-group">
  <img class="nuda-avatar-group__item" src="avatar1.jpg" alt="User 1" />
  <img class="nuda-avatar-group__item" src="avatar2.jpg" alt="User 2" />
  <img class="nuda-avatar-group__item" src="avatar3.jpg" alt="User 3" />
  <div class="nuda-avatar-group__more">+5</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Avatar Group
   Avatar group with +N counter and stagger animation.
   Customize: --group-size */

.nuda-avatar-group {
  display: flex;
  align-items: center;
}

.nuda-avatar-group__item {
  --group-size: 38px;
  width: var(--group-size);
  height: var(--group-size);
  border-radius: 50%;
  border: 2px solid #111;
  margin-left: -8px;
  overflow: hidden;
  object-fit: cover;
  animation: nuda-group-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}

.nuda-avatar-group__item:first-child {
  margin-left: 0;
}

.nuda-avatar-group__item:nth-child(2) { animation-delay: 0.06s; }
.nuda-avatar-group__item:nth-child(3) { animation-delay: 0.12s; }

.nuda-avatar-group__more {
  --group-size: 38px;
  width: var(--group-size);
  height: var(--group-size);
  border-radius: 50%;
  border: 2px solid #111;
  margin-left: -8px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 12px;
  font-weight: 600;
  animation: nuda-group-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  animation-delay: 0.18s;
}

@keyframes nuda-group-pop {
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-avatar-group__item,
  .nuda-avatar-group__more {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── Avatar with Tooltip ─────────────── */
  {
    id: "avatar-tooltip",
    name: "Avatar with Tooltip",
    category: "Avatars",
    preview: (
      <div className="nuda-avtt">
        <span className="nuda-avtt__avatar" />
        <span className="nuda-avtt__tip">Sara Linde</span>
      </div>
    ),
    cssInline: `
      .nuda-avtt{position:relative;display:inline-flex}
      .nuda-avtt__avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#9d6dff,#ff6dd4);cursor:pointer;transition:transform .25s}
      .nuda-avtt:hover .nuda-avtt__avatar{transform:scale(1.08)}
      .nuda-avtt__tip{position:absolute;left:50%;bottom:calc(100% + 8px);transform:translateX(-50%) translateY(4px);padding:4px 10px;background:#09090b;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:#fafafa;font-size:11px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .25s,transform .35s cubic-bezier(.16,1,.3,1)}
      .nuda-avtt:hover .nuda-avtt__tip{opacity:1;transform:translateX(-50%) translateY(0)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-avtt">
  <span class="nuda-avtt__avatar"></span>
  <span class="nuda-avtt__tip">Sara Linde</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-avtt__tip {
  position: absolute;
  left: 50%;
  bottom: calc(100% + 8px);
  transform: translateX(-50%) translateY(4px);
  padding: 4px 10px;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: #fafafa;
  opacity: 0;
  pointer-events: none;
  transition:
    opacity 0.25s,
    transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}`,
      },
    ],
  },

  /* ─────────────── Presence Ring ─────────────── */
  {
    id: "presence-ring",
    name: "Presence Ring",
    category: "Avatars",
    preview: (
      <div className="nuda-presence">
        <svg className="nuda-presence__ring" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="2" />
          <circle cx="20" cy="20" r="18" fill="none" stroke="#6ee7b7" strokeWidth="2" strokeDasharray="113" strokeDashoffset="28" strokeLinecap="round" transform="rotate(-90 20 20)" />
        </svg>
        <span className="nuda-presence__avatar" />
      </div>
    ),
    cssInline: `
      .nuda-presence{position:relative;display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px}
      .nuda-presence__ring{position:absolute;width:100%;height:100%;animation:_presPulse 3s ease-in-out infinite}
      .nuda-presence__avatar{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#62b6ff,#9d6dff)}
      @keyframes _presPulse{0%,100%{opacity:1}50%{opacity:.6}}
      @media(prefers-reduced-motion:reduce){.nuda-presence__ring{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-presence">
  <svg class="nuda-presence__ring" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="18" fill="none"
            stroke="rgba(255,255,255,.08)" stroke-width="2" />
    <circle cx="20" cy="20" r="18" fill="none" stroke="#6ee7b7" stroke-width="2"
            stroke-dasharray="113" stroke-dashoffset="28"
            stroke-linecap="round" transform="rotate(-90 20 20)" />
  </svg>
  <span class="nuda-presence__avatar"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-presence__ring {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: nuda-pres-pulse 3s ease-in-out infinite;
}

@keyframes nuda-pres-pulse {
  0%, 100% { opacity: 1;   }
  50%      { opacity: 0.6; }
}`,
      },
    ],
  },

  /* ─────────────── Avatar Initials ─────────────── */
  {
    id: "avatar-initials",
    name: "Avatar Initials",
    category: "Avatars",
    preview: (
      <div className="nuda-initials" style={{ background: "linear-gradient(135deg,#62b6ff,#9d6dff)" }}>
        <span>SL</span>
      </div>
    ),
    cssInline: `
      .nuda-initials{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;color:#fafafa;font-size:13px;font-weight:700;letter-spacing:.04em;text-shadow:0 1px 2px rgba(0,0,0,.3);transition:transform .25s}
      .nuda-initials:hover{transform:rotate(-8deg) scale(1.08)}
      .nuda-initials span{animation:_initPop .45s cubic-bezier(.34,1.56,.64,1)}
      @keyframes _initPop{from{transform:scale(0)}to{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-initials span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-initials" style="background:linear-gradient(135deg,#62b6ff,#9d6dff)">
  <span>SL</span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-initials {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #fafafa;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s;
}

.nuda-initials:hover {
  transform: rotate(-8deg) scale(1.08);
}`,
      },
    ],
  },

  /* ─────────────── Verified Avatar ─────────────── */
  {
    id: "verified-avatar",
    name: "Verified Avatar",
    category: "Avatars",
    preview: (
      <div className="nuda-verified">
        <span className="nuda-verified__avatar" />
        <span className="nuda-verified__badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
      </div>
    ),
    cssInline: `
      .nuda-verified{position:relative;display:inline-flex}
      .nuda-verified__avatar{width:42px;height:42px;border-radius:50%;background:linear-gradient(135deg,#ffb45e,#ff6dd4)}
      .nuda-verified__badge{position:absolute;right:-2px;bottom:-2px;display:flex;align-items:center;justify-content:center;width:18px;height:18px;border-radius:50%;background:#62b6ff;color:#fafafa;border:2px solid #09090b;animation:_verifPop .55s cubic-bezier(.34,1.56,.64,1) .2s both}
      .nuda-verified__badge svg{width:9px;height:9px;stroke-dasharray:30;stroke-dashoffset:30;animation:_verifDraw .5s ease forwards .55s}
      @keyframes _verifPop{from{transform:scale(0)}to{transform:scale(1)}}
      @keyframes _verifDraw{to{stroke-dashoffset:0}}
      @media(prefers-reduced-motion:reduce){.nuda-verified__badge{animation:none}.nuda-verified__badge svg{stroke-dashoffset:0;animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-verified">
  <span class="nuda-verified__avatar"></span>
  <span class="nuda-verified__badge">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  </span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-verified__badge {
  position: absolute;
  right: -2px;
  bottom: -2px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #62b6ff;
  color: #fafafa;
  border: 2px solid #09090b;
  animation: nuda-verif-pop 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}

.nuda-verified__badge svg {
  stroke-dasharray: 30;
  stroke-dashoffset: 30;
  animation: nuda-verif-draw 0.5s ease forwards 0.55s;
}`,
      },
    ],
  },
];
