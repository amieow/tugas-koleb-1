import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Title from '../components/typography/title'
import Image from 'next/image'
import { Reviews } from '../asset/asset'
import CardReview from '../layout/cardReview'

export default function Review() {
   return (
      <Cols className=' gap-[72px]' whiteSpaceBottom>
         <Rows whiteSpaceX className='w-full justify-between'>
            <Cols className=' gap-6'>
               <Title className=' text-primary' variantI={5}>
                  Reviews
               </Title>
               <Title variantI={1}>
                  What Our Members Say
               </Title>
            </Cols>
            <Rows className='gap-10 hidden md:flex'>
               <Image width={40} height={40} src={"Review/iconArrowLeft.svg"} alt='Arrow Left'/>
               <Image width={40} height={40} src={"Review/iconArrowRight.svg"} alt='Arrow Left'/>
            </Rows>
         </Rows>
         <Rows className=' w-full relative'>
            <Rows className=' gap-12 overflow-x-scroll w-fit mx-auto'>
               {Reviews.map((itm,index) => (
                  <CardReview user={itm.user} key={index} description={itm.description} />
               ))}
            </Rows>
         </Rows>
      </Cols>
   )
}
