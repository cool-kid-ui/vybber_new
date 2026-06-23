import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Download VYBS",
    body: "Get VYBS from the Apple App Store or Google Play Store. Available on iOS and Android.",
  },
  {
    step: "02",
    title: "Verify Your Number",
    body: "Enter your phone number and verify it with the code we send via SMS. That's it.",
  },
  {
    step: "03",
    title: "Find Your People",
    body: "Sync your contacts or search for friends by username. Add them and start chatting.",
  },
  {
    step: "04",
    title: "Start Vibing",
    body: "Send messages, photos, voice notes, and files. Create groups for your circles. Vibe on.",
  },
];

const faqs = [
  {
    question: "How do I create a group?",
    answer:
      "Tap the pencil icon, select 'New Group', add the people you want, and give it a name. That's it.",
  },
  {
    question: "How do I send files?",
    answer:
      "Tap the attachment icon and choose a file from your phone. You can send documents, photos, videos, and more.",
  },
  {
    question: "Is my chat backed up?",
    answer:
      "Yes. Your chats are backed up securely. You can restore them if you switch phones or reinstall the app.",
  },
  {
    question: "Can I delete messages?",
    answer:
      "Yes. Delete a message anytime. For everyone, or just for you. The choice is yours.",
  },
  {
    question: "How do I mute notifications?",
    answer:
      "Open the chat, tap the settings icon, and choose your notification preferences. Vibe at your own pace.",
  },
  {
    question: "What about voice and video calls?",
    answer:
      "Voice and video calls are coming soon. We're making sure they're encrypted and rock-solid.",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-gray-900">
      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
            How to Use
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Get started with VYBS
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-gray-600 md:text-2xl">
            Super simple. 4 steps and you're done.
          </p>
        </section>

        {/* Steps */}
        <section className="mt-24 grid gap-8 lg:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-blue-200 bg-white/80 p-8 backdrop-blur-sm shadow-md hover:shadow-lg transition"
            >
              <p className="text-sm tracking-widest text-blue-600 font-semibold">
                {step.step}
              </p>

              <h2 className="mt-4 text-3xl font-bold">
                {step.title}
              </h2>

              <p className="mt-6 leading-relaxed text-gray-600">
                {step.body}
              </p>
            </div>
          ))}
        </section>

        {/* FAQ */}
        <section className="mt-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold md:text-5xl">Questions?</h2>

            <div className="mt-12 space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-200 bg-white/80 p-8 backdrop-blur-sm shadow-md hover:shadow-lg transition"
                >
                  <h3 className="text-lg font-bold text-gray-900">
                    {faq.question}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-32 max-w-4xl rounded-2xl border border-blue-200 bg-blue-50 p-12 backdrop-blur-sm text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Ready to vibe?
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-gray-600 md:text-2xl">
            Join the people building a better way to message.
          </p>

          <Link
            href="/#waitlist"
            className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Join the Waitlist
          </Link>
        </section>
      </div>
    </main>
  );
}