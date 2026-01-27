export default function TermsEN() {
  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · document</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Terms of Use
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          MenMind is a simple waypoint and a set of supportive tools for difficult moments.
          By using the website you accept the terms below.
        </p>

        <section className="mt-10 space-y-6 text-zinc-300 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-zinc-100">1. What MenMind is</h2>
            <p className="mt-2">
              MenMind is not a medical, psychological, or therapeutic service.
              It does not provide diagnoses and does not replace professional help.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">2. Your responsibility</h2>
            <p className="mt-2">
              You use MenMind voluntarily and at your own risk.
              The content is informational and supportive in nature.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">3. Crisis situations</h2>
            <p className="mt-2">
              If you are in immediate danger (self-harm thoughts, violence, severe mental crisis),
              contact your local emergency number. MenMind is not an emergency service.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">4. Privacy & conversations</h2>
            <p className="mt-2">
              MenMind does not require an account. Some features may rely on third-party services
              (for example the embedded chat). Details are described in the Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">5. Links & partners</h2>
            <p className="mt-2">
              MenMind may include links to external resources and partner offers.
              We are not responsible for third-party content or services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-zinc-100">6. Updates</h2>
            <p className="mt-2">
              These terms may be updated. The newest version is always available on this page.
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