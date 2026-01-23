import WhereYouAre from "@/components/where/WhereYouAre";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl md:text-5xl font-semibold mb-6">
        Nie jesteś zgubiony.
      </h1>

      <p className="text-zinc-400 max-w-xl mb-10">
        Jesteś w punkcie orientacyjnym. Sprawdź, gdzie jesteś
        i zobacz, jakie masz możliwe kierunki.
      </p>

      <WhereYouAre />
    </main>
  );
}
