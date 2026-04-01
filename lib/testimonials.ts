export type Testimonial = {
  name: string;
  title: string;
  imageSrc: string;
  quote: string;
  /** Exact substring of `quote` to emphasize for scanning */
  pullQuote: string;
  /** Large featured block at top of recommendations page */
  featured?: boolean;
  /** Subtle accent border / glow for senior voices */
  accentHighlight?: boolean;
  /** Visual weight in the mixed grid (grid cards only) */
  cardSize?: "sm" | "md" | "lg";
  /** Tailwind grid classes for lg+ (12-col grid); grid cards only */
  gridSpanLg?: string;
  /** Subtle gradient wash behind card content (grid cards only) */
  cardWash?: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    name: "Tamara Fedde",
    title: "Director of Product Design at Pluralsight",
    imageSrc: "/recommendations/tamara-fedde.jpg",
    quote:
      "Josie is an exceptionally hard working designer who invests deeply in her process. She's beyond kind, always eager to step up and take initiative, and brings a radiant positivity anywhere she goes. She has an incredible eye for visual design, is an absolute Figma master, and is capable of tackling projects of any size and complexity.",
    pullQuote:
      "Josie is an exceptionally hard working designer who invests deeply in her process.",
    featured: true,
  },
  {
    name: "Denis Modugno",
    title: "Senior UX Designer at FamilySearch",
    imageSrc: "/recommendations/denis-modugno.jpg",
    quote:
      "Josie brings enthusiasm and positivity to everything she does. She's fast, focused, and passionate. She takes critique well, always considers other perspectives, and her design decisions are backed by user testing and research. She's a great designer and an even better team player.",
    pullQuote: "fast, focused, and passionate",
    accentHighlight: true,
    cardSize: "lg",
    gridSpanLg: "lg:col-span-12",
    cardWash:
      "bg-gradient-to-br from-violet-500/10 from-10% via-transparent via-50% to-indigo-950/22",
  },
  {
    name: "Kevin Dewey",
    title: "Senior Product Designer",
    imageSrc: "/recommendations/kevin-dewey.jpg",
    quote:
      "What sets Josie apart is her dedication to human centered design. She goes above and beyond to ensure designs are not only visually appealing but also intuitive and user friendly. Her proficiency in Figma is truly remarkable, and she's incredibly generous with her knowledge, always eager to share tips and tricks with others.",
    pullQuote: "dedication to human centered design",
    accentHighlight: true,
    cardSize: "md",
    gridSpanLg: "lg:col-span-5",
    cardWash:
      "bg-gradient-to-tl from-sky-600/9 from-5% via-transparent via-45% to-emerald-950/18",
  },
  {
    name: "Kelsey Wolstencroft",
    title: "Senior Product Designer",
    imageSrc: "/recommendations/kelsey-wolstencroft.jpg",
    quote:
      "During my two years working alongside Josie, I witnessed her remarkable problem solving skills and unwavering dedication to her craft. She is someone you can always count on, no matter the circumstances. Her expertise in Figma makes her an invaluable resource, and she's always willing to share her knowledge.",
    pullQuote: "someone you can always count on",
    cardSize: "lg",
    gridSpanLg: "lg:col-span-7",
    cardWash:
      "bg-gradient-to-tr from-cyan-600/10 from-15% via-transparent via-55% to-blue-950/20",
  },
  {
    name: "Matt Hanson",
    title: "Product Manager at Pluralsight",
    imageSrc: "/recommendations/matt-hanson.jpg",
    quote:
      "Josie jumped right into in-progress work without skipping a beat and provided immediate value. She has an extra gear. Not only did she deliver on the core work quicker than expected, she also identified additional improvements and had designs ready for those too. She's innovative, goal oriented, and truly an asset to any team.",
    pullQuote: "She has an extra gear",
    accentHighlight: true,
    cardSize: "md",
    gridSpanLg: "lg:col-span-6",
    cardWash:
      "bg-gradient-to-bl from-amber-600/10 from-20% via-transparent via-50% to-orange-950/18",
  },
  {
    name: "Matt Spencer",
    title: "Senior UX Designer",
    imageSrc: "/recommendations/matt-spencer.jpg",
    quote:
      "Josie is talented at everything, funny, and great to work with. She's a fast learner who was an early adopter of advanced Figma techniques, often teaching tools and processes to much more experienced designers. She truly cares about her craft and is someone you want on your team.",
    pullQuote: "teaching tools and processes to much more experienced designers",
    cardSize: "md",
    gridSpanLg: "lg:col-span-6",
    cardWash:
      "bg-gradient-to-b from-emerald-700/9 from-0% via-transparent via-60% to-teal-950/16",
  },
  {
    name: "Adam McPherson",
    title: "Software Engineer at Pluralsight",
    imageSrc: "/recommendations/adam-mcpherson.jpg",
    quote:
      "Josie is always positive and doesn't get frustrated even when requirements change constantly. She comes up with multiple design options for any idea and applies feedback intelligently. She makes the tedious back and forth of matching code to design seamless. I never feel like I'm waiting on her.",
    pullQuote: "I never feel like I'm waiting on her",
    cardSize: "sm",
    gridSpanLg: "lg:col-span-4",
    cardWash:
      "bg-gradient-to-r from-fuchsia-950/14 from-0% via-transparent via-40% to-violet-950/12",
  },
  {
    name: "Alli Clark",
    title: "Senior Product Designer",
    imageSrc: "/recommendations/alli-clark.jpg",
    quote:
      "Josie's motivation and self-starter attitude set her apart. She possesses a remarkable proficiency in Figma, effortlessly translating her creative vision into tangible designs that exceed expectations. She even founded a design team book club at Pluralsight. Her passion for design shines through in every project she tackles.",
    pullQuote: "passion for design shines through in every project",
    cardSize: "lg",
    gridSpanLg: "lg:col-span-8",
    cardWash:
      "bg-gradient-to-t from-rose-900/11 from-0% via-transparent via-50% to-amber-950/14",
  },
  {
    name: "River Brandon",
    title: "Manager at Pluralsight",
    imageSrc: "/recommendations/river-brandon.jpg",
    quote:
      "Josie always had a positive attitude and a helpful approach. She grew a lot during her time at Pluralsight and became a valued contributor on whatever product area she worked on. She is talented, hard working, and is going to do great work in her career.",
    pullQuote: "talented, hard working, and is going to do great work",
    cardSize: "sm",
    gridSpanLg: "lg:col-span-4",
    cardWash:
      "bg-gradient-to-l from-indigo-800/10 from-0% via-transparent via-35% to-slate-950/18",
  },
  {
    name: "Patrick Liechty",
    title: "Development Manager at FamilySearch",
    imageSrc: "/recommendations/patrick-liechty.jpg",
    quote:
      "Josie and I were on the same team at FamilySearch. She did an excellent job designing user experiences for a complex product where design was critical. Josie made complicated processes simple for the user, and we still get great feedback that the design is easy to understand and use.",
    pullQuote: "made complicated processes simple for the user",
    cardSize: "md",
    gridSpanLg: "lg:col-span-8",
    cardWash:
      "bg-[radial-gradient(100%_120%_at_100%_0%,rgba(6,182,212,0.12),transparent_52%,rgba(5,150,105,0.09)_100%)]",
  },
];

export const featuredTestimonial = testimonials.find((t) => t.featured)!;
export const gridTestimonials = testimonials.filter((t) => !t.featured);
