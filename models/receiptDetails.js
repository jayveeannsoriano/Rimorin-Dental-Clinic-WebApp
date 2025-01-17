const mongoose = require("mongoose");
const ReceiptDetails = new mongoose.Schema(
  {
    officialReceiptNum: String,
    patientIDnumber: String,
    pName: String,
    dName: String,
    appNum: String,
    date: String,
    dateIssued: String,
    time: String,
    consultation: String,
    appStatus: String,
    payStatus: String,
    discountValue:Number,
    transactionNumber: String,
    addressDetails: String,
    addedItem: Object,
    addedProcedurePrice: Object,
    totalAmount: Number,
    amountPaid: Number,
    paymentType: String,
    receiptSignature: {
      data: Buffer,
      contentType: String
  },

  },
  {
    collection: "ReceiptDetails",
  },
);

const ReceiptDetailsDB = mongoose.model("ReceiptDetails", ReceiptDetails);
module.exports = ReceiptDetailsDB;