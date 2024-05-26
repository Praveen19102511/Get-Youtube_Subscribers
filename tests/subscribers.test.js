const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");
require('dotenv').config();

// Set up a connection to the database before each test case
beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URI);
});

// Close the database connection after each test case
afterEach(async () => {
    // Close the mongoose connection
  await mongoose.connection.close();
});



// Test suite for the root route
describe("GET /", () => {
    // Test case for the root route to ensure it returns 'index.html'
  it("should return index.html ", async () => {
        // Make a GET request to the root route
    const res = await request(app).get("/");
        // Expect the response status code to be 200 (OK)
    expect(res.statusCode).toBe(200);
        // Expect the Content-Type header to be 'text/html; charset=UTF-8'
    expect(res.header["content-type"]).toBe("text/html; charset=UTF-8");
  });
});

// Test suite for the '/subscribers' route
describe("GET /subscribers", () => {
    // Test case to check if an array of subscribers is returned
  it("should return an array of subscribers ", async () => {
        // Make a GET request to the '/subscribers' route
    const res = await request(app).get("/subscribers");
        // Expect the response status code to be 200 (OK)
    expect(res.statusCode).toBe(200);
  });
});

// Test suite for the '/subscribers/names' route
describe("GET /subscribers/names", () => {
   // Test case to check if an array of subscribers' names and channels is returned
  it("should return an array of subscribers name and subscribedChannel ", async () => {
        // Make a GET request to the '/subscribers/names' route
    const res = await request(app).get("/subscribers/names");
        // Expect the response status code to be 200 (OK)
    expect(res.statusCode).toBe(200);
        // Expect the response body to have a length greater than 0
    expect(res.body.length).toBeGreaterThan(0);
  });
});

// Test suite for the '/subscribers/:id' route
describe("GET /subscribers/:id", () => {
    // Test case to check if a subscriber with a specific ID is returned
  it("should return an array of subscribers name and subscribedChannel ", async () => {
        // Make a GET request to the '/subscribers/:id' route with a demo ID
    const res = await request(app).get("/subscribers/66509acc5ea9324fa30f4e9f");
        // Expect the response status code to be 200 (OK)
    expect(res.statusCode).toBe(200);
        // Expect the response body to contain the specified ID
    expect(res.body._id).toBe("66509acc5ea9324fa30f4e9f");
  });
});