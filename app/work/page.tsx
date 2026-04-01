import type { Metadata } from "next";
import { WorkPageContent } from "@/components/work-page-content";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return <WorkPageContent />;
}
