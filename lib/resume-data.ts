export type ExperienceEntry = {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  dateLine?: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    id: "vantaca",
    role: "Senior Product Designer",
    org: "Vantaca",
    period: "Apr 2024 - Present",
    location: "Remote",
    bullets: [
      "Designed and shipped Vantaca IQ's dynamic reporting, community impact statements, payment insights, and industry benchmarking tools, giving management companies and board members actionable data at scale, now used by 340+ management companies managing 36,000+ live associations, with weekly engagement growing steadily.",
      "Led the design of Revenue Manager, a comprehensive billing platform serving over 100 management companies and processing billing for 17,000+ associations, centralizing contract management, charge generation, and invoice processing to replace fragmented accounting workflows.",
      "Built working front end prototypes using Cursor and Claude Code, providing engineers with production-ready components and dramatically accelerating the design to development handoff.",
      "Designed employee performance tracking and benchmarking features for IQ, enabling customers to evaluate staffing decisions with real data.",
    ],
  },
  {
    id: "pluralsight",
    role: "Senior Product Designer",
    org: "Pluralsight",
    period: "Feb 2021 - Mar 2024",
    location: "Draper, Utah",
    dateLine: "Feb 2021 - Mar 2024, Draper, Utah",
    bullets: [
      "Led creation of Pluralsight's Generative AI Assistant, balancing business goals and customer needs to deliver personalized content faster.",
      "Redesigned website information architecture around technology domains, boosting engagement and content accessibility for 7.7M+ users.",
      "Launched admin dashboard attracting 76K unique visitors in its first month.",
    ],
  },
  {
    id: "kazoodo",
    role: "Senior Product Designer",
    org: "KazooDo, Freelance",
    period: "Aug 2019 - Sep 2022",
    location: "Remote",
    bullets: [
      "Architected a comprehensive design system from the ground up that unified the visual language across all products and platforms.",
      "Partnered with product and engineering leadership to deliver design solutions balancing user experience with business and technical constraints.",
    ],
  },
];

export const education = [
  {
    school: "Brigham Young University - Idaho",
    degree: "Bachelor of Science in Web Design and Development",
    years: "2017 - 2019",
  },
] as const;
