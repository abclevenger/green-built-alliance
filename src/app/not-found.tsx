import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-4 py-16">
      <h1 className="text-2xl font-bold text-neutral-900">Page not found</h1>
      <p className="mt-3 text-neutral-600">
        That link may be outdated or the address was mistyped. Try one of these:
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-[#5a7c00]">
        <li>
          <Link href="/" className="font-medium underline underline-offset-2">
            Home
          </Link>
        </li>
        <li>
          <Link href="/directory/" className="font-medium underline underline-offset-2">
            Find green building professionals
          </Link>
        </li>
        <li>
          <Link
            href="/events/continuing-education-courses/"
            className="font-medium underline underline-offset-2"
          >
            Continuing education &amp; classes
          </Link>
        </li>
        <li>
          <Link href="/green-built-homes/" className="font-medium underline underline-offset-2">
            Green Built Homes program
          </Link>
        </li>
        <li>
          <Link href="/support-our-work/" className="font-medium underline underline-offset-2">
            Support our work
          </Link>
        </li>
        <li>
          <Link
            href="/about-green-built-alliance/"
            className="font-medium underline underline-offset-2"
          >
            About &amp; contact
          </Link>
        </li>
        <li>
          <Link href="/search/" className="font-medium underline underline-offset-2">
            Search the site
          </Link>
        </li>
      </ul>
      <p className="mt-8 text-sm text-neutral-500">
        If you followed a link from our site, please let us know via{" "}
        <Link href="/about-green-built-alliance/" className="underline">
          About &amp; contact
        </Link>{" "}
        so we can fix it.
      </p>
    </div>
  );
}
