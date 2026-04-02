import Link from "next/link"

type Props = {
  slug: string
  world: string
  title: string
  description: string
  isSeo?: boolean
}

export default function ArticleCard({
  slug,
  world,
  title,
  description,
  isSeo
}: Props) {

  const href = isSeo
    ? `/artykuly/${slug}`
    : `/${world}/${slug}`

  return (
    <Link
      href={href}
      className="block border rounded-xl p-6 hover:shadow transition"
    >
      <h3 className="font-semibold mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-600">
        {description}
      </p>
    </Link>
  )
}