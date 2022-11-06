const mongoose = require("mongoose");
const PrescriptionDetails = new mongoose.Schema(
  {
    //Professional Information
    ptrNumber: Number,
    licenseNumber: String,
    //Prescription Information
    presDate: String,
    genericName: String,
    brandName: String,
    medDosage: String,
    presForm: String,
    presFrequency: String,
    presDuration: String,
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