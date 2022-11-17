import React from 'react'
import DentDentalRecordPatientProfileWidget from '../../../../components/patient-list/dental-record/dentist-module';

const DentalRecordPatientList = () => {
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
        <DentDentalRecordPatientProfileWidget />
        
    </>
  )
}
export default DentalRecordPatientList;