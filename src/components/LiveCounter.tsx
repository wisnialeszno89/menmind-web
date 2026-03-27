"use client";
import { useEffect, useState } from "react";

export default function LiveCounter() {
  const [count, setCount] = useState(87);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 2));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-sm opacity-70">
      🔴 {count} mężczyzn korzysta teraz
    </div>
  );
}