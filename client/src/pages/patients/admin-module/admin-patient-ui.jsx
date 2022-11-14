import React from "react";
import "../../../styles/patient-info.css";
import "react-bootstrap";
import ProfileWidgetTwo from "../../../components/profile-widget2";
import { Button } from "react-bootstrap";
import PatientInfoEdit from "./patient-info-edit";

const AdminPatientUI = () => {
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
                            <a href="/patients">Patient</a>
                        </li>
                        <li class="breadcrumb-item active">Patient Name</li>
                        {/* ^should be Patient's Name */}
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
        </>
    );
};

export default AdminPatientUI;
