"use client";

import ExperienceCard from "./experience-card";
import MusicWave from "./music-wave";
import CommercePulse from "./commerce-pulse";

export default function Experiences() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Experience VYBBER
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Everything you love.
            <br />
            Finally working together.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            News. Learning. Music. Commerce.
            Built into one truth-powered swipe experience.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* News */}
          <ExperienceCard
            title="News & Context"
            description="Get breaking updates in video format with AI-powered context and truth indicators."
          >
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Breaking Update
              </p>

              <p className="mt-3 text-lg font-semibold">
                Inflation report released
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-zinc-300">
                  Truth Score 92%
                </span>

                <span className="text-sm text-zinc-400">
                  Sources Verified
                </span>
              </div>
            </div>
          </ExperienceCard>

          {/* Learn */}
          <ExperienceCard
            title="Learn Faster"
            description="Swipe through coding, cooking, fitness, finance, and more—one minute at a time."
            delay={0.1}
          >
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Lesson
              </p>

              <p className="mt-3 text-lg font-semibold">
                Learn React in 60 Seconds
              </p>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-zinc-400">
                  Series 3 / 10
                </span>

                <span className="text-sm text-white">
                  Try this step →
                </span>
              </div>
            </div>
          </ExperienceCard>

          {/* Music */}
          <ExperienceCard
            title="Music Culture"
            description="Discover sounds, remix moments, and help the next artist go viral."
            delay={0.2}
          >
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Trending Sound
              </p>

              <p className="mt-3 text-lg font-semibold">
                Afro Vibes
              </p>

              <div className="mt-6">
                <MusicWave />
              </div>
            </div>
          </ExperienceCard>

          {/* Commerce */}
          <ExperienceCard
            title="Creator Commerce"
            description="Watch it. Tap it. Buy it. No link-in-bio detours."
            delay={0.3}
          >
            <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Creator Store
              </p>

              <p className="mt-3 text-lg font-semibold">
                Limited Edition Sneakers
              </p>

              <div className="mt-6">
                <CommercePulse />
              </div>
            </div>
          </ExperienceCard>
        </div>
      </div>
    </section>
  );
}