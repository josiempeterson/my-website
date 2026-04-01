"use client";

import { motion } from "framer-motion";
import { PAGE_EASE, pageMotion } from "@/lib/page-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: PAGE_EASE },
  },
} as const;

type CaseStudySectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export function CaseStudySection({ children, className, id }: CaseStudySectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={pageMotion.inView}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}
