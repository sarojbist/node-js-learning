const http = require("http"); //importing http module

// createServer function takes a callback as an argument. This callback function is executed every time the server receives a request.
const myServer = http.createServer((req, res) => {
    console.log(req);
    res.end("Server running");
})
myServer.listen(8000, () => {
    console.log("Server is running on port 8000");
})