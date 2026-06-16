import type { NudaComponent } from "./types";

/* ============================================================
   GLITCH & DISTORTION — 10 copy-paste animation components
   Pure HTML + CSS (+ vanilla JS for the corrupt-text one).
   No frameworks.

   BRAND ......... dark #09090b canvas, lime #e4ff54 accent.
                   RGB-split layers use cyan / magenta offsets.
   SEIZURE SAFE .. glitch bursts are subtle + intermittent and
                   never flash more than ~3×/sec. Every effect
                   FULLY disables glitch motion (and settles to a
                   clean, legible state) under prefers-reduced-motion.
   GPU-ONLY ...... transform / opacity / filter / clip-path /
                   text-shadow / background-position only.
   PREFIX ........ every id + class + keyframe uses the "glitch-"
                   stem (HTML classes are nuda-glitch-*).
   ============================================================ */

/* Corrupt Text — vanilla JS char-swap.
   Runs only on the live preview; respects reduced-motion via matchMedia.
   Driven by a callback ref (no React hooks, so this registry module stays
   importable from Server Components). The loop self-stops once the node
   leaves the DOM (el.isConnected). The copyable JS tab carries the
   production version. */
function startGlitchCorrupt(el: HTMLSpanElement | null) {
  if (!el || typeof window === "undefined") return;
  const node = el as HTMLSpanElement & { _nudaCorrupt?: boolean };
  if (node._nudaCorrupt) return; // guard against double-start on re-render
  node._nudaCorrupt = true;

  const finalText = "NUDAUI";
  el.textContent = finalText;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const glyphs = "!<>-_\\/[]{}=+*^?#01";
  const reveal = 4; // frames each char stays scrambled
  let frame = 0;

  const tick = () => {
    if (!el.isConnected) return; // node removed from DOM → stop the loop
    const out: string[] = [];
    for (let i = 0; i < finalText.length; i++) {
      if (i < Math.floor(frame / reveal)) out.push(finalText[i]);
      else out.push(glyphs[(Math.random() * glyphs.length) | 0]);
    }
    el.textContent = out.join("");
    frame++;
    if (frame > finalText.length * reveal + 8) {
      el.textContent = finalText;
      frame = 0;
      window.setTimeout(tick, 1800); // intermittent: pause, then corrupt again
      return;
    }
    window.setTimeout(tick, 55);
  };
  window.setTimeout(tick, 600);
}

function GlitchCorruptPreview() {
  return (
    <span
      ref={startGlitchCorrupt}
      style={{
        fontFamily: "monospace",
        fontSize: "2rem",
        fontWeight: 800,
        letterSpacing: "0.12em",
        color: "#e4ff54",
        textShadow: "0 0 12px rgba(228,255,84,.35)",
      }}
    >
      NUDAUI
    </span>
  );
}

