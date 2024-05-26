// Import the mongoose library to create a schema and model
const mongoose = require("mongoose");

// Define a schema for the 'Subscriber' model
const susbcriberSchema = new mongoose.Schema({
  name: {
    type: String, // Specify the data type as String
    required: true, // Make this field required
  },
  subscribedChannel: {
    type: String,  // Specify the data type as String
    required: true, // Make this field required
  },
  subscribedDate: {
    type: Date, // Specify the data type as Date
    required: true, // Make this field required
    default: Date.now, // Set the default value to the current date and time
  },
});


// Export the model, making it available for import in other files
module.exports = mongoose.model("Subscriber", susbcriberSchema);