import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
import { useMemo, useEffect, useState } from "react";
import axios from "axios";

//project imports
import "../../../styles/dental-record.css"
import PatientProfileWidget from "../../../components/profile-widget";
import DentalRecordDataTable from "../../../components/patient-dataTables/dentalrecord-datatable";
import { dentalRecords } from '../../../config/FileGeneration.js'
import DentalChart from "../../../components/dental-teeth-chart";
import NoRecordImg from '../../../assets/img/no-record.png'


export default function ExistingDentalRecord() {

    const location = useLocation()
    const paramsID = new URLSearchParams(location.search)
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(() => JSON.stringify(getPatientIDNumber).replace(/"/g, ""));

    const [appointment, setAppointment] = useState([]);
    const [patientList, setPatientList] = useState([]);

    const getAppointment = async () => {
        try {
            var url = require('url');
            var url_parts = url.parse(window.location.href, true);
            var query = url_parts.query;
            const response = await axios.get('http://localhost:3001/getUserDentalRecord', {
                params: {
                    patientIDnumber: query.patientIDNum,
                }
            });
            // console.log(response, "Responses");
            setAppointment(response.data);

            response.data.forEach(specificData => {
                const chartedTeeth = specificData.chartedTeeth; 
                chartedTeeth.forEach(teeth => {
                    var el = document.getElementById(teeth);
                    el.classList.toggle('marked');
                });
              })
              
            console.log(appointment);
            // setFilteredAppointment(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const getPatientDetails = async () => {
        try {
            const response = await axios.get('http://localhost:3001/getPatientInfo', {
                params: {
                    patientIDnumber: StringfyIDnumber
                }
            });
            console.log(response, "Responses");
            setPatientList(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAppointment();
        getPatientDetails();
    }, []);


    async function Export(willDownload) {
        await Promise.all([getAppointment(), getPatientDetails()]);

        var treatData = [];
        var proceString = "";
        for (let num = 0; num < appointment.length; num++) {
            if(typeof appointment[num].procedures !== 'undefined'){
                for (let proceNum = 0; proceNum < appointment[num].procedures.length; proceNum++) {
                    if (appointment[num].procedures[proceNum].hasOwnProperty('chosen')) {
                        for(let chosenNum = 0; chosenNum<appointment[num].procedures[proceNum].chosen.length ; chosenNum++){
                            proceString += " " + appointment[num].procedures[proceNum].chosen[chosenNum].procedure;
                        }
                    }
                }
                treatData.push([
                    appointment[num].dentalDate, 
                    (appointment[num].hasOwnProperty('chartedTeeth') ? appointment[num].chartedTeeth.join() : ''),
                    appointment[num].dentalDesc, 
                    proceString])
            }
        }
        {/*dental Records(name, bd, doct, med, cond, alle, prec, treatData, DentRecID)*/ }
        dentalRecords(patientList[0].fname + " " + patientList[0].lname, patientList[0].bday, "Dr. Pamela R. Concepcion", patientList[0].medications, patientList[0].conditions, patientList[0].allergies, (patientList[0].hasOwnProperty('precaution') ? patientList[0].precaution : 'N/A'), treatData, willDownload);
    };


    return (
        <>
            <div class="pagetitle">
                <h1>Dental Records</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/dentist">Home</a></li>
                        <li class="breadcrumb-item"><a href="/dentist/patient-records/dental-record">Patients</a></li>
                        <li class="breadcrumb-item active">Dental Records</li>
                    </ol>
                </nav>
            </div>
            <section class="section profile">
                <div class="row">
                    <PatientProfileWidget />

                    <div class="col-xl-8">
                        <div className="card patient-info">
                            <div className="card-body pt-3">
                                <h5 className="card-title">Dental Records</h5>

                                <button className="btn btn-primary" type="submit" onClick={() => { Export("print") }}>
                                    <i class="bi bi-printer-fill"></i>
                                    Print
                                </button>

                                <button className="btn btn-primary" type="submit" onClick={() => { Export("download") }}>
                                    <i class="bi bi-download"></i>
                                    Export
                                </button>

                                <div className="divider"></div>

                                {/* Dental Teeth Chart */}
                                <div class="row">
                                    <DentalChart/>
                                </div>

                                <div className="divider"></div>

                                {/* Record Table*/}
                                <div class="row">
                                    {appointment.length == 0 ? <div className="card patient-info">
                                        <div className="card-body pt-3">

                                            {/* Dental Record */}
                                            {/* This UI is only shown when the patient is new */}
                                            <div class="row no-record">
                                                <img src={NoRecordImg} alt="no-record-img" />
                                                <div className="empty-message">
                                                    <h2>DENTAL RECORD NOT FOUND</h2>
                                                    <p> It seems that you have no dental record for this patient. A dental record will be created upon their first appointment.</p>
                                                </div>
                                                {/*<div className="create-record">
                                                    <a href={'/dentist/patient-records/dental-record/create-dental-record?patientIDNum=' + StringfyIDnumber}>
                                                        <button className="btn btn-primary">Create Dental Record</button>
                                                    </a>
                                                </div>*/}
                                            </div>
                                        </div>
                                    </div> : <DentalRecordDataTable response={appointment} patientIDNum={StringfyIDnumber}/>}

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