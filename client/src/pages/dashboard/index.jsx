import React from "react";
import '../../styles/dashboard.css';
import Button from 'react-bootstrap/Button';
import DashboardTable from '../../components/dashboardTable';
import moment from 'moment'
import { useState, useEffect } from 'react';

const Dashboard = () => {  
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((time) => new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);


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
          <h1>Welcome, {userInfo['fname']}!</h1>
          <h2>{moment(new Date()).format('MMMM Do YYYY')}</h2>
          <p>{time}</p>
        </div>

        <section className="section dashboard">
          <div className="row">
            
            {/* <!-- Appointments --> */}
            <div className="col-12">
              <div className="card overflow-auto">

                <div className="card-body datatable">
                  <div className="nav-bar">
                  <Button className="table-button">TODAY</Button>
                    <Button className="table-button">UPCOMING</Button>
                  </div>
                  <h5 className="card-title">
                    TODAY&apos;S APPOINTMENTS
                  </h5>
                      <DashboardTable/>
                </div>
              </div>
            </div>
            {/* <!-- End of Appointments --> */}
          </div>
        </section>

        </>
  );
}
export default Dashboard;
