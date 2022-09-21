const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema(
    {
        fname: String,
        minitial: String,
        lname: String,
        suffix: String,
        email: String,
        password: {type: String, unique: true},
        gender: String,
        mobile: Int, 
        bday: String,
        house: String,
        brgy: String,
        municipality: String,
        province: String,
        country: String,
        medications: String,
        allergies: String,
        conditions: String,
    }, 
    {
        collection: "UserRegister",
    }
);

mongoose.model("userRegister", userSchema);