import { features } from "../data";
import { SectionHeading } from "./SectionHeading";

const icons = [
  HandshakeIcon,
  ListIcon,
  TrophyIcon,
  FlameIcon,
  LinkIcon,
  EyeIcon,
];

export function Features() {
  return (
    <section id="features" className="bg-page px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Built for showing up"
          subtitle="Every decision puts you and your buddy first — not a feed, not a corporate scoreboard."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <article
                key={feature.title}
                className="rounded-3xl bg-white p-6 shadow-sm md:p-8"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl brand-gradient text-white">
                  <Icon />
                </div>
                <h3 className="text-lg font-bold text-ink">{feature.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{feature.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HandshakeIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11a3 3 0 10-6 0M8 11a3 3 0 10-2 5.2M18 16.2A3 3 0 0016 11M6 19v-1a3 3 0 013-3h6a3 3 0 013 3v1"
      />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6h12M9 12h12M9 18h12M4 6h.01M4 12h.01M4 18h.01" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5h8v5a4 4 0 01-8 0V5zM8 5H5a2 2 0 002 4h1M16 5h3a2 2 0 01-2 4h-1M12 14v3m-3 2h6" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3s6 5 6 10a6 6 0 11-12 0c0-2 1.5-4.5 3-6 0 3 2 3 2 3S10 6 12 3z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 13a5 5 0 007.07 0l1.41-1.41a5 5 0 00-7.07-7.07L10 5.93M14 11a5 5 0 00-7.07 0L5.5 12.41a5 5 0 007.07 7.07L14 18.07" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" strokeWidth={2} />
    </svg>
  );
}
