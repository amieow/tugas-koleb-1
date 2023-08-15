"use client"
import Paraf from "./typography/paraf"
const Variants = {
   "outline" : "",
   "primary" : "",
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
