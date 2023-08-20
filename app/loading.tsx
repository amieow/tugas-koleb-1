import React from 'react'
import { Cols } from './layout/direction'
import Paraf from './components/typography/paraf'

export default function Loading() {
   return (
      <Cols whiteSpaceTop className='h-full w-full justify-center min-h-[500px] text-white'>
         <Cols whiteSpaceX>
            <Paraf className=' text-center m-auto'>
               Loading...
            </Paraf>
         </Cols>
      </Cols>
   )
}
