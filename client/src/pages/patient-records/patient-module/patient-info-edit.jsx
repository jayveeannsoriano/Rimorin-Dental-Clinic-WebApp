import React from "react";
import "../../../styles/patient-info-edit.css";
import "react-bootstrap";
import ProfileWidget from "../../../components/profile-widget";

const PatientInfoEdit = () => {
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
                    <input name="firstName" type="text" class="form-control" id="firstName" value="Ricci" />
                  </div>

                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">
                    Last Name
                  </div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="lastName" type="text" class="form-control" id="lastName" value="Blynthe" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Middle Initial</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="middleName" type="text" class="form-control" id="middleName" value="Fuentes" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Birthdate</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="date" type="text" class="form-control" id="Birthday" value="01/01/1998" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Age</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="age" type="text" class="form-control" id="Birthday" value="24" />
                  </div>
                </div>

                {/* OTHER SIDE */}
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Gender</div>
                  <div class="col-lg-auto col-md-auto">
                    <label>
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
                  <input name="profession" type="text" class="form-control" id="Profession" value="Student" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Cell #</div>
                  <div class="col-lg-auto col-md-auto">
                  <input name="cellNumber" type="tel" class="form-control" id="cellNumber" value="Student" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Tel #</div>
                  <div class="col-lg-auto col-md-auto">
                    <input name="telNumber" type="tel" class="form-control" id="telNumber" value="N/A" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Blood Type</div>
                  <div class="col-lg-auto col-md-auto">
                    <input type="bloodType" type="text" class="form-control" id="bloodType" value="A/B"/>
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
                  <input type="address" type="text" class="form-control" id="Address" value="#10 Cirineo Subdivision"/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-auto col-md-auto label">
                  Municipality/City
                </div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" type="text" class="form-control" id="Address" value="Dagupan"/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-auto col-md-auto label">Country</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" type="text" class="form-control" id="Address" value="Philippines"/>
                </div>
              </div>

              {/* OTHER SIDE */}
              <div class="row">
                <div class="col-lg-auto col-md-auto label">District/Barangay</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" type="text" class="form-control" id="Address" value="Tapuac"/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-auto col-md-auto label">Province</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" type="text" class="form-control" id="Address" value="Pangasinan"/>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-auto col-md-auto label">ZIP Code</div>
                <div class="col-lg-auto col-md-auto">
                  <input type="address" type="text" class="form-control" id="Address" value="2400"/>
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
                  <input type="medications" type="text" class="form-control" id="Medications" value="N/A"/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-md-4 label">Allergies</div>
                {/* <div id="allergies" class="col-lg-3">
                  Ibuprofen
                </div> */}
                <div class="col-lg-3">
                  <input type="allergies" type="text" class="form-control" id="Allergies" value="Ibuprofen"/>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-3 col-md-4 label">Conditions</div>
                {/* <div id="conditions" class="col-lg-3">
                  Asthma
                </div> */}
                <div class="col-lg-3">
                  <input type="conditions" type="text" class="form-control" id="Conditions" value="Asthma"/>
                </div>
              </div>

            </div>
            {/* end of card body */}
          </div>
        </div>

      </section>
    </>
  );
};

export default PatientInfoEdit;
