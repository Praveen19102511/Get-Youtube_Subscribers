const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
require("dotenv").config();
const port = 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
const dbUrl = process.env.DATABASE_URI;
console.log(dbUrl);
// Check the connection status
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
