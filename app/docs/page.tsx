import Link from "next/link";

const features = [
  {
    step: "01",
    title: "Discover",
    body:
      "Explore a feed designed around entertainment, education, news, and commerce instead of endless noise.",
  },
  {
    step: "02",
    title: "Truth Scores",
    body:
      "See context and credibility indicators that help you navigate information more thoughtfully.",
  },
  {
    step: "03",
    title: "Follow Experiences",
    body:
      "Connect with creators, educators, businesses, and communities that align with your interests.",
  },
  {
    step: "04",
    title: "Shop Intentionally",
    body:
      "Discover products and opportunities without manipulative experiences.",
  },
];

const principles = [
  {
    title: "Built for People",
    body: "Human experience comes before engagement metrics.",
  },
  {
    title: "Transparent",
    body: "Context and trust should be visible, not hidden.",
  },
  {
    title: "Purposeful",
    body: "Every interaction should add value to your day.",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Documentation
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            How VYBBER works.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400 md:text-2xl">
            Everything you need to understand the VYBBER experience.
          </p>
        </section>

        {/* Steps */}
        <section className="mt-24 grid gap-8 lg:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.step}
              className="
                rounded-[40px]
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                shadow-[0_12px_40px_rgba(0,0,0,0.35)]
                transition-transform duration-300
                hover:-translate-y-2
              "
            >
              <p className="text-sm tracking-[0.3em] text-zinc-500">
                {feature.step}
              </p>

              <h2 className="mt-4 text-3xl font-semibold">
                {feature.title}
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                {feature.body}
              </p>
            </div>
          ))}
        </section>

        {/* Principles */}
        <section className="mt-28">
          <h2 className="text-4xl font-bold md:text-5xl">
            Design Principles
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.title}
                className="
                  rounded-[32px]
                  border border-white/10
                  bg-white/5
                  p-6
                  backdrop-blur-xl
                  shadow-[0_10px_30px_rgba(0,0,0,0.3)]
                  transition-transform duration-300
                  hover:-translate-y-1
                "
              >
                <h3 className="text-xl font-semibold">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="mt-32 max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            Ready to experience it?
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400 md:text-2xl">
            Join the people helping shape a more useful social experience.
          </p>

          <Link
            href="/#waitlist"
            className="
              mt-10 inline-block
              rounded-full
              border border-white/10
              bg-white
              px-6 py-3
              text-sm font-semibold
              text-black
              transition
              hover:scale-105
            "
          >
            Reserve Your Spot →
          </Link>
        </section>
      </div>
    </main>
  );
}