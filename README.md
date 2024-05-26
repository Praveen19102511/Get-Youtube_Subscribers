## Get-YouTube-Subscribers

Get-YouTube-Subscribers is a backend capstone project by Almabetter. It is built using Express.js, MongoDB, and Node.js. This system manages YouTube channel subscribers and provides a RESTful API that responds with JSON-formatted data.
## Table of Contents

- [Introduction ](#introduction)
- [API Reference ](#api-reference)
- [Features ](#features)
- [Tech Stack ](#tech-stack)
- [Prerequisites ](#prerequisites)
- [Installation & Run](#installation-and-run)
  


## Introduction
The "Get YouTube Subscribers" application is a RESTful API created using MongoDB in Node.js. Its purpose is to retrieve information about YouTube channel subscribers. The main technologies used to develop this application are Node.js and Express.js, which are used to create API endpoints and handle HTTP requests. In addition, the application uses MongoDB as the database to efficiently store and manage subscriber data.
## API Reference
The following API endpoints are for retrieving subscribers information using the GET method. 

- `/subscribers`: Retrieve a list of all subscribers with their ID, name, subscribed channel, and date.
- `/subscribers/names`: Obtain the subscriber's name and the channel they subscribe to.
- `/subscribers/id`: Access subscriber's information based on their ID.


## Features
Here Are The Key Features Of This Application:
- Seamless Data Retrieval: Easily Fetch Subscribers' Data From YouTube Channels Using Api Endpoints.
- Structured JSON Output: Present Retrieved Data In A Well-organized JSON format For Easy Interpretation.
- Versatile Api Endpoints: Provide Users With Multiple Api Endpoints Catering To Various Data Retrieval Needs.
- Effective Youtube Data Api Integration: Interact Seamlessly With The Youtube Data Api For Accurate Data Retrieval.
- User-friendly Setup: Follow A Straightforward Setup Process, Enabling Swift Tool Utilization.


## Tech Stack
GET-Youtube-Subscriber is built using the following technologies:

Node.js: A runtime environment that executes JavaScript code on the server side.
Express.js: A node.js framework for building web applications and RESTful API.
MongoDB: Is a NoSQL Database system that stores and manages data in JSON-like format.
## Prerequisites

To run this project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation and Run
1. Clone the repository from GitHub:
    ```
    https://github.com/Praveen19102511/Get-Youtube_Subscribers.git
    ```
2. Redirect to the project folder:
    ```
     cd Get-YouTube-Subscribers
    ```
3. Install the required dependencies:
    ```
     npm install
    ```
4. Configure the application:
   - Create a `.env` file in the project's root directory.
   - Add the following environment variables to the `.env` file:
      ```
       PORT=3000                             # The port on which the application will run
       DATABASE_URI= <your_uri_here>         # The MongoDB connection string
      ```
5. Create Database:
    - Inserting subscribers data into MongoDB.
        ```
         npm run createDB
        ```
6. Start server:
    ```
     npm start
    ```
    > [!NOTE]
    > Access the  application in your web browser at `http://localhost:3000` (base URL)



## API Schema Documentation
https://documenter.getpostman.com/view/35103322/2sA3QqhYYr

## Deployed Project
