import { AppStoreButton } from "./AppStoreButton";
import { Logo } from "./Logo";
import { PhoneMockup } from "./PhoneMockup";

export function Hero() {
  return (
    <section id="top" className="brand-gradient relative overflow-hidden text-white">
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-navy/40 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-4 pt-24 pb-16 md:grid-cols-2 md:gap-8 md:px-6 md:pt-20 md:pb-20">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-3">
            <Logo className="h-14 w-14 drop-shadow-md sm:h-16 sm:w-16" color="white" />
            <span className="text-2xl font-extrabold tracking-tight">BuddyUp</span>
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-[56px]">
            Achieve your goals together
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/90 md:text-xl">
            The accountability app for people who actually follow through when
            someone else is in it with them.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <AppStoreButton variant="light" />
            <a
              href="#how-it-works"
              className="inline-flex min-h-12 items-center text-sm font-semibold text-white/90 hover:text-white"
            >
              See how it works
              <span className="ml-1" aria-hidden>
                ↓
              </span>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <PhoneMockup
            src="/screenshots/daily_goal.png"
            alt="Daily meditation goal with streaks, days completed, and a shared calendar"
            className="max-w-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
