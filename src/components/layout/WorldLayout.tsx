type Props = {
  title: string
  description?: string
  children: React.ReactNode
}

export default function WorldLayout({
  title,
  description,
  children
}: Props) {

  return (

    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-4">
        {title}
      </h1>

      {description && (
        <p className="text-gray-600 mb-10 max-w-2xl">
          {description}
        </p>
      )}

      {children}

    </main>

  )

}