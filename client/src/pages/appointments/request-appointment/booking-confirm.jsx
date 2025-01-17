import React, { useEffect, useState } from "react";
import style from "../../../styles/booking.css";
import 'react-bootstrap';
import Axios from 'axios';


const BookingConfirm = ({values}) => {
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    var date = window.localStorage.getItem('date');
    var time = window.localStorage.getItem('time');
    var dentistDetails = window.localStorage.getItem('doctorName');
    var getUserName = JSON.stringify(userInfo['fname'] + " " + userInfo['lname'])
    const userNameApp = JSON.parse(getUserName)
    const patientIDnumber = userInfo['patientIDnumber'];
    var retrievedObject = localStorage.getItem('totalProcedure');
    var totalProcedures = JSON.parse(retrievedObject)
    var formattedDate = window.localStorage.getItem('formattedDate');
    console.log(values);
  
    //insert data
    Axios.post(
      "https://rimorin-dental-clinic.herokuapp.com/insertAppointment",
      {
        patientIDnumber: patientIDnumber,
        userNameApp: userNameApp,
        startDate: date,
        formattedDate: formattedDate,
        docName: dentistDetails,
        docIDnum: values.doctor,
        consulInput: values.consultation,
        getTime: time,
        procedures: totalProcedures,
        recep: userInfo["email"],
      }
    );

    const procedureNames = [];

    totalProcedures.forEach((item) => {
      if (item.chosen.length > 0) {
        item.chosen.forEach((chosenProcedure) => {
          procedureNames.push(chosenProcedure.procedure);
        });
      }
    });

    const message =
      "Hi " +
      userInfo["fname"] +
      "! This is from Rimorin Dental Clinic notifying you of your requested Appointment on " +
      date +
      " at " +
      time +
      " with Dr. " +
      dentistDetails +
      " for the following procedure/s:\n" +
      procedureNames.join("\n") +
      " \nPlease wait for the clinic's approval of your appointment request. Thank you!";

    Axios.post("https://rimorin-dental-clinic.herokuapp.com/sendSMS", {
      phone: userInfo["mobile"],
      message: message,
    });
    
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
                    <h2> APPOINTMENT REQUEST SENT!</h2>
                    <p> You will receive notification via email and SMS regarding your status. For inquiries, please contact us. </p>   
                    </div>

                    <div className="stepdonebtn">
                    <a href='/patient'><button className="btn btn-primary" type="submit">Back to Dashboard</button></a>
                    </div>
        
                    </div> {/* End of card-body */}
                </div> 
            </section>
        </>
    )
}

export default BookingConfirm;