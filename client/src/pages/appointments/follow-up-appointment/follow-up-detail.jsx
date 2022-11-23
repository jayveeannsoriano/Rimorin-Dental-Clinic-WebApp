// SCRATCH!!!
import React from 'react';
import 'react-bootstrap';

const FollowUpDetail = ({nextStep, prevStep,handleChange,values}) => {

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    };

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return(
        <>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="/appointments">Appointments</a>
                        </li>
                        <li className="breadcrumb-item active">Follow-UpAppointment</li>
                    </ol>
                </nav>

            <section className="section dashboard">
                <div className="row">
                
                    {/* Card Title*/}
                    <div className="card-body">
                    <h5 className="appt-title">FOLLOW-UP APPOINTMENT</h5>

                    {/* Stepper */}
                    <div className="md-stepper-horizontal orange">
                        <div className="md-step">
                        <div className="md-step-circle"><span>1</span></div>
                        <div className="md-step-title">Fill-up</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                        </div>
                        <div className="md-step active">
                        <div className="md-step-circle"><span>2</span></div>
                        <div className="md-step-title">Review Appointment Details</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                        </div>
                        <div className="md-step">
                        <div className="md-step-circle"><span>3</span></div>
                        <div className="md-step-title">Done</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                        </div>
                    </div>

                    <div className="divider"></div>

        <div className="container previous-appointment-details-container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="doctor-info">
                        <h1>DOCTOR INFORMATION</h1>
                        <h2>Doctor Name:</h2>
                        <h3 id="doctor-name">Pamela Rimorin Concepcion</h3>
                        <h2>Clinic Location:</h2>
                        <h3 id="clinic-location">Victoria Shoppesville, Upper Mabini Street, Baguio City, Philippines</h3>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="doctor-info">
                        <h1>APPOINTMENT DETAILS</h1>
                        <h2>Date of Consultation</h2>
                        {JSON.stringify(window.localStorage.getItem('date')).replace(/"/g, "").substring(0,15) + " | " + window.localStorage.getItem('time')}
                        <h2>Reason for Follow Up</h2>
                          {values.consultation}
                    </div>
                </div>
            </div>
        </div>
                        
                        <div className="divider"></div>
                            <div className="doctor-info">
                                <div className="col-12">
                                    <div className="appt-bttns">
                                    <button onClick={Previous} className="btn btn-outline-secondary" type="submit">Previous</button>
                                    <button onClick={Continue} className="btn btn-primary" type="submit">Next</button>
                                    </div>
                                </div>         
                            </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FollowUpDetail;