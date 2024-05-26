const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
require("dotenv").config();
const port = 3000;

// Middleware to parse JSON bodies sent by API clients
app.use(express.json());
// Middleware to parse JSON bodies sent by API clientsapp.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Retrieve the database URI from environment variables
const dbUrl = process.env.DATABASE_URI;
// Retrieve the current state of the MongoDB connection
const dbConnectionStatus = mongoose.connection.readyState;

if (dbConnectionStatus === 1) {
  console.log('Mongoose is connected');
} else {
  console.log('Mongoose is not connected');
}

mongoose.connect(dbUrl)
  .then(() => {
    console.log("Connected to database");

    app.listen(port, () => console.log(`App listening on port ${port}!`));
  })
  .catch((err) => {
    console.error(err);
  });
