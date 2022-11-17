import React from 'react'
import TransactionPatientProfileWidget from '../../../components/patient-list/transactions';

const TransactionsPatientList = () => {
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
        <TransactionPatientProfileWidget />
        
    </>
  )
}
export default TransactionsPatientList;