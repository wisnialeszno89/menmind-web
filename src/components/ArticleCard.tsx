import Link from "next/link"

type Props = {
  title: string
  intro: string
  href: string
}

export default function ArticleCard({
  title,
  intro,
  href
}: Props) {

  return (

    <Link
      href={href}
      className="
      block
      bg-white
      border
      border-gray-300
      rounded-xl
      p-6
      hover:shadow-md
      transition
      "
    >

      <h3 className="text-lg font-semibold mb-2 text-gray-900">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">
        {intro}
      </p>

    </Link>

  )

}