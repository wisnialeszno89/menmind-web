export default function RytualPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-semibold">
          Rytuał 15 minut
        </h1>

        <div className="mt-8 space-y-6 text-textMuted">
          <p>1. Wyłącz telefon.</p>
          <p>2. Zapytaj: „Co dziś wymyślamy?”</p>
          <p>3. Dziecko prowadzi przez 15 minut.</p>
          <p>4. Nie oceniasz. Nie poprawiasz.</p>
        </div>

        <div className="mt-10 rounded-2xl border border-accent p-6">
          To wystarczy. Relacja buduje się w obecności.
        </div>
      </div>
    </main>
  );
}