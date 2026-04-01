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

const sizeStyles = {
  sm: {
    figure: "p-6 sm:p-7",
    quote: "mt-5 text-sm leading-[1.75] sm:mt-6 sm:text-[0.9375rem] sm:leading-relaxed",
    figcaption: "mt-4 sm:ml-4 sm:mt-1 sm:pt-1",
    img: "size-14 sm:size-16",
    name: "text-[0.9375rem] font-semibold",
    title: "text-xs sm:text-sm",
  },
  md: {
    figure: "p-7 sm:p-8",
    quote: "mt-6 text-base leading-[1.75] sm:mt-8 sm:text-[1.0625rem] sm:leading-relaxed",
    figcaption: "mt-5 sm:ml-5 sm:mt-1 sm:pt-1",
    img: "size-16 sm:size-[4.5rem]",
    name: "text-base font-semibold",
    title: "text-sm",
  },
  lg: {
    figure: "p-8 sm:p-10",
    quote: "mt-7 text-base leading-[1.8] sm:mt-10 sm:text-lg sm:leading-relaxed",
    figcaption: "mt-5 sm:ml-6 sm:mt-1 sm:pt-1",
    img: "size-[4.25rem] sm:size-[5rem]",
    name: "text-base font-semibold sm:text-lg",
    title: "text-sm sm:text-base",
  },
} as const;

function QuoteWithHighlight({ quote, pullQuote }: { quote: string; pullQuote: string }) {
  const i = quote.indexOf(pullQuote);
  if (i === -1) {
    return <>{quote}</>;
  }
  return (
    <>
      {quote.slice(0, i)}
      <span className="font-semibold text-accent">{pullQuote}</span>
      {quote.slice(i + pullQuote.length)}
    </>
  );
}

export type TestimonialCardProps = {
  name: string;
  title: string;
  quote: string;
  imageSrc: string;
  pullQuote: string;
  cardSize?: "sm" | "md" | "lg";
  accentHighlight?: boolean;
  /** Subtle gradient wash (Tailwind classes) layered behind content */
  cardWash?: string;
};

export function TestimonialCard({
  name,
  title,
  quote,
  imageSrc,
  pullQuote,
  cardSize = "md",
  accentHighlight = false,
  cardWash,
}: TestimonialCardProps) {
  const s = sizeStyles[cardSize];

  const inner = (
    <motion.figure
      className={`relative flex h-full min-h-0 w-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0f0f0f] ${s.figure}`}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {cardWash ? (
        <div
          className={`pointer-events-none absolute inset-0 rounded-2xl ${cardWash}`}
          aria-hidden
        />
      ) : null}
      <div className="relative z-[1] flex min-h-0 flex-1 flex-col">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <div
            className={`relative shrink-0 overflow-hidden rounded-full ring-2 ring-zinc-600/80 ${s.img}`}
          >
            <Image
              src={imageSrc}
              alt={`${name}, ${title}`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 64px, 80px"
            />
          </div>
          <figcaption className={`min-w-0 ${s.figcaption}`}>
            <p className={`tracking-tight text-foreground ${s.name}`}>{name}</p>
            <p className={`mt-1.5 leading-snug text-muted ${s.title}`}>{title}</p>
          </figcaption>
        </div>
        <blockquote className={`flex-1 text-center font-normal text-muted sm:text-left ${s.quote}`}>
          <p>
            &ldquo;
            <QuoteWithHighlight quote={quote} pullQuote={pullQuote} />
            &rdquo;
          </p>
        </blockquote>
      </div>
    </motion.figure>
  );

  if (accentHighlight) {
    return (
      <div className="flex h-full w-full rounded-2xl bg-gradient-to-br from-accent/45 via-accent/12 to-violet-600/25 p-[1px] shadow-[0_0_40px_-12px_rgba(201,168,124,0.35)]">
        <div className="flex min-h-0 flex-1 flex-col">{inner}</div>
      </div>
    );
  }

  return <div className="flex h-full w-full flex-col">{inner}</div>;
}
