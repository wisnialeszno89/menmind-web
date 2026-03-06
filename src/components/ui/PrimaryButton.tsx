import Link from "next/link"

type Props = {
  href: string
  children: React.ReactNode
}

export default function PrimaryButton({ href, children }: Props) {
  return (

    <Link
      href={href}
      className="
      inline-block
      bg-black
      text-white
      px-6
      py-3
      rounded-lg
      font-medium
      hover:opacity-90
      transition
      "
    >
      {children}
    </Link>

  )
}