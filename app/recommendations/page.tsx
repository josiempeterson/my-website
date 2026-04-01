import type { Metadata } from "next";
import { RecommendationsContent } from "@/components/recommendations-content";

export const metadata: Metadata = {
  title: "Recommendations",
};

export default function RecommendationsPage() {
  return <RecommendationsContent />;
}
