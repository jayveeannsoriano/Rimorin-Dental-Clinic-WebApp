import React from 'react';
import 'react-bootstrap';

const BookingDetail = ({nextStep, prevStep,handleChange,values}) => {

    console.log(JSON.stringify(window.localStorage.getItem('date')))
    console.log(JSON.stringify(window.localStorage.getItem('time')))

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
                    <div className="doctor-info">
                        <h1>APPOINTMENT DETAILS</h1>
                        <h2>Date of Consultation</h2>
                            {JSON.stringify(window.localStorage.getItem('date')).replace(/"/g, "").substring(0,15) + " " + window.localStorage.getItem('time')}
                            <br/>
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