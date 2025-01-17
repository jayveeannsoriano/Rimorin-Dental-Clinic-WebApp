import React, {useState,useMemo,useEffect} from "react";
import { useSearchParams,useLocation} from "react-router-dom";
import Axios from 'axios';

import "../../styles/patient-info.css";
import "react-bootstrap";

const AdminModulePatientInfo = () => {

  const location = useLocation()
    const paramsID = new URLSearchParams(location.search)
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(()=>JSON.stringify(getPatientIDNumber).replace(/"/g,""));
    console.log(StringfyIDnumber);
    
    
    const [patientList, setPatientList] = useState([]);
    console.log(patientList);
    const getPatientDetails = async() => {
      try{
          const response = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getPatientInfo',{
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
      <section class="section profile">
        <div class="row">
          <div class="col-xl-12 col-lg-auto col-md-auto col-sm-auto">
            <div className="patient-info">
              
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
                      (+63) {item.mobile}
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
                    <div class="col-lg-auto col-md-auto label">Medications/Maintenance</div>
                    <div id="medications" class="col-lg-auto col-md-auto">
                      {item.medications}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Allergies</div>
                    <div id="allergies" class="col-lg-auto col-md-auto">
                      {item.allergies}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Conditions</div>
                    <div id="conditions" class="col-lg-auto col-md-auto">
                      {item.conditions}
                    </div>
                  </div>
                ))}
                {patientList.map((item, index) => (
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Precautions</div>
                    <div id="precautions" class="col-lg-auto col-md-auto">
                      {item.precautions}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminModulePatientInfo;
