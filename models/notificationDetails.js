const mongoose = require("mongoose");
const NotificationDetails = new mongoose.Schema(
  {
    pName: String,
    dName: String,
    appNum: String,
    date: String,
    time: String,
    currentDate: String,
    prescriptionNum: String,
    sName: String,
    patientIDnumber: String,
  },
  {
    collection: "NotificationDetails",
  },
);

const NotifDetailsDB = mongoose.model("NotificationDetails", NotificationDetails);
module.exports = NotifDetailsDB;