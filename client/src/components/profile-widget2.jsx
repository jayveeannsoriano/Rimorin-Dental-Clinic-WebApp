import React from "react";
import "react-bootstrap";
import "../styles/profilewidgettwo.css";

const ProfileWidgetTwo = () => {
    return (
        <div class="col-md-7 col-lg-8 col-xl-9">
            <div class="row row-grid">
                <div class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                        <div class="card-body">
                            <div class="pro-widget-content">
                                <div class="profile-info-widget">
                                    <a href="patient-profile.html" class="booking-doc-img">
                                        <img src="assets/img/patients/patient.jpg" alt="User Image" />
                                    </a>
                                    <div class="profile-det-info">
                                        <h3>Ricci Blynthe</h3>

                                        <div class="patient-details">
                                            <h5><b>Patient ID :</b> P0016</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="patient-info">
                                <ul>
                                    <li>Phone <span>+1 952 001 8563</span></li>
                                    <li>Age <span>38 Years</span></li>
                                    <br />
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileWidgetTwo;