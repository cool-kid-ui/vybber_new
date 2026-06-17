"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "TikTok entertains.",
    description:
      "Endless scrolling keeps you watching, but rarely leaves you better informed.",
  },
  {
    title: "X overwhelms.",
    description:
      "Too much noise. Too many opinions. Not enough context.",
  },
  {
    title: "YouTube takes too long.",
    description:
      "Not everyone has 20 minutes to learn something valuable.",
  },
  {
    title: "Trust is broken.",
    description:
      "The loudest voices aren't always the most accurate.",
  },
];

export default function Problem() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            The Problem
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Social media shouldn't leave you worse off.
          </h2>
        </div>

        <div className="space-y-10">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className={`flex ${
                index % 2 === 0
                  ? "justify-start"
                  : "justify-end"
              }`}
            >
              <div className="max-w-2xl rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.35)]">
                <h3 className="text-2xl font-semibold text-white">
                  {problem.title}
                </h3>

                <p className="mt-4 text-lg leading-relaxed text-zinc-400">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <h3 className="text-4xl font-bold tracking-tight md:text-6xl">
            VYBBER puts it back together.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-400">
            Entertainment. Education. News. Commerce.
            Designed around truth, not chaos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}