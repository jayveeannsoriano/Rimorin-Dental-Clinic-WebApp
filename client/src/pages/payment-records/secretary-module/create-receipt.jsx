import React, { useState, useMemo } from "react";
import { Dropdown, DropdownButton, Tab } from "react-bootstrap";
import { useSearchParams, useLocation } from "react-router-dom";
import "../../../styles/create-rx.css";
import "../../../styles/create-receipt.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import ProfileWidget from "../../../components/profile-widget";
import Axios from "axios";
import { Button } from "react-bootstrap";
import ViewReceiptFile from "../../../components/modals/preview-transaction";
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
  };
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
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const getAppNumber = params.get("patientValue");
  const StringfyAppNumber = useMemo(() =>
    JSON.stringify(getAppNumber).replace(/"/g, "")
  );
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
  };

  return (
    <>
      <div class="pagetitle">
        <h1>Create Receipt</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="/secretary">Home</a>
            </li>
            <li class="breadcrumb-item active">
              <a href="/secretary/payment-records">Payment Records</a>
            </li>
          </ol>
        </nav>
      </div>

      <section class="content section profile">
        <div className="container-fluid">
          <div className="row">
            <ProfileWidget />

            {/* Create Receipt Inputs */}
            <div className="col-xl-8">
              <div className="card patient-info">
                <h5 className="card-title">Create Receipt</h5>
                <div className="divider"></div>

            <div className="container">
                {/* Transaction Details */}
                <div className="form-section-title">Transaction Details</div>
                <div className="row transaction-details-row">
                  <div className="col-xl-12 col-lg-12 col-md-12 patient-transaction-details">
                    <h6>
                      Transaction #:<span> #TR0002</span>
                    </h6>
                    <h6>
                      Bill to:<span> Shermax Soriano</span>
                    </h6>
                    <h6>
                      Address:<span> #10 Todafuckingmoon</span>
                    </h6>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-5">
                    <label for="dateOfIssue">Date of Issue</label>
                    <input
                      name="dateOfIssue"
                      type="date"
                      className="form-control"
                      placeholder="Date"
                      onChange={(e) => {
                        setDateIssued(e.target.value);
                      }}
                    />
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-5">
                    <label for="ORnum">OR Number:</label>
                    <input
                      name="ORnum"
                      type="text"
                      className="form-control"
                      placeholder="OR #"
                      onChange={(e) => {
                        setOrNum(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* Details of charges */}
                <div className="form-section-title">Details of Charges</div>
                    <div class="row">
                    <div className="col-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 add-item-btn">
                        {/* Add Item Button */}
                        <button
                        onClick={handleItemAdd}
                        className="btn btn-primary add-item-btn"
                        >
                        <i className="fas fa-plus" /> Add Item
                        </button>
                    </div>
                  <div class="col-12 col-md-10 col-lg-12">
                    {serviceItem.map((singleItem, index) => (
                      <div class="row form-row">
                        <div class="col-12 col-md-6 col-lg-4">
                          <div class="form-group">
                            <label>
                              Service <span class="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Tooth Extraction"
                              onChange={(e) => {
                                setServiceValue(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                          <div class="form-group">
                            <label>
                              Quantity <span class="text-danger">*</span>
                            </label>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="1"
                              onChange={(e) => {
                                setQuantityValue(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div class="col-12 col-md-6 col-lg-3">
                            <label>
                              Amount <span class="text-danger">*</span>
                            </label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">₱</span>
                                </div>
                                <input type="text" class="form-control"/>
                                <div class="input-group-append">
                                    <span class="input-group-text">.00</span>
                                </div>
                            </div>
                        </div>
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
                  </div>

                  {/* Total Bill */}
                  <div className="col-xl-10 col-lg-10 col-md-10 total-bill">
                        <label className="paylabel">Subtotal: {subTotal} </label><br />
                        <label className="paylabel">Discount: {discountValue}</label><br />
                        <label className="paylabel">Total Amount: {amountValue}</label><br />
                  </div>

                </div>

                {/* Payment Details */}
                <div className="form-section-title">Payment Details</div>
                <div className="row">
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <Form.Label>Payment Method:<span class="text-danger">*</span></Form.Label>
                    <Form.Select
                      onChange={(e) => {
                        setPaymentType(e.target.value);
                      }}
                    >
                      <option value="" selected disabled>
                        --Select Payment Method--
                      </option>
                      <option value="cash">Cash</option>
                      <option value="e-money">E-Money</option>
                    </Form.Select>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6">
                    <Form.Label>Amount Paid:<span class="text-danger">*</span></Form.Label>
                    <InputGroup className="mb-3">
                      <InputGroup.Text>₱</InputGroup.Text>
                      <Form.Control
                        placeholder="500"
                        onChange={(e) => {
                          setAmountPaid(e.target.value);
                        }}
                      />
                      <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                  </div>
                  <div className="col-xl-4 col-md-4 col-lg-4">
                    <label>Signature<span class="text-danger">*</span></label>
                    <DropFileInput
                      onFileChange={(files) => onFileChange(files)}
                    />
                    <span className="text-muted">Cashier/ Authorized Representative</span>
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
                        <ViewReceiptFile />
                    <button
                      type="submit"
                      className="btn btn-primary submit-btn rx-btn"
                      onClick={() => {
                        createReceipt();
                      }}
                    >
                      Create
                    </button>
                  </div>
                </div>
              </div>
              {/* End of Card */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default createReceipt;
