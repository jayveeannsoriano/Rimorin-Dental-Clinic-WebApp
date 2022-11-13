import React from "react";
import "../../../styles/dental-record.css"
import ProfileWidget from "../../../components/profile-widget";

const Eprescription = () => {
    return(
        <>
                <div class="pagetitle">
                    <h1>E-Prescription</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                            <li class="breadcrumb-item"><a href="/dashboard">E-Prescription</a></li>
                            <li class="breadcrumb-item active">View Prescriptions</li>
                        </ol>
                    </nav>
                </div>

                {/* Profile */}
                
                <section class="section profile">
                <div class="row">
                        <ProfileWidget/>
                        {/* end of profile widget */}

                        <div class="col-xl">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Prescriptions</h5>
                                    <a href="/dentist/eprescription/create-eprescription" className="btn btn-primary">
                                        <i class="bi bi-plus-lg"></i> Create Prescription
                                    </a>
                                    <div className="divider"></div>

                                    {/* Insert Prescription Datatable of selected patient*/}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
export default Eprescription;