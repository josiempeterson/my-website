"use client";

import { CaseStudyImagePlaceholder } from "@/components/case-study/case-study-image-placeholder";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudySection } from "@/components/case-study/case-study-section";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{children}</h2>
  );
}

export function PluralsightAiAssistantCaseStudy() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-28 sm:px-6 sm:pb-36 md:pb-44">
      <CaseStudySection className="pt-6 md:pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Case study</p>
        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Pluralsight&apos;s Generative AI Assistant
        </h1>
        <p className="mt-8 max-w-3xl text-lg font-normal leading-relaxed text-muted sm:text-xl">
          Leading the design of an AI-powered assistant that delivers personalized content to 7.7M+
          users
        </p>
        <dl className="mt-12 grid gap-8 border-t border-white/[0.06] pt-10 sm:grid-cols-3">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Role</dt>
            <dd className="mt-2 text-base leading-snug text-foreground">
              Senior Product Designer — Generative AI
            </dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Timeline
            </dt>
            <dd className="mt-2 text-base text-foreground">Sep 2023 – Mar 2024</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Company
            </dt>
            <dd className="mt-2 text-base text-foreground">Pluralsight</dd>
          </div>
        </dl>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="hero" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Context</SectionHeading>
        <ul className="mt-10 max-w-3xl space-y-6 text-base leading-[1.85] text-muted sm:text-lg">
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
            <span>Pluralsight offers 7,800+ courses, labs, and assessments</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
            <span>
              The existing search engine struggled with compound searches, making it hard for users
              to find relevant content
            </span>
          </li>
        </ul>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Problems to solve</SectionHeading>
        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">Business</p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Offer AI technology as a competitive advantage in the education industry
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Leaders
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Curate content for employees that remains current and relevant
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Learners
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              A personalized learning journey based on their current skills and future goals
            </p>
          </div>
        </div>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>My contributions</SectionHeading>
        <ul className="mt-10 max-w-3xl list-none space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {[
            "Conducted a thorough competitive analysis of established AI tools",
            "Communicated identified risks to stakeholders, including data limitations and potential concerns associated with utilizing the Pluralsight search engine",
            "Led the team towards a strategic solution, supported by comprehensive research and design principles",
            "Made essential adjustments to the feature set in response to deadlines and limitations",
            "Refined the design solution through iterative processes, ensuring alignment with user requirements",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2.5 size-1 shrink-0 rounded-full bg-white/25" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Competitive analysis</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          I researched how leading AI assistants approached onboarding, conversational design, error
          states, and feedback mechanisms to inform our design direction.
        </p>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="hero" className="min-h-[min(56vw,32rem)] md:min-h-[26rem]" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Design explorations</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          I explored multiple approaches for the assistant&apos;s interface, testing different
          interaction patterns to find the right balance between functionality and simplicity.
        </p>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <CaseStudyImagePlaceholder size="medium" className="min-h-[14rem] md:min-h-[18rem]" />
          <CaseStudyImagePlaceholder size="medium" className="min-h-[14rem] md:min-h-[18rem]" />
          <CaseStudyImagePlaceholder size="medium" className="min-h-[14rem] md:min-h-[18rem]" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Final design</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          The final AI Assistant lives within Pluralsight&apos;s navigation, providing personalized
          course recommendations, answering technology questions, and helping users get started with
          their learning journey.
        </p>
        <div className="mt-14 space-y-8">
          <CaseStudyImagePlaceholder size="large" />
          <CaseStudyImagePlaceholder size="large" />
          <CaseStudyImagePlaceholder size="large" />
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Constraints</SectionHeading>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Courses, labs, skill assessments",
              body: "LLM hallucinating causing complexity and inaccuracy",
            },
            {
              title: "Historical context",
              body: "The LLM retaining historical context was too costly",
            },
            {
              title: "Saving recommendations",
              body: "Resource constraints prevented this feature for the MVP",
            },
            {
              title: "Development resources",
              body: "Used an existing teams framework knowing we\u2019d get tech debt",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-7"
            >
              <p className="text-sm font-semibold text-foreground">{c.title}</p>
              <p className="mt-3 text-base leading-relaxed text-muted">{c.body}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Success metrics</SectionHeading>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Increased user engagement & satisfaction",
              body: "Uptick in engagement and positive reviews regarding the assistant\u2019s accuracy",
            },
            {
              title: "AI assistant adoption",
              body: (
                <>
                  Users are <strong className="font-semibold text-foreground">90% more likely</strong>{" "}
                  to use the AI assistant for content recommendations instead of search
                </>
              ),
            },
            {
              title: "Improved responsiveness",
              body: "Decreased the average number of messages sent before receiving content back",
            },
            {
              title: "Enhanced user retention",
              body: "The average number of sessions per user increased, indicating a rise in returning customers",
            },
          ].map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-7"
            >
              <p className="text-sm font-semibold text-foreground">{m.title}</p>
              <div className="mt-3 text-base leading-relaxed text-muted">{m.body}</div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Recap</SectionHeading>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              What did I accomplish?
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I led the development of a successful AI assistant that effectively recommends
              personalized content.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              What skills did I acquire?
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              How to define success in ambiguity. An understanding of AI and LLM technology.
              Articulating potential risks and concerns related to the desired business outcome while
              ensuring successful project delivery.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              What was my contribution?
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I navigated the business&apos;s ambiguous ask of &ldquo;Build an AI tool&rdquo; to
              create a product that solved real user needs.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyNav
        previous={{ href: "/work", label: "All work", isWorkIndex: true }}
        next={{ href: "/work/design-system", label: "Design System" }}
      />
    </div>
  );
}
