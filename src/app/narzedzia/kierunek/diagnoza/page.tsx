"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  "Czy czujesz stałe zmęczenie?",
  "Czy masz trudność z koncentracją?",
  "Czy masz poczucie chaosu w życiu?",
  "Czy tracisz motywację do rzeczy które wcześniej miały sens?",
  "Czy napięcie utrzymuje się od tygodni?"
];

export default function DiagnozaPage() {

  const [step,setStep] = useState(0);
  const [score,setScore] = useState(0);

  const answer = (yes:boolean) => {

    if(yes) setScore(score+1);

    setStep(step+1);

  };

  if(step >= questions.length){

    let state = "stabilnie";
    let description = "Twoja sytuacja wygląda na względnie stabilną.";

    if(score >= 2){
      state = "stres";
      description = "Pojawiają się oznaki przeciążenia.";
    }

    if(score >= 4){
      state = "możliwy kryzys";
      description = "Twoja sytuacja może wymagać większej uwagi.";
    }

    return(

      <main className="min-h-screen px-6 py-20">

        <div className="max-w-xl mx-auto">

          <h1 className="text-3xl font-semibold mb-6">
            Twój stan: {state}
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
              href="/narzedzia/energia"
              className="block border p-4 rounded-lg"
            >
              Odbuduj energię
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