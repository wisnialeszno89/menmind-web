"use client";

import { useState } from "react";
import Link from "next/link";

export default function DrogaPage() {

  const [step, setStep] = useState(0);
  const [result, setResult] = useState("");

  const questions = [

    {
      q: "Czy czujesz obecnie chaos w życiu?",
      a: "kryzys",
    },

    {
      q: "Czy próbujesz odbudować energię i kierunek?",
      a: "odbudowa",
    },

    {
      q: "Czy szukasz rozwoju i nowych możliwości?",
      a: "wzrost",
    },

    {
      q: "Czy Twoim głównym tematem jest relacja z dzieckiem?",
      a: "ojcostwo",
    },

  ];

  const answer = (a: string) => {

    setResult(a);

    setStep(questions.length);
  };

  if (step >= questions.length) {

    return (

      <main className="min-h-screen flex items-center justify-center">

        <div className="text-center">

          <h1 className="text-3xl font-semibold mb-6">
            Twoje miejsce teraz
          </h1>

          <Link
            href={`/${result}`}
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Przejdź dalej
          </Link>

        </div>

      </main>

    );
  }

  return (

    <main className="min-h-screen flex items-center justify-center">

      <div className="max-w-xl text-center">

        <h1 className="text-2xl font-semibold mb-10">
          {questions[step].q}
        </h1>

        <div className="space-y-4">

          <button
            onClick={() => answer(questions[step].a)}
            className="block w-full border p-4 rounded-lg"
          >
            Tak
          </button>

          <button
            onClick={() => setStep(step + 1)}
            className="block w-full border p-4 rounded-lg"
          >
            Nie
          </button>

        </div>

      </div>

    </main>

  );
}