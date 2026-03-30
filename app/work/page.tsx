import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { portfolioProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 sm:px-6 sm:pb-32 md:pb-40">
      <header className="mx-auto max-w-2xl px-2 pt-4 text-center sm:px-4 md:pt-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Work</p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:mt-8">
          Case studies
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-base font-normal leading-relaxed text-muted md:mt-10 md:text-lg">
          Selected projects and process deep-dives. Placeholder cards below — swap in real work when
          ready.
        </p>
      </header>

      <div className="mt-20 grid grid-cols-1 gap-12 md:mt-28 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-y-20">
        {portfolioProjects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
