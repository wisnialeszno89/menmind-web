export default function MarketplacePlaceholder({
  category,
  city
}:{
  category:string
  city?:string
}){

  return(

    <div className="border rounded-xl p-6 bg-neutral-50">

      <div className="text-xs text-neutral-500 mb-2">
        Partner w trakcie dodawania
      </div>

      <h3 className="font-semibold mb-2">
        {category}
      </h3>

      {city && (
        <div className="text-sm text-neutral-600 mb-2">
          {city}
        </div>
      )}

      <p className="text-sm text-neutral-600 mb-4">
        Dodajemy zweryfikowanych specjalistów.
        Możesz zgłosić się jako pierwszy partner.
      </p>

      <a
        href="/dla-partnerow"
        className="text-sm underline"
      >
        Zostań pierwszym partnerem
      </a>

    </div>

  )
}