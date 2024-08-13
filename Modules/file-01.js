const fs = require("fs");

// simple way of reading a file
// fs.readFile("./content/first.txt","utf-8", (err, data) => {
// console.log(data);
// })

// lets see how we can do same thing with promises
const myPromise = new Promise((resolve, reject) => {
    fs.readFile("./content/first.txt","utf-8", (err, data) => {
       if(err) {
        reject(err);
       }
       else {
        resolve(data);
       }     
})

myPromise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})