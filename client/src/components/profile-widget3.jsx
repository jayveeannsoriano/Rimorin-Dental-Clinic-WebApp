import React, {useState,useEffect} from "react";
import "react-bootstrap";
import "../styles/profilewidgettwo.css";
import Axios from 'axios';
import Avatar from 'react-avatar';
import { Button } from "react-bootstrap";

const ProfileWidgetThree = () => {
    const [patientList, setPatientList] = useState([]);
    const [patientIDNum, setpatientIDNum] = useState();
    console.log(patientIDNum);

    const getPatientDetails = async() => {
        try{
            var url = require('url');
            var url_parts = url.parse(window.location.href, true);
            var query = url_parts.query;

            const response = await Axios.get('http://localhost:3001/getPatientInfo', {
                params: {
                    patientIDnumber: query.patientIDNum
                }
            });
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
        {patientList.map((item) => (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="card widget-profile pat-widget-profile">
                        <div class="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div class="pro-widget-content">
                                    <div class="profile-info-widget">
                                        <a href="#" class="booking-doc-img">
                                            <Avatar name={item.fname} maxInitials={2} round={true} size="70" alt="Avatar" id="avatar-profile"/>
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
                                        <li>Phone <span> (+63) {item.mobile}</span></li>
                                        <li>Age <span>{item.age}, {item.gender}</span></li>
                                    </ul>
                                </div>

                                <div className="widget-button-container">
                                    <Button className="widget-btn"> 
                                        <i class="bi bi-download"></i> Export Records
                                    </Button>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 label">Birthdate</div>
                                    <div id="birthdate" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-label">
                                        {item.bday}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 label">Address</div>
                                    <div id="address" class="col-xl-8 col-lg-8 col-md-8 col-sm-8 pr-label">
                                        {item.house} {item.brgy}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 label">ZIP Code</div>
                                    <div id="zipcode" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-label">
                                        {item.zipcode}
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 label">Email Address</div>
                                    <div id="email" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-label">
                                        {item.email}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 label">City</div>
                                    <div id="city" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-label">
                                        {item.municipality}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 label">Gender</div>
                                    <div id="gender" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-label">
                                        {item.gender}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            ))}
        </>
    );
}

export default ProfileWidgetThree;
