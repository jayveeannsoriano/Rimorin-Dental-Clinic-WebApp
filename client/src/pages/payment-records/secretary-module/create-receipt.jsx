import React, { useState, useMemo, useEffect } from "react";
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
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import success from '../../../assets/img/check.png';
import warning from '../../../assets/img/warning.png';

const createReceipt = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const getAppNumber = params.get("patientValue");
  const getPatientID = params.get("patientID");
  const getDateReceipt = params.get("dateValue");
  const ObjectID = params.get("ObjectID");
  const StringfyAppNumber = useMemo(() =>
    JSON.stringify(getAppNumber).replace(/"/g, "")
  );
  const StringfyIDNumber = useMemo(() =>
    JSON.stringify(getPatientID).replace(/"/g, "")
  );
  const StringfyDate = useMemo(() =>
    JSON.stringify(getDateReceipt).replace(/"/g, "")
  );

  const [patientUser, setPatientUser] = useState([]);
  const [patientAddress, setPatientAddress] = useState([]);

  const getUser = async () => {
    try {
      const response = await Axios.get(
        "http://localhost:3001/getUserInfoFollowUp",
        {
          params: {
            patientIDNum: "PT#" + getPatientID,
          },
        }
      );
      setPatientUser(response.data[0].fname + " " + response.data[0].lname);
      setPatientAddress(
        response.data[0].house +
        " ," +
        response.data[0].brgy +
        " ," +
        response.data[0].municipality +
        " ," +
        response.data[0].province +
        " ," +
        response.data[0].country
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  const [getDocName, setDocName] = useState([]);
  const [getDateValue, setDateValue] = useState([]);
  const [getTimeValue, setTimeValue] = useState([]);
  const [getConValue, setConValue] = useState([]);
  const [formattedDate, setFormattedDate] = useState([]);
  console.log(formattedDate)


  const getAppDetails = async () => {
    try {
      const response = await Axios.get(
        "http://localhost:3001/getDetailsforReceipt",
        {
          params: {
            patientIDNum: "PT#" + getPatientID,
            appNumber: "#" + getAppNumber,
          },
        }
      );
      console.log(response.data[0].formattedDate)
      setFormattedDate(response.data[0].formattedDate)
      setDocName(response.data[0].dName)
      setDateValue(response.data[0].date)
      setTimeValue(response.data[0].time)
      setConValue(response.data[0].consultation)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAppDetails();
  }, []);

  console.log("OBJECT", ObjectID);

  const [dateIssue, setDateIssued] = useState("");
  const [paymentType, setPaymentType] = useState("");
  const [amountPaid, setAmountPaid] = useState("");
  const [getOrNum, setOrNum] = useState("");

  //   //
  const [serviceItem, setServiceList] = useState([
    { serviceValue: "", quantityValue: "", amountToPay: "" },
  ]);

  console.log("THIS ARE THE SERVICE ITEM", serviceItem);

  //get amount value sum
  const newAmountArray = serviceItem.map(function (item) {
    return parseInt(item.amountToPay) * parseInt(item.quantityValue);
  });
  var totalAmountPaid = newAmountArray.reduce(
    (index, value) => (index = index + value),
    0
  );
  if (isNaN(totalAmountPaid)) {
    totalAmountPaid = 0;
  }
  // Add item function
  const handleItemAdd = () => {
    setServiceList([
      ...serviceItem,
      { serviceValue: "", quantityValue: "", amountToPay: "" },
    ]);
  };
  // Get values
  const handleGetValues = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceItem];
    list[index][name] = value;
    setServiceList(list);
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

  const [recordProcedures, setRecordProcedures] = useState([]);
  console.log(recordProcedures, "this are the vals");
  const addPreviousReceipt = async () => {
    const response = await Axios.get(
      "http://localhost:3001/getUserDentalRecordforReceipt",
      {
        params: {
          patientIDnumber: StringfyIDNumber,
          appNum: StringfyAppNumber,
          dateValue: StringfyDate,
        },
      }
    );
    setRecordProcedures(response.data[0].procedures);
  };

  useEffect(() => {
    addPreviousReceipt();
  }, []);

  //MAP TWICE
  const [getPrice, setPrice] = useState([]);
  const [dentalItem, setDentalItem] = useState([]);
  const procedurePriceTotal = getPrice.reduce(
    (index, value) => (index = index + value),
    0
  );

  useEffect(() => {
    const price = recordProcedures.map((item) =>
      item.chosen != null
        ? item.chosen.map(
          (proc) => (
            setPrice((current) => [...current, parseInt(proc.price)]),
            setDentalItem((current) => [...current, proc])
          )
        )
        : null
    );
  }, [recordProcedures]);

  var [PWDSeniorDiscount, setPWDSeniorDiscount] = useState();
  if (isNaN(PWDSeniorDiscount)) {
    PWDSeniorDiscount = 0;
  }
  console.log(PWDSeniorDiscount);

  var finalTotal = useState();

  //total numbermodalState
  if (PWDSeniorDiscount == 0) {
    console.log("NO DISCOUNT");
    finalTotal = totalAmountPaid + procedurePriceTotal;
  } else {
    console.log("MAY DISCOUNT LUGI");
    finalTotal = (totalAmountPaid + procedurePriceTotal) * PWDSeniorDiscount;
  }
  console.log(formattedDate)
  console.log(StringfyAppNumber);
  console.log(serviceItem);
  console.log(paymentType);
  console.log(amountPaid);
  console.log(recordProcedures);
  console.log(dateIssue);
  console.log(StringfyIDNumber);
  console.log(getOrNum);

  const [modalState, setModalState] = useState(false);
  const navigate = useNavigate();
  const handleModalClose = () => {
      setModalState(false)
      navigate(-1)
  };

  const handleModal = () => {
      setModalState('show-modal')
    }


  const createUserReceipt = () => {
    Axios.put(
      "http://localhost:3001/getandUpdateReceipt",
      {
        OBJECTID: ObjectID,
        addedItem: serviceItem,
        patientIDnumber: StringfyIDNumber,
        appNum: StringfyAppNumber,
        dateIssued: dateIssue,
        paymentType: paymentType,
        totalAmount: finalTotal,
        officialReceiptNum: getOrNum,
        addedProcedurePrice: recordProcedures,
        amountPaid: amountPaid,
        disValue: PWDSeniorDiscount,
        imgFile: getFile[0],
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    Axios.post(
      "http://localhost:3001/moveToAppointmentHistoryAsFinished",
      {
        patientIDnumber: StringfyIDNumber,
        appNum: StringfyAppNumber,
        pName: patientUser,
        dName: getDocName,
        formattedDate: formattedDate,
        dateVal: getDateValue,
        timeVal: getTimeValue,
        conValue: getConValue,
      }
    );

    // handleShow();
  };

  const handleShow = () => {
    setModalState('show-modal')
  }

  return (
    <>
      <div className="pagetitle">
        <h1>Create Receipt</h1>
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/secretary">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Create E-Receipt</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}

      <section class="content section profile">
        <div className="container-fluid">
          <div className="row">
            <ProfileWidget />

            {/* Create Receipt Inputs */}
            <div className="col-xl-8">
              <div className="card patient-info">
                <h5 className="card-title">Create Receipt</h5>
                <div className="divider"></div>

                <form>
                  <div className="container">
                    {/* Transaction Details */}
                    <div className="form-section-title">
                      Transaction Details
                    </div>
                    <div className="row transaction-details-row">
                      <div className="col-xl-12 col-lg-12 col-md-12 patient-transaction-details">
                        <h6>
                          Appointment #:<span> #{StringfyAppNumber}</span>
                        </h6>
                        <h6>
                          Bill to:<span> {patientUser}</span>
                        </h6>
                        <h6>
                          Address:<span> {patientAddress}</span>
                        </h6>
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-5">
                        <label for="dateOfIssue">
                          Date of Issue: <span class="text-danger">*</span>
                        </label>
                        <input
                          name="dateOfIssue"
                          type="date"
                          className="form-control"
                          placeholder="Date"
                          onChange={(e) => {
                            setDateIssued(e.target.value);
                          }}
                          required
                        />
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-5">
                        <label for="ORnum">
                          OR Number: <span class="text-danger">*</span>
                        </label>
                        <input
                          name="ORnum"
                          type="text"
                          className="form-control"
                          placeholder="OR #"
                          onChange={(e) => {
                            setOrNum(e.target.value);
                          }}
                          required
                        />
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <br />
                        <Form.Label>Discount:</Form.Label>
                        <div className="mb-3">
                          <Form.Check
                            inline
                            label="Senior Citizen"
                            name="group1"
                            type="radio"
                            value={0.2}
                            onChange={(e) => {
                              setPWDSeniorDiscount(e.target.value);
                            }}
                          />
                          <Form.Check
                            inline
                            label="PWD"
                            name="group1"
                            type="radio"
                            value={0.2}
                            onChange={(e) => {
                              setPWDSeniorDiscount(e.target.value);
                            }}
                          />
                          <Form.Check
                            inline
                            label="Not Applicable"
                            name="group1"
                            type="radio"
                            value={0}
                            onChange={(e) => { setPWDSeniorDiscount(e.target.value) }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Details of charges */}
                    <div className="form-section-title">Details of Charges</div>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>Service/s</th>
                          <th style={{ textAlign: "center" }}>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dentalItem.map((item, index) => (
                          <tr key={index}>
                            <td>{item.procedure}</td>
                            <td style={{ textAlign: "center" }}>1</td>
                            <td>{item.price}</td>
                          </tr>
                        ))}
                        {serviceItem.map((item, index) => (
                          <tr key={index}>
                            <th>{item.serviceValue}</th>
                            <th style={{ textAlign: "center" }}>
                              {item.quantityValue}
                            </th>
                            <th>{item.amountToPay}</th>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <br />

                    <div class="row">
                      <div className="col-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 add-button-container">
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
                                  name="serviceValue"
                                  type="text"
                                  class="form-control"
                                  placeholder="Tooth Extraction"
                                  value={singleItem.serviceValue}
                                  required
                                  onChange={(e) => {
                                    handleGetValues(e, index);
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
                                  name="quantityValue"
                                  type="number"
                                  class="form-control"
                                  placeholder="1"
                                  value={singleItem.quantityValue}
                                  onChange={(e) => {
                                    handleGetValues(e, index);
                                  }}
                                  required
                                />
                              </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-3">
                              <label>
                                Amount (₱)<span class="text-danger">*</span>
                              </label>
                              <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">₱</span>
                                </div>
                                <input
                                  name="amountToPay"
                                  type="text"
                                  class="form-control"
                                  placeholder="500"
                                  value={singleItem.amountToPay}
                                  onChange={(e) => {
                                    handleGetValues(e, index);
                                  }}
                                  required
                                />
                                <div class="input-group-append">
                                  <span class="input-group-text">.00</span>
                                </div>
                              </div>
                            </div>
                            <div class="col-12 col-md-6 col-lg-2">
                              <div class="add-more">
                                <br />
                                {serviceItem.length !== 0 && (
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
                        <label className="paylabel">Subtotal: </label>
                        <br />
                        <label className="paylabel">Discount:</label>
                        <br />
                        <label className="paylabel">
                          Total Amount: {finalTotal}
                        </label>
                        <br />
                      </div>
                    </div>

                    {/* Payment Details */}
                    <div className="form-section-title">Payment Details</div>
                    <div className="row">
                      <div className="col-xl-5 col-lg-5 col-md-6">
                        <Form.Label>
                          Payment Method:<span class="text-danger">*</span>
                        </Form.Label>
                        <Form.Select
                          onChange={(e) => {
                            setPaymentType(e.target.value);
                          }}
                          required
                        >
                          <option value="" selected disabled>
                            --Select Payment Method--
                          </option>
                          <option value="cash">Cash</option>
                          <option value="e-money">E-Money</option>
                        </Form.Select>
                      </div>
                      <div className="col-xl-5 col-lg-5 col-md-6">
                        <Form.Label>
                          Amount Paid:<span class="text-danger">*</span>
                        </Form.Label>
                        <InputGroup className="mb-3">
                          <InputGroup.Text>₱</InputGroup.Text>
                          <Form.Control
                            placeholder="500"
                            onChange={(e) => {
                              setAmountPaid(e.target.value);
                            }}
                            required
                          />
                          <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>
                      </div>
                      <div className="col-xl-4 col-md-4 col-lg-4">
                        <label>
                          Signature<span class="text-danger">*</span>
                        </label>
                        <DropFileInput
                          onFileChange={(files) => onFileChange(files)}
                        />
                        <span className="text-muted">
                          Cashier/ Authorized Representative
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="row rx-btn col-md-12">
                    <div className="submit-section">
                      <Button
                        type="submit"
                        className="btn btn-primary submit-btn rx-btn"
                        onClick={() => {
                          createUserReceipt();
                          handleModal();
                        }}
                      >
                        Create Receipt
                      </Button>
                      <button
                        className="btn btn-outline-danger rx-btn"
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* End of Card */}
            </div>
          </div>
        </div>
      </section>

      <Modal
        show={modalState == "show-modal"}
        onHide={handleModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Receipt Created</Modal.Title>
        </Modal.Header>
        <Modal.Body closeButton>
          <img src={success} alt="success image" className='success-img' />
          <p className='modal-txt-cn'>You have created a receipt!</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleModalClose}
            >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default createReceipt;
