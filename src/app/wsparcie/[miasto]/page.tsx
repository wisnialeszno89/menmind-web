import { partners } from "@/lib/partners";

type Props = {
  params: {
    miasto: string;
  };
};

export default function MiastoPage({ params }: Props) {
  const cityPartners = partners.filter(
    (p) => p.city === params.miasto
  );

  const premium = cityPartners.filter((p) => p.premium);
  const normal = cityPartners.filter((p) => !p.premium);

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-semibold capitalize">
          Wsparcie – {params.miasto}
        </h1>

        {premium.length > 0 && (
          <>
            <h2 className="mt-12 text-xl font-semibold">
              Polecani partnerzy
            </h2>

            <div className="mt-6 space-y-6">
              {premium.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  className="block rounded-xl border border-accent p-6"
                >
                  <h3 className="font-medium">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-textMuted mt-2">
                    {partner.description}
                  </p>
                </a>
              ))}
            </div>
          </>
        )}

        <h2 className="mt-12 text-xl font-semibold">
          Wszyscy partnerzy
        </h2>

        <div className="mt-6 space-y-6">
          {normal.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              className="block rounded-xl border border-borderSoft p-6"
            >
              <h3 className="font-medium">
                {partner.name}
              </h3>
              <p className="text-sm text-textMuted mt-2">
                {partner.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}