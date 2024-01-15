const http = require("http");
const fs = require('fs');
const { error } = require("console");
const myServer = http.createServer((request, response) => {
    if (request.url === '/favicon.ico') return response.end();
    // console.log('new req rec');
    // console.log(request.headers)
    const log = `${Date.now()}  ${request.url}: New Request Recieved\n`;
    fs.appendFile('log.txt', log, (error, data) => {
        switch (request.url) {

            case "/":
                response.end("homepage");
                break;
            case "/about":
                response.end("Vikash");
                break;
            default:
                response.end("404 Page not found");
        }

        // response.end('Hello from Server');
    })
    // console.log(request);
});

myServer.listen(8000, () => console.log('Server Started'));