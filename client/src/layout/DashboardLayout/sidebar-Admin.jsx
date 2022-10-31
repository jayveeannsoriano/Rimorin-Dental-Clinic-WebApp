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

                    {/* Backup and Restore Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#tables-nav" href="/patientrecords">
                            <i class="fa-solid fa-file-medical"></i>
                            <span>Backup and Restore</span>
                        </a>
                    </li>

                    <div className="divider"></div>

                    {/* My Profile Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="/dashboard/userprofile">
                        <i class="fa-solid fa-user"></i>
                             <span>My Profile</span>
                        </a>
                    </li>

                     {/* Profile Settings Nav */}
                     <li className="nav-item">
                        <a className="nav-link collapsed" href="/dashboard/userprofile">
                        <i class="fa-solid fa-user"></i>
                             <span>Profile Settings</span>
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