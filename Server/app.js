// app.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoConnection = require('./config/mongoConfig');
const indexGetApi = require("./router/get")
const indexPostApi = require("./router/post")
// Create Express application
const app = express();
const PORT = 3000;
// Set up body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use('/', indexGetApi);
app.use('/', indexPostApi);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    mongoConnection.connectToMongoDB();
});