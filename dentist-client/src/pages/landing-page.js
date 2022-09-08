import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function LandingPage(){
    return(
    // Top Bar
     <div id="topbar" className="d-flex align-items-center fixed-top">
         <div className="container d-flex justify-content-between">
            <div className="info d-flex align-items-center">
                <i className="bi bi-envelope" />
                <a href="mailto:contact@example.com">rimorin.dental@gmail.com</a>
                <i className="bi bi-phone" /> +639 265 785 456 
            </div>
        </div>

    {/* Header */}
    <header id="header" class="fixed-top">
        <div class="container d-flex align-items-center">

            <h1 class="logo me-auto"><a href="index.html">Rimorin Dental Clinic</a></h1>

            <nav id="navbar" class="navbar order-last order-lg-0">
                <ul>
                    <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                    <li><a class="nav-link scrollto" href="#about">About</a></li>
                    <li><a class="nav-link scrollto" href="#services">Services</a></li>
                    <li><a class="nav-link scrollto" href="#faq">FAQs</a></li>
                    <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
            </nav>

            <a href="login.html" class="login-btn scrollto">Login</a>
        </div>
    </header>

    {/* Hero Section */}
    {/* <section id="hero" class="d-flex align-items-center">
        <div class="container" data-aos="zoom-out" data-aos-delay="100">
            <div class="row">
                <div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                    <h1>A Great Place to Receive Care</h1>
                    <h4>Rimorin Dental Clinic is most focused in helping you discover your most beautiful smile</h4>
                    <div>
                        <a href="login.html" class="btn-get-started scrollto">Make an Appointment</a>
                    </div>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 hero-img">
                    <img src="./assets/img/hero-img.png" class="img-fluid animated" alt="" />
                </div>
            </div>
        </div>
    </section> */}

    {/* Footer */}
    {/* <footer id="footer">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-lg-6 text-lg-left text-center">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Rimorin</span></strong>. All Rights Reserved
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="footer-links text-lg-right text-center pt-2 pt-lg-0">
                        <a href="#hero" class="scrollto">Home</a>
                        <a href="#about" class="scrollto">About</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Use</a>
                    </nav>
                </div>
            </div>
        </div>
    </footer> */}

    </div> 
    );
}

export default LandingPage;