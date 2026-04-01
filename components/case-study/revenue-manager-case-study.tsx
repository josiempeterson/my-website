"use client";

import { CaseStudyImagePlaceholder } from "@/components/case-study/case-study-image-placeholder";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudySection } from "@/components/case-study/case-study-section";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{children}</h2>
  );
}

const designed = [
  {
    title: "Contract Templates",
    body: "Designed a template system for both admin and management fee contracts, reducing setup from days to minutes. Templates can be applied in bulk across multiple associations while still allowing individual customization.",
  },
  {
    title: "Unified Billing View",
    body: "A centralized interface showing all contracts, charges, and invoices across every association in one place. Leaders can track pending charges, view posting history, and export data without jumping between systems.",
  },
  {
    title: "In-app Education",
    body: "Built Pendo tooltip guides throughout Revenue Manager to answer common user questions directly in the product, reducing support tickets and helping new clients onboard faster.",
  },
] as const;

const stats = [
  { value: "100+", label: "Management companies on Revenue Manager" },
  { value: "17,000+", label: "Associations billing through the platform" },
  { value: "Days → Minutes", label: "Contract setup time with templates" },
] as const;

export function RevenueManagerCaseStudy() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-28 sm:px-6 sm:pb-36 md:pb-44">
      <CaseStudySection className="pt-6 md:pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Case study</p>
        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Revenue Manager
        </h1>
        <p className="mt-6 max-w-3xl text-lg font-normal leading-relaxed text-muted sm:text-xl">
          Designing a billing platform that centralizes corporate accounting for 100+ management
          companies and 17,000+ associations
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
            <dd className="mt-2 text-base text-foreground">Vantaca</dd>
          </div>
        </dl>
        <div className="mt-12">
          <CaseStudyImagePlaceholder size="hero" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>What is Revenue Manager?</SectionHeading>
        <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted sm:text-lg">
          Revenue Manager is Vantaca&apos;s comprehensive billing solution for community association
          management companies. It replaces a fragmented legacy system called Management Center,
          bringing contract management, charge generation, invoice processing, and approval
          workflows into one centralized platform. For management companies juggling hundreds of
          associations, this means less time on accounting and more time managing communities.
        </p>
        <div className="mt-10">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>The problem</SectionHeading>
        <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted sm:text-lg">
          Before Revenue Manager, setting up billing contracts was a manual, multi-step process that
          could take days for companies managing hundreds of associations. Each association had to
          be configured individually, charges were tracked across disconnected systems, and there
          was no centralized view of billing activity. Companies were losing time, money, and
          visibility.
        </p>
        <div className="mt-10">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>What I designed</SectionHeading>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {designed.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7"
            >
              <h3 className="text-base font-semibold text-foreground sm:text-lg">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {item.body}
              </p>
              <div className="mt-6">
                <CaseStudyImagePlaceholder size="medium" className="min-h-[11rem]" />
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>Challenges</SectionHeading>
        <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted sm:text-lg">
          Revenue Manager touches complex accounting workflows where accuracy is critical and
          mistakes cost real money. I worked closely with accounting domain experts to understand the
          nuances of billing, even when our team lost its product manager and several engineers
          mid-project. I also had to balance the needs of existing Management Center clients
          migrating over with new clients starting fresh.
        </p>
      </CaseStudySection>

      <CaseStudySection className="mt-16 md:mt-24">
        <SectionHeading>Impact</SectionHeading>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 text-center sm:px-7 sm:py-10 sm:text-left"
            >
              <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudyNav
        previous={{ href: "/work/vantaca-iq", label: "Vantaca IQ" }}
        next={{ href: "/work/community-impact", label: "Community Impact Statement" }}
      />
    </div>
  );
}
