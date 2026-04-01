"use client";

import { CaseStudyImagePlaceholder } from "@/components/case-study/case-study-image-placeholder";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudySection } from "@/components/case-study/case-study-section";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{children}</h2>
  );
}

const howItWorks = [
  {
    title: "Smart metric selection",
    body: "The system evaluates performance data and promotes the strongest metrics to the top of the report. If collections success rate is above 85%, it leads. If response time is under 24 hours, that gets featured. Weak metrics are reframed or omitted.",
  },
  {
    title: "Narrative + data",
    body: "Each section combines hard numbers with editable narrative text, so management companies can add context to their data. Scout AI integration helps users refine their messaging.",
  },
  {
    title: "Board-ready design",
    body: "The report is designed to be 1-2 pages, scannable, and visually impressive. Large hero metrics at the top, supporting details below, and an optional deep-dive appendix for detail-oriented board members.",
  },
] as const;

export function CommunityImpactCaseStudy() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-28 sm:px-6 sm:pb-36 md:pb-44">
      <CaseStudySection className="pt-6 md:pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Case study</p>
        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Community Impact Statement
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-normal leading-relaxed text-muted sm:text-xl">
          Helping management companies prove their value to HOA boards with data-driven reports
        </p>
        <dl className="mt-10 grid gap-8 border-t border-white/[0.06] pt-10 sm:grid-cols-3">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Role</dt>
            <dd className="mt-2 text-base text-foreground">Senior Product Designer</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Timeline
            </dt>
            <dd className="mt-2 text-base text-foreground">2025 – Present</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Company
            </dt>
            <dd className="mt-2 text-base text-foreground">Vantaca</dd>
          </div>
        </dl>
        <div className="mt-12">
          <CaseStudyImagePlaceholder size="hero" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>The problem</SectionHeading>
        <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted sm:text-lg">
          Management companies do incredible work for their communities, but HOA boards often have
          no idea what&apos;s happening behind the scenes. Board members don&apos;t see the
          maintenance issues that were caught proactively, the collections handled without legal
          action, or the dozens of homeowner inquiries resolved within hours. Without visibility into
          this work, boards undervalue their management company, leading to lost contracts and
          revenue.
        </p>
        <div className="mt-10">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>The vision</SectionHeading>
        <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted sm:text-lg">
          I designed a concise, visually compelling report that management companies can deliver to
          their HOA boards showcasing their most impressive accomplishments. The report is not a data
          dump. It&apos;s a carefully curated highlight reel that auto-selects the strongest metrics
          and frames them to demonstrate clear value.
        </p>
        <div className="mt-10">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>How it works</SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {howItWorks.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7"
            >
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.body}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>Challenges</SectionHeading>
        <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted sm:text-lg">
          The biggest challenge was determining the right level of user control. Leadership wanted a
          locked-down experience where users could only toggle sections on or off and edit narrative
          text, rather than manipulating the data directly. I worked closely with stakeholders to
          define these boundaries and designed the Scout AI integration as the path for users who
          needed to correct underlying data issues.
        </p>
        <div className="mt-10">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudyNav
        previous={{ href: "/work/revenue-manager", label: "Revenue Manager" }}
        showAllWork
      />
    </div>
  );
}
