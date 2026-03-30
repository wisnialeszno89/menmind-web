import Link from "next/link"

type Props = {
  slug: string
  world: string
  title: string
  description: string
}

export default function ArticleCard({
  slug,
  world,
  title,
  description
}: Props) {

  return (

    <Link
      href={`/${world}/${slug}`}
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