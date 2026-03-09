"use client"

import { useSaved } from "@/hooks/useSaved"

export default function SaveButton({id}:{id:string}){

const {items,addItem,removeItem}=useSaved("saved_items")

const saved=items.includes(id)

return(

<button
onClick={()=>{

if(saved){

removeItem(id)

}else{

addItem(id)

}

}}
className="text-sm border px-3 py-1 rounded"
>

{saved?"Zapisane":"Zapisz"}

</button>

)

}