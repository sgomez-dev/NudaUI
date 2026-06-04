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

export interface CategoryConfig {
  id: string;
  label: string;
  icon: LucideIcon;
  components: NudaComponent[];
}

const rawCategories: CategoryConfig[] = [
  { id: "loaders", label: "Loaders", icon: Loader2, components: loaders },
  { id: "spinners", label: "Spinners", icon: RotateCw, components: spinners },
  { id: "progress", label: "Progress", icon: BarChart3, components: progress },
  // Skeletons: merged "Placeholders" + "Skeleton Variants" (they were the same
  // thing under two names). Kept here in the loading-state cluster.
  { id: "skeletons", label: "Skeletons", icon: CircleDashed, components: [...placeholders, ...skeletonVariants] },
  { id: "text-effects", label: "Text Effects", icon: Type, components: textEffects },
  { id: "buttons", label: "Buttons", icon: MousePointer2, components: buttons },
  { id: "toggles-inputs", label: "Toggles & Inputs", icon: ToggleLeft, components: togglesInputs },
  { id: "cards-hover", label: "Cards & Hover", icon: Square, components: cardsHover },
  { id: "indicators", label: "Indicators", icon: Activity, components: indicators },
  { id: "micro-interactions", label: "Micro-interactions", icon: Zap, components: microInteractions },
  { id: "backgrounds", label: "Backgrounds", icon: Paintbrush, components: backgrounds },
  { id: "borders-outlines", label: "Borders & Outlines", icon: Square, components: bordersOutlines },
  { id: "avatars", label: "Avatars", icon: Users, components: avatars },
  { id: "badges-tags", label: "Badges & Tags", icon: Tag, components: badgesTags },
  { id: "navigation", label: "Navigation", icon: NavigationIcon, components: navigation },
  { id: "notifications", label: "Toasts & Alerts", icon: Bell, components: notifications },
  { id: "tooltips", label: "Tooltips", icon: MessageSquare, components: tooltips },
  { id: "dividers", label: "Dividers", icon: Minus, components: dividers },
  { id: "cursors", label: "Cursors", icon: MousePointer, components: cursors },
  { id: "countdowns", label: "Countdowns", icon: Timer, components: countdowns },
  { id: "scroll-effects", label: "Scroll Effects", icon: ArrowDown, components: scrollEffects },
  { id: "three-d", label: "3D Effects", icon: Box, components: threeDEffects },
  { id: "modals-overlays", label: "Modals & Overlays", icon: PanelTop, components: modalsOverlays },
  { id: "accordions-tabs", label: "Accordions & Tabs", icon: ChevronsUpDown, components: accordionsTabs },
  { id: "marquees", label: "Marquees & Tickers", icon: MoveHorizontal, components: marquees },
  { id: "empty-states", label: "Empty States", icon: Inbox, components: emptyStates },
  { id: "charts", label: "Charts", icon: PieChart, components: charts },
  { id: "particles", label: "Particles & Effects", icon: Sparkles, components: particles },
  { id: "stats-counters", label: "Stats & Counters", icon: TrendingUp, components: statsCounters },
  { id: "form-states", label: "Form States", icon: FormInput, components: formStates },
  { id: "image-effects", label: "Image Effects", icon: ImageIcon, components: imageEffects },
  { id: "ai-chat", label: "AI / Chat UI", icon: Bot, components: aiChat },
  { id: "drag-drop", label: "Drag & Drop", icon: MousePointerClick, components: dragDrop },
  { id: "command-palette", label: "Command Palette", icon: Command, components: commandPalette },
  { id: "theme-toggle", label: "Theme Toggle", icon: SunMoon, components: themeToggle },
  { id: "hero-sections", label: "Hero Sections", icon: Rocket, components: heroSections },
  { id: "pricing", label: "Pricing Tables", icon: CreditCard, components: pricing },
  { id: "video-player", label: "Video Player UI", icon: Film, components: videoPlayer },
  { id: "onboarding", label: "Onboarding & Coachmarks", icon: Compass, components: onboarding },
  { id: "code-terminal", label: "Code & Terminal", icon: Terminal, components: codeTerminal },
  { id: "footers", label: "Footers", icon: PanelBottom, components: footers },
  { id: "auth", label: "Login & Auth", icon: LogIn, components: auth },
  { id: "calendars", label: "Calendars & Date Pickers", icon: Calendar, components: calendars },
  { id: "sidebars", label: "Sidebars & Docks", icon: PanelLeft, components: sidebars },
  { id: "steppers", label: "Steppers & Wizards", icon: ListChecks, components: steppers },
  { id: "search-autocomplete", label: "Search & Autocomplete", icon: Search, components: searchAutocomplete },
  { id: "sliders-ranges", label: "Sliders & Ranges", icon: SlidersHorizontal, components: slidersRanges },
  { id: "audio-waveforms", label: "Audio & Waveforms", icon: Music, components: audioWaveforms },
  { id: "color-pickers", label: "Color Pickers", icon: Palette, components: colorPickers },
  { id: "galleries-carousels", label: "Galleries & Carousels", icon: Images, components: galleriesCarousels },
  { id: "maps-locations", label: "Maps & Locations", icon: MapPin, components: mapsLocations },
  { id: "watch-faces", label: "Watch Faces & Clocks", icon: Watch, components: watchFaces },
  { id: "quotes-testimonials", label: "Quotes & Testimonials", icon: Quote, components: quotesTestimonials },
  { id: "comments-reactions", label: "Comments & Reactions", icon: MessageCircle, components: commentsReactions },
  { id: "profile-headers", label: "Profile Headers", icon: UserCircle, components: profileHeaders },
  { id: "settings-preferences", label: "Settings & Preferences", icon: Settings, components: settingsPreferences },
  { id: "file-upload", label: "File Upload", icon: Upload, components: fileUpload },
  { id: "multi-chips", label: "Tags & Chips Input", icon: Hash, components: multiChips },
  { id: "mobile-patterns", label: "Mobile Patterns", icon: Smartphone, components: mobilePatterns },
  { id: "notification-center", label: "Notification Center", icon: InboxFull, components: notificationCenter },
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
