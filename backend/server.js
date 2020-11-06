const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// Custom modules for application
const routes = require('./routes/routes');
// const database = require('./config/database');
// const routes = require('./routes');

// The application's port number
const PORT = process.env.PORT || 8000;

// Run 'dotenv' to render application's environmental variables
require('dotenv').config();

// Render body parser for json objects
app.use(bodyParser.json());
// Render body parser for HTML forms
app.use(bodyParser.urlencoded({ extended: true}));

// // Connect to the database
// database.create_connection();

// Use routes
app.use('/api/', routes)

// Run application on PORT
app.listen(PORT, ()=> console.log(`Divercity application is on port ${PORT} To terminate application, press 'ctrl + c' `));