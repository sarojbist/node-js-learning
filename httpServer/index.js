const http = require("http");
const fs = require("fs");

// creating a web server
// req and res are callback functions 
// req is a object containing all data of user
// response 
const myServer = http.createServer((req, res) => {
    // console.log('New request received');
    res.end("Hello from server");
  //   const log = `${Date.now()}: ${req.method} ${req.url}: request Received \n`;
  // const myUrl = 
  //   // add data into log file
  //   fs.appendFile(".log.txt", log, (err, data) => {
  //       res.end("Added data into files");
  //   })
    
    // getting ip address of user
    // const ip = req.socket.remoteAddress;
    // console.log(ip)
    
})
// 8000 is port number to run our server
myServer.listen(8000, () => console.log("Hey"));