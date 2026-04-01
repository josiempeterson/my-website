import type { Metadata } from "next";
import { FamilysearchDesignSystemCaseStudy } from "@/components/case-study/familysearch-design-system-case-study";

export const metadata: Metadata = {
  title: "FamilySearch Design System",
  description:
    "Case study: building a scalable design system adopted by 50+ designers at FamilySearch.",
};

export default function DesignSystemCaseStudyPage() {
  return <FamilysearchDesignSystemCaseStudy />;
}
