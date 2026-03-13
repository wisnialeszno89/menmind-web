export default function WorldLayout({ title, children }) {

  return (

    <main className="max-w-6xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold mb-10">
        {title}
      </h1>

      {children}

    </main>

  )

}