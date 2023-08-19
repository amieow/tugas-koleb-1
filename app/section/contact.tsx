import React from 'react'
import { Rows } from '../layout/direction'
import Card from '../layout/card'
import Title from '../components/typography/title'
import { contactRows } from '../asset/asset'
import { PlusJakartaSans } from '../components/typography/fonts'
import Image from 'next/image'

export default function Contact() {
   return (
      <Rows className=' gap-20 justify-between flex-wrap' whiteSpaceX whiteSpaceBottom>
         {contactRows.map((item,index) => (
            <Card className=' max-w-xs w-full gap-6' key={index} direction="cols">
               <Title variantI={4}>
                  {item.title}
               </Title>
               <pre className={`whitespace-pre ${PlusJakartaSans.className}`}>
                  {item.description}
               </pre>
               <Rows className=' gap-4'>
                  <Title className=' text-primary' variantI={5}>
                     {item.cta.title}
                  </Title>
                  <Image src={item.cta.imageUrl} alt='blur' width={20} height={20}/>
               </Rows>
            </Card>
         ))}
      </Rows>
   )
}
