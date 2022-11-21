import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import PatientProfileWidget from "../../components/profile-widget";
import "../../styles/patient-info.css";
import "react-bootstrap";

const PatientInfo = () => {
  const location = useLocation();
  const paramsID = new URLSearchParams(location.search);
  const getPatientIDNumber = paramsID.get("patientIDNum");
  const StringfyIDnumber = useMemo(() =>
    JSON.stringify(getPatientIDNumber).replace(/"/g, "")
  );
  console.log(StringfyIDnumber);

  const [patientList, setPatientList] = useState([]);
  console.log(patientList);
  const getPatientDetails = async () => {
    try {
      const response = await Axios.get("http://localhost:3001/getPatientInfo", {
        params: {
          patientIDnumber: StringfyIDnumber,
        },
      });
      console.log(response, "Responses");
      setPatientList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPatientDetails();
  }, []);

  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  const userRole = userInfo['user_role_id'];

  var patientInfoRoute = "";
  switch (userRole) {
      case 1: 
      patientInfoRoute = "/patient/patient-records/patient-info";
      break;
      case 2: 
      patientInfoRoute = "/secretary/patient-records/patient-info";
      break;
      case 3: 
      patientInfoRoute= "/dentist/patient-records/patient-info";
      break;
      case 4: 
      patientInfoRoute= "/admin/patient-records/patient-info";
      break;
  }
  var HomeRoute = "";
  switch (userRole) {
      case 1: 
      HomeRoute = "/patient";
      break;
      case 2: 
      HomeRoute = "/secretary";
      break;
      case 3: 
      HomeRoute = "/dentist";
      break;
      case 4: 
      HomeRoute = "/admin";
      break;
  }

  return (
    <>
      <div class="pagetitle">
        <h1>Patient Information</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href={HomeRoute}>Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href={patientInfoRoute}>Patients</a>
            </li>
            <li class="breadcrumb-item active">Patient Information</li>
          </ol>
        </nav>
      </div>

      <section class="section profile">
        <div class="row">
          <PatientProfileWidget />

          <div class="col-xl-8">
            <div className="card patient-info">
              <div className="card-body pt-3">
                <div className="card-title">Patient Information</div>
                <div className="divider"></div>

                {/* Personal Information */}
                {patientList.map((item, index) => (
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
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">
                      Last Name
                    </div>
                    <div id="lname" class="col-lg-auto col-md-auto">
                      {item.lname}
                    </div>
                  </div>
                ))}

                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Middle Name</div>
                    <div id="mname" class="col-lg-auto col-md-auto">
                      {item.mname}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Birthdate</div>
                    <div id="birthdate" class="col-lg-auto col-md-auto">
                      {item.bday}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Age</div>
                    <div id="age" class="col-lg-auto col-md-auto">
                      {item.age}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Gender</div>
                    <div id="gender" class="col-lg-auto col-md-auto">
                      {item.gender}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Profession</div>
                    <div id="profession" class="col-lg-auto col-md-auto">
                      {item.profession}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Cell #</div>
                    <div id="cell" class="col-lg-auto col-md-auto">
                      {item.mobile}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Tel #</div>
                    <div id="tel" class="col-lg-auto col-md-auto">
                      {item.tellphone}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Blood Type</div>
                    <div id="blood-type" class="col-lg-auto col-md-auto">
                      {item.blood}
                    </div>
                  </div>
                ))}
                
                <div className="divider"></div>
                {/* Address information */}
                {patientList.map((item, index) => (
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
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">
                      Municipality/City
                    </div>
                    <div id="municipality" class="col-lg-auto col-md-auto">
                      {item.municipality}
                    </div>
                  </div>
                ))}

                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Country</div>
                    <div id="country" class="col-lg-auto col-md-auto">
                      {item.country}
                    </div>
                  </div>
                ))}
                {/* OTHER SIDE */}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">District/Barangay</div>
                    <div id="brgy" class="col-lg-auto col-md-auto">
                      {item.brgy}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Province</div>
                    <div id="province" class="col-lg-auto col-md-auto">
                      {item.province}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">ZIP Code</div>
                    <div id="zipcode" class="col-lg-auto col-md-auto">
                      {item.zipcode}
                    </div>
                  </div>
                ))}

                 {/* Medical Conditions */}
                 {patientList.map((item, index) => (
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
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-4 col-md-4 label">Allergies</div>
                    <div id="allergies" class="col-lg-3">
                      {item.allergies}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Conditions</div>
                    <div id="conditions" class="col-lg-3">
                      {item.conditions}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-3 col-md-4 label">Precautions</div>
                    <div id="precautions" class="col-lg-3">
                      {item.precautions}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PatientInfo;
