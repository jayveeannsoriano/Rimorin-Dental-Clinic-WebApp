const mongoose = require('mongoose'); //import moongoose
const AccountSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    /*
    avatar_profile: {
        type: binData,
        required: true
    },
    avatar_profile: {
        type: BinData,
        required: true
    },
   
    user_role_id:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    middle_initial:{
        type: String,
        required: true
    },
    suffix:{
        type: String,
        required: true
    },
    email_address:{
        type: String,
        required: true
    },
    street_address:{
        type: String,
        required: true
    },
    brgy:{
        type: String,
        required: true
    },
    province:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    zip_code:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    new_password:{
        type: String,
        required: true
    },

    date_created:{
        type: TimeStamp,
        required: true
    },
    date_updated:{
        type: TimeStamp,
        required: true
    },
    archived:{
        type: bool,
        required: true
    },
    */
});

const Account = mongoose.model("AccountData", AccountSchema);
module.exports = Account;