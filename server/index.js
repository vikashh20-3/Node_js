const http = require("http");
const fs = require('fs');
const url = require("url");


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
                if(request.method==='GET') response.end("this is signup form");
                else if (request.method==='POST'){
                    response.end("success");
                }  
            default:
                response.end("404 Page not found");
        }

        // response.end('Hello from Server');
    })
};

const myServer = http.createServer((request, response) => { serverHandler (request,response)})
myServer.listen(9000, () => console.log('Server Started'));