import React from "react";

const AppointmentTerms = () => {
  return (
    <div className="col-11 appt-terms">
      <ol>
        <li>
          <strong>Appointments:</strong> Appointments are subject to
          availability and confirmation. Upon acceptance of your request, a
          consultation fee of <strong>₱300</strong> will be charged.
        </li>
        <li>
          <strong>Cancellation Policy:</strong> If you need to cancel or
          reschedule an appointment, please provide us with at least 24 hours'
          notice. If you cancel less than 24 hours before your appointment, a
          cancellation fee of <strong>₱150</strong> will be charged.
        </li>
        <li>
          <strong>No-Show Policy:</strong> If you do not show up for your
          scheduled appointment, a no-show fee of <strong>₱300</strong> will be
          charged.
        </li>
        <li>
          <strong>Late Policy:</strong> If you arrive late for your appointment,
          we will do our best to accommodate you within the remaining time of
          your appointment. However, please note that the full fee for the
          appointment will still be charged with a late fee of{" "}
          <strong>₱200</strong>.
        </li>
        <li>
          <strong>Payment:</strong> Payment for the cancellation fee, no-show
          fee, and any applicable late fee must be made within{" "}
          <strong>3 days</strong> from the appointment date.
        </li>
        <li>
          <strong>Refunds:</strong> Refunds for any fees paid will only be
          issued in exceptional circumstances and at the sole discretion of
          Rimorin Dental Clinic.
        </li>
        <li>
          <strong>Changes to Terms and Conditions:</strong> We reserve the right
          to modify these terms and conditions at any time without prior notice.
        </li>
      </ol>
    </div>
  );
};

export default AppointmentTerms;
