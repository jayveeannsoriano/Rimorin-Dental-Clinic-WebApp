import React from "react";
import Button from "react-bootstrap/Button";

var userInfo = JSON.parse(window.localStorage.getItem("current-session"));
const userRole = userInfo["user_role_id"];
var FollowUpAppointmentRoute = "";
switch (userRole) {
  case 2:
    FollowUpAppointmentRoute =
      "/secretary/appointments/follow-up-appointment";
    break;
  case 3:
    FollowUpAppointmentRoute =
      "/dentist/appointments/follow-up-appointment";
    break;
  case 4:
    FollowUpAppointmentRoute =
      "/admin/follow-up-appointment";
    break;
}

const FollowUp = (patientIDnumber,appNum,dName,dentistIDnumber) => {

  const StringAppNum = JSON.stringify(patientIDnumber,appNum,dName,dentistIDnumber);
  const ConvertStringApp = JSON.parse(StringAppNum);
  const PatientIDNumber = JSON.stringify(ConvertStringApp.patientIDnumber).replace(/"/g, "");
  const PatientPrevNum = JSON.stringify(ConvertStringApp.appNum).replace(/"/g, "");
  const dentistName = JSON.stringify(ConvertStringApp.dName).replace(/"/g, "");
  const dentistIDnum = JSON.stringify(ConvertStringApp.dentistIDnumber).replace(/"/g, "");

  return (
    <>
      <Button className="followUp-button" variant="primary" href={FollowUpAppointmentRoute+"?patientIDValue="+PatientIDNumber.substring(3)+"&patientAppNum="+PatientPrevNum.substring(1)+"&dentistName="+dentistName+"&dentistIDnumber="+dentistIDnum.substring(3)}>
        <i class="fa-regular fa-calendar-pen"></i>Follow Up
      </Button>
    </>
  )
}
export default FollowUp;
