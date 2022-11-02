import React from 'react'
import '../../styles/login-signup.css'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
        <header id="headerlogin" className="fixed-top">
            <div className="container d-flex align-items-center">
                <h1 className="logo me-auto">
                    <a href="/">Rimorin Dental Clinic</a>
                </h1>
            </div>
        </header>

        <div className="auth-wrapper">
                <div className="image-banner">
                    <img src={"../img/hero-img.png"} />
                </div>

                <Outlet/>

            </div>
    </>
  )
}
export default AuthLayout;
