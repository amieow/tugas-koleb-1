import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Title from '../components/typography/title'
import Image from 'next/image'
import Button from '../components/button'
import Link from 'next/link'
import Cta from './cta'
 
export default function ContactPricing() {
    return (
        <Cta className=' max-md:px-7 max-lg:px-10 '>
            <Rows className=' items-center flex-col-reverse gap-8 lg:flex-row'>
                <Cols className='w-full '>
                    <Title variantI={2} className='mb-5 w-full text-center lg:text-start lg:w-[75%]'>
                        Confused about which plan would be most suitable for me?
                    </Title>
                    <Link className='w-fit mx-auto lg:mx-0' href={"/contact"} >
                        <Button variant={"primary"} className='w-fit text-center'>
                            Contact us
                        </Button>
                    </Link> 
                </Cols>
                <Image src={"Pricing/Group 48097566.svg"} alt='contact pricing' width={428} height={275} />
            </Rows>
        </Cta>
    )
}
