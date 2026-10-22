import { useEffect, useRef, useState } from "react";
import { proofBars } from "../data";
import { SectionHeading } from "./SectionHeading";

export function Proof() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-page px-4 py-20 md:py-28">
      <div className="mx-auto max-w-3xl" ref={ref}>
        <SectionHeading
          title="Don’t do it alone"
          subtitle="% of goals successfully completed. Research shows that having an accountability buddy almost doubles your chances of success."
        />
        <div className="space-y-6 rounded-3xl bg-white p-6 shadow-sm md:p-10">
          {proofBars.map((bar) => (
            <div key={bar.label}>
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <span className={`font-semibold ${bar.emphasize ? "text-navy" : "text-ink"}`}>
                  {bar.label}
                </span>
                <span
                  className={`text-sm font-bold ${bar.emphasize ? "text-teal" : "text-muted"}`}
                >
                  {bar.hint}
                </span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-[#ececf1]">
                <div
                  className={`h-full rounded-full ${bar.emphasize ? "brand-gradient" : "bg-navy/40"} ${visible ? "bar-fill" : "scale-x-0"}`}
                  style={{ width: `${bar.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
