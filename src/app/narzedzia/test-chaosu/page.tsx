export default function TestChaosu() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Test poziomu chaosu</h1>

      <div className="space-y-3">
        {[
          "Brak planu dnia",
          "Problemy finansowe",
          "Konflikty w relacji",
          "Brak energii",
          "Chaos w pracy",
          "Uzależnienia / ucieczki"
        ].map((q, i) => (
          <label key={i} className="flex gap-2">
            <input type="checkbox" />
            {q}
          </label>
        ))}
      </div>

      <button className="mt-6 px-4 py-2 bg-black text-white rounded">
        Oblicz
      </button>
    </div>
  );
}