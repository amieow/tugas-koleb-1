import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Title from '../components/typography/title'
import Image from 'next/image'

export default function Review() {
   return (
      <Cols>
         <Rows whiteSpaceX className='w-full justify-between'>
            <Cols className=' gap-6'>
               <Title className=' text-primary' variantI={5}>
                  Reviews
               </Title>
               <Title variantI={1}>
                  What Our Members Say
               </Title>
            </Cols>
            <Rows className='gap-10'>
               <Image width={40} height={40} src={"Review/iconArrowLeft.svg"} alt='Arrow Left'/>
               <Image width={40} height={40} src={"Review/iconArrowRight.svg"} alt='Arrow Left'/>
            </Rows>
         </Rows>
      </Cols>
   )
}
