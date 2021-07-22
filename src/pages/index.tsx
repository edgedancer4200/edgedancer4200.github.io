import React, { useEffect } from 'react'

import { Helmet } from 'react-helmet'

// local components
import Navigation from '../components/navigation'
import ProjectsSection from '../components/projects_section'
import Footer from '../components/footer'
import Showcase from '../components/showcase'
import Contact from '../components/contact'

// styles
import '../assets/global.css'

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet htmlAttributes={{
        lang: 'en'
      }}>
        <meta name="description" content="Carlos Barrios, developer" charSet="utf-8"/>
        <title>
        ॐ Carlos Barrios, developer
        </title>
      </Helmet>

      <Navigation/>
      <Showcase/>
      <ProjectsSection/>
      <Contact/>
      <Footer/>

      <Contact/>
      <Footer/>
    </>
  )
}

export default IndexPage
