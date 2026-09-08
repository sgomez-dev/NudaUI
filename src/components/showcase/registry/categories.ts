/**
 * Single source of truth for the component catalog.
 *
 * Adding a category? One edit:
 *   1. Create the new registry file (e.g. `my-category.tsx`)
 *   2. Add a row to the `categories` array below
 *
 * Everything else (gallery, sidebar, scroll-spy, search, JSON-LD, totals)
 * derives from this list — no other file needs to change.
 */
import {
  Loader2,
  RotateCw,
  BarChart3,
  Type,
  MousePointer2,
  ToggleLeft,
  Activity,
  Zap,
  Paintbrush,
  Square,
  Users,
  Tag,
  Navigation as NavigationIcon,
  ChevronDown,
  ChevronRight,
  MoreHorizontal,
  Bell,
  MessageSquare,
  Minus,
  MousePointer,
  Timer,
  ArrowDown,
  Box,
  PanelTop,
  ChevronsUpDown,
  MoveHorizontal,
  Inbox,
  PieChart,
  Sparkles,
  TrendingUp,
  FormInput,
  Image as ImageIcon,
  Bot,
  MousePointerClick,
  Command,
  SunMoon,
  Rocket,
  CreditCard,
  Film,
  Compass,
  Terminal,
  PanelBottom,
  LogIn,
  Calendar,
  PanelLeft,
  ListChecks,
  Search,
  SlidersHorizontal,
  Music,
  Palette,
  Images,
  MapPin,
  Watch,
  Quote,
  MessageCircle,
  UserCircle,
  Settings,
  Upload,
  Hash,
  Smartphone,
  Inbox as InboxFull,
  CircleDashed,
  Table,
  Cookie,
  History,
  LayoutDashboard,
  TriangleAlert,
  Share2,
  Layers,
  Blend,
  Grip,
  ArrowDownUp,
  Replace,
  Pointer,
  ZapOff,
  Lightbulb,
  Shapes,
  PartyPopper,
  Wand2,
  CloudRain,
  type LucideIcon,
} from "lucide-react";

import type { NudaComponent } from "./types";
import { reconcileComponents } from "./reconcile";

