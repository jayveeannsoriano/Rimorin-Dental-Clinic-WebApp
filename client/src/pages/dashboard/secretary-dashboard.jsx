import React from "react";
import axios from "axios";
import '../../styles/dashboard.css';
import Button from 'react-bootstrap/Button';
import DentistDTable from '../../components/dental-table';
import moment from 'moment'
import { useState, useEffect } from 'react';


export default function DentistDashboard() {  
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  
  const [totalPatients, setTotalPatients] = useState(0);
  const [totalAppts, setTotalAppts] = useState(0);
  const [totalPendingAppts, setTotalPendingAppts] = useState(0);

  const getTotalPatients = async() => {
    try{
        let resp = await axios.get('http://localhost:3001/getTotalPatients');
        setTotalPatients(resp.data);
    }catch (error){
        console.log(error)
    }
  }

  const getTotalAppts = async() => {
    try{
        let resp = await axios.get('http://localhost:3001/getTotalAppts');
        console.log(resp);
        setTotalAppts(resp.data);
    }catch (error){
        console.log(error)
    }
  }

  const getTotalPendingAppts = async() => {
    try{
        let resp = await axios.get('http://localhost:3001/getTotalPendingAppts');
        setTotalPendingAppts(resp.data);
    }catch (error){
        console.log(error)
    }
  }

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, );

  useEffect(() => {
    getTotalAppts();
  }, []);
  
  useEffect(() => {
    getTotalPatients();
  }, []);

  useEffect(() => {
    getTotalPendingAppts();
  }, []);

  // getTotalAppts();
  // getTotalPatients();
  // getTotalPendingAppts();
  
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
        <h1>Welcome, Sec. {userInfo['lname']}!</h1>
          <h2>{moment(new Date()).format('MMMM Do YYYY')}</h2>
          <p>{time}</p>
      </div>

      <section className="section dashboard">
        <div className="row">
            
        {/* <!-- Today's Appointments Card --> */}
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card appointments-card">
                  <h5 class="card-title">Appointments</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-stethoscope"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{totalAppts}</h6>
                      {/* <!--<span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>--> */}

                    </div>
                </div>

              </div>
            </div>
            {/* <!-- End Today's Appointments Card --> */}

            {/* <!-- Total Patients Card --> */}
            <div class="col-xxl-4 col-md-6">
              <div class="card info-card total-patients-card">

                  <h5 class="card-title">Total Patients</h5>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-users"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{totalPatients}</h6>
                      {/* <!--<span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>--> */}

                    </div>
                  </div>

              </div>
            </div>
            {/* <!-- Total Patients Card --> */}

            {/* <!--Pending Appointment Requests--> */}
            <div class="col-xxl-4 col-xl-12">

              <div class="card info-card pending-appts-card">

                  <h4 class="card-title">Pending Appointment Requests</h4>

                  <div class="d-flex align-items-center">
                    <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-calendar-check"></i>
                    </div>
                    <div class="ps-3">
                      <h6>{totalPendingAppts}</h6>
                      {/* <!--<span class="text-danger small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">decrease</span>--> */}

                    </div>
                </div>
              </div>

            </div>
            {/* <!-- End Pending Appointment Requests --> */}


            {/* <!-- Today's Appointment --> */}
            <div class="col-12">
              <div class="card overflow-auto">

              <div class="card-body datatable">
                  <div class="nav nav-bar">
                    <Button className="table-button" data-bs-toggle="tab" data-bs-target="#today-appt">TODAY</Button>
                    <Button className="table-button" data-bs-toggle="tab" data-bs-target="#upcoming-appt">UPCOMING</Button>
                  </div>

                <div className="tab-content">
                    <div className="tab-pane fade show active today-appt" id="today-appt">
                      <h5 className="card-title">
                        TODAY&apos;S APPOINTMENTS
                      </h5>
                          <DentistDTable/>
                    </div>

                    <div className="tab-pane fade today-appt" id="upcoming-appt">
                      <h5 className="card-title">
                        UPCOMING APPOINTMENTS
                      </h5>
                      {/* Pachange nalang yung datatable here */}
                          <DentistDTable/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        </div>
      </section>
    </>
  );
}