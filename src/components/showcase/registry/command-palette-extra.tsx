import type { NudaComponent } from "./types";

const CAT = "Command Palette";

export const commandPaletteExtra: NudaComponent[] = [
  /* ─────────────── 1. Breadcrumb Drill-Down ─────────────── */
  {
    id: "cp2-breadcrumb",
    name: "Breadcrumb Drill-Down",
    category: CAT,
    preview: (
      <div className="nuda-cp2-breadcrumb" role="dialog" aria-label="Command palette">
        <div className="nuda-cp2-breadcrumb__trail">
          <span className="nuda-cp2-breadcrumb__chip">Home</span>
          <svg className="nuda-cp2-breadcrumb__sep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6 L15 12 L9 18" />
          </svg>
          <span className="nuda-cp2-breadcrumb__chip nuda-cp2-breadcrumb__chip--active">Settings</span>
        </div>
        <ul className="nuda-cp2-breadcrumb__list" role="listbox" aria-label="Settings commands">
          <li className="nuda-cp2-breadcrumb__opt nuda-cp2-breadcrumb__opt--active" role="option" aria-selected="true">Change theme</li>
          <li className="nuda-cp2-breadcrumb__opt" role="option" aria-selected="false">Manage account</li>
          <li className="nuda-cp2-breadcrumb__opt" role="option" aria-selected="false">Notifications</li>
        </ul>
      </div>
    ),
    cssInline: `
      .nuda-cp2-breadcrumb{width:290px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;animation:nuda-cp2-breadcrumb-in .3s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 40px -8px rgba(0,0,0,.6)}
      .nuda-cp2-breadcrumb__trail{display:flex;align-items:center;gap:6px;padding:8px 10px;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-cp2-breadcrumb__chip{font:600 10px ui-sans-serif,system-ui;color:#777;padding:3px 7px;border-radius:5px;background:rgba(255,255,255,.04)}
      .nuda-cp2-breadcrumb__chip--active{color:#0a0a0a;background:#e4ff54;animation:nuda-cp2-breadcrumb-pop .35s cubic-bezier(.34,1.56,.64,1)}
      .nuda-cp2-breadcrumb__sep{width:11px;height:11px;color:#555;flex-shrink:0}
      .nuda-cp2-breadcrumb__list{list-style:none;margin:0;padding:6px;display:flex;flex-direction:column;gap:1px}
      .nuda-cp2-breadcrumb__opt{padding:7px 10px;font:500 12px ui-sans-serif,system-ui;color:#cfcfcf;border-radius:6px;cursor:pointer;transition:background .15s,color .15s}
      .nuda-cp2-breadcrumb__opt:hover{background:rgba(255,255,255,.05);color:#fafafa}
      .nuda-cp2-breadcrumb__opt--active{background:rgba(228,255,84,.1);color:#e4ff54}
      @keyframes nuda-cp2-breadcrumb-in{from{opacity:0;transform:translateY(-8px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes nuda-cp2-breadcrumb-pop{0%{transform:scale(.7);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}
      @media (prefers-reduced-motion:reduce){
        .nuda-cp2-breadcrumb,.nuda-cp2-breadcrumb__chip--active{animation:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Breadcrumb Drill-Down — sub-command navigation with a trail of chips -->
<div class="nuda-cp2-breadcrumb" role="dialog" aria-label="Command palette">
  <div class="nuda-cp2-breadcrumb__trail">
    <span class="nuda-cp2-breadcrumb__chip">Home</span>
    <svg class="nuda-cp2-breadcrumb__sep" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 6 L15 12 L9 18" />
    </svg>
    <span class="nuda-cp2-breadcrumb__chip nuda-cp2-breadcrumb__chip--active">Settings</span>
  </div>
  <ul class="nuda-cp2-breadcrumb__list" role="listbox" aria-label="Settings commands">
    <li class="nuda-cp2-breadcrumb__opt nuda-cp2-breadcrumb__opt--active" role="option" aria-selected="true">Change theme</li>
    <li class="nuda-cp2-breadcrumb__opt" role="option" aria-selected="false">Manage account</li>
    <li class="nuda-cp2-breadcrumb__opt" role="option" aria-selected="false">Notifications</li>
  </ul>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Mode-Prefix Palette ─────────────── */
  {
    id: "cp2-mode-prefix",
    name: "Mode-Prefix Palette",
    category: CAT,
    preview: (
      <div className="nuda-cp2-mode-prefix" role="dialog" aria-label="Command palette">
        <div className="nuda-cp2-mode-prefix__modes" role="tablist" aria-label="Search mode">
          <button className="nuda-cp2-mode-prefix__mode nuda-cp2-mode-prefix__mode--active" type="button" role="tab" aria-selected="true">&gt; cmd</button>
          <button className="nuda-cp2-mode-prefix__mode" type="button" role="tab" aria-selected="false">@ mention</button>
          <button className="nuda-cp2-mode-prefix__mode" type="button" role="tab" aria-selected="false"># tag</button>
          <button className="nuda-cp2-mode-prefix__mode" type="button" role="tab" aria-selected="false">/ filter</button>
          <span className="nuda-cp2-mode-prefix__indicator" aria-hidden="true" />
        </div>
        <div className="nuda-cp2-mode-prefix__input">
          <span className="nuda-cp2-mode-prefix__prefix" aria-hidden="true">&gt;</span>
          <span className="nuda-cp2-mode-prefix__query">deploy to prod</span>
          <span className="nuda-cp2-mode-prefix__caret" aria-hidden="true" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cp2-mode-prefix{width:300px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;animation:nuda-cp2-mode-prefix-in .3s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 40px -8px rgba(0,0,0,.6)}
      .nuda-cp2-mode-prefix__modes{position:relative;display:flex;gap:2px;padding:6px 8px 0}
      .nuda-cp2-mode-prefix__mode{appearance:none;background:none;border:none;padding:6px 8px 10px;font:600 11px ui-sans-serif,system-ui;color:#777;cursor:pointer;transition:color .2s}
      .nuda-cp2-mode-prefix__mode:hover{color:#cfcfcf}
      .nuda-cp2-mode-prefix__mode--active{color:#e4ff54}
      .nuda-cp2-mode-prefix__mode:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      .nuda-cp2-mode-prefix__indicator{position:absolute;left:8px;bottom:0;width:40px;height:2px;background:#e4ff54;border-radius:2px;transform-origin:left;transform:translateX(0) scaleX(1);animation:nuda-cp2-mode-prefix-glow 2.2s ease-in-out infinite}
      .nuda-cp2-mode-prefix__input{display:flex;align-items:center;gap:6px;padding:10px 12px;border-top:1px solid rgba(255,255,255,.08);margin-top:6px}
      .nuda-cp2-mode-prefix__prefix{font:700 13px ui-monospace,monospace;color:#e4ff54}
      .nuda-cp2-mode-prefix__query{flex:1;font:500 12px ui-sans-serif,system-ui;color:#fafafa}
      .nuda-cp2-mode-prefix__caret{display:inline-block;width:1.5px;height:13px;background:#e4ff54;animation:nuda-cp2-mode-prefix-caret 1s steps(2) infinite}
      @keyframes nuda-cp2-mode-prefix-in{from{opacity:0;transform:translateY(-8px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes nuda-cp2-mode-prefix-glow{0%,100%{box-shadow:0 0 0 rgba(228,255,84,0)}50%{box-shadow:0 0 8px rgba(228,255,84,.7)}}
      @keyframes nuda-cp2-mode-prefix-caret{50%{opacity:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-cp2-mode-prefix,.nuda-cp2-mode-prefix__indicator,.nuda-cp2-mode-prefix__caret{animation:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Mode-Prefix Palette — > command, @ mention, # tag, / filter -->
<div class="nuda-cp2-mode-prefix" role="dialog" aria-label="Command palette">
  <div class="nuda-cp2-mode-prefix__modes" role="tablist" aria-label="Search mode">
    <button class="nuda-cp2-mode-prefix__mode nuda-cp2-mode-prefix__mode--active" type="button" role="tab" aria-selected="true">&gt; cmd</button>
    <button class="nuda-cp2-mode-prefix__mode" type="button" role="tab" aria-selected="false">@ mention</button>
    <button class="nuda-cp2-mode-prefix__mode" type="button" role="tab" aria-selected="false"># tag</button>
    <button class="nuda-cp2-mode-prefix__mode" type="button" role="tab" aria-selected="false">/ filter</button>
    <span class="nuda-cp2-mode-prefix__indicator" aria-hidden="true"></span>
  </div>
  <div class="nuda-cp2-mode-prefix__input">
    <span class="nuda-cp2-mode-prefix__prefix" aria-hidden="true">&gt;</span>
    <input class="nuda-cp2-mode-prefix__query" value="deploy to prod" aria-label="Command input" />
    <span class="nuda-cp2-mode-prefix__caret" aria-hidden="true"></span>
  </div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Mode-Prefix Palette — slide the indicator under the clicked mode tab. */

(function () {
  var tabs = document.querySelectorAll('.nuda-cp2-mode-prefix__mode');
  var indicator = document.querySelector('.nuda-cp2-mode-prefix__indicator');
  if (!tabs.length || !indicator) return;

  var baseWidth = indicator.getBoundingClientRect().width || 40;

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) {
        t.classList.remove('nuda-cp2-mode-prefix__mode--active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('nuda-cp2-mode-prefix__mode--active');
      tab.setAttribute('aria-selected', 'true');

      var ratio = tab.offsetWidth / baseWidth;
      indicator.style.transform =
        'translateX(' + (tab.offsetLeft - tabs[0].offsetLeft) + 'px) scaleX(' + ratio + ')';
    });
  });
})();`,
      },
    ],
  },

  /* ─────────────── 3. Inline Preview Pane ─────────────── */
  {
    id: "cp2-preview-pane",
    name: "Inline Preview Pane",
    category: CAT,
    preview: (
      <div className="nuda-cp2-preview-pane" role="dialog" aria-label="Command palette with preview">
        <ul className="nuda-cp2-preview-pane__list" role="listbox" aria-label="Results">
          <li className="nuda-cp2-preview-pane__opt nuda-cp2-preview-pane__opt--active" role="option" aria-selected="true">index.tsx</li>
          <li className="nuda-cp2-preview-pane__opt" role="option" aria-selected="false">App.tsx</li>
          <li className="nuda-cp2-preview-pane__opt" role="option" aria-selected="false">styles.css</li>
        </ul>
        <div className="nuda-cp2-preview-pane__panel" aria-hidden="true">
          <div className="nuda-cp2-preview-pane__panel-head">index.tsx</div>
          <div className="nuda-cp2-preview-pane__panel-line" style={{ width: "80%" }} />
          <div className="nuda-cp2-preview-pane__panel-line" style={{ width: "60%" }} />
          <div className="nuda-cp2-preview-pane__panel-line" style={{ width: "70%" }} />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cp2-preview-pane{width:300px;height:140px;display:flex;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;box-shadow:0 16px 40px -8px rgba(0,0,0,.6)}
      .nuda-cp2-preview-pane__list{list-style:none;margin:0;padding:6px;width:120px;flex-shrink:0;display:flex;flex-direction:column;gap:1px;border-right:1px solid rgba(255,255,255,.08)}
      .nuda-cp2-preview-pane__opt{padding:6px 8px;font:500 11px ui-sans-serif,system-ui;color:#777;border-radius:5px;cursor:pointer;transition:background .15s,color .15s}
      .nuda-cp2-preview-pane__opt:hover{background:rgba(255,255,255,.05);color:#cfcfcf}
      .nuda-cp2-preview-pane__opt--active{background:rgba(228,255,84,.1);color:#e4ff54}
      .nuda-cp2-preview-pane__panel{flex:1;padding:12px;display:flex;flex-direction:column;gap:8px;animation:nuda-cp2-preview-pane-in .35s cubic-bezier(.4,0,.2,1)}
      .nuda-cp2-preview-pane__panel-head{font:700 10px ui-sans-serif,system-ui;color:#fafafa;text-transform:uppercase;letter-spacing:.06em;margin-bottom:2px}
      .nuda-cp2-preview-pane__panel-line{height:7px;border-radius:3px;background:linear-gradient(90deg,rgba(255,255,255,.05) 25%,rgba(228,255,84,.15) 50%,rgba(255,255,255,.05) 75%);background-size:200% 100%;animation:nuda-cp2-preview-pane-shimmer 1.6s ease-in-out infinite}
      @keyframes nuda-cp2-preview-pane-in{from{opacity:0;transform:translateX(6px)}to{opacity:1;transform:translateX(0)}}
      @keyframes nuda-cp2-preview-pane-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-cp2-preview-pane__panel,.nuda-cp2-preview-pane__panel-line{animation:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Inline Preview Pane — results list beside a live preview of the active item -->
<div class="nuda-cp2-preview-pane" role="dialog" aria-label="Command palette with preview">
  <ul class="nuda-cp2-preview-pane__list" role="listbox" aria-label="Results">
    <li class="nuda-cp2-preview-pane__opt nuda-cp2-preview-pane__opt--active" role="option" aria-selected="true">index.tsx</li>
    <li class="nuda-cp2-preview-pane__opt" role="option" aria-selected="false">App.tsx</li>
    <li class="nuda-cp2-preview-pane__opt" role="option" aria-selected="false">styles.css</li>
  </ul>
  <div class="nuda-cp2-preview-pane__panel" aria-hidden="true">
    <div class="nuda-cp2-preview-pane__panel-head">index.tsx</div>
    <div class="nuda-cp2-preview-pane__panel-line" style="width: 80%"></div>
    <div class="nuda-cp2-preview-pane__panel-line" style="width: 60%"></div>
    <div class="nuda-cp2-preview-pane__panel-line" style="width: 70%"></div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. AI Ask Mode ─────────────── */
  {
    id: "cp2-ask-ai",
    name: "AI Ask Mode",
    category: CAT,
    preview: (
      <div className="nuda-cp2-ask-ai" role="dialog" aria-label="Ask AI">
        <div className="nuda-cp2-ask-ai__query">
          <span className="nuda-cp2-ask-ai__badge" aria-hidden="true">AI</span>
          How do I reset my password?
        </div>
        <div className="nuda-cp2-ask-ai__answer" role="status" aria-live="polite" aria-label="Generating answer">
          <span className="nuda-cp2-ask-ai__dot" />
          <span className="nuda-cp2-ask-ai__dot" />
          <span className="nuda-cp2-ask-ai__dot" />
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cp2-ask-ai{width:280px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:12px;animation:nuda-cp2-ask-ai-in .3s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 40px -8px rgba(0,0,0,.6)}
      .nuda-cp2-ask-ai__query{display:flex;align-items:center;gap:8px;font:500 12px ui-sans-serif,system-ui;color:#cfcfcf;padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-cp2-ask-ai__badge{flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:5px;background:#e4ff54;color:#0a0a0a;font:800 9px ui-sans-serif,system-ui}
      .nuda-cp2-ask-ai__answer{display:flex;align-items:center;gap:4px;padding:12px 2px 2px}
      .nuda-cp2-ask-ai__dot{width:6px;height:6px;border-radius:50%;background:#e4ff54;animation:nuda-cp2-ask-ai-bounce 1.2s ease-in-out infinite}
      .nuda-cp2-ask-ai__dot:nth-child(2){animation-delay:.15s}
      .nuda-cp2-ask-ai__dot:nth-child(3){animation-delay:.3s}
      @keyframes nuda-cp2-ask-ai-in{from{opacity:0;transform:translateY(-8px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes nuda-cp2-ask-ai-bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-5px);opacity:1}}
      @media (prefers-reduced-motion:reduce){
        .nuda-cp2-ask-ai,.nuda-cp2-ask-ai__dot{animation:none !important}
        .nuda-cp2-ask-ai__dot{opacity:1}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- AI Ask Mode — streaming dots while an answer is generated -->
<div class="nuda-cp2-ask-ai" role="dialog" aria-label="Ask AI">
  <div class="nuda-cp2-ask-ai__query">
    <span class="nuda-cp2-ask-ai__badge" aria-hidden="true">AI</span>
    How do I reset my password?
  </div>
  <div class="nuda-cp2-ask-ai__answer" role="status" aria-live="polite" aria-label="Generating answer">
    <span class="nuda-cp2-ask-ai__dot"></span>
    <span class="nuda-cp2-ask-ai__dot"></span>
    <span class="nuda-cp2-ask-ai__dot"></span>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Multi-Select Checklist ─────────────── */
  {
    id: "cp2-multiselect",
    name: "Multi-Select Checklist",
    category: CAT,
    preview: (
      <div className="nuda-cp2-multiselect" role="dialog" aria-label="Multi-select command palette">
        <ul className="nuda-cp2-multiselect__list" role="listbox" aria-multiselectable="true" aria-label="Select labels">
          <li className="nuda-cp2-multiselect__opt nuda-cp2-multiselect__opt--checked" role="option" aria-selected="true">
            <span className="nuda-cp2-multiselect__box" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path className="nuda-cp2-multiselect__check" d="M5 13 L10 18 L19 7" />
              </svg>
            </span>
            Bug
          </li>
          <li className="nuda-cp2-multiselect__opt" role="option" aria-selected="false">
            <span className="nuda-cp2-multiselect__box" aria-hidden="true" />
            Feature
          </li>
          <li className="nuda-cp2-multiselect__opt nuda-cp2-multiselect__opt--checked" role="option" aria-selected="true">
            <span className="nuda-cp2-multiselect__box" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path className="nuda-cp2-multiselect__check" d="M5 13 L10 18 L19 7" />
              </svg>
            </span>
            Urgent
          </li>
        </ul>
        <div className="nuda-cp2-multiselect__count" aria-live="polite">2 selected</div>
      </div>
    ),
    cssInline: `
      .nuda-cp2-multiselect{width:290px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;box-shadow:0 16px 40px -8px rgba(0,0,0,.6)}
      .nuda-cp2-multiselect__list{list-style:none;margin:0;padding:6px;display:flex;flex-direction:column;gap:1px}
      .nuda-cp2-multiselect__opt{display:flex;align-items:center;gap:8px;padding:7px 8px;font:500 12px ui-sans-serif,system-ui;color:#cfcfcf;border-radius:6px;cursor:pointer;transition:background .15s}
      .nuda-cp2-multiselect__opt:hover{background:rgba(255,255,255,.05)}
      .nuda-cp2-multiselect__opt--checked{color:#fafafa}
      .nuda-cp2-multiselect__box{flex-shrink:0;width:16px;height:16px;border-radius:4px;border:1px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;color:#0a0a0a;transition:background .2s,border-color .2s}
      .nuda-cp2-multiselect__opt--checked .nuda-cp2-multiselect__box{background:#e4ff54;border-color:#e4ff54}
      .nuda-cp2-multiselect__box svg{width:11px;height:11px}
      .nuda-cp2-multiselect__check{stroke-dasharray:24;stroke-dashoffset:24;animation:nuda-cp2-multiselect-draw .4s ease .1s forwards}
      .nuda-cp2-multiselect__count{padding:7px 12px;font:600 10px ui-sans-serif,system-ui;color:#777;border-top:1px solid rgba(255,255,255,.08)}
      @keyframes nuda-cp2-multiselect-draw{to{stroke-dashoffset:0}}
      @media (prefers-reduced-motion:reduce){
        .nuda-cp2-multiselect__check{animation:none !important;stroke-dashoffset:0}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Multi-Select Checklist — toggle several commands before running them -->
<div class="nuda-cp2-multiselect" role="dialog" aria-label="Multi-select command palette">
  <ul class="nuda-cp2-multiselect__list" role="listbox" aria-multiselectable="true" aria-label="Select labels">
    <li class="nuda-cp2-multiselect__opt nuda-cp2-multiselect__opt--checked" role="option" aria-selected="true">
      <span class="nuda-cp2-multiselect__box" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path class="nuda-cp2-multiselect__check" d="M5 13 L10 18 L19 7" />
        </svg>
      </span>
      Bug
    </li>
    <li class="nuda-cp2-multiselect__opt" role="option" aria-selected="false">
      <span class="nuda-cp2-multiselect__box" aria-hidden="true"></span>
      Feature
    </li>
    <li class="nuda-cp2-multiselect__opt nuda-cp2-multiselect__opt--checked" role="option" aria-selected="true">
      <span class="nuda-cp2-multiselect__box" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
             stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <path class="nuda-cp2-multiselect__check" d="M5 13 L10 18 L19 7" />
        </svg>
      </span>
      Urgent
    </li>
  </ul>
  <div class="nuda-cp2-multiselect__count" aria-live="polite">2 selected</div>
</div>`,
      },
      {
        label: "JS",
        language: "javascript",
        code: `/* Multi-Select Checklist — click a row to toggle it and update the count. */

(function () {
  var list = document.querySelector('.nuda-cp2-multiselect__list');
  var count = document.querySelector('.nuda-cp2-multiselect__count');
  if (!list || !count) return;

  var CHECK_PATH = 'M5 13 L10 18 L19 7';

  list.addEventListener('click', function (e) {
    var opt = e.target.closest('.nuda-cp2-multiselect__opt');
    if (!opt) return;

    var checked = opt.classList.toggle('nuda-cp2-multiselect__opt--checked');
    opt.setAttribute('aria-selected', String(checked));

    var box = opt.querySelector('.nuda-cp2-multiselect__box');
    box.innerHTML = checked
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" ' +
        'stroke-linecap="round" stroke-linejoin="round"><path class="nuda-cp2-multiselect__check" ' +
        'd="' + CHECK_PATH + '"/></svg>'
      : '';

    var total = list.querySelectorAll('.nuda-cp2-multiselect__opt--checked').length;
    count.textContent = total + ' selected';
  });
})();`,
      },
    ],
  },

  /* ─────────────── 6. Traveling Highlight Row ─────────────── */
  {
    id: "cp2-travel-highlight",
    name: "Traveling Highlight Row",
    category: CAT,
    preview: (
      <div className="nuda-cp2-travel-highlight" role="dialog" aria-label="Command palette">
        <div className="nuda-cp2-travel-highlight__listwrap">
          <span className="nuda-cp2-travel-highlight__glow" aria-hidden="true" />
          <ul className="nuda-cp2-travel-highlight__list" role="listbox" aria-label="Commands">
            <li className="nuda-cp2-travel-highlight__opt" role="option" aria-selected="false">
              <span className="nuda-cp2-travel-highlight__label">New Tab</span>
              <span className="nuda-cp2-travel-highlight__kbd"><kbd>⌘</kbd><kbd>T</kbd></span>
            </li>
            <li className="nuda-cp2-travel-highlight__opt nuda-cp2-travel-highlight__opt--active" role="option" aria-selected="true">
              <span className="nuda-cp2-travel-highlight__label">Close Tab</span>
              <span className="nuda-cp2-travel-highlight__kbd"><kbd>⌘</kbd><kbd>W</kbd></span>
            </li>
            <li className="nuda-cp2-travel-highlight__opt" role="option" aria-selected="false">
              <span className="nuda-cp2-travel-highlight__label">Reopen Tab</span>
              <span className="nuda-cp2-travel-highlight__kbd"><kbd>⇧</kbd><kbd>⌘</kbd><kbd>T</kbd></span>
            </li>
          </ul>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cp2-travel-highlight{width:290px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:6px;box-shadow:0 16px 40px -8px rgba(0,0,0,.6)}
      .nuda-cp2-travel-highlight__listwrap{position:relative}
      .nuda-cp2-travel-highlight__glow{position:absolute;left:0;right:0;top:0;height:34px;border-radius:6px;background:rgba(228,255,84,.1);border:1px solid rgba(228,255,84,.25);z-index:0;animation:nuda-cp2-travel-highlight-move 3.6s ease-in-out infinite}
      .nuda-cp2-travel-highlight__list{list-style:none;margin:0;padding:0;position:relative;z-index:1;display:flex;flex-direction:column}
      .nuda-cp2-travel-highlight__opt{display:flex;align-items:center;justify-content:space-between;height:34px;padding:0 8px;font:500 12px ui-sans-serif,system-ui;color:#cfcfcf;box-sizing:border-box}
      .nuda-cp2-travel-highlight__opt--active .nuda-cp2-travel-highlight__label{color:#e4ff54}
      .nuda-cp2-travel-highlight__kbd{display:inline-flex;gap:2px}
      .nuda-cp2-travel-highlight__kbd kbd{display:inline-flex;align-items:center;justify-content:center;min-width:16px;height:16px;padding:0 4px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:4px;font:700 9px ui-monospace,monospace;color:#a1a1aa;line-height:1}
      @keyframes nuda-cp2-travel-highlight-move{0%,20%{transform:translateY(0)}40%,60%{transform:translateY(34px)}80%,100%{transform:translateY(68px)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-cp2-travel-highlight__glow{animation:none !important;transform:translateY(34px)}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Traveling Highlight Row — the selection bar glides between rows via translateY -->
<div class="nuda-cp2-travel-highlight" role="dialog" aria-label="Command palette">
  <div class="nuda-cp2-travel-highlight__listwrap">
    <span class="nuda-cp2-travel-highlight__glow" aria-hidden="true"></span>
    <ul class="nuda-cp2-travel-highlight__list" role="listbox" aria-label="Commands">
      <li class="nuda-cp2-travel-highlight__opt" role="option" aria-selected="false">
        <span class="nuda-cp2-travel-highlight__label">New Tab</span>
        <span class="nuda-cp2-travel-highlight__kbd"><kbd>⌘</kbd><kbd>T</kbd></span>
      </li>
      <li class="nuda-cp2-travel-highlight__opt nuda-cp2-travel-highlight__opt--active" role="option" aria-selected="true">
        <span class="nuda-cp2-travel-highlight__label">Close Tab</span>
        <span class="nuda-cp2-travel-highlight__kbd"><kbd>⌘</kbd><kbd>W</kbd></span>
      </li>
      <li class="nuda-cp2-travel-highlight__opt" role="option" aria-selected="false">
        <span class="nuda-cp2-travel-highlight__label">Reopen Tab</span>
        <span class="nuda-cp2-travel-highlight__kbd"><kbd>⇧</kbd><kbd>⌘</kbd><kbd>T</kbd></span>
      </li>
    </ul>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Sticky Group Headers ─────────────── */
  {
    id: "cp2-sticky-groups",
    name: "Sticky Group Headers",
    category: CAT,
    preview: (
      <div className="nuda-cp2-sticky-groups" role="dialog" aria-label="Grouped results">
        <div className="nuda-cp2-sticky-groups__scroll" role="listbox" aria-label="Grouped commands">
          <span className="nuda-cp2-sticky-groups__shadow" aria-hidden="true" />
          <div className="nuda-cp2-sticky-groups__group" role="group" aria-label="Files">
            <div className="nuda-cp2-sticky-groups__head">Files</div>
            <div className="nuda-cp2-sticky-groups__opt" role="option" aria-selected="false">index.tsx</div>
            <div className="nuda-cp2-sticky-groups__opt" role="option" aria-selected="false">App.tsx</div>
          </div>
          <div className="nuda-cp2-sticky-groups__group" role="group" aria-label="Actions">
            <div className="nuda-cp2-sticky-groups__head">Actions</div>
            <div className="nuda-cp2-sticky-groups__opt" role="option" aria-selected="true">Deploy to prod</div>
            <div className="nuda-cp2-sticky-groups__opt" role="option" aria-selected="false">Rollback</div>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cp2-sticky-groups{width:300px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:10px;overflow:hidden;animation:nuda-cp2-sticky-groups-in .3s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 40px -8px rgba(0,0,0,.6)}
      .nuda-cp2-sticky-groups__scroll{position:relative;max-height:170px;overflow-y:auto}
      .nuda-cp2-sticky-groups__shadow{position:absolute;top:0;left:0;right:0;height:16px;background:linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,0));z-index:2;pointer-events:none}
      .nuda-cp2-sticky-groups__group{padding:0 6px}
      .nuda-cp2-sticky-groups__head{position:sticky;top:0;z-index:1;background:#161616;padding:6px 6px;font:700 10px ui-sans-serif,system-ui;color:#777;text-transform:uppercase;letter-spacing:.07em}
      .nuda-cp2-sticky-groups__opt{padding:7px 8px;font:500 12px ui-sans-serif,system-ui;color:#cfcfcf;border-radius:6px;cursor:pointer;transition:background .15s,color .15s}
      .nuda-cp2-sticky-groups__opt:hover{background:rgba(255,255,255,.05);color:#fafafa}
      .nuda-cp2-sticky-groups__opt[aria-selected="true"]{background:rgba(228,255,84,.1);color:#e4ff54}
      @keyframes nuda-cp2-sticky-groups-in{from{opacity:0;transform:translateY(-8px) scale(.97)}to{opacity:1;transform:translateY(0) scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-cp2-sticky-groups{animation:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Sticky Group Headers — headers pin to the top while the list scrolls -->
<div class="nuda-cp2-sticky-groups" role="dialog" aria-label="Grouped results">
  <div class="nuda-cp2-sticky-groups__scroll" role="listbox" aria-label="Grouped commands">
    <span class="nuda-cp2-sticky-groups__shadow" aria-hidden="true"></span>
    <div class="nuda-cp2-sticky-groups__group" role="group" aria-label="Files">
      <div class="nuda-cp2-sticky-groups__head">Files</div>
      <div class="nuda-cp2-sticky-groups__opt" role="option" aria-selected="false">index.tsx</div>
      <div class="nuda-cp2-sticky-groups__opt" role="option" aria-selected="false">App.tsx</div>
    </div>
    <div class="nuda-cp2-sticky-groups__group" role="group" aria-label="Actions">
      <div class="nuda-cp2-sticky-groups__head">Actions</div>
      <div class="nuda-cp2-sticky-groups__opt" role="option" aria-selected="true">Deploy to prod</div>
      <div class="nuda-cp2-sticky-groups__opt" role="option" aria-selected="false">Rollback</div>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Quick Answer Row ─────────────── */
  {
    id: "cp2-quick-answer",
    name: "Quick Answer Row",
    category: CAT,
    preview: (
      <div className="nuda-cp2-quick-answer" role="dialog" aria-label="Command palette">
        <div className="nuda-cp2-quick-answer__row" role="option" aria-selected="true">
          <span className="nuda-cp2-quick-answer__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="3" width="16" height="18" rx="2" />
              <path d="M8 8 L16 8 M8 12 L16 12 M8 16 L12 16" />
            </svg>
          </span>
          <span className="nuda-cp2-quick-answer__expr">42 * 12</span>
          <span className="nuda-cp2-quick-answer__eq" aria-hidden="true">=</span>
          <span className="nuda-cp2-quick-answer__result">504</span>
          <button className="nuda-cp2-quick-answer__copy" type="button">Copy</button>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-cp2-quick-answer{width:300px;background:#161616;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:4px;animation:nuda-cp2-quick-answer-in .3s cubic-bezier(.4,0,.2,1);box-shadow:0 16px 40px -8px rgba(0,0,0,.6)}
      .nuda-cp2-quick-answer__row{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:7px;background:rgba(228,255,84,.06)}
      .nuda-cp2-quick-answer__icon{flex-shrink:0;width:16px;height:16px;color:#e4ff54}
      .nuda-cp2-quick-answer__icon svg{width:100%;height:100%}
      .nuda-cp2-quick-answer__expr{font:500 12px ui-monospace,monospace;color:#cfcfcf}
      .nuda-cp2-quick-answer__eq{font:600 12px ui-sans-serif,system-ui;color:#777}
      .nuda-cp2-quick-answer__result{font:700 13px ui-monospace,monospace;color:#fafafa;animation:nuda-cp2-quick-answer-pop .4s cubic-bezier(.34,1.56,.64,1)}
      .nuda-cp2-quick-answer__copy{margin-left:auto;appearance:none;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:6px;padding:4px 8px;font:600 10px ui-sans-serif,system-ui;color:#a1a1aa;cursor:pointer;transition:background .15s,color .15s;min-height:22px}
      .nuda-cp2-quick-answer__copy:hover{background:rgba(255,255,255,.1);color:#fafafa}
      .nuda-cp2-quick-answer__copy:focus-visible{outline:2px solid #e4ff54;outline-offset:2px}
      @keyframes nuda-cp2-quick-answer-in{from{opacity:0;transform:translateY(-8px) scale(.96)}to{opacity:1;transform:translateY(0) scale(1)}}
      @keyframes nuda-cp2-quick-answer-pop{0%{opacity:0;transform:scale(.6)}70%{transform:scale(1.1)}100%{opacity:1;transform:scale(1)}}
      @media (prefers-reduced-motion:reduce){
        .nuda-cp2-quick-answer,.nuda-cp2-quick-answer__result{animation:none !important}
      }
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<!-- Quick Answer Row — inline calculator / quick-answer result -->
<div class="nuda-cp2-quick-answer" role="dialog" aria-label="Command palette">
  <div class="nuda-cp2-quick-answer__row" role="option" aria-selected="true">
    <span class="nuda-cp2-quick-answer__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
           stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8 L16 8 M8 12 L16 12 M8 16 L12 16" />
      </svg>
    </span>
    <span class="nuda-cp2-quick-answer__expr">42 * 12</span>
    <span class="nuda-cp2-quick-answer__eq" aria-hidden="true">=</span>
    <span class="nuda-cp2-quick-answer__result">504</span>
    <button class="nuda-cp2-quick-answer__copy" type="button">Copy</button>
  </div>
</div>`,
      },
    ],
  },
];
