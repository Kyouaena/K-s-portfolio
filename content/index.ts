import { en } from "./en";
import { zh } from "./zh";
import type { Locale, SiteContent } from "./types";

export function getContent(locale: Locale): SiteContent {
  return locale === "zh" ? zh : en;
}

export type { Locale, SiteContent };
