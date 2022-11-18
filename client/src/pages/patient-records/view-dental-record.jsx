import React, { useEffect, useState } from "react";
import "../../styles/dental-record.css"
import DentalRecordDataTable from "../../components/patient-dataTables/dentalrecord-datatable";
import DentalChart from "../../components/dental-teeth-chart";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//project imports
import ProfileWidgetTwo from "../../components/profile-widget2";
import "../../styles/profilewidgettwo.css";


const ViewDentalRecord = () => {
    // const getPatientDetails = async() => {
    //     try{
    //         const response = await Axios.get('http://localhost:3001/getUserDetails');
    //         console.log(response, "Responses");
    //         setPatientList(response.data);
    //     }catch (error){
    //         console.log(error)
    //     }
    // }

    const [recordData,setRecordData] = useState([]);
    const [recordProcedures,setProcedures] = useState([]);
    var url = require('url');
    var url_parts = url.parse(window.location.href, true);
    var query = url_parts.query;

  

    const getDentalCharts = async() => {
        // var url = require('url');
        // var url_parts = url.parse(window.location.href, true);
        // var query = url_parts.query;
        const response = await axios.get('http://localhost:3001/getSpecificDentalRecord', { params: { patientIDNum: query.patientIDNum,date:query.date} });
        setRecordData(response.data);
        const chartedTeeth = response.data.chartedTeeth; 
        const procedures = response.data.procedures; 
        chartedTeeth.forEach(teeth => {
            var el = document.getElementById(teeth);
            el.classList.toggle('marked');
        });
        
        procedures.forEach(procedure => {
            if(procedure.chosen!=null){
                recordProcedures.push(procedure.chosen);
            }
        });
    
    }

    useEffect(() => {
        // const email =  document.getElementById('emailaddress').textContent;

        getDentalCharts();
    }, []);

    
    const navigate = useNavigate();
    
    return(
        <>
                <div class="pagetitle">
                    <h1>Dental Records</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dentist">Home</a></li>
                            <li class="breadcrumb-item"><a href="/dentist/patient-records/dental-record">Patients</a></li>
                            {/* <li class="breadcrumb-item"><a href="/dentist/patient-records/dental-record/view-dental-records">Dental Records</a></li> */}
                            <li class="breadcrumb-item" onClick = {() => navigate(-1)}>  Dental Records</li>
                            <li class="breadcrumb-item active">View Dental Record</li>
                        </ol>
                    </nav>
                </div>
                    <div className="container">
                        <ProfileWidgetTwo />
                    </div>
                    
                    <div className="container">
                        <div class="row">
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
                                            <DentalChart/>
                                        </div>

                                        {/* Summary of Treatment */}
                                        <h5 className="card-title">Summary of Treatment</h5>
                                        <div class="row">
                                            <div className="col-3">
                                                <h6>Selected Tooth/Teeth</h6>
                                                <p>{recordData.chartedTeeth}</p>
                                            </div>
                                            <div className="col-3">
                                                <h6>Date of Treatment</h6>
                                                <p>{recordData.dentalDate}</p>
                                            </div>
                                            <div className="col-3">
                                                <h6>Treatment Description</h6>
                                                <p>{recordData.dentalDesc}</p>
                                            </div>
                                            <div className="col-3">
                                                <h6>Procedure/s</h6>
                                                <p>{recordProcedures.toString()}</p>
                                            </div>
                                        </div>

                                        {/* Treatment Attatchments */}
                                        <h5 className="card-title">Treatment Attachments</h5>
                                        <div className="row attatchment-container" 
                                        style={{border: "2px solid #885df1", borderRadius: "15px", width: "784px", height: "289px"}}>
                                            {/* Insert uploaded image/s for that specific record*/}
                                            <img src={"../../../../../uploads/dental-record-images/" + query.patientIDNum + "_" + query.date + ".jpg"} alt="Treatment attatchment"/>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
    );
}
export default ViewDentalRecord;