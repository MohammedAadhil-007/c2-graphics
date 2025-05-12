import React from 'react'
import { useEffect } from 'react'
import Header from '../layout/Header'
import Slider from '../features/Slider/Slider'
import Gallery from '../features/Gallery/Gallery'
import Services from '../features/Services/Services'
import AboutUs from '../features/AboutUs/AboutUs'
import Hero from '../features/Hero/Hero'
import Team from '../features/Contact/Contact'
import Faqs from '../features/FAQs/Faqs'

const HomePage = () => {
  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }
    }
  }, [window.location.hash])
  return (
    <>
      <Slider />
      <Gallery />
      <Services />
      <Hero />
      <AboutUs />
      <Faqs />
      <Team />
    </>
  )
}

export default HomePage
