import React from 'react'
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
