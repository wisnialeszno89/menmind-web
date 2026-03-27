import Link from "next/link"

type Props = {
  slug: string
  title: string
  description?: string
  base: string
  isNew?: boolean
}

export default function ArticleCard({
  slug,
  title,
  description,
  base,
  isNew
}: Props) {
  return (
    <Link
      href={`/${base}/${slug}`}
      className="border rounded-xl p-6 block card-hover hover:border-black transition bg-white"
    >
      <h3 className="text-xl font-medium mb-2 flex items-center">
        {title}

        {isNew && (
          <span className="ml-2 text-xs px-2 py-1 bg-black text-white rounded">
            Nowe
          </span>
        )}
      </h3>

      {description && (
        <p className="text-sm text-neutral-600">
          {description}
        </p>
      )}
    </Link>
  )
}