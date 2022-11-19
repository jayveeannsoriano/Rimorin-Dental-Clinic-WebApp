import React, { useState, useEffect } from "react";
import "../../../styles/profilewidgettwo.css";
import "react-bootstrap";
import Axios from 'axios';
import ProfileWidgetThree from "../../../components/profile-widget3";
import { Button } from "react-bootstrap";

//patient Datatables
import DentalRecordDataTable from "../../../components/patient-dataTables/dentalrecord-datatable";
import TransactionDataTable from "../../../components/patient-dataTables/transaction-datatable";
import EPrescriptionDataTable from "../../../components/patient-dataTables/eprescription-datatable";
import AdminModulePatientInfo from "../../../components/patient-dataTables/patient-information";

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

            <div class="col-xl-auto col-lg-auto col-sm-auto col-md-auto">
                <div className="card dental-record-form">
                    <div className="card-body pt-3">
                        <div className="container profile-widget-container">
                            <ProfileWidgetThree />
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="card overflow-auto">
                    <div class="card-body">
                        <div class="nav nav-bar">
                            <Button className="table-button active" data-bs-toggle="tab" data-bs-target="#dental-record">DENTAL RECORD</Button>
                            <Button className="table-button" data-bs-toggle="tab" data-bs-target="#transactions">TRANSACTIONS</Button>
                            <Button className="table-button" data-bs-toggle="tab" data-bs-target="#prescriptions">E-PRESCRIPTIONS</Button>
                            <Button className="table-button" data-bs-toggle="tab" data-bs-target="#patientInfo">PATIENT INFORMATION</Button>
                        </div>

                        <div className="tab-content">
                            <div className="tab-pane fade show active dental-record" id="dental-record">
                                <h5 className="card-title">DENTAL RECORD</h5>
                                <DentalRecordDataTable />
                            </div>
                            <div className="tab-pane fade transactions" id="transactions">
                                <h5 className="card-title">TRANSACTIONS</h5>
                                <TransactionDataTable />
                            </div>
                            <div className="tab-pane fade prescriptions" id="prescriptions">
                                <h5 className="card-title">PRESCRIPTIONS</h5>
                                <EPrescriptionDataTable />
                            </div>
                            <div className="tab-pane fade patientInfo" id="patientInfo">
                                <h5 className="card-title">PATIENT INFORMATION</h5>
                                <AdminModulePatientInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminPatientUI;
