import Image from "next/image";
import Title from "../components/typography/title";
import { Cols } from "../layout/direction";


export default function Client() {
   return (
      <Cols whiteSpaceX whiteSpaceBottom className=" gap-11">
         <Title className=" text-opacity-50 text-center" variantI={5}>
            Trusted by top companies and startups around the world
         </Title>
         <div className=" relative w-full h-32">
            <Image src={"Client/image-1.svg"} alt="blue" fill />
         </div>
      </Cols>
   )
}
