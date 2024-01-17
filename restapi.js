const express = require('express');
const users =require('./MOCK_DATA.json');


const app = express();

// we are designing rest api in json data 
// GET /users - LIST all users 
// GET /user/1 - Get the User with Id 1
// GET /user/2 - Get the User with ID 2

//POST /users =Create a new user
// PATCH /user/id -Edit the user with Id 

// DELETE / users/1 -Detele the User with ID 1 



// ROUTES 
app.get ('/users',(request,response)=>{
    response.json(users);
})






const PORT = 8000;

app.listen(PORT, () => console.log(`Server started at : ${PORT}`));