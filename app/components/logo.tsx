import { Rows } from '../layout/direction'
import Image from 'next/image'
import Title from './typography/title'
export default function Logo({
   size,
   className = "",
   withLogo,
   isAbout
}: {
   size? : [number,number]
   className?: string
   withLogo?: boolean
   isAbout?: boolean
}) {
   const [width,height] = size || []
   return (
      <Rows className={`gap-4 ${className}`}>
         {withLogo && !isAbout && <Image alt='logo' width={width || 40} height={height || 40} src={"logo.svg"}/>}
         {withLogo && isAbout && <Image alt='logo' width={width || 40} height={height || 40} src={"logoWhite.svg"}/>}
         <Title variantI={3} className={`  uppercase ${isAbout ? "text-white" : "text-primary"}`}>
            Futurespace
         </Title>
      </Rows>
   )
}
