import React from "react";
import '../../styles/dashboard.css';
import Button from 'react-bootstrap/Button';
import DashboardTable from '../../components/dashboardTable';
import moment from 'moment'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';


const PatientDashboard = () => {  
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  const patientIDnumber = userInfo['patientIDnumber'];
  const navigate = useNavigate();

  function redirectUnauth(){
    if(userInfo['user_role_id']==2){
      navigate('/secretary', {replace: true})
      return true;

    }else if(userInfo['user_role_id']==3){
      navigate('/dentist', {replace: true})
      return true;

    }else if(userInfo['user_role_id']==4){
      navigate('/admin', {replace: true})
      return true;

    }
  }

  function compostieRender(){
    if(!redirectUnauth()){
      return(
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
          <h2>{time}</h2>
        </div>
        ))}

        <section className="section dashboard">
          <div className="row">
            
            {/* <!-- Appointments --> */}
            <div className="col-12">
              <div className="card overflow-auto">

              <div class="card-body datatable">
                  <div class="nav nav-bar">
                    <Button className="table-button active" data-bs-toggle="tab" data-bs-target="#today-appt">TODAY</Button>
                    <Button className="table-button" data-bs-toggle="tab" data-bs-target="#upcoming-appt">UPCOMING</Button>
                    <Button className="table-button reqdash-btn" href="/patient/appointments/request-appointment"><i class="bi bi-plus-lg"></i> REQUEST APPOINTMENT</Button>
                  </div>

                <div className="tab-content">
                    <div className="tab-pane fade show active today-appt" id="today-appt">
                      <h5 className="card-title">
                        TODAY&apos;S APPOINTMENTS
                      </h5>
                          <DashboardTable/>
                    </div>

                    <div className="tab-pane fade today-appt" id="upcoming-appt">
                      <h5 className="card-title">
                        UPCOMING APPOINTMENTS
                      </h5>
                      {/* Pachange nalang yung datatable for upcoming appt ng respective patient here */}
                        <DashboardTable/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End of Appointments --> */}
          </div>
        </section>

        </>  );
    }
  }
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
    compostieRender()
  );
}
export default PatientDashboard;
