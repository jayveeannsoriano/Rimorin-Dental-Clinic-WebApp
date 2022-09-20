import React from 'react';

function Sidebar(){
    return(
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">

                    {/* Dashboard Nav */}
                      <li className="nav-item">
                        <a className="nav-link " href="index.html">
                        <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    {/* Appointments Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="appointments-page.jsx">
                        <i className="bi bi-card-checklist"></i>
                            <span>Appointments</span>
                        </a>
                    </li>

                    {/* Calendar Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#forms-nav" href="DentistCalendar.html">
                        <i className="bi bi-calendar3"></i>
                            <span>Calendar</span>
                        </a>
                    </li>

                    {/* Patient Records Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-file-medical"></i>
                            <span>Patient Records</span>
                            <i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                    </li>

                    {/* E-Prescription Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="users-profile.html">
                        <i className="bi bi-credit-card"></i>
                            <span>E-Prescription</span>
                        </a>
                    </li>

                    {/* Paymnent Records Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="users-profile.html">
                        <i className="bi bi-credit-card"></i>
                            <span>Payment Records</span>
                        </a>
                    </li>

                    {/* My Profile Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="users-profile.html">
                        <i className="bi bi-person-circle"></i>
                             <span>My Profile</span>
                        </a>
                    </li>

                    {/* Profile Settings Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="users-profile.html">
                        <i className="bi bi-gear"></i>
                            <span>Profile Settings</span>
                        </a>
                    </li>

                    {/* Log Out Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-login.html">
                        <i className="bi bi-box-arrow-in-right"></i>
                            <span>Log Out</span>
                        </a>
                    </li>

                </ul>
            </aside>
        </div>
    )
}

export default Sidebar;