import React from "react";
import Header from "../components/dashboard-header";
import Sidebar from "../components/sidebar";
import Footer from "../components/dashboard-footer";
import "../styles/patient-info.css"

export default function PatientInfo(){
    return(
        <div>
            <main id="main" className="main">
                <div class="pagetitle">
                    <h1>Patient Information</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                            <li class="breadcrumb-item"><a href="/dashboard">Patient Records</a></li>
                            <li class="breadcrumb-item active">Patient Information</li>
                        </ol>
                    </nav>
                </div>
                <section class="section profile">
                    <div class="row">
                        <div class="col-xl-4">
                            <div class="card">
                                <div class="card-body profile-card pt-4 d-flex flex-column align-items-center">
                                    <img src="assets/img/messages-1.jpg" alt="Profile" class="rounded-circle" />
                                    <h2 id="">Jessica McBell</h2>
                                    <h3>Patient ID: <span id="">PT0001</span></h3>
                                    <div className="divider"></div>
                                    <div class="patient-info">
                                        <ul>
                                            <li>Phone <span>(+63) 956 793 5590</span></li>
                                            <li>Age <span>22 Years, Female</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end of profile widget */}

                        <div class="col-xl-8">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Patient Information</h5>
                                    <div className="divider"></div>

                                    {/* Patient information */}
                                    <div class="row">
                                            <h4>Personal Information</h4>
                                            <div class="col-lg-3 col-md-4 label">First Name</div>
                                            <div id="firstname" class="col-lg-3">Jessica</div>
                                    </div>

                                    <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Middle Name</div>
                                            <div id="middlename" class="col-lg-3">Soho</div>
                                    </div>

                                    <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Last Name</div>
                                            <div id="lastname" class="col-lg-3">McBell</div>
                                    </div>

                                    <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Birthdate</div>
                                            <div id="birthdate" class="col-lg-3">June 01, 2000</div>
                                    </div>

                                    <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Age</div>
                                            <div id="age" class="col-lg-3">22</div>
                                    </div>

                                    <div className="divider"></div>

                                    {/* Address information */}
                                    <div class="row">
                                            <h4>Address Information</h4>
                                            <div class="col-lg-3 col-md-4 label">House No. & Street Name</div>
                                            <div id="houseno" class="col-lg-3">#10 Cirineo Subdivision</div>
                                    </div>

                                    <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Municipality/City</div>
                                            <div id="municipality" class="col-lg-3">Dagupan</div>
                                    </div>

                                    <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Country</div>
                                            <div id="country" class="col-lg-3">Philippines</div>
                                    </div>

                                    <div className="divider"></div>

                                    {/* Medical Conditions */}
                                    <div class="row">
                                            <h4>Medical Conditions</h4>
                                            <div class="col-lg-5 col-md-4 label">Medications/Maintenance</div>
                                            <div id="medications" class="col-lg-3">N/A</div>
                                    </div>

                                    <div class="row">
                                            <div class="col-lg-4 col-md-4 label">Allergies</div>
                                            <div id="allergies" class="col-lg-3">Ibuprofen</div>
                                    </div>

                                    <div class="row">
                                            <div class="col-lg-3 col-md-4 label">Conditions</div>
                                            <div id="conditions" class="col-lg-3">Asthma</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Header />
            <Sidebar />
            {/* <Footer /> */}
        </div>

    );
}