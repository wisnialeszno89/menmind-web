"use client";
import { useState } from "react";

export default function Koszt() {
  const [years, setYears] = useState(1);
  const loss = years * 12000;

  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">
        Koszt braku działania
      </h1>

      <input
        type="number"
        value={years}
        onChange={(e)=>setYears(Number(e.target.value))}
        className="border p-2 w-full"
      />

      <div className="mt-4 text-xl">
        Szacowana strata: <b>{loss} zł</b>
      </div>
    </div>
  );
}