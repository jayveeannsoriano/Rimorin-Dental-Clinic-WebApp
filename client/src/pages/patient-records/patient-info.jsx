import React from "react";
import "../../styles/patient-info.css";
import "react-bootstrap";
import ProfileWidget from "../../components/profile-widget";
import { Container } from "react-bootstrap";

const PatientInfo = () => {
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
                {/* buttons to be edited later */}
                <button className="btn btn-primary" type="submit">
                <i class="bi bi-printer-fill"></i>
                  Print
                </button>
                <span />
                <button className="btn btn-primary" type="submit">
                <i class="bi bi-download"></i>
                  Export
                </button>
                <div className="divider"></div>


                {/* Patient information */}
                
                <div class="row">
                  <div className="col">
                  <h4>Personal Information</h4>
                  <div class="label">First Name</div>
                    <div id="firstname" class="col-lg-3">
                      Jessica
                    </div>

                    <div class="label">Middle Name</div>
                    <div id="middlename" class="col-lg-3">
                      Soho
                    </div>

                    <div class="label">Last Name</div>
                    <div id="lastname" class="col-lg-3">
                      McBell
                    </div>

                    <div class="label">Birthdate</div>
                    <div id="birthdate" class="col-lg-3">
                      June 01, 2000
                    </div>

                    <div class="label">Age</div>
                    <div id="age" class="col-lg-3">
                      22
                    </div>

                  <div className="col">
                  <div class="label">Gender</div>
                    <div id="gender" class="col-lg-3">
                      Female
                    </div>

                    <div class="label">Profession</div>
                    <div id="profession" class="col-lg-3">
                      Student
                    </div>

                    <div class="label">Cell #</div>
                    <div id="phone_num" class="col-lg-3">
                      (+63) 956 793 5590
                    </div>

                    <div class="label">Tell #</div>
                    <div id="tell_num" class="col-lg-3">
                      None
                    </div>

                    <div class="label">Blood Type</div>
                    <div id="blood_type" class="col-lg-3">
                      A/B
                    </div>
                  </div>
                </div>
                </div>
                
                <div className="divider"></div>

                {/* Address information */}
                <div class="row">
                  <h4>Address Information</h4>
                  <div class="col-lg-auto col-md-auto label">
                    House No. & Street Name
                  </div>
                  <div id="houseno" class="col-lg-auto col-md-auto">
                    #10 Cirineo Subdivision
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">
                    Municipality/City
                  </div>
                  <div id="municipality" class="col-lg-auto col-md-auto">
                    Dagupan
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Country</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    Philippines
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
                    N/A
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-4 col-md-4 label">Allergies</div>
                  <div id="allergies" class="col-lg-3">
                    Ibuprofen
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-3 col-md-4 label">Conditions</div>
                  <div id="conditions" class="col-lg-3">
                    Asthma
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PatientInfo;
