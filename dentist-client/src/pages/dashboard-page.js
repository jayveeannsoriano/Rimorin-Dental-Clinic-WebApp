import React from "react";

function DashboardPage(){
    return(
        <div>
            {/* <!-- ======= Header ======= --> */}
            <header id="header" class="header fixed-top d-flex align-items-center">

                {/* <!-- Search Bar --> */}
                <div class="search-bar">
                    <form class="search-form d-flex align-items-center" method="POST" action="#">
                        <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                        <button type="submit" title="Search"><i class="bi bi-search"></i>
                        </button>
                    </form>
                </div>
                {/* <!-- End Search Bar --> */}

                {/* <!-- Search Icon --> */}
                <nav class="header-nav ms-auto">
                    <ul class="d-flex align-items-center">

                        <li class="nav-item d-block d-lg-none">
                            <a class="nav-link nav-icon search-bar-toggle " href="#">
                                <i class="bi bi-search"></i>
                            </a>
                        </li>
                        {/* <!-- End Search Icon--> */}

                        {/* <!-- Notification Icon --> */}
                        <li class="nav-item dropdown">
                            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                                <i class="bi bi-bell"></i>
                                <span class="badge bg-primary badge-number">4</span>
                            </a>
                            {/* <!-- End Notification Icon --> */}

                            {/* <!-- Notficiation Dropdown --> */}
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                <li class="dropdown-header">
                                    You have 4 new notifications
                                    <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-exclamation-circle text-warning"></i>
                                    <div>
                                        <h4>Lorem Ipsum</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>30 min. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-x-circle text-danger"></i>
                                    <div>
                                        <h4>Atque rerum nesciunt</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>1 hr. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-check-circle text-success"></i>
                                    <div>
                                        <h4>Sit rerum fuga</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>2 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>

                                <li class="notification-item">
                                    <i class="bi bi-info-circle text-primary"></i>
                                    <div>
                                        <h4>Dicta reprehenderit</h4>
                                        <p>Quae dolorem earum veritatis oditseno</p>
                                        <p>4 hrs. ago</p>
                                    </div>
                                </li>

                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>
                                <li class="dropdown-footer">
                                    <a href="#">Show all notifications</a>
                                </li>

                            </ul>
                            {/*End Notification Dropdown Items*/}

                        </li>
                        {/*End Notification Nav*/}


                        <li class="nav-item dropdown pe-3">

                            {/*Profile Image Icon*/}
                            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                                <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle"/>
                                <span class="d-none d-md-block dropdown-toggle ps-2">P. Concepcion</span>
                            </a>
                            {/* <End Profile Image Icon*/}

                            {/*Profile Dropdown Menu*/}
                            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                                <li class="dropdown-header">
                                    <h6 class="userName">Pamela Concepcion</h6> {/*Get Dentist's Name*/}
                                    <span>Dentist</span>
                                </li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>

                                {/* <!-- My Profile --> */}
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i class="bi bi-person"></i>
                                        <span>My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>

                                {/* <!-- Account Settings --> */}
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                                        <i class="bi bi-gear"></i>
                                        <span>Account Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>

                                {/* <!-- Need Help --> */}
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                        <i class="bi bi-question-circle"></i>
                                        <span>Need Help?</span>
                                    </a>
                                </li>
                                <li>
                                    <hr class="dropdown-divider"/>
                                </li>

                                {/* <!-- Sign Out --> */}
                                <li>
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <i class="bi bi-box-arrow-right"></i>
                                        <span>Sign Out</span>
                                    </a>
                                </li>

                            </ul> {/*End Profile Dropdown Menu Items*/}
                        </li> {/*End Profile Nav*/}
                    </ul>
                </nav> {/*End Icons Navigation*/}

            </header> {/*End Header*/}



            {/*=====Sidebar=====*/}
            <aside id="sidebar" class="sidebar">

                <ul class="sidebar-nav" id="sidebar-nav">
                    <li class="nav-item">
                        <a class="nav-link " href="index.html">
                            <i class="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </a>
                    </li> {/*<End Dashboard Nav*/}

                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-card-checklist"></i><span>Appointments</span>
                        </a>
                    </li> {/*End Appointments Nav */}

                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#forms-nav" href="DentistCalendar.html">
                            <i class="bi bi-calendar3"></i><span>Calendar</span>
                        </a>
                    </li> {/*End Calendar Nav*/}

                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-layout-text-window-reverse"></i><span>Patients</span>
                        </a>
                    </li> {/*End Patients Nav*/}

                    <li class="nav-item">
                        <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i class="bi bi-file-medical"></i><span>Patient Records</span><i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                    </li> {/*End E-prescription Nav*/}

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="users-profile.html">
                            <i class="bi bi-credit-card"></i><span>Payment Records</span>
                        </a>
                    </li> {/*End Payment Records Nav*/}

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="users-profile.html">
                            <i class="bi bi-person-circle"></i>
                            <span>My Profile</span>
                        </a>
                    </li> {/*End My Profile Nav*/}

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="users-profile.html">
                            <i class="bi bi-gear"></i>
                            <span>Profile Settings</span>
                        </a>
                    </li> {/*End Profile Settings Nav*/}

                    <li class="nav-item">
                        <a class="nav-link collapsed" href="pages-login.html">
                            <i class="bi bi-box-arrow-in-right"></i>
                            <span>Log Out</span>
                        </a>
                    </li> {/*End Login Page Nav*/}

                </ul>
            </aside> {/*End Sidebar*/}

        </div>
    )
}