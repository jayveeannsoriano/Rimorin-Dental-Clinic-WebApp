import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../components/dashboard-header.jsx";
import Sidebar from "../components/sidebar.jsx";
import Footer from "../components/footer.jsx";
import '../styles/dashboard.css';
import Button from 'react-bootstrap/Button';
import DashboardTable from '../components/dashboardTable';

export default function Dashboard() {  
  return (
    <div>
      <main id="main" className="main">

      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active">Dashboard</li>
        </ol>
      </nav>

      {/* Page Title */}
      <div className="pagetitle">
        <h2>Welcome Back, Doctor!</h2>
        <h1>September 22, 2022</h1>
        <p>Time (AM/PM)</p>
      </div>

      <section className="section dashboard">
        <div className="row">
            
        {/* <!-- Today's Appointments Card --> */}
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card sales-card">

                {/* <!-- <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div> --> */}

                <div class="card-body">
                  <h5 class="card-title">Appointments</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-stethoscope"></i>
                    </div>
                    <div class="ps-3">
                      <h6>4</h6>
                      {/* <!--<span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>--> */}

                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- End Today's Appointments Card --> */}

            {/* <!-- Total Patients Card --> */}
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card revenue-card">

                {/* <!-- <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div> --> */}

                <div class="card-body">
                  <h5 class="card-title">Total Patients</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-users"></i>
                    </div>
                    <div class="ps-3">
                      <h6>24</h6>
                      {/* <!--<span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>--> */}

                    </div>
                  </div>
                </div>

              </div>
            </div>
            {/* <!-- Total Patients Card --> */}

            {/* <!--Pending Appointment Requests--> */}
            <div class="col-xxl-4 col-xl-12">

              <div class="card info-card customers-card">

                {/* <div class="filter">
                  <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li class="dropdown-header text-start">
                      <h6>Filter</h6>
                    </li>
                    <li><a class="dropdown-item" href="#">Today</a></li>
                    <li><a class="dropdown-item" href="#">This Month</a></li>
                    <li><a class="dropdown-item" href="#">This Year</a></li>
                  </ul>
                </div>  */}

                <div class="card-body">
                  <h4 class="card-title">Pending Appointment Requests</h4>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-calendar-check"></i>
                    </div>
                    <div class="ps-3">
                      <h6>10</h6>
                      {/* <!--<span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>--> */}

                    </div>
                  </div>

                </div>
              </div>

            </div>
            {/* <!-- End Pending Appointment Requests --> */}


            {/* <!-- Today's Appointment --> */}
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
                  <div class="nav-bar">
                  <Button>TODAY</Button>
                    <Button>UPCOMING</Button>
                  </div>
                  <h5 class="card-title">Today's Appointments</h5>

                  <div>
                    <DashboardTable/>
                 </div>

                  {/* <table className="table table-borderless datatable">
                    <thead>
                      <tr>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Appt #</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Appt. Status</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"><a href="#">#2457</a></th>
                        <td>Brandon Jacob</td>
                        <td><a href="#" class="text-primary">22/04/2022 9:00 AM</a></td>
                        <td><span class="badge bg-success">Approved</span></td>
                        <td><span class="badge bg-primary">Reschedule</span> <span class="badge bg-secondary">View</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2147</a></th>
                        <td>Bridie Kessler</td>
                        <td><a href="#" class="text-primary">22/04/2022 10:00 AM</a></td>
                        <td><span class="badge bg-warning">Pending</span></td>
                        <td><span class="badge bg-primary">Reschedule</span> <span class="badge bg-secondary">View</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2049</a></th>
                        <td>Ashleigh Langosh</td>
                        <td><a href="#" class="text-primary">22/04/2022 11:00 AM</a></td>
                        <td><span class="badge bg-success">Approved</span></td>
                        <td><span class="badge bg-primary">Reschedule</span> <span class="badge bg-secondary">View</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Angus Grady</td>
                        <td><a href="#" class="text-primar">22/04/2022 1:00 PM</a></td>
                        <td><span class="badge bg-danger">Rejected</span></td>
                        <td><span class="badge bg-primary">Reschedule</span> <span class="badge bg-secondary">View</span></td>
                      </tr>
                      <tr>
                        <th scope="row"><a href="#">#2644</a></th>
                        <td>Raheem Lehner</td>
                        <td><a href="#" class="text-primary">22/04/2022 2:00 PM</a></td>
                        <td><span class="badge bg-success">Approved</span></td>
                        <td><span class="badge bg-primary">Reschedule</span> <span class="badge bg-secondary">View</span></td>
                      </tr>
                    </tbody>
                  </table> */}

                </div>

              </div>
            </div>
            {/* <!-- Today's Appointment --> */}
 

        </div>
      </section>
    </main>


      <Header />
      <Sidebar />

    </div>

  );
}
