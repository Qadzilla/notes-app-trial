// loads the entire express library into the express variable.
import express = require('express');
// loads the entire cors library into the cors variable.
import cors = require('cors');

// the express() function creates an instance of an express app,
// loads it into the app variable.
// app is now an object methods like .get(), .post(), .listen(), ,use(), etc.
const app = express();
// saves the port number to the PORT variable.
// the server will listen on PORT 3000 later on
const PORT = 3000;

// allows the cross-origin resourse sharing with the frontend.
app.use(cors());
app.use(express.json());

interface User {
  username: string;
  password: string;
}

const users: User[] = [];

interface Note {
  id: string;
  title: string;
  content: string;
  userId: string;
}

const notes: Note[] = [];

// when a get request is made to the root path '/', sends the written response.
app.get('/', (req, res) => {
  res.send('Backend is alive muhfucka');
});

app.post('/signup', (req, res) => {
  // const username = req.body.username;
  // const password = req.body.password;
  //const confirmPassword = req.body.confirmPassword;
  const { username, password, confirmPassword } = req.body;
  // validation
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }
  if (!confirmPassword) {
    return res.status(400).json({ error: 'Must confirm password' });
  }
  // check user already exists
  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ error: 'Username already exists' });
  }
  // check passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords must match' });
  }
  // create new user
  const newUser: User = { username, password };
  users.push(newUser);
  res.status(201).json({ success: true, username });
});

// starts the server to the PORT and starts accepting HTTP requests
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
