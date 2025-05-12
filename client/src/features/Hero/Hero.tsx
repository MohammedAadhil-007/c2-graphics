import React from 'react'
import source from '../../assets/aboutus/abtus1.jpg'
import * as Scroll from 'react-scroll'
const Hero = () => {
  return (
    <>
      <div id='About'>
        <div className='w-full my-10'>
          <div
            className='flex justify-center items-center flex-col bg-no-repeat bg-cover bg-[center_50%] h-96 w-full text-white '
            style={{ backgroundImage: `url(${source})` }}
          >
            <h1 className='md:text-4xl text-xl font-lora text-center leading-10 mb-8 font-bold'>
              CAPTURE THE MOMENTS, AND LET
              <br /> US TAKE CARE OF THE REST
            </h1>
            <Scroll.Link
              to='Read'
              smooth={true}
              duration={500}
              className='px-8 py-2 rounded-full bg-[#123C69] text-white font-bold cursor-pointer'
            >
              Read more
            </Scroll.Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
