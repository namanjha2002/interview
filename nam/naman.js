const express = require('express');


const app = express();
app.use(express.json());

// In-memory user database (replace with a proper database in a real-world scenario)
let users = [];


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  
  const anRegex = /^[a-zA-Z0-9]+$/;
  const ulength = username.length;

  if (!anRegex.test(username)) {
    return res.status(400).json({ error: 'Username must be alphanumeric.' });
  }

  if (ulength < 6 || ulength > 12) {
    return res
      .status(400)
      .json({ error: 'Username must be between 6 and 12 characters.' });
  }

  
  const passwordLength = password.length;

  if (passwordLength < 6) {
    return res
      .status(400)
      .json({ error: 'Password must be at least 6 characters long.' });
  }

  

  // Successful login
  res.status(200).json({ message: 'Login successful.' });
});


app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
