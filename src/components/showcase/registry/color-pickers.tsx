import type { NudaComponent } from "./types";

export const colorPickers: NudaComponent[] = [
  /* ─────────────── 1. Swatch Grid ─────────────── */
  {
    id: "swatch-grid",
    name: "Swatch Grid",
    category: "Color Pickers",
    preview: (
      <div className="nuda-swatches">
        {["#ff5e7a", "#ffb45e", "#e4ff54", "#6ee7b7", "#62b6ff", "#9d6dff", "#ff6dd4", "#fafafa"].map((c, i) => (
          <button
            key={c}
            className={`nuda-swatches__chip${i === 2 ? " is-active" : ""}`}
            style={{ background: c, animationDelay: `${i * 40}ms` }}
            aria-label={`Pick ${c}`}
          />
        ))}
      </div>
    ),
    cssInline: `
      .nuda-swatches{display:grid;grid-template-columns:repeat(8,1fr);gap:6px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px}
      .nuda-swatches__chip{width:24px;height:24px;border-radius:7px;border:0;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(255,255,255,.08);transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .2s;animation:_swPop .4s cubic-bezier(.16,1,.3,1) both}
      .nuda-swatches__chip:hover{transform:scale(1.18) rotate(-6deg);box-shadow:inset 0 0 0 1px rgba(255,255,255,.2),0 4px 12px -4px rgba(0,0,0,.4)}
      .nuda-swatches__chip.is-active{transform:scale(1.1);box-shadow:inset 0 0 0 2px #fafafa,0 0 0 2px #e4ff54}
      @keyframes _swPop{from{opacity:0;transform:scale(.6)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-swatches__chip{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-swatches">
  <button class="nuda-swatches__chip" style="background:#ff5e7a"></button>
  <button class="nuda-swatches__chip" style="background:#ffb45e"></button>
  <button class="nuda-swatches__chip is-active" style="background:#e4ff54"></button>
  <!-- More swatches -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-swatches__chip {
  width: 24px;
  height: 24px;
  border-radius: 7px;
  border: 0;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.2s;
}

.nuda-swatches__chip:hover {
  transform: scale(1.18) rotate(-6deg);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.2),
    0 4px 12px -4px rgba(0, 0, 0, 0.4);
}

.nuda-swatches__chip.is-active {
  transform: scale(1.1);
  box-shadow:
    inset 0 0 0 2px #fafafa,
    0 0 0 2px #e4ff54;
}`,
      },
    ],
  },

  /* ─────────────── 2. Gradient Picker ─────────────── */
  {
    id: "gradient-picker",
    name: "Gradient Picker",
    category: "Color Pickers",
    preview: (
      <div className="nuda-gpick">
        <div className="nuda-gpick__canvas">
          <span className="nuda-gpick__handle" style={{ left: "30%", top: "40%" }} />
        </div>
        <div className="nuda-gpick__hue">
          <span className="nuda-gpick__hueThumb" style={{ left: "55%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-gpick{display:flex;flex-direction:column;gap:10px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:200px}
      .nuda-gpick__canvas{position:relative;height:120px;border-radius:8px;background:linear-gradient(to right,#fafafa,#9d6dff),linear-gradient(to bottom,transparent,#09090b);background-blend-mode:multiply;cursor:crosshair}
      .nuda-gpick__handle{position:absolute;width:14px;height:14px;border-radius:50%;background:transparent;border:2px solid #fafafa;transform:translate(-50%,-50%);box-shadow:0 0 0 1px rgba(0,0,0,.4),0 0 6px rgba(0,0,0,.6);cursor:grab;transition:transform .2s}
      .nuda-gpick__handle:hover{transform:translate(-50%,-50%) scale(1.2)}
      .nuda-gpick__hue{position:relative;height:10px;border-radius:99px;background:linear-gradient(90deg,#ff5e7a,#ffb45e,#e4ff54,#6ee7b7,#62b6ff,#9d6dff,#ff6dd4,#ff5e7a);cursor:pointer}
      .nuda-gpick__hueThumb{position:absolute;top:50%;width:14px;height:14px;border-radius:50%;background:#fafafa;border:2px solid #0c0c10;transform:translate(-50%,-50%);box-shadow:0 0 0 1px rgba(255,255,255,.4),0 2px 6px rgba(0,0,0,.5);transition:transform .2s}
      .nuda-gpick__hueThumb:hover{transform:translate(-50%,-50%) scale(1.15)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-gpick">
  <div class="nuda-gpick__canvas">
    <span class="nuda-gpick__handle" style="left:30%;top:40%"></span>
  </div>
  <div class="nuda-gpick__hue">
    <span class="nuda-gpick__hueThumb" style="left:55%"></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-gpick__canvas {
  position: relative;
  height: 120px;
  border-radius: 8px;
  background:
    linear-gradient(to right, #fafafa, #9d6dff),
    linear-gradient(to bottom, transparent, #09090b);
  background-blend-mode: multiply;
  cursor: crosshair;
}

.nuda-gpick__hue {
  position: relative;
  height: 10px;
  border-radius: 99px;
  background: linear-gradient(
    90deg,
    #ff5e7a, #ffb45e, #e4ff54, #6ee7b7,
    #62b6ff, #9d6dff, #ff6dd4, #ff5e7a
  );
}`,
      },
    ],
  },

  /* ─────────────── 3. Hue Ring ─────────────── */
  {
    id: "hue-ring",
    name: "Hue Ring",
    category: "Color Pickers",
    preview: (
      <div className="nuda-huering">
        <div className="nuda-huering__ring">
          <span className="nuda-huering__thumb" style={{ transform: "rotate(135deg) translateY(-32px)" }} />
        </div>
        <div className="nuda-huering__core" style={{ background: "#62b6ff" }} />
      </div>
    ),
    cssInline: `
      .nuda-huering{position:relative;width:90px;height:90px;display:inline-flex;align-items:center;justify-content:center}
      .nuda-huering__ring{position:absolute;inset:0;border-radius:50%;background:conic-gradient(#ff5e7a,#ffb45e,#e4ff54,#6ee7b7,#62b6ff,#9d6dff,#ff6dd4,#ff5e7a);mask:radial-gradient(circle,transparent 0,transparent 28px,#000 30px);-webkit-mask:radial-gradient(circle,transparent 0,transparent 28px,#000 30px);cursor:pointer;animation:_huerSpin 20s linear infinite}
      .nuda-huering__thumb{position:absolute;left:50%;top:50%;width:12px;height:12px;border-radius:50%;background:#fafafa;border:2px solid #0c0c10;transform-origin:center;box-shadow:0 0 0 1px rgba(255,255,255,.5);margin:-6px}
      .nuda-huering__core{position:absolute;width:42px;height:42px;border-radius:50%;border:2px solid rgba(255,255,255,.1);transition:background .25s;box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}
      @keyframes _huerSpin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-huering__ring{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-huering">
  <div class="nuda-huering__ring">
    <span class="nuda-huering__thumb"
          style="transform: rotate(135deg) translateY(-32px)"></span>
  </div>
  <div class="nuda-huering__core" style="background:#62b6ff"></div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-huering__ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: conic-gradient(
    #ff5e7a, #ffb45e, #e4ff54, #6ee7b7,
    #62b6ff, #9d6dff, #ff6dd4, #ff5e7a
  );
  mask: radial-gradient(circle, transparent 0, transparent 28px, #000 30px);
  -webkit-mask: radial-gradient(circle, transparent 0, transparent 28px, #000 30px);
  cursor: pointer;
}`,
      },
    ],
  },

  /* ─────────────── 4. Eye Dropper ─────────────── */
  {
    id: "eye-dropper",
    name: "Eye Dropper",
    category: "Color Pickers",
    preview: (
      <button className="nuda-eyedrop" aria-label="Pick color from screen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 22l1-1 8.5-8.5" />
          <path d="M11.5 12.5l4-4" />
          <path d="M14 6l4 4" />
          <path d="M17.5 3.5a2.12 2.12 0 113 3L20 7.5l-3-3z" />
        </svg>
        <span className="nuda-eyedrop__drop" />
      </button>
    ),
    cssInline: `
      .nuda-eyedrop{position:relative;display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;border-radius:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#fafafa;cursor:pointer;overflow:visible;transition:background .25s,transform .2s,border-color .25s}
      .nuda-eyedrop:hover{background:rgba(228,255,84,.08);border-color:#e4ff54;color:#e4ff54;transform:translateY(-2px) rotate(-6deg)}
      .nuda-eyedrop svg{width:18px;height:18px}
      .nuda-eyedrop__drop{position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:5px;height:5px;border-radius:0 100% 100% 100%;background:#e4ff54;opacity:0;animation:_eyedDrop 1.8s ease-in-out infinite}
      @keyframes _eyedDrop{0%{opacity:1;transform:translate(-50%,-12px) rotate(-45deg) scale(.4)}60%{transform:translate(-50%,8px) rotate(-45deg) scale(1)}100%{opacity:0;transform:translate(-50%,16px) rotate(-45deg) scale(.6)}}
      @media(prefers-reduced-motion:reduce){.nuda-eyedrop__drop{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-eyedrop" aria-label="Pick color from screen">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
       stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 22l1-1 8.5-8.5" />
    <path d="M11.5 12.5l4-4" />
    <path d="M14 6l4 4" />
    <path d="M17.5 3.5a2.12 2.12 0 113 3L20 7.5l-3-3z" />
  </svg>
  <span class="nuda-eyedrop__drop"></span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `// Modern browsers expose the EyeDropper API on secure origins
const btn = document.querySelector('.nuda-eyedrop');

btn.addEventListener('click', async () => {
  if (!window.EyeDropper) return alert('EyeDropper API not supported here.');
  try {
    const dropper = new EyeDropper();
    const { sRGBHex } = await dropper.open();
    console.log('Picked', sRGBHex);
  } catch {
    // User cancelled
  }
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-eyedrop {
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #fafafa;
  cursor: pointer;
  transition: background 0.25s, transform 0.2s, border-color 0.25s;
}

.nuda-eyedrop:hover {
  background: rgba(228, 255, 84, 0.08);
  border-color: #e4ff54;
  color: #e4ff54;
  transform: translateY(-2px) rotate(-6deg);
}`,
      },
    ],
  },

  /* ─────────────── 5. Hex Input ─────────────── */
  {
    id: "hex-input",
    name: "Hex Input",
    category: "Color Pickers",
    preview: (
      <label className="nuda-hexin">
        <span className="nuda-hexin__chip" style={{ background: "#e4ff54" }} />
        <span className="nuda-hexin__hash">#</span>
        <input defaultValue="E4FF54" maxLength={6} readOnly />
      </label>
    ),
    cssInline: `
      .nuda-hexin{display:inline-flex;align-items:center;gap:8px;padding:6px 12px 6px 6px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);border-radius:10px;transition:border-color .25s,box-shadow .25s}
      .nuda-hexin:focus-within{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.12)}
      .nuda-hexin__chip{width:22px;height:22px;border-radius:6px;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1);transition:background .35s}
      .nuda-hexin__hash{color:#63636e;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px}
      .nuda-hexin input{background:transparent;border:0;outline:none;color:#fafafa;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;width:84px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<label class="nuda-hexin">
  <span class="nuda-hexin__chip" style="background:#e4ff54"></span>
  <span class="nuda-hexin__hash">#</span>
  <input value="E4FF54" maxlength="6" />
</label>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `const wrap  = document.querySelector('.nuda-hexin');
const chip  = wrap.querySelector('.nuda-hexin__chip');
const input = wrap.querySelector('input');

input.addEventListener('input', () => {
  const v = input.value.replace(/[^0-9a-f]/gi, '').slice(0, 6);
  input.value = v.toUpperCase();
  if (v.length === 6) chip.style.background = '#' + v;
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-hexin input {
  background: transparent;
  border: 0;
  outline: none;
  color: #fafafa;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  width: 84px;
}

.nuda-hexin__chip {
  width: 22px;
  height: 22px;
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: background 0.35s;
}`,
      },
    ],
  },

  /* ─────────────── 6. Palette Generator ─────────────── */
  {
    id: "palette-gen",
    name: "Palette Generator",
    category: "Color Pickers",
    preview: (
      <div className="nuda-paletteg">
        {["#0c0c10", "#62b6ff", "#9d6dff", "#e4ff54", "#fafafa"].map((c, i) => (
          <div key={c} className="nuda-paletteg__col" style={{ background: c, animationDelay: `${i * 80}ms` }}>
            <span style={{ color: i < 2 ? "#fafafa" : "#09090b" }}>{c.replace("#", "").toUpperCase()}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-paletteg{display:flex;border-radius:12px;overflow:hidden;width:100%;max-width:280px;height:80px;border:1px solid rgba(255,255,255,.06)}
      .nuda-paletteg__col{flex:1;display:flex;align-items:flex-end;justify-content:center;padding-bottom:6px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:9px;font-weight:700;letter-spacing:.04em;transition:flex .35s cubic-bezier(.16,1,.3,1);cursor:pointer;animation:_pgIn .55s cubic-bezier(.16,1,.3,1) both}
      .nuda-paletteg__col:hover{flex:2}
      .nuda-paletteg:hover .nuda-paletteg__col:not(:hover){flex:.7}
      @keyframes _pgIn{from{flex-basis:0;opacity:.4}to{flex-basis:auto;opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-paletteg__col{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-paletteg">
  <div class="nuda-paletteg__col" style="background:#0c0c10">
    <span style="color:#fafafa">0C0C10</span>
  </div>
  <div class="nuda-paletteg__col" style="background:#62b6ff">
    <span style="color:#fafafa">62B6FF</span>
  </div>
  <!-- More colors -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-paletteg__col {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 6px;
  cursor: pointer;
  transition: flex 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-paletteg__col:hover { flex: 2; }
.nuda-paletteg:hover .nuda-paletteg__col:not(:hover) { flex: 0.7; }`,
      },
    ],
  },

  /* ─────────────── 7. Recent Colors ─────────────── */
  {
    id: "recent-colors",
    name: "Recent Colors",
    category: "Color Pickers",
    preview: (
      <div className="nuda-recentc">
        <span className="nuda-recentc__label">Recent</span>
        <div className="nuda-recentc__row">
          {["#9d6dff", "#62b6ff", "#6ee7b7", "#e4ff54", "#ff6dd4"].map((c, i) => (
            <button key={c} className="nuda-recentc__dot" style={{ background: c, animationDelay: `${i * 50}ms` }} aria-label={c} />
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-recentc{display:inline-flex;align-items:center;gap:10px;padding:8px 12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:99px}
      .nuda-recentc__label{font-size:10px;color:#63636e;font-weight:600;text-transform:uppercase;letter-spacing:.08em}
      .nuda-recentc__row{display:inline-flex;gap:4px}
      .nuda-recentc__dot{width:18px;height:18px;border-radius:50%;border:0;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(255,255,255,.15);transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .2s;animation:_recIn .4s cubic-bezier(.16,1,.3,1) both}
      .nuda-recentc__dot:hover{transform:scale(1.3) translateY(-3px);box-shadow:inset 0 0 0 2px rgba(255,255,255,.4),0 4px 12px -4px rgba(0,0,0,.5)}
      @keyframes _recIn{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-recentc__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-recentc">
  <span class="nuda-recentc__label">Recent</span>
  <div class="nuda-recentc__row">
    <button class="nuda-recentc__dot" style="background:#9d6dff"></button>
    <button class="nuda-recentc__dot" style="background:#62b6ff"></button>
    <!-- More recents -->
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-recentc__dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.2s;
}

.nuda-recentc__dot:hover {
  transform: scale(1.3) translateY(-3px);
  box-shadow:
    inset 0 0 0 2px rgba(255, 255, 255, 0.4),
    0 4px 12px -4px rgba(0, 0, 0, 0.5);
}`,
      },
    ],
  },

  /* ─────────────── 8. Contrast Pair ─────────────── */
  {
    id: "contrast-pair",
    name: "Contrast Pair",
    category: "Color Pickers",
    preview: (
      <div className="nuda-contrast is-pass">
        <div className="nuda-contrast__demo">
          <span>Aa</span>
        </div>
        <div className="nuda-contrast__info">
          <div className="nuda-contrast__ratio">12.4:1</div>
          <div className="nuda-contrast__badges">
            <span className="is-pass">AA</span>
            <span className="is-pass">AAA</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-contrast{display:inline-flex;align-items:center;gap:10px;padding:8px 10px 8px 8px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:200px}
      .nuda-contrast__demo{display:inline-flex;align-items:center;justify-content:center;width:46px;height:46px;background:#e4ff54;color:#09090b;border-radius:9px;font-size:18px;font-weight:700;font-family:Georgia,serif;flex-shrink:0;transition:transform .25s cubic-bezier(.34,1.56,.64,1)}
      .nuda-contrast:hover .nuda-contrast__demo{transform:scale(1.08) rotate(-4deg)}
      .nuda-contrast__ratio{color:#fafafa;font-size:14px;font-weight:700;font-variant-numeric:tabular-nums;line-height:1}
      .nuda-contrast__badges{display:flex;gap:4px;margin-top:4px}
      .nuda-contrast__badges span{font-size:9px;font-weight:700;padding:2px 6px;border-radius:99px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;background:rgba(255,94,122,.12);color:#ff5e7a;border:1px solid rgba(255,94,122,.25)}
      .nuda-contrast__badges span.is-pass{background:rgba(110,231,183,.12);color:#6ee7b7;border-color:rgba(110,231,183,.25);animation:_passPop .4s cubic-bezier(.34,1.56,.64,1)}
      @keyframes _passPop{0%{transform:scale(.5)}60%{transform:scale(1.18)}100%{transform:scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-contrast__badges span.is-pass{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-contrast">
  <div class="nuda-contrast__demo"><span>Aa</span></div>
  <div class="nuda-contrast__info">
    <div class="nuda-contrast__ratio">12.4:1</div>
    <div class="nuda-contrast__badges">
      <span class="is-pass">AA</span>
      <span class="is-pass">AAA</span>
    </div>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-contrast__badges span {
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 99px;
  background: rgba(255, 94, 122, 0.12);
  color: #ff5e7a;
  border: 1px solid rgba(255, 94, 122, 0.25);
}

.nuda-contrast__badges span.is-pass {
  background: rgba(110, 231, 183, 0.12);
  color: #6ee7b7;
  border-color: rgba(110, 231, 183, 0.25);
  animation: nuda-pass-pop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes nuda-pass-pop {
  0%   { transform: scale(0.5);  }
  60%  { transform: scale(1.18); }
  100% { transform: scale(1);    }
}`,
      },
    ],
  },

  /* ─────────────── 9. Color Chip Copy ─────────────── */
  {
    id: "color-chip-copy",
    name: "Color Chip Copy",
    category: "Color Pickers",
    preview: (
      <button className="nuda-cchip">
        <span className="nuda-cchip__swatch" style={{ background: "#9d6dff" }} />
        <span className="nuda-cchip__hex">#9D6DFF</span>
        <span className="nuda-cchip__copy">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        </span>
      </button>
    ),
    cssInline: `
      .nuda-cchip{display:inline-flex;align-items:center;gap:8px;padding:6px 10px 6px 6px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:99px;color:#fafafa;cursor:pointer;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;font-weight:600;transition:background .25s,border-color .25s,transform .2s}
      .nuda-cchip:hover{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.16);transform:translateY(-1px)}
      .nuda-cchip__swatch{width:18px;height:18px;border-radius:50%;box-shadow:inset 0 0 0 1px rgba(255,255,255,.1)}
      .nuda-cchip__copy{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.06);color:#a0a0a8;opacity:0;transform:scale(.7);transition:opacity .2s,transform .25s,background .2s,color .2s}
      .nuda-cchip__copy svg{width:11px;height:11px}
      .nuda-cchip:hover .nuda-cchip__copy{opacity:1;transform:scale(1)}
      .nuda-cchip__copy:hover{background:#e4ff54;color:#09090b}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<button class="nuda-cchip" data-hex="#9D6DFF">
  <span class="nuda-cchip__swatch" style="background:#9D6DFF"></span>
  <span class="nuda-cchip__hex">#9D6DFF</span>
  <span class="nuda-cchip__copy">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  </span>
</button>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `document.querySelectorAll('.nuda-cchip').forEach(chip => {
  chip.addEventListener('click', async () => {
    const hex = chip.dataset.hex || chip.querySelector('.nuda-cchip__hex').textContent;
    try { await navigator.clipboard.writeText(hex); } catch {}
  });
});`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-cchip__copy {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  color: #a0a0a8;
  opacity: 0;
  transform: scale(0.7);
  transition:
    opacity 0.2s,
    transform 0.25s,
    background 0.2s,
    color 0.2s;
}

.nuda-cchip:hover .nuda-cchip__copy {
  opacity: 1;
  transform: scale(1);
}

.nuda-cchip__copy:hover {
  background: #e4ff54;
  color: #09090b;
}`,
      },
    ],
  },

  /* ─────────────── 10. Saturation/Lightness Slider ─────────────── */
  {
    id: "sat-light-slider",
    name: "Saturation Slider",
    category: "Color Pickers",
    preview: (
      <div className="nuda-satslide">
        <div className="nuda-satslide__row">
          <span>Sat</span>
          <div className="nuda-satslide__track" style={{ background: "linear-gradient(90deg,#63636e,#62b6ff)" }}>
            <span className="nuda-satslide__thumb" style={{ left: "75%" }} />
          </div>
          <span className="nuda-satslide__val">75</span>
        </div>
        <div className="nuda-satslide__row">
          <span>Lig</span>
          <div className="nuda-satslide__track" style={{ background: "linear-gradient(90deg,#000,#62b6ff,#fff)" }}>
            <span className="nuda-satslide__thumb" style={{ left: "55%" }} />
          </div>
          <span className="nuda-satslide__val">55</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-satslide{display:flex;flex-direction:column;gap:8px;padding:10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:10px;width:100%;max-width:240px}
      .nuda-satslide__row{display:flex;align-items:center;gap:8px;color:#a0a0a8;font-size:10px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-satslide__row > span:first-child{width:18px;color:#63636e}
      .nuda-satslide__track{position:relative;flex:1;height:6px;border-radius:99px;cursor:pointer}
      .nuda-satslide__thumb{position:absolute;top:50%;width:14px;height:14px;border-radius:50%;background:#fafafa;border:2px solid #0c0c10;transform:translate(-50%,-50%);box-shadow:0 0 0 1px rgba(255,255,255,.4);transition:transform .25s,left .35s cubic-bezier(.16,1,.3,1)}
      .nuda-satslide__thumb:hover{transform:translate(-50%,-50%) scale(1.18)}
      .nuda-satslide__val{width:24px;text-align:right;color:#fafafa;font-weight:700;font-variant-numeric:tabular-nums}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-satslide">
  <div class="nuda-satslide__row">
    <span>Sat</span>
    <div class="nuda-satslide__track"
         style="background: linear-gradient(90deg,#63636e,#62b6ff)">
      <span class="nuda-satslide__thumb" style="left:75%"></span>
    </div>
    <span class="nuda-satslide__val">75</span>
  </div>
  <!-- Lightness row -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-satslide__track {
  position: relative;
  flex: 1;
  height: 6px;
  border-radius: 99px;
  cursor: pointer;
}

.nuda-satslide__thumb {
  position: absolute;
  top: 50%;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fafafa;
  border: 2px solid #0c0c10;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
  transition:
    transform 0.25s,
    left 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}`,
      },
    ],
  },
];
