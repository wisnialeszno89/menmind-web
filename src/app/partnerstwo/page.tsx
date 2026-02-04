"use client";

import { useState } from "react";
import Link from "next/link";

export default function PartnershipPL() {
  const action = process.env.NEXT_PUBLIC_PARTNER_FORM_ACTION_PL ?? "";
  const [sent, setSent] = useState(false);

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-zinc-400">MenMind · partnerstwo</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          Zgłoszenie partnera
        </h1>

        <p className="mt-4 text-zinc-300 leading-relaxed">
          Jeśli oferujesz coś, co realnie pomaga facetom (trening, wyjazdy, prawo,
          wsparcie, społeczność) — możesz się zgłosić. Weryfikujemy ręcznie.
          Publikujemy tylko konkret.
        </p>

        {/* ✅ LINK DO PAKIETÓW + KONTAKT (tu był brak) */}
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/partnerstwo/pakiety"
            className="inline-flex items-center justify-center rounded-xl bg-zinc-800/50 px-4 py-2 text-sm font-semibold text-zinc-100 ring-1 ring-zinc-700/70 hover:bg-zinc-800/70 transition"
          >
            Zobacz pakiety współpracy →
          </Link>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
          >
            Kontakt →
          </Link>
        </div>

        <section className="mt-8 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6 shadow-lg shadow-black/20 backdrop-blur">
          <h2 className="text-lg font-semibold text-zinc-100">
            Formularz zgłoszeniowy
          </h2>

          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            Wypełnij dane. Jeśli masz PDF/ofertę lub link do materiałów — dodaj.
          </p>

          {!action ? (
            <div className="mt-6 rounded-2xl border border-zinc-800/60 bg-zinc-950/20 p-5">
              <p className="text-sm text-zinc-200 font-semibold">
                Formularz nie jest jeszcze podpięty.
              </p>

              <p className="mt-2 text-sm text-zinc-500">
                Ustaw{" "}
                <span className="text-zinc-200 font-medium">
                  NEXT_PUBLIC_PARTNER_FORM_ACTION_PL
                </span>{" "}
                w <span className="text-zinc-200 font-medium">.env.local</span>{" "}
                (np. Formspree), a potem wróć tutaj.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/50 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700/70 hover:bg-zinc-800/70 transition"
                >
                  ← Strona główna
                </Link>
              </div>
            </div>
          ) : sent ? (
            <div className="mt-6 rounded-2xl border border-zinc-800/60 bg-zinc-950/20 p-6">
              <h3 className="text-lg font-semibold text-zinc-100">
                Dzięki — zgłoszenie wysłane ✅
              </h3>

              <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Jeśli będzie fit, odezwiemy się mailowo. Zwykle w 24–72h.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/partners"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-900/30 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-800/60 hover:bg-zinc-800/40 transition"
                >
                  Zobacz zasoby →
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/50 px-4 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700/70 hover:bg-zinc-800/70 transition"
                >
                  ← Wróć
                </Link>
              </div>
            </div>
          ) : (
            <form
              action={action}
              method="POST"
              encType="multipart/form-data"
              className="mt-6 grid grid-cols-1 gap-4"
              onSubmit={() => setSent(true)}
            >
              {/* ✅ Formspree redirect (żeby było pewnie) */}
              <input
                type="hidden"
                name="_redirect"
                value="https://menmind.app/thanks"
              />
              <input
                type="hidden"
                name="_subject"
                value="MenMind — zgłoszenie partnera (PL)"
              />

              {/* Honeypot anti-spam */}
              <input type="text" name="_gotcha" className="hidden" />

              {/* Meta */}
              <input
                type="hidden"
                name="source"
                value="menmind.app/partnerstwo (PL)"
              />
              <input type="hidden" name="language" value="pl" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Imię i nazwisko / firma" name="name" required />
                <Field
                  label="Email kontaktowy"
                  name="email"
                  type="email"
                  required
                />
              </div>

              <Field
                label="Twoja oferta (krótko, konkretnie)"
                name="offer"
                textarea
                placeholder="Np. Trening personalny dla mężczyzn po rozstaniu / Mediacje rodzinne / Wyjazdy outdoor..."
                required
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field
                  label="Miasto (albo: Online)"
                  name="city"
                  placeholder="Np. Poznań / Wrocław / Online"
                  required
                />
                <Field
                  label="Strona / Instagram / link"
                  name="link"
                  placeholder="https://..."
                />
              </div>

              <Field
                label="Dla kogo jest ta oferta?"
                name="target"
                textarea
                placeholder="Np. faceci w kryzysie, ojcowie, rozwód, presja..."
              />

              <Field
                label="Dlaczego to działa? (2–3 zdania)"
                name="proof"
                textarea
                placeholder="Np. liczba klientów, doświadczenie, podejście, styl pracy..."
              />

              <div className="rounded-2xl border border-zinc-800/60 bg-zinc-950/20 p-4">
                <p className="text-sm font-semibold text-zinc-100">
                  Załączniki (opcjonalnie)
                </p>
                <p className="mt-1 text-xs text-zinc-500">
                  Możesz dodać PDF/ofertę/cennik. (Jeśli Twój provider formularza
                  to obsługuje)
                </p>

                <input
                  type="file"
                  name="attachment"
                  className="mt-3 w-full text-sm text-zinc-300 file:mr-4 file:rounded-xl file:border-0 file:bg-zinc-800/50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-zinc-200 hover:file:bg-zinc-800/70 transition"
                />
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500/15 px-5 py-2 text-sm font-semibold text-cyan-200 ring-1 ring-cyan-400/20 hover:bg-cyan-500/20 transition"
                >
                  Wyślij zgłoszenie →
                </button>

                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-800/50 px-5 py-2 text-sm font-semibold text-zinc-200 ring-1 ring-zinc-700/70 hover:bg-zinc-800/70 transition"
                >
                  ← Wróć
                </Link>
              </div>

              <p className="mt-3 text-xs text-zinc-500">
                Wysyłając zgłoszenie, potwierdzasz, że podane dane są prawdziwe.
                Nie publikujemy wszystkiego — weryfikujemy ręcznie.
              </p>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-zinc-200">{label}</span>

      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className="mt-2 w-full rounded-xl border border-zinc-800/60 bg-zinc-950/20 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="mt-2 w-full rounded-xl border border-zinc-800/60 bg-zinc-950/20 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/20"
        />
      )}
    </label>
  );
}
