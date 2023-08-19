import React from 'react'
import { Rows } from '../../layout/direction'
import Paraf from '../../components/typography/paraf'
import Image from 'next/image'
import Button from '../../components/button'

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

export function InputWithSubmit(){
  return (
    <Rows className=' pl-12 pr-2 py-2 border border-gray-500 justify-between border-opacity-30 rounded-[100px]'>
      <Paraf className=' text-[#C1C1C1] text-opacity-40 h-fit my-auto'>
        Enter your email
      </Paraf>
      <Button variant="primary">
        Submit
      </Button>
    </Rows>
  )
}

