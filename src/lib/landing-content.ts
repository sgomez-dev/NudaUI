/**
 * Homepage copy, lifted out of the landing components.
 *
 * The homepage now has two representations — HTML for browsers, Markdown for
 * `Accept: text/markdown` — and they must say the same thing. Keeping the
 * copy here means editing it once. The components still own their icons and
 * layout; this module owns the words.
 */

/** The six feature cards. `key` maps to a Lucide icon in `<FeaturesGrid />`. */
export const featureCards: {
  key: string;
  label: string;
  title: string;
  body: string;
}[] = [
  {
    key: "weightless",
    label: "Weightless",
    title: "Typically under 1kb.",
    body: "Single-file snippets with no runtime. Drop them in and forget the bundle size conversation.",
  },
  {
    key: "portable",
    label: "Portable",
    title: "Works everywhere HTML works.",
    body: "React, Vue, Svelte, Astro, Blade, Jinja, plain HTML. If it renders markup, it runs NudaUI.",
  },
  {
    key: "accessible",
    label: "Accessible",
    title: "Respects the user.",
    body: "Semantic HTML, ARIA attributes and prefers-reduced-motion shipped by default, not added later.",
  },
  {
    key: "readable",
    label: "Readable",
    title: "Code you can actually debug.",
    body: "No transpiled blobs, no minified monsters. The source is the same code you paste.",
  },
  {
    key: "unopinionated",
    label: "Unopinionated",
    title: "Your design system, your rules.",
    body: "Tokens, not themes. Restyle anything with CSS variables — we don't ship a brand for you.",
  },
  {
    key: "crafted",
    label: "Crafted",
    title: "Easing curves, not defaults.",
    body: "Every animation is hand-tuned. No bouncing for the sake of bouncing. No motion for motion's sake.",
  },
];

/** The "We have opinions." manifesto. */
export const manifestoPoints: { title: string; body: string }[] = [
  {
    title: "Framework lock-in is a tax on your time.",
    body: "Every animation library ties you to React, Vue, or whatever's trending. Switch frameworks? Rewrite everything. NudaUI animations are just HTML and CSS — they outlive your framework choices.",
  },
  {
    title: "200kb for a loading spinner is insane.",
    body: "Most animation libraries ship entire runtime engines. Our components are typically under 1kb each. No JavaScript runtime. No bundle size anxiety. Just CSS keyframes that browsers already know how to optimize.",
  },
  {
    title: "Backend developers deserve nice things too.",
    body: "If you write Go, PHP, Python, or Rust — you've been left out of the animation conversation. Server-rendered templates don't need React. Blade, Jinja, ERB can all use NudaUI with zero configuration.",
  },
  {
    title: "Accessible from day one, not as an afterthought.",
    body: "Every component ships with ARIA attributes, prefers-reduced-motion support, and semantic HTML. Accessibility isn't a feature — it's the baseline.",
  },
];

/** The three-step "Browse → Copy → Paste" flow. */
export const howItWorksSteps: {
  n: string;
  label: string;
  title: string;
  body: string;
  code: string;
}[] = [
  {
    n: "01",
    label: "Browse",
    title: "Find the animation you actually need.",
    body: "A curated gallery — not 400 variations of the same spinner. Preview, tweak speed, compare side by side.",
    code: "→ nudaui.dev/components",
  },
  {
    n: "02",
    label: "Copy",
    title: "Grab the snippet. That's the whole install.",
    body: "One file, zero imports, one click. What you copy is what you ship. No hidden peer deps, no build configuration.",
    code: "⌘  Copy to clipboard",
  },
  {
    n: "03",
    label: "Paste",
    title: "Paste into any stack that renders HTML.",
    body: "Next, Nuxt, Laravel, Django, a <script> tag on a static page — it doesn't matter. It works on the first try.",
    code: '<div class="nuda-pulse" />',
  },
];
