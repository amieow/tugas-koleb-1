import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Button from '../components/button'

export default function Pricing() {
    return (
        <Cols whiteSpaceX>
            <Rows className='w-full justify-center items-center'>
            <Rows className='rounded-full w-[32%] px-1 py-1 gap-6 bg-blue-200'>
                <Button variant='primary' className='bg-white text-blue-500'>
                    Monthly
                </Button>
                <Button variant='none'>
                    Annual (save 15%)
                </Button>
            </Rows>
            </Rows>
        </Cols>
    )
}