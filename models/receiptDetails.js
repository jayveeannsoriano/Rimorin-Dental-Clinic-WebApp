const mongoose = require("mongoose");
const ReceiptDetails = new mongoose.Schema(
  {
    pName: String,
    dName: String,
    appNum: String,
    date: String,
    time: String,
    consultation: String,
    appStatus: String,
    payStatus: String,
    transactionNumber: String,
    addressDetails: String,
    serviceValue: String,
    quantityValue: Number,
    amountToPay: Number,
    subTotal: Number,
    discountValue: Number,
    totalAmount: Number,
    amountPaid: Number,
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