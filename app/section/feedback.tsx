import Button from "../components/button";
import Paraf from "../components/typography/paraf";
import Title from "../components/typography/title";
import { Cols } from "../layout/direction";
import Cta from "./cta";
import Input from "./form/input";


export default function Feedback() {
   return (
      <Cta className="flex-col px-0 sm:px-12 lg:px-32 py-24 lg:py-[150px] gap-16">
         <Title className=" text-center hyphens-auto" variantI={1}>
            One of our workspace experts will reach out to you based on your communication preferences.
         </Title>
         <Cols className="bg-white px-5 sm:px-10 md:px-20 pt-8 py-5 md:py-12 gap-6 rounded-3xl">
            <Cols className="mx-auto max-w-2xl gap-6">
               <Title className=" flex-shrink-0 text-center w-fit mx-auto" variantI={1}>
                  {`We'd love to hear from you`}
               </Title>
               <Paraf className="text-opacity-50 text-center">
                  To book a complimentary private day office or desk, simply complete the form below.
               </Paraf>
            </Cols>
            <Cols className=" gap-12">
               <Input placeholder="Enter your name"/>
               <Input placeholder="Enter your email"/>
               <Input placeholder="Message"/>
               <Button className=" text-center" variant="primary">
                  Submit
               </Button>
            </Cols>
         </Cols>
      </Cta>
   )
}
