export const metadata = {
  title: "Tożsamość | MenMind",
  description: "Rzeczy i doświadczenia, które coś znaczą.",
};

export default function TozsamoscPage() {
  return (
    <div className="text-neutral-200">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6 text-blue-500">
          Tożsamość
        </h1>
        <div className="h-px w-16 bg-blue-500 mb-12" />

        <p className="text-lg text-neutral-300 mb-12 max-w-2xl">
          Rzeczy i doświadczenia, które coś znaczą.
          Nie dla konsumpcji. Dla symbolu.
        </p>

        <ul className="space-y-4 text-neutral-300 text-lg mb-16">
          <li>– zegarki i przedmioty jakościowe</li>
          <li>– sprzęt outdoor</li>
          <li>– książki</li>
          <li>– prezenty dla mężczyzn</li>
        </ul>

      </div>
    </div>
  );
}