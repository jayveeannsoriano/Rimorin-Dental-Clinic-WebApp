import React, {useState, useMemo} from "react";
import { useSearchParams,useLocation} from "react-router-dom";
import "../../../styles/create-receipt.css";
import ProfileWidget from "../../../components/profile-widget";
import SecTransactionDataTable from "./secpayment-datatable";


const Sec_Payments = () => {

    const location = useLocation()
    const paramsID = new URLSearchParams(location.search)
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(()=>JSON.stringify(getPatientIDNumber).replace(/"/g,""));
    console.log(StringfyIDnumber, 'sec create receipt');

    return(
        <>
                <div class="pagetitle">
                    <h1>Payment Records</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/secretary">Home</a></li>
                            <li class="breadcrumb-item"><a href="/secretary/payment-records">Patients</a></li>
                            <li class="breadcrumb-item active">Payment Records</li>
                        </ol>
                    </nav>
                </div>

                {/* Profile */}
                {/* <button type="button" class="btn btn-primary rx-pr btn-link"><i class="bi bi-plus-lg"> </i> <a href='/secretary/payment-records/create-receipt'> Create Receipt</a></button> */}
                <section class="section profile">
                <div class="row">
                        <ProfileWidget/>
                        {/* end of profile widget */}
                
                        <div class="col-xl">
                            <div className="card patient-info">
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Transactions Patient</h5>
                                    <div className="divider"></div>

                                    <SecTransactionDataTable patientIDNum = {StringfyIDnumber}/>
                                    {/* Insert Transaction Datatable for selected patient*/}
                                    {/* Button for Create Receipt Page will be shown in transaction datatable if & only if appt is marked as "Finished" */}
                     

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
export default Sec_Payments;