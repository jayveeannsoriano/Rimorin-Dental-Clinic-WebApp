import React, { useState, useEffect } from 'react';
import "../../../styles/patient-info-edit.css";
import "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ProfileWidget from "../../../components/patient-profilewidget";
import Axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import ProfileInfoEditSaved from '../../../components/modals/success-modals/profile-info-edit-saved';

//datepicker
import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'react-bootstrap';

const PatientInfoEdit = () => {
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  const patientIDnumber = userInfo['patientIDnumber'];
  console.log(patientIDnumber);
  console.log(userInfo, "this are all the data of the user");

  const [userData, setUserData] = useState([]);

  //calendar input
  const [startDate, setStartDate] = useState(new Date());

  const Listconditions = ['HEART DISEASE', 'HIGH BLOOD PRESSURE', 'RHEUMATIC', 'BLOOD DISORDERS', 'DIABETES', 'SEIZURES', 'TUBERCOLOSIS', 'BLOOD TUMORS / GROWTHS', 'ASTHMA', 'HEPATITIS', 'SEXUALLY TRANSMITTED DISEASES', 'STROKE', "NONE"]

  // const [modalState, setModalState] = useState('close');
  const [firstName, setFirstValue] = useState('');
  const [lastName, setLastValue] = useState('');
  const [middleName, setMiddleValue] = useState('');
  const [suffix, setSuffix] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [ageValue, setAgeValue] = useState('');
  const [genderValue, setGenderValue] = useState('');
  const [professionValue, setProfessionValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
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

  const [modalState, setModalState] = useState(false);
  const handleModalClose = () => setModalState(false);
  const handleModal = () => {
    setModalState('show-modal')
  }

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
      setEmailValue(response.data[0].mobile)
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
      email: emailValue,
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
              <a href="/patient">Home</a>
            </li>
            <li class="breadcrumb-item">Patient Records</li>
            <li class="breadcrumb-item">
              {" "}
              <a href="/patient/patient-records/patient-info">
                {" "}
                Patient Information{" "}
              </a>
            </li>
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
                      <div className="col-lg-3">
                        <label for="firstName">First Name</label>
                        {userData.map((item, index) => (
                          <input
                            name="firstName"
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder={item.fname}
                            defaultValue={item.fname}
                            onChange={(e) => setFirstValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>

                      <div className="col-lg-3">
                        <label for="middleName">Middle Name</label>
                        {userData.map((item, index) => (
                          <input
                            name="middleName"
                            type="text"
                            className="form-control"
                            id="middleName"
                            placeholder={item.mname}
                            defaultValue={item.mname}
                            onChange={(e) => setMiddleValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>

                      <div className="col-lg-3">
                        <label for="lastName">Last Name</label>
                        {userData.map((item, index) => (
                          <input
                            name="lastName"
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder={item.lname}
                            defaultValue={item.lname}
                            onChange={(e) => setLastValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>

                      <div className="col-lg-2">
                        <label for="suffix">Suffix</label>
                        {userData.map((item, index) => (
                          <input
                            name="suffix"
                            type="text"
                            className="form-control"
                            id="suffix"
                            placeholder={item.suffix}
                            defaultValue={item.suffix}
                            onChange={(e) => setSuffix(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-3">
                        <label for="bday">Date of Birth</label>
                        {userData.map((item, index) => (
                          <input
                            type="date"
                            className="form-control"
                            placeholder={item.bday}
                            defaultValue={item.bday}
                            onChange={(e) => setBirthDate(e.target.value)}
                            required
                          />
                        ))}
                      </div>

                      {/*<div className="col-lg-3">
                        <label for='age'>Age</label>
                        {userData.map((item, index) => (
                          <input name="age" type="text" className="form-control" id="age" placeholder={item.age} defaultValue={item.age} onChange={(e) => setAgeValue(e.target.value)} required />
                        ))}
                      </div>*/}

                      <div className="col-lg-3">
                        <label for="blood">Blood Type</label>
                        {userData.map((item, index) => (
                          <Form.Select
                            name="blood"
                            placeholder={item.blood}
                            defaultValue={item.blood}
                            onChange={(e) => setBloodValue(e.target.value)}
                            required
                          >
                            <option value="" selected disabled>
                              Select
                            </option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            <option value="O">O</option>
                          </Form.Select>
                          //<input name="blood" type="text" className="form-control" id="blood" placeholder={item.blood} defaultValue={item.blood} onChange={(e) => setBloodValue(e.target.value)} required />
                        ))}
                      </div>

                      <div className="col-lg-5">
                        <Form.Label>Gender:</Form.Label>
                        {userData.map((item, index) => (
                          <div className="mb-3">
                            <Form.Check
                              inline
                              label="Male"
                              name="group1"
                              type="radio"
                              checked={item.gender === "Male"}
                              onChange={(e) => setGenderValue(e.target.value)}
                            />
                            <Form.Check
                              inline
                              label="Female"
                              name="group1"
                              type="radio"
                              checked={item.gender === "Female"}
                              onChange={(e) => setGenderValue(e.target.value)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <label for="email">Email Address</label>
                        {userData.map((item, index) => (
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder={item.email}
                            defaulValue={item.email}
                            onChange={(e) => setEmailValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                      <div className="col-6">
                        <label for="profession">Profession</label>
                        {userData.map((item, index) => (
                          <input
                            type="text"
                            class="form-control"
                            id="profession"
                            placeholder={item.profession}
                            defaultValue={item.profession}
                            onChange={(e) => setProfessionValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <label for="phoneNum">Phone Number</label>
                        {userData.map((item, index) => (
                          <input
                            type="tel"
                            class="form-control"
                            id="phoneNum"
                            pattern="[0-9]{4} [0-9]{3} [0-9]{4}"
                            placeholder={item.mobile}
                            defaultValue={item.mobile}
                            onChange={(e) => {
                              setCellValue(e.target.value);
                            }}
                          />
                        ))}
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <label for="tellNumber">Telephone Number</label>
                        {userData.map((item, index) => (
                          <input
                            type="tel"
                            class="form-control"
                            id="tellNumber"
                            pattern="[0-9]{4} [0-9]{3} [0-9]{4}"
                            placeholder={item.tellNumber}
                            defaultValue={item.tellNumber}
                            onChange={(e) => {
                              setTellNumber(e.target.value);
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="row">
                      <h5 class="form-section-title">Address Information</h5>
                      <div className="col-lg-6">
                        <label for="houseStreet">
                          House No. & Name of Street
                        </label>
                        {userData.map((item, index) => (
                          <input
                            type="text"
                            className="form-control"
                            id="houseStreet"
                            placeholder={item.house}
                            defaultValue={item.house}
                            onChange={(e) => setHouseValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                      <div className="col-lg-6">
                        <label for="brgy">District/Barangay</label>
                        {userData.map((item, index) => (
                          <input
                            type="text"
                            className="form-control"
                            id="brgy"
                            placeholder={item.brgy}
                            defaultValue={item.brgy}
                            onChange={(e) => setBrgyValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <label for="city">Municipality/City</label>
                        {userData.map((item, index) => (
                          <input
                            name="city"
                            type="address-city"
                            className="form-control"
                            id="Address"
                            placeholder={item.municipality}
                            defaultValue={item.municipality}
                            onChange={(e) => setCityValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                      <div className="col-lg-6">
                        <label for="brgy">Province</label>
                        {userData.map((item, index) => (
                          <input
                            name="brgy"
                            type="address"
                            className="form-control"
                            id="Address"
                            placeholder={item.province}
                            defaultValue={item.province}
                            onChange={(e) => setProvinceValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <label for="country">Country</label>
                        {userData.map((item, index) => (
                          <input
                            name="country"
                            type="address"
                            className="form-control"
                            id="Address"
                            placeholder={item.country}
                            defaultValue={item.country}
                            onChange={(e) => setCountryValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                      <div className="col-lg-6">
                        <label for="zip">ZIP Code</label>
                        {userData.map((item, index) => (
                          <input
                            type="zip"
                            className="form-control"
                            id="Address"
                            placeholder={item.zipcode}
                            defaultValue={item.zipcode}
                            onChange={(e) => setZipValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                    </div>

                    <div className="row medical-conditions-row">
                      <h5 class="form-section-title">Medical Conditions</h5>

                      <div className="col-lg-12">
                        <label for="medical-conditions">
                          Medications/Maintenance
                        </label>
                        {userData.map((item, index) => (
                          <input
                            name="medical-conditions"
                            type="text"
                            className="form-control"
                            id="Medications"
                            placeholder={item.medications}
                            defaultValue={item.medications}
                            onChange={(e) => setMedValue(e.target.value)}
                            required
                          ></input>
                        ))}
                      </div>
                      <div className="col-lg-12">
                        <label for="allergies">
                          Do you have any allergies? Please specify.
                        </label>
                        {userData.map((item, index) => (
                          <input
                            type="allergies"
                            className="form-control"
                            id="Allergies"
                            placeholder={item.allergies}
                            defaultValue={item.allergies}
                            onChange={(e) => setAllergiesValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                      <div className="col-lg-12">
                        <label for="conditions">
                          Check the appropriate box of the conditions that
                          applies to you if you have or ever had any of the
                          following conditions:
                        </label>
                        <br/>
                        {userData.map((item, index) => {
                          return(
                            <div className="slots2">
                              <Form>
                                  {Listconditions.map((item2, index) => (
                                    <div key={index} className="conditions-row">
                                      <Form.Check
                                        input
                                        value={[item2]}
                                        id={[item2]}
                                        type="checkbox"
                                        checked = {item.conditions === [item2]}
                                        label={`${item2}`}
                                        onChange={(e) => setCondValue(e.target.value)}
                                        required
                                      />
                                    </div>
                                    ))}
                                </Form>
                              </div>
                            );
                          })}
                      </div>
                      <div className="col-lg-12">
                        <label for="precautions">
                          Is there any other pertinent information regarding
                          your health that we should know so we can take
                          necessary precautions, if needed?
                        </label>
                        <br/>
                        {userData.map((item, index) => (
                          <input
                            type="precautions"
                            className="form-control"
                            id="precautions"
                            placeholder={item.precautions}
                            defaultValue={item.precautions}
                            onChange={(e) => setPrecautionValue(e.target.value)}
                            required
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button
                    className="edit-save text-right"
                    onClick={() => {
                      handleModal();
                      updatePatientInfo();
                    }}
                  >
                    Save Changes
                  </Button>
                  {/* <ProfileInfoEditSaved/> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Modal show={modalState == "show-modal"} onHide={handleModalClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Appointment Marked as No Show</Modal.Title>
        </Modal.Header> */}

        <Modal.Body closeButton>
          {/* <img src={successful} alt="success image" className='success-img' /> */}
          <p className="modal-txt">
            You have succesfully updated your changes!
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PatientInfoEdit;
