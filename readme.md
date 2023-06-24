# Server Application

**This repository contains a server application built with Node.js and MySQL. Follow the instructions below to set up and run the server.**

## Prerequisites

Make sure you have the following software installed on your system:

- **Node.js (v14 or higher)**
- **Docker**

## Setup

**Clone this repository to your local machine:**
<br>git clone https://github.com/Panthonf/serverapp_test.git

**Navigate to the project directory:**
<br>cd serverapp_test

**Install the dependencies:**
<br>npm install

**Start the MySQL server using Docker:**
<br>docker-compose up -d

This command will start the MySQL database server using Docker containers.
Wait for the database server to start. 

**You can check the status by running:**
<br>docker-compose ps

Make sure the MySQL service is running and has a status of "Up".

**Create the necessary database and tables:**
<br>npm run db:migrate

This command will execute the database migrations to create the required tables.

**Run the Server**
**To start the server, run the following command:**
npm start

The server will start running on port 3000. You should see a message in the console indicating that the server is running.

Accessing the API
You can access the API endpoints using a tool like Postman or cURL. Here are a few example requests:

Get all users: GET http://localhost:3000/users
<br>
Get a specific user: GET http://localhost:3000/users/{id}
Replace {id} with the ID of the user you want to retrieve.

**Shutting Down the Server
To stop the server and the MySQL database server, run the following command:**
<br>docker-compose down

This will stop and remove the Docker containers.