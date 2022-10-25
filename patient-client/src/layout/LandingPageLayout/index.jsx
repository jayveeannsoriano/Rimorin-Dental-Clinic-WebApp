import React from 'react'
import Footer from '../LandingPageLayout/footer'
import { Outlet } from 'react-router-dom'

const LandingPageLayout = () => {
  return (
    <main className="landing-main">
      <Outlet/>
      <Footer/>
    </main>
  )
}
export default LandingPageLayout;