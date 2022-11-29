import React, {useState,useEffect} from "react";
import "react-bootstrap";
import "../styles/profilewidgettwo.css";
import Axios from 'axios';
import Avatar from 'react-avatar';
import { Button } from "react-bootstrap";
import { zipAll } from "../config/FileGeneration";

const ProfileWidgetThree = () => {
    const [patientList, setPatientList] = useState([]);
    const [patientIDNum, setpatientIDNum] = useState();
    const [dentalData, setDentalData] = useState([]);
    const [presData, setPresData] = useState([]);
    const [transData, setTransData] = useState([]);

    const getPatientDetails = async() => {
        try{
            var url = require('url');
            var url_parts = url.parse(window.location.href, true);
            var query = url_parts.query;
            const response = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getPatientInfo', {
                params: {
                    patientIDnumber: query.patientIDNum
                }
            });
            console.log(response, "Responses");
            setPatientList(response.data);
        }catch (error){
            console.log(error)
        }
    }

    //const bdayInput = userInfo['bday']
    //let AgeOut = () => {
    //    return Math.floor((Date.now() - new Date(bdayInput).getTime()) / 31557600000)
    //}

    const getDental = async () => {
        try {
          var url = require("url");
          var url_parts = url.parse(window.location.href, true);
          var query = url_parts.query;
          const response = await Axios.get(
            "https://rimorin-dental-clinic.herokuapp.com/getUserDentalRecord",
            {
                params: {
                    patientIDnumber: query.patientIDNum
                },
            }
          );
          // console.log(response, "Responses");
          setDentalData(response.data);
          console.log(response.data);
          // setFilteredAppointment(response.data);
        } catch (error) {
          console.log(error);
        }
    };

    const getPrescription = async () => {
        try {
            var url = require("url");
            var url_parts = url.parse(window.location.href, true);
            var query = url_parts.query;
            const response = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserEPresRecord', {
                params: {
                    patientIDnumber: query.patientIDNum
                }
            });

            response.data.forEach(data => {
                data = Object.assign(data,{"genericName": "Dr. Pamela Rimorin Concepcion"});
                //appendObjTo(data,{"Created By": "Pamela Rimorin Concepcion"});
            })
            setPresData(response.data);
            console.log(response.data, "Responses");
            // setFilteredAppointment(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    const getTransaction = async() => {
        try{
            var url = require("url");
            var url_parts = url.parse(window.location.href, true);
            var query = url_parts.query;
            const response = await Axios.get('https://rimorin-dental-clinic.herokuapp.com/getUserTransactionPaid',{
                params: {
                    patientIDnumber: query.patientIDNum
                }
            });
            console.log(response, "Responses");
            setTransData(response.data);
            // setFilteredAppointment(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function downloadAll(){
        await Promise.all([getTransaction(), getPrescription(),getDental(),getPatientDetails()]);

        //Create Dental Object
        var treatData = [];
        var proceString = "";
        for (let num = 0; num < dentalData.length; num++) {
            for (let proceNum = 0; proceNum < dentalData[num].procedures.length; proceNum++) {
                if (dentalData[num].procedures[proceNum].hasOwnProperty('chosen')) {
                    for(let chosenNum = 0; chosenNum<dentalData[num].procedures[proceNum].chosen.length ; chosenNum++){
                        proceString += " " + dentalData[num].procedures[proceNum].chosen[chosenNum].procedure;
                    }
                }
            }
        treatData.push([
            dentalData[num].dentalDate,
            (dentalData[num].hasOwnProperty('chartedTeeth') ? dentalData[num].chartedTeeth.join() : ''),
            dentalData[num].dentalDesc, 
            proceString])
        }

        var dentals = Object.assign({"treatData": treatData}, patientList[0]);

        //Create Transaction Object
        /*
        receipt(
			info.fname+" "+info.lname,
			info.house+" "+info.brgy+" "+info.municipality+" "+info.province+" "+info.country, 
			info.date, 
			info.appNum, 
			info.addedItem, 
			(info.discountValue*100), 
			info.paymentType, 
			info.amountPaid, 
			require("../../../../uploads/e-receipt/"+info.patientIDnumber+"_"+info.date+".png"),
			"zip");
        */

            
        var transactions = [];
        for(let transNo=0; transNo<transData.length; transNo++){
            transactions.push(Object.assign(transData[transNo], patientList[0]));
        }

       //Create Prescription Object
       /*
       prescription(
			item.presDate, 
			item.fname+" "+item.lname, 
			item.age, 
			fixArrayTable(item.presDetails), 
			"1953834", 
			"2719432", 
			require('../assets/img/watermark_for_eprescription.png'), 
			require('../assets/img/tempsignaturedentist.png'), 
			"zip"
		);
        */
        var prescriptions = [];
        for(let presNo=0; presNo<presData.length; presNo++){
            prescriptions.push(Object.assign(presData[presNo], patientList[0]));
        }

       zipAll(dentals, transactions, prescriptions);
    }

    useEffect(() => {
        getTransaction();
        getPrescription();
        getDental();
        getPatientDetails();
    }, []);

    const proceedtoViewInfo = (value) => {
        setpatientIDNum(value.substring(3));
    }
    return (
        <>
        {patientList.map((item) => (
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="card widget-profile pat-widget-profile">
                        <div class="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div class="pro-widget-content">
                                    <div class="profile-info-widget">
                                        <a href="#" class="booking-doc-img">
                                            <Avatar name={item.fname} maxInitials={2} round={true} size="70" alt="Avatar" id="avatar-profile"/>
                                        </a>
                                        <div class="profile-det-info">
                                            <h3><a href="#"></a>{item.fname} {item.lname} {item.suffix}</h3>

                                            <div class="patient-details">
                                                <h5><b>Patient ID: </b> {item.patientIDnumber}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="patient-info">
                                    <ul>
                                        <li>Phone <span> (+63) {item.mobile}</span></li>
                                        <li>Age <span>{item.age}, {item.gender}</span></li>
                                    </ul>
                                </div>

                                <div className="widget-button-container">
                                    <Button className="widget-btn" onClick={()=>{
                                        downloadAll();
                                    }}> 
                                        <i class="bi bi-download"></i> Export Records
                                    </Button >
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 label">Birthdate</div>
                                    <div id="birthdate" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-label">
                                        {item.bday}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 label">Address</div>
                                    <div id="address" class="col-xl-8 col-lg-8 col-md-8 col-sm-8 pr-label">
                                        {item.house} {item.brgy}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 label">ZIP Code</div>
                                    <div id="zipcode" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-label">
                                        {item.zipcode}
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 label">Email Address</div>
                                    <div id="email" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-label">
                                        {item.email}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 label">City</div>
                                    <div id="city" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-label">
                                        {item.municipality}
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 label">Gender</div>
                                    <div id="gender" class="col-xl-6 col-lg-6 col-md-6 col-sm-6 pr-label">
                                        {item.gender}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            ))}
        </>
    );
}

export default ProfileWidgetThree;
