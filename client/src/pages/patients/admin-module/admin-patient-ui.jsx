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
                            <a href="/admin/patients">Patients</a>
                        </li>
                        <li class="breadcrumb-item active">View Patient</li>
                        
                    </ol>
                </nav>
            </div>


            <section class="section profile">
                <div class="row">
                    <ProfileWidgetTwo />
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
