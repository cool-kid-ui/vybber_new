"use client";

import Link from "next/link";

const links = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Docs",
    href: "/docs",
  },
  {
    title: "How to Use",
    href: "/docs/how-to-use",
  },
  {
    title: "Privacy Policy",
    href: "/privacy",
  },
  {
    title: "Terms of Service",
    href: "/terms",
  },
];

export default function FooterLinks() {
  return (
    <div>
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        Explore
      </p>

      <div className="mt-8 space-y-5">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="
              block
              text-lg
              text-zinc-300
              transition-colors
              hover:text-white
            "
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="mt-12 border-t border-white/10 pt-8">
        <h3 className="text-2xl font-bold">
          VYBBER
        </h3>

        <p className="mt-4 leading-relaxed text-zinc-400">
          Entertainment.
          <br />
          Education.
          <br />
          News.
          <br />
          Commerce.
        </p>

        <p className="mt-8 text-sm text-zinc-500">
          © 2026 VYBBER
          <br />
          Built for a generation that deserves better.
        </p>
      </div>
    </div>
  );
}