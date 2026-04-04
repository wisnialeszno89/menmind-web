"use client";

import { useEffect, useState } from "react";

type Stats = {
  totalUsers: number;
  usersWhoClicked: number;
  conversion: string;
};

export default function UniqueStatsPage() {
  const [range, setRange] = useState("30");
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch(`/api/stats/unique?range=${range}`)
      .then((res) => res.json())
      .then((res) => setStats(res));
  }, [range]);

  if (!stats) return null;

  return (
    <div className="min-h-screen bg-[#111827] text-neutral-200 px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-4xl font-semibold text-blue-500">
          Unikalni użytkownicy
        </h1>

        <div className="flex gap-4">
          <button
            onClick={() => setRange("7")}
            className="px-4 py-2 border border-neutral-700 rounded hover:border-blue-500"
          >
            7 dni
          </button>

          <button
            onClick={() => setRange("30")}
            className="px-4 py-2 border border-neutral-700 rounded hover:border-blue-500"
          >
            30 dni
          </button>

          <button
            onClick={() => setRange("all")}
            className="px-4 py-2 border border-neutral-700 rounded hover:border-blue-500"
          >
            Całość
          </button>
        </div>

        <div className="space-y-6 text-lg">
          <div className="border border-neutral-800 rounded-lg p-6">
            <div>Unikalni użytkownicy</div>
            <div className="text-3xl text-blue-400">
              {stats.totalUsers}
            </div>
          </div>

          <div className="border border-neutral-800 rounded-lg p-6">
            <div>Użytkownicy, którzy kliknęli partnera</div>
            <div className="text-3xl text-blue-400">
              {stats.usersWhoClicked}
            </div>
          </div>

          <div className="border border-neutral-800 rounded-lg p-6">
            <div>Konwersja użytkownika</div>
            <div className="text-3xl text-blue-400">
              {stats.conversion}%
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}