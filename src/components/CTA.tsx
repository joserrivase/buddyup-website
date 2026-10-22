import { AppStoreButton } from "./AppStoreButton";

export function CTA() {
  return (
    <section className="brand-gradient px-4 py-20 text-white md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          Ready to stop quitting?
        </h2>
        <p className="mt-4 text-lg text-white/90">
          Free on iOS. No credit card needed. Pinky promise.
        </p>
        <div className="mt-8 flex justify-center">
          <AppStoreButton variant="light" />
        </div>
      </div>
    </section>
  );
}
