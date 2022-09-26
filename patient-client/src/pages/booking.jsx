import React from "react";
import Header from "../components/header.jsx";
import Sidebar from "../components/sidebar.jsx";
import Footer from "../components/footer.jsx";
import '../styles/booking.css';
import 'react-bootstrap';

// import '../js/booking.js';
// import Stepper from 'bs-stepper'

function Booking(){
    return(
        <div>
            <main id="main" className="main">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/appointments">Appointments</a>
                        </li>
                        <li className="breadcrumb-item active">Request Appointment</li>
                    </ol>
                </nav>

            <section className="section dashboard">
                <div className="row">
                
                    {/* Card Title*/}
                    <div className="card-body">
                    <h5 className="card-title">REQUEST APPOINTMENT</h5>

                    <div className="doctor-info">
                        <h1>DOCTOR INFORMATION</h1>
                        <h2>Doctor Name:</h2>
                        <h3 id="doctor-name">Pamela Rimorin Concepcion</h3>
                        <h2>Clinic Location:</h2>
                        <h3 id="clinic-location">Victoria Shoppesville, Upper Mabini Street, Baguio City, Philippines</h3>
                    </div>


                    <div className="appointment-date" id="appointment-date">

                    <form className="row g-3 needs-validation" noValidate/>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Select Appointment Date <span className="text-danger font-weight-bold">*</span></label>
                            <input data-provide="datepicker" className="form-control" id="validationCustom01" required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Reason for Consultation <span className="text-danger font-weight-bold">*</span></label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write reason here..."></textarea>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                                 </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Next</button>
                        </div>
                    </div>

                    </div> {/* End of card-body */}

                </div>
            </section>
            </main>

            <Header/>
            <Sidebar />
            <Footer />
        </div>
    )
}

export default Booking;