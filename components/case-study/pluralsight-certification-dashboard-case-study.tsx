"use client";

import { CaseStudyImagePlaceholder } from "@/components/case-study/case-study-image-placeholder";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { CaseStudySection } from "@/components/case-study/case-study-section";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{children}</h2>
  );
}

const glanceItems = [
  "Set up interviews with company admins, managers, and learners to figure out what data leaders wanted access to and what data learners felt comfortable showing",
  "Created visuals to allow for quick scanning of the data so that leaders could gather the information more rapidly",
  "Worked with the product manager to define requirements for our product to be successful, and frequently updated her on the design's progress",
  "Created Figma prototypes and coordinated and conducted usability interviews to gather user feedback and insights into their needs",
  "Synthesized the feedback and made iterations to the design of the prototype",
  "Supported the engineering team by providing guidance to ensure pixel-perfect experiences",
] as const;

export function PluralsightCertificationDashboardCaseStudy() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-28 sm:px-6 sm:pb-36 md:pb-44">
      <CaseStudySection className="pt-6 md:pt-10">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Case study</p>
        <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Certification Dashboard
        </h1>
        <p className="mt-8 max-w-3xl text-lg font-normal leading-relaxed text-muted sm:text-xl">
          Building a data-driven dashboard for admins and managers to track employee progress in
          certification preparation and exams, attracting 76K unique visitors in its first month
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
            <dd className="mt-2 text-base text-foreground">2022 – 2023</dd>
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
        <SectionHeading>Overview</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          Pluralsight is a technology workforce development company intent on helping individuals
          and teams improve their technology proficiency while working better together with improved
          processes. Each learner&apos;s journey is unique, from the speed of learning and the
          content format, to the way they retain information. We recognized it was important to meet
          learners where they are in their learning journey to better empower them to skill up.
          Learners are eager to master new skills and certifications allow them to show what they
          have learned. Pluralsight sells certification vouchers in bulk to companies in order to
          help their employees get certified.
        </p>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>At a glance</SectionHeading>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {glanceItems.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-7"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent/80" aria-hidden />
              <span className="text-base leading-relaxed text-muted">{item}</span>
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>My role</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          My role included coordinating and conducting interviews with leaders and learners to
          gather data and insights, researching, ideating, and prototyping various solutions while
          constantly seeking feedback as to what worked well for our audience. I set up usability
          tests using prototypes to ensure our solutions aligned with user needs.
        </p>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>The challenge</SectionHeading>
        <div className="mt-8 max-w-3xl space-y-6 text-base leading-[1.85] text-muted sm:text-lg">
          <p>
            Pluralsight offers certification vouchers to companies looking for a way to certify
            their employees. As the demand for certification vouchers rapidly expanded, it became
            apparent that the lack of transparency around employees&apos; certification journey was
            causing companies to lose thousands of dollars each year.
          </p>
          <p>
            Up until this point, we had only offered the purchasing of certification vouchers, but we
            soon realized that leaders needed a way to track employee progress. Because there was no
            visibility into the progress employees were making, many times vouchers would go
            unclaimed until they would expire, wasting hundreds of dollars.
          </p>
        </div>
        <div className="mt-14">
          <CaseStudyImagePlaceholder
            size="large"
            className="min-h-[min(48vw,22rem)] md:min-h-[24rem]"
          />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Interviews</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          I created guides and conducted interviews together with my product manager to get an
          understanding of what data leaders would like to see and what data employees were
          comfortable sharing with their organizations. We initially were concerned that employees
          would want to hide the majority of their certification prep data and exam results from
          their leaders. However, we happily discovered that employees were content letting leaders
          view their progress when the certifications were company funded.
        </p>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Design goals &amp; process</SectionHeading>
        <div className="mt-8 max-w-3xl space-y-6 text-base leading-[1.85] text-muted sm:text-lg">
          <p>
            Our goal of building this dashboard was to create transparency for leaders around
            purchasing and benefiting from certification vouchers. Many companies are trying to
            certify their employees, and we wanted to empower leaders to be able to best help their
            employees get certified by being able to view what part of their learning journey they
            were in, and encourage them along the way.
          </p>
          <p>
            Prior to creating this dashboard, the only way that leaders could see if an employee
            passed the certification was if the employee themselves shared that information
            directly with their leaders. This meant that leaders would purchase vouchers and assign
            them to employees, and then they would never hear whether anyone had passed, so they
            wouldn&apos;t know who to put in new projects or tasks that required that certification.
            We also wanted to be intentional about the information we are sharing to leaders so that
            employees didn&apos;t feel like it was a violation of their privacy to allow leaders to
            access their certification data.
          </p>
          <p>
            After defining our goal and desired outcomes, we synthesized the interview results with
            the leaders and learners and got to work designing and iterating. We interviewed as we
            went, being sure to provide the appropriate data to help leaders make the best use of the
            vouchers.
          </p>
        </div>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>User testing &amp; feedback</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          After we created a variety of designs, we did some A/B testing to figure out which view
          better told the learner&apos;s certification journey. Some of the feedback we received
          was that leaders wanted to be able to send visuals to their organization to show them the
          progress of employee certifications. Taking this into account, we created charts and graphs
          to visually convey the progress learners were making.
        </p>
        <div className="mt-14">
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Final design</SectionHeading>
        <p className="mt-8 max-w-3xl text-base leading-[1.85] text-muted sm:text-lg">
          After multiple rounds of iterating and testing, we were able to release the dashboard as a
          leader tool on Pluralsight (only viewable to leaders and admin). After the release, we
          received a lot of excited feedback from admin finally being able to track the
          certification journey. We were also able to see a drop in unredeemed voucher expiration.
        </p>
        <div className="mt-14 space-y-8">
          <CaseStudyImagePlaceholder size="large" />
          <CaseStudyImagePlaceholder size="large" />
          <CaseStudyImagePlaceholder size="large" />
        </div>
      </CaseStudySection>

      <CaseStudySection className="mt-24 md:mt-32">
        <SectionHeading>Success metrics</SectionHeading>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            {
              title: "76K unique visitors",
              body: "Attracted 76,000 unique visitors in the first month after launch",
            },
            {
              title: "Reduced voucher waste",
              body: "Measurable drop in unredeemed voucher expiration, saving companies money",
            },
            {
              title: "Positive leader feedback",
              body: "Excited reception from admins who could finally track the certification journey",
            },
            {
              title: "Improved transparency",
              body: "Leaders gained visibility into employee progress for the first time",
            },
          ].map((m) => (
            <div
              key={m.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-8 py-7"
            >
              <p className="text-sm font-semibold text-foreground">{m.title}</p>
              <p className="mt-3 text-base leading-relaxed text-muted">{m.body}</p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      <CaseStudyNav
        previous={{ href: "/work/design-system", label: "Design System" }}
        next={{ href: "/work/vantaca-iq", label: "Vantaca IQ" }}
        showAllWork
      />
    </div>
  );
}
