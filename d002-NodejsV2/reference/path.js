const path = require('path');
//base file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename).base);

//Concatenate paths
console.log(path.join(__dirname,'test','scenarioOne.html'))