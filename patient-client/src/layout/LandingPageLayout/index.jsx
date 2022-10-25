import React from 'react'
import Footer from '../LandingPageLayout/footer'
import { Outlet } from 'react-router-dom'

const LandingPageLayout = () => {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}
export default LandingPageLayout;