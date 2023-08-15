
import { FontType } from '../../asset/type/type'
import { PlusJakartaSans } from './fonts'
const variant = [
   "text-5xl",
   "text-2xl",
   "text-3.5xl",
   "text-xl"
]
type variants = {variantI : number}
export default function Title({
   children,
   className = "" ,
   font,
   variantI,
   ...props
} : FontType & variants ) {
   return (
      <h1 {...props} className={`${font || PlusJakartaSans.className} font-bold ${variant[variantI - 1]}  text-black ${className}`}>
         {children}
      </h1>
   )
}