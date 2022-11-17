import React, {useMemo} from "react";
import { useSearchParams,useLocation} from "react-router-dom";
import "../../../styles/dental-record.css"
import ProfileWidget from "../../../components/profile-widget";
import DentistEPrescriptionDataTable from "./dental-eprescriptiondatatable";

const Eprescription = () => {

     const location = useLocation()
    const paramsID = new URLSearchParams(location.search)
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(()=>JSON.stringify(getPatientIDNumber).replace(/"/g,""));


    return(
        <>
                <div class="pagetitle">
                    <h1>E-Prescription</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dentist">Home</a></li>
                            <li class="breadcrumb-item"><a href="/dentist/eprescription">Patients</a></li>
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
                                    <a href={"/dentist/eprescription/create-eprescription?patientIDNum=" + StringfyIDnumber} className="btn btn-primary">
                                        <i class="bi bi-plus-lg"></i> Create Prescription
                                    </a>
                                    <div className="divider"></div>

                                    <DentistEPrescriptionDataTable/>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
export default Eprescription;