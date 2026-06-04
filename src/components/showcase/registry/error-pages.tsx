import type { NudaComponent } from "./types";

const CAT = "Error & 404 Pages";

export const errorPages: NudaComponent[] = [
  /* ─────────────── 1. 404 Centered ─────────────── */
  {
    id: "error-404-centered",
    name: "404 Centered",
    category: CAT,
    preview: (
      <div className="nuda-err-404c">
        <div className="nuda-err-404c__code">404</div>
        <div className="nuda-err-404c__divider" />
        <p className="nuda-err-404c__msg">Page not found</p>
        <p className="nuda-err-404c__sub">The page you're looking for doesn't exist or has been moved.</p>
        <a className="nuda-err-404c__btn" href="#">Go home</a>
      </div>
    ),
    cssInline: `
      .nuda-err-404c{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:28px 20px;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:16px;text-align:center;width:100%;max-width:260px;animation:_nuda-errfade-in .4s ease-out}
      .nuda-err-404c__code{font-size:56px;font-weight:800;letter-spacing:-.04em;color:#e4ff54;line-height:1;font-family:ui-monospace,monospace}
      .nuda-err-404c__divider{width:32px;height:2px;background:rgba(255,255,255,.12);margin:10px 0}
      .nuda-err-404c__msg{color:#fafafa;font-size:13px;font-weight:600;margin:0 0 4px}
      .nuda-err-404c__sub{color:#666;font-size:10px;line-height:1.5;margin:0 0 14px;max-width:180px}
      .nuda-err-404c__btn{display:inline-block;padding:7px 18px;background:#e4ff54;color:#09090b;border-radius:8px;font-size:11px;font-weight:700;text-decoration:none;transition:transform .15s,filter .2s}
      .nuda-err-404c__btn:hover{transform:translateY(-1px);filter:brightness(1.1)}
      @keyframes _nuda-errfade-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-err-404c{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-err-404c">
  <div class="nuda-err-404c__code">404</div>
  <div class="nuda-err-404c__divider"></div>
  <p class="nuda-err-404c__msg">Page not found</p>
  <p class="nuda-err-404c__sub">The page you're looking for doesn't exist or has been moved.</p>
  <a class="nuda-err-404c__btn" href="#">Go home</a>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. 500 Server Error ─────────────── */
  {
    id: "error-500-server",
    name: "500 Server Error",
    category: CAT,
    preview: (
      <div className="nuda-err-500">
        <div className="nuda-err-500__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
        </div>
        <div className="nuda-err-500__code">500</div>
        <p className="nuda-err-500__msg">Internal server error</p>
        <p className="nuda-err-500__sub">Something went wrong on our end. We're working on it.</p>
        <button className="nuda-err-500__btn">Try again</button>
      </div>
    ),
    cssInline: `
      .nuda-err-500{display:flex;flex-direction:column;align-items:center;padding:24px 20px;background:#1a1a1a;border:1px solid rgba(255,107,107,.2);border-radius:16px;text-align:center;width:100%;max-width:260px}
      .nuda-err-500__icon{width:44px;height:44px;color:#ff6b6b;margin-bottom:8px;animation:_nuda-err500shake .5s ease-in-out 1}
      .nuda-err-500__icon svg{width:100%;height:100%}
      .nuda-err-500__code{font-size:36px;font-weight:800;color:#ff6b6b;letter-spacing:-.03em;font-family:ui-monospace,monospace;line-height:1;margin-bottom:4px}
      .nuda-err-500__msg{color:#fafafa;font-size:13px;font-weight:600;margin:0 0 4px}
      .nuda-err-500__sub{color:#666;font-size:10px;line-height:1.5;margin:0 0 14px;max-width:190px}
      .nuda-err-500__btn{padding:7px 18px;background:rgba(255,107,107,.12);color:#ff6b6b;border:1px solid rgba(255,107,107,.35);border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;transition:background .2s}
      .nuda-err-500__btn:hover{background:rgba(255,107,107,.22)}
      @keyframes _nuda-err500shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}}
      @media(prefers-reduced-motion:reduce){.nuda-err-500__icon{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-err-500">
  <div class="nuda-err-500__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  </div>
  <div class="nuda-err-500__code">500</div>
  <p class="nuda-err-500__msg">Internal server error</p>
  <p class="nuda-err-500__sub">Something went wrong on our end. We're working on it.</p>
  <button class="nuda-err-500__btn">Try again</button>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Glitch 404 Text ─────────────── */
  {
    id: "error-glitch-404",
    name: "Glitch 404",
    category: CAT,
    preview: (
      <div className="nuda-err-glitch">
        <div className="nuda-err-glitch__wrap" aria-label="404">
          <span className="nuda-err-glitch__text" data-text="404">404</span>
        </div>
        <p className="nuda-err-glitch__msg">Signal lost</p>
        <p className="nuda-err-glitch__sub">This page has been corrupted or removed.</p>
      </div>
    ),
    cssInline: `
      .nuda-err-glitch{display:flex;flex-direction:column;align-items:center;padding:28px 20px;background:#0e0e0e;border:1px solid rgba(255,255,255,.06);border-radius:16px;text-align:center;width:100%;max-width:260px}
      .nuda-err-glitch__wrap{position:relative;margin-bottom:10px}
      .nuda-err-glitch__text{display:block;font-size:58px;font-weight:900;font-family:ui-monospace,monospace;letter-spacing:-.04em;color:#e4ff54;position:relative;animation:_nuda-errglitch 3s infinite}
      .nuda-err-glitch__text::before,.nuda-err-glitch__text::after{content:attr(data-text);position:absolute;inset:0;font-size:inherit;font-weight:inherit;font-family:inherit;letter-spacing:inherit}
      .nuda-err-glitch__text::before{color:#ff6b6b;clip-path:polygon(0 20%,100% 20%,100% 40%,0 40%);animation:_nuda-errglitch-a 3s infinite;left:2px}
      .nuda-err-glitch__text::after{color:#6bfff8;clip-path:polygon(0 60%,100% 60%,100% 80%,0 80%);animation:_nuda-errglitch-b 3s infinite;left:-2px}
      .nuda-err-glitch__msg{color:#fafafa;font-size:13px;font-weight:600;margin:0 0 4px}
      .nuda-err-glitch__sub{color:#555;font-size:10px;line-height:1.5;margin:0;max-width:190px}
      @keyframes _nuda-errglitch{0%,90%,100%{transform:none}92%{transform:skewX(-2deg)}94%{transform:skewX(2deg)}96%{transform:none}}
      @keyframes _nuda-errglitch-a{0%,90%,100%{opacity:0;transform:none}92%{opacity:1;transform:translateX(-3px)}94%{opacity:1;transform:translateX(3px)}96%{opacity:0}}
      @keyframes _nuda-errglitch-b{0%,91%,100%{opacity:0;transform:none}93%{opacity:1;transform:translateX(3px)}95%{opacity:1;transform:translateX(-3px)}97%{opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-err-glitch__text,.nuda-err-glitch__text::before,.nuda-err-glitch__text::after{animation:none}.nuda-err-glitch__text::before,.nuda-err-glitch__text::after{opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-err-glitch">
  <div class="nuda-err-glitch__wrap" aria-label="404">
    <span class="nuda-err-glitch__text" data-text="404">404</span>
  </div>
  <p class="nuda-err-glitch__msg">Signal lost</p>
  <p class="nuda-err-glitch__sub">This page has been corrupted or removed.</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Astronaut Lost (CSS Only) ─────────────── */
  {
    id: "error-astronaut-lost",
    name: "Astronaut Lost",
    category: CAT,
    preview: (
      <div className="nuda-err-astro">
        <div className="nuda-err-astro__scene">
          <div className="nuda-err-astro__planet" />
          <div className="nuda-err-astro__ring" />
          <div className="nuda-err-astro__body">
            <div className="nuda-err-astro__helmet">
              <div className="nuda-err-astro__visor" />
            </div>
            <div className="nuda-err-astro__torso" />
            <div className="nuda-err-astro__arm nuda-err-astro__arm--l" />
            <div className="nuda-err-astro__arm nuda-err-astro__arm--r" />
          </div>
          <span className="nuda-err-astro__star nuda-err-astro__star--a" />
          <span className="nuda-err-astro__star nuda-err-astro__star--b" />
          <span className="nuda-err-astro__star nuda-err-astro__star--c" />
        </div>
        <p className="nuda-err-astro__code">404</p>
        <p className="nuda-err-astro__msg">Lost in space</p>
      </div>
    ),
    cssInline: `
      .nuda-err-astro{display:flex;flex-direction:column;align-items:center;padding:20px;background:#0a0a14;border:1px solid rgba(255,255,255,.06);border-radius:16px;text-align:center;width:100%;max-width:260px}
      .nuda-err-astro__scene{position:relative;width:120px;height:100px;margin-bottom:8px}
      .nuda-err-astro__planet{position:absolute;bottom:4px;left:50%;transform:translateX(-50%);width:70px;height:26px;background:radial-gradient(ellipse at 40% 40%,#2a1a4e,#100a20);border-radius:50%;box-shadow:0 0 18px rgba(100,60,220,.4)}
      .nuda-err-astro__ring{position:absolute;bottom:8px;left:50%;transform:translateX(-50%);width:90px;height:12px;border:2px solid rgba(150,100,255,.5);border-radius:50%;pointer-events:none}
      .nuda-err-astro__body{position:absolute;top:6px;left:50%;transform:translateX(-50%);animation:_nuda-errastro-float 3.6s ease-in-out infinite}
      .nuda-err-astro__helmet{width:26px;height:26px;background:#cfcfcf;border-radius:50%;margin:0 auto;position:relative;box-shadow:0 0 8px rgba(255,255,255,.15)}
      .nuda-err-astro__visor{position:absolute;top:7px;left:5px;width:16px;height:10px;background:linear-gradient(135deg,#6bfff8,#2266cc);border-radius:4px;opacity:.9}
      .nuda-err-astro__torso{width:22px;height:18px;background:#a0a0b0;border-radius:4px;margin:2px auto 0;position:relative}
      .nuda-err-astro__arm{position:absolute;top:2px;width:6px;height:14px;background:#a0a0b0;border-radius:3px}
      .nuda-err-astro__arm--l{left:-7px;transform:rotate(-15deg);transform-origin:top center}
      .nuda-err-astro__arm--r{right:-7px;transform:rotate(15deg);transform-origin:top center}
      .nuda-err-astro__star{position:absolute;width:2px;height:2px;border-radius:50%;background:#fafafa}
      .nuda-err-astro__star--a{top:10px;left:14px;animation:_nuda-errastro-twinkle 2s .2s ease-in-out infinite}
      .nuda-err-astro__star--b{top:20px;right:10px;animation:_nuda-errastro-twinkle 2s .8s ease-in-out infinite}
      .nuda-err-astro__star--c{top:30px;left:8px;width:1px;height:1px;animation:_nuda-errastro-twinkle 2s 1.4s ease-in-out infinite}
      .nuda-err-astro__code{font-size:32px;font-weight:800;color:#e4ff54;font-family:ui-monospace,monospace;letter-spacing:-.03em;margin:0 0 2px;line-height:1}
      .nuda-err-astro__msg{color:#777;font-size:11px;margin:0}
      @keyframes _nuda-errastro-float{0%,100%{transform:translateX(-50%) translateY(0) rotate(-3deg)}50%{transform:translateX(-50%) translateY(-10px) rotate(3deg)}}
      @keyframes _nuda-errastro-twinkle{0%,100%{opacity:.3}50%{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-err-astro__body{animation:none}.nuda-err-astro__star--a,.nuda-err-astro__star--b,.nuda-err-astro__star--c{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-err-astro">
  <div class="nuda-err-astro__scene">
    <div class="nuda-err-astro__planet"></div>
    <div class="nuda-err-astro__ring"></div>
    <div class="nuda-err-astro__body">
      <div class="nuda-err-astro__helmet">
        <div class="nuda-err-astro__visor"></div>
      </div>
      <div class="nuda-err-astro__torso">
        <div class="nuda-err-astro__arm nuda-err-astro__arm--l"></div>
        <div class="nuda-err-astro__arm nuda-err-astro__arm--r"></div>
      </div>
    </div>
    <span class="nuda-err-astro__star nuda-err-astro__star--a"></span>
    <span class="nuda-err-astro__star nuda-err-astro__star--b"></span>
    <span class="nuda-err-astro__star nuda-err-astro__star--c"></span>
  </div>
  <p class="nuda-err-astro__code">404</p>
  <p class="nuda-err-astro__msg">Lost in space</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Maintenance Mode ─────────────── */
  {
    id: "error-maintenance-mode",
    name: "Maintenance Mode",
    category: CAT,
    preview: (
      <div className="nuda-err-maint">
        <div className="nuda-err-maint__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
          </svg>
        </div>
        <div className="nuda-err-maint__badge">Under Maintenance</div>
        <p className="nuda-err-maint__msg">We'll be back soon</p>
        <p className="nuda-err-maint__sub">Our team is performing scheduled maintenance. Estimated downtime: 2 hours.</p>
        <div className="nuda-err-maint__bar">
          <div className="nuda-err-maint__bar-fill" />
        </div>
        <p className="nuda-err-maint__pct">68% complete</p>
      </div>
    ),
    cssInline: `
      .nuda-err-maint{display:flex;flex-direction:column;align-items:center;padding:24px 20px;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:16px;text-align:center;width:100%;max-width:260px}
      .nuda-err-maint__icon{width:40px;height:40px;color:#e4ff54;margin-bottom:10px;animation:_nuda-errmaint-spin 6s linear infinite}
      .nuda-err-maint__icon svg{width:100%;height:100%}
      .nuda-err-maint__badge{display:inline-block;padding:3px 10px;background:rgba(228,255,84,.1);color:#e4ff54;border:1px solid rgba(228,255,84,.3);border-radius:99px;font-size:9px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:8px}
      .nuda-err-maint__msg{color:#fafafa;font-size:13px;font-weight:600;margin:0 0 4px}
      .nuda-err-maint__sub{color:#666;font-size:10px;line-height:1.5;margin:0 0 14px;max-width:200px}
      .nuda-err-maint__bar{width:160px;height:4px;background:rgba(255,255,255,.08);border-radius:2px;overflow:hidden;margin-bottom:4px}
      .nuda-err-maint__bar-fill{height:100%;width:68%;background:linear-gradient(90deg,#e4ff54,#b8d600);border-radius:2px;animation:_nuda-errmaint-prog 2s ease-out both}
      .nuda-err-maint__pct{color:#777;font-size:9px;font-family:ui-monospace,monospace}
      @keyframes _nuda-errmaint-spin{to{transform:rotate(360deg)}}
      @keyframes _nuda-errmaint-prog{from{width:0}to{width:68%}}
      @media(prefers-reduced-motion:reduce){.nuda-err-maint__icon{animation:none}.nuda-err-maint__bar-fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-err-maint">
  <div class="nuda-err-maint__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  </div>
  <div class="nuda-err-maint__badge">Under Maintenance</div>
  <p class="nuda-err-maint__msg">We'll be back soon</p>
  <p class="nuda-err-maint__sub">Our team is performing scheduled maintenance. Estimated downtime: 2 hours.</p>
  <div class="nuda-err-maint__bar">
    <div class="nuda-err-maint__bar-fill"></div>
  </div>
  <p class="nuda-err-maint__pct">68% complete</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Offline State ─────────────── */
  {
    id: "error-offline-state",
    name: "Offline State",
    category: CAT,
    preview: (
      <div className="nuda-err-offline">
        <div className="nuda-err-offline__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="1" y1="1" x2="23" y2="23" />
            <path d="M16.72 11.06A10.94 10.94 0 0119 12.55" />
            <path d="M5 12.55a10.94 10.94 0 015.17-2.39" />
            <path d="M10.71 5.05A16 16 0 0122.56 9" />
            <path d="M1.42 9a15.91 15.91 0 014.7-2.88" />
            <path d="M8.53 16.11a6 6 0 016.95 0" />
            <line x1="12" y1="20" x2="12.01" y2="20" />
          </svg>
        </div>
        <p className="nuda-err-offline__msg">No connection</p>
        <p className="nuda-err-offline__sub">Check your internet connection and try again.</p>
        <div className="nuda-err-offline__dots">
          <span className="nuda-err-offline__dot" />
          <span className="nuda-err-offline__dot" />
          <span className="nuda-err-offline__dot" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-err-offline{display:flex;flex-direction:column;align-items:center;padding:28px 20px;background:#1a1a1a;border:1px solid rgba(255,255,255,.07);border-radius:16px;text-align:center;width:100%;max-width:260px}
      .nuda-err-offline__icon{width:46px;height:46px;color:#777;margin-bottom:12px}
      .nuda-err-offline__icon svg{width:100%;height:100%}
      .nuda-err-offline__msg{color:#cfcfcf;font-size:14px;font-weight:700;margin:0 0 4px}
      .nuda-err-offline__sub{color:#555;font-size:10px;line-height:1.5;margin:0 0 16px;max-width:190px}
      .nuda-err-offline__dots{display:flex;gap:5px;align-items:center}
      .nuda-err-offline__dot{width:6px;height:6px;border-radius:50%;background:#333;animation:_nuda-erroffl-blink 1.4s ease-in-out infinite}
      .nuda-err-offline__dot:nth-child(2){animation-delay:.25s}
      .nuda-err-offline__dot:nth-child(3){animation-delay:.5s}
      @keyframes _nuda-erroffl-blink{0%,80%,100%{background:#333}40%{background:#666}}
      @media(prefers-reduced-motion:reduce){.nuda-err-offline__dot{animation:none;background:#444}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-err-offline">
  <div class="nuda-err-offline__icon">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="1" y1="1" x2="23" y2="23" />
      <path d="M16.72 11.06A10.94 10.94 0 0119 12.55" />
      <path d="M5 12.55a10.94 10.94 0 015.17-2.39" />
      <path d="M10.71 5.05A16 16 0 0122.56 9" />
      <path d="M1.42 9a15.91 15.91 0 014.7-2.88" />
      <path d="M8.53 16.11a6 6 0 016.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  </div>
  <p class="nuda-err-offline__msg">No connection</p>
  <p class="nuda-err-offline__sub">Check your internet connection and try again.</p>
  <div class="nuda-err-offline__dots">
    <span class="nuda-err-offline__dot"></span>
    <span class="nuda-err-offline__dot"></span>
    <span class="nuda-err-offline__dot"></span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Empty Search 404 ─────────────── */
  {
    id: "error-empty-search-404",
    name: "Empty Search Results",
    category: CAT,
    preview: (
      <div className="nuda-err-nosrch">
        <div className="nuda-err-nosrch__field">
          <svg className="nuda-err-nosrch__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <span className="nuda-err-nosrch__query">astronaut recipes</span>
        </div>
        <div className="nuda-err-nosrch__empty">
          <span className="nuda-err-nosrch__zero">0</span>
          <span className="nuda-err-nosrch__label">results</span>
        </div>
        <p className="nuda-err-nosrch__tip">Try different keywords or check for typos.</p>
      </div>
    ),
    cssInline: `
      .nuda-err-nosrch{display:flex;flex-direction:column;align-items:center;padding:24px 20px;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:16px;text-align:center;width:100%;max-width:260px;gap:12px}
      .nuda-err-nosrch__field{display:flex;align-items:center;gap:6px;padding:7px 12px;background:#1e1e1e;border:1px solid rgba(255,255,255,.1);border-radius:8px;width:100%}
      .nuda-err-nosrch__icon{width:14px;height:14px;color:#555;flex-shrink:0}
      .nuda-err-nosrch__query{color:#cfcfcf;font-size:11px;font-style:italic;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .nuda-err-nosrch__empty{display:flex;align-items:baseline;gap:4px}
      .nuda-err-nosrch__zero{font-size:48px;font-weight:900;font-family:ui-monospace,monospace;color:#2a2a2a;line-height:1;animation:_nuda-errnosrch-pop .4s ease-out both}
      .nuda-err-nosrch__label{font-size:14px;font-weight:600;color:#3a3a3a}
      .nuda-err-nosrch__tip{color:#555;font-size:10px;line-height:1.5;margin:0}
      @keyframes _nuda-errnosrch-pop{from{transform:scale(.6);opacity:0}to{transform:scale(1);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-err-nosrch__zero{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-err-nosrch">
  <div class="nuda-err-nosrch__field">
    <svg class="nuda-err-nosrch__icon" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
    <span class="nuda-err-nosrch__query">astronaut recipes</span>
  </div>
  <div class="nuda-err-nosrch__empty">
    <span class="nuda-err-nosrch__zero">0</span>
    <span class="nuda-err-nosrch__label">results</span>
  </div>
  <p class="nuda-err-nosrch__tip">Try different keywords or check for typos.</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Broken Link Card ─────────────── */
  {
    id: "error-broken-link",
    name: "Broken Link Card",
    category: CAT,
    preview: (
      <div className="nuda-err-brknlnk">
        <div className="nuda-err-brknlnk__top">
          <div className="nuda-err-brknlnk__url">
            <span className="nuda-err-brknlnk__protocol">https://</span>
            <span className="nuda-err-brknlnk__path">example.com/missing-page</span>
          </div>
          <span className="nuda-err-brknlnk__status">404</span>
        </div>
        <div className="nuda-err-brknlnk__chain">
          <span className="nuda-err-brknlnk__link" />
          <span className="nuda-err-brknlnk__break" />
          <span className="nuda-err-brknlnk__link" />
        </div>
        <p className="nuda-err-brknlnk__msg">This link is broken</p>
        <p className="nuda-err-brknlnk__sub">The destination URL could not be reached.</p>
      </div>
    ),
    cssInline: `
      .nuda-err-brknlnk{display:flex;flex-direction:column;align-items:center;padding:20px;background:#1a1a1a;border:1px solid rgba(255,107,107,.15);border-radius:14px;width:100%;max-width:260px;gap:10px}
      .nuda-err-brknlnk__top{display:flex;align-items:center;justify-content:space-between;width:100%;padding:8px 10px;background:#111;border:1px solid rgba(255,255,255,.06);border-radius:8px}
      .nuda-err-brknlnk__url{display:flex;align-items:center;gap:2px;overflow:hidden;flex:1;min-width:0}
      .nuda-err-brknlnk__protocol{color:#555;font-size:9px;font-family:ui-monospace,monospace;white-space:nowrap}
      .nuda-err-brknlnk__path{color:#888;font-size:9px;font-family:ui-monospace,monospace;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
      .nuda-err-brknlnk__status{flex-shrink:0;padding:2px 6px;background:rgba(255,107,107,.15);color:#ff6b6b;border-radius:4px;font-size:9px;font-weight:700;font-family:ui-monospace,monospace;margin-left:6px}
      .nuda-err-brknlnk__chain{display:flex;align-items:center;gap:3px}
      .nuda-err-brknlnk__link{display:flex;width:18px;height:10px;border:2px solid rgba(255,255,255,.18);border-radius:5px}
      .nuda-err-brknlnk__break{width:8px;height:2px;background:transparent;border-top:2px dashed rgba(255,107,107,.6);position:relative;top:-2px;animation:_nuda-errbrkl-gap 1.6s ease-in-out infinite}
      .nuda-err-brknlnk__msg{color:#cfcfcf;font-size:12px;font-weight:600;margin:0}
      .nuda-err-brknlnk__sub{color:#555;font-size:10px;line-height:1.5;margin:0;text-align:center}
      @keyframes _nuda-errbrkl-gap{0%,100%{opacity:.4}50%{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-err-brknlnk__break{animation:none;opacity:.7}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-err-brknlnk">
  <div class="nuda-err-brknlnk__top">
    <div class="nuda-err-brknlnk__url">
      <span class="nuda-err-brknlnk__protocol">https://</span>
      <span class="nuda-err-brknlnk__path">example.com/missing-page</span>
    </div>
    <span class="nuda-err-brknlnk__status">404</span>
  </div>
  <div class="nuda-err-brknlnk__chain">
    <span class="nuda-err-brknlnk__link"></span>
    <span class="nuda-err-brknlnk__break"></span>
    <span class="nuda-err-brknlnk__link"></span>
  </div>
  <p class="nuda-err-brknlnk__msg">This link is broken</p>
  <p class="nuda-err-brknlnk__sub">The destination URL could not be reached.</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 9. Access Denied 403 ─────────────── */
  {
    id: "error-access-denied-403",
    name: "Access Denied 403",
    category: CAT,
    preview: (
      <div className="nuda-err-403">
        <div className="nuda-err-403__lock">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          <div className="nuda-err-403__shake-line" />
        </div>
        <div className="nuda-err-403__label">403 — Forbidden</div>
        <p className="nuda-err-403__msg">Access denied</p>
        <p className="nuda-err-403__sub">You don't have permission to view this resource.</p>
        <div className="nuda-err-403__pills">
          <span className="nuda-err-403__pill">Restricted</span>
          <span className="nuda-err-403__pill nuda-err-403__pill--admin">Admin only</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-err-403{display:flex;flex-direction:column;align-items:center;padding:24px 20px;background:#141414;border:1px solid rgba(255,107,107,.18);border-radius:16px;text-align:center;width:100%;max-width:260px;gap:6px}
      .nuda-err-403__lock{position:relative;width:52px;height:52px;color:#ff6b6b;display:flex;align-items:center;justify-content:center;background:rgba(255,107,107,.08);border-radius:50%;border:1px solid rgba(255,107,107,.2);animation:_nuda-err403shake .6s ease-in-out .2s 1}
      .nuda-err-403__lock svg{width:26px;height:26px}
      .nuda-err-403__shake-line{position:absolute;inset:-4px;border:1.5px solid rgba(255,107,107,.3);border-radius:50%;animation:_nuda-err403ring 2.4s ease-out .6s infinite}
      .nuda-err-403__label{font-size:9px;font-family:ui-monospace,monospace;font-weight:700;letter-spacing:.1em;color:#ff6b6b;text-transform:uppercase;padding:2px 8px;background:rgba(255,107,107,.08);border-radius:99px;border:1px solid rgba(255,107,107,.2)}
      .nuda-err-403__msg{color:#fafafa;font-size:13px;font-weight:700;margin:2px 0 0}
      .nuda-err-403__sub{color:#555;font-size:10px;line-height:1.5;margin:0;max-width:200px}
      .nuda-err-403__pills{display:flex;gap:6px;margin-top:4px}
      .nuda-err-403__pill{padding:3px 9px;border-radius:99px;font-size:9px;font-weight:600;background:rgba(255,255,255,.05);color:#777;border:1px solid rgba(255,255,255,.08)}
      .nuda-err-403__pill--admin{background:rgba(228,255,84,.06);color:#e4ff54;border-color:rgba(228,255,84,.2)}
      @keyframes _nuda-err403shake{0%,100%{transform:none}20%{transform:rotate(-8deg)}40%{transform:rotate(8deg)}60%{transform:rotate(-6deg)}80%{transform:rotate(4deg)}}
      @keyframes _nuda-err403ring{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.6);opacity:0}}
      @media(prefers-reduced-motion:reduce){.nuda-err-403__lock{animation:none}.nuda-err-403__shake-line{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-err-403">
  <div class="nuda-err-403__lock">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
    <div class="nuda-err-403__shake-line"></div>
  </div>
  <div class="nuda-err-403__label">403 — Forbidden</div>
  <p class="nuda-err-403__msg">Access denied</p>
  <p class="nuda-err-403__sub">You don't have permission to view this resource.</p>
  <div class="nuda-err-403__pills">
    <span class="nuda-err-403__pill">Restricted</span>
    <span class="nuda-err-403__pill nuda-err-403__pill--admin">Admin only</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 10. Retry Error Card ─────────────── */
  {
    id: "error-retry-card",
    name: "Retry Error Card",
    category: CAT,
    preview: (
      <div className="nuda-err-retry">
        <div className="nuda-err-retry__header">
          <div className="nuda-err-retry__pulse" />
          <span className="nuda-err-retry__status">Request failed</span>
        </div>
        <div className="nuda-err-retry__details">
          <div className="nuda-err-retry__row">
            <span className="nuda-err-retry__key">Status</span>
            <span className="nuda-err-retry__val nuda-err-retry__val--err">503 Service Unavailable</span>
          </div>
          <div className="nuda-err-retry__row">
            <span className="nuda-err-retry__key">Attempt</span>
            <span className="nuda-err-retry__val">3 of 5</span>
          </div>
          <div className="nuda-err-retry__row">
            <span className="nuda-err-retry__key">Next retry</span>
            <span className="nuda-err-retry__val">in 8s</span>
          </div>
        </div>
        <div className="nuda-err-retry__progress">
          <div className="nuda-err-retry__progress-fill" />
        </div>
        <button className="nuda-err-retry__btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
          </svg>
          Retry now
        </button>
      </div>
    ),
    cssInline: `
      .nuda-err-retry{display:flex;flex-direction:column;padding:16px;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:14px;width:100%;max-width:260px;gap:12px;font-family:ui-sans-serif,system-ui}
      .nuda-err-retry__header{display:flex;align-items:center;gap:8px}
      .nuda-err-retry__pulse{position:relative;width:8px;height:8px;flex-shrink:0}
      .nuda-err-retry__pulse::before{content:"";position:absolute;inset:0;border-radius:50%;background:#ff6b6b}
      .nuda-err-retry__pulse::after{content:"";position:absolute;inset:-3px;border-radius:50%;border:1.5px solid #ff6b6b;animation:_nuda-errretry-pulse 1.6s ease-out infinite}
      .nuda-err-retry__status{color:#cfcfcf;font-size:12px;font-weight:600}
      .nuda-err-retry__details{display:flex;flex-direction:column;gap:4px;padding:10px;background:#1a1a1a;border-radius:8px;border:1px solid rgba(255,255,255,.05)}
      .nuda-err-retry__row{display:flex;justify-content:space-between;align-items:center}
      .nuda-err-retry__key{font-size:10px;color:#555}
      .nuda-err-retry__val{font-size:10px;color:#888;font-family:ui-monospace,monospace}
      .nuda-err-retry__val--err{color:#ff6b6b}
      .nuda-err-retry__progress{height:3px;background:rgba(255,255,255,.06);border-radius:2px;overflow:hidden}
      .nuda-err-retry__progress-fill{height:100%;width:60%;background:linear-gradient(90deg,#ff6b6b,#ff9b6b);border-radius:2px;animation:_nuda-errretry-prog 8s linear both}
      .nuda-err-retry__btn{display:flex;align-items:center;justify-content:center;gap:6px;padding:8px 14px;background:rgba(228,255,84,.08);color:#e4ff54;border:1px solid rgba(228,255,84,.25);border-radius:8px;font-size:11px;font-weight:600;cursor:pointer;transition:background .2s}
      .nuda-err-retry__btn svg{width:13px;height:13px}
      .nuda-err-retry__btn:hover{background:rgba(228,255,84,.16)}
      @keyframes _nuda-errretry-pulse{0%{transform:scale(1);opacity:.8}100%{transform:scale(2.5);opacity:0}}
      @keyframes _nuda-errretry-prog{from{width:0}to{width:60%}}
      @media(prefers-reduced-motion:reduce){.nuda-err-retry__pulse::after{animation:none}.nuda-err-retry__progress-fill{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-err-retry">
  <div class="nuda-err-retry__header">
    <div class="nuda-err-retry__pulse"></div>
    <span class="nuda-err-retry__status">Request failed</span>
  </div>
  <div class="nuda-err-retry__details">
    <div class="nuda-err-retry__row">
      <span class="nuda-err-retry__key">Status</span>
      <span class="nuda-err-retry__val nuda-err-retry__val--err">503 Service Unavailable</span>
    </div>
    <div class="nuda-err-retry__row">
      <span class="nuda-err-retry__key">Attempt</span>
      <span class="nuda-err-retry__val">3 of 5</span>
    </div>
    <div class="nuda-err-retry__row">
      <span class="nuda-err-retry__key">Next retry</span>
      <span class="nuda-err-retry__val">in 8s</span>
    </div>
  </div>
  <div class="nuda-err-retry__progress">
    <div class="nuda-err-retry__progress-fill"></div>
  </div>
  <button class="nuda-err-retry__btn">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
    </svg>
    Retry now
  </button>
</div>`,
      },
    ],
  },
];
