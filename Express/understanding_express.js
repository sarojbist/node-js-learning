// Express is a popular web framework for Node.js that simplifies the creation of server-side applications and APIs.
// Express removes all the complexities that comes while creating a server with http module.

// let's import the express 
const express = require("express");

const port = 80;
// initialized a express app
const app = express();
// lets create some get requests
// here get method receives a callback function with two parameters.
// The request is an object, which contains information about incoming requests from header like query parameters.
// Response is an object which is used to sendback the data to client.
app.get("/", (req, res) => {
   res.send("Hlo Home Page"); //sends the response and ends the connection
})

// /about?name=saroj
app.get("/about", (req, res) => {
    res.end(`Hlo About: ${req.query.name}`); 
 })

//  our server is running on the given port
app.listen(port, () => {
    console.log("App is running on ", "http:localhost");
})