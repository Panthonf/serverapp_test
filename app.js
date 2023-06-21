const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Import the route files
const usersRoute = require('./routes/users');
// Import other route files as needed

// Use the routes
app.use('/users', usersRoute);
// Use other routes as needed

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
