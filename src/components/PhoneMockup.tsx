import type { ReactNode } from "react";

export function PhoneMockup({
  children,
  src,
  alt = "",
  className = "",
}: {
  children?: ReactNode;
  src?: string;
  alt?: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[280px] ${className}`}>
      <div className="relative overflow-hidden rounded-[2.75rem] border-[12px] border-[#1c1c1e] bg-[#1c1c1e] shadow-[0_30px_60px_-20px_rgba(20,20,50,0.55)]">
        <div className="pointer-events-none absolute top-2.5 left-1/2 z-10 h-[22px] w-[96px] -translate-x-1/2 rounded-full bg-black" />
        {src ? (
          <img src={src} alt={alt} className="block w-full bg-[#f2f2f7]" />
        ) : (
          <div className="bg-white">{children}</div>
        )}
      </div>
    </div>
  );
}
