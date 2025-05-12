import React, { FC } from 'react'

// images
import g1 from '../../assets/gallery/g1.webp'
import g2 from '../../assets/gallery/g2.webp'
import g3 from '../../assets/gallery/g3.webp'
import g4 from '../../assets/gallery/g4.webp'
import g5 from '../../assets/gallery/g5.webp'
import g6 from '../../assets/gallery/g6.webp'

const Gallery: FC = () => {
  const images = [
    {
      source: g1,
    },
    {
      source: g2,
    },
    {
      source: g3,
    },
    {
      source: g6,
    },
    {
      source: g5,
    },
    {
      source: g4,
    },
  ]

  return (
    <>
      <div
        className='mt-20 mb-10 px-4 md:mt-24 md:px-32 scroll-smooth'
        id='Gallery'
      >
        <div className='flex flex-col items-center '>
          <div className='flex'>
            {images.slice(0, 3).map((item, index) => (
              <GalleryImage
                key={index}
                source={item.source}
              />
            ))}
          </div>
          <div className='my-4 px-2 md:px-0 font-lora md:text-2xl text-xs font-medium text-justify max-w-[1290px]'>
            At C2-Graphics, we believe that photography is not just about
            taking pictures - it's about capturing emotions, memories, and the
            essence of the moment. We are committed to creating images that tell
            your unique story and reflect your individual style.
          </div>
          <div className='flex'>
            {images.slice(3, 6).map((item, index) => (
              <GalleryImage
                key={index}
                source={item.source}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

type GalleryProps = {
  source: string
}

const GalleryImage = ({ source }: GalleryProps) => {
  return (
    <img
      src={source}
      className='w-28 h-48 md:w-[430px] md:h-[500px] mr-1 object-cover cursor-pointer'
    />
  )
}

export default Gallery
