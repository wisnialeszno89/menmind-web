export default function NowDoing(){

  const items = [
    "3 osoby robią test sytuacji",
    "2 osoby układają plan 72h",
    "1 osoba szuka wsparcia",
    "4 osoby czytają artykuł o kryzysie",
    "2 osoby robią test stresu"
  ]

  return (
    <section className="py-16 border-t">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-xl font-semibold mb-6">
          Co robią teraz inni
        </h2>

        <div className="space-y-2 text-sm text-neutral-600">
          {items.map((i,index)=>(
            <div key={index}>• {i}</div>
          ))}
        </div>

      </div>
    </section>
  )
}