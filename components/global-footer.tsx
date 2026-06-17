"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalFooter() {
    const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }
  
  return (

    <footer className="border-t border-white/10 bg-black px-6 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-2xl font-bold">VYBBER</h3>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
            Entertainment. Education. News. Commerce.
          </p>

          <p className="mt-6 text-sm text-zinc-500">
            © 2026 VYBBER
            <br />
            Make social media useful again.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-4 text-sm">
          <Link
            href="/manifesto"
            className="text-zinc-400 transition hover:text-white"
          >
            Manifesto
          </Link>

          <Link
            href="/about"
            className="text-zinc-400 transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/docs"
            className="text-zinc-400 transition hover:text-white"
          >
            Docs
          </Link>

          <Link
            href="/privacy"
            className="text-zinc-400 transition hover:text-white"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="text-zinc-400 transition hover:text-white"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}