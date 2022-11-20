import React from "react";
import "../../styles/dental-record.css"
import PatientProfileWidget from "../../components/patient-profilewidget";
import DentalRecordDataTable from "../../components/patient-dataTables/dentalrecord-datatable";

export default function DentalRecord(){
    return(
        <>
                <div class="pagetitle">
                    <h1>Dental Records</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/patient">Home</a></li>
                            <li class="breadcrumb-item">Patient Records</li>
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

                                    {/* Dental Teeth Chart */}
                                    <div class="row">
                                        {/* Insert Dental Teeth Chart for selected patient*/}
                                    </div>

                                    <div className="divider"></div>

                                    {/* Record Table*/}
                                    <div class="row">
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