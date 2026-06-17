"use client";

import { motion } from "framer-motion";
import WaitlistForm from "./waitlist-form";
import FooterLinks from "./footer-links";

export default function Waitlist() {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
          {/* Waitlist Panel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="
              rounded-[48px]
              border border-white/10
              bg-white/5
              p-8 md:p-12
              backdrop-blur-2xl
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            "
          >
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Join the Waitlist
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              Be among the first to
              <br />
              experience VYBBER.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Entertainment, education, news, and commerce—
              all in one truth-powered swipe experience.
            </p>

            <div className="mt-12">
              <WaitlistForm />
            </div>
          </motion.div>

          {/* Footer / Explore */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="
              rounded-[40px]
              border border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
              shadow-[0_12px_40px_rgba(0,0,0,0.35)]
            "
          >
            <FooterLinks />
          </motion.div>
        </div>
      </div>
    </section>
  );
}