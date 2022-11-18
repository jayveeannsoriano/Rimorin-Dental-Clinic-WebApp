import React from 'react'
// import AdminPatientPage from "../../components/admin-patients-page";
// import ProfileWidgetTwo from '../../components/profile-widget2';
import PatientProfileWidget from '../../components/patient-list/patient-profile-widget';

const Patients = () => {
  return (
    <>
        <div class="pagetitle">
        <h1>Patients</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin">Home</a>
            </li>
            <li class="breadcrumb-item active">
              Patients
            </li>
          </ol>
        </nav>
      </div>
    {/* <AdminPatientPage/> */}
    <PatientProfileWidget/>
    {/* <ProfileWidgetTwo/> */}
    </>
  )
}
export default Patients;
