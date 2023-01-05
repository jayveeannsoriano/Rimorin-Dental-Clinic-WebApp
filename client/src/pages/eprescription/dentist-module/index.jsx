import React, {useMemo} from "react";
import { useSearchParams,useLocation} from "react-router-dom";
import "../../../styles/dental-record.css"
import DentistEPrescriptionDataTable from "./dental-eprescriptiondatatable";

const Eprescription = () => {

    const location = useLocation()
    const paramsID = new URLSearchParams(location.search)
    const getPatientIDNumber = paramsID.get('patientIDNum');
    const StringfyIDnumber = useMemo(()=>JSON.stringify(getPatientIDNumber).replace(/"/g,""));

    return(
        <>
        <div class="col-xl">
            <a href={"/dentist/eprescription/create-eprescription?patientIDNum=" + StringfyIDnumber} className="btn btn-primary">
                <i class="bi bi-plus-lg"></i> Create Prescription
            </a>
            <div className="divider"></div>
            <DentistEPrescriptionDataTable/>
        </div>
        </>
    );
}
export default Eprescription;