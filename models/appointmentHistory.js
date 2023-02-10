const mongoose = require("mongoose");
const AppointmentHistory = new mongoose.Schema(
  {
    patientIDnumber: String,
    pName: String,
    dName: String,
    appNum: String,
    date: String,
    time: String,
    formattedDate: String,
    appStatus: String,
    reasonCancel: String,
    procedures:Object,
  },
  {
    collection: "AppointmentHistory",
  },
);

const AppHistoryDB = mongoose.model("AppointmentHistory", AppointmentHistory);
module.exports = AppHistoryDB;