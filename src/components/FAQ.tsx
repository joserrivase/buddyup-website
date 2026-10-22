import { useState } from "react";
import { faqs } from "../data";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading title="Questions? We’ve got answers." />
        <div className="divide-y divide-black/8 rounded-3xl border border-black/8">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink md:px-6"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {item.q}
                  <span className="text-xl font-normal text-muted" aria-hidden>
                    {isOpen ? "–" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-5 text-[15px] leading-relaxed text-muted md:px-6">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
