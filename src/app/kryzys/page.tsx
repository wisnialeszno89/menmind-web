import BreathingTool from "@/components/BreathingTool";
import EnergyGauge from "@/components/EnergyGauge";
import MoodLog from "@/components/MoodLog";

export default function KryzysPage() {
  return (
    <main className="section-compact">
      <div className="container-2026 max-w-3xl">

        <h1 className="text-4xl font-semibold tracking-tight mb-6">
          Zatrzymaj się.
        </h1>

        <p className="text-zinc-400 text-lg mb-10">
          Najpierw regulacja. Potem decyzje.
        </p>

        <BreathingTool />
        <EnergyGauge />
        <MoodLog />

      </div>
    </main>
  );
}