import React from "react";
// import Footer from "../components/dashboard-footer";
import "../../../styles/dental-record.css"
import PatientProfileWidget from "../../../components/profile-widget";
import DentalRecordDataTable from "../../../components/patient-dataTables/dentalrecord-datatable";

export default function ExistingDentalRecord(){
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

                                    <button className="btn btn-primary" type="submit">
                                        <i class="bi bi-printer-fill"></i>
                                        Print
                                        </button>
                                        
                                        <button className="btn btn-primary" type="submit">
                                        <i class="bi bi-download"></i>
                                        Export
                                        </button>

                                    <div className="divider"></div>

                                    {/* Dental Teeth Chart */}
                                    <div class="row">
                                        {/* Insert Dental Teeth Chart for selected patient*/}
                                    </div>

                                    <div className="divider"></div>

                                    {/* Record Table*/}
                                    <div class="row">
                                    <button className="btn btn-primary" type="submit">
                                        <i class="bi bi-download"></i>
                                        Add Treatment
                                    </button>
                                       <DentalRecordDataTable/>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>

    );
}