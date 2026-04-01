import type { Metadata } from "next";
import { RevenueManagerCaseStudy } from "@/components/case-study/revenue-manager-case-study";

export const metadata: Metadata = {
  title: "Revenue Manager",
  description:
    "Case study: Vantaca billing platform centralizing accounting for 100+ management companies and 17,000+ associations.",
};

export default function RevenueManagerCaseStudyPage() {
  return <RevenueManagerCaseStudy />;
}
