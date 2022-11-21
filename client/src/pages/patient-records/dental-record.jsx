import React from "react";
import "../../styles/dental-record.css";
import PatientProfileWidget from "../../components/patient-profilewidget";
import DentalRecordDataTable from "../../components/patient-dataTables/dentalrecord-datatable";

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
            <li class="breadcrumb-item active">Dental Records
            </li>
          </ol>
        </nav>
      </div>
      <section class="section profile">
        <div class="row">
          {/* <PatientProfileWidget /> */}

          <div class="col-xl-8">
            <div className="card patient-info">
              <div className="card-body pt-3">
                <h5 className="card-title">Dental Records</h5>

                <div className="divider"></div>

                {/* Dental Teeth Chart */}
                <div class="row">
                  {/* Insert Dental Teeth Chart for selected patient*/}
                </div>

                <div className="divider"></div>

                {/* Record Table*/}
                <div class="row">
                  <DentalRecordDataTable />
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
