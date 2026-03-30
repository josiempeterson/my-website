"use client";

import { motion } from "framer-motion";

const FULL_NAME = "Josie Peterson";
const LETTER_STAGGER = 0.032;
const LETTER_DURATION = 0.58;
const titleDelay =
  (FULL_NAME.length - 1) * LETTER_STAGGER + LETTER_DURATION + 0.08;
const taglineDelay = titleDelay + 0.62;

const ORBS = [
  {
    className:
      "absolute -left-[20%] top-[-10%] h-[min(70vw,480px)] w-[min(95vw,560px)] rounded-full bg-violet-950/70 blur-[120px]",
    animate: {
      x: [0, 36, -24, 0],
      y: [0, 28, -18, 0],
      opacity: [0.4, 0.58, 0.42],
    },
    duration: 20,
  },
  {
    className:
      "absolute -right-[15%] top-[20%] h-[min(60vw,400px)] w-[min(80vw,480px)] rounded-full bg-blue-950/65 blur-[110px]",
    animate: {
      x: [0, -32, 22, 0],
      y: [0, 40, -22, 0],
      opacity: [0.35, 0.52, 0.38],
    },
    duration: 24,
  },
  {
    className:
      "absolute left-[25%] bottom-[-15%] h-[min(55vw,360px)] w-[min(70vw,420px)] rounded-full bg-indigo-950/50 blur-[100px]",
    animate: {
      x: [0, -28, 18, 0],
      y: [0, -32, 20, 0],
      opacity: [0.28, 0.45, 0.32],
    },
    duration: 22,
  },
];

const PARTICLES = [
  { left: "8%", top: "22%", tx: [0, 12, -8, 0], ty: [0, -18, 10, 0], d: 26 },
  { left: "18%", top: "68%", tx: [0, -10, 14, 0], ty: [0, 14, -8, 0], d: 30 },
  { left: "42%", top: "12%", tx: [0, 8, -12, 0], ty: [0, 20, -6, 0], d: 28 },
  { left: "55%", top: "45%", tx: [0, -14, 6, 0], ty: [0, -12, 16, 0], d: 32 },
  { left: "72%", top: "28%", tx: [0, 10, -6, 0], ty: [0, 16, -10, 0], d: 27 },
  { left: "88%", top: "58%", tx: [0, -8, 10, 0], ty: [0, -14, 8, 0], d: 29 },
  { left: "30%", top: "38%", tx: [0, 14, -10, 0], ty: [0, -8, 12, 0], d: 31 },
  { left: "65%", top: "78%", tx: [0, -12, 8, 0], ty: [0, 10, -14, 0], d: 33 },
  { left: "12%", top: "48%", tx: [0, 6, -14, 0], ty: [0, -20, 6, 0], d: 25 },
  { left: "92%", top: "35%", tx: [0, -10, 4, 0], ty: [0, 12, -8, 0], d: 28 },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  return (
    <section className="relative mx-auto mt-2 max-w-3xl overflow-hidden rounded-3xl px-2 py-16 text-center sm:mt-0 sm:px-4 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-[#0a0a0a]" />
        {ORBS.map((orb, i) => (
          <motion.div
            key={i}
            className={orb.className}
            animate={orb.animate}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        <motion.div
          className="absolute inset-0 bg-[#0a0a0a]/75"
          animate={{ opacity: [0.72, 0.62, 0.78] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute size-1 rounded-full bg-white/25 shadow-[0_0_12px_rgba(255,255,255,0.35)]"
            style={{ left: p.left, top: p.top }}
            animate={{ x: p.tx, y: p.ty, opacity: [0.2, 0.45, 0.28, 0.35] }}
            transition={{
              duration: p.d,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <p className="text-sm font-normal tracking-wide text-muted md:text-base">
        Hi, I&apos;m Josie.
      </p>

      <h1 className="mt-6 text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-foreground">
        {FULL_NAME.split("").map((char, i) => (
          <motion.span
            key={`${i}-${char}`}
            className="inline-block"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: i * LETTER_STAGGER,
              duration: LETTER_DURATION,
              ease: easeOut,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </h1>

      <motion.p
        className="mt-8 text-lg font-normal text-muted md:mt-10 md:text-xl"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: titleDelay,
          duration: 0.65,
          ease: easeOut,
        }}
      >
        Senior Product Designer
      </motion.p>

      <motion.p
        className="mx-auto mt-10 max-w-2xl text-base font-normal leading-[1.75] text-muted md:mt-14 md:text-lg md:leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: taglineDelay,
          duration: 0.72,
          ease: easeOut,
        }}
      >
        With 7 years of experience in Product Design, I have honed my skills and expertise,
        demonstrating advanced proficiency in strategic thinking, user advocacy, and design systems.
        I excel in collaborating with fellow designers, product managers, and engineers to build
        innovative and inspiring products. I also leverage AI tools and rapid prototyping to bring
        ideas to life faster, bridging the gap between design and development.
      </motion.p>
    </section>
  );
}
