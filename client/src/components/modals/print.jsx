import React from 'react';
import Button from 'react-bootstrap/Button';
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
