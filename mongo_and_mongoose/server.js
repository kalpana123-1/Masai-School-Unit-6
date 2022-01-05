const express = require('express');

const mongoose = require('mongoose');

const app = express();

const connect = () => {
    return mongoose.connect("mongodb://localhost:27017/test", {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology :true
    })
}

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    email: String,
    gender: String,
    ip_address : String,
    age:Number
})

const user = mongoose.model("user", userSchema);

app.get('./users', (req, res)=>{
    
})


const start = async()=>{
    await connect();
    app.listen(2233, ()=>{
        console.log("Listening on 2233");
    })
}
start();