import { loaders } from "./loaders";
import { spinners } from "./spinners";
import { progress } from "./progress";
import { placeholders } from "./placeholders";
import { textEffects } from "./text-effects";
import { buttons } from "./buttons";
import { togglesInputs } from "./toggles-inputs";
import { cardsHover } from "./cards-hover";
import { indicators } from "./indicators";
import { microInteractions } from "./micro-interactions";
import { backgrounds } from "./backgrounds";
import { bordersOutlines } from "./borders-outlines";
import { avatars } from "./avatars";
import { badgesTags } from "./badges-tags";
import { navigation } from "./navigation";
import { notifications } from "./notifications";
import { tooltips } from "./tooltips";
import { dividers } from "./dividers";
import { cursors } from "./cursors";
import { countdowns } from "./countdowns";
import { scrollEffects } from "./scroll-effects";
import { threeDEffects } from "./three-d";
import { modalsOverlays } from "./modals-overlays";
import { accordionsTabs } from "./accordions-tabs";
import { marquees } from "./marquees";
import { emptyStates } from "./empty-states";
import { charts } from "./charts";
import { particles } from "./particles";
import { statsCounters } from "./stats-counters";
import { formStates } from "./form-states";
import { imageEffects } from "./image-effects";
import { aiChat } from "./ai-chat";
import { dragDrop } from "./drag-drop";
import { commandPalette } from "./command-palette";
import { themeToggle } from "./theme-toggle";
import { heroSections } from "./hero-sections";
import { pricing } from "./pricing";
import { videoPlayer } from "./video-player";
import { onboarding } from "./onboarding";
import { codeTerminal } from "./code-terminal";
import { footers } from "./footers";
import { auth } from "./auth";
import { calendars } from "./calendars";
import { sidebars } from "./sidebars";
import { steppers } from "./steppers";
import { searchAutocomplete } from "./search-autocomplete";
import { slidersRanges } from "./sliders-ranges";
import { audioWaveforms } from "./audio-waveforms";
import { colorPickers } from "./color-pickers";
import { galleriesCarousels } from "./galleries-carousels";
import { mapsLocations } from "./maps-locations";
import { watchFaces } from "./watch-faces";
import { quotesTestimonials } from "./quotes-testimonials";
import { commentsReactions } from "./comments-reactions";
import { profileHeaders } from "./profile-headers";
import { settingsPreferences } from "./settings-preferences";
import { fileUpload } from "./file-upload";
import { multiChips } from "./multi-chips";
import { mobilePatterns } from "./mobile-patterns";
import { notificationCenter } from "./notification-center";
import { skeletonVariants } from "./skeleton-variants";
import { dropdownsMenus } from "./dropdowns-menus";
import { pagination } from "./pagination";
import { breadcrumbs } from "./breadcrumbs";
import { tablesDataGrids } from "./tables-data-grids";
import { cookieConsent } from "./cookie-consent";
import { timelines } from "./timelines";
import { kpiWidgets } from "./kpi-widgets";
import { errorPages } from "./error-pages";
import { socialShare } from "./social-share";
import { countdownsExtra } from "./countdowns-extra";
import { scrollEffectsExtra } from "./scroll-effects-extra";
import { modalsOverlaysExtra } from "./modals-overlays-extra";
import { navigationExtra } from "./navigation-extra";
import { bordersOutlinesExtra } from "./borders-outlines-extra";
import { accordionsTabsExtra } from "./accordions-tabs-extra";
import { glassmorphism } from "./glassmorphism";
import { gradientAnimations } from "./gradient-animations";
import { noiseGrain } from "./noise-grain";
import { scrollDriven } from "./scroll-driven";
import { viewTransitions } from "./view-transitions";
import { cssOnlyInteractions } from "./css-only-interactions";
import { glitchDistortion } from "./glitch-distortion";
import { neonGlow } from "./neon-glow";
import { morphingShapes } from "./morphing-shapes";
import { confettiCelebration } from "./confetti-celebration";
import { animatedIcons } from "./animated-icons";
import { weatherAmbient } from "./weather-ambient";
import { aiChatExtra } from "./ai-chat-extra";
import { animatedIconsExtra } from "./animated-icons-extra";
import { authExtra } from "./auth-extra";
import { avatarsExtra } from "./avatars-extra";
import { breadcrumbsExtra } from "./breadcrumbs-extra";
import { codeTerminalExtra } from "./code-terminal-extra";
import { colorPickersExtra } from "./color-pickers-extra";
import { commandPaletteExtra } from "./command-palette-extra";
import { confettiCelebrationExtra } from "./confetti-celebration-extra";
import { cookieConsentExtra } from "./cookie-consent-extra";
import { cssOnlyInteractionsExtra } from "./css-only-interactions-extra";
import { cursorsExtra } from "./cursors-extra";
import { dragDropExtra } from "./drag-drop-extra";
import { dropdownsMenusExtra } from "./dropdowns-menus-extra";
import { emptyStatesExtra } from "./empty-states-extra";
import { errorPagesExtra } from "./error-pages-extra";
import { footersExtra } from "./footers-extra";
import { formStatesExtra } from "./form-states-extra";
import { galleriesCarouselsExtra } from "./galleries-carousels-extra";
import { glitchDistortionExtra } from "./glitch-distortion-extra";
import { gradientAnimationsExtra } from "./gradient-animations-extra";
import { imageEffectsExtra } from "./image-effects-extra";
import { indicatorsExtra } from "./indicators-extra";
import { mapsLocationsExtra } from "./maps-locations-extra";
import { marqueesExtra } from "./marquees-extra";
import { morphingShapesExtra } from "./morphing-shapes-extra";
import { neonGlowExtra } from "./neon-glow-extra";
import { noiseGrainExtra } from "./noise-grain-extra";
import { notificationCenterExtra } from "./notification-center-extra";
import { notificationsExtra } from "./notifications-extra";
import { onboardingExtra } from "./onboarding-extra";
import { paginationExtra } from "./pagination-extra";
import { particlesExtra } from "./particles-extra";
import { pricingExtra } from "./pricing-extra";
import { scrollDrivenExtra } from "./scroll-driven-extra";
import { sidebarsExtra } from "./sidebars-extra";
import { statsCountersExtra } from "./stats-counters-extra";
import { steppersExtra } from "./steppers-extra";
import { themeToggleExtra } from "./theme-toggle-extra";
import { threeDExtra } from "./three-d-extra";
import { videoPlayerExtra } from "./video-player-extra";
import { viewTransitionsExtra } from "./view-transitions-extra";
import { weatherAmbientExtra } from "./weather-ambient-extra";
import { growthByCategory } from "./catalog-growth";

