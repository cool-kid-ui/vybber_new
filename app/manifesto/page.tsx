import Link from "next/link";

export default function ManifestoPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to Home
        </Link>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            The Manifesto
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            We grew up online.
          </h1>
        </div>

        <div className="mt-16 space-y-12 text-xl leading-relaxed text-zinc-300 md:text-2xl">
          <p>
            We watched social media connect people, teach people,
            entertain people, and inspire people.
          </p>

          <p>
            We also watched it reward outrage, misinformation,
            addiction, and endless distraction.
          </p>

          <p>
            Somewhere along the way, attention became more valuable
            than truth.
          </p>

          <p>
            We don't believe this is inevitable.
          </p>

          <p>
            We believe social media can do more.
          </p>
        </div>

        <div className="mt-24">
  <h2 className="text-3xl font-bold md:text-5xl">
    We believe in:
  </h2>

  <div className="mt-12 grid gap-6 md:grid-cols-2">
    {[
      "Entertainment without emptiness.",
      "Education without gatekeeping.",
      "News without manipulation.",
      "Commerce without exploitation.",
    ].map((belief, index) => (
      <div
        key={belief}
        className="
          rounded-[32px]
          border border-white/10
          bg-white/5
          p-8
          backdrop-blur-xl
          shadow-[0_12px_40px_rgba(0,0,0,0.35)]
          transition-transform duration-300
          hover:-translate-y-1
        "
        style={{
          animationDelay: `${index * 120}ms`,
        }}
      >
        <p className="text-2xl leading-relaxed text-zinc-100 md:text-3xl">
          {belief}
        </p>
      </div>
    ))}
  </div>
</div>

        <div className="mt-24 space-y-10 text-xl leading-relaxed text-zinc-300 md:text-2xl">
          <p>
            Truth matters.
          </p>

          <p>
            People matter.
          </p>

          <p>
            Attention is valuable.
          </p>

          <p>
            The future is still ours to build.
          </p>
        </div>

        <div className="mt-28 border-t border-white/10 pt-16">
          <h2 className="text-5xl font-bold tracking-tight md:text-7xl">
            This is VYBBER.
          </h2>

          <p className="mt-8 text-2xl text-zinc-300 md:text-3xl">
            Make social media useful again.
          </p>
        </div>
      </div>
    </main>
  );
}