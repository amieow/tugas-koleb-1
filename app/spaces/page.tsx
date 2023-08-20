import dynamic from "next/dynamic";
import { CtaSpaces } from "../section/cta";
import Feedback from "../section/feedback";
import { SpacesHero } from "../section/hero";
import Plans from "../section/plans";
import Review from "../section/review";
import Loading from "../loading";


function Page() {
   return (
      <>
         <SpacesHero/>
         <Plans/>
         <CtaSpaces/>
         <Review/>
         <Feedback/>
      </>
   )
}

export default dynamic(() => Promise.resolve(Page),{loading : () => <Loading/>,ssr : false})
