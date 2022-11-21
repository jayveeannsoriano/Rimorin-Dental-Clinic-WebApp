import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Avatar from 'react-avatar';
import styles from '../../styles/dashboard.css'
import API from '../../config/api'
import DefaultProfile from '../../assets/img/default-profile.jpg'

function dashboardHeader(){
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    const fullName = userInfo['fname'] + " " + userInfo['lname'] 
    console.log(fullName)

    //notification data
    const [appointmentDetails, setAppointmentDetails] = useState([]);
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');

    const userRole = userInfo['user_role_id'];

    var myProfileRoute = "";
    switch (userRole) {
        case 1: 
        myProfileRoute = "/patient/userprofile";
        break;
        case 2: 
        myProfileRoute = "/secretary/userprofile";
        break;
        case 3: 
        myProfileRoute = "/dentist/userprofile";
        break;
        case 4: 
        myProfileRoute = "/admin/userprofile";
        break;
    }

    function clearSession() {
        localStorage.clear();
    }

//-------------------------------------------------------------------------
    try {
        var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    } catch (error) {
        console.error("Website error");
        console.error(error);
    }

    console.log(userInfo);

    return (
        <div>
                {/* <!-- ======= Dashboard Header ======= --> */}
                <header className="header fixed-top d-flex align-items-center">

                    {/* <!-- Search Icon --> */}
                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-center">

                        <li className="nav-item dropdown pe-3">

                        {/* <!-- Profile Image Icon --> */}
                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            <Avatar name={fullName} maxInitials={2} round={true} size="40" alt="Avatar"/>
                            <span className="d-none d-md-block dropdown-toggle ps-2">{userInfo['fname'] + " " + userInfo['lname']}</span>
                        </a>
                        {/* <!-- End Profile Image Icon --> */}

                        {/* <!-- Profile Dropdown Menu --> */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                            <h6 className="userName">{firstNameValue} {lastNameValue}</h6> 
                            </li>

                        {/* <!-- My Profile --> */}
                        <li>
                            <a className="dropdown-item d-flex align-items-center"  
                            href={myProfileRoute} >
                                <i className="bi bi-person"></i>
                                <span>My Profile</span>
                            </a>
                        </li>

                        {/* <!-- Sign Out --> */}
                        <li>
                            <a className="dropdown-item d-flex align-items-center" href="/auth/login" onClick={clearSession}>
                                <i className="bi bi-box-arrow-right"></i>
                                <span>Log Out</span>
                            </a>
                        </li>

                        </ul> {/* End Profile Dropdonwn Menu Items */}
                    </li> {/* End Profile Nav */}

                </ul>
            </nav> {/* End Icons Navigation */}
        </header>
    </div>
   )
}

export default dashboardHeader;