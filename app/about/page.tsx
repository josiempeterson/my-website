import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const skills = [
  "User Interface Design",
  "Visual Storytelling",
  "Customer Journey Mapping",
  "Research Skills",
  "Information Architecture",
  "Design Systems",
  "iOS and Android Design",
  "AI/LLM Design",
] as const;

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-3xl flex-1 px-4 pb-24 sm:px-6 sm:pb-32 md:pb-40">
      <div
        className="mt-4 overflow-hidden rounded-2xl ring-1 ring-inset ring-white/[0.08] sm:mt-8 md:mt-12"
        aria-label="Portrait placeholder"
      >
        <div className="aspect-[16/10] w-full bg-gradient-to-b from-zinc-800 via-zinc-900 to-background sm:aspect-[5/3]" />
        <p className="border-t border-white/[0.06] px-4 py-4 text-center text-xs text-muted">
          Photo placeholder — replace with your image
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20 md:mt-28">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">About</p>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Josie Peterson
        </h1>
      </div>

      <div className="mx-auto mt-14 max-w-2xl space-y-9 text-base font-normal leading-[1.85] text-muted sm:mt-16 sm:space-y-10 sm:text-lg md:mt-20">
        <p>
          I&apos;m Josie, a Senior Product Designer based in Michigan with 7 years of experience
          crafting digital products that are both beautiful and deeply functional.
        </p>
        <p>
          My path to product design started with a love for creating things. Growing up, I was always
          drawing, building, and making. That creative drive led me to study architecture, where I
          fell in love with the idea of designing things that last. But I quickly realized that
          architecture projects could stretch on for years before you ever got to see your work come
          to life. I wanted that same level of craft and intentionality, but with the ability to
          ship, learn, and iterate faster. Product design turned out to be the perfect fit.
        </p>
        <p>
          Since then, I&apos;ve spent my career designing at companies like Vantaca, Pluralsight,
          FamilySearch, and KazooDo, working across everything from generative AI experiences to
          native mobile apps to full design systems built from the ground up. I&apos;m a Figma power
          user, a strong advocate for the people using the products I design, and I thrive when
          I&apos;m collaborating closely with engineers and product managers to solve real problems.
        </p>
        <p>
          More recently, I&apos;ve been leaning into the intersection of design and AI, both designing
          for AI powered products and using AI tools to prototype and build faster than ever.
        </p>
        <p>
          When I&apos;m not designing, you&apos;ll probably find me outdoors. I love playing soccer and
          pickleball, mountain biking with my husband, or just spending time in nature. I&apos;m also
          a bit of a plant enthusiast. I have over 100 indoor plants, so my home is basically a
          greenhouse at this point.
        </p>
        <p>
          Originally from Utah, I&apos;m currently working remotely from Michigan, but the mountains
          are calling and I&apos;ll be heading back west soon. Utah is and always will be home.
        </p>
      </div>

      <div className="mx-auto mt-20 max-w-2xl sm:mt-24 md:mt-32">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          Skills
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2 sm:mt-10 sm:gap-2.5">
          {skills.map((skill) => (
            <li key={skill}>
              <span className="inline-block rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-xs font-medium text-foreground/90 sm:text-sm">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
