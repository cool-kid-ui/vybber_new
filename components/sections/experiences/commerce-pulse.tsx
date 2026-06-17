"use client";

import { motion } from "framer-motion";

export default function CommercePulse() {
  return (
    <div className="flex items-center gap-3">
      <motion.div
        className="h-3 w-3 rounded-full bg-white"
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <span className="text-sm font-medium text-zinc-300">
        Tap to Buy
      </span>
    </div>
  );
}