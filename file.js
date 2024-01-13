const fs =require("fs");
//synchronous
fs.writeFileSync('./test.txt',' Hello world ');
//asynchronous 
fs.writeFile("./testtwo.txt","hello viku",(err)=>{});