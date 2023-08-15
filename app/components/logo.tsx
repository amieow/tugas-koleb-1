import { Rows } from '../layout/direction'
import Image from 'next/image'
import Title from './typography/title'
export default function Logo({
   size,
   className = "",
   withLogo
}: {
   size? : [number,number]
   className?: string
   withLogo?: boolean
}) {
   const [width,height] = size || []
   return (
      <Rows className={`gap-4 ${className}`}>
         {withLogo && <Image alt='logo' width={width || 40} height={height || 40} src={"logo.svg"}/>}
         <Title variantI={3} className={` text-primary uppercase`}>
            Futurespace
         </Title>
      </Rows>
   )
}
