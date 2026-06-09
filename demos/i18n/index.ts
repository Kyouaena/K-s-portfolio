import type { Locale } from "@/content";
import { demoEn } from "./en";
import { demoZh } from "./zh";
import type { DemoUiStrings } from "./types";

export function getDemoUi(locale: Locale): DemoUiStrings {
  return locale === "zh" ? demoZh : demoEn;
}

export type { DemoUiStrings };
