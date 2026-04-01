import { HomeHero } from "@/components/home-hero";
import { ProjectCard } from "@/components/project-card";
import { portfolioProjects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 sm:px-6 sm:pb-32 md:pb-40">
      <HomeHero />

      <div className="flex justify-center py-20 md:py-28">
        <a
          href="#latest-work"
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted transition-colors duration-200 hover:border-white/20 hover:text-foreground"
        >
          Latest work
          <span aria-hidden className="text-sm leading-none">
            ↓
          </span>
        </a>
      </div>

      <section id="latest-work" className="scroll-mt-28">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-y-20">
          {portfolioProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} href={p.href ?? "/work"} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
