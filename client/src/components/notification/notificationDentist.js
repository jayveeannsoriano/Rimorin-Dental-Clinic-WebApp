import React from "react";
import NotifyMe from "react-notification-timeline";
import { pName, datetime, appNum } from "./models/appointmentDetails";

const timestampLong = parseInt(datetime);

<NotifyMe
  data= {
    [
      {
        "update": pName + " requested an appointment on " + datetime,
        "timestamp": timestampLong
      },
      {
        "update": pName + " rebooked an appointment on " + datetime,
        "timestamp": timestampLong
      },
      {
        "update": "<secretaryName> + accepted an appointment " + appNum,
        "timestamp": timestampLong
      },
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