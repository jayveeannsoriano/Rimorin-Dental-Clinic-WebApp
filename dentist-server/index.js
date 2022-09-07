const express = require('express'); // import express
const mongoose = require('mongoose'); //import moongoose
const cors = require('cors');
const app = express();

const AccountModel = require("./models/Account");


app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://dape:PASSWORD@cluster0.i733ls2.mongodb.net/UserAccount?retryWrites=true&w=majority", {
    useNewUrlParser: true,
});

//create (C)
app.post("/insert", async (req, res)=>{

    const title = req.body.title
    const firstName = req.body.firstName
    const account = new AccountModel({Title: title, first_name: firstName});

    try{
        await account.save();
    }catch (err){
        console.log(err);
    }
});

//read (R)
app.get("/read", async (req, res)=>{

 AccountModel.find({}, (err,result) => {
    if (err) {
        res.send(err);
    }

    res.send(result);

 }
 )

});

//connect to localhost
app.listen(3001, ()=>{
    console.log("Server is runnning on port 3001");
});