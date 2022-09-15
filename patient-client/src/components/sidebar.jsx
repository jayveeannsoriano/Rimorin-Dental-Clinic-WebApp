import React from 'react';

function Sidebar(){
    return(
        <div>
            <aside id="sidebar" class="sidebar">
                <ul class="sidebar-nav" id="sidebar-nav">

                    {/* Dashboard Nav */}
                      <li class="nav-item">
                        <a class="nav-link " href="index.html">
                        <i class="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    {/* Appointments NAv */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                        <i class="bi bi-card-checklist"></i>
                            <span>Appointments</span>
                        </a>
                    </li>

                    {/* Calendar Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#forms-nav" href="DentistCalendar.html">
                        <i class="bi bi-calendar3"></i>
                            <span>Calendar</span>
                        </a>
                    </li>

                    {/* Patient Records Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                        <i class="bi bi-file-medical"></i>
                            <span>Patient Records</span>
                            <i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                    </li>

                    {/* E-Prescription Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="users-profile.html">
                        <i class="bi bi-credit-card"></i>
                            <span>E-Prescription</span>
                        </a>
                    </li>

                    {/* Paymnent Records Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="users-profile.html">
                        <i class="bi bi-credit-card"></i>
                            <span>Payment Records</span>
                        </a>
                    </li>

                    {/* My Profile Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="users-profile.html">
                        <i class="bi bi-person-circle"></i>
                             <span>My Profile</span>
                        </a>
                    </li>

                    {/* Profile Settings Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="users-profile.html">
                        <i class="bi bi-gear"></i>
                            <span>Profile Settings</span>
                        </a>
                    </li>

                    {/* Log Out Nav */}
                    <li class="nav-item">
                        <a class="nav-link collapsed" href="pages-login.html">
                        <i class="bi bi-box-arrow-in-right"></i>
                            <span>Log Out</span>
                        </a>
                    </li>

                </ul>
            </aside>
        </div>
    )
}

export default Sidebar;