import React from 'react';
import '../../App.css';
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
    
    function clearSession() {
        localStorage.clear();
    }

    return(
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <a href={userInfo['user_role_id']==1 ? "/patient" :"/dentist" } class="logo d-flex align-items-center">
                        <img src="../../img/logo.png" alt=""/>
                        <span class="logo-text d-none d-lg-block">Rimorin Dental Clinic</span>
                    </a>
                    <div className='divider'></div>
                    <h4>DENTIST MENU</h4>
                    
                    {/* Dashboard Nav */}
                      <li className="nav-item">
                        <a className={"nav-link"+((window.location.href.split("/").pop()=='dentist') ? ' active': ' collapsed')} href={userInfo['user_role_id']==1 ? "/patient" :"/dentist" }>
                        <i className="fa-solid fa-table-columns"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>

                    {/* Appointments Nav */}
                    <li className="nav-item">
                        <a className={"nav-link"+((window.location.href.split("/").pop()=='appointments') ? ' active': ' collapsed')}
                        href="/dentist/appointments" 
                        data-bs-target="#navbar">
                        <i className="fa-solid fa-stethoscope"></i>
                            <span>Appointments</span>
                        </a>
                    </li>

                    {/* Calendar Nav */}
                    <li className="nav-item">
                        <a className={"nav-link "+((window.location.href.split("/").pop()=='calendar') ? ' active': ' collapsed')} 
                        data-bs-target="#forms-nav"
                        href="/dentist/calendar">
                        <i className="fa-solid fa-calendar"></i>
                            <span>Calendar</span>
                        </a>
                    </li>

                    {/* Patients Nav */}
                    <li class="nav-item">
                        <a class={"nav-link"+((window.location.href.split("/").pop()=='patients') ? ' active': ' collapsed')}
                         href="/dentist/patients">
                        <i class="bi bi-person-heart"></i>
                        <span>Patients</span>
                        </a>
                    </li>

                    {/* Patient Records Nav/Patient Information/Dental Records */}
                    {/*<li className="nav-item">
                        <a className={"nav-link"+(((window.location.href.split("/").pop()=='patient-info')||(window.location.href.split("/").pop()=='dental-record')) ? ' active': ' collapsed')} data-bs-target="#patient-records-nav" data-bs-toggle="collapse" href="#">
                        <i className="fa-solid fa-file-medical"></i>
                            <span>Patient Records</span>
                            <i className="fa-solid fa-chevron-down"></i>
                        </a>
                        <ul id="patient-records-nav" className={"nav-content collapsed"+(((window.location.href.split("/").pop()=='patient-info')||(window.location.href.split("/").pop()=='dental-record')) ? '': ' collapse')} data-bs-parent="#sidebar-nav">
                            <li>
                                <a className={((window.location.href.split("/").pop()=='patient-info') ? 'active': 'collapsed')} href="/dentist/patient-records/patient-info">
                                    <i className="bi bi-circle"></i><span>Patient Information</span>
                                </a>
                            </li>

                            <li>
                                <a className={((window.location.href.split("/").pop()=='dental-record') ? 'active': 'collapsed')} href="/dentist/patient-records/dental-record">
                                    <i className="bi bi-circle"></i><span>Dental Records</span>
                                </a>
                            </li>
                        </ul>
                    </li>*/}
                    {/* /patientrecords */}

                    {/* E-Prescription Nav */}
                    {/*<li className="nav-item">
                        <a className={"nav-link"+((window.location.href.split("/").pop()=='eprescription') ? ' active': ' collapsed')} href="/dentist/eprescription">
                        <i className="fa-solid fa-file-prescription"></i>
                            <span>E-Prescription</span>
                        </a>
                    </li>*/}

                    {/* Payment Records Nav */}
                    {/*<li className="nav-item">
                        <a className={"nav-link"+((window.location.href.split("/").pop()=='payment-records') ? ' active': ' collapsed')} href="/dentist/payment-records">
                        <i className="fa-solid fa-file-invoice"></i>
                            <span>Payment Records</span>
                        </a>
                    </li>*/}

                    <div className="divider"></div>

                    {/* My Profile Nav */}
                    <li className="nav-item">
                        <a className={"nav-link"+((window.location.href.split("/").pop()=='userprofile') ? ' active': ' collapsed')} href="/dentist/userprofile">
                        <i className="fa-solid fa-user"></i>
                             <span>My Profile</span>
                        </a>
                    </li>

                    {/* Log Out Nav */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href={"/auth/login"}  onClick={clearSession}>
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