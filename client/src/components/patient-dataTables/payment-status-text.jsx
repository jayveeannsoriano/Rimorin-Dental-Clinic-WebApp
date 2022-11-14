import React from 'react';

function PaymentStatusText(payStats) {

  //Get values 
  const StringfyValues = JSON.stringify(payStats);
  const ConvertStringfyValues = JSON.parse(StringfyValues);
  const PayStatsValue = JSON.stringify(ConvertStringfyValues.payStats).replace(/"/g,"");
  

  return (
    <>
      <span data-status={PayStatsValue} className='payment_status'></span>
    </>
  );
}

export default PaymentStatusText;