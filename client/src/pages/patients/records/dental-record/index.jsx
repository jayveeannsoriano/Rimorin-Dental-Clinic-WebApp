import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

//import "../../../../styles/dental-record.css";
import "../style.css"
import DentalRecordDataTable from "../../../../components/patient-dataTables/dentalrecord-datatable";
import DentalChart from "../../../../components/dental-teeth-chart";
import { dentalRecords } from "../../../../config/FileGeneration";

const AdminDentalRecord = () => {
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
        "http://localhost:3001/getUserDentalRecord",
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

      console.log(appointment);
      // setFilteredAppointment(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPatientDetails = async () => {
    try {
      const response = await axios.get("http://localhost:3001/getPatientInfo", {
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
      for (
        let proceNum = 0;
        proceNum < appointment[num].procedures.length;
        proceNum++
      ) {
        if (appointment[num].procedures[proceNum].hasOwnProperty("chosen")) {
          proceString +=
            " " + appointment[num].procedures[proceNum].chosen.join();
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
    {
      /*dental Records(name, bd, doct, med, cond, alle, prec, treatData, DentRecID)*/
    }
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
    <div className="container dental-record-container">
        <div className="row">
        <div className="button-div">
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
            </div>
          <div class="col-xl-12">
              <div className="card-body">
                <div className="divider"></div>

                {/* Dental Teeth Chart to be updated; 
                Dental chart should show all teeth that were selected per treatment*/}
                <div class="row" id="dental-chart-Image">
                  <DentalChart />
                </div>

                <div className="divider"></div>

                {/* Record Table*/}
                <div class="row dental-record-table">
                    <div className="col-xl-12">
                        {appointment.length == 0 ? (
                            <div className="card patient-info">
                            </div>
                        ) : (
                            <DentalRecordDataTable response={appointment} />
                        )}
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    </>
  );
};
export default AdminDentalRecord;
