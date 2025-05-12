import React from 'react'
import source2 from '../../assets/aboutus/abtus2.jpg'
import source3 from '../../assets/aboutus/abtus3.jpg'
import source4 from '../../assets/aboutus/abtus4.jpg'

const AboutUs = () => {
  const assests = [source2, source3, source4]
  return (
    <>
      <div id='Read'>
        <div className='flex md:px-20 px-4 flex-col items-center md:items-start'>
          <h1 className='md:justify-self-start ms-5 my-10 md:text-5xl text-3xl text-[#970747] font-semibold font-lilita'>
            ABOUT US
          </h1>
          <div className='flex justify-center items-center md:flex-row gap-4 w-full'>
            {assests.map((item, index) => (
              <Image
                key={index}
                source={item}
              />
            ))}
          </div>
          <div className='md:mt-5 mt-5 px-8 text-sm md:text-base font-lora text-justify'>
            We believe that a picture is worth a thousand words, and we strive
            to capture the essence of every moment with our expert photography
            skills. Our talented team of photographers is dedicated to providing
            exceptional service, using state-of-the-art equipment to ensure that
            each image is of the highest quality. At C2-Graphics, our team of
            photographers is a family. We share a passion for capturing life's
            most precious moments and telling stories through our art. Get to
            know the individuals who make our team so special and discover the
            unique skills and perspectives they bring to every shoot. Trust us
            to bring your vision to life with our creativity, passion, and
            expertise.
          </div>
        </div>
      </div>
    </>
  )
}

type ImagesProps = {
  source: string
}

const Image = ({ source }: ImagesProps) => {
  return (
    <img
      src={source}
      className='w-28 h-48 md:w-[430px] md:h-[500px] object-cover cursor-pointer'
    />
  )
}

export default AboutUs
