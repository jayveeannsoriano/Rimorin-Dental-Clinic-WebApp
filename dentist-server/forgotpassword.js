import mongoose from "mongoose";
import React from "react";

const jwt = require ("jsonwebtoken");

const JWT_SECRET = "sdaikdhjiIHDiu8987J(@?!dDSF8645DAsadA[]ds54aASD()21asd1SFP";
const mongooseURL =
  "mongodb+srv://client:client123@cluster0.lfrgaha.mongodb.net/?retryWrites=true&w=majority";

const user = mongoose.model("UserInfo");

forgotpassword.post ("/forgot-password", async (req, res) => {
   const { email } = req.body;
// this will check whether the user exists or not
try {
    const oldUser = await user.findOne({ email });
    if (!oldUser) {
        return res.json({status:"User does not exist."});
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign( { email: oldUser.email, id: oldUser._id }, secret, {
        expiresIn:"5m",
    });

    const link = `http://localhost:3000/reset-password/${oldUser._id}/${token}`;
    console.log(link);
    } catch (error) {} 
});

forgotpassword.get("/reset=password", async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params); 
})