const http = require("http");
const fs = require('fs');
const url = require("url");
const express = require("express");


const app = express();

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

// 
myServer.listen(9000, () => console.log('Server Started'));