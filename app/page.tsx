import Link from "next/link";
export default function Home() {
  const features = [
    {
      icon: "🔐",
      title: "End-to-End Encryption",
      description:
        "Your messages, photos, voice notes are locked. Only you + the person you're talking to can read them.",
    },
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Send anything instantly. Works even on slow networks.",
    },
    {
      icon: "👥",
      title: "Groups For Your Vibes",
      description:
        "Create groups for friends, family, communities. Share memes + plans together.",
    },
    {
      icon: "🆓",
      title: "Free Forever",
      description:
        "No ads. No subscription for basic chat. Message anyone, anywhere.",
    },
    {
      icon: "✨",
      title: "Premium VIP",
      description:
        "Custom themes, bigger uploads, username links, priority support. Coming soon.",
    },
    {
      icon: "💼",
      title: "VYBS for Business",
      description:
        "Help brands connect with customers. Quick replies, catalogs, verified profiles. Coming soon.",
    },
  ];

  const faqs = [
    {
      question: "Is my chat really private?",
      answer:
        "Yes. Every message is encrypted end-to-end. Even we can't read your chats. Your privacy is the foundation of VYBS.",
    },
    {
      question: "Is VYBS free?",
      answer:
        "Completely. Basic messaging is free forever. No ads, no tracking, no sell-outs. Premium features like custom themes are optional.",
    },
    {
      question: "When does VYBS launch?",
      answer:
        "We're launching soon in 2026. Join the waitlist to be among the first.",
    },
    {
      question: "Can I use VYBS on desktop?",
      answer:
        "Yes. VYBS works on iOS, Android, and web. Sync your messages across all devices.",
    },
  ];

  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative px-6 py-32 pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl text-gray-900">
            Message privately.
            <br />
            <span className="text-blue-600">Vibe freely.</span>
          </h1>

          <p className="mt-6 text-xl leading-relaxed text-gray-600 md:text-2xl">
            VYBS is fast, secure messaging built for your circle. End-to-end encrypted, no ads, no clutter.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#waitlist"
              className="rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
              Join the Waitlist
            </a>

            <Link
              href="/docs"
              className="rounded-full border-2 border-blue-600 px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Decorative phone mockup placeholder */}
        <div className="mt-20 flex justify-center">
          <div className="relative h-96 w-48 rounded-3xl border-8 border-gray-300 bg-gradient-to-b from-blue-50 to-white shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center rounded-2xl text-5xl">
              💬
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-24 bg-blue-50">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Everything you need
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Built for the way you actually message
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-2xl border border-blue-200 bg-white/80 p-8 backdrop-blur-sm shadow-lg hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Questions?
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-blue-200 bg-white/80 p-8 backdrop-blur-sm shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {faq.question}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="scroll-mt-32 px-6 py-24 bg-blue-600">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Be among the first
          </h2>
          <p className="mt-4 text-xl text-blue-100">
            Get early access to VYBS. No spam, just vibes.
          </p>

          <form
            action="/api/waitlist"
            method="POST"
            className="mt-8 flex flex-col gap-4"
          >
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="rounded-full px-6 py-4 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              type="submit"
              className="rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Join Waitlist
            </button>
          </form>

          <p className="mt-6 text-sm text-blue-100">
            We'll never spam you. Privacy promise.
          </p>
        </div>
        
      </section>
    </main>
  );
}