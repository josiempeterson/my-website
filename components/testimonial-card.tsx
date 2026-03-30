"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ACCENT_GLOW =
  "0 0 0 1px rgba(201, 168, 124, 0.32), 0 24px 48px -16px rgba(0, 0, 0, 0.72)";
const REST_SHADOW =
  "0 0 0 1px rgba(255, 255, 255, 0.06), 0 8px 24px -12px rgba(0, 0, 0, 0.45)";

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

type TestimonialCardProps = {
  name: string;
  title: string;
  quote: string;
  imageSrc: string;
  index?: number;
};

export function TestimonialCard({
  name,
  title,
  quote,
  imageSrc,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.figure
        className="flex h-full flex-col rounded-2xl border border-white/[0.06] bg-[#0f0f0f] p-8 sm:p-10"
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-full ring-2 ring-zinc-600/80 sm:size-[4.5rem]">
            <Image
              src={imageSrc}
              alt={`${name}, ${title}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 64px, 72px"
            />
          </div>
          <figcaption className="mt-6 min-w-0 sm:ml-6 sm:mt-1 sm:pt-1">
            <p className="text-base font-semibold tracking-tight text-foreground">{name}</p>
            <p className="mt-2 text-sm leading-snug text-muted">{title}</p>
          </figcaption>
        </div>
        <blockquote className="mt-8 flex-1 text-center text-base font-normal leading-[1.75] text-muted sm:mt-10 sm:text-left sm:text-[1.0625rem] sm:leading-relaxed">
          <p>&ldquo;{quote}&rdquo;</p>
        </blockquote>
      </motion.figure>
    </motion.div>
  );
}
