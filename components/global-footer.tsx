"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalFooter() {
  return (
    <footer className="border-t border-blue-200 bg-white px-6 py-12 text-gray-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-bold text-blue-600">VYBS</h3>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600">
            Message privately. Vibe freely.
          </p>

          <p className="mt-6 text-sm text-gray-500">
            © 2026 VYBS
            <br />
            Built for your vibes.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
          <Link
            href="/manifesto"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Manifesto
          </Link>

          <Link
            href="/about"
            className="text-gray-600 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/docs"
            className="text-gray-600 transition hover:text-blue-600"
          >
            How to Use
          </Link>

          <Link
            href="/privacy"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Terms
          </Link>

          <a
            href="mailto:hello@vybs.io"
            className="text-gray-600 transition hover:text-blue-600"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}