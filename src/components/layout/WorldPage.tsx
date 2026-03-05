type Props = {
  title: string
  intro: string
  children: React.ReactNode
}

export default function WorldPage({
  title,
  intro,
  children
}: Props) {

  return (

    <main className="bg-gray-100 min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-20">

        <h1 className="text-5xl font-semibold text-gray-900 mb-6">
          {title}
        </h1>

        <div className="h-px w-16 bg-blue-600 mb-10" />

        <p className="text-gray-700 mb-16 max-w-2xl">
          {intro}
        </p>

        {children}

      </div>

    </main>

  )
}