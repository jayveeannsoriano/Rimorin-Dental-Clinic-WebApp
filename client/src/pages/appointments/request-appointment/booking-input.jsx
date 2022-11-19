import  React, { useEffect, useState } from 'react';
import 'react-bootstrap';
import Timeslot from "../../../components/timeslot.jsx";
import "../../../styles/booking.css";
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Axios
import axios from 'axios';
//useNavigate (retains previous data)
import {useNavigate} from 'react-router-dom';

const BookingInput = ({ nextStep, handleChange, handleDateChange, handleTimeChange, values }) => {

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

    const [Stringdate, setStringDate] = useState("");

    const [chosenDate, setChosenDate] = useState("");

    const [takenAppointments, setTakenAppointments] = useState([]);
    const [loaded, setLoaded] = useState(false);

    //useNavigate
    const navigate = useNavigate();

    //time input
    const [time, setGetTime] = useState("");


    const dateValue = "" + startDate;
    const stringDateValue = dateValue.toString().substring(0, 10);

    //retrieve Time data from Timeslot
    const getBookingData = (data) => {
        console.log('Retrieving Data from Booking Input: ', data)
        setGetTime(data);
        window.localStorage.setItem('time', data);
    }
    
    //Get All appointments on date
    const getAppointmenstbyDate = async(date) => {
        try{
            console.log(date);
            setChosenDate(date);
            const response = await axios.get('http://localhost:3001/getAppointmentsbyDate',{
                params:{
                    date: date
                }
            })

            var data = response.data
            var tempArr = [];
            data.forEach(appt => {
                tempArr.push(appt.time);
            });
            setTakenAppointments(tempArr);
       
        }catch (error){
            console.log(error)
        }
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


    useEffect(() => {
        var initialDate = new Date();
        getAppointmenstbyDate(initialDate.toString().substring(0, 10));
    }, []);

    return (

        <>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item" onClick={() => navigate(-1)} >
                        Appointments
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
                        <form onSubmit={Continue}>
                        <div className="appointment-form" id="appointment-form">

                            {/* <form className="row g-3 needs-validation" /> */}
                            <div className="col-md-4">
                                <label htmlFor="validationCustom01" className="form-label">Select Appointment Date <span className="text-danger font-weight-bold">*</span></label>

                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => {
                                        setStartDate(date);
                                        getAppointmenstbyDate(date.toString().substring(0, 10));
                                        setTakenAppointments([]);
                                        window.localStorage.setItem('date', startDate);
                                    }}
                                    isClearable
                                    placeholderText="Choose a date"
                                    minDate={new Date()}
                                    shouldCloseOnSelect={false}
                                    //exclude sundays
                                    filterDate={date => date.getDay() !== 7 && date.getDay() !== 0}
                                    required
                                />

                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                            </div>

                            <div className="col-md-6">
                                <label htmlFor="validationCustom01" className="form-label">Select Time for Appointment <span className="text-danger font-weight-bold">*</span></label>
                                <p> Available Times </p>
                                <Timeslot onSubmit={getBookingData} takenAppointments={takenAppointments} chosenDate={chosenDate}/>
                                
                                {/* {takenAppointments.length && <Timeslot onSubmit={getBookingData} takenAppointments={takenAppointments}/>} */}

                            </div>
                        </div>

                        <div className="col-12 reason-form">
                            <label htmlFor="validationCustom01" className="form-label">Reason for Consultation <span className="text-danger font-weight-bold">*</span></label>
                            <textarea
                                className="form-control"
                                value={values.consultation}
                                onChange={handleChange('consultation')}
                                id="reason" rows="5" placeholder="Write reason here..." required ></textarea>
                            <div className="valid-feedback">
                                Looks good!
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                                {/* <input className="form-check-input" type="checkbox" value="" id="agree" onChange={tosHandler} required /> */}
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
                                <button className="btn btn-outline-secondary" type="submit" onClick={() => navigate(-1)} >Cancel</button>
                                <button  className="btn btn-primary" type="submit">Next</button>
                            </div>
                        </div>
                        </form>

                    </div> {/* End of card-body */}

                </div>
            </section>

        </>
    )
}

export default BookingInput;