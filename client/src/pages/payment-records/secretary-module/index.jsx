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
            <div class="col-xl">
                <SecTransactionDataTable patientIDNum = {StringfyIDnumber}/>
            </div>
        </>
    );
}
export default Sec_Payments;