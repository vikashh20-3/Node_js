const fs =require("fs");
//synchronous
fs.writeFileSync('./test.txt',' Hello world ');
//asynchronous 
fs.writeFile("./testtwo.txt","hello viku",(err)=>{});


// To read file
const result=fs.readFileSync('./contact.txt','utf-8');
console.log(result);

// if you use asynchronous can't be return value in the varible 

fs.readFile('./contact.txt','utf-8',(err,restult)=>{
    if(err){
        console.log("error",err)
    }else{
        console.log(result);
    }
});

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt",' hey there\n');