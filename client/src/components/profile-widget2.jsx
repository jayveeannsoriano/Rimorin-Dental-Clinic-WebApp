import React from "react";
import "react-bootstrap";
import "../styles/profilewidgettwo.css";

// temporary user image
import userimg from '../assets/img/profile-img.jpg';

const ProfileWidgetTwo = () => {
    return (
        <>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <div className="card widget-profile pat-widget-profile">
                            <div class="row">
                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                    <div class="pro-widget-content">
                                        <div class="profile-info-widget">
                                            <a href="#" class="booking-doc-img">
                                                <img src={userimg} alt="User Image"/>
                                            </a>
                                            <div class="profile-det-info">
                                                <h3><a href="#"></a>Ten Lee</h3>
                                                
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
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div class="row">
                                                <div class="col-lg-auto col-md-auto label">Birthdate</div>
                                                <div id="birthdate" class="col-lg-auto col-md-auto">
                                                    01/01/1998
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-auto col-md-auto label">Address</div>
                                                <div id="address" class="col-lg-auto col-md-auto">
                                                    Block4 Rivera Seth
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-auto col-md-auto label">ZIP Code</div>
                                                <div id="country" class="col-lg-auto col-md-auto">
                                                    2400
                                                </div>
                                            </div>
                                </div>

                                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div class="row">
                                                <div class="col-lg-auto col-md-auto label">Email Address</div>
                                                <div id="emailaddress" class="col-lg-auto col-md-auto">
                                                    1234@email.com
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-auto col-md-auto label">City</div>
                                                <div id="city" class="col-lg-auto col-md-auto">
                                                    Diaz City
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-auto col-md-auto label">Gender</div>
                                                <div id="gender" class="col-lg-auto col-md-auto">
                                                    Female
                                                </div>
                                            </div>
                                </div>
                            </div>
                        </div>
                </div>
        </>
    );
}

export default ProfileWidgetTwo;
