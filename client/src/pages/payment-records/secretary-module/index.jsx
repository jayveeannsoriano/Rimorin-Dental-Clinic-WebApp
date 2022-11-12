import React from "react";
import "../../../styles/create-receipt.css";
import ProfileWidget from "../../../components/profile-widget";

const Sec_Payments = () => {
    return(
        <>
                <div class="pagetitle">
                    <h1>Payment Records</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/secretary">Home</a></li>
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
                                    <h5 className="card-title">Transactions</h5>
                                    <div className="divider"></div>

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