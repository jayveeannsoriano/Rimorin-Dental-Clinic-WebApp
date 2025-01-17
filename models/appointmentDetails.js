const mongoose = require("mongoose");
const AppointmentDetails = new mongoose.Schema(
  {
    dentistIDnumber: String,
    patientIDnumber: String,
    pName: String,
    dName: String,
    appNum: String,
    date: String,
    time: String,
    formattedDate:String,
    consultation: String,
    appStatus: String,
    reasonCancel: String,
    procedures: Object,
  },
  {
    collection: "AppointmentDetails",
  },
);

const AppDetailsDB = mongoose.model("AppointmentDetails", AppointmentDetails);
module.exports = AppDetailsDB;