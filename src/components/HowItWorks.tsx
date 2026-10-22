import { steps } from "../data";
import { SectionHeading } from "./SectionHeading";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Start in minutes"
          subtitle="Three simple steps. Then someone else can see whether you showed up."
        />
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="rounded-3xl bg-page p-6 md:p-8">
              <span className="text-sm font-bold tracking-widest text-teal">{step.n}</span>
              <h3 className="mt-3 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
