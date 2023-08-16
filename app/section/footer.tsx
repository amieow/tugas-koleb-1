import Paraf from "../components/typography/paraf";
import { Cols,Rows } from "../layout/direction";
import Image from "next/image";
import Logo from "../components/logo";
import { Menu, navFooter } from "../asset/asset";
import Title from "../components/typography/title";
import Button from "../components/button";

export default function Footer() {
   return (
      <Cols className=" px-12">
         <Cols className="w-full max-w-[1440px] mb-36 mx-auto gap-9">
            <Rows className="border-b pb-12 lg:border-t justify-between border-black border-opacity-30 pt-16">
               <LeftFooter/>
               <RightFooterLg/>
            </Rows>
            <Paraf className=" text-base text-opacity-50">
               © 2023 All rights reserved - Futurspace
            </Paraf>
         </Cols>
      </Cols>
   )
}

export function LeftFooter(){
   return (
      <Cols className="gap-12 lg:gap-2 w-full lg:w-fit justify-center">
         <Logo className="hidden lg:flex"/>
         <Logo withLogo className="lg:hidden justify-center"/>
         <Cols className=" gap-11 lg:gap-8">
            <RightFooterMd/>
            <Paraf className="max-w-[264px] text-opacity-50 hidden lg:flex">
               We want to build more than nice, shared office spaces. We want to build a community.
            </Paraf>
            <Rows className="justify-center lg:justify-start gap-4">
               {Array.from({length : 4},(_,index) => (
                  <div className=" relative w-7 lg:w-5 h-7 lg:h-5" key={index}>
                     <Image  loading="eager" fill alt="Social-Media" src={`Footer/image-${index + 1}.svg`}/>
                  </div>
               ))}
            </Rows>
         </Cols>
      </Cols>
   )
}
export function RightFooterLg(){
   return (
      <Rows className=" gap-24 hidden lg:flex">
         {Menu.map((itm,index) => (
            <Cols className="gap-6" key={index}>
               <Title variantI={4}>
                  {itm.Title}
               </Title>
               <Cols className=" gap-4">
                  {itm.Menu.map((item,index) => (
                     <Button variant={"none"} className="" key={index}>
                        {item}
                     </Button>
                  ))}
               </Cols>
            </Cols>
         ))}
      </Rows>
   )
}

export function RightFooterMd(){
   return (
      <Cols className="gap-9 lg:hidden">
         {navFooter.map((itm,index) => (
            <Button className="text-center" variant="none" key={index}>
               {itm.text}
            </Button>
         ))}
      </Cols>
   )
}
