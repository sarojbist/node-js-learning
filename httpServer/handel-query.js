const http = require("http");
const fs = require("fs");
const url = require("url"); //to parse urls

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const myurl = url.parse(req.url, true);
  console.log(myurl);
  const log = `${Date.now()}: ${req.method} ${req.url}: request Received \n`;

  // url structure: http://localhost:8000/about?name=saroj
  if (myurl.pathname === "/about") {
    const user = myurl.query.name;
    fs.appendFile(".log.txt", log, () => {
      res.end(`Added data into files into about page ${user}`);
    })
  }
  else {
    fs.appendFile(".log.txt", log, () => {
      res.end("Added data into files");
    })
  }
})
myServer.listen(8000, () => console.log("Hey"));