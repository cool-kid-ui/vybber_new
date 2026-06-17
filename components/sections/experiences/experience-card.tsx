"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type ExperienceCardProps = {
  title: string;
  description: string;
  children: ReactNode;
  delay?: number;
};

export default function ExperienceCard({
  title,
  description,
  children,
  delay = 0,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -6,
      }}
      className="
        group
        rounded-[36px]
        border border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        shadow-[0_12px_40px_rgba(0,0,0,0.35)]
        transition-all
      "
    >
      {/* Mini preview */}
      <div className="mb-8">
        {children}
      </div>

      {/* Text */}
      <h3 className="text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-relaxed text-zinc-400">
        {description}
      </p>
    </motion.div>
  );
}