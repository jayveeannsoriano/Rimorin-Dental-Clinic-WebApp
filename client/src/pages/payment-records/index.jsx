import React from "react";
import "../../styles/create-receipt.css";
import ProfileWidget from "../../components/profile-widget";

const Payments = () => {
    return(
        <>
                <div class="pagetitle">
                    <h1>Payment Records</h1>
                    <nav>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/dashboard">Home</a></li>
                            <li class="breadcrumb-item active">Payment Records</li>
                        </ol>
                    </nav>
                </div>

                {/* Profile */}
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

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}
export default Payments;