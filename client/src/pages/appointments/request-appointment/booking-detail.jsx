// SCRATCH!!!
import React from 'react';
import 'react-bootstrap';

const BookingDetail = ({nextStep, prevStep,handleChange,values}) => {
    console.log(values);
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
                        <div className="md-step active">
                        <div className="md-step-circle"><span>2</span></div>
                        <div className="md-step-title">Review Appointment Details</div>
                        {/* <div className="md-step-optional">Optional</div> */}
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

                    <div className="doctor-info">
                        <h1>DOCTOR INFORMATION</h1>
                        <h2>Doctor Name:</h2>
                        <h3 id="doctor-name">Pamela Rimorin Concepcion</h3>
                        <h2>Clinic Location:</h2>
                        <h3 id="clinic-location">Victoria Shoppesville, Upper Mabini Street, Baguio City, Philippines</h3>
                    </div>

                    {/* Booking deets */}
                    {/* <div className="appointment-form" id="appointment-form">

                    <form className="row g-3 needs-validation" noValidate/>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Select Appointment Date <span className="text-danger font-weight-bold">*</span></label>
                            <input type="date" className="form-control" id="appointment-date" required/>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Select Time for Appointment <span className="text-danger font-weight-bold">*</span></label>
                            <p> Available Times </p>
                            <Timeslot/>
                        </div>
                    </div>

                        <div className="col-12 reason-form">
                            <label htmlFor="validationCustom01" className="form-label">Reason for Consultation <span className="text-danger font-weight-bold">*</span></label>
                            <textarea className="form-control" id="reason" rows="5" placeholder="Write reason here..."></textarea>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Agree to the <a href="/">Terms and Conditions.</a>
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before proceeding.
                                 </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="appt-bttns">
                            <button onClick={Previous} className="btn btn-outline-secondary" type="submit">Previous</button>
                            <button onClick={Continue} className="btn btn-primary" type="submit">Next</button>
                            </div>
                        </div> */}

                        {/* Review Appointment Details */}

                        
                        {/* <div id="review-details" className="review-details">
                            <h1>APPOINTMENT DETAILS</h1>

                        </div> */}

                    <div className="doctor-info">
                        <h1>APPOINTMENT DETAILS</h1>
                        <h2>Date of Consultation</h2>
                            {window.localStorage.getItem('date') + " " + window.localStorage.getItem('time')}
                        <h2>Reason for Consultation</h2>
                            {values.consultation}
                    </div>
                        
                        <div className="divider"></div>
                            <div className="doctor-info">
                            <h1>Notes to Patient:</h1>
                                <ol>
                                    <li>The information above will be sent to dentist.</li>
                                    <li>You will receive a notification containing the clinic’s response, including other reminders. Please check your Spam mailbox as well.</li>
                                    <li>Wait for the dentist’s approval of your appointment request.</li>
                                    <li>In the event that you could not come to your appointment, immediately rebook/contact the dentist.</li>
                                    <li>If there is a conflict with your appointment, the dentist will notify and reschedule you at the earliest time of your convenience.</li>
                                </ol>
                                <div className="col-12">
                                    <div className="appt-bttns">
                                    <button onClick={Previous} className="btn btn-outline-secondary" type="submit">Previous</button>
                                    <button onClick={Continue} className="btn btn-primary" type="submit">Next</button>
                                    </div>
                                </div>         
                            </div>

                    </div> {/* End of card-body */}

                </div>
            </section>
        </>
    )
}

export default BookingDetail;