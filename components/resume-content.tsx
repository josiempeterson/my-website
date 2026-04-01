"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/lib/resume-data";
import { PAGE_EASE, pageMotion } from "@/lib/page-motion";

function ExperienceBulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 list-none space-y-2.5 sm:mt-5 sm:space-y-3">
      {items.map((text, i) => (
        <li
          key={i}
          className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-base"
        >
          <span className="mt-0.5 shrink-0 select-none text-muted" aria-hidden>
            •
          </span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

const inViewBlock = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: PAGE_EASE },
  },
} as const;

export function ResumeContent() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 sm:px-6 sm:pb-32 md:pb-40">
      <header className="mx-auto max-w-2xl px-2 pt-4 text-center sm:px-4 md:pt-8">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
          initial={pageMotion.fadeUp.initial}
          animate={pageMotion.fadeUp.animate}
          transition={pageMotion.fadeUpTransition(0, 0.65)}
        >
          Resume
        </motion.p>
        <motion.h1
          className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:mt-8"
          initial={pageMotion.fadeUp.initial}
          animate={pageMotion.fadeUp.animate}
          transition={pageMotion.fadeUpTransition(0.12, 0.65)}
        >
          Experience &amp; impact
        </motion.h1>
        <motion.p
          className="mx-auto mt-8 max-w-lg text-base font-normal leading-relaxed text-muted md:mt-10 md:text-lg"
          initial={pageMotion.fadeUp.initial}
          animate={pageMotion.fadeUp.animate}
          transition={pageMotion.fadeUpTransition(0.24, 0.68)}
        >
          A snapshot of my recent roles and the work I&apos;m most proud of.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center md:mt-10"
          initial={pageMotion.fadeUp.initial}
          animate={pageMotion.fadeUp.animate}
          transition={pageMotion.fadeUpTransition(0.36, 0.65)}
        >
          <a
            href="/jmp-spdr-apr-2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-accent/45 hover:bg-white/[0.06] hover:text-foreground"
          >
            View Full Resume
          </a>
        </motion.div>
      </header>

      <section className="mx-auto mt-20 max-w-2xl md:mt-28">
        <p className="text-left text-base font-normal leading-[1.8] text-muted sm:text-[1.0625rem] sm:leading-relaxed">
          Over 7 years of experience in Product Design. Advanced proficiency in Figma and creator
          of design systems. Thrives in collaborative environments and enjoys working closely with
          fellow designers, product managers, engineers, and others. Experience designing with
          Artificial Intelligence (AI) and Large Language Model (LLM) technology. Experience
          designing for B2B, SaaS, and consumer facing software. Leverages AI tools like Cursor and
          Claude Code for rapid prototyping, bridging the gap between design and front end
          development.
        </p>
      </section>

      <div className="mx-auto mt-12 max-w-2xl space-y-24 sm:mt-16 md:mt-20 md:space-y-32">
        <section>
          <h2 className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Recent experience
          </h2>
          <ol className="relative mt-12 sm:mt-16">
            {experience.map((item, index) => {
              const isLast = index === experience.length - 1;
              return (
                <motion.li
                  key={item.id}
                  className="relative flex gap-5 pb-16 last:pb-0 sm:gap-7 sm:pb-20"
                  initial="hidden"
                  whileInView="visible"
                  viewport={pageMotion.inView}
                  variants={inViewBlock}
                >
                  <div className="relative flex w-5 shrink-0 flex-col items-center self-stretch pt-1 sm:w-6 sm:pt-1.5">
                    <span
                      className="relative z-10 size-2.5 shrink-0 rounded-full bg-accent ring-[6px] ring-background sm:size-3 sm:ring-[8px]"
                      aria-hidden
                    />
                    {!isLast ? (
                      <span
                        className="absolute left-1/2 top-5 bottom-0 w-px -translate-x-1/2 bg-white/[0.08] sm:top-6"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <div className="min-w-0 flex-1 space-y-2 pt-0.5 sm:pt-1">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-accent sm:text-base">{item.org}</p>
                    <p className="text-sm leading-relaxed text-muted sm:text-base">
                      {item.dateLine ?? (
                        <>
                          {item.period}
                          <span className="text-white/25"> · </span>
                          {item.location}
                        </>
                      )}
                    </p>
                    <ExperienceBulletList items={item.bullets} />
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={pageMotion.inViewSoft}
          variants={inViewBlock}
        >
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
        </motion.section>
      </div>
    </div>
  );
}
