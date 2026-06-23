import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-gray-900">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="text-sm text-blue-600 transition hover:text-blue-700 font-medium"
        >
          ← Back to Home
        </Link>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            About VYBS
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Built for your vibes.
          </h1>
        </div>

        <div className="mt-16 space-y-8 text-lg leading-relaxed text-gray-700 md:text-xl">
          <p>
            We got tired of cluttered messaging apps. Spam, ads, algorithms trying to keep us online longer. Your private chats shouldn't be a product.
          </p>

          <p>
            VYBS was built so you can just message your people, share your moments, and vibe without noise. Fast. Private. Yours. No tracking, no selling your data, no algorithm deciding who matters. Just real connections.
          </p>

          <p>
            Every feature is designed around one principle: get out of your way. Send a message. Create a group. Vibe. That's it.
          </p>

          <p>
            We believe messaging should be simple, private, and actually work. That's VYBS.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-24 rounded-2xl border border-blue-200 bg-blue-50 p-12 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Founded in 2026 in Nigeria by a small team tired of overcomplicating things. We're building VYBS because we believe technology should serve people, not the other way around.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We're just getting started, and we'd love for you to help shape what comes next.
          </p>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900">What We Value</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Privacy First",
                desc: "Your data is yours. We don't have backdoors.",
              },
              {
                title: "Speed",
                desc: "Messages should arrive instantly. Always.",
              },
              {
                title: "Simplicity",
                desc: "No clutter. No confusion. Just messaging.",
              },
              {
                title: "Reliability",
                desc: "Works on WiFi or 2G. We've got you.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-2xl border border-blue-200 bg-white/80 p-8 backdrop-blur-sm shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}