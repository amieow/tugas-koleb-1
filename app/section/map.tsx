import Image from 'next/image'
import React from 'react'
import { Cols } from '../layout/direction'

export default function Map() {
   return (
      <Cols whiteSpaceX whiteSpaceBottom>
         <Image className=' w-fit' src={"Map/map.svg"} alt='blur' width={1450} height={727}/>
      </Cols>
   )
}
