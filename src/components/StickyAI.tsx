"use client"

import { MessageCircle } from "lucide-react"

export default function StickyAI(){
  return (
    <a
      href="https://navimind.app"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-black text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition flex items-center gap-2 animate-pulse"    >
      <MessageCircle size={18} />
      <span className="text-sm font-medium">
        Zapytaj AI
      </span>
    </a>
  )
}