import type { NudaComponent } from "./types";

/* Reusable inline placeholder photo so the registry doesn't depend on assets.
   Drop in <img src="..."> in your project and remove the gradient background. */
const placeholder = `linear-gradient(135deg,#1a1a1f 0%,#222 50%,#0e0e10 100%),
                     radial-gradient(circle at 30% 30%,rgba(228,255,84,.35),transparent 50%),
                     radial-gradient(circle at 70% 70%,rgba(228,255,84,.15),transparent 60%)`;

export const imageEffects: NudaComponent[] = [
  /* ─────────────── 1. Hover Zoom ─────────────── */
  {
    id: "hover-zoom",
    name: "Hover Zoom",
    category: "Image Effects",
    preview: (
      <figure className="nuda-img-zoom">
        <div className="nuda-img-zoom__img" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
        <figcaption className="nuda-img-zoom__cap">Hover me</figcaption>
      </figure>
    ),
    cssInline: `
      .nuda-img-zoom{position:relative;width:120px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;cursor:pointer;margin:0}
      .nuda-img-zoom__img{position:absolute;inset:0;background-size:cover;background-position:center;transform:scale(1);transition:transform .8s cubic-bezier(.4,0,.2,1),filter .5s}
      .nuda-img-zoom:hover .nuda-img-zoom__img{transform:scale(1.12);filter:brightness(1.1)}
      .nuda-img-zoom__cap{position:absolute;left:8px;bottom:6px;font:700 9px ui-sans-serif,system-ui;color:#fafafa;text-shadow:0 1px 4px rgba(0,0,0,.6);transform:translateY(2px);opacity:.8;transition:opacity .3s,transform .3s}
      .nuda-img-zoom:hover .nuda-img-zoom__cap{opacity:1;transform:translateY(0)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Hover Zoom -->
<figure class="nuda-img-zoom">
  <img class="nuda-img-zoom__img" src="/your-image.jpg" alt="" />
  <figcaption class="nuda-img-zoom__cap">Hover me</figcaption>
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Hover Zoom
   Smooth, slow scale on hover with a brightness lift.
   Customize: --zoom-scale, --zoom-duration */

.nuda-img-zoom {
  --zoom-scale: 1.12;
  --zoom-duration: 0.8s;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  margin: 0;
}

.nuda-img-zoom__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1);
  transition:
    transform var(--zoom-duration) cubic-bezier(0.4, 0, 0.2, 1),
    filter 0.5s;
}

.nuda-img-zoom:hover .nuda-img-zoom__img {
  transform: scale(var(--zoom-scale));
  filter: brightness(1.1);
}

.nuda-img-zoom__cap {
  position: absolute;
  left: 10px;
  bottom: 8px;
  font: 700 0.75rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  transform: translateY(2px);
  opacity: 0.8;
  transition: opacity 0.3s, transform 0.3s;
}

.nuda-img-zoom:hover .nuda-img-zoom__cap {
  opacity: 1;
  transform: translateY(0);
}`,
      },
    ],
  },

  /* ─────────────── 2. Ken Burns ─────────────── */
  {
    id: "ken-burns",
    name: "Ken Burns",
    category: "Image Effects",
    preview: (
      <figure className="nuda-kb">
        <div className="nuda-kb__img" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
      </figure>
    ),
    cssInline: `
      .nuda-kb{position:relative;width:120px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;margin:0}
      .nuda-kb__img{position:absolute;inset:0;background-size:cover;background-position:center;animation:_kb-pan 12s ease-in-out infinite alternate}
      @keyframes _kb-pan{0%{transform:scale(1) translate(0,0)}100%{transform:scale(1.18) translate(-6%,-4%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Ken Burns -->
<figure class="nuda-kb">
  <img class="nuda-kb__img" src="/your-image.jpg" alt="" />
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Ken Burns
   Slow zoom + pan that loops back and forth. Cinematic on hero images.
   Customize: --kb-duration, --kb-zoom */

.nuda-kb {
  --kb-duration: 14s;
  --kb-zoom: 1.18;
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  margin: 0;
}

.nuda-kb__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: nuda-kb-pan var(--kb-duration) ease-in-out infinite alternate;
}

@keyframes nuda-kb-pan {
  0%   { transform: scale(1) translate(0, 0); }
  100% { transform: scale(var(--kb-zoom)) translate(-6%, -4%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-kb__img { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Blur to Focus ─────────────── */
  {
    id: "blur-to-focus",
    name: "Blur to Focus",
    category: "Image Effects",
    preview: (
      <figure className="nuda-blur">
        <div className="nuda-blur__img" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
      </figure>
    ),
    cssInline: `
      .nuda-blur{position:relative;width:120px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;margin:0;cursor:pointer}
      .nuda-blur__img{position:absolute;inset:0;background-size:cover;background-position:center;filter:blur(8px) saturate(.7);transform:scale(1.08);transition:filter .6s ease,transform .6s ease}
      .nuda-blur:hover .nuda-blur__img{filter:blur(0) saturate(1);transform:scale(1)}
      .nuda-blur::after{content:"Hover";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font:700 10px ui-sans-serif,system-ui;color:#fafafa;text-shadow:0 1px 4px rgba(0,0,0,.6);letter-spacing:.1em;text-transform:uppercase;transition:opacity .3s}
      .nuda-blur:hover::after{opacity:0}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Blur to Focus -->
<figure class="nuda-blur">
  <img class="nuda-blur__img" src="/your-image.jpg" alt="" />
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Blur to Focus
   Image starts soft + blurred, sharpens on hover.
   Customize: --blur-amount, --blur-duration */

.nuda-blur {
  --blur-amount: 10px;
  --blur-duration: 0.6s;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  margin: 0;
  cursor: pointer;
}

.nuda-blur__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(var(--blur-amount)) saturate(0.7);
  transform: scale(1.08);
  transition:
    filter var(--blur-duration) ease,
    transform var(--blur-duration) ease;
}

.nuda-blur:hover .nuda-blur__img {
  filter: blur(0) saturate(1);
  transform: scale(1);
}`,
      },
    ],
  },

  /* ─────────────── 4. Color Drain ─────────────── */
  {
    id: "color-drain",
    name: "Color Drain",
    category: "Image Effects",
    preview: (
      <figure className="nuda-drain">
        <div className="nuda-drain__img" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
      </figure>
    ),
    cssInline: `
      .nuda-drain{position:relative;width:120px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;margin:0;cursor:pointer}
      .nuda-drain__img{position:absolute;inset:0;background-size:cover;background-position:center;filter:grayscale(100%) contrast(1.05);transition:filter .5s ease,transform .6s ease}
      .nuda-drain:hover .nuda-drain__img{filter:grayscale(0) contrast(1);transform:scale(1.04)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Color Drain -->
<figure class="nuda-drain">
  <img class="nuda-drain__img" src="/your-image.jpg" alt="" />
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Color Drain
   Grayscale by default; full color + slight zoom on hover.
   Useful for project tiles, team grids, etc. */

.nuda-drain {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  margin: 0;
  cursor: pointer;
}

.nuda-drain__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.05);
  transition:
    filter 0.5s ease,
    transform 0.6s ease;
}

