const mongoose = require("mongoose");
const availableTimeSchema = new mongoose.Schema(
  {
   config: Object,
   interval:String
  },
  {
    collection: "AvailableTime",
  }
);

mongoose.model("AvailableTime", availableTimeSchema);

