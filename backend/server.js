const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

// Connect to database.
connectDB();

// Create Express app
const app = express();

// To parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route for CRUD on Goals
app.use('/api/goals', require('./routes/goalRoutes'));

// Middleware for Custom ErrorHandling
app.use(errorHandler);

// Express Application listening for requests on a port number
app.listen(port, () => console.log(`Server Started on port ${port}`));