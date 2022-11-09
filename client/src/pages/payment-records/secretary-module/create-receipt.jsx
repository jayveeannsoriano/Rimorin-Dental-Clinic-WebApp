import React, {useState,useEffect} from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import '../../../styles/create-rx.css';
import '../../../styles/create-receipt.css';
import "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ProfileWidget from "../../../components/profile-widget";
import Axios from 'axios';

const createReceipt = () => {

    const [search, setSearch] = useState("");
    const [getPatientDetails, setPatientDetails] = useState([]);
    const [getPatientAppNum, setGetPatientAppNum] = useState("");
    const [transactionDetails, setTransactionDetails] = useState("");
    const [transactionNumber, setTransactionNumber] = useState("");
    const [patientName, setPatientName] = useState("");
    const [patientAddress, setPatientAddress] = useState("");
    const [dateIssued, setDateIssued] = useState("");
    const [serviceValue, setServiceValue] = useState("");
    const [quantityValue, setQuantityValue] = useState("");
    const [amountValue, setAmountValue] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [discountValue, setDiscountValue] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [amountPaid, setAmountPaid] = useState(0);
    const [signatureValue, setSignatureValue] = useState("");

    const TotalAmountToPay = () => {
        const PWDandSeniorDiscount = 0.20;
        setDiscountValue(PWDandSeniorDiscount);

    // if(may discount){
    //     const discountFormula = amountValue * discountValue;
    //     setTotalAmount(amountValue - discountFormula);
    // }else{
    //     setTotalAmount(amountValue)
    // }

    }

    const getPatientInformation = async() =>{

        try{
            const response = await Axios.get('http://localhost:3001/getAppointmentDetail');
            console.log(response);
            setPatientDetails(response.data);
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getPatientInformation();
    }, []);

    return (
        <>
            {/* Main Wrapper */}
            <div className="main-wrapper">

                {/* Breadcrumb */}
                <div className="breadcrumb-bar">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-md-12 col-12">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <a href="/secretary">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Create E-Receipt
                                        </li>
                                    </ol>
                                </nav>
                                <h2 className="breadcrumb-title">Create E-Receipt</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /Breadcrumb */}

                {/* Page Content */}
                <section className="content section profile">
                    <div className="container-fluid">
                        <div className="row">
                            {/* <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar"> */}
                            {/* Profile Widget */}
                            <ProfileWidget />
                            {/* </div> */}

                            {/* Receipt*/}
                            <div className="col-xl">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Create E-Receipt</h4>
                                    </div>
                                    {/* Professional Information */}
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="biller-info">
                                                    <h5>{transactionDetails}</h5>
                                                    <p> {transactionNumber}</p>
                                                    <p>{patientName}</p>
                                                    <p>{patientAddress}</p>
                                                </div>
                                            </div>
                                            {/* End Profession Information */}

                                            {/* Receipt Information */}
                                            <div className="biller-info">
                                                <h5> E-Receipt Information </h5>
                                                <div class="col-12 col-md-6 col-lg-4">
                                                    <label>Date of Issue</label>
                                                    <input type="date" className="form-control" placeholder="Date" onChange={(e) => {setDateIssued(e.target.value)}}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Receipt Information */}


                                        {/* Forms */}
                                        <div class="card">
                                            <div class="card-body">
                                                {/* <h4 class="card-title">Experience</h4> */}
                                                <div class="experience-info">
                                                    <div class="row form-row experience-cont">
                                                        <div class="col-12 col-md-10 col-lg-12">
                                                            <div class="row form-row">
                                                                <div class="col-12 col-md-6 col-lg-4">
                                                                    <div class="form-group">
                                                                        <label>Service <span class="text-danger">*</span></label>
                                                                        <input type="text" class="form-control" placeholder="Tooth Extraction" onChange={(e)=>{setServiceValue(e.target.value)}}/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6 col-lg-3">
                                                                    <div class="form-group">
                                                                        <label>Quantity <span class="text-danger">*</span></label>
                                                                        <input type="text" class="form-control" placeholder="1" onChange={(e)=>{setQuantityValue(e.target.value)}}/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6 col-lg-3">
                                                                    <div class="form-group">
                                                                        <label>Amount (₱)<span class="text-danger">*</span></label>
                                                                        <input type="number" class="form-control" placeholder="500" onChange={(e)=>{setAmountValue(e.target.value)}}/>
                                                                    </div>
                                                                </div>

                                                                <div class=" col-12 col-md-6 col-lg-2">
                                                                    <div class="add-more">
                                                                        <br />
                                                                        <a href="#" className="btn bg-danger-light trash">
                                                                            <i className="far fa-trash-alt" /></a>
                                                                    </div>
                                                                </div>
                                                                    {/* Add Item */}
                                                                    <div className="add-more-item rx-pr">
                                                                        <a href="javascript:void(0);">
                                                                            <button type="submit" className="btn btn-primary rx-pr">
                                                                                <i className="fas fa-plus" /> Add Item
                                                                            </button>
                                                                            {/* <i className="fas fa-plus-circle" /> Add Item */}
                                                                        </a>
                                                                    </div>
                                                                    {/* /Add Item */}

                                                            </div>
                                                        </div>
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col">
                                                                    <div class="row form-row experience-cont ">
                                                                        <div class="col-8">
                                                                        
                                                                            <label className="paylabel">Subtotal: </label>
                                                                            <input type="text" class="form-control" placeholder="" readonly="readonly" />
                                                                            <label className="paylabel">Discount: </label>
                                                                            <input type="text" class="form-control" placeholder="" />
                                                                            <label className="paylabel">Total Amount: </label>
                                                                            <input type="text" class="form-control" placeholder="" readonly="readonly" />
                                                                        </div>
                                                                    </div>                                                                    
                                                                </div>
                                                                <div className="col">
                                                                    <div class="col-8 col-md-8 col-lg-8 total-pay">
                                                                        <div class="row form-row">
                                                                            <div class="form-group mb-0 rx-pr">

                                                    <div class="row form-row experience-cont">
                                                        <div class="col-12 col-md-10 col-lg-12">
                                                            <label>Subtotal: {subTotal}</label>
                                                            <label>Discount: {discountValue}</label>
                                                            <label>Total Amount: {totalAmount}</label>
                                                        </div>
                                                    </div>
                                                                                <Form.Label>Payment Method:</Form.Label>
                                                                                <Form.Select>
                                                                                    <option value="" selected disabled>--Select Type--</option>
                                                                                    <option value="cash">Cash</option>
                                                                                    <option value="e-money">E-Money</option>
                                                                                </Form.Select>

                                                                                <div class="form-group rx-pr">
                                                                                    <label>Amount Paid(₱)<span class="text-danger">*</span></label>
                                                                                    <input type="number" class="form-control" placeholder="500" />
                                                                                </div>

                                                                    <div class="form-group">
                                                                        <label>Amount Paid:(₱){amountPaid} <span class="text-danger">*</span></label>
                                                                        <input type="number" class="form-control" placeholder="500" onChange={(e)=>{setAmountPaid(e.target.value)}}/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>




                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Receipt Draft */}

                                        {/* Signature */}
                                        <div className="col-12 col-md-6 col-lg-4">
                                            <div className="signature-wrap">
                                                <div className="signature"><span>Upload a file or drag and drop</span></div>

                                                <div className="sign-name">
                                                    <p className="mb-0">{patientName}</p>
                                                    <span className="text-muted">Signature</span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /Signature */}

                                        {/* Submit Section */}
                                        <div className="col-md-12">
                                            <div className="submit-section">
                                                <button
                                                    type="reset"
                                                    className="btn btn-secondary submit-btn rx-btn"
                                                >
                                                    Clear
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary submit-btn rx-btn"
                                                >
                                                    Preview
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary submit-btn rx-btn"
                                                >
                                                    Create
                                                </button>
                                            </div>
                                        </div>
                                        {/* /Submit Section */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                {/* /Page Content */}
            </div>
            {/* /Main Wrapper */}
        </>
    );
}
export default createReceipt;