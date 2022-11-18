import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styles from '../../styles/dashboard.css'
import API from '../../config/api'
import DefaultProfile from '../../assets/img/default-profile.jpg'

function dashboardHeader(){
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));

    //notification data
    const [appointmentDetails, setAppointmentDetails] = useState([]);
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const patientIDNumber = userInfo['patientIDnumber'];

    const getAppointment = async() => {
        try{
            const response = await Axios.get('http://localhost:3001/getNotifDetails', {
                params: {patientIDnumber: patientIDNumber}})
            setAppointmentDetails(response.data);
            setFirstNameValue(response.data[0].fname)
            setLastNameValue(response.data[0].lname)

        }catch (error){
            console.log(error)
        }
    }

    function clearSession() {
        localStorage.clear();
    }

    useEffect(() => {
        getAppointment();
    }, []);

const count = appointmentDetails.length;
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

                    {/* <div className="d-flex align-items-center justify-content-between">
                            <a href="index.html" className="logo d-flex align-items-center">
                                <img src="assets/img/logo.png" alt=""/>
                                <span className="d-none d-lg-block">Rimorin Dental Clinic</span>
                            </a>
                        <i className="bi bi-list toggle-sidebar-btn"></i>
                    </div>  */}
                    {/* <!-- End Logo --> */}


                    {/* <!-- Search Icon --> */}
                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-center">


                        {/* <!-- Notification Icon --> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            <i className="fa-solid fa-bell"></i>
                                <span className="badge badge-number">{ count }</span>
                            </a>
                    

                        {/* <!-- Notification Dropdown --> */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">

                        <li className="dropdown-header">
                                You have {count} notifications
                        </li>

                        {appointmentDetails.map((item, index) => (
                            <div key={index} class="notification-item">
                                <div class="profile-det-info">
                                    {/* <p>{item.dName} created you an appointment on {item.date} at {item.time}</p> */}
                                    {/* <p><span>{item.dName}</span> created you an appointment on <span>{item.date}</span> at <span>{item.time}</span></p> */}
                                    { item ? <p><span>{item.dName}</span> accepted your appointment on <span>{item.date}</span> at <span>{item.time}</span></p> : <> no notifications available </> } 
                                </div>
                            </div>
                        ))}
                        

                        </ul>
                        {/* <!-- End Notification Dropdown Items --> */}

                        </li>
                        {/* <!-- End Notification Nav --> */}

                        <li className="nav-item dropdown pe-3">

                        {/* <!-- Profile Image Icon --> */}
                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            <img src={DefaultProfile} alt="Profile" className="rounded-circle"/>
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
                            <a className="dropdown-item d-flex align-items-center"  href="/dashboard/userprofile">
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