"use client"

import { useEffect } from "react"

export default function useTrackPath(){

  useEffect(()=>{
    localStorage.setItem("mm_path","1")
    localStorage.setItem("mm_last_action","path")
  },[])

}