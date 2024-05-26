const mongoose = require("mongoose");
const Subscriber = require("./models/subscriber");
const data = require("./data");
require("dotenv").config();

// Connect to the MongoDB database using the URI provided in the environment variables
const dbUrl = process.env.DATABASE_URI;
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true, // Use the new URL parser for MongoDB connection strings
    useUnifiedTopology: true, // Use the new topology engine for MongoDB
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

// Define an asynchronous function to refresh the data in the 'subscribers' collection
async function refreshData() {
  try { 
    // Delete all existing documents in the 'subscribers' collection with a write timeout
    await Subscriber.deleteMany({}, { wtimeout: 30000 });

    console.log("Deleted all subscribers");
    const newSubscribers = await Subscriber.insertMany(data);
    console.log(`Added ${newSubscribers.length} new subscribers`);
  } catch (err) {
    console.log("Error refreshing data", err);
  } finally {
    // Disconnect from the database once the data refresh is complete or if an error occurs
    mongoose.disconnect();
    console.log("Disconnected from database");
  }
}

// Call the refreshData function to execute the data refresh process
refreshData();