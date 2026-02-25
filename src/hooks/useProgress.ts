"use client";

import { useEffect, useState } from "react";

export function useProgress(key: string) {
  const storageKey = `menmind-progress-${key}`;
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      setCompleted(JSON.parse(saved));
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completed));
  }, [completed, storageKey]);

  function toggle(item: string) {
    setCompleted((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  }

  return { completed, toggle };
}