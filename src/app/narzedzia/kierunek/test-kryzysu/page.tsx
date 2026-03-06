"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  "Czy czujesz chaos w swoim życiu?",
  "Czy trudno Ci podjąć decyzję?",
  "Czy masz poczucie utraty kierunku?",
  "Czy napięcie utrzymuje się od dłuższego czasu?",
  "Czy czujesz zmęczenie psychiczne?",
  "Czy relacje wokół Ciebie są napięte?"
];

export default function KryzysTestPage() {

  const [step,setStep] = useState(0);
  const [score,setScore] = useState(0);

  const answer = (yes:boolean) => {

    if(yes) setScore(score+1);

    setStep(step+1);

  };

  if(step >= questions.length){

    let result = "stabilnie";
    let description = "Twoja sytuacja wygląda na względnie stabilną.";

    if(score >= 2){
      result = "sygnały napięcia";
      description = "Pojawiają się sygnały że coś wymaga uwagi.";
    }

    if(score >= 4){
      result = "możliwy kryzys";
      description = "Możliwe że przechodzisz trudniejszy moment życiowy.";
    }

    return(

      <main className="min-h-screen px-6 py-20">

        <div className="max-w-xl mx-auto">

          <h1 className="text-3xl font-semibold mb-6">
            Wynik: {result}
          </h1>

          <p className="text-gray-700 mb-10">
            {description}
          </p>

          <div className="space-y-4">

            <Link
              href="/narzedzia/stabilizacja"
              className="block border p-4 rounded-lg"
            >
              Zobacz narzędzia stabilizacji
            </Link>

            <Link
              href="/propozycje"
              className="block bg-black text-white px-6 py-3 rounded-lg text-center"
            >
              Sprawdź dostępne wsparcie
            </Link>

          </div>

        </div>

      </main>

    );

  }

  return(

    <main className="min-h-screen px-6 py-20">

      <div className="max-w-xl mx-auto">

        <h1 className="text-2xl font-semibold mb-10">
          {questions[step]}
        </h1>

        <div className="space-y-4">

          <button
            onClick={()=>answer(true)}
            className="block w-full border p-4 rounded-lg"
          >
            Tak
          </button>

          <button
            onClick={()=>answer(false)}
            className="block w-full border p-4 rounded-lg"
          >
            Nie
          </button>

        </div>

        <p className="text-sm text-gray-500 mt-8">
          Pytanie {step+1} z {questions.length}
        </p>

      </div>

    </main>

  );

}