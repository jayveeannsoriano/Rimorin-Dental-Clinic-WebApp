import React, { useEffect, useState,useMemo } from 'react';
import 'react-bootstrap';
import Timeslot from "../../../components/timeslot.jsx";
import "../../../styles/booking.css";
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//Axios
import axios from 'axios';
import { useSearchParams, useLocation, useNavigate } from "react-router-dom";

const FollowUpInput = ({nextStep,handleChange,handleDateChange,handleTimeChange,values}) => {

        const location = useLocation()
        const paramsID = new URLSearchParams(location.search)
        const getPatientID = paramsID.get('patientIDValue');
        const [patientUser, setPatientUser] = useState([]);
        const [patientMobile, setPatientNumber] = useState([]);
        const [patientEmail, setPatientEmail] = useState([])
        const StringfyPatientID = useMemo(() => JSON.stringify(getPatientID).replace(/"/g, ""));
        console.log(StringfyPatientID, 'FOLLOW UP ID');
        window.localStorage.setItem('patientIDNum', "PT#"+StringfyPatientID);
        window.localStorage.setItem('userName', patientUser);
        window.localStorage.setItem('userPhone', patientMobile);
        window.localStorage.setItem('userEmail', patientEmail);
  
        
    

        const getUser = async() => {
            try{
                const response = await axios.get('http://localhost:3001/getUserInfoFollowUp',{
                params: {
                    patientIDNum:"PT#"+StringfyPatientID
                }
            });
                setPatientUser(response.data[0].fname + " " + response.data[0].lname);
                setPatientNumber(response.data[0].mobile)
                setPatientEmail(response.data[0].email)
            }catch (error){
                console.log(error)
            }
        }
        useEffect(() => {
            getUser ();
        }, []);


        //calendar input
        const [startDate, setStartDate] = useState(new Date());

        //time input
        const [time, setGetTime] = useState("");

        const [chosenDate, setChosenDate] = useState("");

        const [timeCheck, setTimeCheck] = useState("")
        console.log("CURRENT TIME BOOKING",timeCheck)
        window.localStorage.setItem('time', timeCheck);

        const [takenAppointments, setTakenAppointments] = useState([]);

        console.log("CURRENT DATE BOOKING",startDate);
        window.localStorage.setItem('date', startDate);

        const navigate = useNavigate();

            //Get All appointments on date
    const getAppointmenstbyDate = async(date) => {
        try{
            
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
        nextStep();


    };

    useEffect(() => {
        var initialDate = new Date();
        getAppointmenstbyDate(initialDate.toString().substring(0, 10));
    }, []);

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
                            <h3>{patientUser}</h3>

                            <h2>Patient ID:</h2>
                            {/* Insert Patient ID */}
                            <h3>PT#{StringfyPatientID}</h3>

                            <h2>Reason for Follow Up:</h2>
                            {/* Insert Reason for Consultation */}
                            <h3>{values.consultation}</h3>
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
                                        getAppointmenstbyDate(date.toString().substring(0, 10));
                                        setTakenAppointments([]);
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
                            <Timeslot GetTimeCheck={setTimeCheck} takenAppointments={takenAppointments} chosenDate={chosenDate}/>
                        </div>
                    </div>

                    <div className="col-12 reason-form">
                            <label htmlFor="validationCustom01" className="form-label">Reason for Follow Up <span className="text-danger font-weight-bold">*</span></label>
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