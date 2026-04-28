/**
 * Public surface of the registry. Re-exports the single source of truth so
 * downstream code can `import { categories, totalCount } from "./registry"`.
 *
 * Adding a new category? Edit only `./categories.ts`.
 */
export type { NudaComponent } from "./types";
export {
  categories,
  totalCount,
  componentHasJS,
  allInlineCss,
  type CategoryConfig,
} from "./categories";
