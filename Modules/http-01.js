// lets try to create different url paths using http method

const http = require("http");

// createServer takes callback function
const server = http.createServer((req, res) => {
// lets 
if(req.url === "/") 
{
    res.write("Im home dude");
    res.end() //end the response
}
else if (req.url === "/about") {
    res.write("I'm about section dude");
    res.end()
}
else {
    res.write("Wrong page");
    res.end(); // End the response after writing
}
});

// port
server.listen(5000, () => {
    console.log("Running")
});