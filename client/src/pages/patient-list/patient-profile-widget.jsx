import React from "react";
import "react-bootstrap";
import "../../styles/patient-profile-widget.css";

// temporary user image
import userimg from '../../assets/img/profile-img.jpg'
import { Button } from "react-bootstrap";

const PatientProfileWidget = () => {
//temporary list
const patients=['Shermax']

    return (
        <>
            <div class="col-sm-auto col-md-auto col-lg-auto col-xl-auto">		
            <div class="row">

            {/* replace 'patients' with proper get value variable */}
            {patients.map((item, index) => (
                <div key={index} class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                        <div class="card-body">
                            <div class="pro-widget-content">
                                <div class="profile-info-widget">
                                    <a href="#" class="booking-doc-img">
                                        <img src={userimg} alt="User Image"/>
                                    </a>
                                    <div class="profile-det-info">
                                        <h3><a href="#"></a>{item}</h3>
                                        
                                        <div class="patient-details">
                                            <h5><b>Patient ID :</b> P0016</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="patient-info">
                                <ul>
                                    <li>Phone <span>+1 952 001 8563</span></li>
                                    <li>Age <span>38 Years, Male</span></li>
                                </ul>
                            </div>

                            <div className="widget-button-container">
                                <Button className="widget-btn">
                                    View Patient Profile
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

export default PatientProfileWidget;