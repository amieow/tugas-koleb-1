import React from 'react'
import { Cols } from '../layout/direction'
import Title from '../components/typography/title'
import Paraf from '../components/typography/paraf'
import Image from 'next/image'
import Card from '../layout/card'

export default function Faq() {
    return (
        <Cols className='w-full' whiteSpaceBottom>
            <Cols whiteSpaceX className='text-center w-full mb-[5%]'>
                <Title variantI={1}>
                    Frequently asked questions about coworking
                </Title>
                <Cols className='w-[75%] mt-[3%]' whiteSpaceX>
                    <Paraf className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit cursus commodo at sit mi sed gravida et imperdiet sagittis euismod tortor fringilla amet.
                    </Paraf>
                </Cols>
            </Cols>
            <Cols className='w-[77%] mx-auto gap-7'>
                <Card direction='rows' className='justify-between'>
                    <Title variantI={3}>
                        What are the benefits of joining the Futurspace network?
                    </Title>
                    <Image alt={"plus"} src={"Pricing/Group 48097581.svg"} width={40} height={40} />
                </Card>
                <Card direction='rows' className='justify-between'>
                    <Title variantI={3}>
                        What should I expect from the screening process?
                    </Title>
                    <Image alt={"plus"} src={"Pricing/Group 48097581.svg"} width={40} height={40} />
                </Card>
                <Card direction='rows' className='justify-between'>
                    <Title variantI={3}>
                        Is Telephone service available?
                    </Title>
                    <Image alt={"plus"} src={"Pricing/Group 48097581.svg"} width={40} height={40} />
                </Card>
                <Card direction='rows' className='justify-between'>
                    <Cols>
                    <Title variantI={3}>
                        Is the money refundable if I am unable to register?
                    </Title>
                        <Paraf className='w-[70%]'>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit
                            elementum velit nunc tortor pulvinar ornare
                    </Paraf>
                    </Cols>

                    <Image alt={"plus"} src={"Pricing/Group 48097581 (1).svg"} width={40} height={40} />
                </Card>
            </Cols>
        </Cols>
    )
}
