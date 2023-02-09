import React, {useState, useEffect}from "react";
import "../../../../styles/patient-profile-widget.css";
import Axios from 'axios';
import Avatar from 'react-avatar';

// temporary user image
import userimg from '../../../../assets/img/profile-img.jpg';
import { Button } from "react-bootstrap";

const DentPrescriptionPatientProfileWidget = () => {
    const [patientList, setPatientList] = useState([]);
    const [patientIDNum, setpatientIDNum] = useState("");
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
    
    const proceedtoViewPres = (value) => {
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
                                            <Avatar name={item.fname} maxInitials={2} round={true} size="100" alt="Avatar" id="avatar-profile"/>
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
                                        <li>Age <span>{item.age}, {item.gender}</span></li>
                                    </ul>
                                </div>
                                
                                <div className="widget-button-container">
                                    <Button className="widget-btn" href={"/dentist/eprescription/view-eprescription?patientIDNum=" + patientIDNum} onClick={() => proceedtoViewPres(item.patientIDnumber)}>
                                        View Prescriptions
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

export default DentPrescriptionPatientProfileWidget;