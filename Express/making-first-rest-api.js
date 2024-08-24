const express = require("express");

const bodyParser = require("body-parser");
const port = 80;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// we need this to use postman 
app.use(express.json())

app.get("/api/v1/userdata", (req, res) => {
    res.json({
        name: "Saroj",
        email: "findurself",
        pass: "7483292836%^&&"
    })
})

app.post("/api/v1/register", (req, res) => {
    // we'll use postman to make it look like it is coming from form.
  const  userName = req.body.name;
  const  email = req.body.email;
  const  pass = req.body.pass;
// Later on, we'll send this data to our database.

res.json({
    status: true,
    name: userName,
    email: email,
    pass: pass
})
})

app.listen(port, () => console.log("Server Running"));