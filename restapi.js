const express = require('express');
const users = require('./MOCK_DATA.json');
const fs = require("fs");
const mongoose =require("mongoose");    


const app = express();

//MONGODB


//connection
mongoose.connect('mongodb://127.0.0.1:27017/demo-app-1')
    .then(() => console.log("mongo db connected"))
    .catch(err => console.log("mongo error", err))


// Schema of mongoose 
const userSchema = new mongoose.Schema({
    fistname: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        // this unique will check that entered email should be unique not preused
        unique: true,

    },
    jobtitle: {
        type: String,
    },
    gender: {
        type: String,
    },


});
const User = mongoose.model("user", userSchema);


// middleware  or used as a 
app.use(express.urlencoded({ extended: false }));

//creating own middleware 
app.use((req, res, next) => {
    req.myUserName = "vikashh.tech"
    // here next means that after doing this middleware function rutn the next middleware function
    console.log('hello from middleware 1', req.myUserName);
    // return res.json({ msg: 'hello from middleware 1' })

    next();
    // here next function will automatically execute next function
});

app.use((req, res, next) => {
    console.log('hello from next middleware ', req.myUserName)
    // return res.end('hey')
    // end will stopt all the execution here it will not go downside 
    next();
})


// we are designing rest api in json data 

// GET /users - html document render  
// GET /api/users - LIST all users JSON 
// GET /api/user/1 - Get the User with Id 1
// GET /api/user/2 - Get the User with ID 2

// dynamic path parameters 
// GET /id/users/:id
//colon means this is dynamic 
// :id -> this is variable

//POST /api/users =Create a new user
// PATCH /api/user/id -Edit the user with Id 

// DELETE /api/ users/1 -Detele the User with ID 1 



// ROUTES 

app.get('/users', (request, response) => {
    const html = `
    <ul>${users.map((user) =>
        `<li> ${user.first_name}
         </li>`).join("")}
         </ul>`
    response.send(html);
})


app.get('/api/users', (request, response) => {
    console.log("i'm in the get request ", request.myUserName);
    // this header is response header and the keyname (myname) has a value of (vikash) 
    response.setHeader('myName', "vikash");
    // this will show the request header
    console.log(request.headers);

    // custom header
    response.setHeader('X-myName', "vikash");
    // always use X in front of key name it's a good practise
    response.json(users);
})

app.get('/api/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users.find(user => user.id === id)
    return response.json(user);
});

app.post('/api/users', (request, response) => {
    // TODO : create new user

    const body = request.body;
    console.log(body);
    users.push({ ...body, id: users.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return response.json({ status: "success", id: users.length })
    })
});

app.patch('/api/users/:id', (request, response) => {

    // TODO : Edit the user with id 

    response.json({ status: 'pending' });
});

app.delete('/api/users/:id', (request, response) => {

    // TODO : Delete the user with id 

    response.json({ status: 'pending' });
})

// HERE ABOVE WE ARE WRIITING ROUTES EVERYTIME 


// WE CAN ACHIEVE THIS BY GROUPING METHOD 

// app.route("/api/users/:id").get((request, response) => {
//     const id = Number(request.params.id);
//     const user = users.find((user) => user.id === id);
//     return response.json(user);
// })
//     .put((request, response) => {
//         //Edit user with id 
//         return response.json({ status: "pending" })
//     })
//     .delete((request, response) => {
//         //delete this user with id 
//         return response.json({ status: "pending" });

//     });








const PORT = 8000;

app.listen(PORT, () => console.log(`Server started at : ${PORT}`));