import React, { useState, useEffect } from 'react';
import "../../../styles/patient-info-edit.css";
import "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ProfileWidget from "../../../components/profile-widget";
import Axios from 'axios';

//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';

const PatientInfoEdit = ({ }) => {
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  const patientIDnumber = userInfo['patientIDnumber'];
  console.log(patientIDnumber);
  console.log(userInfo, "this are all the data of the user");

  const [userData, setUserData] = useState([]);

  //calendar input
  const [startDate, setStartDate] = useState(new Date());

  const conditions = ['HEART DISEASE', 'HIGH BLOOD PRESSURE', 'RHEUMATIC', 'BLOOD DISORDERS', 'DIABETES', 'SEIZURES', 'TUBERCOLOSIS', 'BLOOD TUMORS / GROWTHS', 'ASTHMA', 'HEPATITIS', 'SEXUALLY TRANSMITTED DISEASES', 'STROKE']

  const [modalState, setModalState] = useState('close');
  const [firstName, setFirstValue] = useState('');
  const [lastName, setLastValue] = useState('');
  const [middleName, setMiddleValue] = useState('');
  const [suffix, setSuffix] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [professionValue, setProfessionValue] = useState('');
  const [cellNumber, setCellValue] = useState('');
  const [tellNumber, setTellNumber] = useState('');
  const [bloodType, setBloodValue] = useState('');
  const [houseNum, setHouseValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [countryValue, setCountryValue] = useState('');
  const [brgyValue, setBrgyValue] = useState('');
  const [provinceValue, setProvinceValue] = useState('');
  const [zipValue, setZipValue] = useState('');
  const [medValue, setMedValue] = useState('');
  const [allergiesValue, setAllergiesValue] = useState('');
  const [condValue, setCondValue] = useState('');
  const [precautionValue, setPrecautionValue] = useState('');

  console.log(firstName, 'updated');
  const defaultUserInfo = async () => {
    try {

      const response = await Axios.get("http://localhost:3001/getUserInfo", {
        params: {
          patientIDnumber: patientIDnumber
        }
      });
      setUserData(response.data);
      setFirstValue(response.data[0].fname)
      setLastValue(response.data[0].lname)
      setMiddleValue(response.data[0].mname)
      setSuffix(response.data[0].suffix)
      setBirthDate(response.data[0].bday)
      setAgeValue(response.data[0].age)
      setGenderValue(response.data[0].gender)
      setProfessionValue(response.data[0].profession)
      setCellValue(response.data[0].mobile)
      setTellNumber(response.data[0].tellphone)
      setBloodValue(response.data[0].blood)
      setHouseValue(response.data[0].house)
      setCityValue(response.data[0].municipality)
      setCountryValue(response.data[0].country)
      setBrgyValue(response.data[0].brgy)
      setProvinceValue(response.data[0].province)
      setZipValue(response.data[0].zipcode)
      setMedValue(response.data[0].medications)
      setAllergiesValue(response.data[0].allergies)
      setCondValue(response.data[0].conditions)
      setPrecautionValue(response.data[0].precautions)


    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    defaultUserInfo()
  }, []);


  const updatePatientInfo = async () => {
    await Axios.put("http://localhost:3001/updatePatientInfo", {

      patientIDnumber: patientIDnumber,

      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      suffix: suffix,
      birthDate: birthDate,
      ageValue: ageValue,
      genderValue: genderValue,
      professionValue: professionValue,
      cellNumber: cellNumber,
      tellNumber: tellNumber,
      bloodType: bloodType,
      houseNum: houseNum,
      cityValue: cityValue,
      countryValue: countryValue,
      brgyValue: brgyValue,
      provinceValue: provinceValue,
      zipValue: zipValue,
      medValue: medValue,
      allergiesValue: allergiesValue,
      condValue: condValue,
      precautionValue: precautionValue
    });

    console.log("New info saved in DB")
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
              <form>
                <div className="card-body pt-3">
                  <h5 className="card-title">Patient Information</h5>

                  <div className="divider"></div>
                  <div className="container form-container">

                    <h5 class="form-section-title">Personal Information</h5>
                    <div className="row">
                      <div className="col">
                        <label for='firstName'>First Name</label>
                        {userData.map((item, index) => (
                          <input name="firstName" type="text" className="form-control" id="firstName" placeholder={item.fname} defaultValue={item.fname} onChange={(e) => setFirstValue(e.target.value)} required />
                        ))}
                      </div>


                      <div className="col">
                        <label for='middleName'>Middle Name</label>
                        {userData.map((item, index) => (
                          <input name="middleName" type="text" className="form-control" id="middleName" placeholder={item.mname} defaultValue={item.mname} onChange={(e) => setMiddleValue(e.target.value)} required />
                        ))}
                      </div>


                    </div>

                    <div className="row">
                      <div className="col-8">
                        <label for='lastName'>Last Name</label>
                        {userData.map((item, index) => (
                          <input name="lastName" type="text" className="form-control" id="lastName" placeholder={item.lname} defaultValue={item.lname} onChange={(e) => setLastValue(e.target.value)} required />
                        ))}
                      </div>

                      <div className="col">
                        <label for='suffix'>Suffix</label>
                        {userData.map((item, index) => (
                          <input name="suffix" type="text" className="form-control" id="suffix" placeholder={item.suffix} defaultValue={item.suffix} onChange={(e) => setSuffix(e.target.value)} required />
                        ))}
                      </div>
                    </div>


                    <div className="row">
                      <div className="col">
                        <label for='bday'>Date of Birth</label>
                        {userData.map((item, index) => (
                          <input
                            type="date"
                            className="form-control"
                            placeholder={item.bday} defaultValue={item.bday}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                          />
                        ))}
                      </div>

                      <div className="col-2">
                        <label for='age'>Age</label>
                        {userData.map((item, index) => (
                          <input name="age" type="text" className="form-control" id="Birthday" placeholder={item.age} defaultValue={item.age} onChange={(e) => setAgeValue(e.target.value)} required />
                        ))}
                      </div>

                      <div className="col">
                        <label for="gender">Gender</label><br />
                        <div className="col">
                          <input class="form-check-input" type="radio" id="male" value="Male" onChange={(e) => setGenderValue(e.target.value)}></input>
                          <label class="form-check-label" for="male">Male</label>
                        </div>

                        <div className="col">
                          <input class="form-check-input" type="radio" id="female" value="Female" onChange={(e) => setGenderValue(e.target.value)}></input>
                          <label class="form-check-label" for="female">Female</label>
                        </div>
                      </div>
                    </div>

                    <div className="row">

                      <div className="col-8">
                        <label for='email'>Email Address</label>
                        {userData.map((item, index) => (
                          <input type="email" class="form-control" id="email" placeholder={item.email} defaultValue={item.email} />
                        ))}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <label for='phoneNum'>Phone Number</label>
                        {userData.map((item, index) => (
                          <input type="tel" class="form-control" id="phoneNum" placeholder={item.mobile} defaultValue={item.mobile} onChange={(e) => { setCellValue(e.target.value) }} pattern="[0-9]{4} [0-9]{3} [0-9]{4}" />
                        ))}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <label for='tellNumber'>Telephone Number</label>
                        {userData.map((item, index) => (
                          <input type="tel" class="form-control" id="tellNumber" placeholder={item.tellNumber} defaultValue={item.tellNumber} onChange={(e) => { setTellNumber(e.target.value) }} pattern="[0-9]{4} [0-9]{3} [0-9]{4}" />
                        ))}
                      </div>
                    </div>

                    <div className="row">
                      <h5 class="form-section-title">Address Information</h5>
                      <div className="col-lg-6">
                        <label for='houseStreet'>House No. & Name of Street</label>
                        {userData.map((item, index) => (
                          <input type="text" className="form-control" id="houseStreet" placeholder={item.house} defaultValue={item.house} onChange={(e) => setHouseValue(e.target.value)} required />
                        ))}
                      </div>
                      <div className="col-lg-6">
                        <label for='brgy'>District/Barangay</label>
                        {userData.map((item, index) => (
                          <input type="text" className="form-control" id="brgy" placeholder={item.brgy} defaultValue={item.brgy} onChange={(e) => setBrgyValue(e.target.value)} required />
                        ))}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <label for='city'>Municipality/City</label>
                        {userData.map((item, index) => (
                          <input name="city" type="address-city" className="form-control" id="Address" placeholder={item.municipality} defaultValue={item.municipality} onChange={(e) => setCityValue(e.target.value)} required />
                        ))}
                      </div>
                      <div className="col-lg-6">
                        <label for='brgy'>Province</label>
                        {userData.map((item, index) => (
                          <input name="brgy" type="address" className="form-control" id="Address" placeholder={item.province} defaultValue={item.province} onChange={(e) => setProvinceValue(e.target.value)} required />
                        ))}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <label for='country'>Country</label>
                        {userData.map((item, index) => (
                          <input name="country" type="address" className="form-control" id="Address" placeholder={item.country} defaultValue={item.country} onChange={(e) => setCountryValue(e.target.value)} required />
                        ))}
                      </div>
                      <div className="col-lg-6">
                        <label for='zip'>ZIP Code</label>
                        {userData.map((item, index) => (
                          <input type="zip" className="form-control" id="Address" placeholder={item.zipcode} defaultValue={item.zipcode} onChange={(e) => setZipValue(e.target.value)} required />
                        ))}
                      </div>
                    </div>

                    <div className="row medical-conditions-row">
                      <h5 class="form-section-title">Medical Conditions</h5>

                      <div className="col-lg-12">
                        <label for='medical-conditions'>Medications/Maintenance</label>
                        {userData.map((item, index) => (
                          <input name='medical-conditions' type="text" className="form-control" id="Medications" placeholder={item.medications} defaultValue={item.medications} onChange={(e) => setMedValue(e.target.value)} required></input>
                        ))}
                      </div>
                      <div className="col-lg-12">
                        <label for='allergies'>Do you have any allergies? Please specify.</label>
                        {userData.map((item, index) => (
                          <input type="allergies" className="form-control" id="Allergies" placeholder={item.allergies} defaultValue={item.allergies} onChange={(e) => setAllergiesValue(e.target.value)} required />
                        ))}
                      </div>
                      <div className="col-lg-12">
                        <label for='conditions'>Check the appropriate box of the conditions that applies to you if you have or ever had any of the following conditions:</label>
                        <div className="slots2">
                          <Form>
                            {conditions.map((item, index) => (
                              <div key={index} className="conditions-row">
                                <Form.Check
                                  input value={[item]}
                                  id={[item]}
                                  type="checkbox"
                                  // width='50%'
                                  label={`${item}`}
                                  onChange={(e) => setCondValue(e.target.value)} required
                                />

                              </div>
                            ))}
                          </Form>
                        </div>
                        {/* <input type="conditions" className="form-control" id="Conditions" onChange={(e) => setCondValue(e.target.value)} required/> */}
                      </div>
                      <div className="col-lg-12">
                        <label for='precautions'>Is there any other pertinent information regarding your health that we should know so we can take necessary precautions, if needed?</label>
                        {userData.map((item, index) => (
                          <input type="precautions" className="form-control" id="precautions" placeholder={item.precautions} defaultValue={item.precautions} onChange={(e) => setPrecautionValue(e.target.value)} required />
                        ))}
                      </div>

                      <Button className='edit-save' onClick={() => updatePatientInfo()}>Save</Button>
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
