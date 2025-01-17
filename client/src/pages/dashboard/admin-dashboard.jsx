import React from "react";
import Axios from "axios";
import moment from 'moment'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ApptRequestTable from '../../components/dental-acceptcancel';
import SecAdminDashboardTable from "../../components/secadmin-table";
import UpSecAdminDashboardTable from "../../components/secadmin-tableUpcomingTable";
import SecAcceptCancel from "../../components/sec-acceptcancel";
import '../../styles/dashboard.css';
import {useNavigate} from 'react-router-dom';
import { Form } from "react-bootstrap";


 const AdminDashboard = () => {  
    var userInfo = JSON.parse(window.localStorage.getItem('current-session'));

    const navigate = useNavigate();

    function redirectUnauth(){
      if(userInfo['user_role_id']==1){
        navigate('/patient', {replace: true})
        return true;
      }else if(userInfo['user_role_id']==2){
        navigate('/secretary', {replace: true})
        return true;

      }else if(userInfo['user_role_id']==3){
        navigate('/dentist', {replace: true})
        return true;

      }
    }

    const [dentistInfo, setDentistInfo] = useState([]);
    const [dentistIDnum, setDentistIDnumber] = useState("");
    console.log("THIS IS THE ID NUM", dentistIDnum);
  
    const getDentistInfo = async () => {
      try {
          const responses = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getDentistInfo');
          console.log(responses.data);
          setDentistInfo(responses.data);
      } catch (error) {
          console.log(error)
      }
  }
  
  useEffect(() => {
    getDentistInfo();
  }, []);

    function compostieRender(){
      if(!redirectUnauth()){
        return(  
          <>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/admin">Home</a>
                </li>
                <li className="breadcrumb-item active">Appointments</li>
              </ol>
            </nav>
      
              {/* Page Title */}
              <div className="pagetitle">
                  <h1>Welcome, Admin {userInfo['lname']}!</h1>
                  <h2>{moment(new Date()).format('MMMM Do YYYY')}</h2>
                  <h2>{time}</h2>
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
                          </div>
                        </div>
      
                    </div>
                  </div>
      
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
                          </div>
                        </div>
      
                    </div>
                  </div>
      
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
                          </div>
                        </div>
                      </div>
                  
                  </div>
              
                  {/* <!-- Appointments --> */}
                  <div class="col-12">
                    <div class="card overflow-auto">
      
                      <div class="card-body datatable">
                        <div class="nav nav-bar">
                          <Button className="table-button active" data-bs-toggle="tab" data-bs-target="#today-appt">TODAY</Button>
                          <Button className="table-button" data-bs-toggle="tab" data-bs-target="#upcoming-appt">UPCOMING</Button>
                        </div>
      
                      <div className="tab-content">
                          <div className="tab-pane fade show active today-appt" id="today-appt">
                            <h5 className="card-title">
                              TODAY&apos;S APPOINTMENTS
                            </h5>
                                <SecAdminDashboardTable/>
                          </div>
      
                          <div className="tab-pane fade today-appt" id="upcoming-appt">
                            <h5 className="card-title">
                              UPCOMING APPOINTMENTS
                            </h5>
                                <UpSecAdminDashboardTable/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
      
                  <div className="col-12">
                    <div className="card overflow-auto appointment-request-table">
                    <div className="col-lg-4">
                      </div>
                      <h5 className="card-title">APPOINTMENT REQUEST</h5>
                      <SecAcceptCancel/>
                    </div>
                  </div>
              </div>
            </section>
          </>);
      }
      
      
    }
  
    const [totalPatients, setTotalPatients] = useState(0);
    const [totalAppts, setTotalAppts] = useState(0);
    const [totalPendingAppts, setTotalPendingAppts] = useState(0);
  
    const getTotalPatients = async() => {
      try{
          let resp = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getTotalPatients');
          setTotalPatients(resp.data);
      }catch (error){
          console.log(error)
      }
    }
  
    const getTotalAppts = async() => {
      try{
          let resp = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getTotalAppts');
          console.log(resp);
          setTotalAppts(resp.data);
      }catch (error){
          console.log(error)
      }
    }
  
    const getTotalPendingAppts = async() => {
      try{
          let resp = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getTotalPendingApp');
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
  
  return (
    compostieRender()
  );
}
export default AdminDashboard;
