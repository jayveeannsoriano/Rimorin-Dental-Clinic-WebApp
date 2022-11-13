import React from "react";
// import Footer from "../components/dashboard-footer";
import "../../styles/dental-record.css"
import ProfileWidget from "../../components/profile-widget";
import EPrescriptionDataTable from "../../components/patient-dataTables/eprescription-datatable";

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
                                    <div className="divider"></div>

                                    <EPrescriptionDataTable/>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
export default Eprescription;