// Import the Express module
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a port to listen to
const PORT = process.env.PORT || 3000;

// Define a simple route to respond with "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello Neetesh! My Node.js app is running!');
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
