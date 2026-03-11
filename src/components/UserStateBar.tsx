"use client"

export default function UserStateBar(){

const state="odbudowa"

return(

<div className="bg-neutral-100 border-b">

<div className="max-w-6xl mx-auto px-6 py-2 text-sm text-gray-600">

Twój stan: <span className="font-medium">{state}</span>

</div>

</div>

)

}