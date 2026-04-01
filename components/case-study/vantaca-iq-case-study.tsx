"use client";

import { CaseStudyImagePlaceholder } from "@/components/case-study/case-study-image-placeholder";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudySection } from "@/components/case-study/case-study-section";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{children}</h2>
  );
}

const shipped = [
  {
    title: "Dynamic Reporting",
    body: "A custom report builder that lets management companies compare teams, portfolios, and employees across any metric. I helped scope down an overly complex initial vision into a focused tool with a two-tier system: beginner templates for quick answers and advanced mode for power users.",
  },
  {
    title: "Community Impact Statement",
    body: "A board-facing report that showcases the value a management company provides to their HOA. I designed the framework for auto-selecting the strongest metrics so companies can demonstrate ROI without manual curation.",
  },
  {
    title: "Payment Insights",
    body: "A dashboard giving Vantaca Pay customers visibility into payment patterns and processing data. Designed and validated with customers, ready for development.",
  },
  {
    title: "Industry Benchmarks & Company Insights",
    body: "Tools that let management companies compare their performance against industry peers and analyze their own organizational structure, workload distribution, and staffing efficiency.",
  },
] as const;

const approach = [
  {
    title: "Research first",
    body: "Customer interviews, usage data from Pendo, and competitive analysis drive every design decision.",
  },
  {
    title: "Build to learn",
    body: "I use Cursor and Claude Code to rapidly prototype working front end components, giving engineers production-ready code and dramatically shortening the feedback loop.",
  },
  {
    title: "Ship and iterate",
    body: "Rather than waiting for perfection, I push for early access rollouts to real customers and iterate based on what we learn.",
  },
] as const;

const stats = [
  { value: "340+", label: "Management companies using IQ" },
  { value: "36,000+", label: "Live associations served" },
  { value: "6.9%", label: "Week over week engagement growth" },
  { value: "4.5", label: "Average unique visitors per account per week" },
] as const;

export function VantacaIqCaseStudy() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-28 sm:px-6 sm:pb-36 md:pb-44">
      <CaseStudySection className="pt-6 md:pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Case study</p>
        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Vantaca IQ
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-normal leading-relaxed text-muted sm:text-xl">
          Designing an analytics platform serving 340+ management companies and 36,000+ live
          associations
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
            <dd className="mt-2 text-base text-foreground">Apr 2024 – Present</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Company
            </dt>
            <dd className="mt-2 text-base text-foreground">Vantaca ($1.25B valuation)</dd>
          </div>
        </dl>
        <div className="mt-12">
          <CaseStudyImagePlaceholder size="hero" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>What is Vantaca IQ?</SectionHeading>
        <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted sm:text-lg">
          Vantaca IQ is a data analytics platform built for community association management
          companies. It gives leaders the tools to understand their business through real data, from
          employee performance to portfolio health to industry benchmarks. I&apos;ve been the lead
          designer on IQ since joining Vantaca, shaping it from early concepts into a product used by
          hundreds of companies daily.
        </p>
        <div className="mt-10">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>What I shipped</SectionHeading>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {shipped.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7"
            >
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {item.body}
              </p>
              <div className="mt-6">
                <CaseStudyImagePlaceholder size="medium" className="min-h-[12rem]" />
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>Navigating ambiguity</SectionHeading>
        <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted sm:text-lg">
          Much of my work on IQ has involved operating without a dedicated product manager. For
          extended periods, I&apos;ve worn both the design and product hat, defining scope,
          prioritizing features, conducting research, and advocating for what to build next. When
          leadership direction shifted mid-quarter or priorities were unclear, I leaned on user data,
          customer interviews, and close collaboration with engineering to keep moving forward.
        </p>
        <div className="mt-10">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>How I work</SectionHeading>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {approach.map((item) => (
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
        <SectionHeading>Impact</SectionHeading>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 text-center sm:px-7 sm:py-9 sm:text-left"
            >
              <p className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudyNav
        previous={{ href: "/work/certification-dashboard", label: "Certification Dashboard" }}
        next={{ href: "/work/revenue-manager", label: "Revenue Manager" }}
      />
    </div>
  );
}
