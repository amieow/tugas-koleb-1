import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Title from '../components/typography/title'
import Image from 'next/image'
import Button from '../components/button'
import Link from 'next/link'

export default function ContactPricing() {
    return (
        <Rows className='w-full' whiteSpaceBottom>
            <Rows className='bg-blue-100 w-[90%] items-center py-[3%]' whiteSpaceX>
                <Cols className='w-full'>
                    <Title variantI={2} className='mb-5 w-[75%]'>
                        Confused about which plan would be most suitable for me?
                    </Title>
                    <Button variant={"primary"} className='max-w-[30%] text-center'>
                        <Link href={"/contact"} >
                            Contact us
                        </Link>
                    </Button>
                </Cols>
                <Image src={"Pricing/Group 48097566.svg"} alt='contact pricing' width={428} height={275} />
            </Rows>
        </Rows>
    )
}
