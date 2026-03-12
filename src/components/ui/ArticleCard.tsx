import Link from "next/link"

type Props = {
  title: string
  description: string
  href: string
}

export default function ArticleCard({ title, description, href }: Props) {
  return (
    <Link
      href={href}
      className="block border border-neutral-200 p-6 hover:border-black transition"
    >

      <h3 className="text-xl font-medium mb-2 text-black">
        {title}
      </h3>

      <p className="text-sm text-neutral-600 leading-relaxed">
        {description}
      </p>

    </Link>
  )
}