import type { Metadata } from "next";
import { ResumeContent } from "@/components/resume-content";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return <ResumeContent />;
}
