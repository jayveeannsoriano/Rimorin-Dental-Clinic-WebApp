import React from "react";
import Avatar from 'react-avatar';

export default function UserProfileWidget() {
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    const fullName = userInfo['fname'] + " " + userInfo['lname'] 
    console.log(fullName)

    const userRole = userInfo["user_role_id"];

    var userRoleName = "";
    switch (userRole) {
        case 1:
        userRoleName = "Patient";
          break;
        case 2:
        userRoleName = "Secretary";
          break;
        case 3:
        userRoleName = "Dentist";
          break;
        case 4:
        userRoleName = "Admin";
          break;
      }

    return (
        <div class="col-xl-4">
            <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    <Avatar name={fullName} maxInitials={2} round={true} size="100" alt="Avatar" id="avatar-profile"/>
                    <h2 id="">{userInfo['fname'] + " " + userInfo['lname']}</h2>
                    <h3>User Role: <span>{userRoleName}</span></h3>
                    <div className="divider"></div>
                    <div class="row patient-info">
                        <div className="col">
                        <h3>Phone</h3>
                            <p id="contact_num"> (+63) {userInfo['mobile']} </p>
                            <h3>Age</h3>
                            <p id="age"> {userInfo['age']} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}