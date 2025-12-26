"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// loads the entire express library into the express variable.
var express = require("express");
// loads the entire cors library into the cors variable.
var cors = require("cors");
// the express() function creates an instance of an express app,
// loads it into the app variable.
// app is now an object methods like .get(), .post(), .listen(), ,use(), etc.
var app = express();
// saves the port number to the PORT variable.
// the server will listen on PORT 3000 later on
var PORT = 3000;
// allows the cross-origin resourse sharing with the frontend.
app.use(cors());
app.use(express.json());
var users = [];
var notes = [];
// when a get request is made to the root path '/', sends the written response.
app.get('/', function (req, res) {
    res.send('Backend is alive muhfucka');
});
app.post('/signup', function (req, res) {
    // const username = req.body.username;
    // const password = req.body.password;
    //const confirmPassword = req.body.confirmPassword;
    var _a = req.body, username = _a.username, password = _a.password, confirmPassword = _a.confirmPassword;
    // validation
    if (!username || !password || !confirmPassword) {
        return res.status(400).json({ error: 'Username and password required' });
    }
    // check user already exists
    var existingUser = users.find(function (u) { return u.username === username; });
    if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
    }
    // check passwords match
    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords must match' });
    }
    // create new user
    var newUser = { username: username, password: password };
    users.push(newUser);
    res.status(201).json({ success: true, username: username });
    console.log(users);
});
// starts the server to the PORT and starts accepting HTTP requests
app.listen(PORT, function () {
    console.log("Server is running on ".concat(PORT));
});
