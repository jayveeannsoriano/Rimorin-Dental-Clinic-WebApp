import React from 'react';

function DentalRecordStatusText(dentalStatus) {

  //Get values 
  const StringfyValues = JSON.stringify(dentalStatus);
  const ConvertStringfyValues = JSON.parse(StringfyValues);
  const DentalStatusValue = JSON.stringify(ConvertStringfyValues.dentalStatus).replace(/"/g,"");
  

  return (
    <>
      <span data-status={DentalStatusValue} className='dental_record_status'></span>
    </>
  );
}

export default DentalRecordStatusText;