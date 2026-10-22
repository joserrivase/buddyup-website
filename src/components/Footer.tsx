import {
  APP_STORE_URL,
  footerBlurb,
  INSTAGRAM_URL,
  TIKTOK_URL,
  PRIVACY_URL,
  SUPPORT_EMAIL,
  TERMS_URL,
} from "../data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-navy px-4 py-16 text-white md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 font-bold">
            <Logo className="h-8 w-8" color="white" />
            <span className="text-lg">BuddyUp</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{footerBlurb}</p>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide uppercase">Quick links</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#how-it-works" className="hover:text-white">
                How it works
              </a>
            </li>
            <li>
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Download on iOS
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-bold tracking-wide uppercase">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/85">
            <li>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-white">
                {SUPPORT_EMAIL}
              </a>
            </li>
            <li>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                TikTok
              </a>
            </li>
            <li>
              <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl text-xs text-white/50">
        © {new Date().getFullYear()} BuddyUp. All rights reserved. iOS is a trademark of Apple Inc.
      </p>
    </footer>
  );
}
