import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "TACTIC Narrative",
};

export default function NarrativePage() {
  return <PageIntro title="TACTIC Narrative" />;
}
