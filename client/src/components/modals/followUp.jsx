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
      "/admin/appointments/follow-up-appointment";
    break;
}

const FollowUp = (patientIDnumber) => {

  const StringAppNum = JSON.stringify(patientIDnumber);
  const ConvertStringApp = JSON.parse(StringAppNum);
  const PatientIDNumber = JSON.stringify(ConvertStringApp.patientIDnumber).replace(/"/g, "");

  return (
    <>
      <Button className="followUp-button" variant="primary" href={FollowUpAppointmentRoute+"?patientIDValue="+PatientIDNumber.substring(3)}>
        <i class="fa-regular fa-calendar-pen"></i>Follow Up
      </Button>
    </>
  )
}
export default FollowUp;
