import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
};

const experience = [
  {
    role: "Senior Product Designer",
    org: "Vantaca",
    period: "Apr 2024 - Present",
    location: "Remote",
  },
  {
    role: "Senior Product Designer - Generative AI",
    org: "Pluralsight",
    period: "Sep 2023 - Mar 2024",
    location: "Remote",
  },
  {
    role: "Product Designer",
    org: "Pluralsight",
    period: "Mar 2021 - Mar 2024",
    location: "Draper, Utah",
  },
  {
    role: "Product Designer - Native Apps",
    org: "Pluralsight",
    period: "Sep 2022 - Jun 2023",
    location: "Remote",
  },
  {
    role: "Senior Product Designer",
    org: "KazooDo, Freelance",
    period: "Aug 2019 - Sep 2022",
    location: "Remote",
  },
  {
    role: "Product Designer",
    org: "FamilySearch",
    period: "Apr 2019 - Mar 2021",
    location: "Lehi, Utah",
  },
  {
    role: "Product Designer",
    org: "Self-Employed Freelance",
    period: "Apr 2017 - Apr 2019",
    location: "Layton, Utah",
  },
] as const;

const education = [
  {
    school: "Brigham Young University - Idaho",
    degree: "Bachelor of Science in Web Design and Development",
    years: "2017 - 2019",
  },
  {
    school: "Utah State University Eastern",
    degree: "Associate's degree in Architecture",
    years: "2014 - 2015",
  },
] as const;

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 pb-24 sm:px-6 sm:pb-32 md:pb-40">
      <header className="mx-auto max-w-2xl px-2 pt-4 text-center sm:px-4 md:pt-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Resume</p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:mt-8">
          Experience & education
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-base font-normal leading-relaxed text-muted md:mt-10 md:text-lg">
          A concise timeline of roles and learning.
        </p>
      </header>

      <div className="mx-auto mt-20 max-w-2xl space-y-24 sm:mt-28 md:mt-32 md:space-y-32">
        <section>
          <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Experience
          </h2>
          <ol className="relative mt-12 ml-0.5 border-l border-white/[0.08] pl-10 sm:mt-16 sm:ml-1 sm:pl-12">
            {experience.map((item) => (
              <li
                key={`${item.role}-${item.org}-${item.period}`}
                className="relative pb-16 last:pb-0 sm:pb-20"
              >
                <span
                  className="absolute -left-[calc(0.625rem+0.5px)] top-1.5 size-2 rounded-full bg-accent ring-[6px] ring-background sm:-left-[calc(0.75rem+0.5px)] sm:top-2 sm:size-2.5 sm:ring-[8px]"
                  aria-hidden
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-accent sm:text-base">{item.org}</p>
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {item.period}
                    <span className="text-white/25"> · </span>
                    {item.location}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Education
          </h2>
          <ul className="mt-12 space-y-6 sm:mt-16 sm:space-y-8">
            {education.map((edu) => (
              <li
                key={edu.school}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] px-6 py-8 sm:px-8 sm:py-10"
              >
                <h3 className="text-lg font-semibold tracking-tight text-foreground">{edu.school}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted">{edu.degree}</p>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {edu.years}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
