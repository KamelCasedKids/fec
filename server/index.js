// import dependencies
const express = require('express');
const path = require('path');

// initialize app
const app = express();

// import helper file paths

// render static files
app.use(express.static(path.resolve(__dirname, '..', 'src', 'dist')));

// setup any middleware
app.use(express.json());

// routes

// set port
const port = 8080;

// connect server
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
