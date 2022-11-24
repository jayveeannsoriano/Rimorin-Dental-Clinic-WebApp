const mongoose = require("mongoose");

const UserDentalRecords = new mongoose.Schema(
  {
    patientIDNumber: String,
    appNum: String,
    dentalDate: String,
    dentalDesc: String,
    procedures: Object,
    chartedTeeth: Object,
    dentalStatus: String,
    dentalFile:{
      data: Buffer,
      contentType: String
    }
  },
  {
    collection: "UserDentalRecords",
  },
  );

  const DentalRecordsDB = mongoose.model("UserDentalRecords", UserDentalRecords);
  module.exports = DentalRecordsDB;