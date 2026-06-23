export default function TermsPage() {
  const sections = [
    {
      title: "Using VYBS",
      body:
        "Be respectful. No spam, harassment, or illegal stuff. Don't try to hack us or break the app. Keep your password secret. If you break these rules, we might suspend or delete your account.",
    },
    {
      title: "Your Account",
      body:
        "You're responsible for your account. Keep your password safe. If someone gets access, let us know. You own your data and your messages.",
    },
    {
      title: "Our Service",
      body:
        "VYBS is provided as-is. We'll try to keep it running, but we can't promise 100% uptime. We might update features or shut things down with notice. If the service breaks something, our liability is limited.",
    },
    {
      title: "Termination",
      body:
        "You can delete your account anytime. We can terminate your account if you break these terms. When you delete your account, your data is gone (except where we're legally required to keep it).",
    },
    {
      title: "Intellectual Property",
      body:
        "VYBS owns the app, the code, and the branding. You own your messages and files. Don't copy or resell VYBS without permission.",
    },
    {
      title: "Changes to These Terms",
      body:
        "We might update these terms. If we do, we'll let you know. If you don't like the changes, you can delete your account.",
    },
  ];

  return (
    <main className="min-h-screen bg-white px-6 py-24 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            Legal
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Terms of Service
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-600">
            Fair, simple, and human. Not scary legal stuff.
          </p>
        </section>

        <section className="mt-24 grid gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-2xl border border-blue-200 bg-white/80 p-8 backdrop-blur-sm shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-gray-900">
                {section.title}
              </h2>

              <p className="mt-5 leading-relaxed text-gray-600">
                {section.body}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-24 max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 p-8 backdrop-blur-sm">
          <p className="font-semibold text-gray-900">Last Updated: June 2026</p>

          <p className="mt-4 leading-relaxed text-gray-600">
            These terms are meant to be fair. If something's unclear or you have concerns, reach out to us at hello@vybs.io. We're open to feedback.
          </p>
        </section>
      </div>
    </main>
  );
}