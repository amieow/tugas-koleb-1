import { CtaSpaces } from "../section/cta";
import Feedback from "../section/feedback";
import { SpacesHero } from "../section/hero";
import Plans from "../section/plans";
import Review from "../section/review";


export default function Page() {
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
