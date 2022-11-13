import React from "react";
// import Footer from "../components/dashboard-footer";
import "../../styles/dental-record.css"
import PatientProfileWidget from '../patient-list/patient-profile-widget'

export default function DentalRecord(){
    return(
        <>
                <div class="pagetitle">
                    <h1>Dental Records</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                            <li class="breadcrumb-item"><a href="/dashboard">Patient Records</a></li>
                            <li class="breadcrumb-item active">Dental Records</li>
                        </ol>
                    </nav>
                </div>
                <section class="section profile">
                    <div class="row">
                    <PatientProfileWidget/>

                        <div class="col-xl-8">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Dental Records</h5>
                                    <div className="divider"></div>

                                    {/* Dental Record */}
                                    <div class="row">
                                        {/* Insert Dental Teeth Chart for selected patient*/}
                                    </div>

                                    <div className="divider"></div>

                                    {/* Insert Dental Record Datatable for selected patient*/}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>

    );
}