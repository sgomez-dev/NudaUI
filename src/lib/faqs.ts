/**
 * Shared FAQ content — consumed by both the rendered <FAQ /> section and the
 * homepage JSON-LD FAQPage schema so the on-page copy and the structured data
 * never drift apart.
 */

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Is NudaUI really dependency-free?",
    a: "Yes. Components are pure HTML and CSS, with a tiny sprinkle of vanilla JS only when a component genuinely needs interactivity. You'll never see peerDependencies, a runtime engine, or a mandatory bundler step.",
  },
  {
    q: "Can I use it with React / Vue / Svelte / Astro?",
    a: "Any framework that renders markup. The snippets are plain JSX-safe HTML — no component bindings, no framework-specific imports. If you can paste a <div>, you can paste a NudaUI animation.",
  },
  {
    q: "What about backend templating engines?",
    a: "Blade, Jinja, ERB, Twig, Razor, Go templates — all fine. That's the whole point. The markup is the product, and markup is universal.",
  },
  {
    q: "How do I theme it to match my design system?",
    a: "Components read CSS custom properties for color, radius, and timing. Override the variables at :root (or on any parent) and the animations inherit your tokens automatically. No build step, no Tailwind config fork.",
  },
  {
    q: "Do the animations respect prefers-reduced-motion?",
    a: "Every component. Motion-heavy animations gracefully downgrade to a static or near-static state when the user has requested reduced motion. Accessibility is a requirement, not a config flag.",
  },
  {
    q: "Is it free? What's the catch?",
    a: "Free, open source, MIT. No accounts, no usage tracking, no pro tier locked behind a paywall. If you ship with NudaUI, a link back is appreciated — never required.",
  },
];
