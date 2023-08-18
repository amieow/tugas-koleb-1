import Service from './section/service'
import Features from './section/features'
import Plans from './section/plans'
import Location from './section/location'
import Review from './section/review'
import Subscription from './section/subscription'
import { HomePageHero } from './section/hero'
import { CtaHomepage } from './section/cta'

export default function Home() {
   return (
      <>
         <HomePageHero/>
         <Service/>
         <Features/>
         <Plans/>
         <Location/>
         <Review />
         <CtaHomepage/>
         <Subscription breakLg title='We enable people to work where they want, when they want and how they want' description={`We offer offices for lease by the day, by the week, or by the year. \nChoose from any of our 3000 locations. Get a free quote!`} />
      </>
   )
}
