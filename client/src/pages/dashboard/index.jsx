import React from "react";
import '../../styles/dashboard.css';
import Button from 'react-bootstrap/Button';
import DashboardTable from '../../components/dashboardTable';
// import { Outlet } from "react-router-dom";

const Dashboard = () => {  
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
          <h2>Welcome Back, Patient!</h2>
          <h1>September 22, 2022</h1>
          <p>Time (AM/PM)</p>
        </div>

        <section className="section dashboard">
          <div className="row">
            
            {/* <!-- Appointments --> */}
            <div className="col-12">
              <div className="card overflow-auto">

                <div className="card-body datatable">
                  <div className="nav-bar">
                      <Button>TODAY</Button>
                      <Button>UPCOMING</Button>
                  </div>
                  <h5 className="card-title">
                    TODAY&apos;S APPOINTMENTS
                  </h5>

                  <div>
                      <DashboardTable/>
                  </div>

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
