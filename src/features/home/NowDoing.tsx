export default function NowDoing(){

  const items = [
    "5 osób robi teraz test sytuacji",
    "3 osoby układają plan 72h",
    "2 osoby szukają wsparcia",
    "4 osoby czytają artykuły o kryzysie"
  ]

  return (
    <section className="py-16 bg-neutral-50 border-t">
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