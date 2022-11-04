import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
// 1-admin
// 2-dentist
// 3-patient

function Sidebar_Dentist(){
    try {
        var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    } catch (error) {
        console.error("Website error");
        console.error(error);
    }
    return(
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <a href={userInfo['user_role_id']==1 ? "/dashboard" :"/dentist-dashboard" } class="logo d-flex align-items-center">
                        <img src="../../img/logo.png" alt=""/>
                        <span class="logo-text d-none d-lg-block">Rimorin Dental Clinic</span>
                    </a>
                    <div className='divider'></div>
                    <h4>MENU</h4>
                    
                    {/* Dashboard Nav */}
                      <li className="nav-item">
                        <a className="nav-link" href={userInfo['user_role_id']==1 ? "/dashboard" :"/dentist-dashboard" }>
                        <i className="fa-solid fa-table-columns"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    {/* Appointments Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" 
                        href="/dentist-dashboard/appointments" 
                        data-bs-target="#navbar">
                        <i className="fa-solid fa-stethoscope"></i>
                            <span>Appointments</span>
                        </a>
                    </li>

                    {/* Calendar Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" 
                        data-bs-target="#forms-nav"
                        href="/dentist-dashboard/calendar">
                        <i className="fa-solid fa-calendar"></i>
                            <span>Calendar</span>
                        </a>
                    </li>
                    
                    {/* Patient Records Nav/Patient Information/Dental Records */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#patient-records-nav" data-bs-toggle="collapse" href="#">
                        <i className="fa-solid fa-file-medical"></i>
                            <span>Patient Records</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul id="patient-records-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="/dentist-dashboard/patient-records/patient-info">
                                    <i className="bi bi-circle"></i><span>Patient Information</span>
                                </a>
                            </li>

                            <li>
                                <a href="/dentist-dashboard/patient-records/dental-record">
                                    <i className="bi bi-circle"></i><span>Dental Records</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* /patientrecords */}

                    {/* E-Prescription Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/dentist-dashboard/eprescription">
                        <i className="fa-solid fa-file-prescription"></i>
                            <span>E-Prescription</span>
                        </a>
                    </li>

                    {/* Payment Records Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/dentist-dashboard/payment-records">
                        <i className="fa-solid fa-file-invoice"></i>
                            <span>Payment Records</span>
                        </a>
                    </li>

                    <div className="divider"></div>

                    {/* My Profile Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/dentist-dashboard/userprofile">
                        <i className="fa-solid fa-user"></i>
                             <span>My Profile</span>
                        </a>
                    </li>

                    {/* Log Out Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href={"/auth/login"}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                            <span>Log Out</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar_Dentist;