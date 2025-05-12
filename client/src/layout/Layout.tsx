import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from './Header'

type LayoutProps = {
  isSticky: boolean
  scroll: boolean
}
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Layout
