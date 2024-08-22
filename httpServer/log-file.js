const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
 const logg = (Date.now() + ":", req.method, req.url + ":", "request Received\n");
    // const log = `${Date.now()}: ${req.method} ${req.url}: request Received \n`;
    fs.appendFile(".log.txt", logg, () => {
        res.end("Added data into files");
    })

})
myServer.listen(8000, () => console.log("Hey"));