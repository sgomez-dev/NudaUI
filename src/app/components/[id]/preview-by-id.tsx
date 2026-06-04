"use client";

import { findComponent } from "@/lib/component-payload";

/**
 * Renders a component's live preview on the client.
 *
 * Previews are decorative JSX that may contain event handlers (e.g. a demo
 * form's onSubmit), which a Server Component cannot prerender. The page itself
 * stays a Server Component so the SEO-critical *code* is in the static HTML;
 * only this visual preview hydrates on the client — exactly like the gallery.
 */
export function PreviewById({ id }: { id: string }) {
  const flat = findComponent(id);
  if (!flat) return null;
  return <>{flat.component.preview}</>;
}
