import React, { useEffect } from 'react'

import { Helmet } from 'react-helmet'

// local components
import Navigation from '../components/navigation'
import Projects from '../components/projects'
import Footer from '../components/footer'
import Showcase from '../components/showcase'
import Contact from '../components/contact'
import Banner from '../components/banner'

// styles
import '../assets/global.css'

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <meta name="description" content="Luis Barrios, developer" charSet="utf-8"/>
        <title>
        ॐ Carlos Barrios, developer
        </title>
      </Helmet>

      <Navigation/>
      <Showcase/>
      <Projects/>
      <Banner/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default IndexPage
