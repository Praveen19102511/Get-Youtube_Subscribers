const express = require("express");
const Subscriber = require("./src/models/subscriber");
const path = require("path");

// Create an instance of an Express application
const app = express();

// Define the root route and serve the 'index.html' file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
// Define the route to get all subscribers from the database
app.get("/subscribers", async (req, res, next) => {
  try {
     // Retrieve all subscribers using the Subscriber model
    let subscribers = await Subscriber.find();
    // Respond with the subscribers data in JSON format
    res.status(200).json(subscribers);
  } catch (error) {
    // If an error occurs, set the status code to 500 and pass the error to the next middleware
    res.status(500);
    next(error);
  }
});

// Define the route to get names and subscribed channels of all subscribers
app.get("/subscribers/names", async (req, res, next) => {
  try {
    // Retrieve only the 'name' and 'subscribedChannel' fields for all subscribers
    let subscribers = await Subscriber.find(
      {},
      { name: 1, subscribedChannel: 1, _id: 0 }
    );
     // Respond with the filtered subscribers data in JSON format
    res.status(200).json(subscribers);
  } catch (error) {
 // If an error occurs, set the status code to 500 and pass the error to the next middleware
     res.status(500);
    next(error);
  }
});

// Define the route to get a subscriber by their ID
app.get("/subscribers/:id", async (req, res) => {
  try {
    // Extract the ID from the request parameters
    let id = req.params.id;
     // Retrieve the subscriber with the given ID
    let subscriber = await Subscriber.findById(id);
    if (subscriber) {
      // If the subscriber is found, respond with their data in JSON format
        res.status(200).json(subscriber);
      } else {
         // If the subscriber is not found, respond with a 404 status code and a not found message
        res.status(404).json({ message: "Subscriber not found" });
      }
    } catch (error) {
        // If a casting error occurs (e.g., invalid ID format), respond with a 400 status code and the error message
       res.status(400).json({ message: error.message });
    }
  });

module.exports = app;