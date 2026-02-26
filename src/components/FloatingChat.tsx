"use client";

export default function FloatingChat() {
  return (
    <a
      href="https://navimind.app"
      target="_blank"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#111827] text-white shadow-xl transition hover:scale-105"
    >
      <svg
        className="h-6 w-6 opacity-80 group-hover:opacity-100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h8M8 14h5m9 0a9 9 0 11-4.22-7.7L21 3v6h-6l2.6-2.6A7 7 0 1019 14z"
        />
      </svg>
    </a>
  );
}