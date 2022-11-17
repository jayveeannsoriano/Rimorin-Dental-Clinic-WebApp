import React, {useState,useMemo,useEffect} from "react";
import { useSearchParams,useLocation} from "react-router-dom";
import Axios from 'axios';
import PatientProfileWidget from '../patient-list/patient-profile-widget'

import "../../styles/patient-info.css";
import "react-bootstrap";

const PatientInfo = () => {

  const location = useLocation()
    const paramsID = new URLSearchParams(location.search)
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(()=>JSON.stringify(getPatientIDNumber).replace(/"/g,""));
    console.log(StringfyIDnumber);
    
    
    const [patientList, setPatientList] = useState([]);
    console.log(patientList);
    const getPatientDetails = async() => {
      try{
          const response = await Axios.get('http://localhost:3001/getPatientInfo',{
            params:{
            patientIDnumber: StringfyIDnumber}
          });
          console.log(response, "Responses");
          setPatientList(response.data);
      }catch (error){
          console.log(error)
      }
  }
  
  useEffect(() => {
      getPatientDetails ();
  }, []);


  return (
    <>
      <div class="pagetitle">
        <h1>Patient Information</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/dentist">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/dentist/patient-records/patient-info">Patients</a>
            </li>
            <li class="breadcrumb-item active">Patient Information</li>
          </ol>
        </nav>
      </div>

      
      <section class="section profile">
      {patientList.map((item, index) => (
        <div class="row">
          <PatientProfileWidget />

          <div class="col-xl-8">
            <div className="card patient-info">
              <div className="card-body pt-3">
                <h5 className="card-title">Patient Information</h5>
                
                <div className="divider"></div>

                {/* Patient information */}
    
                <div class="row">
                  <h4>Personal Information</h4>
                  <div class="col-lg-auto col-md-auto label">
                    First Name
                  </div>
                  <div id="fname" class="col-lg-auto col-md-auto">
                    {item.fname}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">
                    Last Name
                  </div>
                  <div id="lname" class="col-lg-auto col-md-auto">
                  {item.lname}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Middle Initial</div>
                  <div id="mname" class="col-lg-auto col-md-auto">
                    UNKNOWN PA
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Birthdate</div>
                  <div id="birthdate" class="col-lg-auto col-md-auto">
                  {item.bday}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Age</div>
                  <div id="age" class="col-lg-auto col-md-auto">
                    24
                  </div>
                </div>

                {/* OTHER SIDE */}
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Gender</div>
                    <div id="gender" class="col-lg-auto col-md-auto">
                    {item.gender}
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Profession</div>
                    <div id="profession" class="col-lg-auto col-md-auto">
                      UNKNOWN
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Cell #</div>
                    <div id="cell" class="col-lg-auto col-md-auto">
                      (+63) {item.mobile}
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Tel #</div>
                    <div id="tel" class="col-lg-auto col-md-auto">
                    UNKNOWN
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Blood Type</div>
                    <div id="blood-type" class="col-lg-auto col-md-auto">
                    UNKNOWN
                    </div>
                  </div>
                </div> 
                {/* end of container */}

                <div className="divider"></div>

                {/* Address information */}
                <div class="row">
                  <h4>Address Information</h4>
                  <div class="col-lg-auto col-md-auto label">
                    House No. & Street Name
                  </div>
                  <div id="houseno" class="col-lg-auto col-md-auto">
                    {item.house}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">
                    Municipality/City
                  </div>
                  <div id="municipality" class="col-lg-auto col-md-auto">
                    {item.municipality}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Country</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    {item.country}
                  </div>
                </div>

                {/* OTHER SIDE */}
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">District/Barangay</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    {item.brgy}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Province</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    {item.province}
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">ZIP Code</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    UNKNOWN
                  </div>
                </div>

                <div className="divider"></div>

                {/* Medical Conditions */}
                <div class="row">
                  <h4>Medical Conditions</h4>
                  <div class="col-lg-5 col-md-4 label">
                    Medications/Maintenance
                  </div>
                  <div id="medications" class="col-lg-3">
                    {item.medications}
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-4 col-md-4 label">Allergies</div>
                  <div id="allergies" class="col-lg-3">
                    {item.allergies}
                  </div>
                </div>
                
                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Conditions</div>
                  <div id="conditions" class="col-lg-3">
                    {item.conditions}
                  </div>
                </div>

              </div>
              {/* end of card body */}
            </div>
          </div>
         ))}
      </section>
    </>
  );
};

export default PatientInfo;
