import React, { FC } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

// images
import slide1 from '../../assets/slider/1.webp'
import slide2 from '../../assets/slider/2.webp'
import slide3 from '../../assets/slider/3.webp'
import slide4 from '../../assets/slider/4.webp'

const Slider: FC = () => {
  const slides = [
    {
      source: slide2,
    },
    {
      source: slide1,
    },
    {
      source: slide3,
    },
    {
      source: slide4,
    },
  ]

  return (
    <section>
      <div
        className='w-full bg-[#FEF4E8]'
        id='Home'
      >
        <Carousel
          showStatus={false}
          autoPlay={true}
          showThumbs={false}
          infiniteLoop={true}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <img
                src={slide.source}
                alt='background'
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Slider
