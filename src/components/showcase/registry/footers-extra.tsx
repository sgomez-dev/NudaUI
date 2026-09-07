import type { NudaComponent } from "./types";

const CAT = "Footers";

export const footersExtra: NudaComponent[] = [
  /* ─────────────── Newsletter Mega Footer ─────────────── */
  {
    id: "ft2-mega-columns",
    name: "Newsletter Mega Footer",
    category: CAT,
    preview: (
      <footer className="nuda-ft2-mega-columns">
        <div className="nuda-ft2-mega-columns__top">
          <span className="nuda-ft2-mega-columns__logo">Nuda</span>
          <form className="nuda-ft2-mega-columns__form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="ft2mc-email" className="nuda-ft2-mega-columns__label">Get updates</label>
            <div className="nuda-ft2-mega-columns__field">
              <input id="ft2mc-email" type="email" placeholder="you@domain.com" aria-describedby="ft2mc-hint" />
              <button type="submit" aria-label="Subscribe">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p id="ft2mc-hint" className="nuda-ft2-mega-columns__hint">No spam, unsubscribe anytime.</p>
          </form>
        </div>
        <div className="nuda-ft2-mega-columns__grid">
          <nav aria-label="Product" className="nuda-ft2-mega-columns__col">
            <h5>Product</h5>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </nav>
          <nav aria-label="Resources" className="nuda-ft2-mega-columns__col">
            <h5>Resources</h5>
            <ul>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </nav>
          <nav aria-label="Company" className="nuda-ft2-mega-columns__col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </nav>
          <nav aria-label="Legal" className="nuda-ft2-mega-columns__col">
            <h5>Legal</h5>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    ),
    cssInline: `
      .nuda-ft2-mega-columns{display:flex;flex-direction:column;gap:20px;padding:24px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:340px;color:#cfcfcf;font-size:12px}
      .nuda-ft2-mega-columns__top{display:flex;flex-direction:column;gap:10px}
      .nuda-ft2-mega-columns__logo{font-weight:800;font-size:16px;color:#fafafa;letter-spacing:-.02em}
      .nuda-ft2-mega-columns__form{display:flex;flex-direction:column;gap:6px}
      .nuda-ft2-mega-columns__label{font-size:11px;color:#777}
      .nuda-ft2-mega-columns__field{position:relative;display:flex;gap:6px;padding:4px;border-radius:9px;background:#141414;border:1px solid rgba(255,255,255,.12);overflow:hidden}
      .nuda-ft2-mega-columns__field::before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(228,255,84,.35),transparent);background-size:200% 100%;background-position:-100% 0;opacity:0;pointer-events:none}
      .nuda-ft2-mega-columns__field:focus-within{border-color:#e4ff54}
      .nuda-ft2-mega-columns__field:focus-within::before{opacity:1;animation:_nuda-ft2MegaColumnsSheen 1.2s ease-in-out infinite}
      .nuda-ft2-mega-columns__field input{flex:1;min-width:0;background:transparent;border:0;outline:none;color:#fafafa;font-size:12px;padding:6px 8px}
      .nuda-ft2-mega-columns__field input::placeholder{color:#63636e}
      .nuda-ft2-mega-columns__field button{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;flex-shrink:0;background:#e4ff54;color:#09090b;border:0;border-radius:6px;cursor:pointer;transition:transform .15s,filter .2s}
      .nuda-ft2-mega-columns__field button svg{width:14px;height:14px}
      .nuda-ft2-mega-columns__field button:hover{transform:translateX(2px);filter:brightness(1.1)}
      .nuda-ft2-mega-columns__field button:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-ft2-mega-columns__hint{margin:0;font-size:10px;color:#777}
      .nuda-ft2-mega-columns__grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(90px,1fr));gap:16px 20px}
      .nuda-ft2-mega-columns__col h5{margin:0 0 8px;color:#fafafa;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
      .nuda-ft2-mega-columns__col ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
      .nuda-ft2-mega-columns__col a{color:#cfcfcf;text-decoration:none;display:inline-block;transition:color .2s,transform .2s}
      .nuda-ft2-mega-columns__col a:hover{color:#e4ff54;transform:translateX(3px)}
      .nuda-ft2-mega-columns__col a:focus-visible{outline:2px solid #e4ff54;outline-offset:2px;border-radius:2px}
      @keyframes _nuda-ft2MegaColumnsSheen{to{background-position:100% 0}}
      @media (prefers-reduced-motion:reduce){.nuda-ft2-mega-columns__field::before{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Newsletter Mega Footer -->
<footer class="nuda-ft2-mega-columns">
  <div class="nuda-ft2-mega-columns__top">
    <span class="nuda-ft2-mega-columns__logo">Nuda</span>
    <form class="nuda-ft2-mega-columns__form">
      <label for="ft2mc-email" class="nuda-ft2-mega-columns__label">Get updates</label>
      <div class="nuda-ft2-mega-columns__field">
        <input id="ft2mc-email" type="email" placeholder="you@domain.com" aria-describedby="ft2mc-hint" />
        <button type="submit" aria-label="Subscribe">
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <p id="ft2mc-hint" class="nuda-ft2-mega-columns__hint">No spam, unsubscribe anytime.</p>
    </form>
  </div>
  <div class="nuda-ft2-mega-columns__grid">
    <nav aria-label="Product" class="nuda-ft2-mega-columns__col">
      <h5>Product</h5>
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
    </nav>
    <nav aria-label="Resources" class="nuda-ft2-mega-columns__col">
      <h5>Resources</h5>
      <ul>
        <li><a href="#">Docs</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </nav>
    <nav aria-label="Company" class="nuda-ft2-mega-columns__col">
      <h5>Company</h5>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </nav>
    <nav aria-label="Legal" class="nuda-ft2-mega-columns__col">
      <h5>Legal</h5>
      <ul>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
      </ul>
    </nav>
  </div>
</footer>`,
      },
    ],
  },

  /* ─────────────── Language & Region Footer ─────────────── */
  {
    id: "ft2-locale-select",
    name: "Language & Region Footer",
    category: CAT,
    preview: (
      <footer className="nuda-ft2-locale-select">
        <span className="nuda-ft2-locale-select__brand">NudaUI</span>
        <div className="nuda-ft2-locale-select__field">
          <svg className="nuda-ft2-locale-select__globe" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
          </svg>
          <label htmlFor="ft2ls-lang" className="nuda-ft2-locale-select__sr">Language and region</label>
          <select id="ft2ls-lang" className="nuda-ft2-locale-select__select" defaultValue="en-US">
            <option value="en-US">English (US)</option>
            <option value="es-ES">Español (ES)</option>
            <option value="fr-FR">Français (FR)</option>
            <option value="ja-JP">日本語 (JP)</option>
          </select>
          <svg className="nuda-ft2-locale-select__chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <span className="nuda-ft2-locale-select__meta">© 2025</span>
      </footer>
    ),
    cssInline: `
      .nuda-ft2-locale-select{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:14px 18px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:12px;width:100%;max-width:340px;color:#a0a0a8;font-size:12px}
      .nuda-ft2-locale-select__brand{color:#fafafa;font-weight:600}
      .nuda-ft2-locale-select__field{position:relative;display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:#141414;transition:border-color .2s}
      .nuda-ft2-locale-select__field:hover,.nuda-ft2-locale-select__field:focus-within{border-color:#e4ff54}
      .nuda-ft2-locale-select__globe{width:14px;height:14px;flex-shrink:0;color:#e4ff54;animation:_nuda-ft2LocaleSelectGlobe 14s linear infinite}
      .nuda-ft2-locale-select__sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
      .nuda-ft2-locale-select__select{appearance:none;background:transparent;border:0;color:#fafafa;font-size:12px;padding-right:4px;cursor:pointer}
      .nuda-ft2-locale-select__select:focus-visible{outline:2px solid #e4ff54;outline-offset:2px;border-radius:4px}
      .nuda-ft2-locale-select__chevron{width:12px;height:12px;flex-shrink:0;color:#777;transition:transform .2s}
      .nuda-ft2-locale-select__field:hover .nuda-ft2-locale-select__chevron{animation:_nuda-ft2LocaleSelectChevron .5s ease}
      .nuda-ft2-locale-select__meta{font-variant-numeric:tabular-nums;color:#777}
      @keyframes _nuda-ft2LocaleSelectGlobe{to{transform:rotate(360deg)}}
      @keyframes _nuda-ft2LocaleSelectChevron{0%{transform:translateY(0)}50%{transform:translateY(2px)}100%{transform:translateY(0)}}
      @media (prefers-reduced-motion:reduce){.nuda-ft2-locale-select__globe{animation:none}.nuda-ft2-locale-select__field:hover .nuda-ft2-locale-select__chevron{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Language & Region Footer -->
<footer class="nuda-ft2-locale-select">
  <span class="nuda-ft2-locale-select__brand">NudaUI</span>
  <div class="nuda-ft2-locale-select__field">
    <svg class="nuda-ft2-locale-select__globe" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </svg>
    <label for="ft2ls-lang" class="nuda-ft2-locale-select__sr">Language and region</label>
    <select id="ft2ls-lang" class="nuda-ft2-locale-select__select">
      <option value="en-US" selected>English (US)</option>
      <option value="es-ES">Español (ES)</option>
      <option value="fr-FR">Français (FR)</option>
      <option value="ja-JP">日本語 (JP)</option>
    </select>
    <svg class="nuda-ft2-locale-select__chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  </div>
  <span class="nuda-ft2-locale-select__meta">© 2025</span>
</footer>`,
      },
    ],
  },

  /* ─────────────── App Store Badge Footer ─────────────── */
  {
    id: "ft2-appstore-badges",
    name: "App Store Badge Footer",
    category: CAT,
    preview: (
      <footer className="nuda-ft2-appstore-badges">
        <p className="nuda-ft2-appstore-badges__tag">Take NudaUI with you</p>
        <div className="nuda-ft2-appstore-badges__badges">
          <a href="#" className="nuda-ft2-appstore-badges__badge" aria-label="Download on the App Store">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            <span className="nuda-ft2-appstore-badges__text">
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
          </a>
          <a href="#" className="nuda-ft2-appstore-badges__badge" aria-label="Get it on Google Play">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4l14 8-14 8V4z" />
            </svg>
            <span className="nuda-ft2-appstore-badges__text">
              <small>GET IT ON</small>
              <strong>Google Play</strong>
            </span>
          </a>
        </div>
      </footer>
    ),
    cssInline: `
      .nuda-ft2-appstore-badges{display:flex;flex-direction:column;align-items:center;gap:14px;padding:22px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:16px;width:100%;max-width:320px;text-align:center}
      .nuda-ft2-appstore-badges__tag{margin:0;color:#fafafa;font-size:13px;font-weight:600}
      .nuda-ft2-appstore-badges__badges{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
      .nuda-ft2-appstore-badges__badge{position:relative;overflow:hidden;display:inline-flex;align-items:center;gap:8px;padding:8px 14px;background:#161616;border:1px solid rgba(255,255,255,.12);border-radius:10px;color:#fafafa;text-decoration:none;transition:transform .2s,border-color .2s}
      .nuda-ft2-appstore-badges__badge svg{width:20px;height:20px;flex-shrink:0;color:#e4ff54}
      .nuda-ft2-appstore-badges__text{display:flex;flex-direction:column;align-items:flex-start;line-height:1.2}
      .nuda-ft2-appstore-badges__text small{font-size:8px;color:#777;text-transform:uppercase;letter-spacing:.04em}
      .nuda-ft2-appstore-badges__text strong{font-size:12px;font-weight:600}
      .nuda-ft2-appstore-badges__badge::after{content:'';position:absolute;inset:0;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.25) 50%,transparent 70%);background-size:250% 100%;background-position:150% 0;opacity:0}
      .nuda-ft2-appstore-badges__badge:hover{transform:translateY(-2px);border-color:rgba(228,255,84,.4)}
      .nuda-ft2-appstore-badges__badge:hover::after{opacity:1;animation:_nuda-ft2AppstoreBadgesShine 1.1s ease}
      .nuda-ft2-appstore-badges__badge:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes _nuda-ft2AppstoreBadgesShine{from{background-position:150% 0}to{background-position:-50% 0}}
      @media (prefers-reduced-motion:reduce){.nuda-ft2-appstore-badges__badge:hover::after{animation:none;opacity:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- App Store Badge Footer -->
<footer class="nuda-ft2-appstore-badges">
  <p class="nuda-ft2-appstore-badges__tag">Take NudaUI with you</p>
  <div class="nuda-ft2-appstore-badges__badges">
    <a href="#" class="nuda-ft2-appstore-badges__badge" aria-label="Download on the App Store">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3v12" />
        <path d="M7 10l5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      <span class="nuda-ft2-appstore-badges__text">
        <small>Download on the</small>
        <strong>App Store</strong>
      </span>
    </a>
    <a href="#" class="nuda-ft2-appstore-badges__badge" aria-label="Get it on Google Play">
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6 4l14 8-14 8V4z" />
      </svg>
      <span class="nuda-ft2-appstore-badges__text">
        <small>GET IT ON</small>
        <strong>Google Play</strong>
      </span>
    </a>
  </div>
</footer>`,
      },
    ],
  },

  /* ─────────────── Sitemap Accordion Footer ─────────────── */
  {
    id: "ft2-sitemap-accordion",
    name: "Sitemap Accordion Footer",
    category: CAT,
    preview: (
      <footer className="nuda-ft2-sitemap-accordion">
        <details className="nuda-ft2-sitemap-accordion__group" open>
          <summary>
            Product
            <svg className="nuda-ft2-sitemap-accordion__chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <nav aria-label="Product">
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </nav>
        </details>
        <details className="nuda-ft2-sitemap-accordion__group">
          <summary>
            Company
            <svg className="nuda-ft2-sitemap-accordion__chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <nav aria-label="Company">
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </nav>
        </details>
        <details className="nuda-ft2-sitemap-accordion__group">
          <summary>
            Legal
            <svg className="nuda-ft2-sitemap-accordion__chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <nav aria-label="Legal">
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </nav>
        </details>
      </footer>
    ),
    cssInline: `
      .nuda-ft2-sitemap-accordion{display:flex;flex-direction:column;gap:2px;width:100%;max-width:320px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;color:#cfcfcf;font-size:13px}
      .nuda-ft2-sitemap-accordion__group{border-bottom:1px solid rgba(255,255,255,.06)}
      .nuda-ft2-sitemap-accordion__group:last-child{border-bottom:0}
      .nuda-ft2-sitemap-accordion__group summary{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;cursor:pointer;color:#fafafa;font-weight:600;list-style:none}
      .nuda-ft2-sitemap-accordion__group summary::-webkit-details-marker{display:none}
      .nuda-ft2-sitemap-accordion__group summary:focus-visible{outline:2px solid #e4ff54;outline-offset:-2px}
      .nuda-ft2-sitemap-accordion__chevron{width:14px;height:14px;color:#777;transition:transform .25s ease}
      .nuda-ft2-sitemap-accordion__group[open] .nuda-ft2-sitemap-accordion__chevron{transform:rotate(180deg);color:#e4ff54}
      .nuda-ft2-sitemap-accordion__group nav{padding:0 16px 14px}
      .nuda-ft2-sitemap-accordion__group[open] nav{animation:_nuda-ft2SitemapAccordionReveal .3s ease both}
      .nuda-ft2-sitemap-accordion__group ul{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:6px}
      .nuda-ft2-sitemap-accordion__group a{color:#a0a0a8;text-decoration:none;font-size:12px;transition:color .2s,transform .2s;display:inline-block}
      .nuda-ft2-sitemap-accordion__group a:hover{color:#e4ff54;transform:translateX(3px)}
      .nuda-ft2-sitemap-accordion__group a:focus-visible{outline:2px solid #e4ff54;outline-offset:2px;border-radius:2px}
      @keyframes _nuda-ft2SitemapAccordionReveal{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
      @media (prefers-reduced-motion:reduce){.nuda-ft2-sitemap-accordion__group[open] nav{animation:none;opacity:1;transform:none}.nuda-ft2-sitemap-accordion__chevron{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sitemap Accordion Footer -->
<footer class="nuda-ft2-sitemap-accordion">
  <details class="nuda-ft2-sitemap-accordion__group" open>
    <summary>
      Product
      <svg class="nuda-ft2-sitemap-accordion__chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </summary>
    <nav aria-label="Product">
      <ul>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
      </ul>
    </nav>
  </details>
  <details class="nuda-ft2-sitemap-accordion__group">
    <summary>
      Company
      <svg class="nuda-ft2-sitemap-accordion__chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </summary>
    <nav aria-label="Company">
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </nav>
  </details>
  <details class="nuda-ft2-sitemap-accordion__group">
    <summary>
      Legal
      <svg class="nuda-ft2-sitemap-accordion__chevron" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </summary>
    <nav aria-label="Legal">
      <ul>
        <li><a href="#">Privacy</a></li>
        <li><a href="#">Terms</a></li>
      </ul>
    </nav>
  </details>
</footer>`,
      },
    ],
  },

  /* ─────────────── Compliance Badge Row Footer ─────────────── */
  {
    id: "ft2-compliance-badges",
    name: "Compliance Badge Row Footer",
    category: CAT,
    preview: (
      <footer className="nuda-ft2-compliance-badges">
        <span className="nuda-ft2-compliance-badges__label">Compliance</span>
        <ul className="nuda-ft2-compliance-badges__list">
          <li style={{ animationDelay: "0ms" }}>SOC 2</li>
          <li style={{ animationDelay: "80ms" }}>GDPR</li>
          <li style={{ animationDelay: "160ms" }}>ISO 27001</li>
          <li style={{ animationDelay: "240ms" }}>WCAG AA</li>
        </ul>
      </footer>
    ),
    cssInline: `
      .nuda-ft2-compliance-badges{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:16px 20px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:340px;font-size:11px}
      .nuda-ft2-compliance-badges__label{color:#777;text-transform:uppercase;letter-spacing:.08em;font-size:10px}
      .nuda-ft2-compliance-badges__list{list-style:none;margin:0;padding:0;display:flex;gap:8px;flex-wrap:wrap}
      .nuda-ft2-compliance-badges__list li{opacity:0;padding:5px 10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:999px;color:#cfcfcf;font-weight:500;animation:_nuda-ft2ComplianceBadgesIn .5s ease both}
      .nuda-ft2-compliance-badges__list li:first-child{border-color:rgba(228,255,84,.4);color:#e4ff54;animation:_nuda-ft2ComplianceBadgesIn .5s ease both,_nuda-ft2ComplianceBadgesPulse 2.4s ease-in-out .6s infinite}
      @keyframes _nuda-ft2ComplianceBadgesIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      @keyframes _nuda-ft2ComplianceBadgesPulse{0%,100%{box-shadow:0 0 0 0 rgba(228,255,84,.35)}50%{box-shadow:0 0 0 6px rgba(228,255,84,0)}}
      @media (prefers-reduced-motion:reduce){.nuda-ft2-compliance-badges__list li{animation:none;opacity:1;transform:none}.nuda-ft2-compliance-badges__list li:first-child{animation:none;box-shadow:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Compliance Badge Row Footer -->
<footer class="nuda-ft2-compliance-badges">
  <span class="nuda-ft2-compliance-badges__label">Compliance</span>
  <ul class="nuda-ft2-compliance-badges__list">
    <li style="animation-delay:0ms">SOC 2</li>
    <li style="animation-delay:80ms">GDPR</li>
    <li style="animation-delay:160ms">ISO 27001</li>
    <li style="animation-delay:240ms">WCAG AA</li>
  </ul>
</footer>`,
      },
    ],
  },

  /* ─────────────── Live Clock Footer ─────────────── */
  {
    id: "ft2-live-clock",
    name: "Live Clock Footer",
    category: CAT,
    preview: (
      <footer className="nuda-ft2-live-clock">
        <div className="nuda-ft2-live-clock__zone">
          <span className="nuda-ft2-live-clock__city">SF</span>
          <span className="nuda-ft2-live-clock__time" data-tz="America/Los_Angeles">09<span className="nuda-ft2-live-clock__colon">:</span>14</span>
        </div>
        <div className="nuda-ft2-live-clock__zone">
          <span className="nuda-ft2-live-clock__city">NY</span>
          <span className="nuda-ft2-live-clock__time" data-tz="America/New_York">12<span className="nuda-ft2-live-clock__colon">:</span>14</span>
        </div>
        <div className="nuda-ft2-live-clock__zone">
          <span className="nuda-ft2-live-clock__city">LON</span>
          <span className="nuda-ft2-live-clock__time" data-tz="Europe/London">17<span className="nuda-ft2-live-clock__colon">:</span>14</span>
        </div>
      </footer>
    ),
    cssInline: `
      .nuda-ft2-live-clock{display:flex;align-items:center;justify-content:center;gap:20px;padding:16px 20px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:12px;width:100%;max-width:320px;flex-wrap:wrap}
      .nuda-ft2-live-clock__zone{display:flex;flex-direction:column;align-items:center;gap:2px}
      .nuda-ft2-live-clock__city{font-size:10px;color:#777;text-transform:uppercase;letter-spacing:.08em}
      .nuda-ft2-live-clock__time{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:16px;color:#fafafa;font-variant-numeric:tabular-nums}
      .nuda-ft2-live-clock__colon{color:#e4ff54;animation:_nuda-ft2LiveClockBlink 1s steps(1,end) infinite}
      @keyframes _nuda-ft2LiveClockBlink{0%,49%{opacity:1}50%,100%{opacity:0}}
      @media (prefers-reduced-motion:reduce){.nuda-ft2-live-clock__colon{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Live Clock Footer -->
<footer class="nuda-ft2-live-clock">
  <div class="nuda-ft2-live-clock__zone">
    <span class="nuda-ft2-live-clock__city">SF</span>
    <span class="nuda-ft2-live-clock__time" data-tz="America/Los_Angeles">09<span class="nuda-ft2-live-clock__colon">:</span>14</span>
  </div>
  <div class="nuda-ft2-live-clock__zone">
    <span class="nuda-ft2-live-clock__city">NY</span>
    <span class="nuda-ft2-live-clock__time" data-tz="America/New_York">12<span class="nuda-ft2-live-clock__colon">:</span>14</span>
  </div>
  <div class="nuda-ft2-live-clock__zone">
    <span class="nuda-ft2-live-clock__city">LON</span>
    <span class="nuda-ft2-live-clock__time" data-tz="Europe/London">17<span class="nuda-ft2-live-clock__colon">:</span>14</span>
  </div>
</footer>`,
      },
      {
        label: "JavaScript",
        language: "javascript",
        code: `// Progressive enhancement: replace the static hh:mm with each zone's real local time.
document.querySelectorAll('.nuda-ft2-live-clock__time').forEach((el) => {
  const tz = el.dataset.tz;
  const render = () => {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(new Date());
    const hh = parts.find((p) => p.type === 'hour').value;
    const mm = parts.find((p) => p.type === 'minute').value;
    el.innerHTML = hh + '<span class="nuda-ft2-live-clock__colon">:</span>' + mm;
  };
  render();
  setInterval(render, 30000);
});`,
      },
    ],
  },

  /* ─────────────── Changelog & Version Chip Footer ─────────────── */
  {
    id: "ft2-changelog-chip",
    name: "Changelog & Version Chip Footer",
    category: CAT,
    preview: (
      <footer className="nuda-ft2-changelog-chip">
        <a href="#" className="nuda-ft2-changelog-chip__link">
          <span>What's new</span>
          <span className="nuda-ft2-changelog-chip__badge">v2.4.0</span>
          <span className="nuda-ft2-changelog-chip__new" aria-hidden="true">NEW</span>
          <svg className="nuda-ft2-changelog-chip__arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
        <span className="nuda-ft2-changelog-chip__meta">Updated 2 days ago</span>
      </footer>
    ),
    cssInline: `
      .nuda-ft2-changelog-chip{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;padding:14px 18px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;width:100%;max-width:320px;font-size:12px}
      .nuda-ft2-changelog-chip__link{display:inline-flex;align-items:center;gap:8px;color:#fafafa;text-decoration:none;font-weight:500}
      .nuda-ft2-changelog-chip__link:hover{color:#e4ff54}
      .nuda-ft2-changelog-chip__link:focus-visible{outline:2px solid #e4ff54;outline-offset:3px;border-radius:4px}
      .nuda-ft2-changelog-chip__badge{padding:2px 7px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:999px;font-size:10px;color:#a0a0a8;font-family:ui-monospace,SFMono-Regular,Menlo,monospace}
      .nuda-ft2-changelog-chip__new{padding:2px 6px;background:#e4ff54;color:#09090b;border-radius:4px;font-size:9px;font-weight:700;letter-spacing:.04em;animation:_nuda-ft2ChangelogChipPulse 1.8s ease-in-out infinite}
      .nuda-ft2-changelog-chip__arrow{width:14px;height:14px;transition:transform .2s}
      .nuda-ft2-changelog-chip__link:hover .nuda-ft2-changelog-chip__arrow{transform:translateX(4px)}
      .nuda-ft2-changelog-chip__meta{color:#777}
      @keyframes _nuda-ft2ChangelogChipPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}
      @media (prefers-reduced-motion:reduce){.nuda-ft2-changelog-chip__new{animation:none}.nuda-ft2-changelog-chip__arrow{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Changelog & Version Chip Footer -->
<footer class="nuda-ft2-changelog-chip">
  <a href="#" class="nuda-ft2-changelog-chip__link">
    <span>What's new</span>
    <span class="nuda-ft2-changelog-chip__badge">v2.4.0</span>
    <span class="nuda-ft2-changelog-chip__new" aria-hidden="true">NEW</span>
    <svg class="nuda-ft2-changelog-chip__arrow" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  </a>
  <span class="nuda-ft2-changelog-chip__meta">Updated 2 days ago</span>
</footer>`,
      },
    ],
  },

  /* ─────────────── Animated Wave Edge Footer ─────────────── */
  {
    id: "ft2-wave-edge",
    name: "Animated Wave Edge Footer",
    category: CAT,
    preview: (
      <footer className="nuda-ft2-wave-edge">
        <svg className="nuda-ft2-wave-edge__wave" aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none">
          <path d="M0 12 Q 15 0 30 12 T 60 12 T 90 12 T 120 12 T 150 12 T 180 12 T 210 12 T 240 12 T 270 12 T 300 12" />
        </svg>
        <div className="nuda-ft2-wave-edge__row">
          <span className="nuda-ft2-wave-edge__brand">NudaUI</span>
          <span className="nuda-ft2-wave-edge__meta">© 2025 · Built with zero dependencies</span>
        </div>
      </footer>
    ),
    cssInline: `
      .nuda-ft2-wave-edge{display:flex;flex-direction:column;width:100%;max-width:320px;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden}
      .nuda-ft2-wave-edge__wave{display:block;width:100%;height:16px}
      .nuda-ft2-wave-edge__wave path{fill:none;stroke:#e4ff54;stroke-width:2;stroke-linecap:round;stroke-dasharray:8 10;animation:_nuda-ft2WaveEdgeFlow 2.4s linear infinite}
      .nuda-ft2-wave-edge__row{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:14px 18px;font-size:12px}
      .nuda-ft2-wave-edge__brand{color:#fafafa;font-weight:600}
      .nuda-ft2-wave-edge__meta{color:#777}
      @keyframes _nuda-ft2WaveEdgeFlow{to{stroke-dashoffset:-36}}
      @media (prefers-reduced-motion:reduce){.nuda-ft2-wave-edge__wave path{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Animated Wave Edge Footer -->
<footer class="nuda-ft2-wave-edge">
  <svg class="nuda-ft2-wave-edge__wave" aria-hidden="true" viewBox="0 0 300 24" preserveAspectRatio="none">
    <path d="M0 12 Q 15 0 30 12 T 60 12 T 90 12 T 120 12 T 150 12 T 180 12 T 210 12 T 240 12 T 270 12 T 300 12" />
  </svg>
  <div class="nuda-ft2-wave-edge__row">
    <span class="nuda-ft2-wave-edge__brand">NudaUI</span>
    <span class="nuda-ft2-wave-edge__meta">© 2025 · Built with zero dependencies</span>
  </div>
</footer>`,
      },
    ],
  },
];
