import Link from "next/link"

type Props = {
  slug: string
  title: string
  description?: string
  base: string
}

export default function ArticleCard({
  slug,
  title,
  description,
  base
}: Props) {

  return (
    <Link
      href={`/${base}/${slug}`}
      className="border p-6 block hover:border-black transition"
    >
      <h3 className="text-xl font-medium mb-2">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-neutral-600">
          {description}
        </p>
      )}
    </Link>
  )
}