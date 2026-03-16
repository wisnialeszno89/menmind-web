"use client";

import { useMemo } from "react";

type Props = {
  state: string;
};

export default function NavimindEmbed({ state }: Props) {

  const uid = useMemo(() => {

    if (typeof window === "undefined") return "";

    const key = "menmind_navimind_uid";

    let value = sessionStorage.getItem(key);

    if (!value) {
      value = crypto.randomUUID();
      sessionStorage.setItem(key, value);
    }

    return value;

  }, []);

  const src = useMemo(() => {

    const base = "https://navimind.app";

    const params = new URLSearchParams({
      state,
      uid
    });

    return `${base}?${params.toString()}`;

  }, [state, uid]);

  return (

    <iframe
      src={src}
      title="Navimind"
      className="w-full h-full border-0"
      allow="clipboard-write"
      loading="lazy"
    />

  );

}