const mongoose = require("mongoose");
const AppointmentRequest = new mongoose.Schema(
  {
    patientIDnumber: String,
    pName: String,
    dName: String,
    dentistIDnumber: String,
    appNum: String,
    formattedDate:String,
    date: String,
    time: String,
    consultation: String,
    appStatus: String,
    procedures: Object,
  },
  {
    collection: "AppointmentRequest",
  },
);

const AppRequestDB = mongoose.model("AppointmentRequest", AppointmentRequest);
module.exports = AppRequestDB;