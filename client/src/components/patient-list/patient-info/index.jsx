import React, {useState,useEffect} from "react";
import "../../../styles/patient-profile-widget.css";
import Axios from 'axios';
import Avatar from 'react-avatar';
import { Button } from "react-bootstrap";

const PatientInfoPatientProfileWidget = () => {
    
const [patientList, setPatientList] = useState([]);
const [patientIDNum, setpatientIDNum] = useState();
console.log(patientIDNum);

const getPatientDetails = async() => {
    try{
        const response = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserDetails');
        console.log(response, "Responses");
        setPatientList(response.data);
    }catch (error){
        console.log(error)
    }
}

useEffect(() => {
    getPatientDetails ();
}, []);

const proceedtoViewInfo = (value) => {
    setpatientIDNum(value.substring(3));
}

var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
const userRole = userInfo['user_role_id'];

var patientInfoRoute = "";
switch (userRole) {
    case 2: 
    patientInfoRoute = "/secretary/patient-records/patient-info/view-patient-info?patientIDNum=";
    break;
    case 3: 
    patientInfoRoute= "/dentist/patient-records/patient-info/view-patient-info?patientIDNum=";
    break;
    case 4: 
    patientInfoRoute= "/admin/patient-records/patient-info/view-patient-info?patientIDNum=";
    break;
}

    return (
        <>
            <div class="col-sm-auto col-md-auto col-lg-auto col-xl-auto">		
            <div class="row">

            {/* replace 'patients' with proper get value variable */}
            {patientList.map((item, index) => (
                <div key={index} class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                        <div class="card-body">
                            <div class="pro-widget-content">
                                <div class="profile-info-widget">
                                    <a href="#" class="booking-doc-img">
                                        <Avatar name={item.fname} maxInitials={2} round={true} size="100" alt="Avatar" id="avatar-profile"/>
                                    </a>
                                    <div class="profile-det-info">
                                        <h3><a href="#"></a>{item.fname} {item.lname} {item.suffix}</h3>

                                        <div class="patient-details">
                                            <h5><b>Patient ID: </b> {item.patientIDnumber}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="patient-info">
                                <ul>
                                    <li>Phone <span>{item.mobile}</span></li>
                                    <li>Age <span>{item.age}, {item.gender}</span></li>
                                </ul>
                            </div>
                            
                            <div className="widget-button-container">
                                <Button className="widget-btn" href={patientInfoRoute + patientIDNum} onClick={() => proceedtoViewInfo(item.patientIDnumber)}>
                                    View Patient Information
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>              
                ))} 
            </div> 
        </div> 
        </>
    )
}

export default PatientInfoPatientProfileWidget;