import Link from "next/link";

const primary =
  "inline-flex items-center justify-center rounded-full bg-[#96c11f] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#5a7c00]";
const secondary =
  "inline-flex items-center justify-center rounded-full border-2 border-[#96c11f] bg-white px-6 py-3 text-sm font-bold text-[#5a7c00] transition hover:bg-[#96c11f]/10";
const secondaryOnDark =
  "inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10";

export function FunnelPrimaryCta({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  return (
    <Link href={href} className={[primary, className].filter(Boolean).join(" ")}>
      {label}
    </Link>
  );
}

export function FunnelSecondaryCta({
  href,
  label,
  variant = "light",
  className,
}: {
  href: string;
  label: string;
  variant?: "light" | "dark";
  className?: string;
}) {
  const base = variant === "dark" ? secondaryOnDark : secondary;
  return (
    <Link href={href} className={[base, className].filter(Boolean).join(" ")}>
      {label}
    </Link>
  );
}
