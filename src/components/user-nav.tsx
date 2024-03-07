"use client"

import { Input } from "@/components/ui/input"
import { useEffect, useContext } from "react"
import { DataContext } from "@/lib/DataProvider"


export function UserNav() {
  const {setData} = useContext(DataContext)

  useEffect(() => {
    const input = document.getElementById("upload")
    
    input?.addEventListener("change", () => {
        const reader = new FileReader();
        reader.addEventListener("load", (event) => {
          setData(JSON.parse(event.target?.result))
        })
        reader.readAsText(input.files[0])
    })
  })

  return (
    <Input id="upload" type="file" accept=".json" className="w-[300px]"/>
  )
}