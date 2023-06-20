import React from "react";
import { Form } from "react-bootstrap";

function TimeScheduleSlotSelect({ day, onChange, disabled }) {
  const times = [
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 AM",
    "12:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ];

  return (
    <Form.Select
      id={day}
      onChange={onChange}
      disabled={disabled}
    >
      <option key={day} selected disabled>Select Time</option>
      {times.map((time) => (
        <option key={day} value={time}>
          {time}
        </option>
      ))}
    </Form.Select>
  );
}

export default TimeScheduleSlotSelect;