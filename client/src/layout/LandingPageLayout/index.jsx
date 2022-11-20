import React from 'react'
// import Footer from '../LandingPageLayout/footer'
import LandingFooter from './landing-footer'
import { Outlet } from 'react-router-dom'

const LandingPageLayout = () => {
  return (
    <main className="landing-main">
      <Outlet/>
      {/* <Footer/> */}
      {/* <LandingFooter/> */}
    </main>
  )
}
export default LandingPageLayout;