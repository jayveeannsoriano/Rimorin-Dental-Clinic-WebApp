import React from "react";
import '../../styles/dashboard.css';
import Button from 'react-bootstrap/Button';
import DentistDTable from '../../components/dental-table';

export default function DentistDashboard() {  
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  return (
    <>
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
        <h1>Welcome, Dr. {userInfo['lname']}!</h1>
        <h2>September 22, 2022</h2>
        <p>Time (AM/PM)</p>
      </div>

      <section className="section dashboard">
        <div className="row">
            
        {/* <!-- Today's Appointments Card --> */}
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card appointments-card">
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
              <div class="card info-card total-patients-card">

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

              <div class="card info-card pending-appts-card">

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
              <div class="card overflow-auto">

                <div class="card-body datatable">
                  <div class="nav-bar">
                  <Button className="table-button">TODAY</Button>
                    <Button className="table-button">UPCOMING</Button>
                  </div>
                  <h1>TODAY'S APPOINTMENT</h1>
                    <div>
                      <DentistDTable/>
                    </div>
                </div>
              </div>
            </div>

        </div>
      </section>
    </>
  );
}