import Link from "next/link";

export default function ManifestoPage() {
  const beliefs = [
    "Privacy is not a feature. It's the foundation.",
    "Your chats belong to you, not to ads.",
    "Speed matters. Waiting kills vibes.",
    "Groups should feel like your circle, not a crowd.",
    "Free means free. No tricks.",
    "Design should get out of the way.",
  ];

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
            Our Beliefs
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            This is what we believe
          </h1>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className="rounded-2xl border border-blue-200 bg-white/80 p-8 backdrop-blur-sm shadow-md hover:shadow-lg transition"
            >
              <p className="text-2xl font-bold leading-relaxed text-gray-900 md:text-3xl">
                {belief}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-3xl mx-auto">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-12 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-gray-900">Why This Matters</h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              We're not trying to be cool. We're trying to be real. Every belief we hold shapes how VYBS works. Privacy isn't an afterthought—it's why VYBS exists.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Your conversations matter. Your trust matters. And we're building a tool that proves it.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            This is VYBS.
          </h2>

          <p className="mt-8 text-xl text-gray-600 md:text-2xl">
            Message privately. Vibe freely.
          </p>
        </div>
      </div>
    </main>
  );
}