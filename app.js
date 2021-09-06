// path module
const path = require('path');
var pathObj = path.parse(__filename);
// console.log(pathObj);

// OS module
const os = require('os');
var totalmem = os.totalmem();
var freemem = os.freemem();
console.log(os.uptime());
// console.log(totalmem);
// console.log(freemem);

// HTTP module
const http = require('http');
const server = http.createServer();
// server.on('connection', (soc) => {
//     console.log("New Connection!!");
//     // console.log(soc); 
// });
// server.listen(3000);
// console.log("Listening on port 3000......");


function sayHi(name) {
    console.log(`Hello there ${name}`);
}
console.log("Finished");