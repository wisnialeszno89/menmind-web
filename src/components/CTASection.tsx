import Link from "next/link";

export default function CTASection() {
  return (

    <section className="section-compact bg-gray-100">

      <div className="container-2026 text-center max-w-xl">

        <h2 className="text-xl font-semibold mb-4">
          Jeśli potrzebujesz wsparcia
        </h2>

        <p className="text-gray-600 mb-8">
          Czasem kilka kroków pomaga,
          a czasem warto porozmawiać z kimś,
          kto zna podobne sytuacje.
        </p>

        <Link
          href="/propozycje"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg"
        >
          Zobacz dostępne możliwości
        </Link>

      </div>

    </section>
  );
}