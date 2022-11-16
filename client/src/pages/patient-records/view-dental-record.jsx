import React from "react";
import "../../styles/dental-record.css"
import PatientProfileWidget from "../../components/profile-widget";
import DentalRecordDataTable from "../../components/patient-dataTables/dentalrecord-datatable";

const ViewDentalRecord = () => {
    return(
        <>
                <div class="pagetitle">
                    <h1>Dental Records</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                            <li class="breadcrumb-item"><a href="/dashboard">Patient Records</a></li>
                            <li class="breadcrumb-item">Dental Records</li>
                            <li class="breadcrumb-item active">View Dental Record</li>
                        </ol>
                    </nav>
                </div>
                <section class="section profile">
                    <div class="row">
                    <PatientProfileWidget/>

                        <div class="col-xl-8">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Dental Record</h5>
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
                                    <h5 className="card-title">Dental Chart</h5>

                                    <div class="row">
                                        {/* Insert Dental Teeth Chart for selected patient*/}
                                    </div>

                                    {/* Summary of Treatment */}
                                    <h5 className="card-title">Summary of Treatment</h5>
                                    <div class="row">
                                        <div className="col-3">
                                            <h6>Selected Tooth/Teeth</h6>
                                            <p>16</p>
                                        </div>
                                        <div className="col-3">
                                            <h6>Date of Treatment</h6>
                                            <p>November 6, 2022</p>
                                        </div>
                                        <div className="col-3">
                                            <h6>Treatment Description</h6>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                                        </div>
                                        <div className="col-3">
                                            <h6>Procedure/s</h6>
                                            <p>Root Canal Therapy</p>
                                        </div>
                                    </div>

                                    {/* Treatment Attatchments */}
                                    <h5 className="card-title">Treatment Attatchments</h5>
                                    <div className="row attatchment-container" 
                                    style={{border: "2px solid #885df1", borderRadius: "15px", width: "784px", height: "289px"}}>
                                        yan lang yung progress niyo?
                                        {/* Insert uploaded image/s for that specific record*/}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>

    );
}
export default ViewDentalRecord;