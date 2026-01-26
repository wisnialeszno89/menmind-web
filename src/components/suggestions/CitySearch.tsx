"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type City = {
  key: string;
  label: string;
};

export default function CitySearch({
  baseHref,
  state,
  city,
  cities,
  placeholder,
  tip,
}: {
  baseHref: string;
  state: string;
  city: string;
  cities: City[];
  placeholder: string;
  tip: string;
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    if (!qq) return cities.slice(0, 16);
    return cities
      .filter((c) => c.label.toLowerCase().includes(qq))
      .slice(0, 16);
  }, [q, cities]);

  return (
    <section className="mt-6 rounded-2xl border border-zinc-800/70 bg-zinc-900/40 p-4">
      <div className="flex flex-col gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-xl border border-zinc-800/70 bg-zinc-950/30 px-4 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none focus:ring-2 focus:ring-cyan-500/20"
        />

        <div className="flex flex-wrap gap-2">
          {filtered.map((c) => {
            const active = c.key === city;

            return (
              <Link
                key={c.key}
                href={`${baseHref}?state=${state}&city=${c.key}`}
                className={[
                  "rounded-full px-3 py-2 text-sm transition",
                  active
                    ? "bg-cyan-500/15 text-cyan-200 ring-1 ring-cyan-400/20"
                    : "bg-zinc-950/30 text-zinc-300 ring-1 ring-zinc-800/70 hover:bg-zinc-900/50",
                ].join(" ")}
              >
                {c.label}
              </Link>
            );
          })}
        </div>

        <p className="text-xs text-zinc-500">{tip}</p>
      </div>
    </section>
  );
}