"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function WorldFAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mt-20 max-w-3xl">
      <h2 className="text-xl font-semibold mb-8">
        Najczęstsze pytania
      </h2>

      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              className="text-left w-full font-medium"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              {item.question}
            </button>

            {openIndex === index && (
              <p className="mt-3 text-sm text-gray-600">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}