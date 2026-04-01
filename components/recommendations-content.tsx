"use client";

import { motion } from "framer-motion";
import { FeaturedRecommendationHero } from "@/components/featured-recommendation-hero";
import { TestimonialCard } from "@/components/testimonial-card";
import { featuredTestimonial, gridTestimonials } from "@/lib/testimonials";
import { PAGE_EASE, pageMotion } from "@/lib/page-motion";

const cardGridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
} as const;

const cardItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: PAGE_EASE },
  },
} as const;

export function RecommendationsContent() {
  return (
    <div className="mx-auto w-full max-w-6xl flex-1 px-4 pb-24 sm:px-6 sm:pb-32 md:pb-40">
      <header className="mx-auto max-w-2xl px-2 pt-4 text-center sm:px-4 md:pt-8">
        <motion.p
          className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
          initial={pageMotion.fadeUp.initial}
          animate={pageMotion.fadeUp.animate}
          transition={pageMotion.fadeUpTransition(0, 0.65)}
        >
          Recommendations
        </motion.p>
        <motion.h1
          className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:mt-8"
          initial={pageMotion.fadeUp.initial}
          animate={pageMotion.fadeUp.animate}
          transition={pageMotion.fadeUpTransition(0.12, 0.65)}
        >
          What colleagues say
        </motion.h1>
        <motion.p
          className="mx-auto mt-8 max-w-lg text-base font-normal leading-relaxed text-muted md:mt-10 md:text-lg"
          initial={pageMotion.fadeUp.initial}
          animate={pageMotion.fadeUp.animate}
          transition={pageMotion.fadeUpTransition(0.24, 0.68)}
        >
          Kind words from managers, designers, engineers, and collaborators.
        </motion.p>
      </header>

      <FeaturedRecommendationHero testimonial={featuredTestimonial} />

      <motion.div
        className="mt-12 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={pageMotion.inViewSoft}
        variants={cardGridVariants}
      >
        {gridTestimonials.map((t) => (
          <motion.div
            key={t.name}
            className={`col-span-1 flex min-h-0 min-w-0 ${t.gridSpanLg ?? "lg:col-span-6"}`}
            variants={cardItemVariants}
          >
            <TestimonialCard
              name={t.name}
              title={t.title}
              quote={t.quote}
              imageSrc={t.imageSrc}
              pullQuote={t.pullQuote}
              cardSize={t.cardSize ?? "md"}
              accentHighlight={t.accentHighlight}
              cardWash={t.cardWash}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
