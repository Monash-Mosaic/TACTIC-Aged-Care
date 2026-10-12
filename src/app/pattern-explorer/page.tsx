import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Pattern Explorer",
};

export default function PatternExplorerPage() {
  return <PageIntro title="Pattern Explorer" />;
}
