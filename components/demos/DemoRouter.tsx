"use client";

import type { DemoSlug } from "@/demos/types";
import { DemoShell } from "./DemoShell";
import { FinSecDemo } from "./FinSecDemo";
import { SecurityValveDemo } from "./SecurityValveDemo";
import { VirInsightDemo } from "./VirInsightDemo";
import { CryptoPredictionDemo } from "./CryptoPredictionDemo";

const DEMO_COMPONENTS: Record<DemoSlug, () => React.ReactNode> = {
  finsec: () => <FinSecDemo />,
  "security-valve": () => <SecurityValveDemo />,
  virinsight: () => <VirInsightDemo />,
  "crypto-prediction": () => <CryptoPredictionDemo />,
};

export function DemoRouter({ slug }: { slug: DemoSlug }) {
  const Demo = DEMO_COMPONENTS[slug];
  return (
    <DemoShell slug={slug}>
      <Demo />
    </DemoShell>
  );
}
