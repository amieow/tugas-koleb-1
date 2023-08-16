import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Paraf from '../components/typography/paraf'
import Title from '../components/typography/title'
import { plans } from '../asset/asset'
import Card from '../layout/card'
import Image from 'next/image'
import { LearnMore } from '../components/button'
import { classname } from '../asset/type/type'

export default function Plans({className = ""} : classname) {
   return (
      <Cols className={` w-full gap-16 mb-36 ${className}`} whiteSpaceX>
         <Cols className=' max-w-5xl mx-auto gap-6 text-center'>
            <Title className='text-primary' variantI={5}>
               Why Serviced Office
            </Title>
            <Title variantI={1}>
               {`We've helped thousands of fast-growing startups and teams`}
            </Title>
            <Paraf className=' text-opacity-50'>
               Grow without restriction. By giving you space that can be changed as your business grows. Only pay for the space you use with everything you need to be included in one price.
            </Paraf>
         </Cols>
         <Rows className=' flex-wrap gap-12'>
            {plans.map((data,index) => (
               <Card className=' w-full lg:max-w-md px-12 gap-6 h-[616px] rounded-3xl' direction="cols" key={index}>
                  <div className=' relative w-full h-60'>
                     <Image className=' object-cover rounded-3xl' style={{ maxWidth: '100%', marginLeft: '0', marginRight: 'auto' }} fill alt={`plans-${data.title }`} src={`Plans/image-${index + 1}.svg`}/>
                  </div>
                  <Title variantI={3}>
                     {data.title}
                  </Title>
                  <Paraf className='text-opacity-70'>
                     {data.description}
                  </Paraf>
                  <LearnMore/>
               </Card>
            ))}
         </Rows>
      </Cols>
   )
}
