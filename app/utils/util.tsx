"use client"

import { useSelectedLayoutSegment } from "next/navigation"

export const CurrentPage = () => {
   const currentPage = String(useSelectedLayoutSegment())
   return currentPage
}