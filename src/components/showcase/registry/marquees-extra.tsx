import type { NudaComponent } from "./types";

const CAT = "Marquees & Tickers";

export const marqueesExtra: NudaComponent[] = [
  /* ─────────────── STOCK TICKER ─────────────── */
  {
    id: "mq2-stock-ticker",
    name: "Stock Ticker",
    category: CAT,
    preview: (
      <div className="nuda-mq2-stock-ticker" aria-hidden="true">
        <div className="nuda-mq2-stock-ticker__track">
          {[
            { sym: "AAPL", price: "189.42", delta: "+1.24%", up: true },
            { sym: "TSLA", price: "241.05", delta: "-2.18%", up: false },
            { sym: "NVDA", price: "875.30", delta: "+3.67%", up: true },
            { sym: "MSFT", price: "402.11", delta: "-0.54%", up: false },
            { sym: "AAPL", price: "189.42", delta: "+1.24%", up: true },
            { sym: "TSLA", price: "241.05", delta: "-2.18%", up: false },
            { sym: "NVDA", price: "875.30", delta: "+3.67%", up: true },
            { sym: "MSFT", price: "402.11", delta: "-0.54%", up: false },
          ].map((s, i) => (
            <div className="nuda-mq2-stock-ticker__item" key={i}>
              <span className="nuda-mq2-stock-ticker__sym">{s.sym}</span>
              <span className="nuda-mq2-stock-ticker__price">{s.price}</span>
              <span
                className={`nuda-mq2-stock-ticker__delta nuda-mq2-stock-ticker__delta--${s.up ? "up" : "down"}`}
              >
                {s.up ? "▲" : "▼"} {s.delta}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-stock-ticker{overflow:hidden;width:100%;max-width:280px;background:#111113;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:8px 0}
      .nuda-mq2-stock-ticker__track{display:flex;width:max-content;gap:18px;padding:0 12px;animation:_nuda-mq2stockticker 14s linear infinite}
      .nuda-mq2-stock-ticker__item{display:flex;align-items:center;gap:6px;white-space:nowrap;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.65rem}
      .nuda-mq2-stock-ticker__sym{color:#fafafa;font-weight:700}
      .nuda-mq2-stock-ticker__price{color:#cfcfcf}
      .nuda-mq2-stock-ticker__delta--up{color:#4ade80}
      .nuda-mq2-stock-ticker__delta--down{color:#f87171}
      .nuda-mq2-stock-ticker:hover .nuda-mq2-stock-ticker__track{animation-play-state:paused}
      @keyframes _nuda-mq2stockticker{to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-stock-ticker__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-stock-ticker" aria-hidden="true">
  <div class="nuda-mq2-stock-ticker__track">
    <div class="nuda-mq2-stock-ticker__item">
      <span class="nuda-mq2-stock-ticker__sym">AAPL</span>
      <span class="nuda-mq2-stock-ticker__price">189.42</span>
      <span class="nuda-mq2-stock-ticker__delta nuda-mq2-stock-ticker__delta--up">&#9650; +1.24%</span>
    </div>
    <div class="nuda-mq2-stock-ticker__item">
      <span class="nuda-mq2-stock-ticker__sym">TSLA</span>
      <span class="nuda-mq2-stock-ticker__price">241.05</span>
      <span class="nuda-mq2-stock-ticker__delta nuda-mq2-stock-ticker__delta--down">&#9660; -2.18%</span>
    </div>
    <div class="nuda-mq2-stock-ticker__item">
      <span class="nuda-mq2-stock-ticker__sym">NVDA</span>
      <span class="nuda-mq2-stock-ticker__price">875.30</span>
      <span class="nuda-mq2-stock-ticker__delta nuda-mq2-stock-ticker__delta--up">&#9650; +3.67%</span>
    </div>
    <div class="nuda-mq2-stock-ticker__item">
      <span class="nuda-mq2-stock-ticker__sym">MSFT</span>
      <span class="nuda-mq2-stock-ticker__price">402.11</span>
      <span class="nuda-mq2-stock-ticker__delta nuda-mq2-stock-ticker__delta--down">&#9660; -0.54%</span>
    </div>
    <!-- Duplicate the items above for a seamless loop -->
    <div class="nuda-mq2-stock-ticker__item">
      <span class="nuda-mq2-stock-ticker__sym">AAPL</span>
      <span class="nuda-mq2-stock-ticker__price">189.42</span>
      <span class="nuda-mq2-stock-ticker__delta nuda-mq2-stock-ticker__delta--up">&#9650; +1.24%</span>
    </div>
    <div class="nuda-mq2-stock-ticker__item">
      <span class="nuda-mq2-stock-ticker__sym">TSLA</span>
      <span class="nuda-mq2-stock-ticker__price">241.05</span>
      <span class="nuda-mq2-stock-ticker__delta nuda-mq2-stock-ticker__delta--down">&#9660; -2.18%</span>
    </div>
    <div class="nuda-mq2-stock-ticker__item">
      <span class="nuda-mq2-stock-ticker__sym">NVDA</span>
      <span class="nuda-mq2-stock-ticker__price">875.30</span>
      <span class="nuda-mq2-stock-ticker__delta nuda-mq2-stock-ticker__delta--up">&#9650; +3.67%</span>
    </div>
    <div class="nuda-mq2-stock-ticker__item">
      <span class="nuda-mq2-stock-ticker__sym">MSFT</span>
      <span class="nuda-mq2-stock-ticker__price">402.11</span>
      <span class="nuda-mq2-stock-ticker__delta nuda-mq2-stock-ticker__delta--down">&#9660; -0.54%</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── NEWS HEADLINE CRAWL ─────────────── */
  {
    id: "mq2-news-crawl",
    name: "News Headline Crawl",
    category: CAT,
    preview: (
      <div className="nuda-mq2-news-crawl" aria-hidden="true">
        <div className="nuda-mq2-news-crawl__track">
          {[
            { cat: "TECH", text: "AI model doubles inference speed overnight" },
            { cat: "SPORT", text: "Underdog seals dramatic derby win" },
            { cat: "WORLD", text: "Summit ends with new trade pact" },
            { cat: "BIZ", text: "Startup raises $40M Series B" },
            { cat: "TECH", text: "AI model doubles inference speed overnight" },
            { cat: "SPORT", text: "Underdog seals dramatic derby win" },
            { cat: "WORLD", text: "Summit ends with new trade pact" },
            { cat: "BIZ", text: "Startup raises $40M Series B" },
          ].map((n, i) => (
            <div className="nuda-mq2-news-crawl__item" key={i}>
              <span className="nuda-mq2-news-crawl__flag">{n.cat}</span>
              <span className="nuda-mq2-news-crawl__headline">{n.text}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-news-crawl{overflow:hidden;width:100%;max-width:280px;background:#0a0a0a;border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-mq2-news-crawl__track{display:flex;width:max-content;align-items:center;gap:22px;padding:7px 10px;animation:_nuda-mq2newscrawl 16s linear infinite}
      .nuda-mq2-news-crawl__item{display:flex;align-items:center;gap:6px;white-space:nowrap;font-size:.62rem}
      .nuda-mq2-news-crawl__flag{display:inline-block;padding:1px 5px;border-radius:3px;font-size:.52rem;font-weight:800;letter-spacing:.04em;color:#0a0a0a;background:#e4ff54}
      .nuda-mq2-news-crawl__item:nth-child(4n+2) .nuda-mq2-news-crawl__flag{background:#7dd3fc}
      .nuda-mq2-news-crawl__item:nth-child(4n+3) .nuda-mq2-news-crawl__flag{background:#fca5a5}
      .nuda-mq2-news-crawl__item:nth-child(4n+4) .nuda-mq2-news-crawl__flag{background:#c4b5fd}
      .nuda-mq2-news-crawl__headline{color:#e5e5e5}
      .nuda-mq2-news-crawl:hover .nuda-mq2-news-crawl__track{animation-play-state:paused}
      @keyframes _nuda-mq2newscrawl{to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-news-crawl__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-news-crawl" aria-hidden="true">
  <div class="nuda-mq2-news-crawl__track">
    <div class="nuda-mq2-news-crawl__item">
      <span class="nuda-mq2-news-crawl__flag">TECH</span>
      <span class="nuda-mq2-news-crawl__headline">AI model doubles inference speed overnight</span>
    </div>
    <div class="nuda-mq2-news-crawl__item">
      <span class="nuda-mq2-news-crawl__flag">SPORT</span>
      <span class="nuda-mq2-news-crawl__headline">Underdog seals dramatic derby win</span>
    </div>
    <div class="nuda-mq2-news-crawl__item">
      <span class="nuda-mq2-news-crawl__flag">WORLD</span>
      <span class="nuda-mq2-news-crawl__headline">Summit ends with new trade pact</span>
    </div>
    <div class="nuda-mq2-news-crawl__item">
      <span class="nuda-mq2-news-crawl__flag">BIZ</span>
      <span class="nuda-mq2-news-crawl__headline">Startup raises $40M Series B</span>
    </div>
    <!-- Duplicate the items above for a seamless loop -->
    <div class="nuda-mq2-news-crawl__item">
      <span class="nuda-mq2-news-crawl__flag">TECH</span>
      <span class="nuda-mq2-news-crawl__headline">AI model doubles inference speed overnight</span>
    </div>
    <div class="nuda-mq2-news-crawl__item">
      <span class="nuda-mq2-news-crawl__flag">SPORT</span>
      <span class="nuda-mq2-news-crawl__headline">Underdog seals dramatic derby win</span>
    </div>
    <div class="nuda-mq2-news-crawl__item">
      <span class="nuda-mq2-news-crawl__flag">WORLD</span>
      <span class="nuda-mq2-news-crawl__headline">Summit ends with new trade pact</span>
    </div>
    <div class="nuda-mq2-news-crawl__item">
      <span class="nuda-mq2-news-crawl__flag">BIZ</span>
      <span class="nuda-mq2-news-crawl__headline">Startup raises $40M Series B</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── BREAKING NEWS BAND ─────────────── */
  {
    id: "mq2-breaking-news",
    name: "Breaking News Band",
    category: CAT,
    preview: (
      <div className="nuda-mq2-breaking-news" aria-hidden="true">
        <div className="nuda-mq2-breaking-news__badge">
          <span className="nuda-mq2-breaking-news__dot"></span>
          LIVE
        </div>
        <div className="nuda-mq2-breaking-news__track">
          <span className="nuda-mq2-breaking-news__text">Global markets rally on surprise rate-cut signal &mdash;&nbsp;</span>
          <span className="nuda-mq2-breaking-news__text">Global markets rally on surprise rate-cut signal &mdash;&nbsp;</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-breaking-news{display:flex;align-items:center;width:100%;max-width:280px;overflow:hidden;background:linear-gradient(90deg,#7f1d1d,#450a0a);border-radius:6px}
      .nuda-mq2-breaking-news__badge{flex:none;display:flex;align-items:center;gap:5px;background:#dc2626;color:#fff;font-size:.55rem;font-weight:800;letter-spacing:.05em;padding:5px 8px;text-transform:uppercase}
      .nuda-mq2-breaking-news__dot{display:block;width:6px;height:6px;border-radius:50%;background:#fff;animation:nuda-mq2-breaking-news-pulse 1.4s ease-in-out infinite}
      .nuda-mq2-breaking-news__track{display:flex;width:max-content;padding:0 10px;animation:nuda-mq2-breaking-news-scroll 12s linear infinite}
      .nuda-mq2-breaking-news__text{font-size:.62rem;color:#fecaca;white-space:nowrap}
      @keyframes nuda-mq2-breaking-news-scroll{to{transform:translateX(-50%)}}
      @keyframes nuda-mq2-breaking-news-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.6);opacity:.4}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-breaking-news__track{animation:none}.nuda-mq2-breaking-news__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-breaking-news" aria-hidden="true">
  <div class="nuda-mq2-breaking-news__badge">
    <span class="nuda-mq2-breaking-news__dot"></span>
    LIVE
  </div>
  <div class="nuda-mq2-breaking-news__track">
    <span class="nuda-mq2-breaking-news__text">Global markets rally on surprise rate-cut signal &mdash;&nbsp;</span>
    <span class="nuda-mq2-breaking-news__text">Global markets rally on surprise rate-cut signal &mdash;&nbsp;</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── SPORTS SCOREBOARD STRIP ─────────────── */
  {
    id: "mq2-scoreboard",
    name: "Sports Scoreboard Strip",
    category: CAT,
    preview: (
      <div className="nuda-mq2-scoreboard" aria-hidden="true">
        <div className="nuda-mq2-scoreboard__track">
          {[
            { a: "LAL", as: "102", b: "BOS", bs: "98" },
            { a: "NYK", as: "110", b: "MIA", bs: "105" },
            { a: "GSW", as: "118", b: "PHX", bs: "112" },
            { a: "LAL", as: "102", b: "BOS", bs: "98" },
            { a: "NYK", as: "110", b: "MIA", bs: "105" },
            { a: "GSW", as: "118", b: "PHX", bs: "112" },
          ].map((g, i) => (
            <div className="nuda-mq2-scoreboard__item" key={i}>
              <span className="nuda-mq2-scoreboard__team">{g.a}</span>
              <span className="nuda-mq2-scoreboard__score">{g.as}</span>
              <span className="nuda-mq2-scoreboard__sep">&mdash;</span>
              <span className="nuda-mq2-scoreboard__team">{g.b}</span>
              <span className="nuda-mq2-scoreboard__score">{g.bs}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-scoreboard{overflow:hidden;width:100%;max-width:280px;background:#101014;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:8px 0}
      .nuda-mq2-scoreboard__track{display:flex;width:max-content;gap:10px;padding:0 12px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;animation:_nuda-mq2scoreboard 15s linear infinite}
      .nuda-mq2-scoreboard__item{display:flex;align-items:center;gap:5px;white-space:nowrap;font-size:.62rem;color:#cfcfcf;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:6px;padding:4px 10px}
      .nuda-mq2-scoreboard__team{color:#fafafa;font-weight:700}
      .nuda-mq2-scoreboard__score{color:#e4ff54;font-weight:700}
      .nuda-mq2-scoreboard__sep{color:#555}
      .nuda-mq2-scoreboard:hover .nuda-mq2-scoreboard__track{animation-play-state:paused}
      @keyframes _nuda-mq2scoreboard{to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-scoreboard__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-scoreboard" aria-hidden="true">
  <div class="nuda-mq2-scoreboard__track">
    <div class="nuda-mq2-scoreboard__item">
      <span class="nuda-mq2-scoreboard__team">LAL</span>
      <span class="nuda-mq2-scoreboard__score">102</span>
      <span class="nuda-mq2-scoreboard__sep">&mdash;</span>
      <span class="nuda-mq2-scoreboard__team">BOS</span>
      <span class="nuda-mq2-scoreboard__score">98</span>
    </div>
    <div class="nuda-mq2-scoreboard__item">
      <span class="nuda-mq2-scoreboard__team">NYK</span>
      <span class="nuda-mq2-scoreboard__score">110</span>
      <span class="nuda-mq2-scoreboard__sep">&mdash;</span>
      <span class="nuda-mq2-scoreboard__team">MIA</span>
      <span class="nuda-mq2-scoreboard__score">105</span>
    </div>
    <div class="nuda-mq2-scoreboard__item">
      <span class="nuda-mq2-scoreboard__team">GSW</span>
      <span class="nuda-mq2-scoreboard__score">118</span>
      <span class="nuda-mq2-scoreboard__sep">&mdash;</span>
      <span class="nuda-mq2-scoreboard__team">PHX</span>
      <span class="nuda-mq2-scoreboard__score">112</span>
    </div>
    <!-- Duplicate the items above for a seamless loop -->
    <div class="nuda-mq2-scoreboard__item">
      <span class="nuda-mq2-scoreboard__team">LAL</span>
      <span class="nuda-mq2-scoreboard__score">102</span>
      <span class="nuda-mq2-scoreboard__sep">&mdash;</span>
      <span class="nuda-mq2-scoreboard__team">BOS</span>
      <span class="nuda-mq2-scoreboard__score">98</span>
    </div>
    <div class="nuda-mq2-scoreboard__item">
      <span class="nuda-mq2-scoreboard__team">NYK</span>
      <span class="nuda-mq2-scoreboard__score">110</span>
      <span class="nuda-mq2-scoreboard__sep">&mdash;</span>
      <span class="nuda-mq2-scoreboard__team">MIA</span>
      <span class="nuda-mq2-scoreboard__score">105</span>
    </div>
    <div class="nuda-mq2-scoreboard__item">
      <span class="nuda-mq2-scoreboard__team">GSW</span>
      <span class="nuda-mq2-scoreboard__score">118</span>
      <span class="nuda-mq2-scoreboard__sep">&mdash;</span>
      <span class="nuda-mq2-scoreboard__team">PHX</span>
      <span class="nuda-mq2-scoreboard__score">112</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── TESTIMONIAL QUOTE TICKER ─────────────── */
  {
    id: "mq2-quote-ticker",
    name: "Testimonial Quote Ticker",
    category: CAT,
    preview: (
      <div className="nuda-mq2-quote-ticker" aria-hidden="true">
        <div className="nuda-mq2-quote-ticker__track">
          {[
            { quote: "Cut our build time in half.", author: "— Mia, Frontend Lead" },
            { quote: "Copy-paste and it just works.", author: "— Dev, Indie Hacker" },
            { quote: "Finally, animation without the bloat.", author: "— Sam, Design Eng" },
            { quote: "Cut our build time in half.", author: "— Mia, Frontend Lead" },
            { quote: "Copy-paste and it just works.", author: "— Dev, Indie Hacker" },
            { quote: "Finally, animation without the bloat.", author: "— Sam, Design Eng" },
          ].map((q, i) => (
            <div className="nuda-mq2-quote-ticker__card" key={i}>
              <div className="nuda-mq2-quote-ticker__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="nuda-mq2-quote-ticker__quote">&ldquo;{q.quote}&rdquo;</p>
              <span className="nuda-mq2-quote-ticker__author">{q.author}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-quote-ticker{overflow:hidden;width:100%;max-width:280px}
      .nuda-mq2-quote-ticker__track{display:flex;width:max-content;gap:14px;animation:_nuda-mq2quoteticker 20s linear infinite}
      .nuda-mq2-quote-ticker__card{flex:none;width:200px;background:#161616;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:10px 12px}
      .nuda-mq2-quote-ticker__stars{color:#e4ff54;font-size:.6rem;letter-spacing:1px}
      .nuda-mq2-quote-ticker__quote{color:#cfcfcf;font-size:.62rem;line-height:1.4;margin:4px 0}
      .nuda-mq2-quote-ticker__author{color:#777;font-size:.56rem;font-weight:600}
      .nuda-mq2-quote-ticker:hover .nuda-mq2-quote-ticker__track{animation-play-state:paused}
      @keyframes _nuda-mq2quoteticker{to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-quote-ticker__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-quote-ticker" aria-hidden="true">
  <div class="nuda-mq2-quote-ticker__track">
    <div class="nuda-mq2-quote-ticker__card">
      <div class="nuda-mq2-quote-ticker__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="nuda-mq2-quote-ticker__quote">&ldquo;Cut our build time in half.&rdquo;</p>
      <span class="nuda-mq2-quote-ticker__author">&mdash; Mia, Frontend Lead</span>
    </div>
    <div class="nuda-mq2-quote-ticker__card">
      <div class="nuda-mq2-quote-ticker__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="nuda-mq2-quote-ticker__quote">&ldquo;Copy-paste and it just works.&rdquo;</p>
      <span class="nuda-mq2-quote-ticker__author">&mdash; Dev, Indie Hacker</span>
    </div>
    <div class="nuda-mq2-quote-ticker__card">
      <div class="nuda-mq2-quote-ticker__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="nuda-mq2-quote-ticker__quote">&ldquo;Finally, animation without the bloat.&rdquo;</p>
      <span class="nuda-mq2-quote-ticker__author">&mdash; Sam, Design Eng</span>
    </div>
    <!-- Duplicate the cards above for a seamless loop -->
    <div class="nuda-mq2-quote-ticker__card">
      <div class="nuda-mq2-quote-ticker__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="nuda-mq2-quote-ticker__quote">&ldquo;Cut our build time in half.&rdquo;</p>
      <span class="nuda-mq2-quote-ticker__author">&mdash; Mia, Frontend Lead</span>
    </div>
    <div class="nuda-mq2-quote-ticker__card">
      <div class="nuda-mq2-quote-ticker__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="nuda-mq2-quote-ticker__quote">&ldquo;Copy-paste and it just works.&rdquo;</p>
      <span class="nuda-mq2-quote-ticker__author">&mdash; Dev, Indie Hacker</span>
    </div>
    <div class="nuda-mq2-quote-ticker__card">
      <div class="nuda-mq2-quote-ticker__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="nuda-mq2-quote-ticker__quote">&ldquo;Finally, animation without the bloat.&rdquo;</p>
      <span class="nuda-mq2-quote-ticker__author">&mdash; Sam, Design Eng</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── AVATAR SOCIAL-PROOF MARQUEE ─────────────── */
  {
    id: "mq2-avatar-proof",
    name: "Avatar Social-Proof Marquee",
    category: CAT,
    preview: (
      <div className="nuda-mq2-avatar-proof">
        <div className="nuda-mq2-avatar-proof__label" aria-hidden="true">Trusted by teams worldwide</div>
        <div className="nuda-mq2-avatar-proof__row" aria-hidden="true">
          <div className="nuda-mq2-avatar-proof__track">
            {["JD", "MK", "AS", "RT", "LB", "JD", "MK", "AS", "RT", "LB"].map((n, i) => (
              <div className="nuda-mq2-avatar-proof__avatar" key={i}>{n}</div>
            ))}
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-avatar-proof{width:100%;max-width:280px}
      .nuda-mq2-avatar-proof__label{font-size:.56rem;color:#777;font-weight:600;letter-spacing:.03em;margin-bottom:6px;text-transform:uppercase}
      .nuda-mq2-avatar-proof__row{overflow:hidden}
      .nuda-mq2-avatar-proof__track{display:flex;width:max-content;animation:_nuda-mq2avatarproof 13s linear infinite}
      .nuda-mq2-avatar-proof__avatar{flex:none;width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.55rem;font-weight:800;color:#0a0a0a;border:2px solid #0a0a0a;margin-left:-8px}
      .nuda-mq2-avatar-proof__avatar:first-child{margin-left:0}
      .nuda-mq2-avatar-proof__avatar:nth-child(5n+1){background:#e4ff54}
      .nuda-mq2-avatar-proof__avatar:nth-child(5n+2){background:#7dd3fc}
      .nuda-mq2-avatar-proof__avatar:nth-child(5n+3){background:#fca5a5}
      .nuda-mq2-avatar-proof__avatar:nth-child(5n+4){background:#c4b5fd}
      .nuda-mq2-avatar-proof__avatar:nth-child(5n+5){background:#86efac}
      .nuda-mq2-avatar-proof:hover .nuda-mq2-avatar-proof__track{animation-play-state:paused}
      @keyframes _nuda-mq2avatarproof{to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-avatar-proof__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-avatar-proof">
  <div class="nuda-mq2-avatar-proof__label" aria-hidden="true">Trusted by teams worldwide</div>
  <div class="nuda-mq2-avatar-proof__row" aria-hidden="true">
    <div class="nuda-mq2-avatar-proof__track">
      <div class="nuda-mq2-avatar-proof__avatar">JD</div>
      <div class="nuda-mq2-avatar-proof__avatar">MK</div>
      <div class="nuda-mq2-avatar-proof__avatar">AS</div>
      <div class="nuda-mq2-avatar-proof__avatar">RT</div>
      <div class="nuda-mq2-avatar-proof__avatar">LB</div>
      <!-- Duplicate the avatars above for a seamless loop -->
      <div class="nuda-mq2-avatar-proof__avatar">JD</div>
      <div class="nuda-mq2-avatar-proof__avatar">MK</div>
      <div class="nuda-mq2-avatar-proof__avatar">AS</div>
      <div class="nuda-mq2-avatar-proof__avatar">RT</div>
      <div class="nuda-mq2-avatar-proof__avatar">LB</div>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── SKILL BADGE BELT ─────────────── */
  {
    id: "mq2-skill-belt",
    name: "Skill Badge Belt",
    category: CAT,
    preview: (
      <div className="nuda-mq2-skill-belt" aria-hidden="true">
        <div className="nuda-mq2-skill-belt__track">
          {["JavaScript", "TypeScript", "React", "CSS", "Node", "JavaScript", "TypeScript", "React", "CSS", "Node"].map((t, i) => (
            <div className="nuda-mq2-skill-belt__badge" key={i}>
              <span className="nuda-mq2-skill-belt__dot"></span>
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-skill-belt{position:relative;overflow:hidden;width:100%;max-width:280px;border-radius:8px;padding:10px 0;background-color:#101012;background-image:repeating-linear-gradient(-45deg,rgba(255,255,255,.05) 0 8px,transparent 8px 16px);background-size:200% 100%;animation:nuda-mq2-skill-belt-belt 3s linear infinite}
      .nuda-mq2-skill-belt__track{position:relative;display:flex;width:max-content;gap:10px;padding:0 12px;animation:nuda-mq2-skill-belt-track 16s linear infinite}
      .nuda-mq2-skill-belt__badge{flex:none;display:flex;align-items:center;gap:5px;background:#1a1a1a;border:1px solid rgba(255,255,255,.1);border-radius:20px;padding:4px 10px;font-size:.6rem;font-weight:600;color:#e5e5e5;white-space:nowrap}
      .nuda-mq2-skill-belt__dot{display:block;width:6px;height:6px;border-radius:50%;background:#e4ff54;flex:none}
      .nuda-mq2-skill-belt:hover .nuda-mq2-skill-belt__track{animation-play-state:paused}
      @keyframes nuda-mq2-skill-belt-belt{to{background-position:200% 0}}
      @keyframes nuda-mq2-skill-belt-track{to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-skill-belt{animation:none}.nuda-mq2-skill-belt__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-skill-belt" aria-hidden="true">
  <div class="nuda-mq2-skill-belt__track">
    <div class="nuda-mq2-skill-belt__badge"><span class="nuda-mq2-skill-belt__dot"></span>JavaScript</div>
    <div class="nuda-mq2-skill-belt__badge"><span class="nuda-mq2-skill-belt__dot"></span>TypeScript</div>
    <div class="nuda-mq2-skill-belt__badge"><span class="nuda-mq2-skill-belt__dot"></span>React</div>
    <div class="nuda-mq2-skill-belt__badge"><span class="nuda-mq2-skill-belt__dot"></span>CSS</div>
    <div class="nuda-mq2-skill-belt__badge"><span class="nuda-mq2-skill-belt__dot"></span>Node</div>
    <!-- Duplicate the badges above for a seamless loop -->
    <div class="nuda-mq2-skill-belt__badge"><span class="nuda-mq2-skill-belt__dot"></span>JavaScript</div>
    <div class="nuda-mq2-skill-belt__badge"><span class="nuda-mq2-skill-belt__dot"></span>TypeScript</div>
    <div class="nuda-mq2-skill-belt__badge"><span class="nuda-mq2-skill-belt__dot"></span>React</div>
    <div class="nuda-mq2-skill-belt__badge"><span class="nuda-mq2-skill-belt__dot"></span>CSS</div>
    <div class="nuda-mq2-skill-belt__badge"><span class="nuda-mq2-skill-belt__dot"></span>Node</div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── HARD EDGE-FADE MARQUEE ─────────────── */
  {
    id: "mq2-hard-edge",
    name: "Hard Edge-Fade Marquee",
    category: CAT,
    preview: (
      <div className="nuda-mq2-hard-edge" aria-hidden="true">
        <div className="nuda-mq2-hard-edge__track">
          {["FAST", "LIGHT", "FLEXIBLE", "OPEN", "FAST", "LIGHT", "FLEXIBLE", "OPEN"].map((t, i) => (
            <div className="nuda-mq2-hard-edge__item" key={i}>{t}</div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-hard-edge{position:relative;overflow:hidden;width:100%;max-width:280px;background:#0d0d0f;border-radius:6px;padding:10px 0;mask-image:linear-gradient(90deg,transparent 0,transparent 4%,#000 6%,#000 94%,transparent 96%,transparent 100%);-webkit-mask-image:linear-gradient(90deg,transparent 0,transparent 4%,#000 6%,#000 94%,transparent 96%,transparent 100%)}
      .nuda-mq2-hard-edge::before,.nuda-mq2-hard-edge::after{content:"";position:absolute;top:0;bottom:0;width:1px;background:rgba(228,255,84,.5);z-index:1}
      .nuda-mq2-hard-edge::before{left:6%}
      .nuda-mq2-hard-edge::after{right:6%}
      .nuda-mq2-hard-edge__track{display:flex;width:max-content;gap:16px;padding:0 14px;animation:_nuda-mq2hardedge 14s linear infinite}
      .nuda-mq2-hard-edge__item{flex:none;font-size:.65rem;font-weight:700;color:#fafafa;white-space:nowrap;background:rgba(255,255,255,.05);border-radius:6px;padding:5px 10px}
      .nuda-mq2-hard-edge:hover .nuda-mq2-hard-edge__track{animation-play-state:paused}
      @keyframes _nuda-mq2hardedge{to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-hard-edge__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-hard-edge" aria-hidden="true">
  <div class="nuda-mq2-hard-edge__track">
    <div class="nuda-mq2-hard-edge__item">FAST</div>
    <div class="nuda-mq2-hard-edge__item">LIGHT</div>
    <div class="nuda-mq2-hard-edge__item">FLEXIBLE</div>
    <div class="nuda-mq2-hard-edge__item">OPEN</div>
    <!-- Duplicate the items above for a seamless loop -->
    <div class="nuda-mq2-hard-edge__item">FAST</div>
    <div class="nuda-mq2-hard-edge__item">LIGHT</div>
    <div class="nuda-mq2-hard-edge__item">FLEXIBLE</div>
    <div class="nuda-mq2-hard-edge__item">OPEN</div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── DUAL-SPEED LAYERED MARQUEE ─────────────── */
  {
    id: "mq2-dual-speed",
    name: "Dual-Speed Layered Marquee",
    category: CAT,
    preview: (
      <div className="nuda-mq2-dual-speed" aria-hidden="true">
        <div className="nuda-mq2-dual-speed__track nuda-mq2-dual-speed__track--back">
          <span>SPEED&nbsp;</span>
          <span>SPEED&nbsp;</span>
        </div>
        <div className="nuda-mq2-dual-speed__track nuda-mq2-dual-speed__track--front">
          <span>Layered &middot; Parallax &middot; Depth &middot;&nbsp;</span>
          <span>Layered &middot; Parallax &middot; Depth &middot;&nbsp;</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-dual-speed{position:relative;overflow:hidden;width:100%;max-width:280px;height:70px;background:#0a0a0c;border-radius:8px}
      .nuda-mq2-dual-speed__track{position:absolute;left:0;display:flex;width:max-content;white-space:nowrap;font-weight:800}
      .nuda-mq2-dual-speed__track--back{top:8px;font-size:1.6rem;color:rgba(255,255,255,.06);animation:nuda-mq2-dual-speed-back 22s linear infinite}
      .nuda-mq2-dual-speed__track--front{top:34px;font-size:.85rem;color:#e4ff54;letter-spacing:.03em;animation:nuda-mq2-dual-speed-front 9s linear infinite}
      .nuda-mq2-dual-speed:hover .nuda-mq2-dual-speed__track{animation-play-state:paused}
      @keyframes nuda-mq2-dual-speed-back{to{transform:translateX(-50%)}}
      @keyframes nuda-mq2-dual-speed-front{to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-dual-speed__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-dual-speed" aria-hidden="true">
  <div class="nuda-mq2-dual-speed__track nuda-mq2-dual-speed__track--back">
    <span>SPEED&nbsp;</span>
    <span>SPEED&nbsp;</span>
  </div>
  <div class="nuda-mq2-dual-speed__track nuda-mq2-dual-speed__track--front">
    <span>Layered &middot; Parallax &middot; Depth &middot;&nbsp;</span>
    <span>Layered &middot; Parallax &middot; Depth &middot;&nbsp;</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── VERTICAL PAIR TICKER ─────────────── */
  {
    id: "mq2-vertical-pair",
    name: "Vertical Pair Ticker",
    category: CAT,
    preview: (
      <div className="nuda-mq2-vertical-pair" aria-hidden="true">
        <div className="nuda-mq2-vertical-pair__col">
          <div className="nuda-mq2-vertical-pair__track nuda-mq2-vertical-pair__track--up">
            {["Alpha", "Beta", "Gamma", "Alpha", "Beta", "Gamma"].map((t, i) => (
              <div className="nuda-mq2-vertical-pair__item" key={i}>{t}</div>
            ))}
          </div>
        </div>
        <div className="nuda-mq2-vertical-pair__col">
          <div className="nuda-mq2-vertical-pair__track nuda-mq2-vertical-pair__track--down">
            {["One", "Two", "Three", "One", "Two", "Three"].map((t, i) => (
              <div className="nuda-mq2-vertical-pair__item" key={i}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-vertical-pair{display:flex;gap:8px;width:100%;max-width:280px;height:90px}
      .nuda-mq2-vertical-pair__col{flex:1;overflow:hidden;background:#111113;border:1px solid rgba(255,255,255,.08);border-radius:8px}
      .nuda-mq2-vertical-pair__track{display:flex;flex-direction:column}
      .nuda-mq2-vertical-pair__track--up{animation:nuda-mq2-vertical-pair-up 9s linear infinite}
      .nuda-mq2-vertical-pair__track--down{animation:nuda-mq2-vertical-pair-down 9s linear infinite}
      .nuda-mq2-vertical-pair__item{height:30px;display:flex;align-items:center;justify-content:center;font-size:.6rem;color:#cfcfcf;white-space:nowrap}
      .nuda-mq2-vertical-pair:hover .nuda-mq2-vertical-pair__track{animation-play-state:paused}
      @keyframes nuda-mq2-vertical-pair-up{to{transform:translateY(-50%)}}
      @keyframes nuda-mq2-vertical-pair-down{from{transform:translateY(-50%)}to{transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-vertical-pair__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-vertical-pair" aria-hidden="true">
  <div class="nuda-mq2-vertical-pair__col">
    <div class="nuda-mq2-vertical-pair__track nuda-mq2-vertical-pair__track--up">
      <div class="nuda-mq2-vertical-pair__item">Alpha</div>
      <div class="nuda-mq2-vertical-pair__item">Beta</div>
      <div class="nuda-mq2-vertical-pair__item">Gamma</div>
      <!-- Duplicate for a seamless loop -->
      <div class="nuda-mq2-vertical-pair__item">Alpha</div>
      <div class="nuda-mq2-vertical-pair__item">Beta</div>
      <div class="nuda-mq2-vertical-pair__item">Gamma</div>
    </div>
  </div>
  <div class="nuda-mq2-vertical-pair__col">
    <div class="nuda-mq2-vertical-pair__track nuda-mq2-vertical-pair__track--down">
      <div class="nuda-mq2-vertical-pair__item">One</div>
      <div class="nuda-mq2-vertical-pair__item">Two</div>
      <div class="nuda-mq2-vertical-pair__item">Three</div>
      <!-- Duplicate for a seamless loop -->
      <div class="nuda-mq2-vertical-pair__item">One</div>
      <div class="nuda-mq2-vertical-pair__item">Two</div>
      <div class="nuda-mq2-vertical-pair__item">Three</div>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── NOW PLAYING TICKER ─────────────── */
  {
    id: "mq2-now-playing",
    name: "Now Playing Ticker",
    category: CAT,
    preview: (
      <div className="nuda-mq2-now-playing" aria-hidden="true">
        <div className="nuda-mq2-now-playing__eq">
          <span className="nuda-mq2-now-playing__bar"></span>
          <span className="nuda-mq2-now-playing__bar"></span>
          <span className="nuda-mq2-now-playing__bar"></span>
          <span className="nuda-mq2-now-playing__bar"></span>
        </div>
        <div className="nuda-mq2-now-playing__info">
          <div className="nuda-mq2-now-playing__track">
            <span className="nuda-mq2-now-playing__text">Now Playing &mdash; Midnight Drive &middot; Neon Rebels</span>
            <span className="nuda-mq2-now-playing__text">Now Playing &mdash; Midnight Drive &middot; Neon Rebels</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-now-playing{display:flex;align-items:center;gap:8px;width:100%;max-width:280px;background:#141416;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:8px 10px;overflow:hidden}
      .nuda-mq2-now-playing__eq{display:flex;align-items:flex-end;gap:2px;height:16px;flex:none}
      .nuda-mq2-now-playing__bar{display:block;width:3px;height:16px;background:#e4ff54;transform-origin:bottom;animation:nuda-mq2-now-playing-bar 1s ease-in-out infinite}
      .nuda-mq2-now-playing__bar:nth-child(1){animation-delay:0s}
      .nuda-mq2-now-playing__bar:nth-child(2){animation-delay:.2s}
      .nuda-mq2-now-playing__bar:nth-child(3){animation-delay:.4s}
      .nuda-mq2-now-playing__bar:nth-child(4){animation-delay:.1s}
      .nuda-mq2-now-playing__info{overflow:hidden;flex:1}
      .nuda-mq2-now-playing__track{display:flex;width:max-content;animation:nuda-mq2-now-playing-scroll 10s linear infinite}
      .nuda-mq2-now-playing__text{font-size:.62rem;color:#e5e5e5;white-space:nowrap;padding-right:20px}
      @keyframes nuda-mq2-now-playing-bar{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
      @keyframes nuda-mq2-now-playing-scroll{to{transform:translateX(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-now-playing__bar{animation:none;transform:scaleY(.6)}.nuda-mq2-now-playing__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-now-playing" aria-hidden="true">
  <div class="nuda-mq2-now-playing__eq">
    <span class="nuda-mq2-now-playing__bar"></span>
    <span class="nuda-mq2-now-playing__bar"></span>
    <span class="nuda-mq2-now-playing__bar"></span>
    <span class="nuda-mq2-now-playing__bar"></span>
  </div>
  <div class="nuda-mq2-now-playing__info">
    <div class="nuda-mq2-now-playing__track">
      <span class="nuda-mq2-now-playing__text">Now Playing &mdash; Midnight Drive &middot; Neon Rebels</span>
      <span class="nuda-mq2-now-playing__text">Now Playing &mdash; Midnight Drive &middot; Neon Rebels</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── STEP-SCROLLING CHANGELOG TICKER ─────────────── */
  {
    id: "mq2-step-ticker",
    name: "Step-Scrolling Changelog Ticker",
    category: CAT,
    preview: (
      <div className="nuda-mq2-step-ticker" aria-live="polite">
        <div className="nuda-mq2-step-ticker__track">
          {[
            { v: "v2.4", text: "Dark mode enabled" },
            { v: "v2.3", text: "Faster global search" },
            { v: "v2.2", text: "Squashed memory leak" },
            { v: "v2.1", text: "Public API v2 released" },
            { v: "v2.4", text: "Dark mode enabled" },
            { v: "v2.3", text: "Faster global search" },
            { v: "v2.2", text: "Squashed memory leak" },
            { v: "v2.1", text: "Public API v2 released" },
          ].map((c, i) => (
            <div className="nuda-mq2-step-ticker__item" key={i}>
              <span className="nuda-mq2-step-ticker__version">{c.v}</span>
              {c.text}
            </div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-mq2-step-ticker{overflow:hidden;height:28px;width:100%;max-width:280px;background:#111113;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:0 10px}
      .nuda-mq2-step-ticker__track{display:flex;flex-direction:column;animation:_nuda-mq2stepticker 8s steps(1) infinite}
      .nuda-mq2-step-ticker__item{height:28px;display:flex;align-items:center;font-size:.62rem;color:#cfcfcf;white-space:nowrap}
      .nuda-mq2-step-ticker__version{color:#e4ff54;font-weight:800;margin-right:6px}
      @keyframes _nuda-mq2stepticker{0%,20%{transform:translateY(0)}25%,45%{transform:translateY(-12.5%)}50%,70%{transform:translateY(-25%)}75%,95%{transform:translateY(-37.5%)}100%{transform:translateY(-50%)}}
      @media(prefers-reduced-motion:reduce){.nuda-mq2-step-ticker__track{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-mq2-step-ticker" aria-live="polite">
  <div class="nuda-mq2-step-ticker__track">
    <div class="nuda-mq2-step-ticker__item"><span class="nuda-mq2-step-ticker__version">v2.4</span>Dark mode enabled</div>
    <div class="nuda-mq2-step-ticker__item"><span class="nuda-mq2-step-ticker__version">v2.3</span>Faster global search</div>
    <div class="nuda-mq2-step-ticker__item"><span class="nuda-mq2-step-ticker__version">v2.2</span>Squashed memory leak</div>
    <div class="nuda-mq2-step-ticker__item"><span class="nuda-mq2-step-ticker__version">v2.1</span>Public API v2 released</div>
    <!-- Duplicate the items above for a seamless loop -->
    <div class="nuda-mq2-step-ticker__item"><span class="nuda-mq2-step-ticker__version">v2.4</span>Dark mode enabled</div>
    <div class="nuda-mq2-step-ticker__item"><span class="nuda-mq2-step-ticker__version">v2.3</span>Faster global search</div>
    <div class="nuda-mq2-step-ticker__item"><span class="nuda-mq2-step-ticker__version">v2.2</span>Squashed memory leak</div>
    <div class="nuda-mq2-step-ticker__item"><span class="nuda-mq2-step-ticker__version">v2.1</span>Public API v2 released</div>
  </div>
</div>`,
      },
    ],
  },
];
