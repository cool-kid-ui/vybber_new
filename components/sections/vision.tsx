"use client";

import { motion } from "framer-motion";

const pillars = [
  "Entertainment",
  "Education",
  "News",
  "Commerce",
];

export default function Vision() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-5xl text-center">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            The Mission
          </p>

          <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Make social media
            <br />
            useful again.
          </h2>
        </motion.div>

        {/* Floating Glass Keywords */}
        <div className="mt-20 flex flex-wrap items-center justify-center gap-5">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              animate={{
                y: [0, -6, 0],
              }}
              className="
                rounded-full
                border border-white/10
                bg-white/5
                px-8 py-4
                backdrop-blur-xl
                shadow-[0_12px_40px_rgba(0,0,0,0.35)]
              "
            >
              <span className="text-lg font-medium text-white">
                {pillar}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <p className="text-2xl leading-relaxed text-zinc-300 md:text-3xl">
            One swipe feed.
          </p>

          <p className="mt-6 text-xl leading-relaxed text-zinc-400 md:text-2xl">
            Built for a generation that deserves better.
          </p>
        </motion.div>
      </div>
    </section>
  );
}