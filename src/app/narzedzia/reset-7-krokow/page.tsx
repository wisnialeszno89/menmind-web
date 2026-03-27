export default function Reset() {
  const steps = [
    "Sen 7h",
    "Ruch 20 min",
    "Zero alkoholu",
    "Plan dnia",
    "Kontakt z dzieckiem",
    "Rozmowa z partnerką",
    "1 decyzja"
  ];

  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">
        Reset w 7 krokach
      </h1>

      {steps.map((s,i)=>(
        <label key={i} className="block">
          <input type="checkbox" className="mr-2"/>
          {s}
        </label>
      ))}
    </div>
  );
}