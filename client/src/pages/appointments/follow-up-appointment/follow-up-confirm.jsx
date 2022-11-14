import React from 'react';
import style from "../../../styles/booking.css";
import 'react-bootstrap';
import Timeslot from "../../../components/timeslot.jsx";
import Axios from 'axios';

// import Stepper from 'bs-stepper'


const BookingConfirm = ({nextStep, prevStep, values}) => {
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    var date = window.localStorage.getItem('date');
    var time = window.localStorage.getItem('time');
    var getUserName = JSON.stringify(userInfo['fname'] + " " + userInfo['lname'])
    const userNameApp = JSON.parse(getUserName)
    const patientIDnumber = userInfo['patientIDnumber'];
    console.log(values);

    const Continue = (e) => {
        e.preventDefault();
        nextStep();
    };

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    //insert data
    Axios.post("http://localhost:3001/insertAppointment", {patientIDnumber: patientIDnumber, userNameApp: userNameApp, startDate: date, consulInput: values.consultation, getTime:time, recep:userInfo['email']})

    fetch("https://cors-anywhere.herokuapp.com/https://api.movider.co/v1/sms", {
        body: "api_key=9rcBz4qgXLHOeilJ7OQwGFvlW8H3-X&api_secret=9bW6Qe6tNi4jyJ0a5RfzuqYS_oZqIA&to="+userInfo['mobile']+ "&text= Hi "+userInfo['fname']+"! This is from Rimorin Dental Clinic notifying you of your requested Appointment at "+date+" "+time+" due to '" + values.consultation + "'. See you there!",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin" : "http://localhost:3001/"
        },
        method: "POST"
    })
    
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
                        <div className="md-step">
                        <div className="md-step-circle"><span>1</span></div>
                        <div className="md-step-title">Fill-up</div>
                        <div className="md-step-bar-left"></div>
                        <div className="md-step-bar-right"></div>
                        </div>
                        <div className="md-step ">
                        <div className="md-step-circle"><span>2</span></div>
                        <div className="md-step-title">Review Appointment Details</div>
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
                        <img src={"../../../../img/done-img.png"}/>
                    </div>

                    <div className="stepdoneconfirm">
                    <h2> FOLLOW-UP APPOINTMENT CREATED!</h2>
                    <p> Paitient will receive notification via email and SMS regarding the appointment.  </p>   
                    </div>

                    <div className="stepdonebtn">
                    <a href='/dentist'><button className="btn btn-primary" type="submit">Back to Dashboard</button></a>
                    </div>
        
                    </div> {/* End of card-body */}
                </div> 
            </section>
        </>
    )
}

export default BookingConfirm;