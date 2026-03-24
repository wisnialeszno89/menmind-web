import Link from "next/link"

export default function FindSupportCTA({
  label = "👉 Znajdź wsparcie",
  className = "block border p-4 rounded-lg"
}) {
  return (
    <Link
      href="/propozycje"
      className={className}
    >
      {label}
    </Link>
  )
}