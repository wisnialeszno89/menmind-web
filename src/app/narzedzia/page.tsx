import BreathingTool from "@/components/BreathingTool";
import EnergyGauge from "@/components/EnergyGauge";
import MoodLog from "@/components/MoodLog";

export default function NarzedziaPage() {
  return (
    <main className="section-compact bg-[#0F172A]">
      <div className="container-2026 max-w-3xl">

        <h1 className="text-4xl font-semibold tracking-tight mb-6">
          Narzędzia
        </h1>

        <p className="text-zinc-400 text-lg mb-12">
          Bez logowania. Bez zapisu w chmurze. 
          Tylko przestrzeń do regulacji i refleksji.
        </p>

        <BreathingTool />
        <EnergyGauge />
        <MoodLog />
        <div className="mt-16 border-t border-zinc-700 pt-6 text-xs text-zinc-500 leading-relaxed">
  Dane wprowadzone w narzędziach przechowywane są wyłącznie w pamięci Twojej przeglądarki 
  i przypisane do tego urządzenia. 
  Nie są wysyłane na serwer ani zapisywane w chmurze.
</div>

      </div>
    </main>
  );
}