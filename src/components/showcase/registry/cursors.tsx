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

  /* ─────────────── 5. Ring Follower ─────────────── */
  {
    id: "ring-follower",
    name: "Ring Follower",
    category: "Cursors",
    preview: (
      <div className="nuda-ringfollow-area" data-demo>
        <div className="nuda-ringfollow__ring" />
        <div className="nuda-ringfollow__dot" />
        <span>Move your mouse</span>
      </div>
    ),
    cssInline: `
      .nuda-ringfollow-area{position:relative;width:100%;max-width:240px;height:130px;border-radius:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);overflow:hidden;cursor:none;display:flex;align-items:center;justify-content:center;color:#63636e;font-size:11px}
      .nuda-ringfollow__dot{position:absolute;width:6px;height:6px;border-radius:50%;background:#e4ff54;left:-20px;top:-20px;transform:translate(-50%,-50%);pointer-events:none;transition:transform .06s;z-index:2}
      .nuda-ringfollow__ring{position:absolute;width:34px;height:34px;border-radius:50%;border:2px solid #e4ff54;left:-20px;top:-20px;transform:translate(-50%,-50%);pointer-events:none;transition:transform .25s cubic-bezier(.16,1,.3,1),width .25s,height .25s,opacity .25s}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-ringfollow-area">
  <div class="nuda-ringfollow__ring"></div>
  <div class="nuda-ringfollow__dot"></div>
  <span>Move your mouse</span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `(function () {
  var area = document.querySelector('.nuda-ringfollow-area');
  var dot  = area.querySelector('.nuda-ringfollow__dot');
  var ring = area.querySelector('.nuda-ringfollow__ring');
  if (!area) return;

  area.addEventListener('mousemove', function (e) {
    var rect = area.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    dot.style.left  = ring.style.left = x + 'px';
    dot.style.top   = ring.style.top  = y + 'px';
  });

  area.querySelectorAll('a, button, span').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      ring.style.width = ring.style.height = '52px';
      ring.style.opacity = '0.5';
    });
    el.addEventListener('mouseleave', function () {
      ring.style.width = ring.style.height = '34px';
      ring.style.opacity = '1';
    });
  });
})();`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-ringfollow-area {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: none;
}

.nuda-ringfollow__dot {
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #e4ff54;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: transform 0.06s;
  z-index: 2;
}

.nuda-ringfollow__ring {
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 2px solid #e4ff54;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition:
    transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
    width 0.25s,
    height 0.25s,
    opacity 0.25s;
}`,
      },
    ],
  },

  /* ─────────────── 6. Magnify Lens ─────────────── */
  {
    id: "magnify-lens",
    name: "Magnify Lens",
    category: "Cursors",
    preview: (
      <div className="nuda-magnify-area" data-demo>
        <div className="nuda-magnify__text">
          Hover for &times;3 magnification.
        </div>
        <div className="nuda-magnify__lens" />
      </div>
    ),
    cssInline: `
      .nuda-magnify-area{position:relative;width:100%;max-width:240px;height:130px;border-radius:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);overflow:hidden;cursor:none;display:flex;align-items:center;justify-content:center;padding:0 16px}
      .nuda-magnify__text{color:#a0a0a8;font-size:14px;text-align:center;line-height:1.4}
      .nuda-magnify__lens{position:absolute;width:50px;height:50px;border-radius:50%;border:2px solid #e4ff54;background:rgba(228,255,84,.06);backdrop-filter:invert(.1) saturate(1.4) blur(.4px);-webkit-backdrop-filter:invert(.1) saturate(1.4) blur(.4px);box-shadow:0 0 0 4px rgba(228,255,84,.08);pointer-events:none;transform:translate(-50%,-50%) scale(0);transition:transform .25s cubic-bezier(.34,1.56,.64,1)}
      .nuda-magnify-area:hover .nuda-magnify__lens{transform:translate(-50%,-50%) scale(1)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-magnify-area">
  <div class="nuda-magnify__text">Hover for ×3 magnification.</div>
  <div class="nuda-magnify__lens"></div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `(function () {
  var area = document.querySelector('.nuda-magnify-area');
  var lens = area.querySelector('.nuda-magnify__lens');
  if (!area) return;

  area.addEventListener('mousemove', function (e) {
    var rect = area.getBoundingClientRect();
    lens.style.left = (e.clientX - rect.left) + 'px';
    lens.style.top  = (e.clientY - rect.top) + 'px';
  });
})();`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-magnify-area { cursor: none; }

.nuda-magnify__lens {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #e4ff54;
  background: rgba(228, 255, 84, 0.06);
  backdrop-filter: invert(0.1) saturate(1.4) blur(0.4px);
  -webkit-backdrop-filter: invert(0.1) saturate(1.4) blur(0.4px);
  box-shadow: 0 0 0 4px rgba(228, 255, 84, 0.08);
  pointer-events: none;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.nuda-magnify-area:hover .nuda-magnify__lens {
  transform: translate(-50%, -50%) scale(1);
}`,
      },
    ],
  },

  /* ─────────────── 7. Snap to Link ─────────────── */
  {
    id: "snap-cursor",
    name: "Snap-to-Link Cursor",
    category: "Cursors",
    preview: (
      <div className="nuda-snapcur-area" data-demo>
        <button className="nuda-snapcur__target" data-snap>Snap here</button>
        <span className="nuda-snapcur__cursor" />
      </div>
    ),
    cssInline: `
      .nuda-snapcur-area{position:relative;width:100%;max-width:240px;height:130px;border-radius:12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);overflow:hidden;cursor:none;display:flex;align-items:center;justify-content:center}
      .nuda-snapcur__target{padding:7px 14px;background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.3);color:#e4ff54;border-radius:8px;font-size:12px;cursor:none}
      .nuda-snapcur__cursor{position:absolute;width:14px;height:14px;border-radius:50%;background:#e4ff54;pointer-events:none;transform:translate(-50%,-50%);transition:transform .25s cubic-bezier(.34,1.56,.64,1),width .3s cubic-bezier(.34,1.56,.64,1),height .3s cubic-bezier(.34,1.56,.64,1),border-radius .3s,background .25s,mix-blend-mode .2s}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-snapcur-area">
  <button class="nuda-snapcur__target" data-snap>Snap here</button>
  <span class="nuda-snapcur__cursor"></span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `(function () {
  var area = document.querySelector('.nuda-snapcur-area');
  var cur  = area.querySelector('.nuda-snapcur__cursor');
  if (!area) return;

  area.addEventListener('mousemove', function (e) {
    var snap = e.target.closest('[data-snap]');
    if (snap) {
      var r = snap.getBoundingClientRect();
      var areaR = area.getBoundingClientRect();
      cur.style.left   = r.left - areaR.left + r.width / 2 + 'px';
      cur.style.top    = r.top  - areaR.top  + r.height / 2 + 'px';
      cur.style.width  = (r.width + 8)  + 'px';
      cur.style.height = (r.height + 8) + 'px';
      cur.style.borderRadius = '10px';
      cur.style.background = 'transparent';
      cur.style.boxShadow = 'inset 0 0 0 2px #e4ff54';
    } else {
      var rect = area.getBoundingClientRect();
      cur.style.left = (e.clientX - rect.left) + 'px';
      cur.style.top  = (e.clientY - rect.top)  + 'px';
      cur.style.width = cur.style.height = '14px';
      cur.style.borderRadius = '50%';
      cur.style.background = '#e4ff54';
      cur.style.boxShadow = 'none';
    }
  });
})();`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-snapcur-area { cursor: none; }

.nuda-snapcur__cursor {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #e4ff54;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    width  0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    height 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
    border-radius 0.3s,
    background 0.25s;
}`,
      },
    ],
  },

  /* ─────────────── 8. Blob Blend Cursor ─────────────── */
  {
    id: "blob-cursor",
    name: "Blob Blend Cursor",
    category: "Cursors",
    preview: (
      <div className="nuda-blobcur-area" data-demo>
        <span className="nuda-blobcur__text">CREATE</span>
        <span className="nuda-blobcur__blob" />
      </div>
    ),
    cssInline: `
      .nuda-blobcur-area{position:relative;width:100%;max-width:240px;height:130px;border-radius:12px;background:#fafafa;overflow:hidden;cursor:none;display:flex;align-items:center;justify-content:center;isolation:isolate}
      .nuda-blobcur__text{color:#09090b;font-size:32px;font-weight:900;letter-spacing:-.02em;font-family:Georgia,serif}
      .nuda-blobcur__blob{position:absolute;width:80px;height:80px;border-radius:50%;background:#e4ff54;pointer-events:none;transform:translate(-50%,-50%);mix-blend-mode:difference;transition:transform .25s cubic-bezier(.34,1.56,.64,1),width .35s,height .35s;left:-50px;top:50%}
      .nuda-blobcur-area:hover .nuda-blobcur__blob{animation:_blobMorph 4s ease-in-out infinite}
      @keyframes _blobMorph{0%,100%{border-radius:50%}33%{border-radius:60% 40% 50% 70%/50%}66%{border-radius:40% 60% 70% 50%/60%}}
      @media(prefers-reduced-motion:reduce){.nuda-blobcur-area:hover .nuda-blobcur__blob{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-blobcur-area">
  <span class="nuda-blobcur__text">CREATE</span>
  <span class="nuda-blobcur__blob"></span>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `(function () {
  var area = document.querySelector('.nuda-blobcur-area');
  var blob = area.querySelector('.nuda-blobcur__blob');
  if (!area) return;

  area.addEventListener('mousemove', function (e) {
    var rect = area.getBoundingClientRect();
    blob.style.left = (e.clientX - rect.left) + 'px';
    blob.style.top  = (e.clientY - rect.top)  + 'px';
  });
})();`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-blobcur__blob {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #e4ff54;
  pointer-events: none;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    width 0.35s,
    height 0.35s;
}

.nuda-blobcur-area:hover .nuda-blobcur__blob {
  animation: nuda-blob-morph 4s ease-in-out infinite;
}

@keyframes nuda-blob-morph {
  0%, 100% { border-radius: 50%; }
  33% { border-radius: 60% 40% 50% 70% / 50%; }
  66% { border-radius: 40% 60% 70% 50% / 60%; }
}`,
      },
    ],
  },
];
