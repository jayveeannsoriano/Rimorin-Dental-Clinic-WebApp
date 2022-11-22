import React from "react";
import "../../styles/login-signup.css";
import Footer from "../../layout/LandingPageLayout/footer";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main>
        <header id="headerlogin" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <a href="/">Rimorin Dental Clinic</a>
            </h1>
          </div>
        </header>
        <section id="auth-section" className="auth-section">
          <div className="container auth-container">
            <div className="row">
              <div className="col-lg-6 col-xl-6">
                <img src={"../img/hero-img.png"} className="img-fluid" />
              </div>
              <div className="col-lg-6 col-xl-6 p-3 justify-content-center">
                <Outlet />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};
export default AuthLayout;
