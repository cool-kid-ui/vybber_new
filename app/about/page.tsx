import Link from "next/link";

const storyCards = [
  {
    title: "Why We Started",
    body:
      "The internet gave us connection, creativity, and opportunity. But somewhere along the way, attention became more valuable than people.",
  },
  {
    title: "What We Believe",
    body:
      "Technology should amplify curiosity, truth, and human potential—not reward outrage, manipulation, and endless distraction.",
  },
  {
    title: "What We're Building",
    body:
      "VYBBER brings entertainment, education, news, and commerce into one intentional experience designed around people.",
  },
];

const pillars = [
  {
    title: "Entertainment",
    body: "Joy, creativity, and culture without the emptiness.",
  },
  {
    title: "Education",
    body: "Learning that is accessible, engaging, and practical.",
  },
  {
    title: "News",
    body: "Information that values context over sensationalism.",
  },
  {
    title: "Commerce",
    body: "Discovery and opportunity without exploitation.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            About VYBBER
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            We're not building another app.
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400 md:text-2xl">
            We're reimagining what social media can become.
          </p>
        </section>

        {/* Story Cards */}
        <section className="mt-24 grid gap-8 lg:grid-cols-3">
          {storyCards.map((card) => (
            <div
              key={card.title}
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
              <h2 className="text-2xl font-semibold">
                {card.title}
              </h2>

              <p className="mt-6 leading-relaxed text-zinc-400">
                {card.body}
              </p>
            </div>
          ))}
        </section>

        {/* Pillars */}
        <section className="mt-28">
          <h2 className="text-4xl font-bold md:text-5xl">
            The Four Pillars
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
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
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="mt-32 max-w-4xl">
          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            VYBBER isn't finished.
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400 md:text-2xl">
            It's just getting started. We'd love for you to help shape what comes next.
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