import Link from "next/link"

type Props = {
  title: string
  description: string
  href: string
}

export default function RecommendedPath({
  title,
  description,
  href
}: Props){
  return (
    <div className="border rounded-xl p-6 mt-8 bg-neutral-50">

      <h3 className="font-semibold mb-2">
        Rekomendowana ścieżka
      </h3>

      <p className="text-sm text-neutral-600 mb-4">
        {description}
      </p>

      <Link
        href={href}
        className="inline-block border px-4 py-2 rounded-lg card-hover"
      >
        Przejdź do: {title}
      </Link>

    </div>
  )
}