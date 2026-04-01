"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { tieLastTwoWords } from "@/lib/tie-last-words";

/** Subtle scale on the card shell only; borders/shadows use CSS so content stays visually locked to the container. */
const cardVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.02 },
} as const;

const sizeStyles = {
  sm: {
    figure: "p-6 sm:p-7",
    quote: "mt-5 text-sm leading-[1.75] sm:mt-6 sm:text-[0.9375rem] sm:leading-relaxed",
    figcaption: "mt-4 sm:ml-4 sm:mt-1 sm:pt-1",
    img: "size-14 sm:size-16",
    name: "text-[0.9375rem] font-semibold",
    title: "text-[1rem]",
  },
  md: {
    figure: "p-7 sm:p-8",
    quote: "mt-6 text-base leading-[1.75] sm:mt-8 sm:text-[1.0625rem] sm:leading-relaxed",
    figcaption: "mt-5 sm:ml-5 sm:mt-1 sm:pt-1",
    img: "size-16 sm:size-[4.5rem]",
    name: "text-base font-semibold",
    title: "text-[1rem]",
  },
  lg: {
    figure: "p-8 sm:p-10",
    quote: "mt-7 text-base leading-[1.8] sm:mt-10 sm:text-lg sm:leading-relaxed",
    figcaption: "mt-5 sm:ml-6 sm:mt-1 sm:pt-1",
    img: "size-[4.25rem] sm:size-[5rem]",
    name: "text-base font-semibold sm:text-lg",
    title: "text-[1rem]",
  },
} as const;

function QuoteWithHighlight({ quote, pullQuote }: { quote: string; pullQuote: string }) {
  const tied = tieLastTwoWords(quote);
  const i = quote.indexOf(pullQuote);
  if (i === -1) {
    return <>{tied}</>;
  }
  const len = pullQuote.length;
  return (
    <>
      {tied.slice(0, i)}
      <span className="font-semibold text-accent">{tied.slice(i, i + len)}</span>
      {tied.slice(i + len)}
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
  /** Solid surface (Tailwind `bg-*`), e.g. `bg-black` / `bg-[#1a1a1a]` */
  cardTone?: string;
};

export function TestimonialCard({
  name,
  title,
  quote,
  imageSrc,
  pullQuote,
  cardSize = "md",
  cardTone = "bg-black",
}: TestimonialCardProps) {
  const s = sizeStyles[cardSize];
  const isBlackSurface = cardTone === "bg-black";

  return (
    <div className="flex h-full w-full min-h-0 flex-col">
      <motion.figure
        className={`relative flex h-full min-h-0 w-full origin-center flex-col overflow-hidden rounded-2xl transition-[border-color,box-shadow] duration-200 ease-out ${
          isBlackSurface ? "border border-white/10" : "border border-transparent"
        } hover:border-accent/50 hover:shadow-[0_0_32px_-14px_rgba(132,144,122,0.2)] ${cardTone} ${s.figure}`}
        variants={cardVariants}
        initial="rest"
        whileHover="hover"
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex min-h-0 flex-1 flex-col">
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
          <blockquote
            className={`flex-1 text-center font-normal text-muted sm:text-left ${s.quote}`}
          >
            <p>
              &ldquo;
              <QuoteWithHighlight quote={quote} pullQuote={pullQuote} />
              &rdquo;
            </p>
          </blockquote>
        </div>
      </motion.figure>
    </div>
  );
}
