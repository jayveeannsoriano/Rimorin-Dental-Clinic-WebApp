import React from 'react'
// import AdminPatientPage from "../../components/admin-patients-page";
import ProfileWidgetTwo from '../../components/profile-widget2';

const Patients = () => {
  return (
    <>
        <div class="pagetitle">
        <h1>Patients</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/admin/appointments">Home</a>
            </li>
            <li class="breadcrumb-item">
              <a href="/admin/patients">Patients</a>
            </li>
          </ol>
        </nav>
      </div>
    {/* <AdminPatientPage/> */}
    <ProfileWidgetTwo/>
    </>
  )
}
export default Patients;
