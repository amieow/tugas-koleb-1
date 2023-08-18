
import { FontType } from '../../asset/type/type'
import { PlusJakartaSans } from './fonts'
const variant = [
   "text-5xl",
   "text-3.5xl",
   "text-2.5xl",
   "text-2xl",
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
   if (variantI > variant.length) {
      console.error(`Invalid VarianI : ${variantI} , variantI should be less than equal to ${variant.length}`)
      return (
         <p className="text-red-500 font-bold">
            Invalid variantI provided: {variantI}
         </p>
      );
   }
   const classNames = `${font || PlusJakartaSans.className} font-bold ${variant[variantI - 1]}  text-black ${className}`
   if(variantI == 1) {
      return (
         <h1 {...props} className={classNames}>
            {children}
         </h1>
      )
   }
   if(variantI == 2) {
      return (
         <h2 {...props} className={classNames}>
            {children}
         </h2>
      )
   }
   if(variantI == 3) {
      return (
         <h3 {...props} className={classNames}>
            {children}
         </h3>
      )
   }
   if(variantI == 4) {
      return (
         <h4 {...props} className={classNames}>
            {children}
         </h4>
      )
   }
   if(variantI == 5) {
      return (
         <h5 {...props} className={classNames}>
            {children}
         </h5>
      )
   }
}