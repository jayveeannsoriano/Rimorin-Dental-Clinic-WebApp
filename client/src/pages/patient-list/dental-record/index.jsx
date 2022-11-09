import React from 'react'
import DentalRecordPatientProfileWidget from '../../../components/patient-list/dental-record';

const DentalRecordPatientList = () => {
  return (
    <>
        <div class="pagetitle">
            <h1>Patients</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                        <li class="breadcrumb-item active">Patients</li>
                    </ol>
                </nav>
        </div>
        <DentalRecordPatientProfileWidget />
        
    </>
  )
}
export default DentalRecordPatientList;