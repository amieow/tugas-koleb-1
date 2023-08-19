import React from 'react'
import { Cols, Rows } from '../../layout/direction'
import Title from '../../components/typography/title'
import Paraf from '../../components/typography/paraf'
import Input, { RadionButton } from './input'
import Button from '../../components/button'

export default function Form() {
   return (
      <Cols whiteSpaceX whiteSpaceBottom>
         <Cols className=' max-w-6xl mx-auto gap-16'>
            <Cols className=' gap-6'>
               <Title className=' text-center' variantI={1}>
                  Take a tour & try a day of coworking for free
               </Title>
               <Paraf className=' whitespace-pre-line text-center text-opacity-50'>
                  {`We offer offices for lease by the day, by the week, or by the year. 
   Choose from any of our 3000 locations. Get a free quote!`}
               </Paraf>
            </Cols>
            <Cols className=' gap-16'>
               <Input placeholder='First Name'/>
               <Input placeholder='Last Name'/>
               <Rows className=' gap-16 flex-col lg:flex-row'>
                  <Input placeholder='Your Email'/>
                  <Input withIcon placeholder='select Option'/>
               </Rows>
               <Cols className=' gap-12'>
                  <Input placeholder='Message'/>
                  <RadionButton/>
                  <Button className=' text-center' variant="primary">
                     Submit
                  </Button>
               </Cols>
            </Cols>
         </Cols>
      </Cols>
   )
}
