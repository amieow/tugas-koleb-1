import React from 'react'
import { Cols, Rows } from '../layout/direction'
import { Childrens } from '../asset/type/type'
import Title from '../components/typography/title'
import Paraf from '../components/typography/paraf'
import Button from '../components/button'
import Image from 'next/image'

export default function Cta({
   className = "",
   children
} : {
   className? : string
} & Childrens) {
   return (
      <Rows whiteSpaceBottom className={`  rounded-3xl`} whiteSpaceX>
         <Rows className={`px-14 py-7  lg:px-[100px] bg-blue-bg lg:py-12 w-full rounded-3xl ${className}`}>
            {children}
         </Rows>
      </Rows>
   )
}

export function CtaAbout({
   title,
   description
} : {
   title : string
   description : string
}){
   return (
      <Cta className=' gap-16 max-lg:flex-col-reverse lg:pr-16'>
         <Cols className=' max-w-[806px] gap-9'>
            <Title variantI={1}>
               {title}
            </Title>
            <Paraf className=' text-opacity-70'>
               {description}
            </Paraf>
            <Button className=' w-fit' variant="primary">
               Get Started
            </Button>
         </Cols>
         <div className=' h-[465px] relative w-full'>
            <Image alt='blur' fill src={"CTA/image-2.svg"}/>
         </div>
      </Cta>
   )
}

export function CtaHomepage() {
   return (
      <Cta className=' justify-between gap-20 lg:gap-44 max-lg:flex-col-reverse'>
            <Cols className=' max-w-3xl gap-9'>
               <Title variantI={1}>
                  Customised workspace for rent wherever you need it
               </Title>
               <Button variant="primary" className=' w-fit'>
                  Book Tour
               </Button>
            </Cols>
            <div className=' w-full max-w-[428px] relative h-[275px] flex min-[1440px]:flex-shrink-0'>
               <Image alt='PPl' fill src={"CTA/image-1.svg"}/>
            </div>
         </Cta>
   )
}
