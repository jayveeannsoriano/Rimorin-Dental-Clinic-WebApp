import React from 'react';
import Header from "../components/dashboard-header.jsx";
import Sidebar from "../components/sidebar.jsx";
import style from "../styles/booking.css";
import 'react-bootstrap';
import Timeslot from "../components/timeslot.jsx";
import '../js/booking.js';
// import Stepper from 'bs-stepper'


const BookingConfirm = ({nextStep, prevStep}) => {
    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    };

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }
    
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
                    <h5 className="appt-title">REQUEST APPOINTMENT</h5>

                    {/* Stepper */}
                    <div className="md-stepper-horizontal orange">
                        <div className="md-step">
                        <div className="md-step-circle"><span>1</span></div>
                        <div className="md-step-title">Fill-up</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                        </div>
                        <div className="md-step ">
                        <div className="md-step-circle"><span>2</span></div>
                        <div className="md-step-title">Review Appointment Details</div>
                        {/* <div className="md-step-optional">Optional</div> */}
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                        </div>
                        <div className="md-step active">
                        <div className="md-step-circle"><span>3</span></div>
                        <div className="md-step-title">Done</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                        </div>
                    </div>

                    <div className="divider"></div>
                    
                    {/* Image */}
                    <div className="stepdone">
                        <img src={"./img/done-img.png"}/>
                    </div>

                    <div className="stepdoneconfirm">
                    <h2> APPOINTMENT REQUEST SENT!</h2>
                    <p> You will receive notification via email and SMS regarding your status. For inquiries, please contact us. </p>   
                    </div>

                    <div className="stepdonebtn">
                    <a href='/dashboard'><button className="btn btn-primary" type="submit">Back to Dashboard</button></a>
                    </div>
        
                    </div> {/* End of card-body */}
                </div> 
            </section>
            </main>

            <Header/>
            <Sidebar />

        </div>
    )
}

export default BookingConfirm;