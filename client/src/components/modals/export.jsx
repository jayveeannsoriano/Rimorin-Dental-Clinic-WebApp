import Button from 'react-bootstrap/Button';
import React from 'react';
import { receipt, prescription } from '../../config/FileGeneration.js'


async function Export(willDownload,File,data,info){
  if(File==="prescription"){
    prescription(
      data.presDate, 
      info[0].fname+" "+info[0].lname, 
      16, 
      fixArrayTable(data.presDetails), 
      "1953834", 
      "2719432", 
      require('../../assets/img/watermark_for_eprescription.png'), 
      require('../../assets/img/tempsignaturedentist.png'), 
      willDownload
      )
  }else if(File==="receipt"){
    receipt(
      info[0].fname+" "+info[0].lname,
      info[0].house+" "+info[0].brgy+" "+info[0].municipality+" "+info[0].province+" "+info[0].country, 
      data.date, 
      data.appNum, 
      [[data.serviceValue, data.totalAmount, data.quantityValue]], 
      0, 
      data.paymentType, 
      0, 
      require('../../assets/img/tempsignaturesec.png'), 
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
