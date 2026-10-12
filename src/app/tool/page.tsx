import type { Metadata } from "next";

import { PageIntro } from "@/components/sections/page-intro";

export const metadata: Metadata = {
  title: "Get the Tool",
};

export default function ToolPage() {
  return <PageIntro title="Get the Tool" />;
}
