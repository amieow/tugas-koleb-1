import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Title from '../components/typography/title'
import Image from 'next/image'
import Button from '../components/button'
import Link from 'next/link'

export default function ContactPricing() {
    return (
        <Rows className='w-full' whiteSpaceBottom>
            <Rows className='bg-blue-100 w-full items-center py-[3%] flex-col lg:flex-row gap-3' whiteSpaceX>
                <Cols className='w-full lg:w-[60%]'>
                    <Title variantI={2} className='mb-5 w-full'>
                        Confused about which plan would be most suitable for me?
                    </Title>
                    <Button variant={"primary"} className='text-center flex-shrink-0 w-auto'>
                        <Link href={"/contact"} >
                            Contact us
                        </Link>
                    </Button>
                </Cols>
                <Image src={"Pricing/Group 48097566.svg"} alt='contact pricing' width={428} height={275} className='mx-auto lg:ml-auto' />
            </Rows>
        </Rows>
    )
}
