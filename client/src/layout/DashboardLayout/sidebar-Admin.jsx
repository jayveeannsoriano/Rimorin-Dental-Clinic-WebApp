import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
// 1-admin
// 2-dentist
// 3-patient

function Sidebar_Admin(){
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
    return(
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <a href="/dashboard" class="logo d-flex align-items-center">
                        <img src="../../img/logo.png" alt=""/>
                        <span class="logo-text d-none d-lg-block">Rimorin Dental Clinic</span>
                    </a>
                    <div className='divider'></div>
                    <h4>DENTIST MENU</h4>

                    {/* Dashboard Nav */}
                    <li className="nav-item">
                        <a className="nav-link" href={userInfo['user_role_id']==1 ? "/dashboard" :"/dentist-dashboard" }>
                        <i className="fa-solid fa-table-columns"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    {/* Appointments Nav */}
                    {/* <li className="nav-item">
                        <a className="nav-link collapsed" 
                        href="/admin/appointments">
                        <i class="fa-solid fa-stethoscope"></i>
                        <span>Appointments</span>
                        </a>
                    </li> */}

                     {/* Clinic Hours Nav */}
                     <li className="nav-item">
                        <a className="nav-link collapsed" 
                        bs-toggle="collapsed" 
                        href="/admin/clinic-hours">
                        <i class="fa-solid fa-stethoscope"></i>
                        <span>Clinic Hours</span>
                        </a>
                    </li>

                    {/* Calendar Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" 
                        href="/admin/calendar">
                        <i class="fa-solid fa-calendar"></i>
                            <span>Calendar</span>
                        </a>
                    </li>

                    {/* Accounts Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" 
                         href="/admin/accounts">
                        <i class="fa-solid fa-file-medical"></i>
                        <span>Accounts</span>
                        </a>
                    </li>

                    {/* Backup and Restore Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" 
                        href="/admin/backup-restore">
                        <i class="fa-solid fa-file-medical"></i>
                        <span>Backup and Restore</span>
                        </a>
                    </li>

                    <div className="divider"></div>

                    {/* My Profile Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" 
                        href="/admin/userprofile">
                        <i class="fa-solid fa-user"></i>
                             <span>My Profile</span>
                        </a>
                    </li>

                    {/* Log Out Nav */}
                    <li className="nav-item">
                    <a className="nav-link collapsed" href={"/auth/login"}>
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