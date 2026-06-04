/**
 * Canonical machine-readable view of a single component, shared by every code
 * surface: the per-component JSON endpoint, `catalog.json?include=code`, and
 * `registry.json`. One shape, one place — so AI agents always get the same
 * complete, paste-ready code regardless of which endpoint they hit.
 */
import { categories } from "@/components/showcase/registry/categories";
import type { NudaComponent } from "@/components/showcase/registry/types";
import { componentHasJS } from "@/components/showcase/registry/categories";
import { absoluteUrl, site } from "@/lib/site";

export interface FlatComponent {
  component: NudaComponent;
  categoryId: string;
  categoryLabel: string;
}

/** Every component, flattened, carrying its category id + label. */
export function allComponents(): FlatComponent[] {
  return categories.flatMap((cat) =>
    cat.components.map((component) => ({
      component,
      categoryId: cat.id,
      categoryLabel: cat.label,
    }))
  );
}

/** Look up a component by id. Accepts an optional trailing `.json`. */
export function findComponent(rawId: string): FlatComponent | undefined {
  const id = rawId.replace(/\.json$/i, "");
  return allComponents().find((f) => f.component.id === id);
}

export interface ComponentPayload {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  languages: string[];
  hasJS: boolean;
  code: { label: string; language: string; code: string }[];
  cssInline?: string;
  page: string;
  anchor: string;
  license: "MIT";
  attribution: { author: string; url: string; required: false };
}

/** Build the full, paste-ready payload for one component. */
export function componentPayload(flat: FlatComponent): ComponentPayload {
  const { component: c, categoryId } = flat;
  return {
    id: c.id,
    name: c.name,
    category: c.category,
    categoryId,
    languages: c.code.map((t) => t.language),
    hasJS: componentHasJS(c),
    code: c.code.map((t) => ({ label: t.label, language: t.language, code: t.code })),
    cssInline: c.cssInline,
    page: absoluteUrl(`/components/${c.id}`),
    anchor: absoluteUrl(`/components#${c.id}`),
    license: "MIT",
    attribution: {
      author: site.creator.name,
      url: site.creator.url,
      required: false,
    },
  };
}
