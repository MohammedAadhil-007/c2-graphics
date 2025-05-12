import React, { useState } from 'react'
import logo from '../assets/icons/lowgow.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import * as Scroll from 'react-scroll'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const [nav, setNav] = useState(true)
  const navigate = useNavigate()

  const handleNav = () => {
    setNav(!nav)
  }
  const links = [
    {
      name: 'Home',
    },
    {
      name: 'Gallery',
    },
    {
      name: 'Packages',
    },
    {
      name: 'About',
    },
    {
      name: 'FAQs',
    },
  ]

  return (
    <header className='py-4 px-8 flex items-center justify-between w-full sticky top-0 z-10 bg-[#FEF4E8]'>
      <img
        src={logo}
        alt='logo'
        className='w-12 md:w-14 cursor-pointer'
      />
      <ul className='hidden md:flex items-center'>
        {links.map((item, index) => (
          <li
            key={index}
            className='mx-5 font-bold cursor-pointer text-lg'
          >
            <Scroll.Link
              activeClass='underline'
              isDynamic={true}
              to={item.name}
              spy={true}
              smooth={true}
              duration={500}
              offset={-200}
            >
              {item.name}
            </Scroll.Link>
          </li>
        ))}
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>
        <SignedOut>
          <button
            className='px-4 py-2 rounded-full font-bold bg-[#123C69] text-white'
            onClick={() => navigate('/sign-in')}
          >
            Sign in
          </button>
        </SignedOut>
      </ul>
      <div
        onClick={handleNav}
        className='block md:hidden'
      >
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#FEF4E8] ease-in-out duration-500 z-50'
            : 'fixed left-[-100%]'
        }
      >
        <div className='flex items-center'>
          <img
            src={logo}
            alt='logo'
            loading='lazy'
            className=' w-36 cursor-pointer mt-8'
          />
        </div>
        <ul className='p-4 mt-12'>
          {links.map((item, index) => (
            <li
              key={index}
              className='p-4 cursor-pointer'
            >
              <div>
                <Scroll.Link
                  isDynamic={true}
                  onClick={handleNav}
                  to={item.name}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-200}
                >
                  {item.name}
                </Scroll.Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header
