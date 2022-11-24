const mongoose = require("mongoose");
const PrescriptionDetails = new mongoose.Schema(
  {
    //Professional Information
    ptrNumber: Number,
    licenseNumber: String,
    dentistName: String,
    patientIDNumber: String,
    //Prescription Information
    presDate: String,
    presDetails: Object,
    presInstruction: String,
    presSignature: {
        data: Buffer,
        contentType: String
    },
  },
  {
    collection: "PrescriptionDetails",
  },
);

const PresDetailsDB = mongoose.model("PrescriptionDetails", PrescriptionDetails);
module.exports = PresDetailsDB;