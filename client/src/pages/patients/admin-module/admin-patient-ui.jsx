import React from "react";
// import "../../../styles/patient-info.css";
import "../../../styles/profilewidgettwo.css";
import "react-bootstrap";
import ProfileWidgetTwo from "../../../components/profile-widget2";
import { Button } from "react-bootstrap";


const AdminPatientUI = () => {
    return (
        <>
            <div class="pagetitle">
                <h1>Patient Information</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="/admin">Home</a>
                        </li>
                        <li class="breadcrumb-item">
                            <a href="/admin/patients">Patient</a>
                        </li>
                        <li class="breadcrumb-item active">Patient Name</li>
                        {/* ^should be Patient's Name? */}
                    </ol>
                </nav>
            </div>


            <section class="section profile">
                <div class="row">
                    <ProfileWidgetTwo />

                    <div class="col-xl-8">
                        <div className="card patient-info">
                            <div className="card-body pt-3">
                                <h5 className="card-title">Patient Records</h5>

                                <button className="btn btn-primary table-buttons" type="submit">
                                    <i class="bi bi-download"></i>
                                    Export All
                                </button>
                                <div className="divider"></div>
                            </div>
                            {/* end of card body */}
                        </div>
                    </div>
                </div>
            </section>

            <div class="col-12">
              <div class="card overflow-auto">
                <div class="card-body">
                  <div class="nav-bar">
                  <Button className="table-button">DENTAL RECORD</Button>
                    <Button className="table-button">TRANSACTIONS</Button>
                        <Button className="table-button">E-PRESCRIPTIONS</Button>
                            <Button className="table-button">PATIENT INFORMATION</Button>
                  </div>
                </div>
              </div>
            </div>
        </>
    );
};

export default AdminPatientUI;
