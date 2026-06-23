export default function PrivacyPage() {
  const sections = [
    {
      title: "What Data We Collect",
      body:
        "When you use VYBS, we collect your phone number to verify your identity. If you allow it, we can access your contacts to help you find friends. Your messages, photos, and files are encrypted and stored on our servers.",
    },
    {
      title: "How We Protect It",
      body:
        "Every message is encrypted end-to-end. This means we literally cannot read your chats—only you and the people you're talking to can. Your data is secured with industry-standard encryption.",
    },
    {
      title: "What We Don't Do",
      body:
        "We don't show ads. We don't sell your data. We don't scan your photos or track your location. We don't use your messages to train AI. We're not trying to build a profile on you. VYBS is designed around privacy, not profit.",
    },
    {
      title: "Your Control",
      body:
        "You can delete your account anytime. You can delete individual messages. You can export your data. You own your conversations. Full stop.",
    },
    {
      title: "Backups",
      body:
        "Your chats are backed up securely so you don't lose them. If you switch phones or reinstall the app, you can restore everything. Backups are also encrypted.",
    },
    {
      title: "Changes to This Policy",
      body:
        "If we update this policy, we'll let you know. Your privacy won't get worse—we promise.",
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
            Your privacy, explained simply
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-600">
            No legal robot talk. Just the facts about your privacy on VYBS.
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
          <h2 className="text-2xl font-bold text-gray-900">Regulatory Stuff</h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            We comply with GDPR, CCPA, and other privacy laws. If you're in the EU, you have the right to access, correct, or delete your personal data. If you're in California, you have similar rights under CCPA. Want to exercise these rights? Email us at privacy@vybs.io and we'll help.
          </p>
        </section>

        <section className="mt-8 text-center text-gray-500">
          <p>Last Updated: June 2026</p>
        </section>
      </div>
    </main>
  );
}