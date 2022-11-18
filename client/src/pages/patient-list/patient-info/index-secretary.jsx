import React from 'react'
import PatientInfoPatientProfileWidget from '../../../components/patient-list/patient-info';


const PatientInfoPatientList = () => {
    return (
        <>
            <div class="pagetitle">
                <h1>Patients</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/secretary">Home</a></li>
                        <li class="breadcrumb-item active">Patients</li>
                    </ol>
                </nav>
            </div>
            <PatientInfoPatientProfileWidget />

        </>
    )
}
export default PatientInfoPatientList;