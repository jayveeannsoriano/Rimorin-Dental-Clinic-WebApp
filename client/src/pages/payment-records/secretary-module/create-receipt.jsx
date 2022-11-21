import React, { useState, useMemo, useEffect} from "react";
import { Dropdown, DropdownButton, Tab } from "react-bootstrap";
import { useSearchParams, useLocation } from "react-router-dom";
import '../../../styles/create-rx.css';
import '../../../styles/create-receipt.css';
import "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ProfileWidget from "../../../components/profile-widget";
import Axios from 'axios';
import { Button } from "react-bootstrap";
import TransactionDetails from "../../../components/modals/preview-transaction";
import DropFileInput from "../../../components/dragNdrop";

const createReceipt = () => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const getAppNumber = params.get('patientValue');
    const getPatientID = params.get('patientID');
    const getDateReceipt = params.get('dateValue');
    const StringfyAppNumber = useMemo(()=>JSON.stringify(getAppNumber).replace(/"/g,""));
    const StringfyIDNumber = useMemo(()=>JSON.stringify(getPatientID).replace(/"/g,""));
    const StringfyDate = useMemo(()=>JSON.stringify(getDateReceipt).replace(/"/g,""));
    
    const [transactionDetails, setTransactionDetails] = useState("");
    const [transactionNumber, setTransactionNumber] = useState("");
    const [patientName, setPatientName] = useState("");
    const [patientAddress, setPatientAddress] = useState("");
    const [dateIssued, setDateIssued] = useState("");
    const [serviceValue, setServiceValue] = useState("");
    const [amountValue, setAmountValue] = useState([]);
    const [subTotal, setSubTotal] = useState(0);
    const [amountPaid, setAmountPaid] = useState(0);
    const [paymentType, setPaymentType] = useState("");
    const [signatureValue, setSignatureValue] = useState("");


    //   //
    const [serviceItem, setServiceList] = useState([{serviceValue:"", quantityValue:"",amountToPay:""}]);



    //get amount value sum
    const newAmountArray = serviceItem.map(function(item) {
        return parseInt(item.amountToPay) * parseInt(item.quantityValue)
      })
    var totalAmountPaid =  newAmountArray.reduce((index,value) =>  index = index + value, 0 )
      if(isNaN(totalAmountPaid)){
        totalAmountPaid = 0
      } 
// Add item function
    const handleItemAdd = () => {
        setServiceList([...serviceItem, {serviceValue:"", quantityValue:"",amountToPay:""}]);
    };
// Get values
    const handleGetValues = (e,index)=>{
        const{name,value} = e.target;
        const list = [...serviceItem];
        list[index][name] = value;
        setServiceList(list);
    }

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

//              //

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


    const [recordProcedures,setRecordProcedures] = useState([]);
    console.log(recordProcedures, "this are the vals");
    const addPreviousReceipt = async() =>{

            const response = await Axios.get('http://localhost:3001/getUserDentalRecordforReceipt',{
                params: {
                    patientIDnumber: StringfyIDNumber,
                    appNum:StringfyAppNumber,
                    dateValue:StringfyDate,
                }
            });
            setRecordProcedures(response.data[0].procedures);
    }
    
    useEffect(() => {
    addPreviousReceipt();
    }, []);

      //MAP TWICE
      const [getProcedure, setProcedure] = useState([]);
      const [getPrice, setPrice] = useState([]);
      const procedurePriceTotal = getPrice.reduce((index,value) => index = index + value, 0 )

    useEffect(()=>{
        const price = recordProcedures.map((item) => (
            item.chosen != null ?
            item.chosen.map((proc) =>(
                setPrice(current => [...current, parseInt(proc.price)]),
                setProcedure(current => [...current, proc.procedure])
            ))
            : null
        ))
        }, [recordProcedures])

    
       //total number
       const finalTotal = totalAmountPaid + procedurePriceTotal;

       console.log(StringfyAppNumber);
       console.log(serviceItem);
       console.log(paymentType);
       console.log(amountPaid);
       console.log(recordProcedures);
       console.log(dateIssued)
       console.log(StringfyIDNumber)

    const createReceipt = async () => {



        await Axios.put("http://localhost:3001/updateReceipt", {
            addedItem: serviceItem,
            patientIDnumber:StringfyIDNumber,
            dateIssued: dateIssued,
            paymentType: paymentType,
            totalAmount:finalTotal,
        });
    }



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
                            <ProfileWidget />

                            {/* Receipt*/}
                            <div className="col-xl">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title mb-0">Create E-Receipt</h4>
                                    </div>
                                    {/* Professional Information */}
                                    <div className="card-body-receipt">
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
                                                <div class="col-12 col-md-6 col-lg-4 date-issue">
                                                    <label>Date of Issue</label>
                                                    <input type="date" className="form-control" placeholder="Date" onChange={(e) => { setDateIssued(e.target.value) }} />
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-4 following-info">

                                                </div>
                                            </div>
                                        </div>
                                        {/* End Receipt Information */}


                                        {/* Forms */}
                                                <div class="experience-info">
                                                    <div class="row form-row experience-cont">
                                                        <div class="col-12 col-md-10 col-lg-12">
                                                        {serviceItem.map((singleItem, index) => (
                                                            <div class="row form-row">
                                                                <div class="col-12 col-md-6 col-lg-4">
                                                                    <div class="form-group">
                                                                        <label>Service <span class="text-danger">*</span></label>
                                                                        <input name="serviceValue" type="text" class="form-control" value={singleItem.serviceValue} placeholder="Tooth Extraction" onChange={(e) => {handleGetValues(e,index)}} />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6 col-lg-3">
                                                                    <div class="form-group">
                                                                        <label>Quantity <span class="text-danger">*</span></label>
                                                                        <input name="quantityValue" type="text" class="form-control" placeholder="1" value={singleItem.quantityValue} onChange={(e) => {handleGetValues(e,index)}} />
                                                                    </div>
                                                                </div>
                                                                <div class="col-12 col-md-6 col-lg-3">
                                                                    <div class="form-group">
                                                                        <label>Amount (₱)<span class="text-danger">*</span></label>
                                                                        <input name="amountToPay" type="number" class="form-control" placeholder="500" value={singleItem.amountToPay} onChange={(e) => {handleGetValues(e,index)}}/>
                                                                    </div>
                                                                </div>
                                                                <div class= "col-12 col-md-6 col-lg-2">
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
                                                            <div className="col pay-method">
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
                                                                                        <label>Amount Paid:(₱)<span class="text-danger">*</span></label>
                                                                                        <input type="number" class="form-control" placeholder="500" onChange={(e) => { setAmountPaid(e.target.value) }}/>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col total-bill">
                                                                    <div class="row form-row experience-cont ">
                                                                        <div class="col-8">
                                                                            <table>
                                                                                            <tr>
                                                                                     <th>Procedures</th>
                                                                                      <th>Price</th>
                                                                                        </tr>
                                                                                
                                                                          {getProcedure.map((item) => (
                                                                            <tr key={item}>
                                                                           
                                                                              
                                                                                <td>{item}</td>
                                                                                
                                                                            
                                                                            </tr>
                                                                                ))} 
                                                                            {getPrice.map((item) => (
                                                                            <tr key={item}>
                                                                            <td>{item}</td>
                                                                            </tr>
                                                                             ))}
                                                                            <tr>
                                                                            {serviceItem.map((item) => (
                                                                                 <div key={item}>
                                                                                <td>{item.serviceValue}</td>
                                                                                <td>{item.amountToPay}</td>
                                                                                </div>
                                                                                ))}
                                                                            </tr>
                                                                             </table>
                                                                            <label className="paylabel">Subtotal: </label><br />
                                                                            {/* <input type="text" class="form-control" placeholder="" readonly="readonly" /> */}
                                                                            <label className="paylabel">Discount: </label><br />
                                                                            {/* <input type="text" class="form-contro   l" placeholder="" /> */}
                                                                            <label className="paylabel">Total Amount: {finalTotal}</label><br />
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
                                            <br/>
                                            {/* /Signature */}

                                            {/* Submit Section */}
                                            <div className="row rx-btn col-md-12">
                                                <div className="submit-section">
                                                    <button
                                                        type="reset"
                                                        className="btn btn-secondary submit-btn rx-btn"
                                                    >
                                                        Clear
                                                    </button>
                                                    <TransactionDetails />
                                                    <Button
                                                        type="submit"
                                                        href="/dentist"
                                                        className="btn btn-primary submit-btn rx-btn"
                                                        onClick={() => { createReceipt() }}
                                                    >
                                                        Create
                                                    </Button>
                                                </div>
                                            </div>
                                            {/* /Submit Section */}
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