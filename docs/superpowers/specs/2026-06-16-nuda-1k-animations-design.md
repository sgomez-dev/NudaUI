# NudaUI: 802 → ~1.005 animaciones (llegar a 1k)

**Fecha:** 2026-06-16
**Autor:** Santiago Gómez de la Torre Romero
**Estado:** Aprobado para planificación

## Objetivo

Subir el catálogo de NudaUI de **802** componentes a **~1.005** (≈205 nuevos),
de forma **híbrida**: abrir 12 categorías nuevas con gancho y profundizar 14
categorías existentes de alto valor. Cada animación debe ser coherente con la
estética de marca, accesible, y autocontenida (copy-paste sin build).

Aterrizar *por encima* de 1.000 permite comunicar "1,000+ animaciones" en toda
la superficie pública.

**Objetivo ampliado:** ~205 es el piso, no el techo. Donde el impacto/calidad se
mantenga, se añaden **más** (categorías nuevas más nutridas y deepening más
amplio de existentes), apuntando a ~1.050–1.100+ sin meter relleno. La regla
es: cada animación entra solo si aporta valor distinto; nunca padding para
inflar el conteo.

## Contexto del proyecto (estado actual)

- **Modelo de datos:** cada animación es un `NudaComponent`
  (`src/components/showcase/registry/types.ts`): `id`, `name`, `category`,
  `preview` (JSX), `cssInline` (string minificado que renderiza el preview),
  y `code[]` (tabs HTML/CSS/JS).
- **Single source of truth:** `categories.ts` importa cada archivo de registro
  y arma el array `categories`. Todo lo demás deriva de ahí: galería, sidebar,
  búsqueda, JSON-LD, `totalCount`, endpoints de IA.
- **Self-healing:** `reconcile.ts` regenera el tab CSS desde `cssInline` cuando
  un componente no pasa la auditoría. → Un componente nuevo solo necesita
  `cssInline` + tab HTML correctos; el tab CSS se autosana (pretty-print).
- **Tests de integridad** (`src/lib/registry-audit.ts`, corren en `prebuild` y
  vía `npm run audit`):
  1. `id` únicos en todo el catálogo.
  2. Lenguajes válidos: `html` | `css` | `javascript`.
  3. Toda clase `nuda-*` usada en HTML y estilada en el preview (`cssInline`)
     debe existir en el tab CSS.
  4. Toda `animation`/`animation-name` referenciada debe tener su `@keyframes`
     en el mismo tab CSS.
- **Consumo por IA (ya derivado del registro — se auto-actualiza):**
  `/api/registry.json` (índice plano + URL por componente),
  `/api/catalog.json` (metadata), `/api/catalog-full.json` (código completo),
  `/llms.txt`, `/llms-full.txt`. Usan `categories` + `totalCount`, así que los
  nuevos componentes aparecen y los conteos se actualizan solos al cablearlos
  en `categories.ts`.
- **Estética de marca:** fondo oscuro `#09090b`, acento lima `#e4ff54`.

## Alcance

### A. Categorías nuevas (12 archivos, ~115 componentes)

Cada una: archivo `.tsx` nuevo en `registry/`, import + fila en `categories.ts`
con un icono `lucide-react` adecuado.

| Bloque | id de categoría | label | ~n |
|---|---|---|---|
| Superficies modernas | `glassmorphism` | Glassmorphism | 10 |
| Superficies modernas | `gradient-animations` | Animated Gradients | 10 |
| Superficies modernas | `noise-grain` | Noise & Grain | 8 |
| CSS de vanguardia | `scroll-driven` | Scroll-Driven | 10 |
| CSS de vanguardia | `view-transitions` | View Transitions | 8 |
| CSS de vanguardia | `css-only-interactions` | CSS-Only Interactions | 10 |
| Efectos visuales | `glitch-distortion` | Glitch & Distortion | 10 |
| Efectos visuales | `neon-glow` | Neon & Glow | 10 |
| Efectos visuales | `morphing-shapes` | Morphing Shapes | 10 |
| Delight & playful | `confetti-celebration` | Confetti & Celebration | 10 |
| Delight & playful | `animated-icons` | Animated Icons | 10 |
| Delight & playful | `weather-ambient` | Weather & Ambient | 8 |

Notas de contenido por categoría (orientativo, no exhaustivo):

- **glassmorphism:** card de vidrio, nav glass, toggle glass, modal glass,
  pricing glass, notificación glass, blur-reveal animado, tabs glass, search
  glass, badge glass.
- **gradient-animations:** aurora bg, mesh gradient, conic spin, borde gradiente
  en flujo, texto shimmer, blob gradiente, hue-rotate, botón gradiente,
  duotone shift, progress gradiente.
- **noise-grain:** overlay de grano, film grain animado, card con ruido, TV
  static, dithering, grain-reveal, scanlines suaves, textura papel.
