"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type TruthRingProps = {
  value: number;
};

export default function TruthRing({ value }: TruthRingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.5 });
  const [count, setCount] = useState(0);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;

  const progress = circumference - (value / 100) * circumference;

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate(latest) {
        setCount(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div ref={ref} className="relative flex items-center justify-center">
      <svg width="220" height="220" className="-rotate-90">
        {/* Track */}
        <circle
          cx="110"
          cy="110"
          r={radius}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="12"
          fill="transparent"
        />

        {/* Progress */}
        <motion.circle
          cx="110"
          cy="110"
          r={radius}
          stroke="white"
          strokeWidth="12"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{
            strokeDashoffset: isInView
              ? progress
              : circumference,
          }}
          transition={{
            duration: 1.6,
            ease: "easeOut",
          }}
        />
      </svg>

      <div className="absolute text-center">
        <div className="text-5xl font-bold">
          {count}%
        </div>

        <div className="mt-2 text-sm uppercase tracking-[0.25em] text-zinc-400">
          Truth Score
        </div>
      </div>
    </div>
  );
}