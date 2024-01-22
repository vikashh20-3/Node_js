const express = require('express');
const mongoose = require('mongoose');
const users = require('./MOCK_DATA.json')

const app = express();


// middleware  or used as a 
app.use(express.urlencoded({ extended: false }));





//connection
mongoose.connect('mongodb://127.0.0.1:27017/demo-app-2')
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



app.post('/api/users', async (request, response) => {
    // TODO : create new user

    const body = request.body;

    // we will check that everything is available
    // if (
    //     !body ||
    //     !body.first_name ||
    //     !body.last_name ||
    //     !body.email ||
    //     !body.gender ||
    //     !body.job_title
    // ) {
    //     console.log()
    //     return response.status(400).json({ msg: "All fields are required..." })
    // }

    try {
        const user = await User.create({
            firstname: body.first_name,
            lastname: body.last_name,
            email: body.email,
            gender: body.gender,
            jobtitle: body.job_title,

        });
        console.log(user)
        // this code is not working
        // return response.send(201).json({ msg: "succes to create a user", user });
        // this is working
        return response.status(201).json({ msg: "succes to create a user", user });
    }
    catch (err) {
        console.error(err);
        return response.status(500).json({ msg: "Internal Server Error" });

    }
});

const PORT = 9000;

app.listen(PORT, () => console.log(`Server started at : ${PORT}`));