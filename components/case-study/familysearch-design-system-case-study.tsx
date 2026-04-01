"use client";

import { CaseStudyImagePlaceholder } from "@/components/case-study/case-study-image-placeholder";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudySection } from "@/components/case-study/case-study-section";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{children}</h2>
  );
}

export function FamilysearchDesignSystemCaseStudy() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-28 sm:px-6 sm:pb-36 md:pb-44">
      <CaseStudySection className="pt-6 md:pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Case study</p>
        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          FamilySearch Design System
        </h1>
        <p className="mt-8 max-w-3xl text-lg font-normal leading-relaxed text-muted sm:text-xl">
          Building a scalable design system adopted by 50+ designers across the world&apos;s largest
          genealogy platform
        </p>
        <dl className="mt-12 grid gap-8 border-t border-white/[0.06] pt-10 sm:grid-cols-3">
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">Role</dt>
            <dd className="mt-2 text-base text-foreground">Product Designer</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Timeline
            </dt>
            <dd className="mt-2 text-base text-foreground">Apr 2019 – Mar 2021</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              Company
            </dt>
            <dd className="mt-2 text-base text-foreground">FamilySearch</dd>
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
            <span>
              FamilySearch is the world&apos;s largest genealogy organization with over 4.84 billion
              searchable records
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
            <span>
              International audience with a website and native apps in 10 languages
            </span>
          </li>
        </ul>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Research</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          I studied leading design systems including Google&apos;s Material Design, Adobe&apos;s
          Spectrum, IBM&apos;s Carbon Design System, and Apple&apos;s Human Interface Guidelines to
          establish best practices and identify patterns that would work at FamilySearch&apos;s scale.
        </p>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>My contributions</SectionHeading>
        <ul className="mt-10 max-w-3xl list-none space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {[
            "Contributed to cost savings by crafting reusable components and design patterns, optimizing development resources",
            "Established a flexible framework through thorough research to ensure scalability and uphold design coherence",
            "Meticulously documented component standards and accessibility guidelines to maintain clarity and inclusivity",
            "Simplified components and prioritized usability, enhancing the overall user experience and product clarity",
            "Enforced consistency across products, platforms, and languages, bolstering the brand\u2019s identity and recognition",
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2.5 size-1 shrink-0 rounded-full bg-white/25" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Color system</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          I defined comprehensive color palettes for both light (Daybreak) and dark (Nightfall)
          themes, ensuring accessibility and consistency across all products.
        </p>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="hero" className="min-h-[min(56vw,32rem)] md:min-h-[26rem]" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Component library</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          Built a comprehensive library of reusable components including cards, overlays, status
          indicators, progress bars, dialogs, and more, all documented with light and dark theme
          variants.
        </p>
        <div className="mt-14 space-y-8">
          <CaseStudyImagePlaceholder size="large" />
          <CaseStudyImagePlaceholder size="large" />
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Tagging &amp; highlighting</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          Designed the tagging and highlighting component for FamilySearch&apos;s image viewer,
          allowing users to tag people and highlight information in historical records. Documented
          anatomy, parts and spacing, and examples across both mobile and desktop.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <CaseStudyImagePlaceholder size="large" className="min-h-[20rem]" />
          <CaseStudyImagePlaceholder size="large" className="min-h-[20rem]" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Playground</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          I&apos;m a big fan of hands-on learning, so I created an interactive playground with
          beginner, intermediate, and advanced levels to help designers learn and adopt the design
          system at their own pace.
        </p>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Outcomes</SectionHeading>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "Workshops & office hours",
              body: "Conducted workshops and offered personalized 1:1 training sessions during office hours for individuals seeking assistance or guidance",
            },
            {
              title: "Design system adoption",
              body: (
                <>
                  Achieved{" "}
                  <strong className="font-semibold text-foreground">100% adoption</strong> from the
                  design team who lead their own teams to utilizing the component library
                </>
              ),
            },
            {
              title: "Built playgrounds",
              body: "Created a playground with beginner, intermediate, and advanced levels for hands-on learning",
            },
            {
              title: "Enhanced components",
              body: "Continued to enhance components through data analysis and user interviews",
            },
          ].map((o) => (
            <div
              key={o.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-7"
            >
              <p className="text-sm font-semibold text-foreground">{o.title}</p>
              <div className="mt-3 text-base leading-relaxed text-muted">{o.body}</div>
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
              Designed and implemented a flexible design system, achieving full adoption from over
              50 designers throughout the organization.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              What skills did I acquire?
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Creating a design system within Figma. Demonstrating expertise in accessibility and
              proficient documentation. Recognizing the value of simplification and feature
              reduction in enhancing usability and clarity of products.
            </p>
          </div>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
              What was my contribution?
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              I established the Figma workspace, defining color palettes, visual styles, typography,
              and more, while also crafting a substantial portion of the design components. I
              delegated specific components to fellow designers to enhance efficiency and accelerate
              the design process.
            </p>
          </div>
        </div>
      </CaseStudySection>

      <CaseStudyNav
        previous={{ href: "/work/ai-assistant", label: "AI Assistant" }}
        next={{ href: "/work/certification-dashboard", label: "Certification Dashboard" }}
      />
    </div>
  );
}
