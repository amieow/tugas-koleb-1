import React from 'react'
import { PricingHero } from '../section/hero'
import Pricing from '../section/pricing'
import Faq from '../section/faq'
import Subscription from '../section/subscription'
import ContactPricing from '../section/contactPricing'
import dynamic from 'next/dynamic'
import Loading from '../loading'

function Page() {
    return (
        <>
            <PricingHero />
            <Pricing />
            <Faq />
            <ContactPricing />
            <Subscription title={"We enable people to work where they want, when they want and how they want"} description={"We offer offices for lease by the day, by the week, or by the year. Choose from any of our 3000 locations.Get a free quote!"} />
        </>
    )
}

export default dynamic(() => Promise.resolve(Page),{loading : () => <Loading/>,ssr : false})