import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/find-a-pro/", label: "Get matched with a pro" },
  { href: "/directory/", label: "Member directory" },
  { href: "/green-built-homes/", label: "Green Built Homes" },
  { href: "/events/continuing-education-courses/", label: "Continuing education" },
  { href: "/support-our-work/", label: "Support our work" },
  { href: "/about-green-built-alliance/", label: "About & contact" },
  { href: "/search/", label: "Search" },
] as const;

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 md:py-20">
      <div className="rounded-2xl border border-neutral-200 bg-white px-6 py-10 shadow-sm md:px-8 md:py-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#5a7c00]">404</p>
        <h1 className="mt-2 text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl">
          We can’t find that page
        </h1>
        <p className="mt-4 text-neutral-600">
          The link may be outdated or the address was mistyped. Try one of these common destinations:
        </p>
        <ul className="mt-8 flex flex-col gap-2">
          {quickLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-12 items-center rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm font-semibold text-neutral-800 transition hover:border-[#96c11f] hover:bg-[#f8faf3] hover:text-[#5a7c00]"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-neutral-500">
          If you followed a link from our site, tell us via{" "}
          <Link href="/about-green-built-alliance/" className="font-semibold text-[#5a7c00] underline-offset-2 hover:underline">
            About &amp; contact
          </Link>{" "}
          so we can fix it.
        </p>
      </div>
    </div>
  );
}
