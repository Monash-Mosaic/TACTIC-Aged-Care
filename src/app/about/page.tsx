import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return <PageIntro title="About Us" />;
}
