import React from 'react';
import Button from 'react-bootstrap/Button';
import { receipt, prescription } from '../../config/FileGeneration.js'

async function Export(willDownload,File,data,info){
  if(File==="prescription"){

    var pathPrescription = new Image("../../../../uploads/e-prescription/"+info[0].patientIDnumber+"_"+data.date+".png");
    var pathing = require("../../assets/img/tempsignaturedentist.png");
    pathPrescription.onload = () => {
      pathing = require("../../../../uploads/e-prescription/"+info[0].patientIDnumber+"_"+data.date+".png");
    }

    prescription(
      data.presDate, 
      info[0].fname+" "+info[0].lname, 
      info[0].age, 
      fixArrayTable(data.presDetails), 
      data.presInstruction,
      "1953834", 
      "2719432", 
      require('../../assets/img/watermark_for_eprescription.png'), 
      require("../../../../uploads/e-prescription/6254_2022-11-25.png"), 
      willDownload
      )
  }else if(File==="receipt"){
    var addProc = [];
    for(let idx=0; idx<data.addedProcedurePrice.length; idx++){
      if(typeof data.addedProcedurePrice[idx].chosen !== 'undefined'){
        for(let idx2=0; idx2<data.addedProcedurePrice[idx].chosen.length; idx2++){
          addProc.push({
            serviceValue: data.addedProcedurePrice[idx].chosen[idx2].procedure,
            quantityValue: "1",
            amountToPay: data.addedProcedurePrice[idx].chosen[idx2].price
          });
        }
      }
    }

    var pathReceipt = new Image("../../../../uploads/e-receipt/"+info[0].patientIDnumber+"_"+data.date+".png");
    var pathing = require("../../assets/img/PT#1324_2022-11-24.png");
    pathReceipt.onload = () => {
      pathing = require("../../../../uploads/e-receipt/"+info[0].patientIDnumber+"_"+data.date+".png");
    }
    if(typeof data.addedItem !== 'undefined'){
      receipt(
        info[0].fname+" "+info[0].lname,
        info[0].house+" "+info[0].brgy+" "+info[0].municipality+" "+info[0].province+" "+info[0].country, 
        data.date,
        data.appNum,
        (addProc.length==0?data.addedItem:[...data.addedItem,...addProc]), 
        (data.discountValue*100), 
        data.paymentType, 
        data.amountPaid, 
        pathing, 
        willDownload)
    }else{
      receipt(
        info[0].fname+" "+info[0].lname,
        info[0].house+" "+info[0].brgy+" "+info[0].municipality+" "+info[0].province+" "+info[0].country, 
        data.date,
        data.appNum,
        (addProc), 
        (data.discountValue*100), 
        data.paymentType, 
        data.amountPaid, 
        pathing, 
        willDownload)
    }
  }
}

function fixArrayTable(arr){
  var newArr = [];
  for(let arrOut = 0 ; arrOut<arr.length ; arrOut++){
    newArr.push([
      arr[arrOut].generic,
      arr[arrOut].brand,
      arr[arrOut].dosage,
      arr[arrOut].duration,
      arr[arrOut].form,
      arr[arrOut].frequency
    ])
  }
  return newArr;
}

const PrintFile = (props) => {
  return (
    <>
        <Button className="export-button" variant="primary" onClick={() => {
          Export(props.data[0],props.data[1],props.data[2],props.data[3])
        }}>
            <i class="bi bi-printer"></i>Print
        </Button>
    </>
  )
}
export default PrintFile;
