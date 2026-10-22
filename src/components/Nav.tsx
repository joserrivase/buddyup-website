import { useEffect, useState } from "react";
import { APP_STORE_URL, navLinks } from "../data";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onGradient = !scrolled && !open;
  const text = onGradient ? "text-white" : "text-ink";
  const bar = scrolled || open ? "bg-white shadow-sm" : "bg-transparent";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${bar}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[72px] md:px-6">
        <a href="#top" className={`flex items-center gap-2 font-bold ${text}`}>
          <Logo className="h-8 w-8" color={onGradient ? "white" : "navy"} />
          <span className="text-lg tracking-tight">BuddyUp</span>
        </a>

        <div className="flex items-center gap-2 md:gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition hover:opacity-80 ${text}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-11 items-center rounded-full px-4 text-sm font-semibold transition ${
              onGradient
                ? "bg-white text-cta hover:bg-white/90"
                : "brand-gradient text-white hover:opacity-90"
            }`}
          >
            Get the App
          </a>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full md:hidden ${text}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-black/5 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-12 items-center text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
