import React from 'react'
import PrescriptionPatientProfileWidget from '../../../../components/patient-list/prescriptions';

const PrescriptionPatientList = () => {
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
            <PrescriptionPatientProfileWidget />

        </>
    )
}
export default PrescriptionPatientList;