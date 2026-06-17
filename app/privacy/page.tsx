const sections = [
  {
    title: "Information We Collect",
    body:
      "We may collect information you voluntarily provide, such as your email address, username, and information submitted through waitlists, forms, or future account registration.",
  },
  {
    title: "How We Use Information",
    body:
      "Information may be used to improve VYBBER, communicate updates, provide services, respond to inquiries, and support platform functionality.",
  },
  {
    title: "Data Storage",
    body:
      "Information is stored using trusted third-party infrastructure providers and reasonable measures are taken to protect user data.",
  },
  {
    title: "Cookies & Analytics",
    body:
      "VYBBER may use cookies, analytics tools, and similar technologies to understand usage patterns and improve user experience.",
  },
  {
    title: "Third-Party Services",
    body:
      "Certain services may rely on third-party providers. Their privacy practices are governed by their own policies and terms.",
  },
  {
    title: "Your Rights",
    body:
      "Users may request access, correction, or deletion of personal information where applicable and subject to legal requirements.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Legal
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Privacy Policy
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400">
            Your privacy matters. This policy explains how VYBBER collects,
            uses, and protects information.
          </p>
        </section>

        <section className="mt-24 grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="
                rounded-[40px]
                border border-white/10
                bg-white/5
                p-8
                backdrop-blur-xl
                shadow-[0_12px_40px_rgba(0,0,0,0.35)]
              "
            >
              <h2 className="text-2xl font-semibold">
                {section.title}
              </h2>

              <p className="mt-5 leading-relaxed text-zinc-400">
                {section.body}
              </p>
            </div>
          ))}
        </section>

        <section
          className="
            mt-24
            rounded-[40px]
            border border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
        >
          <h2 className="text-2xl font-semibold">
            Contact
          </h2>

          <p className="mt-5 leading-relaxed text-zinc-400">
            Questions about this Privacy Policy can be directed to the VYBBER
            team through future support and contact channels.
          </p>
        </section>

        <section
          className="
            mt-8
            rounded-[40px]
            border border-white/10
            bg-white/5
            p-8
            backdrop-blur-xl
          "
        >
          <p className="text-zinc-400">
            Last Updated: June 2026
          </p>
        </section>
      </div>
    </main>
  );
}