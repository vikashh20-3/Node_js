const express = require('express');
const mongoose = require('mongoose');
const users = require('./MOCK_DATA.json')

const app = express();


//connection
mongoose.connect('mongodb://127.0.0.1:27017/demo-app-1')
    .then(() => console.log("mongo db connected"))
    .catch(err => console.log("mongo error", err))




// Schema of mongoose 
const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    email: {
        type: String,
        // require: true,
        // this unique will check that entered email should be unique not preused
        // unique: true,

    },
    jobtitle: {
        type: String,
    },
    gender: {
        type: String,
    }


});
const User = mongoose.model("user", userSchema);

