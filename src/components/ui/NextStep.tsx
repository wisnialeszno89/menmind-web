import Link from "next/link"

type Item = {
  title: string
  href: string
}

type Props = {
  items: Item[]
}

export default function NextStep({ items }: Props) {
  return (
    <div className="border mt-16 p-6">

      <h3 className="font-semibold mb-4">
        Kolejne kroki
      </h3>

      <ul className="space-y-2 text-sm">

        {items.map((item, i) => (

          <li key={i}>

            <Link
              href={item.href}
              className="underline"
            >
              {item.title}

            </Link>

          </li>

        ))}

      </ul>

    </div>
  )
}