//path is one of the built-in modules in nodejs. so it's no need to specify the file when requiring it.
const path = require('path');
 
const fileLocaiton = path.join(__dirname,'app.js');
console.log('is fileLocaiton same as __dirname + app.js?',fileLocaiton===__filename);


const dummyData = path.join(__dirname,'dummyData.txt');
console.log(`The file type of the dummyData file is "${path.extname(dummyData)}"` );

