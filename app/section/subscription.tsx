import React from 'react'
import { Cols } from '../layout/direction'
import Title from '../components/typography/title'
import Paraf from '../components/typography/paraf'
import { PlusJakartaSansItalic } from '../components/typography/fonts'
import { InputWithSubmit } from './form/input'

export default function Subscription({
   breakLg = false,
   title,
   description
} : {
   breakLg? : boolean
   title : string
   description : string
}) {
   return (
      <Cols className={` w-full ${breakLg ? "max-lg:hidden" : ""}`} whiteSpaceX whiteSpaceBottom>
         <Cols className='mx-auto gap-14 max-w-7xl'>
            <Cols className=' gap-6'>
               <Title variantI={1} className='text-center'>
                  {title}
               </Title>
               <Paraf className=' text-center leading-7 max-w-2xl mx-auto'>
                  {description}
               </Paraf>
            </Cols>
            <Cols className='w-full mx-auto max-w-2xl gap-4'>
               <InputWithSubmit/>
               <Paraf font={PlusJakartaSansItalic.className} className=' text-center text-opacity-40 '>
                  {`No worries, we don’t do spam!`}
               </Paraf>
            </Cols>
         </Cols>  
      </Cols>
   )
}
