const express = require('express');
const users = require('./MOCK_DATA.json');


const app = express();


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
    <ul>${users.map((user) => `<li> ${user.first_name}</li>`).join("")}</ul>`
    response.send(html);
})


app.get('/api/users', (request, response) => {
    response.json(users);
})

app.get('/api/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users.find(user => user.id === id)
    return response.json(user);
});

app.post('/api/users', (request, response) => {
    // TODO : create new user

    response.json({ status: 'pending' });
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

app.route("/api/users/:id").get((request, response) => {
    const id = Number(request.params.id);
    const user = users.find((user) => user.id === id);
    return response.json(user);
})
    .put((request, response) => {
        //Edit user with id 
        return response.json({ status: "pending" })
    })
    .delete((request, response) => {
        //delete this user with id 
        return response.json({ status: "pending" });

    });








const PORT = 8000;

app.listen(PORT, () => console.log(`Server started at : ${PORT}`));