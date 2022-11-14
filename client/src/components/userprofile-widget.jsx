import React from "react";
import DefaultProfile from '../assets/img/default-profile.jpg'
import { getRandomColor, createImageFromInitials } from './Utils';

export default function UserProfileWidget() {
    let name = {};
    let imgSrc = {};
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));

    return (
        <div class="col-xl-4">
            <div class="card">
                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                    {/* <img id="avatar-profile" src={DefaultProfile} alt="Profile" class="rounded-circle" /> */}
                    <img id='preview' src={imgSrc.length <= 0 ? createImageFromInitials(500, name, getRandomColor()) : imgSrc} alt='profile-pic'/>
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