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
                  <div id="fname" class="col-lg-auto col-md-auto">
                    Ricci
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">
                    Last Name
                  </div>
                  <div id="lname" class="col-lg-auto col-md-auto">
                    Blynthe
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Middle Initial</div>
                  <div id="mname" class="col-lg-auto col-md-auto">
                    Fuentes
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Birthdate</div>
                  <div id="birthdate" class="col-lg-auto col-md-auto">
                    01/01/1998
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
                      Female
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Profession</div>
                    <div id="profession" class="col-lg-auto col-md-auto">
                      Student
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Cell #</div>
                    <div id="cell" class="col-lg-auto col-md-auto">
                      (+63) 956 793 5590
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Tel #</div>
                    <div id="tel" class="col-lg-auto col-md-auto">
                      N/A
                    </div>
                  </div>
                  
                  <div class="row">
                    <div class="col-lg-auto col-md-auto label">Blood Type</div>
                    <div id="blood-type" class="col-lg-auto col-md-auto">
                      A/B
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

                {/* OTHER SIDE */}
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">District/Barangay</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    Tapuac
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-auto col-md-auto label">Province</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    Pangasinan
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-auto col-md-auto label">ZIP Code</div>
                  <div id="country" class="col-lg-auto col-md-auto">
                    2400
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
              {/* end of card body */}
            </div>
          </div>
        
      </section>
    </>
  );
};

export default PatientInfoEdit;