.nuda-drain:hover .nuda-drain__img {
  filter: grayscale(0) contrast(1);
  transform: scale(1.04);
}`,
      },
    ],
  },

  /* ─────────────── 5. Mask Reveal ─────────────── */
  {
    id: "mask-reveal",
    name: "Mask Reveal",
    category: "Image Effects",
    preview: (
      <figure className="nuda-mask">
        <div className="nuda-mask__img" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-mask__cover" />
      </figure>
    ),
    cssInline: `
      .nuda-mask{position:relative;width:120px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;margin:0;cursor:pointer}
      .nuda-mask__img{position:absolute;inset:0;background-size:cover;background-position:center;transform:scale(1.08);transition:transform 1s cubic-bezier(.4,0,.2,1)}
      .nuda-mask__cover{position:absolute;inset:0;background:#e4ff54;transform:translateX(-101%);animation:_mk-reveal 1.6s cubic-bezier(.7,0,.3,1) forwards}
      .nuda-mask:hover .nuda-mask__img{transform:scale(1)}
      @keyframes _mk-reveal{0%{transform:translateX(-101%)}50%{transform:translateX(0)}100%{transform:translateX(101%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Mask Reveal -->
<figure class="nuda-mask">
  <img class="nuda-mask__img" src="/your-image.jpg" alt="" />
  <span class="nuda-mask__cover"></span>
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Mask Reveal
   A solid sheet sweeps across, revealing the image underneath.
   Customize: --mask-color, --mask-duration */

.nuda-mask {
  --mask-color: #e4ff54;
  --mask-duration: 1.6s;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  margin: 0;
  cursor: pointer;
}

.nuda-mask__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.08);
  transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.nuda-mask__cover {
  position: absolute;
  inset: 0;
  background: var(--mask-color);
  transform: translateX(-101%);
  animation: nuda-mask-reveal var(--mask-duration) cubic-bezier(0.7, 0, 0.3, 1) forwards;
}

.nuda-mask:hover .nuda-mask__img { transform: scale(1); }

@keyframes nuda-mask-reveal {
  0%   { transform: translateX(-101%); }
  50%  { transform: translateX(0); }
  100% { transform: translateX(101%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-mask__cover { animation: none; transform: translateX(101%); }
}`,
      },
    ],
  },

  /* ─────────────── 6. Parallax Tilt ─────────────── */
  {
    id: "parallax-tilt",
    name: "Parallax Tilt",
    category: "Image Effects",
    preview: (
      <figure className="nuda-tilt">
        <div className="nuda-tilt__img" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-tilt__shine" />
      </figure>
    ),
    cssInline: `
      .nuda-tilt{position:relative;width:120px;aspect-ratio:4/3;border-radius:12px;overflow:hidden;margin:0;perspective:600px;cursor:pointer}
      .nuda-tilt__img{position:absolute;inset:0;background-size:cover;background-position:center;transform-style:preserve-3d;transition:transform .5s cubic-bezier(.4,0,.2,1)}
      .nuda-tilt__shine{position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.15) 0%,transparent 40%);opacity:0;transition:opacity .4s}
      .nuda-tilt:hover .nuda-tilt__img{transform:rotateY(-12deg) rotateX(8deg) scale(1.05)}
      .nuda-tilt:hover .nuda-tilt__shine{opacity:1}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Parallax Tilt — pure-CSS uses fixed angle on hover.
     For pointer-tracked tilt, see the JS tab. -->
<figure class="nuda-tilt">
  <img class="nuda-tilt__img" src="/your-image.jpg" alt="" />
  <span class="nuda-tilt__shine"></span>
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Parallax Tilt
   3D tilt on hover with a gloss highlight overlay.
   Customize: --tilt-angle, --tilt-perspective */

.nuda-tilt {
  --tilt-angle: 12deg;
  --tilt-perspective: 700px;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 14px;
  overflow: hidden;
  margin: 0;
  perspective: var(--tilt-perspective);
  cursor: pointer;
}

.nuda-tilt__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.nuda-tilt__shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.18) 0%, transparent 40%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.4s;
}

.nuda-tilt:hover .nuda-tilt__img {
  transform:
    rotateY(calc(var(--tilt-angle) * -1))
    rotateX(calc(var(--tilt-angle) * 0.6))
    scale(1.05);
}

.nuda-tilt:hover .nuda-tilt__shine { opacity: 1; }`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Parallax Tilt — pointer-tracked variant.
   Drop this in to make the tilt follow the cursor. */

(function () {
  document.querySelectorAll('.nuda-tilt').forEach(function (el) {
    var img = el.querySelector('.nuda-tilt__img');
    if (!img) return;

    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width  - 0.5;
      var py = (e.clientY - r.top)  / r.height - 0.5;
      img.style.transform =
        'rotateY(' + (px * -16) + 'deg) ' +
        'rotateX(' + (py *  12) + 'deg) ' +
        'scale(1.05)';
    });

    el.addEventListener('mouseleave', function () {
      img.style.transform = '';
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 7. Scan Line ─────────────── */
  {
    id: "scan-line",
    name: "Scan Line",
    category: "Image Effects",
    preview: (
      <figure className="nuda-scan">
        <div className="nuda-scan__img" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-scan__line" />
        <span className="nuda-scan__grid" />
      </figure>
    ),
    cssInline: `
      .nuda-scan{position:relative;width:120px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;margin:0}
      .nuda-scan__img{position:absolute;inset:0;background-size:cover;background-position:center;filter:saturate(1.3) contrast(1.1)}
      .nuda-scan__grid{position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0 2px,transparent 2px 4px);pointer-events:none;opacity:.6}
      .nuda-scan__line{position:absolute;left:0;right:0;top:0;height:18px;background:linear-gradient(180deg,transparent,rgba(228,255,84,.4),transparent);box-shadow:0 0 16px rgba(228,255,84,.5);animation:_sc-scan 2.6s linear infinite;pointer-events:none}
      @keyframes _sc-scan{0%{transform:translateY(-20px)}100%{transform:translateY(120px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Scan Line -->
<figure class="nuda-scan">
  <img class="nuda-scan__img" src="/your-image.jpg" alt="" />
  <span class="nuda-scan__line"></span>
  <span class="nuda-scan__grid"></span>
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Scan Line
   CRT-style overlay: faint scanlines + a sweeping highlight bar.
   Customize: --scan-color, --scan-duration */

.nuda-scan {
  --scan-color: #e4ff54;
  --scan-duration: 2.6s;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  margin: 0;
}

.nuda-scan__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.3) contrast(1.1);
}

.nuda-scan__grid {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.18) 0 2px,
    transparent 2px 4px
  );
  pointer-events: none;
  opacity: 0.6;
}

