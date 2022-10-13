import React from 'react';
import '../App.css';
import style from '../App.css';

function Sidebar(){
    return(
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <a href="/dashboard" class="logo d-flex align-items-center">
                        <img src="./img/logo.png" alt=""/>
                        <span class="logo-text d-none d-lg-block">Rimorin Dental Clinic</span>
                    </a>
                    <div className='divider'></div>
                    <h4>MENU</h4>

                    {/* Dashboard Nav */}
                      <li className="nav-item">
                        <a className="nav-link" href="/dashboard">
                        <i className="fa-solid fa-table-columns"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    {/* Appointments Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/appointments" data-bs-target="#navbar">
                        <i className="fa-solid fa-stethoscope"></i>
                            <span>Appointments</span>
                        </a>
                    </li>

                    {/* Calendar Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" href="/calendar">
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
                                <a href="/patientinfo">
                                    <i className="bi bi-circle"></i><span>Patient Information</span>
                                </a>
                            </li>

                            <li>
                                <a href="/dentalrecords">
                                    <i className="bi bi-circle"></i><span>Dental Records</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* /patientrecords */}

                    {/* E-Prescription Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/eprescription">
                        <i className="fa-solid fa-file-prescription"></i>
                            <span>E-Prescription</span>
                        </a>
                    </li>

                    {/* Paymnent Records Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/paymentrecords">
                        <i className="fa-solid fa-file-invoice"></i>
                            <span>Payment Records</span>
                        </a>
                    </li>

                    <div className="divider"></div>

                    {/* My Profile Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/userprofile">
                        <i className="fa-solid fa-user"></i>
                             <span>My Profile</span>
                        </a>
                    </li>

                    {/* Log Out Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href={"/login"}>
                        <i className="fa-solid fa-right-from-bracket"></i>
                            <span>Log Out</span>
                        </a>
                    </li>

                </ul>
            </aside>
        </div>
    )
}

export default Sidebar;