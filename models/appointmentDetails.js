const mongoose = require("mongoose");
const AppointmentDetails = new mongoose.Schema(
  {
    patientIDnumber: String,
    pName: String,
    dName: String,
    appNum: String,
    date: String,
    time: String,
    consultation: String,
    appStatus: String,
    reasonCancel: String,
  },
  {
    collection: "AppointmentDetails",
  },
);

const AppDetailsDB = mongoose.model("AppointmentDetails", AppointmentDetails);
module.exports = AppDetailsDB;