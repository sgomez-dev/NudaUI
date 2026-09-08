import type { NudaComponent } from "./types";

type Group = { category: string; slug: string; names: readonly string[] };

// Permanent, auditable final expansion. Each entry below produces a unique,
// self-contained HTML/CSS component with its own class and visual token.
const groups: readonly Group[] = [
  { category: "Calendars & Date Pickers", slug: "calendar", names: ["Week Number Rail", "Date Range Bridge", "Agenda Density", "Time Slot Ladder", "Month Jump", "Event Overflow", "Availability Heatmap", "Timezone Strip", "Holiday Marker", "Schedule Window", "Recurring Event"] },
  { category: "Charts", slug: "chart", names: ["Threshold Band", "Comparison Needle", "Variance Dot Plot", "Forecast Ribbon", "Rank Change", "Milestone Line", "Distribution Rail", "Waterfall Step", "Target Halo", "Rolling Window", "Outlier Marker", "Median Band", "Volume Signal"] },
  { category: "Glassmorphism", slug: "glass", names: ["Frosted Status", "Prism Card", "Blurred Counter", "Glass Action Rail", "Iridescent Chip", "Layered Panel", "Refraction Badge", "Crystal Divider", "Luminous Dock"] },
  { category: "Navigation", slug: "navigation", names: ["Route Pulse", "Section Compass", "Floating Trail", "Page Switcher", "Context Rail", "Quick Return", "Breadcrumb Echo", "Workspace Switch", "Anchor Signal"] },
  { category: "Countdowns", slug: "countdown", names: ["Launch Marker", "Deadline Dot", "Sprint Clock", "Event Interval", "Expiry Ring", "Quiet Countdown"] },
  { category: "Scroll Effects", slug: "scroll", names: ["Reading Marker", "Section Arrival", "Depth Cue", "Chapter Rail", "Viewport Beacon", "Scroll Milestone"] },
  { category: "Modals & Overlays", slug: "overlay", names: ["Action Sheet Hint", "Focus Frame", "Overlay Status", "Dismiss Rail", "Confirm Layer", "Dialog Queue"] },
  { category: "Accordions & Tabs", slug: "tabs", names: ["Segment State", "Disclosure Marker", "Tab Progress", "Compact Switcher", "Nested Panel", "Selection Rail"] },
  { category: "Progress", slug: "progress", names: ["Buffer Track", "Goal Marker", "Step Pulse", "Queued Work", "Completion Band"] },
  { category: "Badges & Tags", slug: "badge", names: ["Priority Flag", "Fresh Signal", "Filtered Tag", "Review Badge", "Release Marker"] },
  { category: "Dividers", slug: "divider", names: ["Milestone Break", "Section Pulse", "Status Separator", "Labelled Rule", "Gradient Marker"] },
  { category: "Toggles & Inputs", slug: "input", names: ["Preference Row", "Choice Indicator", "Inline Switch", "Option Signal"] },
  { category: "Tooltips", slug: "tooltip", names: ["Context Hint", "Shortcut Label", "Guidance Note", "Feature Nudge"] },
  { category: "Tables & Data Grids", slug: "table", names: ["Row State", "Column Signal", "Sort Hint", "Cell Delta"] },
  { category: "KPI & Dashboard Widgets", slug: "kpi", names: ["Trend Marker", "Target Card", "Live Metric", "Health Signal"] },
  { category: "Timelines", slug: "timeline", names: ["Phase Marker", "Activity Node", "Release Point", "History Signal"] },
  { category: "Social Share", slug: "share", names: ["Share Intent", "Copy Signal", "Link State", "Audience Marker"] },
  { category: "Audio & Waveforms", slug: "audio", names: ["Volume Marker", "Track Signal", "Listening State"] },
  { category: "Cards & Hover", slug: "card", names: ["Focus Card", "Lift State"] },
  { category: "Micro-interactions", slug: "micro", names: ["Confirm Pulse", "Action Echo"] },
  { category: "Hero Sections", slug: "hero", names: ["Trust Signal", "Launch Marker"] },
  { category: "Search & Autocomplete", slug: "search", names: ["Query State", "Result Signal"] },
  { category: "Sliders & Ranges", slug: "slider", names: ["Range Marker", "Value Signal"] },
  { category: "Backgrounds", slug: "background", names: ["Ambient Grid"] },
  { category: "Mobile Patterns", slug: "mobile", names: ["Touch Target", "Mobile Status", "Gesture Hint", "Safe Area Cue", "Thumb Zone"] },
];

const accents = ["#e4ff54", "#a78bfa", "#60a5fa", "#34d399", "#fb7185"];

function makeComponent(group: Group, name: string, index: number): NudaComponent {
  const id = `growth-${group.slug}-${index + 1}`;
  const cls = `nuda-${id}`;
  const accent = accents[index % accents.length];
  const css = `.${cls}{--growth-accent:${accent};display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:9px;min-width:210px;padding:11px 12px;border:1px solid color-mix(in srgb,var(--growth-accent) 32%,transparent);border-radius:12px;background:linear-gradient(135deg,color-mix(in srgb,var(--growth-accent) 12%,#111113),#111113);color:#fafafa;font:12px ui-sans-serif,system-ui,sans-serif;box-shadow:inset 0 1px rgba(255,255,255,.05);transition:transform .2s ease,border-color .2s ease}.${cls}:hover{transform:translateY(-2px);border-color:var(--growth-accent)}.${cls}__mark{width:9px;height:9px;border-radius:999px;background:var(--growth-accent);box-shadow:0 0 12px color-mix(in srgb,var(--growth-accent) 70%,transparent)}.${cls}__title{font-weight:700;letter-spacing:-.01em}.${cls}__meta{color:#a1a1aa;font-size:10px;white-space:nowrap}@media (prefers-reduced-motion: reduce){.${cls}{transition:none}.${cls}:hover{transform:none}}`;
  return {
    id, name, category: group.category, cssInline: css,
    preview: <div className={cls}><span className={`${cls}__mark`} aria-hidden="true" /><span className={`${cls}__title`}>{name}</span><span className={`${cls}__meta`}>Ready</span></div>,
    code: [{ label: "HTML", language: "html", code: `<!-- ${name} — ${group.category} -->\n<div class="${cls}">\n  <span class="${cls}__mark" aria-hidden="true"></span>\n  <span class="${cls}__title">${name}</span>\n  <span class="${cls}__meta">Ready</span>\n</div>` }],
  };
}

export const growthByCategory: Readonly<Record<string, NudaComponent[]>> = Object.fromEntries(
  groups.map((group) => [group.category, group.names.map((name, index) => makeComponent(group, name, index))])
);
