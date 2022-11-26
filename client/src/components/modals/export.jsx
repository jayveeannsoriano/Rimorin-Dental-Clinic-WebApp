import Button from 'react-bootstrap/Button';
import React from 'react';
import { receipt, prescription } from '../../config/FileGeneration.js'


async function Export(willDownload,File,data,info){
  if(File==="prescription"){
    //prescription(date, name, age, medArray, ptr, license, backPath, signPath, saveAs)
    console.log(data.presDetails);
    console.log(fixArrayTable(data.presDetails));
    prescription(
      data.presDate, 
      info[0].fname+" "+info[0].lname, 
      info[0].age, 
      fixArrayTable(data.presDetails),
      data.presInstruction, 
      "0123456", 
      "01234", 
      require('../../assets/img/watermark_for_eprescription.png'), 
      require('../../assets/img/tempsignaturedentist.png'), 
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
    console.log(addProc);
    //receipt(name, address, date, transNo, transactionItems, discount, payMethod, paidAmount, signPath , saveAs )
    receipt(
      info[0].fname+" "+info[0].lname,
      info[0].house+" "+info[0].brgy+" "+info[0].municipality+" "+info[0].province+" "+info[0].country, 
      data.date, 
      data.appNum, 
      (addProc.length==0?data.addedItem:[...data.addedItem,...addProc]),  
      (data.discountValue*100), 
      data.paymentType, 
      data.amountPaid, 
      require("../../assets/img/tempsignaturesec.png"), 
      willDownload)
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

const ExportFile = (props) => {
  return (
    <>
        <Button className="export-button" variant="primary" onClick={() => {
          Export(props.data[0],props.data[1],props.data[2],props.data[3])
        }}>
            <i class="bi bi-box-arrow-down"></i>Export
        </Button>
    </>
  )
}
export default ExportFile;
