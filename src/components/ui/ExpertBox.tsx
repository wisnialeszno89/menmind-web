export default function ExpertBox() {

  return (
    <div className="border p-6 mt-16">

      <h3 className="font-semibold mb-2">
        Potrzebujesz wsparcia?
      </h3>

      <p className="text-sm text-neutral-600 mb-4">
        Sprawdź specjalistów którzy pomagają ojcom w podobnej sytuacji.
      </p>

      <a
        href="/specjalisci"
        className="text-sm underline"
      >
        Zobacz specjalistów
      </a>

    </div>
  )
}