"use client"

import { useEffect, useState } from "react"

export function useSaved(key:string){

const [items,setItems]=useState<string[]>([])

useEffect(()=>{

const stored=localStorage.getItem(key)

if(stored){

setItems(JSON.parse(stored))

}

},[key])

function addItem(id:string){

const updated=[...items,id]

setItems(updated)

localStorage.setItem(key,JSON.stringify(updated))

}

function removeItem(id:string){

const updated=items.filter(i=>i!==id)

setItems(updated)

localStorage.setItem(key,JSON.stringify(updated))

}

return{

items,
addItem,
removeItem

}

}