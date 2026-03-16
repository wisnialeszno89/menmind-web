export function navimindLink({
  state,
  article,
  source = "menmind"
}: {
  state?: string
  article?: string
  source?: string
}) {

  const base = "https://navimind.app"

  const params = new URLSearchParams()

  if (state) params.set("state", state)
  if (article) params.set("article", article)
  if (source) params.set("source", source)

  return `${base}?${params.toString()}`
}