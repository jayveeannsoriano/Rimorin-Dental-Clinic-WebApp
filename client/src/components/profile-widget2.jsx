import React from "react";
import "react-bootstrap";
import "../styles/profilewidgettwo.css";

const ProfileWidgetTwo = () => {
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    return (

        <div class="col-xl-4">
            <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <img id="avatar-profile" src="../assets/img/messages-1.jpg" alt="Profile" class="rounded-circle" />
                    <h2 id="">{userInfo['fname'] + " " + userInfo['lname']}</h2>
                    <h3>Patient ID: <span id="">PT0001</span></h3>
                    <div className="divider"></div>
                    <div class="row patient-info">
                        <div className="col">
                            <h3>Phone</h3>
                            <p id="contact_num"> (+63) 956 793 5590 </p>
                            <h3>Age</h3>
                            <p id="age"> 24 </p>
                        </div>
                    </div>

                    {/* First half */}
                    <div class="col-xl-12">
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


                    {/* Other Half */}
                    <div class="col-xl-12">
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
    );
}

export default ProfileWidgetTwo;