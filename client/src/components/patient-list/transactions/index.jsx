import React, {useState, useEffect} from "react";
import Axios from 'axios';
import "../../../styles/patient-profile-widget.css";
import Avatar from 'react-avatar';
import { Button } from "react-bootstrap";

const TransactionPatientProfileWidget = () => {
//temporary list
const [patientReceipt, setPatientReceipt] = useState([]);
const [patientIDNum, setpatientIDNum] = useState();

//App Detail
const getReceiptDetails = async() => {
    try{
        const response = await Axios.get('http://localhost:3001/getUserDetails');
        console.log(response, "Responses");
        setPatientReceipt(response.data);
    }catch (error){
        console.log(error)
    }
}

useEffect(() => {
    getReceiptDetails();
}, []);

const proceedtoPayment = (value) => {
    setpatientIDNum(value.substring(3));
}

    return (
        <>
       
            <div class="col-sm-auto col-md-auto col-lg-auto col-xl-auto">		
            <div class="row">

            {/* replace 'patients' with proper get value variable */}
            {patientReceipt.map((item, index) => (
                <div key={index} class="col-md-6 col-lg-4 col-xl-3">
                    <div class="card widget-profile pat-widget-profile">
                        <div class="card-body">
                            <div class="pro-widget-content">
                                <div class="profile-info-widget">
                                    <a href="#" class="booking-doc-img">
                                        <Avatar name={item.fname} maxInitials={2} round={true} size="100" alt="Avatar" id="avatar-profile"/>
                                    </a>
                                    <div class="profile-det-info">
                                        <h3><a href="#"></a>{item.fname} {item.lname} {item.suffix}</h3>
                                        
                                        <div class="patient-details">
                                            <h5><b>Patient ID :</b>{item.patientIDnumber}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="patient-info">
                                <ul>
                                    <li>Phone <span>{item.mobile}</span></li>
                                    <li>Age <span>38 Years,  {item.gender}</span></li>
                                </ul>
                            </div>

                            <div className="widget-button-container">
                                <Button className="widget-btn" href={"/dentist/payment-records/view-transactions?patientIDNum=" + patientIDNum} onClick={() => proceedtoPayment(item.patientIDnumber)}>
                                    View Transactions
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div> 
        </div> 
        </>
    )
}



export default TransactionPatientProfileWidget;