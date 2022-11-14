import React from "react";
import "../../../styles/patient-info-edit.css";
import "react-bootstrap";
import ProfileWidget from "../../../components/profile-widget";

const PatientInfoEdit = () => {
  var userInfo = JSON.parse(window.localStorage.getItem('current-session'));
  const patientIDnumber = userInfo['patientIDnumber'];
  console.log(patientIDnumber);

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

  const updatePatientInfo = () =>{
    Axios.put("http://localhost:3001/updatePatientInfo",{

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
    setModalState("modal-2");
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
            <div className="card patient-info">
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
                    <input name="firstName" type="text" class="form-control" id="firstName" onChange={(e) => setFirstValue(e.target.value)} />
                  </div>

                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">
                    Last Name
                  </div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="lastName" type="text" class="form-control" id="lastName" onChange={(e) => setLastValue(e.target.value)} />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Middle Initial</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="middleName" type="text" class="form-control" id="middleName" onChange={(e) => setMiddleValue(e.target.value)} />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Birthdate</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="date" type="text" class="form-control" id="Birthday" onChange={(e) => setBirthDate(e.target.value)} />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Age</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="age" type="text" class="form-control" id="Birthday" onChange={(e) => setAgeValue(e.target.value)} />
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
                  <input name="profession" type="text" class="form-control" id="Profession" onChange={(e) => setProfessionValue(e.target.value)} />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Cell #</div>
                  <div class="col-lg-auto col-md-auto">
                  <input name="cellNumber" type="tel" class="form-control" id="cellNumber" onChange={(e) => setCellValue(e.target.value)} />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Tel #</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="telNumber" type="tel" class="form-control" id="telNumber" onChange={(e) => setTellNumber(e.target.value)} />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Blood Type</div>
                  <div class="col-lg-auto col-md-auto">
                    <input type="bloodType" class="form-control" id="bloodType" onChange={(e) => setBloodValue(e.target.value)}/>
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
                  <input type="address-house" class="form-control" id="Address" onChange={(e) => setHouseValue(e.target.value)}/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-auto col-md-auto label">
                  Municipality/City
                </div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address-city" class="form-control" id="Address" onChange={(e) => setCityValue(e.target.value)}/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-auto col-md-auto label">Country</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" class="form-control" id="Address" onChange={(e) => setCountryValue(e.target.value)}/>
                </div>
              </div>

              {/* OTHER SIDE */}
              <div class="row">
                <div class="col-lg-auto col-md-auto label">District/Barangay</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" class="form-control" id="Address" onChange={(e) => setBrgyValue(e.target.value)}/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-auto col-md-auto label">Province</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" class="form-control" id="Address" onChange={(e) => setProvinceValue(e.target.value)}/>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-auto col-md-auto label">ZIP Code</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" class="form-control" id="Address" onChange={(e) => setZipValue(e.target.value)}/>
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
                  <input type="medications" class="form-control" id="Medications" onChange={(e) => setMedValue(e.target.value)}/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-md-4 label">Allergies</div>
                {/* <div id="allergies" class="col-lg-3">
                  Ibuprofen
                </div> */}
                <div class="col-lg-3">
                  <input type="allergies" class="form-control" id="Allergies" onChange={(e) => setAllergiesValue(e.target.value)}/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Conditions</div>
                {/* <div id="conditions" class="col-lg-3">
                  Asthma
                </div> */}
                <div class="col-lg-3">
                  <input type="conditions" class="form-control" id="Conditions" onChange={(e) => setCondValue(e.target.value)}/>
                </div>
              </div>

            </div>
            {/* end of card body */}
            <button className="btn btn-primary" type="submit" onClick={updatePatientInfo()}>
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
