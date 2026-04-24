import type { NudaComponent } from "./types";

export const cursors: NudaComponent[] = [
  /* ─────────────── CURSOR TRAIL ─────────────── */
  {
    id: "cursor-trail",
    name: "Cursor Trail",
    category: "Cursors",
    preview: (
      <div className="nuda-cursor-trail-demo" aria-hidden="true" style={{ position: "relative", width: "100%", height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#666", fontSize: "0.75rem" }}>Cursor Trail</span>
        <div className="nuda-cursor-trail__dot nuda-cursor-trail__dot--anim" style={{ left: "20%", top: "60%" }} />
        <div className="nuda-cursor-trail__dot nuda-cursor-trail__dot--anim" style={{ left: "30%", top: "50%", animationDelay: "0.15s" }} />
        <div className="nuda-cursor-trail__dot nuda-cursor-trail__dot--anim" style={{ left: "40%", top: "40%", animationDelay: "0.3s" }} />
        <div className="nuda-cursor-trail__dot nuda-cursor-trail__dot--anim" style={{ left: "50%", top: "35%", animationDelay: "0.45s" }} />
        <div className="nuda-cursor-trail__dot nuda-cursor-trail__dot--anim" style={{ left: "60%", top: "40%", animationDelay: "0.6s" }} />
        <div className="nuda-cursor-trail__dot nuda-cursor-trail__dot--anim" style={{ left: "70%", top: "50%", animationDelay: "0.75s" }} />
      </div>
    ),
    cssInline: `
      .nuda-cursor-trail-demo{position:relative;overflow:hidden;border-radius:8px}
      .nuda-cursor-trail__dot{--c:#e4ff54;position:absolute;width:8px;height:8px;background:var(--c);border-radius:50%;pointer-events:none}
      .nuda-cursor-trail__dot--anim{animation:_ctpath 2.5s ease-in-out infinite;opacity:0}
      @keyframes _ctpath{0%{opacity:0;transform:scale(0)}15%{opacity:1;transform:scale(1)}85%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-cursor-trail__dot{animation:none;opacity:.6}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Container where the trail effect appears -->
<div class="nuda-cursor-trail-area" aria-hidden="true"></div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Cursor Trail
   Dots that trail behind the cursor and fade out.
   Customize: --trail-color, --trail-size, --trail-count */

.nuda-cursor-trail-area {
  position: relative;
  overflow: hidden;
}

.nuda-cursor-trail__dot {
  --trail-color: #e4ff54;
  --trail-size: 8px;
  position: absolute;
  width: var(--trail-size);
  height: var(--trail-size);
  background: var(--trail-color);
  border-radius: 50%;
  pointer-events: none;
  animation: nuda-trail-fade 0.8s ease-out forwards;
}

@keyframes nuda-trail-fade {
  to {
    opacity: 0;
    transform: scale(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-cursor-trail__dot {
    animation: none;
    display: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Cursor Trail — Creates dots that follow the mouse and fade out.
   Attach to any container with class "nuda-cursor-trail-area". */

(function () {
  var area = document.querySelector('.nuda-cursor-trail-area');
  if (!area) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  area.addEventListener('mousemove', function (e) {
    var rect = area.getBoundingClientRect();
    var dot = document.createElement('div');
    dot.className = 'nuda-cursor-trail__dot';
    dot.style.left = (e.clientX - rect.left) + 'px';
    dot.style.top = (e.clientY - rect.top) + 'px';
    area.appendChild(dot);

    dot.addEventListener('animationend', function () {
      dot.remove();
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── CURSOR GLOW ─────────────── */
  {
    id: "cursor-glow",
    name: "Cursor Glow",
    category: "Cursors",
    preview: (
      <div className="nuda-cursor-glow-demo" aria-hidden="true" style={{ position: "relative", width: "100%", height: 120, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#666", fontSize: "0.75rem", zIndex: 1 }}>Cursor Glow</span>
        <div className="nuda-cursor-glow__circle nuda-cursor-glow__circle--anim" />
      </div>
    ),
    cssInline: `
      .nuda-cursor-glow-demo{position:relative;overflow:hidden;border-radius:8px}
      .nuda-cursor-glow__circle{--c:#e4ff54;position:absolute;width:100px;height:100px;border-radius:50%;background:radial-gradient(circle,rgba(228,255,84,.3) 0%,transparent 70%);pointer-events:none}
      .nuda-cursor-glow__circle--anim{animation:_cgmove 4s ease-in-out infinite}
      @keyframes _cgmove{0%{top:20%;left:20%;opacity:.5}25%{top:30%;left:70%;opacity:1}50%{top:60%;left:50%;opacity:.7}75%{top:20%;left:60%;opacity:1}100%{top:20%;left:20%;opacity:.5}}
      @media(prefers-reduced-motion:reduce){.nuda-cursor-glow__circle--anim{animation:none;top:50%;left:50%;transform:translate(-50%,-50%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Container where the glow follows the cursor -->
<div class="nuda-cursor-glow-area" aria-hidden="true">
  <div class="nuda-cursor-glow__circle"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Cursor Glow
   Glowing circle that follows the cursor smoothly.
   Customize: --glow-color, --glow-size */

.nuda-cursor-glow-area {
  position: relative;
  overflow: hidden;
}

.nuda-cursor-glow__circle {
  --glow-color: #e4ff54;
  --glow-size: 80px;
  position: absolute;
  width: var(--glow-size);
  height: var(--glow-size);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(228, 255, 84, 0.25) 0%,
    transparent 70%
  );
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: left 0.15s ease-out, top 0.15s ease-out;
  left: -100px;
  top: -100px;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-cursor-glow__circle {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Cursor Glow — Glowing circle that follows the cursor.
   Attach to any container with class "nuda-cursor-glow-area". */

(function () {
  var area = document.querySelector('.nuda-cursor-glow-area');
  var glow = document.querySelector('.nuda-cursor-glow__circle');
  if (!area || !glow) return;

  area.addEventListener('mousemove', function (e) {
    var rect = area.getBoundingClientRect();
    glow.style.left = (e.clientX - rect.left) + 'px';
    glow.style.top = (e.clientY - rect.top) + 'px';
  });

  area.addEventListener('mouseleave', function () {
    glow.style.left = '-100px';
    glow.style.top = '-100px';
  });
})();`,
      },
    ],
  },

  /* ─────────────── CURSOR MAGNET ─────────────── */
  {
    id: "cursor-magnet",
    name: "Cursor Magnet",
    category: "Cursors",
    preview: (
      <div className="nuda-cursor-magnet-demo" aria-hidden="true" style={{ position: "relative", width: "100%", height: 120, display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem" }}>
        <div className="nuda-cursor-magnet__item">A</div>
        <div className="nuda-cursor-magnet__item">B</div>
        <div className="nuda-cursor-magnet__item">C</div>
      </div>
    ),
    cssInline: `
      .nuda-cursor-magnet-demo{border-radius:8px}
      .nuda-cursor-magnet__item{--c:#e4ff54;width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1px solid rgba(228,255,84,.25);border-radius:10px;color:var(--c);font-size:.75rem;font-weight:600;transition:transform .2s ease;cursor:pointer}
      .nuda-cursor-magnet__item:hover{border-color:var(--c);box-shadow:0 0 12px rgba(228,255,84,.15)}
      @media(prefers-reduced-motion:reduce){.nuda-cursor-magnet__item{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-cursor-magnet-area" aria-hidden="true">
  <div class="nuda-cursor-magnet__item">A</div>
  <div class="nuda-cursor-magnet__item">B</div>
  <div class="nuda-cursor-magnet__item">C</div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Cursor Magnet
   Elements attract toward the cursor when nearby.
   Customize: --magnet-color, --magnet-strength */

.nuda-cursor-magnet-area {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.nuda-cursor-magnet__item {
  --magnet-color: #e4ff54;
  --magnet-strength: 0.3;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(228, 255, 84, 0.25);
  border-radius: 10px;
  color: var(--magnet-color);
  font-size: 0.85rem;
  font-weight: 600;
  transition: transform 0.2s ease-out;
  cursor: pointer;
}

.nuda-cursor-magnet__item:hover {
  border-color: var(--magnet-color);
  box-shadow: 0 0 12px rgba(228, 255, 84, 0.15);
}

@media (prefers-reduced-motion: reduce) {
  .nuda-cursor-magnet__item {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Cursor Magnet — Elements attract toward cursor when nearby.
   Each .nuda-cursor-magnet__item moves toward the pointer. */

(function () {
  var items = document.querySelectorAll('.nuda-cursor-magnet__item');
  if (!items.length) return;

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return;

  var strength = 0.3; // 0-1 range

  items.forEach(function (item) {
    item.addEventListener('mousemove', function (e) {
      var rect = item.getBoundingClientRect();
      var cx = rect.left + rect.width / 2;
      var cy = rect.top + rect.height / 2;
      var dx = (e.clientX - cx) * strength;
      var dy = (e.clientY - cy) * strength;
      item.style.transform = 'translate(' + dx + 'px, ' + dy + 'px)';
    });

    item.addEventListener('mouseleave', function () {
      item.style.transform = 'translate(0, 0)';
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── CURSOR SPOTLIGHT ─────────────── */
  {
    id: "cursor-spotlight",
    name: "Cursor Spotlight",
    category: "Cursors",
    preview: (
      <div className="nuda-cursor-spotlight-demo" aria-hidden="true" style={{ position: "relative", width: "100%", height: 120, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", borderRadius: 8 }}>
        <span style={{ color: "#555", fontSize: "0.75rem", zIndex: 1 }}>Spotlight</span>
        <div className="nuda-cursor-spotlight__light nuda-cursor-spotlight__light--anim" />
      </div>
    ),
    cssInline: `
      .nuda-cursor-spotlight-demo{background:rgba(0,0,0,.5);border-radius:8px}
      .nuda-cursor-spotlight__light{position:absolute;width:100px;height:100px;border-radius:50%;background:radial-gradient(circle,rgba(228,255,84,.2) 0%,rgba(228,255,84,.06) 40%,transparent 70%);pointer-events:none}
      .nuda-cursor-spotlight__light--anim{animation:_csmove 5s ease-in-out infinite}
      @keyframes _csmove{0%{top:10%;left:10%}25%{top:20%;left:70%}50%{top:60%;left:40%}75%{top:10%;left:60%}100%{top:10%;left:10%}}
      @media(prefers-reduced-motion:reduce){.nuda-cursor-spotlight__light--anim{animation:none;top:50%;left:50%;transform:translate(-50%,-50%)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Container where the spotlight reveals content -->
<div class="nuda-cursor-spotlight-area" aria-hidden="true">
  <p class="nuda-cursor-spotlight__content">Hidden content revealed by spotlight</p>
  <div class="nuda-cursor-spotlight__light"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Cursor Spotlight
   Spotlight effect that follows the cursor, illuminating content.
   Customize: --spotlight-color, --spotlight-size */

.nuda-cursor-spotlight-area {
  --spotlight-color: #e4ff54;
  --spotlight-size: 150px;
  position: relative;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 12px;
  padding: 2rem;
}

.nuda-cursor-spotlight__content {
  color: #333;
  font-size: 0.9rem;
  text-align: center;
  transition: color 0.3s ease;
}

.nuda-cursor-spotlight__light {
  position: absolute;
  width: var(--spotlight-size);
  height: var(--spotlight-size);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(228, 255, 84, 0.15) 0%,
    rgba(228, 255, 84, 0.05) 40%,
    transparent 70%
  );
  pointer-events: none;
  transform: translate(-50%, -50%);
  left: -200px;
  top: -200px;
  transition: left 0.08s ease-out, top 0.08s ease-out;
  mix-blend-mode: screen;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-cursor-spotlight__light {
    transition: none;
  }
}`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Cursor Spotlight — Spotlight circle that follows the cursor.
   Attach to any container with class "nuda-cursor-spotlight-area". */

(function () {
  var area = document.querySelector('.nuda-cursor-spotlight-area');
  var light = document.querySelector('.nuda-cursor-spotlight__light');
  if (!area || !light) return;

  area.addEventListener('mousemove', function (e) {
    var rect = area.getBoundingClientRect();
    light.style.left = (e.clientX - rect.left) + 'px';
    light.style.top = (e.clientY - rect.top) + 'px';
  });

  area.addEventListener('mouseleave', function () {
    light.style.left = '-200px';
    light.style.top = '-200px';
  });
})();`,
      },
    ],
  },
];
