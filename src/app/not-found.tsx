import type { Metadata } from "next";
import { NotFoundView } from "./not-found-view";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you're looking for doesn't exist. Head back to the homepage or browse the component gallery.",
  // Crawlers should skip 404 responses but still follow the CTAs we render
  // so link equity flows back to canonical routes.
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return <NotFoundView />;
}
