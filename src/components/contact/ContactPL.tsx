"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPL() {

  const action = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION_PL ?? "";

  const [sent, setSent] = useState(false);

  return (

    <main className="bg-gray-50 min-h-screen py-24">

      <div className="mx-auto max-w-3xl px-6">

        <h1 className="text-4xl font-semibold mb-6">
          Kontakt
        </h1>

        <p className="text-gray-600 mb-10">
          Napisz do nas — odpowiadamy zwykle w 24-72h.
        </p>

        {sent ? (

          <div className="bg-white border rounded-xl p-6">

            <h3 className="text-lg font-semibold mb-2">
              Wiadomość wysłana
            </h3>

            <p className="text-gray-600">
              Dzięki. Odezwiemy się mailowo.
            </p>

            <Link
              href="/"
              className="inline-block mt-4 text-blue-600"
            >
              Wróć →
            </Link>

          </div>

        ) : (

          <form
            action={action}
            method="POST"
            className="space-y-4 bg-white border rounded-xl p-6"
            onSubmit={() => setSent(true)}
          >

            <input
              name="name"
              required
              placeholder="Imię"
              className="w-full border rounded-lg p-3"
            />

            <input
              name="email"
              required
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Twoja wiadomość"
              className="w-full border rounded-lg p-3"
            />

            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg"
            >
              Wyślij
            </button>

          </form>

        )}

      </div>

    </main>

  );
}