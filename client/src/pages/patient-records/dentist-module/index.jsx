import React from "react";
import "../../../styles/dental-record.css"
import ProfileWidget from "../../../components/profile-widget";
import NoRecordImg from '../../../assets/img/no-record.png'
import { useSearchParams,useLocation} from "react-router-dom";
import { useMemo } from "react";

const DentalRecord = () => {

    const location = useLocation()
    const paramsID = new URLSearchParams(location.search)
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(()=>JSON.stringify(getPatientIDNumber).replace(/"/g,""));
  

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
                    <ProfileWidget/>

                        <div class="col-xl-8">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Dental Records</h5>

                                    <div className="divider"></div>

                                    {/* Dental Record */}
                                    {/* This UI is only shown when the patient is new */}
                                    <div class="row no-record">
                                        <img src={NoRecordImg} alt="no-record-img" />
                                        <div className="empty-message">
                                            <h2>DENTAL RECORD NOT FOUND</h2>
                                            <p> It seems that you have no dental record for this patient. Would you like to create a new dental record? </p> 
                                        </div>
                                        <div className="create-record">
                                            <a href={'/dentist/patient-records/dental-record/create-dental-record?patientIDNum=' + StringfyIDnumber}>
                                                <button className="btn btn-primary">Create Dental Record</button>
                                            </a> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>

    );
}
export default DentalRecord;