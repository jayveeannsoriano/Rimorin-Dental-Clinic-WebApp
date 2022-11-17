import React from 'react'
import DentPrescriptionPatientProfileWidget from '../../../../components/patient-list/prescriptions/dentist-module';

const PrescriptionPatientList = () => {
  return (
    <>
        <div class="pagetitle">
            <h1>Patients</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/dentist">Home</a></li>
                        <li class="breadcrumb-item active">Patients</li>
                    </ol>
                </nav>
        </div>
        <DentPrescriptionPatientProfileWidget />
        
    </>
  )
}
export default PrescriptionPatientList;