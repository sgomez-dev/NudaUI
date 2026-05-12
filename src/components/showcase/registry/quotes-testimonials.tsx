import type { NudaComponent } from "./types";

export const quotesTestimonials: NudaComponent[] = [
  /* ─────────────── PULL QUOTE ─────────────── */
  {
    id: "pull-quote",
    name: "Pull Quote",
    category: "Quotes & Testimonials",
    preview: (
      <blockquote className="nuda-pull-quote">
        <span className="nuda-pull-quote__mark" aria-hidden="true">&ldquo;</span>
        <p className="nuda-pull-quote__body">
          Design is not just what it looks like. Design is how it works.
        </p>
        <footer className="nuda-pull-quote__cite">&mdash; Steve Jobs</footer>
      </blockquote>
    ),
    cssInline: `
      .nuda-pull-quote{position:relative;max-width:420px;margin:0;padding:1.75rem 1.5rem 1.5rem 3.5rem;background:#0c0c10;border-left:2px solid #e4ff54;border-radius:0 12px 12px 0;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-pull-quote__mark{position:absolute;top:-.25rem;left:.5rem;font-size:5rem;line-height:1;color:#e4ff54;font-family:Georgia,serif;font-weight:700;opacity:.85}
      .nuda-pull-quote__body{margin:0 0 .75rem;font-size:1.125rem;line-height:1.55;font-style:italic;color:#fafafa}
      .nuda-pull-quote__cite{font-size:.8125rem;color:#a0a0a8;font-style:normal;letter-spacing:.02em}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<blockquote class="nuda-pull-quote">
  <span class="nuda-pull-quote__mark" aria-hidden="true">&ldquo;</span>
  <p class="nuda-pull-quote__body">
    Design is not just what it looks like. Design is how it works.
  </p>
  <footer class="nuda-pull-quote__cite">&mdash; Steve Jobs</footer>
</blockquote>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Pull Quote
   Oversized opening glyph + italic body with accent bar.
   Customize: --quote-accent, --quote-surface */

.nuda-pull-quote {
  --quote-accent: #e4ff54;
  --quote-surface: #0c0c10;
  position: relative;
  max-width: 420px;
  margin: 0;
  padding: 1.75rem 1.5rem 1.5rem 3.5rem;
  background: var(--quote-surface);
  border-left: 2px solid var(--quote-accent);
  border-radius: 0 12px 12px 0;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-pull-quote__mark {
  position: absolute;
  top: -0.25rem;
  left: 0.5rem;
  font-size: 5rem;
  line-height: 1;
  color: var(--quote-accent);
  font-family: Georgia, serif;
  font-weight: 700;
  opacity: 0.85;
}

.nuda-pull-quote__body {
  margin: 0 0 0.75rem;
  font-size: 1.125rem;
  line-height: 1.55;
  font-style: italic;
  color: #fafafa;
}

.nuda-pull-quote__cite {
  font-size: 0.8125rem;
  color: #a0a0a8;
  font-style: normal;
  letter-spacing: 0.02em;
}`,
      },
    ],
  },

  /* ─────────────── TESTIMONIAL CARD ─────────────── */
  {
    id: "testimonial-card",
    name: "Testimonial Card",
    category: "Quotes & Testimonials",
    preview: (
      <article className="nuda-testimonial-card">
        <p className="nuda-testimonial-card__quote">
          The onboarding flow felt effortless. Our team shipped a new product in half the time.
        </p>
        <div className="nuda-testimonial-card__author">
          <div className="nuda-testimonial-card__avatar" aria-hidden="true">MR</div>
          <div className="nuda-testimonial-card__meta">
            <div className="nuda-testimonial-card__name">Maya Rivera</div>
            <div className="nuda-testimonial-card__role">Head of Product, Northwind</div>
          </div>
        </div>
      </article>
    ),
    cssInline: `
      .nuda-testimonial-card{max-width:380px;padding:1.5rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif;transition:border-color .3s cubic-bezier(.16,1,.3,1),transform .3s cubic-bezier(.16,1,.3,1)}
      .nuda-testimonial-card:hover{border-color:rgba(255,255,255,.16);transform:translateY(-2px)}
      .nuda-testimonial-card__quote{margin:0 0 1.25rem;font-size:.9375rem;line-height:1.6;color:#fafafa}
      .nuda-testimonial-card__author{display:flex;align-items:center;gap:.75rem}
      .nuda-testimonial-card__avatar{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#9d6dff,#62b6ff);display:grid;place-items:center;font-size:.8125rem;font-weight:600;color:#0c0c10;flex-shrink:0}
      .nuda-testimonial-card__name{font-size:.875rem;font-weight:600;color:#fafafa;line-height:1.2}
      .nuda-testimonial-card__role{margin-top:.125rem;font-size:.75rem;color:#a0a0a8;line-height:1.3}
      @media(prefers-reduced-motion:reduce){.nuda-testimonial-card{transition:none}.nuda-testimonial-card:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-testimonial-card">
  <p class="nuda-testimonial-card__quote">
    The onboarding flow felt effortless. Our team shipped a new product in half the time.
  </p>
  <div class="nuda-testimonial-card__author">
    <div class="nuda-testimonial-card__avatar" aria-hidden="true">MR</div>
    <div class="nuda-testimonial-card__meta">
      <div class="nuda-testimonial-card__name">Maya Rivera</div>
      <div class="nuda-testimonial-card__role">Head of Product, Northwind</div>
    </div>
  </div>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Testimonial Card
   Classic quote with avatar initials and gradient. */

.nuda-testimonial-card {
  max-width: 380px;
  padding: 1.5rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
  transition:
    border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-testimonial-card:hover {
  border-color: rgba(255, 255, 255, 0.16);
  transform: translateY(-2px);
}

.nuda-testimonial-card__quote {
  margin: 0 0 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #fafafa;
}

.nuda-testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nuda-testimonial-card__avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #9d6dff, #62b6ff);
  display: grid;
  place-items: center;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #0c0c10;
  flex-shrink: 0;
}

.nuda-testimonial-card__name {
  font-size: 0.875rem;
  font-weight: 600;
  color: #fafafa;
  line-height: 1.2;
}

.nuda-testimonial-card__role {
  margin-top: 0.125rem;
  font-size: 0.75rem;
  color: #a0a0a8;
  line-height: 1.3;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-testimonial-card { transition: none; }
  .nuda-testimonial-card:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── FIVE STAR RATING CARD ─────────────── */
  {
    id: "five-star-rating-card",
    name: "Five-star Rating Card",
    category: "Quotes & Testimonials",
    preview: (
      <article className="nuda-rating-card">
        <div className="nuda-rating-card__stars" aria-label="5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <svg key={i} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p className="nuda-rating-card__quote">
          Genuinely the best dev tool I&rsquo;ve used in a decade. It just gets out of my way.
        </p>
        <div className="nuda-rating-card__author">
          <div className="nuda-rating-card__avatar" aria-hidden="true">JT</div>
          <span>Jordan T. &middot; Verified Buyer</span>
        </div>
      </article>
    ),
    cssInline: `
      .nuda-rating-card{max-width:380px;padding:1.5rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-rating-card__stars{display:flex;gap:2px;margin-bottom:1rem}
      .nuda-rating-card__stars svg{width:18px;height:18px;fill:#ffb45e;opacity:0;animation:_rcstar .4s cubic-bezier(.34,1.56,.64,1) forwards}
      .nuda-rating-card__stars svg:nth-child(1){animation-delay:.05s}
      .nuda-rating-card__stars svg:nth-child(2){animation-delay:.1s}
      .nuda-rating-card__stars svg:nth-child(3){animation-delay:.15s}
      .nuda-rating-card__stars svg:nth-child(4){animation-delay:.2s}
      .nuda-rating-card__stars svg:nth-child(5){animation-delay:.25s}
      @keyframes _rcstar{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:scale(1)}}
      .nuda-rating-card__quote{margin:0 0 1rem;font-size:.9375rem;line-height:1.55;color:#fafafa}
      .nuda-rating-card__author{display:flex;align-items:center;gap:.625rem;font-size:.8125rem;color:#a0a0a8}
      .nuda-rating-card__avatar{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#ffb45e,#ff5e7a);display:grid;place-items:center;font-size:.6875rem;font-weight:700;color:#0c0c10}
      @media(prefers-reduced-motion:reduce){.nuda-rating-card__stars svg{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-rating-card">
  <div class="nuda-rating-card__stars" aria-label="5 out of 5 stars">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
    <!-- repeat 4 more times -->
  </div>
  <p class="nuda-rating-card__quote">
    Genuinely the best dev tool I've used in a decade. It just gets out of my way.
  </p>
  <div class="nuda-rating-card__author">
    <div class="nuda-rating-card__avatar" aria-hidden="true">JT</div>
    <span>Jordan T. &middot; Verified Buyer</span>
  </div>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Five-star Rating Card
   Stars pop in sequentially on first paint. */

.nuda-rating-card {
  max-width: 380px;
  padding: 1.5rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-rating-card__stars {
  display: flex;
  gap: 2px;
  margin-bottom: 1rem;
}

.nuda-rating-card__stars svg {
  width: 18px;
  height: 18px;
  fill: #ffb45e;
  opacity: 0;
  animation: nuda-rc-star 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.nuda-rating-card__stars svg:nth-child(1) { animation-delay: 0.05s; }
.nuda-rating-card__stars svg:nth-child(2) { animation-delay: 0.10s; }
.nuda-rating-card__stars svg:nth-child(3) { animation-delay: 0.15s; }
.nuda-rating-card__stars svg:nth-child(4) { animation-delay: 0.20s; }
.nuda-rating-card__stars svg:nth-child(5) { animation-delay: 0.25s; }

@keyframes nuda-rc-star {
  from { opacity: 0; transform: scale(0.4); }
  to   { opacity: 1; transform: scale(1); }
}

.nuda-rating-card__quote {
  margin: 0 0 1rem;
  font-size: 0.9375rem;
  line-height: 1.55;
  color: #fafafa;
}

.nuda-rating-card__author {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.8125rem;
  color: #a0a0a8;
}

.nuda-rating-card__avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffb45e, #ff5e7a);
  display: grid;
  place-items: center;
  font-size: 0.6875rem;
  font-weight: 700;
  color: #0c0c10;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-rating-card__stars svg {
    animation: none;
    opacity: 1;
  }
}`,
      },
    ],
  },

  /* ─────────────── SIGNATURE REVEAL ─────────────── */
  {
    id: "signature-reveal",
    name: "Author Signature Reveal",
    category: "Quotes & Testimonials",
    preview: (
      <figure className="nuda-signature">
        <blockquote className="nuda-signature__quote">
          &ldquo;The only way to do great work is to love what you do.&rdquo;
        </blockquote>
        <svg className="nuda-signature__svg" viewBox="0 0 220 60" aria-label="Signature">
          <path
            className="nuda-signature__path"
            d="M10 40 C 20 10, 35 50, 50 30 S 80 10, 95 35 S 130 55, 150 25 S 190 10, 210 35"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <figcaption className="nuda-signature__name">Alex Quinn, CEO</figcaption>
      </figure>
    ),
    cssInline: `
      .nuda-signature{max-width:380px;padding:1.5rem;margin:0;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-signature__quote{margin:0 0 1rem;font-size:1rem;line-height:1.55;font-style:italic;color:#fafafa}
      .nuda-signature__svg{display:block;width:160px;height:44px;color:#e4ff54;margin-bottom:.5rem}
      .nuda-signature__path{stroke-dasharray:520;stroke-dashoffset:520;animation:_signdraw 2.4s cubic-bezier(.16,1,.3,1) forwards .2s}
      @keyframes _signdraw{to{stroke-dashoffset:0}}
      .nuda-signature__name{font-size:.75rem;color:#63636e;letter-spacing:.04em;text-transform:uppercase}
      @media(prefers-reduced-motion:reduce){.nuda-signature__path{animation:none;stroke-dashoffset:0}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<figure class="nuda-signature">
  <blockquote class="nuda-signature__quote">
    &ldquo;The only way to do great work is to love what you do.&rdquo;
  </blockquote>
  <svg class="nuda-signature__svg" viewBox="0 0 220 60" aria-label="Signature">
    <path class="nuda-signature__path"
      d="M10 40 C 20 10, 35 50, 50 30 S 80 10, 95 35 S 130 55, 150 25 S 190 10, 210 35"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
  </svg>
  <figcaption class="nuda-signature__name">Alex Quinn, CEO</figcaption>
</figure>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Author Signature Reveal
   Handwritten signature draws itself in beneath the quote. */

.nuda-signature {
  max-width: 380px;
  padding: 1.5rem;
  margin: 0;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-signature__quote {
  margin: 0 0 1rem;
  font-size: 1rem;
  line-height: 1.55;
  font-style: italic;
  color: #fafafa;
}

.nuda-signature__svg {
  display: block;
  width: 160px;
  height: 44px;
  color: #e4ff54;
  margin-bottom: 0.5rem;
}

.nuda-signature__path {
  stroke-dasharray: 520;
  stroke-dashoffset: 520;
  animation: nuda-sign-draw 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
}

@keyframes nuda-sign-draw {
  to { stroke-dashoffset: 0; }
}

.nuda-signature__name {
  font-size: 0.75rem;
  color: #63636e;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-signature__path {
    animation: none;
    stroke-dashoffset: 0;
  }
}`,
      },
    ],
  },

  /* ─────────────── LOGO + QUOTE STRIP ─────────────── */
  {
    id: "logo-quote-strip",
    name: "Customer Logo Quote Strip",
    category: "Quotes & Testimonials",
    preview: (
      <article className="nuda-logo-quote">
        <div className="nuda-logo-quote__logo" aria-hidden="true">
          <svg viewBox="0 0 80 24">
            <circle cx="12" cy="12" r="8" fill="#e4ff54" />
            <text x="28" y="17" fontSize="14" fontWeight="700" fill="#fafafa" fontFamily="sans-serif">ORBIT</text>
          </svg>
        </div>
        <p className="nuda-logo-quote__body">
          &ldquo;We replaced four tools with one. Engineers actually <em>like</em> using it.&rdquo;
        </p>
        <div className="nuda-logo-quote__cite">Priya Shah &middot; VP Engineering</div>
      </article>
    ),
    cssInline: `
      .nuda-logo-quote{max-width:420px;padding:1.5rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-logo-quote__logo{height:24px;margin-bottom:1rem;opacity:.85}
      .nuda-logo-quote__logo svg{height:24px;width:auto}
      .nuda-logo-quote__body{margin:0 0 .75rem;font-size:1rem;line-height:1.55;color:#fafafa}
      .nuda-logo-quote__body em{color:#e4ff54;font-style:normal;font-weight:600}
      .nuda-logo-quote__cite{font-size:.8125rem;color:#a0a0a8}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-logo-quote">
  <div class="nuda-logo-quote__logo" aria-hidden="true">
    <svg viewBox="0 0 80 24">
      <circle cx="12" cy="12" r="8" fill="#e4ff54" />
      <text x="28" y="17" font-size="14" font-weight="700" fill="#fafafa">ORBIT</text>
    </svg>
  </div>
  <p class="nuda-logo-quote__body">
    &ldquo;We replaced four tools with one. Engineers actually <em>like</em> using it.&rdquo;
  </p>
  <div class="nuda-logo-quote__cite">Priya Shah &middot; VP Engineering</div>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Customer Logo Quote Strip
   Brand-anchored quote with logo on top. */

.nuda-logo-quote {
  max-width: 420px;
  padding: 1.5rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-logo-quote__logo {
  height: 24px;
  margin-bottom: 1rem;
  opacity: 0.85;
}

.nuda-logo-quote__logo svg {
  height: 24px;
  width: auto;
}

.nuda-logo-quote__body {
  margin: 0 0 0.75rem;
  font-size: 1rem;
  line-height: 1.55;
  color: #fafafa;
}

.nuda-logo-quote__body em {
  color: #e4ff54;
  font-style: normal;
  font-weight: 600;
}

.nuda-logo-quote__cite {
  font-size: 0.8125rem;
  color: #a0a0a8;
}`,
      },
    ],
  },

  /* ─────────────── VIDEO TESTIMONIAL ─────────────── */
  {
    id: "video-testimonial",
    name: "Video Testimonial Card",
    category: "Quotes & Testimonials",
    preview: (
      <article className="nuda-video-testi">
        <div className="nuda-video-testi__thumb" role="img" aria-label="Video thumbnail">
          <div className="nuda-video-testi__play" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
          </div>
          <div className="nuda-video-testi__duration">1:24</div>
        </div>
        <div className="nuda-video-testi__body">
          <p className="nuda-video-testi__quote">&ldquo;It paid for itself in the first week.&rdquo;</p>
          <div className="nuda-video-testi__cite">Tariq Ahmed &middot; Acme Logistics</div>
        </div>
      </article>
    ),
    cssInline: `
      .nuda-video-testi{max-width:340px;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-video-testi__thumb{position:relative;aspect-ratio:16/9;background:linear-gradient(135deg,#9d6dff 0%,#62b6ff 60%,#0c0c10 100%);display:grid;place-items:center;cursor:pointer}
      .nuda-video-testi__play{width:56px;height:56px;border-radius:50%;background:rgba(255,255,255,.95);color:#0c0c10;display:grid;place-items:center;transition:transform .3s cubic-bezier(.34,1.56,.64,1);box-shadow:0 8px 24px rgba(0,0,0,.4)}
      .nuda-video-testi__play svg{width:24px;height:24px;margin-left:3px}
      .nuda-video-testi__thumb:hover .nuda-video-testi__play{transform:scale(1.1)}
      .nuda-video-testi__duration{position:absolute;bottom:.5rem;right:.5rem;padding:2px 6px;background:rgba(0,0,0,.6);border-radius:4px;font-size:.6875rem;color:#fff;font-variant-numeric:tabular-nums}
      .nuda-video-testi__body{padding:1rem 1.25rem 1.125rem}
      .nuda-video-testi__quote{margin:0 0 .375rem;font-size:.9375rem;line-height:1.45;color:#fafafa}
      .nuda-video-testi__cite{font-size:.75rem;color:#a0a0a8}
      @media(prefers-reduced-motion:reduce){.nuda-video-testi__play{transition:none}.nuda-video-testi__thumb:hover .nuda-video-testi__play{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-video-testi">
  <div class="nuda-video-testi__thumb" role="img" aria-label="Video thumbnail">
    <div class="nuda-video-testi__play" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
    </div>
    <div class="nuda-video-testi__duration">1:24</div>
  </div>
  <div class="nuda-video-testi__body">
    <p class="nuda-video-testi__quote">&ldquo;It paid for itself in the first week.&rdquo;</p>
    <div class="nuda-video-testi__cite">Tariq Ahmed &middot; Acme Logistics</div>
  </div>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Video Testimonial Card
   Gradient thumbnail with bouncy play button on hover. */

.nuda-video-testi {
  max-width: 340px;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-video-testi__thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  background: linear-gradient(135deg, #9d6dff 0%, #62b6ff 60%, #0c0c10 100%);
  display: grid;
  place-items: center;
  cursor: pointer;
}

.nuda-video-testi__play {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  color: #0c0c10;
  display: grid;
  place-items: center;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.nuda-video-testi__play svg {
  width: 24px;
  height: 24px;
  margin-left: 3px;
}

.nuda-video-testi__thumb:hover .nuda-video-testi__play {
  transform: scale(1.1);
}

.nuda-video-testi__duration {
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  padding: 2px 6px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 4px;
  font-size: 0.6875rem;
  color: #fff;
  font-variant-numeric: tabular-nums;
}

.nuda-video-testi__body { padding: 1rem 1.25rem 1.125rem; }
.nuda-video-testi__quote { margin: 0 0 0.375rem; font-size: 0.9375rem; line-height: 1.45; }
.nuda-video-testi__cite { font-size: 0.75rem; color: #a0a0a8; }

@media (prefers-reduced-motion: reduce) {
  .nuda-video-testi__play { transition: none; }
  .nuda-video-testi__thumb:hover .nuda-video-testi__play { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── RATING DISTRIBUTION ─────────────── */
  {
    id: "rating-distribution",
    name: "Rating Distribution Bars",
    category: "Quotes & Testimonials",
    preview: (
      <div className="nuda-rating-dist">
        <div className="nuda-rating-dist__header">
          <div className="nuda-rating-dist__score">4.8</div>
          <div className="nuda-rating-dist__meta">
            <div className="nuda-rating-dist__sub">2,341 reviews</div>
          </div>
        </div>
        <ul className="nuda-rating-dist__bars">
          {[
            { stars: 5, pct: 82 },
            { stars: 4, pct: 12 },
            { stars: 3, pct: 4 },
            { stars: 2, pct: 1 },
            { stars: 1, pct: 1 },
          ].map((row) => (
            <li key={row.stars}>
              <span className="nuda-rating-dist__label">{row.stars}</span>
              <span className="nuda-rating-dist__track">
                <span className="nuda-rating-dist__fill" style={{ ["--w" as string]: `${row.pct}%` }} />
              </span>
              <span className="nuda-rating-dist__pct">{row.pct}%</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-rating-dist{max-width:340px;padding:1.25rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-rating-dist__header{display:flex;align-items:baseline;gap:.75rem;margin-bottom:1rem}
      .nuda-rating-dist__score{font-size:2.25rem;font-weight:700;line-height:1;color:#fafafa;letter-spacing:-.02em}
      .nuda-rating-dist__sub{font-size:.8125rem;color:#a0a0a8}
      .nuda-rating-dist__bars{list-style:none;margin:0;padding:0;display:grid;gap:.375rem}
      .nuda-rating-dist__bars li{display:grid;grid-template-columns:14px 1fr 36px;align-items:center;gap:.625rem;font-size:.75rem;color:#a0a0a8}
      .nuda-rating-dist__label{font-variant-numeric:tabular-nums;text-align:right}
      .nuda-rating-dist__track{position:relative;height:6px;border-radius:3px;background:rgba(255,255,255,.06);overflow:hidden}
      .nuda-rating-dist__fill{position:absolute;inset:0;width:0;background:linear-gradient(90deg,#e4ff54,#b8cc43);border-radius:3px;animation:_rdfill 1.2s cubic-bezier(.16,1,.3,1) forwards}
      @keyframes _rdfill{to{width:var(--w)}}
      .nuda-rating-dist__pct{text-align:right;font-variant-numeric:tabular-nums}
      @media(prefers-reduced-motion:reduce){.nuda-rating-dist__fill{animation:none;width:var(--w)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-rating-dist">
  <div class="nuda-rating-dist__header">
    <div class="nuda-rating-dist__score">4.8</div>
    <div class="nuda-rating-dist__meta">
      <div class="nuda-rating-dist__sub">2,341 reviews</div>
    </div>
  </div>
  <ul class="nuda-rating-dist__bars">
    <li>
      <span class="nuda-rating-dist__label">5</span>
      <span class="nuda-rating-dist__track">
        <span class="nuda-rating-dist__fill" style="--w:82%"></span>
      </span>
      <span class="nuda-rating-dist__pct">82%</span>
    </li>
    <!-- 4, 3, 2, 1 rows ... -->
  </ul>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Rating Distribution Bars
   Histogram of star ratings — bars fill in on mount.
   Drive each row with style="--w:NN%" */

.nuda-rating-dist {
  max-width: 340px;
  padding: 1.25rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-rating-dist__header {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.nuda-rating-dist__score {
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.02em;
}

.nuda-rating-dist__sub { font-size: 0.8125rem; color: #a0a0a8; }

.nuda-rating-dist__bars {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.375rem;
}

.nuda-rating-dist__bars li {
  display: grid;
  grid-template-columns: 14px 1fr 36px;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.75rem;
  color: #a0a0a8;
}

.nuda-rating-dist__track {
  position: relative;
  height: 6px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.nuda-rating-dist__fill {
  position: absolute;
  inset: 0;
  width: 0;
  background: linear-gradient(90deg, #e4ff54, #b8cc43);
  border-radius: 3px;
  animation: nuda-rd-fill 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes nuda-rd-fill {
  to { width: var(--w); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-rating-dist__fill {
    animation: none;
    width: var(--w);
  }
}`,
      },
    ],
  },

  /* ─────────────── QUOTE MARQUEE ─────────────── */
  {
    id: "quote-marquee",
    name: "Quote Marquee",
    category: "Quotes & Testimonials",
    preview: (
      <div className="nuda-quote-marquee" aria-label="Customer quotes">
        <div className="nuda-quote-marquee__track">
          {[
            "Best in class — Lina K.",
            "Saved us 12 hours/week — Devin O.",
            "Just works. — Aki M.",
            "Felt like cheating. — Sara P.",
            "Worth every penny. — Noah F.",
            "Best in class — Lina K.",
            "Saved us 12 hours/week — Devin O.",
            "Just works. — Aki M.",
            "Felt like cheating. — Sara P.",
            "Worth every penny. — Noah F.",
          ].map((q, i) => (
            <span key={i} className="nuda-quote-marquee__item">{q}</span>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-quote-marquee{max-width:480px;overflow:hidden;padding:1rem 0;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:12px;mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-quote-marquee__track{display:flex;gap:2.5rem;width:max-content;animation:_qmarquee 24s linear infinite}
      .nuda-quote-marquee__item{font-size:.875rem;color:#a0a0a8;white-space:nowrap;display:inline-flex;align-items:center;gap:.5rem}
      .nuda-quote-marquee__item::before{content:"";width:4px;height:4px;border-radius:50%;background:#e4ff54;flex-shrink:0}
      @keyframes _qmarquee{to{transform:translateX(-50%)}}
      .nuda-quote-marquee:hover .nuda-quote-marquee__track{animation-play-state:paused}
      @media(prefers-reduced-motion:reduce){.nuda-quote-marquee__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-quote-marquee" aria-label="Customer quotes">
  <div class="nuda-quote-marquee__track">
    <span class="nuda-quote-marquee__item">Best in class — Lina K.</span>
    <span class="nuda-quote-marquee__item">Saved us 12 hours/week — Devin O.</span>
    <span class="nuda-quote-marquee__item">Just works. — Aki M.</span>
    <span class="nuda-quote-marquee__item">Felt like cheating. — Sara P.</span>
    <span class="nuda-quote-marquee__item">Worth every penny. — Noah F.</span>
    <!-- Duplicate the same items once more for a seamless loop -->
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Quote Marquee
   Infinite horizontal scroll of short testimonials.
   Duplicate the content once in the markup so the loop is seamless. */

.nuda-quote-marquee {
  max-width: 480px;
  overflow: hidden;
  padding: 1rem 0;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-quote-marquee__track {
  display: flex;
  gap: 2.5rem;
  width: max-content;
  animation: nuda-quote-marquee 24s linear infinite;
}

.nuda-quote-marquee__item {
  font-size: 0.875rem;
  color: #a0a0a8;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.nuda-quote-marquee__item::before {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #e4ff54;
  flex-shrink: 0;
}

@keyframes nuda-quote-marquee {
  to { transform: translateX(-50%); }
}

.nuda-quote-marquee:hover .nuda-quote-marquee__track {
  animation-play-state: paused;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-quote-marquee__track { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── QUOTE CAROUSEL ─────────────── */
  {
    id: "quote-carousel",
    name: "Quote Carousel",
    category: "Quotes & Testimonials",
    preview: (
      <div className="nuda-quote-carousel" aria-label="Testimonial carousel">
        <div className="nuda-quote-carousel__viewport">
          <article className="nuda-quote-carousel__slide" data-slide="1">
            <p>&ldquo;Our team adopted it in a single afternoon.&rdquo;</p>
            <footer>Ben Liu &middot; CTO, Lumen</footer>
          </article>
          <article className="nuda-quote-carousel__slide" data-slide="2">
            <p>&ldquo;The most polished tool I&rsquo;ve shipped in years.&rdquo;</p>
            <footer>Imani O. &middot; Design Lead</footer>
          </article>
          <article className="nuda-quote-carousel__slide" data-slide="3">
            <p>&ldquo;Honestly couldn&rsquo;t go back to the old way.&rdquo;</p>
            <footer>Pat W. &middot; Founder</footer>
          </article>
        </div>
        <div className="nuda-quote-carousel__dots" aria-hidden="true">
          <span /><span /><span />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-quote-carousel{max-width:400px;padding:1.25rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-quote-carousel__viewport{position:relative;height:108px;overflow:hidden}
      .nuda-quote-carousel__slide{position:absolute;inset:0;opacity:0;transform:translateY(8px);animation:_qcslide 12s cubic-bezier(.16,1,.3,1) infinite}
      .nuda-quote-carousel__slide[data-slide="1"]{animation-delay:0s}
      .nuda-quote-carousel__slide[data-slide="2"]{animation-delay:4s}
      .nuda-quote-carousel__slide[data-slide="3"]{animation-delay:8s}
      .nuda-quote-carousel__slide p{margin:0 0 .5rem;font-size:1rem;line-height:1.55;color:#fafafa}
      .nuda-quote-carousel__slide footer{font-size:.75rem;color:#a0a0a8}
      @keyframes _qcslide{0%,2%{opacity:0;transform:translateY(8px)}8%,30%{opacity:1;transform:translateY(0)}36%,100%{opacity:0;transform:translateY(-8px)}}
      .nuda-quote-carousel__dots{display:flex;gap:6px;margin-top:.75rem;justify-content:center}
      .nuda-quote-carousel__dots span{width:6px;height:6px;border-radius:50%;background:rgba(255,255,255,.15);animation:_qcdot 12s linear infinite}
      .nuda-quote-carousel__dots span:nth-child(1){animation-delay:0s}
      .nuda-quote-carousel__dots span:nth-child(2){animation-delay:4s}
      .nuda-quote-carousel__dots span:nth-child(3){animation-delay:8s}
      @keyframes _qcdot{0%,33%{background:#e4ff54;width:18px;border-radius:3px}34%,100%{background:rgba(255,255,255,.15);width:6px;border-radius:50%}}
      @media(prefers-reduced-motion:reduce){.nuda-quote-carousel__slide,.nuda-quote-carousel__dots span{animation:none}.nuda-quote-carousel__slide[data-slide="1"]{opacity:1;transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-quote-carousel" aria-label="Testimonial carousel">
  <div class="nuda-quote-carousel__viewport">
    <article class="nuda-quote-carousel__slide" data-slide="1">
      <p>&ldquo;Our team adopted it in a single afternoon.&rdquo;</p>
      <footer>Ben Liu &middot; CTO, Lumen</footer>
    </article>
    <article class="nuda-quote-carousel__slide" data-slide="2">
      <p>&ldquo;The most polished tool I've shipped in years.&rdquo;</p>
      <footer>Imani O. &middot; Design Lead</footer>
    </article>
    <article class="nuda-quote-carousel__slide" data-slide="3">
      <p>&ldquo;Honestly couldn't go back to the old way.&rdquo;</p>
      <footer>Pat W. &middot; Founder</footer>
    </article>
  </div>
  <div class="nuda-quote-carousel__dots" aria-hidden="true">
    <span></span><span></span><span></span>
  </div>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Quote Carousel
   Pure-CSS auto-rotating testimonials with active dot indicator. */

.nuda-quote-carousel {
  max-width: 400px;
  padding: 1.25rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-quote-carousel__viewport {
  position: relative;
  height: 108px;
  overflow: hidden;
}

.nuda-quote-carousel__slide {
  position: absolute;
  inset: 0;
  opacity: 0;
  transform: translateY(8px);
  animation: nuda-qc-slide 12s cubic-bezier(0.16, 1, 0.3, 1) infinite;
}

.nuda-quote-carousel__slide[data-slide="1"] { animation-delay: 0s; }
.nuda-quote-carousel__slide[data-slide="2"] { animation-delay: 4s; }
.nuda-quote-carousel__slide[data-slide="3"] { animation-delay: 8s; }

.nuda-quote-carousel__slide p {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  line-height: 1.55;
}

.nuda-quote-carousel__slide footer {
  font-size: 0.75rem;
  color: #a0a0a8;
}

@keyframes nuda-qc-slide {
  0%, 2%    { opacity: 0; transform: translateY(8px); }
  8%, 30%   { opacity: 1; transform: translateY(0); }
  36%, 100% { opacity: 0; transform: translateY(-8px); }
}

.nuda-quote-carousel__dots {
  display: flex;
  gap: 6px;
  margin-top: 0.75rem;
  justify-content: center;
}

.nuda-quote-carousel__dots span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  animation: nuda-qc-dot 12s linear infinite;
}

.nuda-quote-carousel__dots span:nth-child(1) { animation-delay: 0s; }
.nuda-quote-carousel__dots span:nth-child(2) { animation-delay: 4s; }
.nuda-quote-carousel__dots span:nth-child(3) { animation-delay: 8s; }

@keyframes nuda-qc-dot {
  0%, 33%   { background: #e4ff54; width: 18px; border-radius: 3px; }
  34%, 100% { background: rgba(255, 255, 255, 0.15); width: 6px; border-radius: 50%; }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-quote-carousel__slide,
  .nuda-quote-carousel__dots span { animation: none; }
  .nuda-quote-carousel__slide[data-slide="1"] {
    opacity: 1;
    transform: none;
  }
}`,
      },
    ],
  },

  /* ─────────────── BEFORE/AFTER TESTIMONIAL ─────────────── */
  {
    id: "before-after-testimonial",
    name: "Before / After Testimonial",
    category: "Quotes & Testimonials",
    preview: (
      <article className="nuda-ba-testi">
        <div className="nuda-ba-testi__col nuda-ba-testi__col--before">
          <div className="nuda-ba-testi__label">Before</div>
          <p>&ldquo;Three spreadsheets, two dashboards, weekly fire drills.&rdquo;</p>
        </div>
        <div className="nuda-ba-testi__col nuda-ba-testi__col--after">
          <div className="nuda-ba-testi__label">After</div>
          <p>&ldquo;One pane of glass. Reviews ship on Mondays now.&rdquo;</p>
        </div>
        <footer className="nuda-ba-testi__cite">Renee Park &middot; Ops, Helix</footer>
      </article>
    ),
    cssInline: `
      .nuda-ba-testi{position:relative;max-width:480px;display:grid;grid-template-columns:1fr 1fr;gap:1px;padding:0;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);border-radius:14px;overflow:hidden;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-ba-testi__col{padding:1.25rem;background:#0c0c10}
      .nuda-ba-testi__col--before{background:#0c0c10}
      .nuda-ba-testi__col--after{background:#111114}
      .nuda-ba-testi__label{display:inline-block;font-size:.6875rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:.125rem .5rem;border-radius:999px;margin-bottom:.625rem}
      .nuda-ba-testi__col--before .nuda-ba-testi__label{color:#ff5e7a;background:rgba(255,94,122,.12)}
      .nuda-ba-testi__col--after .nuda-ba-testi__label{color:#6ee7b7;background:rgba(110,231,183,.12)}
      .nuda-ba-testi__col p{margin:0;font-size:.875rem;line-height:1.5;color:#fafafa}
      .nuda-ba-testi__col--before p{color:#a0a0a8}
      .nuda-ba-testi__cite{grid-column:1/-1;padding:.75rem 1.25rem;background:#09090b;font-size:.75rem;color:#a0a0a8}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-ba-testi">
  <div class="nuda-ba-testi__col nuda-ba-testi__col--before">
    <div class="nuda-ba-testi__label">Before</div>
    <p>&ldquo;Three spreadsheets, two dashboards, weekly fire drills.&rdquo;</p>
  </div>
  <div class="nuda-ba-testi__col nuda-ba-testi__col--after">
    <div class="nuda-ba-testi__label">After</div>
    <p>&ldquo;One pane of glass. Reviews ship on Mondays now.&rdquo;</p>
  </div>
  <footer class="nuda-ba-testi__cite">Renee Park &middot; Ops, Helix</footer>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Before / After Testimonial
   Split-card framing of the customer's transformation. */

.nuda-ba-testi {
  position: relative;
  max-width: 480px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-ba-testi__col { padding: 1.25rem; background: #0c0c10; }
.nuda-ba-testi__col--after { background: #111114; }

.nuda-ba-testi__label {
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.125rem 0.5rem;
  border-radius: 999px;
  margin-bottom: 0.625rem;
}

.nuda-ba-testi__col--before .nuda-ba-testi__label {
  color: #ff5e7a;
  background: rgba(255, 94, 122, 0.12);
}

.nuda-ba-testi__col--after .nuda-ba-testi__label {
  color: #6ee7b7;
  background: rgba(110, 231, 183, 0.12);
}

.nuda-ba-testi__col p {
  margin: 0;
  font-size: 0.875rem;
  line-height: 1.5;
}

.nuda-ba-testi__col--before p { color: #a0a0a8; }

.nuda-ba-testi__cite {
  grid-column: 1 / -1;
  padding: 0.75rem 1.25rem;
  background: #09090b;
  font-size: 0.75rem;
  color: #a0a0a8;
}`,
      },
    ],
  },

  /* ─────────────── GRADIENT BORDER QUOTE ─────────────── */
  {
    id: "gradient-border-quote",
    name: "Quote with Gradient Border",
    category: "Quotes & Testimonials",
    preview: (
      <article className="nuda-grad-quote">
        <div className="nuda-grad-quote__inner">
          <p>&ldquo;It feels less like software and more like an extension of how we think.&rdquo;</p>
          <footer>
            <span className="nuda-grad-quote__avatar" aria-hidden="true">SO</span>
            <span>Sasha Okafor &middot; Product</span>
          </footer>
        </div>
      </article>
    ),
    cssInline: `
      .nuda-grad-quote{position:relative;max-width:400px;padding:1px;border-radius:16px;background:linear-gradient(135deg,#e4ff54,#9d6dff 50%,#62b6ff);font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-grad-quote::before{content:"";position:absolute;inset:-1px;border-radius:inherit;background:linear-gradient(135deg,#e4ff54,#9d6dff 50%,#62b6ff);filter:blur(14px);opacity:.35;z-index:-1;animation:_gqglow 6s ease-in-out infinite}
      @keyframes _gqglow{0%,100%{opacity:.25}50%{opacity:.5}}
      .nuda-grad-quote__inner{padding:1.5rem;background:#0c0c10;border-radius:15px;color:#fafafa}
      .nuda-grad-quote__inner p{margin:0 0 1rem;font-size:1rem;line-height:1.55}
      .nuda-grad-quote__inner footer{display:flex;align-items:center;gap:.625rem;font-size:.8125rem;color:#a0a0a8}
      .nuda-grad-quote__avatar{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,#e4ff54,#62b6ff);display:grid;place-items:center;font-size:.6875rem;font-weight:700;color:#0c0c10}
      @media(prefers-reduced-motion:reduce){.nuda-grad-quote::before{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-grad-quote">
  <div class="nuda-grad-quote__inner">
    <p>&ldquo;It feels less like software and more like an extension of how we think.&rdquo;</p>
    <footer>
      <span class="nuda-grad-quote__avatar" aria-hidden="true">SO</span>
      <span>Sasha Okafor &middot; Product</span>
    </footer>
  </div>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Quote with Gradient Border
   Conic-ish gradient border with a soft animated glow halo. */

.nuda-grad-quote {
  position: relative;
  max-width: 400px;
  padding: 1px;
  border-radius: 16px;
  background: linear-gradient(135deg, #e4ff54, #9d6dff 50%, #62b6ff);
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-grad-quote::before {
  content: "";
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: linear-gradient(135deg, #e4ff54, #9d6dff 50%, #62b6ff);
  filter: blur(14px);
  opacity: 0.35;
  z-index: -1;
  animation: nuda-gq-glow 6s ease-in-out infinite;
}

@keyframes nuda-gq-glow {
  0%, 100% { opacity: 0.25; }
  50%      { opacity: 0.50; }
}

.nuda-grad-quote__inner {
  padding: 1.5rem;
  background: #0c0c10;
  border-radius: 15px;
  color: #fafafa;
}

.nuda-grad-quote__inner p {
  margin: 0 0 1rem;
  font-size: 1rem;
  line-height: 1.55;
}

.nuda-grad-quote__inner footer {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.8125rem;
  color: #a0a0a8;
}

.nuda-grad-quote__avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e4ff54, #62b6ff);
  display: grid;
  place-items: center;
  font-size: 0.6875rem;
  font-weight: 700;
  color: #0c0c10;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-grad-quote::before { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── ANIMATED STAR FILL ─────────────── */
  {
    id: "animated-star-fill",
    name: "Animated Star Fill",
    category: "Quotes & Testimonials",
    preview: (
      <div className="nuda-star-fill" role="img" aria-label="4 out of 5 stars">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} viewBox="0 0 24 24" className={i < 4 ? "is-filled" : ""}>
            <defs>
              <clipPath id={`nuda-sf-clip-${i}`}>
                <rect className="nuda-star-fill__clip" x="0" y="0" width="24" height="24" />
              </clipPath>
            </defs>
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="none"
              stroke="rgba(255,255,255,.18)"
              strokeWidth="1.4"
            />
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
              fill="#ffb45e"
              clipPath={`url(#nuda-sf-clip-${i})`}
            />
          </svg>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-star-fill{display:inline-flex;gap:4px;padding:.625rem .875rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:10px}
      .nuda-star-fill svg{width:22px;height:22px;overflow:visible}
      .nuda-star-fill__clip{transform-origin:left center;transform:scaleX(0);animation:_sfclip .9s cubic-bezier(.16,1,.3,1) forwards}
      .nuda-star-fill svg:nth-child(1) .nuda-star-fill__clip{animation-delay:.05s}
      .nuda-star-fill svg:nth-child(2) .nuda-star-fill__clip{animation-delay:.18s}
      .nuda-star-fill svg:nth-child(3) .nuda-star-fill__clip{animation-delay:.31s}
      .nuda-star-fill svg:nth-child(4) .nuda-star-fill__clip{animation-delay:.44s}
      .nuda-star-fill svg:nth-child(5):not(.is-filled) .nuda-star-fill__clip{animation:none;transform:scaleX(0)}
      @keyframes _sfclip{to{transform:scaleX(1)}}
      @media(prefers-reduced-motion:reduce){.nuda-star-fill__clip{animation:none;transform:scaleX(1)}.nuda-star-fill svg:nth-child(5):not(.is-filled) .nuda-star-fill__clip{transform:scaleX(0)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-star-fill" role="img" aria-label="4 out of 5 stars">
  <!-- Repeat one of these per star. Add class="is-filled" for filled ones. -->
  <svg viewBox="0 0 24 24" class="is-filled">
    <defs>
      <clipPath id="nuda-sf-clip-1">
        <rect class="nuda-star-fill__clip" x="0" y="0" width="24" height="24" />
      </clipPath>
    </defs>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1.4" />
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          fill="#ffb45e" clip-path="url(#nuda-sf-clip-1)" />
  </svg>
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Animated Star Fill
   Each star is two SVG paths: a hollow outline + a filled copy
   masked by an animated clipPath that wipes left to right. */

.nuda-star-fill {
  display: inline-flex;
  gap: 4px;
  padding: 0.625rem 0.875rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
}

.nuda-star-fill svg {
  width: 22px;
  height: 22px;
  overflow: visible;
}

.nuda-star-fill__clip {
  transform-origin: left center;
  transform: scaleX(0);
  animation: nuda-sf-clip 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.nuda-star-fill svg:nth-child(1) .nuda-star-fill__clip { animation-delay: 0.05s; }
.nuda-star-fill svg:nth-child(2) .nuda-star-fill__clip { animation-delay: 0.18s; }
.nuda-star-fill svg:nth-child(3) .nuda-star-fill__clip { animation-delay: 0.31s; }
.nuda-star-fill svg:nth-child(4) .nuda-star-fill__clip { animation-delay: 0.44s; }

/* Unfilled stars stay empty */
.nuda-star-fill svg:nth-child(5):not(.is-filled) .nuda-star-fill__clip {
  animation: none;
  transform: scaleX(0);
}

@keyframes nuda-sf-clip {
  to { transform: scaleX(1); }
}

@media (prefers-reduced-motion: reduce) {
  .nuda-star-fill__clip {
    animation: none;
    transform: scaleX(1);
  }
  .nuda-star-fill svg:nth-child(5):not(.is-filled) .nuda-star-fill__clip {
    transform: scaleX(0);
  }
}`,
      },
    ],
  },

  /* ─────────────── VERIFIED CUSTOMER BADGE ─────────────── */
  {
    id: "verified-customer-badge",
    name: "Verified Customer Badge",
    category: "Quotes & Testimonials",
    preview: (
      <article className="nuda-verified">
        <p className="nuda-verified__quote">
          &ldquo;The migration took 11 minutes. We expected 11 days.&rdquo;
        </p>
        <div className="nuda-verified__footer">
          <span className="nuda-verified__avatar" aria-hidden="true">DM</span>
          <div className="nuda-verified__id">
            <div className="nuda-verified__name">
              Dani Mendez
              <span className="nuda-verified__badge" title="Verified customer">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2l2.39 2.06 3.13-.45.45 3.13L20.03 9.61 18.06 12l1.97 2.39-2.06 3.13-3.13.45-.45 3.13L12 22.03l-2.39-1.97-3.13.45-.45-3.13L3.97 14.39 5.94 12 3.97 9.61l2.06-3.13 3.13-.45.45-3.13z" fill="#62b6ff"/>
                  <path d="M9 12l2 2 4-4" fill="none" stroke="#0c0c10" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <div className="nuda-verified__role">Verified buyer &middot; 14 mo</div>
          </div>
        </div>
      </article>
    ),
    cssInline: `
      .nuda-verified{max-width:380px;padding:1.5rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-verified__quote{margin:0 0 1rem;font-size:.9375rem;line-height:1.55;color:#fafafa}
      .nuda-verified__footer{display:flex;align-items:center;gap:.75rem}
      .nuda-verified__avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#62b6ff,#6ee7b7);display:grid;place-items:center;font-size:.75rem;font-weight:700;color:#0c0c10;flex-shrink:0}
      .nuda-verified__name{display:flex;align-items:center;gap:.375rem;font-size:.875rem;font-weight:600;color:#fafafa;line-height:1.2}
      .nuda-verified__badge{display:inline-grid;place-items:center;width:16px;height:16px;animation:_vbpop .5s cubic-bezier(.34,1.56,.64,1) .2s both}
      .nuda-verified__badge svg{width:16px;height:16px}
      @keyframes _vbpop{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
      .nuda-verified__role{margin-top:.125rem;font-size:.75rem;color:#a0a0a8}
      @media(prefers-reduced-motion:reduce){.nuda-verified__badge{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-verified">
  <p class="nuda-verified__quote">
    &ldquo;The migration took 11 minutes. We expected 11 days.&rdquo;
  </p>
  <div class="nuda-verified__footer">
    <span class="nuda-verified__avatar" aria-hidden="true">DM</span>
    <div class="nuda-verified__id">
      <div class="nuda-verified__name">
        Dani Mendez
        <span class="nuda-verified__badge" title="Verified customer">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2l2.39 2.06 3.13-.45.45 3.13L20.03 9.61 18.06 12l1.97 2.39-2.06 3.13-3.13.45-.45 3.13L12 22.03l-2.39-1.97-3.13.45-.45-3.13L3.97 14.39 5.94 12 3.97 9.61l2.06-3.13 3.13-.45.45-3.13z" fill="#62b6ff"/>
            <path d="M9 12l2 2 4-4" fill="none" stroke="#0c0c10" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </div>
      <div class="nuda-verified__role">Verified buyer &middot; 14 mo</div>
    </div>
  </div>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Verified Customer Badge
   Customer testimonial with a pop-in verification checkmark. */

.nuda-verified {
  max-width: 380px;
  padding: 1.5rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-verified__quote {
  margin: 0 0 1rem;
  font-size: 0.9375rem;
  line-height: 1.55;
}

.nuda-verified__footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nuda-verified__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #62b6ff, #6ee7b7);
  display: grid;
  place-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #0c0c10;
  flex-shrink: 0;
}

.nuda-verified__name {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.2;
}

.nuda-verified__badge {
  display: inline-grid;
  place-items: center;
  width: 16px;
  height: 16px;
  animation: nuda-vb-pop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}

.nuda-verified__badge svg { width: 16px; height: 16px; }

@keyframes nuda-vb-pop {
  from { transform: scale(0); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

.nuda-verified__role {
  margin-top: 0.125rem;
  font-size: 0.75rem;
  color: #a0a0a8;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-verified__badge { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── MASONRY GRID ─────────────── */
  {
    id: "testimonial-masonry",
    name: "Testimonial Grid Masonry",
    category: "Quotes & Testimonials",
    preview: (
      <div className="nuda-masonry">
        <article className="nuda-masonry__card" style={{ gridRow: "span 2" }}>
          <p>&ldquo;Honestly the fastest I&rsquo;ve gone from idea to shipped feature.&rdquo;</p>
          <footer><span className="nuda-masonry__avatar" style={{ background: "linear-gradient(135deg,#e4ff54,#62b6ff)" }} aria-hidden="true">AK</span>Aki M.</footer>
        </article>
        <article className="nuda-masonry__card">
          <p>&ldquo;Beautiful, and it works.&rdquo;</p>
          <footer><span className="nuda-masonry__avatar" style={{ background: "linear-gradient(135deg,#ff6dd4,#9d6dff)" }} aria-hidden="true">SP</span>Sara P.</footer>
        </article>
        <article className="nuda-masonry__card">
          <p>&ldquo;My team asked who built it.&rdquo;</p>
          <footer><span className="nuda-masonry__avatar" style={{ background: "linear-gradient(135deg,#ffb45e,#ff5e7a)" }} aria-hidden="true">NF</span>Noah F.</footer>
        </article>
        <article className="nuda-masonry__card" style={{ gridRow: "span 2" }}>
          <p>&ldquo;Replaced three SaaS tools. Pays for itself.&rdquo;</p>
          <footer><span className="nuda-masonry__avatar" style={{ background: "linear-gradient(135deg,#6ee7b7,#62b6ff)" }} aria-hidden="true">LK</span>Lina K.</footer>
        </article>
      </div>
    ),
    cssInline: `
      .nuda-masonry{max-width:480px;display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:minmax(80px,auto);gap:.75rem;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-masonry__card{padding:1rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:12px;color:#fafafa;transition:border-color .3s cubic-bezier(.16,1,.3,1),transform .3s cubic-bezier(.16,1,.3,1);display:flex;flex-direction:column;justify-content:space-between;gap:.75rem}
      .nuda-masonry__card:hover{border-color:rgba(255,255,255,.16);transform:translateY(-2px)}
      .nuda-masonry__card p{margin:0;font-size:.8125rem;line-height:1.5;color:#fafafa}
      .nuda-masonry__card footer{display:flex;align-items:center;gap:.5rem;font-size:.6875rem;color:#a0a0a8}
      .nuda-masonry__avatar{width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:.5625rem;font-weight:700;color:#0c0c10;flex-shrink:0}
      @media(prefers-reduced-motion:reduce){.nuda-masonry__card{transition:none}.nuda-masonry__card:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-masonry">
  <article class="nuda-masonry__card" style="grid-row: span 2">
    <p>&ldquo;Honestly the fastest I've gone from idea to shipped feature.&rdquo;</p>
    <footer>
      <span class="nuda-masonry__avatar"
            style="background: linear-gradient(135deg, #e4ff54, #62b6ff)"
            aria-hidden="true">AK</span>
      Aki M.
    </footer>
  </article>
  <article class="nuda-masonry__card">
    <p>&ldquo;Beautiful, and it works.&rdquo;</p>
    <footer>
      <span class="nuda-masonry__avatar"
            style="background: linear-gradient(135deg, #ff6dd4, #9d6dff)"
            aria-hidden="true">SP</span>
      Sara P.
    </footer>
  </article>
  <!-- ...more cards. Vary grid-row span to create the masonry effect. -->
</div>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Testimonial Grid Masonry
   Two-column staggered grid using grid-row: span N for tall cards. */

.nuda-masonry {
  max-width: 480px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: minmax(80px, auto);
  gap: 0.75rem;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-masonry__card {
  padding: 1rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: #fafafa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.75rem;
  transition:
    border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.nuda-masonry__card:hover {
  border-color: rgba(255, 255, 255, 0.16);
  transform: translateY(-2px);
}

.nuda-masonry__card p {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.5;
}

.nuda-masonry__card footer {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.6875rem;
  color: #a0a0a8;
}

.nuda-masonry__avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.5625rem;
  font-weight: 700;
  color: #0c0c10;
  flex-shrink: 0;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-masonry__card { transition: none; }
  .nuda-masonry__card:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── SPOTLIGHT QUOTE ─────────────── */
  {
    id: "spotlight-quote",
    name: "Quote with Spotlight",
    category: "Quotes & Testimonials",
    preview: (
      <article className="nuda-spotlight">
        <div className="nuda-spotlight__glow" aria-hidden="true" />
        <span className="nuda-spotlight__mark" aria-hidden="true">&ldquo;</span>
        <p>This is the rare product that gets out of its own way. Every interaction feels intentional.</p>
        <footer>
          <span className="nuda-spotlight__avatar" aria-hidden="true">EV</span>
          <span>Elena Vasquez &middot; Director, Field Labs</span>
        </footer>
      </article>
    ),
    cssInline: `
      .nuda-spotlight{position:relative;max-width:420px;padding:2rem 1.75rem 1.5rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:16px;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif;overflow:hidden;isolation:isolate}
      .nuda-spotlight__glow{position:absolute;top:-40%;left:-20%;width:80%;height:160%;background:radial-gradient(closest-side,rgba(228,255,84,.22),transparent 70%);filter:blur(8px);z-index:-1;animation:_spdrift 8s ease-in-out infinite}
      @keyframes _spdrift{0%,100%{transform:translate(0,0)}50%{transform:translate(40%,10%)}}
      .nuda-spotlight__mark{position:absolute;top:-.5rem;right:1rem;font-size:5rem;line-height:1;color:#e4ff54;font-family:Georgia,serif;opacity:.18;font-weight:700;pointer-events:none}
      .nuda-spotlight p{margin:0 0 1.25rem;font-size:1rem;line-height:1.55;color:#fafafa;position:relative;z-index:1}
      .nuda-spotlight footer{display:flex;align-items:center;gap:.625rem;font-size:.8125rem;color:#a0a0a8}
      .nuda-spotlight__avatar{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#e4ff54,#ffb45e);display:grid;place-items:center;font-size:.6875rem;font-weight:700;color:#0c0c10}
      @media(prefers-reduced-motion:reduce){.nuda-spotlight__glow{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-spotlight">
  <div class="nuda-spotlight__glow" aria-hidden="true"></div>
  <span class="nuda-spotlight__mark" aria-hidden="true">&ldquo;</span>
  <p>This is the rare product that gets out of its own way. Every interaction feels intentional.</p>
  <footer>
    <span class="nuda-spotlight__avatar" aria-hidden="true">EV</span>
    <span>Elena Vasquez &middot; Director, Field Labs</span>
  </footer>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Quote with Spotlight
   Radial highlight slowly drifts behind the quote. */

.nuda-spotlight {
  position: relative;
  max-width: 420px;
  padding: 2rem 1.75rem 1.5rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
  overflow: hidden;
  isolation: isolate;
}

.nuda-spotlight__glow {
  position: absolute;
  top: -40%;
  left: -20%;
  width: 80%;
  height: 160%;
  background: radial-gradient(
    closest-side,
    rgba(228, 255, 84, 0.22),
    transparent 70%
  );
  filter: blur(8px);
  z-index: -1;
  animation: nuda-sp-drift 8s ease-in-out infinite;
}

@keyframes nuda-sp-drift {
  0%, 100% { transform: translate(0, 0); }
  50%      { transform: translate(40%, 10%); }
}

.nuda-spotlight__mark {
  position: absolute;
  top: -0.5rem;
  right: 1rem;
  font-size: 5rem;
  line-height: 1;
  color: #e4ff54;
  font-family: Georgia, serif;
  opacity: 0.18;
  font-weight: 700;
  pointer-events: none;
}

.nuda-spotlight p {
  margin: 0 0 1.25rem;
  font-size: 1rem;
  line-height: 1.55;
  position: relative;
  z-index: 1;
}

.nuda-spotlight footer {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.8125rem;
  color: #a0a0a8;
}

.nuda-spotlight__avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e4ff54, #ffb45e);
  display: grid;
  place-items: center;
  font-size: 0.6875rem;
  font-weight: 700;
  color: #0c0c10;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-spotlight__glow { animation: none; }
}`,
      },
    ],
  },

  /* ─────────────── STAT QUOTE ─────────────── */
  {
    id: "stat-quote",
    name: "Numbered Stat Quote",
    category: "Quotes & Testimonials",
    preview: (
      <article className="nuda-stat-quote">
        <div className="nuda-stat-quote__stat">
          <span className="nuda-stat-quote__num">3<small>x</small></span>
          <span className="nuda-stat-quote__suffix">faster</span>
        </div>
        <p className="nuda-stat-quote__body">
          &ldquo;We cut our release cycle from six weeks to under two.&rdquo;
        </p>
        <footer className="nuda-stat-quote__cite">Marcus Lee &middot; VP Eng, Helio</footer>
      </article>
    ),
    cssInline: `
      .nuda-stat-quote{max-width:380px;padding:1.5rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:14px;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif}
      .nuda-stat-quote__stat{display:flex;align-items:baseline;gap:.5rem;margin-bottom:1rem}
      .nuda-stat-quote__num{font-size:3rem;line-height:1;font-weight:700;letter-spacing:-.03em;background:linear-gradient(135deg,#e4ff54,#b8cc43);-webkit-background-clip:text;background-clip:text;color:transparent;display:inline-flex;align-items:baseline}
      .nuda-stat-quote__num small{font-size:1.5rem;font-weight:600;margin-left:.125rem}
      .nuda-stat-quote__suffix{font-size:.875rem;font-weight:500;color:#a0a0a8;text-transform:lowercase;letter-spacing:.02em}
      .nuda-stat-quote__body{margin:0 0 .75rem;font-size:.9375rem;line-height:1.55;color:#fafafa}
      .nuda-stat-quote__cite{font-size:.75rem;color:#63636e}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-stat-quote">
  <div class="nuda-stat-quote__stat">
    <span class="nuda-stat-quote__num">3<small>x</small></span>
    <span class="nuda-stat-quote__suffix">faster</span>
  </div>
  <p class="nuda-stat-quote__body">
    &ldquo;We cut our release cycle from six weeks to under two.&rdquo;
  </p>
  <footer class="nuda-stat-quote__cite">Marcus Lee &middot; VP Eng, Helio</footer>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Numbered Stat Quote
   Big gradient number leads a supporting quote. */

.nuda-stat-quote {
  max-width: 380px;
  padding: 1.5rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.nuda-stat-quote__stat {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.nuda-stat-quote__num {
  font-size: 3rem;
  line-height: 1;
  font-weight: 700;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #e4ff54, #b8cc43);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-flex;
  align-items: baseline;
}

.nuda-stat-quote__num small {
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 0.125rem;
}

.nuda-stat-quote__suffix {
  font-size: 0.875rem;
  font-weight: 500;
  color: #a0a0a8;
  text-transform: lowercase;
  letter-spacing: 0.02em;
}

.nuda-stat-quote__body {
  margin: 0 0 0.75rem;
  font-size: 0.9375rem;
  line-height: 1.55;
}

.nuda-stat-quote__cite {
  font-size: 0.75rem;
  color: #63636e;
}`,
      },
    ],
  },

  /* ─────────────── FLOATING QUOTE CARD ─────────────── */
  {
    id: "floating-quote-card",
    name: "Floating Quote Card",
    category: "Quotes & Testimonials",
    preview: (
      <article className="nuda-float-quote">
        <p>&ldquo;Felt like an unfair advantage. Our small team punches three weight classes up.&rdquo;</p>
        <footer>
          <span className="nuda-float-quote__avatar" aria-hidden="true">RC</span>
          <div>
            <div className="nuda-float-quote__name">Riya Chen</div>
            <div className="nuda-float-quote__role">Founder, Beacon</div>
          </div>
        </footer>
      </article>
    ),
    cssInline: `
      .nuda-float-quote{max-width:380px;padding:1.5rem;background:#111114;border:1px solid rgba(255,255,255,.08);border-radius:16px;color:#fafafa;font-family:ui-sans-serif,system-ui,sans-serif;box-shadow:0 1px 0 rgba(255,255,255,.04) inset,0 8px 24px rgba(0,0,0,.35),0 24px 64px rgba(0,0,0,.4);transition:transform .4s cubic-bezier(.16,1,.3,1),box-shadow .4s cubic-bezier(.16,1,.3,1);animation:_fqfloat 6s ease-in-out infinite}
      @keyframes _fqfloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      .nuda-float-quote:hover{transform:translateY(-8px);box-shadow:0 1px 0 rgba(255,255,255,.06) inset,0 12px 32px rgba(0,0,0,.45),0 32px 80px rgba(0,0,0,.5)}
      .nuda-float-quote p{margin:0 0 1.25rem;font-size:.9375rem;line-height:1.55;color:#fafafa}
      .nuda-float-quote footer{display:flex;align-items:center;gap:.75rem}
      .nuda-float-quote__avatar{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#ff6dd4,#9d6dff);display:grid;place-items:center;font-size:.75rem;font-weight:700;color:#fafafa;flex-shrink:0}
      .nuda-float-quote__name{font-size:.8125rem;font-weight:600;color:#fafafa;line-height:1.2}
      .nuda-float-quote__role{margin-top:.125rem;font-size:.6875rem;color:#a0a0a8}
      @media(prefers-reduced-motion:reduce){.nuda-float-quote{animation:none;transition:none}.nuda-float-quote:hover{transform:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<article class="nuda-float-quote">
  <p>&ldquo;Felt like an unfair advantage. Our small team punches three weight classes up.&rdquo;</p>
  <footer>
    <span class="nuda-float-quote__avatar" aria-hidden="true">RC</span>
    <div>
      <div class="nuda-float-quote__name">Riya Chen</div>
      <div class="nuda-float-quote__role">Founder, Beacon</div>
    </div>
  </footer>
</article>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Floating Quote Card
   Idle micro-bob + deeper lift on hover with layered shadows. */

.nuda-float-quote {
  max-width: 380px;
  padding: 1.5rem;
  background: #111114;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  color: #fafafa;
  font-family: ui-sans-serif, system-ui, sans-serif;
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.04) inset,
    0 8px 24px rgba(0, 0, 0, 0.35),
    0 24px 64px rgba(0, 0, 0, 0.40);
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  animation: nuda-fq-float 6s ease-in-out infinite;
}

@keyframes nuda-fq-float {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
}

.nuda-float-quote:hover {
  transform: translateY(-8px);
  box-shadow:
    0 1px 0 rgba(255, 255, 255, 0.06) inset,
    0 12px 32px rgba(0, 0, 0, 0.45),
    0 32px 80px rgba(0, 0, 0, 0.50);
}

.nuda-float-quote p {
  margin: 0 0 1.25rem;
  font-size: 0.9375rem;
  line-height: 1.55;
}

.nuda-float-quote footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.nuda-float-quote__avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6dd4, #9d6dff);
  display: grid;
  place-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fafafa;
  flex-shrink: 0;
}

.nuda-float-quote__name {
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.2;
}

.nuda-float-quote__role {
  margin-top: 0.125rem;
  font-size: 0.6875rem;
  color: #a0a0a8;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-float-quote { animation: none; transition: none; }
  .nuda-float-quote:hover { transform: none; }
}`,
      },
    ],
  },

  /* ─────────────── INLINE QUOTE LINK ─────────────── */
  {
    id: "inline-quote-link",
    name: "Inline Quote with Link",
    category: "Quotes & Testimonials",
    preview: (
      <p className="nuda-inline-quote">
        Trusted by teams at <a className="nuda-inline-quote__link" href="#orbit">Orbit</a>, <a className="nuda-inline-quote__link" href="#helix">Helix</a>, and <a className="nuda-inline-quote__link" href="#lumen">Lumen</a>, who call it{" "}
        <q className="nuda-inline-quote__q">
          the most useful thing we&rsquo;ve added all year
        </q>
        .
      </p>
    ),
    cssInline: `
      .nuda-inline-quote{max-width:480px;margin:0;padding:1rem 1.25rem;background:#0c0c10;border:1px solid rgba(255,255,255,.08);border-radius:12px;color:#a0a0a8;font-family:ui-sans-serif,system-ui,sans-serif;font-size:.9375rem;line-height:1.6}
      .nuda-inline-quote__link{position:relative;color:#fafafa;font-weight:500;text-decoration:none;background-image:linear-gradient(#e4ff54,#e4ff54);background-size:0% 1px;background-position:0 100%;background-repeat:no-repeat;transition:background-size .4s cubic-bezier(.16,1,.3,1),color .3s ease}
      .nuda-inline-quote__link:hover,.nuda-inline-quote__link:focus-visible{background-size:100% 1px;color:#e4ff54;outline:none}
      .nuda-inline-quote__q{font-style:italic;color:#fafafa;quotes:"\\201C" "\\201D"}
      .nuda-inline-quote__q::before{content:open-quote;color:#e4ff54;margin-right:.05em}
      .nuda-inline-quote__q::after{content:close-quote;color:#e4ff54;margin-left:.05em}
      @media(prefers-reduced-motion:reduce){.nuda-inline-quote__link{transition:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<p class="nuda-inline-quote">
  Trusted by teams at
  <a class="nuda-inline-quote__link" href="#orbit">Orbit</a>,
  <a class="nuda-inline-quote__link" href="#helix">Helix</a>, and
  <a class="nuda-inline-quote__link" href="#lumen">Lumen</a>,
  who call it
  <q class="nuda-inline-quote__q">the most useful thing we've added all year</q>.
</p>`,
      },
      {
        label: "CSS",
        language: "css",
        code: `/* Inline Quote with Link
   Inline blockquote tucked into running prose with animated link underlines. */

.nuda-inline-quote {
  max-width: 480px;
  margin: 0;
  padding: 1rem 1.25rem;
  background: #0c0c10;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: #a0a0a8;
  font-family: ui-sans-serif, system-ui, sans-serif;
  font-size: 0.9375rem;
  line-height: 1.6;
}

.nuda-inline-quote__link {
  position: relative;
  color: #fafafa;
  font-weight: 500;
  text-decoration: none;
  background-image: linear-gradient(#e4ff54, #e4ff54);
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition:
    background-size 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.3s ease;
}

.nuda-inline-quote__link:hover,
.nuda-inline-quote__link:focus-visible {
  background-size: 100% 1px;
  color: #e4ff54;
  outline: none;
}

.nuda-inline-quote__q {
  font-style: italic;
  color: #fafafa;
  quotes: "\\201C" "\\201D";
}

.nuda-inline-quote__q::before {
  content: open-quote;
  color: #e4ff54;
  margin-right: 0.05em;
}

.nuda-inline-quote__q::after {
  content: close-quote;
  color: #e4ff54;
  margin-left: 0.05em;
}

@media (prefers-reduced-motion: reduce) {
  .nuda-inline-quote__link { transition: none; }
}`,
      },
    ],
  },
];
