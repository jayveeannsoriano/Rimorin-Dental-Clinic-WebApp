import React, { useState, useMemo } from "react";
import { Dropdown, DropdownButton, Tab } from "react-bootstrap";
import { useSearchParams, useLocation } from "react-router-dom";
import '../../../styles/create-rx.css';
import '../../../styles/create-receipt.css';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import ProfileWidget from "../../../components/profile-widget";
import Axios from 'axios';
import { Button } from "react-bootstrap";
import TransactionDetails from "../../../components/modals/preview-transaction";
import DropFileInput from "../../../components/dragNdrop";

const createReceipt = () => {
    // Add item function
    const [serviceItem, setServiceList] = useState([{ service: "" }]);
    const handleItemAdd = () => {
        setServiceList([...serviceItem, { service: "" }]);
    };
    //Remove item function
    const handleItemRemove = (index) => {
        const list = [...serviceItem];
        list.splice(index, 1);
        setServiceList(list);
    };
    //drag n drop
    const [getFile, setGetFile] = useState("");
    const onFileChange = (files) => {
        setGetFile(files);
        console.log(files);
    }
    const [transactionDetails, setTransactionDetails] = useState("");
    const [transactionNumber, setTransactionNumber] = useState("");
    const [patientName, setPatientName] = useState("");
    const [patientAddress, setPatientAddress] = useState("");
    const [dateIssued, setDateIssued] = useState("");
    const [orNum, setOrNum] = useState("");
    const [serviceValue, setServiceValue] = useState("");
    const [quantityValue, setQuantityValue] = useState("");
    const [amountValue, setAmountValue] = useState(0);
    const [subTotal, setSubTotal] = useState(0);
    const [discountValue, setDiscountValue] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [amountPaid, setAmountPaid] = useState(0);
    const [paymentType, setPaymentType] = useState("");
    const [signatureValue, setSignatureValue] = useState("");


    // const TotalAmountToPay = () => {
    //     const PWDandSeniorDiscount = 0.20;
    //     setDiscountValue(PWDandSeniorDiscount);

    // if(may discount){
    //     const discountFormula = amountValue * discountValue;
    //     setTotalAmount(amountValue - discountFormula);
    // }else{
    //     setTotalAmount(amountValue)
    // }

    // }
    //get app number
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const getAppNumber = params.get('patientValue');
    const StringfyAppNumber = useMemo(() => JSON.stringify(getAppNumber).replace(/"/g, ""));
    console.log(StringfyAppNumber);

    const createReceipt = async () => {


        console.log(StringfyAppNumber);
        console.log(dateIssued);
        console.log(serviceValue);
        console.log(quantityValue);
        console.log(paymentType);
        console.log(amountValue);

        await Axios.put("http://localhost:3001/updateReceipt", {
            appNum: StringfyAppNumber,
            date: dateIssued,
            serviceValue: serviceValue,
            quantityValue: quantityValue,
            paymentType: paymentType,
            totalAmount: amountValue,
        });
    }

    return (
        <>
            <div class="pagetitle">
                <h1>Create Receipt</h1>
                <nav>
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">
                            <a href="/secretary">Home</a>
                        </li>
                        <li class="breadcrumb-item"><a href="/secretary/payment-records">Patients</a></li>
                        <li class="breadcrumb-item active">
                            <a href="/secretary/payment-records">Payment Records</a>
                        </li>
                    </ol>
                </nav>
            </div>

            <section class="section profile">
                <div className="row">

                    <ProfileWidget />


                    <div className="col-xl-8">
                        <div className="card patient-info">
                            <form>
                                <div className="card-body pt-3">
                                    <h5 className="card-title">Create Receipt</h5>
                                    <div className="divider"></div>

                                    <div className="form-section-title">Transaction Details</div>
                                    <div className="row transaction-details-row">
                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <h6>Transaction #: <span>#TR0002</span></h6>
                                            <h6>Bill to: <span>Shermax Soriano</span></h6>
                                            <h6>Address: <span>#10 Todafuckingmoon</span></h6>
                                        </div>
                                        <div className="col-xl-5 col-lg-5 col-md-5">
                                            <label for="dateOfIssue">Date of Issue</label>
                                            <input name="dateOfIssue" type="date" className="form-control" placeholder="Date" onChange={(e) => { setDateIssued(e.target.value) }} />
                                        </div>
                                        <div className="col-xl-5 col-lg-5 col-md-5">
                                            <label for="ORnum">OR Number:</label>
                                            <input name="ORnum" type="text" className="form-control" placeholder="OR #" onChange={(e) => { setOrNum(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className="form-section-title">Details of Charges</div>
                                    {/* Add Item */}
                                    <div className="row details-of-charges-row experience-cont">
                                        <div className="col-12 col-md-10 col-lg-12">
                                            {serviceItem.map((singleItem, index) => (
                                                <div class="row">
                                                    <div class="col-12 col-md-6 col-lg-4">
                                                        <div class="form-group">
                                                            <label>Service <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" placeholder="Tooth Extraction" onChange={(e) => { setServiceValue(e.target.value) }} />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-3">
                                                        <div class="form-group">
                                                            <label>Quantity <span class="text-danger">*</span></label>
                                                            <input type="text" class="form-control" placeholder="1" onChange={(e) => { setQuantityValue(e.target.value) }} />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-3">
                                                        <div class="form-group">
                                                            <label>Amount (₱)<span class="text-danger">*</span></label>
                                                            <input type="number" class="form-control" placeholder="500" onChange={(e) => { setAmountValue(e.target.value) }} />
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-md-6 col-lg-2">
                                                        <div class="add-more-item rx-pr">
                                                            <br />
                                                            {serviceItem.length !== 1 && (
                                                                <button
                                                                    type="button"
                                                                    onClick={() => handleItemRemove(index)}
                                                                    className="btn bg-danger-light trash"
                                                                >
                                                                    <i className="far fa-trash-alt" />
                                                                </button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                            {/* Add Item button */}
                                            <div className="add-more-item rx-pr">
                                                <button
                                                    type="submit"
                                                    onClick={handleItemAdd}
                                                    className="btn btn-primary rx-pr">
                                                    <i className="fas fa-plus" /> Add Item
                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                    {/* Forms */}
                                    <div class="experience-info">
                                        <div class="row form-row experience-cont">
                                            <div class="col-12 col-md-10 col-lg-12">
                                                {serviceItem.map((singleItem, index) => (
                                                    <div class="row form-row">

                                                        <div class="col-12 col-md-6 col-lg-4">
                                                            <div class="form-group">
                                                                <label>Service <span class="text-danger">*</span></label>
                                                                <input type="text" class="form-control" placeholder="Tooth Extraction" onChange={(e) => { setServiceValue(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-6 col-lg-3">
                                                            <div class="form-group">
                                                                <label>Quantity <span class="text-danger">*</span></label>
                                                                <input type="text" class="form-control" placeholder="1" onChange={(e) => { setQuantityValue(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-6 col-lg-3">
                                                            <div class="form-group">
                                                                <label>Amount (₱)<span class="text-danger">*</span></label>
                                                                <input type="number" class="form-control" placeholder="500" onChange={(e) => { setAmountValue(e.target.value) }} />
                                                            </div>
                                                        </div>
                                                        {/* trash icon */}
                                                        <div class="col-12 col-md-6 col-lg-2">
                                                            <div class="add-more">
                                                                <br />
                                                                {serviceItem.length !== 1 && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleItemRemove(index)}
                                                                        className="btn bg-danger-light trash"
                                                                    >
                                                                        <i className="far fa-trash-alt" />
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}

                                                {/* Add Item */}
                                                <div className="add-more-item rx-pr">
                                                    <button
                                                        type="submit"
                                                        onClick={handleItemAdd}
                                                        className="btn btn-primary rx-pr">
                                                        <i className="fas fa-plus" /> Add Item
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* billing information */}
                                        <div className="bill-container">
                                            <div className="row">
                                                <div className="col pay-method col-md-3 col-lg-3">
                                                    <div class="col-8 col-md-8 col-lg-8">
                                                        <div class="row form-row">
                                                            <div class="form-group mb-0 rx-pr">

                                                                <Form.Label>Payment Method:</Form.Label>
                                                                <Form.Select onChange={(e) => { setPaymentType(e.target.value) }}>
                                                                    <option value="" selected disabled>--Select Type--</option>
                                                                    <option value="cash">Cash</option>
                                                                    <option value="e-money">E-Money</option>
                                                                </Form.Select>

                                                                <div class="form-group">
                                                                    <label>Amount Paid:(₱){amountPaid} <span class="text-danger">*</span></label>
                                                                    <input type="number" class="form-control" placeholder="500" onChange={(e) => { setAmountPaid(e.target.value) }} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col total-bill">
                                                <div class="row form-row experience-cont ">
                                                    <div class="col-8">

                                                        <label className="paylabel">Subtotal: {subTotal} </label><br />
                                                        {/* <input type="text" class="form-control" placeholder="" readonly="readonly" /> */}
                                                        <label className="paylabel">Discount: {discountValue}</label><br />
                                                        {/* <input type="text" class="form-contro   l" placeholder="" /> */}
                                                        <label className="paylabel">Total Amount: {amountValue}</label><br />
                                                        {/* <input type="text" class="form-control" placeholder="" readonly="readonly" /> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Signature */}
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <DropFileInput onFileChange={(files) => onFileChange(files)} />
                                        <div className="sign-name">
                                            <p className="mb-0">{patientName}</p>
                                            <span className="text-muted">Signature</span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-lg-3">
                                        <Form.Label>Amount Paid:</Form.Label>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text>₱</InputGroup.Text>
                                            <Form.Control placeholder="500" onChange={(e) => { setAmountPaid(e.target.value) }} />
                                            <InputGroup.Text>.00</InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                    <div className="col-md-4 col-lg-4">
                                        <DropFileInput onFileChange={(files) => onFileChange(files)} />
                                        <div className="sign-name">
                                            <p className="mb-0">{patientName}</p>
                                            <span className="text-muted">Signature</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="row rx-btn col-md-12">
                                    <div className="submit-section">
                                        <button
                                            type="reset"
                                            className="btn btn-secondary submit-btn rx-btn"
                                        >
                                            Clear
                                        </button>
                                        <TransactionDetails />
                                        <button
                                            type="submit"
                                            className="btn btn-primary submit-btn rx-btn"
                                            onClick={() => { createReceipt() }}
                                        >
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
export default createReceipt;