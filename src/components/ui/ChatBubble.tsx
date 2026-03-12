"use client"

import Link from "next/link"

export default function ChatBubble(){

return(

<Link
href="/navimind"
className="fixed bottom-6 right-6 bg-black text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition"
>

💬

</Link>

)

}