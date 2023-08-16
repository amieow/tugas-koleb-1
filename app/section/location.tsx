import React from 'react'
import { Cols, Rows } from '../layout/direction'
import { classname } from '../asset/type/type'
import Image from 'next/image'
import Paraf from '../components/typography/paraf'
import Title from '../components/typography/title'
import { location } from '../asset/asset'
import Button from '../components/button'

export default function Location({className =""} : classname) {
   return (
      <Cols className={`lg:flex-row mb-36 gap-10 lg:gap-36 ${className}`} whiteSpaceX>
         <div className='relative w-full max-w-md lg:max-w-3xl h-[588px] lg:h-[808px]'>
            <Image src={"Location/image-1.svg"} alt='blur' fill style={{ maxWidth: '100%', marginLeft: '0', marginRight: 'auto' }}/>
         </div>
         <Cols className='gap-16'>
            <Cols className='gap-6'>
               <Title className=' text-primary' variantI={5}>
                  OUR OFFICES
               </Title>
               <Title variantI={1}>
                  Discover the Location that Best Fits Your Business Needs
               </Title>
               <Paraf className=' text-opacity-50'>
                  As we headstart into this new normal, we are ensuring your workspace experience remains exceptional.
               </Paraf>
            </Cols>
            <Cols className='gap-9'>
               {location.map((itm,index) =>(
                  <Rows key={index}>
                     <Image className=' grayscale lg:grayscale-0' src={'Location/icon.svg'} alt='Location-Mark' width={47} height={47}/>
                     <Title variantI={4}>
                        {itm}
                     </Title>
                  </Rows>
               ))}
            </Cols>
            <Rows>
               <Button variant="primary">
                  View Locations
               </Button>
            </Rows>
         </Cols>
      </Cols>
   )
}
