"use client";

import { useState } from "react";

const activities: Record<string, string[]> = {
  "0-3": [
    "Spacer o stałej porze dnia",
    "Czytanie tej samej książki przez tydzień",
    "Prosta zabawa sensoryczna (woda, piasek, dotyk)",
    "Kąpiel jako spokojny rytuał tylko Wasz",
  ],
  "4-7": [
    "Wspólne gotowanie prostego dania",
    "Budowanie z klocków według własnego projektu",
    "Wymyślenie i narysowanie własnej historii",
    "Wyjście tylko we dwoje na małą wyprawę",
  ],
  "8-12": [
    "Wspólny sport lub rower",
    "Zaplanowanie krótkiej wycieczki razem",
    "Projekt majsterkowy (model, półka, coś realnego)",
    "Rozmowa podczas spaceru bez telefonu",
  ],
  "13+": [
    "Wspólny trening lub aktywność fizyczna",
    "Rozmowa o realnym temacie (bez wykładu)",
    "Planowanie budżetu na wspólny cel",
    "Wyjście, gdzie to dziecko wybiera miejsce",
  ],
};

export default function FatherActivityGenerator() {
  const [age, setAge] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);

  const generate = () => {
    if (!age) return;

    const pool = activities[age];
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    setResult(shuffled.slice(0, 3));
  };

  return (
    <div className="border border-neutral-800 rounded-xl p-8 mt-16">

      <h3 className="text-xl font-semibold mb-6">
        Potrzebujesz inspiracji?
      </h3>

      <div className="flex flex-col md:flex-row gap-4 mb-6">

        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="bg-neutral-900 border border-neutral-800 p-3 rounded-lg text-neutral-200"
        >
          <option value="">Wybierz wiek dziecka</option>
          <option value="0-3">0–3 lata</option>
          <option value="4-7">4–7 lat</option>
          <option value="8-12">8–12 lat</option>
          <option value="13+">13+ lat</option>
        </select>

        <button
          onClick={generate}
          className="bg-blue-500 hover:bg-blue-400 text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Pokaż propozycję
        </button>

      </div>

      {result.length > 0 && (
        <ul className="space-y-3 text-neutral-300 leading-8">
          {result.map((item, index) => (
            <li key={index}>– {item}</li>
          ))}
        </ul>
      )}

    </div>
  );
}