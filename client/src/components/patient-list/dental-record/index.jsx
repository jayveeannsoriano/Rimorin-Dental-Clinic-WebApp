import React, {useState,useEffect} from "react";
import "../../../styles/patient-profile-widget.css";
import Axios from 'axios';

// temporary user image
import userimg from '../../../assets/img/profile-img.jpg';
import { Button } from "react-bootstrap";

const DentalRecordPatientProfileWidget = () => {
//temporary list
const [patientList, setPatientList] = useState([]);
const [patientIDNum, setpatientIDNum] = useState();
console.log(patientIDNum);

const getPatientDetails = async() => {
    try{
        const response = await Axios.get('http://localhost:3001/getUserDetails');
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
                                    <img src={userimg} alt="User Image"/>
                                </a>
                                <div class="profile-det-info">
                                    <h3><a href="#"></a>{item.fname} {item.lname} {item.suffix}</h3>
                                    
                                    <div class="patient-details">
                                        <h5><b>Patient ID :</b>{item.patientIDnumber}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="patient-info">
                            <ul>
                                <li>Phone <span>{item.mobile}</span></li>
                                <li>Age <span>38 Years, {item.gender}</span></li>
                            </ul>
                        </div>
                        
                        <div className="widget-button-container">
                            {/* <Button className="widget-btn" href={"/secretary/patient-records/dental-record/view-dental-records?patientIDNum=" + patientIDNum} onClick={() => proceedtoViewInfo(item.patientIDnumber)}> */}
                            <Button className="widget-btn" href="#">
                                View Dental Record
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

export default DentalRecordPatientProfileWidget;