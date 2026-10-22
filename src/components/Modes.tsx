import { modes } from "../data";
import { SectionHeading } from "./SectionHeading";

export function Modes() {
  return (
    <section className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Solo, buddy, or the whole crew"
          subtitle="Do it on your own, with one friend, or with a group of up to eight."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {modes.map((mode) => (
            <article key={mode.title} className="rounded-3xl bg-page p-6 md:p-8">
              <h3 className="text-2xl font-extrabold text-ink">{mode.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">{mode.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
