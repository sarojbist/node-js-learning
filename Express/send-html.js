const express = require("express");
const path = require("path");
const bodyParser = require("body-parser")
const port = 80;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// as our form is get method by default, we'll see all data in url.
// but when we make it post method, as soon as we submit the form, our app.post will run.
// Also, we can apply all 4 methods in same url.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
    console.log(__dirname + "/index.html");
});

app.post("/api/v1/login", (req, res) => {
    // res.send("I'm post");
    // Can we get the data of form here? Ans: yes but we need to use middleware to parse the data. without middlewares, we'll get undefined.
    const{name, email, password} = req.body;
    console.log(name);
res.send(`Hello Mr ${name}`)
})

app.get("/api/v1/login", (req, res) => {
    res.send("Hi I'm get")
})

app.listen(port, () => console.log("Server Running"));