import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Title from '../components/typography/title'
import Paraf from '../components/typography/paraf'
import { leadership } from '../asset/asset'
import Image from 'next/image'

export default function Leadership() {
   return (
      <Cols className='gap-9 lg:gap-[72px]' whiteSpaceX whiteSpaceBottom>
         <Cols className='gap-6 max-w-6xl mx-auto text-center'>
            <Title variantI={5} className=' text-primary '>
               Our Leadership team
            </Title>
            <Title variantI={1}>
               Meet the great team behind Futurspace
            </Title>
            <Paraf className=' text-opacity-50'>
               Lorem ipsum dolor sit amet consectetur adipiscing elit sapien vestibulum quam massa viverra blandit sit auctor vestibulum semper viverra aliquet sit.
            </Paraf> 
         </Cols>
         <Rows className=' flex-wrap gap-[76px] max-lg:justify-around'>
            {leadership.map((itm,index) => (
               <Cols className='w-full max-w-[220px] gap-6' key={index}>
                  <Image width={227} height={258} src={`Leadership/image-${index + 1}.svg`} alt={`Leader-${itm.name}`}/>
                  <Cols className=' gap-4 text-center'>
                     <Title variantI={3}>
                        {itm.name}
                     </Title>
                     <Paraf className=' text-opacity-50'>
                        {itm.title}
                     </Paraf>
                  </Cols>
               </Cols>
            ))}
         </Rows>
      </Cols>
   )
}
