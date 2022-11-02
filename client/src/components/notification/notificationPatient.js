import React from "react";
import NotifyMe from "react-notification-timeline";
import { pName, datetime, appNum } from "./models/appointmentDetails";

const timestampLong = parseInt(datetime);

<NotifyMe
  data= {
    [
      {
        "update": "<Dra. Pamela Concepcion> created you a follow-up appointment on " + datetime + " for " + appNum,
        "timestamp": timestampLong
      },
      {
        "update": "<Dra. Pamela Concepcion> created an e-prescription + <PrescriptionNumber>",
        "timestamp": timestampLong
      },
      {
        "update": "<secretaryName> created a receipt for " + appNum,
        "timestamp": timestampLong
      }
    ]
  }
  storageKey='notific_key'
  notific_key='timestamp'
  notific_value='update'
  heading='Notifications'
  sortedByKey={false}
  showDate={true}
  size={32}
  color="white"
  backgroundColor="#5D6FEF"
  markAsReadFn={() => yourOwnFunctionHandler()}
/>