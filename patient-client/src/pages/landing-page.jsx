import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import Footer from "../components/footer";
import '../styles/landing-page.css';
import '../components/landing-header';

function LandingPage(){
    return(
        <div className="LandingPage" >
            {/* Top Bar */}
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="info d-flex align-items-center">
                        <i className="fa-regular fa-envelope fa-sm"></i>
                        <a href={"mailto:contact@example.com"}>rimorin.dental@gmail.com</a>
                        <i className="fa-regular fa-mobile-screen fa-sm"></i> +639 265 785 456 
                    </div>
                </div>
            </div>

            {/* Header */}
            <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">

                        <h1 className="logo me-auto"><a href="/">Rimorin Dental Clinic</a></h1>

                        <nav id="navbar" className="navbar order-last order-lg-0">
                            <ul>
                                <li><a className="nav-link scrollto active" href={'#hero'}>Home</a></li>
                                <li><a className="nav-link scrollto" href={'#about'}>About</a></li>
                                <li><a className="nav-link scrollto" href={'#services'}>Services</a></li>
                                <li><a className="nav-link scrollto" href={'#faq'}>FAQs</a></li>
                                <li><a className="nav-link scrollto" href={'#contact'}>Contact</a></li>
                            </ul>
                        </nav>

                        <a href="/login" className="login-btn scrollto">Login</a>
                    </div>
                </header>

            {/* Hero Section */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container" data-aos="zoom-out" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h1>A Great Place to Receive Care</h1>
                            <h4>Rimorin Dental Clinic is most focused in helping you discover your most beautiful smile</h4>
                            <div>
                                <a href="/login" className="btn-get-started scrollto">Make an Appointment</a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img">
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
                            <div className="icon"><i className="fa-solid fa-file fa-sm"></i></div>
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
                            <div className="col-lg-5 d-flex about-img align-items-stretch aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200"> 
                                <img src={"./img/about-img.png"} className="img-fluid" alt=""/>
                            </div>

                            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">

                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="fa-solid fa-face-smile"></i></div>
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
                            <div className="icon"><i className="fas fa-teeth-open"></i></div>
                            <h4>Dental Surgery</h4>
                            <p>Procedures would include teeth extraction, correction, and implants.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-dna"></i></div>
                            <h4>Prosthodontics</h4>
                            <p>Maintenance of the oral function, comfort, appearance, and health of patient.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                        <div className="icon-box">
                            <div className="icon"><i className="fas fa-wheelchair"></i></div>
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
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                        quidem hic quas.</p>
                </div>

                <div className="faq-list">
                    <ul>
                        <li data-aos="fade-up">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Do I need to arrive early for my first appointment? <i
                                    className="bx bx-chevron-down icon-show"></i><i
                                    className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                <p>
                                    Yes. Please arrive 10-15 minutes early to fill out any remaining patient forms.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="100">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">What should I do if I require premedication?
                                <i className="bx bx-chevron-down icon-show"></i>
                                <i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    Please be sure to request a prescription prior to your appointment, or if you are unsure, contact us and we can help.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="200">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">How long will my first appointment last? <i className="bx bx-chevron-down icon-show"></i><i
                                    className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    It varies, but please plan on 30mins to 1 hours for the first visit.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="300">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">How to make an appointment? <i className="bx bx-chevron-down icon-show"></i><i
                                    className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                <p>
                                    The clinic is entertaining online appointments only except for emergency cases. To book an appointment, begin by signing up a patient account (free) if you don`t have an account yet.
                                </p>
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="400">
                            <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">I forgot my password. How to recover account? <i className="bx bx-chevron-down icon-show"></i><i
                                    className="bx bx-chevron-up icon-close"></i></a>
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
        <section id="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Contact Us</h2>
                    <p>As part of our heightened precautions due to COVID-19, our online appointment form will include health related questions that will help us to determine risk and allow us to properly screen patients.</p>
                </div>
            </div>

            {/* Fix google maps embed */}
            {/* <div>
                <iframe style="border:0; width: 100%; height: 350px;" src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.224045019263!2d120.5919813292672!3d16.413443898252492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1678f3bd46d%3A0xc35a5159b3cb4c02!2sVictoria%20Supermart%20Session%20Rd.!5e0!3m2!1sen!2sus!4v1662108057381!5m2!1sen!2sus"}
                    frameborder="0" allowfullscreen></iframe>
            </div> */}

            <div className="row contact-info">

            <div className="col-md-4">
                <div className="contact-address">
                    <i className="fa-solid fa-location-dot"></i>
                    <h3>Location:</h3>
                    <p>Victoria St., Mabini, Upper Session Road Baguio City, Philippines</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="contact-phone">
                    <i className="fa-regular fa-phone"></i>
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

    {/* <div id="preloader"></div>
    <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i></a> */}
        
        <Footer />
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi-arrow-up-short"></i></a>
    </div>
    );
}

export default LandingPage;