.nuda-scan__line {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 22px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(228, 255, 84, 0.4),
    transparent
  );
  box-shadow: 0 0 16px rgba(228, 255, 84, 0.5);
  pointer-events: none;
  animation: nuda-scan-line var(--scan-duration) linear infinite;
}

@keyframes nuda-scan-line {
  0%   { transform: translateY(-22px); }
  100% { transform: translateY(calc(100% + 22px)); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scan__line { animation: none; opacity: 0; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Glitch Hover ─────────────── */
  {
    id: "glitch-hover",
    name: "Glitch Hover",
    category: "Image Effects",
    preview: (
      <figure className="nuda-glitch">
        <div className="nuda-glitch__img" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
        <div className="nuda-glitch__img nuda-glitch__img--r" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
        <div className="nuda-glitch__img nuda-glitch__img--g" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
      </figure>
    ),
    cssInline: `
      .nuda-glitch{position:relative;width:120px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;margin:0;cursor:pointer;background:#000}
      .nuda-glitch__img{position:absolute;inset:0;background-size:cover;background-position:center;mix-blend-mode:normal;transition:transform .25s ease,opacity .25s}
      .nuda-glitch__img--r,.nuda-glitch__img--g{opacity:0;mix-blend-mode:screen}
      .nuda-glitch__img--r{filter:url(#none);background-blend-mode:lighten,normal,normal;background-color:rgba(255,80,80,.6)}
      .nuda-glitch__img--g{filter:url(#none);background-color:rgba(80,255,160,.5)}
      .nuda-glitch:hover .nuda-glitch__img{animation:_gl-jit .4s steps(2) infinite}
      .nuda-glitch:hover .nuda-glitch__img--r{opacity:.7;transform:translate(3px,0);animation:_gl-jit-r .4s steps(2) infinite}
      .nuda-glitch:hover .nuda-glitch__img--g{opacity:.6;transform:translate(-3px,0);animation:_gl-jit-g .4s steps(2) infinite}
      @keyframes _gl-jit{0%,100%{transform:translate(0)}50%{transform:translate(-1px,1px)}}
      @keyframes _gl-jit-r{0%,100%{transform:translate(3px,0)}50%{transform:translate(5px,-1px)}}
      @keyframes _gl-jit-g{0%,100%{transform:translate(-3px,0)}50%{transform:translate(-5px,1px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glitch Hover (RGB-split layers shift on hover) -->
<figure class="nuda-glitch">
  <img class="nuda-glitch__img"                       src="/your-image.jpg" alt="" />
  <img class="nuda-glitch__img nuda-glitch__img--r"   src="/your-image.jpg" alt="" aria-hidden="true" />
  <img class="nuda-glitch__img nuda-glitch__img--g"   src="/your-image.jpg" alt="" aria-hidden="true" />
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glitch Hover
   Three layers of the same image; on hover, the red/green ghosts shift
   apart and jitter in tandem.
   Customize: --gl-r, --gl-g (the chromatic aberration colors). */

.nuda-glitch {
  --gl-r: rgba(255, 80, 80, 0.6);
  --gl-g: rgba(80, 255, 160, 0.5);
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  margin: 0;
  cursor: pointer;
  background: #000;
}

.nuda-glitch__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease, opacity 0.25s;
}

.nuda-glitch__img--r,
.nuda-glitch__img--g {
  opacity: 0;
  mix-blend-mode: screen;
}

.nuda-glitch__img--r { filter: url(#none); background-color: var(--gl-r); background-blend-mode: lighten; }
.nuda-glitch__img--g { filter: url(#none); background-color: var(--gl-g); background-blend-mode: lighten; }

.nuda-glitch:hover .nuda-glitch__img    { animation: nuda-gl-jit  0.4s steps(2) infinite; }
.nuda-glitch:hover .nuda-glitch__img--r { opacity: 0.7; transform: translate(3px, 0);  animation: nuda-gl-jit-r 0.4s steps(2) infinite; }
.nuda-glitch:hover .nuda-glitch__img--g { opacity: 0.6; transform: translate(-3px, 0); animation: nuda-gl-jit-g 0.4s steps(2) infinite; }

@keyframes nuda-gl-jit   { 0%, 100% { transform: translate(0); }       50% { transform: translate(-1px, 1px); } }
@keyframes nuda-gl-jit-r { 0%, 100% { transform: translate(3px, 0); }  50% { transform: translate(5px, -1px); } }
@keyframes nuda-gl-jit-g { 0%, 100% { transform: translate(-3px, 0); } 50% { transform: translate(-5px, 1px); } }

@media (prefers-reduced-motion: reduce) {
  .nuda-glitch:hover .nuda-glitch__img,
  .nuda-glitch:hover .nuda-glitch__img--r,
  .nuda-glitch:hover .nuda-glitch__img--g { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 9. Lightbox Grow ─────────────── */
  {
    id: "lightbox-grow",
    name: "Lightbox Grow",
    category: "Image Effects",
    preview: (
      <figure className="nuda-lightbox">
        <div className="nuda-lightbox__img" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-lightbox__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3 L3 3 L3 8" />
            <path d="M16 3 L21 3 L21 8" />
            <path d="M8 21 L3 21 L3 16" />
            <path d="M16 21 L21 21 L21 16" />
          </svg>
        </span>
      </figure>
    ),
    cssInline: `
      .nuda-lightbox{position:relative;width:120px;aspect-ratio:1;border-radius:10px;overflow:hidden;margin:0;cursor:zoom-in;transition:transform .35s cubic-bezier(.4,0,.2,1),box-shadow .35s}
      .nuda-lightbox:hover{transform:scale(1.04);box-shadow:0 12px 40px -8px rgba(228,255,84,.25),0 8px 16px -4px rgba(0,0,0,.4)}
      .nuda-lightbox__img{position:absolute;inset:0;background-size:cover;background-position:center;transition:transform .6s cubic-bezier(.4,0,.2,1),filter .35s}
      .nuda-lightbox:hover .nuda-lightbox__img{transform:scale(1.08);filter:brightness(1.05) saturate(1.1)}
      .nuda-lightbox__icon{position:absolute;right:8px;top:8px;width:22px;height:22px;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.5);backdrop-filter:blur(4px);border-radius:6px;color:#fafafa;opacity:0;transform:scale(.8);transition:opacity .3s,transform .3s}
      .nuda-lightbox__icon svg{width:12px;height:12px}
      .nuda-lightbox:hover .nuda-lightbox__icon{opacity:1;transform:scale(1)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Lightbox Grow -->
<figure class="nuda-lightbox">
  <img class="nuda-lightbox__img" src="/your-image.jpg" alt="" />
  <span class="nuda-lightbox__icon" aria-hidden="true">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 3 L3 3 L3 8" />
      <path d="M16 3 L21 3 L21 8" />
      <path d="M8 21 L3 21 L3 16" />
      <path d="M16 21 L21 21 L21 16" />
    </svg>
  </span>
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Lightbox Grow
   Card scales up with a glow shadow + an "expand" hint icon appears.
   Pair with a real lightbox library on click.
   Customize: --lb-glow */

.nuda-lightbox {
  --lb-glow: rgba(228, 255, 84, 0.25);
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  margin: 0;
  cursor: zoom-in;
  transition:
    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.35s;
}

.nuda-lightbox:hover {
  transform: scale(1.04);
  box-shadow:
    0 12px 40px -8px var(--lb-glow),
    0 8px 16px -4px rgba(0, 0, 0, 0.4);
}

.nuda-lightbox__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition:
    transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    filter 0.35s;
}

.nuda-lightbox:hover .nuda-lightbox__img {
  transform: scale(1.08);
  filter: brightness(1.05) saturate(1.1);
}

.nuda-lightbox__icon {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 6px;
  color: #fafafa;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.3s, transform 0.3s;
}

.nuda-lightbox__icon svg { width: 14px; height: 14px; }

.nuda-lightbox:hover .nuda-lightbox__icon {
  opacity: 1;
  transform: scale(1);
}`,
      },
    ],
  },

  /* ─────────────── 10. Frame Reveal ─────────────── */
  {
    id: "frame-reveal",
    name: "Frame Reveal",
    category: "Image Effects",
    preview: (
      <figure className="nuda-frame">
        <div className="nuda-frame__img" style={{ backgroundImage: placeholder, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-frame__c nuda-frame__c--tl" />
        <span className="nuda-frame__c nuda-frame__c--tr" />
        <span className="nuda-frame__c nuda-frame__c--bl" />
        <span className="nuda-frame__c nuda-frame__c--br" />
      </figure>
    ),
    cssInline: `
      .nuda-frame{position:relative;width:120px;aspect-ratio:4/3;border-radius:10px;overflow:hidden;margin:0;padding:8px;background:transparent}
      .nuda-frame__img{position:absolute;inset:8px;background-size:cover;background-position:center;border-radius:6px;opacity:0;transform:scale(.96);animation:_fr-fade 1s cubic-bezier(.4,0,.2,1) .4s forwards}
      .nuda-frame__c{position:absolute;width:14px;height:14px;border:2px solid #e4ff54;opacity:0;animation:_fr-corner .6s cubic-bezier(.4,0,.2,1) forwards;filter:drop-shadow(0 0 4px rgba(228,255,84,.5))}
      .nuda-frame__c--tl{top:0;left:0;border-right:none;border-bottom:none;animation-delay:0s}
      .nuda-frame__c--tr{top:0;right:0;border-left:none;border-bottom:none;animation-delay:.1s}
      .nuda-frame__c--bl{bottom:0;left:0;border-right:none;border-top:none;animation-delay:.2s}
      .nuda-frame__c--br{bottom:0;right:0;border-left:none;border-top:none;animation-delay:.3s}
      @keyframes _fr-corner{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}
      @keyframes _fr-fade{to{opacity:1;transform:scale(1)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Frame Reveal -->
<figure class="nuda-frame">
  <img class="nuda-frame__img" src="/your-image.jpg" alt="" />
  <span class="nuda-frame__c nuda-frame__c--tl"></span>
  <span class="nuda-frame__c nuda-frame__c--tr"></span>
  <span class="nuda-frame__c nuda-frame__c--bl"></span>
  <span class="nuda-frame__c nuda-frame__c--br"></span>
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Frame Reveal
   Four corner brackets pop in, then the image fades up inside them.
   Great for portfolio tiles, gallery hero, etc.
   Customize: --frame-color, --frame-corner */

.nuda-frame {
  --frame-color: #e4ff54;
  --frame-corner: 16px;
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  margin: 0;
  padding: 10px;
}

.nuda-frame__img {
  position: absolute;
  inset: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  object-fit: cover;
  border-radius: 8px;
  opacity: 0;
  transform: scale(0.96);
  animation: nuda-frame-fade 1s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
}

.nuda-frame__c {
  position: absolute;
  width: var(--frame-corner);
  height: var(--frame-corner);
  border: 2px solid var(--frame-color);
  opacity: 0;
  filter: drop-shadow(0 0 4px rgba(228, 255, 84, 0.5));
  animation: nuda-frame-corner 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.nuda-frame__c--tl { top: 0;    left: 0;    border-right:  none; border-bottom: none; animation-delay: 0s; }
.nuda-frame__c--tr { top: 0;    right: 0;   border-left:   none; border-bottom: none; animation-delay: 0.1s; }
.nuda-frame__c--bl { bottom: 0; left: 0;    border-right:  none; border-top:    none; animation-delay: 0.2s; }
.nuda-frame__c--br { bottom: 0; right: 0;   border-left:   none; border-top:    none; animation-delay: 0.3s; }

@keyframes nuda-frame-corner {
  from { opacity: 0; transform: scale(0.4); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes nuda-frame-fade {
  to { opacity: 1; transform: scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-frame__img,
  .nuda-frame__c { opacity: 1; transform: none; animation: none; }
}`,
      },
    ],
  },
];
