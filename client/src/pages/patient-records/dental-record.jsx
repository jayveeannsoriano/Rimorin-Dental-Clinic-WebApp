import React, { useMemo, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

//project imports
import PatientProfileWidget from "../../components/profile-widget";
import UserProfileWidget from "../../components/patient-profilewidget"
import DentalRecordDataTable from "../../components/patient-dataTables/dentalrecord-datatable";
import DentalChart from "../../components/dental-teeth-chart";
import { dentalRecords } from "../../config/FileGeneration";

const DentalRecord = () => {
  var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
  const userRole = userInfo["user_role_id"];

  var HomeRoute = "";
  switch (userRole) {
    case 1:
      HomeRoute = "/patient";
      break;
    case 2:
      HomeRoute = "/secretary";
      break;
  }
  var patientRecordRoute = "";
  switch (userRole) {
    case 1:
      patientRecordRoute = "";
      break;
    case 2:
      patientRecordRoute = "/secretary/patient-records/dental-record";
      break;
  }
  var ProfileWidget ="";
  switch (userRole) {
    case 1:
      ProfileWidget = <UserProfileWidget/>;
      break;
    case 2:
      ProfileWidget = <PatientProfileWidget/>;
      break;
  }

  const location = useLocation();
  const paramsID = new URLSearchParams(location.search);
  const getPatientIDNumber = paramsID.get("patientIDNum");
  const StringfyIDnumber = useMemo(() =>
    JSON.stringify(getPatientIDNumber).replace(/"/g, "")
  );

  const [appointment, setAppointment] = useState([]);
  const [patientList, setPatientList] = useState([]);

  const getAppointment = async () => {
    try {
      var url = require("url");
      var url_parts = url.parse(window.location.href, true);
      var query = url_parts.query;
      const response = await axios.get(
        "http://localhost:80/getUserDentalRecord",
        {
          params: {
            patientIDnumber: query.patientIDNum,
          },
        }
      );
      // console.log(response, "Responses");
      setAppointment(response.data);

      response.data.forEach(specificData => {
        const chartedTeeth = specificData.chartedTeeth; 
        chartedTeeth.forEach(teeth => {
            var el = document.getElementById(teeth);
            el.classList.toggle('marked');
        });
      })

      console.log(response.data);
      // setFilteredAppointment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPatientDetails = async () => {
    try {
      const response = await axios.get("http://localhost:80/getPatientInfo", {
        params: {
          patientIDnumber: StringfyIDnumber,
        },
      });
      console.log(response, "Responses");
      setPatientList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
        for (
          let proceNum = 0;
          proceNum < appointment[num].procedures.length;
          proceNum++
        ) {
          if (appointment[num].procedures[proceNum].hasOwnProperty('chosen')) {
            for(let chosenNum = 0; chosenNum<appointment[num].procedures[proceNum].chosen.length ; chosenNum++){
                proceString += " " + appointment[num].procedures[proceNum].chosen[chosenNum].procedure;
            }
        }
        }
        treatData.push([
          appointment[num].dentalDate,
          appointment[num].hasOwnProperty("chartedTeeth")
            ? appointment[num].chartedTeeth.join()
            : "",
          appointment[num].dentalDesc,
          proceString,
        ]);
      }
    }
    /*dental Records(name, bd, doct, med, cond, alle, prec, treatData, DentRecID)*/
    dentalRecords(
      patientList[0].fname + " " + patientList[0].lname,
      patientList[0].bday,
      "Dr. Pamela R. Concepcion",
      patientList[0].medications,
      patientList[0].conditions,
      patientList[0].allergies,
      patientList[0].hasOwnProperty("precaution")
        ? patientList[0].precaution
        : "N/A",
      treatData,
      willDownload
    );
  }
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
              <a href={patientRecordRoute}>Patient Records</a>
            </li>
            <li class="breadcrumb-item active">Dental Records</li>
          </ol>
        </nav>
      </div>
      <section class="section profile">
        <div class="row">
          {ProfileWidget}

          <div class="col-xl-8">
            <div className="card patient-info">
              <div className="card-body pt-3">
                <h5 className="card-title">Dental Records</h5>
                
                    <button className="btn btn-primary" type="submit" 
                      onClick={() => {Export(false);}}>
                        <i class="bi bi-printer-fill"></i>
                        Print
                    </button>
                    <button className="btn btn-primary" type="submit"
                      onClick={() => {Export(true);}}>
                      <i class="bi bi-download"></i>
                      Export
                    </button>
                <div className="divider"></div>

                {/* Dental Teeth Chart to be updated; 
                Dental chart should show all teeth that were selected per treatment*/}
                <div class="row" id="dental-chart-Image">
                  <DentalChart />
                </div>

                <div className="divider"></div>

                {/* Record Table*/}
                <div class="row">
                  {appointment.length == 0 ? (
                    <div className="card patient-info"></div>
                  ) : (
                    <DentalRecordDataTable response={appointment} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DentalRecord;
