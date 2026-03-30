import type { Metadata } from "next";
import { TestimonialCard } from "@/components/testimonial-card";

export const metadata: Metadata = {
  title: "Recommendations",
};

const testimonials = [
  {
    name: "Patrick Liechty",
    title: "Development Manager at FamilySearch",
    imageSrc: "/recommendations/patrick-liechty.jpg",
    quote:
      "Josie and I were on the same team at FamilySearch. She did an excellent job designing user experiences for a complex product where design was critical. Josie made complicated processes simple for the user, and we still get great feedback that the design is easy to understand and use.",
  },
  {
    name: "Matt Spencer",
    title: "Senior UX Designer",
    imageSrc: "/recommendations/matt-spencer.jpg",
    quote:
      "Josie is talented at everything, funny, and great to work with. She's a fast learner who was an early adopter of advanced Figma techniques, often teaching tools and processes to much more experienced designers. She truly cares about her craft and is someone you want on your team.",
  },
  {
    name: "Denis Modugno",
    title: "Senior UX Designer at FamilySearch",
    imageSrc: "/recommendations/denis-modugno.jpg",
    quote:
      "Josie brings enthusiasm and positivity to everything she does. She's fast, focused, and passionate. She takes critique well, always considers other perspectives, and her design decisions are backed by user testing and research. She's a great designer and an even better team player.",
  },
  {
    name: "Tamara Fedde",
    title: "Director of Product Design at Pluralsight",
    imageSrc: "/recommendations/tamara-fedde.jpg",
    quote:
      "Josie is an exceptionally hard working designer who invests deeply in her process. She's beyond kind, always eager to step up and take initiative, and brings a radiant positivity anywhere she goes. She has an incredible eye for visual design, is an absolute Figma master, and is capable of tackling projects of any size and complexity.",
  },
  {
    name: "Matt Hanson",
    title: "Product Manager at Pluralsight",
    imageSrc: "/recommendations/matt-hanson.jpg",
    quote:
      "Josie jumped right into in-progress work without skipping a beat and provided immediate value. She has an extra gear. Not only did she deliver on the core work quicker than expected, she also identified additional improvements and had designs ready for those too. She's innovative, goal oriented, and truly an asset to any team.",
  },
  {
    name: "Adam McPherson",
    title: "Software Engineer at Pluralsight",
    imageSrc: "/recommendations/adam-mcpherson.jpg",
    quote:
      "Josie is always positive and doesn't get frustrated even when requirements change constantly. She comes up with multiple design options for any idea and applies feedback intelligently. She makes the tedious back and forth of matching code to design seamless. I never feel like I'm waiting on her.",
  },
  {
    name: "Kevin Dewey",
    title: "Senior Product Designer",
    imageSrc: "/recommendations/kevin-dewey.jpg",
    quote:
      "What sets Josie apart is her dedication to human centered design. She goes above and beyond to ensure designs are not only visually appealing but also intuitive and user friendly. Her proficiency in Figma is truly remarkable, and she's incredibly generous with her knowledge, always eager to share tips and tricks with others.",
  },
  {
    name: "Alli Clark",
    title: "Senior Product Designer",
    imageSrc: "/recommendations/alli-clark.jpg",
    quote:
      "Josie's motivation and self-starter attitude set her apart. She possesses a remarkable proficiency in Figma, effortlessly translating her creative vision into tangible designs that exceed expectations. She even founded a design team book club at Pluralsight. Her passion for design shines through in every project she tackles.",
  },
  {
    name: "Kelsey Wolstencroft",
    title: "Senior Product Designer",
    imageSrc: "/recommendations/kelsey-wolstencroft.jpg",
    quote:
      "During my two years working alongside Josie, I witnessed her remarkable problem solving skills and unwavering dedication to her craft. She is someone you can always count on, no matter the circumstances. Her expertise in Figma makes her an invaluable resource, and she's always willing to share her knowledge.",
  },
  {
    name: "River Brandon",
    title: "Manager at Pluralsight",
    imageSrc: "/recommendations/river-brandon.jpg",
    quote:
      "Josie always had a positive attitude and a helpful approach. She grew a lot during her time at Pluralsight and became a valued contributor on whatever product area she worked on. She is talented, hard working, and is going to do great work in her career.",
  },
] as const;

export default function RecommendationsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl flex-1 px-4 pb-24 sm:px-6 sm:pb-32 md:pb-40">
      <header className="mx-auto max-w-2xl px-2 pt-4 text-center sm:px-4 md:pt-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          Recommendations
        </p>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl md:mt-8">
          What colleagues say
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-base font-normal leading-relaxed text-muted md:mt-10 md:text-lg">
          Kind words from managers, designers, engineers, and collaborators.
        </p>
      </header>

      <div className="mt-20 grid grid-cols-1 gap-10 md:mt-28 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:gap-y-14">
        {testimonials.map((t, i) => (
          <TestimonialCard
            key={t.name}
            name={t.name}
            title={t.title}
            quote={t.quote}
            imageSrc={t.imageSrc}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