- **scroll-driven** (CSS `animation-timeline: scroll()/view()`): barra de
  progreso, reveal-on-view, parallax, sticky stack, image-reveal, contador
  scroll-linked, cambio de color por scroll, scroll-snap gallery.
- **view-transitions** (`@view-transition` / `::view-transition-*`): cross-fade,
  morph de elemento compartido, slide de página, expandir card a detalle.
- **css-only-interactions:** acordeón puro CSS, tooltip, modal vía `:target`,
  tabs vía radio, dropdown vía `focus-within`, carrusel vía scroll-snap,
  rating con estrellas, etc.
- **glitch-distortion:** RGB split en texto, glitch en hover, datamosh,
  scanline glitch, distorsión en hover, jitter, VHS.
- **neon-glow:** rótulo neón con flicker, botón con glow pulsante, borde neón,
  texto glow, loader neón, card glow, toggle neón.
- **morphing-shapes:** blob morph, clip-path morph, SVG path morph, botón
  líquido, loader shape-shifter, icono de menú morphing.
- **confetti-celebration:** burst de confeti (CSS), checkmark con burst,
  fuegos artificiales, sparkle trail, party popper, lluvia de emojis.
- **animated-icons** (morphs de icono CSS/SVG): hamburguesa→X, play→pausa,
  plus→close, search→back, corazón fill, campana ring, copy→check, sol→luna,
  flecha morph, download→done.
- **weather-ambient:** lluvia, nieve, rayos de sol, nubes a la deriva,
  relámpago, niebla, estrellas titilando, cielo aurora.

### B. Profundizar categorías existentes (~90 componentes)

+6 a +8 en cada una, en el archivo de registro correspondiente (o su `-extra`):
`buttons`, `loaders`, `text-effects`, `hero-sections`, `cards-hover`,
`backgrounds`, `micro-interactions`, `toggles-inputs`, `spinners`,
`badges-tags`, `progress`, `borders-outlines`, `tooltips`, `dividers`.

### C. Actualizar superficies con conteo hardcodeado

Derivado del registro (no tocar — se auto-actualiza): `live-metrics`,
endpoints JSON, `llms.txt`, `llms-full.txt`, JSON-LD.

Hardcoded a actualizar a "1,000+":
- `src/app/components/opengraph-image.tsx` — "800+ animations".
- `src/components/landing/roadmap.tsx` — hito/conteos de fase y el milestone de
  1k (marcarlo alcanzado).
- `README.md` — cualquier mención de conteo.
- `src/app/changelog/page.tsx` — entrada nueva del salto a 1k.
- Barrido final `grep` de "800" / "750" / "800+" en `src/` y raíz para no dejar
  strings obsoletos.

## Estándar de calidad (por cada animación, no negociable)

1. Estética dark `#09090b` + acento lima `#e4ff54`; coherente con vecinos.
2. Autocontenida: `cssInline` completo + tab HTML; el tab CSS se autosana vía
   `reconcile.ts` (o se escribe a mano comentado, como las existentes).
3. Prefijo `nuda-<slug>` **único** por componente (el `<style>` global es
   hoisteado y compartido — sin colisiones).
4. Accesibilidad: `role`/`aria-*` cuando aplique + bloque
   `@media (prefers-reduced-motion: reduce)` que detenga/atenúe el movimiento.
5. Sin dependencias externas, sin JS de framework: HTML + CSS (y JS vanilla
   opcional sólo si el patrón lo exige).
6. Pasa `npm run audit` y `npm run test` (incluye `registry-integrity`).

## Plan de ejecución

- **Por lotes: una categoría = un commit.** Tras cada lote, correr
  `npm run audit` (o `test`) y confirmar verde antes de seguir.
- Orden sugerido: primero las 12 categorías nuevas (mayor impacto/novedad),
  luego el deepening de existentes, luego el cierre de superficies de conteo.
- Volumen alto (~205 piezas): se puede **paralelizar la autoría con subagentes
  por categoría** (cada uno produce un archivo de registro que pasa la
  auditoría de forma aislada), con un paso final de integración + test global.

## Criterios de éxito

- `totalCount` ≥ 1.000 (piso ~1.005; estirar a ~1.050–1.100+ donde el impacto
  se mantenga, sin relleno).
- `npm run audit` y `npm run test` en verde (0 issues de integridad).
- 12 categorías nuevas visibles en galería, sidebar, búsqueda y endpoints de IA.
- `/api/registry.json` enumera los nuevos y su código es fetcheable vía la URL
  por componente y `/api/catalog-full.json`.
- Ningún string "800+" obsoleto en superficie pública; landing y OG dicen
  "1,000+".

## Fuera de alcance (YAGNI)

- Rediseño de la galería o del modelo `NudaComponent`.
- Nuevos endpoints o cambios de `schemaVersion`.
- Refactor de categorías existentes más allá de añadir componentes.
