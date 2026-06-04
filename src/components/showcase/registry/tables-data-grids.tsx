import type { NudaComponent } from "./types";

const CAT = "Tables & Data Grids";

export const tablesDataGrids: NudaComponent[] = [
  /* ─────────────── 1. Striped Rows ─────────────── */
  {
    id: "table-striped-rows",
    name: "Striped Rows",
    category: CAT,
    preview: (
      <div className="nuda-tbl-striped">
        <table className="nuda-tbl-striped__table">
          <thead>
            <tr>
              <th className="nuda-tbl-striped__th">Name</th>
              <th className="nuda-tbl-striped__th">Role</th>
              <th className="nuda-tbl-striped__th">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nuda-tbl-striped__row">
              <td className="nuda-tbl-striped__td">Alex Kim</td>
              <td className="nuda-tbl-striped__td">Engineer</td>
              <td className="nuda-tbl-striped__td">Active</td>
            </tr>
            <tr className="nuda-tbl-striped__row">
              <td className="nuda-tbl-striped__td">Priya S.</td>
              <td className="nuda-tbl-striped__td">Designer</td>
              <td className="nuda-tbl-striped__td">Active</td>
            </tr>
            <tr className="nuda-tbl-striped__row">
              <td className="nuda-tbl-striped__td">Jordan T.</td>
              <td className="nuda-tbl-striped__td">PM</td>
              <td className="nuda-tbl-striped__td">Away</td>
            </tr>
            <tr className="nuda-tbl-striped__row">
              <td className="nuda-tbl-striped__td">Sam L.</td>
              <td className="nuda-tbl-striped__td">QA</td>
              <td className="nuda-tbl-striped__td">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-striped{width:100%;overflow:hidden;border-radius:10px;border:1px solid rgba(255,255,255,.1);background:#141414;animation:_nuda-tblfade .4s ease-out}
      .nuda-tbl-striped__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-striped__th{padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid rgba(255,255,255,.1);background:#1a1a1a}
      .nuda-tbl-striped__td{padding:.45rem .75rem;color:#cfcfcf}
      .nuda-tbl-striped__row:nth-child(odd){background:#1a1a1a}
      .nuda-tbl-striped__row:nth-child(even){background:#141414}
      @keyframes _nuda-tblfade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-tbl-striped{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-striped">
  <table class="nuda-tbl-striped__table">
    <thead>
      <tr>
        <th class="nuda-tbl-striped__th">Name</th>
        <th class="nuda-tbl-striped__th">Role</th>
        <th class="nuda-tbl-striped__th">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nuda-tbl-striped__row">
        <td class="nuda-tbl-striped__td">Alex Kim</td>
        <td class="nuda-tbl-striped__td">Engineer</td>
        <td class="nuda-tbl-striped__td">Active</td>
      </tr>
      <tr class="nuda-tbl-striped__row">
        <td class="nuda-tbl-striped__td">Priya S.</td>
        <td class="nuda-tbl-striped__td">Designer</td>
        <td class="nuda-tbl-striped__td">Active</td>
      </tr>
      <tr class="nuda-tbl-striped__row">
        <td class="nuda-tbl-striped__td">Jordan T.</td>
        <td class="nuda-tbl-striped__td">PM</td>
        <td class="nuda-tbl-striped__td">Away</td>
      </tr>
      <tr class="nuda-tbl-striped__row">
        <td class="nuda-tbl-striped__td">Sam L.</td>
        <td class="nuda-tbl-striped__td">QA</td>
        <td class="nuda-tbl-striped__td">Active</td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 2. Sortable Header ─────────────── */
  {
    id: "table-sortable-header",
    name: "Sortable Header",
    category: CAT,
    preview: (
      <div className="nuda-tbl-sort">
        <table className="nuda-tbl-sort__table">
          <thead>
            <tr>
              <th className="nuda-tbl-sort__th nuda-tbl-sort__th--asc">
                Name <span className="nuda-tbl-sort__icon">↑</span>
              </th>
              <th className="nuda-tbl-sort__th">
                Score <span className="nuda-tbl-sort__icon nuda-tbl-sort__icon--idle">⇅</span>
              </th>
              <th className="nuda-tbl-sort__th">
                Date <span className="nuda-tbl-sort__icon nuda-tbl-sort__icon--idle">⇅</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="nuda-tbl-sort__row">
              <td className="nuda-tbl-sort__td">Alice</td>
              <td className="nuda-tbl-sort__td">98</td>
              <td className="nuda-tbl-sort__td">2024-01</td>
            </tr>
            <tr className="nuda-tbl-sort__row">
              <td className="nuda-tbl-sort__td">Bob</td>
              <td className="nuda-tbl-sort__td">74</td>
              <td className="nuda-tbl-sort__td">2024-03</td>
            </tr>
            <tr className="nuda-tbl-sort__row">
              <td className="nuda-tbl-sort__td">Carol</td>
              <td className="nuda-tbl-sort__td">87</td>
              <td className="nuda-tbl-sort__td">2024-02</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-sort{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414;animation:_nuda-tblrise .35s ease-out}
      .nuda-tbl-sort__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-sort__th{padding:.5rem .75rem;text-align:left;color:#cfcfcf;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1);cursor:pointer;user-select:none;white-space:nowrap;transition:color .15s}
      .nuda-tbl-sort__th:hover{color:#e4ff54}
      .nuda-tbl-sort__th--asc{color:#e4ff54}
      .nuda-tbl-sort__icon{margin-left:4px;font-size:.7rem;opacity:.9}
      .nuda-tbl-sort__icon--idle{opacity:.35}
      .nuda-tbl-sort__td{padding:.45rem .75rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-tbl-sort__row:last-child .nuda-tbl-sort__td{border-bottom:none}
      @keyframes _nuda-tblrise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-tbl-sort{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-sort">
  <table class="nuda-tbl-sort__table">
    <thead>
      <tr>
        <th class="nuda-tbl-sort__th nuda-tbl-sort__th--asc">
          Name <span class="nuda-tbl-sort__icon">↑</span>
        </th>
        <th class="nuda-tbl-sort__th">
          Score <span class="nuda-tbl-sort__icon nuda-tbl-sort__icon--idle">⇅</span>
        </th>
        <th class="nuda-tbl-sort__th">
          Date <span class="nuda-tbl-sort__icon nuda-tbl-sort__icon--idle">⇅</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="nuda-tbl-sort__row">
        <td class="nuda-tbl-sort__td">Alice</td>
        <td class="nuda-tbl-sort__td">98</td>
        <td class="nuda-tbl-sort__td">2024-01</td>
      </tr>
      <tr class="nuda-tbl-sort__row">
        <td class="nuda-tbl-sort__td">Bob</td>
        <td class="nuda-tbl-sort__td">74</td>
        <td class="nuda-tbl-sort__td">2024-03</td>
      </tr>
      <tr class="nuda-tbl-sort__row">
        <td class="nuda-tbl-sort__td">Carol</td>
        <td class="nuda-tbl-sort__td">87</td>
        <td class="nuda-tbl-sort__td">2024-02</td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 3. Sticky Header ─────────────── */
  {
    id: "table-sticky-header",
    name: "Sticky Header",
    category: CAT,
    preview: (
      <div className="nuda-tbl-sticky">
        <div className="nuda-tbl-sticky__scroll">
          <table className="nuda-tbl-sticky__table">
            <thead>
              <tr>
                <th className="nuda-tbl-sticky__th">Product</th>
                <th className="nuda-tbl-sticky__th">SKU</th>
                <th className="nuda-tbl-sticky__th">Price</th>
              </tr>
            </thead>
            <tbody>
              {["Orbit Pro", "Nexus S", "Velo X", "Aura M", "Pulse Z"].map((p, i) => (
                <tr key={i} className="nuda-tbl-sticky__row">
                  <td className="nuda-tbl-sticky__td">{p}</td>
                  <td className="nuda-tbl-sticky__td">SKU-{100 + i}</td>
                  <td className="nuda-tbl-sticky__td">${(19.99 + i * 5).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tbl-sticky{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-sticky__scroll{max-height:140px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:#333 transparent}
      .nuda-tbl-sticky__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-sticky__th{position:sticky;top:0;z-index:2;padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.15);white-space:nowrap}
      .nuda-tbl-sticky__td{padding:.42rem .75rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-tbl-sticky__row:hover .nuda-tbl-sticky__td{background:rgba(228,255,84,.04)}
      .nuda-tbl-sticky__row:last-child .nuda-tbl-sticky__td{border-bottom:none}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-sticky">
  <div class="nuda-tbl-sticky__scroll">
    <table class="nuda-tbl-sticky__table">
      <thead>
        <tr>
          <th class="nuda-tbl-sticky__th">Product</th>
          <th class="nuda-tbl-sticky__th">SKU</th>
          <th class="nuda-tbl-sticky__th">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr class="nuda-tbl-sticky__row">
          <td class="nuda-tbl-sticky__td">Orbit Pro</td>
          <td class="nuda-tbl-sticky__td">SKU-100</td>
          <td class="nuda-tbl-sticky__td">$19.99</td>
        </tr>
        <tr class="nuda-tbl-sticky__row">
          <td class="nuda-tbl-sticky__td">Nexus S</td>
          <td class="nuda-tbl-sticky__td">SKU-101</td>
          <td class="nuda-tbl-sticky__td">$24.99</td>
        </tr>
        <tr class="nuda-tbl-sticky__row">
          <td class="nuda-tbl-sticky__td">Velo X</td>
          <td class="nuda-tbl-sticky__td">SKU-102</td>
          <td class="nuda-tbl-sticky__td">$29.99</td>
        </tr>
        <tr class="nuda-tbl-sticky__row">
          <td class="nuda-tbl-sticky__td">Aura M</td>
          <td class="nuda-tbl-sticky__td">SKU-103</td>
          <td class="nuda-tbl-sticky__td">$34.99</td>
        </tr>
        <tr class="nuda-tbl-sticky__row">
          <td class="nuda-tbl-sticky__td">Pulse Z</td>
          <td class="nuda-tbl-sticky__td">SKU-104</td>
          <td class="nuda-tbl-sticky__td">$39.99</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 4. Selectable Rows w/ Checkbox ─────────────── */
  {
    id: "table-selectable-rows",
    name: "Selectable Rows",
    category: CAT,
    preview: (
      <div className="nuda-tbl-select">
        <table className="nuda-tbl-select__table">
          <thead>
            <tr>
              <th className="nuda-tbl-select__th nuda-tbl-select__th--check">
                <span className="nuda-tbl-select__chk nuda-tbl-select__chk--all" />
              </th>
              <th className="nuda-tbl-select__th">User</th>
              <th className="nuda-tbl-select__th">Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nuda-tbl-select__row nuda-tbl-select__row--checked">
              <td className="nuda-tbl-select__td">
                <span className="nuda-tbl-select__chk nuda-tbl-select__chk--on" />
              </td>
              <td className="nuda-tbl-select__td">luna@dev.io</td>
              <td className="nuda-tbl-select__td">Pro</td>
            </tr>
            <tr className="nuda-tbl-select__row">
              <td className="nuda-tbl-select__td">
                <span className="nuda-tbl-select__chk" />
              </td>
              <td className="nuda-tbl-select__td">marco@ui.co</td>
              <td className="nuda-tbl-select__td">Free</td>
            </tr>
            <tr className="nuda-tbl-select__row nuda-tbl-select__row--checked">
              <td className="nuda-tbl-select__td">
                <span className="nuda-tbl-select__chk nuda-tbl-select__chk--on" />
              </td>
              <td className="nuda-tbl-select__td">sasha@co.de</td>
              <td className="nuda-tbl-select__td">Pro</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-select{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-select__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-select__th{padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-select__th--check{width:36px}
      .nuda-tbl-select__td{padding:.42rem .75rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-tbl-select__row:last-child .nuda-tbl-select__td{border-bottom:none}
      .nuda-tbl-select__row--checked{background:rgba(228,255,84,.05)}
      .nuda-tbl-select__row--checked .nuda-tbl-select__td{color:#fafafa}
      .nuda-tbl-select__chk{display:inline-block;width:14px;height:14px;border-radius:4px;border:1.5px solid rgba(255,255,255,.25);background:transparent;vertical-align:middle;position:relative;transition:background .15s,border-color .15s}
      .nuda-tbl-select__chk--on{background:#e4ff54;border-color:#e4ff54}
      .nuda-tbl-select__chk--on::after{content:'';position:absolute;left:3px;top:1px;width:5px;height:8px;border:2px solid #141414;border-top:none;border-left:none;transform:rotate(42deg)}
      .nuda-tbl-select__chk--all{border-style:dashed;opacity:.5}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-select">
  <table class="nuda-tbl-select__table">
    <thead>
      <tr>
        <th class="nuda-tbl-select__th nuda-tbl-select__th--check">
          <span class="nuda-tbl-select__chk nuda-tbl-select__chk--all"></span>
        </th>
        <th class="nuda-tbl-select__th">User</th>
        <th class="nuda-tbl-select__th">Plan</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nuda-tbl-select__row nuda-tbl-select__row--checked">
        <td class="nuda-tbl-select__td">
          <span class="nuda-tbl-select__chk nuda-tbl-select__chk--on"></span>
        </td>
        <td class="nuda-tbl-select__td">luna@dev.io</td>
        <td class="nuda-tbl-select__td">Pro</td>
      </tr>
      <tr class="nuda-tbl-select__row">
        <td class="nuda-tbl-select__td">
          <span class="nuda-tbl-select__chk"></span>
        </td>
        <td class="nuda-tbl-select__td">marco@ui.co</td>
        <td class="nuda-tbl-select__td">Free</td>
      </tr>
      <tr class="nuda-tbl-select__row nuda-tbl-select__row--checked">
        <td class="nuda-tbl-select__td">
          <span class="nuda-tbl-select__chk nuda-tbl-select__chk--on"></span>
        </td>
        <td class="nuda-tbl-select__td">sasha@co.de</td>
        <td class="nuda-tbl-select__td">Pro</td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 5. Expandable Row ─────────────── */
  {
    id: "table-expandable-row",
    name: "Expandable Row",
    category: CAT,
    preview: (
      <div className="nuda-tbl-expand">
        <table className="nuda-tbl-expand__table">
          <thead>
            <tr>
              <th className="nuda-tbl-expand__th" style={{ width: 24 }} />
              <th className="nuda-tbl-expand__th">Order</th>
              <th className="nuda-tbl-expand__th">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nuda-tbl-expand__row">
              <td className="nuda-tbl-expand__td">
                <span className="nuda-tbl-expand__toggle nuda-tbl-expand__toggle--open">▾</span>
              </td>
              <td className="nuda-tbl-expand__td">#ORD-001</td>
              <td className="nuda-tbl-expand__td">$128.00</td>
            </tr>
            <tr className="nuda-tbl-expand__detail">
              <td />
              <td className="nuda-tbl-expand__detail-cell" colSpan={2}>
                <div className="nuda-tbl-expand__detail-body">
                  <span>• Orbit Pro × 2</span>
                  <span>• Shipping: $8.00</span>
                  <span>• Tax: $12.00</span>
                </div>
              </td>
            </tr>
            <tr className="nuda-tbl-expand__row">
              <td className="nuda-tbl-expand__td">
                <span className="nuda-tbl-expand__toggle">▸</span>
              </td>
              <td className="nuda-tbl-expand__td">#ORD-002</td>
              <td className="nuda-tbl-expand__td">$54.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-expand{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-expand__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-expand__th{padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-expand__td{padding:.45rem .75rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-tbl-expand__row:last-child .nuda-tbl-expand__td{border-bottom:none}
      .nuda-tbl-expand__toggle{cursor:pointer;color:#e4ff54;font-size:.9rem;line-height:1;user-select:none;transition:transform .2s}
      .nuda-tbl-expand__toggle--open{display:inline-block}
      .nuda-tbl-expand__detail{background:#1a1a1a}
      .nuda-tbl-expand__detail-cell{padding:.3rem .75rem .6rem}
      .nuda-tbl-expand__detail-body{display:flex;flex-direction:column;gap:2px;color:#777;font-size:.72rem;animation:_nuda-tblslide .2s ease-out}
      @keyframes _nuda-tblslide{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
      @media(prefers-reduced-motion:reduce){.nuda-tbl-expand__detail-body{animation:none}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-expand">
  <table class="nuda-tbl-expand__table">
    <thead>
      <tr>
        <th class="nuda-tbl-expand__th" style="width:24px"></th>
        <th class="nuda-tbl-expand__th">Order</th>
        <th class="nuda-tbl-expand__th">Total</th>
      </tr>
    </thead>
    <tbody>
      <!-- expanded row -->
      <tr class="nuda-tbl-expand__row">
        <td class="nuda-tbl-expand__td">
          <span class="nuda-tbl-expand__toggle nuda-tbl-expand__toggle--open">▾</span>
        </td>
        <td class="nuda-tbl-expand__td">#ORD-001</td>
        <td class="nuda-tbl-expand__td">$128.00</td>
      </tr>
      <tr class="nuda-tbl-expand__detail">
        <td></td>
        <td class="nuda-tbl-expand__detail-cell" colspan="2">
          <div class="nuda-tbl-expand__detail-body">
            <span>• Orbit Pro × 2</span>
            <span>• Shipping: $8.00</span>
            <span>• Tax: $12.00</span>
          </div>
        </td>
      </tr>
      <!-- collapsed row -->
      <tr class="nuda-tbl-expand__row">
        <td class="nuda-tbl-expand__td">
          <span class="nuda-tbl-expand__toggle">▸</span>
        </td>
        <td class="nuda-tbl-expand__td">#ORD-002</td>
        <td class="nuda-tbl-expand__td">$54.00</td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 6. Status Pills in Cells ─────────────── */
  {
    id: "table-status-pills",
    name: "Status Pills",
    category: CAT,
    preview: (
      <div className="nuda-tbl-status">
        <table className="nuda-tbl-status__table">
          <thead>
            <tr>
              <th className="nuda-tbl-status__th">Deploy</th>
              <th className="nuda-tbl-status__th">Env</th>
              <th className="nuda-tbl-status__th">State</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nuda-tbl-status__row">
              <td className="nuda-tbl-status__td">v2.4.1</td>
              <td className="nuda-tbl-status__td">Production</td>
              <td className="nuda-tbl-status__td">
                <span className="nuda-tbl-status__pill nuda-tbl-status__pill--success">Live</span>
              </td>
            </tr>
            <tr className="nuda-tbl-status__row">
              <td className="nuda-tbl-status__td">v2.5.0-rc</td>
              <td className="nuda-tbl-status__td">Staging</td>
              <td className="nuda-tbl-status__td">
                <span className="nuda-tbl-status__pill nuda-tbl-status__pill--warn">Pending</span>
              </td>
            </tr>
            <tr className="nuda-tbl-status__row">
              <td className="nuda-tbl-status__td">v2.3.9</td>
              <td className="nuda-tbl-status__td">Dev</td>
              <td className="nuda-tbl-status__td">
                <span className="nuda-tbl-status__pill nuda-tbl-status__pill--error">Failed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-status{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-status__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-status__th{padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-status__td{padding:.45rem .75rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-tbl-status__row:last-child .nuda-tbl-status__td{border-bottom:none}
      .nuda-tbl-status__pill{display:inline-flex;align-items:center;padding:2px 9px;border-radius:20px;font-size:.68rem;font-weight:600;letter-spacing:.04em}
      .nuda-tbl-status__pill--success{background:rgba(74,222,128,.15);color:#4ade80;border:1px solid rgba(74,222,128,.25)}
      .nuda-tbl-status__pill--warn{background:rgba(251,191,36,.15);color:#fbbf24;border:1px solid rgba(251,191,36,.25)}
      .nuda-tbl-status__pill--error{background:rgba(255,107,107,.15);color:#ff6b6b;border:1px solid rgba(255,107,107,.25)}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-status">
  <table class="nuda-tbl-status__table">
    <thead>
      <tr>
        <th class="nuda-tbl-status__th">Deploy</th>
        <th class="nuda-tbl-status__th">Env</th>
        <th class="nuda-tbl-status__th">State</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nuda-tbl-status__row">
        <td class="nuda-tbl-status__td">v2.4.1</td>
        <td class="nuda-tbl-status__td">Production</td>
        <td class="nuda-tbl-status__td">
          <span class="nuda-tbl-status__pill nuda-tbl-status__pill--success">Live</span>
        </td>
      </tr>
      <tr class="nuda-tbl-status__row">
        <td class="nuda-tbl-status__td">v2.5.0-rc</td>
        <td class="nuda-tbl-status__td">Staging</td>
        <td class="nuda-tbl-status__td">
          <span class="nuda-tbl-status__pill nuda-tbl-status__pill--warn">Pending</span>
        </td>
      </tr>
      <tr class="nuda-tbl-status__row">
        <td class="nuda-tbl-status__td">v2.3.9</td>
        <td class="nuda-tbl-status__td">Dev</td>
        <td class="nuda-tbl-status__td">
          <span class="nuda-tbl-status__pill nuda-tbl-status__pill--error">Failed</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 7. Compact Dense Table ─────────────── */
  {
    id: "table-compact-dense",
    name: "Compact Dense Table",
    category: CAT,
    preview: (
      <div className="nuda-tbl-dense">
        <table className="nuda-tbl-dense__table">
          <thead>
            <tr>
              <th className="nuda-tbl-dense__th">Key</th>
              <th className="nuda-tbl-dense__th">Value</th>
              <th className="nuda-tbl-dense__th">Type</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["api_key", "sk-••••••••", "string"],
              ["timeout", "5000", "number"],
              ["retries", "3", "number"],
              ["debug", "false", "boolean"],
              ["region", "us-east-1", "string"],
            ].map(([k, v, t], i) => (
              <tr key={i} className="nuda-tbl-dense__row">
                <td className="nuda-tbl-dense__td nuda-tbl-dense__td--key">{k}</td>
                <td className="nuda-tbl-dense__td">{v}</td>
                <td className="nuda-tbl-dense__td nuda-tbl-dense__td--type">{t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-dense{width:100%;border-radius:8px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414;font-family:monospace}
      .nuda-tbl-dense__table{width:100%;border-collapse:collapse;font-size:.72rem}
      .nuda-tbl-dense__th{padding:.3rem .6rem;text-align:left;color:#555;font-weight:600;font-size:.66rem;text-transform:uppercase;letter-spacing:.07em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-dense__td{padding:.28rem .6rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.04)}
      .nuda-tbl-dense__row:last-child .nuda-tbl-dense__td{border-bottom:none}
      .nuda-tbl-dense__td--key{color:#e4ff54;font-weight:500}
      .nuda-tbl-dense__td--type{color:#777;font-style:italic}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-dense">
  <table class="nuda-tbl-dense__table">
    <thead>
      <tr>
        <th class="nuda-tbl-dense__th">Key</th>
        <th class="nuda-tbl-dense__th">Value</th>
        <th class="nuda-tbl-dense__th">Type</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nuda-tbl-dense__row">
        <td class="nuda-tbl-dense__td nuda-tbl-dense__td--key">api_key</td>
        <td class="nuda-tbl-dense__td">sk-••••••••</td>
        <td class="nuda-tbl-dense__td nuda-tbl-dense__td--type">string</td>
      </tr>
      <tr class="nuda-tbl-dense__row">
        <td class="nuda-tbl-dense__td nuda-tbl-dense__td--key">timeout</td>
        <td class="nuda-tbl-dense__td">5000</td>
        <td class="nuda-tbl-dense__td nuda-tbl-dense__td--type">number</td>
      </tr>
      <tr class="nuda-tbl-dense__row">
        <td class="nuda-tbl-dense__td nuda-tbl-dense__td--key">retries</td>
        <td class="nuda-tbl-dense__td">3</td>
        <td class="nuda-tbl-dense__td nuda-tbl-dense__td--type">number</td>
      </tr>
      <tr class="nuda-tbl-dense__row">
        <td class="nuda-tbl-dense__td nuda-tbl-dense__td--key">debug</td>
        <td class="nuda-tbl-dense__td">false</td>
        <td class="nuda-tbl-dense__td nuda-tbl-dense__td--type">boolean</td>
      </tr>
      <tr class="nuda-tbl-dense__row">
        <td class="nuda-tbl-dense__td nuda-tbl-dense__td--key">region</td>
        <td class="nuda-tbl-dense__td">us-east-1</td>
        <td class="nuda-tbl-dense__td nuda-tbl-dense__td--type">string</td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 8. Hover-Highlight Row ─────────────── */
  {
    id: "table-hover-highlight",
    name: "Hover Highlight Row",
    category: CAT,
    preview: (
      <div className="nuda-tbl-hover">
        <table className="nuda-tbl-hover__table">
          <thead>
            <tr>
              <th className="nuda-tbl-hover__th">File</th>
              <th className="nuda-tbl-hover__th">Size</th>
              <th className="nuda-tbl-hover__th">Modified</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["main.ts", "4.2 KB", "2 min ago"],
              ["styles.css", "1.8 KB", "1 hr ago"],
              ["index.html", "890 B", "Yesterday"],
            ].map(([f, s, m], i) => (
              <tr key={i} className="nuda-tbl-hover__row">
                <td className="nuda-tbl-hover__td nuda-tbl-hover__td--file">
                  <span className="nuda-tbl-hover__icon">📄</span> {f}
                </td>
                <td className="nuda-tbl-hover__td">{s}</td>
                <td className="nuda-tbl-hover__td nuda-tbl-hover__td--muted">{m}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-hover{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-hover__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-hover__th{padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-hover__td{padding:.5rem .75rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.05);transition:background .12s,color .12s}
      .nuda-tbl-hover__row:last-child .nuda-tbl-hover__td{border-bottom:none}
      .nuda-tbl-hover__row{transition:background .12s;cursor:default}
      .nuda-tbl-hover__row:hover .nuda-tbl-hover__td{background:rgba(228,255,84,.07);color:#fafafa}
      .nuda-tbl-hover__td--file{font-weight:500;display:flex;align-items:center;gap:6px}
      .nuda-tbl-hover__td--muted{color:#555;font-size:.72rem}
      .nuda-tbl-hover__icon{font-size:.85rem}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-hover">
  <table class="nuda-tbl-hover__table">
    <thead>
      <tr>
        <th class="nuda-tbl-hover__th">File</th>
        <th class="nuda-tbl-hover__th">Size</th>
        <th class="nuda-tbl-hover__th">Modified</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nuda-tbl-hover__row">
        <td class="nuda-tbl-hover__td nuda-tbl-hover__td--file">
          <span class="nuda-tbl-hover__icon">📄</span> main.ts
        </td>
        <td class="nuda-tbl-hover__td">4.2 KB</td>
        <td class="nuda-tbl-hover__td nuda-tbl-hover__td--muted">2 min ago</td>
      </tr>
      <tr class="nuda-tbl-hover__row">
        <td class="nuda-tbl-hover__td nuda-tbl-hover__td--file">
          <span class="nuda-tbl-hover__icon">📄</span> styles.css
        </td>
        <td class="nuda-tbl-hover__td">1.8 KB</td>
        <td class="nuda-tbl-hover__td nuda-tbl-hover__td--muted">1 hr ago</td>
      </tr>
      <tr class="nuda-tbl-hover__row">
        <td class="nuda-tbl-hover__td nuda-tbl-hover__td--file">
          <span class="nuda-tbl-hover__icon">📄</span> index.html
        </td>
        <td class="nuda-tbl-hover__td">890 B</td>
        <td class="nuda-tbl-hover__td nuda-tbl-hover__td--muted">Yesterday</td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 9. Mini Data Grid with Toolbar ─────────────── */
  {
    id: "table-mini-grid-toolbar",
    name: "Mini Grid with Toolbar",
    category: CAT,
    preview: (
      <div className="nuda-tbl-grid">
        <div className="nuda-tbl-grid__toolbar">
          <span className="nuda-tbl-grid__title">Users</span>
          <div className="nuda-tbl-grid__actions">
            <button className="nuda-tbl-grid__btn">Filter</button>
            <button className="nuda-tbl-grid__btn nuda-tbl-grid__btn--primary">+ Add</button>
          </div>
        </div>
        <table className="nuda-tbl-grid__table">
          <thead>
            <tr>
              <th className="nuda-tbl-grid__th">Name</th>
              <th className="nuda-tbl-grid__th">Email</th>
              <th className="nuda-tbl-grid__th">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nuda-tbl-grid__row">
              <td className="nuda-tbl-grid__td">Felix R.</td>
              <td className="nuda-tbl-grid__td nuda-tbl-grid__td--muted">felix@r.io</td>
              <td className="nuda-tbl-grid__td">Admin</td>
            </tr>
            <tr className="nuda-tbl-grid__row">
              <td className="nuda-tbl-grid__td">Mia L.</td>
              <td className="nuda-tbl-grid__td nuda-tbl-grid__td--muted">mia@l.co</td>
              <td className="nuda-tbl-grid__td">Editor</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-grid{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-grid__toolbar{display:flex;align-items:center;justify-content:space-between;padding:.5rem .75rem;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-grid__title{color:#fafafa;font-size:.78rem;font-weight:600}
      .nuda-tbl-grid__actions{display:flex;gap:.4rem}
      .nuda-tbl-grid__btn{padding:3px 10px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#cfcfcf;font-size:.7rem;cursor:pointer;transition:background .12s,border-color .12s}
      .nuda-tbl-grid__btn:hover{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.25)}
      .nuda-tbl-grid__btn--primary{background:#e4ff54;border-color:#e4ff54;color:#141414;font-weight:600}
      .nuda-tbl-grid__btn--primary:hover{background:#d4ef44;border-color:#d4ef44}
      .nuda-tbl-grid__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-grid__th{padding:.45rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.7rem;text-transform:uppercase;letter-spacing:.06em;border-bottom:1px solid rgba(255,255,255,.08)}
      .nuda-tbl-grid__td{padding:.42rem .75rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-tbl-grid__row:last-child .nuda-tbl-grid__td{border-bottom:none}
      .nuda-tbl-grid__td--muted{color:#555;font-size:.72rem}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-grid">
  <div class="nuda-tbl-grid__toolbar">
    <span class="nuda-tbl-grid__title">Users</span>
    <div class="nuda-tbl-grid__actions">
      <button class="nuda-tbl-grid__btn">Filter</button>
      <button class="nuda-tbl-grid__btn nuda-tbl-grid__btn--primary">+ Add</button>
    </div>
  </div>
  <table class="nuda-tbl-grid__table">
    <thead>
      <tr>
        <th class="nuda-tbl-grid__th">Name</th>
        <th class="nuda-tbl-grid__th">Email</th>
        <th class="nuda-tbl-grid__th">Role</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nuda-tbl-grid__row">
        <td class="nuda-tbl-grid__td">Felix R.</td>
        <td class="nuda-tbl-grid__td nuda-tbl-grid__td--muted">felix@r.io</td>
        <td class="nuda-tbl-grid__td">Admin</td>
      </tr>
      <tr class="nuda-tbl-grid__row">
        <td class="nuda-tbl-grid__td">Mia L.</td>
        <td class="nuda-tbl-grid__td nuda-tbl-grid__td--muted">mia@l.co</td>
        <td class="nuda-tbl-grid__td">Editor</td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 10. Pagination Footer Row ─────────────── */
  {
    id: "table-pagination-footer",
    name: "Pagination Footer",
    category: CAT,
    preview: (
      <div className="nuda-tbl-pgn">
        <table className="nuda-tbl-pgn__table">
          <thead>
            <tr>
              <th className="nuda-tbl-pgn__th">ID</th>
              <th className="nuda-tbl-pgn__th">Event</th>
              <th className="nuda-tbl-pgn__th">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nuda-tbl-pgn__row">
              <td className="nuda-tbl-pgn__td">#1041</td>
              <td className="nuda-tbl-pgn__td">user.login</td>
              <td className="nuda-tbl-pgn__td">09:14</td>
            </tr>
            <tr className="nuda-tbl-pgn__row">
              <td className="nuda-tbl-pgn__td">#1042</td>
              <td className="nuda-tbl-pgn__td">file.upload</td>
              <td className="nuda-tbl-pgn__td">09:22</td>
            </tr>
          </tbody>
        </table>
        <div className="nuda-tbl-pgn__footer">
          <span className="nuda-tbl-pgn__info">Showing 1–2 of 48</span>
          <div className="nuda-tbl-pgn__controls">
            <button className="nuda-tbl-pgn__page nuda-tbl-pgn__page--disabled">‹</button>
            <button className="nuda-tbl-pgn__page nuda-tbl-pgn__page--active">1</button>
            <button className="nuda-tbl-pgn__page">2</button>
            <button className="nuda-tbl-pgn__page">3</button>
            <button className="nuda-tbl-pgn__page">›</button>
          </div>
        </div>
      </div>
    ),
    cssInline: `
      .nuda-tbl-pgn{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-pgn__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-pgn__th{padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-pgn__td{padding:.45rem .75rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-tbl-pgn__row:last-child .nuda-tbl-pgn__td{border-bottom:none}
      .nuda-tbl-pgn__footer{display:flex;align-items:center;justify-content:space-between;padding:.45rem .75rem;background:#1a1a1a;border-top:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-pgn__info{color:#555;font-size:.7rem}
      .nuda-tbl-pgn__controls{display:flex;gap:3px}
      .nuda-tbl-pgn__page{width:24px;height:24px;border-radius:5px;border:1px solid rgba(255,255,255,.1);background:transparent;color:#cfcfcf;font-size:.7rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .12s,color .12s}
      .nuda-tbl-pgn__page:hover{background:rgba(255,255,255,.08)}
      .nuda-tbl-pgn__page--active{background:#e4ff54;border-color:#e4ff54;color:#141414;font-weight:700}
      .nuda-tbl-pgn__page--disabled{opacity:.3;cursor:default;pointer-events:none}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-pgn">
  <table class="nuda-tbl-pgn__table">
    <thead>
      <tr>
        <th class="nuda-tbl-pgn__th">ID</th>
        <th class="nuda-tbl-pgn__th">Event</th>
        <th class="nuda-tbl-pgn__th">Time</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nuda-tbl-pgn__row">
        <td class="nuda-tbl-pgn__td">#1041</td>
        <td class="nuda-tbl-pgn__td">user.login</td>
        <td class="nuda-tbl-pgn__td">09:14</td>
      </tr>
      <tr class="nuda-tbl-pgn__row">
        <td class="nuda-tbl-pgn__td">#1042</td>
        <td class="nuda-tbl-pgn__td">file.upload</td>
        <td class="nuda-tbl-pgn__td">09:22</td>
      </tr>
    </tbody>
  </table>
  <div class="nuda-tbl-pgn__footer">
    <span class="nuda-tbl-pgn__info">Showing 1–2 of 48</span>
    <div class="nuda-tbl-pgn__controls">
      <button class="nuda-tbl-pgn__page nuda-tbl-pgn__page--disabled">‹</button>
      <button class="nuda-tbl-pgn__page nuda-tbl-pgn__page--active">1</button>
      <button class="nuda-tbl-pgn__page">2</button>
      <button class="nuda-tbl-pgn__page">3</button>
      <button class="nuda-tbl-pgn__page">›</button>
    </div>
  </div>
</div>`,
      },
    ],
  },

  /* ─────────────── 11. Inline-Edit Cell ─────────────── */
  {
    id: "table-inline-edit-cell",
    name: "Inline Edit Cell",
    category: CAT,
    preview: (
      <div className="nuda-tbl-edit">
        <table className="nuda-tbl-edit__table">
          <thead>
            <tr>
              <th className="nuda-tbl-edit__th">Field</th>
              <th className="nuda-tbl-edit__th">Value</th>
              <th className="nuda-tbl-edit__th" style={{ width: 60 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nuda-tbl-edit__row">
              <td className="nuda-tbl-edit__td nuda-tbl-edit__td--label">Display name</td>
              <td className="nuda-tbl-edit__td">
                <div className="nuda-tbl-edit__field nuda-tbl-edit__field--editing">
                  <input className="nuda-tbl-edit__input" defaultValue="Alex Johnson" />
                </div>
              </td>
              <td className="nuda-tbl-edit__td">
                <button className="nuda-tbl-edit__save">Save</button>
              </td>
            </tr>
            <tr className="nuda-tbl-edit__row">
              <td className="nuda-tbl-edit__td nuda-tbl-edit__td--label">Username</td>
              <td className="nuda-tbl-edit__td">
                <div className="nuda-tbl-edit__field">
                  <span className="nuda-tbl-edit__value">@alexj</span>
                </div>
              </td>
              <td className="nuda-tbl-edit__td">
                <button className="nuda-tbl-edit__edit">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-edit{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-edit__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-edit__th{padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-edit__td{padding:.4rem .75rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.05);vertical-align:middle}
      .nuda-tbl-edit__row:last-child .nuda-tbl-edit__td{border-bottom:none}
      .nuda-tbl-edit__td--label{color:#777;font-size:.72rem}
      .nuda-tbl-edit__field{display:flex;align-items:center}
      .nuda-tbl-edit__field--editing{background:rgba(228,255,84,.05);border-radius:5px;border:1px solid rgba(228,255,84,.3);overflow:hidden}
      .nuda-tbl-edit__input{background:transparent;border:none;outline:none;color:#fafafa;font-size:.78rem;padding:4px 8px;width:100%;font-family:inherit}
      .nuda-tbl-edit__value{color:#cfcfcf}
      .nuda-tbl-edit__save{padding:3px 10px;border-radius:5px;background:#e4ff54;border:none;color:#141414;font-size:.68rem;font-weight:700;cursor:pointer;transition:opacity .12s}
      .nuda-tbl-edit__save:hover{opacity:.85}
      .nuda-tbl-edit__edit{padding:3px 10px;border-radius:5px;background:transparent;border:1px solid rgba(255,255,255,.15);color:#777;font-size:.68rem;cursor:pointer;transition:border-color .12s,color .12s}
      .nuda-tbl-edit__edit:hover{border-color:rgba(255,255,255,.3);color:#cfcfcf}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-edit">
  <table class="nuda-tbl-edit__table">
    <thead>
      <tr>
        <th class="nuda-tbl-edit__th">Field</th>
        <th class="nuda-tbl-edit__th">Value</th>
        <th class="nuda-tbl-edit__th">Action</th>
      </tr>
    </thead>
    <tbody>
      <!-- Active editing row -->
      <tr class="nuda-tbl-edit__row">
        <td class="nuda-tbl-edit__td nuda-tbl-edit__td--label">Display name</td>
        <td class="nuda-tbl-edit__td">
          <div class="nuda-tbl-edit__field nuda-tbl-edit__field--editing">
            <input class="nuda-tbl-edit__input" value="Alex Johnson" />
          </div>
        </td>
        <td class="nuda-tbl-edit__td">
          <button class="nuda-tbl-edit__save">Save</button>
        </td>
      </tr>
      <!-- Read-only row -->
      <tr class="nuda-tbl-edit__row">
        <td class="nuda-tbl-edit__td nuda-tbl-edit__td--label">Username</td>
        <td class="nuda-tbl-edit__td">
          <div class="nuda-tbl-edit__field">
            <span class="nuda-tbl-edit__value">@alexj</span>
          </div>
        </td>
        <td class="nuda-tbl-edit__td">
          <button class="nuda-tbl-edit__edit">Edit</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 12. Empty Table State ─────────────── */
  {
    id: "table-empty-state",
    name: "Empty Table State",
    category: CAT,
    preview: (
      <div className="nuda-tbl-empty">
        <table className="nuda-tbl-empty__table">
          <thead>
            <tr>
              <th className="nuda-tbl-empty__th">Transaction</th>
              <th className="nuda-tbl-empty__th">Amount</th>
              <th className="nuda-tbl-empty__th">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="nuda-tbl-empty__placeholder" colSpan={3}>
                <div className="nuda-tbl-empty__body">
                  <div className="nuda-tbl-empty__icon">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <rect x="4" y="8" width="24" height="18" rx="3" stroke="rgba(255,255,255,.15)" strokeWidth="1.5" fill="none" />
                      <line x1="4" y1="13" x2="28" y2="13" stroke="rgba(255,255,255,.15)" strokeWidth="1.5" />
                      <line x1="10" y1="18" x2="22" y2="18" stroke="rgba(255,255,255,.1)" strokeWidth="1.5" strokeLinecap="round" />
                      <line x1="12" y1="22" x2="20" y2="22" stroke="rgba(255,255,255,.08)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <p className="nuda-tbl-empty__title">No transactions yet</p>
                  <p className="nuda-tbl-empty__sub">Your activity will appear here</p>
                  <button className="nuda-tbl-empty__cta">+ New transaction</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-empty{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-empty__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-empty__th{padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-empty__placeholder{padding:0;text-align:center}
      .nuda-tbl-empty__body{display:flex;flex-direction:column;align-items:center;padding:1.5rem 1rem;gap:.35rem}
      .nuda-tbl-empty__icon{opacity:.6;margin-bottom:.25rem}
      .nuda-tbl-empty__title{color:#cfcfcf;font-size:.82rem;font-weight:600;margin:0}
      .nuda-tbl-empty__sub{color:#555;font-size:.72rem;margin:0}
      .nuda-tbl-empty__cta{margin-top:.5rem;padding:5px 14px;border-radius:7px;background:#e4ff54;border:none;color:#141414;font-size:.72rem;font-weight:700;cursor:pointer;transition:opacity .12s}
      .nuda-tbl-empty__cta:hover{opacity:.85}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-empty">
  <table class="nuda-tbl-empty__table">
    <thead>
      <tr>
        <th class="nuda-tbl-empty__th">Transaction</th>
        <th class="nuda-tbl-empty__th">Amount</th>
        <th class="nuda-tbl-empty__th">Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="nuda-tbl-empty__placeholder" colspan="3">
          <div class="nuda-tbl-empty__body">
            <div class="nuda-tbl-empty__icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="8" width="24" height="18" rx="3" stroke="rgba(255,255,255,.15)" stroke-width="1.5" fill="none"/>
                <line x1="4" y1="13" x2="28" y2="13" stroke="rgba(255,255,255,.15)" stroke-width="1.5"/>
                <line x1="10" y1="18" x2="22" y2="18" stroke="rgba(255,255,255,.1)" stroke-width="1.5" stroke-linecap="round"/>
                <line x1="12" y1="22" x2="20" y2="22" stroke="rgba(255,255,255,.08)" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <p class="nuda-tbl-empty__title">No transactions yet</p>
            <p class="nuda-tbl-empty__sub">Your activity will appear here</p>
            <button class="nuda-tbl-empty__cta">+ New transaction</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 13. Loading Skeleton Rows ─────────────── */
  {
    id: "table-skeleton-rows",
    name: "Loading Skeleton Rows",
    category: CAT,
    preview: (
      <div className="nuda-tbl-skel">
        <table className="nuda-tbl-skel__table">
          <thead>
            <tr>
              <th className="nuda-tbl-skel__th">Name</th>
              <th className="nuda-tbl-skel__th">Role</th>
              <th className="nuda-tbl-skel__th">Joined</th>
            </tr>
          </thead>
          <tbody>
            {[70, 50, 85, 60].map((w, i) => (
              <tr key={i} className="nuda-tbl-skel__row">
                <td className="nuda-tbl-skel__td">
                  <span className="nuda-tbl-skel__bar" style={{ width: `${w}%` }} />
                </td>
                <td className="nuda-tbl-skel__td">
                  <span className="nuda-tbl-skel__bar" style={{ width: "55%" }} />
                </td>
                <td className="nuda-tbl-skel__td">
                  <span className="nuda-tbl-skel__bar" style={{ width: "40%" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-skel{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-skel__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-skel__th{padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-skel__td{padding:.48rem .75rem;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-tbl-skel__row:last-child .nuda-tbl-skel__td{border-bottom:none}
      .nuda-tbl-skel__bar{display:block;height:10px;border-radius:5px;background:linear-gradient(90deg,rgba(255,255,255,.06) 25%,rgba(255,255,255,.12) 50%,rgba(255,255,255,.06) 75%);background-size:200% 100%;animation:_nuda-tblshimmer 1.4s linear infinite}
      @keyframes _nuda-tblshimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}
      @media(prefers-reduced-motion:reduce){.nuda-tbl-skel__bar{animation:none;background:rgba(255,255,255,.08)}}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-skel">
  <table class="nuda-tbl-skel__table">
    <thead>
      <tr>
        <th class="nuda-tbl-skel__th">Name</th>
        <th class="nuda-tbl-skel__th">Role</th>
        <th class="nuda-tbl-skel__th">Joined</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nuda-tbl-skel__row">
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:70%"></span></td>
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:55%"></span></td>
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:40%"></span></td>
      </tr>
      <tr class="nuda-tbl-skel__row">
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:50%"></span></td>
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:55%"></span></td>
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:40%"></span></td>
      </tr>
      <tr class="nuda-tbl-skel__row">
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:85%"></span></td>
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:55%"></span></td>
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:40%"></span></td>
      </tr>
      <tr class="nuda-tbl-skel__row">
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:60%"></span></td>
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:55%"></span></td>
        <td class="nuda-tbl-skel__td"><span class="nuda-tbl-skel__bar" style="width:40%"></span></td>
      </tr>
    </tbody>
  </table>
</div>`,
      },
    ],
  },

  /* ─────────────── 14. Totals / Footer Row ─────────────── */
  {
    id: "table-totals-footer",
    name: "Totals Footer Row",
    category: CAT,
    preview: (
      <div className="nuda-tbl-totals">
        <table className="nuda-tbl-totals__table">
          <thead>
            <tr>
              <th className="nuda-tbl-totals__th">Item</th>
              <th className="nuda-tbl-totals__th nuda-tbl-totals__th--right">Qty</th>
              <th className="nuda-tbl-totals__th nuda-tbl-totals__th--right">Price</th>
              <th className="nuda-tbl-totals__th nuda-tbl-totals__th--right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="nuda-tbl-totals__row">
              <td className="nuda-tbl-totals__td">Nexus S</td>
              <td className="nuda-tbl-totals__td nuda-tbl-totals__td--right">2</td>
              <td className="nuda-tbl-totals__td nuda-tbl-totals__td--right">$24.99</td>
              <td className="nuda-tbl-totals__td nuda-tbl-totals__td--right">$49.98</td>
            </tr>
            <tr className="nuda-tbl-totals__row">
              <td className="nuda-tbl-totals__td">Orbit Pro</td>
              <td className="nuda-tbl-totals__td nuda-tbl-totals__td--right">1</td>
              <td className="nuda-tbl-totals__td nuda-tbl-totals__td--right">$49.99</td>
              <td className="nuda-tbl-totals__td nuda-tbl-totals__td--right">$49.99</td>
            </tr>
            <tr className="nuda-tbl-totals__row">
              <td className="nuda-tbl-totals__td">Velo X</td>
              <td className="nuda-tbl-totals__td nuda-tbl-totals__td--right">3</td>
              <td className="nuda-tbl-totals__td nuda-tbl-totals__td--right">$19.99</td>
              <td className="nuda-tbl-totals__td nuda-tbl-totals__td--right">$59.97</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="nuda-tbl-totals__foot">
              <td className="nuda-tbl-totals__foot-td" colSpan={3}>Total</td>
              <td className="nuda-tbl-totals__foot-td nuda-tbl-totals__foot-td--amount">$159.94</td>
            </tr>
          </tfoot>
        </table>
      </div>
    ),
    cssInline: `
      .nuda-tbl-totals{width:100%;border-radius:10px;border:1px solid rgba(255,255,255,.1);overflow:hidden;background:#141414}
      .nuda-tbl-totals__table{width:100%;border-collapse:collapse;font-size:.78rem}
      .nuda-tbl-totals__th{padding:.5rem .75rem;text-align:left;color:#777;font-weight:600;font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;background:#1a1a1a;border-bottom:1px solid rgba(255,255,255,.1)}
      .nuda-tbl-totals__th--right{text-align:right}
      .nuda-tbl-totals__td{padding:.45rem .75rem;color:#cfcfcf;border-bottom:1px solid rgba(255,255,255,.05)}
      .nuda-tbl-totals__td--right{text-align:right;font-variant-numeric:tabular-nums}
      .nuda-tbl-totals__row:last-child .nuda-tbl-totals__td{border-bottom:none}
      .nuda-tbl-totals__foot{background:#1a1a1a;border-top:1px solid rgba(255,255,255,.15)}
      .nuda-tbl-totals__foot-td{padding:.5rem .75rem;color:#fafafa;font-weight:600;font-size:.78rem}
      .nuda-tbl-totals__foot-td--amount{text-align:right;color:#e4ff54;font-size:.88rem;font-variant-numeric:tabular-nums;letter-spacing:.01em}
    `,
    code: [
      {
        label: "HTML",
        language: "html",
        code: `<div class="nuda-tbl-totals">
  <table class="nuda-tbl-totals__table">
    <thead>
      <tr>
        <th class="nuda-tbl-totals__th">Item</th>
        <th class="nuda-tbl-totals__th nuda-tbl-totals__th--right">Qty</th>
        <th class="nuda-tbl-totals__th nuda-tbl-totals__th--right">Price</th>
        <th class="nuda-tbl-totals__th nuda-tbl-totals__th--right">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr class="nuda-tbl-totals__row">
        <td class="nuda-tbl-totals__td">Nexus S</td>
        <td class="nuda-tbl-totals__td nuda-tbl-totals__td--right">2</td>
        <td class="nuda-tbl-totals__td nuda-tbl-totals__td--right">$24.99</td>
        <td class="nuda-tbl-totals__td nuda-tbl-totals__td--right">$49.98</td>
      </tr>
      <tr class="nuda-tbl-totals__row">
        <td class="nuda-tbl-totals__td">Orbit Pro</td>
        <td class="nuda-tbl-totals__td nuda-tbl-totals__td--right">1</td>
        <td class="nuda-tbl-totals__td nuda-tbl-totals__td--right">$49.99</td>
        <td class="nuda-tbl-totals__td nuda-tbl-totals__td--right">$49.99</td>
      </tr>
      <tr class="nuda-tbl-totals__row">
        <td class="nuda-tbl-totals__td">Velo X</td>
        <td class="nuda-tbl-totals__td nuda-tbl-totals__td--right">3</td>
        <td class="nuda-tbl-totals__td nuda-tbl-totals__td--right">$19.99</td>
        <td class="nuda-tbl-totals__td nuda-tbl-totals__td--right">$59.97</td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="nuda-tbl-totals__foot">
        <td class="nuda-tbl-totals__foot-td" colspan="3">Total</td>
        <td class="nuda-tbl-totals__foot-td nuda-tbl-totals__foot-td--amount">$159.94</td>
      </tr>
    </tfoot>
  </table>
</div>`,
      },
    ],
  },
];
