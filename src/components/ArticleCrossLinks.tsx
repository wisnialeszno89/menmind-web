import Link from "next/link"

const crossLinks = [
  "jak-znalezc-lepsza-prace",
  "praca-bez-rozwoju-co-dalej",
  "chce-sie-rozwijac-ale-nie-wiem-od-czego-zaczac",
  "chce-zmienic-zycie-zawodowe",
  "praca-nie-daje-mi-satysfakcji",
  "czy-warto-uczyc-sie-czegos-nowego-po-35",
  "chce-robic-cos-wiecej-niz-tylko-pracowac"
]

export default function ArticleCrossLinks({
  slug
}:{
  slug:string
}){

  const links = crossLinks
    .filter(s => s !== slug)
    .slice(0,3)

  if(!links.length) return null

  return(
    <section className="border rounded-xl p-6 mb-12 bg-neutral-50">

      <h3 className="font-semibold mb-4">
        Przeczytaj też
      </h3>

      <div className="space-y-2">

        {links.map(link => (
          <Link
            key={link}
            href={`/artykuly/${link}`}
            className="block hover:underline capitalize"
          >
            {link.replace(/-/g," ")}
          </Link>
        ))}

      </div>

    </section>
  )
}