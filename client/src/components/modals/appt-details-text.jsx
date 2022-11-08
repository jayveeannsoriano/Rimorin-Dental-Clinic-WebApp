import React from 'react';

function ApptDetailsText(appStats) {

  //Get values 
  const StringfyValues = JSON.stringify(appStats);
  const ConvertStringfyValues = JSON.parse(StringfyValues);
  const StatsValue = JSON.stringify(ConvertStringfyValues.appStats).replace(/"/g,"");
  

  return (
    <>
      <span data-status={StatsValue} className='appt_status'></span>
    </>
  );
}

export default ApptDetailsText;