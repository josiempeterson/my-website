import type { Metadata } from "next";
import { PluralsightAiAssistantCaseStudy } from "@/components/case-study/pluralsight-ai-assistant-case-study";

export const metadata: Metadata = {
  title: "Pluralsight Generative AI Assistant",
  description:
    "Case study: leading the design of an AI-powered assistant for 7.7M+ Pluralsight learners.",
};

export default function AiAssistantCaseStudyPage() {
  return <PluralsightAiAssistantCaseStudy />;
}
