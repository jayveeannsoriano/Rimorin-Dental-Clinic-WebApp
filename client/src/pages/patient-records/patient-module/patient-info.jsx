import React, {useEffect, useState} from "react";
import "../../../styles/patient-info.css";
import "react-bootstrap";
import Axios from 'axios';
import ProfileWidget from "../../../components/profile-widget";
import { Button } from "react-bootstrap";
import PatientInfoEdit from "./patient-info-edit";

const PatientInfo = () => {

  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  const patientIDnumber = userInfo['patientIDnumber'];
  console.log(patientIDnumber)

  const [userInformation, setUserInfo] = useState([]) 

  const getAppointment = async() => {

    try{
        const response = await Axios.get('http://localhost:3001/getUserInfo',{
            params:{
                patientIDnumber: patientIDnumber,
            }
        });
        setUserInfo(response.data);
    }catch (error){
        console.log(error)
    }
}

useEffect(() => {
  getAppointment();
}, []);

  return (
    <>
      <div class="pagetitle">
        <h1>Patient Information</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/dashboard">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/dashboard">Patient Records</a>
            </li>
            <li class="breadcrumb-item active">Patient Information</li>
          </ol>
        </nav>
      </div>

      
      <section class="section profile">
        <div class="row">
          <ProfileWidget />

          <div class="col-xl-8">
            <div className="card patient-info">
          
              <div className="card-body pt-3">
                <h5 className="card-title">Patient Information</h5>

                {/* <a href="/patient/patient-records/patient-info-edit">  */}
                {/* <button a href="/patient/patient-records/patient-info-edit" className="btn btn-primary btn-link" type="submit">
                <i class="bi bi-pencil-fill"></i>
                  Edit 
                </button> */}
                <Button a href="/patient/patient-records/patient-info-edit">
                <i class="bi bi-pencil-fill"></i>
                  Edit
                </Button>

                <button className="btn btn-primary" type="submit">
                <i class="bi bi-printer-fill"></i>
                  Print
                </button>

                <button className="btn btn-primary" type="submit">
                <i class="bi bi-download"></i>
                  Export
                </button>
                <div className="divider"></div>


                {/* Patient information */}
                {userInformation.map((item, index) => (  
                <div class="row">
                  <h4>Personal Information</h4>
                  <div class="col-lg-auto col-md-auto label">
                    First Name
                  </div>
                  <div id="fname" class="col-lg-auto col-md-auto">
                    {item.fname}
                  </div>
                </div>
                      ))}
                  {userInformation.map((item, index) => (  
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">
                    Last Name
                  </div>
                  <div id="lname" class="col-lg-auto col-md-auto">
                    {item.lname}
                  </div>
                </div>
                ))}

                {userInformation.map((item, index) => (  
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Middle Initial</div>
                  <div id="mname" class="col-lg-auto col-md-auto">
                    saan kukunin ito
                  </div>
                </div>
                  ))}
                    {userInformation.map((item, index) => (
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Birthdate</div>
                  <div id="birthdate" class="col-lg-auto col-md-auto">
                    {item.bday}
                  </div>
                </div>
                    ))}
                     {userInformation.map((item, index) => (
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Age</div>
                  <div id="age" class="col-lg-auto col-md-auto">
                   icoconvert pa
                  </div>
                </div>
                     ))}
                {/* OTHER SIDE */}
                {userInformation.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Gender</div>
                    <div id="gender" class="col-lg-auto col-md-auto">
                      {item.gender}
                    </div>
                  </div>
                ))}
                 {userInformation.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Profession</div>
                    <div id="profession" class="col-lg-auto col-md-auto">
                      where kukunin ito
                    </div>
                  </div>
                 ))}
                  {userInformation.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Cell #</div>
                    <div id="cell" class="col-lg-auto col-md-auto">
                      {item.mobile}
                    </div>
                  </div>
                  ))}
                  {userInformation.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Tel #</div>
                    <div id="tel" class="col-lg-auto col-md-auto">
                      unknown pa
                    </div>
                  </div>
                  ))}
                   {userInformation.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Blood Type</div>
                    <div id="blood-type" class="col-lg-auto col-md-auto">
                      uknown pa
                    </div>
                  </div>
                   ))}
                </div> 
                {/* end of container */}

                <div className="divider"></div>

                {/* Address information */}
                {userInformation.map((item, index) => (
                <div class="row">
                  <h4>Address Information</h4>
                  <div class="col-lg-auto col-md-auto label">
                    House No. & Street Name
                  </div>
                  <div id="houseno" class="col-lg-auto col-md-auto">
                    {item.house}
                  </div>
                </div>
                ))}
                 {userInformation.map((item, index) => (
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">
                    Municipality/City
                  </div>
                  <div id="municipality" class="col-lg-auto col-md-auto">
                    {item.municipality}
                  </div>
                </div>
                 ))}

                  {userInformation.map((item, index) => (
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Country</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    {item.country}
                  </div>
                </div>
                  ))}
                {/* OTHER SIDE */}
                {userInformation.map((item, index) => (
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">District/Barangay</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    {item.brgy}
                  </div>
                </div>
                ))}
                 {userInformation.map((item, index) => (
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Province</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    {item.province}
                  </div>
                </div>
                 ))}
                  {userInformation.map((item, index) => (
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">ZIP Code</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    unknown pa
                  </div>
                </div>
                  ))}
                <div className="divider"></div>

                {/* Medical Conditions */}
                {userInformation.map((item, index) => (
                <div class="row">
                  <h4>Medical Conditions</h4>
                  <div class="col-lg-5 col-md-4 label">
                    Medications/Maintenance
                  </div>
                  <div id="medications" class="col-lg-3">
                    {item.medications}
                  </div>
                </div>
                ))}
                 {userInformation.map((item, index) => (
                <div class="row">
                  <div class="col-lg-4 col-md-4 label">Allergies</div>
                  <div id="allergies" class="col-lg-3">
                    {item.allergies}
                  </div>
                </div>
                 ))}
                 {userInformation.map((item, index) => (
                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Conditions</div>
                  <div id="conditions" class="col-lg-3">
                    {item.conditions}
                  </div>
                </div>
                 ))}
              </div>
              {/* end of card body */}
            </div>
          
          </div>
        
      </section>
    </>
  );
};

export default PatientInfo;
