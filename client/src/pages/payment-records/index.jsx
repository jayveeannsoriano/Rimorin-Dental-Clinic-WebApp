import React from 'react';
import "../../styles/create-receipt.css";
import PatientProfileWidget from "../../components/patient-profilewidget";
import TransactionDataTable from "../../components/patient-dataTables/transaction-datatable";

const Payments = () => {
    return(
        <>
                <div class="pagetitle">
                    <h1>Payment Records</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/patient">Home</a></li>
                            <li class="breadcrumb-item active">Payment Records</li>
                        </ol>
                    </nav>
                </div>
                
                <section class="section profile">
                <div class="row">
                        <PatientProfileWidget/>
                
                        <div class="col-xl">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Transactions</h5>
                                    <div className="divider"></div>

                                    <TransactionDataTable/>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
export default Payments;