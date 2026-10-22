import { APP_STORE_URL } from "../data";

type Variant = "light" | "dark";

export function AppStoreButton({
  variant = "light",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const styles =
    variant === "light"
      ? "bg-white text-cta hover:bg-white/90"
      : "bg-navy text-white hover:bg-navy/90";

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center gap-3 rounded-full px-5 py-3 text-[15px] font-semibold shadow-lg transition ${styles} ${className}`}
    >
      <AppleLogo className="h-5 w-5 shrink-0" />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-medium opacity-80">Download on the</span>
        <span className="mt-0.5 text-[15px] font-bold">App Store</span>
      </span>
    </a>
  );
}

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.42 2.07-1.24 2.86-.88.86-1.9 1.35-3.02 1.27-.13-1.1.4-2.12 1.2-2.9.88-.86 2.02-1.36 3.06-1.43zM20.5 17.36c-.54 1.24-.8 1.8-1.5 2.9-.97 1.52-2.34 3.41-4.04 3.43-1.52.02-1.91-.98-3.98-.97-2.07.01-2.5.99-4.02.97-1.7-.02-3.01-1.73-3.98-3.25-2.72-4.25-3-9.24-1.32-11.9 1.18-1.87 3.05-2.96 4.8-2.96 1.78 0 2.9.97 4.38.97 1.44 0 2.32-1 4.4-.97 1.82.03 3.54 1.04 4.7 2.84-4.13 2.26-3.46 8.15.56 9.94z" />
    </svg>
  );
}
