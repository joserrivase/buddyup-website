import { screenshots } from "../data";
import { PhoneMockup } from "./PhoneMockup";
import { SectionHeading } from "./SectionHeading";

export function Screenshots() {
  return (
    <section id="product" className="overflow-hidden bg-white px-4 py-20 md:py-28">
      <SectionHeading
        title="See BuddyUp in action"
        subtitle="Beautiful tracking for daily habits, lists, and checklists — with a buddy on the same screen."
      />
      <div className="no-scrollbar mx-auto flex max-w-6xl snap-x snap-mandatory gap-6 overflow-x-auto px-2 pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0">
        {screenshots.map((shot) => (
          <figure
            key={shot.src}
            className="w-[260px] shrink-0 snap-center sm:w-[280px] md:w-auto md:max-w-none"
          >
            <PhoneMockup src={shot.src} alt={shot.alt} />
            <figcaption className="mt-4 text-center text-sm font-semibold text-ink">
              {shot.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
