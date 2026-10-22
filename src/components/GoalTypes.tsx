import { goalTypes } from "../data";
import { PhoneMockup } from "./PhoneMockup";
import { SectionHeading } from "./SectionHeading";

export function GoalTypes() {
  return (
    <section className="bg-page px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Three ways to track"
          subtitle="Daily habits, running lists, or a checklist you write up front. Same buddy energy on all of them."
        />
        <div className="grid gap-10 md:grid-cols-3">
          {goalTypes.map((type) => (
            <article key={type.title} className="text-center">
              <PhoneMockup src={type.src} alt={type.alt} className="mb-6" />
              <h3 className="text-xl font-bold text-ink">{type.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{type.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
