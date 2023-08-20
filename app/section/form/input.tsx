"use client"
import { Rows } from '../../layout/direction'
import Paraf from '../../components/typography/paraf'
import Image from 'next/image'
import Button from '../../components/button'
import { useState } from 'react'
import { PlusJakartaSans } from '../../components/typography/fonts'

export default function Input({placeholder,withIcon} : {placeholder: string,withIcon?: boolean}) {
  const [state,setState] = useState("")
  return (
    <Rows className={` w-full bg-white py-4 md:py-7 px-6 md:px-[50px] rounded-[50px] border-2 border-gray-400 ${PlusJakartaSans.className}`}>
      <input className=' bg-transparent w-full focus:outline-none text-xl' placeholder={placeholder} value={state} onChange={(e) => setState(e.target.value)}/>
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
  const [state,setState] = useState("")
  return (
    <Rows className='pl-4 md:pl-12 pr-2 py-2 border border-gray-500 justify-between border-opacity-30 rounded-[100px]'>
      <input className=' text-xl focus:outline-none w-full bg-transparent' value={state} onChange={(e) => setState(e.target.value)} placeholder='Enter your email' />
      <Button onClick={() => setState("Ini Hanya Demo")} className='max-md:p-4' variant="primary">
        Submit
      </Button>
    </Rows>
  )
}

