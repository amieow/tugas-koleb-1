import React from 'react'
import Cta from './cta'
import Title from '../components/typography/title'
import { Cols, Rows } from '../layout/direction'
import Paraf from '../components/typography/paraf'
import Image from 'next/image'

export default function JoinTeam() {
   return (
      <Cta className='lg:gap-[206px] flex-col gap-16 lg:flex-row px-[50px] py-20'>
         <Title className=' flex-shrink-0' variantI={1}>
            Join our team
         </Title>
         <Cols className=' gap-6'>
            <Paraf className=' text-opacity-70'>
               Lorem ipsum dolor sit amet consectetur adipiscing elit sapien eget eu elementum velit nunc tortor pulvinar ornare at mi sed nisl in proin sollicitudin ultricies aliquet malesuada aliquet.
            </Paraf>
            <Rows className=' gap-5'>
               <Title className='text-primary gap-5' variantI={5}>
                  Explore jobs
               </Title>
               <Image width={20} height={20} src={"CTA/iconArrowLeft.svg"} alt='Icon arrow Left' />
            </Rows>
         </Cols>
      </Cta>
   )
}
