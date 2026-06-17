"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-5 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4">
      <nav className="relative rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-white"
          >
            VYBBER
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/about"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              About
            </Link>

            <Link
              href="/docs"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Docs
            </Link>

            <Link
              href="/manifesto"
              className="text-sm text-zinc-300 transition hover:text-white"
            >
              Manifesto
            </Link>
          </div>

          {/* Desktop CTA */}
          <a
  href="#waitlist"
  className="hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15 md:inline-block"
>
  Join Waitlist
           </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+12px)] rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] md:hidden">
            <div className="flex flex-col">
              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/docs"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                Docs
              </Link>

              <Link
                href="/manifesto"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-zinc-300 transition hover:bg-white/5 hover:text-white"
              >
                Manifesto
              </Link>

              <a
  href="#waitlist"
  onClick={closeMenu}
  className="mt-2 block rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-left text-sm font-medium text-white transition hover:bg-white/15"
>
  Reserve my spot →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}