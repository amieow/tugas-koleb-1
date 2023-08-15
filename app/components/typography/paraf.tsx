
import { FontType } from '../../asset/type/type'
import { PlusJakartaSans } from './fonts'
export default function Paraf({
   children,
   className,
   font,
   ...props
} : FontType) {
   return (
      <p {...props} className={` ${font || PlusJakartaSans.className} text-xl text-black ${className}`}>
         {children}
      </p>
   )
}
