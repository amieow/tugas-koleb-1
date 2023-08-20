import Title from "../components/typography/title"
import { Cols,Rows } from "../layout/direction"
import Paraf from "../components/typography/paraf"
import Button from "../components/button"
import Image from "next/image"
import { InputWithSubmit } from "./form/input"
import ImageSuspense from "../layout/image"
export const HomePageHero = () => {
   return (
      <Cols whiteSpaceBottom whiteSpaceTop whiteSpaceX className='w-full lg:flex-row gap-12 relative'>
         <Cols className=' max-w-lg gap-16 h-fit my-auto'>
            <Cols className='gap-8'>
               <Title variantI={1}>
                  The workspace that works for you& your team
               </Title>
               <Paraf>
                  A safe, comfortable, and hassle-free Coworking workspace increases productivity. Ideal workspaces make life easier and more productive.
               </Paraf>
            </Cols>
            <Rows className='gap-9 flex-wrap'>
               <Button className=" flex-shrink-0" variant="primary">
                  Discover now
               </Button>
               <Button className=" flex-shrink-0" variant="outline">
                  Book a tour
               </Button>
            </Rows>
         </Cols>
         <ImageSuspense>
            <div className=' w-full h-[616px] max-w-5xl relative max-sm:hidden'>
               <Image  className="h-fit " priority loading='eager'  src={"Hero/hero.svg"} alt='blur' fill/>
            </div>
         </ImageSuspense>
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
            <ImageSuspense>
               <div className=" relative w-full h-[756px] max-sm:hidden">
                  <Image className=" h-fit" src={"Hero/heroAbout.svg"} alt="blur" priority fill/>
               </div>
            </ImageSuspense>
         </Cols>
      </Cols>
   )
}
export const ContactHero = () => {
   return (
      <Cols whiteSpaceX whiteSpaceBottom whiteSpaceTop>
         <Cols className=" max-w-[903px] gap-6 mx-auto">
            <Title className=" text-primary text-center" variantI={5}>
               Contact us
            </Title>
            <Title className=" text-center" variantI={1}>
               Our space is more than a shared office. It is a meeting ground.
            </Title>
            <Paraf className=" text-opacity-50 text-center">
               Find focus and clarity space to do the things you need to do to grow your business in New York. Book by the month, daily or by the hour.
            </Paraf>
         </Cols>
      </Cols>
   )
}

export const PricingHero = () => {
   return (
      <Cols whiteSpaceBottom whiteSpaceTop whiteSpaceX className="w-full pb-16 p-10 h-full">
         <Cols className="max-w-[80%] text-center" whiteSpaceX>
            <Title variantI={1} className="mb-3">
               Discover flexible spaces and solutions to your business
            </Title>
            <Paraf>
               {`For companies of all sizes, we provide the global scale and flexibility to help your business adapt to uncertainty. Find the space that's right for you.`}
            </Paraf>
         </Cols>
      </Cols>
   )
}

export const SpacesHero = () => {
   return (
      <Cols className=" gap-16 lg:gap-5 min-[1440px]:flex-row" whiteSpaceBottom whiteSpaceTop whiteSpaceX>
         <Cols className="gap-16 h-fit my-auto">
            <Cols className="flex-shrink-0 gap-8">
               <Title  variantI={1}>
                  A creative coworking space in New York
               </Title>
               <Paraf className=" text-opacity-70">
                  You can book personal office space across the country by the day, hour or month.
               </Paraf>
            </Cols>
            <InputWithSubmit/>
         </Cols>
         <ImageSuspense>
            <div className="relative max-sm:hidden w-full min-[1440px]:max-w-[836px] h-[616px] ">
               <Image priority className="h-fit" src={"Spaces/imageHero.svg"} alt="blur" fill/>
            </div>
         </ImageSuspense>
         
      </Cols>
   )
}