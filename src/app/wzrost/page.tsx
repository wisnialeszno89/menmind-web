import Link from "next/link";
import Image from "next/image";

function Section({
  id,
  title,
  desc,
  bg,
  text,
  cards,
}: any) {
  return (
    <section id={id} className={`section-2026 ${bg} ${text}`}>
      <div className="container-2026 fade-in">
        <h2 className="text-4xl font-semibold tracking-tight">
          {title}
        </h2>

        <p className="mt-4 max-w-2xl text-zinc-400 text-lg leading-relaxed">
          {desc}
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cards.map((card: any) => (
            <Link key={card.title} href={card.href} className="card-2026 overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {card.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main>

      <section className="min-h-screen flex items-center justify-center bg-[#0F172A] text-center px-6">
        <div className="fade-in">
          <h1 className="text-6xl font-semibold tracking-tight text-white">
            Określ, gdzie jesteś.
          </h1>
          <p className="mt-6 text-xl text-zinc-400 max-w-2xl mx-auto">
            Przestrzeń dla mężczyzny w kryzysie, w odbudowie i w sile.
          </p>
          <p className="mt-4 text-lg text-zinc-500">
            Bez presji. Bez etykiet. Bez hałasu.
          </p>
        </div>
      </section>

      <Section
        id="kryzys"
        title="Kryzys"
        desc="Zatrzymaj się. Oddychaj."
        bg="bg-[#0F172A]"
        text="text-white"
        cards={[
          { title: "Wsparcie", href: "/propozycje?state=broken", image: "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2" },
          { title: "Grupy", href: "/spec/grupy", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
          { title: "Navimind", href: "https://navimind.app", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e" }
        ]}
      />

      <Section
        id="odbudowa"
        title="Odbudowa"
        desc="Z ruin buduje się fundament."
        bg="bg-[#1F2937]"
        text="text-white"
        cards={[
          { title: "Trening", href: "/spec/trening", image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1" },
          { title: "Psycholog", href: "/spec/psychologowie", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61" },
          { title: "Wyjazd", href: "/spec/wyjazdy", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" }
        ]}
      />

      <Section
        id="wzrost"
        title="Wzrost"
        desc="Nie przestawaj iść."
        bg="bg-white"
        text="text-zinc-900"
        cards={[
          { title: "Kierunek", href: "/propozycje?state=ready", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d" },
          { title: "Aktywność", href: "/spec/wyjazdy", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
          { title: "Dyscyplina", href: "/spec/trening", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438" }
        ]}
      />

      <Section
        id="ojcostwo"
        title="Ojcostwo"
        desc="Bliskość. Odpowiedzialność."
        bg="bg-[#F5F1EA]"
        text="text-zinc-900"
        cards={[
          { title: "Prawo", href: "/spec/prawo", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300" },
          { title: "Wsparcie", href: "/spec/psychologowie", image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },
          { title: "Grupy", href: "/spec/grupy", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91" }
        ]}
      />

    </main>
  );
}