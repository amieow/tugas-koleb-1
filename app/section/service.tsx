import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Paraf from '../components/typography/paraf'
import Title from '../components/typography/title'
import { Services } from '../asset/asset'
import Image from 'next/image'
import { LearnMore } from '../components/button'
import { classname } from '../asset/type/type'

export default function Service({className = ""} : classname) {
   return (
      <Cols whiteSpaceBottom className={`gap-16 px-3 ${className}`} whiteSpaceX>
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
                  <Title variantI={5}>
                     {servis.title}
                  </Title>
                  <Paraf>
                     {servis.description}
                  </Paraf>
                  <LearnMore/>
               </Cols>
            ))}
         </Rows>
      </Cols>
   )
}
