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
      <Rows whiteSpaceBottom className={`rounded-3xl`} whiteSpaceX>
         <Rows className={`px-5 md:px-14 py-7  lg:px-[100px] bg-blue-100 lg:py-12 w-full rounded-3xl ${className}`}>
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

export function CtaContact() {
   return (
      <Cta className='px-5 md:p-[50px] gap-6 justify-between max-[1240px]:flex-col '>
         <div className='w-full min-[1240px]:max-w-[515px] relative  h-[329px]'>
            <Image className='max-[1240px]:object-cover h-fit rounded-3xl' src={"CTA/image-3.svg"} alt='blur' fill/>
         </div>
         <Cols className=' gap-3 max-w-2xl'>
            <Title variantI={1}>
               Coworking, Private Offices and More
            </Title>
            <Paraf className=' text-opacity-50'>
               Your membership at is all-inclusive, providing amenities designed to allow you to focus on your business instead of logistics.
            </Paraf>
            <Rows className='flex-wrap gap-9'>
               <Button className=' flex-shrink-0' variant="primary">
                  Discover now
               </Button>
               <Button className=' flex-shrink-0' variant="outline">
                  Book a tour
               </Button>
            </Rows>
         </Cols>
      </Cta>
   )
}

export const CtaSpaces = () => {
   return (
      <Cta className=' gap-16 flex-col-reverse lg:gap-5 lg:flex-row'>
         <Cols className=' gap-9'>
            <Title variantI={1}>
               Stay productive with modern workspace, private office, and coworking solutions
            </Title>
            <Paraf>
               Workspaces that suit your business. We have professional and inspiring work environments to suit businesses of all sizes and budget.
            </Paraf>
            <Button className='w-fit' variant="primary">
               Get Started
            </Button>
         </Cols>
         <Image src={"CTA/image-4.svg"} alt='blur' width={399} height={361}/>
      </Cta>
   )
}
