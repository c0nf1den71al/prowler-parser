"use client"

import { useContext } from "react"
import { DataContext } from "@/lib/DataProvider"

export default function Info({id}) {
    const {data} = useContext(DataContext)
    console.log(data.length)
    return (
        <div>
            info
        </div>
    )
}