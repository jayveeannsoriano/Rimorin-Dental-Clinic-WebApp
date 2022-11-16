import React, { useState } from 'react';
import "../../../styles/patient-info-edit.css";
import "react-bootstrap";
import ProfileWidget from "../../../components/profile-widget";
import Axios from 'axios';

const PatientInfoEdit = ({}) => {
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  const patientIDnumber = userInfo['patientIDnumber'];
  console.log(patientIDnumber);

  const [modalState, setModalState] = useState('close');
  const [firstName, setFirstValue] = useState("");
  const [lastName, setLastValue] = useState("");
  const [middleName, setMiddleValue] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [professionValue, setProfessionValue] = useState("");
  const [cellNumber, setCellValue] = useState("");
  const [tellNumber, setTellNumber] = useState("");
  const [bloodType, setBloodValue] = useState("");
  const [houseNum, setHouseValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [brgyValue, setBrgyValue] = useState("");
  const [provinceValue, setProvinceValue] = useState("");
  const [zipValue, setZipValue] = useState("");
  const [medValue, setMedValue] = useState("");
  const [allergiesValue, setAllergiesValue] = useState("");
  const [condValue, setCondValue] = useState("");

  const updatePatientInfo = async () =>{
    await Axios.put("http://localhost:3001/updatePatientInfo",{

     patientIDnumber: patientIDnumber,

     firstName:firstName,
     lastName:lastName,
     middleName:middleName,
     birthDate:birthDate,
     ageValue:ageValue,
     genderValue:genderValue,
     professionValue:professionValue,
     cellNumber:cellNumber,
     tellNumber:tellNumber,
     bloodType:bloodType,
     houseNum:houseNum,
     cityValue:cityValue,
     countryValue:countryValue,
     brgyValue:brgyValue,
     provinceValue:provinceValue,
     zipValue:zipValue,
     medValue:medValue,
     allergiesValue: allergiesValue,
     condValue:condValue
     });
  }



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
            <li class="breadcrumb-item">Patient Information</li>
            <li class="breadcrumb-item active">Patient Information Edit</li>
          </ol>
        </nav>
      </div>


      <section class="section profile">
        <div class="row">
          <ProfileWidget />
          
          <div class="col-xl-8">
          {/* <form> */}
            <div className="card patient-info">
            <form onSubmit={() => updatePatientInfo()}> 
              <div className="card-body pt-3">
                <h5 className="card-title">Patient Information</h5>


                <button className="btn btn-primary" type="submit">
                  <i class="bi bi-pencil-fill"></i>
                  Edit
                </button>

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

            
                <div class="row">
                  <h4>Personal Information</h4>
                  <div class="col-lg-auto col-md-auto label">
                    First Name
                  </div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="firstName" type="text" className="form-control" id="firstName" onChange={(e) => setFirstValue(e.target.value)} required/>
                  </div>

                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">
                    Last Name
                  </div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="lastName" type="text" className="form-control" id="lastName" onChange={(e) => setLastValue(e.target.value)} required/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Middle Initial</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="middleName" type="text" className="form-control" id="middleName" onChange={(e) => setMiddleValue(e.target.value)} required/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Birthdate</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="date" type="text" className="form-control" id="Birthday" onChange={(e) => setBirthDate(e.target.value)} required/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Age</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="age" type="text" className="form-control" id="Birthday" onChange={(e) => setAgeValue(e.target.value)} required/>
                  </div>
                </div>

                {/* OTHER SIDE */}
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Gender</div>
                  <div class="col-lg-auto col-md-auto">
                    <label onChange={(e) => setGenderValue(e.target.value)}>
                      <input
                        type="radio"
                        // onChange={handleChange('gender')}
                        // defaultValue={values.gender}
                        className="form-check-input"
                        value="Female"
                        name="gender"
                        required
                      />
                      <span>Female</span>
                      <input
                        type="radio"
                        className="form-check-input"
                        value="Male"
                        name="gender"
                        required
                      />
                      <span>Male</span>
                    </label>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Profession</div>
                  <div class="col-lg-auto col-md-auto">
                  <input name="profession" type="text" className="form-control" id="Profession" onChange={(e) => setProfessionValue(e.target.value)} required/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Cell #</div>
                  <div class="col-lg-auto col-md-auto">
                  <input name="cellNumber" type="tel" className="form-control" id="cellNumber" onChange={(e) => setCellValue(e.target.value)} required/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Tel #</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="telNumber" type="tel" className="form-control" id="telNumber" onChange={(e) => setTellNumber(e.target.value)} required/>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Blood Type</div>
                  <div class="col-lg-auto col-md-auto">
                    <input type="bloodType" className="form-control" id="bloodType" onChange={(e) => setBloodValue(e.target.value)} required/>
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
                <div class="col-lg-auto col-md-auto">
                  <input type="address-house" className="form-control" id="Address" onChange={(e) => setHouseValue(e.target.value)} required/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-auto col-md-auto label">
                  Municipality/City
                </div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address-city" className="form-control" id="Address" onChange={(e) => setCityValue(e.target.value)} required/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-auto col-md-auto label">Country</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" className="form-control" id="Address" onChange={(e) => setCountryValue(e.target.value)} required/>
                </div>
              </div>

              {/* OTHER SIDE */}
              <div class="row">
                <div class="col-lg-auto col-md-auto label">District/Barangay</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" className="form-control" id="Address" onChange={(e) => setBrgyValue(e.target.value)} required/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-auto col-md-auto label">Province</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" className="form-control" id="Address" onChange={(e) => setProvinceValue(e.target.value)} required/>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-auto col-md-auto label">ZIP Code</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" className="form-control" id="Address" onChange={(e) => setZipValue(e.target.value)} required/>
                </div>
              </div>

              <div className="divider"></div>

              {/* Medical Conditions */}
              <div class="row">
                <h4>Medical Conditions</h4>
                <div class="col-lg-5 col-md-4 label">
                  Medications/Maintenance
                </div>

                <div class="col-lg-3">
                  <input type="medications" className="form-control" id="Medications" onChange={(e) => setMedValue(e.target.value)} required/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-md-4 label">Allergies</div>
                {/* <div id="allergies" class="col-lg-3">
                  Ibuprofen
                </div> */}
                <div class="col-lg-3">
                  <input type="allergies" className="form-control" id="Allergies" onChange={(e) => setAllergiesValue(e.target.value)} required/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Conditions</div>
                {/* <div id="conditions" class="col-lg-3">
                  Asthma
                </div> */}
                <div class="col-lg-3">
                  <input type="conditions" className="form-control" id="Conditions" onChange={(e) => setCondValue(e.target.value)} required/>
                </div>
              </div>

              
              <button className="btn btn-primary" type="submit">
                  <i class="bi bi-save"></i>
                  Save Changes
                </button>
            </form>
            </div>
          {/* </form>  */}
            {/* end of card body */}
            <button className="btn btn-primary" type="submit">
                  <i class="bi bi-save"></i>
                  Save
                </button>
                <div className="divider"></div>
          </div>
         
        </div>

      </section>
    </>
  );
};

export default PatientInfoEdit;
