import type { NudaComponent } from "./types";

const CAT = "Timelines";

export const timelines: NudaComponent[] = [
  /* ─────────────── 1. Vertical Timeline ─────────────── */
  {
    id: "timeline-vertical",
    name: "Vertical Timeline",
    category: CAT,
    preview: (
      <div className="nuda-tl-vertical">
        <div className="nuda-tl-vertical__item nuda-tl-vertical__item--done">
          <div className="nuda-tl-vertical__dot" />
          <div className="nuda-tl-vertical__body">
            <span className="nuda-tl-vertical__date">Jan 2023</span>
            <p className="nuda-tl-vertical__title">Project kickoff</p>
          </div>
        </div>
        <div className="nuda-tl-vertical__item nuda-tl-vertical__item--done">
          <div className="nuda-tl-vertical__dot" />
          <div className="nuda-tl-vertical__body">
            <span className="nuda-tl-vertical__date">Mar 2023</span>
            <p className="nuda-tl-vertical__title">Beta released</p>
          </div>
        </div>
        <div className="nuda-tl-vertical__item nuda-tl-vertical__item--active">
          <div className="nuda-tl-vertical__dot" />
          <div className="nuda-tl-vertical__body">
            <span className="nuda-tl-vertical__date">Now</span>
            <p className="nuda-tl-vertical__title">Public launch</p>
          </div>
        </div>
        <div className="nuda-tl-vertical__item">
          <div className="nuda-tl-vertical__dot" />
          <div className="nuda-tl-vertical__body">
            <span className="nuda-tl-vertical__date">Q4 2024</span>
            <p className="nuda-tl-vertical__title">v2.0 roadmap</p>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tl-vertical{display:flex;flex-direction:column;gap:0;padding:8px 0;width:220px}
      .nuda-tl-vertical__item{display:flex;align-items:flex-start;gap:12px;position:relative;padding-bottom:20px}
      .nuda-tl-vertical__item:last-child{padding-bottom:0}
      .nuda-tl-vertical__item::before{content:'';position:absolute;left:7px;top:16px;bottom:0;width:2px;background:rgba(255,255,255,.08)}
      .nuda-tl-vertical__item:last-child::before{display:none}
      .nuda-tl-vertical__dot{width:16px;height:16px;border-radius:50%;background:#1a1a1a;border:2px solid rgba(255,255,255,.15);flex-shrink:0;margin-top:1px;transition:border-color .2s}
      .nuda-tl-vertical__item--done .nuda-tl-vertical__dot{background:#e4ff54;border-color:#e4ff54}
      .nuda-tl-vertical__item--done::before{background:rgba(228,255,84,.25)}
      .nuda-tl-vertical__item--active .nuda-tl-vertical__dot{background:#1a1a1a;border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.2);animation:_nuda-tlpulse 2s ease-in-out infinite}
      .nuda-tl-vertical__body{display:flex;flex-direction:column;gap:2px}
      .nuda-tl-vertical__date{font-size:10px;color:#777;letter-spacing:.04em}
      .nuda-tl-vertical__title{margin:0;font-size:12px;color:#cfcfcf;font-weight:500}
      .nuda-tl-vertical__item--active .nuda-tl-vertical__title{color:#e4ff54}
      @keyframes _nuda-tlpulse{0%,100%{box-shadow:0 0 0 3px rgba(228,255,84,.2)}50%{box-shadow:0 0 0 6px rgba(228,255,84,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-tl-vertical__item--active .nuda-tl-vertical__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-vertical">
  <div class="nuda-tl-vertical__item nuda-tl-vertical__item--done">
    <div class="nuda-tl-vertical__dot"></div>
    <div class="nuda-tl-vertical__body">
      <span class="nuda-tl-vertical__date">Jan 2023</span>
      <p class="nuda-tl-vertical__title">Project kickoff</p>
    </div>
  </div>
  <div class="nuda-tl-vertical__item nuda-tl-vertical__item--done">
    <div class="nuda-tl-vertical__dot"></div>
    <div class="nuda-tl-vertical__body">
      <span class="nuda-tl-vertical__date">Mar 2023</span>
      <p class="nuda-tl-vertical__title">Beta released</p>
    </div>
  </div>
  <div class="nuda-tl-vertical__item nuda-tl-vertical__item--active">
    <div class="nuda-tl-vertical__dot"></div>
    <div class="nuda-tl-vertical__body">
      <span class="nuda-tl-vertical__date">Now</span>
      <p class="nuda-tl-vertical__title">Public launch</p>
    </div>
  </div>
  <div class="nuda-tl-vertical__item">
    <div class="nuda-tl-vertical__dot"></div>
    <div class="nuda-tl-vertical__body">
      <span class="nuda-tl-vertical__date">Q4 2024</span>
      <p class="nuda-tl-vertical__title">v2.0 roadmap</p>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Horizontal Timeline ─────────────── */
  {
    id: "timeline-horizontal",
    name: "Horizontal Timeline",
    category: CAT,
    preview: (
      <div className="nuda-tl-horiz">
        <div className="nuda-tl-horiz__track" />
        <div className="nuda-tl-horiz__items">
          {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
            <div key={q} className={`nuda-tl-horiz__item${i < 2 ? " nuda-tl-horiz__item--done" : i === 2 ? " nuda-tl-horiz__item--active" : ""}`}>
              <div className="nuda-tl-horiz__dot" />
              <span className="nuda-tl-horiz__label">{q}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tl-horiz{position:relative;width:240px;padding:16px 0 8px}
      .nuda-tl-horiz__track{position:absolute;top:27px;left:12px;right:12px;height:2px;background:rgba(255,255,255,.08);border-radius:2px}
      .nuda-tl-horiz__items{display:flex;justify-content:space-between;position:relative}
      .nuda-tl-horiz__item{display:flex;flex-direction:column;align-items:center;gap:6px}
      .nuda-tl-horiz__dot{width:14px;height:14px;border-radius:50%;background:#1a1a1a;border:2px solid rgba(255,255,255,.15);transition:transform .2s}
      .nuda-tl-horiz__item--done .nuda-tl-horiz__dot{background:#e4ff54;border-color:#e4ff54}
      .nuda-tl-horiz__item--active .nuda-tl-horiz__dot{background:#1a1a1a;border-color:#e4ff54;box-shadow:0 0 0 3px rgba(228,255,84,.2);animation:_nuda-tlhpulse 2s ease-in-out infinite}
      .nuda-tl-horiz__label{font-size:10px;color:#777;font-weight:500}
      .nuda-tl-horiz__item--done .nuda-tl-horiz__label{color:#cfcfcf}
      .nuda-tl-horiz__item--active .nuda-tl-horiz__label{color:#e4ff54}
      @keyframes _nuda-tlhpulse{0%,100%{box-shadow:0 0 0 3px rgba(228,255,84,.2)}50%{box-shadow:0 0 0 7px rgba(228,255,84,0)}}
      @media(prefers-reduced-motion:reduce){.nuda-tl-horiz__item--active .nuda-tl-horiz__dot{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-horiz">
  <div class="nuda-tl-horiz__track"></div>
  <div class="nuda-tl-horiz__items">
    <div class="nuda-tl-horiz__item nuda-tl-horiz__item--done">
      <div class="nuda-tl-horiz__dot"></div>
      <span class="nuda-tl-horiz__label">Q1</span>
    </div>
    <div class="nuda-tl-horiz__item nuda-tl-horiz__item--done">
      <div class="nuda-tl-horiz__dot"></div>
      <span class="nuda-tl-horiz__label">Q2</span>
    </div>
    <div class="nuda-tl-horiz__item nuda-tl-horiz__item--active">
      <div class="nuda-tl-horiz__dot"></div>
      <span class="nuda-tl-horiz__label">Q3</span>
    </div>
    <div class="nuda-tl-horiz__item">
      <div class="nuda-tl-horiz__dot"></div>
      <span class="nuda-tl-horiz__label">Q4</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Alternating Sides ─────────────── */
  {
    id: "timeline-alternating",
    name: "Alternating Sides",
    category: CAT,
    preview: (
      <div className="nuda-tl-alt">
        <div className="nuda-tl-alt__spine" />
        {[
          { label: "2021", text: "Founded", side: "left" },
          { label: "2022", text: "Series A", side: "right" },
          { label: "2023", text: "1M users", side: "left" },
          { label: "2024", text: "IPO", side: "right" },
        ].map((e) => (
          <div key={e.label} className={`nuda-tl-alt__row nuda-tl-alt__row--${e.side}`}>
            {e.side === "left" && <div className="nuda-tl-alt__card">{e.text}<span>{e.label}</span></div>}
            <div className="nuda-tl-alt__dot" />
            {e.side === "right" && <div className="nuda-tl-alt__card">{e.text}<span>{e.label}</span></div>}
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-tl-alt{position:relative;width:240px;display:flex;flex-direction:column;gap:10px;padding:8px 0}
      .nuda-tl-alt__spine{position:absolute;left:50%;transform:translateX(-50%);top:0;bottom:0;width:2px;background:rgba(255,255,255,.08)}
      .nuda-tl-alt__row{display:flex;align-items:center;position:relative}
      .nuda-tl-alt__row--left{flex-direction:row;justify-content:flex-end;padding-right:calc(50% + 12px)}
      .nuda-tl-alt__row--right{flex-direction:row;justify-content:flex-start;padding-left:calc(50% + 12px)}
      .nuda-tl-alt__dot{position:absolute;left:50%;transform:translateX(-50%);width:10px;height:10px;border-radius:50%;background:#e4ff54;flex-shrink:0}
      .nuda-tl-alt__card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:5px 9px;font-size:11px;color:#cfcfcf;font-weight:500;white-space:nowrap;display:flex;flex-direction:column;gap:1px}
      .nuda-tl-alt__card span{font-size:9px;color:#777;font-weight:400}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-alt">
  <div class="nuda-tl-alt__spine"></div>
  <div class="nuda-tl-alt__row nuda-tl-alt__row--left">
    <div class="nuda-tl-alt__card">Founded<span>2021</span></div>
    <div class="nuda-tl-alt__dot"></div>
  </div>
  <div class="nuda-tl-alt__row nuda-tl-alt__row--right">
    <div class="nuda-tl-alt__dot"></div>
    <div class="nuda-tl-alt__card">Series A<span>2022</span></div>
  </div>
  <div class="nuda-tl-alt__row nuda-tl-alt__row--left">
    <div class="nuda-tl-alt__card">1M users<span>2023</span></div>
    <div class="nuda-tl-alt__dot"></div>
  </div>
  <div class="nuda-tl-alt__row nuda-tl-alt__row--right">
    <div class="nuda-tl-alt__dot"></div>
    <div class="nuda-tl-alt__card">IPO<span>2024</span></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Activity Feed ─────────────── */
  {
    id: "timeline-activity-feed",
    name: "Activity Feed",
    category: CAT,
    preview: (
      <div className="nuda-tl-feed">
        {[
          { icon: "💬", color: "#6366f1", user: "Alex", action: "commented on PR #42", time: "2m ago" },
          { icon: "✅", color: "#22c55e", user: "Sam", action: "merged branch main", time: "15m ago" },
          { icon: "🚀", color: "#e4ff54", user: "Bot", action: "deployed to staging", time: "1h ago" },
          { icon: "🐛", color: "#ff6b6b", user: "Jordan", action: "opened issue #99", time: "3h ago" },
        ].map((e, i) => (
          <div key={i} className="nuda-tl-feed__item">
            <div className="nuda-tl-feed__avatar" style={{ background: `${e.color}22`, border: `1px solid ${e.color}55` }}>{e.icon}</div>
            <div className="nuda-tl-feed__body">
              <p className="nuda-tl-feed__text"><strong>{e.user}</strong> {e.action}</p>
              <span className="nuda-tl-feed__time">{e.time}</span>
            </div>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-tl-feed{display:flex;flex-direction:column;gap:0;width:240px;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden}
      .nuda-tl-feed__item{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,.05);transition:background .15s}
      .nuda-tl-feed__item:last-child{border-bottom:none}
      .nuda-tl-feed__avatar{width:30px;height:30px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:14px;flex-shrink:0}
      .nuda-tl-feed__body{display:flex;flex-direction:column;gap:2px;min-width:0}
      .nuda-tl-feed__text{margin:0;font-size:11px;color:#cfcfcf;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-tl-feed__text strong{color:#fafafa;font-weight:600}
      .nuda-tl-feed__time{font-size:9px;color:#555}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-feed">
  <div class="nuda-tl-feed__item">
    <div class="nuda-tl-feed__avatar" style="background:#6366f122;border:1px solid #6366f155">💬</div>
    <div class="nuda-tl-feed__body">
      <p class="nuda-tl-feed__text"><strong>Alex</strong> commented on PR #42</p>
      <span class="nuda-tl-feed__time">2m ago</span>
    </div>
  </div>
  <div class="nuda-tl-feed__item">
    <div class="nuda-tl-feed__avatar" style="background:#22c55e22;border:1px solid #22c55e55">✅</div>
    <div class="nuda-tl-feed__body">
      <p class="nuda-tl-feed__text"><strong>Sam</strong> merged branch main</p>
      <span class="nuda-tl-feed__time">15m ago</span>
    </div>
  </div>
  <div class="nuda-tl-feed__item">
    <div class="nuda-tl-feed__avatar" style="background:#e4ff5422;border:1px solid #e4ff5455">🚀</div>
    <div class="nuda-tl-feed__body">
      <p class="nuda-tl-feed__text"><strong>Bot</strong> deployed to staging</p>
      <span class="nuda-tl-feed__time">1h ago</span>
    </div>
  </div>
  <div class="nuda-tl-feed__item">
    <div class="nuda-tl-feed__avatar" style="background:#ff6b6b22;border:1px solid #ff6b6b55">🐛</div>
    <div class="nuda-tl-feed__body">
      <p class="nuda-tl-feed__text"><strong>Jordan</strong> opened issue #99</p>
      <span class="nuda-tl-feed__time">3h ago</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Gradient Line ─────────────── */
  {
    id: "timeline-gradient-line",
    name: "Gradient Line",
    category: CAT,
    preview: (
      <div className="nuda-tl-grad">
        <div className="nuda-tl-grad__rail">
          <div className="nuda-tl-grad__fill" />
        </div>
        {["Design", "Build", "Ship", "Scale"].map((s, i) => (
          <div key={s} className={`nuda-tl-grad__step${i < 3 ? " nuda-tl-grad__step--done" : ""}`} style={{ left: `${(i / 3) * 100}%` }}>
            <div className="nuda-tl-grad__node" />
            <span className="nuda-tl-grad__lbl">{s}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-tl-grad{position:relative;width:230px;height:56px;margin:4px auto}
      .nuda-tl-grad__rail{position:absolute;top:10px;left:0;right:0;height:4px;border-radius:2px;background:rgba(255,255,255,.07);overflow:hidden}
      .nuda-tl-grad__fill{height:100%;width:75%;background:linear-gradient(90deg,#6366f1,#a855f7,#e4ff54);border-radius:2px}
      .nuda-tl-grad__step{position:absolute;top:0;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:6px}
      .nuda-tl-grad__node{width:12px;height:12px;border-radius:50%;background:#1a1a1a;border:2px solid rgba(255,255,255,.15)}
      .nuda-tl-grad__step--done .nuda-tl-grad__node{border-color:#a855f7;background:linear-gradient(135deg,#6366f1,#a855f7)}
      .nuda-tl-grad__lbl{font-size:9px;color:#777;white-space:nowrap}
      .nuda-tl-grad__step--done .nuda-tl-grad__lbl{color:#cfcfcf}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-grad">
  <div class="nuda-tl-grad__rail">
    <div class="nuda-tl-grad__fill"></div>
  </div>
  <div class="nuda-tl-grad__step nuda-tl-grad__step--done" style="left:0%">
    <div class="nuda-tl-grad__node"></div>
    <span class="nuda-tl-grad__lbl">Design</span>
  </div>
  <div class="nuda-tl-grad__step nuda-tl-grad__step--done" style="left:33.3%">
    <div class="nuda-tl-grad__node"></div>
    <span class="nuda-tl-grad__lbl">Build</span>
  </div>
  <div class="nuda-tl-grad__step nuda-tl-grad__step--done" style="left:66.6%">
    <div class="nuda-tl-grad__node"></div>
    <span class="nuda-tl-grad__lbl">Ship</span>
  </div>
  <div class="nuda-tl-grad__step" style="left:100%">
    <div class="nuda-tl-grad__node"></div>
    <span class="nuda-tl-grad__lbl">Scale</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Icon Nodes ─────────────── */
  {
    id: "timeline-icon-nodes",
    name: "Icon Nodes",
    category: CAT,
    preview: (
      <div className="nuda-tl-icons">
        {[
          { icon: "✏️", label: "Draft", sub: "Jan 1", done: true },
          { icon: "🔍", label: "Review", sub: "Jan 8", done: true },
          { icon: "✅", label: "Approve", sub: "Jan 12", active: true },
          { icon: "📦", label: "Release", sub: "TBD" },
        ].map((e, i) => (
          <div key={i} className={`nuda-tl-icons__item${e.done ? " nuda-tl-icons__item--done" : e.active ? " nuda-tl-icons__item--active" : ""}`}>
            <div className="nuda-tl-icons__node">{e.icon}</div>
            <div className="nuda-tl-icons__body">
              <strong className="nuda-tl-icons__name">{e.label}</strong>
              <span className="nuda-tl-icons__sub">{e.sub}</span>
            </div>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-tl-icons{display:flex;flex-direction:column;gap:0;width:210px}
      .nuda-tl-icons__item{display:flex;align-items:center;gap:10px;position:relative;padding-bottom:16px}
      .nuda-tl-icons__item:last-child{padding-bottom:0}
      .nuda-tl-icons__item::before{content:'';position:absolute;left:16px;top:36px;bottom:0;width:2px;background:rgba(255,255,255,.06)}
      .nuda-tl-icons__item:last-child::before{display:none}
      .nuda-tl-icons__item--done::before{background:rgba(228,255,84,.2)}
      .nuda-tl-icons__node{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);flex-shrink:0;transition:border-color .2s}
      .nuda-tl-icons__item--done .nuda-tl-icons__node{background:rgba(228,255,84,.1);border-color:rgba(228,255,84,.3)}
      .nuda-tl-icons__item--active .nuda-tl-icons__node{background:rgba(228,255,84,.15);border-color:#e4ff54;animation:_nuda-tliconpop .3s ease-out}
      .nuda-tl-icons__body{display:flex;flex-direction:column;gap:1px}
      .nuda-tl-icons__name{font-size:12px;color:#cfcfcf;font-weight:600}
      .nuda-tl-icons__item--active .nuda-tl-icons__name{color:#e4ff54}
      .nuda-tl-icons__sub{font-size:10px;color:#555}
      @keyframes _nuda-tliconpop{from{transform:scale(.85);opacity:0}to{transform:scale(1);opacity:1}}
      @media(prefers-reduced-motion:reduce){.nuda-tl-icons__item--active .nuda-tl-icons__node{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-icons">
  <div class="nuda-tl-icons__item nuda-tl-icons__item--done">
    <div class="nuda-tl-icons__node">✏️</div>
    <div class="nuda-tl-icons__body">
      <strong class="nuda-tl-icons__name">Draft</strong>
      <span class="nuda-tl-icons__sub">Jan 1</span>
    </div>
  </div>
  <div class="nuda-tl-icons__item nuda-tl-icons__item--done">
    <div class="nuda-tl-icons__node">🔍</div>
    <div class="nuda-tl-icons__body">
      <strong class="nuda-tl-icons__name">Review</strong>
      <span class="nuda-tl-icons__sub">Jan 8</span>
    </div>
  </div>
  <div class="nuda-tl-icons__item nuda-tl-icons__item--active">
    <div class="nuda-tl-icons__node">✅</div>
    <div class="nuda-tl-icons__body">
      <strong class="nuda-tl-icons__name">Approve</strong>
      <span class="nuda-tl-icons__sub">Jan 12</span>
    </div>
  </div>
  <div class="nuda-tl-icons__item">
    <div class="nuda-tl-icons__node">📦</div>
    <div class="nuda-tl-icons__body">
      <strong class="nuda-tl-icons__name">Release</strong>
      <span class="nuda-tl-icons__sub">TBD</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Animated Draw-In Line ─────────────── */
  {
    id: "timeline-draw-in",
    name: "Animated Draw-In",
    category: CAT,
    preview: (
      <div className="nuda-tl-draw">
        <div className="nuda-tl-draw__line" />
        {["Start", "Mid", "End"].map((s, i) => (
          <div key={s} className="nuda-tl-draw__node" style={{ animationDelay: `${i * 0.2}s` }}>
            <div className="nuda-tl-draw__circle">{i + 1}</div>
            <span className="nuda-tl-draw__lbl">{s}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-tl-draw{position:relative;display:flex;justify-content:space-between;align-items:flex-start;width:220px;padding-top:4px}
      .nuda-tl-draw__line{position:absolute;top:15px;left:20px;width:0;height:2px;background:linear-gradient(90deg,#e4ff54,#6366f1);animation:_nuda-tldrawline 1.2s ease-out forwards .1s}
      .nuda-tl-draw__node{display:flex;flex-direction:column;align-items:center;gap:6px;opacity:0;animation:_nuda-tldrawnode .4s ease-out forwards}
      .nuda-tl-draw__circle{width:30px;height:30px;border-radius:50%;background:#1a1a1a;border:2px solid #e4ff54;color:#e4ff54;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center}
      .nuda-tl-draw__lbl{font-size:10px;color:#777}
      @keyframes _nuda-tldrawline{from{width:0}to{width:calc(100% - 40px)}}
      @keyframes _nuda-tldrawnode{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-tl-draw__line{animation:none;width:calc(100% - 40px)}.nuda-tl-draw__node{animation:none;opacity:1}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-draw">
  <div class="nuda-tl-draw__line"></div>
  <div class="nuda-tl-draw__node" style="animation-delay:0s">
    <div class="nuda-tl-draw__circle">1</div>
    <span class="nuda-tl-draw__lbl">Start</span>
  </div>
  <div class="nuda-tl-draw__node" style="animation-delay:0.2s">
    <div class="nuda-tl-draw__circle">2</div>
    <span class="nuda-tl-draw__lbl">Mid</span>
  </div>
  <div class="nuda-tl-draw__node" style="animation-delay:0.4s">
    <div class="nuda-tl-draw__circle">3</div>
    <span class="nuda-tl-draw__lbl">End</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Roadmap Timeline ─────────────── */
  {
    id: "timeline-roadmap",
    name: "Roadmap",
    category: CAT,
    preview: (
      <div className="nuda-tl-roadmap">
        {[
          { phase: "v1.0", desc: "Core features", status: "shipped", color: "#22c55e" },
          { phase: "v1.5", desc: "Mobile support", status: "in progress", color: "#e4ff54" },
          { phase: "v2.0", desc: "API & integrations", status: "planned", color: "#6366f1" },
          { phase: "v3.0", desc: "AI features", status: "idea", color: "#777" },
        ].map((r, i) => (
          <div key={i} className="nuda-tl-roadmap__row">
            <div className="nuda-tl-roadmap__dot" style={{ background: r.color, boxShadow: `0 0 0 3px ${r.color}22` }} />
            <div className="nuda-tl-roadmap__content">
              <span className="nuda-tl-roadmap__phase">{r.phase}</span>
              <span className="nuda-tl-roadmap__desc">{r.desc}</span>
            </div>
            <span className="nuda-tl-roadmap__status" style={{ color: r.color, background: `${r.color}18`, borderColor: `${r.color}33` }}>{r.status}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-tl-roadmap{display:flex;flex-direction:column;gap:0;width:240px;background:#141414;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden}
      .nuda-tl-roadmap__row{display:flex;align-items:center;gap:10px;padding:9px 12px;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-tl-roadmap__row:last-child{border-bottom:none}
      .nuda-tl-roadmap__dot{width:10px;height:10px;border-radius:50%;flex-shrink:0}
      .nuda-tl-roadmap__content{display:flex;flex-direction:column;gap:1px;flex:1;min-width:0}
      .nuda-tl-roadmap__phase{font-size:11px;color:#fafafa;font-weight:700;font-family:monospace}
      .nuda-tl-roadmap__desc{font-size:10px;color:#777;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-tl-roadmap__status{font-size:9px;padding:2px 7px;border-radius:999px;border:1px solid;white-space:nowrap;flex-shrink:0;font-weight:500}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-roadmap">
  <div class="nuda-tl-roadmap__row">
    <div class="nuda-tl-roadmap__dot" style="background:#22c55e;box-shadow:0 0 0 3px #22c55e22"></div>
    <div class="nuda-tl-roadmap__content">
      <span class="nuda-tl-roadmap__phase">v1.0</span>
      <span class="nuda-tl-roadmap__desc">Core features</span>
    </div>
    <span class="nuda-tl-roadmap__status" style="color:#22c55e;background:#22c55e18;border-color:#22c55e33">shipped</span>
  </div>
  <div class="nuda-tl-roadmap__row">
    <div class="nuda-tl-roadmap__dot" style="background:#e4ff54;box-shadow:0 0 0 3px #e4ff5422"></div>
    <div class="nuda-tl-roadmap__content">
      <span class="nuda-tl-roadmap__phase">v1.5</span>
      <span class="nuda-tl-roadmap__desc">Mobile support</span>
    </div>
    <span class="nuda-tl-roadmap__status" style="color:#e4ff54;background:#e4ff5418;border-color:#e4ff5433">in progress</span>
  </div>
  <div class="nuda-tl-roadmap__row">
    <div class="nuda-tl-roadmap__dot" style="background:#6366f1;box-shadow:0 0 0 3px #6366f122"></div>
    <div class="nuda-tl-roadmap__content">
      <span class="nuda-tl-roadmap__phase">v2.0</span>
      <span class="nuda-tl-roadmap__desc">API &amp; integrations</span>
    </div>
    <span class="nuda-tl-roadmap__status" style="color:#6366f1;background:#6366f118;border-color:#6366f133">planned</span>
  </div>
  <div class="nuda-tl-roadmap__row">
    <div class="nuda-tl-roadmap__dot" style="background:#777;box-shadow:0 0 0 3px #77777722"></div>
    <div class="nuda-tl-roadmap__content">
      <span class="nuda-tl-roadmap__phase">v3.0</span>
      <span class="nuda-tl-roadmap__desc">AI features</span>
    </div>
    <span class="nuda-tl-roadmap__status" style="color:#777;background:#77777718;border-color:#77777733">idea</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 9. Git Commit Style ─────────────── */
  {
    id: "timeline-git-commit",
    name: "Git Commit Style",
    category: CAT,
    preview: (
      <div className="nuda-tl-git">
        {[
          { hash: "a3f2d9", msg: "feat: add dark mode", branch: "main", time: "now" },
          { hash: "b81c4e", msg: "fix: navbar overflow", branch: "main", time: "2h" },
          { hash: "c09a12", msg: "chore: update deps", branch: "main", time: "1d" },
          { hash: "d77f3b", msg: "refactor: split utils", branch: "dev", time: "2d" },
        ].map((c, i) => (
          <div key={i} className="nuda-tl-git__commit">
            <div className="nuda-tl-git__line" />
            <div className="nuda-tl-git__circle" />
            <code className="nuda-tl-git__hash">{c.hash}</code>
            <span className="nuda-tl-git__msg">{c.msg}</span>
            <span className="nuda-tl-git__time">{c.time}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-tl-git{display:flex;flex-direction:column;gap:0;width:240px;font-family:monospace}
      .nuda-tl-git__commit{display:flex;align-items:center;gap:8px;position:relative;padding:7px 0}
      .nuda-tl-git__line{position:absolute;left:7px;top:0;bottom:0;width:2px;background:rgba(255,255,255,.07)}
      .nuda-tl-git__commit:first-child .nuda-tl-git__line{top:50%}
      .nuda-tl-git__commit:last-child .nuda-tl-git__line{bottom:50%}
      .nuda-tl-git__circle{width:16px;height:16px;border-radius:50%;background:#1a1a1a;border:2px solid #6366f1;flex-shrink:0;position:relative;z-index:1}
      .nuda-tl-git__commit:first-child .nuda-tl-git__circle{border-color:#e4ff54;background:rgba(228,255,84,.1)}
      .nuda-tl-git__hash{font-size:9px;color:#6366f1;background:rgba(99,102,241,.12);padding:1px 5px;border-radius:4px;flex-shrink:0}
      .nuda-tl-git__commit:first-child .nuda-tl-git__hash{color:#e4ff54;background:rgba(228,255,84,.12)}
      .nuda-tl-git__msg{font-size:10px;color:#cfcfcf;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-tl-git__time{font-size:9px;color:#555;flex-shrink:0}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-git">
  <div class="nuda-tl-git__commit">
    <div class="nuda-tl-git__line"></div>
    <div class="nuda-tl-git__circle"></div>
    <code class="nuda-tl-git__hash">a3f2d9</code>
    <span class="nuda-tl-git__msg">feat: add dark mode</span>
    <span class="nuda-tl-git__time">now</span>
  </div>
  <div class="nuda-tl-git__commit">
    <div class="nuda-tl-git__line"></div>
    <div class="nuda-tl-git__circle"></div>
    <code class="nuda-tl-git__hash">b81c4e</code>
    <span class="nuda-tl-git__msg">fix: navbar overflow</span>
    <span class="nuda-tl-git__time">2h</span>
  </div>
  <div class="nuda-tl-git__commit">
    <div class="nuda-tl-git__line"></div>
    <div class="nuda-tl-git__circle"></div>
    <code class="nuda-tl-git__hash">c09a12</code>
    <span class="nuda-tl-git__msg">chore: update deps</span>
    <span class="nuda-tl-git__time">1d</span>
  </div>
  <div class="nuda-tl-git__commit">
    <div class="nuda-tl-git__line"></div>
    <div class="nuda-tl-git__circle"></div>
    <code class="nuda-tl-git__hash">d77f3b</code>
    <span class="nuda-tl-git__msg">refactor: split utils</span>
    <span class="nuda-tl-git__time">2d</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 10. Numbered Milestones ─────────────── */
  {
    id: "timeline-numbered-milestones",
    name: "Numbered Milestones",
    category: CAT,
    preview: (
      <div className="nuda-tl-mile">
        {[
          { n: 1, title: "Ideation", desc: "Research & scope", done: true },
          { n: 2, title: "Prototype", desc: "Wireframes & flows", done: true },
          { n: 3, title: "Launch", desc: "Ship to production", active: true },
          { n: 4, title: "Iterate", desc: "Feedback & polish" },
        ].map((m) => (
          <div key={m.n} className={`nuda-tl-mile__item${m.done ? " nuda-tl-mile__item--done" : m.active ? " nuda-tl-mile__item--active" : ""}`}>
            <div className="nuda-tl-mile__num">{m.n}</div>
            <div className="nuda-tl-mile__text">
              <strong className="nuda-tl-mile__title">{m.title}</strong>
              <span className="nuda-tl-mile__desc">{m.desc}</span>
            </div>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-tl-mile{display:flex;flex-direction:column;gap:0;width:220px}
      .nuda-tl-mile__item{display:flex;align-items:center;gap:12px;position:relative;padding-bottom:18px}
      .nuda-tl-mile__item:last-child{padding-bottom:0}
      .nuda-tl-mile__item::before{content:'';position:absolute;left:15px;top:32px;bottom:0;width:2px;background:rgba(255,255,255,.06)}
      .nuda-tl-mile__item:last-child::before{display:none}
      .nuda-tl-mile__item--done::before{background:rgba(228,255,84,.3)}
      .nuda-tl-mile__num{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;background:rgba(255,255,255,.04);border:2px solid rgba(255,255,255,.1);color:#555;flex-shrink:0;transition:all .2s}
      .nuda-tl-mile__item--done .nuda-tl-mile__num{background:#e4ff54;border-color:#e4ff54;color:#0a0a0a}
      .nuda-tl-mile__item--active .nuda-tl-mile__num{background:rgba(228,255,84,.1);border-color:#e4ff54;color:#e4ff54}
      .nuda-tl-mile__text{display:flex;flex-direction:column;gap:1px}
      .nuda-tl-mile__title{font-size:12px;color:#cfcfcf;font-weight:600}
      .nuda-tl-mile__item--active .nuda-tl-mile__title{color:#fafafa}
      .nuda-tl-mile__desc{font-size:10px;color:#555}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-mile">
  <div class="nuda-tl-mile__item nuda-tl-mile__item--done">
    <div class="nuda-tl-mile__num">1</div>
    <div class="nuda-tl-mile__text">
      <strong class="nuda-tl-mile__title">Ideation</strong>
      <span class="nuda-tl-mile__desc">Research &amp; scope</span>
    </div>
  </div>
  <div class="nuda-tl-mile__item nuda-tl-mile__item--done">
    <div class="nuda-tl-mile__num">2</div>
    <div class="nuda-tl-mile__text">
      <strong class="nuda-tl-mile__title">Prototype</strong>
      <span class="nuda-tl-mile__desc">Wireframes &amp; flows</span>
    </div>
  </div>
  <div class="nuda-tl-mile__item nuda-tl-mile__item--active">
    <div class="nuda-tl-mile__num">3</div>
    <div class="nuda-tl-mile__text">
      <strong class="nuda-tl-mile__title">Launch</strong>
      <span class="nuda-tl-mile__desc">Ship to production</span>
    </div>
  </div>
  <div class="nuda-tl-mile__item">
    <div class="nuda-tl-mile__num">4</div>
    <div class="nuda-tl-mile__text">
      <strong class="nuda-tl-mile__title">Iterate</strong>
      <span class="nuda-tl-mile__desc">Feedback &amp; polish</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 11. Compact Log ─────────────── */
  {
    id: "timeline-compact-log",
    name: "Compact Log",
    category: CAT,
    preview: (
      <div className="nuda-tl-log">
        {[
          { time: "09:01", msg: "Server started", lvl: "info" },
          { time: "09:03", msg: "DB connected", lvl: "info" },
          { time: "09:07", msg: "Cache miss ratio 12%", lvl: "warn" },
          { time: "09:12", msg: "Request timeout /api/data", lvl: "error" },
          { time: "09:15", msg: "Retry succeeded", lvl: "info" },
        ].map((e, i) => (
          <div key={i} className={`nuda-tl-log__row nuda-tl-log__row--${e.lvl}`}>
            <span className="nuda-tl-log__time">{e.time}</span>
            <span className="nuda-tl-log__bar" />
            <span className="nuda-tl-log__msg">{e.msg}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-tl-log{display:flex;flex-direction:column;gap:2px;width:236px;background:#0e0e0e;border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:8px;font-family:monospace}
      .nuda-tl-log__row{display:flex;align-items:center;gap:8px;padding:3px 6px;border-radius:4px;transition:background .1s}
      .nuda-tl-log__row--warn{background:rgba(250,189,47,.05)}
      .nuda-tl-log__row--error{background:rgba(255,107,107,.07)}
      .nuda-tl-log__time{font-size:9px;color:#555;flex-shrink:0;min-width:30px}
      .nuda-tl-log__bar{width:3px;height:14px;border-radius:2px;flex-shrink:0;background:rgba(255,255,255,.1)}
      .nuda-tl-log__row--info .nuda-tl-log__bar{background:#6366f1}
      .nuda-tl-log__row--warn .nuda-tl-log__bar{background:#fabd2f}
      .nuda-tl-log__row--error .nuda-tl-log__bar{background:#ff6b6b}
      .nuda-tl-log__msg{font-size:10px;color:#cfcfcf;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-tl-log__row--warn .nuda-tl-log__msg{color:#fabd2f}
      .nuda-tl-log__row--error .nuda-tl-log__msg{color:#ff6b6b}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-log">
  <div class="nuda-tl-log__row nuda-tl-log__row--info">
    <span class="nuda-tl-log__time">09:01</span>
    <span class="nuda-tl-log__bar"></span>
    <span class="nuda-tl-log__msg">Server started</span>
  </div>
  <div class="nuda-tl-log__row nuda-tl-log__row--info">
    <span class="nuda-tl-log__time">09:03</span>
    <span class="nuda-tl-log__bar"></span>
    <span class="nuda-tl-log__msg">DB connected</span>
  </div>
  <div class="nuda-tl-log__row nuda-tl-log__row--warn">
    <span class="nuda-tl-log__time">09:07</span>
    <span class="nuda-tl-log__bar"></span>
    <span class="nuda-tl-log__msg">Cache miss ratio 12%</span>
  </div>
  <div class="nuda-tl-log__row nuda-tl-log__row--error">
    <span class="nuda-tl-log__time">09:12</span>
    <span class="nuda-tl-log__bar"></span>
    <span class="nuda-tl-log__msg">Request timeout /api/data</span>
  </div>
  <div class="nuda-tl-log__row nuda-tl-log__row--info">
    <span class="nuda-tl-log__time">09:15</span>
    <span class="nuda-tl-log__bar"></span>
    <span class="nuda-tl-log__msg">Retry succeeded</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 12. Now Marker ─────────────── */
  {
    id: "timeline-now-marker",
    name: "Now Marker",
    category: CAT,
    preview: (
      <div className="nuda-tl-now">
        <div className="nuda-tl-now__item nuda-tl-now__item--past">
          <div className="nuda-tl-now__dot" />
          <div className="nuda-tl-now__body">
            <span className="nuda-tl-now__label">Onboarding</span>
            <span className="nuda-tl-now__meta">Apr 1</span>
          </div>
        </div>
        <div className="nuda-tl-now__item nuda-tl-now__item--past">
          <div className="nuda-tl-now__dot" />
          <div className="nuda-tl-now__body">
            <span className="nuda-tl-now__label">First sprint</span>
            <span className="nuda-tl-now__meta">Apr 14</span>
          </div>
        </div>
        <div className="nuda-tl-now__now-line">
          <span className="nuda-tl-now__now-badge">NOW</span>
        </div>
        <div className="nuda-tl-now__item">
          <div className="nuda-tl-now__dot" />
          <div className="nuda-tl-now__body">
            <span className="nuda-tl-now__label">Review cycle</span>
            <span className="nuda-tl-now__meta">May 2</span>
          </div>
        </div>
        <div className="nuda-tl-now__item">
          <div className="nuda-tl-now__dot" />
          <div className="nuda-tl-now__body">
            <span className="nuda-tl-now__label">Release</span>
            <span className="nuda-tl-now__meta">May 20</span>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tl-now{display:flex;flex-direction:column;gap:0;width:210px;padding:4px 0}
      .nuda-tl-now__item{display:flex;align-items:center;gap:10px;position:relative;padding:6px 0}
      .nuda-tl-now__item::before{content:'';position:absolute;left:6px;top:0;bottom:0;width:2px;background:rgba(255,255,255,.07)}
      .nuda-tl-now__dot{width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.12);background:#1a1a1a;flex-shrink:0;position:relative;z-index:1}
      .nuda-tl-now__item--past .nuda-tl-now__dot{background:rgba(255,255,255,.15);border-color:rgba(255,255,255,.2)}
      .nuda-tl-now__item--past::before{background:rgba(255,255,255,.15)}
      .nuda-tl-now__body{display:flex;flex-direction:column;gap:1px}
      .nuda-tl-now__label{font-size:11px;color:#777}
      .nuda-tl-now__item--past .nuda-tl-now__label{color:#555;text-decoration:line-through;text-decoration-color:#444}
      .nuda-tl-now__meta{font-size:9px;color:#444}
      .nuda-tl-now__now-line{display:flex;align-items:center;gap:8px;padding:4px 0;position:relative}
      .nuda-tl-now__now-line::before{content:'';position:absolute;left:0;right:0;top:50%;height:1px;background:rgba(228,255,84,.4)}
      .nuda-tl-now__now-badge{position:relative;z-index:1;font-size:9px;font-weight:700;color:#e4ff54;background:#1a1a1a;padding:1px 8px;border:1px solid rgba(228,255,84,.4);border-radius:999px;letter-spacing:.08em;animation:_nuda-tlnowblink 2s ease-in-out infinite}
      @keyframes _nuda-tlnowblink{0%,100%{opacity:1}50%{opacity:.5}}
      @media(prefers-reduced-motion:reduce){.nuda-tl-now__now-badge{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-now">
  <div class="nuda-tl-now__item nuda-tl-now__item--past">
    <div class="nuda-tl-now__dot"></div>
    <div class="nuda-tl-now__body">
      <span class="nuda-tl-now__label">Onboarding</span>
      <span class="nuda-tl-now__meta">Apr 1</span>
    </div>
  </div>
  <div class="nuda-tl-now__item nuda-tl-now__item--past">
    <div class="nuda-tl-now__dot"></div>
    <div class="nuda-tl-now__body">
      <span class="nuda-tl-now__label">First sprint</span>
      <span class="nuda-tl-now__meta">Apr 14</span>
    </div>
  </div>
  <div class="nuda-tl-now__now-line">
    <span class="nuda-tl-now__now-badge">NOW</span>
  </div>
  <div class="nuda-tl-now__item">
    <div class="nuda-tl-now__dot"></div>
    <div class="nuda-tl-now__body">
      <span class="nuda-tl-now__label">Review cycle</span>
      <span class="nuda-tl-now__meta">May 2</span>
    </div>
  </div>
  <div class="nuda-tl-now__item">
    <div class="nuda-tl-now__dot"></div>
    <div class="nuda-tl-now__body">
      <span class="nuda-tl-now__label">Release</span>
      <span class="nuda-tl-now__meta">May 20</span>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 13. Year Separators ─────────────── */
  {
    id: "timeline-year-separators",
    name: "Year Separators",
    category: CAT,
    preview: (
      <div className="nuda-tl-year">
        <div className="nuda-tl-year__sep">
          <span className="nuda-tl-year__label">2022</span>
        </div>
        <div className="nuda-tl-year__item">
          <div className="nuda-tl-year__dot" />
          <span className="nuda-tl-year__text">Launched MVP</span>
        </div>
        <div className="nuda-tl-year__item">
          <div className="nuda-tl-year__dot" />
          <span className="nuda-tl-year__text">First 1k users</span>
        </div>
        <div className="nuda-tl-year__sep">
          <span className="nuda-tl-year__label">2023</span>
        </div>
        <div className="nuda-tl-year__item">
          <div className="nuda-tl-year__dot" />
          <span className="nuda-tl-year__text">Series A closed</span>
        </div>
        <div className="nuda-tl-year__item">
          <div className="nuda-tl-year__dot" />
          <span className="nuda-tl-year__text">Team grew to 20</span>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tl-year{display:flex;flex-direction:column;gap:0;width:210px;padding:4px 0}
      .nuda-tl-year__sep{display:flex;align-items:center;gap:8px;padding:10px 0 6px}
      .nuda-tl-year__sep::after{content:'';flex:1;height:1px;background:rgba(255,255,255,.08)}
      .nuda-tl-year__label{font-size:11px;font-weight:700;color:#e4ff54;letter-spacing:.08em;flex-shrink:0;background:#141414;padding-right:6px}
      .nuda-tl-year__item{display:flex;align-items:center;gap:10px;padding:5px 0 5px 4px;position:relative}
      .nuda-tl-year__item::before{content:'';position:absolute;left:9px;top:0;bottom:0;width:1px;background:rgba(255,255,255,.06)}
      .nuda-tl-year__dot{width:10px;height:10px;border-radius:50%;background:#1a1a1a;border:2px solid rgba(255,255,255,.18);flex-shrink:0;position:relative;z-index:1}
      .nuda-tl-year__text{font-size:11px;color:#cfcfcf}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-year">
  <div class="nuda-tl-year__sep">
    <span class="nuda-tl-year__label">2022</span>
  </div>
  <div class="nuda-tl-year__item">
    <div class="nuda-tl-year__dot"></div>
    <span class="nuda-tl-year__text">Launched MVP</span>
  </div>
  <div class="nuda-tl-year__item">
    <div class="nuda-tl-year__dot"></div>
    <span class="nuda-tl-year__text">First 1k users</span>
  </div>
  <div class="nuda-tl-year__sep">
    <span class="nuda-tl-year__label">2023</span>
  </div>
  <div class="nuda-tl-year__item">
    <div class="nuda-tl-year__dot"></div>
    <span class="nuda-tl-year__text">Series A closed</span>
  </div>
  <div class="nuda-tl-year__item">
    <div class="nuda-tl-year__dot"></div>
    <span class="nuda-tl-year__text">Team grew to 20</span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 14. Striped Rows ─────────────── */
  {
    id: "timeline-striped-rows",
    name: "Striped Rows",
    category: CAT,
    preview: (
      <div className="nuda-tl-stripe">
        {[
          { date: "Mon", event: "Kickoff meeting", tag: "planning", color: "#6366f1" },
          { date: "Tue", event: "Design handoff", tag: "design", color: "#a855f7" },
          { date: "Wed", event: "Dev sprint start", tag: "dev", color: "#e4ff54" },
          { date: "Thu", event: "QA & testing", tag: "qa", color: "#22c55e" },
          { date: "Fri", event: "Ship it! 🚀", tag: "release", color: "#ff6b6b" },
        ].map((r, i) => (
          <div key={i} className={`nuda-tl-stripe__row${i % 2 === 0 ? " nuda-tl-stripe__row--alt" : ""}`}>
            <span className="nuda-tl-stripe__date">{r.date}</span>
            <div className="nuda-tl-stripe__bar" style={{ background: r.color }} />
            <span className="nuda-tl-stripe__event">{r.event}</span>
            <span className="nuda-tl-stripe__tag" style={{ color: r.color, background: `${r.color}18`, borderColor: `${r.color}33` }}>{r.tag}</span>
          </div>
        ))}
      </div>
    ),
    cssInline: `
      .nuda-tl-stripe{display:flex;flex-direction:column;gap:0;width:242px;border:1px solid rgba(255,255,255,.08);border-radius:10px;overflow:hidden}
      .nuda-tl-stripe__row{display:flex;align-items:center;gap:8px;padding:8px 10px;background:transparent;transition:background .1s}
      .nuda-tl-stripe__row--alt{background:rgba(255,255,255,.025)}
      .nuda-tl-stripe__date{font-size:10px;color:#555;font-weight:600;min-width:28px;flex-shrink:0}
      .nuda-tl-stripe__bar{width:3px;height:18px;border-radius:2px;flex-shrink:0}
      .nuda-tl-stripe__event{font-size:11px;color:#cfcfcf;flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
      .nuda-tl-stripe__tag{font-size:9px;padding:2px 6px;border-radius:999px;border:1px solid;flex-shrink:0;font-weight:500}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tl-stripe">
  <div class="nuda-tl-stripe__row">
    <span class="nuda-tl-stripe__date">Mon</span>
    <div class="nuda-tl-stripe__bar" style="background:#6366f1"></div>
    <span class="nuda-tl-stripe__event">Kickoff meeting</span>
    <span class="nuda-tl-stripe__tag" style="color:#6366f1;background:#6366f118;border-color:#6366f133">planning</span>
  </div>
  <div class="nuda-tl-stripe__row nuda-tl-stripe__row--alt">
    <span class="nuda-tl-stripe__date">Tue</span>
    <div class="nuda-tl-stripe__bar" style="background:#a855f7"></div>
    <span class="nuda-tl-stripe__event">Design handoff</span>
    <span class="nuda-tl-stripe__tag" style="color:#a855f7;background:#a855f718;border-color:#a855f733">design</span>
  </div>
  <div class="nuda-tl-stripe__row">
    <span class="nuda-tl-stripe__date">Wed</span>
    <div class="nuda-tl-stripe__bar" style="background:#e4ff54"></div>
    <span class="nuda-tl-stripe__event">Dev sprint start</span>
    <span class="nuda-tl-stripe__tag" style="color:#e4ff54;background:#e4ff5418;border-color:#e4ff5433">dev</span>
  </div>
  <div class="nuda-tl-stripe__row nuda-tl-stripe__row--alt">
    <span class="nuda-tl-stripe__date">Thu</span>
    <div class="nuda-tl-stripe__bar" style="background:#22c55e"></div>
    <span class="nuda-tl-stripe__event">QA &amp; testing</span>
    <span class="nuda-tl-stripe__tag" style="color:#22c55e;background:#22c55e18;border-color:#22c55e33">qa</span>
  </div>
  <div class="nuda-tl-stripe__row">
    <span class="nuda-tl-stripe__date">Fri</span>
    <div class="nuda-tl-stripe__bar" style="background:#ff6b6b"></div>
    <span class="nuda-tl-stripe__event">Ship it! 🚀</span>
    <span class="nuda-tl-stripe__tag" style="color:#ff6b6b;background:#ff6b6b18;border-color:#ff6b6b33">release</span>
  </div>
</div>`,
      },
    ],
  },
];
