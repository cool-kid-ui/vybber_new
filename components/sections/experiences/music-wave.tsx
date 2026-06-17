"use client";

import { motion } from "framer-motion";

const bars = [28, 48, 36, 56, 40];

export default function MusicWave() {
  return (
    <div className="flex h-16 items-end gap-2">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          className="w-2 rounded-full bg-white"
          animate={{
            height: [height, height + 14, height],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.12,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}