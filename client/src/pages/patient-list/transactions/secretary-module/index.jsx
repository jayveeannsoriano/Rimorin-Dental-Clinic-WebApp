import React from 'react'
import SecTransactionPatientProfileWidget from '../../../../components/patient-list/transactions/secretary-module';

const TransactionsPatientList = () => {
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
        <SecTransactionPatientProfileWidget />
        
    </>
  )
}
export default TransactionsPatientList;