export interface CategoryConfig {
  id: string;
  label: string;
  icon: LucideIcon;
  components: NudaComponent[];
}

const rawCategories: CategoryConfig[] = [
  { id: "loaders", label: "Loaders", icon: Loader2, components: loaders },
  { id: "spinners", label: "Spinners", icon: RotateCw, components: spinners },
  { id: "progress", label: "Progress", icon: BarChart3, components: [...progress, ...growthByCategory["Progress"]] },
  // Skeletons: merged "Placeholders" + "Skeleton Variants" (they were the same
  // thing under two names). Kept here in the loading-state cluster.
  { id: "skeletons", label: "Skeletons", icon: CircleDashed, components: [...placeholders, ...skeletonVariants] },
  { id: "text-effects", label: "Text Effects", icon: Type, components: textEffects },
  { id: "buttons", label: "Buttons", icon: MousePointer2, components: buttons },
  { id: "toggles-inputs", label: "Toggles & Inputs", icon: ToggleLeft, components: [...togglesInputs, ...growthByCategory["Toggles & Inputs"]] },
  { id: "cards-hover", label: "Cards & Hover", icon: Square, components: [...cardsHover, ...growthByCategory["Cards & Hover"]] },
  { id: "indicators", label: "Indicators", icon: Activity, components: [...indicators, ...indicatorsExtra] },
  { id: "micro-interactions", label: "Micro-interactions", icon: Zap, components: [...microInteractions, ...growthByCategory["Micro-interactions"]] },
  { id: "backgrounds", label: "Backgrounds", icon: Paintbrush, components: [...backgrounds, ...growthByCategory["Backgrounds"]] },
  { id: "borders-outlines", label: "Borders & Outlines", icon: Square, components: [...bordersOutlines, ...bordersOutlinesExtra] },
  { id: "avatars", label: "Avatars", icon: Users, components: [...avatars, ...avatarsExtra] },
  { id: "badges-tags", label: "Badges & Tags", icon: Tag, components: [...badgesTags, ...growthByCategory["Badges & Tags"]] },
  { id: "navigation", label: "Navigation", icon: NavigationIcon, components: [...navigation, ...navigationExtra, ...growthByCategory["Navigation"]] },
  { id: "dropdowns-menus", label: "Dropdowns & Menus", icon: ChevronDown, components: [...dropdownsMenus, ...dropdownsMenusExtra] },
  { id: "breadcrumbs", label: "Breadcrumbs", icon: ChevronRight, components: [...breadcrumbs, ...breadcrumbsExtra] },
  { id: "pagination", label: "Pagination", icon: MoreHorizontal, components: [...pagination, ...paginationExtra] },
  { id: "notifications", label: "Toasts & Alerts", icon: Bell, components: [...notifications, ...notificationsExtra] },
  { id: "tooltips", label: "Tooltips", icon: MessageSquare, components: [...tooltips, ...growthByCategory["Tooltips"]] },
  { id: "dividers", label: "Dividers", icon: Minus, components: [...dividers, ...growthByCategory["Dividers"]] },
  { id: "cursors", label: "Cursors", icon: MousePointer, components: [...cursors, ...cursorsExtra] },
  { id: "countdowns", label: "Countdowns", icon: Timer, components: [...countdowns, ...countdownsExtra, ...growthByCategory["Countdowns"]] },
  { id: "scroll-effects", label: "Scroll Effects", icon: ArrowDown, components: [...scrollEffects, ...scrollEffectsExtra, ...growthByCategory["Scroll Effects"]] },
  { id: "three-d", label: "3D Effects", icon: Box, components: threeDEffects },
  { id: "modals-overlays", label: "Modals & Overlays", icon: PanelTop, components: [...modalsOverlays, ...modalsOverlaysExtra, ...growthByCategory["Modals & Overlays"]] },
  { id: "accordions-tabs", label: "Accordions & Tabs", icon: ChevronsUpDown, components: [...accordionsTabs, ...accordionsTabsExtra, ...growthByCategory["Accordions & Tabs"]] },
  { id: "marquees", label: "Marquees & Tickers", icon: MoveHorizontal, components: [...marquees, ...marqueesExtra] },
  { id: "empty-states", label: "Empty States", icon: Inbox, components: [...emptyStates, ...emptyStatesExtra] },
  { id: "charts", label: "Charts", icon: PieChart, components: [...charts, ...growthByCategory["Charts"]] },
  { id: "glassmorphism", label: "Glassmorphism", icon: Layers, components: [...glassmorphism, ...growthByCategory["Glassmorphism"]] },
  { id: "particles", label: "Particles & Effects", icon: Sparkles, components: [...particles, ...particlesExtra] },
  { id: "gradient-animations", label: "Animated Gradients", icon: Blend, components: [...gradientAnimations, ...gradientAnimationsExtra] },
  { id: "noise-grain", label: "Noise & Grain", icon: Grip, components: [...noiseGrain, ...noiseGrainExtra] },
  { id: "scroll-driven", label: "Scroll-Driven", icon: ArrowDownUp, components: [...scrollDriven, ...scrollDrivenExtra] },
  { id: "view-transitions", label: "View Transitions", icon: Replace, components: [...viewTransitions, ...viewTransitionsExtra] },
  { id: "css-only-interactions", label: "CSS-Only Interactions", icon: Pointer, components: [...cssOnlyInteractions, ...cssOnlyInteractionsExtra] },
  { id: "glitch-distortion", label: "Glitch & Distortion", icon: ZapOff, components: [...glitchDistortion, ...glitchDistortionExtra] },
  { id: "neon-glow", label: "Neon & Glow", icon: Lightbulb, components: [...neonGlow, ...neonGlowExtra] },
  { id: "morphing-shapes", label: "Morphing Shapes", icon: Shapes, components: [...morphingShapes, ...morphingShapesExtra] },
  { id: "confetti-celebration", label: "Confetti & Celebration", icon: PartyPopper, components: [...confettiCelebration, ...confettiCelebrationExtra] },
  { id: "animated-icons", label: "Animated Icons", icon: Wand2, components: [...animatedIcons, ...animatedIconsExtra] },
  { id: "weather-ambient", label: "Weather & Ambient", icon: CloudRain, components: [...weatherAmbient, ...weatherAmbientExtra] },
  { id: "stats-counters", label: "Stats & Counters", icon: TrendingUp, components: [...statsCounters, ...statsCountersExtra] },
  { id: "form-states", label: "Form States", icon: FormInput, components: [...formStates, ...formStatesExtra] },
  { id: "image-effects", label: "Image Effects", icon: ImageIcon, components: [...imageEffects, ...imageEffectsExtra] },
  { id: "ai-chat", label: "AI / Chat UI", icon: Bot, components: [...aiChat, ...aiChatExtra] },
  { id: "drag-drop", label: "Drag & Drop", icon: MousePointerClick, components: [...dragDrop, ...dragDropExtra] },
  { id: "command-palette", label: "Command Palette", icon: Command, components: [...commandPalette, ...commandPaletteExtra] },
  { id: "theme-toggle", label: "Theme Toggle", icon: SunMoon, components: [...themeToggle, ...themeToggleExtra] },
  { id: "hero-sections", label: "Hero Sections", icon: Rocket, components: [...heroSections, ...growthByCategory["Hero Sections"]] },
  { id: "pricing", label: "Pricing Tables", icon: CreditCard, components: [...pricing, ...pricingExtra] },
  { id: "video-player", label: "Video Player UI", icon: Film, components: [...videoPlayer, ...videoPlayerExtra] },
  { id: "onboarding", label: "Onboarding & Coachmarks", icon: Compass, components: [...onboarding, ...onboardingExtra] },
  { id: "code-terminal", label: "Code & Terminal", icon: Terminal, components: [...codeTerminal, ...codeTerminalExtra] },
  { id: "footers", label: "Footers", icon: PanelBottom, components: [...footers, ...footersExtra] },
  { id: "auth", label: "Login & Auth", icon: LogIn, components: [...auth, ...authExtra] },
  { id: "calendars", label: "Calendars & Date Pickers", icon: Calendar, components: [...calendars, ...growthByCategory["Calendars & Date Pickers"]] },
  { id: "sidebars", label: "Sidebars & Docks", icon: PanelLeft, components: [...sidebars, ...sidebarsExtra] },
  { id: "steppers", label: "Steppers & Wizards", icon: ListChecks, components: [...steppers, ...steppersExtra] },
  { id: "search-autocomplete", label: "Search & Autocomplete", icon: Search, components: [...searchAutocomplete, ...growthByCategory["Search & Autocomplete"]] },
  { id: "sliders-ranges", label: "Sliders & Ranges", icon: SlidersHorizontal, components: [...slidersRanges, ...growthByCategory["Sliders & Ranges"]] },
  { id: "audio-waveforms", label: "Audio & Waveforms", icon: Music, components: [...audioWaveforms, ...growthByCategory["Audio & Waveforms"]] },
  { id: "color-pickers", label: "Color Pickers", icon: Palette, components: [...colorPickers, ...colorPickersExtra] },
  { id: "galleries-carousels", label: "Galleries & Carousels", icon: Images, components: [...galleriesCarousels, ...galleriesCarouselsExtra] },
  { id: "maps-locations", label: "Maps & Locations", icon: MapPin, components: [...mapsLocations, ...mapsLocationsExtra] },
  { id: "watch-faces", label: "Watch Faces & Clocks", icon: Watch, components: watchFaces },
  { id: "quotes-testimonials", label: "Quotes & Testimonials", icon: Quote, components: quotesTestimonials },
  { id: "comments-reactions", label: "Comments & Reactions", icon: MessageCircle, components: commentsReactions },
  { id: "profile-headers", label: "Profile Headers", icon: UserCircle, components: profileHeaders },
  { id: "settings-preferences", label: "Settings & Preferences", icon: Settings, components: settingsPreferences },
  { id: "file-upload", label: "File Upload", icon: Upload, components: fileUpload },
  { id: "multi-chips", label: "Tags & Chips Input", icon: Hash, components: multiChips },
  { id: "mobile-patterns", label: "Mobile Patterns", icon: Smartphone, components: [...mobilePatterns, ...growthByCategory["Mobile Patterns"]] },
  { id: "notification-center", label: "Notification Center", icon: InboxFull, components: [...notificationCenter, ...notificationCenterExtra] },
  { id: "tables-data-grids", label: "Tables & Data Grids", icon: Table, components: [...tablesDataGrids, ...growthByCategory["Tables & Data Grids"]] },
  { id: "kpi-widgets", label: "KPI & Dashboard Widgets", icon: LayoutDashboard, components: [...kpiWidgets, ...growthByCategory["KPI & Dashboard Widgets"]] },
  { id: "timelines", label: "Timelines", icon: History, components: [...timelines, ...growthByCategory["Timelines"]] },
  { id: "cookie-consent", label: "Cookie & Consent", icon: Cookie, components: [...cookieConsent, ...cookieConsentExtra] },
  { id: "error-pages", label: "Error & 404 Pages", icon: TriangleAlert, components: [...errorPages, ...errorPagesExtra] },
  { id: "social-share", label: "Social Share", icon: Share2, components: [...socialShare, ...growthByCategory["Social Share"]] },
];

/**
 * Public categories. Each component is reconciled so its copyable code is
 * guaranteed self-contained (see `./reconcile`). Every downstream surface —
 * gallery, JSON endpoints, per-component pages, llms.txt — reads from here, so
 * the heal applies everywhere at once.
 */
export const categories: CategoryConfig[] = rawCategories.map((c) => ({
  ...c,
  components: reconcileComponents(c.components),
}));

/** Total number of components across every category. */
export const totalCount = categories.reduce(
  (acc, c) => acc + c.components.length,
  0,
);

/** True if the component ships a JavaScript snippet alongside HTML/CSS. */
export function componentHasJS(c: NudaComponent): boolean {
  return c.code.some((tab) => tab.language === "javascript");
}

/** Concatenated `cssInline` from every component, ready for a single
 *  hoisted <style> tag. Each block is already class-scoped, so dedupe is
 *  unnecessary as long as components keep unique `nuda-*` prefixes. */
export const allInlineCss: string = categories
  .flatMap((c) => c.components)
  .map((c) => c.cssInline)
  .filter((s): s is string => Boolean(s))
  .join("\n");
