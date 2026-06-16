import type { NudaComponent } from "./types";

export const heroSections: NudaComponent[] = [
  /* ─────────────── 1. Centered Hero ─────────────── */
  {
    id: "hero-centered",
    name: "Centered Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-hero-c">
        <span className="nuda-hero-c__pill">Now in beta</span>
        <h1 className="nuda-hero-c__title">Ship faster.</h1>
        <p className="nuda-hero-c__sub">Build apps without the build step.</p>
        <button className="nuda-hero-c__cta" type="button">Get started</button>
      </div>
    ),
    cssInline: `
      .nuda-hero-c{display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 12px;text-align:center;width:170px}
      .nuda-hero-c__pill{font:700 8px ui-sans-serif,system-ui;color:#e4ff54;background:rgba(228,255,84,.1);border:1px solid rgba(228,255,84,.2);padding:2px 7px;border-radius:999px;text-transform:uppercase;letter-spacing:.08em;animation:_hc-up .6s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-hero-c__title{font:800 22px ui-sans-serif,system-ui;color:#fafafa;margin:0;line-height:1;letter-spacing:-.02em;animation:_hc-up .7s cubic-bezier(.4,0,.2,1) .1s backwards;background:linear-gradient(180deg,#fafafa 60%,#e4ff54);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
      .nuda-hero-c__sub{font:500 10px ui-sans-serif,system-ui;color:#a1a1aa;margin:0;animation:_hc-up .7s cubic-bezier(.4,0,.2,1) .2s backwards}
      .nuda-hero-c__cta{margin-top:4px;padding:5px 12px;background:#e4ff54;color:#09090b;border:none;border-radius:6px;font:700 10px ui-sans-serif,system-ui;cursor:pointer;animation:_hc-up .7s cubic-bezier(.4,0,.2,1) .3s backwards,_hc-glow 2.4s ease-in-out 1s infinite}
      @keyframes _hc-up{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _hc-glow{0%,100%{box-shadow:0 0 0 rgba(228,255,84,0)}50%{box-shadow:0 0 16px rgba(228,255,84,.4)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Centered Hero — pill, headline, sub, CTA all stagger up -->
<section class="nuda-hero-c">
  <span class="nuda-hero-c__pill">Now in beta</span>
  <h1 class="nuda-hero-c__title">Ship faster.</h1>
  <p class="nuda-hero-c__sub">Build apps without the build step.</p>
  <button class="nuda-hero-c__cta" type="button">Get started</button>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Centered Hero
   Pill + headline + sub + CTA in a vertical stagger.
   Customize: --hc-accent, copy & sizes. */

.nuda-hero-c {
  --hc-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 80px 24px;
  text-align: center;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.nuda-hero-c__pill {
  font: 700 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: var(--hc-accent);
  background: rgba(228, 255, 84, 0.1);
  border: 1px solid rgba(228, 255, 84, 0.2);
  padding: 4px 12px;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  animation: nuda-hc-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nuda-hero-c__title {
  font: 800 clamp(2.5rem, 6vw, 4.5rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  line-height: 1;
  letter-spacing: -0.02em;
  background: linear-gradient(180deg, #fafafa 60%, var(--hc-accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: nuda-hc-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.1s backwards;
}

.nuda-hero-c__sub {
  font: 500 1.125rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  margin: 0;
  animation: nuda-hc-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.2s backwards;
}

.nuda-hero-c__cta {
  margin-top: 8px;
  padding: 12px 28px;
  background: var(--hc-accent);
  color: #09090b;
  border: none;
  border-radius: 8px;
  font: 700 0.95rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  animation:
    nuda-hc-up 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.3s backwards,
    nuda-hc-glow 2.4s ease-in-out 1s infinite;
}

@keyframes nuda-hc-up {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes nuda-hc-glow {
  0%, 100% { box-shadow: 0 0 0 rgba(228, 255, 84, 0); }
  50%      { box-shadow: 0 0 24px rgba(228, 255, 84, 0.4); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-hero-c__pill, .nuda-hero-c__title,
  .nuda-hero-c__sub, .nuda-hero-c__cta { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 2. Split Hero ─────────────── */
  {
    id: "hero-split",
    name: "Split Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-hero-s">
        <div className="nuda-hero-s__text">
          <h2>One repo. Zero deps.</h2>
          <p>Copy-paste freedom.</p>
          <span className="nuda-hero-s__cta">Browse →</span>
        </div>
        <div className="nuda-hero-s__visual">
          <div className="nuda-hero-s__card">
            <div className="nuda-hero-s__line" style={{ width: "70%" }} />
            <div className="nuda-hero-s__line" style={{ width: "50%" }} />
            <div className="nuda-hero-s__line" style={{ width: "85%" }} />
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-hero-s{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:8px;width:170px;padding:8px}
      .nuda-hero-s__text{display:flex;flex-direction:column;gap:4px;animation:_hs-l .7s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-hero-s__text h2{font:800 12px ui-sans-serif,system-ui;color:#fafafa;margin:0;line-height:1.1;letter-spacing:-.02em}
      .nuda-hero-s__text p{font:500 9px ui-sans-serif,system-ui;color:#a1a1aa;margin:0}
      .nuda-hero-s__cta{font:700 9px ui-sans-serif,system-ui;color:#e4ff54;cursor:pointer;margin-top:2px}
      .nuda-hero-s__visual{display:flex;align-items:center;justify-content:center;animation:_hs-r .7s cubic-bezier(.4,0,.2,1) .15s backwards}
      .nuda-hero-s__card{width:70px;padding:8px;background:rgba(255,255,255,.04);border:1px solid rgba(228,255,84,.15);border-radius:6px;display:flex;flex-direction:column;gap:4px;transform:rotate(-3deg);box-shadow:0 8px 20px -4px rgba(228,255,84,.2)}
      .nuda-hero-s__line{height:4px;background:linear-gradient(90deg,#e4ff54,rgba(228,255,84,.3));border-radius:2px}
      @keyframes _hs-l{from{opacity:0;transform:translateX(-12px)}to{opacity:1;transform:translateX(0)}}
      @keyframes _hs-r{from{opacity:0;transform:translateX(12px) rotate(-3deg)}to{opacity:1;transform:translateX(0) rotate(-3deg)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Split Hero — text left, visual right -->
<section class="nuda-hero-s">
  <div class="nuda-hero-s__text">
    <h2>One repo. Zero deps.</h2>
    <p>Copy-paste freedom.</p>
    <a class="nuda-hero-s__cta" href="#">Browse →</a>
  </div>
  <div class="nuda-hero-s__visual">
    <div class="nuda-hero-s__card">
      <div class="nuda-hero-s__line" style="width: 70%"></div>
      <div class="nuda-hero-s__line" style="width: 50%"></div>
      <div class="nuda-hero-s__line" style="width: 85%"></div>
    </div>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Split Hero
   Two-column hero: text fades from the left, visual from the right.
   Customize: --hs-accent, content of the visual side. */

.nuda-hero-s {
  --hs-accent: #e4ff54;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 60px 24px;
}

@media (max-width: 720px) {
  .nuda-hero-s { grid-template-columns: 1fr; }
}

.nuda-hero-s__text {
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: nuda-hs-l 0.7s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nuda-hero-s__text h2 {
  font: 800 clamp(2rem, 4vw, 3.25rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.nuda-hero-s__text p {
  font: 500 1rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  margin: 0;
}

.nuda-hero-s__cta {
  font: 700 0.95rem ui-sans-serif, system-ui, sans-serif;
  color: var(--hs-accent);
  cursor: pointer;
  margin-top: 8px;
  text-decoration: none;
}

.nuda-hero-s__visual {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: nuda-hs-r 0.7s cubic-bezier(0.4, 0, 0.2, 1) 0.15s backwards;
}

.nuda-hero-s__card {
  width: 100%;
  max-width: 320px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(228, 255, 84, 0.15);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transform: rotate(-3deg);
  box-shadow: 0 16px 40px -8px rgba(228, 255, 84, 0.2);
}

.nuda-hero-s__line {
  height: 8px;
  background: linear-gradient(90deg, var(--hs-accent), rgba(228, 255, 84, 0.3));
  border-radius: 4px;
}

@keyframes nuda-hs-l {
  from { opacity: 0; transform: translateX(-16px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes nuda-hs-r {
  from { opacity: 0; transform: translateX(16px) rotate(-3deg); }
  to   { opacity: 1; transform: translateX(0) rotate(-3deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-hero-s__text, .nuda-hero-s__visual { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 3. Mesh Gradient Hero ─────────────── */
  {
    id: "mesh-hero",
    name: "Mesh Gradient Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-hero-m">
        <div className="nuda-hero-m__bg" />
        <div className="nuda-hero-m__content">
          <h2>Built different.</h2>
          <span className="nuda-hero-m__btn">Try free</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-hero-m{position:relative;width:170px;height:100px;border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center}
      .nuda-hero-m__bg{position:absolute;inset:-20%;background:radial-gradient(at 30% 30%,#e4ff54 0%,transparent 40%),radial-gradient(at 70% 70%,#a78bfa 0%,transparent 40%),radial-gradient(at 50% 100%,#fb7185 0%,transparent 50%);filter:blur(20px);opacity:.7;animation:_hm-shift 12s ease-in-out infinite}
      .nuda-hero-m::before{content:"";position:absolute;inset:0;background:#0e0e10;opacity:.6;backdrop-filter:blur(20px)}
      .nuda-hero-m__content{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center}
      .nuda-hero-m__content h2{font:800 14px ui-sans-serif,system-ui;color:#fafafa;margin:0;letter-spacing:-.02em}
      .nuda-hero-m__btn{padding:4px 12px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#fafafa;font:700 9px ui-sans-serif,system-ui;border-radius:999px;backdrop-filter:blur(8px);cursor:pointer}
      @keyframes _hm-shift{0%,100%{transform:translate(0,0) scale(1)}33%{transform:translate(8%,-4%) scale(1.05)}66%{transform:translate(-4%,6%) scale(.95)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Mesh Gradient Hero -->
<section class="nuda-hero-m">
  <div class="nuda-hero-m__bg"></div>
  <div class="nuda-hero-m__content">
    <h2>Built different.</h2>
    <button class="nuda-hero-m__btn" type="button">Try free</button>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Mesh Gradient Hero
   Animated multi-radial gradient backdrop, glassy overlay, content on top.
   Customize: gradient stops & colors, --hm-overlay opacity. */

.nuda-hero-m {
  --hm-overlay: 0.6;
  position: relative;
  width: 100%;
  height: 380px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nuda-hero-m__bg {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(at 30% 30%, #e4ff54 0%, transparent 40%),
    radial-gradient(at 70% 70%, #a78bfa 0%, transparent 40%),
    radial-gradient(at 50% 100%, #fb7185 0%, transparent 50%);
  filter: blur(40px);
  opacity: 0.7;
  animation: nuda-hm-shift 12s ease-in-out infinite;
}

.nuda-hero-m::before {
  content: "";
  position: absolute;
  inset: 0;
  background: #0e0e10;
  opacity: var(--hm-overlay);
  backdrop-filter: blur(20px);
}

.nuda-hero-m__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.nuda-hero-m__content h2 {
  font: 800 clamp(2rem, 5vw, 3.5rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  letter-spacing: -0.02em;
}

.nuda-hero-m__btn {
  padding: 10px 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fafafa;
  font: 700 0.95rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 999px;
  backdrop-filter: blur(8px);
  cursor: pointer;
}

@keyframes nuda-hm-shift {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33%      { transform: translate(8%, -4%) scale(1.05); }
  66%      { transform: translate(-4%, 6%) scale(0.95); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-hero-m__bg { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 4. Word Reveal Hero ─────────────── */
  {
    id: "word-reveal",
    name: "Word Reveal Hero",
    category: "Hero Sections",
    preview: (
      <h1 className="nuda-wreveal">
        <span style={{ ["--d" as string]: "0s" }}>Build</span>{" "}
        <span style={{ ["--d" as string]: ".15s" }}>without</span>{" "}
        <span style={{ ["--d" as string]: ".3s" }}>the</span>{" "}
        <span style={{ ["--d" as string]: ".45s" }} className="is-accent">build.</span>
      </h1>
    ),
    cssInline: `
      .nuda-wreveal{font:800 16px ui-sans-serif,system-ui;color:#fafafa;margin:0;line-height:1.2;letter-spacing:-.02em;padding:12px;text-align:center;width:170px}
      .nuda-wreveal span{display:inline-block;opacity:0;transform:translateY(12px) skewY(8deg);animation:_wr-up .6s cubic-bezier(.4,0,.2,1) var(--d) forwards}
      .nuda-wreveal .is-accent{color:#e4ff54;background:linear-gradient(180deg,#e4ff54,#a8c93a);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
      @keyframes _wr-up{to{opacity:1;transform:translateY(0) skewY(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Word Reveal Hero — wrap each word in <span> with a stagger via --d -->
<h1 class="nuda-wreveal">
  <span style="--d: 0s">Build</span>
  <span style="--d: .15s">without</span>
  <span style="--d: .3s">the</span>
  <span style="--d: .45s" class="is-accent">build.</span>
</h1>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Word Reveal Hero
   Each word fades up + de-skews into place, last word in accent.
   Customize: --wr-accent, font sizing. */

.nuda-wreveal {
  --wr-accent: #e4ff54;
  font: 800 clamp(2rem, 6vw, 4.5rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
  padding: 60px 24px;
  text-align: center;
}

.nuda-wreveal span {
  display: inline-block;
  opacity: 0;
  transform: translateY(16px) skewY(8deg);
  animation: nuda-wr-up 0.6s cubic-bezier(0.4, 0, 0.2, 1) var(--d, 0s) forwards;
}

.nuda-wreveal .is-accent {
  color: var(--wr-accent);
  background: linear-gradient(180deg, var(--wr-accent), #a8c93a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes nuda-wr-up {
  to { opacity: 1; transform: translateY(0) skewY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-wreveal span { animation: none; opacity: 1; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Stat Row Hero ─────────────── */
  {
    id: "stat-row-hero",
    name: "Stat Row Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-statrh">
        <h2 className="nuda-statrh__title">Trusted by teams</h2>
        <div className="nuda-statrh__stats">
          <div><b>1.2k</b><i>repos</i></div>
          <div><b>87%</b><i>retention</i></div>
          <div><b>99.9%</b><i>uptime</i></div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-statrh{display:flex;flex-direction:column;align-items:center;gap:10px;padding:14px 8px;text-align:center;width:170px;animation:_sr-in .7s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-statrh__title{font:800 14px ui-sans-serif,system-ui;color:#fafafa;margin:0;letter-spacing:-.02em}
      .nuda-statrh__stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:100%}
      .nuda-statrh__stats>div{display:flex;flex-direction:column;align-items:center;gap:1px;line-height:1}
      .nuda-statrh__stats b{font:800 16px ui-sans-serif,system-ui;color:#e4ff54;font-variant-numeric:tabular-nums;background:linear-gradient(180deg,#e4ff54,#a8c93a);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
      .nuda-statrh__stats i{font:600 8px ui-sans-serif,system-ui;font-style:normal;color:#a1a1aa;text-transform:uppercase;letter-spacing:.06em;margin-top:1px}
      @keyframes _sr-in{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Stat Row Hero -->
<section class="nuda-statrh">
  <h2 class="nuda-statrh__title">Trusted by teams</h2>
  <div class="nuda-statrh__stats">
    <div><b>1.2k</b><i>repos</i></div>
    <div><b>87%</b><i>retention</i></div>
    <div><b>99.9%</b><i>uptime</i></div>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Stat Row Hero
   Headline above three big numbers; whole block fades up.
   Customize: --sr-accent, stat values. */

.nuda-statrh {
  --sr-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 80px 24px;
  text-align: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  animation: nuda-sr-in 0.7s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nuda-statrh__title {
  font: 800 clamp(1.75rem, 4vw, 2.75rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  letter-spacing: -0.02em;
}

.nuda-statrh__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
}

.nuda-statrh__stats > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  line-height: 1;
}

.nuda-statrh__stats b {
  font: 800 clamp(2rem, 5vw, 3.5rem) ui-sans-serif, system-ui, sans-serif;
  color: var(--sr-accent);
  font-variant-numeric: tabular-nums;
  background: linear-gradient(180deg, var(--sr-accent), #a8c93a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nuda-statrh__stats i {
  font: 600 0.7rem ui-sans-serif, system-ui, sans-serif;
  font-style: normal;
  color: #a1a1aa;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-top: 6px;
}

@keyframes nuda-sr-in {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-statrh { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Avatar Stack Hero ─────────────── */
  {
    id: "avatar-stack-hero",
    name: "Avatar Stack Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-avhero">
        <div className="nuda-avhero__stack">
          <span className="nuda-avhero__av" style={{ background: "linear-gradient(135deg,#e4ff54,#a8c93a)" }}>JS</span>
          <span className="nuda-avhero__av" style={{ background: "linear-gradient(135deg,#a78bfa,#8b5cf6)" }}>RC</span>
          <span className="nuda-avhero__av" style={{ background: "linear-gradient(135deg,#fb7185,#e11d48)" }}>MK</span>
          <span className="nuda-avhero__av" style={{ background: "linear-gradient(135deg,#38bdf8,#0284c7)" }}>SG</span>
          <span className="nuda-avhero__av nuda-avhero__more">+2k</span>
        </div>
        <p className="nuda-avhero__text">Loved by 2,000+ devs</p>
      </div>
    ),
    cssInline: `
      .nuda-avhero{display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px}
      .nuda-avhero__stack{display:flex}
      .nuda-avhero__av{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;color:#09090b;font:800 8px ui-sans-serif,system-ui;border:1.5px solid #09090b;margin-left:-6px;animation:_av-pop .5s cubic-bezier(.34,1.56,.64,1) backwards}
      .nuda-avhero__av:first-child{margin-left:0;animation-delay:0s}
      .nuda-avhero__av:nth-child(2){animation-delay:.08s}
      .nuda-avhero__av:nth-child(3){animation-delay:.16s}
      .nuda-avhero__av:nth-child(4){animation-delay:.24s}
      .nuda-avhero__av:nth-child(5){animation-delay:.32s}
      .nuda-avhero__more{background:rgba(255,255,255,.08)!important;color:#fafafa!important;font-weight:700;font-size:7px}
      .nuda-avhero__text{font:600 11px ui-sans-serif,system-ui;color:#fafafa;margin:0;animation:_av-fade .5s ease .4s backwards}
      @keyframes _av-pop{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}
      @keyframes _av-fade{from{opacity:0}to{opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Avatar Stack Hero — pops in avatars left → right with social proof line -->
<div class="nuda-avhero">
  <div class="nuda-avhero__stack">
    <span class="nuda-avhero__av" style="background: linear-gradient(135deg, #e4ff54, #a8c93a)">JS</span>
    <span class="nuda-avhero__av" style="background: linear-gradient(135deg, #a78bfa, #8b5cf6)">RC</span>
    <span class="nuda-avhero__av" style="background: linear-gradient(135deg, #fb7185, #e11d48)">MK</span>
    <span class="nuda-avhero__av" style="background: linear-gradient(135deg, #38bdf8, #0284c7)">SG</span>
    <span class="nuda-avhero__av nuda-avhero__more">+2k</span>
  </div>
  <p class="nuda-avhero__text">Loved by 2,000+ devs</p>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Avatar Stack Hero
   Overlapping avatars pop in sequence + social-proof line fades after.
   Customize: avatar gradients via inline background, --av-bg (page bg). */

.nuda-avhero {
  --av-bg: #09090b;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
}

.nuda-avhero__stack { display: flex; }

.nuda-avhero__av {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #09090b;
  font: 800 0.7rem ui-sans-serif, system-ui, sans-serif;
  border: 2px solid var(--av-bg);
  margin-left: -10px;
  animation: nuda-av-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) backwards;
}

.nuda-avhero__av:first-child   { margin-left: 0;     animation-delay: 0s; }
.nuda-avhero__av:nth-child(2)  { animation-delay: 0.08s; }
.nuda-avhero__av:nth-child(3)  { animation-delay: 0.16s; }
.nuda-avhero__av:nth-child(4)  { animation-delay: 0.24s; }
.nuda-avhero__av:nth-child(5)  { animation-delay: 0.32s; }

.nuda-avhero__more {
  background: rgba(255, 255, 255, 0.08) !important;
  color: #fafafa !important;
  font-weight: 700;
  font-size: 0.625rem;
}

.nuda-avhero__text {
  font: 600 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  animation: nuda-av-fade 0.5s ease 0.4s backwards;
}

@keyframes nuda-av-pop {
  from { opacity: 0; transform: scale(0.4); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes nuda-av-fade {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-avhero__av,
  .nuda-avhero__text { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Floating Card Hero ─────────────── */
  {
    id: "floating-card-hero",
    name: "Floating Card Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-fchero">
        <div className="nuda-fchero__card nuda-fchero__card--back" />
        <div className="nuda-fchero__card nuda-fchero__card--mid" />
        <div className="nuda-fchero__card nuda-fchero__card--front">
          <span className="nuda-fchero__title">Ship now</span>
          <span className="nuda-fchero__sub">Open source.</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-fchero{position:relative;width:170px;height:100px;display:flex;align-items:center;justify-content:center}
      .nuda-fchero__card{position:absolute;width:80px;height:50px;border-radius:8px;border:1px solid rgba(255,255,255,.1)}
      .nuda-fchero__card--back{background:rgba(228,255,84,.04);border-color:rgba(228,255,84,.15);transform:translate(-12px,-8px) rotate(-6deg);animation:_fc-bk 4s ease-in-out infinite alternate}
      .nuda-fchero__card--mid{background:rgba(255,255,255,.05);transform:translate(8px,4px) rotate(4deg);animation:_fc-md 4s ease-in-out 1s infinite alternate}
      .nuda-fchero__card--front{background:linear-gradient(180deg,rgba(228,255,84,.15),rgba(228,255,84,.05));border-color:rgba(228,255,84,.3);box-shadow:0 8px 20px -4px rgba(228,255,84,.25);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;animation:_fc-fr 4s ease-in-out infinite alternate}
      .nuda-fchero__title{font:800 11px ui-sans-serif,system-ui;color:#fafafa;letter-spacing:-.02em}
      .nuda-fchero__sub{font:500 8px ui-sans-serif,system-ui;color:#a1a1aa}
      @keyframes _fc-bk{from{transform:translate(-12px,-8px) rotate(-6deg)}to{transform:translate(-14px,-10px) rotate(-7deg)}}
      @keyframes _fc-md{from{transform:translate(8px,4px) rotate(4deg)}to{transform:translate(10px,6px) rotate(5deg)}}
      @keyframes _fc-fr{from{transform:translateY(0)}to{transform:translateY(-3px)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Floating Card Hero — three stacked cards floating in 3D-ish space -->
<section class="nuda-fchero">
  <div class="nuda-fchero__card nuda-fchero__card--back"></div>
  <div class="nuda-fchero__card nuda-fchero__card--mid"></div>
  <div class="nuda-fchero__card nuda-fchero__card--front">
    <span class="nuda-fchero__title">Ship now</span>
    <span class="nuda-fchero__sub">Open source.</span>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Floating Card Hero
   Three stacked cards float independently — front carries the message.
   Customize: --fc-accent, individual card transforms. */

.nuda-fchero {
  --fc-accent: #e4ff54;
  position: relative;
  width: 100%;
  max-width: 480px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.nuda-fchero__card {
  position: absolute;
  width: 240px;
  height: 150px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.nuda-fchero__card--back {
  background: rgba(228, 255, 84, 0.04);
  border-color: rgba(228, 255, 84, 0.15);
  transform: translate(-32px, -20px) rotate(-6deg);
  animation: nuda-fc-bk 4s ease-in-out infinite alternate;
}

.nuda-fchero__card--mid {
  background: rgba(255, 255, 255, 0.05);
  transform: translate(20px, 10px) rotate(4deg);
  animation: nuda-fc-md 4s ease-in-out 1s infinite alternate;
}

.nuda-fchero__card--front {
  background: linear-gradient(180deg, rgba(228, 255, 84, 0.15), rgba(228, 255, 84, 0.05));
  border-color: rgba(228, 255, 84, 0.3);
  box-shadow: 0 16px 40px -8px rgba(228, 255, 84, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  animation: nuda-fc-fr 4s ease-in-out infinite alternate;
}

.nuda-fchero__title {
  font: 800 1.5rem ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  letter-spacing: -0.02em;
}

.nuda-fchero__sub {
  font: 500 0.875rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
}

@keyframes nuda-fc-bk {
  from { transform: translate(-32px, -20px) rotate(-6deg); }
  to   { transform: translate(-36px, -26px) rotate(-7deg); }
}

@keyframes nuda-fc-md {
  from { transform: translate(20px, 10px) rotate(4deg); }
  to   { transform: translate(24px, 14px) rotate(5deg); }
}

@keyframes nuda-fc-fr {
  from { transform: translateY(0); }
  to   { transform: translateY(-6px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-fchero__card { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Newsletter Hero ─────────────── */
  {
    id: "newsletter-hero",
    name: "Newsletter Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-news">
        <h2>Get updates</h2>
        <form className="nuda-news__form" onSubmit={(e) => e.preventDefault()}>
          <input className="nuda-news__input" type="email" placeholder="email@you.dev" />
          <button className="nuda-news__btn" type="submit">→</button>
        </form>
        <span className="nuda-news__hint">No spam. Unsubscribe anytime.</span>
      </div>
    ),
    cssInline: `
      .nuda-news{display:flex;flex-direction:column;align-items:center;gap:6px;padding:14px 12px;text-align:center;width:170px}
      .nuda-news h2{font:800 14px ui-sans-serif,system-ui;color:#fafafa;margin:0 0 2px;letter-spacing:-.02em}
      .nuda-news__form{display:flex;align-items:center;gap:4px;width:100%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:3px;transition:border-color .25s,box-shadow .25s}
      .nuda-news__form:focus-within{border-color:rgba(228,255,84,.4);box-shadow:0 0 0 3px rgba(228,255,84,.1)}
      .nuda-news__input{flex:1;background:transparent;border:none;color:#fafafa;font:500 10px ui-sans-serif,system-ui;outline:none;padding:4px 6px;min-width:0}
      .nuda-news__input::placeholder{color:#63636e}
      .nuda-news__btn{display:flex;align-items:center;justify-content:center;width:22px;height:22px;background:#e4ff54;color:#09090b;border:none;border-radius:4px;font:700 11px ui-sans-serif,system-ui;cursor:pointer;transition:transform .2s,box-shadow .2s}
      .nuda-news__btn:hover{transform:translateX(2px);box-shadow:0 0 8px rgba(228,255,84,.4)}
      .nuda-news__hint{font:500 8px ui-sans-serif,system-ui;color:#63636e}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Newsletter Hero -->
<section class="nuda-news">
  <h2>Get updates</h2>
  <form class="nuda-news__form" action="/subscribe" method="post">
    <input class="nuda-news__input" type="email" placeholder="email@you.dev" required />
    <button class="nuda-news__btn" type="submit" aria-label="Subscribe">→</button>
  </form>
  <span class="nuda-news__hint">No spam. Unsubscribe anytime.</span>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Newsletter Hero
   Headline + email form + reassurance line. Form border glows on focus.
   Customize: --news-accent */

.nuda-news {
  --news-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 60px 24px;
  text-align: center;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
}

.nuda-news h2 {
  font: 800 clamp(1.75rem, 4vw, 2.5rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0 0 4px;
  letter-spacing: -0.02em;
}

.nuda-news__form {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 5px;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.nuda-news__form:focus-within {
  border-color: rgba(228, 255, 84, 0.4);
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.1);
}

.nuda-news__input {
  flex: 1;
  background: transparent;
  border: none;
  color: #fafafa;
  font: 500 0.95rem ui-sans-serif, system-ui, sans-serif;
  outline: none;
  padding: 8px 12px;
  min-width: 0;
}

.nuda-news__input::placeholder { color: #63636e; }

.nuda-news__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: var(--news-accent);
  color: #09090b;
  border: none;
  border-radius: 7px;
  font: 700 1.1rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.nuda-news__btn:hover {
  transform: translateX(2px);
  box-shadow: 0 0 12px rgba(228, 255, 84, 0.4);
}

.nuda-news__hint {
  font: 500 0.7rem ui-sans-serif, system-ui, sans-serif;
  color: #63636e;
}`,
      },
    ],
  },

  /* ─────────────── 9. Scroll Indicator ─────────────── */
  {
    id: "scroll-indicator",
    name: "Scroll Indicator",
    category: "Hero Sections",
    preview: (
      <div className="nuda-scrind">
        <span className="nuda-scrind__label">Scroll</span>
        <div className="nuda-scrind__mouse">
          <span className="nuda-scrind__wheel" />
        </div>
        <svg className="nuda-scrind__chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 4.5 L6 7.5 L9 4.5" />
        </svg>
      </div>
    ),
    cssInline: `
      .nuda-scrind{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px;animation:_si-bob 2s ease-in-out infinite}
      .nuda-scrind__label{font:700 8px ui-sans-serif,system-ui;color:#63636e;text-transform:uppercase;letter-spacing:.12em}
      .nuda-scrind__mouse{position:relative;width:18px;height:30px;border:1.5px solid rgba(255,255,255,.2);border-radius:10px;display:flex;justify-content:center;padding-top:5px}
      .nuda-scrind__wheel{width:2px;height:5px;background:#e4ff54;border-radius:1px;animation:_si-wheel 1.6s cubic-bezier(.4,0,.2,1) infinite;box-shadow:0 0 4px rgba(228,255,84,.5)}
      .nuda-scrind__chev{width:10px;height:10px;color:#63636e}
      @keyframes _si-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}
      @keyframes _si-wheel{0%{transform:translateY(0);opacity:1}50%{transform:translateY(8px);opacity:.4}100%{transform:translateY(0);opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Scroll Indicator — typically sits at the bottom of a hero section -->
<div class="nuda-scrind">
  <span class="nuda-scrind__label">Scroll</span>
  <div class="nuda-scrind__mouse">
    <span class="nuda-scrind__wheel"></span>
  </div>
  <svg class="nuda-scrind__chev" viewBox="0 0 12 12" fill="none"
       stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 4.5 L6 7.5 L9 4.5" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Scroll Indicator
   Tiny "mouse" with a wheel that scrolls; whole thing bobs.
   Customize: --si-accent */

.nuda-scrind {
  --si-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  animation: nuda-si-bob 2s ease-in-out infinite;
}

.nuda-scrind__label {
  font: 700 0.625rem ui-sans-serif, system-ui, sans-serif;
  color: #63636e;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.nuda-scrind__mouse {
  position: relative;
  width: 22px;
  height: 36px;
  border: 1.5px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.nuda-scrind__wheel {
  width: 2px;
  height: 6px;
  background: var(--si-accent);
  border-radius: 1px;
  box-shadow: 0 0 4px rgba(228, 255, 84, 0.5);
  animation: nuda-si-wheel 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

.nuda-scrind__chev {
  width: 12px;
  height: 12px;
  color: #63636e;
}

@keyframes nuda-si-bob {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(6px); }
}

@keyframes nuda-si-wheel {
  0%   { transform: translateY(0);    opacity: 1; }
  50%  { transform: translateY(10px); opacity: 0.4; }
  100% { transform: translateY(0);    opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-scrind,
  .nuda-scrind__wheel { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 10. Logo Cloud Hero ─────────────── */
  {
    id: "logo-cloud-hero",
    name: "Logo Cloud Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-logoc">
        <p className="nuda-logoc__label">Powering teams at</p>
        <div className="nuda-logoc__row">
          <span className="nuda-logoc__logo">◆ ARC</span>
          <span className="nuda-logoc__logo">▲ NUM</span>
          <span className="nuda-logoc__logo">● HUB</span>
          <span className="nuda-logoc__logo">■ STK</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-logoc{display:flex;flex-direction:column;align-items:center;gap:10px;padding:14px 8px;width:170px}
      .nuda-logoc__label{font:600 9px ui-sans-serif,system-ui;color:#63636e;text-transform:uppercase;letter-spacing:.1em;margin:0}
      .nuda-logoc__row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;justify-content:center}
      .nuda-logoc__logo{font:800 10px ui-sans-serif,system-ui;color:#a1a1aa;filter:grayscale(1);opacity:.6;transition:filter .3s,opacity .3s,color .3s,transform .25s;cursor:pointer;animation:_lc-up .5s cubic-bezier(.4,0,.2,1) backwards}
      .nuda-logoc__logo:nth-child(1){animation-delay:0s}
      .nuda-logoc__logo:nth-child(2){animation-delay:.1s}
      .nuda-logoc__logo:nth-child(3){animation-delay:.2s}
      .nuda-logoc__logo:nth-child(4){animation-delay:.3s}
      .nuda-logoc__logo:hover{filter:grayscale(0);opacity:1;color:#e4ff54;transform:translateY(-2px)}
      @keyframes _lc-up{from{opacity:0;transform:translateY(6px)}to{opacity:.6;transform:translateY(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Logo Cloud Hero — replace text logos with your <img> sources -->
<section class="nuda-logoc">
  <p class="nuda-logoc__label">Powering teams at</p>
  <div class="nuda-logoc__row">
    <span class="nuda-logoc__logo">◆ ARC</span>
    <span class="nuda-logoc__logo">▲ NUM</span>
    <span class="nuda-logoc__logo">● HUB</span>
    <span class="nuda-logoc__logo">■ STK</span>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Logo Cloud Hero
   Greyscale logos that come to color on hover; subtle stagger entrance.
   Customize: --logoc-accent */

.nuda-logoc {
  --logoc-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 60px 24px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.nuda-logoc__label {
  font: 600 0.75rem ui-sans-serif, system-ui, sans-serif;
  color: #63636e;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0;
}

.nuda-logoc__row {
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.nuda-logoc__logo {
  font: 800 1.25rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
  filter: grayscale(1);
  opacity: 0.6;
  transition:
    filter 0.3s,
    opacity 0.3s,
    color 0.3s,
    transform 0.25s;
  cursor: pointer;
  animation: nuda-lc-up 0.5s cubic-bezier(0.4, 0, 0.2, 1) backwards;
}

.nuda-logoc__logo:nth-child(1) { animation-delay: 0s; }
.nuda-logoc__logo:nth-child(2) { animation-delay: 0.1s; }
.nuda-logoc__logo:nth-child(3) { animation-delay: 0.2s; }
.nuda-logoc__logo:nth-child(4) { animation-delay: 0.3s; }

.nuda-logoc__logo:hover {
  filter: grayscale(0);
  opacity: 1;
  color: var(--logoc-accent);
  transform: translateY(-2px);
}

@keyframes nuda-lc-up {
  from { opacity: 0;   transform: translateY(8px); }
  to   { opacity: 0.6; transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-logoc__logo { animation: none; opacity: 0.6; }
}`,
      },
    ],
  },

  /* ─────────────── 11. Aurora Hero ─────────────── */
  {
    id: "aurora-hero",
    name: "Aurora Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-aurorah">
        <div className="nuda-aurorah__band nuda-aurorah__band--a" />
        <div className="nuda-aurorah__band nuda-aurorah__band--b" />
        <div className="nuda-aurorah__content">
          <h2>Aurora awaits.</h2>
          <span className="nuda-aurorah__btn">Explore</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-aurorah{position:relative;width:170px;height:100px;border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#09090b}
      .nuda-aurorah__band{position:absolute;inset:-40% -20%;filter:blur(22px);opacity:.55;mix-blend-mode:screen;will-change:transform}
      .nuda-aurorah__band--a{background:radial-gradient(50% 40% at 40% 50%,#e4ff54 0%,transparent 70%);animation:_aurorah-a 9s ease-in-out infinite}
      .nuda-aurorah__band--b{background:radial-gradient(45% 50% at 65% 45%,#34d399 0%,transparent 70%);animation:_aurorah-b 11s ease-in-out infinite}
      .nuda-aurorah__content{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center}
      .nuda-aurorah__content h2{font:800 14px ui-sans-serif,system-ui;color:#fafafa;margin:0;letter-spacing:-.02em}
      .nuda-aurorah__btn{padding:4px 12px;background:rgba(228,255,84,.12);border:1px solid rgba(228,255,84,.3);color:#e4ff54;font:700 9px ui-sans-serif,system-ui;border-radius:999px;cursor:pointer}
      @keyframes _aurorah-a{0%,100%{transform:translate(-6%,0) scale(1)}50%{transform:translate(10%,-6%) scale(1.15)}}
      @keyframes _aurorah-b{0%,100%{transform:translate(6%,4%) scale(1.1)}50%{transform:translate(-8%,-4%) scale(.9)}}
      @media (prefers-reduced-motion:reduce){.nuda-aurorah__band{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Aurora Hero — drifting aurora bands behind the headline -->
<section class="nuda-aurorah">
  <div class="nuda-aurorah__band nuda-aurorah__band--a"></div>
  <div class="nuda-aurorah__band nuda-aurorah__band--b"></div>
  <div class="nuda-aurorah__content">
    <h2>Aurora awaits.</h2>
    <button class="nuda-aurorah__btn" type="button">Explore</button>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Aurora Hero
   Two screen-blended radial bands drift behind the headline.
   Customize: band colors, --aurorah-accent. */

.nuda-aurorah {
  --aurorah-accent: #e4ff54;
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09090b;
}

.nuda-aurorah__band {
  position: absolute;
  inset: -40% -20%;
  filter: blur(60px);
  opacity: 0.55;
  mix-blend-mode: screen;
  will-change: transform;
}

.nuda-aurorah__band--a {
  background: radial-gradient(50% 40% at 40% 50%, var(--aurorah-accent) 0%, transparent 70%);
  animation: nuda-aurorah-a 9s ease-in-out infinite;
}

.nuda-aurorah__band--b {
  background: radial-gradient(45% 50% at 65% 45%, #34d399 0%, transparent 70%);
  animation: nuda-aurorah-b 11s ease-in-out infinite;
}

.nuda-aurorah__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.nuda-aurorah__content h2 {
  font: 800 clamp(2rem, 5vw, 3.5rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  letter-spacing: -0.02em;
}

.nuda-aurorah__btn {
  padding: 10px 24px;
  background: rgba(228, 255, 84, 0.12);
  border: 1px solid rgba(228, 255, 84, 0.3);
  color: var(--aurorah-accent);
  font: 700 0.95rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 999px;
  cursor: pointer;
}

@keyframes nuda-aurorah-a {
  0%, 100% { transform: translate(-6%, 0) scale(1); }
  50%      { transform: translate(10%, -6%) scale(1.15); }
}

@keyframes nuda-aurorah-b {
  0%, 100% { transform: translate(6%, 4%) scale(1.1); }
  50%      { transform: translate(-8%, -4%) scale(0.9); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-aurorah__band { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 12. Grain Gradient Hero ─────────────── */
  {
    id: "grain-gradient-hero",
    name: "Grain Gradient Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-grainh">
        <div className="nuda-grainh__grain" />
        <div className="nuda-grainh__content">
          <h2>Texture matters.</h2>
          <span className="nuda-grainh__btn">Get started</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-grainh{position:relative;width:170px;height:100px;border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#1a1a05,#09090b 55%,#0d1a12);background-size:200% 200%;animation:_grainh-shift 10s ease infinite}
      .nuda-grainh__grain{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.18) .5px,transparent .5px);background-size:3px 3px;opacity:.35;mix-blend-mode:overlay;animation:_grainh-grain .6s steps(3) infinite}
      .nuda-grainh__content{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center}
      .nuda-grainh__content h2{font:800 14px ui-sans-serif,system-ui;color:#fafafa;margin:0;letter-spacing:-.02em}
      .nuda-grainh__btn{padding:4px 12px;background:#e4ff54;border:none;color:#09090b;font:700 9px ui-sans-serif,system-ui;border-radius:6px;cursor:pointer}
      @keyframes _grainh-shift{0%,100%{background-position:0% 0%}50%{background-position:100% 100%}}
      @keyframes _grainh-grain{0%{transform:translate(0,0)}33%{transform:translate(-1px,1px)}66%{transform:translate(1px,-1px)}100%{transform:translate(0,0)}}
      @media (prefers-reduced-motion:reduce){.nuda-grainh,.nuda-grainh__grain{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Grain Gradient Hero — drifting gradient + film-grain overlay -->
<section class="nuda-grainh">
  <div class="nuda-grainh__grain"></div>
  <div class="nuda-grainh__content">
    <h2>Texture matters.</h2>
    <button class="nuda-grainh__btn" type="button">Get started</button>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Grain Gradient Hero
   Slowly shifting dark gradient with a stepped film-grain overlay.
   Customize: gradient stops, --grainh-accent. */

.nuda-grainh {
  --grainh-accent: #e4ff54;
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a05, #09090b 55%, #0d1a12);
  background-size: 200% 200%;
  animation: nuda-grainh-shift 10s ease infinite;
}

.nuda-grainh__grain {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(255, 255, 255, 0.18) 0.5px, transparent 0.5px);
  background-size: 3px 3px;
  opacity: 0.35;
  mix-blend-mode: overlay;
  animation: nuda-grainh-grain 0.6s steps(3) infinite;
}

.nuda-grainh__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.nuda-grainh__content h2 {
  font: 800 clamp(2rem, 5vw, 3.5rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  letter-spacing: -0.02em;
}

.nuda-grainh__btn {
  padding: 10px 24px;
  background: var(--grainh-accent);
  border: none;
  color: #09090b;
  font: 700 0.95rem ui-sans-serif, system-ui, sans-serif;
  border-radius: 8px;
  cursor: pointer;
}

@keyframes nuda-grainh-shift {
  0%, 100% { background-position: 0% 0%; }
  50%      { background-position: 100% 100%; }
}

@keyframes nuda-grainh-grain {
  0%   { transform: translate(0, 0); }
  33%  { transform: translate(-1px, 1px); }
  66%  { transform: translate(1px, -1px); }
  100% { transform: translate(0, 0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-grainh, .nuda-grainh__grain { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 13. Spotlight Hero ─────────────── */
  {
    id: "spotlight-hero",
    name: "Spotlight Hero",
    category: "Hero Sections",
    preview: (
      <div
        className="nuda-spoth"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
        }}
      >
        <div className="nuda-spoth__content">
          <h2>Follow the light.</h2>
          <span className="nuda-spoth__sub">Move your cursor.</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-spoth{--x:50%;--y:50%;position:relative;width:170px;height:100px;border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#09090b;border:1px solid rgba(255,255,255,.06)}
      .nuda-spoth::before{content:"";position:absolute;inset:0;background:radial-gradient(140px circle at var(--x) var(--y),rgba(228,255,84,.18),transparent 60%);transition:background .08s linear}
      .nuda-spoth__content{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center}
      .nuda-spoth__content h2{font:800 14px ui-sans-serif,system-ui;color:#fafafa;margin:0;letter-spacing:-.02em}
      .nuda-spoth__sub{font:500 9px ui-sans-serif,system-ui;color:#a1a1aa}
      @media (prefers-reduced-motion:reduce){.nuda-spoth::before{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Spotlight Hero — cursor-tracking spotlight via --x / --y -->
<section class="nuda-spoth" id="spoth">
  <div class="nuda-spoth__content">
    <h2>Follow the light.</h2>
    <span class="nuda-spoth__sub">Move your cursor.</span>
  </div>
</section>

<script>
  const el = document.getElementById("spoth");
  el.addEventListener("pointermove", (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", (e.clientX - r.left) + "px");
    el.style.setProperty("--y", (e.clientY - r.top) + "px");
  });
</script>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Spotlight Hero
   Radial spotlight tracks the cursor through --x / --y custom properties.
   Customize: spotlight radius & --spoth-accent. */

.nuda-spoth {
  --x: 50%;
  --y: 50%;
  --spoth-accent: 228, 255, 84;
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09090b;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.nuda-spoth::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    300px circle at var(--x) var(--y),
    rgba(var(--spoth-accent), 0.18),
    transparent 60%
  );
  transition: background 0.08s linear;
}

.nuda-spoth__content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}

.nuda-spoth__content h2 {
  font: 800 clamp(2rem, 5vw, 3.5rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  letter-spacing: -0.02em;
}

.nuda-spoth__sub {
  font: 500 1rem ui-sans-serif, system-ui, sans-serif;
  color: #a1a1aa;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-spoth::before { transition: none; }
}`,
      },
    ],
  },

  /* ─────────────── 14. Marquee Hero ─────────────── */
  {
    id: "marquee-hero",
    name: "Marquee Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-marqh">
        <div className="nuda-marqh__content">
          <h2>Always shipping.</h2>
        </div>
        <div className="nuda-marqh__strip">
          <div className="nuda-marqh__track">
            <span>SHIP&nbsp;·&nbsp;ITERATE&nbsp;·&nbsp;REPEAT&nbsp;·&nbsp;</span>
            <span aria-hidden="true">SHIP&nbsp;·&nbsp;ITERATE&nbsp;·&nbsp;REPEAT&nbsp;·&nbsp;</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-marqh{position:relative;width:170px;height:100px;border-radius:10px;overflow:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:#09090b}
      .nuda-marqh__content h2{font:800 14px ui-sans-serif,system-ui;color:#fafafa;margin:0;letter-spacing:-.02em}
      .nuda-marqh__strip{position:absolute;bottom:0;left:0;right:0;overflow:hidden;background:#e4ff54;padding:3px 0}
      .nuda-marqh__track{display:flex;width:max-content;animation:_marqh-roll 6s linear infinite;will-change:transform}
      .nuda-marqh__track span{font:800 9px ui-sans-serif,system-ui;color:#09090b;letter-spacing:.08em;white-space:nowrap}
      @keyframes _marqh-roll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
      @media (prefers-reduced-motion:reduce){.nuda-marqh__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Marquee Hero — headline above an infinite scrolling strip.
     Duplicate the span (aria-hidden) for a seamless loop. -->
<section class="nuda-marqh">
  <div class="nuda-marqh__content">
    <h2>Always shipping.</h2>
  </div>
  <div class="nuda-marqh__strip">
    <div class="nuda-marqh__track">
      <span>SHIP · ITERATE · REPEAT · </span>
      <span aria-hidden="true">SHIP · ITERATE · REPEAT · </span>
    </div>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Marquee Hero
   Headline with an infinite scrolling brand strip pinned to the bottom.
   The track is duplicated and slid -50% for a seamless loop.
   Customize: --marqh-accent, scroll duration. */

.nuda-marqh {
  --marqh-accent: #e4ff54;
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background: #09090b;
}

.nuda-marqh__content h2 {
  font: 800 clamp(2rem, 5vw, 3.5rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  letter-spacing: -0.02em;
}

.nuda-marqh__strip {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  background: var(--marqh-accent);
  padding: 10px 0;
}

.nuda-marqh__track {
  display: flex;
  width: max-content;
  animation: nuda-marqh-roll 14s linear infinite;
  will-change: transform;
}

.nuda-marqh__track span {
  font: 800 0.95rem ui-sans-serif, system-ui, sans-serif;
  color: #09090b;
  letter-spacing: 0.08em;
  white-space: nowrap;
}

@keyframes nuda-marqh-roll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-marqh__track { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 15. Split Reveal Hero ─────────────── */
  {
    id: "split-reveal-hero",
    name: "Split Reveal Hero",
    category: "Hero Sections",
    preview: (
      <h1 className="nuda-srevealh">
        <span className="nuda-srevealh__line"><span style={{ ["--d" as string]: "0s" }}>Rise</span></span>
        <span className="nuda-srevealh__line"><span style={{ ["--d" as string]: ".12s" }}>and</span></span>
        <span className="nuda-srevealh__line"><span style={{ ["--d" as string]: ".24s" }} className="is-accent">reveal.</span></span>
      </h1>
    ),
    cssInline: `
      .nuda-srevealh{display:flex;flex-direction:column;align-items:center;gap:0;font:800 18px ui-sans-serif,system-ui;color:#fafafa;margin:0;line-height:1.05;letter-spacing:-.02em;padding:14px;text-align:center;width:170px}
      .nuda-srevealh__line{display:block;overflow:hidden}
      .nuda-srevealh__line>span{display:inline-block;transform:translateY(105%);animation:_srevealh-rise .7s cubic-bezier(.16,1,.3,1) var(--d) forwards}
      .nuda-srevealh .is-accent{background:linear-gradient(180deg,#e4ff54,#a8c93a);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
      @keyframes _srevealh-rise{to{transform:translateY(0)}}
      @media (prefers-reduced-motion:reduce){.nuda-srevealh__line>span{animation:none;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Split Reveal Hero — each line's word rises out of a clipped mask.
     The outer line clips; the inner span animates from translateY(105%). -->
<h1 class="nuda-srevealh">
  <span class="nuda-srevealh__line"><span style="--d: 0s">Rise</span></span>
  <span class="nuda-srevealh__line"><span style="--d: .12s">and</span></span>
  <span class="nuda-srevealh__line"><span style="--d: .24s" class="is-accent">reveal.</span></span>
</h1>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Split Reveal Hero
   Headline words rise out of clipped lines on load, staggered via --d.
   Customize: --srevealh-accent, font sizing, stagger. */

.nuda-srevealh {
  --srevealh-accent: #e4ff54;
  display: flex;
  flex-direction: column;
  align-items: center;
  font: 800 clamp(2.5rem, 7vw, 5rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  line-height: 1.05;
  letter-spacing: -0.02em;
  padding: 60px 24px;
  text-align: center;
}

.nuda-srevealh__line {
  display: block;
  overflow: hidden;
}

.nuda-srevealh__line > span {
  display: inline-block;
  transform: translateY(105%);
  animation: nuda-srevealh-rise 0.7s cubic-bezier(0.16, 1, 0.3, 1) var(--d, 0s) forwards;
}

.nuda-srevealh .is-accent {
  background: linear-gradient(180deg, var(--srevealh-accent), #a8c93a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes nuda-srevealh-rise {
  to { transform: translateY(0); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-srevealh__line > span { animation: none; transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── 16. Glass Hero ─────────────── */
  {
    id: "glass-hero",
    name: "Glass Hero",
    category: "Hero Sections",
    preview: (
      <div className="nuda-glassh">
        <div className="nuda-glassh__blob nuda-glassh__blob--a" />
        <div className="nuda-glassh__blob nuda-glassh__blob--b" />
        <div className="nuda-glassh__panel">
          <h2>Crystal clear.</h2>
          <p>Frosted glass, sharp focus.</p>
          <span className="nuda-glassh__btn">Try it</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-glassh{position:relative;width:170px;height:100px;border-radius:10px;overflow:hidden;display:flex;align-items:center;justify-content:center;background:#09090b}
      .nuda-glassh__blob{position:absolute;width:90px;height:90px;border-radius:50%;filter:blur(18px);opacity:.6;will-change:transform}
      .nuda-glassh__blob--a{background:#e4ff54;top:-20px;left:-10px;animation:_glassh-a 8s ease-in-out infinite}
      .nuda-glassh__blob--b{background:#8b5cf6;bottom:-20px;right:-10px;animation:_glassh-b 10s ease-in-out infinite}
      .nuda-glassh__panel{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:3px;text-align:center;padding:10px 14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);border-radius:10px;backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);box-shadow:0 8px 24px -8px rgba(0,0,0,.5)}
      .nuda-glassh__panel h2{font:800 13px ui-sans-serif,system-ui;color:#fafafa;margin:0;letter-spacing:-.02em}
      .nuda-glassh__panel p{font:500 8px ui-sans-serif,system-ui;color:#cfcfd6;margin:0}
      .nuda-glassh__btn{margin-top:3px;padding:3px 10px;background:#e4ff54;color:#09090b;border:none;border-radius:5px;font:700 8px ui-sans-serif,system-ui;cursor:pointer}
      @keyframes _glassh-a{0%,100%{transform:translate(0,0)}50%{transform:translate(14px,10px)}}
      @keyframes _glassh-b{0%,100%{transform:translate(0,0)}50%{transform:translate(-12px,-8px)}}
      @media (prefers-reduced-motion:reduce){.nuda-glassh__blob{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Glass Hero — frosted glass panel over drifting color blobs -->
<section class="nuda-glassh">
  <div class="nuda-glassh__blob nuda-glassh__blob--a"></div>
  <div class="nuda-glassh__blob nuda-glassh__blob--b"></div>
  <div class="nuda-glassh__panel">
    <h2>Crystal clear.</h2>
    <p>Frosted glass, sharp focus.</p>
    <button class="nuda-glassh__btn" type="button">Try it</button>
  </div>
</section>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Glass Hero
   Glassmorphism panel floating over two drifting color blobs.
   Customize: blob colors, --glassh-accent, blur radius. */

.nuda-glassh {
  --glassh-accent: #e4ff54;
  position: relative;
  width: 100%;
  height: 420px;
  border-radius: 18px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #09090b;
}

.nuda-glassh__blob {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.6;
  will-change: transform;
}

.nuda-glassh__blob--a {
  background: var(--glassh-accent);
  top: -60px;
  left: -40px;
  animation: nuda-glassh-a 8s ease-in-out infinite;
}

.nuda-glassh__blob--b {
  background: #8b5cf6;
  bottom: -60px;
  right: -40px;
  animation: nuda-glassh-b 10s ease-in-out infinite;
}

.nuda-glassh__panel {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;
  padding: 32px 40px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 18px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 24px 60px -16px rgba(0, 0, 0, 0.5);
}

.nuda-glassh__panel h2 {
  font: 800 clamp(2rem, 5vw, 3.25rem) ui-sans-serif, system-ui, sans-serif;
  color: #fafafa;
  margin: 0;
  letter-spacing: -0.02em;
}

.nuda-glassh__panel p {
  font: 500 1rem ui-sans-serif, system-ui, sans-serif;
  color: #cfcfd6;
  margin: 0;
}

.nuda-glassh__btn {
  margin-top: 8px;
  padding: 10px 24px;
  background: var(--glassh-accent);
  color: #09090b;
  border: none;
  border-radius: 8px;
  font: 700 0.95rem ui-sans-serif, system-ui, sans-serif;
  cursor: pointer;
}

@keyframes nuda-glassh-a {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(40px, 30px); }
}

@keyframes nuda-glassh-b {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(-30px, -24px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-glassh__blob { animation: none; }
}`,
      },
    ],
  },
];
