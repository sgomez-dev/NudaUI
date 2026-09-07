import type { NudaComponent } from "./types";

/* ============================================================
   NEON & GLOW — EXTRA — 8 more copy-paste animation components
   Pure HTML + CSS. Complements neon-glow.tsx without repeating
   its patterns (sign flicker, button pulse, spinning border,
   breathing text, ring loader, hover card, toggle, tube fill,
   pulse beacon, retro grid).

   Conventions
     • id / class / keyframe stem: "ne2-" (mandated prefix)
     • GPU-only animation: transform / opacity / filter /
       box-shadow / background-position / stroke-dashoffset
     • Flicker stays well under 3 flashes / second
     • Every cssInline ends with prefers-reduced-motion that
       stops looping motion and settles to a steady, legible
       end-state (never fully off).
   ============================================================ */

const CAT = "Neon & Glow";

export const neonGlowExtra: NudaComponent[] = [
  /* ─────────────── 1. Dying Neon Tube ─────────────── */
  {
    id: "ne2-dying-tube",
    name: "Dying Neon Tube",
    category: CAT,
    preview: (
      <div className="nuda-ne2-dying-tube">
        <span className="nuda-ne2-dying-tube__letter">S</span>
        <span className="nuda-ne2-dying-tube__letter nuda-ne2-dying-tube__letter--dying">A</span>
        <span className="nuda-ne2-dying-tube__letter">L</span>
        <span className="nuda-ne2-dying-tube__letter">E</span>
      </div>
    ),
    cssInline: `
      .nuda-ne2-dying-tube{display:flex;gap:2px;align-items:center;justify-content:center;padding:26px 34px;background:#09090b;border-radius:12px}
      .nuda-ne2-dying-tube__letter{font-family:ui-sans-serif,system-ui,sans-serif;font-size:36px;font-weight:800;color:#fbffe0;text-shadow:0 0 4px #fff,0 0 10px #e4ff54,0 0 22px #e4ff54,0 0 44px rgba(228,255,84,.6)}
      .nuda-ne2-dying-tube__letter--dying{animation:_nuda-ne2dyingtube 4s linear infinite}
      @keyframes _nuda-ne2dyingtube{0%,5%,8%,16%,19%,100%{opacity:1}6%,7%,17%,18%{opacity:.2}}
      @media(prefers-reduced-motion:reduce){.nuda-ne2-dying-tube__letter--dying{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Dying Neon Tube — one letter buzzes with a faulty ballast -->
<div class="nuda-ne2-dying-tube">
  <span class="nuda-ne2-dying-tube__letter">S</span>
  <span class="nuda-ne2-dying-tube__letter nuda-ne2-dying-tube__letter--dying">A</span>
  <span class="nuda-ne2-dying-tube__letter">L</span>
  <span class="nuda-ne2-dying-tube__letter">E</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Neon Script ─────────────── */
  {
    id: "ne2-script",
    name: "Neon Script",
    category: CAT,
    preview: (
      <div className="nuda-ne2-script">
        <svg className="nuda-ne2-script__svg" viewBox="0 0 200 80" fill="none" aria-hidden="true">
          <path
            className="nuda-ne2-script__path"
            d="M10 60 C 30 10, 50 10, 60 40 S 90 70, 100 40 S 130 10, 140 40 S 170 70, 190 30"
            stroke="#e4ff54"
            strokeWidth={4}
            strokeLinecap="round"
          />
        </svg>
        <p className="nuda-ne2-script__caption">handwritten glow</p>
      </div>
    ),
    cssInline: `
      .nuda-ne2-script{display:flex;flex-direction:column;align-items:center;gap:8px;padding:18px;background:#09090b;border-radius:12px}
      .nuda-ne2-script__svg{width:200px;height:80px;overflow:visible;filter:drop-shadow(0 0 6px #e4ff54) drop-shadow(0 0 16px rgba(228,255,84,.6))}
      .nuda-ne2-script__path{stroke-dasharray:600;stroke-dashoffset:600;animation:_nuda-ne2script 4.5s ease-in-out infinite}
      .nuda-ne2-script__caption{margin:0;font-size:12px;color:#cfcfcf;letter-spacing:.04em}
      @keyframes _nuda-ne2script{0%{stroke-dashoffset:600;opacity:1}55%{stroke-dashoffset:0;opacity:1}82%{stroke-dashoffset:0;opacity:1}92%{opacity:0}93%{stroke-dashoffset:600;opacity:0}100%{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-ne2-script__path{animation:none;stroke-dashoffset:0;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Neon Script — a cursive line draws itself via stroke-dashoffset -->
<div class="nuda-ne2-script">
  <svg class="nuda-ne2-script__svg" viewBox="0 0 200 80" fill="none" aria-hidden="true">
    <path class="nuda-ne2-script__path" d="M10 60 C 30 10, 50 10, 60 40 S 90 70, 100 40 S 130 10, 140 40 S 170 70, 190 30" stroke="#e4ff54" stroke-width="4" stroke-linecap="round" />
  </svg>
  <p class="nuda-ne2-script__caption">handwritten glow</p>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Arcade Marquee ─────────────── */
  {
    id: "ne2-marquee",
    name: "Arcade Marquee",
    category: CAT,
    preview: (
      <div className="nuda-ne2-marquee">
        <span className="nuda-ne2-marquee__bulbs nuda-ne2-marquee__bulbs--top" aria-hidden="true" />
        <span className="nuda-ne2-marquee__bulbs nuda-ne2-marquee__bulbs--bottom" aria-hidden="true" />
        <span className="nuda-ne2-marquee__text">PLAY</span>
      </div>
    ),
    cssInline: `
      .nuda-ne2-marquee{position:relative;width:220px;height:90px;background:#0c0c10;border:2px solid #3a3a42;border-radius:10px;overflow:hidden}
      .nuda-ne2-marquee__bulbs{position:absolute;left:0;right:0;height:8px;background-image:radial-gradient(circle,#e4ff54 2px,transparent 2.5px);background-size:16px 8px;background-repeat:repeat-x;filter:drop-shadow(0 0 3px #e4ff54);animation:_nuda-ne2marquee .9s linear infinite}
      .nuda-ne2-marquee__bulbs--top{top:6px}
      .nuda-ne2-marquee__bulbs--bottom{bottom:6px}
      .nuda-ne2-marquee__text{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-family:ui-sans-serif,system-ui,sans-serif;font-size:26px;font-weight:800;letter-spacing:.1em;color:#fbffe0;text-shadow:0 0 4px #fff,0 0 12px #e4ff54,0 0 28px rgba(228,255,84,.7)}
      @keyframes _nuda-ne2marquee{0%{background-position:0 0}100%{background-position:16px 0}}
      @media(prefers-reduced-motion:reduce){.nuda-ne2-marquee__bulbs{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Arcade Marquee — chasing bulbs along the top & bottom edge -->
<div class="nuda-ne2-marquee">
  <span class="nuda-ne2-marquee__bulbs nuda-ne2-marquee__bulbs--top" aria-hidden="true"></span>
  <span class="nuda-ne2-marquee__bulbs nuda-ne2-marquee__bulbs--bottom" aria-hidden="true"></span>
  <span class="nuda-ne2-marquee__text">PLAY</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Laser Scan Line ─────────────── */
  {
    id: "ne2-scanline",
    name: "Laser Scan Line",
    category: CAT,
    preview: (
      <div className="nuda-ne2-scanline">
        <span className="nuda-ne2-scanline__beam" aria-hidden="true" />
        <span className="nuda-ne2-scanline__label">SCANNING…</span>
      </div>
    ),
    cssInline: `
      .nuda-ne2-scanline{position:relative;width:200px;height:120px;background:#0c0c10;border:1px solid rgba(228,255,84,.15);border-radius:10px;overflow:hidden}
      .nuda-ne2-scanline__beam{position:absolute;left:0;right:0;top:0;height:26px;background:linear-gradient(180deg,rgba(228,255,84,0) 0%,rgba(228,255,84,.55) 50%,rgba(228,255,84,0) 100%);filter:blur(1px);transform:translateY(-30px);animation:_nuda-ne2scanline 2.6s ease-in-out infinite}
      .nuda-ne2-scanline__label{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:11px;letter-spacing:.14em;color:#cfcfcf}
      @keyframes _nuda-ne2scanline{0%{transform:translateY(-30px)}50%{transform:translateY(124px)}100%{transform:translateY(-30px)}}
      @media(prefers-reduced-motion:reduce){.nuda-ne2-scanline__beam{animation:none;transform:translateY(40px);opacity:.8}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Laser Scan Line — a light band sweeps the panel top to bottom -->
<div class="nuda-ne2-scanline">
  <span class="nuda-ne2-scanline__beam" aria-hidden="true"></span>
  <span class="nuda-ne2-scanline__label">SCANNING…</span>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Bioluminescent Orb ─────────────── */
  {
    id: "ne2-orb",
    name: "Bioluminescent Orb",
    category: CAT,
    preview: (
      <div className="nuda-ne2-orb" role="img" aria-label="Glowing orb">
        <span className="nuda-ne2-orb__core" />
      </div>
    ),
    cssInline: `
      .nuda-ne2-orb{width:72px;height:72px;display:flex;align-items:center;justify-content:center}
      .nuda-ne2-orb__core{display:block;width:56px;height:56px;border-radius:50%;background:radial-gradient(circle at 35% 30%,#e9fff2,#4dffb8 42%,#0f5c3f 100%);box-shadow:0 0 20px 4px rgba(77,255,184,.45),0 0 50px 12px rgba(77,255,184,.22);animation:_nuda-ne2orb 3.2s ease-in-out infinite}
      @keyframes _nuda-ne2orb{0%,100%{transform:scale(1);box-shadow:0 0 20px 4px rgba(77,255,184,.4),0 0 50px 12px rgba(77,255,184,.18)}50%{transform:scale(1.09);box-shadow:0 0 30px 8px rgba(77,255,184,.7),0 0 72px 18px rgba(77,255,184,.4)}}
      @media(prefers-reduced-motion:reduce){.nuda-ne2-orb__core{animation:none;box-shadow:0 0 26px 6px rgba(77,255,184,.55)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Bioluminescent Orb — a breathing sphere of light -->
<div class="nuda-ne2-orb" role="img" aria-label="Glowing orb">
  <span class="nuda-ne2-orb__core"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. LED Dot Matrix ─────────────── */
  {
    id: "ne2-dotmatrix",
    name: "LED Dot Matrix",
    category: CAT,
    preview: (
      <div className="nuda-ne2-dotmatrix" role="img" aria-label="Animated LED dot indicator">
        <span className="nuda-ne2-dotmatrix__dot" style={{ ["--d" as string]: "0s" }} />
        <span className="nuda-ne2-dotmatrix__dot" style={{ ["--d" as string]: ".13s" }} />
        <span className="nuda-ne2-dotmatrix__dot" style={{ ["--d" as string]: ".26s" }} />
        <span className="nuda-ne2-dotmatrix__dot" style={{ ["--d" as string]: ".39s" }} />
        <span className="nuda-ne2-dotmatrix__dot" style={{ ["--d" as string]: ".52s" }} />
        <span className="nuda-ne2-dotmatrix__dot" style={{ ["--d" as string]: ".65s" }} />
        <span className="nuda-ne2-dotmatrix__dot" style={{ ["--d" as string]: ".78s" }} />
        <span className="nuda-ne2-dotmatrix__dot" style={{ ["--d" as string]: ".91s" }} />
      </div>
    ),
    cssInline: `
      .nuda-ne2-dotmatrix{display:flex;gap:6px;padding:16px;background:#09090b;border-radius:10px}
      .nuda-ne2-dotmatrix__dot{position:relative;width:10px;height:10px;border-radius:2px;background:rgba(228,255,84,.15)}
      .nuda-ne2-dotmatrix__dot::after{content:'';position:absolute;inset:0;border-radius:inherit;background:#e4ff54;box-shadow:0 0 6px #e4ff54,0 0 14px rgba(228,255,84,.7);opacity:0;animation:_nuda-ne2dotmatrix 1.6s ease-in-out infinite;animation-delay:var(--d,0s)}
      @keyframes _nuda-ne2dotmatrix{0%,100%{opacity:0}30%{opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-ne2-dotmatrix__dot::after{animation:none;opacity:.7}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- LED Dot Matrix — a wave of light travels across staggered LEDs -->
<div class="nuda-ne2-dotmatrix" role="img" aria-label="Animated LED dot indicator">
  <span class="nuda-ne2-dotmatrix__dot" style="--d:0s"></span>
  <span class="nuda-ne2-dotmatrix__dot" style="--d:.13s"></span>
  <span class="nuda-ne2-dotmatrix__dot" style="--d:.26s"></span>
  <span class="nuda-ne2-dotmatrix__dot" style="--d:.39s"></span>
  <span class="nuda-ne2-dotmatrix__dot" style="--d:.52s"></span>
  <span class="nuda-ne2-dotmatrix__dot" style="--d:.65s"></span>
  <span class="nuda-ne2-dotmatrix__dot" style="--d:.78s"></span>
  <span class="nuda-ne2-dotmatrix__dot" style="--d:.91s"></span>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Icon Halo ─────────────── */
  {
    id: "ne2-halo",
    name: "Icon Halo",
    category: CAT,
    preview: (
      <div className="nuda-ne2-halo" role="img" aria-label="Notifications">
        <span className="nuda-ne2-halo__ring" aria-hidden="true" />
        <svg className="nuda-ne2-halo__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2a6 6 0 0 0-6 6v3.586l-1.707 1.707A1 1 0 0 0 5 15h14a1 1 0 0 0 .707-1.707L18 11.586V8a6 6 0 0 0-6-6Z"
            fill="currentColor"
          />
          <path d="M9.5 18a2.5 2.5 0 0 0 5 0h-5Z" fill="currentColor" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-ne2-halo{position:relative;width:64px;height:64px;display:flex;align-items:center;justify-content:center}
      .nuda-ne2-halo__ring{position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle,rgba(228,255,84,.55),transparent 70%);filter:blur(2px);animation:_nuda-ne2halo 3s ease-in-out infinite}
      .nuda-ne2-halo__icon{position:relative;z-index:1;width:26px;height:26px;color:#fbffe0;filter:drop-shadow(0 0 4px rgba(228,255,84,.8))}
      @keyframes _nuda-ne2halo{0%,100%{transform:scale(.85);opacity:.55}50%{transform:scale(1.15);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-ne2-halo__ring{animation:none;transform:scale(1);opacity:.8}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Icon Halo — a soft ring of light breathes behind an icon -->
<div class="nuda-ne2-halo" role="img" aria-label="Notifications">
  <span class="nuda-ne2-halo__ring" aria-hidden="true"></span>
  <svg class="nuda-ne2-halo__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2a6 6 0 0 0-6 6v3.586l-1.707 1.707A1 1 0 0 0 5 15h14a1 1 0 0 0 .707-1.707L18 11.586V8a6 6 0 0 0-6-6Z" fill="currentColor" />
    <path d="M9.5 18a2.5 2.5 0 0 0 5 0h-5Z" fill="currentColor" />
  </svg>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Glow Nav ─────────────── */
  {
    id: "ne2-nav",
    name: "Glow Nav",
    category: CAT,
    preview: (
      <nav className="nuda-ne2-nav" aria-label="Example">
        <a className="nuda-ne2-nav__link is-active" href="#">
          Home
          <span className="nuda-ne2-nav__spark" aria-hidden="true" />
        </a>
        <a className="nuda-ne2-nav__link" href="#">
          Work
          <span className="nuda-ne2-nav__spark" aria-hidden="true" />
        </a>
        <a className="nuda-ne2-nav__link" href="#">
          About
          <span className="nuda-ne2-nav__spark" aria-hidden="true" />
        </a>
      </nav>
    ),
    cssInline: `
      .nuda-ne2-nav{display:flex;gap:24px;padding:14px 18px;background:#0c0c10;border-radius:10px}
      .nuda-ne2-nav__link{position:relative;padding:6px 2px;color:#cfcfcf;text-decoration:none;font-family:ui-sans-serif,system-ui,sans-serif;font-size:14px;font-weight:600;transition:color .25s ease}
      .nuda-ne2-nav__link::after{content:'';position:absolute;left:0;bottom:0;width:100%;height:2px;background:#e4ff54;box-shadow:0 0 8px #e4ff54,0 0 16px rgba(228,255,84,.6);transform:scaleX(0);transform-origin:left;transition:transform .35s ease}
      .nuda-ne2-nav__spark{position:absolute;bottom:-1px;left:0;width:8px;height:4px;border-radius:2px;background:#fff;box-shadow:0 0 8px #e4ff54,0 0 16px #e4ff54;opacity:0}
      .nuda-ne2-nav__link:hover,.nuda-ne2-nav__link:focus-visible,.nuda-ne2-nav__link.is-active{color:#fbffe0;outline:none}
      .nuda-ne2-nav__link:hover::after,.nuda-ne2-nav__link:focus-visible::after,.nuda-ne2-nav__link.is-active::after{transform:scaleX(1)}
      .nuda-ne2-nav__link:hover .nuda-ne2-nav__spark,.nuda-ne2-nav__link:focus-visible .nuda-ne2-nav__spark,.nuda-ne2-nav__link.is-active .nuda-ne2-nav__spark{opacity:1;animation:_nuda-ne2nav 1.1s linear infinite}
      @keyframes _nuda-ne2nav{0%{transform:translateX(0)}100%{transform:translateX(44px)}}
      @media(prefers-reduced-motion:reduce){.nuda-ne2-nav__link,.nuda-ne2-nav__link::after{transition:none}.nuda-ne2-nav__spark{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glow Nav — hover/active reveals an underline with a travelling spark -->
<nav class="nuda-ne2-nav" aria-label="Example">
  <a class="nuda-ne2-nav__link is-active" href="#">
    Home
    <span class="nuda-ne2-nav__spark" aria-hidden="true"></span>
  </a>
  <a class="nuda-ne2-nav__link" href="#">
    Work
    <span class="nuda-ne2-nav__spark" aria-hidden="true"></span>
  </a>
  <a class="nuda-ne2-nav__link" href="#">
    About
    <span class="nuda-ne2-nav__spark" aria-hidden="true"></span>
  </a>
</nav>`,
      },
    ],
  },
];
