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

const FollowUpInput = ({nextStep,handleChange,handleDateChange,handleTimeChange,values}) => {

        //user info
        try {
            var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
            var getUserName = JSON.stringify(userInfo['fname'] + " " + userInfo['lname'])
            const userNameApp = JSON.parse(getUserName)
        } catch (error) {
            console.error("Website error");
            console.error(error);
        }

        //calendar input
        const [startDate, setStartDate] = useState(new Date());

        //time input
        const [time, setGetTime] = useState("");

        //retrieve Time data from Timeslot
        const getBookingData = (data)=>{
            console.log('Retrieving Data from Booking Input: ', data)
            // handleTimeChange(data);
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
                        <li className="breadcrumb-item active">Follow-Up Appointment</li>
                    </ol>
                </nav>

            <section className="section dashboard">
                <div className="row">
                
                    {/* Card Title*/}
                    <div className="card-body">
                    <h5 className="appt-title">FOLLOW-UP APPOINTMENT</h5>

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
                            <h1>PATIENT DETAILS</h1>
                            <h2>Patient Name:</h2>
                            {/* Insert Patient Name */}
                            <h3>Shermax Swift</h3>

                            <h2>Patient ID:</h2>
                            {/* Insert Patient ID */}
                            <h3>#P0143</h3>

                            <h2>Reason for Consultaion:</h2>
                            {/* Insert Reason for Consultation */}
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        </div>
                    </div>

                    <div className='col-lg-6 col-md-6 col-sm-6'>
                        <div className="doctor-info">
                            <h1>DOCTOR INFORMATION</h1>
                            <h2>Doctor Name:</h2>
                            {/* Insert Appointed Doctor from previous appt */}
                            <h3>Pamela Rimorin Concepcion</h3>

                            <h2>Clinic Location:</h2>
                            <h3>Victoria Shoppesville, Upper Mabini Street, Baguio City, Philippines</h3>
                        </div>
                    </div>
                </div>
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
                                console.log("This is the calendar data:", date)
                                window.localStorage.setItem('date',date);
                            }}
                            isClearable
                            placeholderText="Choose a date"
                            minDate={new Date()}
                            shouldCloseOnSelect={false}
                            dateFormat="MMMM d, yyyy"
                            //exclude sundays
                            filterDate={date => date.getDay() !== 7 && date.getDay() !== 0}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Select Time for Appointment <span className="text-danger font-weight-bold">*</span></label>
                            <p> Available Times </p>
                            <Timeslot onSubmit={getBookingData}/>
                        </div>
                    </div>

                        <div className="col-12">
                            <div className="appt-bttns">
                            <a href='/dentist'><button className="btn btn-outline-secondary" type="submit">Cancel</button></a>
                            <button onClick={Continue} className="btn btn-primary" type="submit">Next</button>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}

export default FollowUpInput;