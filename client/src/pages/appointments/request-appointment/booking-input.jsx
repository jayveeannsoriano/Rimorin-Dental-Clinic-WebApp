// SCRATCH!!!
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

const BookingInput = ({nextStep,handleChange}) => {

        //user info
        var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
        var getUserName = JSON.stringify(userInfo['fname'] + " " + userInfo['lname'])
        const userNameApp = JSON.parse(getUserName)

        //appointment details
        var arr = [];
        while(arr.length < 8){
        var r = Math.floor(Math.random() * 1000) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
        }

        //calendar input
        const [startDate, setStartDate] = useState(new Date());

        //reasonforconsultation input
        const [consulInput, setConsulInput] = useState("");
    
        //time input
        const [getTime, setGetTime] = useState("");

        //retrieve Time data from Timeslot
        const getBookingData = (data)=>{
            console.log('Retrieving Data from Booking Input: ', data)
            setGetTime(data);
        }

        const Continue = (e) => {
        e.preventDefault();

        //adds data
         console.log("Inserting ",userNameApp," to the database.")
         console.log("Inserting ",startDate, " to the database.");
         console.log("Inserting ",consulInput, " to the database.");
         console.log("Inserting ",getTime, " to the database.");
         

         //insert data
         Axios.post("http://localhost:3001/insertAppointment", {userNameApp: userNameApp, startDate: startDate, consulInput: consulInput, getTime:getTime})

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
                    </div>

                    {/* Booking deets */}
                    <div className="appointment-form" id="appointment-form">

                    <form className="row g-3 needs-validation" noValidate/>
                        <div className="col-md-4">
                            <label htmlFor="validationCustom01" className="form-label">Select Appointment Date <span className="text-danger font-weight-bold">*</span></label>
                            {/* New Calendar from https://reactdatepicker.com/#example-default */}
                            <DatePicker 
                            selected={startDate} 
                            onChange={(date) => {
                                setStartDate(date);
                                console.log("This is the calendar data:", date)
                            }}
                            isClearable
                            placeholderText="Choose a date"
                            minDate={new Date()}
                            shouldCloseOnSelect={false}
                            withPortal
                            />

                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="validationCustom01" className="form-label">Select Time for Appointment <span className="text-danger font-weight-bold">*</span></label>
                            <p> Available Times </p>
                            <Timeslot onSubmit={getBookingData}/>
                        </div>
                    </div>

                        <div className="col-12 reason-form">
                            <label htmlFor="validationCustom01" className="form-label">Reason for Consultation <span className="text-danger font-weight-bold">*</span></label>
                            <textarea className="form-control" 
                            value={consulInput} 
                            onChange= {(e) => {
                                setConsulInput(e.target.value); 
                                console.log(consulInput);
                                }} 
                                id="reason" rows="5" placeholder="Write reason here..."></textarea>
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
                            <a href='/appointments'><button className="btn btn-outline-secondary" type="submit">Cancel</button></a>
                            <button onClick={Continue} className="btn btn-primary" type="submit">Next</button>
                            </div>
                        </div>

                        {/* Review Appointment Details */}

                        <div id="review-details" className="review-details">
                            
                        </div>

                    </div> {/* End of card-body */}

                </div>
            </section>

        </>
    )
}

export default BookingInput;