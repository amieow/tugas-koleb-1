import Service from './section/service'
import { Cols, Rows } from './layout/direction'
import Title from './components/typography/title'
import Paraf from './components/typography/paraf'
import Image from 'next/image'
import Button from './components/button'
import Features from './section/features'
import Plans from './section/plans'
import Location from './section/location'
import Review from './section/review'

export default function Home() {
  return (
    <>
    <Cols whiteSpaceX className='w-full lg:flex-row gap-12  relative mb-36'>
      <Cols className=' max-w-lg gap-16 h-fit my-auto'>
        <Cols className='gap-8'>
          <Title variantI={1}>
            The workspacethat works for you& your team
          </Title>
          <Paraf>
            A safe, comfortable, and hassle-free Coworking workspace increases productivity. Ideal workspaces make life easier and more productive.
          </Paraf>
        </Cols>
        <Rows className='gap-9'>
          <Button variant="primary">
            Helo
          </Button>
          <Button variant="outline">
            Second
          </Button>
        </Rows>
      </Cols>
      <div className=' w-full h-[616px] max-w-5xl relative '>
        <Image priority loading='eager'  src={"Hero/hero.svg"} alt='blur' fill/>
      </div>
    </Cols>
    <Service/>
    <Features/>
    <Plans/>
    <Location/>
    <Review/>
    </>
  )
}
