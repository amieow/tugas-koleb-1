import Image from "next/image";
import Title from "../components/typography/title";
import { Cols, Rows } from "../layout/direction";
import Paraf from "../components/typography/paraf";
import Card from "../layout/card";
import { classname } from "../asset/type/type";


export default function Features({className = ""} : classname ) {
   return (
      <Cols whiteSpaceX className={`relative p-11 gap-60 lg:flex-row mb-36 ${className}`}>
         <div className="relative h-[616px] w-full lg:max-w-lg ">
            <Image alt="" fill src={"Feature/image-1.svg"}/>
         </div>
         <Cols className=" gap-16 w-full lg:w-1/2">
            <Title variantI={1}>
               A complete coworking space solution for your business and team
            </Title>
            <Cols className="gap-6">
               <Card className="gap-6 rounded-3xl" direction="cols">
                  <Title variantI={3}>
                     Discover a busines location
                  </Title>
                  <Paraf className=" text-opacity-70">
                     Our mission is to provide unparalleled value that increases over time. Our space is more than a shared office.
                  </Paraf>
               </Card>
               <Card className=" rounded-3xl" direction="cols">
                  <Title className="" variantI={3}>
                     The most efficient workspace solutions
                  </Title>
               </Card>
               <Card className="rounded-3xl" direction="cols">
                  <Title variantI={3}>
                     Design your productive space
                  </Title>
               </Card>
            </Cols>
         </Cols>
      </Cols>
   )
}
