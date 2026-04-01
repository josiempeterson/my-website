import type { Metadata } from "next";
import { PluralsightCertificationDashboardCaseStudy } from "@/components/case-study/pluralsight-certification-dashboard-case-study";

export const metadata: Metadata = {
  title: "Certification Dashboard",
  description:
    "Case study: a data-driven Pluralsight dashboard for tracking certification progress — 76K visitors in month one.",
};

export default function CertificationDashboardCaseStudyPage() {
  return <PluralsightCertificationDashboardCaseStudy />;
}
