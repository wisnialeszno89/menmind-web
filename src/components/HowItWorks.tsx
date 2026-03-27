export default function HowItWorks() {
  const steps = [
    "Robisz test",
    "Dostajesz wynik",
    "Wybierasz narzędzie",
    "Podejmujesz decyzję"
  ];

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-6">
        Jak działa
      </h2>

      <div className="grid md:grid-cols-4 gap-4">
        {steps.map((s,i)=>(
          <div key={i} className="border p-4 rounded">
            <div className="font-bold mb-2">
              {i+1}
            </div>
            {s}
          </div>
        ))}
      </div>
    </section>
  );
}