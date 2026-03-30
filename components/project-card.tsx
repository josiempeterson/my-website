"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { PortfolioProject } from "@/lib/projects";

const MotionLink = motion.create(Link);

const ACCENT_GLOW =
  "0 0 0 1px rgba(201, 168, 124, 0.38), 0 28px 56px -18px rgba(0, 0, 0, 0.78)";
const REST_SHADOW =
  "0 0 0 1px rgba(255, 255, 255, 0.06), 0 8px 24px -12px rgba(0, 0, 0, 0.5)";

const cardVariants = {
  rest: {
    scale: 1,
    boxShadow: REST_SHADOW,
  },
  hover: {
    scale: 1.03,
    boxShadow: ACCENT_GLOW,
  },
} as const;

const thumbVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.07,
  },
} as const;

type ProjectCardProps = {
  project: Pick<PortfolioProject, "title" | "description" | "tags" | "thumb">;
  href?: string;
  index?: number;
};

function CardMeta({ project }: { project: ProjectCardProps["project"] }) {
  return (
    <div className="flex flex-col gap-5 p-5 sm:p-6 md:p-7">
      <div className="flex gap-4">
        <div
          className="size-11 shrink-0 rounded-xl bg-zinc-800/90 ring-1 ring-inset ring-white/10"
          aria-hidden
        />
        <div className="min-w-0 flex-1 pt-0.5">
          <h3 className="text-base font-semibold tracking-tight text-foreground sm:text-lg">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
            {project.description}
          </p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted">
              <span className="size-1 shrink-0 rounded-full bg-accent/90" aria-hidden />
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectCard({ project, href, index = 0 }: ProjectCardProps) {
  const inViewTransition = {
    duration: 0.65,
    delay: index * 0.11,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const hoverTransition = { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const };

  const sharedClass =
    "block overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0f0f0f] outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const thumb = (
    <div className="overflow-hidden">
      <motion.div
        variants={thumbVariants}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="origin-center"
      >
        <div
          className={`aspect-[16/11] w-full shrink-0 ${project.thumb}`}
          aria-hidden
        />
      </motion.div>
    </div>
  );

  if (href) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={inViewTransition}
      >
        <MotionLink
          href={href}
          className={sharedClass}
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          transition={hoverTransition}
        >
          {thumb}
          <CardMeta project={project} />
        </MotionLink>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={inViewTransition}
    >
      <motion.article
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        transition={hoverTransition}
        className={`${sharedClass} cursor-default`}
      >
        {thumb}
        <CardMeta project={project} />
      </motion.article>
    </motion.div>
  );
}
