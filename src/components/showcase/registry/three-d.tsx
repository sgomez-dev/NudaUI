import type { NudaComponent } from "./types";

export const threeDEffects: NudaComponent[] = [
  /* ─────────────── 3D CARD FLIP ─────────────── */
  {
    id: "3d-card-flip",
    name: "3D Card Flip",
    category: "3D Effects",
    preview: (
      <div className="nuda-card-flip">
        <div className="nuda-card-flip__inner">
          <div className="nuda-card-flip__front">
            <span style={{ fontSize: "0.8rem", color: "#ccc" }}>Front</span>
          </div>
          <div className="nuda-card-flip__back">
            <span style={{ fontSize: "0.8rem", color: "#0a0a0a" }}>Back</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-card-flip{--c:#e4ff54;width:120px;height:80px;perspective:600px;cursor:pointer}
      .nuda-card-flip__inner{position:relative;width:100%;height:100%;transition:transform .6s ease;transform-style:preserve-3d}
      .nuda-card-flip:hover .nuda-card-flip__inner{transform:rotateY(180deg)}
      .nuda-card-flip__front,.nuda-card-flip__back{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:10px;backface-visibility:hidden}
      .nuda-card-flip__front{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}
      .nuda-card-flip__back{background:var(--c);transform:rotateY(180deg)}
      @media(prefers-reduced-motion:reduce){.nuda-card-flip__inner{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-card-flip">
  <div class="nuda-card-flip__inner">
    <div class="nuda-card-flip__front">
      <p>Front side</p>
    </div>
    <div class="nuda-card-flip__back">
      <p>Back side</p>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* 3D Card Flip
   Card with perspective 3D flip on hover.
   Customize: --card-accent, --card-width, --card-height */

.nuda-card-flip {
  --card-accent: #e4ff54;
  --card-width: 200px;
  --card-height: 140px;
  width: var(--card-width);
  height: var(--card-height);
  perspective: 600px;
  cursor: pointer;
}

.nuda-card-flip__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}

.nuda-card-flip:hover .nuda-card-flip__inner {
  transform: rotateY(180deg);
}

.nuda-card-flip__front,
.nuda-card-flip__back {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  backface-visibility: hidden;
}

.nuda-card-flip__front {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ccc;
}

.nuda-card-flip__back {
  background: var(--card-accent);
  color: #0a0a0a;
  transform: rotateY(180deg);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-card-flip__inner {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── ROTATING CUBE ─────────────── */
  {
    id: "rotating-cube",
    name: "Rotating Cube",
    category: "3D Effects",
    preview: (
      <div className="nuda-cube-scene" aria-hidden="true">
        <div className="nuda-cube">
          <div className="nuda-cube__face nuda-cube__face--front">1</div>
          <div className="nuda-cube__face nuda-cube__face--back">2</div>
          <div className="nuda-cube__face nuda-cube__face--right">3</div>
          <div className="nuda-cube__face nuda-cube__face--left">4</div>
          <div className="nuda-cube__face nuda-cube__face--top">5</div>
          <div className="nuda-cube__face nuda-cube__face--bottom">6</div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cube-scene{width:60px;height:60px;perspective:200px;margin:20px auto}
      .nuda-cube{--c:#e4ff54;width:100%;height:100%;position:relative;transform-style:preserve-3d;animation:_cubespin 6s linear infinite}
      .nuda-cube__face{position:absolute;width:60px;height:60px;display:flex;align-items:center;justify-content:center;font-size:.75rem;font-weight:700;color:var(--c);border:1px solid rgba(228,255,84,.25);background:rgba(228,255,84,.04)}
      .nuda-cube__face--front{transform:translateZ(30px)}
      .nuda-cube__face--back{transform:rotateY(180deg) translateZ(30px)}
      .nuda-cube__face--right{transform:rotateY(90deg) translateZ(30px)}
      .nuda-cube__face--left{transform:rotateY(-90deg) translateZ(30px)}
      .nuda-cube__face--top{transform:rotateX(90deg) translateZ(30px)}
      .nuda-cube__face--bottom{transform:rotateX(-90deg) translateZ(30px)}
      @keyframes _cubespin{from{transform:rotateX(0) rotateY(0)}to{transform:rotateX(360deg) rotateY(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-cube{animation:none;transform:rotateX(-20deg) rotateY(30deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cube-scene" aria-hidden="true">
  <div class="nuda-cube">
    <div class="nuda-cube__face nuda-cube__face--front">1</div>
    <div class="nuda-cube__face nuda-cube__face--back">2</div>
    <div class="nuda-cube__face nuda-cube__face--right">3</div>
    <div class="nuda-cube__face nuda-cube__face--left">4</div>
    <div class="nuda-cube__face nuda-cube__face--top">5</div>
    <div class="nuda-cube__face nuda-cube__face--bottom">6</div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Rotating Cube
   CSS 3D cube that rotates continuously.
   Customize: --cube-size, --cube-color, --cube-speed */

.nuda-cube-scene {
  --cube-size: 80px;
  width: var(--cube-size);
  height: var(--cube-size);
  perspective: 250px;
  margin: 2rem auto;
}

.nuda-cube {
  --cube-color: #e4ff54;
  --cube-speed: 6s;
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: nuda-cube-spin var(--cube-speed) linear infinite;
}

.nuda-cube__face {
  position: absolute;
  width: var(--cube-size);
  height: var(--cube-size);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--cube-color);
  border: 1px solid rgba(228, 255, 84, 0.25);
  background: rgba(228, 255, 84, 0.04);
}

.nuda-cube__face--front  { transform: translateZ(calc(var(--cube-size) / 2)); }
.nuda-cube__face--back   { transform: rotateY(180deg) translateZ(calc(var(--cube-size) / 2)); }
.nuda-cube__face--right  { transform: rotateY(90deg) translateZ(calc(var(--cube-size) / 2)); }
.nuda-cube__face--left   { transform: rotateY(-90deg) translateZ(calc(var(--cube-size) / 2)); }
.nuda-cube__face--top    { transform: rotateX(90deg) translateZ(calc(var(--cube-size) / 2)); }
.nuda-cube__face--bottom { transform: rotateX(-90deg) translateZ(calc(var(--cube-size) / 2)); }

@keyframes nuda-cube-spin {
  from { transform: rotateX(0) rotateY(0); }
  to   { transform: rotateX(360deg) rotateY(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-cube {
    animation: none;
    transform: rotateX(-20deg) rotateY(30deg);
  }
}`,
      },
    ],
  },

  /* ─────────────── SPINNING GLOBE ─────────────── */
  {
    id: "spinning-globe",
    name: "Spinning Globe",
    category: "3D Effects",
    preview: (
      <div className="nuda-globe-scene" aria-hidden="true">
        <div className="nuda-globe">
          <div className="nuda-globe__sphere">
            <div className="nuda-globe__ring nuda-globe__ring--1" />
            <div className="nuda-globe__ring nuda-globe__ring--2" />
            <div className="nuda-globe__ring nuda-globe__ring--3" />
            <div className="nuda-globe__ring nuda-globe__ring--4" />
            <div className="nuda-globe__ring nuda-globe__ring--5" />
            <div className="nuda-globe__ring nuda-globe__ring--6" />
            <div className="nuda-globe__ring nuda-globe__ring--7" />
            <div className="nuda-globe__ring nuda-globe__ring--8" />
          </div>
          <div className="nuda-globe__axis" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-globe-scene{display:flex;align-items:center;justify-content:center;padding:1rem;perspective:600px}
      .nuda-globe{--c:#e4ff54;--size:110px;width:var(--size);height:var(--size);position:relative;transform-style:preserve-3d;animation:_gspin 8s linear infinite}
      .nuda-globe__sphere{position:absolute;inset:0;transform-style:preserve-3d}
      .nuda-globe__ring{position:absolute;inset:5%;border:1.2px solid rgba(228,255,84,.2);border-radius:50%;transform-style:preserve-3d}
      .nuda-globe__ring--1{transform:rotateY(0deg)}
      .nuda-globe__ring--2{transform:rotateY(22.5deg)}
      .nuda-globe__ring--3{transform:rotateY(45deg)}
      .nuda-globe__ring--4{transform:rotateY(67.5deg)}
      .nuda-globe__ring--5{transform:rotateY(90deg)}
      .nuda-globe__ring--6{transform:rotateY(112.5deg)}
      .nuda-globe__ring--7{transform:rotateY(135deg)}
      .nuda-globe__ring--8{transform:rotateY(157.5deg)}
      .nuda-globe__axis{position:absolute;top:5%;bottom:5%;left:50%;width:1.2px;background:rgba(228,255,84,.15);transform:translateX(-50%)}
      .nuda-globe::before{content:'';position:absolute;inset:-8%;border:1.2px solid rgba(228,255,84,.12);border-radius:50%;transform:rotateX(90deg)}
      .nuda-globe::after{content:'';position:absolute;top:50%;left:50%;width:60%;height:0;border-top:1.5px solid rgba(228,255,84,.25);transform:translate(-50%,-50%) rotateX(90deg);border-radius:50%}
      @keyframes _gspin{from{transform:rotateX(-20deg) rotateY(0deg)}to{transform:rotateX(-20deg) rotateY(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-globe{animation:none;transform:rotateX(-20deg) rotateY(30deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-globe-scene" aria-hidden="true">
  <div class="nuda-globe">
    <div class="nuda-globe__sphere">
      <!-- 8 meridian rings for true 3D wireframe -->
      <div class="nuda-globe__ring nuda-globe__ring--1"></div>
      <div class="nuda-globe__ring nuda-globe__ring--2"></div>
      <div class="nuda-globe__ring nuda-globe__ring--3"></div>
      <div class="nuda-globe__ring nuda-globe__ring--4"></div>
      <div class="nuda-globe__ring nuda-globe__ring--5"></div>
      <div class="nuda-globe__ring nuda-globe__ring--6"></div>
      <div class="nuda-globe__ring nuda-globe__ring--7"></div>
      <div class="nuda-globe__ring nuda-globe__ring--8"></div>
    </div>
    <!-- Axis line -->
    <div class="nuda-globe__axis"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Spinning Globe
   A true CSS 3D wireframe globe using preserve-3d and rotated rings.
   No canvas, no WebGL — just CSS transforms and perspective.
   Customize: --globe-color, --globe-size, --globe-speed */

.nuda-globe-scene {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  perspective: 800px;
}

.nuda-globe {
  --globe-color: #e4ff54;
  --globe-size: 180px;
  --globe-speed: 10s;
  width: var(--globe-size);
  height: var(--globe-size);
  position: relative;
  transform-style: preserve-3d;
  animation: nuda-globe-spin var(--globe-speed) linear infinite;
}

.nuda-globe__sphere {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
}

/* ── Meridian rings (true 3D circles rotated in Y) ── */
.nuda-globe__ring {
  position: absolute;
  inset: 5%;
  border: 1.2px solid rgba(228, 255, 84, 0.18);
  border-radius: 50%;
  transform-style: preserve-3d;
}

.nuda-globe__ring--1 { transform: rotateY(0deg); }
.nuda-globe__ring--2 { transform: rotateY(22.5deg); }
.nuda-globe__ring--3 { transform: rotateY(45deg); }
.nuda-globe__ring--4 { transform: rotateY(67.5deg); }
.nuda-globe__ring--5 { transform: rotateY(90deg); }
.nuda-globe__ring--6 { transform: rotateY(112.5deg); }
.nuda-globe__ring--7 { transform: rotateY(135deg); }
.nuda-globe__ring--8 { transform: rotateY(157.5deg); }

/* ── Axis line ── */
.nuda-globe__axis {
  position: absolute;
  top: 5%;
  bottom: 5%;
  left: 50%;
  width: 1.2px;
  background: rgba(228, 255, 84, 0.15);
  transform: translateX(-50%);
}

/* ── Equator ring (horizontal, rotated in X) ── */
.nuda-globe::before {
  content: '';
  position: absolute;
  inset: -2%;
  border: 1.2px solid rgba(228, 255, 84, 0.12);
  border-radius: 50%;
  transform: rotateX(90deg);
}

/* ── Tropic line ── */
.nuda-globe::after {
  content: '';
  position: absolute;
  inset: 15%;
  border: 1px solid rgba(228, 255, 84, 0.1);
  border-radius: 50%;
  transform: rotateX(90deg);
}

/* ── Spin animation (tilted axis like Earth) ── */
@keyframes nuda-globe-spin {
  from { transform: rotateX(-20deg) rotateY(0deg); }
  to   { transform: rotateX(-20deg) rotateY(360deg); }
}

/* ── Hover: slow down for inspection ── */
.nuda-globe:hover {
  animation-duration: calc(var(--globe-speed) * 3);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-globe {
    animation: none;
    transform: rotateX(-20deg) rotateY(30deg);
  }
}`,
      },
    ],
  },

  /* ─────────────── PERSPECTIVE TILT ─────────────── */
  {
    id: "perspective-tilt",
    name: "Perspective Tilt",
    category: "3D Effects",
    preview: (
      <div className="nuda-tilt" style={{ perspective: 400 }}>
        <div className="nuda-tilt__card">
          <span style={{ color: "#ccc", fontSize: "0.8rem" }}>Hover to tilt</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tilt{perspective:400px;display:inline-block}
      .nuda-tilt__card{--c:#e4ff54;width:140px;height:90px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;display:flex;align-items:center;justify-content:center;transition:transform .15s ease,box-shadow .15s ease;cursor:pointer}
      .nuda-tilt__card:hover{box-shadow:0 8px 30px rgba(228,255,84,.08)}
      @media(prefers-reduced-motion:reduce){.nuda-tilt__card{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tilt" style="perspective: 600px">
  <div class="nuda-tilt__card">
    <p>Hover to tilt in 3D</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Perspective Tilt
   Element that tilts toward the cursor in 3D on hover.
   Customize: --tilt-max (degrees), --tilt-speed */

.nuda-tilt {
  perspective: 600px;
  display: inline-block;
}

.nuda-tilt__card {
  --tilt-max: 15deg;
  --tilt-speed: 0.15s;
  width: 200px;
  height: 140px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  font-size: 0.85rem;
  transition: transform var(--tilt-speed) ease, box-shadow var(--tilt-speed) ease;
  cursor: pointer;
  will-change: transform;
}

.nuda-tilt__card:hover {
  box-shadow: 0 10px 40px rgba(228, 255, 84, 0.08);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-tilt__card {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Perspective Tilt — Tilts the card toward the cursor position. */

(function () {
  var cards = document.querySelectorAll('.nuda-tilt__card');
  if (!cards.length) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  var maxDeg = 15;

  cards.forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      var rect = card.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;   // 0 to 1
      var y = (e.clientY - rect.top) / rect.height;    // 0 to 1
      var rotateX = (0.5 - y) * maxDeg * 2;            // tilt up/down
      var rotateY = (x - 0.5) * maxDeg * 2;            // tilt left/right
      card.style.transform =
        'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 3D BUTTON ─────────────── */
  {
    id: "3d-button",
    name: "3D Button",
    category: "3D Effects",
    preview: (
      <button className="nuda-3d-btn" type="button">
        Click me
      </button>
    ),
    cssInline: `
      .nuda-3d-btn{--c:#e4ff54;--shadow:#8fa324;position:relative;background:var(--c);color:#0a0a0a;font-size:.82rem;font-weight:700;padding:.55rem 1.5rem;border:none;border-radius:10px;cursor:pointer;box-shadow:0 4px 0 var(--shadow);transform:translateY(0);transition:transform .1s ease,box-shadow .1s ease}
      .nuda-3d-btn:hover{transform:translateY(-1px);box-shadow:0 5px 0 var(--shadow)}
      .nuda-3d-btn:active{transform:translateY(3px);box-shadow:0 1px 0 var(--shadow)}
      @media(prefers-reduced-motion:reduce){.nuda-3d-btn{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-3d-btn" type="button">Click me</button>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* 3D Button
   Button with a 3D press/depth effect using box-shadow.
   Customize: --btn-color, --btn-shadow, --btn-text */

.nuda-3d-btn {
  --btn-color: #e4ff54;
  --btn-shadow: #8fa324;
  --btn-text: #0a0a0a;
  position: relative;
  background: var(--btn-color);
  color: var(--btn-text);
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.65rem 1.75rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 0 var(--btn-shadow);
  transform: translateY(0);
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;
}

.nuda-3d-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 5px 0 var(--btn-shadow);
}

.nuda-3d-btn:active {
  transform: translateY(3px);
  box-shadow: 0 1px 0 var(--btn-shadow);
}

.nuda-3d-btn:focus-visible {
  outline: 2px solid var(--btn-color);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-3d-btn {
    transition: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── 3D RING ─────────────── */
  {
    id: "3d-ring",
    name: "3D Ring",
    category: "3D Effects",
    preview: (
      <div className="nuda-ring-scene" aria-hidden="true">
        <div className="nuda-ring">
          <div className="nuda-ring__segment nuda-ring__segment--1" />
          <div className="nuda-ring__segment nuda-ring__segment--2" />
          <div className="nuda-ring__segment nuda-ring__segment--3" />
          <div className="nuda-ring__segment nuda-ring__segment--4" />
          <div className="nuda-ring__segment nuda-ring__segment--5" />
          <div className="nuda-ring__segment nuda-ring__segment--6" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-ring-scene{display:flex;align-items:center;justify-content:center;perspective:400px;padding:1rem}
      .nuda-ring{--c:#e4ff54;width:80px;height:80px;position:relative;transform-style:preserve-3d;animation:_ringspin 6s linear infinite}
      .nuda-ring__segment{position:absolute;inset:0;border:2px solid rgba(228,255,84,.2);border-radius:50%;transform-style:preserve-3d}
      .nuda-ring__segment--1{transform:rotateX(0deg)}
      .nuda-ring__segment--2{transform:rotateX(30deg)}
      .nuda-ring__segment--3{transform:rotateX(60deg)}
      .nuda-ring__segment--4{transform:rotateX(90deg)}
      .nuda-ring__segment--5{transform:rotateX(120deg)}
      .nuda-ring__segment--6{transform:rotateX(150deg)}
      @keyframes _ringspin{from{transform:rotateY(0deg) rotateX(0deg)}to{transform:rotateY(360deg) rotateX(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-ring{animation:none;transform:rotateY(30deg) rotateX(30deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ring-scene" aria-hidden="true">
  <div class="nuda-ring">
    <div class="nuda-ring__segment nuda-ring__segment--1"></div>
    <div class="nuda-ring__segment nuda-ring__segment--2"></div>
    <div class="nuda-ring__segment nuda-ring__segment--3"></div>
    <div class="nuda-ring__segment nuda-ring__segment--4"></div>
    <div class="nuda-ring__segment nuda-ring__segment--5"></div>
    <div class="nuda-ring__segment nuda-ring__segment--6"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* 3D Ring
   Wireframe sphere made of rotated circles.
   Customize: --ring-color, --ring-size, --ring-speed */

.nuda-ring-scene {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 400px;
  padding: 2rem;
}

.nuda-ring {
  --ring-color: #e4ff54;
  --ring-size: 100px;
  --ring-speed: 6s;
  width: var(--ring-size);
  height: var(--ring-size);
  position: relative;
  transform-style: preserve-3d;
  animation: nuda-ring-spin var(--ring-speed) linear infinite;
}

.nuda-ring__segment {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(228, 255, 84, 0.2);
  border-radius: 50%;
  transform-style: preserve-3d;
}

.nuda-ring__segment--1 { transform: rotateX(0deg); }
.nuda-ring__segment--2 { transform: rotateX(30deg); }
.nuda-ring__segment--3 { transform: rotateX(60deg); }
.nuda-ring__segment--4 { transform: rotateX(90deg); }
.nuda-ring__segment--5 { transform: rotateX(120deg); }
.nuda-ring__segment--6 { transform: rotateX(150deg); }

@keyframes nuda-ring-spin {
  from { transform: rotateY(0deg) rotateX(0deg); }
  to { transform: rotateY(360deg) rotateX(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-ring {
    animation: none;
    transform: rotateY(30deg) rotateX(30deg);
  }
}`,
      },
    ],
  },

  /* ─────────────── 3D PYRAMID ─────────────── */
  {
    id: "3d-pyramid",
    name: "3D Pyramid",
    category: "3D Effects",
    preview: (
      <div className="nuda-pyramid-scene" aria-hidden="true">
        <div className="nuda-pyramid">
          <div className="nuda-pyramid__face nuda-pyramid__face--front" />
          <div className="nuda-pyramid__face nuda-pyramid__face--right" />
          <div className="nuda-pyramid__face nuda-pyramid__face--back" />
          <div className="nuda-pyramid__face nuda-pyramid__face--left" />
          <div className="nuda-pyramid__base" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-pyramid-scene{display:flex;align-items:center;justify-content:center;perspective:300px;padding:1rem}
      .nuda-pyramid{--c:#e4ff54;width:60px;height:60px;position:relative;transform-style:preserve-3d;animation:_pyrspin 8s linear infinite;transform-origin:center 60%}
      .nuda-pyramid__face{position:absolute;width:0;height:0;border-left:30px solid transparent;border-right:30px solid transparent;border-bottom:52px solid rgba(228,255,84,.06);transform-origin:bottom center}
      .nuda-pyramid__face--front{left:0;bottom:0;transform:rotateX(30deg) translateZ(17px)}
      .nuda-pyramid__face--right{left:0;bottom:0;transform:rotateY(90deg) rotateX(30deg) translateZ(17px)}
      .nuda-pyramid__face--back{left:0;bottom:0;transform:rotateY(180deg) rotateX(30deg) translateZ(17px)}
      .nuda-pyramid__face--left{left:0;bottom:0;transform:rotateY(-90deg) rotateX(30deg) translateZ(17px)}
      .nuda-pyramid__base{position:absolute;bottom:0;left:0;width:60px;height:60px;background:rgba(228,255,84,.04);border:1px solid rgba(228,255,84,.1);transform:rotateX(90deg) translateZ(0px)}
      @keyframes _pyrspin{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-pyramid{animation:none;transform:rotateY(30deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-pyramid-scene" aria-hidden="true">
  <div class="nuda-pyramid">
    <div class="nuda-pyramid__face nuda-pyramid__face--front"></div>
    <div class="nuda-pyramid__face nuda-pyramid__face--right"></div>
    <div class="nuda-pyramid__face nuda-pyramid__face--back"></div>
    <div class="nuda-pyramid__face nuda-pyramid__face--left"></div>
    <div class="nuda-pyramid__base"></div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* 3D Pyramid
   Rotating wireframe pyramid using CSS 3D transforms.
   Customize: --pyr-color, --pyr-size, --pyr-speed */

.nuda-pyramid-scene {
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 400px;
  padding: 2rem;
}

.nuda-pyramid {
  --pyr-color: #e4ff54;
  --pyr-size: 80px;
  --pyr-speed: 8s;
  width: var(--pyr-size);
  height: var(--pyr-size);
  position: relative;
  transform-style: preserve-3d;
  animation: nuda-pyr-spin var(--pyr-speed) linear infinite;
  transform-origin: center 60%;
}

.nuda-pyramid__face {
  position: absolute;
  width: 0;
  height: 0;
  border-left: calc(var(--pyr-size) / 2) solid transparent;
  border-right: calc(var(--pyr-size) / 2) solid transparent;
  border-bottom: calc(var(--pyr-size) * 0.87) solid rgba(228, 255, 84, 0.06);
  transform-origin: bottom center;
}

.nuda-pyramid__face--front { left: 0; bottom: 0; transform: rotateX(30deg) translateZ(calc(var(--pyr-size) * 0.29)); }
.nuda-pyramid__face--right { left: 0; bottom: 0; transform: rotateY(90deg) rotateX(30deg) translateZ(calc(var(--pyr-size) * 0.29)); }
.nuda-pyramid__face--back  { left: 0; bottom: 0; transform: rotateY(180deg) rotateX(30deg) translateZ(calc(var(--pyr-size) * 0.29)); }
.nuda-pyramid__face--left  { left: 0; bottom: 0; transform: rotateY(-90deg) rotateX(30deg) translateZ(calc(var(--pyr-size) * 0.29)); }

.nuda-pyramid__base {
  position: absolute;
  bottom: 0;
  left: 0;
  width: var(--pyr-size);
  height: var(--pyr-size);
  background: rgba(228, 255, 84, 0.04);
  border: 1px solid rgba(228, 255, 84, 0.1);
  transform: rotateX(90deg);
}

@keyframes nuda-pyr-spin {
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-pyramid {
    animation: none;
    transform: rotateX(-10deg) rotateY(30deg);
  }
}`,
      },
    ],
  },

  /* ─────────────── 3D FLOAT CARD ─────────────── */
  {
    id: "3d-float-card",
    name: "3D Float Card",
    category: "3D Effects",
    preview: (
      <div className="nuda-float3d-scene" aria-hidden="true">
        <div className="nuda-float3d">
          <span style={{ color: "#ccc", fontSize: "0.75rem" }}>Float</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-float3d-scene{display:flex;align-items:center;justify-content:center;perspective:600px;padding:1rem}
      .nuda-float3d{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:1.5rem 2rem;display:flex;align-items:center;justify-content:center;animation:_float3d 4s ease-in-out infinite;will-change:transform}
      @keyframes _float3d{0%{transform:rotateX(2deg) rotateY(-3deg) translateY(0)}25%{transform:rotateX(-2deg) rotateY(3deg) translateY(-6px)}50%{transform:rotateX(3deg) rotateY(2deg) translateY(-2px)}75%{transform:rotateX(-1deg) rotateY(-2deg) translateY(-8px)}100%{transform:rotateX(2deg) rotateY(-3deg) translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-float3d{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-float3d-scene">
  <div class="nuda-float3d">
    <p>Floating 3D Card</p>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* 3D Float Card
   Card with gentle 3D floating/breathing animation.
   Customize: --float-speed */

.nuda-float3d-scene {
  perspective: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.nuda-float3d {
  --float-speed: 4s;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 2rem 2.5rem;
  color: #ccc;
  animation: nuda-float3d var(--float-speed) ease-in-out infinite;
  will-change: transform;
}

@keyframes nuda-float3d {
  0%   { transform: rotateX(2deg) rotateY(-3deg) translateY(0); }
  25%  { transform: rotateX(-2deg) rotateY(3deg) translateY(-8px); }
  50%  { transform: rotateX(3deg) rotateY(2deg) translateY(-3px); }
  75%  { transform: rotateX(-1deg) rotateY(-2deg) translateY(-10px); }
  100% { transform: rotateX(2deg) rotateY(-3deg) translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-float3d { animation: none; }
}`,
      },
    ],
  },
];
