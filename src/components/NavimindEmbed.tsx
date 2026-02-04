"use client";

import { useMemo } from "react";

export default function NavimindEmbed({
  state,
}: {
  state: string;
}) {
  const uid = useMemo(() => {
    if (typeof window === "undefined") return "";
    const key = "menmind_navimind_uid";

    let v = sessionStorage.getItem(key);
    if (!v) {
      v = crypto.randomUUID();
      sessionStorage.setItem(key, v);
    }
    return v;
  }, []);

  const src = `https://navimind.app?state=${encodeURIComponent(
    state
  )}&uid=${encodeURIComponent(uid)}`;

  return (
    <iframe
      src={src}
      title="Navimind"
      className="w-full h-full border-0"
      allow="clipboard-write"
    />
  );
}
