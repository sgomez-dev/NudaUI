import type { NudaComponent } from "./types";

export const emptyStates: NudaComponent[] = [
  /* ─────────────── 1. Empty Box ─────────────── */
  {
    id: "empty-box",
    name: "Empty Box",
    category: "Empty States",
    preview: (
      <div className="nuda-empty-box" role="status" aria-label="No data found">
        <div className="nuda-empty-box__scene">
          <span className="nuda-empty-box__dust nuda-empty-box__dust--a" />
          <span className="nuda-empty-box__dust nuda-empty-box__dust--b" />
          <span className="nuda-empty-box__dust nuda-empty-box__dust--c" />
          <svg className="nuda-empty-box__svg" viewBox="0 0 64 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path className="nuda-empty-box__lid" d="M8 18 L32 6 L56 18 L32 28 Z" />
            <path d="M8 18 L8 44 L32 54 L56 44 L56 18" />
            <path d="M32 28 L32 54" opacity="0.5" />
          </svg>
        </div>
        <p className="nuda-empty-box__text">No data found</p>
      </div>
    ),
    cssInline: `
      .nuda-empty-box{display:flex;flex-direction:column;align-items:center;gap:8px;padding:8px;color:#e4ff54}
      .nuda-empty-box__scene{position:relative;width:80px;height:72px;display:flex;align-items:center;justify-content:center;animation:_eb-bob 3.4s ease-in-out infinite}
      .nuda-empty-box__svg{width:100%;height:100%;color:currentColor;filter:drop-shadow(0 0 6px rgba(228,255,84,.15))}
      .nuda-empty-box__lid{transform-origin:32px 18px;animation:_eb-lid 3.4s ease-in-out infinite}
      .nuda-empty-box__dust{position:absolute;width:3px;height:3px;border-radius:50%;background:currentColor;opacity:0;box-shadow:0 0 6px currentColor}
      .nuda-empty-box__dust--a{left:30%;top:36%;animation:_eb-dust 2.6s ease-in-out infinite}
      .nuda-empty-box__dust--b{left:50%;top:42%;animation:_eb-dust 2.6s ease-in-out .6s infinite}
      .nuda-empty-box__dust--c{left:62%;top:36%;animation:_eb-dust 2.6s ease-in-out 1.2s infinite}
      .nuda-empty-box__text{font:500 11px ui-sans-serif,system-ui;color:rgba(255,255,255,.55);letter-spacing:.02em}
      @keyframes _eb-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
      @keyframes _eb-lid{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-4px) rotate(-4deg)}}
      @keyframes _eb-dust{0%{opacity:0;transform:translateY(4px) scale(.4)}40%{opacity:1}100%{opacity:0;transform:translateY(-18px) scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Empty Box -->
<div class="nuda-empty-box" role="status" aria-label="No data found">
  <div class="nuda-empty-box__scene">
    <span class="nuda-empty-box__dust nuda-empty-box__dust--a"></span>
    <span class="nuda-empty-box__dust nuda-empty-box__dust--b"></span>
    <span class="nuda-empty-box__dust nuda-empty-box__dust--c"></span>
    <svg class="nuda-empty-box__svg" viewBox="0 0 64 56"
         fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path class="nuda-empty-box__lid" d="M8 18 L32 6 L56 18 L32 28 Z" />
      <path d="M8 18 L8 44 L32 54 L56 44 L56 18" />
      <path d="M32 28 L32 54" opacity="0.5" />
    </svg>
  </div>
  <p class="nuda-empty-box__text">No data found</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Empty Box
   Open cardboard box with floating dust particles.
   Customize: --empty-box-color, --empty-box-text, --empty-box-size */

.nuda-empty-box {
  --empty-box-color: #e4ff54;
  --empty-box-text: rgba(255, 255, 255, 0.55);
  --empty-box-size: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px;
  color: var(--empty-box-color);
}

.nuda-empty-box__scene {
  position: relative;
  width: var(--empty-box-size);
  height: calc(var(--empty-box-size) * 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: nuda-empty-box-bob 3.4s ease-in-out infinite;
}

.nuda-empty-box__svg {
  width: 100%;
  height: 100%;
  color: currentColor;
  filter: drop-shadow(0 0 6px rgba(228, 255, 84, 0.15));
}

.nuda-empty-box__lid {
  transform-origin: 32px 18px;
  animation: nuda-empty-box-lid 3.4s ease-in-out infinite;
}

.nuda-empty-box__dust {
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0;
  box-shadow: 0 0 6px currentColor;
}

.nuda-empty-box__dust--a { left: 30%; top: 36%; animation: nuda-empty-box-dust 2.6s ease-in-out infinite; }
.nuda-empty-box__dust--b { left: 50%; top: 42%; animation: nuda-empty-box-dust 2.6s ease-in-out 0.6s infinite; }
.nuda-empty-box__dust--c { left: 62%; top: 36%; animation: nuda-empty-box-dust 2.6s ease-in-out 1.2s infinite; }

.nuda-empty-box__text {
  font: 500 12px ui-sans-serif, system-ui, sans-serif;
  color: var(--empty-box-text);
  letter-spacing: 0.02em;
  margin: 0;
}

@keyframes nuda-empty-box-bob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-3px); }
}

@keyframes nuda-empty-box-lid {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50%      { transform: translateY(-4px) rotate(-4deg); }
}

@keyframes nuda-empty-box-dust {
  0%   { opacity: 0; transform: translateY(4px) scale(0.4); }
  40%  { opacity: 1; }
  100% { opacity: 0; transform: translateY(-18px) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-empty-box__scene,
  .nuda-empty-box__lid,
  .nuda-empty-box__dust {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 2. Empty Inbox ─────────────── */
  {
    id: "empty-inbox",
    name: "Empty Inbox",
    category: "Empty States",
    preview: (
      <div className="nuda-empty-inbox" role="status" aria-label="Inbox is empty">
        <div className="nuda-empty-inbox__scene">
          <svg className="nuda-empty-inbox__plane" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 2 L11 13" />
            <path d="M22 2 L15 22 L11 13 L2 9 Z" />
          </svg>
          <svg className="nuda-empty-inbox__tray" viewBox="0 0 64 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 28 L6 38 Q6 42 10 42 L54 42 Q58 42 58 38 L58 28" />
            <path d="M6 28 L18 28 L22 34 L42 34 L46 28 L58 28" />
            <path d="M14 12 L14 22" opacity="0.4" />
            <path d="M32 8 L32 22" opacity="0.4" />
            <path d="M50 12 L50 22" opacity="0.4" />
          </svg>
        </div>
        <p className="nuda-empty-inbox__text">Inbox is empty</p>
      </div>
    ),
    cssInline: `
      .nuda-empty-inbox{display:flex;flex-direction:column;align-items:center;gap:8px;padding:8px;color:#e4ff54}
      .nuda-empty-inbox__scene{position:relative;width:90px;height:64px}
      .nuda-empty-inbox__tray{position:absolute;left:0;bottom:0;width:100%;height:48px;color:currentColor;filter:drop-shadow(0 0 6px rgba(228,255,84,.12))}
      .nuda-empty-inbox__plane{position:absolute;left:50%;top:0;width:18px;height:18px;color:currentColor;transform:translate(-50%,0);animation:_ei-fly 3.2s cubic-bezier(.4,0,.2,1) infinite}
      .nuda-empty-inbox__text{font:500 11px ui-sans-serif,system-ui;color:rgba(255,255,255,.55);letter-spacing:.02em}
      @keyframes _ei-fly{
        0%{transform:translate(-150%,-4px) rotate(-10deg);opacity:0}
        15%{opacity:1}
        50%{transform:translate(-50%,12px) rotate(0deg);opacity:1}
        75%{opacity:1}
        100%{transform:translate(60%,28px) rotate(20deg);opacity:0}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Empty Inbox -->
<div class="nuda-empty-inbox" role="status" aria-label="Inbox is empty">
  <div class="nuda-empty-inbox__scene">
    <svg class="nuda-empty-inbox__plane" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 2 L11 13" />
      <path d="M22 2 L15 22 L11 13 L2 9 Z" />
    </svg>
    <svg class="nuda-empty-inbox__tray" viewBox="0 0 64 48"
         fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 28 L6 38 Q6 42 10 42 L54 42 Q58 42 58 38 L58 28" />
      <path d="M6 28 L18 28 L22 34 L42 34 L46 28 L58 28" />
      <path d="M14 12 L14 22" opacity="0.4" />
      <path d="M32 8 L32 22" opacity="0.4" />
      <path d="M50 12 L50 22" opacity="0.4" />
    </svg>
  </div>
  <p class="nuda-empty-inbox__text">Inbox is empty</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Empty Inbox
   Inbox tray with a paper plane gliding through.
   Customize: --empty-inbox-color, --empty-inbox-text, --empty-inbox-size */

.nuda-empty-inbox {
  --empty-inbox-color: #e4ff54;
  --empty-inbox-text: rgba(255, 255, 255, 0.55);
  --empty-inbox-size: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px;
  color: var(--empty-inbox-color);
}

.nuda-empty-inbox__scene {
  position: relative;
  width: var(--empty-inbox-size);
  height: calc(var(--empty-inbox-size) * 0.7);
}

.nuda-empty-inbox__tray {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 75%;
  color: currentColor;
  filter: drop-shadow(0 0 6px rgba(228, 255, 84, 0.12));
}

.nuda-empty-inbox__plane {
  position: absolute;
  left: 50%;
  top: 0;
  width: 20%;
  height: 28%;
  color: currentColor;
  transform: translate(-50%, 0);
  animation: nuda-empty-inbox-fly 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.nuda-empty-inbox__text {
  font: 500 12px ui-sans-serif, system-ui, sans-serif;
  color: var(--empty-inbox-text);
  letter-spacing: 0.02em;
  margin: 0;
}

@keyframes nuda-empty-inbox-fly {
  0%   { transform: translate(-150%, -4px) rotate(-10deg); opacity: 0; }
  15%  { opacity: 1; }
  50%  { transform: translate(-50%, 12px) rotate(0deg); opacity: 1; }
  75%  { opacity: 1; }
  100% { transform: translate(60%, 28px) rotate(20deg); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-empty-inbox__plane { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Empty Search ─────────────── */
  {
    id: "empty-search",
    name: "Empty Search",
    category: "Empty States",
    preview: (
      <div className="nuda-empty-search" role="status" aria-label="No results found">
        <div className="nuda-empty-search__scene">
          <svg className="nuda-empty-search__lens" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="20" cy="20" r="14" />
            <path d="M30 30 L42 42" />
          </svg>
          <span className="nuda-empty-search__q">?</span>
        </div>
        <p className="nuda-empty-search__text">No results found</p>
      </div>
    ),
    cssInline: `
      .nuda-empty-search{display:flex;flex-direction:column;align-items:center;gap:8px;padding:8px;color:#e4ff54}
      .nuda-empty-search__scene{position:relative;width:64px;height:64px;animation:_es-sweep 3.6s ease-in-out infinite}
      .nuda-empty-search__lens{width:100%;height:100%;color:currentColor;filter:drop-shadow(0 0 8px rgba(228,255,84,.18))}
      .nuda-empty-search__q{position:absolute;left:0;top:0;width:60%;height:60%;display:flex;align-items:center;justify-content:center;font:700 18px ui-sans-serif,system-ui;color:currentColor;animation:_es-q 1.6s ease-in-out infinite}
      .nuda-empty-search__text{font:500 11px ui-sans-serif,system-ui;color:rgba(255,255,255,.55);letter-spacing:.02em}
      @keyframes _es-sweep{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}
      @keyframes _es-q{0%,100%{opacity:.4;transform:scale(.92)}50%{opacity:1;transform:scale(1.04)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Empty Search -->
<div class="nuda-empty-search" role="status" aria-label="No results found">
  <div class="nuda-empty-search__scene">
    <svg class="nuda-empty-search__lens" viewBox="0 0 48 48"
         fill="none" stroke="currentColor" stroke-width="2.5"
         stroke-linecap="round" stroke-linejoin="round">
      <circle cx="20" cy="20" r="14" />
      <path d="M30 30 L42 42" />
    </svg>
    <span class="nuda-empty-search__q">?</span>
  </div>
  <p class="nuda-empty-search__text">No results found</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Empty Search
   Magnifying glass sweeping with a pulsing question mark.
   Customize: --empty-search-color, --empty-search-text, --empty-search-size */

.nuda-empty-search {
  --empty-search-color: #e4ff54;
  --empty-search-text: rgba(255, 255, 255, 0.55);
  --empty-search-size: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px;
  color: var(--empty-search-color);
}

.nuda-empty-search__scene {
  position: relative;
  width: var(--empty-search-size);
  height: var(--empty-search-size);
  animation: nuda-empty-search-sweep 3.6s ease-in-out infinite;
}

.nuda-empty-search__lens {
  width: 100%;
  height: 100%;
  color: currentColor;
  filter: drop-shadow(0 0 8px rgba(228, 255, 84, 0.18));
}

.nuda-empty-search__q {
  position: absolute;
  left: 0;
  top: 0;
  width: 60%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700 calc(var(--empty-search-size) * 0.32) ui-sans-serif, system-ui, sans-serif;
  color: currentColor;
  animation: nuda-empty-search-q 1.6s ease-in-out infinite;
}

.nuda-empty-search__text {
  font: 500 12px ui-sans-serif, system-ui, sans-serif;
  color: var(--empty-search-text);
  letter-spacing: 0.02em;
  margin: 0;
}

@keyframes nuda-empty-search-sweep {
  0%, 100% { transform: rotate(-8deg); }
  50%      { transform: rotate(8deg); }
}

@keyframes nuda-empty-search-q {
  0%, 100% { opacity: 0.4; transform: scale(0.92); }
  50%      { opacity: 1;   transform: scale(1.04); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-empty-search__scene,
  .nuda-empty-search__q {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 4. Empty Folder ─────────────── */
  {
    id: "empty-folder",
    name: "Empty Folder",
    category: "Empty States",
    preview: (
      <div className="nuda-empty-folder" role="status" aria-label="Folder is empty">
        <div className="nuda-empty-folder__scene">
          <svg className="nuda-empty-folder__svg" viewBox="0 0 64 56" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path className="nuda-empty-folder__back" d="M6 16 L6 48 Q6 50 8 50 L56 50 Q58 50 58 48 L58 22 Q58 20 56 20 L30 20 L24 14 L8 14 Q6 14 6 16 Z" />
            <path className="nuda-empty-folder__front" d="M6 26 L58 26 L54 48 Q53.6 50 51.6 50 L12.4 50 Q10.4 50 10 48 Z" />
          </svg>
          <span className="nuda-empty-folder__shine" />
        </div>
        <p className="nuda-empty-folder__text">Folder is empty</p>
      </div>
    ),
    cssInline: `
      .nuda-empty-folder{display:flex;flex-direction:column;align-items:center;gap:8px;padding:8px;color:#e4ff54}
      .nuda-empty-folder__scene{position:relative;width:80px;height:70px;overflow:hidden;animation:_ef-bob 3.6s ease-in-out infinite}
      .nuda-empty-folder__svg{width:100%;height:100%;color:currentColor;filter:drop-shadow(0 0 6px rgba(228,255,84,.12))}
      .nuda-empty-folder__back{opacity:.55}
      .nuda-empty-folder__front{transform-origin:32px 26px;animation:_ef-flap 3.6s ease-in-out infinite}
      .nuda-empty-folder__shine{position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(228,255,84,.18) 50%,transparent 70%);transform:translateX(-100%);animation:_ef-shine 3.6s ease-in-out infinite;mix-blend-mode:screen}
      .nuda-empty-folder__text{font:500 11px ui-sans-serif,system-ui;color:rgba(255,255,255,.55);letter-spacing:.02em}
      @keyframes _ef-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
      @keyframes _ef-flap{0%,100%{transform:rotateX(0deg)}50%{transform:rotateX(-12deg)}}
      @keyframes _ef-shine{0%,30%{transform:translateX(-100%)}60%{transform:translateX(100%)}100%{transform:translateX(100%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Empty Folder -->
<div class="nuda-empty-folder" role="status" aria-label="Folder is empty">
  <div class="nuda-empty-folder__scene">
    <svg class="nuda-empty-folder__svg" viewBox="0 0 64 56"
         fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round">
      <path class="nuda-empty-folder__back"
            d="M6 16 L6 48 Q6 50 8 50 L56 50 Q58 50 58 48 L58 22 Q58 20 56 20 L30 20 L24 14 L8 14 Q6 14 6 16 Z" />
      <path class="nuda-empty-folder__front"
            d="M6 26 L58 26 L54 48 Q53.6 50 51.6 50 L12.4 50 Q10.4 50 10 48 Z" />
    </svg>
    <span class="nuda-empty-folder__shine"></span>
  </div>
  <p class="nuda-empty-folder__text">Folder is empty</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Empty Folder
   Folder with the front flap lifting and a subtle shimmer sweep.
   Customize: --empty-folder-color, --empty-folder-text, --empty-folder-size */

.nuda-empty-folder {
  --empty-folder-color: #e4ff54;
  --empty-folder-text: rgba(255, 255, 255, 0.55);
  --empty-folder-size: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px;
  color: var(--empty-folder-color);
}

.nuda-empty-folder__scene {
  position: relative;
  width: var(--empty-folder-size);
  height: calc(var(--empty-folder-size) * 0.875);
  overflow: hidden;
  animation: nuda-empty-folder-bob 3.6s ease-in-out infinite;
}

.nuda-empty-folder__svg {
  width: 100%;
  height: 100%;
  color: currentColor;
  filter: drop-shadow(0 0 6px rgba(228, 255, 84, 0.12));
}

.nuda-empty-folder__back  { opacity: 0.55; }

.nuda-empty-folder__front {
  transform-origin: 32px 26px;
  animation: nuda-empty-folder-flap 3.6s ease-in-out infinite;
}

.nuda-empty-folder__shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    115deg,
    transparent 30%,
    rgba(228, 255, 84, 0.18) 50%,
    transparent 70%
  );
  transform: translateX(-100%);
  animation: nuda-empty-folder-shine 3.6s ease-in-out infinite;
  mix-blend-mode: screen;
  pointer-events: none;
}

.nuda-empty-folder__text {
  font: 500 12px ui-sans-serif, system-ui, sans-serif;
  color: var(--empty-folder-text);
  letter-spacing: 0.02em;
  margin: 0;
}

@keyframes nuda-empty-folder-bob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-3px); }
}

@keyframes nuda-empty-folder-flap {
  0%, 100% { transform: rotateX(0deg); }
  50%      { transform: rotateX(-12deg); }
}

@keyframes nuda-empty-folder-shine {
  0%, 30% { transform: translateX(-100%); }
  60%     { transform: translateX(100%); }
  100%    { transform: translateX(100%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-empty-folder__scene,
  .nuda-empty-folder__front,
  .nuda-empty-folder__shine {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 5. Empty Ghost ─────────────── */
  {
    id: "empty-ghost",
    name: "Empty Ghost",
    category: "Empty States",
    preview: (
      <div className="nuda-empty-ghost" role="status" aria-label="Nothing here">
        <div className="nuda-empty-ghost__scene">
          <div className="nuda-empty-ghost__shadow" />
          <div className="nuda-empty-ghost__body">
            <span className="nuda-empty-ghost__eye nuda-empty-ghost__eye--l" />
            <span className="nuda-empty-ghost__eye nuda-empty-ghost__eye--r" />
            <span className="nuda-empty-ghost__mouth" />
          </div>
        </div>
        <p className="nuda-empty-ghost__text">Nothing here</p>
      </div>
    ),
    cssInline: `
      .nuda-empty-ghost{display:flex;flex-direction:column;align-items:center;gap:8px;padding:8px;color:#e4ff54}
      .nuda-empty-ghost__scene{position:relative;width:60px;height:78px;display:flex;align-items:center;justify-content:center}
      .nuda-empty-ghost__shadow{position:absolute;bottom:2px;left:50%;width:42px;height:6px;background:radial-gradient(ellipse at center,rgba(228,255,84,.25),transparent 70%);transform:translateX(-50%);animation:_eg-shadow 3s ease-in-out infinite;filter:blur(1px)}
      .nuda-empty-ghost__body{position:relative;width:48px;height:60px;background:currentColor;border-radius:24px 24px 6px 6px;animation:_eg-float 3s ease-in-out infinite;box-shadow:0 0 16px rgba(228,255,84,.25),inset 0 -6px 0 rgba(0,0,0,.1)}
      .nuda-empty-ghost__body::before,.nuda-empty-ghost__body::after{content:"";position:absolute;bottom:-4px;width:14px;height:8px;background:currentColor;border-radius:0 0 50% 50%}
      .nuda-empty-ghost__body::before{left:2px}
      .nuda-empty-ghost__body::after{right:2px}
      .nuda-empty-ghost__eye{position:absolute;top:22px;width:5px;height:7px;background:#09090b;border-radius:50%}
      .nuda-empty-ghost__eye--l{left:14px}
      .nuda-empty-ghost__eye--r{right:14px}
      .nuda-empty-ghost__mouth{position:absolute;top:34px;left:50%;transform:translateX(-50%);width:8px;height:8px;border:1.5px solid #09090b;border-top:none;border-radius:0 0 50% 50%}
      .nuda-empty-ghost__text{font:500 11px ui-sans-serif,system-ui;color:rgba(255,255,255,.55);letter-spacing:.02em}
      @keyframes _eg-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
      @keyframes _eg-shadow{0%,100%{transform:translateX(-50%) scaleX(1);opacity:.7}50%{transform:translateX(-50%) scaleX(.7);opacity:.4}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Empty Ghost -->
<div class="nuda-empty-ghost" role="status" aria-label="Nothing here">
  <div class="nuda-empty-ghost__scene">
    <div class="nuda-empty-ghost__shadow"></div>
    <div class="nuda-empty-ghost__body">
      <span class="nuda-empty-ghost__eye nuda-empty-ghost__eye--l"></span>
      <span class="nuda-empty-ghost__eye nuda-empty-ghost__eye--r"></span>
      <span class="nuda-empty-ghost__mouth"></span>
    </div>
  </div>
  <p class="nuda-empty-ghost__text">Nothing here</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Empty Ghost
   Friendly ghost floating with a soft shadow that breathes.
   Customize: --empty-ghost-color, --empty-ghost-eye, --empty-ghost-text */

.nuda-empty-ghost {
  --empty-ghost-color: #e4ff54;
  --empty-ghost-eye: #09090b;
  --empty-ghost-text: rgba(255, 255, 255, 0.55);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 12px;
  color: var(--empty-ghost-color);
}

.nuda-empty-ghost__scene {
  position: relative;
  width: 60px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-empty-ghost__shadow {
  position: absolute;
  bottom: 2px;
  left: 50%;
  width: 42px;
  height: 6px;
  background: radial-gradient(ellipse at center, rgba(228, 255, 84, 0.25), transparent 70%);
  transform: translateX(-50%);
  animation: nuda-empty-ghost-shadow 3s ease-in-out infinite;
  filter: blur(1px);
}

.nuda-empty-ghost__body {
  position: relative;
  width: 48px;
  height: 60px;
  background: currentColor;
  border-radius: 24px 24px 6px 6px;
  animation: nuda-empty-ghost-float 3s ease-in-out infinite;
  box-shadow:
    0 0 16px rgba(228, 255, 84, 0.25),
    inset 0 -6px 0 rgba(0, 0, 0, 0.1);
}

.nuda-empty-ghost__body::before,
.nuda-empty-ghost__body::after {
  content: "";
  position: absolute;
  bottom: -4px;
  width: 14px;
  height: 8px;
  background: currentColor;
  border-radius: 0 0 50% 50%;
}

.nuda-empty-ghost__body::before { left: 2px; }
.nuda-empty-ghost__body::after  { right: 2px; }

.nuda-empty-ghost__eye {
  position: absolute;
  top: 22px;
  width: 5px;
  height: 7px;
  background: var(--empty-ghost-eye);
  border-radius: 50%;
}

.nuda-empty-ghost__eye--l { left: 14px; }
.nuda-empty-ghost__eye--r { right: 14px; }

.nuda-empty-ghost__mouth {
  position: absolute;
  top: 34px;
  left: 50%;
  transform: translateX(-50%);
  width: 8px;
  height: 8px;
  border: 1.5px solid var(--empty-ghost-eye);
  border-top: none;
  border-radius: 0 0 50% 50%;
}

.nuda-empty-ghost__text {
  font: 500 12px ui-sans-serif, system-ui, sans-serif;
  color: var(--empty-ghost-text);
  letter-spacing: 0.02em;
  margin: 0;
}

@keyframes nuda-empty-ghost-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-6px); }
}

@keyframes nuda-empty-ghost-shadow {
  0%, 100% { transform: translateX(-50%) scaleX(1);   opacity: 0.7; }
  50%      { transform: translateX(-50%) scaleX(0.7); opacity: 0.4; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-empty-ghost__body,
  .nuda-empty-ghost__shadow {
    animation: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 6. No Data Pulse ─────────────── */
  {
    id: "no-data-pulse",
    name: "No Data Pulse",
    category: "Empty States",
    preview: (
      <div className="nuda-no-data" role="status" aria-label="No data available">
        <div className="nuda-no-data__scene">
          <span className="nuda-no-data__ring nuda-no-data__ring--a" />
          <span className="nuda-no-data__ring nuda-no-data__ring--b" />
          <span className="nuda-no-data__ring nuda-no-data__ring--c" />
          <div className="nuda-no-data__core">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12 L19 12" />
            </svg>
          </div>
        </div>
        <p className="nuda-no-data__text">No data available</p>
      </div>
    ),
    cssInline: `
      .nuda-no-data{display:flex;flex-direction:column;align-items:center;gap:10px;padding:8px;color:#e4ff54}
      .nuda-no-data__scene{position:relative;width:80px;height:80px;display:flex;align-items:center;justify-content:center}
      .nuda-no-data__ring{position:absolute;inset:0;border:1.5px solid currentColor;border-radius:50%;opacity:0;animation:_nd-pulse 2.4s ease-out infinite}
      .nuda-no-data__ring--a{animation-delay:0s}
      .nuda-no-data__ring--b{animation-delay:.8s}
      .nuda-no-data__ring--c{animation-delay:1.6s}
      .nuda-no-data__core{position:relative;width:30px;height:30px;background:currentColor;color:#09090b;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 0 16px rgba(228,255,84,.4);animation:_nd-core 2.4s ease-in-out infinite}
      .nuda-no-data__core svg{width:60%;height:60%}
      .nuda-no-data__text{font:500 11px ui-sans-serif,system-ui;color:rgba(255,255,255,.55);letter-spacing:.02em}
      @keyframes _nd-pulse{0%{transform:scale(.55);opacity:.9}100%{transform:scale(1);opacity:0}}
      @keyframes _nd-core{0%,100%{transform:scale(1)}50%{transform:scale(.92)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- No Data Pulse -->
<div class="nuda-no-data" role="status" aria-label="No data available">
  <div class="nuda-no-data__scene">
    <span class="nuda-no-data__ring nuda-no-data__ring--a"></span>
    <span class="nuda-no-data__ring nuda-no-data__ring--b"></span>
    <span class="nuda-no-data__ring nuda-no-data__ring--c"></span>
    <div class="nuda-no-data__core">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2.5" stroke-linecap="round">
        <path d="M5 12 L19 12" />
      </svg>
    </div>
  </div>
  <p class="nuda-no-data__text">No data available</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* No Data Pulse
   Centered icon with three concentric rings expanding outward.
   Customize: --no-data-color, --no-data-icon, --no-data-text, --no-data-size */

.nuda-no-data {
  --no-data-color: #e4ff54;
  --no-data-icon: #09090b;
  --no-data-text: rgba(255, 255, 255, 0.55);
  --no-data-size: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 12px;
  color: var(--no-data-color);
}

.nuda-no-data__scene {
  position: relative;
  width: var(--no-data-size);
  height: var(--no-data-size);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-no-data__ring {
  position: absolute;
  inset: 0;
  border: 1.5px solid currentColor;
  border-radius: 50%;
  opacity: 0;
  animation: nuda-no-data-pulse 2.4s ease-out infinite;
}

.nuda-no-data__ring--a { animation-delay: 0s; }
.nuda-no-data__ring--b { animation-delay: 0.8s; }
.nuda-no-data__ring--c { animation-delay: 1.6s; }

.nuda-no-data__core {
  position: relative;
  width: 38%;
  height: 38%;
  background: currentColor;
  color: var(--no-data-icon);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 16px rgba(228, 255, 84, 0.4);
  animation: nuda-no-data-core 2.4s ease-in-out infinite;
}

.nuda-no-data__core svg {
  width: 60%;
  height: 60%;
}

.nuda-no-data__text {
  font: 500 12px ui-sans-serif, system-ui, sans-serif;
  color: var(--no-data-text);
  letter-spacing: 0.02em;
  margin: 0;
}

@keyframes nuda-no-data-pulse {
  0%   { transform: scale(0.55); opacity: 0.9; }
  100% { transform: scale(1);    opacity: 0;   }
}

@keyframes nuda-no-data-core {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(0.92); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-no-data__ring,
  .nuda-no-data__core {
    animation: none;
  }
  .nuda-no-data__ring--a { opacity: 0.3; }
  .nuda-no-data__ring--b,
  .nuda-no-data__ring--c { opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── No Notifications ─────────────── */
  {
    id: "empty-notifications",
    name: "No Notifications",
    category: "Empty States",
    preview: (
      <div className="nuda-empnotif">
        <div className="nuda-empnotif__bell">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.7 21a2 2 0 01-3.4 0" />
          </svg>
          <span className="nuda-empnotif__zen">Z</span>
        </div>
        <div className="nuda-empnotif__title">All caught up</div>
        <div className="nuda-empnotif__sub">No new notifications</div>
      </div>
    ),
    cssInline: `
      .nuda-empnotif{display:flex;flex-direction:column;align-items:center;padding:24px;text-align:center;width:100%;max-width:220px}
      .nuda-empnotif__bell{position:relative;display:inline-flex;align-items:center;justify-content:center;width:54px;height:54px;color:#63636e;margin-bottom:10px}
      .nuda-empnotif__bell svg{width:32px;height:32px}
      .nuda-empnotif__zen{position:absolute;top:0;right:8px;color:#e4ff54;font-size:18px;font-style:italic;font-family:Georgia,serif;font-weight:700;animation:_zenFloat 2.4s ease-in-out infinite}
      .nuda-empnotif__title{color:#fafafa;font-size:13px;font-weight:600}
      .nuda-empnotif__sub{color:#a0a0a8;font-size:11px;margin-top:2px}
      @keyframes _zenFloat{0%,100%{transform:translateY(0);opacity:.7}50%{transform:translateY(-6px) rotate(10deg);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-empnotif__zen{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-empnotif">
  <div class="nuda-empnotif__bell">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 01-3.4 0" />
    </svg>
    <span class="nuda-empnotif__zen">Z</span>
  </div>
  <div class="nuda-empnotif__title">All caught up</div>
  <div class="nuda-empnotif__sub">No new notifications</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-empnotif__zen {
  position: absolute;
  top: 0;
  right: 8px;
  color: #e4ff54;
  font-style: italic;
  font-weight: 700;
  animation: nuda-zen-float 2.4s ease-in-out infinite;
}

@keyframes nuda-zen-float {
  0%, 100% { transform: translateY(0);                 opacity: 0.7; }
  50%      { transform: translateY(-6px) rotate(10deg); opacity: 1;  }
}`,
      },
    ],
  },

  /* ─────────────── No Messages ─────────────── */
  {
    id: "empty-messages",
    name: "No Messages",
    category: "Empty States",
    preview: (
      <div className="nuda-empmsg">
        <div className="nuda-empmsg__bubbles">
          <span /><span /><span />
        </div>
        <div className="nuda-empmsg__title">No messages yet</div>
        <div className="nuda-empmsg__sub">Start a conversation</div>
      </div>
    ),
    cssInline: `
      .nuda-empmsg{display:flex;flex-direction:column;align-items:center;padding:24px;text-align:center;width:100%;max-width:220px}
      .nuda-empmsg__bubbles{display:inline-flex;align-items:flex-end;gap:6px;margin-bottom:10px}
      .nuda-empmsg__bubbles span{width:24px;height:24px;border-radius:50%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);animation:_empMsgFloat 2.4s ease-in-out infinite}
      .nuda-empmsg__bubbles span:nth-child(2){width:32px;height:32px;animation-delay:.3s;background:rgba(228,255,84,.05);border-color:rgba(228,255,84,.2)}
      .nuda-empmsg__bubbles span:nth-child(3){animation-delay:.6s}
      .nuda-empmsg__title{color:#fafafa;font-size:13px;font-weight:600}
      .nuda-empmsg__sub{color:#a0a0a8;font-size:11px;margin-top:2px}
      @keyframes _empMsgFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      @media(prefers-reduced-motion:reduce){.nuda-empmsg__bubbles span{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-empmsg">
  <div class="nuda-empmsg__bubbles">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="nuda-empmsg__title">No messages yet</div>
  <div class="nuda-empmsg__sub">Start a conversation</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-empmsg__bubbles span {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  animation: nuda-emp-msg-float 2.4s ease-in-out infinite;
}

@keyframes nuda-emp-msg-float {
  0%, 100% { transform: translateY(0);    }
  50%      { transform: translateY(-4px); }
}`,
      },
    ],
  },

  /* ─────────────── Empty Cart ─────────────── */
  {
    id: "empty-cart",
    name: "Empty Cart",
    category: "Empty States",
    preview: (
      <div className="nuda-empcart">
        <div className="nuda-empcart__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
          </svg>
          <span className="nuda-empcart__qmark">?</span>
        </div>
        <div className="nuda-empcart__title">Your cart is empty</div>
        <button className="nuda-empcart__cta">Browse products</button>
      </div>
    ),
    cssInline: `
      .nuda-empcart{display:flex;flex-direction:column;align-items:center;padding:24px;text-align:center;width:100%;max-width:220px}
      .nuda-empcart__icon{position:relative;display:inline-flex;align-items:center;justify-content:center;width:60px;height:60px;color:#63636e;margin-bottom:10px;animation:_cartTilt 4s ease-in-out infinite}
      .nuda-empcart__icon svg{width:36px;height:36px}
      .nuda-empcart__qmark{position:absolute;top:6px;right:8px;width:16px;height:16px;border-radius:50%;background:#e4ff54;color:#09090b;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center}
      .nuda-empcart__title{color:#fafafa;font-size:13px;font-weight:600;margin-bottom:10px}
      .nuda-empcart__cta{padding:7px 14px;background:#e4ff54;color:#09090b;border:0;border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;transition:transform .15s,filter .2s}
      .nuda-empcart__cta:hover{transform:translateY(-1px);filter:brightness(1.08)}
      @keyframes _cartTilt{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-empcart__icon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-empcart">
  <div class="nuda-empcart__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
    </svg>
    <span class="nuda-empcart__qmark">?</span>
  </div>
  <div class="nuda-empcart__title">Your cart is empty</div>
  <button class="nuda-empcart__cta">Browse products</button>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-empcart__icon {
  animation: nuda-cart-tilt 4s ease-in-out infinite;
}

@keyframes nuda-cart-tilt {
  0%, 100% { transform: rotate(-3deg); }
  50%      { transform: rotate(3deg);  }
}`,
      },
    ],
  },

  /* ─────────────── Empty Bookmarks ─────────────── */
  {
    id: "empty-bookmarks",
    name: "No Bookmarks",
    category: "Empty States",
    preview: (
      <div className="nuda-empbm">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path className="nuda-empbm__path" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
        </svg>
        <div className="nuda-empbm__title">No bookmarks</div>
        <div className="nuda-empbm__sub">Save items to revisit later</div>
      </div>
    ),
    cssInline: `
      .nuda-empbm{display:flex;flex-direction:column;align-items:center;padding:24px;text-align:center;width:100%;max-width:220px;color:#63636e}
      .nuda-empbm svg{width:42px;height:42px;margin-bottom:8px;overflow:visible}
      .nuda-empbm__path{stroke-dasharray:80;stroke-dashoffset:80;animation:_empBmDraw 2s ease forwards}
      .nuda-empbm__title{color:#fafafa;font-size:13px;font-weight:600}
      .nuda-empbm__sub{color:#a0a0a8;font-size:11px;margin-top:2px}
      @keyframes _empBmDraw{to{stroke-dashoffset:0}}
      @media(prefers-reduced-motion:reduce){.nuda-empbm__path{stroke-dashoffset:0;animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-empbm">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path class="nuda-empbm__path"
          d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
  </svg>
  <div class="nuda-empbm__title">No bookmarks</div>
  <div class="nuda-empbm__sub">Save items to revisit later</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-empbm__path {
  stroke-dasharray: 80;
  stroke-dashoffset: 80;
  animation: nuda-emp-bm-draw 2s ease forwards;
}

@keyframes nuda-emp-bm-draw { to { stroke-dashoffset: 0; } }`,
      },
    ],
  },
];
