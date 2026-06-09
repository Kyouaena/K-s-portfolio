import type { DemoSlug } from "./types";

export const VALID_DEMOS: DemoSlug[] = [
  "finsec",
  "security-valve",
  "virinsight",
  "crypto-prediction",
];

export function isValidDemo(slug: string): slug is DemoSlug {
  return VALID_DEMOS.includes(slug as DemoSlug);
}

export const PUBLICATION_DEMO_MAP: Record<string, DemoSlug> = {
  "finsec-journal": "finsec",
  "finsec-ieice": "finsec",
  "virinsight-tce": "virinsight",
  "security-valve-globecom": "security-valve",
  "icc-2024": "crypto-prediction",
  "isips-2023": "crypto-prediction",
};

export const PROJECT_DEMO_MAP: Record<string, DemoSlug> = {
  "security-valve": "security-valve",
  finsec: "finsec",
  virinsight: "virinsight",
  "crypto-prediction": "crypto-prediction",
};
