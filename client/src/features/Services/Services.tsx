import React from 'react'
import servicesData from '../../data/servicesData'
import { Link } from 'react-router-dom'
const Services = () => {
  return (
    <div id='Packages'>
      <h1 className='text-center md:text-5xl text-3xl text-[#970747] font-semibold mt-20 font-lilita'>
        SERVICES AND PACKAGES
      </h1>
      <div className='flex flex-wrap my-4 md:px-16 px-4 justify-center'>
        {servicesData.map((item, index) => (
          <Link
            to={`/package/${item.id}`}
            key={index}
          >
            <div className='md:w-96 w-96 md:h-[450px] h-[350px] md:mx-10 mx-1 md:my-12 my-3 cursor-pointer mb-20'>
              <img
                src={item.source}
                alt='service'
                className='w-full h-full object-cover rounded-t-3xl'
              />
              <div className='rounded-b-3xl py-4 text-center bg-[#BAB2B5] text-3xl font-thin font-licorice'>
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services
