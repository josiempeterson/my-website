"use client";

import Link from "next/link";
import { CaseStudySection } from "@/components/case-study/case-study-section";

const linkPrimary =
  "group inline-flex items-center gap-2 text-base font-semibold text-foreground transition-colors hover:text-accent";
const linkMuted =
  "inline-flex items-center gap-2 text-base font-semibold text-muted transition-colors hover:text-accent";

export type CaseStudyNavProps = {
  previous?: { href: string; label: string; isWorkIndex?: boolean };
  next?: { href: string; label: string };
  showAllWork?: boolean;
};

export function CaseStudyNav({ previous, next, showAllWork }: CaseStudyNavProps) {
  return (
    <CaseStudySection className="mt-20 border-t border-white/[0.06] pt-14 md:mt-28 md:pt-20">
      <nav className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="min-h-[1.5rem]">
          {previous ? (
            <Link href={previous.href} className={linkPrimary}>
              <span className="transition-transform group-hover:-translate-x-0.5" aria-hidden>
                ←
              </span>
              {previous.isWorkIndex ? previous.label : `Previous: ${previous.label}`}
            </Link>
          ) : null}
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
          {next ? (
            <Link href={next.href} className={linkPrimary}>
              Next: {next.label}
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                →
              </span>
            </Link>
          ) : null}
          {showAllWork ? (
            <Link href="/work" className={linkMuted}>
              All work
              <span aria-hidden>→</span>
            </Link>
          ) : null}
        </div>
      </nav>
    </CaseStudySection>
  );
}
