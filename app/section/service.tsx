import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Paraf from '../components/typography/paraf'
import Title from '../components/typography/title'
import { Services } from '../asset/asset'
import Image from 'next/image'

export default function Service() {
   return (
      <Cols className='gap-16 px-3' whiteSpaceX>
         <Cols className='gap-6'>
            <Paraf className=' text-primary font-bold'>Our Services</Paraf>
            <Title className=' max-w-6xl' variantI={1}>
               Flexible Solutions for Your Business - Choose What Works Best for You
            </Title>
         </Cols>
         <Rows className='flex-wrap gap-12 justify-center lg:justify-start'>
            {Services.map((servis,index) => (
               <Cols className='gap-7 rounded-3xl px-12 py-11 bg-white w-full lg:max-w-sm' key={index}>
                  <Image width={62} alt={`Services-${index + 1}`} height={62} src={`Service/image-${index + 1}.svg`} />
                  <Title variantI={2}>
                     {servis.title}
                  </Title>
                  <Paraf>
                     {servis.description}
                  </Paraf>
                  <Rows className='relative gap-3 hover:gap-6 transition-all cursor-pointer'>
                     <Title className='text-primary' variantI={4}>
                        Learn more
                     </Title>
                     <Image width={21} height={21} alt='Icon Arrow left' src={'Service/icon.svg'}/>
                  </Rows>
               </Cols>
            ))}
         </Rows>
      </Cols>
   )
}
