import React, { useState } from 'react';
import "../../../styles/patient-info-edit.css";
import "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ProfileWidget from "../../../components/profile-widget";
import Axios from 'axios';

//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PatientInfoEdit = ({}) => {
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  const patientIDnumber = userInfo['patientIDnumber'];
  console.log(patientIDnumber);

  //calendar input
  const [startDate, setStartDate] = useState(new Date());

  const conditions = ['HEART DISEASE', 'HIGH BLOOD PRESSURE', 'RHEUMATIC', 'BLOOD DISORDERS', 'DIABETES', 'SEIZURES', 'TUBERCOLOSIS', 'BLOOD TUMORS / GROWTHS', 'ASTHMA', 'HEPATITIS', 'SEXUALLY TRANSMITTED DISEASES', 'STROKE']

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
  const [precautionValue, setPrecautionValue] = useState("");


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
     condValue:condValue,
     precautionValue: precautionValue
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
              <div className="card patient-info patient-info-edit">
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

                    <div className="container form-container">
                      <div className="row">
                        <h5 class="form-section-title">Personal Information</h5>

                        <div className="col-lg-3 col-md-3 col-sm-2">
                            <label for='firstName'>First Name</label>
                            <input name="firstName" type="text" className="form-control" id="firstName" placeholder="" onChange={(e) => setFirstValue(e.target.value)} required/>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-2">
                          <label for='middleName'>Middle Name</label>
                          <input name="middleName" type="text" className="form-control" id="middleName" onChange={(e) => setMiddleValue(e.target.value)} required/>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-2">
                          <label for='lastName'>Last Name</label>
                          <input name="lastName" type="text" className="form-control" id="lastName" onChange={(e) => setLastValue(e.target.value)} required/>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-2">
                          <label for='bday'>Date of Birth</label>
                            <DatePicker
                              selected={startDate}
                              isClearable
                              placeholderText="Choose a date"
                              minDate={new Date()}
                              shouldCloseOnSelect={false}
                              dateFormat="MMMM d, yyyy"
                            />
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-2">
                          <label for='age'>Age</label>
                          <input name="age" type="text" className="form-control" id="Birthday" onChange={(e) => setAgeValue(e.target.value)} required/>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-2">
                          <label for="gender">Gender</label>
                            <input class="form-check-input" type="radio" id="male" value="Male" onChange={(e) => setGenderValue(e.target.value)}></input>
                            <label class="form-check-label" for="male">Male</label>
                            <input class="form-check-input" type="radio" id="female" value="Female" onChange={(e) => setGenderValue(e.target.value)}></input>
                            <label class="form-check-label" for="female">Female</label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label for='email'>Email Address</label>
                          <input type="email" class="form-control" id="email" placeholder=""/>
                        </div>
                        
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label for='phoneNum'>Phone Number</label>
                          <input type="tel" class="form-control" id="phoneNum" pattern="[0-9]{4} [0-9]{3} [0-9]{4}"/>
                        </div>
                      </div>

                      <div className="row">
                      <h5 class="form-section-title">Address Information</h5>
                        <div className="col-lg-6">
                          <label for='houseStreet'>House No. & Name of Street</label>
                          <input type="text" className="form-control" id="houseStreet" onChange={(e) => setHouseValue(e.target.value)} required/>
                        </div>
                        <div className="col-lg-6">
                          <label for='brgy'>District/Barangay</label>
                          <input type="text" className="form-control" id="brgy" onChange={(e) => setBrgyValue(e.target.value)} required/>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <label for='city'>Municipality/City</label>
                          <input name="city" type="address-city" className="form-control" id="Address" onChange={(e) => setCityValue(e.target.value)} required/>                        </div>
                        <div className="col-lg-6">
                          <label for='brgy'>Province</label>
                          <input name="brgy" type="address" className="form-control" id="Address" onChange={(e) => setProvinceValue(e.target.value)} required/>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <label for='country'>Country</label>
                          <input name="country" type="address" className="form-control" id="Address" onChange={(e) => setCountryValue(e.target.value)} required/>
                          </div>
                        <div className="col-lg-6">
                          <label for='zip'>ZIP Code</label>
                          <input type="zip" className="form-control" id="Address" onChange={(e) => setZipValue(e.target.value)} required/>
                        </div>
                    </div>

                    <div className="row medical-conditions-row">
                      <h5 class="form-section-title">Medical Conditions</h5>
                        <div className="col-lg-12">
                          <label for='medical-conditions'>Are you taking any medications/ maintenance? Please name them.</label>
                          <input name='medical-conditions' type="text" className="form-control" id="Medications" onChange={(e) => setMedValue(e.target.value)} required></input>
                      </div>
                      <div className="col-lg-12">
                          <label for='allergies'>Do you have any allergies? Please specify.</label>
                          <input type="allergies" className="form-control" id="Allergies" onChange={(e) => setAllergiesValue(e.target.value)} required/>
                      </div>
                      <div className="col-lg-12">
                          <label for='conditions'>Check the appropriate box of the conditions that applies to you if you have or ever had any of the following conditions:</label>
                            <Form>
                              {conditions.map((item, index) => (
                                  <div key={index} className="row conditions-row">
                                    <Form.Check
                                      input value={[item]}
                                      id={[item]}
                                      type="checkbox"
                                      width='50%'
                                      label={`${item}`}
                                      onChange={(e) => setCondValue(e.target.value)} required
                                    />
                                  </div>
                              ))}
                            </Form>
                          {/* <input type="conditions" className="form-control" id="Conditions" onChange={(e) => setCondValue(e.target.value)} required/> */}
                      </div>
                      <div className="col-lg-12">
                          <label for='precautions'>Is there any other pertinent information regarding your health that we should know so we can take necessary precautions, if needed?</label>
                          <input type="precautions" className="form-control" id="precautions" onChange={(e) => setPrecautionValue(e.target.value)} required/>
                      </div>
                    </div>

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
      </section>
    </>
  );
};

export default PatientInfoEdit;
