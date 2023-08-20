import React from 'react'
import { Childrens } from '../asset/type/type'
import {Suspense} from "react"

export default function ImageSuspense({children} : Childrens) {
   return (
      
      <Suspense fallback={<p>Loadings...</p>}>
         {children}
      </Suspense>
   )
}
