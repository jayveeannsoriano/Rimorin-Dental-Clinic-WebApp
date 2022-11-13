import React from "react";
import "react-bootstrap";
import "../../styles/patient-profile-widget.css";

// temporary user image
import userimg from '../../assets/img/profile-img.jpg'

const PatientProfileWidget = () => {
    
//temporary list
const patients={
    "fname": "Shermax",
    "lname": "Balaoing",
    "patID": "1234",
    "phone": "09567935586",
    "age": "22"
}

    return (
        <>
            <div class="col-xl-4">
            <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <img id="avatar-profile" src={userimg} alt="Profile" class="rounded-circle" />
                    <h2>{patients['fname'] + " " + patients['lname']}</h2>
                    <h3>Patient ID:<span>{patients['patID']}</span></h3>
                    <div className="divider"></div>
                    <div class="row patient-info">
                        <div className="col">
                            <h3>Phone</h3>
                                <p> {patients['phone']} </p>
                            <h3>Age</h3>
                                <p> {patients['age']} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PatientProfileWidget;