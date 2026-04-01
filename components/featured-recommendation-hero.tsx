"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Testimonial } from "@/lib/testimonials";
import { PAGE_EASE, pageMotion } from "@/lib/page-motion";

type FeaturedRecommendationHeroProps = {
  testimonial: Testimonial;
};

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: PAGE_EASE },
  },
} as const;

export function FeaturedRecommendationHero({ testimonial }: FeaturedRecommendationHeroProps) {
  const { name, title, imageSrc, quote, pullQuote } = testimonial;

  return (
    <motion.section
      className="relative mt-16 md:mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={pageMotion.inViewSoft}
      variants={heroVariants}
      aria-labelledby="featured-recommendation-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2rem]">
        <div
          className="absolute -left-1/4 top-1/2 h-[min(100%,28rem)] w-[min(140%,42rem)] -translate-y-1/2 rounded-full bg-accent/25 blur-[100px]"
          aria-hidden
        />
        <div
          className="absolute -right-1/4 top-0 h-[min(90%,24rem)] w-[min(120%,36rem)] rounded-full bg-violet-600/20 blur-[90px]"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-1/3 h-48 w-64 rounded-full bg-amber-900/20 blur-[80px]"
          aria-hidden
        />
      </div>

      <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#0a0a0a]/80 px-6 py-12 shadow-[0_0_0_1px_rgba(201,168,124,0.12)] backdrop-blur-sm sm:px-10 sm:py-14 md:px-14 md:py-16">
        <p
          id="featured-recommendation-heading"
          className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-accent/90"
        >
          Featured
        </p>

        <blockquote className="mx-auto mt-8 max-w-4xl text-center">
          <p className="text-[clamp(1.35rem,4.5vw,2.75rem)] font-bold leading-[1.2] tracking-tight text-foreground">
            &ldquo;{pullQuote}&rdquo;
          </p>
          <p className="mx-auto mt-10 max-w-3xl text-left text-base font-normal leading-[1.85] text-muted sm:text-lg">
            {quote}
          </p>
        </blockquote>

        <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-6 border-t border-white/[0.06] pt-10 sm:flex-row sm:items-center sm:justify-center sm:gap-8">
          <div className="relative size-20 shrink-0 overflow-hidden rounded-full ring-2 ring-accent/35 sm:size-24">
            <Image
              src={imageSrc}
              alt={`${name}, ${title}`}
              fill
              className="object-cover"
              sizes="96px"
              priority
            />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-semibold tracking-tight text-foreground">{name}</p>
            <p className="mt-1.5 text-sm leading-snug text-muted">{title}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
