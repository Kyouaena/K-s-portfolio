import type { Metadata } from "next";
import { LocaleProvider } from "@/components/LocaleProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xiaotong Jiang | Research Portfolio",
  description:
    "Ph.D. research portfolio: financial AI agent security, multi-agent defense, and virtual-asset analytics.",
  openGraph: {
    title: "Xiaotong Jiang — Research Portfolio",
    description: "Financial AI security · Multi-agent systems · Waseda University",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
