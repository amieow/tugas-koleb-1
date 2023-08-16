"use client"

import Image from "next/image"
import { Rows } from "../layout/direction"
import Title from "./typography/title"
const Variants = {
   "outline" : "font-bold px-10 py-5 border border-primary text-primary text-xl rounded-[50px]",
   "primary" : "font-bold text-xl bg-primary px-10 py-5 text-white rounded-[50px]",
   "none" : "font-light text-xl hover:font-semibold ",
}

export default function Button({
   className = "",
   children,
   variant,
   ...props
} : {
   className? : string
   variant : keyof typeof Variants
   children : React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
   return (
      <button {...props} className={`text-left ${Variants[variant]} ${className}`}>
         {children}
      </button>
   )
}

export function LearnMore (){
   return (
      <Rows className='relative gap-3 hover:gap-6 transition-all cursor-pointer'>
         <Title className='text-primary' variantI={5}>
            Learn more
         </Title>
         <Image width={21} height={21} alt='Icon Arrow left' src={'Service/icon.svg'}/>
      </Rows>
   )
}
