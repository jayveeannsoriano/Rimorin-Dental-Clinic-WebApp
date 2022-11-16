import React from 'react';
import 'react-bootstrap';
import Timeslot from "../../../components/timeslot.jsx";
import "../../../styles/booking.css";
import {useState,} from 'react';
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Axios
import Axios from 'axios';

const BookingInput = ({nextStep,handleChange,handleDateChange,handleTimeChange,values}) => {

        //user info
        try {
            var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
            var getUserName = JSON.stringify(userInfo['fname'] + " " + userInfo['lname'])
            const userNameApp = JSON.parse(getUserName)
        } catch (error) {
            console.error("Website error");
            console.error(error);
        }

        //ToS validation
        const [agree, setAgree] = useState(false);

        const tosHandler = () => {
            setAgree(!agree);
        }

        const btnHandler = () => {
            nextStep();
        }

        //calendar input
        const [startDate, setStartDate] = useState(new Date());

        //time input
        const [time, setGetTime] = useState("");

        
    const dateValue = ""+startDate;
    const stringDateValue = dateValue.toString().substring(0,10);

        //retrieve Time data from Timeslot
        const getBookingData = (data)=>{
            console.log('Retrieving Data from Booking Input: ', data)
            setGetTime(data);
            window.localStorage.setItem('time',data);
        }

        const Continue = (e) => {
        e.preventDefault();

        //adds data
        //  console.log("Inserting ",userNameApp," to the database.")
        //  console.log("Inserting ",values.date, " to the database.");
        //  console.log("Inserting ",values.consultation, " to the database.");
        //  console.log("Inserting ",values.time, " to the database.");

        //go to next modal
        nextStep();    
    };


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
                        <div className="md-step active">
                        <div className="md-step-circle"><span>1</span></div>
                        <div className="md-step-title">Fill-up</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                        </div>
                        <div className="md-step">
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
                        <button onClick={() => DisableTimeslot()}>TEST BUTTON</button>
                    </div>

                    {/* Booking deets */}
                    <div className="appointment-form" id="appointment-form">

                    <form className="row g-3 needs-validation" noValidate/>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Select Appointment Date <span className="text-danger font-weight-bold">*</span></label>

                            <DatePicker 
                            selected={startDate} 
                            onChange={(date) => {
                                setStartDate(date);
                                window.localStorage.setItem('date',startDate);
                                console.log("This is the calendar data:", date)
                            }}
                            isClearable
                            placeholderText="Choose a date"
                            minDate={new Date()}
                            shouldCloseOnSelect={false}
                            
                            //exclude sundays
                            filterDate={date => date.getDay() !== 7 && date.getDay() !== 0}
                            />

                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Select Time for Appointment <span className="text-danger font-weight-bold">*</span></label>
                            <p> Available Times </p>
                            <Timeslot onSubmit={getBookingData} dateSelected={stringDateValue}/>
                        </div>
                    </div>

                        <div className="col-12 reason-form">
                            <label htmlFor="validationCustom01" className="form-label">Reason for Consultation <span className="text-danger font-weight-bold">*</span></label>
                            <textarea className="form-control" 
                            value={values.consultation} 
                            onChange= {handleChange('consultation')} 
                                id="reason" rows="5" placeholder="Write reason here..."></textarea>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                {/* <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/> */}
                                <input className="form-check-input" type="checkbox" value="" id="agree" onChange={tosHandler} required/>
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    Agree to the <a href="/terms-of-use">Terms of Use.</a>
                                </label>
                                <div className="invalid-feedback">
                                    You must agree before proceeding.
                                 </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="appt-bttns">
                            <a href='/appointments'><button className="btn btn-outline-secondary" type="submit">Cancel</button></a>
                            <button disabled={!agree} onClick={Continue} className="btn btn-primary" type="submit">Next</button>
                            </div>
                        </div>

                    </div> {/* End of card-body */}

                </div>
            </section>

        </>
    )
}

export default BookingInput;