"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    emoji: "📰",
    title: "Verified News",
    subtitle: "Truth Score: 92%",
    description: "Breaking updates with context.",
  },
  {
    emoji: "🎓",
    title: "Learn Skills",
    subtitle: "60-Second Lessons",
    description: "Master something new every day.",
  },
  {
    emoji: "🎵",
    title: "Music Discovery",
    subtitle: "Trending Sounds",
    description: "Find the next vibe before everyone else.",
  },
  {
    emoji: "🛍️",
    title: "Creator Commerce",
    subtitle: "Shop Instantly",
    description: "Watch it. Love it. Buy it.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[active];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
        Truth-powered social • Coming soon
      </p>

      <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
        Make social media useful again.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl">
        Learn. Stay informed. Discover music. Shop.
        <br />
        All in one truth-powered swipe feed.
      </p>

      <a
  href="#waitlist"
  className="mt-10 inline-block rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-105"
>
  Reserve my spot
    </a>

      {/* Phone Mockup */}
      <div className="mt-16 animate-[float_6s_ease-in-out_infinite]">
        <div className="relative h-[620px] w-[310px] rounded-[48px] border border-white/10 bg-zinc-950 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
          {/* Dynamic Island */}
          <div className="absolute left-1/2 top-4 h-8 w-32 -translate-x-1/2 rounded-full bg-black" />

          {/* Screen */}
          <div className="flex h-full flex-col rounded-[40px] bg-gradient-to-b from-zinc-900 to-black px-6 pt-20">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="text-5xl">{slide.emoji}</div>

              <h3 className="mt-6 text-2xl font-semibold">
                {slide.title}
              </h3>

              <p className="mt-2 text-sm text-zinc-400">
                {slide.subtitle}
              </p>

              <p className="mt-6 text-zinc-300">
                {slide.description}
              </p>
            </div>

            {/* Indicators */}
            <div className="mt-8 flex justify-center gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    active === index
                      ? "w-8 bg-white"
                      : "w-2 bg-zinc-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}