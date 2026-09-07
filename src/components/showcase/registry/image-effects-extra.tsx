import type { NudaComponent } from "./types";

const CAT = "Image Effects";

/* Reusable inline placeholder photo so the registry doesn't depend on assets.
   Drop in <img src="..."> in your project and remove the gradient background. */
const photo = `linear-gradient(135deg,#1a1a1f 0%,#242424 50%,#0e0e10 100%),
               radial-gradient(circle at 30% 30%,rgba(228,255,84,.35),transparent 50%),
               radial-gradient(circle at 70% 70%,rgba(228,255,84,.15),transparent 60%)`;

export const imageEffectsExtra: NudaComponent[] = [
  /* ─────────────── 1. Before/After Wipe ─────────────── */
  {
    id: "ie2-compare",
    name: "Before/After Wipe",
    category: CAT,
    preview: (
      <figure className="nuda-ie2-compare" role="img" aria-label="Before and after photo comparison">
        <div className="nuda-ie2-compare__after" style={{ backgroundImage: photo, backgroundBlendMode: "overlay,normal,normal" }} />
        <div className="nuda-ie2-compare__before" style={{ backgroundImage: photo, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-ie2-compare__tag nuda-ie2-compare__tag--before" aria-hidden="true">BEFORE</span>
        <span className="nuda-ie2-compare__tag nuda-ie2-compare__tag--after" aria-hidden="true">AFTER</span>
        <span className="nuda-ie2-compare__handle" aria-hidden="true" />
      </figure>
    ),
    cssInline: `
      .nuda-ie2-compare{position:relative;width:200px;height:140px;border-radius:10px;overflow:hidden;background:#0a0a0a;margin:0}
      .nuda-ie2-compare__after{position:absolute;inset:0;background-size:cover;background-position:center;filter:saturate(1.15) contrast(1.05)}
      .nuda-ie2-compare__before{position:absolute;inset:0;background-size:cover;background-position:center;filter:grayscale(100%) brightness(.85);clip-path:inset(0 0 0 0);animation:nuda-ie2-compare-wipe 6s ease-in-out infinite;will-change:clip-path}
      .nuda-ie2-compare__handle{position:absolute;top:0;bottom:0;left:0;width:2px;background:#e4ff54;box-shadow:0 0 8px rgba(228,255,84,.6);transform:translateX(100px);animation:nuda-ie2-compare-handle 6s ease-in-out infinite;will-change:transform}
      .nuda-ie2-compare__handle::after{content:"";position:absolute;top:50%;left:50%;width:20px;height:20px;border-radius:50%;background:#e4ff54;transform:translate(-50%,-50%);box-shadow:0 2px 6px rgba(0,0,0,.5)}
      .nuda-ie2-compare__tag{position:absolute;top:6px;font:700 8px ui-sans-serif,system-ui;letter-spacing:.08em;padding:2px 6px;border-radius:3px;color:#0a0a0a;background:#e4ff54}
      .nuda-ie2-compare__tag--before{left:6px}
      .nuda-ie2-compare__tag--after{right:6px;background:rgba(255,255,255,.85)}
      @keyframes nuda-ie2-compare-wipe{0%,100%{clip-path:inset(0 0 0 0)}50%{clip-path:inset(0 100% 0 0)}}
      @keyframes nuda-ie2-compare-handle{0%,100%{transform:translateX(200px)}50%{transform:translateX(0px)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ie2-compare__before{animation:none !important;clip-path:inset(0 50% 0 0)}
        .nuda-ie2-compare__handle{animation:none !important;transform:translateX(100px)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Before/After Wipe -->
<figure class="nuda-ie2-compare" role="img" aria-label="Before and after photo comparison">
  <img class="nuda-ie2-compare__after" src="/your-image-after.jpg" alt="" aria-hidden="true" />
  <img class="nuda-ie2-compare__before" src="/your-image-before.jpg" alt="" aria-hidden="true" />
  <span class="nuda-ie2-compare__tag nuda-ie2-compare__tag--before" aria-hidden="true">BEFORE</span>
  <span class="nuda-ie2-compare__tag nuda-ie2-compare__tag--after" aria-hidden="true">AFTER</span>
  <span class="nuda-ie2-compare__handle" aria-hidden="true"></span>
</figure>`,
      },
    ],
  },

  /* ─────────────── 2. Spotlight Reveal ─────────────── */
  {
    id: "ie2-spotlight",
    name: "Spotlight Reveal",
    category: CAT,
    preview: (
      <figure className="nuda-ie2-spotlight">
        <div className="nuda-ie2-spotlight__dim" style={{ backgroundImage: photo, backgroundBlendMode: "overlay,normal,normal" }} />
        <div className="nuda-ie2-spotlight__bright" style={{ backgroundImage: photo, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-ie2-spotlight__hint" aria-hidden="true">Hover</span>
      </figure>
    ),
    cssInline: `
      .nuda-ie2-spotlight{position:relative;width:200px;height:140px;border-radius:10px;overflow:hidden;background:#000;cursor:pointer;margin:0}
      .nuda-ie2-spotlight__dim{position:absolute;inset:0;background-size:cover;background-position:center;filter:grayscale(60%) brightness(.45) contrast(1.05)}
      .nuda-ie2-spotlight__bright{position:absolute;inset:0;background-size:cover;background-position:center;filter:saturate(1.1) brightness(1.05);-webkit-mask-image:radial-gradient(circle 46px,#000 55%,transparent 100%);mask-image:radial-gradient(circle 46px,#000 55%,transparent 100%);-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:-10% 20%;mask-position:-10% 20%;animation:_nuda-ie2spotlight 7s ease-in-out infinite;will-change:mask-position}
      .nuda-ie2-spotlight__hint{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);font:700 8px ui-sans-serif,system-ui;letter-spacing:.08em;text-transform:uppercase;color:#fafafa;text-shadow:0 1px 4px rgba(0,0,0,.7);opacity:.75;pointer-events:none}
      @keyframes _nuda-ie2spotlight{0%,100%{-webkit-mask-position:-10% 20%;mask-position:-10% 20%}50%{-webkit-mask-position:110% 85%;mask-position:110% 85%}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ie2-spotlight__bright{animation:none !important;-webkit-mask-position:50% 50%;mask-position:50% 50%}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Spotlight Reveal — pans automatically; add the JS tab for pointer-tracking -->
<figure class="nuda-ie2-spotlight">
  <img class="nuda-ie2-spotlight__dim" src="/your-image.jpg" alt="Photo" />
  <img class="nuda-ie2-spotlight__bright" src="/your-image.jpg" alt="" aria-hidden="true" />
  <span class="nuda-ie2-spotlight__hint" aria-hidden="true">Hover</span>
</figure>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Spotlight Reveal — pointer-tracked variant.
   Drop this in to make the spotlight follow the cursor. */

(function () {
  document.querySelectorAll('.nuda-ie2-spotlight').forEach(function (el) {
    var bright = el.querySelector('.nuda-ie2-spotlight__bright');
    if (!bright) return;

    el.addEventListener('pointermove', function (e) {
      var r = el.getBoundingClientRect();
      var x = ((e.clientX - r.left) / r.width) * 100;
      var y = ((e.clientY - r.top) / r.height) * 100;
      bright.style.animation = 'none';
      bright.style.webkitMaskPosition = x + '% ' + y + '%';
      bright.style.maskPosition = x + '% ' + y + '%';
    });

    el.addEventListener('pointerleave', function () {
      bright.style.animation = '';
      bright.style.webkitMaskPosition = '';
      bright.style.maskPosition = '';
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 3. Shutter Blinds Reveal ─────────────── */
  {
    id: "ie2-blinds",
    name: "Shutter Blinds Reveal",
    category: CAT,
    preview: (
      <figure className="nuda-ie2-blinds">
        <div className="nuda-ie2-blinds__img" style={{ backgroundImage: photo, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-ie2-blinds__slat" style={{ top: "0px", animationDelay: "0s" }} />
        <span className="nuda-ie2-blinds__slat" style={{ top: "20px", animationDelay: ".08s" }} />
        <span className="nuda-ie2-blinds__slat" style={{ top: "40px", animationDelay: ".16s" }} />
        <span className="nuda-ie2-blinds__slat" style={{ top: "60px", animationDelay: ".24s" }} />
        <span className="nuda-ie2-blinds__slat" style={{ top: "80px", animationDelay: ".32s" }} />
        <span className="nuda-ie2-blinds__slat" style={{ top: "100px", animationDelay: ".4s" }} />
        <span className="nuda-ie2-blinds__slat" style={{ top: "120px", animationDelay: ".48s" }} />
      </figure>
    ),
    cssInline: `
      .nuda-ie2-blinds{position:relative;width:200px;height:140px;overflow:hidden;border-radius:10px;background:#0a0a0a;margin:0}
      .nuda-ie2-blinds__img{position:absolute;inset:0;background-size:cover;background-position:center}
      .nuda-ie2-blinds__slat{position:absolute;left:0;right:0;height:20px;background:#0a0a0a;transform:scaleY(1);transform-origin:50% 50%;animation:_nuda-ie2blinds 4s ease-in-out infinite;will-change:transform}
      @keyframes _nuda-ie2blinds{0%,12%{transform:scaleY(1)}45%,75%{transform:scaleY(0)}100%{transform:scaleY(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ie2-blinds__slat{animation:none !important;transform:scaleY(0)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Shutter Blinds Reveal -->
<figure class="nuda-ie2-blinds">
  <img class="nuda-ie2-blinds__img" src="/your-image.jpg" alt="" />
  <span class="nuda-ie2-blinds__slat" style="top:0px;animation-delay:0s"></span>
  <span class="nuda-ie2-blinds__slat" style="top:20px;animation-delay:.08s"></span>
  <span class="nuda-ie2-blinds__slat" style="top:40px;animation-delay:.16s"></span>
  <span class="nuda-ie2-blinds__slat" style="top:60px;animation-delay:.24s"></span>
  <span class="nuda-ie2-blinds__slat" style="top:80px;animation-delay:.32s"></span>
  <span class="nuda-ie2-blinds__slat" style="top:100px;animation-delay:.4s"></span>
  <span class="nuda-ie2-blinds__slat" style="top:120px;animation-delay:.48s"></span>
</figure>`,
      },
    ],
  },

  /* ─────────────── 4. Iris Reveal ─────────────── */
  {
    id: "ie2-iris",
    name: "Iris Reveal",
    category: CAT,
    preview: (
      <figure className="nuda-ie2-iris">
        <div className="nuda-ie2-iris__img" style={{ backgroundImage: photo, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-ie2-iris__blades" aria-hidden="true" />
      </figure>
    ),
    cssInline: `
      .nuda-ie2-iris{position:relative;width:200px;height:140px;border-radius:10px;overflow:hidden;background:#0a0a0a;margin:0}
      .nuda-ie2-iris__img{position:absolute;inset:0;background-size:cover;background-position:center;clip-path:circle(0% at 50% 50%);animation:nuda-ie2-iris-open 5s ease-in-out infinite;will-change:clip-path}
      .nuda-ie2-iris__blades{position:absolute;inset:0;background:repeating-conic-gradient(#0a0a0a 0deg 15deg,transparent 15deg 30deg);opacity:.45;mix-blend-mode:multiply;animation:nuda-ie2-iris-spin 5s linear infinite;pointer-events:none}
      @keyframes nuda-ie2-iris-open{0%,8%{clip-path:circle(0% at 50% 50%)}50%,62%{clip-path:circle(75% at 50% 50%)}100%{clip-path:circle(0% at 50% 50%)}}
      @keyframes nuda-ie2-iris-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ie2-iris__img{animation:none !important;clip-path:circle(75% at 50% 50%)}
        .nuda-ie2-iris__blades{animation:none !important;opacity:.15}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Iris Reveal -->
<figure class="nuda-ie2-iris">
  <img class="nuda-ie2-iris__img" src="/your-image.jpg" alt="" />
  <span class="nuda-ie2-iris__blades" aria-hidden="true"></span>
</figure>`,
      },
    ],
  },

  /* ─────────────── 5. Duotone Hover ─────────────── */
  {
    id: "ie2-duotone",
    name: "Duotone Hover",
    category: CAT,
    preview: (
      <figure className="nuda-ie2-duotone">
        <div className="nuda-ie2-duotone__img" style={{ backgroundImage: photo, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-ie2-duotone__tint" aria-hidden="true" />
      </figure>
    ),
    cssInline: `
      .nuda-ie2-duotone{position:relative;width:200px;height:140px;border-radius:10px;overflow:hidden;margin:0;cursor:pointer}
      .nuda-ie2-duotone__img{position:absolute;inset:0;background-size:cover;background-position:center;filter:grayscale(100%) contrast(1.2);transition:filter .6s ease}
      .nuda-ie2-duotone__tint{position:absolute;inset:0;background:linear-gradient(135deg,#e4ff54,#0a0a0a);mix-blend-mode:color;opacity:1;transition:opacity .6s ease}
      .nuda-ie2-duotone:hover .nuda-ie2-duotone__img{filter:grayscale(0%) contrast(1)}
      .nuda-ie2-duotone:hover .nuda-ie2-duotone__tint{opacity:0}
      @media (prefers-reduced-motion:reduce){
        .nuda-ie2-duotone__img,.nuda-ie2-duotone__tint{transition:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Duotone Hover -->
<figure class="nuda-ie2-duotone">
  <img class="nuda-ie2-duotone__img" src="/your-image.jpg" alt="" />
  <span class="nuda-ie2-duotone__tint" aria-hidden="true"></span>
</figure>`,
      },
    ],
  },

  /* ─────────────── 6. Polaroid Develop ─────────────── */
  {
    id: "ie2-polaroid",
    name: "Polaroid Develop",
    category: CAT,
    preview: (
      <figure className="nuda-ie2-polaroid">
        <div className="nuda-ie2-polaroid__photo">
          <div className="nuda-ie2-polaroid__img" style={{ backgroundImage: photo, backgroundBlendMode: "overlay,normal,normal" }} />
        </div>
        <figcaption className="nuda-ie2-polaroid__label">Summer, 1998</figcaption>
      </figure>
    ),
    cssInline: `
      .nuda-ie2-polaroid{width:170px;padding:10px 10px 30px;margin:0;background:#f2efe6;border-radius:2px;box-shadow:0 10px 24px -8px rgba(0,0,0,.55)}
      .nuda-ie2-polaroid__photo{position:relative;width:100%;aspect-ratio:4/3;overflow:hidden;background:#111}
      .nuda-ie2-polaroid__img{position:absolute;inset:0;background-size:cover;background-position:center;filter:grayscale(100%) brightness(.35) contrast(1.25);opacity:.35;animation:_nuda-ie2polaroid 7s ease-in-out infinite;will-change:filter,opacity}
      .nuda-ie2-polaroid__label{display:block;margin-top:8px;text-align:center;font:italic 600 11px Georgia,serif;color:#333}
      @keyframes _nuda-ie2polaroid{0%,10%{opacity:.35;filter:grayscale(100%) brightness(.35) contrast(1.25)}70%,90%{opacity:1;filter:grayscale(0%) brightness(1) contrast(1)}100%{opacity:.35;filter:grayscale(100%) brightness(.35) contrast(1.25)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ie2-polaroid__img{animation:none !important;opacity:1;filter:grayscale(0%) brightness(1) contrast(1)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Polaroid Develop -->
<figure class="nuda-ie2-polaroid">
  <div class="nuda-ie2-polaroid__photo">
    <img class="nuda-ie2-polaroid__img" src="/your-image.jpg" alt="" />
  </div>
  <figcaption class="nuda-ie2-polaroid__label">Summer, 1998</figcaption>
</figure>`,
      },
    ],
  },

  /* ─────────────── 7. Corner Peel ─────────────── */
  {
    id: "ie2-peel",
    name: "Corner Peel",
    category: CAT,
    preview: (
      <figure className="nuda-ie2-peel">
        <div className="nuda-ie2-peel__img" style={{ backgroundImage: photo, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-ie2-peel__flap" aria-hidden="true" />
      </figure>
    ),
    cssInline: `
      .nuda-ie2-peel{position:relative;width:200px;height:140px;overflow:hidden;border-radius:10px;margin:0}
      .nuda-ie2-peel__img{position:absolute;inset:0;background-size:cover;background-position:center}
      .nuda-ie2-peel__flap{position:absolute;right:0;top:0;width:56px;height:56px;background:linear-gradient(135deg,#eee 0%,#bbb 45%,#888 100%);clip-path:polygon(100% 0,0 0,100% 100%);transform:rotate(0deg) translate(0,0);transform-origin:100% 0%;box-shadow:-2px 2px 6px rgba(0,0,0,.35);transition:transform .5s cubic-bezier(.4,0,.2,1),box-shadow .5s}
      .nuda-ie2-peel:hover .nuda-ie2-peel__flap{transform:rotate(-16deg) translate(-6px,6px);box-shadow:-10px 12px 18px rgba(0,0,0,.5)}
      @media (prefers-reduced-motion:reduce){
        .nuda-ie2-peel__flap{transition:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Corner Peel -->
<figure class="nuda-ie2-peel">
  <img class="nuda-ie2-peel__img" src="/your-image.jpg" alt="" />
  <span class="nuda-ie2-peel__flap" aria-hidden="true"></span>
</figure>`,
      },
    ],
  },

  /* ─────────────── 8. Halftone Hover ─────────────── */
  {
    id: "ie2-halftone",
    name: "Halftone Hover",
    category: CAT,
    preview: (
      <figure className="nuda-ie2-halftone">
        <div className="nuda-ie2-halftone__img" style={{ backgroundImage: photo, backgroundBlendMode: "overlay,normal,normal" }} />
        <span className="nuda-ie2-halftone__dots" aria-hidden="true" />
      </figure>
    ),
    cssInline: `
      .nuda-ie2-halftone{position:relative;width:200px;height:140px;border-radius:10px;overflow:hidden;margin:0;cursor:pointer;background:#0a0a0a}
      .nuda-ie2-halftone__img{position:absolute;inset:0;background-size:cover;background-position:center;filter:contrast(1.1)}
      .nuda-ie2-halftone__dots{position:absolute;inset:0;background-image:radial-gradient(circle,#09090b 40%,transparent 42%);background-size:8px 8px;opacity:.9;transition:opacity .5s ease;animation:_nuda-ie2halftone 9s linear infinite;will-change:background-position}
      .nuda-ie2-halftone:hover .nuda-ie2-halftone__dots{opacity:0}
      @keyframes _nuda-ie2halftone{0%{background-position:0 0}100%{background-position:8px 8px}}
      @media (prefers-reduced-motion:reduce){
        .nuda-ie2-halftone__dots{animation:none !important;background-position:0 0}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Halftone Hover -->
<figure class="nuda-ie2-halftone">
  <img class="nuda-ie2-halftone__img" src="/your-image.jpg" alt="" />
  <span class="nuda-ie2-halftone__dots" aria-hidden="true"></span>
</figure>`,
      },
    ],
  },
];
