import React, {useState, useEffect} from "react";
import Axios from 'axios';
import "../../../styles/patient-profile-widget.css";



// temporary user image
import userimg from '../../../assets/img/profile-img.jpg';
import { Button } from "react-bootstrap";

const TransactionPatientProfileWidget = () => {
//temporary list
const [patientReceipt, setPatientReceipt] = useState([]);
const [patientValue, setPatientValue] = useState("");

//App Detail
const getReceiptDetails = async() => {
    try{
        const response = await Axios.get('http://localhost:3001/getReceiptDetails');
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
  setPatientValue(value.substring(1));
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
                                        <img src={userimg} alt="User Image"/>
                                    </a>
                                    <div class="profile-det-info">
                                        <h3><a href="#"></a>{item.pName}</h3>
                                        
                                        <div class="patient-details">
                                            <h5><b>Appointment Number:</b>{item.appNum}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="patient-info">
                                <ul>
                                    <li>Phone <span>+1 952 001 8563</span></li>
                                    <li>Age <span>38 Years, Male</span></li>
                                </ul>
                            </div>

                            {/* href="/secretary/payment-records/create-receipt" */}
                            <div className="widget-button-container">
                                <Button className="widget-btn" href={"/secretary/payment-records/view-transactions?patientValue=" + patientValue} onClick={() => proceedtoPayment(item.appNum)}>
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