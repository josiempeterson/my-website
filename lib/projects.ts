export const portfolioProjects = [
  {
    id: "1",
    title: "Case study one",
    description:
      "End-to-end product exploration, from discovery through high-fidelity UI and handoff.",
    tags: ["SaaS", "Web"] as const,
    thumb: "bg-gradient-to-br from-amber-400/90 via-orange-500/75 to-rose-600/70",
  },
  {
    id: "2",
    title: "Case study two",
    description:
      "Mobile-first flows, usability testing, and a scalable component library for native apps.",
    tags: ["Mobile", "Research"] as const,
    thumb: "bg-gradient-to-br from-sky-400/85 via-blue-500/70 to-indigo-600/65",
  },
  {
    id: "3",
    title: "Case study three",
    description:
      "AI-assisted workflows, rapid prototyping, and design patterns for generative experiences.",
    tags: ["AI", "Prototyping"] as const,
    thumb: "bg-gradient-to-br from-violet-400/80 via-purple-500/70 to-fuchsia-600/65",
  },
  {
    id: "4",
    title: "Case study four",
    description:
      "Information architecture refresh, journey mapping, and a unified cross-platform system.",
    tags: ["IA", "Design system"] as const,
    thumb: "bg-gradient-to-br from-emerald-400/80 via-teal-500/70 to-cyan-600/60",
  },
  {
    id: "5",
    title: "Case study five",
    description:
      "Visual storytelling, marketing surfaces, and conversion-focused iteration with PM and eng.",
    tags: ["Marketing", "Web"] as const,
    thumb: "bg-gradient-to-br from-orange-300/90 via-amber-500/75 to-yellow-600/55",
  },
  {
    id: "6",
    title: "Case study six",
    description:
      "Enterprise dashboards, accessibility improvements, and documentation for design ops.",
    tags: ["Enterprise", "A11y"] as const,
    thumb: "bg-gradient-to-br from-fuchsia-400/75 via-pink-500/70 to-rose-600/65",
  },
] as const;

export type PortfolioProject = (typeof portfolioProjects)[number];
