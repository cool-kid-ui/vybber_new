const sections = [
  {
    title: "Acceptance of Terms",
    body:
      "By accessing or using VYBBER, you agree to these Terms of Service and any future updates.",
  },
  {
    title: "User Conduct",
    body:
      "Users must not post unlawful, harmful, deceptive, or abusive content. VYBBER reserves the right to remove content that violates platform guidelines.",
  },
  {
    title: "Accounts & Access",
    body:
      "Some features may require an account. Users are responsible for maintaining the security of their credentials.",
  },
  {
    title: "Intellectual Property",
    body:
      "All VYBBER branding, software, and platform assets remain the property of VYBBER unless otherwise stated.",
  },
  {
    title: "Limitation of Liability",
    body:
      "VYBBER is provided on an 'as available' basis. We do not guarantee uninterrupted availability or error-free operation.",
  },
  {
    title: "Changes to These Terms",
    body:
      "We may update these Terms periodically. Continued use of VYBBER constitutes acceptance of any revised terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Legal
          </p>

          <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Terms of Service
          </h1>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400">
            These terms govern the use of VYBBER and its services.
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

        <section className="mt-24 rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <p className="text-zinc-400">
            Last Updated: June 2026
          </p>

          <p className="mt-4 leading-relaxed text-zinc-300">
            These Terms are intended as a general framework and may be expanded
            as VYBBER evolves and additional services become available.
          </p>
        </section>
      </div>
    </main>
  );
}