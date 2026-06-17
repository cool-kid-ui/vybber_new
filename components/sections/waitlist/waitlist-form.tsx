"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const roles = ["Creator", "Early User", "Business"];

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  // We'll connect Firebase later
  const [status, setStatus] = useState<
    "idle" | "loading" | "success"
  >("idle");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!email) return;

    setStatus("loading");

    // Temporary fake delay.
    // We'll replace this with Firebase.
    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div>
        <label className="mb-2 block text-sm text-zinc-300">
          Email Address *
        </label>

        <input
          type="email"
          required
          disabled={status === "success"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-white/5
            px-5 py-4
            text-white
            placeholder:text-zinc-500
            backdrop-blur-xl
            outline-none
            transition
            focus:border-white/20
          "
        />
      </div>

      {/* Username */}
      <div>
        <label className="mb-2 block text-sm text-zinc-300">
          Username (optional)
        </label>

        <input
          type="text"
          disabled={status === "success"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="@username"
          className="
            w-full
            rounded-2xl
            border border-white/10
            bg-white/5
            px-5 py-4
            text-white
            placeholder:text-zinc-500
            backdrop-blur-xl
            outline-none
            transition
            focus:border-white/20
          "
        />
      </div>

      {/* Role */}
      <div>
        <p className="mb-3 text-sm text-zinc-300">
          Who are you? (optional)
        </p>

        <div className="flex flex-wrap gap-3">
          {roles.map((item) => {
            const selected = role === item;

            return (
              <button
                key={item}
                type="button"
                disabled={status === "success"}
                onClick={() =>
                  setRole(selected ? "" : item)
                }
                className={`
                  rounded-full
                  border
                  px-5 py-3
                  text-sm
                  transition-all
                  backdrop-blur-xl
                  ${
                    selected
                      ? "border-white/20 bg-white/10 text-white"
                      : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                  }
                `}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      {/* Submit */}
      <motion.button
        whileHover={
          status === "idle" ? { y: -2 } : {}
        }
        whileTap={
          status === "idle" ? { scale: 0.98 } : {}
        }
        disabled={
          status === "loading" ||
          status === "success"
        }
        type="submit"
        className="
          w-full
          rounded-2xl
          bg-white
          px-6 py-4
          font-medium
          text-black
          transition
          disabled:cursor-not-allowed
          disabled:opacity-80
        "
      >
        {status === "idle" &&
          "Join the Waitlist →"}

        {status === "loading" &&
          "Joining..."}

        {status === "success" &&
          "You're In 🚀"}
      </motion.button>

      {status === "success" && (
        <p className="text-center text-sm text-zinc-400">
          We'll keep you updated.
        </p>
      )}
    </form>
  );
}