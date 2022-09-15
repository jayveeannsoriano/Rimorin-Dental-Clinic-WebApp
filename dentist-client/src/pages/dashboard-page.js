import React from "react";

function DashboardPage() {
    return(
        <div className="Dashboardpage">
            <body>

                {/* <!-- ======= Header ======= --> */}
                <header id="header" class="header fixed-top d-flex align-items-center">

                    {/* <div class="d-flex align-items-center justify-content-between">
                        <a href="index.html" class="logo d-flex align-items-center">
                            <img src="assets/img/logo.png" alt=""/>
                            <span class="d-none d-lg-block">Rimorin Dental Clinic</span>
                        </a>
                        <i class="bi bi-list toggle-sidebar-btn"></i>
                    </div> */}

                    {/* <!-- End Logo --> */}


                    {/* <!-- Search Bar --> */}
                    <div class="search-bar">
                        <form class="search-form d-flex align-items-center" method="POST" action="#">
                            <input type="text" name="query" placeholder="Search" title="Enter search keyword"/>
                            <button type="submit" title="Search"><i class="bi bi-search"></i></button>
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
        {/* <!-- End Notification Dropdown Items --> */}

      </li>
      {/* <!-- End Notification Nav --> */}

      <li class="nav-item dropdown pe-3">

        {/* <!-- Profile Image Icon --> */}
        <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
          <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle"/>
          <span class="d-none d-md-block dropdown-toggle ps-2">P. Concepcion</span>
        </a>
        {/* <!-- End Profile Image Icon --> */}

        {/* <!-- Profile Dropdown Menu --> */}
        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
          <li class="dropdown-header">
            {/* <h6 class="userName">Pamela Concepcion</h6> <!-- Get Dentist's Name --> */}
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

        </ul> 
        {/* <!-- End Profile Dropdown Menu Items --> */}
      </li>
      {/* <!-- End Profile Nav --> */}

    </ul>
  </nav>
  {/* <!-- End Icons Navigation --> */}

</header>
{/* <!-- End Header --> */}

{/* <!-- ======= Sidebar ======= --> */}
<aside id="sidebar" class="sidebar">

  <ul class="sidebar-nav" id="sidebar-nav">

    <li class="nav-item">
      <a class="nav-link " href="index.html">
        <i class="bi bi-grid"></i>
        <span>Dashboard</span>
      </a>
    </li>
    {/* <!-- End Dashboard Nav --> */}

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-card-checklist"></i>
        <span>Appointments</span></i>
      </a>

    </li>
    {/* <!-- End Appointments Nav --> */}

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#forms-nav" href="DentistCalendar.html">
        <i class="bi bi-calendar3"></i><span>Calendar</span></i>
      </a>
    </li>
    {/* <!-- End Calendar Nav --> */}

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-layout-text-window-reverse"></i><span>Patients</span></i>
      </a>
    </li>
    {/* <!-- End Patients Nav --> */}

    <li class="nav-item">
      <a class="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
        <i class="bi bi-file-medical"></i><span>Patient Records</span><i class="bi bi-chevron-down ms-auto"></i>
      </a>
    </li>
    {/* <!-- End E-prescription Nav --> */}

    <li class="nav-item">
      <a class="nav-link collapsed" href="users-profile.html">
        <i class="bi bi-credit-card"></i><span>Payment Records</span>
      </a>
    </li>
    {/* <!-- End Payment Records Nav --> */}

    <li class="nav-item">
      <a class="nav-link collapsed" href="users-profile.html">
        <i class="bi bi-person-circle"></i>
        <span>My Profile</span>
      </a>
    </li>
    {/* <!-- End My Profile Nav --> */}

    
    <li class="nav-item">
      <a class="nav-link collapsed" href="users-profile.html">
        <i class="bi bi-gear"></i>
        <span>Profile Settings</span>
      </a>
    </li>
    {/* <!-- End Profile Settings Nav --> */}

    <li class="nav-item">
      <a class="nav-link collapsed" href="pages-login.html">
        <i class="bi bi-box-arrow-in-right"></i>
        <span>Log Out</span>
      </a>
    </li>
    {/* <!-- End Login Page Nav --> */}

  </ul>

</aside><!-- End Sidebar-->




<!-- DASHBOARD -->
<main id="main" class="main">

  <nav>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>

  <!-- Page Title -->
  <div class="pagetitle">
    <h2>Welcome Back Doctor!</h2> <!--  -->
    <h1>8/26/2022</h1>  <!-- DATE -->
    <p>Time (AM/PM)</p> <!-- 24hr Time Format -->
  </div>
  <!-- End Page Title -->


  <section class="section dashboard">
    <div class="row">

          <!-- Today's Appointments Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card info-card sales-card">

              <!-- <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div> -->

              <div class="card-body">
                <h5 class="card-title">Appointments</h5>

                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-calendar-week"></i>
                  </div>
                  <div class="ps-3">
                    <h6>4</h6>
                    <!--<span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>-->

                  </div>
                </div>
              </div>

            </div>
          </div><!-- End Today's Appointments Card -->

          <!-- Total Patients Card -->
          <div class="col-xxl-4 col-md-6">
            <div class="card info-card revenue-card">

              <!-- <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div> -->

              <div class="card-body">
                <h5 class="card-title">Total Patients</h5>

                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-people"></i>
                  </div>
                  <div class="ps-3">
                    <h6>24</h6>
                    <!--<span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>-->

                  </div>
                </div>
              </div>

            </div>
          </div><!-- Total Patients Card -->

          <!--Pending Appointment Requests-->
          <div class="col-xxl-4 col-xl-12">

            <div class="card info-card customers-card">

              <!-- <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div> -->

              <div class="card-body">
                <h4 class="card-title">Pending Appointment Requests</h4>

                <div class="d-flex align-items-center">
                  <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="bi bi-clock-history"></i>
                  </div>
                  <div class="ps-3">
                    <h6>10</h6>
                    <!--<span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>-->

                  </div>
                </div>

              </div>
            </div>

          </div><!-- End Pending Appointment Requests -->


          <!-- Today's Appointment -->
          <div class="col-12">
            <div class="card recent-sales overflow-auto">

              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>

              <div class="card-body">
                <div class="nav-bar"><span>Today | Upcomming</span></div>
                <h5 class="card-title">Today's Appointments</h5>

                <table class="table table-borderless datatable">
                  <thead>
                    <tr>
                      <th scope="col">Patient Name</th>
                      <th scope="col">Appt #</th>
                      <th scope="col">Date & Time</th>
                      <th scope="col">Appt. Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <!--<tbody>
                    <tr>
                      <th scope="row"><a href="#">#2457</a></th>
                      <td>Brandon Jacob</td>
                      <td><a href="#" class="text-primary">At praesentium minu</a></td>
                      <td></td>
                      <td><span class="badge bg-success">Approved</span></td>
                    </tr>

                    <tr>
                      <th scope="row"><a href="#">#2147</a></th>
                      <td>Bridie Kessler</td>
                      <td><a href="#" class="text-primary">Blanditiis dolor omnis similique</a></td>
                      <td></td>
                      <td><span class="badge bg-warning">Pending</span></td>
                    </tr>

                    <tr>
                      <th scope="row"><a href="#">#2049</a></th>
                      <td>Ashleigh Langosh</td>
                      <td><a href="#" class="text-primary">At recusandae consectetur</a></td>
                      <td></td>
                      <td><span class="badge bg-success">Approved</span></td>
                    </tr>

                    <tr>
                      <th scope="row"><a href="#">#2644</a></th>
                      <td>Angus Grady</td>
                      <td><a href="#" class="text-primar">Ut voluptatem id earum et</a></td>
                      <td></td>
                      <td><span class="badge bg-danger">Rejected</span></td>
                    </tr>

                    <tr>
                      <th scope="row"><a href="#">#2644</a></th>
                      <td>Raheem Lehner</td>
                      <td><a href="#" class="text-primary">Sunt similique distinctio</a></td>
                      <td></td>
                      <td><span class="badge bg-success">Approved</span></td>
                    </tr>

                  </tbody>-->
                </table>

              </div>

            </div>
          </div><!-- Today's Appointment -->

    </div>
  </section>

</main><!-- End #main -->

<!-- ======= Footer ======= -->
<footer id="footer" class="footer">
  <div class="copyright">
    &copy; Copyright <strong><span>Naevis</span></strong>. All Rights Reserved
  </div>

</footer><!-- End Footer -->

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<!-- Vendor JS Files -->
<script src="assets/vendor/apexcharts/apexcharts.min.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/chart.js/chart.min.js"></script>
<script src="assets/vendor/echarts/echarts.min.js"></script>
<script src="assets/vendor/quill/quill.min.js"></script>
<script src="assets/vendor/simple-datatables/simple-datatables.js"></script>
<script src="assets/vendor/tinymce/tinymce.min.js"></script>

<!-- Template Main JS File -->
<script src="assets/js/main.js"></script>

</body>
        </div>
    )

} 
