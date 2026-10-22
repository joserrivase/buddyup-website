export function SectionHeading({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <h2
        className={`text-3xl font-extrabold tracking-tight md:text-5xl ${light ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-white/85" : "text-muted"}`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
