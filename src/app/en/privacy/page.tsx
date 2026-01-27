export default function PrivacyEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · document</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          MenMind respects privacy. The website works without accounts and without requiring personal data.
        </p>

        <section className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">
              1. Technical data
            </h2>
            <p className="mt-2">
              The service may process basic technical information such as IP address,
              browser type, and diagnostic data to keep the website working properly.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">
              2. Third-party content (e.g. embedded chat)
            </h2>
            <p className="mt-2">
              Some features may rely on third-party services (for example the embedded chat).
              In such cases, data processing may be subject to those services’ privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">
              3. Cookies
            </h2>
            <p className="mt-2">
              MenMind does not use cookies for advertising tracking.
              If analytics tools are added later, this policy will be updated.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">
              4. Contact
            </h2>
            <p className="mt-2">
              If you have questions about privacy or want to report an issue, please contact us via the website if available.
            </p>
          </div>
        </section>

        <p className="mt-10 text-xs text-zinc-500">
          Last update: {new Date().toISOString().slice(0, 10)}
        </p>
      </div>
    </main>
  );
}