"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-5 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 px-4">
      <nav className="relative rounded-full border border-blue-200 bg-white/80 px-6 py-4 backdrop-blur-lg shadow-lg">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-blue-600"
          >
            VYBS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/about"
              className="text-sm text-gray-600 transition hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/docs"
              className="text-sm text-gray-600 transition hover:text-blue-600"
            >
              How to Use
            </Link>

            <Link
              href="/manifesto"
              className="text-sm text-gray-600 transition hover:text-blue-600"
            >
              Manifesto
            </Link>
          </div>

          {/* Desktop CTA */}
          <a
  href="#waitlist"
  className="hidden rounded-full bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 md:inline-block"
>
  Join Waitlist
           </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-gray-700 transition hover:bg-blue-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="absolute left-0 right-0 top-[calc(100%+12px)] rounded-3xl border border-blue-200 bg-white/95 p-3 backdrop-blur-lg shadow-lg md:hidden">
            <div className="flex flex-col">
              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-gray-600 transition hover:bg-blue-100 hover:text-blue-600"
              >
                About
              </Link>

              <Link
                href="/docs"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-gray-600 transition hover:bg-blue-100 hover:text-blue-600"
              >
                How to Use
              </Link>

              <Link
                href="/manifesto"
                onClick={closeMenu}
                className="rounded-2xl px-4 py-3 text-gray-600 transition hover:bg-blue-100 hover:text-blue-600"
              >
                Manifesto
              </Link>

              <a
  href="#waitlist"
  onClick={closeMenu}
  className="mt-2 block rounded-2xl bg-blue-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-blue-700"
>
  Join Waitlist →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}