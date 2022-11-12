const mongoose = require("mongoose");

const UserDentalRecords = new mongoose.Schema({
    patientIDNumber: String,
    dentalDate: String,
    dentalDesc: String,
    dentalFile:{
      data: Buffer,
      contentType: String
    }
  },{
    collection: "UserDentalRecords",
  })

  const DentalRecordsDB = mongoose.model("UserDentalRecords", UserDentalRecords);
  module.exports = DentalRecordsDB;