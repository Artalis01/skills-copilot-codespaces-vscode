// Create web server
const express = require('express');
const app = express();

// Create a server
const server = app.listen(3000, () => {
  console.log('Server is running!');
});