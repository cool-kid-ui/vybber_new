"use client";

import { motion } from "framer-motion";
import TruthRing from "./truth-ring";

const chips = [
  "Sources Verified",
  "Context Added",
  "AI Assisted",
];

export default function Truth() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Truth Is The Algorithm
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Engagement still matters.
            <br />
            Accuracy amplifies reach.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            We don't remove discovery from social media.
            We reward creators who inform, educate, and add context.
          </p>
        </motion.div>

        {/* Glass Panel */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="
            mt-20
            rounded-[40px]
            border border-white/10
            bg-white/5
            px-8 py-14
            backdrop-blur-xl
            shadow-[0_12px_40px_rgba(0,0,0,0.35)]
          "
        >
          <div className="flex flex-col items-center">
            <TruthRing value={92} />

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {chips.map((chip, index) => (
                <motion.div
                  key={chip}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    delay: index * 0.15,
                    duration: 0.5,
                  }}
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/5
                    px-5 py-3
                    text-sm
                    text-zinc-300
                    backdrop-blur-md
                  "
                >
                  ✓ {chip}
                </motion.div>
              ))}
            </div>

            <p className="mt-12 max-w-2xl text-center text-lg leading-relaxed text-zinc-400">
              Truth isn't a moderation slogan.
              It's a ranking signal designed to elevate
              accuracy without sacrificing discovery.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}