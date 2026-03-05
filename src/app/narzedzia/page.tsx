import BreathingTool from "@/components/BreathingTool";
import EnergyGauge from "@/components/EnergyGauge";
import MoodLog from "@/components/MoodLog";

export default function NarzedziaPage() {
  return (
    <main className="bg-gray-100 min-h-screen">

      <div className="max-w-3xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-semibold mb-6 text-gray-900">
          Narzędzia
        </h1>

        <div className="h-px w-16 bg-blue-600 mb-12" />

        <p className="text-lg text-gray-700 mb-16">
          Proste narzędzia które pomagają uporządkować
          napięcie, energię i myśli.
          Nie wymagają logowania ani zapisu danych.
        </p>

        <BreathingTool />
        <EnergyGauge />
        <MoodLog />

        <div className="mt-16 border-t border-gray-300 pt-6 text-sm text-gray-600 leading-relaxed">
          Dane wprowadzone w narzędziach przechowywane są wyłącznie
          w pamięci Twojej przeglądarki i przypisane do tego urządzenia.
          Nie są wysyłane na serwer ani zapisywane w chmurze.
        </div>

      </div>

    </main>
  );
}