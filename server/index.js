const http = require("http");
const fs = require('fs');
const url = require("url");
const express = require("express");
const mongoose = require("mongoose");



const app = express();

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

app.get('/', (request, response) => {
    return response.send('hello from homepage');
});

// here get is method
app.get('/about', (request, response) => {
    return response.send("hello from about page")
});


// here we can direct access to our query paramter of our link 
app.get('/user', (request, response) => {
    return response.send("hello from user " + " hey " + request.query.name + " age " + request.query.age);
});



app.post('/form', (request, respone) => {
    return response.send("about page with post method request")
})

const { error } = require("console");
// const myServer = http.createServer((request, response) => {
//     if (request.url === '/favicon.ico') return response.end();
//     // console.log('new req rec');
//     // console.log(request.headers);
//     const log = `${Date.now()} ${request.method} ${request.url}: New Request Recieved\n`;
//     const myUrl = url.parse(request.url, true);
//     //here true make seperation of different query parameters
//     console.log(myUrl);
//     fs.appendFile('log.txt', log, (error, data) => {
//         // switch (request.url) {
//         // switch (request.url) {
//         switch (myUrl.pathname) {
//             case "/":
//                 response.end("homepage");
//                 break;
//             case "/about":
//                 const username = myUrl.query.myname
//                 response.end(`hi ${username}`);
//                 break;
//             default:
//                 response.end("404 Page not found");
//         }

//         // response.end('Hello from Server');
//     })
//     // console.log(request);
// });

function serverHandler(request, response) {
    if (request.url === '/favicon.ico') return response.end();
    // console.log('new req rec');
    // console.log(request.headers);
    const log = `${Date.now()} ${request.method} ${request.url}: New Request Recieved\n`;
    const myUrl = url.parse(request.url, true);
    //here true make seperation of different query parameters
    console.log(myUrl);
    console.log(`url data : ${JSON.stringify(myUrl, null, 2)}`);
    fs.appendFile('log.txt', log, (error, data) => {
        // switch (request.url) {
        // switch (request.url) {
        switch (myUrl.pathname) {
            case "/":
                response.end("homepage");
                break;
            case "/about":
                const username = myUrl.query.myname
                response.end(`hi ${username}`);
                break;

            case "/signup":
                if (request.method === 'GET') response.end("this is signup form");
                else if (request.method === 'POST') {
                    response.end("success");
                }
            default:
                response.end("404 Page not found");
        }

        // response.end('Hello from Server');
    })
};


// if we are using  function serverhandler
// const myServer = http.createServer(serverHandler);


// if we are using express app
const myServer = http.createServer(app);

// create server using express
app.listen(8000, () => console.log("Server started"));

// creating of server in node js 
// myServer.listen(9000, () => console.log('Server Started'));