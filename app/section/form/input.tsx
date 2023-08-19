import React from 'react'
import { Rows } from '../../layout/direction'
import Paraf from '../../components/typography/paraf'
import Image from 'next/image'

export default function Input({placeholder,withIcon} : {placeholder: string,withIcon?: boolean}) {
  return (
    <Rows className=' w-full bg-white py-7 px-[50px] rounded-[50px] border-2 border-gray-400'>
      <Paraf className=' text-opacity-50 mr-10'>
        {placeholder}
      </Paraf>
      {withIcon && <Image src={"Form/iconArrowDown.svg"} alt='icon Arrow Down' width={20} height={20}/>}
    </Rows>
  )
}

export function RadionButton({}) {
  return (
    <Rows className=' gap-8'>
      <Image src={"Form/iconRadio.svg"} alt='Radio' width={29} height={29}/>
      <Paraf className=' text-opacity-50'>
        By clicking the below button you agree to our Terms of Service.
      </Paraf>
    </Rows>
  )
}

