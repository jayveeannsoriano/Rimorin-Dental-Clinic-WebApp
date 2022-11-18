import React from "react";
import Avatar from 'react-avatar';

export default function UserProfileWidget() {
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    const fullName = userInfo['fname'] + " " + userInfo['lname'] 
    console.log(fullName)

    return (
        <div class="col-xl-4">
            <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <Avatar name={fullName} maxInitials={2} round={true} size="100" alt="Avatar" id="avatar-profile"/>
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
                </div>
            </div>
        </div>
    );
}