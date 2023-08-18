import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Title from '../components/typography/title'
import Paraf from '../components/typography/paraf'
import { dataCompany } from '../asset/asset'

export default function Data() {
   return (
      <Cols className=' gap-16' whiteSpaceX whiteSpaceBottom>
         <Cols className='gap-6'>
            <Title variantI={1}>
               {`Our space is more than a shared office.`}<span className='flex'>It is a meeting ground for creatives and teams</span>
            </Title>
            <Paraf className=' text-opacity-50 max-w-4xl'>
               Find focus and clarity space to do the things you need to do to grow your business in New York. Book by the month, daily or by the hour.
            </Paraf>
         </Cols>
         <span className='h-px w-full bg-gray-600 bg-opacity-50'></span>
         <Rows className=' justify-between flex-wrap gap-16'>
            {dataCompany.map((itm,index) => (
               <Cols className=' gap-6 w-full lg:max-w-[366px]' key={index}>
                  <Title variantI={1} className=' text-5.5xl text-primary'>
                     {itm.data}
                  </Title>
                  <Title variantI={3}>
                     {itm.title}
                  </Title>
                  <Paraf className=' text-opacity-50'>  
                     {itm.description}
                  </Paraf>
               </Cols>
            ))}
         </Rows>
      </Cols>
   )
}
