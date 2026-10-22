export function Logo({
  className = "",
  color = "white",
}: {
  className?: string;
  color?: "white" | "navy";
}) {
  return (
    <span
      className={`inline-block ${className}`}
      style={{
        backgroundColor: color === "white" ? "#fff" : "#292966",
        WebkitMaskImage: "url(/logo-outline-cropped.png)",
        maskImage: "url(/logo-outline-cropped.png)",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      aria-hidden
    />
  );
}
