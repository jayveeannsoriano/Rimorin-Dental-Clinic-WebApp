import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

//project imports
import ProfileWidgetThree from "../../components/profile-widget3";
import DentalChart from "../../components/dental-teeth-chart";
import { dentalRecord } from '../../config/FileGeneration.js'
import "../../styles/profilewidgettwo.css";
import '../../styles/dental-record.css'
// import '../../../../uploads'


const ViewDentalRecord = () => {

    var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
    const userRole = userInfo["user_role_id"];

    const tryRequire = () => {
      try {
       return require("../../../../uploads/dental-record-images/PT" +query.patientIDNum + "_" + query.date + ".jpg");
      } catch (err) {
       return null;
      }
    };
  
    var HomeRoute = "";
    switch (userRole) {
      case 1:
        HomeRoute = "/patient";
        break;
      case 2:
        HomeRoute = "/secretary";
        break;
      case 3:
        HomeRoute = "/dentist";
        break;
      case 4:
        HomeRoute = "/admin";
        break;
    }
    var PatientListRoute = "";
    switch (userRole) {
      case 2:
        PatientListRoute = "/secretary/patients";
        break;
      case 3:
        PatientListRoute = "/dentist/patients";
        break;
      case 4:
        PatientListRoute = "/admin/patients";
        break;
    }
    const navigate = useNavigate();

    const [recordData,setRecordData] = useState([]);
    const [recordProcedures,setProcedures] = useState([]);
    const [chartedTeethValue, setchartedTeethValue] = useState([])
    const [dentalDesc, setDentalDesc] = useState([]);
    const [dentalDate, setDentalDate] = useState([]);
    var url = require('url');
    var url_parts = url.parse(window.location.href, true);
    var query = url_parts.query;

    const location = useLocation();
    const paramsID = new URLSearchParams(location.search);
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(() => JSON.stringify(getPatientIDNumber).replace(/"/g, ""));

    const [patientList, setPatientList] = useState([]);
  

    const getDentalCharts = async() => {
        const response = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getSpecificDentalRecord', { params: { patientIDNum: query.patientIDNum,date:query.date} });
        setRecordData(response.data);
        console.log(response.data)
        setchartedTeethValue(response.data.chartedTeeth);
        setDentalDesc(response.data.dentalDesc);
        setDentalDate(response.data.dentalDate)
        const chartedTeeth = response.data.chartedTeeth; 
        const procedures = response.data.procedures; 
        chartedTeeth.forEach(teeth => {
            var el = document.getElementById(teeth);
            el.classList.toggle('marked');
        });
        
        console.log(procedures);
        procedures.forEach(procedure => {
            if(typeof procedure['chosen'] !== 'undefined'){
                procedure.chosen.forEach(chosen =>{
                    console.log(chosen);
                    recordProcedures.push(chosen.procedure+" ");
                })
            }
        });
    
    }

    const getPatientDetails = async() => {
        try{
            const response = await axios.get('https://rimorin-dental-clinic.herokuapp.com/getPatientInfo',{
              params:{
              patientIDnumber: StringfyIDnumber}
            });
            console.log(response, "Responses");
            setPatientList(response.data);
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        // const email =  document.getElementById('emailaddress').textContent;
        getPatientDetails();
        getDentalCharts();
    }, []);

    async function Export(willDownload){
        await Promise.all([getPatientDetails()]);

        {/*dental Record(name, bd, doct, med, cond, alle, prec, treatData, DentRecID)*/}
        dentalRecord(patientList[0].fname+" "+patientList[0].lname, patientList[0].bday, "Dr. Pamela R. Concepcion", patientList[0].medications, patientList[0].conditions, patientList[0].allergies, (patientList[0].hasOwnProperty('precaution')?patientList[0].precaution:'N/A'), document.getElementById("dental-chart-Image"), recordData ,willDownload);
    };
    
    return (
      <>
        <div class="pagetitle">
          <h1>Dental Records</h1>
          <nav>
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href={HomeRoute}>Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href={PatientListRoute}>Patients</a>
              </li>
              <li class="breadcrumb-item active">View Dental Record</li>
            </ol>
          </nav>
        </div>

        <div class="col-xl-auto col-lg-auto col-sm-auto col-md-auto">
                <div className="card dental-record-form">
                        <ProfileWidgetThree />
                </div>
        </div>

        <div className="col-xl-auto col-lg-auto col-sm-auto col-md-auto">
            <div className="card patient-info">
              <div className="card-body pt-3">
                <h5 className="card-title">Dental Record</h5>
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => {
                    Export("print");
                  }}
                >
                  <i class="bi bi-printer-fill"></i>
                  Print
                </button>

                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => {
                    Export("download");
                  }}
                >
                  <i class="bi bi-download"></i>
                  Export
                </button>
                <div className="divider"></div>

                {/* Dental Teeth Chart */}
                <h5 className="card-title">Dental Chart</h5>
                <div className="container dental-chart-container">
                  <div className="row" id="dental-chart-Image">
                    <DentalChart />
                  </div>
                </div>

                {/* Summary of Treatment */}
                <h5 className="card-title mt-5">Summary of Treatment</h5>
                <div class="row summary-of-treatment">
                  <Table>
                    <thead>
                      <tr>
                        <th>Selected Tooth/Root</th>
                        <th>Date of Treatment</th>
                        <th>Treatment Description</th>
                        <th>Procedures</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {chartedTeethValue.map((item1, index) => (
                            <div key={index}>
                                <td>{item1}</td>
                            </div>
                        ))}
                        <td>{dentalDate.toString()}</td>
                        <td>{dentalDesc.toString()}</td>
                        {recordProcedures.map((item2) => (
                            <div>
                                <td>{item2}</td>
                            </div>
                        ))}
                      </tr>
                    </tbody>
                  </Table>
                </div>

                {/* Treatment Attatchments */}
                <h5 className="card-title mt-5">Treatment Attachments</h5>

                <div
                  className="row attachment-container"
                  style={{
                    border: "1px solid #E8E8E8",
                    borderRadius: "15px"
                  }}
                >
                  {/* Insert uploaded image/s for that specific record*/}
                  {tryRequire() == null ? 
                    <h3>No Attachments for this Dental Record</h3>  :
                    <img
                      src={"../../../../uploads/dental-record-images/PT" +query.patientIDNum + "_" + query.date + ".jpg"}
                      // src={tryRequire()}
                      className="img-fluid p-5"
                      alt="Treatment attachment"
                    />
                  }
                </div>
              </div>
            </div>
        </div>
      </>
    );
}
export default ViewDentalRecord;