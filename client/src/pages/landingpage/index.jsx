import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import '../../styles/landing-page.css';
import { useEffect, useState } from "react";



const LandingPage = () => {

    //Initialize useState for NavBar
    const [isActive1, setActive1] = useState(false);
    const [isActive2, setActive2] = useState(false);
    const [isActive3, setActive3] = useState(false);
    const [isActive4, setActive4] = useState(false);
    const [isActive5, setActive5] = useState(false);

    //unhighlight Navbars
    function cancel(){
        setActive1(false);
        setActive2(false);
        setActive3(false);
        setActive4(false);
        setActive5(false);
    }



    //Highlight #hero url
    const toggleClass1 = () => {
        cancel();
        setActive1(!isActive1);
    };

    //Highlight #about url
    const toggleClass2 = () => {
        cancel();
        setActive2(!isActive2);
    };

    //Highlight #services url
    const toggleClass3 = () => {
        cancel();
        setActive3(!isActive3);
    };

    //Highlight #faq url
    const toggleClass4 = () => {
        cancel();
        setActive4(!isActive4);
    };

    //Highlight #contact url
    const toggleClass5 = () => {
        cancel();
        setActive5(!isActive5);
    };


    function highlight(){
        var btnContainer = document.getElementById('navbar');
        var btns = btnContainer.getElementsByClassName('nav-link scrollto');
        console.log(btns.length);
    
        for (var i=0; i<btns.length; i++){
            btns[i].addEventListener('click', function(){
            var current = document.getElementsByClassName('active');
            current[0].className = current[0].className.replace('active');
            this.className += 'active';
            })
        }
    }

    

    return(
        <div className="LandingPage" >
            {/* Top Bar */}
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="info d-flex align-items-center">
                        <i className="fa-regular fa-envelope fa-sm"></i>
                        <a href={"mailto:contact@example.com"}>rimorin.dental@gmail.com</a>
                        <i class="bi bi-telephone"></i> +639 265 785 456 
                    </div>
                </div>
            </div>

            {/* Header */}
            <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">

                        <h1 className="logo me-auto"><a href="/">Rimorin Dental Clinic</a></h1>

                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li><a className={"nav-link scrollto "+ (isActive1 ? 'active': null)} href={'#hero'} onClick={toggleClass1}>Home</a></li>
                                <li><a className={"nav-link scrollto "+ (isActive2 ? 'active': null)} href={'#about'} onClick={toggleClass2}>About</a></li>
                                <li><a className={"nav-link scrollto "+ (isActive3 ? 'active': null)} href={'#services'} onClick={toggleClass3}>Services</a></li>
                                <li><a className={"nav-link scrollto "+ (isActive4 ? 'active': null)} href={'#faq'} onClick={toggleClass4}>FAQs</a></li>
                                <li><a className={"nav-link scrollto "+ (isActive5 ? 'active': null)} href={'#contact'} onClick={toggleClass5}>Contact</a></li>
                            </ul>
                        </nav>

                        <a href="/auth/login" className="login-btn scrollto">Login</a>
                    </div>
                </header>

                <script>
                highlight();
                </script>


            {/* Hero Section */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container" data-aos="zoom-out" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-">
                            <h1>A Great Place to Receive Care</h1>
                            <h4>Rimorin Dental Clinic is most focused in helping you discover your most beautiful smile</h4>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="/auth/login" className="btn-get-started scrollto">Make an Appointment</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 order-1 order-lg-2 hero-img">
                            <img src={'./img/hero-img.png'} className="img-fluid animated"/>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="features">
            <div className="container" data-aos="fade-up">

                <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                            <div className="icon"><i className="fa-solid fa-calendar-check fa-sm"></i></div>
                            <h4 className="title">Online Booking Appoinment</h4>
                            <p className="description">Book an appointment at your earliest convenience.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                            <div className="icon"><i className="fa-solid fa-clipboard-user fa-sm"></i></div>
                            <h4 className="title">Patient Records</h4>
                            <p className="description">Accessibility and manageability of records with just a click.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                            <div className="icon"><i className="fa-solid fa-file-prescription fa-sm"></i></div>
                            <h4 className="title">E-Prescription</h4>
                            <p className="description">Go paperless! Prescriptions are now provided to you digitally.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                            <div className="icon"><i className="fas solid fa-message"></i></div>
                            <h4 className="title">Receive SMS Reminders</h4>
                            <p className="description">Receive a text message reminding you of your upcoming appointment schedule so you never have to.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

        {/* About Section */}
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>About Us</h2>
                    <p>Rimorin Dental Clinic is committed to operate the best chain of dental clinics that delivers the highest quality dental care at the most affordable cost to our customers.</p>
                </div>
                
                    <div className="row">
                            <div className="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200"> 
                                <img src={"./img/about-img.png"} className="img-fluid" alt=""/>
                            </div>

                            <div className="col-lg-6 pt-4 pt-lg-0 content">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="fa-solid fa-face-laugh-beam"></i></div>
                                <h4 className="title">Modern care with a smile</h4>
                                <p className="description">The clinic will ensure that the services will bring smile and make you feel and look confident.</p>
                            </div>

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon"><i className="fa-solid fa-peso-sign"></i></div>
                                <h4 className="title">Transparent Pricing</h4>
                                <p className="description">Our clinic believes in accessible dental care. Rimorin Dental offers straightforward pricing.</p>
                            </div>

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                                <div className="icon"><i className="fa-solid fa-laptop-medical"></i></div>
                                <h4 className="title">Accessibility</h4>
                                <p className="description">We believe that having an account will help the clinic`s patients to keep up with your records and schedules.</p>
                            </div>
                            </div>
                        </div>
                    </div>
            </section>

        {/* Services Section */}
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>Here at Rimorin Dental Clinic, we give you quality and affordable dental services. </p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-user-doctor"></i></div>
                            <h4>Consultations</h4>
                            <p>Don’t know where to start? Book a consultation to know more about your oral health.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-tooth"></i></div>
                            <h4>Filling</h4>
                            <p>A procedure to restore the tooth that has cavity or small fracture using tooth-colored fillings.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-syringe"></i></div>
                            <h4>Dental Surgery</h4>
                            <p>Procedures would include teeth extraction, correction, and implants.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-hand-holding-medical"></i></div>
                            <h4>Prosthodontics</h4>
                            <p>Maintenance of the oral function, comfort, appearance, and health of patient.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-teeth-open"></i></div>
                            <h4>Oral Prophylaxis</h4>
                            <p>Involves removal of plaque and tartar which accumulates in areas</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-notes-medical"></i></div>
                            <h4>Teledentistry</h4>
                            <p>Connect and communicate with your dentist on screen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className="faq-list">
                    <ul>
                        <li data-aos="fade-up">
                            <i className="fa-solid fa-circle-info icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Do I need to arrive early for my first appointment? <i
                                    className="fa-solid fa-chevron-down icon-show"></i><i
                                    className="fa-solid fa-chevron-up icon-close"></i></a>
                            <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                <p>
                                    Yes. Please arrive 10-15 minutes early to fill out any remaining patient forms.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="100">
                            <i className="fa-solid fa-circle-info icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">What should I do if I require premedication?
                                <i className="fa-solid fa-chevron-down icon-show"></i>
                                <i className="fa-solid fa-chevron-up icon-close"></i></a>
                            <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Please be sure to request a prescription prior to your appointment, or if you are unsure, contact us and we can help.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="200">
                            <i className="fa-solid fa-circle-info icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">How long will my first appointment last? 
                            <i className="fa-solid fa-chevron-down icon-show"></i>
                            <i className="fa-solid fa-chevron-up icon-close"></i></a>
                            <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    It varies, but please plan on 30 minutes to 1 hour for the first visit.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="300">
                            <i className="fa-solid fa-circle-info icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">How to make an appointment? 
                            <i className="fa-solid fa-chevron-down icon-show"></i>
                            <i className="fa-solid fa-chevron-up icon-close"></i></a>
                            <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    The clinic is entertaining online appointments only except for emergency cases. To book an appointment, begin by signing up a patient account (free) if you don`t have an account yet.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="400">
                            <i className="fa-solid fa-circle-info icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">I forgot my password. How to recover account? 
                            <i className="fa-solid fa-chevron-down icon-show"></i>
                            <i className="fa-solid fa-chevron-up icon-close"></i></a>
                            <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    If you have forgotten your password, click the `forgot password` on the login screen. Follow the instructions given to you such as email verification, etc.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Contact Us</h2>
                    <p>As part of our heightened precautions due to COVID-19, our online appointment form will include health related questions that will help us to determine risk and allow us to properly screen patients.</p>
                </div>
            </div>

            <div className="row contact-info">

            <div className="col-md-4">
                <div className="contact-address">
                    <i class="bi bi-geo"></i>
                    <h3>Location:</h3>
                    <p>Victoria St., Mabini, Upper Session Road Baguio City, Philippines</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="contact-phone">
                    <i class="bi bi-telephone"></i>
                    <h3>Call:</h3>
                    <p>+639 123 456 789</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="contact-email">
                    <i className="fa-regular fa-envelope"></i>
                    <h3>Email:</h3>
                    <p>rimorin.dental@gmail.com</p>
                </div>
            </div>
         </div>
    </section>
    </div>
    );
}

export default LandingPage;

