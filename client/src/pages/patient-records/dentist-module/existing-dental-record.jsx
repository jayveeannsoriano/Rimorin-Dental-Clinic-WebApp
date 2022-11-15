import React from "react";
// import Footer from "../components/dashboard-footer";
import "../../../styles/dental-record.css"
import PatientProfileWidget from "../../../components/profile-widget";
import DentalRecordDataTable from "../../../components/patient-dataTables/dentalrecord-datatable";
// import DentalRecord from "client/src/pages/patient-records/dentist-module/index.jsx";
import { useSearchParams,useLocation} from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import axios from "axios";
// import { response } from "express";


export default function ExistingDentalRecord(){

    const location = useLocation()
    const paramsID = new URLSearchParams(location.search)
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(()=>JSON.stringify(getPatientIDNumber).replace(/"/g,""));

    const [appointment, setAppointment] = useState([]);

    const getAppointment = async() => {
        try{
            var url = require('url');
            var url_parts = url.parse(window.location.href, true);
            var query = url_parts.query;
            const response = await axios.get('http://localhost:3001/getUserDentalRecord',{
                params: {
                    patientIDnumber: query.patientIDNum,
                }
            });
            // console.log(response, "Responses");
            setAppointment(response.data);
            console.log(appointment);
            // setFilteredAppointment(response.data);
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getAppointment();
    }, []);


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
                                        <a href={'/dentist/patient-records/dental-record/create-dental-record?patientIDNum=' + StringfyIDnumber}>
                                    <button className="btn btn-primary" type="submit" >
                                        <i class="bi bi-download"></i>
                                        Add Treatment
                                    </button>
                                    </a>
                                        { appointment.length==0 ? <div className="card patient-info">
                                            <div className="card-body pt-3">
                                                <h5 className="card-title">Dental Records</h5>

                                                <div className="divider"></div>

                                                {/* Dental Record */}
                                                {/* This UI is only shown when the patient is new */}
                                                <div class="row no-record">
                                                    {/* <img src={NoRecordImg} alt="no-record-img" /> */}
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
                                        </div> :<DentalRecordDataTable response={appointment}/>}

                                        {/* <DentalRecordDataTable response={appointment}/> */}


                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>

    );
}