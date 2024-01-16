const fs = require("fs");
const { resourceUsage } = require("process");


// synchronous
fs.writeFileSync('./test.txt', ' Hello world ');
//asynchronous 
fs.writeFile("./testtwo.txt", "hello viku", (err) => { });


// To read file
const result = fs.readFileSync('./contact.txt', 'utf-8');
console.log(result);

// if you use asynchronous can't be return value in the varible 

fs.readFile('./contact.txt', 'utf-8', (err, restult) => {
    if (err) {
        console.log("error", err)
    } else {
        console.log(result);                      
    }
});

// fs.appendFileSync("./test.txt",new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", ' hey there\n');
fs.cpSync("./test.txt", "./copy.txt");
fs.unlinkSync('./copy.txt')
console.log(fs.statSync('./test.txt'))
console.log(fs.statSync('./test.txt').isFile()) // to check this is file or not 

// fs.mkdirSync("my-docs")
fs.mkdirSync("my-docss/a.txt/b.txt", { recursive: true });
