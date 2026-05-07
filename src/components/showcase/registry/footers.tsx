import type { NudaComponent } from "./types";

export const footers: NudaComponent[] = [
  /* ─────────────── 1. Minimal Footer ─────────────── */
  {
    id: "minimal-footer",
    name: "Minimal Footer",
    category: "Footers",
    preview: (
      <footer className="nuda-footer-minimal">
        <span className="nuda-footer-minimal__brand">
          <span className="nuda-footer-minimal__dot" />
          NudaUI
        </span>
        <nav className="nuda-footer-minimal__nav">
          <a href="#">Docs</a>
          <a href="#">GitHub</a>
          <a href="#">X</a>
        </nav>
        <span className="nuda-footer-minimal__meta">© 2025</span>
      </footer>
    ),
    cssInline: `
      .nuda-footer-minimal{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:18px 22px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;font-size:13px;color:#a0a0a8;width:100%;max-width:520px;flex-wrap:wrap}
      .nuda-footer-minimal__brand{display:inline-flex;align-items:center;gap:8px;color:#fafafa;font-weight:600}
      .nuda-footer-minimal__dot{width:8px;height:8px;border-radius:50%;background:#e4ff54;box-shadow:0 0 12px #e4ff54;animation:_fmpulse 2.4s ease-in-out infinite}
      .nuda-footer-minimal__nav{display:flex;gap:18px}
      .nuda-footer-minimal__nav a{color:inherit;text-decoration:none;position:relative;transition:color .2s}
      .nuda-footer-minimal__nav a::after{content:'';position:absolute;left:0;bottom:-3px;width:0;height:1px;background:#e4ff54;transition:width .25s ease}
      .nuda-footer-minimal__nav a:hover{color:#fafafa}
      .nuda-footer-minimal__nav a:hover::after{width:100%}
      .nuda-footer-minimal__meta{font-variant-numeric:tabular-nums}
      @keyframes _fmpulse{0%,100%{opacity:.7}50%{opacity:1;transform:scale(1.15)}}
      @media(prefers-reduced-motion:reduce){.nuda-footer-minimal__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<footer class="nuda-footer-minimal">
  <span class="nuda-footer-minimal__brand">
    <span class="nuda-footer-minimal__dot"></span>
    NudaUI
  </span>
  <nav class="nuda-footer-minimal__nav">
    <a href="#">Docs</a>
    <a href="#">GitHub</a>
    <a href="#">X</a>
  </nav>
  <span class="nuda-footer-minimal__meta">© 2025</span>
</footer>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Minimal Footer
   A compact footer with a pulsing brand dot and underline-on-hover links.
   Customize: --footer-bg, --footer-fg, --footer-accent */

.nuda-footer-minimal {
  --footer-bg: rgba(255, 255, 255, 0.02);
  --footer-fg: #a0a0a8;
  --footer-accent: #e4ff54;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 22px;
  background: var(--footer-bg);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  font-size: 13px;
  color: var(--footer-fg);
  flex-wrap: wrap;
}

.nuda-footer-minimal__brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #fafafa;
  font-weight: 600;
}

.nuda-footer-minimal__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--footer-accent);
  box-shadow: 0 0 12px var(--footer-accent);
  animation: nuda-fm-pulse 2.4s ease-in-out infinite;
}

.nuda-footer-minimal__nav {
  display: flex;
  gap: 18px;
}

.nuda-footer-minimal__nav a {
  color: inherit;
  text-decoration: none;
  position: relative;
  transition: color 0.2s;
}

.nuda-footer-minimal__nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 1px;
  background: var(--footer-accent);
  transition: width 0.25s ease;
}

.nuda-footer-minimal__nav a:hover { color: #fafafa; }
.nuda-footer-minimal__nav a:hover::after { width: 100%; }

@keyframes nuda-fm-pulse {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; transform: scale(1.15); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-footer-minimal__dot { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 2. Newsletter Footer ─────────────── */
  {
    id: "newsletter-footer",
    name: "Newsletter Footer",
    category: "Footers",
    preview: (
      <footer className="nuda-footer-news">
        <div className="nuda-footer-news__copy">
          <h4>Stay in the loop</h4>
          <p>One short email a month. Zero spam.</p>
        </div>
        <form className="nuda-footer-news__form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="you@domain.com" aria-label="Email" />
          <button type="submit">Subscribe</button>
        </form>
      </footer>
    ),
    cssInline: `
      .nuda-footer-news{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:24px;background:linear-gradient(135deg,rgba(228,255,84,.06),rgba(255,255,255,.02));border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:560px;flex-wrap:wrap}
      .nuda-footer-news__copy h4{margin:0 0 4px;color:#fafafa;font-size:14px;font-weight:600}
      .nuda-footer-news__copy p{margin:0;color:#a0a0a8;font-size:12px}
      .nuda-footer-news__form{display:flex;gap:6px;background:rgba(0,0,0,.35);padding:5px;border:1px solid rgba(255,255,255,.08);border-radius:10px;transition:border-color .25s,box-shadow .25s}
      .nuda-footer-news__form:focus-within{border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.15)}
      .nuda-footer-news__form input{background:transparent;border:0;outline:none;color:#fafafa;font-size:12px;padding:6px 10px;width:170px}
      .nuda-footer-news__form input::placeholder{color:#63636e}
      .nuda-footer-news__form button{background:#e4ff54;color:#09090b;border:0;padding:6px 14px;border-radius:7px;font-size:12px;font-weight:600;cursor:pointer;transition:transform .15s,filter .2s}
      .nuda-footer-news__form button:hover{transform:translateY(-1px);filter:brightness(1.1)}
      .nuda-footer-news__form button:active{transform:translateY(0)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<footer class="nuda-footer-news">
  <div class="nuda-footer-news__copy">
    <h4>Stay in the loop</h4>
    <p>One short email a month. Zero spam.</p>
  </div>
  <form class="nuda-footer-news__form">
    <input type="email" placeholder="you@domain.com" aria-label="Email" />
    <button type="submit">Subscribe</button>
  </form>
</footer>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-footer-news {
  --accent: #e4ff54;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px;
  background: linear-gradient(135deg, rgba(228, 255, 84, 0.06), rgba(255, 255, 255, 0.02));
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  flex-wrap: wrap;
}

.nuda-footer-news__copy h4 {
  margin: 0 0 4px;
  color: #fafafa;
  font-size: 14px;
  font-weight: 600;
}

.nuda-footer-news__copy p {
  margin: 0;
  color: #a0a0a8;
  font-size: 12px;
}

.nuda-footer-news__form {
  display: flex;
  gap: 6px;
  background: rgba(0, 0, 0, 0.35);
  padding: 5px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  transition: border-color 0.25s, box-shadow 0.25s;
}

.nuda-footer-news__form:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(228, 255, 84, 0.15);
}

.nuda-footer-news__form input {
  background: transparent;
  border: 0;
  outline: none;
  color: #fafafa;
  font-size: 12px;
  padding: 6px 10px;
  width: 180px;
}

.nuda-footer-news__form button {
  background: var(--accent);
  color: #09090b;
  border: 0;
  padding: 6px 14px;
  border-radius: 7px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s, filter 0.2s;
}

.nuda-footer-news__form button:hover {
  transform: translateY(-1px);
  filter: brightness(1.1);
}`,
      },
    ],
  },

  /* ─────────────── 3. Mega Footer Grid ─────────────── */
  {
    id: "mega-footer-grid",
    name: "Mega Footer Grid",
    category: "Footers",
    preview: (
      <footer className="nuda-footer-mega">
        <div>
          <h5>Product</h5>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Changelog</a>
        </div>
        <div>
          <h5>Resources</h5>
          <a href="#">Docs</a>
          <a href="#">Guides</a>
          <a href="#">Support</a>
        </div>
        <div>
          <h5>Company</h5>
          <a href="#">About</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    ),
    cssInline: `
      .nuda-footer-mega{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;padding:24px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;width:100%;max-width:520px}
      .nuda-footer-mega h5{margin:0 0 10px;color:#fafafa;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
      .nuda-footer-mega a{display:block;color:#a0a0a8;text-decoration:none;font-size:12px;padding:3px 0;transition:color .2s,transform .2s,padding-left .25s ease}
      .nuda-footer-mega a:hover{color:#e4ff54;padding-left:8px}
      .nuda-footer-mega a{position:relative}
      .nuda-footer-mega a::before{content:'→';position:absolute;left:-14px;top:50%;transform:translateY(-50%);opacity:0;color:#e4ff54;transition:opacity .25s,left .25s}
      .nuda-footer-mega a:hover::before{opacity:1;left:-2px}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<footer class="nuda-footer-mega">
  <div>
    <h5>Product</h5>
    <a href="#">Features</a>
    <a href="#">Pricing</a>
    <a href="#">Changelog</a>
  </div>
  <div>
    <h5>Resources</h5>
    <a href="#">Docs</a>
    <a href="#">Guides</a>
    <a href="#">Support</a>
  </div>
  <div>
    <h5>Company</h5>
    <a href="#">About</a>
    <a href="#">Blog</a>
    <a href="#">Contact</a>
  </div>
</footer>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-footer-mega {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
}

.nuda-footer-mega h5 {
  margin: 0 0 10px;
  color: #fafafa;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.nuda-footer-mega a {
  display: block;
  color: #a0a0a8;
  text-decoration: none;
  font-size: 12px;
  padding: 3px 0;
  position: relative;
  transition: color 0.2s, padding-left 0.25s ease;
}

.nuda-footer-mega a::before {
  content: "→";
  position: absolute;
  left: -14px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  color: #e4ff54;
  transition: opacity 0.25s, left 0.25s;
}

.nuda-footer-mega a:hover {
  color: #e4ff54;
  padding-left: 8px;
}

.nuda-footer-mega a:hover::before {
  opacity: 1;
  left: -2px;
}`,
      },
    ],
  },

  /* ─────────────── 4. Aurora Glow Footer ─────────────── */
  {
    id: "aurora-glow-footer",
    name: "Aurora Glow Footer",
    category: "Footers",
    preview: (
      <footer className="nuda-footer-aurora">
        <span className="nuda-footer-aurora__bg" aria-hidden="true" />
        <div className="nuda-footer-aurora__inner">
          <span>NudaUI</span>
          <span>Crafted with zero npm installs</span>
        </div>
      </footer>
    ),
    cssInline: `
      .nuda-footer-aurora{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.06);border-radius:16px;background:#0c0c10;width:100%;max-width:520px;padding:28px 24px;isolation:isolate}
      .nuda-footer-aurora__bg{position:absolute;inset:-40%;background:conic-gradient(from 220deg at 50% 50%,#e4ff54 0%,#62b6ff 25%,#9d6dff 50%,#ff6dd4 75%,#e4ff54 100%);filter:blur(60px);opacity:.45;animation:_auroraSpin 18s linear infinite;z-index:-1}
      .nuda-footer-aurora__inner{display:flex;justify-content:space-between;align-items:center;color:#fafafa;font-size:13px;flex-wrap:wrap;gap:8px}
      .nuda-footer-aurora__inner span:first-child{font-weight:700;letter-spacing:-.01em}
      .nuda-footer-aurora__inner span:last-child{color:#a0a0a8;font-size:12px}
      @keyframes _auroraSpin{to{transform:rotate(360deg)}}
      @media(prefers-reduced-motion:reduce){.nuda-footer-aurora__bg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<footer class="nuda-footer-aurora">
  <span class="nuda-footer-aurora__bg" aria-hidden="true"></span>
  <div class="nuda-footer-aurora__inner">
    <span>NudaUI</span>
    <span>Crafted with zero npm installs</span>
  </div>
</footer>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-footer-aurora {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  background: #0c0c10;
  padding: 28px 24px;
  isolation: isolate;
}

.nuda-footer-aurora__bg {
  position: absolute;
  inset: -40%;
  background: conic-gradient(
    from 220deg at 50% 50%,
    #e4ff54 0%, #62b6ff 25%, #9d6dff 50%, #ff6dd4 75%, #e4ff54 100%
  );
  filter: blur(60px);
  opacity: 0.45;
  animation: nuda-aurora-spin 18s linear infinite;
  z-index: -1;
}

.nuda-footer-aurora__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fafafa;
  font-size: 13px;
  flex-wrap: wrap;
  gap: 8px;
}

@keyframes nuda-aurora-spin {
  to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-footer-aurora__bg { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 5. Status Footer ─────────────── */
  {
    id: "status-footer",
    name: "Status Footer",
    category: "Footers",
    preview: (
      <footer className="nuda-footer-status">
        <div className="nuda-footer-status__pill">
          <span className="nuda-footer-status__dot" />
          All systems operational
        </div>
        <span className="nuda-footer-status__meta">v0.1.0 · uptime 99.99%</span>
      </footer>
    ),
    cssInline: `
      .nuda-footer-status{display:flex;justify-content:space-between;align-items:center;gap:16px;padding:14px 18px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;font-size:12px;color:#a0a0a8;width:100%;max-width:520px;flex-wrap:wrap}
      .nuda-footer-status__pill{display:inline-flex;align-items:center;gap:8px;padding:5px 12px;background:rgba(110,231,183,.08);border:1px solid rgba(110,231,183,.2);border-radius:999px;color:#6ee7b7;font-weight:500}
      .nuda-footer-status__dot{width:7px;height:7px;border-radius:50%;background:#6ee7b7;position:relative}
      .nuda-footer-status__dot::after{content:'';position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(110,231,183,.6);animation:_statusPing 2s ease-out infinite}
      @keyframes _statusPing{0%{transform:scale(.8);opacity:.8}100%{transform:scale(1.8);opacity:0}}
      .nuda-footer-status__meta{font-variant-numeric:tabular-nums;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px}
      @media(prefers-reduced-motion:reduce){.nuda-footer-status__dot::after{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<footer class="nuda-footer-status">
  <div class="nuda-footer-status__pill">
    <span class="nuda-footer-status__dot"></span>
    All systems operational
  </div>
  <span class="nuda-footer-status__meta">v0.1.0 · uptime 99.99%</span>
</footer>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-footer-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  font-size: 12px;
  color: #a0a0a8;
}

.nuda-footer-status__pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 12px;
  background: rgba(110, 231, 183, 0.08);
  border: 1px solid rgba(110, 231, 183, 0.2);
  border-radius: 999px;
  color: #6ee7b7;
  font-weight: 500;
}

.nuda-footer-status__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #6ee7b7;
  position: relative;
}

.nuda-footer-status__dot::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid rgba(110, 231, 183, 0.6);
  animation: nuda-status-ping 2s ease-out infinite;
}

@keyframes nuda-status-ping {
  0% { transform: scale(0.8); opacity: 0.8; }
  100% { transform: scale(1.8); opacity: 0; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-footer-status__dot::after { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 6. Sticky Bottom Bar ─────────────── */
  {
    id: "sticky-footer-bar",
    name: "Sticky Bottom Bar",
    category: "Footers",
    preview: (
      <div className="nuda-footer-sticky-wrap">
        <div className="nuda-footer-sticky">
          <span>🍪 We use cookies. Strictly necessary ones.</span>
          <div className="nuda-footer-sticky__actions">
            <button className="nuda-footer-sticky__ghost">Decline</button>
            <button className="nuda-footer-sticky__primary">Accept</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-footer-sticky-wrap{width:100%;max-width:520px;display:flex;justify-content:center}
      .nuda-footer-sticky{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 16px;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#fafafa;font-size:12px;width:100%;animation:_stickyRise .6s cubic-bezier(.16,1,.3,1) both}
      .nuda-footer-sticky__actions{display:flex;gap:6px;flex-shrink:0}
      .nuda-footer-sticky__ghost,.nuda-footer-sticky__primary{padding:5px 12px;border-radius:7px;font-size:11px;cursor:pointer;border:0;font-weight:500;transition:transform .15s,filter .2s,background .2s}
      .nuda-footer-sticky__ghost{background:transparent;color:#a0a0a8;border:1px solid rgba(255,255,255,.08)}
      .nuda-footer-sticky__ghost:hover{background:rgba(255,255,255,.04);color:#fafafa}
      .nuda-footer-sticky__primary{background:#e4ff54;color:#09090b}
      .nuda-footer-sticky__primary:hover{transform:translateY(-1px);filter:brightness(1.1)}
      @keyframes _stickyRise{from{transform:translateY(28px);opacity:0}to{transform:translateY(0);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-footer-sticky{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-footer-sticky">
  <span>🍪 We use cookies. Strictly necessary ones.</span>
  <div class="nuda-footer-sticky__actions">
    <button class="nuda-footer-sticky__ghost">Decline</button>
    <button class="nuda-footer-sticky__primary">Accept</button>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-footer-sticky {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 16px;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #fafafa;
  font-size: 12px;
  animation: nuda-sticky-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-footer-sticky__actions {
  display: flex;
  gap: 6px;
  flex-shrink: 0;
}

.nuda-footer-sticky__ghost,
.nuda-footer-sticky__primary {
  padding: 5px 12px;
  border-radius: 7px;
  font-size: 11px;
  cursor: pointer;
  border: 0;
  font-weight: 500;
  transition: transform 0.15s, filter 0.2s, background 0.2s;
}

.nuda-footer-sticky__ghost {
  background: transparent;
  color: #a0a0a8;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.nuda-footer-sticky__primary {
  background: #e4ff54;
  color: #09090b;
}

@keyframes nuda-sticky-rise {
  from { transform: translateY(28px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-footer-sticky { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 7. Marquee Footer ─────────────── */
  {
    id: "marquee-footer",
    name: "Marquee Footer",
    category: "Footers",
    preview: (
      <footer className="nuda-footer-marquee">
        <div className="nuda-footer-marquee__track">
          <span>NudaUI · Zero deps · Copy-paste · Animations · Framework agnostic ·&nbsp;</span>
          <span>NudaUI · Zero deps · Copy-paste · Animations · Framework agnostic ·&nbsp;</span>
        </div>
      </footer>
    ),
    cssInline: `
      .nuda-footer-marquee{overflow:hidden;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);padding:14px 0;width:100%;max-width:520px;mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent)}
      .nuda-footer-marquee__track{display:flex;width:max-content;animation:_fmqScroll 22s linear infinite;color:#a0a0a8;font-size:12px;font-weight:500;letter-spacing:.04em}
      .nuda-footer-marquee:hover .nuda-footer-marquee__track{animation-play-state:paused}
      @keyframes _fmqScroll{to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-footer-marquee__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<footer class="nuda-footer-marquee">
  <div class="nuda-footer-marquee__track">
    <span>NudaUI · Zero deps · Copy-paste · Animations · Framework agnostic ·&nbsp;</span>
    <span>NudaUI · Zero deps · Copy-paste · Animations · Framework agnostic ·&nbsp;</span>
  </div>
</footer>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-footer-marquee {
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 14px 0;
  mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
}

.nuda-footer-marquee__track {
  display: flex;
  width: max-content;
  animation: nuda-fmq-scroll 22s linear infinite;
  color: #a0a0a8;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
}

.nuda-footer-marquee:hover .nuda-footer-marquee__track {
  animation-play-state: paused;
}

@keyframes nuda-fmq-scroll {
  to { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-footer-marquee__track { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── 8. Big Brand Footer ─────────────── */
  {
    id: "big-brand-footer",
    name: "Big Brand Footer",
    category: "Footers",
    preview: (
      <footer className="nuda-footer-brand">
        <div className="nuda-footer-brand__title">NUDA<span>UI</span></div>
        <div className="nuda-footer-brand__meta">
          <span>© 2025</span>
          <span>·</span>
          <a href="#">Privacy</a>
          <span>·</span>
          <a href="#">Terms</a>
        </div>
      </footer>
    ),
    cssInline: `
      .nuda-footer-brand{display:flex;flex-direction:column;align-items:flex-start;padding:24px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:16px;width:100%;max-width:520px;overflow:hidden}
      .nuda-footer-brand__title{font-size:clamp(56px,12vw,96px);line-height:1;font-weight:900;letter-spacing:-.04em;color:#fafafa;background:linear-gradient(180deg,#fafafa 0%,#fafafa 60%,transparent 130%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:_brandSlideIn 1s cubic-bezier(.16,1,.3,1) both}
      .nuda-footer-brand__title span{color:#e4ff54;-webkit-text-fill-color:#e4ff54}
      .nuda-footer-brand__meta{display:flex;gap:8px;color:#63636e;font-size:12px;margin-top:8px}
      .nuda-footer-brand__meta a{color:#a0a0a8;text-decoration:none;transition:color .2s}
      .nuda-footer-brand__meta a:hover{color:#e4ff54}
      @keyframes _brandSlideIn{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-footer-brand__title{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<footer class="nuda-footer-brand">
  <div class="nuda-footer-brand__title">NUDA<span>UI</span></div>
  <div class="nuda-footer-brand__meta">
    <span>© 2025</span>
    <span>·</span>
    <a href="#">Privacy</a>
    <span>·</span>
    <a href="#">Terms</a>
  </div>
</footer>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  overflow: hidden;
}

.nuda-footer-brand__title {
  font-size: clamp(56px, 12vw, 96px);
  line-height: 1;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: #fafafa;
  background: linear-gradient(180deg, #fafafa 0%, #fafafa 60%, transparent 130%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: nuda-brand-slide 1s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.nuda-footer-brand__title span {
  color: #e4ff54;
  -webkit-text-fill-color: #e4ff54;
}

.nuda-footer-brand__meta {
  display: flex;
  gap: 8px;
  color: #63636e;
  font-size: 12px;
  margin-top: 8px;
}

@keyframes nuda-brand-slide {
  from { opacity: 0; transform: translateY(40px); }
  to   { opacity: 1; transform: translateY(0); }
}`,
      },
    ],
  },

  /* ─────────────── 9. Social Stack Footer ─────────────── */
  {
    id: "social-stack-footer",
    name: "Social Stack Footer",
    category: "Footers",
    preview: (
      <footer className="nuda-footer-social">
        <span>Follow along</span>
        <div className="nuda-footer-social__stack">
          {["X", "Gh", "Yt", "Li", "Ig"].map((s, i) => (
            <a key={i} href="#" className="nuda-footer-social__chip" style={{ animationDelay: `${i * 60}ms` }}>{s}</a>
          ))}
        </div>
      </footer>
    ),
    cssInline: `
      .nuda-footer-social{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 22px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;color:#a0a0a8;font-size:13px;width:100%;max-width:520px;flex-wrap:wrap}
      .nuda-footer-social__stack{display:flex;gap:6px}
      .nuda-footer-social__chip{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:8px;color:#fafafa;text-decoration:none;font-size:11px;font-weight:600;animation:_chipPop .5s cubic-bezier(.16,1,.3,1) both;transition:transform .2s,background .2s,border-color .2s,box-shadow .25s}
      .nuda-footer-social__chip:hover{transform:translateY(-3px) rotate(-3deg);background:rgba(228,255,84,.1);border-color:#e4ff54;color:#e4ff54;box-shadow:0 6px 18px -8px rgba(228,255,84,.6)}
      @keyframes _chipPop{from{opacity:0;transform:translateY(8px) scale(.8)}to{opacity:1;transform:translateY(0) scale(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-footer-social__chip{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<footer class="nuda-footer-social">
  <span>Follow along</span>
  <div class="nuda-footer-social__stack">
    <a href="#" class="nuda-footer-social__chip">X</a>
    <a href="#" class="nuda-footer-social__chip">Gh</a>
    <a href="#" class="nuda-footer-social__chip">Yt</a>
    <a href="#" class="nuda-footer-social__chip">Li</a>
    <a href="#" class="nuda-footer-social__chip">Ig</a>
  </div>
</footer>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-footer-social {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 22px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 14px;
  color: #a0a0a8;
  font-size: 13px;
}

.nuda-footer-social__stack {
  display: flex;
  gap: 6px;
}

.nuda-footer-social__chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  color: #fafafa;
  text-decoration: none;
  font-size: 11px;
  font-weight: 600;
  transition:
    transform 0.2s,
    background 0.2s,
    border-color 0.2s,
    box-shadow 0.25s;
}

.nuda-footer-social__chip:hover {
  transform: translateY(-3px) rotate(-3deg);
  background: rgba(228, 255, 84, 0.1);
  border-color: #e4ff54;
  color: #e4ff54;
  box-shadow: 0 6px 18px -8px rgba(228, 255, 84, 0.6);
}`,
      },
    ],
  },

  /* ─────────────── 10. Back to Top Footer ─────────────── */
  {
    id: "back-to-top-footer",
    name: "Back to Top Footer",
    category: "Footers",
    preview: (
      <footer className="nuda-footer-totop">
        <span>You made it to the bottom 👋</span>
        <a href="#top" className="nuda-footer-totop__btn" aria-label="Back to top">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </a>
      </footer>
    ),
    cssInline: `
      .nuda-footer-totop{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 18px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;color:#a0a0a8;font-size:13px;width:100%;max-width:520px}
      .nuda-footer-totop__btn{display:inline-flex;align-items:center;justify-content:center;width:36px;height:36px;background:rgba(228,255,84,.08);border:1px solid rgba(228,255,84,.2);border-radius:10px;color:#e4ff54;cursor:pointer;transition:transform .25s ease,background .2s;text-decoration:none}
      .nuda-footer-totop__btn svg{width:16px;height:16px}
      .nuda-footer-totop__btn:hover{background:rgba(228,255,84,.15);transform:translateY(-3px)}
      .nuda-footer-totop__btn:hover svg{animation:_arrowBounce .8s ease-in-out infinite}
      @keyframes _arrowBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
      @media(prefers-reduced-motion:reduce){.nuda-footer-totop__btn:hover svg{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<footer class="nuda-footer-totop">
  <span>You made it to the bottom 👋</span>
  <a href="#top" class="nuda-footer-totop__btn" aria-label="Back to top">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 15l-6-6-6 6" />
    </svg>
  </a>
</footer>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `.nuda-footer-totop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  color: #a0a0a8;
  font-size: 13px;
}

.nuda-footer-totop__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: rgba(228, 255, 84, 0.08);
  border: 1px solid rgba(228, 255, 84, 0.2);
  border-radius: 10px;
  color: #e4ff54;
  cursor: pointer;
  transition: transform 0.25s ease, background 0.2s;
  text-decoration: none;
}

.nuda-footer-totop__btn svg {
  width: 16px;
  height: 16px;
}

.nuda-footer-totop__btn:hover {
  background: rgba(228, 255, 84, 0.15);
  transform: translateY(-3px);
}

.nuda-footer-totop__btn:hover svg {
  animation: nuda-arrow-bounce 0.8s ease-in-out infinite;
}

@keyframes nuda-arrow-bounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-3px); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-footer-totop__btn:hover svg { animation: none; }
}`,
      },
    ],
  },
];
