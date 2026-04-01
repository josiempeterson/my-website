"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PAGE_EASE, pageMotion } from "@/lib/page-motion";

const skills = [
  "User Interface Design",
  "Visual Storytelling",
  "Customer Journey Mapping",
  "Research Skills",
  "Information Architecture",
  "Design Systems",
  "iOS and Android Design",
  "AI/LLM Design",
  "Rapid Prototyping with AI",
  "AI Prototyping with Cursor",
  "Claude Code & AI Development",
  "Design to Code Workflow",
] as const;

const BIO_PARAS = [
  "I'm Josie, a Senior Product Designer based in Michigan with 7 years of experience crafting digital products that are both beautiful and deeply functional.",
  "My path to product design started with a love for creating things. Growing up, I was always drawing, building, and making. That creative drive led me to study architecture, where I fell in love with the idea of designing things that last. But I quickly realized that architecture projects could stretch on for years before you ever got to see your work come to life. I wanted that same level of craft and intentionality, but with the ability to ship, learn, and iterate faster. Product design turned out to be the perfect fit.",
  "Since then, I've spent my career designing at companies like Vantaca, Pluralsight, FamilySearch, and KazooDo, working across everything from generative AI experiences to native mobile apps to full design systems built from the ground up. I'm a Figma power user, a strong advocate for the people using the products I design, and I thrive when I'm collaborating closely with engineers and product managers to solve real problems.",
  "More recently, I've been leaning into the intersection of design and AI, both designing for AI powered products and using AI tools to prototype and build faster than ever.",
  "When I'm not designing, you'll probably find me outdoors. I love playing soccer and pickleball, mountain biking with my husband, or just spending time in nature. I'm also a bit of a plant enthusiast. I have over 100 indoor plants, so my home is basically a greenhouse at this point.",
  "Originally from Utah, I'm currently working remotely from Michigan, but the mountains are calling and I'll be heading back west soon. Utah is and always will be home.",
] as const;

const bioAfterHeaderDelay = 0.38;
const bioStagger = 0.085;
const skillsStartDelay =
  bioAfterHeaderDelay + (BIO_PARAS.length - 1) * bioStagger + 0.55;

const fadeUpItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: PAGE_EASE },
  },
} as const;

const skillTagItem = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: PAGE_EASE },
  },
} as const;

export function AboutContent() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 pb-24 sm:px-6 sm:pb-32 md:pb-40">
      <header className="mx-auto mt-6 flex w-full max-w-2xl justify-center sm:mt-8 md:mt-12">
        <motion.div
          className="inline-flex max-w-full flex-row items-center gap-5 sm:gap-8 md:gap-10"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={pageMotion.fadeUpTransition(0, 0.72)}
        >
          <div className="relative size-[min(12.5rem,calc(100vw-3rem))] shrink-0 overflow-hidden rounded-full ring-2 ring-white/[0.12]">
            <Image
              src="/josie-headshot.jpg"
              alt="Josie Peterson, Senior Product Designer"
              fill
              className="object-cover object-top"
              sizes="(max-width: 480px) 85vw, 200px"
              priority
            />
          </div>
          <div className="min-w-0 text-left sm:max-w-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              About
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:mt-4 sm:text-4xl md:text-5xl">
              Josie Peterson
            </h1>
            <p className="mt-2 text-base font-normal text-muted sm:mt-3 sm:text-lg">
              Senior Product Designer
            </p>
          </div>
        </motion.div>
      </header>

      <motion.div
        className="mx-auto mt-12 max-w-2xl space-y-9 text-base font-normal leading-[1.85] text-muted sm:mt-14 sm:space-y-10 sm:text-lg md:mt-16"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: bioStagger,
              delayChildren: bioAfterHeaderDelay,
            },
          },
        }}
      >
        {BIO_PARAS.map((text, i) => (
          <motion.p key={i} variants={fadeUpItem} className="block">
            {text}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="mx-auto mt-20 max-w-2xl sm:mt-24 md:mt-32"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.052,
              delayChildren: skillsStartDelay,
            },
          },
        }}
      >
        <motion.p
          variants={skillTagItem}
          className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted"
        >
          Skills
        </motion.p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-2.5">
          {skills.map((skill) => (
            <motion.li key={skill} variants={skillTagItem}>
              <span className="inline-block rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs font-medium text-foreground/90 sm:text-sm">
                {skill}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
