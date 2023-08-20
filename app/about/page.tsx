import React from 'react'
import Data from '../section/data'
import Plans from '../section/plans'
import Leadership from '../section/leadership'
import JoinTeam from '../section/joinTeam'
import Client from '../section/client'
import { CtaAbout } from '../section/cta'
import Subscription from '../section/subscription'
import { AboutHero } from '../section/hero'
import dynamic from 'next/dynamic'
import Loading from '../loading'

function Page() {
   return (
      <>
         <AboutHero/>
         <Data/>
         <Plans/>
         <Leadership/>
         <JoinTeam/>
         <Client/>
         <CtaAbout 
            title='We have all the amenities you need to grow your business starting on day one' 
            description='We strive to create a professional and welcoming environment in order to foster collaboration, creativity, and productivity.'
         />
         <Subscription 
            title='Modern workspaces that fits your needs' 
            description='No subscriptions or lousy monthly fees. Only pay for the space and time you need'
         />
      </>
   )
}

export default dynamic(() => Promise.resolve(Page),{loading : () => <Loading/>,ssr : false})
