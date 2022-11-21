const mongoose = require("mongoose");
const availableTimeSchema = new mongoose.Schema(
  {
   config: Object
  },
  {
    collection: "AvailableTime",
  }
);

mongoose.model("AvailableTime", availableTimeSchema);

