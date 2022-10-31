import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
// 1-admin
// 2-dentist
// 3-patient

function Sidebar_Admin(){
    return(
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <a href="/dashboard" class="logo d-flex align-items-center">
                        <img src="../../img/logo.png" alt=""/>
                        <span class="logo-text d-none d-lg-block">Rimorin Dental Clinic</span>
                    </a>
                    <div className='divider'></div>
                    <h4>ADMIN MENU</h4>

                
                    {/* Appointments Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" bs-toggle="collapsed" href="/appointments" id="appointment-button">
                        <i class="fa-solid fa-stethoscope"></i>
                        <span data-bs-target="#components-nav">Appointments</span>
                        </a>
                    </li>

                     {/* Appointments Nav */}
                     <li className="nav-item">
                        <a className="nav-link collapsed" bs-toggle="collapsed" href="/appointments" id="appointment-button">
                        <i class="fa-solid fa-stethoscope"></i>
                        <span data-bs-target="#components-nav">Clinic Hours</span>
                        </a>
                    </li>

                    {/* Calendar Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav"  href="/dentistcalendar">
                        <i class="fa-solid fa-calendar"></i>
                            <span>Calendar</span>
                        </a>
                    </li>

                    {/* Patients Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#tables-nav" href="/patientrecords">
                            <i class="fa-solid fa-file-medical"></i>
                            <span>Patients</span>
                        </a>
                    </li>

                    {/* Patient Records Nav/Patient Information/Dental Records */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#patient-records-nav" data-bs-toggle="collapse" href="#">
                        <i class="fa-solid fa-file-medical"></i>
                            <span>Patient Records</span>
                            <i class="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul id="patient-records-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="/patientrecords">
                                    <i class="bi bi-circle"></i><span>Patient Information</span>
                                </a>
                            </li>

                            <li>
                                <a href="/dentalrecords">
                                    <i class="bi bi-circle"></i><span>Dental Records</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* /patientrecords */}

                    {/* E-Prescription Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/eprescription">
                        <i class="fa-solid fa-file-prescription"></i>
                            <span>E-Prescription</span>
                        </a>
                    </li>

                    {/* Paymnent Records Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/paymentrecords">
                        <i class="fa-solid fa-file-invoice"></i>
                            <span>Payment Records</span>
                        </a>
                    </li>

                    <div className="divider"></div>

                    {/* My Profile Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/userprofile">
                        <i class="fa-solid fa-user"></i>
                             <span>My Profile</span>
                        </a>
                    </li>

                    {/* Log Out Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/logout">
                        <i class="fa-solid fa-right-from-bracket"></i>
                            <span>Log Out</span>
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default Sidebar_Admin;