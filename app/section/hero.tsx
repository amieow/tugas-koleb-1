import Title from "../components/typography/title"
import { Cols,Rows } from "../layout/direction"
import Paraf from "../components/typography/paraf"
import Button from "../components/button"
import Image from "next/image"
export const HomePageHero = () => {
   return (
      <Cols whiteSpaceBottom whiteSpaceTop whiteSpaceX className='w-full lg:flex-row gap-12 relative'>
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
   )
}

export const AboutHero = () => {
   return (
      <Cols whiteSpaceBottom className=" w-full pb-16 bg-primary h-full">
         <Cols className=" w-full gap-[100px]" whiteSpaceTop whiteSpaceX>
            <Rows className=" justify-between gap-9 w-full max-lg:flex-col">
               <Title className=" text-center lg:text-start lg:max-w-xs text-white" variantI={1}>
                  About our company
               </Title>
               <Cols className=" gap-6 lg:max-w-[624px]">
                  <Paraf className=" text-white text-center lg:text-start">
                     Our space is more than a shared office. It is a meeting ground for creatives and teams
                  </Paraf>
                  <Paraf className=" text-white text-center lg:text-start">
                     Find focus and clarity space to do the things you need to do to grow your business in New York. Book by the month, daily or by the hour.
                  </Paraf>
               </Cols>
            </Rows>
            <div className=" relative w-full h-[756px]">
               <Image src={"Hero/heroAbout.svg"} alt="blur" fill/>
            </div>
         </Cols>
      </Cols>
   )
}