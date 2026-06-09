import { notFound } from "next/navigation";
import { DemoRouter } from "@/components/demos/DemoRouter";
import { isValidDemo } from "@/demos";

export function generateStaticParams() {
  return [
    { slug: "finsec" },
    { slug: "security-valve" },
    { slug: "virinsight" },
    { slug: "crypto-prediction" },
  ];
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!isValidDemo(slug)) notFound();
  return <DemoRouter slug={slug} />;
}
