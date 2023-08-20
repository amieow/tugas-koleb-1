import React from 'react'
import { Cols, Rows } from './direction'
import Paraf from '../components/typography/paraf'
import Image from 'next/image'
import Title from '../components/typography/title'

export default function CardReview({
   user,
   description
} : {
   user : {
      name : string
      title : string
      avatar : string
   },
   description : string
}) {
   const {name,title,avatar} = user
   return (
      <Cols key={name} className='px-5 md:px-12 py-4 md:py-11 gap-6 flex-shrink-0 bg-white rounded-3xl w-[522px] h-fit'>
         <div className=' relative h-6 w-[164px]'>
            <Image alt='star-4' src={"Review/iconStar.svg"} fill/>
         </div>
         <Paraf className=' text-base text-gray-800 leading-8'>
            {description}
         </Paraf>
         <Rows className='gap-2'>
            <div className=' relative w-14 h-14 mt-auto'>
               <Image src={avatar} fill alt={`Avatar-${name}`}/>
            </div>
            <Cols className='gap-1'>
               <Title variantI={4}>
                  {name}
               </Title>
               <Paraf className='text-base'>
                  {title}
               </Paraf>
            </Cols>
         </Rows>
      </Cols>
   )
}
