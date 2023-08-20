import React from 'react'
import { ContactHero } from '../section/hero'
import Map from '../section/map'
import Contact from '../section/contact'
import { CtaContact } from '../section/cta'
import Client from '../section/client'
import Form from '../section/form/form'
import dynamic from 'next/dynamic'
import Loading from '../loading'

function Page() {
   return (
      <>
         <ContactHero/>
         <Map/>
         <Contact/>
         <CtaContact/>
         <Client/>
         <Form/>
      </>
   )
}

export default dynamic(() => Promise.resolve(Page),{loading : () => <Loading/>,ssr : false})
