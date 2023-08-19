import React from 'react'
import { Cols, Rows } from '../layout/direction'
import Button from '../components/button'
import Card from '../layout/card'
import Image from "next/image";
import Title from '../components/typography/title';
import { BsCheckLg } from 'react-icons/bs'
import Paraf from '../components/typography/paraf';

export default function Pricing() {
    return (
        <Cols whiteSpaceX className='w-full h-full'>
            <Rows className='w-full justify-center items-center mb-10'>
                <Rows className='rounded-full w-auto px-1 py-1 gap-6 bg-blue-200'>
                    <Button className='bg-white text-blue-500' variant='primary'>
                        <Paraf className='text-blue-500'>
                            Monthly
                        </Paraf>
                    </Button>
                    <Button variant='none'>
                        Annual (save 15%)
                    </Button>
                </Rows>
            </Rows>
            <Rows className='w-full justify-center items-center gap-8 flex-col lg:flex-row' whiteSpaceBottom>
                <Card direction='cols' className='rounded-lg w-[436px]'>
                    <Cols className='border-b-2 pb-8'>
                        <Image src={"Pricing/Ellipse 181.svg"} className='mb-8' alt="thunder" width={42} height={42} />
                        <Title variantI={3} className='mb-8'>
                            Platinum
                        </Title>
                        <Title variantI={1} className='mb-8'>
                            $399/mth
                        </Title>
                        <Paraf>
                            Pay one simple price for everything related to your workspace.
                        </Paraf>
                    </Cols>
                    <Cols className='gap-5 my-8'>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        Coworking & Rooms
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        High-speed Internet
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-gray-300" />
                                    </Paraf>
                                    <Paraf>
                                        Explusive Workspace
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-gray-300" />
                                    </Paraf>
                                    <Paraf>
                                        Customisable Room
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-gray-300" />
                                    </Paraf>
                                    <Paraf>
                                        All-inclusive Pricing
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>
                            <Button variant='primary' className='text-center'>
                                Get Started
                            </Button>
                        </Cols>
                    </Cols>
                </Card>
                <Card direction='cols' className='rounded-lg w-[436px] border border-blue-600 mt-[8%]'>
                    <Cols className='border-b-2 pb-8'>
                        <Image src={"Pricing/Ellipse 181 (1).svg"} className='mb-8' alt="star" width={42} height={42} />
                        <Title variantI={3} className='mb-8'>
                            Gold
                        </Title>
                        <Title variantI={1} className='mb-8'>
                            $599/mth
                        </Title>
                        <Paraf>
                            Pay one simple price for everything related to your workspace.
                        </Paraf>
                    </Cols>
                    <Cols className='gap-5 my-8'>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        Coworking & Rooms
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        High-speed Internet
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        Explusive Workspace
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        Customisable Room
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        Meeting Rooms
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        Private Office
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-gray-300" />
                                    </Paraf>
                                    <Paraf>
                                        All-inclusive Pricing
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>
                            <Button variant='primary' className='text-center'>
                                Get Started
                            </Button>
                        </Cols>
                    </Cols>
                </Card>

                <Card direction='cols' className='rounded-lg w-[436px]'>
                    <Cols className='border-b-2 pb-8'>
                        <Image src={"Pricing/Ellipse 181 (2).svg"} className='mb-8' alt="platinum" width={42} height={42} />
                        <Title variantI={3} className='mb-8'>
                            Platinum
                        </Title>
                        <Title variantI={1} className='mb-8'>
                            $999
                        </Title>
                        <Paraf>
                            Pay one simple price for everything related to your workspace.
                        </Paraf>
                    </Cols>
                    <Cols className='gap-5 my-8'>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        Coworking & Rooms
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        High-speed Internet
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        Explusive Workspace
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        Customisable Room
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>

                            <Rows>
                                <Rows className='gap-2'>
                                    <Paraf>
                                        <BsCheckLg className="h-8 w-8 text-primary" />
                                    </Paraf>
                                    <Paraf>
                                        All-inclusive Pricing
                                    </Paraf>
                                </Rows>
                            </Rows>
                        </Cols>
                        <Cols>
                            <Button variant='primary' className='text-center'>
                                Get Started
                            </Button>
                        </Cols>
                    </Cols>
                </Card>
            </Rows>
        </Cols>
    )
}