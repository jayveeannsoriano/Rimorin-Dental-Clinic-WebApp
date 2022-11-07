import React from 'react';

function ApptDetailsText(appStats) {

  //Get values 
  const StringfyValues = JSON.stringify(appStats);
  const ConvertStringfyValues = JSON.parse(StringfyValues);
  const StatsValue = JSON.stringify(ConvertStringfyValues.appStats).replace(/"/g,"");
  

  return (
    <>
    <h3>{StatsValue}</h3>
    </>
  );
}

export default ApptDetailsText;