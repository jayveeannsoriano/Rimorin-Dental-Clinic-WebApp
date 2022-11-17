import React from "react";
import '../../styles/dashboard.css';
import Button from 'react-bootstrap/Button';
import DashboardTable from '../../components/dashboardTable';
import moment from 'moment'
import { useState, useEffect } from 'react';
import Axios from 'axios';

const PatientDashboard = () => {  
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  const patientIDnumber = userInfo['patientIDnumber'];
  console.log(patientIDnumber)

  const [userInformation, setUserInfo] = useState([])

  const getAppointment = async () => {

    try {
      const response = await Axios.get('http://localhost:3001/getUserInfo', {
        params: {
          patientIDnumber: patientIDnumber,
        }
      });
      setUserInfo(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAppointment();
  }, []);

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
              <a href="/patient">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
        
        {/* Page Title */}
        {userInformation.map((item, index) => (
        <div className="pagetitle">
          <h1>Welcome, {item.fname}!</h1>
          <h2>{moment(new Date()).format('MMMM Do YYYY')}</h2>
          <p>{time}</p>
        </div>
        ))}

        <section className="section dashboard">
          <div className="row">
            
            {/* <!-- Appointments --> */}
            <div className="col-12">
              <div className="card overflow-auto">

                <div className="card-body datatable">
                  <div className="nav-bar">
                    <Button className="table-button">TODAY</Button>
                    <Button className="table-button">UPCOMING</Button>
                    <Button className="table-button" href="/patient/appointments/request-appointment">REQUEST APPOINTMENT</Button>
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
export default PatientDashboard;
