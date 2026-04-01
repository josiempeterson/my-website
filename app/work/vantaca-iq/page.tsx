import type { Metadata } from "next";
import { VantacaIqCaseStudy } from "@/components/case-study/vantaca-iq-case-study";

export const metadata: Metadata = {
  title: "Vantaca IQ",
  description:
    "Case study: analytics platform for community association management — 340+ companies, 36,000+ associations.",
};

export default function VantacaIqCaseStudyPage() {
  return <VantacaIqCaseStudy />;
}
