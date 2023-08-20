"use client"

import { useSelectedLayoutSegment } from "next/navigation"

export const CurrentPage = () => {
   const currentPage = useSelectedLayoutSegment() || "/"
   return currentPage
}