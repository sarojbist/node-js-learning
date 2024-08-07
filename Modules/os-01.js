const os = require("os");

// methods of os
console.log(os.version()); //windows 11 for eg

// user info
const user = os.userInfo();
console.log(user.username);

console.log(os.type()) //name
console.log(os.release()); //release
console.log(os.totalmem()); //memory
console.log(os.release());
