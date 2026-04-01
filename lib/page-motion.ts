/** Matches home hero easing — smooth ease-out */
export const PAGE_EASE = [0.22, 1, 0.36, 1] as const;

export const pageMotion = {
  fadeUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
  fadeUpTransition: (delay = 0, duration = 0.65) => ({
    duration,
    delay,
    ease: PAGE_EASE,
  }),
  inView: {
    once: true as const,
    amount: 0.15 as const,
  },
  inViewSoft: {
    once: true as const,
    amount: 0.12 as const,
  },
};
