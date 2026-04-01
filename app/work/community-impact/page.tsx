import type { Metadata } from "next";
import { CommunityImpactCaseStudy } from "@/components/case-study/community-impact-case-study";

export const metadata: Metadata = {
  title: "Community Impact Statement",
  description:
    "Case study: data-driven HOA board reports that showcase management company value — Vantaca.",
};

export default function CommunityImpactCaseStudyPage() {
  return <CommunityImpactCaseStudy />;
}