export const glitchDistortion: NudaComponent[] = [
  /* -------------------------------------------------------
     1. RGB Split Text — chromatic-aberration text glitch
     ------------------------------------------------------- */
  {
    id: "glitch-rgb-text",
    name: "RGB Split Text",
    category: "Glitch & Distortion",
    cssInline: `
      .nuda-glitch-rgb{position:relative;display:inline-block;font-family:ui-sans-serif,system-ui,sans-serif;font-size:2.2rem;font-weight:900;letter-spacing:.04em;color:#e4ff54;text-shadow:0 0 10px rgba(228,255,84,.3)}
      .nuda-glitch-rgb::before,.nuda-glitch-rgb::after{content:attr(data-text);position:absolute;inset:0;color:#e4ff54;background:#09090b;overflow:hidden}
      .nuda-glitch-rgb::before{color:#00e5ff;animation:glitch-rgb-cyan 2.4s steps(1) infinite}
      .nuda-glitch-rgb::after{color:#ff00d4;animation:glitch-rgb-magenta 2.4s steps(1) infinite}
      @keyframes glitch-rgb-cyan{0%,86%,100%{transform:translate(0,0);opacity:0}88%{transform:translate(-2px,1px);opacity:.85}92%{transform:translate(2px,-1px);opacity:.85}96%{transform:translate(-1px,0);opacity:.85}}
      @keyframes glitch-rgb-magenta{0%,86%,100%{transform:translate(0,0);opacity:0}88%{transform:translate(2px,-1px);opacity:.8}92%{transform:translate(-2px,1px);opacity:.8}96%{transform:translate(1px,0);opacity:.8}}
      @media (prefers-reduced-motion:reduce){.nuda-glitch-rgb::before,.nuda-glitch-rgb::after{animation:none;opacity:0}}
    `,
    preview: (
      <div
        className="nuda-glitch-rgb"
        data-text="GLITCH"
        style={{ background: "#09090b", padding: "0.4rem 0.2rem" }}
      >
        GLITCH
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- RGB Split Text — chromatic-aberration glitch.
     The text is duplicated via ::before/::after using data-text. -->
<span class="nuda-glitch-rgb" data-text="GLITCH">GLITCH</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── RGB Split Text ──────────────────────────────────────────
   Cyan + magenta ghost layers jitter apart in a short, infrequent
   burst (~once every 2.4s) so it never strobes. Base text stays
   lime + fully legible.
   Customize:
     --nuda-grb-cyan   : cyan offset color
     --nuda-grb-mag    : magenta offset color
     --nuda-grb-base   : main text color
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-rgb {
  --nuda-grb-cyan: #00e5ff;
  --nuda-grb-mag: #ff00d4;
  --nuda-grb-base: #e4ff54;

  position: relative;
  display: inline-block;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  color: var(--nuda-grb-base);
  text-shadow: 0 0 10px rgba(228, 255, 84, 0.3);
}

.nuda-glitch-rgb::before,
.nuda-glitch-rgb::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  background: #09090b;
  overflow: hidden;
}

.nuda-glitch-rgb::before {
  color: var(--nuda-grb-cyan);
  animation: glitch-rgb-cyan 2.4s steps(1) infinite;
}

.nuda-glitch-rgb::after {
  color: var(--nuda-grb-mag);
  animation: glitch-rgb-magenta 2.4s steps(1) infinite;
}

@keyframes glitch-rgb-cyan {
  0%, 86%, 100% { transform: translate(0, 0); opacity: 0; }
  88% { transform: translate(-2px, 1px);  opacity: 0.85; }
  92% { transform: translate(2px, -1px);  opacity: 0.85; }
  96% { transform: translate(-1px, 0);    opacity: 0.85; }
}

@keyframes glitch-rgb-magenta {
  0%, 86%, 100% { transform: translate(0, 0); opacity: 0; }
  88% { transform: translate(2px, -1px);  opacity: 0.8; }
  92% { transform: translate(-2px, 1px);  opacity: 0.8; }
  96% { transform: translate(1px, 0);     opacity: 0.8; }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch-rgb::before,
  .nuda-glitch-rgb::after { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     2. Glitch on Hover — clip-path slice glitch on hover
     ------------------------------------------------------- */
  {
    id: "glitch-slice-hover",
    name: "Glitch on Hover",
    category: "Glitch & Distortion",
    cssInline: `
      .nuda-glitch-hover{position:relative;display:inline-block;font-family:ui-sans-serif,system-ui,sans-serif;font-size:2.1rem;font-weight:900;letter-spacing:.05em;color:#e4ff54;cursor:pointer;background:#09090b;padding:.3rem .5rem}
      .nuda-glitch-hover::before,.nuda-glitch-hover::after{content:attr(data-text);position:absolute;inset:.3rem .5rem;background:#09090b;opacity:0}
      .nuda-glitch-hover:hover::before{color:#00e5ff;opacity:.9;animation:glitch-hover-slice-a .45s steps(2) 2}
      .nuda-glitch-hover:hover::after{color:#ff00d4;opacity:.85;animation:glitch-hover-slice-b .45s steps(2) 2}
      @keyframes glitch-hover-slice-a{0%{clip-path:inset(10% 0 75% 0);transform:translate(-3px,0)}50%{clip-path:inset(60% 0 12% 0);transform:translate(3px,0)}100%{clip-path:inset(30% 0 45% 0);transform:translate(-2px,0)}}
      @keyframes glitch-hover-slice-b{0%{clip-path:inset(70% 0 8% 0);transform:translate(3px,0)}50%{clip-path:inset(20% 0 60% 0);transform:translate(-3px,0)}100%{clip-path:inset(45% 0 30% 0);transform:translate(2px,0)}}
      @media (prefers-reduced-motion:reduce){.nuda-glitch-hover:hover::before,.nuda-glitch-hover:hover::after{animation:none;opacity:0}}
    `,
    preview: (
      <div
        className="nuda-glitch-hover"
        data-text="HOVER ME"
      >
        HOVER ME
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glitch on Hover — clip-path slice glitch.
     The glitch only fires while hovering (runs 2 short bursts). -->
<span class="nuda-glitch-hover" data-text="HOVER ME">HOVER ME</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Glitch on Hover ─────────────────────────────────────────
   Two clip-path "slices" (cyan + magenta) shear the text on hover
   for a couple of quick passes, then settle. No idle motion.
   Customize:
     --nuda-gh-cyan / --nuda-gh-mag : slice colors
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-hover {
  --nuda-gh-cyan: #00e5ff;
  --nuda-gh-mag: #ff00d4;

  position: relative;
  display: inline-block;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 2.1rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  color: #e4ff54;
  cursor: pointer;
  background: #09090b;
  padding: 0.3rem 0.5rem;
}

.nuda-glitch-hover::before,
.nuda-glitch-hover::after {
  content: attr(data-text);
  position: absolute;
  inset: 0.3rem 0.5rem;
  background: #09090b;
  opacity: 0;
}

.nuda-glitch-hover:hover::before {
  color: var(--nuda-gh-cyan);
  opacity: 0.9;
  animation: glitch-hover-slice-a 0.45s steps(2) 2;
}

.nuda-glitch-hover:hover::after {
  color: var(--nuda-gh-mag);
  opacity: 0.85;
  animation: glitch-hover-slice-b 0.45s steps(2) 2;
}

@keyframes glitch-hover-slice-a {
  0%   { clip-path: inset(10% 0 75% 0); transform: translate(-3px, 0); }
  50%  { clip-path: inset(60% 0 12% 0); transform: translate(3px, 0); }
  100% { clip-path: inset(30% 0 45% 0); transform: translate(-2px, 0); }
}

@keyframes glitch-hover-slice-b {
  0%   { clip-path: inset(70% 0 8% 0);  transform: translate(3px, 0); }
  50%  { clip-path: inset(20% 0 60% 0); transform: translate(-3px, 0); }
  100% { clip-path: inset(45% 0 30% 0); transform: translate(2px, 0); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch-hover:hover::before,
  .nuda-glitch-hover:hover::after { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     3. Datamosh — blocky displacement sweep
     ------------------------------------------------------- */
  {
    id: "glitch-datamosh",
    name: "Datamosh",
    category: "Glitch & Distortion",
    cssInline: `
      .nuda-glitch-datamosh{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#101014,#09090b);color:#e4ff54;font:900 1.4rem/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.1em}
      .nuda-glitch-datamosh__block{position:absolute;left:0;right:0;height:22%;background:rgba(228,255,84,.12);mix-blend-mode:screen;opacity:0;animation:glitch-datamosh-sweep 5s ease-in-out infinite}
      .nuda-glitch-datamosh__block:nth-child(2){animation-delay:1.6s;background:rgba(0,229,255,.12)}
      .nuda-glitch-datamosh__block:nth-child(3){animation-delay:3.2s;background:rgba(255,0,212,.1)}
      @keyframes glitch-datamosh-sweep{0%,70%,100%{opacity:0;transform:translateY(0) scaleX(1)}74%{opacity:1;transform:translateY(120%) scaleX(1.04)}80%{opacity:1;transform:translateY(240%) scaleX(.96)}86%{opacity:0;transform:translateY(340%) scaleX(1)}}
      @media (prefers-reduced-motion:reduce){.nuda-glitch-datamosh__block{animation:none;opacity:0}}
    `,
    preview: (
      <div className="nuda-glitch-datamosh">
        <span>DATA</span>
        <span className="nuda-glitch-datamosh__block" />
        <span className="nuda-glitch-datamosh__block" />
        <span className="nuda-glitch-datamosh__block" />
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Datamosh — blocky displacement bands sweep down the frame. -->
<div class="nuda-glitch-datamosh">
  <span>DATA</span>
  <span class="nuda-glitch-datamosh__block"></span>
  <span class="nuda-glitch-datamosh__block"></span>
  <span class="nuda-glitch-datamosh__block"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Datamosh ────────────────────────────────────────────────
   Translucent "compression-artifact" blocks sweep vertically in a
   brief burst every few seconds (staggered cyan / magenta / lime).
   Each block fades and moves — no full-frame flashing.
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-datamosh {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #101014, #09090b);
  color: #e4ff54;
  font: 900 1.4rem/1 ui-sans-serif, system-ui, sans-serif;
  letter-spacing: 0.1em;
}

.nuda-glitch-datamosh__block {
  position: absolute;
  left: 0;
  right: 0;
  height: 22%;
  background: rgba(228, 255, 84, 0.12);
  mix-blend-mode: screen;
  opacity: 0;
  animation: glitch-datamosh-sweep 5s ease-in-out infinite;
}

.nuda-glitch-datamosh__block:nth-child(2) {
  animation-delay: 1.6s;
  background: rgba(0, 229, 255, 0.12);
}

.nuda-glitch-datamosh__block:nth-child(3) {
  animation-delay: 3.2s;
  background: rgba(255, 0, 212, 0.1);
}

@keyframes glitch-datamosh-sweep {
  0%, 70%, 100% { opacity: 0; transform: translateY(0) scaleX(1); }
  74% { opacity: 1; transform: translateY(120%) scaleX(1.04); }
  80% { opacity: 1; transform: translateY(240%) scaleX(0.96); }
  86% { opacity: 0; transform: translateY(340%) scaleX(1); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch-datamosh__block { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     4. Scanline Glitch — rolling scanline distortion
     ------------------------------------------------------- */
  {
    id: "glitch-scanline",
    name: "Scanline Glitch",
    category: "Glitch & Distortion",
    cssInline: `
      .nuda-glitch-scanline{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:#09090b;color:#e4ff54;font:900 1.4rem/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.12em;text-shadow:0 0 10px rgba(228,255,84,.4)}
      .nuda-glitch-scanline__grid{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.35) 0 2px,transparent 2px 4px);pointer-events:none}
      .nuda-glitch-scanline__roll{position:absolute;left:0;right:0;height:30%;background:linear-gradient(180deg,transparent,rgba(228,255,84,.18),transparent);pointer-events:none;animation:glitch-scanline-roll 4s linear infinite}
      @keyframes glitch-scanline-roll{0%{transform:translateY(-40%)}100%{transform:translateY(170%)}}
      @media (prefers-reduced-motion:reduce){.nuda-glitch-scanline__roll{animation:none;opacity:0}}
    `,
    preview: (
      <div className="nuda-glitch-scanline">
        <span>SIGNAL</span>
        <span className="nuda-glitch-scanline__grid" />
        <span className="nuda-glitch-scanline__roll" />
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Scanline Glitch — CRT scanlines + a single rolling band. -->
<div class="nuda-glitch-scanline">
  <span>SIGNAL</span>
  <span class="nuda-glitch-scanline__grid"></span>
  <span class="nuda-glitch-scanline__roll"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Scanline Glitch ─────────────────────────────────────────
   Static CRT scanline grid plus one soft lime band that rolls down
   the surface continuously (smooth, never strobing).
   Customize:
     --nuda-gsc-roll  : roll duration
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-scanline {
  --nuda-gsc-roll: 4s;

  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: #09090b;
  color: #e4ff54;
  font: 900 1.4rem/1 ui-sans-serif, system-ui, sans-serif;
  letter-spacing: 0.12em;
  text-shadow: 0 0 10px rgba(228, 255, 84, 0.4);
}

.nuda-glitch-scanline__grid {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.35) 0 2px,
    transparent 2px 4px
  );
  pointer-events: none;
}

.nuda-glitch-scanline__roll {
  position: absolute;
  left: 0;
  right: 0;
  height: 30%;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(228, 255, 84, 0.18),
    transparent
  );
  pointer-events: none;
  animation: glitch-scanline-roll var(--nuda-gsc-roll) linear infinite;
}

@keyframes glitch-scanline-roll {
  0%   { transform: translateY(-40%); }
  100% { transform: translateY(170%); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch-scanline__roll { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     5. Distort Hover — skew/blur distortion on hover
     ------------------------------------------------------- */
  {
    id: "glitch-distort-hover",
    name: "Distort Hover",
    category: "Glitch & Distortion",
    cssInline: `
      .nuda-glitch-distort{display:inline-block;font-family:ui-sans-serif,system-ui,sans-serif;font-size:2.1rem;font-weight:900;letter-spacing:.04em;color:#e4ff54;cursor:pointer;background:#09090b;padding:.3rem .55rem;transform:skewX(0) scale(1);filter:blur(0);transition:transform .35s cubic-bezier(.2,.9,.2,1),filter .35s,text-shadow .35s;text-shadow:0 0 0 transparent}
      .nuda-glitch-distort:hover{transform:skewX(-7deg) scale(1.04);filter:blur(.6px);text-shadow:2px 0 #00e5ff,-2px 0 #ff00d4}
      @media (prefers-reduced-motion:reduce){.nuda-glitch-distort,.nuda-glitch-distort:hover{transition:none;transform:none;filter:none;text-shadow:none}}
    `,
    preview: (
      <div className="nuda-glitch-distort">DISTORT</div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Distort Hover — skew + slight blur + RGB shadow split on hover. -->
<span class="nuda-glitch-distort">DISTORT</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Distort Hover ───────────────────────────────────────────
   A single eased transition (no looping animation, so nothing can
   strobe): on hover the text skews, picks up a faint blur, and
   splits into cyan/magenta shadow ghosts. Settles cleanly on leave.
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-distort {
  display: inline-block;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 2.1rem;
  font-weight: 900;
  letter-spacing: 0.04em;
  color: #e4ff54;
  cursor: pointer;
  background: #09090b;
  padding: 0.3rem 0.55rem;
  transform: skewX(0) scale(1);
  filter: blur(0);
  text-shadow: 0 0 0 transparent;
  transition:
    transform 0.35s cubic-bezier(0.2, 0.9, 0.2, 1),
    filter 0.35s,
    text-shadow 0.35s;
}

.nuda-glitch-distort:hover {
  transform: skewX(-7deg) scale(1.04);
  filter: blur(0.6px);
  text-shadow: 2px 0 #00e5ff, -2px 0 #ff00d4;
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch-distort,
  .nuda-glitch-distort:hover {
    transition: none;
    transform: none;
    filter: none;
    text-shadow: none;
  }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     6. Jitter — subtle micro-jitter text
     ------------------------------------------------------- */
  {
    id: "glitch-jitter",
    name: "Jitter",
    category: "Glitch & Distortion",
    cssInline: `
      .nuda-glitch-jitter{display:inline-block;font-family:ui-sans-serif,system-ui,sans-serif;font-size:2.1rem;font-weight:900;letter-spacing:.05em;color:#e4ff54;background:#09090b;padding:.3rem .5rem;animation:glitch-jitter-shake 1.8s steps(6) infinite}
      @keyframes glitch-jitter-shake{0%,100%{transform:translate(0,0)}10%{transform:translate(.5px,-.5px)}20%{transform:translate(-.5px,.5px)}30%{transform:translate(.5px,.5px)}40%{transform:translate(-.5px,-.5px)}50%{transform:translate(.5px,0)}60%{transform:translate(-.5px,0)}70%{transform:translate(0,.5px)}80%{transform:translate(0,-.5px)}90%{transform:translate(.5px,-.5px)}}
      @media (prefers-reduced-motion:reduce){.nuda-glitch-jitter{animation:none;transform:none}}
    `,
    preview: (
      <div className="nuda-glitch-jitter">JITTER</div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Jitter — constant, tiny sub-pixel position noise. -->
<span class="nuda-glitch-jitter">JITTER</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Jitter ──────────────────────────────────────────────────
   Very small (<=0.5px) translate noise. It only moves position —
   no opacity flashing — so it reads as a subtle tremor, not a strobe.
   Customize:
     --nuda-gj-speed : full jitter cycle duration
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-jitter {
  --nuda-gj-speed: 1.8s;

  display: inline-block;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 2.1rem;
  font-weight: 900;
  letter-spacing: 0.05em;
  color: #e4ff54;
  background: #09090b;
  padding: 0.3rem 0.5rem;
  animation: glitch-jitter-shake var(--nuda-gj-speed) steps(6) infinite;
}

@keyframes glitch-jitter-shake {
  0%, 100% { transform: translate(0, 0); }
  10% { transform: translate(0.5px, -0.5px); }
  20% { transform: translate(-0.5px, 0.5px); }
  30% { transform: translate(0.5px, 0.5px); }
  40% { transform: translate(-0.5px, -0.5px); }
  50% { transform: translate(0.5px, 0); }
  60% { transform: translate(-0.5px, 0); }
  70% { transform: translate(0, 0.5px); }
  80% { transform: translate(0, -0.5px); }
  90% { transform: translate(0.5px, -0.5px); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch-jitter { animation: none; transform: none; }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     7. VHS — VHS tracking-error overlay
     ------------------------------------------------------- */
  {
    id: "glitch-vhs",
    name: "VHS",
    category: "Glitch & Distortion",
    cssInline: `
      .nuda-glitch-vhs{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:linear-gradient(135deg,#13131a,#09090b);color:#e4ff54;font:900 1.3rem/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.14em;text-shadow:1.5px 0 rgba(255,0,212,.6),-1.5px 0 rgba(0,229,255,.6)}
      .nuda-glitch-vhs__lines{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(255,255,255,.04) 0 1px,transparent 1px 3px);pointer-events:none}
      .nuda-glitch-vhs__track{position:absolute;left:0;right:0;height:14%;background:rgba(228,255,84,.1);backdrop-filter:blur(1px);pointer-events:none;animation:glitch-vhs-track 6s linear infinite}
      @keyframes glitch-vhs-track{0%,100%{transform:translateY(-20%)}50%{transform:translateY(620%)}}
      @media (prefers-reduced-motion:reduce){.nuda-glitch-vhs__track{animation:none;opacity:0}.nuda-glitch-vhs{text-shadow:none}}
    `,
    preview: (
      <div className="nuda-glitch-vhs">
        <span>VHS</span>
        <span className="nuda-glitch-vhs__lines" />
        <span className="nuda-glitch-vhs__track" />
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- VHS — tracking-error band drifts through a tape-noise overlay. -->
<div class="nuda-glitch-vhs">
  <span>VHS</span>
  <span class="nuda-glitch-vhs__lines"></span>
  <span class="nuda-glitch-vhs__track"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── VHS ─────────────────────────────────────────────────────
   Tape-noise lines (static) + one blurred "tracking-error" band
   that slowly drifts top→bottom. The text carries a permanent,
   gentle cyan/magenta shadow split for the analog-bleed look.
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-vhs {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: linear-gradient(135deg, #13131a, #09090b);
  color: #e4ff54;
  font: 900 1.3rem/1 ui-sans-serif, system-ui, sans-serif;
  letter-spacing: 0.14em;
  text-shadow: 1.5px 0 rgba(255, 0, 212, 0.6), -1.5px 0 rgba(0, 229, 255, 0.6);
}

.nuda-glitch-vhs__lines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.04) 0 1px,
    transparent 1px 3px
  );
  pointer-events: none;
}

.nuda-glitch-vhs__track {
  position: absolute;
  left: 0;
  right: 0;
  height: 14%;
  background: rgba(228, 255, 84, 0.1);
  backdrop-filter: blur(1px);
  pointer-events: none;
  animation: glitch-vhs-track 6s linear infinite;
}

@keyframes glitch-vhs-track {
  0%, 100% { transform: translateY(-20%); }
  50%      { transform: translateY(620%); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch-vhs__track { animation: none; opacity: 0; }
  .nuda-glitch-vhs { text-shadow: none; }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     8. Pixel Streak — vertical streak displacement
     ------------------------------------------------------- */
  {
    id: "glitch-pixel-streak",
    name: "Pixel Streak",
    category: "Glitch & Distortion",
    cssInline: `
      .nuda-glitch-streak{position:relative;display:grid;place-items:center;width:160px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;background:#09090b;color:#e4ff54;font:900 1.4rem/1 ui-sans-serif,system-ui,sans-serif;letter-spacing:.12em}
      .nuda-glitch-streak__col{position:absolute;top:0;bottom:0;width:8%;background:linear-gradient(180deg,transparent,rgba(228,255,84,.5),transparent);opacity:0;animation:glitch-streak-pull 4.5s ease-in-out infinite}
      .nuda-glitch-streak__col:nth-child(2){left:22%;animation-delay:.3s;background:linear-gradient(180deg,transparent,rgba(0,229,255,.45),transparent)}
      .nuda-glitch-streak__col:nth-child(3){left:54%;animation-delay:.6s}
      .nuda-glitch-streak__col:nth-child(4){left:78%;animation-delay:.15s;background:linear-gradient(180deg,transparent,rgba(255,0,212,.4),transparent)}
      @keyframes glitch-streak-pull{0%,82%,100%{opacity:0;transform:scaleY(.2)}86%{opacity:.9;transform:scaleY(1)}92%{opacity:.6;transform:scaleY(1.4)}}
      @media (prefers-reduced-motion:reduce){.nuda-glitch-streak__col{animation:none;opacity:0}}
    `,
    preview: (
      <div className="nuda-glitch-streak">
        <span>STREAK</span>
        <span className="nuda-glitch-streak__col" style={{ left: "8%" }} />
        <span className="nuda-glitch-streak__col" />
        <span className="nuda-glitch-streak__col" />
        <span className="nuda-glitch-streak__col" />
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Pixel Streak — vertical columns "pull" pixels up/down in a burst. -->
<div class="nuda-glitch-streak">
  <span>STREAK</span>
  <span class="nuda-glitch-streak__col"></span>
  <span class="nuda-glitch-streak__col"></span>
  <span class="nuda-glitch-streak__col"></span>
  <span class="nuda-glitch-streak__col"></span>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Pixel Streak ────────────────────────────────────────────
   A few vertical gradient columns (lime / cyan / magenta) briefly
   stretch on the Y axis to fake "stuck pixel" smearing, then vanish.
   The burst happens once per ~4.5s cycle — well under 3 flashes/sec.
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-streak {
  position: relative;
  display: grid;
  place-items: center;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  background: #09090b;
  color: #e4ff54;
  font: 900 1.4rem/1 ui-sans-serif, system-ui, sans-serif;
  letter-spacing: 0.12em;
}

.nuda-glitch-streak__col {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 8%;
  width: 8%;
  background: linear-gradient(180deg, transparent, rgba(228, 255, 84, 0.5), transparent);
  opacity: 0;
  animation: glitch-streak-pull 4.5s ease-in-out infinite;
}

.nuda-glitch-streak__col:nth-child(2) {
  left: 22%;
  animation-delay: 0.3s;
  background: linear-gradient(180deg, transparent, rgba(0, 229, 255, 0.45), transparent);
}

.nuda-glitch-streak__col:nth-child(3) {
  left: 54%;
  animation-delay: 0.6s;
}

.nuda-glitch-streak__col:nth-child(4) {
  left: 78%;
  animation-delay: 0.15s;
  background: linear-gradient(180deg, transparent, rgba(255, 0, 212, 0.4), transparent);
}

@keyframes glitch-streak-pull {
  0%, 82%, 100% { opacity: 0;   transform: scaleY(0.2); }
  86%           { opacity: 0.9; transform: scaleY(1); }
  92%           { opacity: 0.6; transform: scaleY(1.4); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch-streak__col { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* -------------------------------------------------------
     9. Corrupt Text — char-swap corruption (vanilla JS)
     ------------------------------------------------------- */
  {
    id: "glitch-text-corrupt",
    name: "Corrupt Text",
    category: "Glitch & Distortion",
    cssInline: `
      .nuda-glitch-corrupt{display:inline-block;font-family:monospace;font-size:2rem;font-weight:800;letter-spacing:.12em;color:#e4ff54;background:#09090b;padding:.3rem .5rem;text-shadow:0 0 12px rgba(228,255,84,.35)}
    `,
    preview: (
      <div style={{ background: "#09090b", padding: "0.3rem 0.5rem" }}>
        <GlitchCorruptPreview />
      </div>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Corrupt Text — characters scramble through random glyphs, then
     resolve. The data-text attribute holds the clean final string. -->
<span class="nuda-glitch-corrupt" data-glitch-corrupt="NUDAUI">NUDAUI</span>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Corrupt Text ────────────────────────────────────────────
   JS-driven char-swap; CSS only handles the base look. The final,
   resolved text is plain lime monospace at full contrast.
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-corrupt {
  display: inline-block;
  font-family: monospace;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #e4ff54;
  background: #09090b;
  padding: 0.3rem 0.5rem;
  text-shadow: 0 0 12px rgba(228, 255, 84, 0.35);
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* ── Corrupt Text — vanilla JS ───────────────────────────────
   Scrambles each character through random glyphs before locking in
   the final text, then pauses and repeats intermittently.
   Reduced-motion: bail out entirely and show the clean text.
   ──────────────────────────────────────────────────────────── */
;(function () {
  var REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var GLYPHS = "!<>-_\\\\/[]{}=+*^?#01";

  document.querySelectorAll("[data-glitch-corrupt]").forEach(function (el) {
    var finalText = el.getAttribute("data-glitch-corrupt") || el.textContent;
    el.textContent = finalText;

    /* Respect reduced-motion: leave the clean text in place. */
    if (REDUCE) return;

    var reveal = 4;   /* frames each char stays scrambled */
    var step = 55;    /* ms per frame (keeps swaps < ~18/sec, no strobe) */
    var pause = 1800; /* ms idle between corruption bursts */
    var frame = 0;
    var timer;

    function burst() {
      var out = "";
      for (var i = 0; i < finalText.length; i++) {
        out += i < Math.floor(frame / reveal)
          ? finalText[i]
          : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      el.textContent = out;
      frame++;

      if (frame > finalText.length * reveal + 8) {
        el.textContent = finalText;
        frame = 0;
        timer = setTimeout(burst, pause); /* intermittent restart */
      } else {
        timer = setTimeout(burst, step);
      }
    }

    burst();
  });
})();`,
      },
    ],
  },

  /* -------------------------------------------------------
     10. Glitch Button — CTA with a glitch hover state
     ------------------------------------------------------- */
  {
    id: "glitch-cta-button",
    name: "Glitch Button",
    category: "Glitch & Distortion",
    cssInline: `
      .nuda-glitch-btn{position:relative;display:inline-block;font-family:ui-sans-serif,system-ui,sans-serif;font-size:1rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#09090b;background:#e4ff54;border:none;border-radius:8px;padding:.7rem 1.4rem;cursor:pointer;overflow:hidden;transition:transform .2s,box-shadow .2s}
      .nuda-glitch-btn::before,.nuda-glitch-btn::after{content:attr(data-text);position:absolute;inset:0;display:grid;place-items:center;border-radius:8px;opacity:0}
      .nuda-glitch-btn:hover{transform:translateY(-1px);box-shadow:0 8px 24px -8px rgba(228,255,84,.6)}
      .nuda-glitch-btn:hover::before{background:#00e5ff;color:#09090b;opacity:.9;animation:glitch-btn-a .4s steps(2) 2}
      .nuda-glitch-btn:hover::after{background:#ff00d4;color:#09090b;opacity:.85;animation:glitch-btn-b .4s steps(2) 2}
      @keyframes glitch-btn-a{0%{clip-path:inset(0 0 70% 0);transform:translate(-3px,0)}50%{clip-path:inset(55% 0 0 0);transform:translate(3px,0)}100%{clip-path:inset(0 0 100% 0);transform:translate(0,0)}}
      @keyframes glitch-btn-b{0%{clip-path:inset(60% 0 0 0);transform:translate(3px,0)}50%{clip-path:inset(0 0 60% 0);transform:translate(-3px,0)}100%{clip-path:inset(100% 0 0 0);transform:translate(0,0)}}
      @media (prefers-reduced-motion:reduce){.nuda-glitch-btn{transition:none}.nuda-glitch-btn:hover{transform:none}.nuda-glitch-btn:hover::before,.nuda-glitch-btn:hover::after{animation:none;opacity:0}}
    `,
    preview: (
      <button className="nuda-glitch-btn" data-text="LAUNCH" type="button">
        LAUNCH
      </button>
    ),
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glitch Button — lime CTA; hover fires two quick clip-path
     glitch passes in cyan/magenta, then settles to the clean lime. -->
<button class="nuda-glitch-btn" data-text="LAUNCH">LAUNCH</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* ── Glitch Button ───────────────────────────────────────────
   A solid lime CTA (dark label, 4.5:1+ contrast). On hover it lifts
   slightly and runs two short cyan/magenta clip-path glitch bursts,
   then rests on the clean lime fill. No idle/looping flash.
   Customize:
     --nuda-gbtn-a / --nuda-gbtn-b : glitch pass colors
   ──────────────────────────────────────────────────────────── */
.nuda-glitch-btn {
  --nuda-gbtn-a: #00e5ff;
  --nuda-gbtn-b: #ff00d4;

  position: relative;
  display: inline-block;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #09090b;
  background: #e4ff54;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.4rem;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.nuda-glitch-btn::before,
.nuda-glitch-btn::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 8px;
  opacity: 0;
}

.nuda-glitch-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 24px -8px rgba(228, 255, 84, 0.6);
}

.nuda-glitch-btn:hover::before {
  background: var(--nuda-gbtn-a);
  color: #09090b;
  opacity: 0.9;
  animation: glitch-btn-a 0.4s steps(2) 2;
}

.nuda-glitch-btn:hover::after {
  background: var(--nuda-gbtn-b);
  color: #09090b;
  opacity: 0.85;
  animation: glitch-btn-b 0.4s steps(2) 2;
}

@keyframes glitch-btn-a {
  0%   { clip-path: inset(0 0 70% 0);  transform: translate(-3px, 0); }
  50%  { clip-path: inset(55% 0 0 0);  transform: translate(3px, 0); }
  100% { clip-path: inset(0 0 100% 0); transform: translate(0, 0); }
}

@keyframes glitch-btn-b {
  0%   { clip-path: inset(60% 0 0 0);  transform: translate(3px, 0); }
  50%  { clip-path: inset(0 0 60% 0);  transform: translate(-3px, 0); }
  100% { clip-path: inset(100% 0 0 0); transform: translate(0, 0); }
}

/* ── Accessibility ──────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  .nuda-glitch-btn { transition: none; }
  .nuda-glitch-btn:hover { transform: none; }
  .nuda-glitch-btn:hover::before,
  .nuda-glitch-btn:hover::after { animation: none; opacity: 0; }
}`,
      },
    ],
  },
];
