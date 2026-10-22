import { SectionHeading } from "./SectionHeading";

const examples = [
  {
    label: "The stakes",
    title: "Winner buys dinner",
    body: "Name the prize before you start. Loser pays.",
  },
  {
    label: "How you win",
    title: "First to 20 workouts",
    body: "First to a number, most by a date, or the longest streak.",
  },
  {
    label: "The deadline",
    title: "Most books by June 1",
    body: "When the date hits, BuddyUp names a winner.",
  },
];

export function Challenge() {
  return (
    <section className="bg-page px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Friendly, or put something on the line"
          subtitle="Keep it kind, or turn the same goal into a challenge. You pick how someone wins."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {examples.map((example) => (
            <article key={example.title} className="rounded-3xl bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-bold tracking-widest text-teal uppercase">{example.label}</p>
              <h3 className="mt-3 text-2xl font-extrabold text-ink">{example.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{example.body}</p>
            </article>
          ))}
        </div>
        <div className="brand-gradient mt-4 rounded-3xl px-6 py-8 text-white md:flex md:items-center md:justify-between md:px-10">
          <div>
            <p className="text-sm font-semibold text-white/80">Challenge Mode</p>
            <p className="mt-2 text-2xl font-extrabold md:text-3xl">When it ends, there is a winner.</p>
          </div>
          <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-white/90 md:mt-0">
            Groups use the same rules. A leaderboard shows who is ahead until the deadline.
          </p>
        </div>
      </div>
    </section>
  );
}
