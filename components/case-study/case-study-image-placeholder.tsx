type CaseStudyImagePlaceholderProps = {
  className?: string;
  /** Visual weight: hero (tallest), large, medium */
  size?: "hero" | "large" | "medium";
};

const sizeClasses: Record<NonNullable<CaseStudyImagePlaceholderProps["size"]>, string> = {
  hero: "min-h-[min(52vw,28rem)] sm:min-h-[min(48vw,32rem)] md:min-h-[22rem]",
  large: "min-h-[min(42vw,20rem)] sm:min-h-[18rem] md:min-h-[22rem]",
  medium: "min-h-[min(36vw,14rem)] sm:min-h-[14rem] md:min-h-[16rem]",
};

export function CaseStudyImagePlaceholder({
  className = "",
  size = "large",
}: CaseStudyImagePlaceholderProps) {
  return (
    <div
      className={[
        "flex w-full items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/90 text-center text-sm font-medium tracking-wide text-zinc-500",
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="img"
      aria-label="Image placeholder"
    >
      Image placeholder
    </div>
  );
}
