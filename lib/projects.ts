export type PortfolioProject = {
  id: string;
  title: string;
  description: string;
  tags: readonly string[];
  thumb: string;
  href?: string;
};

export const portfolioProjects: readonly PortfolioProject[] = [
  {
    id: "ai-assistant",
    title: "Pluralsight's Generative AI Assistant",
    description: "Leading the design of an AI assistant serving 7.7M+ users",
    tags: ["Generative AI", "Product Design"],
    thumb: "bg-gradient-to-br from-violet-500/75 via-indigo-600/70 to-slate-950/90",
    href: "/work/ai-assistant",
  },
  {
    id: "design-system",
    title: "FamilySearch Design System",
    description: "Building a scalable design system adopted by 50+ designers",
    tags: ["Design Systems", "Figma"],
    thumb: "bg-gradient-to-br from-sky-500/70 via-teal-600/65 to-emerald-950/85",
    href: "/work/design-system",
  },
  {
    id: "certification-dashboard",
    title: "Certification Dashboard",
    description: "A data-driven dashboard attracting 76K visitors in month one",
    tags: ["Data Visualization", "Product Design"],
    thumb: "bg-gradient-to-br from-cyan-500/70 via-blue-600/65 to-slate-950/90",
    href: "/work/certification-dashboard",
  },
  {
    id: "vantaca-iq",
    title: "Vantaca IQ",
    description: "Analytics platform for 340+ companies and 36,000+ associations",
    tags: ["Data Analytics", "SaaS"],
    thumb: "bg-gradient-to-br from-amber-600/65 via-orange-700/55 to-zinc-950/90",
    href: "/work/vantaca-iq",
  },
  {
    id: "revenue-manager",
    title: "Revenue Manager",
    description: "Billing platform serving 17,000+ associations",
    tags: ["Enterprise SaaS", "Fintech"],
    thumb: "bg-gradient-to-br from-emerald-600/60 via-teal-700/55 to-slate-950/90",
    href: "/work/revenue-manager",
  },
  {
    id: "community-impact",
    title: "Community Impact Statement",
    description: "Helping management companies prove their value to HOA boards",
    tags: ["Data Visualization", "Reporting"],
    thumb: "bg-gradient-to-br from-rose-600/55 via-amber-800/40 to-zinc-950/95",
    href: "/work/community-impact",
  },
];
