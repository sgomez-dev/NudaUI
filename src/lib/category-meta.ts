/**
 * Per-category prose descriptions, used everywhere the registry's `label`
 * isn't expressive enough — JSON-LD payloads, llms.txt, sitemap captions,
 * and any future search excerpts.
 *
 * Keep each entry one or two sentences. Lead with the user intent, follow
 * with one concrete pattern, finish with a tag if it helps disambiguate.
 * These strings are crawled by both classic search engines and LLM
 * grounding pipelines, so write them like you'd write a meta description:
 * direct, keyword-rich, no fluff.
 */
export const categoryDescriptions: Record<string, string> = {
  loaders:
    "Loading state animations — pulse dots, orbits, ripples, bars, waves. Used while async work is in flight to signal progress without committing to a percentage.",
  spinners:
    "Pure-CSS spinner variants — ring, dual ring, conic, segmented, gradient. Lightweight indeterminate progress for buttons, dialogs, and inline contexts.",
  progress:
    "Determinate progress indicators — linear, radial, segmented, striped, gradient fill. Use when you can express completion as a percentage.",
  skeletons:
    "Skeleton placeholders and shimmer loaders — generic blocks plus domain-specific shapes (message, card, list row, table, comment, feed, article, dashboard). Reserve layout while data loads to kill layout shift and avoid empty white screens.",
  "text-effects":
    "Typography-driven animations — scramble, typewriter, letter reveal, gradient sweep, glitch. Hero headlines, on-scroll reveals, marketing copy.",
  buttons:
    "Animated button states — magnetic hover, liquid morph, border beam, ripple, shine. Conversion-focused micro-interactions for CTAs.",
  "toggles-inputs":
    "Switches, checkboxes, radios, OTP fields. Stateful form controls with morphing transitions between on/off and indeterminate states.",
  "cards-hover":
    "Card hover behaviors — 3D tilt, glow, lift, flip, traced borders. Drop-in patterns for product grids, feature cards, link cards.",
  indicators:
    "Status, presence, and signal indicators — pulse dots, live badges, status rings, signal bars. For uptime, online state, real-time data.",
  "micro-interactions":
    "Tiny, purposeful animations — like burst, copy-check, pulse badge, shake on error. The small details that make an interface feel responsive.",
  backgrounds:
    "Animated background fills — aurora, mesh gradients, grid pulse, noise grain, gradient flow. Hero backdrops without WebGL or video tags.",
  "borders-outlines":
    "Animated borders and outlines — traced borders, dashed flow, glow rings, gradient beams. Highlight CTAs, focus states, premium tiers.",
  avatars:
    "User avatar treatments — status rings, presence dots, stacked groups, shimmer placeholders. Inline user identity at any size.",
  "badges-tags":
    "Display-only pill labels and status tags — New, Beta, count, gradient, animated pulse. Read-only chips for versioning, feature flags, and taxonomy. For a text input that lets users add/remove their own tags, see Tags & Chips Input.",
  navigation:
    "Top-nav and inline nav patterns — underline slide, pill indicator, animated tabs, dropdown reveal. Pointer-driven navigation primitives.",
  notifications:
    "Toasts, banners, snackbars, and inline alerts — transient, auto-dismissing system messages that slide in and out. For a persistent inbox of past notifications, see Notification Center.",
  tooltips:
    "Hover and focus tooltips — arrow, fade, slide, glass effect. Contextual help that appears on demand and disappears cleanly.",
  dividers:
    "Animated separators — gradient lines, pulsing dots, drawn waves and zigzags, sparkle. Section breaks with personality.",
  cursors:
    "Custom cursor effects — dot follower, magnetic snap, trail, mix-blend. Pointer-driven enhancements for marketing sites and portfolios.",
  countdowns:
    "Time-bound counters — flip cards, digit roll, rings, segmented displays. For launches, deadlines, sales, and scheduled events.",
  "scroll-effects":
    "Scroll-driven animations — fade in, parallax layers, reveal on intersect, top-of-page progress bar. Built on IntersectionObserver and CSS scroll-timeline.",
  "three-d":
    "3D transforms in pure CSS — card flip, perspective hover, depth layering, cube. No WebGL, no Three.js — just transform-style: preserve-3d.",
  "modals-overlays":
    "Modal dialogs, overlays, and drawers — scale in, slide, backdrop blur, side drawer. Focus-trapping shells with motion that telegraphs intent.",
  "accordions-tabs":
    "Disclosure widgets — chevron rotate, plus-minus morph, animated tab transitions, stacked accordion. Progressive disclosure done right.",
  marquees:
    "Infinite scrolling tickers — linear, pause-on-hover, vertical, gradient-masked edges. Logo clouds, news bars, social proof reels.",
  "empty-states":
    "Empty state illustrations — empty box, inbox, search, ghost, pulse. The screens users see before there's anything to see, designed to delight.",
  charts:
    "Lightweight CSS-driven charts — bar, line, donut, sparkline, gauge, heatmap, area, pie, KPI. For dashboards that don't justify a charting library.",
  particles:
    "Decorative particle systems — confetti, sparkles, fireflies, snow, rain, fireworks, bubbles, stars, comet. Celebratory and ambient effects.",
  "stats-counters":
    "Stat blocks and counters — count up, trend cards, score rings, streak displays, achievement unlocks. Numbers worth animating.",
  "form-states":
    "Form interaction states — float labels, expanding search, password strength, OTP, validation, shake, range, step indicator, async submit.",
  "image-effects":
    "Image-level animations — hover zoom, Ken Burns, blur to focus, color drain, mask reveal, tilt, scan line, glitch, lightbox, frame reveal.",
  "ai-chat":
    "AI and chat UI primitives — streaming dots, streaming text, chat bubbles, thinking shimmer, prompt composer, citations, token counter, model selector.",
  "drag-drop":
    "Drag and drop interactions — drop zones, file cards, sortable lists, drop indicators, trash zones, drag previews, multi-file uploads, reorder grids.",
  "command-palette":
    "Command palette UIs — Cmd-K trigger, spotlight, result items, group headers, no-results state, recent items, footer hints, match highlight.",
  "theme-toggle":
    "Light/dark theme switchers — sun-moon morph, switch, circle reveal, three-state, color schemes, dropdown, system indicator.",
  "hero-sections":
    "Above-the-fold hero patterns — centered, split, mesh gradient, word reveal, stat row, avatar stack, floating cards, newsletter, scroll indicator.",
  pricing:
    "Pricing table animations — card hover, popular tier highlight, billing toggle, price morph, feature list, savings badge, comparison rows, discount countdowns.",
  "video-player":
    "Custom video player UI — play-pause morph, scrubber, volume, buffer indicator, big play button, controls reveal, speed selector, captions toggle.",
  onboarding:
    "Onboarding and coachmark patterns — spotlight, tour tooltip, step counter, welcome modal, feature pulse, coach arrow, skip button, confetti finale, checklist.",
  "code-terminal":
    "Code and terminal UI — terminal cursor, typing code, copy button, file tree, tab bar, syntax reveal, error squiggle, run button, command output, diff highlight.",
  footers:
    "Site footer patterns — minimal, newsletter signup, mega grid, aurora glow, status pill, sticky cookie bar, marquee, big brand mark, social stack, back-to-top.",
  auth:
    "Login, sign-up, and auth-flow components — sign-in card with float labels, OAuth buttons, OTP input, password reveal, magic link, strength meter, biometric prompt, verify email, loading button.",
  calendars:
    "Calendar and date-picker primitives — mini calendar, date range, popover trigger, time wheel, activity heatmap, month switcher, event pill, day timeline, countdown pill, schedule card.",
  sidebars:
    "Sidebars, rails, and docks — collapsible sidebar, macOS-style dock, drawer slide, FAB action menu, vertical rail, workspace switcher, file tree, mobile bottom nav, hover-reveal, glass floating.",
  steppers:
    "Multi-step flows and wizards — linear stepper, vertical stepper, progress wizard, numbered, onboarding carousel, wizard tabs, SVG trace connector, card slide, done step, step pill indicator.",
  "search-autocomplete":
    "Search inputs and autocomplete primitives — expanding search, autocomplete dropdown, match highlight, recent searches, voice search, search loading, no-results state, Cmd-K trigger, clearable input, filter chips, type-ahead, async shimmer, spotlight modal, sticky search header, staggered results, search history pills.",
  "sliders-ranges":
    "Slider and range controls — single-value, dual-handle range, value bubble, vertical, stepped with ticks, animated gradient fill, histogram range, snap-to-step, hue picker, rotary knob, brightness slider, price range, slider + number input, drag-active thumb halo, curve preview, frequency bars.",
  "audio-waveforms":
    "Audio player UI and waveform visualizers — equalizer bars, voice activity meter, soundwave pulse, waveform scrubber, vinyl record spin, mic recording, circular visualizer, now-playing card, amplitude rings, play/pause morph, mute toggle, loop indicator, spectrum analyzer, track progress with waveform, audio buffering.",
  "color-pickers":
    "Color selection primitives for design tools, theme builders and dashboards — swatch grid, gradient picker, hue ring, eye-dropper trigger, hex input, palette generator, recents, contrast pair with AA/AAA badges, color chip with copy, saturation/lightness sliders.",
  "galleries-carousels":
    "Image gallery and carousel patterns — horizontal carousel with dots, swipe indicator, lightbox open, thumbnail strip, masonry hover lift, 3D image fan, before/after comparison slider, polaroid stack, hover zoom with caption reveal, filter morph tabs.",
  "maps-locations":
    "Map and location UI — pin drop bounce, marker pulse, route trace, distance line with chip, geo-locating spinner, cluster expand, popup card, location search with use-my-location, compass needle, mini-map with viewport.",
  "watch-faces":
    "Clock and watch face designs — analog clock, digital readout, flip clock, pomodoro ring, stopwatch, world clock card, alarm bells, countdown ring, Swiss railway, military 24h, weather clock, day/night, sand hourglass, word clock, pulse heart, binary clock, sundial.",
  "quotes-testimonials":
    "Customer testimonial and pull-quote patterns — pull quote, testimonial card, star rating card, signature reveal, logo + quote strip, video testimonial, rating distribution, marquee testimonials, carousel, before/after, gradient border quote, animated stars, verified customer, masonry grid, spotlight quote, stat quote, floating card, inline quote link.",
  "comments-reactions":
    "Comment thread and reaction UI — comment thread, nested reply, emoji picker, emoji burst, like button heart, dislike thumb, share, reply input expand, mentions chip, reaction count badge, reaction bar, comment skeleton, pinned comment, highlighted reply, reaction stack, thumbs up counter, quote reply, emoji hover preview.",
  "profile-headers":
    "User profile header patterns — bio card, banner + avatar, stat row, social links bar, edit profile button, level XP ring, verified checkmark, status presence, follow button toggle, follower count tick-up, pronouns pill, compact profile pill, skeleton loader, hero profile, member since badge, achievements strip, hover card, bio reveal.",
  "settings-preferences":
    "Settings and preferences UI — preference row toggle, settings card group, theme selector, notification preferences, account section, danger zone, save indicator, search settings input, two-column setting, accessibility section, connected apps, plan tier card, email verification, language picker, time zone picker, privacy row, sound preferences, reset to defaults.",
  "file-upload":
    "File upload lifecycle UI — drop zone idle and active states, file list item, upload progress bar, file type icons, image thumbnail preview, error state, multi-file count pill, file size pill, success checkmark, cancel upload, total progress, validation error, click-to-browse, paste hint, upload queue, file replaced, empty state.",
  "multi-chips":
    "Interactive tag/chip INPUT — users type to add chips and click to remove them: chip input add, remove animation, autocomplete dropdown, max-count, multi-select combobox, removable filter chips, drag reorder, validation. For read-only display badges, see Badges & Tags.",
  "mobile-patterns":
    "Mobile-first interaction patterns — bottom sheet, pull-to-refresh, swipe-to-delete, action sheet, segmented control, mobile tab bar, FAB, ripple touch, momentum scroll, swipe card, status bar, top toast, long-press menu, drawer hamburger, pull-down search, mobile modal, onboarding dots, pinch-to-zoom hint.",
  "notification-center":
    "Persistent notification inbox — the panel of past notifications behind a bell icon: notification item, inbox header with count, time-group separator, filter tabs, swipe-to-dismiss, inbox-zero empty state, bulk actions, mention, bell with badge. For transient pop-up toasts, see Toasts & Alerts.",
};

/** Convenience: get a description by id, falling back to a generic line. */
export function describeCategory(id: string): string {
  return (
    categoryDescriptions[id] ??
    "Copy-paste UI animations and components — pure CSS and tiny JS where needed."
  );
}
