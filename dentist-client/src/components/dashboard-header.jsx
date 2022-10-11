import React from 'react';

/*eslint no-unused-vars: "off"*/
function dashboardHeader(){
    return (
        <div>
                {/* <!-- ======= Dashboard Header ======= --> */}
                <header className="header fixed-top d-flex align-items-center">

                    {/* <div class="d-flex align-items-center justify-content-between">
                            <a href="index.html" class="logo d-flex align-items-center">
                                <img src="assets/img/logo.png" alt=""/>
                                <span class="d-none d-lg-block">Rimorin Dental Clinic</span>
                            </a>
                        <i class="bi bi-list toggle-sidebar-btn"></i>
                    </div>  */}
                    {/* <!-- End Logo --> */}

                    {/* <!-- Search Bar --> */}
                    <div className="search-bar">
                        <form className="search-form d-flex align-items-center" method="POST" action="#">
                            <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                            <button type="submit" title="Search"><i class="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>

                    {/* <!-- Search Icon --> */}
                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-center">


                        {/* <!-- Notification Icon --> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
                            <i class="fa-solid fa-bell"></i>
                                <span className="badge bg-primary badge-number">4</span>
                            </a>

                        {/* <!-- Notficiation Dropdown --> */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                            <li className="dropdown-header">
                                You have 4 new notifications
                                <a href="#"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-exclamation-circle text-warning"></i>
                                <div>
                                    <h4>Lorem Ipsum</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>30 min. ago</p>
                                </div>
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-x-circle text-danger"></i>
                                <div>
                                    <h4>Atque rerum nesciunt</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>1 hr. ago</p>
                                </div>
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-check-circle text-success"></i>
                                <div>
                                    <h4>Sit rerum fuga</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>2 hrs. ago</p>
                                </div>
                            </li>

                            <li className="notification-item">
                                <i className="bi bi-info-circle text-primary"></i>
                                <div>
                                    <h4>Dicta reprehenderit</h4>
                                    <p>Quae dolorem earum veritatis oditseno</p>
                                    <p>4 hrs. ago</p>
                                </div>
                            </li>

                            <li className="dropdown-footer">
                                <a href="#">Show all notifications</a>
                            </li>

                        </ul>
                        {/* <!-- End Notification Dropdown Items --> */}

                        </li>
                        {/* <!-- End Notification Nav --> */}

                        <li className="nav-item dropdown pe-3">

                        {/* <!-- Profile Image Icon --> */}
                        <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
                            <img src="" alt="Profile" className="rounded-circle"/>
                            <span className="d-none d-md-block dropdown-toggle ps-2">P. Concepcion</span>
                        </a>
                        {/* <!-- End Profile Image Icon --> */}

                        {/* <!-- Profile Dropdown Menu --> */}
                        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
                            <li className="dropdown-header">
                                <h6 className="userName">Pamela Concepcion</h6> 
                                <span>Dentist</span>
                            </li>

                        {/* <!-- My Profile --> */}
                        <li>
                            <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i className="bi bi-person"></i>
                                <span>My Profile</span>
                            </a>
                        </li>

                        {/* <!-- Account Settings --> */}
                        <li>
                            <a className="dropdown-item d-flex align-items-center" href="users-profile.html">
                                <i className="bi bi-gear"></i>
                                <span>Account Settings</span>
                            </a>
                        </li>


                        {/* <!-- Need Help --> */}
                        <li>
                            <a className="dropdown-item d-flex align-items-center" href="pages-faq.html">
                                <i className="bi bi-question-circle"></i>
                                <span>Need Help?</span>
                            </a>
                        </li>

                        {/* <!-- Sign Out --> */}
                        <li>
                            <a className="dropdown-item d-flex align-items-center" href="#">
                                <i className="bi bi-box-arrow-right"></i>
                                <span>Sign Out</span>
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