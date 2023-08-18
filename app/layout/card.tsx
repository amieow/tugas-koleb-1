import React from 'react'
import { Cols, Rows } from './direction'
import { Childrens } from '../asset/type/type'

export default function Card({
   direction,
   className = "",
   children,
   ...props
} : {
   direction? : "rows" | "cols"
   className? : string
} & Childrens & React.HTMLProps<HTMLDivElement>) {
   if (direction == "rows"){
      return (
         <Rows className={` bg-white p-11 ${className}`}>
            {children}
         </Rows>
      )
   }
   return (
      <Cols {...props} className={` bg-white p-11 ${className}`}>
         {children}
      </Cols>
   )
}
