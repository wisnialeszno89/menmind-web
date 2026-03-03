"use client";

import { useEffect, useState } from "react";

type CityStats = {
  city: string;
  views: number;
  clicks: number;
  conversion: string;
};

export default function DemandPage() {
  const [range, setRange] = useState("30");
  const [data, setData] = useState<CityStats[]>([]);

  useEffect(() => {
    fetch(`/api/stats/demand?range=${range}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [range]);

  return (
    <div className="min-h-screen bg-[#111827] text-neutral-200 px-6 py-20">
      <div className="max-w-5xl mx-auto space-y-10">

        <h1 className="text-4xl font-semibold text-blue-500">
          Popyt per miasto
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

        <div className="space-y-6">
          {data.map((item) => (
            <div
              key={item.city}
              className="border border-neutral-800 rounded-lg p-6 flex justify-between"
            >
              <div>
                <div className="text-xl font-semibold">
                  {item.city}
                </div>
                <div className="text-neutral-400 text-sm">
                  Wejścia: {item.views} | Kliknięcia: {item.clicks}
                </div>
              </div>

              <div className="text-blue-400 text-2xl font-semibold">
                {item.conversion}%
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}