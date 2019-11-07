const path = require('path');
const express = require('express');

//declarations
const index = path.join(__dirname, '/public');
const app = express();
const public = express.static(index);

//app uses 
app.use(public);

module.exports = app;